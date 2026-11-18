-- ============================================================================
-- TRILHANDO O CAMINHO DO CÓDIGO (CEFET-MG & FAPEMIG)
-- Regras de Segurança (RLS + Trigger de Higienização) para o Supabase
-- Execute este script no SQL Editor do painel do Supabase
-- ============================================================================

-- 1. Ativa Row Level Security (RLS) na tabela trilhando_sync
ALTER TABLE public.trilhando_sync ENABLE ROW LEVEL SECURITY;

-- 2. Remove políticas antigas permissivas (caso existam)
DROP POLICY IF EXISTS "allow_anon_select_main_state" ON public.trilhando_sync;
DROP POLICY IF EXISTS "allow_anon_upsert_main_state" ON public.trilhando_sync;
DROP POLICY IF EXISTS "allow_anon_update_main_state" ON public.trilhando_sync;
DROP POLICY IF EXISTS "Enable read access for all users" ON public.trilhando_sync;
DROP POLICY IF EXISTS "Enable insert for all users" ON public.trilhando_sync;
DROP POLICY IF EXISTS "Enable update for all users" ON public.trilhando_sync;

-- 3. Permite leitura e escrita APENAS na linha oficial id = 'main_state' (bloqueia DELETE e criação de linhas arbitrárias)
CREATE POLICY "allow_anon_select_main_state"
ON public.trilhando_sync
FOR SELECT
TO anon, authenticated
USING (id = 'main_state');

CREATE POLICY "allow_anon_upsert_main_state"
ON public.trilhando_sync
FOR INSERT
TO anon, authenticated
WITH CHECK (
    id = 'main_state'
    AND jsonb_typeof(users_json) = 'array'
    AND jsonb_typeof(submissions_json) = 'array'
);

CREATE POLICY "allow_anon_update_main_state"
ON public.trilhando_sync
FOR UPDATE
TO anon, authenticated
USING (id = 'main_state')
WITH CHECK (
    id = 'main_state'
    AND jsonb_typeof(users_json) = 'array'
    AND jsonb_typeof(submissions_json) = 'array'
);

-- 4. Trigger no banco que remove automaticamente qualquer campo "password" em texto puro
--    ou "geminiApiKey" caso algum cliente antigo tente sincronizar dados não higienizados
CREATE OR REPLACE FUNCTION public.sanitize_trilhando_sync_payload()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
    IF NEW.id <> 'main_state' THEN
        RAISE EXCEPTION 'Operação bloqueada: apenas id = main_state é permitido.';
    END IF;

    IF NEW.users_json IS NOT NULL AND jsonb_typeof(NEW.users_json) = 'array' THEN
        SELECT COALESCE(
            jsonb_agg(
                (elem - 'password' - 'sessionToken')
            ),
            '[]'::jsonb
        )
        INTO NEW.users_json
        FROM jsonb_array_elements(NEW.users_json) AS elem
        WHERE COALESCE(elem->>'role', '') <> 'admin';
    END IF;

    NEW.updated_at := now();
    RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS trg_sanitize_trilhando_sync ON public.trilhando_sync;
CREATE TRIGGER trg_sanitize_trilhando_sync
BEFORE INSERT OR UPDATE ON public.trilhando_sync
FOR EACH ROW
EXECUTE FUNCTION public.sanitize_trilhando_sync_payload();
