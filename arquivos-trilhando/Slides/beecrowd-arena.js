/**
 * TRILHANDO O CAMINHO DO CÓDIGO — Arena de 100 Desafios Python (Estilo Beecrowd) & Chat Gemini IA 24/7 Integrado
 * CEFET-MG & FAPEMIG
 */

(function () {
    'use strict';

    // =========================================================================
    // 1. SISTEMA DE RANKS / PATENTES (INICIANTE ATÉ LENDA SUPREMA)
    // =========================================================================
    const RANK_TIERS = [
        { level: 1, name: 'Iniciante', badge: '🥉', minXp: 0, maxXp: 59, color: '#94a3b8', bg: 'rgba(148, 163, 184, 0.14)' },
        { level: 2, name: 'Aprendiz Python', badge: '🥈', minXp: 60, maxXp: 149, color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' },
        { level: 3, name: 'Explorador Lógico', badge: '🥇', minXp: 150, maxXp: 299, color: '#10b981', bg: 'rgba(16, 185, 129, 0.14)' },
        { level: 4, name: 'Programador Júnior', badge: '💎', minXp: 300, maxXp: 549, color: '#a78bfa', bg: 'rgba(167, 139, 250, 0.15)' },
        { level: 5, name: 'Desenvolvedor Pleno', badge: '⚡', minXp: 550, maxXp: 899, color: '#06b6d4', bg: 'rgba(6, 182, 212, 0.16)' },
        { level: 6, name: 'Mestre do Código', badge: '🚀', minXp: 900, maxXp: 1399, color: '#f59e0b', bg: 'rgba(245, 158, 11, 0.16)' },
        { level: 7, name: 'Grão-Mestre Python', badge: '🔥', minXp: 1400, maxXp: 2199, color: '#f97316', bg: 'rgba(249, 115, 22, 0.17)' },
        { level: 8, name: 'Lenda Suprema do Python', badge: '👑', minXp: 2200, maxXp: 99999, color: '#ec4899', bg: 'rgba(236, 72, 153, 0.18)' }
    ];

    const CHALLENGE_CATEGORIES = [
        { key: 'all', label: '🌐 Todos os Desafios (100)', short: 'Todos' },
        { key: 'cat1', label: '🌱 Nível 1: Iniciante I (Entrada, Saída & Textos)', short: 'Nível 1 • Iniciante I' },
        { key: 'cat2', label: '🔢 Nível 2: Iniciante II (Matemática & Conversões)', short: 'Nível 2 • Matemática' },
        { key: 'cat3', label: '🔀 Nível 3: Condicionais (if / elif / else)', short: 'Nível 3 • Condicionais' },
        { key: 'cat4', label: '🔁 Nível 4: Laços & Blindagem (for / while / try)', short: 'Nível 4 • Repetição' },
        { key: 'cat5', label: '📦 Nível 5: Listas, Vetores & Matrizes', short: 'Nível 5 • Listas' },
        { key: 'cat6', label: '🔤 Nível 6: Strings, Textos & Criptografia', short: 'Nível 6 • Strings' },
        { key: 'cat7', label: '⚙️ Nível 7: Funções (def) & Dicionários', short: 'Nível 7 • Funções & Dict' },
        { key: 'cat8', label: '🧠 Nível 8: Algoritmos Clássicos & Desafios Gerais', short: 'Nível 8 • Algoritmos' }
    ];

    // =========================================================================
    // 2. BANCO DE 100 DESAFIOS PYTHON (ESTILO BEECROWD #1001 A #1100)
    // =========================================================================
    const PYTHON_CHALLENGES = [
        {
                "id": "bee_1001",
                "number": 1001,
                "title": "Olá, Mundo do Código!",
                "category": "cat1",
                "difficulty": "Iniciante",
                "xp": 15,
                "description": "Bem-vindo à Arena de Desafios Python! 🎉\n\nO seu primeiro exercício é o passo mais famoso de todo programador: faça o computador mostrar na tela exatamente a frase **`Ola, Mundo!`** (sem acento na letra `a`).\n\n• Você **não** precisa ler nada do teclado neste exercício.\n• Basta usar um único comando `print(\"Ola, Mundo!\")`.",
                "inputSpec": "Nenhuma entrada! Você **não** deve usar o comando `input()` neste desafio.",
                "outputSpec": "Mostre na tela exatamente:\n`Ola, Mundo!`",
                "starterCode": "# Desafio #1001 — Olá, Mundo do Código!\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Entrada:** Este exercício não tem entrada de dados (não use `input()`).\n\n🧠 **2. Como resolver:**\n• Para mostrar uma mensagem na tela em Python, usamos o comando `print()` colocando o texto entre aspas.\n\n📤 **3. Saída esperada:**\n• Escreva exatamente: `print(\"Ola, Mundo!\")` (repare que `Ola` não tem acento).",
                "testCases": [
                        {
                                "input": "",
                                "expected": "Ola, Mundo!"
                        },
                        {
                                "input": "",
                                "expected": "Ola, Mundo!"
                        },
                        {
                                "input": "",
                                "expected": "Ola, Mundo!"
                        }
                ]
        },
        {
                "id": "bee_1002",
                "number": 1002,
                "title": "Eco do Robô",
                "category": "cat1",
                "difficulty": "Iniciante",
                "xp": 15,
                "description": "O Robô CEFET está aprendendo a repetir tudo o que escuta! 🤖\n\n• **Passo 1:** Leia uma palavra ou frase digitada usando `texto = input()`.\n• **Passo 2:** Mostre na tela exatamente a mesma mensagem que foi lida usando `print(texto)`.",
                "inputSpec": "**1 linha** contendo uma palavra ou frase (use `input()` vazio, sem texto dentro dos parênteses).",
                "outputSpec": "Mostre exatamente o mesmo texto que foi lido na entrada.",
                "starterCode": "# Desafio #1002 — Eco do Robô\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:**\n• Use `mensagem = input()` (deixe os parênteses vazios `()`, sem escrever perguntas lá dentro).\n\n🧠 **2. Como resolver:**\n• A variável `mensagem` já guardou o texto digitado.\n\n📤 **3. Como mostrar a Saída:**\n• Use `print(mensagem)` para repetir o texto na tela.",
                "testCases": [
                        {
                                "input": "Python",
                                "expected": "Python"
                        },
                        {
                                "input": "Trilhando o Codigo",
                                "expected": "Trilhando o Codigo"
                        },
                        {
                                "input": "CEFET-MG 2026",
                                "expected": "CEFET-MG 2026"
                        }
                ]
        },
        {
                "id": "bee_1003",
                "number": 1003,
                "title": "Saudação ao Herói",
                "category": "cat1",
                "difficulty": "Iniciante",
                "xp": 20,
                "description": "Um novo jogador acabou de entrar no servidor do jogo! 🎮\n\n• **Passo 1:** Leia o nome do jogador usando `nome = input()`.\n• **Passo 2:** Mostre na tela uma mensagem de boas-vindas no formato:\n  `Bem-vindo, NOME!`\n  *(trocando `NOME` pelo nome que foi digitado, sem esquecer da vírgula e do ponto de exclamação `!`)*. ",
                "inputSpec": "**1 linha** com o nome do jogador (texto — use `input()`).",
                "outputSpec": "Mostre na tela no formato:\n`Bem-vindo, NOME!`",
                "starterCode": "# Desafio #1003 — Saudação ao Herói\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:**\n• Leia o nome com `nome = input()`.\n\n🧠 **2. Como resolver:**\n• Use uma **f-string** no `print` para encaixar a variável `nome` dentro da frase: `print(f\"Bem-vindo, {nome}!\")`.\n\n📤 **3. Atenção aos detalhes:**\n• Confira o hífen em `Bem-vindo`, a vírgula `, ` com espaço e o `!` no final.",
                "testCases": [
                        {
                                "input": "Lucas",
                                "expected": "Bem-vindo, Lucas!"
                        },
                        {
                                "input": "Maria",
                                "expected": "Bem-vindo, Maria!"
                        },
                        {
                                "input": "Arqueiro",
                                "expected": "Bem-vindo, Arqueiro!"
                        }
                ]
        },
        {
                "id": "bee_1004",
                "number": 1004,
                "title": "Crachá do Estudante",
                "category": "cat1",
                "difficulty": "Iniciante",
                "xp": 20,
                "description": "Vamos imprimir o crachá oficial dos alunos do curso! 🪪\n\n• **Passo 1:** Na **1ª linha**, leia o **Nome** do aluno com `input()`.\n• **Passo 2:** Na **2ª linha**, leia a **Turma** dele com outro `input()`.\n• **Passo 3:** Junte as duas informações e mostre na tela exatamente no formato:\n  `Aluno: NOME | Turma: TURMA`",
                "inputSpec": "**2 linhas** de texto:\n• **1ª linha:** Nome do aluno\n• **2ª linha:** Turma do aluno",
                "outputSpec": "Mostre em uma única linha no modelo:\n`Aluno: NOME | Turma: TURMA`",
                "starterCode": "# Desafio #1004 — Crachá do Estudante\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:**\n• Como são 2 linhas, use dois comandos `input()` seguidos:\n  `nome = input()`\n  `turma = input()`\n\n🧠 **2. Como montar o texto:**\n• Use f-string para combinar os dois valores: `print(f\"Aluno: {nome} | Turma: {turma}\")`.",
                "testCases": [
                        {
                                "input": "Ana\n8A",
                                "expected": "Aluno: Ana | Turma: 8A"
                        },
                        {
                                "input": "Pedro\n9B",
                                "expected": "Aluno: Pedro | Turma: 9B"
                        },
                        {
                                "input": "Sofia\n7C",
                                "expected": "Aluno: Sofia | Turma: 7C"
                        }
                ]
        },
        {
                "id": "bee_1025",
                "number": 1025,
                "title": "Cartão de Visita Digital",
                "category": "cat1",
                "difficulty": "Iniciante",
                "xp": 20,
                "description": "Crie um gerador de cartão de visita profissional! 💼\n\n• **Passo 1:** Leia **3 linhas** separadas (usando três comandos `input()`): o **Nome**, a **Profissão** e a **Cidade** de uma pessoa.\n• **Passo 2:** Mostre tudo em uma única linha, separando cada informação por ` - ` (espaço, hífen, espaço):\n  `NOME - PROFISSAO - CIDADE`",
                "inputSpec": "**3 linhas** de texto:\n• **1ª linha:** Nome\n• **2ª linha:** Profissão\n• **3ª linha:** Cidade",
                "outputSpec": "Mostre em uma única linha:\n`NOME - PROFISSAO - CIDADE`",
                "starterCode": "# Desafio #1025 — Cartão de Visita Digital\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:**\n• Chame `input()` 3 vezes (uma para cada linha): `nome = input()`, `profissao = input()` e `cidade = input()`.\n\n📤 **2. Como mostrar a Saída:**\n• Use `print(f\"{nome} - {profissao} - {cidade}\")` (repare nos espaços antes e depois de cada `-`).",
                "testCases": [
                        {
                                "input": "Victor\nProgramador\nBelo Horizonte",
                                "expected": "Victor - Programador - Belo Horizonte"
                        },
                        {
                                "input": "Carla\nEngenheira\nContagem",
                                "expected": "Carla - Engenheira - Contagem"
                        },
                        {
                                "input": "Rafael\nCientista\nBetim",
                                "expected": "Rafael - Cientista - Betim"
                        }
                ]
        },
        {
                "id": "bee_1026",
                "number": 1026,
                "title": "Grito de Torcida (Repetição de Texto)",
                "category": "cat1",
                "difficulty": "Iniciante",
                "xp": 20,
                "description": "Em Python, multiplicar um texto por um número inteiro repete esse texto várias vezes seguidas (por exemplo: `\"Oi\" * 3` vira `\"OiOiOi\"`)! 📣\n\n• **Passo 1:** Leia uma palavra curta usando `palavra = input()`.\n• **Passo 2:** Mostre essa palavra repetida **3 vezes grudada** e com um ponto de exclamação **`!`** no final.",
                "inputSpec": "**1 linha** contendo uma palavra curta (texto).",
                "outputSpec": "A palavra repetida 3 vezes sem espaço + `!` no final.\nExemplo: `GolGolGol!`",
                "starterCode": "# Desafio #1026 — Grito de Torcida (Repetição de Texto)\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:**\n• Leia a palavra com `p = input()`.\n\n🧠 **2. Como repetir o texto:**\n• Você pode fazer `p * 3` ou `{p}{p}{p}`.\n\n📤 **3. Como mostrar a Saída:**\n• Use `print(f\"{p * 3}!\")` ou `print(f\"{p}{p}{p}!\")`.",
                "testCases": [
                        {
                                "input": "Gol",
                                "expected": "GolGolGol!"
                        },
                        {
                                "input": "Vai",
                                "expected": "VaiVaiVai!"
                        },
                        {
                                "input": "Py",
                                "expected": "PyPyPy!"
                        }
                ]
        },
        {
                "id": "bee_1027",
                "number": 1027,
                "title": "Troca de Cristais (Swap A e B)",
                "category": "cat1",
                "difficulty": "Iniciante",
                "xp": 20,
                "description": "Você encontrou dois cristais mágicos e precisa inverter a posição deles! 🔮\n\n• **Passo 1:** Leia o texto **A** na 1ª linha e o texto **B** na 2ª linha.\n• **Passo 2:** Imprima os dois em **ordem invertida**:\n  • Na **1ª linha** da saída, mostre o valor de **B**.\n  • Na **2ª linha** da saída, mostre o valor de **A**.",
                "inputSpec": "**2 linhas** de texto:\n• **1ª linha:** Cristal A\n• **2ª linha:** Cristal B",
                "outputSpec": "**2 linhas** na ordem invertida:\n• **1ª linha:** valor de B\n• **2ª linha:** valor de A",
                "starterCode": "# Desafio #1027 — Troca de Cristais (Swap A e B)\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:**\n• `a = input()`\n• `b = input()`\n\n📤 **2. Como mostrar a Saída invertida:**\n• Basta imprimir `b` primeiro e `a` depois em dois comandos `print()`:\n  `print(b)`\n  `print(a)`",
                "testCases": [
                        {
                                "input": "Fogo\nGelo",
                                "expected": "Gelo\nFogo"
                        },
                        {
                                "input": "Sol\nLua",
                                "expected": "Lua\nSol"
                        },
                        {
                                "input": "Primeiro\nSegundo",
                                "expected": "Segundo\nPrimeiro"
                        }
                ]
        },
        {
                "id": "bee_1028",
                "number": 1028,
                "title": "Placar do Campeonato",
                "category": "cat1",
                "difficulty": "Iniciante",
                "xp": 20,
                "description": "Monte o placar eletrônico do campeonato escolar! ⚽\n\n• **Passo 1:** Leia **4 linhas** em sequência:\n  1. Nome do **Time 1**\n  2. Gols do **Time 1**\n  3. Nome do **Time 2**\n  4. Gols do **Time 2**\n• **Passo 2:** Exiba o placar em uma única linha no formato:\n  `TIME1 GOLS1 x GOLS2 TIME2`",
                "inputSpec": "**4 linhas**:\n• **1ª linha:** Nome do Time 1\n• **2ª linha:** Gols do Time 1\n• **3ª linha:** Nome do Time 2\n• **4ª linha:** Gols do Time 2",
                "outputSpec": "Mostre o placar no formato:\n`TIME1 GOLS1 x GOLS2 TIME2`",
                "starterCode": "# Desafio #1028 — Placar do Campeonato\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:**\n• Leia as 4 linhas em 4 variáveis (`time1`, `gols1`, `time2`, `gols2`) usando `input()`.\n\n📤 **2. Como mostrar a Saída:**\n• Use f-string: `print(f\"{time1} {gols1} x {gols2} {time2}\")` (com `x` minúsculo entre os gols).",
                "testCases": [
                        {
                                "input": "Brasil\n3\nFranca\n1",
                                "expected": "Brasil 3 x 1 Franca"
                        },
                        {
                                "input": "CEFET\n5\nRival\n2",
                                "expected": "CEFET 5 x 2 Rival"
                        },
                        {
                                "input": "Leoes\n0\nTigres\n0",
                                "expected": "Leoes 0 x 0 Tigres"
                        }
                ]
        },
        {
                "id": "bee_1029",
                "number": 1029,
                "title": "Gerador de Tag HTML",
                "category": "cat1",
                "difficulty": "Iniciante",
                "xp": 20,
                "description": "Na criação de páginas da internet (HTML), os textos ficam envolvidos por tags de abertura `<tag>` e de fechamento `</tag>`, como `<h1>Bem-vindo</h1>`. 🌐\n\n• **Passo 1:** Na **1ª linha**, leia o nome da `tag` (ex: `h1`, `p`, `b`).\n• **Passo 2:** Na **2ª linha**, leia o `texto` que ficará lá dentro.\n• **Passo 3:** Monte e imprima a tag completa no formato: `<tag>texto</tag>`.",
                "inputSpec": "**2 linhas** de texto:\n• **1ª linha:** Nome da tag (ex: `h1`)\n• **2ª linha:** Conteúdo do texto",
                "outputSpec": "Mostre na tela:\n`<tag>texto</tag>`",
                "starterCode": "# Desafio #1029 — Gerador de Tag HTML\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:**\n• `tag = input()`\n• `texto = input()`\n\n📤 **2. Como mostrar a Saída:**\n• Repare que a tag de fechamento tem uma barra `/`: `print(f\"<{tag}>{texto}</{tag}>\")`.",
                "testCases": [
                        {
                                "input": "h1\nBem-vindo",
                                "expected": "<h1>Bem-vindo</h1>"
                        },
                        {
                                "input": "p\nOla Python",
                                "expected": "<p>Ola Python</p>"
                        },
                        {
                                "input": "b\nDestaque",
                                "expected": "<b>Destaque</b>"
                        }
                ]
        },
        {
                "id": "bee_1030",
                "number": 1030,
                "title": "Coordenadas no Mapa 2D",
                "category": "cat1",
                "difficulty": "Iniciante",
                "xp": 20,
                "description": "Mostre a localização exata do seu personagem no mapa do jogo! 🗺️\n\n• **Passo 1:** Leia a posição **X** na 1ª linha e a posição **Y** na 2ª linha.\n• **Passo 2:** Imprima as coordenadas entre parênteses e separadas por vírgula e espaço:\n  `Posicao: (X, Y)`",
                "inputSpec": "**2 linhas**:\n• **1ª linha:** Coordenada X\n• **2ª linha:** Coordenada Y",
                "outputSpec": "Mostre na tela:\n`Posicao: (X, Y)` *(sem cedilha e sem til em `Posicao`)*",
                "starterCode": "# Desafio #1030 — Coordenadas no Mapa 2D\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:**\n• `x = input()`\n• `y = input()`\n\n📤 **2. Como mostrar a Saída:**\n• Use `print(f\"Posicao: ({x}, {y})\")` (atenção ao espaço depois dos dois-pontos `:` e depois da vírgula `,`).",
                "testCases": [
                        {
                                "input": "10\n25",
                                "expected": "Posicao: (10, 25)"
                        },
                        {
                                "input": "-3\n8",
                                "expected": "Posicao: (-3, 8)"
                        },
                        {
                                "input": "0\n0",
                                "expected": "Posicao: (0, 0)"
                        }
                ]
        },
        {
                "id": "bee_1031",
                "number": 1031,
                "title": "Gerador de E-mail Institucional",
                "category": "cat1",
                "difficulty": "Iniciante",
                "xp": 20,
                "description": "A secretaria da escola precisa gerar o e-mail de cada estudante automaticamente! 📧\n\n• **Passo 1:** Na **1ª linha**, leia o nome de `usuario` (login).\n• **Passo 2:** Na **2ª linha**, leia o `dominio` da escola (ex: `cefetmg.br`).\n• **Passo 3:** Junte os dois com o símbolo **`@`** no meio (sem espaços).",
                "inputSpec": "**2 linhas** de texto:\n• **1ª linha:** Nome do usuário\n• **2ª linha:** Domínio do e-mail",
                "outputSpec": "Mostre o e-mail completo:\n`usuario@dominio`",
                "starterCode": "# Desafio #1031 — Gerador de E-mail Institucional\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:**\n• `usuario = input()`\n• `dominio = input()`\n\n📤 **2. Como mostrar a Saída:**\n• Junte com `@` usando f-string: `print(f\"{usuario}@{dominio}\")`.",
                "testCases": [
                        {
                                "input": "aluno.python\ncefetmg.br",
                                "expected": "aluno.python@cefetmg.br"
                        },
                        {
                                "input": "maria.silva\nescola.edu.br",
                                "expected": "maria.silva@escola.edu.br"
                        },
                        {
                                "input": "dev\ntrilhando.org",
                                "expected": "dev@trilhando.org"
                        }
                ]
        },
        {
                "id": "bee_1032",
                "number": 1032,
                "title": "Anúncio de Missão RPG",
                "category": "cat1",
                "difficulty": "Iniciante",
                "xp": 20,
                "description": "O quadro de avisos da guilda precisa anunciar uma nova aventura! ⚔️\n\n• **Passo 1:** Na **1ª linha**, leia o **nome da missão**.\n• **Passo 2:** Na **2ª linha**, leia a **quantidade de moedas** de recompensa.\n• **Passo 3:** Imprima o anúncio exatamente no formato:\n  `[MISSAO] NOME | Recompensa: MOEDAS moedas`",
                "inputSpec": "**2 linhas**:\n• **1ª linha:** Nome da missão\n• **2ª linha:** Quantidade de moedas",
                "outputSpec": "Mostre na tela:\n`[MISSAO] NOME | Recompensa: MOEDAS moedas`",
                "starterCode": "# Desafio #1032 — Anúncio de Missão RPG\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:**\n• `missao = input()`\n• `moedas = input()`\n\n📤 **2. Como mostrar a Saída:**\n• Use `print(f\"[MISSAO] {missao} | Recompensa: {moedas} moedas\")` (sem til em `MISSAO`).",
                "testCases": [
                        {
                                "input": "Derrotar o Dragao\n500",
                                "expected": "[MISSAO] Derrotar o Dragao | Recompensa: 500 moedas"
                        },
                        {
                                "input": "Coletar Ervas\n50",
                                "expected": "[MISSAO] Coletar Ervas | Recompensa: 50 moedas"
                        },
                        {
                                "input": "Proteger a Vila\n250",
                                "expected": "[MISSAO] Proteger a Vila | Recompensa: 250 moedas"
                        }
                ]
        },
        {
                "id": "bee_1005",
                "number": 1005,
                "title": "Extremamente Básico (Soma)",
                "category": "cat2",
                "difficulty": "Fácil",
                "xp": 25,
                "description": "Inspirado no desafio mais famoso do Beecrowd! ➕\n\n• **Passo 1:** Leia **2 números inteiros** (um em cada linha) usando `int(input())` e guarde nas variáveis `A` e `B`.\n• **Passo 2:** Calcule a soma `X = A + B`.\n• **Passo 3:** Mostre o resultado no formato:\n  `X = RESULTADO`",
                "inputSpec": "**2 linhas**, cada uma com um número inteiro (`A` na 1ª linha e `B` na 2ª linha). Use `int(input())`.",
                "outputSpec": "Mostre `X = ` seguido do valor da soma.\nExemplo: `X = 19`",
                "starterCode": "# Desafio #1005 — Extremamente Básico (Soma)\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:**\n• Como vamos fazer conta de somar, converta cada `input()` para inteiro:\n  `a = int(input())`\n  `b = int(input())`\n\n🧠 **2. Como calcular:**\n• `x = a + b`\n\n📤 **3. Como mostrar a Saída:**\n• `print(f\"X = {x}\")`",
                "testCases": [
                        {
                                "input": "10\n9",
                                "expected": "X = 19"
                        },
                        {
                                "input": "-10\n4",
                                "expected": "X = -6"
                        },
                        {
                                "input": "15\n-7",
                                "expected": "X = 8"
                        }
                ]
        },
        {
                "id": "bee_1006",
                "number": 1006,
                "title": "Produto Simples (Multiplicação)",
                "category": "cat2",
                "difficulty": "Fácil",
                "xp": 25,
                "description": "Em programação, chamamos o resultado de uma multiplicação de **produto** e usamos o asterisco **`*`** para multiplicar! ✖️\n\n• **Passo 1:** Leia **2 números inteiros** (um em cada linha) com `int(input())`.\n• **Passo 2:** Multiplique o primeiro pelo segundo (`prod = a * b`).\n• **Passo 3:** Mostre o resultado no formato:\n  `PROD = RESULTADO`",
                "inputSpec": "**2 linhas**, cada uma com um número inteiro (use `int(input())`).",
                "outputSpec": "Mostre na tela:\n`PROD = RESULTADO`",
                "starterCode": "# Desafio #1006 — Produto Simples (Multiplicação)\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:**\n• `a = int(input())`\n• `b = int(input())`\n\n🧠 **2. Como calcular:**\n• Multiplique usando `*`: `prod = a * b`.\n\n📤 **3. Como mostrar a Saída:**\n• `print(f\"PROD = {prod}\")`",
                "testCases": [
                        {
                                "input": "3\n9",
                                "expected": "PROD = 27"
                        },
                        {
                                "input": "-30\n10",
                                "expected": "PROD = -300"
                        },
                        {
                                "input": "0\n9",
                                "expected": "PROD = 0"
                        }
                ]
        },
        {
                "id": "bee_1007",
                "number": 1007,
                "title": "Dobro e Triplo de um Número",
                "category": "cat2",
                "difficulty": "Fácil",
                "xp": 25,
                "description": "Vamos calcular múltiplos de um número! 🔢\n\n• **Passo 1:** Leia um único número inteiro `N` usando `int(input())`.\n• **Passo 2:** Calcule o **dobro** (`N * 2`) e o **triplo** (`N * 3`).\n• **Passo 3:** Mostre o resultado em **duas linhas separadas**:\n  • **1ª linha:** `Dobro: X`\n  • **2ª linha:** `Triplo: Y`",
                "inputSpec": "**1 linha** contendo um número inteiro `N` (use `int(input())`).",
                "outputSpec": "**2 linhas**:\n`Dobro: X`\n`Triplo: Y`",
                "starterCode": "# Desafio #1007 — Dobro e Triplo de um Número\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:**\n• `n = int(input())`\n\n🧠 **2. Como calcular:**\n• `dobro = n * 2`\n• `triplo = n * 3`\n\n📤 **3. Como mostrar a Saída:**\n• Use dois comandos `print`:\n  `print(f\"Dobro: {dobro}\")`\n  `print(f\"Triplo: {triplo}\")`",
                "testCases": [
                        {
                                "input": "5",
                                "expected": "Dobro: 10\nTriplo: 15"
                        },
                        {
                                "input": "12",
                                "expected": "Dobro: 24\nTriplo: 36"
                        },
                        {
                                "input": "0",
                                "expected": "Dobro: 0\nTriplo: 0"
                        }
                ]
        },
        {
                "id": "bee_1008",
                "number": 1008,
                "title": "Média Escolar Simples",
                "category": "cat2",
                "difficulty": "Fácil",
                "xp": 30,
                "description": "Calcule a média das duas provas de um estudante! 📝\n\n• **Passo 1:** Leia **2 notas com casas decimais** (uma por linha) usando `float(input())`.\n• **Passo 2:** Calcule a média somando as duas notas entre parênteses e dividindo por 2:\n  `media = (nota1 + nota2) / 2`\n• **Passo 3:** Mostre o resultado com **1 casa decimal** (`{media:.1f}`) no formato:\n  `MEDIA = X.X`",
                "inputSpec": "**2 linhas**, cada uma com um número decimal (`float`) representando uma nota.",
                "outputSpec": "Mostre `MEDIA = ` seguido da média com **1 casa decimal** (use `:.1f`).\nExemplo: `MEDIA = 6.0`",
                "starterCode": "# Desafio #1008 — Média Escolar Simples\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:**\n• Como as notas têm ponto decimal, use `float()`:\n  `n1 = float(input())`\n  `n2 = float(input())`\n\n🧠 **2. Como calcular:**\n• Coloque parênteses na soma: `media = (n1 + n2) / 2`.\n\n📤 **3. Como formatar 1 casa decimal:**\n• Use `print(f\"MEDIA = {media:.1f}\")`.",
                "testCases": [
                        {
                                "input": "5.0\n7.1",
                                "expected": "MEDIA = 6.0"
                        },
                        {
                                "input": "0.0\n7.1",
                                "expected": "MEDIA = 3.5"
                        },
                        {
                                "input": "10.0\n8.0",
                                "expected": "MEDIA = 9.0"
                        }
                ]
        },
        {
                "id": "bee_1033",
                "number": 1033,
                "title": "Antecessor e Sucessor",
                "category": "cat2",
                "difficulty": "Fácil",
                "xp": 25,
                "description": "Todo número inteiro tem dois vizinhos: o **antecessor** (que vem imediatamente antes: `N - 1`) e o **sucessor** (que vem imediatamente depois: `N + 1`). ↔️\n\n• **Passo 1:** Leia um número inteiro `N` com `int(input())`.\n• **Passo 2:** Mostre na mesma linha o antecessor e o sucessor no formato:\n  `ANTECESSOR = X | SUCESSOR = Y`",
                "inputSpec": "**1 linha** com um número inteiro `N`.",
                "outputSpec": "Mostre em uma linha:\n`ANTECESSOR = X | SUCESSOR = Y`",
                "starterCode": "# Desafio #1033 — Antecessor e Sucessor\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:**\n• `n = int(input())`\n\n🧠 **2. Como calcular:**\n• `ant = n - 1` e `suc = n + 1`.\n\n📤 **3. Como mostrar a Saída:**\n• `print(f\"ANTECESSOR = {ant} | SUCESSOR = {suc}\")`",
                "testCases": [
                        {
                                "input": "10",
                                "expected": "ANTECESSOR = 9 | SUCESSOR = 11"
                        },
                        {
                                "input": "0",
                                "expected": "ANTECESSOR = -1 | SUCESSOR = 1"
                        },
                        {
                                "input": "-5",
                                "expected": "ANTECESSOR = -6 | SUCESSOR = -4"
                        }
                ]
        },
        {
                "id": "bee_1034",
                "number": 1034,
                "title": "Área e Perímetro do Retângulo",
                "category": "cat2",
                "difficulty": "Fácil",
                "xp": 25,
                "description": "Dado um terreno retangular, calcule o espaço interno (**Área**) e o contorno total (**Perímetro**)! 📐\n\n• **Passo 1:** Leia 2 números inteiros (um por linha): a `base` e a `altura`.\n• **Passo 2:** Calcule:\n  • **Área:** `area = base * altura`\n  • **Perímetro:** `perimetro = 2 * (base + altura)`\n• **Passo 3:** Imprima em **2 linhas separadas**:\n  • 1ª linha: `AREA = X`\n  • 2ª linha: `PERIMETRO = Y`",
                "inputSpec": "**2 linhas** com números inteiros:\n• **1ª linha:** Base do retângulo\n• **2ª linha:** Altura do retângulo",
                "outputSpec": "**2 linhas**:\n`AREA = X`\n`PERIMETRO = Y`",
                "starterCode": "# Desafio #1034 — Área e Perímetro do Retângulo\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:**\n• `base = int(input())`\n• `altura = int(input())`\n\n🧠 **2. Como calcular:**\n• `area = base * altura`\n• `perimetro = 2 * (base + altura)`\n\n📤 **3. Como mostrar a Saída:**\n• `print(f\"AREA = {area}\")`\n• `print(f\"PERIMETRO = {perimetro}\")`",
                "testCases": [
                        {
                                "input": "5\n4",
                                "expected": "AREA = 20\nPERIMETRO = 18"
                        },
                        {
                                "input": "10\n3",
                                "expected": "AREA = 30\nPERIMETRO = 26"
                        },
                        {
                                "input": "7\n7",
                                "expected": "AREA = 49\nPERIMETRO = 28"
                        }
                ]
        },
        {
                "id": "bee_1035",
                "number": 1035,
                "title": "Conversor Celsius para Fahrenheit",
                "category": "cat2",
                "difficulty": "Fácil",
                "xp": 30,
                "description": "Transforme a temperatura medida no Brasil (**Celsius**) para a escala usada nos Estados Unidos (**Fahrenheit**)! 🌡️\n\n• **Passo 1:** Leia a temperatura `C` usando `float(input())`.\n• **Passo 2:** Aplique a fórmula:\n  `F = (C * 1.8) + 32`\n• **Passo 3:** Mostre o resultado com **1 casa decimal** (`:.1f`) no formato:\n  `FAHRENHEIT = X.X`",
                "inputSpec": "**1 linha** com um número (`float`) representando os graus Celsius.",
                "outputSpec": "Mostre com **1 casa decimal** (`:.1f`):\n`FAHRENHEIT = X.X`",
                "starterCode": "# Desafio #1035 — Conversor Celsius para Fahrenheit\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:**\n• `c = float(input())`\n\n🧠 **2. Como calcular:**\n• `f = (c * 1.8) + 32`\n\n📤 **3. Como mostrar a Saída:**\n• Use `:.1f` para exibir 1 casa após o ponto: `print(f\"FAHRENHEIT = {f:.1f}\")`.",
                "testCases": [
                        {
                                "input": "0",
                                "expected": "FAHRENHEIT = 32.0"
                        },
                        {
                                "input": "100",
                                "expected": "FAHRENHEIT = 212.0"
                        },
                        {
                                "input": "25",
                                "expected": "FAHRENHEIT = 77.0"
                        }
                ]
        },
        {
                "id": "bee_1036",
                "number": 1036,
                "title": "Divisão Inteira e Resto",
                "category": "cat2",
                "difficulty": "Fácil",
                "xp": 30,
                "description": "Em Python, temos dois operadores especiais para divisão inteira (como fazemos no caderno): ➗\n• **`//`** calcula o **quociente inteiro** (quantas vezes cabe sem vírgula).\n• **`%`** calcula o **resto da divisão** (o que sobra).\n\nLeia dois inteiros `A` e `B` (um por linha) e mostre o quociente e o resto no formato:\n`QUOCIENTE = X | RESTO = Y`",
                "inputSpec": "**2 linhas** com números inteiros positivos:\n• **1ª linha:** Dividendo `A`\n• **2ª linha:** Divisor `B`",
                "outputSpec": "Mostre na tela:\n`QUOCIENTE = X | RESTO = Y`",
                "starterCode": "# Desafio #1036 — Divisão Inteira e Resto\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:**\n• `a = int(input())`\n• `b = int(input())`\n\n🧠 **2. Como calcular:**\n• `q = a // b` (divisão inteira)\n• `r = a % b` (resto da divisão)\n\n📤 **3. Como mostrar a Saída:**\n• `print(f\"QUOCIENTE = {q} | RESTO = {r}\")`",
                "testCases": [
                        {
                                "input": "17\n5",
                                "expected": "QUOCIENTE = 3 | RESTO = 2"
                        },
                        {
                                "input": "20\n4",
                                "expected": "QUOCIENTE = 5 | RESTO = 0"
                        },
                        {
                                "input": "9\n2",
                                "expected": "QUOCIENTE = 4 | RESTO = 1"
                        }
                ]
        },
        {
                "id": "bee_1037",
                "number": 1037,
                "title": "Potência Matemática (Base e Expoente)",
                "category": "cat2",
                "difficulty": "Fácil",
                "xp": 25,
                "description": "Em Python, usamos dois asteriscos seguidos **`**`** para elevar um número a uma potência (por exemplo, `2 ** 3` calcula 2 elevado a 3 = 8)! ⚡\n\n• **Passo 1:** Leia dois números inteiros (um por linha): a `base` e o `expoente`.\n• **Passo 2:** Calcule `potencia = base ** expoente`.\n• **Passo 3:** Imprima no formato: `POTENCIA = X`.",
                "inputSpec": "**2 linhas** com números inteiros:\n• **1ª linha:** Base\n• **2ª linha:** Expoente",
                "outputSpec": "Mostre na tela:\n`POTENCIA = X`",
                "starterCode": "# Desafio #1037 — Potência Matemática (Base e Expoente)\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:**\n• `base = int(input())`\n• `exp = int(input())`\n\n🧠 **2. Como calcular:**\n• `res = base ** exp`\n\n📤 **3. Como mostrar a Saída:**\n• `print(f\"POTENCIA = {res}\")`",
                "testCases": [
                        {
                                "input": "2\n10",
                                "expected": "POTENCIA = 1024"
                        },
                        {
                                "input": "3\n4",
                                "expected": "POTENCIA = 81"
                        },
                        {
                                "input": "5\n0",
                                "expected": "POTENCIA = 1"
                        }
                ]
        },
        {
                "id": "bee_1038",
                "number": 1038,
                "title": "Consumo Médio de Combustível",
                "category": "cat2",
                "difficulty": "Fácil",
                "xp": 30,
                "description": "Descubra quantos quilômetros um carro percorre com 1 litro de combustível! 🚗\n\n• **Passo 1:** Leia 2 valores numéricos (`float`), um por linha:\n  1. A **distância percorrida** (em km)\n  2. O **combustível gasto** (em litros)\n• **Passo 2:** Divida a distância pelos litros: `consumo = distancia / litros`.\n• **Passo 3:** Mostre o resultado com **2 casas decimais** (`:.2f`) seguido de ` km/l`.",
                "inputSpec": "**2 linhas** numéricas (`float`):\n• **1ª linha:** Distância em Km\n• **2ª linha:** Combustível gasto em litros",
                "outputSpec": "Mostre com **2 casas decimais** (`:.2f`):\n`X.XX km/l`",
                "starterCode": "# Desafio #1038 — Consumo Médio de Combustível\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:**\n• `km = float(input())`\n• `litros = float(input())`\n\n🧠 **2. Como calcular:**\n• `consumo = km / litros`\n\n📤 **3. Como mostrar a Saída:**\n• `print(f\"{consumo:.2f} km/l\")`",
                "testCases": [
                        {
                                "input": "500\n35.0",
                                "expected": "14.29 km/l"
                        },
                        {
                                "input": "2254\n124.4",
                                "expected": "18.12 km/l"
                        },
                        {
                                "input": "100\n10.0",
                                "expected": "10.00 km/l"
                        }
                ]
        },
        {
                "id": "bee_1039",
                "number": 1039,
                "title": "Salário com Bônus de Comissão",
                "category": "cat2",
                "difficulty": "Fácil",
                "xp": 30,
                "description": "Um vendedor recebe seu **salário fixo** mais **15% de comissão** sobre o total de vendas que fez no mês. 💰\n\n• **Passo 1:** Leia 2 valores decimais (`float`), um por linha: o `salario` fixo e as `vendas` do mês.\n• **Passo 2:** Calcule o total a receber:\n  `total = salario + (vendas * 0.15)`\n• **Passo 3:** Imprima com **2 casas decimais** (`:.2f`) no formato:\n  `TOTAL = R$ X.XX`",
                "inputSpec": "**2 linhas** com valores decimais (`float`):\n• **1ª linha:** Salário fixo\n• **2ª linha:** Total de vendas no mês",
                "outputSpec": "Mostre com **2 casas decimais** (`:.2f`):\n`TOTAL = R$ X.XX`",
                "starterCode": "# Desafio #1039 — Salário com Bônus de Comissão\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:**\n• `salario = float(input())`\n• `vendas = float(input())`\n\n🧠 **2. Como calcular:**\n• `total = salario + (vendas * 0.15)`\n\n📤 **3. Como mostrar a Saída:**\n• `print(f\"TOTAL = R$ {total:.2f}\")`",
                "testCases": [
                        {
                                "input": "500.00\n1230.30",
                                "expected": "TOTAL = R$ 684.54"
                        },
                        {
                                "input": "700.00\n0.00",
                                "expected": "TOTAL = R$ 700.00"
                        },
                        {
                                "input": "1700.00\n1230.50",
                                "expected": "TOTAL = R$ 1884.58"
                        }
                ]
        },
        {
                "id": "bee_1040",
                "number": 1040,
                "title": "Conversão de Tempo (Segundos para H:M:S)",
                "category": "cat2",
                "difficulty": "Médio",
                "xp": 35,
                "description": "Transforme um total de segundos em **Horas : Minutos : Segundos**! ⏱️\n\n• **Passo 1:** Leia um número inteiro `N` (total de segundos).\n• **Passo 2:** Calcule usando divisão inteira `//` e resto `%`:\n  • `horas = N // 3600`\n  • `resto = N % 3600`\n  • `minutos = resto // 60`\n  • `segundos = resto % 60`\n• **Passo 3:** Mostre no formato `H:M:S`.",
                "inputSpec": "**1 linha** com um número inteiro `N` (total de segundos).",
                "outputSpec": "Mostre no formato:\n`H:M:S` *(ex: `0:9:16`)*",
                "starterCode": "# Desafio #1040 — Conversão de Tempo (Segundos para H:M:S)\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:**\n• `n = int(input())`\n\n🧠 **2. Como calcular:**\n• 1 hora tem 3600 segundos (`horas = n // 3600`).\n• Do que sobrar (`resto = n % 3600`), cada minuto tem 60 segundos (`minutos = resto // 60` e `segundos = resto % 60`).\n\n📤 **3. Como mostrar a Saída:**\n• `print(f\"{horas}:{minutos}:{segundos}\")`",
                "testCases": [
                        {
                                "input": "556",
                                "expected": "0:9:16"
                        },
                        {
                                "input": "1",
                                "expected": "0:0:1"
                        },
                        {
                                "input": "140153",
                                "expected": "38:55:53"
                        }
                ]
        },
        {
                "id": "bee_1041",
                "number": 1041,
                "title": "Diferença de Produtos (A*B - C*D)",
                "category": "cat2",
                "difficulty": "Fácil",
                "xp": 25,
                "description": "Leia **4 números inteiros** `A`, `B`, `C` e `D` (um em cada linha) e calcule a diferença entre a multiplicação dos dois primeiros e a multiplicação dos dois últimos: 🧮\n\n• **Fórmula:** `diferenca = (A * B) - (C * D)`\n• **Saída:** `DIFERENCA = X`",
                "inputSpec": "**4 linhas**, cada uma contendo um número inteiro (`A`, `B`, `C` e `D`).",
                "outputSpec": "Mostre na tela:\n`DIFERENCA = X`",
                "starterCode": "# Desafio #1041 — Diferença de Produtos (A*B - C*D)\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:**\n• Chame `int(input())` 4 vezes para ler `a`, `b`, `c` e `d`.\n\n🧠 **2. Como calcular:**\n• `dif = (a * b) - (c * d)`\n\n📤 **3. Como mostrar a Saída:**\n• `print(f\"DIFERENCA = {dif}\")`",
                "testCases": [
                        {
                                "input": "5\n6\n7\n8",
                                "expected": "DIFERENCA = -26"
                        },
                        {
                                "input": "0\n0\n7\n8",
                                "expected": "DIFERENCA = -56"
                        },
                        {
                                "input": "5\n6\n-7\n8",
                                "expected": "DIFERENCA = 86"
                        }
                ]
        },
        {
                "id": "bee_1042",
                "number": 1042,
                "title": "Caixa Eletrônico (Notas de 100, 50 e 10)",
                "category": "cat2",
                "difficulty": "Médio",
                "xp": 35,
                "description": "Um caixa eletrônico precisa entregar um valor usando a **menor quantidade possível** de cédulas de **100**, **50** e **10** reais! 🏧\n\n• **Passo 1:** Leia um número inteiro `valor` (múltiplo de 10).\n• **Passo 2:** Calcule quantas notas de cada valor cabem:\n  • `n100 = valor // 100` e atualize a sobra: `valor = valor % 100`\n  • `n50 = valor // 50` e atualize a sobra: `valor = valor % 50`\n  • `n10 = valor // 10`\n• **Passo 3:** Imprima no formato: `100: X | 50: Y | 10: Z`",
                "inputSpec": "**1 linha** com um número inteiro múltiplo de 10 (valor do saque).",
                "outputSpec": "Mostre na tela:\n`100: X | 50: Y | 10: Z`",
                "starterCode": "# Desafio #1042 — Caixa Eletrônico (Notas de 100, 50 e 10)\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:**\n• `v = int(input())`\n\n🧠 **2. Como calcular cada nota:**\n• `n100 = v // 100`\n• `v = v % 100`\n• `n50 = v // 50`\n• `n10 = (v % 50) // 10`\n\n📤 **3. Como mostrar a Saída:**\n• `print(f\"100: {n100} | 50: {n50} | 10: {n10}\")`",
                "testCases": [
                        {
                                "input": "570",
                                "expected": "100: 5 | 50: 1 | 10: 2"
                        },
                        {
                                "input": "130",
                                "expected": "100: 1 | 50: 0 | 10: 3"
                        },
                        {
                                "input": "80",
                                "expected": "100: 0 | 50: 1 | 10: 3"
                        }
                ]
        },
        {
                "id": "bee_1009",
                "number": 1009,
                "title": "Detector de Par ou Ímpar",
                "category": "cat3",
                "difficulty": "Médio",
                "xp": 30,
                "description": "Descubra se um número inteiro `N` é **PAR** ou **ÍMPAR**! ⚖️\n\n• **Regra:** Um número é par quando o resto da divisão dele por 2 é zero (`N % 2 == 0`).\n• **Se for par (`N % 2 == 0`):** imprima `PAR`\n• **Caso contrário (`else`):** imprima `IMPAR` *(sem acento)*",
                "inputSpec": "**1 linha** contendo um número inteiro `N`.",
                "outputSpec": "Mostre `PAR` ou `IMPAR` (sem acento e em maiúsculas).",
                "starterCode": "# Desafio #1009 — Detector de Par ou Ímpar\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:**\n• `n = int(input())`\n\n🧠 **2. Como decidir (`if / else`):**\n• Teste se o resto da divisão por 2 é zero:\n  `if n % 2 == 0:`\n      `print(\"PAR\")`\n  `else:`\n      `print(\"IMPAR\")`",
                "testCases": [
                        {
                                "input": "8",
                                "expected": "PAR"
                        },
                        {
                                "input": "7",
                                "expected": "IMPAR"
                        },
                        {
                                "input": "0",
                                "expected": "PAR"
                        }
                ]
        },
        {
                "id": "bee_1010",
                "number": 1010,
                "title": "Positivo, Negativo ou Zero",
                "category": "cat3",
                "difficulty": "Médio",
                "xp": 30,
                "description": "Leia um número inteiro `N` e classifique-o usando `if`, `elif` e `else`: 🧭\n\n• Se `N > 0`: mostre **`POSITIVO`**\n• Se `N < 0`: mostre **`NEGATIVO`**\n• Se `N == 0`: mostre **`ZERO`**",
                "inputSpec": "**1 linha** contendo um número inteiro `N`.",
                "outputSpec": "Mostre uma das palavras:\n`POSITIVO`, `NEGATIVO` ou `ZERO`",
                "starterCode": "# Desafio #1010 — Positivo, Negativo ou Zero\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:**\n• `n = int(input())`\n\n🧠 **2. Como decidir (`if / elif / else`):**\n• Use `if n > 0:` para imprimir `\"POSITIVO\"`, `elif n < 0:` para `\"NEGATIVO\"` e `else:` para `\"ZERO\"`.",
                "testCases": [
                        {
                                "input": "15",
                                "expected": "POSITIVO"
                        },
                        {
                                "input": "-4",
                                "expected": "NEGATIVO"
                        },
                        {
                                "input": "0",
                                "expected": "ZERO"
                        }
                ]
        },
        {
                "id": "bee_1011",
                "number": 1011,
                "title": "Maior de Dois Números",
                "category": "cat3",
                "difficulty": "Médio",
                "xp": 35,
                "description": "Compare dois números inteiros `A` e `B` (lidos um em cada linha): 🏆\n\n• Se `A` e `B` forem **iguais** (`A == B`), mostre:\n  `IGUAIS`\n• Se forem **diferentes**, descubra qual é o maior e mostre:\n  `MAIOR = X` *(onde `X` é o maior valor)*",
                "inputSpec": "**2 linhas**, cada uma com um número inteiro (`A` e `B`).",
                "outputSpec": "Mostre `MAIOR = X` ou `IGUAIS`.",
                "starterCode": "# Desafio #1011 — Maior de Dois Números\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:**\n• `a = int(input())`\n• `b = int(input())`\n\n🧠 **2. Como decidir:**\n• Se `a == b`, imprima `\"IGUAIS\"`.\n• `elif a > b:`, imprima `f\"MAIOR = {a}\"`.\n• `else:`, imprima `f\"MAIOR = {b}\"`.",
                "testCases": [
                        {
                                "input": "10\n25",
                                "expected": "MAIOR = 25"
                        },
                        {
                                "input": "42\n18",
                                "expected": "MAIOR = 42"
                        },
                        {
                                "input": "7\n7",
                                "expected": "IGUAIS"
                        }
                ]
        },
        {
                "id": "bee_1012",
                "number": 1012,
                "title": "Boletim de Aprovação CEFET",
                "category": "cat3",
                "difficulty": "Médio",
                "xp": 35,
                "description": "Leia a nota final (`float`) de um estudante e mostre a situação dele de acordo com a tabela: 🎓\n\n• **Nota `>= 7.0`:** mostre `APROVADO`\n• **Nota `>= 5.0` e `< 7.0`:** mostre `RECUPERACAO` *(sem cedilha e sem til)*\n• **Nota `< 5.0`:** mostre `REPROVADO`",
                "inputSpec": "**1 linha** com um número decimal (`float`) representando a nota.",
                "outputSpec": "Mostre `APROVADO`, `RECUPERACAO` ou `REPROVADO`.",
                "starterCode": "# Desafio #1012 — Boletim de Aprovação CEFET\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:**\n• `nota = float(input())`\n\n🧠 **2. Como decidir:**\n• `if nota >= 7.0:` ➔ `print(\"APROVADO\")`\n• `elif nota >= 5.0:` ➔ `print(\"RECUPERACAO\")`\n• `else:` ➔ `print(\"REPROVADO\")`",
                "testCases": [
                        {
                                "input": "8.5",
                                "expected": "APROVADO"
                        },
                        {
                                "input": "6.0",
                                "expected": "RECUPERACAO"
                        },
                        {
                                "input": "4.2",
                                "expected": "REPROVADO"
                        }
                ]
        },
        {
                "id": "bee_1013",
                "number": 1013,
                "title": "Desconto VIP do Mercadinho",
                "category": "cat3",
                "difficulty": "Médio",
                "xp": 40,
                "description": "No Mercadinho Gamer, compras a partir de R$ 100.00 ganham **10% de desconto**! 🛒\n\n• **Se `valor >= 100.0`:** aplique 10% de desconto multiplicando por `0.90` (`final = valor * 0.90`).\n• **Se `valor < 100.0`:** não há desconto (`final = valor`).\n\nAo final, mostre o valor a pagar com **2 casas decimais** (`:.2f`) no formato:\n`TOTAL = X.XX`",
                "inputSpec": "**1 linha** com um número decimal (`float`) representando o valor da compra.",
                "outputSpec": "Mostre com **2 casas decimais** (`:.2f`):\n`TOTAL = X.XX`",
                "starterCode": "# Desafio #1013 — Desconto VIP do Mercadinho\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:**\n• `valor = float(input())`\n\n🧠 **2. Como aplicar o desconto:**\n• `if valor >= 100:`\n      `valor = valor * 0.90`\n\n📤 **3. Como mostrar a Saída:**\n• `print(f\"TOTAL = {valor:.2f}\")`",
                "testCases": [
                        {
                                "input": "150.00",
                                "expected": "TOTAL = 135.00"
                        },
                        {
                                "input": "80.00",
                                "expected": "TOTAL = 80.00"
                        },
                        {
                                "input": "100.00",
                                "expected": "TOTAL = 90.00"
                        }
                ]
        },
        {
                "id": "bee_1043",
                "number": 1043,
                "title": "Classificador de Faixa Etária",
                "category": "cat3",
                "difficulty": "Médio",
                "xp": 35,
                "description": "Leia a `idade` inteira de uma pessoa e classifique em qual grupo ela está: 👥\n\n• **Menor que 12 anos (`idade < 12`):** imprima `CRIANCA` *(sem cedilha)*\n• **De 12 a 17 anos (`idade < 18`):** imprima `ADOLESCENTE`\n• **De 18 a 59 anos (`idade < 60`):** imprima `ADULTO`\n• **60 anos ou mais (`else`):** imprima `IDOSO`",
                "inputSpec": "**1 linha** com um número inteiro (a idade).",
                "outputSpec": "Mostre `CRIANCA`, `ADOLESCENTE`, `ADULTO` ou `IDOSO`.",
                "starterCode": "# Desafio #1043 — Classificador de Faixa Etária\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:**\n• `idade = int(input())`\n\n🧠 **2. Como decidir em escadinha (`if / elif / else`):**\n• Teste na ordem crescente: `if idade < 12:`, depois `elif idade < 18:`, depois `elif idade < 60:` e por fim `else:`.",
                "testCases": [
                        {
                                "input": "9",
                                "expected": "CRIANCA"
                        },
                        {
                                "input": "15",
                                "expected": "ADOLESCENTE"
                        },
                        {
                                "input": "30",
                                "expected": "ADULTO"
                        },
                        {
                                "input": "65",
                                "expected": "IDOSO"
                        }
                ]
        },
        {
                "id": "bee_1044",
                "number": 1044,
                "title": "Detector de Ano Bissexto",
                "category": "cat3",
                "difficulty": "Médio",
                "xp": 40,
                "description": "Descubra se um `ano` (inteiro) tem 366 dias (**`BISSEXTO`**) ou 365 dias (**`NORMAL`**)! 📅\n\n• **Regra do Calendário:** Um ano é bissexto quando:\n  • É divisível por 400 (`ano % 400 == 0`), **OU**\n  • É divisível por 4 (`ano % 4 == 0`) **E NÃO** é divisível por 100 (`ano % 100 != 0`).",
                "inputSpec": "**1 linha** com um número inteiro representando o ano.",
                "outputSpec": "Mostre `BISSEXTO` ou `NORMAL`.",
                "starterCode": "# Desafio #1044 — Detector de Ano Bissexto\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:**\n• `ano = int(input())`\n\n🧠 **2. Condição no `if`:**\n• `if (ano % 400 == 0) or (ano % 4 == 0 and ano % 100 != 0):`\n      `print(\"BISSEXTO\")`\n  `else:`\n      `print(\"NORMAL\")`",
                "testCases": [
                        {
                                "input": "2024",
                                "expected": "BISSEXTO"
                        },
                        {
                                "input": "2000",
                                "expected": "BISSEXTO"
                        },
                        {
                                "input": "1900",
                                "expected": "NORMAL"
                        },
                        {
                                "input": "2026",
                                "expected": "NORMAL"
                        }
                ]
        },
        {
                "id": "bee_1045",
                "number": 1045,
                "title": "Classificação de Triângulos",
                "category": "cat3",
                "difficulty": "Médio",
                "xp": 40,
                "description": "Leia os **3 lados inteiros** `A`, `B` e `C` de um triângulo (um por linha) e classifique-o: 📐\n\n• **3 lados iguais (`A == B and B == C`):** mostre `EQUILATERO`\n• **Apenas 2 lados iguais (`A == B or B == C or A == C`):** mostre `ISOSCELES`\n• **Todos os 3 lados diferentes (`else`):** mostre `ESCALENO`",
                "inputSpec": "**3 linhas**, cada uma com um número inteiro (`A`, `B` e `C`).",
                "outputSpec": "Mostre `EQUILATERO`, `ISOSCELES` ou `ESCALENO` *(sem acentos)*.",
                "starterCode": "# Desafio #1045 — Classificação de Triângulos\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:**\n• Leia `a`, `b` e `c` com três comandos `int(input())`.\n\n🧠 **2. Como decidir:**\n• Primeiro teste se todos são iguais (`a == b and b == c`).\n• No `elif`, teste se pelo menos dois são iguais (`a == b or b == c or a == c`).\n• No `else`, serão todos diferentes (`ESCALENO`).",
                "testCases": [
                        {
                                "input": "5\n5\n5",
                                "expected": "EQUILATERO"
                        },
                        {
                                "input": "5\n5\n3",
                                "expected": "ISOSCELES"
                        },
                        {
                                "input": "3\n4\n5",
                                "expected": "ESCALENO"
                        }
                ]
        },
        {
                "id": "bee_1046",
                "number": 1046,
                "title": "São Múltiplos?",
                "category": "cat3",
                "difficulty": "Médio",
                "xp": 35,
                "description": "Leia 2 números inteiros positivos `A` e `B` (um por linha) e verifique se um é múltiplo do outro! 🔢\n\n• **Regra:** Eles são múltiplos se `A` divide por `B` sem deixar resto (`A % B == 0`) **OU** se `B` divide por `A` sem deixar resto (`B % A == 0`).\n• Se forem múltiplos: imprima `SAO MULTIPLOS`\n• Caso contrário: imprima `NAO SAO MULTIPLOS`",
                "inputSpec": "**2 linhas** com números inteiros positivos `A` e `B`.",
                "outputSpec": "Mostre `SAO MULTIPLOS` ou `NAO SAO MULTIPLOS` *(sem til e sem acento)*.",
                "starterCode": "# Desafio #1046 — São Múltiplos?\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:**\n• `a = int(input())`\n• `b = int(input())`\n\n🧠 **2. Condição no `if`:**\n• `if a % b == 0 or b % a == 0:` ➔ `print(\"SAO MULTIPLOS\")`\n• `else:` ➔ `print(\"NAO SAO MULTIPLOS\")`",
                "testCases": [
                        {
                                "input": "6\n24",
                                "expected": "SAO MULTIPLOS"
                        },
                        {
                                "input": "24\n6",
                                "expected": "SAO MULTIPLOS"
                        },
                        {
                                "input": "6\n25",
                                "expected": "NAO SAO MULTIPLOS"
                        }
                ]
        },
        {
                "id": "bee_1047",
                "number": 1047,
                "title": "Radar de Velocidade Rodoviário",
                "category": "cat3",
                "difficulty": "Médio",
                "xp": 40,
                "description": "O limite de velocidade de uma rodovia é **80 km/h**. 🚔\n\n• **Se `velocidade <= 80`:** o motorista respeitou a lei! Imprima:\n  `SEM MULTA`\n• **Se `velocidade > 80`:** calcule a multa cobrando **R$ 5 por cada km acima de 80**:\n  `multa = (velocidade - 80) * 5`\n  E imprima: `MULTA = R$ X`",
                "inputSpec": "**1 linha** com um número inteiro (velocidade do carro em km/h).",
                "outputSpec": "Mostre `SEM MULTA` ou `MULTA = R$ X`.",
                "starterCode": "# Desafio #1047 — Radar de Velocidade Rodoviário\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:**\n• `vel = int(input())`\n\n🧠 **2. Como decidir e calcular:**\n• `if vel <= 80:` ➔ `print(\"SEM MULTA\")`\n• `else:` ➔ calcule `multa = (vel - 80) * 5` e mostre `print(f\"MULTA = R$ {multa}\")`.",
                "testCases": [
                        {
                                "input": "75",
                                "expected": "SEM MULTA"
                        },
                        {
                                "input": "80",
                                "expected": "SEM MULTA"
                        },
                        {
                                "input": "100",
                                "expected": "MULTA = R$ 100"
                        }
                ]
        },
        {
                "id": "bee_1048",
                "number": 1048,
                "title": "Juiz de Pedra, Papel e Tesoura",
                "category": "cat3",
                "difficulty": "Médio",
                "xp": 45,
                "description": "Programe o árbitro do clássico jogo **Pedra, Papel e Tesoura**! ✊✋✌️\n\nLeia a jogada do **Jogador 1** na 1ª linha e a do **Jogador 2** na 2ª linha (`PEDRA`, `PAPEL` ou `TESOURA`).\n• Se as duas jogadas forem iguais: mostre `EMPATE`\n• Se o Jogador 1 vencer (Pedra vence Tesoura, Papel vence Pedra, Tesoura vence Papel): mostre `JOGADOR 1`\n• Caso contrário: mostre `JOGADOR 2`",
                "inputSpec": "**2 linhas** de texto (`PEDRA`, `PAPEL` ou `TESOURA`).",
                "outputSpec": "Mostre `EMPATE`, `JOGADOR 1` ou `JOGADOR 2`.",
                "starterCode": "# Desafio #1048 — Juiz de Pedra, Papel e Tesoura\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:**\n• `j1 = input().strip()`\n• `j2 = input().strip()`\n\n🧠 **2. Como decidir:**\n• Primeiro teste `if j1 == j2:` ➔ `EMPATE`.\n• No `elif`, teste os 3 casos em que `j1` ganha:\n  `elif (j1 == \"PEDRA\" and j2 == \"TESOURA\") or (j1 == \"PAPEL\" and j2 == \"PEDRA\") or (j1 == \"TESOURA\" and j2 == \"PAPEL\"):` ➔ `JOGADOR 1`\n• `else:` ➔ `JOGADOR 2`.",
                "testCases": [
                        {
                                "input": "PEDRA\nTESOURA",
                                "expected": "JOGADOR 1"
                        },
                        {
                                "input": "PAPEL\nTESOURA",
                                "expected": "JOGADOR 2"
                        },
                        {
                                "input": "PEDRA\nPEDRA",
                                "expected": "EMPATE"
                        }
                ]
        },
        {
                "id": "bee_1049",
                "number": 1049,
                "title": "Coordenadas de um Ponto (Quadrantes)",
                "category": "cat3",
                "difficulty": "Médio",
                "xp": 45,
                "description": "Leia 2 números inteiros `X` e `Y` (diferentes de zero) e descubra em qual **quadrante** do plano cartesiano o ponto está: 📈\n\n• **`Q1`:** quando `X > 0` e `Y > 0`\n• **`Q2`:** quando `X < 0` e `Y > 0`\n• **`Q3`:** quando `X < 0` e `Y < 0`\n• **`Q4`:** quando `X > 0` e `Y < 0`",
                "inputSpec": "**2 linhas** com números inteiros `X` e `Y` (ambos diferentes de zero).",
                "outputSpec": "Mostre `Q1`, `Q2`, `Q3` ou `Q4`.",
                "starterCode": "# Desafio #1049 — Coordenadas de um Ponto (Quadrantes)\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:**\n• `x = int(input())`\n• `y = int(input())`\n\n🧠 **2. Como decidir:**\n• Use `if` / `elif` combinando os sinais de `x` e `y` com o operador `and` (ex: `if x > 0 and y > 0:`).",
                "testCases": [
                        {
                                "input": "4\n5",
                                "expected": "Q1"
                        },
                        {
                                "input": "-3\n2",
                                "expected": "Q2"
                        },
                        {
                                "input": "-2\n-6",
                                "expected": "Q3"
                        },
                        {
                                "input": "5\n-1",
                                "expected": "Q4"
                        }
                ]
        },
        {
                "id": "bee_1050",
                "number": 1050,
                "title": "DDD de Cidades Brasileiras",
                "category": "cat3",
                "difficulty": "Fácil",
                "xp": 30,
                "description": "Leia um número inteiro de **DDD** telefônico e mostre a cidade correspondente conforme a tabela abaixo: 📞\n\n• **`31`** ➔ `Belo Horizonte`\n• **`11`** ➔ `Sao Paulo` *(sem til)*\n• **`21`** ➔ `Rio de Janeiro`\n• **`61`** ➔ `Brasilia` *(sem acento)*\n• **Qualquer outro número** ➔ `DDD NAO CADASTRADO`",
                "inputSpec": "**1 linha** com um número inteiro representando o DDD.",
                "outputSpec": "Mostre o nome da cidade ou `DDD NAO CADASTRADO`.",
                "starterCode": "# Desafio #1050 — DDD de Cidades Brasileiras\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:**\n• `ddd = int(input())`\n\n🧠 **2. Como decidir:**\n• Use `if ddd == 31:`, `elif ddd == 11:`, `elif ddd == 21:`, `elif ddd == 61:` e `else:` para `DDD NAO CADASTRADO`.",
                "testCases": [
                        {
                                "input": "31",
                                "expected": "Belo Horizonte"
                        },
                        {
                                "input": "11",
                                "expected": "Sao Paulo"
                        },
                        {
                                "input": "99",
                                "expected": "DDD NAO CADASTRADO"
                        }
                ]
        },
        {
                "id": "bee_1051",
                "number": 1051,
                "title": "Maior de Três Números",
                "category": "cat3",
                "difficulty": "Médio",
                "xp": 35,
                "description": "Leia **3 números inteiros** (um em cada linha) e descubra qual é o **maior valor** entre os três! 🥇\n\n• Mostre o resultado no formato:\n  `MAIOR = X`",
                "inputSpec": "**3 linhas**, cada uma com um número inteiro.",
                "outputSpec": "Mostre na tela:\n`MAIOR = X`",
                "starterCode": "# Desafio #1051 — Maior de Três Números\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:**\n• Leia `a`, `b` e `c` com três comandos `int(input())`.\n\n🧠 **2. Como encontrar o maior:**\n• Você pode usar `if / elif / else` comparando os números, ou usar a função nativa `maior = max(a, b, c)` do Python!",
                "testCases": [
                        {
                                "input": "7\n14\n106",
                                "expected": "MAIOR = 106"
                        },
                        {
                                "input": "50\n20\n10",
                                "expected": "MAIOR = 50"
                        },
                        {
                                "input": "-5\n-2\n-10",
                                "expected": "MAIOR = -2"
                        }
                ]
        },
        {
                "id": "bee_1052",
                "number": 1052,
                "title": "Aprovação de Empréstimo Bancário",
                "category": "cat3",
                "difficulty": "Médio",
                "xp": 40,
                "description": "Para aprovar um empréstimo, o banco exige que o valor da **parcela mensal** seja de **no máximo 30%** (`0.30`) do salário do cliente. 🏦\n\n• **Passo 1:** Leia o `salario` na 1ª linha e a `parcela` na 2ª linha (ambos `float`).\n• **Passo 2:** Calcule o limite máximo: `limite = salario * 0.30`.\n• **Passo 3:**\n  • Se `parcela <= limite`: imprima `APROVADO`\n  • Caso contrário: imprima `NEGADO`",
                "inputSpec": "**2 linhas** com números decimais (`float`):\n• **1ª linha:** Salário do cliente\n• **2ª linha:** Valor da parcela",
                "outputSpec": "Mostre `APROVADO` ou `NEGADO`.",
                "starterCode": "# Desafio #1052 — Aprovação de Empréstimo Bancário\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:**\n• `salario = float(input())`\n• `parcela = float(input())`\n\n🧠 **2. Como decidir:**\n• `if parcela <= salario * 0.30:` ➔ `print(\"APROVADO\")`\n• `else:` ➔ `print(\"NEGADO\")`",
                "testCases": [
                        {
                                "input": "3000.00\n800.00",
                                "expected": "APROVADO"
                        },
                        {
                                "input": "2000.00\n750.00",
                                "expected": "NEGADO"
                        },
                        {
                                "input": "1000.00\n300.00",
                                "expected": "APROVADO"
                        }
                ]
        },
        {
                "id": "bee_1014",
                "number": 1014,
                "title": "Contagem de 1 até N",
                "category": "cat4",
                "difficulty": "Médio",
                "xp": 40,
                "description": "Leia um número inteiro positivo `N` e use um laço de repetição (`for` ou `while`) para mostrar todos os números de **1 até `N`**, um em cada linha! 🔢",
                "inputSpec": "**1 linha** com um número inteiro `N`.",
                "outputSpec": "Os números de `1` até `N`, **um por linha**.",
                "starterCode": "# Desafio #1014 — Contagem de 1 até N\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:**\n• `n = int(input())`\n\n🧠 **2. Como repetir de 1 até N:**\n• Lembre-se que o `range(inicio, fim)` para 1 antes do fim! Por isso usamos `n + 1`:\n  `for i in range(1, n + 1):`\n      `print(i)`",
                "testCases": [
                        {
                                "input": "4",
                                "expected": "1\n2\n3\n4"
                        },
                        {
                                "input": "2",
                                "expected": "1\n2"
                        },
                        {
                                "input": "6",
                                "expected": "1\n2\n3\n4\n5\n6"
                        }
                ]
        },
        {
                "id": "bee_1015",
                "number": 1015,
                "title": "Mini Tabuada de 1 a 5",
                "category": "cat4",
                "difficulty": "Médio",
                "xp": 40,
                "description": "Leia um número inteiro `N` e mostre as **5 primeiras linhas da tabuada** dele (multiplicando `N` por `1`, `2`, `3`, `4` e `5`)! ✖️\n\n• Cada linha deve ter exatamente o formato:\n  `N x i = RESULTADO` *(ex: `7 x 1 = 7`)*",
                "inputSpec": "**1 linha** com um número inteiro `N`.",
                "outputSpec": "**5 linhas** no formato:\n`N x i = RESULTADO`",
                "starterCode": "# Desafio #1015 — Mini Tabuada de 1 a 5\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:**\n• `n = int(input())`\n\n🧠 **2. Como gerar as 5 linhas:**\n• Use um laço `for i in range(1, 6):` e, dentro dele, imprima:\n  `print(f\"{n} x {i} = {n * i}\")`",
                "testCases": [
                        {
                                "input": "7",
                                "expected": "7 x 1 = 7\n7 x 2 = 14\n7 x 3 = 21\n7 x 4 = 28\n7 x 5 = 35"
                        },
                        {
                                "input": "3",
                                "expected": "3 x 1 = 3\n3 x 2 = 6\n3 x 3 = 9\n3 x 4 = 12\n3 x 5 = 15"
                        },
                        {
                                "input": "10",
                                "expected": "10 x 1 = 10\n10 x 2 = 20\n10 x 3 = 30\n10 x 4 = 40\n10 x 5 = 50"
                        }
                ]
        },
        {
                "id": "bee_1016",
                "number": 1016,
                "title": "Soma de 1 até N",
                "category": "cat4",
                "difficulty": "Médio",
                "xp": 45,
                "description": "Leia um número inteiro `N` e some todos os números inteiros de **1 até `N`**! ➕\n\n• Por exemplo, se `N = 4`, seu programa deve somar `1 + 2 + 3 + 4 = 10`.\n• Ao final, mostre apenas o resultado total no formato:\n  `SOMA = X`",
                "inputSpec": "**1 linha** com um número inteiro `N`.",
                "outputSpec": "Mostre na tela:\n`SOMA = X`",
                "starterCode": "# Desafio #1016 — Soma de 1 até N\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:**\n• `n = int(input())`\n\n🧠 **2. Como acumular a soma:**\n• Crie `soma = 0` antes do laço.\n• Faça `for i in range(1, n + 1):` e some `soma += i`.\n• Fora do laço, use `print(f\"SOMA = {soma}\")`.",
                "testCases": [
                        {
                                "input": "4",
                                "expected": "SOMA = 10"
                        },
                        {
                                "input": "5",
                                "expected": "SOMA = 15"
                        },
                        {
                                "input": "10",
                                "expected": "SOMA = 55"
                        }
                ]
        },
        {
                "id": "bee_1017",
                "number": 1017,
                "title": "Cofre Blindado (try / except)",
                "category": "cat4",
                "difficulty": "Médio",
                "xp": 45,
                "description": "Hora de blindar seu código contra entradas inválidas usando `try / except`! 🛡️\n\n• **Passo 1:** Tente ler a entrada e convertê-la para inteiro (`n = int(input())`) dentro do bloco `try:`.\n• **Passo 2:**\n  • Se der certo: mostre o dobro desse número no formato `DOBRO = X`.\n  • Se o usuário digitar letras (causando `ValueError`), capture no `except ValueError:` e mostre:\n    `ERRO: DIGITE APENAS NUMEROS`",
                "inputSpec": "**1 linha** que pode conter um número inteiro válido ou letras.",
                "outputSpec": "Mostre `DOBRO = X` (se for número) ou `ERRO: DIGITE APENAS NUMEROS` (se der erro).",
                "starterCode": "# Desafio #1017 — Cofre Blindado (try / except)\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "🧠 **Estrutura `try / except`:**\n• Coloque dentro do `try:`:\n  `n = int(input())`\n  `print(f\"DOBRO = {n * 2}\")`\n• E no bloco `except ValueError:`:\n  `print(\"ERRO: DIGITE APENAS NUMEROS\")`",
                "testCases": [
                        {
                                "input": "21",
                                "expected": "DOBRO = 42"
                        },
                        {
                                "input": "abc",
                                "expected": "ERRO: DIGITE APENAS NUMEROS"
                        },
                        {
                                "input": "-5",
                                "expected": "DOBRO = -10"
                        }
                ]
        },
        {
                "id": "bee_1053",
                "number": 1053,
                "title": "Contagem Regressiva de Foguete",
                "category": "cat4",
                "difficulty": "Médio",
                "xp": 40,
                "description": "Prepare a decolagem do foguete! 🚀\n\n• **Passo 1:** Leia um número inteiro `N`.\n• **Passo 2:** Mostre a contagem regressiva de `N` descendo até `1` (um número por linha).\n• **Passo 3:** Depois do `1`, na última linha, mostre **`FOGO!`**",
                "inputSpec": "**1 linha** com um número inteiro `N`.",
                "outputSpec": "Os números de `N` até `1` (um por linha) e `FOGO!` na última linha.",
                "starterCode": "# Desafio #1053 — Contagem Regressiva de Foguete\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "🧠 **Como contar de trás para frente:**\n• Você pode usar `for i in range(n, 0, -1):` para ir de `n` até `1` diminuindo de 1 em 1.\n• Fora do laço (depois que terminar), coloque `print(\"FOGO!\")`.",
                "testCases": [
                        {
                                "input": "3",
                                "expected": "3\n2\n1\nFOGO!"
                        },
                        {
                                "input": "5",
                                "expected": "5\n4\n3\n2\n1\nFOGO!"
                        },
                        {
                                "input": "1",
                                "expected": "1\nFOGO!"
                        }
                ]
        },
        {
                "id": "bee_1054",
                "number": 1054,
                "title": "Pares de 2 até N",
                "category": "cat4",
                "difficulty": "Médio",
                "xp": 40,
                "description": "Leia um número inteiro `N` (`N >= 2`) e mostre todos os **números pares** de `2` até `N` (incluindo o próprio `N`, se ele for par), **um em cada linha**! 2️⃣",
                "inputSpec": "**1 linha** com um número inteiro `N >= 2`.",
                "outputSpec": "Todos os números pares de `2` até `N`, um por linha.",
                "starterCode": "# Desafio #1054 — Pares de 2 até N\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "🧠 **Dica com `range`:**\n• Você pode pular de 2 em 2 usando `for i in range(2, n + 1, 2):` e dando `print(i)`, ou testar `if i % 2 == 0:` dentro do laço!",
                "testCases": [
                        {
                                "input": "6",
                                "expected": "2\n4\n6"
                        },
                        {
                                "input": "7",
                                "expected": "2\n4\n6"
                        },
                        {
                                "input": "2",
                                "expected": "2"
                        }
                ]
        },
        {
                "id": "bee_1055",
                "number": 1055,
                "title": "Fatorial Simples (N!)",
                "category": "cat4",
                "difficulty": "Médio",
                "xp": 45,
                "description": "Na matemática, o **fatorial** de um número `N` (escrito `N!`) é a multiplicação de todos os inteiros de `1` até `N`: 🧮\n• Exemplo: `4! = 4 * 3 * 2 * 1 = 24`\n• Regra especial: `0! = 1`\n\nLeia um inteiro `N` e mostre o fatorial no formato: `FATORIAL = X`",
                "inputSpec": "**1 linha** com um número inteiro `N` (`0 <= N <= 12`).",
                "outputSpec": "Mostre na tela:\n`FATORIAL = X`",
                "starterCode": "# Desafio #1055 — Fatorial Simples (N!)\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "🧠 **Como calcular o fatorial:**\n• Comece com `fat = 1` (assim, se `N` for `0`, já vale `1`!).\n• Faça `for i in range(1, n + 1):` e multiplique a cada passo: `fat = fat * i`.\n• No final, mostre `print(f\"FATORIAL = {fat}\")`.",
                "testCases": [
                        {
                                "input": "4",
                                "expected": "FATORIAL = 24"
                        },
                        {
                                "input": "5",
                                "expected": "FATORIAL = 120"
                        },
                        {
                                "input": "0",
                                "expected": "FATORIAL = 1"
                        }
                ]
        },
        {
                "id": "bee_1056",
                "number": 1056,
                "title": "Quadrado e ao Cubo",
                "category": "cat4",
                "difficulty": "Médio",
                "xp": 45,
                "description": "Leia um número inteiro positivo `N`. Para cada número `i` de `1` até `N`, mostre uma linha com **3 valores separados por espaço**: 📊\n\n• O próprio número `i`\n• O quadrado dele (`i ** 2`)\n• O cubo dele (`i ** 3`)",
                "inputSpec": "**1 linha** com um número inteiro `N`.",
                "outputSpec": "`N` linhas, cada uma no formato:\n`i quadrado cubo` *(ex: `2 4 8`)*",
                "starterCode": "# Desafio #1056 — Quadrado e ao Cubo\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "🧠 **Como resolver:**\n• Use `for i in range(1, n + 1):` e imprima os 3 valores na mesma linha:\n  `print(f\"{i} {i**2} {i**3}\")`",
                "testCases": [
                        {
                                "input": "3",
                                "expected": "1 1 1\n2 4 8\n3 9 27"
                        },
                        {
                                "input": "2",
                                "expected": "1 1 1\n2 4 8"
                        },
                        {
                                "input": "4",
                                "expected": "1 1 1\n2 4 8\n3 9 27\n4 16 64"
                        }
                ]
        },
        {
                "id": "bee_1057",
                "number": 1057,
                "title": "Escadinha de Asteriscos",
                "category": "cat4",
                "difficulty": "Médio",
                "xp": 45,
                "description": "Leia um número inteiro `N` e desenhe uma escadinha de asteriscos `*` com `N` degraus: ⭐\n\n• **1ª linha:** `*` (1 asterisco)\n• **2ª linha:** `**` (2 asteriscos)\n• **3ª linha:** `***` (3 asteriscos)\n• ... até a linha `N`!",
                "inputSpec": "**1 linha** com um número inteiro `N` (altura da escadinha).",
                "outputSpec": "`N` linhas formando a escadinha de asteriscos.",
                "starterCode": "# Desafio #1057 — Escadinha de Asteriscos\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "🧠 **Multiplicação de texto em Python:**\n• Lembre-se que `\"*\" * i` repete o asterisco `i` vezes!\n• Basta fazer `for i in range(1, n + 1):` e `print(\"*\" * i)`.",
                "testCases": [
                        {
                                "input": "3",
                                "expected": "*\n**\n***"
                        },
                        {
                                "input": "5",
                                "expected": "*\n**\n***\n****\n*****"
                        },
                        {
                                "input": "1",
                                "expected": "*"
                        }
                ]
        },
        {
                "id": "bee_1058",
                "number": 1058,
                "title": "Detector de Número Primo",
                "category": "cat4",
                "difficulty": "Intermediário",
                "xp": 50,
                "description": "Um número inteiro maior que 1 é chamado de **PRIMO** quando ele só pode ser dividido exatamente (resto zero) por `1` e por **ele mesmo** (como `2, 3, 5, 7, 11...`). 🔍\n\n• Leia um número inteiro `N` (`N >= 2`).\n• Conte quantos divisores ele tem (ou teste se existe algum divisor entre `2` e `N - 1`).\n• Mostre `PRIMO` ou `NAO PRIMO`.",
                "inputSpec": "**1 linha** com um número inteiro `N >= 2`.",
                "outputSpec": "Mostre `PRIMO` ou `NAO PRIMO`.",
                "starterCode": "# Desafio #1058 — Detector de Número Primo\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "🧠 **Como testar se é primo:**\n• Conte quantos números `i` de `1` até `n` dividem `n` sem deixar resto (`if n % i == 0: cont += 1`).\n• Se no final `cont == 2` (apenas 1 e ele mesmo), imprima `\"PRIMO\"`; senão, `\"NAO PRIMO\"`.",
                "testCases": [
                        {
                                "input": "7",
                                "expected": "PRIMO"
                        },
                        {
                                "input": "12",
                                "expected": "NAO PRIMO"
                        },
                        {
                                "input": "2",
                                "expected": "PRIMO"
                        }
                ]
        },
        {
                "id": "bee_1059",
                "number": 1059,
                "title": "Divisores de um Número",
                "category": "cat4",
                "difficulty": "Médio",
                "xp": 45,
                "description": "Leia um número inteiro positivo `N` e mostre **todos os seus divisores positivos** (de `1` até `N`) em ordem crescente, **um por linha**! ➗\n\n• **Dica:** Um número `i` é divisor de `N` quando o resto da divisão é zero (`N % i == 0`).",
                "inputSpec": "**1 linha** com um número inteiro positivo `N`.",
                "outputSpec": "Todos os divisores de `N`, um em cada linha.",
                "starterCode": "# Desafio #1059 — Divisores de um Número\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "🧠 **Como encontrar os divisores:**\n• Percorra de `1` até `n` com `for i in range(1, n + 1):`.\n• Dentro do laço, teste `if n % i == 0:` e, se for verdadeiro, dê `print(i)`.",
                "testCases": [
                        {
                                "input": "6",
                                "expected": "1\n2\n3\n6"
                        },
                        {
                                "input": "10",
                                "expected": "1\n2\n5\n10"
                        },
                        {
                                "input": "7",
                                "expected": "1\n7"
                        }
                ]
        },
        {
                "id": "bee_1060",
                "number": 1060,
                "title": "Soma até Digitar Zero (While Sentinela)",
                "category": "cat4",
                "difficulty": "Médio",
                "xp": 45,
                "description": "Use um laço `while` para ler vários números inteiros (um por linha) e somá-los até que o número **`0`** seja digitado! 🔁\n\n• Quando o número `0` aparecer, **pare de ler** (`break`) e mostre a soma total no formato:\n  `TOTAL = X`",
                "inputSpec": "**Várias linhas** com números inteiros. A última linha é sempre `0` (sinal de parada).",
                "outputSpec": "Mostre na tela:\n`TOTAL = X`",
                "starterCode": "# Desafio #1060 — Soma até Digitar Zero (While Sentinela)\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "🧠 **Como usar `while True` com `break`:**\n• Crie `soma = 0`.\n• Faça um laço `while True:`, leia `num = int(input())`.\n• Se `num == 0:`, use `break` para sair. Senão, some `soma += num`.\n• Fora do laço, mostre `print(f\"TOTAL = {soma}\")`.",
                "testCases": [
                        {
                                "input": "10\n20\n5\n0",
                                "expected": "TOTAL = 35"
                        },
                        {
                                "input": "4\n-2\n8\n0",
                                "expected": "TOTAL = 10"
                        },
                        {
                                "input": "0",
                                "expected": "TOTAL = 0"
                        }
                ]
        },
        {
                "id": "bee_1061",
                "number": 1061,
                "title": "Validador de Senha Fixa (2002)",
                "category": "cat4",
                "difficulty": "Médio",
                "xp": 45,
                "description": "Clássico do Beecrowd! 🔒\n\nLeia várias tentativas de senha (uma por linha) usando um laço `while` até que a senha correta **`2002`** seja digitada:\n• Para cada senha **incorreta** (`!= \"2002\"`), mostre na tela:\n  `Senha Invalida`\n• Quando a senha for **`2002`**, mostre na tela:\n  `Acesso Permitido`\n  e encerre o programa (`break`).",
                "inputSpec": "**Várias linhas** com tentativas de senha, terminando quando aparece `2002`.",
                "outputSpec": "`Senha Invalida` para cada erro e `Acesso Permitido` quando acertar.",
                "starterCode": "# Desafio #1061 — Validador de Senha Fixa (2002)\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "🧠 **Como resolver com `while True`:**\n• Dentro do `while True:`, leia `senha = input().strip()`.\n• Se `senha == \"2002\":`, dê `print(\"Acesso Permitido\")` e `break`.\n• No `else:`, dê `print(\"Senha Invalida\")` (sem acento em `Invalida`).",
                "testCases": [
                        {
                                "input": "2200\n1020\n2022\n2002",
                                "expected": "Senha Invalida\nSenha Invalida\nSenha Invalida\nAcesso Permitido"
                        },
                        {
                                "input": "2002",
                                "expected": "Acesso Permitido"
                        },
                        {
                                "input": "1234\n2002",
                                "expected": "Senha Invalida\nAcesso Permitido"
                        }
                ]
        },
        {
                "id": "bee_1062",
                "number": 1062,
                "title": "Divisão Blindada contra Zero (try/except)",
                "category": "cat4",
                "difficulty": "Médio",
                "xp": 45,
                "description": "Na matemática e na programação, **não é possível dividir por zero** (isso gera o erro `ZeroDivisionError`)! 🛡️\n\n• **Passo 1:** Leia dois números inteiros `A` e `B` (um por linha).\n• **Passo 2:** Dentro de um bloco `try:`, tente calcular a divisão inteira `res = A // B` e mostre:\n  `RESULTADO = X`\n• **Passo 3:** Se `B` for zero (`except ZeroDivisionError:`), mostre:\n  `DIVISAO IMPOSSIVEL`",
                "inputSpec": "**2 linhas** com números inteiros `A` e `B`.",
                "outputSpec": "Mostre `RESULTADO = X` ou `DIVISAO IMPOSSIVEL`.",
                "starterCode": "# Desafio #1062 — Divisão Blindada contra Zero (try/except)\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "🧠 **Como resolver:**\n• Leia `a = int(input())` e `b = int(input())`.\n• Use `try:` para fazer `print(f\"RESULTADO = {a // b}\")`.\n• Use `except ZeroDivisionError:` para fazer `print(\"DIVISAO IMPOSSIVEL\")`.",
                "testCases": [
                        {
                                "input": "20\n4",
                                "expected": "RESULTADO = 5"
                        },
                        {
                                "input": "15\n0",
                                "expected": "DIVISAO IMPOSSIVEL"
                        },
                        {
                                "input": "9\n2",
                                "expected": "RESULTADO = 4"
                        }
                ]
        },
        {
                "id": "bee_1063",
                "number": 1063,
                "title": "Conjectura de Collatz (Passos até 1)",
                "category": "cat4",
                "difficulty": "Intermediário",
                "xp": 50,
                "description": "A famosa Conjectura de Collatz diz que qualquer inteiro positivo `N` chega em `1` seguindo estas regras repetidamente (`while N > 1`): 🌀\n\n• Se `N` for **par** (`N % 2 == 0`): divida por 2 (`N = N // 2`).\n• Se `N` for **ímpar** (`else`): multiplique por 3 e some 1 (`N = 3 * N + 1`).\n\nConte **quantos passos** foram necessários até `N` chegar em `1` e mostre: `PASSOS = X`.",
                "inputSpec": "**1 linha** com um número inteiro positivo `N`.",
                "outputSpec": "Mostre na tela:\n`PASSOS = X`",
                "starterCode": "# Desafio #1063 — Conjectura de Collatz (Passos até 1)\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "🧠 **Como contar os passos:**\n• Crie `passos = 0`.\n• Enquanto `while n > 1:`, aplique a regra do par/ímpar em `n` e some `passos += 1`.\n• Ao sair do `while`, imprima `print(f\"PASSOS = {passos}\")`.",
                "testCases": [
                        {
                                "input": "6",
                                "expected": "PASSOS = 8"
                        },
                        {
                                "input": "1",
                                "expected": "PASSOS = 0"
                        },
                        {
                                "input": "3",
                                "expected": "PASSOS = 7"
                        }
                ]
        },
        {
                "id": "bee_1018",
                "number": 1018,
                "title": "Maior e Menor da Lista",
                "category": "cat5",
                "difficulty": "Intermediário",
                "xp": 50,
                "description": "Vamos guardar vários números em uma **lista Python** e descobrir os extremos dela! 📦\n\n• **Passo 1:** Leia **4 números inteiros** (um em cada linha) e guarde-os dentro de uma lista.\n• **Passo 2:** Descubra o **maior** valor (`max(lista)`) e o **menor** valor (`min(lista)`).\n• **Passo 3:** Mostre em **2 linhas**:\n  • 1ª linha: `MAIOR = X`\n  • 2ª linha: `MENOR = Y`",
                "inputSpec": "**4 linhas**, cada uma com um número inteiro.",
                "outputSpec": "**2 linhas**:\n`MAIOR = X`\n`MENOR = Y`",
                "starterCode": "# Desafio #1018 — Maior e Menor da Lista\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler para uma lista:**\n• Crie `numeros = []` e faça um laço `for _ in range(4):` com `numeros.append(int(input()))`.\n\n🧠 **2. Funções de Lista:**\n• Use `max(numeros)` para achar o maior e `min(numeros)` para achar o menor!\n\n📤 **3. Saída:**\n• `print(f\"MAIOR = {max(numeros)}\")`\n• `print(f\"MENOR = {min(numeros)}\")`",
                "testCases": [
                        {
                                "input": "10\n45\n3\n28",
                                "expected": "MAIOR = 45\nMENOR = 3"
                        },
                        {
                                "input": "-5\n0\n12\n-20",
                                "expected": "MAIOR = 12\nMENOR = -20"
                        },
                        {
                                "input": "7\n7\n7\n7",
                                "expected": "MAIOR = 7\nMENOR = 7"
                        }
                ]
        },
        {
                "id": "bee_1021",
                "number": 1021,
                "title": "Caçador de Números Pares na Lista",
                "category": "cat5",
                "difficulty": "Intermediário",
                "xp": 55,
                "description": "Leia **5 números inteiros** (um em cada linha), guarde em uma lista e conte quantos deles são **PARES** (`numero % 2 == 0`)! 🔍\n\n• Ao final, mostre a quantidade encontrada no formato:\n  `PARES = X`",
                "inputSpec": "**5 linhas**, cada uma com um número inteiro.",
                "outputSpec": "Mostre na tela:\n`PARES = X`",
                "starterCode": "# Desafio #1021 — Caçador de Números Pares na Lista\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler os 5 números:**\n• Você pode ler dentro de um `for _ in range(5):`.\n\n🧠 **2. Como contar os pares:**\n• Crie `pares = 0`. Para cada número lido, teste `if num % 2 == 0:` e faça `pares += 1`.\n\n📤 **3. Saída:**\n• `print(f\"PARES = {pares}\")`",
                "testCases": [
                        {
                                "input": "2\n5\n8\n11\n14",
                                "expected": "PARES = 3"
                        },
                        {
                                "input": "1\n3\n5\n7\n9",
                                "expected": "PARES = 0"
                        },
                        {
                                "input": "4\n6\n0\n-2\n10",
                                "expected": "PARES = 5"
                        }
                ]
        },
        {
                "id": "bee_1064",
                "number": 1064,
                "title": "Soma de Todos os Elementos da Lista",
                "category": "cat5",
                "difficulty": "Intermediário",
                "xp": 50,
                "description": "Em muitos problemas de programação, vários números vêm na **mesma linha separados por espaço** (ex: `10 20 30 40`). 📦\n\n• **Passo 1:** Leia a linha e transforme em uma lista de inteiros usando:\n  `numeros = [int(x) for x in input().split()]`\n• **Passo 2:** Calcule a soma de todos os itens (`sum(numeros)`) e mostre:\n  `SOMA = X`",
                "inputSpec": "**1 linha** com vários números inteiros separados por espaço.",
                "outputSpec": "Mostre na tela:\n`SOMA = X`",
                "starterCode": "# Desafio #1064 — Soma de Todos os Elementos da Lista\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler números na mesma linha:**\n• `numeros = [int(x) for x in input().split()]`\n\n🧠 **2. Como somar uma lista:**\n• A função `sum(numeros)` soma todos os valores da lista automaticamente!\n\n📤 **3. Saída:**\n• `print(f\"SOMA = {sum(numeros)}\")`",
                "testCases": [
                        {
                                "input": "10 20 30 40",
                                "expected": "SOMA = 100"
                        },
                        {
                                "input": "5 -2 8 1",
                                "expected": "SOMA = 12"
                        },
                        {
                                "input": "100",
                                "expected": "SOMA = 100"
                        }
                ]
        },
        {
                "id": "bee_1065",
                "number": 1065,
                "title": "Inverter Ordem da Lista",
                "category": "cat5",
                "difficulty": "Intermediário",
                "xp": 50,
                "description": "Leia uma linha com várias palavras separadas por espaço, guarde em uma lista e mostre as palavras na **ordem inversa** (da última para a primeira), separadas por espaço! 🔄",
                "inputSpec": "**1 linha** com palavras separadas por espaço.",
                "outputSpec": "As mesmas palavras na ordem invertida, separadas por espaço.",
                "starterCode": "# Desafio #1065 — Inverter Ordem da Lista\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como separar as palavras em uma lista:**\n• `palavras = input().split()`\n\n🧠 **2. Como inverter e juntar:**\n• `palavras.reverse()` (ou `palavras[::-1]`) inverte a lista.\n• Use `print(\" \".join(palavras))` para imprimir separando por espaço.",
                "testCases": [
                        {
                                "input": "ouro prata bronze",
                                "expected": "bronze prata ouro"
                        },
                        {
                                "input": "A B C D",
                                "expected": "D C B A"
                        },
                        {
                                "input": "Python Flet",
                                "expected": "Flet Python"
                        }
                ]
        },
        {
                "id": "bee_1066",
                "number": 1066,
                "title": "Remover Duplicatas Mantendo a Ordem",
                "category": "cat5",
                "difficulty": "Intermediário",
                "xp": 55,
                "description": "Leia uma linha de itens separados por espaço e monte uma nova lista **sem elementos repetidos**, mantendo a ordem em que cada um apareceu pela 1ª vez! ✨\n\n• Por exemplo: `1 2 2 3 1 4` ➔ vira `1 2 3 4`.",
                "inputSpec": "**1 linha** com números separados por espaço.",
                "outputSpec": "Os números únicos na ordem original, separados por espaço.",
                "starterCode": "# Desafio #1066 — Remover Duplicatas Mantendo a Ordem\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "🧠 **Como filtrar sem repetir:**\n• Leia `itens = input().split()` e crie uma lista vazia `unicos = []`.\n• Percorra `for x in itens:`: se `x not in unicos:`, faça `unicos.append(x)`.\n• No final, mostre `print(\" \".join(unicos))`.",
                "testCases": [
                        {
                                "input": "1 2 2 3 1 4",
                                "expected": "1 2 3 4"
                        },
                        {
                                "input": "5 5 5 5",
                                "expected": "5"
                        },
                        {
                                "input": "9 8 7 8 9",
                                "expected": "9 8 7"
                        }
                ]
        },
        {
                "id": "bee_1067",
                "number": 1067,
                "title": "Vice-Campeão (Segundo Maior Valor)",
                "category": "cat5",
                "difficulty": "Intermediário",
                "xp": 55,
                "description": "Em um campeonato de e-sports, queremos premiar o **2º colocado (Vice-Campeão)**! 🥈\n\n• Leia uma linha com várias pontuações inteiras diferentes separadas por espaço.\n• Descubra qual é o **segundo maior número** da lista e mostre:\n  `VICE = X`",
                "inputSpec": "**1 linha** com pelo menos 2 números inteiros distintos separados por espaço.",
                "outputSpec": "Mostre na tela:\n`VICE = X`",
                "starterCode": "# Desafio #1067 — Vice-Campeão (Segundo Maior Valor)\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a lista de inteiros:**\n• `pontos = [int(x) for x in input().split()]`\n\n🧠 **2. Como achar o 2º maior:**\n• Se você ordenar a lista em ordem crescente com `pontos.sort()`, o maior fica no final (`pontos[-1]`) e o segundo maior fica na penúltima posição (`pontos[-2]`)!",
                "testCases": [
                        {
                                "input": "10 50 30 80 40",
                                "expected": "VICE = 50"
                        },
                        {
                                "input": "100 200",
                                "expected": "VICE = 100"
                        },
                        {
                                "input": "5 9 2 7",
                                "expected": "VICE = 7"
                        }
                ]
        },
        {
                "id": "bee_1068",
                "number": 1068,
                "title": "Acima da Média da Turma",
                "category": "cat5",
                "difficulty": "Intermediário",
                "xp": 55,
                "description": "Leia uma linha com várias notas inteiras separadas por espaço e descubra quantos alunos ficaram **acima da média** da própria turma! 📈\n\n• **Passo 1:** Converta a linha para uma lista de números: `notas = [int(x) for x in input().split()]`.\n• **Passo 2:** Calcule a média: `media = sum(notas) / len(notas)`.\n• **Passo 3:** Conte quantas notas são **maiores** que a média (`n > media`) e mostre: `ACIMA = X`.",
                "inputSpec": "**1 linha** com números inteiros separados por espaço.",
                "outputSpec": "Mostre na tela:\n`ACIMA = X`",
                "starterCode": "# Desafio #1068 — Acima da Média da Turma\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "🧠 **Passo a passo com Listas:**\n• `notas = [int(x) for x in input().split()]`\n• `media = sum(notas) / len(notas)`\n• Conte com um `for n in notas:`: se `n > media:`, some `+1` no contador e depois imprima `ACIMA = {cont}`.",
                "testCases": [
                        {
                                "input": "5 7 8 10",
                                "expected": "ACIMA = 2"
                        },
                        {
                                "input": "6 6 6 6",
                                "expected": "ACIMA = 0"
                        },
                        {
                                "input": "2 4 6 8 10",
                                "expected": "ACIMA = 2"
                        }
                ]
        },
        {
                "id": "bee_1069",
                "number": 1069,
                "title": "Ordenação Crescente de Lista",
                "category": "cat5",
                "difficulty": "Intermediário",
                "xp": 50,
                "description": "Leia uma linha com números inteiros separados por espaço, coloque-os em **ordem crescente** (do menor para o maior) e mostre na tela separados por espaço! 📊",
                "inputSpec": "**1 linha** com números inteiros separados por espaço.",
                "outputSpec": "Os números ordenados do menor para o maior, separados por espaço.",
                "starterCode": "# Desafio #1069 — Ordenação Crescente de Lista\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "🧠 **Como ordenar números em Python:**\n• Leia convertendo para `int`: `nums = [int(x) for x in input().split()]`.\n• Ordene com `nums.sort()`.\n• Para imprimir separados por espaço: `print(\" \".join(str(x) for x in nums))`.",
                "testCases": [
                        {
                                "input": "9 3 7 1 5",
                                "expected": "1 3 5 7 9"
                        },
                        {
                                "input": "10 -5 0 3",
                                "expected": "-5 0 3 10"
                        },
                        {
                                "input": "4 2",
                                "expected": "2 4"
                        }
                ]
        },
        {
                "id": "bee_1070",
                "number": 1070,
                "title": "Contagem de Ocorrências do Alvo",
                "category": "cat5",
                "difficulty": "Intermediário",
                "xp": 50,
                "description": "Descubra quantas vezes um número procurado aparece dentro da lista! 🎯\n\n• **1ª linha:** vários números separados por espaço (a lista).\n• **2ª linha:** um número `alvo` que queremos procurar.\n• **Saída:** mostre quantas vezes o `alvo` apareceu no formato:\n  `APARECEU = X`",
                "inputSpec": "**2 linhas**:\n• **1ª linha:** Números separados por espaço\n• **2ª linha:** Número alvo",
                "outputSpec": "Mostre na tela:\n`APARECEU = X`",
                "starterCode": "# Desafio #1070 — Contagem de Ocorrências do Alvo\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "🧠 **Método `.count()` das listas:**\n• Leia a 1ª linha: `lista = input().split()`\n• Leia a 2ª linha: `alvo = input().strip()`\n• Toda lista em Python tem o método `lista.count(alvo)` que conta quantas vezes `alvo` aparece!",
                "testCases": [
                        {
                                "input": "1 4 2 4 5 4\n4",
                                "expected": "APARECEU = 3"
                        },
                        {
                                "input": "10 20 30\n5",
                                "expected": "APARECEU = 0"
                        },
                        {
                                "input": "7 7 7\n7",
                                "expected": "APARECEU = 3"
                        }
                ]
        },
        {
                "id": "bee_1071",
                "number": 1071,
                "title": "Produto Escalar de Dois Vetores",
                "category": "cat5",
                "difficulty": "Intermediário",
                "xp": 55,
                "description": "Em física e jogos 3D, o **produto escalar** entre dois vetores `A` e `B` de 3 posições multiplica os elementos de mesma posição e soma tudo: 📐\n\n• **Fórmula:** `escalar = A[0]*B[0] + A[1]*B[1] + A[2]*B[2]`\n• Leia a lista `A` na 1ª linha e a lista `B` na 2ª linha, e mostre: `ESCALAR = X`.",
                "inputSpec": "**2 linhas**, cada uma com 3 números inteiros separados por espaço.",
                "outputSpec": "Mostre na tela:\n`ESCALAR = X`",
                "starterCode": "# Desafio #1071 — Produto Escalar de Dois Vetores\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler os dois vetores:**\n• `a = [int(x) for x in input().split()]`\n• `b = [int(x) for x in input().split()]`\n\n🧠 **2. Como calcular:**\n• `esc = a[0]*b[0] + a[1]*b[1] + a[2]*b[2]`\n• `print(f\"ESCALAR = {esc}\")`",
                "testCases": [
                        {
                                "input": "1 2 3\n4 5 6",
                                "expected": "ESCALAR = 32"
                        },
                        {
                                "input": "2 0 -1\n3 5 2",
                                "expected": "ESCALAR = 4"
                        },
                        {
                                "input": "0 0 0\n1 2 3",
                                "expected": "ESCALAR = 0"
                        }
                ]
        },
        {
                "id": "bee_1072",
                "number": 1072,
                "title": "Intercalação de Duas Listas",
                "category": "cat5",
                "difficulty": "Intermediário",
                "xp": 55,
                "description": "Leia duas linhas contendo **3 palavras cada** (lista `A` e lista `B`) e junte as duas alternando os elementos (1º da A, 1º da B, 2º da A, 2º da B, 3º da A, 3º da B)! 🔀",
                "inputSpec": "**2 linhas**, cada uma com 3 palavras separadas por espaço.",
                "outputSpec": "As 6 palavras intercaladas na mesma linha, separadas por espaço.",
                "starterCode": "# Desafio #1072 — Intercalação de Duas Listas\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "🧠 **Como intercalar:**\n• `a = input().split()`\n• `b = input().split()`\n• Você pode montar `res = [a[0], b[0], a[1], b[1], a[2], b[2]]` e imprimir com `print(\" \".join(res))`.",
                "testCases": [
                        {
                                "input": "A B C\n1 2 3",
                                "expected": "A 1 B 2 C 3"
                        },
                        {
                                "input": "Sol Mar Ceo\nLua Rio Paz",
                                "expected": "Sol Lua Mar Rio Ceo Paz"
                        },
                        {
                                "input": "X Y Z\nA B C",
                                "expected": "X A Y B Z C"
                        }
                ]
        },
        {
                "id": "bee_1073",
                "number": 1073,
                "title": "Amplitude da Amostra (Maior - Menor)",
                "category": "cat5",
                "difficulty": "Intermediário",
                "xp": 50,
                "description": "Na estatística, a **amplitude** de uma lista de números é a diferença entre o **maior valor** e o **menor valor** (`maior - menor`). 📏\n\n• Leia uma linha com números inteiros separados por espaço e mostre:\n  `AMPLITUDE = X`",
                "inputSpec": "**1 linha** com números inteiros separados por espaço.",
                "outputSpec": "Mostre na tela:\n`AMPLITUDE = X`",
                "starterCode": "# Desafio #1073 — Amplitude da Amostra (Maior - Menor)\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "🧠 **Usando `max()` e `min()`:**\n• `nums = [int(x) for x in input().split()]`\n• `amp = max(nums) - min(nums)`\n• `print(f\"AMPLITUDE = {amp}\")`",
                "testCases": [
                        {
                                "input": "10 25 5 40 18",
                                "expected": "AMPLITUDE = 35"
                        },
                        {
                                "input": "7 7 7",
                                "expected": "AMPLITUDE = 0"
                        },
                        {
                                "input": "-10 0 15",
                                "expected": "AMPLITUDE = 25"
                        }
                ]
        },
        {
                "id": "bee_1074",
                "number": 1074,
                "title": "Soma da Diagonal Principal (Matriz 3x3)",
                "category": "cat5",
                "difficulty": "Avançado",
                "xp": 60,
                "description": "Uma **matriz 3x3** é uma tabela com 3 linhas e 3 colunas! 🔢\n\n• Leia **3 linhas** (cada uma com 3 números inteiros separados por espaço).\n• Some os 3 números da **diagonal principal**:\n  • 1º número da 1ª linha (`linha0[0]`)\n  • 2º número da 2ª linha (`linha1[1]`)\n  • 3º número da 3ª linha (`linha2[2]`)\n• Mostre o resultado no formato: `DIAGONAL = X`.",
                "inputSpec": "**3 linhas**, cada uma com 3 números inteiros separados por espaço.",
                "outputSpec": "Mostre na tela:\n`DIAGONAL = X`",
                "starterCode": "# Desafio #1074 — Soma da Diagonal Principal (Matriz 3x3)\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "🧠 **Como ler e somar a diagonal:**\n• `l0 = [int(x) for x in input().split()]`\n• `l1 = [int(x) for x in input().split()]`\n• `l2 = [int(x) for x in input().split()]`\n• `diag = l0[0] + l1[1] + l2[2]`\n• `print(f\"DIAGONAL = {diag}\")`",
                "testCases": [
                        {
                                "input": "1 2 3\n4 5 6\n7 8 9",
                                "expected": "DIAGONAL = 15"
                        },
                        {
                                "input": "10 0 0\n0 20 0\n0 0 30",
                                "expected": "DIAGONAL = 60"
                        },
                        {
                                "input": "2 1 1\n1 2 1\n1 1 2",
                                "expected": "DIAGONAL = 6"
                        }
                ]
        },
        {
                "id": "bee_1075",
                "number": 1075,
                "title": "Rotação de Fila para a Esquerda",
                "category": "cat5",
                "difficulty": "Intermediário",
                "xp": 55,
                "description": "Em uma fila de atendimento, a primeira pessoa da fila (`fila[0]`) foi para o final da fila! 🚶‍♂️\n\n• Leia uma linha com os nomes da fila separados por espaço.\n• Mova o **1º nome** para a **última posição** e imprima a nova fila separada por espaço.",
                "inputSpec": "**1 linha** com pelo menos 2 nomes separados por espaço.",
                "outputSpec": "Os nomes da fila após mover o 1º para o final, separados por espaço.",
                "starterCode": "# Desafio #1075 — Rotação de Fila para a Esquerda\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "🧠 **Usando `.pop(0)` e `.append()`:**\n• `fila = input().split()`\n• Tire o primeiro da fila com `primeiro = fila.pop(0)` e coloque no final com `fila.append(primeiro)`.\n• Mostre com `print(\" \".join(fila))`.",
                "testCases": [
                        {
                                "input": "Ana Bruno Carlos Diana",
                                "expected": "Bruno Carlos Diana Ana"
                        },
                        {
                                "input": "Primeiro Segundo",
                                "expected": "Segundo Primeiro"
                        },
                        {
                                "input": "10 20 30",
                                "expected": "20 30 10"
                        }
                ]
        },
        {
                "id": "bee_1019",
                "number": 1019,
                "title": "Contador de Vogais",
                "category": "cat6",
                "difficulty": "Intermediário",
                "xp": 50,
                "description": "Leia uma palavra ou frase e conte quantas **vogais** (`a, e, i, o, u`, tanto minúsculas quanto maiúsculas) existem nela! 🔤\n\n• Ao final, mostre a quantidade total no formato:\n  `VOGAIS = X`",
                "inputSpec": "**1 linha** de texto.",
                "outputSpec": "Mostre na tela:\n`VOGAIS = X`",
                "starterCode": "# Desafio #1019 — Contador de Vogais\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "🧠 **Como percorrer cada letra de um texto:**\n• `texto = input().lower()` (passa tudo para minúsculo).\n• Crie `cont = 0` e faça `for letra in texto:`.\n• Se `if letra in \"aeiou\":`, some `cont += 1`.",
                "testCases": [
                        {
                                "input": "Programador",
                                "expected": "VOGAIS = 4"
                        },
                        {
                                "input": "CEFET MG",
                                "expected": "VOGAIS = 2"
                        },
                        {
                                "input": "Python",
                                "expected": "VOGAIS = 1"
                        }
                ]
        },
        {
                "id": "bee_1020",
                "number": 1020,
                "title": "Mensagem Espelhada (Inversor)",
                "category": "cat6",
                "difficulty": "Intermediário",
                "xp": 55,
                "description": "Para ler um pergaminho mágico, você precisa transformar a palavra em **letras MAIÚSCULAS** e escrevê-la **de trás para frente** (invertida)! 🪞\n\n• Exemplo: `python` ➔ vira `NOHTYP`.",
                "inputSpec": "**1 linha** com uma palavra ou frase.",
                "outputSpec": "O texto em MAIÚSCULAS e invertido de trás para frente.",
                "starterCode": "# Desafio #1020 — Mensagem Espelhada (Inversor)\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "🧠 **Truque Python para maiúsculas e inversão:**\n• `.upper()` transforma o texto em MAIÚSCULAS.\n• `[::-1]` inverte o texto de trás para frente!\n• Exemplo: `texto = input().upper()` e `print(texto[::-1])`.",
                "testCases": [
                        {
                                "input": "python",
                                "expected": "NOHTYP"
                        },
                        {
                                "input": "cefet",
                                "expected": "TEFEC"
                        },
                        {
                                "input": "radar",
                                "expected": "RADAR"
                        }
                ]
        },
        {
                "id": "bee_1076",
                "number": 1076,
                "title": "Detector de Palíndromo",
                "category": "cat6",
                "difficulty": "Intermediário",
                "xp": 55,
                "description": "Um **palíndromo** é uma palavra ou frase que fica igual quando lida de trás para frente (ignorando espaços e diferenças entre maiúsculas/minúsculas), como `Arara` ou `apos a sopa`! 🔄\n\n• Leia um texto.\n• Remova os espaços e passe para minúsculas (`limpo = texto.lower().replace(\" \", \"\")`).\n• Se `limpo == limpo[::-1]`, mostre `PALINDROMO`; caso contrário, mostre `COMUM`.",
                "inputSpec": "**1 linha** de texto.",
                "outputSpec": "Mostre `PALINDROMO` ou `COMUM`.",
                "starterCode": "# Desafio #1076 — Detector de Palíndromo\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "🧠 **Passo a passo:**\n• `limpo = input().lower().replace(\" \", \"\")`\n• Compare o texto com ele mesmo invertido:\n  `if limpo == limpo[::-1]:` ➔ `print(\"PALINDROMO\")`\n  `else:` ➔ `print(\"COMUM\")`",
                "testCases": [
                        {
                                "input": "Arara",
                                "expected": "PALINDROMO"
                        },
                        {
                                "input": "Apos a sopa",
                                "expected": "PALINDROMO"
                        },
                        {
                                "input": "Python",
                                "expected": "COMUM"
                        }
                ]
        },
        {
                "id": "bee_1077",
                "number": 1077,
                "title": "Contador de Palavras na Frase",
                "category": "cat6",
                "difficulty": "Intermediário",
                "xp": 50,
                "description": "Leia uma frase completa em uma linha e conte **quantas palavras** existem nela! 📝\n\n• Mostre o resultado no formato:\n  `PALAVRAS = X`",
                "inputSpec": "**1 linha** contendo uma frase.",
                "outputSpec": "Mostre na tela:\n`PALAVRAS = X`",
                "starterCode": "# Desafio #1077 — Contador de Palavras na Frase\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "🧠 **Usando `.split()` e `len()`:**\n• `palavras = input().split()` divide a frase em uma lista de palavras.\n• `len(palavras)` devolve quantas palavras existem na lista!",
                "testCases": [
                        {
                                "input": "Trilhando o Caminho do Codigo",
                                "expected": "PALAVRAS = 5"
                        },
                        {
                                "input": "Python",
                                "expected": "PALAVRAS = 1"
                        },
                        {
                                "input": "Eu curto programar jogos em Python",
                                "expected": "PALAVRAS = 6"
                        }
                ]
        },
        {
                "id": "bee_1078",
                "number": 1078,
                "title": "Gerador de Sigla / Acrônimo",
                "category": "cat6",
                "difficulty": "Intermediário",
                "xp": 55,
                "description": "Transforme o nome de uma instituição em uma **sigla** formada pela **1ª letra (`palavra[0]`) de cada palavra** em MAIÚSCULO! 🏛️\n\n• Exemplo: `Centro Federal de Educacao Tecnologica` ➔ `CFDET`",
                "inputSpec": "**1 linha** com palavras separadas por espaço.",
                "outputSpec": "A sigla em letras maiúsculas.",
                "starterCode": "# Desafio #1078 — Gerador de Sigla / Acrônimo\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "🧠 **Como pegar a 1ª letra de cada palavra:**\n• Separe as palavras com `palavras = input().split()`.\n• Para cada `p` em `palavras`, pegue `p[0].upper()` e junte tudo em uma string `sigla`!",
                "testCases": [
                        {
                                "input": "Centro Federal de Educacao Tecnologica",
                                "expected": "CFDET"
                        },
                        {
                                "input": "Inteligencia Artificial Generativa",
                                "expected": "IAG"
                        },
                        {
                                "input": "Objetivos Desenvolvimento Sustentavel",
                                "expected": "ODS"
                        }
                ]
        },
        {
                "id": "bee_1079",
                "number": 1079,
                "title": "Censura Secreta (Trocar Vogais por *)",
                "category": "cat6",
                "difficulty": "Intermediário",
                "xp": 50,
                "description": "Proteja uma mensagem secreta trocando **todas as vogais** (`a, e, i, o, u`, maiúsculas ou minúsculas) pelo símbolo asterisco **`*`**! 🕵️\n\n• Exemplo: `Secreto` ➔ `S*cr*t*`",
                "inputSpec": "**1 linha** de texto.",
                "outputSpec": "O texto com todas as vogais substituídas por `*`.",
                "starterCode": "# Desafio #1079 — Censura Secreta (Trocar Vogais por *)\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "🧠 **Como substituir vogais:**\n• Crie `saida = \"\"` e percorra `for letra in input():`.\n• Se `letra.lower() in \"aeiou\":`, adicione `\"*\"` em `saida`; senão, adicione a própria `letra`.",
                "testCases": [
                        {
                                "input": "Secreto",
                                "expected": "S*cr*t*"
                        },
                        {
                                "input": "Python 3",
                                "expected": "Pyth*n 3"
                        },
                        {
                                "input": "CEFET",
                                "expected": "C*F*T"
                        }
                ]
        },
        {
                "id": "bee_1080",
                "number": 1080,
                "title": "Soma dos Dígitos de um Número Gigante",
                "category": "cat6",
                "difficulty": "Intermediário",
                "xp": 55,
                "description": "Leia um número inteiro positivo como texto (`string`) e some todos os seus **algarismos individuais**! 🔢\n\n• Exemplo: se a entrada for `\"2026\"`, some `2 + 0 + 2 + 6 = 10`.\n• Mostre no formato: `SOMA DOS DIGITOS = X`",
                "inputSpec": "**1 linha** contendo dígitos numéricos.",
                "outputSpec": "Mostre na tela:\n`SOMA DOS DIGITOS = X`",
                "starterCode": "# Desafio #1080 — Soma dos Dígitos de um Número Gigante\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "🧠 **Percorrendo cada dígito do texto:**\n• Leia como texto: `texto = input().strip()`.\n• Crie `soma = 0` e faça `for digito in texto:` somando `soma += int(digito)`.\n• Mostre `print(f\"SOMA DOS DIGITOS = {soma}\")`.",
                "testCases": [
                        {
                                "input": "2026",
                                "expected": "SOMA DOS DIGITOS = 10"
                        },
                        {
                                "input": "999",
                                "expected": "SOMA DOS DIGITOS = 27"
                        },
                        {
                                "input": "12345",
                                "expected": "SOMA DOS DIGITOS = 15"
                        }
                ]
        },
        {
                "id": "bee_1081",
                "number": 1081,
                "title": "Verificador de Anagramas",
                "category": "cat6",
                "difficulty": "Intermediário",
                "xp": 55,
                "description": "Duas palavras são **anagramas** quando têm exatamente as mesmas letras, apenas embaralhadas (como `amor` e `roma`, ou `iracema` e `america`)! 🔤\n\n• Leia a 1ª palavra na 1ª linha e a 2ª palavra na 2ª linha.\n• Se tiverem as mesmas letras (`sorted(p1) == sorted(p2)`), mostre `ANAGRAMA`; senão, mostre `DIFERENTES`.",
                "inputSpec": "**2 linhas**, cada uma com uma palavra.",
                "outputSpec": "Mostre `ANAGRAMA` ou `DIFERENTES`.",
                "starterCode": "# Desafio #1081 — Verificador de Anagramas\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "🧠 **Truque com `sorted()`:**\n• A função `sorted(palavra)` coloca as letras da palavra em ordem alfabética!\n• Se `sorted(p1.strip()) == sorted(p2.strip()):`, elas têm exatamente as mesmas letras (`ANAGRAMA`).",
                "testCases": [
                        {
                                "input": "amor\nroma",
                                "expected": "ANAGRAMA"
                        },
                        {
                                "input": "iracema\namerica",
                                "expected": "ANAGRAMA"
                        },
                        {
                                "input": "python\njava",
                                "expected": "DIFERENTES"
                        }
                ]
        },
        {
                "id": "bee_1082",
                "number": 1082,
                "title": "Cifra de César (+3 Posições)",
                "category": "cat6",
                "difficulty": "Avançado",
                "xp": 65,
                "description": "O imperador Júlio César criava mensagens secretas trocando cada letra por outra **3 posições à frente** no alfabeto! 📜\n• `A` ➔ `D`, `B` ➔ `E`, `C` ➔ `F` ... e no final do alfabeto dá a volta: `X` ➔ `A`, `Y` ➔ `B`, `Z` ➔ `C`.\n\nLeia uma palavra em letras MAIÚSCULAS (`A-Z`) e mostre a palavra codificada!",
                "inputSpec": "**1 linha** com uma palavra em letras maiúsculas (`A` a `Z`).",
                "outputSpec": "A palavra cifrada com deslocamento de +3 posições.",
                "starterCode": "# Desafio #1082 — Cifra de César (+3 Posições)\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "🧠 **Dica simples usando o alfabeto:**\n• Crie `alfabeto = \"ABCDEFGHIJKLMNOPQRSTUVWXYZ\"`.\n• Para cada `letra` da palavra, ache a posição dela com `pos = alfabeto.index(letra)` e pegue a nova letra em `alfabeto[(pos + 3) % 26]`!",
                "testCases": [
                        {
                                "input": "ABC",
                                "expected": "DEF"
                        },
                        {
                                "input": "PYTHON",
                                "expected": "SBWKRQ"
                        },
                        {
                                "input": "XYZ",
                                "expected": "ABC"
                        }
                ]
        },
        {
                "id": "bee_1083",
                "number": 1083,
                "title": "Formatador de CPF",
                "category": "cat6",
                "difficulty": "Intermediário",
                "xp": 50,
                "description": "Leia um texto com exatamente **11 dígitos** (ex: `12345678901`) e coloque a pontuação padrão de CPF usando fatiamento de strings (`slicing`): 🪪\n\n• **Formato esperado:** `XXX.XXX.XXX-XX`\n• **Dica de fatias:** `cpf[0:3]`, `cpf[3:6]`, `cpf[6:9]` e `cpf[9:11]`.",
                "inputSpec": "**1 linha** contendo 11 dígitos numéricos seguidos.",
                "outputSpec": "O CPF formatado: `XXX.XXX.XXX-XX`",
                "starterCode": "# Desafio #1083 — Formatador de CPF\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "🧠 **Fatiando a string (`slicing`):**\n• `c = input().strip()`\n• `print(f\"{c[0:3]}.{c[3:6]}.{c[6:9]}-{c[9:11]}\")`",
                "testCases": [
                        {
                                "input": "12345678901",
                                "expected": "123.456.789-01"
                        },
                        {
                                "input": "00011122233",
                                "expected": "000.111.222-33"
                        },
                        {
                                "input": "98765432199",
                                "expected": "987.654.321-99"
                        }
                ]
        },
        {
                "id": "bee_1084",
                "number": 1084,
                "title": "Palavra Mais Longa da Frase",
                "category": "cat6",
                "difficulty": "Intermediário",
                "xp": 55,
                "description": "Leia uma frase e descubra qual é a **palavra com mais letras**! 🏆\n\n• Se houver empate no tamanho, mantenha a primeira que apareceu na frase.\n• Mostre o resultado no formato:\n  `MAIOR PALAVRA = X`",
                "inputSpec": "**1 linha** contendo uma frase.",
                "outputSpec": "Mostre na tela:\n`MAIOR PALAVRA = X`",
                "starterCode": "# Desafio #1084 — Palavra Mais Longa da Frase\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "🧠 **Comparando o tamanho com `len()`:**\n• Separe com `palavras = input().split()`.\n• Comece com `maior = palavras[0]` e percorra `for p in palavras:`.\n• Se `len(p) > len(maior):`, atualize `maior = p`.",
                "testCases": [
                        {
                                "input": "Eu estudo programacao no CEFET",
                                "expected": "MAIOR PALAVRA = programacao"
                        },
                        {
                                "input": "Sol Lua Estrela Mar",
                                "expected": "MAIOR PALAVRA = Estrela"
                        },
                        {
                                "input": "Python Flet",
                                "expected": "MAIOR PALAVRA = Python"
                        }
                ]
        },
        {
                "id": "bee_1085",
                "number": 1085,
                "title": "Validador de Senha Forte",
                "category": "cat6",
                "difficulty": "Intermediário",
                "xp": 55,
                "description": "Verifique se a senha criada por um usuário é **FORTE** ou **FRACA**! 🔐\n\nPara ser **`FORTE`**, a senha precisa cumprir **as 2 regras ao mesmo tempo**:\n• Ter **pelo menos 8 caracteres** (`len(senha) >= 8`), **E**\n• Conter **pelo menos um número** de `0` a `9`.\n\nCaso contrário, mostre **`FRACA`**.",
                "inputSpec": "**1 linha** contendo a senha.",
                "outputSpec": "Mostre `FORTE` ou `FRACA`.",
                "starterCode": "# Desafio #1085 — Validador de Senha Forte\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "🧠 **Como testar se tem número:**\n• Crie `tem_numero = False` e percorra `for c in senha:`.\n• Se `c in \"0123456789\":`, marque `tem_numero = True`.\n• Depois teste `if len(senha) >= 8 and tem_numero:`.",
                "testCases": [
                        {
                                "input": "Python2026",
                                "expected": "FORTE"
                        },
                        {
                                "input": "Abc123",
                                "expected": "FRACA"
                        },
                        {
                                "input": "SomenteLetras",
                                "expected": "FRACA"
                        }
                ]
        },
        {
                "id": "bee_1086",
                "number": 1086,
                "title": "Conversor Snake_Case",
                "category": "cat6",
                "difficulty": "Intermediário",
                "xp": 50,
                "description": "Em Python, costumamos nomear variáveis no estilo **`snake_case`**: todas as letras em **minúsculo** e os espaços em branco trocados por **underline (`_`)**! 🐍\n\n• Exemplo: `Nome Completo do Aluno` ➔ `nome_completo_do_aluno`.",
                "inputSpec": "**1 linha** de texto.",
                "outputSpec": "O texto em minúsculas e com espaços trocados por `_`.",
                "starterCode": "# Desafio #1086 — Conversor Snake_Case\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "🧠 **Usando `.lower()` e `.replace()`:**\n• `texto = input().strip().lower().replace(\" \", \"_\")`\n• `print(texto)`",
                "testCases": [
                        {
                                "input": "Nome Completo do Aluno",
                                "expected": "nome_completo_do_aluno"
                        },
                        {
                                "input": "Pontuacao Maxima",
                                "expected": "pontuacao_maxima"
                        },
                        {
                                "input": "Trilhando Python",
                                "expected": "trilhando_python"
                        }
                ]
        },
        {
                "id": "bee_1087",
                "number": 1087,
                "title": "Contador de Letras Maiúsculas",
                "category": "cat6",
                "difficulty": "Intermediário",
                "xp": 50,
                "description": "Leia uma frase e conte quantas **letras MAIÚSCULAS** (de `A` até `Z`) aparecem nela! 🔠\n\n• Mostre o resultado no formato:\n  `MAIUSCULAS = X`",
                "inputSpec": "**1 linha** de texto.",
                "outputSpec": "Mostre na tela:\n`MAIUSCULAS = X`",
                "starterCode": "# Desafio #1087 — Contador de Letras Maiúsculas\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "🧠 **Como saber se uma letra é maiúscula:**\n• Percorra `for c in input():` e teste `if c in \"ABCDEFGHIJKLMNOPQRSTUVWXYZ\":` (ou `if c.isupper():`) somando `+1` no contador!",
                "testCases": [
                        {
                                "input": "CEFET-MG e FAPEMIG",
                                "expected": "MAIUSCULAS = 14"
                        },
                        {
                                "input": "Python",
                                "expected": "MAIUSCULAS = 1"
                        },
                        {
                                "input": "tudo minusculo",
                                "expected": "MAIUSCULAS = 0"
                        }
                ]
        },
        {
                "id": "bee_1022",
                "number": 1022,
                "title": "Função de Dano Crítico (def)",
                "category": "cat7",
                "difficulty": "Avançado",
                "xp": 65,
                "description": "Crie uma função usando `def` para calcular o dano especial de um ataque no jogo! ⚔️\n\n• **Regra da função:** `calcular_dano(ataque, multiplicador)` deve devolver (`return`) o valor de `(ataque * multiplicador) + 10`.\n• Leia os 2 números inteiros (`ataque` na 1ª linha e `multiplicador` na 2ª linha), chame sua função e mostre:\n  `DANO TOTAL = X`",
                "inputSpec": "**2 linhas** com números inteiros:\n• **1ª linha:** Ataque base\n• **2ª linha:** Multiplicador",
                "outputSpec": "Mostre na tela:\n`DANO TOTAL = X`",
                "starterCode": "# Desafio #1022 — Função de Dano Crítico (def)\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "🧠 **Criando e chamando a função `def`:**\n• `def calcular_dano(atq, mult):`\n      `return (atq * mult) + 10`\n• Depois leia `a = int(input())`, `m = int(input())` e faça `print(f\"DANO TOTAL = {calcular_dano(a, m)}\")`.",
                "testCases": [
                        {
                                "input": "20\n3",
                                "expected": "DANO TOTAL = 70"
                        },
                        {
                                "input": "15\n2",
                                "expected": "DANO TOTAL = 40"
                        },
                        {
                                "input": "50\n1",
                                "expected": "DANO TOTAL = 60"
                        }
                ]
        },
        {
                "id": "bee_1023",
                "number": 1023,
                "title": "Ficha de Herói com Dicionário",
                "category": "cat7",
                "difficulty": "Avançado",
                "xp": 70,
                "description": "Organize os dados de um personagem dentro de um **dicionário Python** `{chave: valor}`! 🛡️\n\n• **Passo 1:** Leia 3 linhas: `nome` (texto), `nivel` (inteiro) e `xp` (inteiro), e guarde em um dicionário `heroi`.\n• **Passo 2:** Se `heroi[\"xp\"] >= 100`, suba o nível dele em `+1` (`heroi[\"nivel\"] += 1`).\n• **Passo 3:** Imprima a ficha atualizada no formato:\n  `Heroi: NOME | Nivel: X`",
                "inputSpec": "**3 linhas**:\n• **1ª linha:** Nome do herói\n• **2ª linha:** Nível atual (inteiro)\n• **3ª linha:** XP acumulado (inteiro)",
                "outputSpec": "Mostre na tela:\n`Heroi: NOME | Nivel: X`",
                "starterCode": "# Desafio #1023 — Ficha de Herói com Dicionário\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "🧠 **Usando dicionário:**\n• `heroi = {\"nome\": input(), \"nivel\": int(input()), \"xp\": int(input())}`\n• `if heroi[\"xp\"] >= 100: heroi[\"nivel\"] += 1`\n• `print(f\"Heroi: {heroi['nome']} | Nivel: {heroi['nivel']}\")`",
                "testCases": [
                        {
                                "input": "Arthas\n5\n120",
                                "expected": "Heroi: Arthas | Nivel: 6"
                        },
                        {
                                "input": "Jaina\n3\n80",
                                "expected": "Heroi: Jaina | Nivel: 3"
                        },
                        {
                                "input": "Thrall\n10\n100",
                                "expected": "Heroi: Thrall | Nivel: 11"
                        }
                ]
        },
        {
                "id": "bee_1088",
                "number": 1088,
                "title": "Cardápio da Lanchonete (Dicionário)",
                "category": "cat7",
                "difficulty": "Avançado",
                "xp": 60,
                "description": "Guarde a tabela de preços da lanchonete em um **dicionário** e calcule o valor do pedido! 🍔\n\n• **Tabela de códigos e preços:**\n  • Código `1` ➔ R$ `4.00`\n  • Código `2` ➔ R$ `4.50`\n  • Código `3` ➔ R$ `5.00`\n  • Código `4` ➔ R$ `2.00`\n  • Código `5` ➔ R$ `1.50`\n• Leia o **código** na 1ª linha e a **quantidade** na 2ª linha, e mostre com **2 casas decimais**:\n  `Total: R$ X.XX`",
                "inputSpec": "**2 linhas** com números inteiros:\n• **1ª linha:** Código do item (1 a 5)\n• **2ª linha:** Quantidade comprada",
                "outputSpec": "Mostre com **2 casas decimais** (`:.2f`):\n`Total: R$ X.XX`",
                "starterCode": "# Desafio #1088 — Cardápio da Lanchonete (Dicionário)\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "🧠 **Consultando preço no dicionário:**\n• `precos = {1: 4.00, 2: 4.50, 3: 5.00, 4: 2.00, 5: 1.50}`\n• Leia `cod = int(input())` e `qtd = int(input())`.\n• Calcule `total = precos[cod] * qtd` e mostre `print(f\"Total: R$ {total:.2f}\")`.",
                "testCases": [
                        {
                                "input": "3\n2",
                                "expected": "Total: R$ 10.00"
                        },
                        {
                                "input": "4\n3",
                                "expected": "Total: R$ 6.00"
                        },
                        {
                                "input": "2\n3",
                                "expected": "Total: R$ 13.50"
                        }
                ]
        },
        {
                "id": "bee_1089",
                "number": 1089,
                "title": "Tradutor de Cores Inglês-Português",
                "category": "cat7",
                "difficulty": "Avançado",
                "xp": 60,
                "description": "Use um **dicionário** para traduzir o nome de uma cor do inglês para o português! 🎨\n\n• **`red`** ➔ `vermelho`\n• **`blue`** ➔ `azul`\n• **`green`** ➔ `verde`\n• **`yellow`** ➔ `amarelo`\n• **Qualquer outra palavra** ➔ `COR DESCONHECIDA`",
                "inputSpec": "**1 linha** com o nome de uma cor em inglês (letras minúsculas).",
                "outputSpec": "A tradução em português ou `COR DESCONHECIDA`.",
                "starterCode": "# Desafio #1089 — Tradutor de Cores Inglês-Português\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "🧠 **Método `.get()` do dicionário:**\n• `cores = {\"red\": \"vermelho\", \"blue\": \"azul\", \"green\": \"verde\", \"yellow\": \"amarelo\"}`\n• Leia `cor = input().strip()` e use `print(cores.get(cor, \"COR DESCONHECIDA\"))`!",
                "testCases": [
                        {
                                "input": "blue",
                                "expected": "azul"
                        },
                        {
                                "input": "green",
                                "expected": "verde"
                        },
                        {
                                "input": "purple",
                                "expected": "COR DESCONHECIDA"
                        }
                ]
        },
        {
                "id": "bee_1090",
                "number": 1090,
                "title": "Função Distância de Manhattan",
                "category": "cat7",
                "difficulty": "Avançado",
                "xp": 65,
                "description": "Em mapas de jogos em grade, a **Distância de Manhattan** entre dois pontos `(x1, y1)` e `(x2, y2)` é a soma das diferenças absolutas (sem sinal negativo): 🗺️\n\n• **Fórmula:** `distancia = abs(x1 - x2) + abs(y1 - y2)`\n• Leia `x1 y1` na 1ª linha e `x2 y2` na 2ª linha, calcule usando uma função e mostre:\n  `DISTANCIA = X`",
                "inputSpec": "**2 linhas**, cada uma com 2 números inteiros separados por espaço:\n• **1ª linha:** `x1 y1`\n• **2ª linha:** `x2 y2`",
                "outputSpec": "Mostre na tela:\n`DISTANCIA = X`",
                "starterCode": "# Desafio #1090 — Função Distância de Manhattan\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "🧠 **Lendo pares de números e usando `abs()`:**\n• `p1 = [int(v) for v in input().split()]`\n• `p2 = [int(v) for v in input().split()]`\n• A função `abs(n)` tira o sinal negativo: `dist = abs(p1[0] - p2[0]) + abs(p1[1] - p2[1])`.",
                "testCases": [
                        {
                                "input": "0 0\n3 4",
                                "expected": "DISTANCIA = 7"
                        },
                        {
                                "input": "2 5\n2 1",
                                "expected": "DISTANCIA = 4"
                        },
                        {
                                "input": "-1 -2\n3 2",
                                "expected": "DISTANCIA = 8"
                        }
                ]
        },
        {
                "id": "bee_1091",
                "number": 1091,
                "title": "Contagem de Votos (Urna Eletrônica)",
                "category": "cat7",
                "difficulty": "Avançado",
                "xp": 65,
                "description": "Apure o resultado da eleição do representante de turma usando um **dicionário**! 🗳️\n\n• Leia uma linha com vários nomes votados separados por espaço.\n• Conte quantos votos cada candidato recebeu.\n• Descubra o candidato mais votado e mostre:\n  `VENCEDOR = NOME (X votos)`",
                "inputSpec": "**1 linha** com vários nomes separados por espaço.",
                "outputSpec": "Mostre na tela:\n`VENCEDOR = NOME (X votos)`",
                "starterCode": "# Desafio #1091 — Contagem de Votos (Urna Eletrônica)\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "🧠 **Contando votos com dicionário:**\n• `votos = input().split()` e `placar = {}`.\n• Para cada `nome` em `votos`: `placar[nome] = placar.get(nome, 0) + 1`.\n• Depois encontre o nome com a maior contagem e imprima no formato pedido.",
                "testCases": [
                        {
                                "input": "Ana Lucas Ana Pedro Ana Lucas",
                                "expected": "VENCEDOR = Ana (3 votos)"
                        },
                        {
                                "input": "Bot1 Bot2 Bot2",
                                "expected": "VENCEDOR = Bot2 (2 votos)"
                        },
                        {
                                "input": "Python Python Python",
                                "expected": "VENCEDOR = Python (3 votos)"
                        }
                ]
        },
        {
                "id": "bee_1092",
                "number": 1092,
                "title": "Função Conversora de Nota para Conceito",
                "category": "cat7",
                "difficulty": "Avançado",
                "xp": 60,
                "description": "Crie uma função `conceito(nota)` que receba uma nota inteira (de `0` a `100`) e devolva (`return`) a letra do conceito correspondente: 🅰️\n\n• **Nota `>= 90`:** conceito `'A'`\n• **Nota `>= 75` e `< 90`:** conceito `'B'`\n• **Nota `>= 60` e `< 75`:** conceito `'C'`\n• **Nota `< 60`:** conceito `'D'`",
                "inputSpec": "**1 linha** com um número inteiro (nota de 0 a 100).",
                "outputSpec": "Mostre na tela:\n`CONCEITO = X`",
                "starterCode": "# Desafio #1092 — Função Conversora de Nota para Conceito\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "🧠 **Criando a função com `def` e `return`:**\n• Defina `def conceito(n):` com `if / elif / else` retornando `'A'`, `'B'`, `'C'` ou `'D'`.\n• Leia `nota = int(input())` e imprima `print(f\"CONCEITO = {conceito(nota)}\")`.",
                "testCases": [
                        {
                                "input": "95",
                                "expected": "CONCEITO = A"
                        },
                        {
                                "input": "80",
                                "expected": "CONCEITO = B"
                        },
                        {
                                "input": "62",
                                "expected": "CONCEITO = C"
                        },
                        {
                                "input": "45",
                                "expected": "CONCEITO = D"
                        }
                ]
        },
        {
                "id": "bee_1093",
                "number": 1093,
                "title": "Frequência de Palavras Únicas",
                "category": "cat7",
                "difficulty": "Avançado",
                "xp": 65,
                "description": "Leia uma frase em letras minúsculas e descubra **quantas palavras diferentes (sem repetição)** existem nela! 📚\n\n• Exemplo: na frase `\"sol lua sol estrela lua sol\"`, existem **3** palavras únicas (`sol`, `lua` e `estrela`).\n• Mostre no formato: `UNICAS = X`",
                "inputSpec": "**1 linha** de texto com palavras separadas por espaço.",
                "outputSpec": "Mostre na tela:\n`UNICAS = X`",
                "starterCode": "# Desafio #1093 — Frequência de Palavras Únicas\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "🧠 **Contando palavras sem repetição:**\n• Separe as palavras com `palavras = input().split()`.\n• Guarde em um dicionário (ou conjunto `set(palavras)`) apenas as palavras distintas e mostre o tamanho com `len()`!",
                "testCases": [
                        {
                                "input": "sol lua sol estrela lua sol",
                                "expected": "UNICAS = 3"
                        },
                        {
                                "input": "a b c d",
                                "expected": "UNICAS = 4"
                        },
                        {
                                "input": "ola ola ola",
                                "expected": "UNICAS = 1"
                        }
                ]
        },
        {
                "id": "bee_1024",
                "number": 1024,
                "title": "Sequência de Fibonacci (Desafio Mestre)",
                "category": "cat8",
                "difficulty": "Avançado",
                "xp": 75,
                "description": "A famosa **Sequência de Fibonacci** começa com `0` e `1`, e cada número seguinte é sempre a **soma dos dois anteriores**: 🌀\n`0, 1, 1, 2, 3, 5, 8, 13, 21...`\n\n• Leia um número inteiro `N` (entre 1 e 15).\n• Mostre os **`N` primeiros números** de Fibonacci na mesma linha, separados por espaço.",
                "inputSpec": "**1 linha** com um número inteiro `N` (quantidade de termos).",
                "outputSpec": "Os `N` primeiros números de Fibonacci separados por espaço.",
                "starterCode": "# Desafio #1024 — Sequência de Fibonacci (Desafio Mestre)\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "🧠 **Como gerar os termos passo a passo:**\n• Comece com `a = 0`, `b = 1` e uma lista `termos = []`.\n• Repita `N` vezes (`for _ in range(n):`): adicione `str(a)` na lista e atualize os dois valores com `a, b = b, a + b`.\n• No final, mostre `print(\" \".join(termos))`.",
                "testCases": [
                        {
                                "input": "5",
                                "expected": "0 1 1 2 3"
                        },
                        {
                                "input": "1",
                                "expected": "0"
                        },
                        {
                                "input": "8",
                                "expected": "0 1 1 2 3 5 8 13"
                        }
                ]
        },
        {
                "id": "bee_1094",
                "number": 1094,
                "title": "Máximo Divisor Comum (MDC de Euclides)",
                "category": "cat8",
                "difficulty": "Avançado",
                "xp": 75,
                "description": "O **MDC (Máximo Divisor Comum)** entre dois inteiros `A` e `B` é o maior número que divide os dois ao mesmo tempo sem deixar resto! ➗\n\n• **Algoritmo de Euclides:** Enquanto `B != 0`, atualize os valores fazendo:\n  `A, B = B, A % B`\n• Quando `B` chegar a `0`, o valor final de `A` é o MDC! Mostre: `MDC = X`.",
                "inputSpec": "**2 linhas** com números inteiros positivos `A` e `B`.",
                "outputSpec": "Mostre na tela:\n`MDC = X`",
                "starterCode": "# Desafio #1094 — Máximo Divisor Comum (MDC de Euclides)\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "🧠 **Aplicando o Algoritmo de Euclides:**\n• Leia `a = int(input())` e `b = int(input())`.\n• Faça:\n  `while b != 0:`\n      `a, b = b, a % b`\n• Imprima `print(f\"MDC = {a}\")`.",
                "testCases": [
                        {
                                "input": "12\n18",
                                "expected": "MDC = 6"
                        },
                        {
                                "input": "100\n75",
                                "expected": "MDC = 25"
                        },
                        {
                                "input": "17\n13",
                                "expected": "MDC = 1"
                        }
                ]
        },
        {
                "id": "bee_1095",
                "number": 1095,
                "title": "Mínimo Múltiplo Comum (MMC)",
                "category": "cat8",
                "difficulty": "Avançado",
                "xp": 75,
                "description": "O **MMC (Mínimo Múltiplo Comum)** entre dois números inteiros positivos `A` e `B` é o menor número positivo que é múltiplo de ambos! 🔢\n\n• **Dica Matemática:** Depois de achar o `MDC` entre `A` e `B`, basta calcular:\n  `MMC = (A * B) // MDC`\n• Mostre o resultado no formato: `MMC = X`.",
                "inputSpec": "**2 linhas** com números inteiros positivos `A` e `B`.",
                "outputSpec": "Mostre na tela:\n`MMC = X`",
                "starterCode": "# Desafio #1095 — Mínimo Múltiplo Comum (MMC)\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "🧠 **Como calcular o MMC facilmente:**\n• Leia `a = int(input())` e `b = int(input())`.\n• Calcule o `mdc` com Euclides (`x, y = a, b` e `while y != 0: x, y = y, x % y`).\n• Calcule `mmc = (a * b) // x` e mostre `print(f\"MMC = {mmc}\")`.",
                "testCases": [
                        {
                                "input": "4\n6",
                                "expected": "MMC = 12"
                        },
                        {
                                "input": "12\n15",
                                "expected": "MMC = 60"
                        },
                        {
                                "input": "7\n5",
                                "expected": "MMC = 35"
                        }
                ]
        },
        {
                "id": "bee_1096",
                "number": 1096,
                "title": "Conversor Decimal para Binário",
                "category": "cat8",
                "difficulty": "Avançado",
                "xp": 75,
                "description": "Os computadores guardam todas as informações em **código binário** (usando apenas `0` e `1`). 💻\n\n• Leia um número inteiro `N >= 0` na base 10 e mostre a representação dele em **binário** no formato:\n  `BINARIO = X`",
                "inputSpec": "**1 linha** com um número inteiro `N >= 0`.",
                "outputSpec": "Mostre na tela:\n`BINARIO = X`",
                "starterCode": "# Desafio #1096 — Conversor Decimal para Binário\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "🧠 **Duas formas de converter para binário em Python:**\n• Você pode usar a função nativa `bin(n)[2:]` (que já converte e tira o prefixo `0b`), ou dividir sucessivamente por `2` guardando os restos `n % 2`!",
                "testCases": [
                        {
                                "input": "10",
                                "expected": "BINARIO = 1010"
                        },
                        {
                                "input": "255",
                                "expected": "BINARIO = 11111111"
                        },
                        {
                                "input": "0",
                                "expected": "BINARIO = 0"
                        }
                ]
        },
        {
                "id": "bee_1097",
                "number": 1097,
                "title": "Conversor Binário para Decimal",
                "category": "cat8",
                "difficulty": "Avançado",
                "xp": 75,
                "description": "Agora faça o caminho inverso: leia uma sequência de `0`s e `1`s (**número binário**) e converta para o valor correspondente na **base decimal (base 10)**! 💻\n\n• Exemplo: `1010` em binário vale `10` em decimal.\n• Mostre no formato: `DECIMAL = X`",
                "inputSpec": "**1 linha** com um número binário (apenas dígitos `0` e `1`).",
                "outputSpec": "Mostre na tela:\n`DECIMAL = X`",
                "starterCode": "# Desafio #1097 — Conversor Binário para Decimal\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "🧠 **Dica em Python:**\n• A função `int(texto_binario, 2)` converte qualquer string binária (base 2) diretamente para número inteiro decimal!\n• Ou você pode percorrer os dígitos multiplicando pelas potências de 2.",
                "testCases": [
                        {
                                "input": "1010",
                                "expected": "DECIMAL = 10"
                        },
                        {
                                "input": "1111",
                                "expected": "DECIMAL = 15"
                        },
                        {
                                "input": "100000",
                                "expected": "DECIMAL = 32"
                        }
                ]
        },
        {
                "id": "bee_1098",
                "number": 1098,
                "title": "Detector de Número Perfeito",
                "category": "cat8",
                "difficulty": "Avançado",
                "xp": 80,
                "description": "Na matemática, um número `N` é chamado de **Número Perfeito** quando a soma de todos os seus divisores menores que ele mesmo dá exatamente `N`! ✨\n\n• **Exemplo:** Os divisores de `6` menores que 6 são `1`, `2` e `3`, e `1 + 2 + 3 = 6` (`PERFEITO`).\n• Leia `N` e mostre `PERFEITO` ou `NAO PERFEITO`.",
                "inputSpec": "**1 linha** com um número inteiro positivo `N`.",
                "outputSpec": "Mostre `PERFEITO` ou `NAO PERFEITO`.",
                "starterCode": "# Desafio #1098 — Detector de Número Perfeito\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "🧠 **Como somar os divisores próprios:**\n• Crie `soma = 0` e faça `for i in range(1, n):`.\n• Se `n % i == 0:`, some `soma += i`.\n• Ao final, compare `if soma == n:` (`PERFEITO`) ou `else:` (`NAO PERFEITO`).",
                "testCases": [
                        {
                                "input": "6",
                                "expected": "PERFEITO"
                        },
                        {
                                "input": "28",
                                "expected": "PERFEITO"
                        },
                        {
                                "input": "10",
                                "expected": "NAO PERFEITO"
                        }
                ]
        },
        {
                "id": "bee_1099",
                "number": 1099,
                "title": "Número de Armstrong (Narcisista)",
                "category": "cat8",
                "difficulty": "Avançado",
                "xp": 80,
                "description": "Um número com `K` dígitos é um **Número de Armstrong** se a soma de cada dígito elevado a `K` resulta no próprio número! 💎\n\n• **Exemplo:** `153` tem `3` dígitos, e `1³ + 5³ + 3³ = 1 + 125 + 27 = 153` (`ARMSTRONG`).\n• Leia um número inteiro positivo e mostre `ARMSTRONG` ou `COMUM`.",
                "inputSpec": "**1 linha** com um número inteiro positivo.",
                "outputSpec": "Mostre `ARMSTRONG` ou `COMUM`.",
                "starterCode": "# Desafio #1099 — Número de Armstrong (Narcisista)\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "🧠 **Passo a passo:**\n• Leia como texto `s = input().strip()` e descubra a quantidade de dígitos com `k = len(s)`.\n• Some `int(d) ** k` para cada dígito `d` em `s`.\n• Compare se a soma é igual a `int(s)`!",
                "testCases": [
                        {
                                "input": "153",
                                "expected": "ARMSTRONG"
                        },
                        {
                                "input": "370",
                                "expected": "ARMSTRONG"
                        },
                        {
                                "input": "123",
                                "expected": "COMUM"
                        }
                ]
        },
        {
                "id": "bee_1100",
                "number": 1100,
                "title": "Simulador de Batalha Boss Final (#1100)",
                "category": "cat8",
                "difficulty": "Avançado",
                "xp": 100,
                "description": "Chegamos ao **Desafio #1100 — O Boss Final**! 🐉⚔️\n\nO Herói enfrenta o chefão da masmorra em turnos:\n• Na **1ª linha**, leia o **`HP`** (vida inicial do Boss, inteiro positivo).\n• Na **2ª linha**, leia o **`DANO`** que o Herói causa a cada turno (inteiro positivo).\n• Descubra **quantos turnos** de ataque são necessários até a vida do Boss zerar ou ficar negativa (`HP <= 0`) e mostre:\n  `TURNOS PARA VENCER = X`",
                "inputSpec": "**2 linhas** com números inteiros positivos:\n• **1ª linha:** Vida do Boss (`HP`)\n• **2ª linha:** Dano do Herói por turno (`DANO`)",
                "outputSpec": "Mostre na tela:\n`TURNOS PARA VENCER = X`",
                "starterCode": "# Desafio #1100 — Simulador de Batalha Boss Final (#1100)\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "🧠 **Como simular os turnos com `while`:**\n• Leia `hp = int(input())` e `dano = int(input())`.\n• Crie `turnos = 0`.\n• Enquanto `while hp > 0:`, subtraia `hp -= dano` e some `turnos += 1`.\n• No final, mostre `print(f\"TURNOS PARA VENCER = {turnos}\")`.",
                "testCases": [
                        {
                                "input": "100\n25",
                                "expected": "TURNOS PARA VENCER = 4"
                        },
                        {
                                "input": "100\n30",
                                "expected": "TURNOS PARA VENCER = 4"
                        },
                        {
                                "input": "50\n60",
                                "expected": "TURNOS PARA VENCER = 1"
                        }
                ]
        }
];

    // =========================================================================
    // 3. CÁLCULO DE RANK, XP E LEADERBOARD DA TURMA
    // =========================================================================

    function getRankForXp(xp) {
        const val = Number(xp) || 0;
        let currentTier = RANK_TIERS[0];
        for (let i = 0; i < RANK_TIERS.length; i++) {
            if (val >= RANK_TIERS[i].minXp) {
                currentTier = RANK_TIERS[i];
            }
        }
        const nextTier = RANK_TIERS.find(t => t.level === currentTier.level + 1) || null;
        let pctToNext = 100;
        let xpNeeded = 0;
        if (nextTier) {
            const span = nextTier.minXp - currentTier.minXp;
            const gainedInTier = val - currentTier.minXp;
            pctToNext = Math.min(100, Math.max(0, Math.round((gainedInTier / span) * 100)));
            xpNeeded = Math.max(0, nextTier.minXp - val);
        }
        return {
            currentTier,
            nextTier,
            xp: val,
            pctToNext,
            xpNeeded
        };
    }

    function getUserChallengeStats(userId) {
        const prog = window.TrilhandoClassroom.getStudentChallenges(userId);
        let totalXp = 0;
        let solvedCount = 0;
        let totalAttempts = 0;
        PYTHON_CHALLENGES.forEach(ch => {
            const entry = prog[ch.id];
            if (entry) {
                totalAttempts += (Number(entry.attempts) || 0);
                if (entry.solved) {
                    solvedCount++;
                    totalXp += ch.xp;
                }
            }
        });
        const rankInfo = getRankForXp(totalXp);
        return {
            userId,
            solvedCount,
            totalChallenges: PYTHON_CHALLENGES.length,
            totalXp,
            totalAttempts,
            rankInfo,
            progressMap: prog
        };
    }

    function getClassLeaderboard() {
        const users = window.TrilhandoClassroom.getUsers().filter(u => u.role === 'student');
        const rows = users.map(u => {
            const stats = getUserChallengeStats(u.id);
            return {
                userId: u.id,
                fullName: u.fullName,
                solvedCount: stats.solvedCount,
                totalXp: stats.totalXp,
                totalAttempts: stats.totalAttempts,
                rankInfo: stats.rankInfo
            };
        });
        rows.sort((a, b) => {
            if (b.totalXp !== a.totalXp) return b.totalXp - a.totalXp;
            if (b.solvedCount !== a.solvedCount) return b.solvedCount - a.solvedCount;
            return a.fullName.localeCompare(b.fullName, 'pt-BR');
        });
        return rows.map((r, idx) => Object.assign({}, r, { position: idx + 1 }));
    }

    // =========================================================================
    // 4. INTERPRETADOR PYTHON NO NAVEGADOR (SKULPT + TRANSPILADOR DE F-STRINGS)
    // =========================================================================

    let skulptLoadPromise = null;

    function ensureSkulptLoaded() {
        if (window.Sk && window.Sk.builtinFiles) {
            return Promise.resolve(true);
        }
        if (skulptLoadPromise) return skulptLoadPromise;

        skulptLoadPromise = new Promise((resolve) => {
            const s1 = document.createElement('script');
            s1.src = 'https://cdn.jsdelivr.net/npm/skulpt@1.2.0/dist/skulpt.min.js';
            s1.onload = () => {
                const s2 = document.createElement('script');
                s2.src = 'https://cdn.jsdelivr.net/npm/skulpt@1.2.0/dist/skulpt-stdlib.js';
                s2.onload = () => resolve(Boolean(window.Sk));
                s2.onerror = () => resolve(false);
                document.head.appendChild(s2);
            };
            s1.onerror = () => resolve(false);
            document.head.appendChild(s1);
        });
        return skulptLoadPromise;
    }

    function convertFStringMatch(quote, inner) {
        const args = [];
        const fmtStr = inner.replace(/\{([^{}]+)\}/g, function (_, expr) {
            const colonIdx = expr.indexOf(':');
            if (colonIdx >= 0) {
                const varPart = expr.slice(0, colonIdx).trim();
                const specPart = expr.slice(colonIdx + 1).trim();
                args.push(varPart);
                return '{:' + specPart + '}';
            }
            args.push(expr.trim());
            return '{}';
        });
        return quote + fmtStr + quote + '.format(' + args.join(', ') + ')';
    }

    // Converte f-strings (f"..." e f'...') para .format() inclusive quando há aspas internas em dicionários
    function preprocessPythonCode(code) {
        let out = String(code || '');
        out = out.replace(/\bf"([^"\\]*(?:\\.[^"\\]*)*)"/g, function (_, inner) {
            return convertFStringMatch('"', inner);
        });
        out = out.replace(/\bf'([^'\\]*(?:\\.[^'\\]*)*)'/g, function (_, inner) {
            return convertFStringMatch("'", inner);
        });
        return out;
    }

    async function runPythonCodeAsync(code, stdinText) {
        const hasSkulpt = await ensureSkulptLoaded();
        const inputLines = String(stdinText || '').replace(/\r\n/g, '\n').split('\n');
        let lineIdx = 0;
        let outputChunks = [];

        if (hasSkulpt && window.Sk) {
            const preparedCode = preprocessPythonCode(code);
            return new Promise((resolve) => {
                window.Sk.configure({
                    output: function (text) {
                        outputChunks.push(text);
                    },
                    read: function (x) {
                        if (window.Sk.builtinFiles === undefined || window.Sk.builtinFiles['files'][x] === undefined) {
                            throw new Error("File not found: '" + x + "'");
                        }
                        return window.Sk.builtinFiles['files'][x];
                    },
                    inputfun: function () {
                        const val = lineIdx < inputLines.length ? inputLines[lineIdx++] : '';
                        return val;
                    },
                    inputfunTakesPrompt: true,
                    execLimit: 3500,
                    __future__: window.Sk.python3
                });

                const promise = window.Sk.misceval.asyncToPromise(function () {
                    return window.Sk.importMainWithBody('<stdin>', false, preparedCode, true);
                });

                promise.then(
                    function () {
                        resolve({
                            ok: true,
                            stdout: outputChunks.join('').replace(/\r\n/g, '\n').replace(/\n+$/, ''),
                            error: null
                        });
                    },
                    function (err) {
                        resolve({
                            ok: false,
                            stdout: outputChunks.join('').replace(/\r\n/g, '\n').replace(/\n+$/, ''),
                            error: String(err ? err.toString() : 'Erro de execução no Python')
                        });
                    }
                );
            });
        }

        return {
            ok: false,
            stdout: '',
            error: 'Não foi possível carregar o motor Python no navegador. Verifique sua conexão com a internet.'
        };
    }

    async function judgeChallengeSubmissionAsync(challenge, studentCode) {
        const results = [];
        let allPassed = true;
        let firstFailure = null;

        for (let i = 0; i < challenge.testCases.length; i++) {
            const tc = challenge.testCases[i];
            const execRes = await runPythonCodeAsync(studentCode, tc.input);
            const actualTrimmed = String(execRes.stdout || '').trim();
            const expectedTrimmed = String(tc.expected || '').trim();

            if (!execRes.ok) {
                allPassed = false;
                const failObj = {
                    caseIndex: i + 1,
                    passed: false,
                    verdict: 'RUNTIME_ERROR',
                    input: tc.input,
                    expected: expectedTrimmed,
                    actual: actualTrimmed,
                    error: execRes.error
                };
                results.push(failObj);
                if (!firstFailure) firstFailure = failObj;
                break;
            }

            const passed = actualTrimmed === expectedTrimmed;
            const caseResult = {
                caseIndex: i + 1,
                passed,
                verdict: passed ? 'ACCEPTED' : 'WRONG_ANSWER',
                input: tc.input,
                expected: expectedTrimmed,
                actual: actualTrimmed,
                error: null
            };
            results.push(caseResult);
            if (!passed && !firstFailure) {
                allPassed = false;
                firstFailure = caseResult;
            }
        }

        return {
            allPassed,
            verdict: allPassed ? 'ACCEPTED' : (firstFailure ? firstFailure.verdict : 'WRONG_ANSWER'),
            results,
            firstFailure
        };
    }

    // =========================================================================
    // 5. CHAT GEMINI IA 24/7 (SEMPRE ATIVO NA NUVEM — SEM REBOOT, SEM PRECISAR DO PC!)
    // =========================================================================

    const CHAT_SYSTEM_INSTRUCTION = `Você é o GEMINI-1.5-FLASH, assistente virtual e tutor especialista do projeto "TRILHANDO O CAMINHO DO CÓDIGO" (CEFET-MG & FAPEMIG).

SUA MISSÃO E DIRETRIZ DE RESPOSTA INTELIGENTE:
1. DISTINÇÃO INTELIGENTE DO CONTEXTO:
   - Se a pergunta do aluno for CONCEITUAL, TEÓRICA ou UMA DÚVIDA GERAL (ex: "o que é uma variável?", "como funciona o Flet?", "o que é um loop?"):
     -> Responda de forma clara, didática, concisa e explicativa, SEM incluir blocos de código desnecessários no final.
   - Se a pergunta do aluno pedir CÓDIGO, EXEMPLO PRÁTICO, IMPLEMENTAÇÃO ou COMO PROGRAMAR ALGO (ex: "como criar um botão no Flet?", "faça o jogo da cobrinha", "me dê um exemplo de código"):
     -> Forneça a explicação e inclua o CÓDIGO COMPLETO, limpo e pronto para ser executado (em blocos \`\`\`python), incluindo todos os imports e funções necessárias.
2. TOM DE VOZ:
   - Responda sempre em português do Brasil, com tom didático, profissional, encorajador, claro e direto para estudantes e aprendizes de Python.`;

    // =========================================================================
    // GESTÃO DO HISTÓRICO DO CHAT POR USUÁRIO (ISOLAMENTO TOTAL POR CONTA)
    // =========================================================================
    const STORAGE_KEY_CHAT_HISTORIES = 'trilhando_chat_histories_v1';
    let chatHistoriesMemory = null;

    function resolveChatUserId(explicitUserId) {
        if (explicitUserId && typeof explicitUserId === 'string' && explicitUserId.trim()) {
            return explicitUserId.trim();
        }
        try {
            if (window.TrilhandoClassroom && typeof window.TrilhandoClassroom.getCurrentUser === 'function') {
                const u = window.TrilhandoClassroom.getCurrentUser();
                if (u && u.id) return String(u.id).trim();
            }
        } catch (e) {}
        return 'anon';
    }

    function resolveStudentName(explicitName, userId) {
        if (explicitName && typeof explicitName === 'string' && explicitName.trim()) {
            return explicitName.trim();
        }
        try {
            if (window.TrilhandoClassroom && typeof window.TrilhandoClassroom.getCurrentUser === 'function') {
                const u = window.TrilhandoClassroom.getCurrentUser();
                if (u) {
                    if (u.role === 'admin') return u.fullName || 'Professor / Administrador';
                    return u.fullName || u.username || ('Aluno #' + String(u.id));
                }
            }
        } catch (e) {}
        return (userId && userId !== 'anon') ? ('Aluno #' + userId) : 'Estudante';
    }

    function loadAllChatHistories() {
        if (chatHistoriesMemory) return chatHistoriesMemory;
        try {
            const raw = localStorage.getItem(STORAGE_KEY_CHAT_HISTORIES);
            if (raw) {
                const parsed = JSON.parse(raw);
                if (parsed && typeof parsed === 'object') {
                    chatHistoriesMemory = parsed;
                    return chatHistoriesMemory;
                }
            }
        } catch (e) {}
        chatHistoriesMemory = {};
        return chatHistoriesMemory;
    }

    function saveAllChatHistories() {
        if (!chatHistoriesMemory) return;
        try {
            localStorage.setItem(STORAGE_KEY_CHAT_HISTORIES, JSON.stringify(chatHistoriesMemory));
        } catch (e) {}
    }

    function getUserChatHistory(explicitUserId) {
        const uid = resolveChatUserId(explicitUserId);
        const all = loadAllChatHistories();
        if (!Array.isArray(all[uid])) {
            all[uid] = [];
        }
        return all[uid];
    }

    function pushUserChatMessage(explicitUserId, msgObj) {
        const uid = resolveChatUserId(explicitUserId);
        const history = getUserChatHistory(uid);
        history.push(msgObj);
        // Limita a 60 mensagens por usuário para preservar performance e localStorage
        if (history.length > 60) {
            history.splice(0, history.length - 60);
        }
        saveAllChatHistories();
    }

    function clearUserChatHistory(explicitUserId) {
        const uid = resolveChatUserId(explicitUserId);
        const all = loadAllChatHistories();
        all[uid] = [];
        saveAllChatHistories();
    }

    function sendToGoogleFormsWebhook(studentName, promptText, responseText) {
        const cfg = window.TrilhandoClassroom.getChatbotConfig();
        const formUrl = cfg.formUrl;
        if (!formUrl || !formUrl.startsWith('http')) return;

        try {
            const resolvedName = resolveStudentName(studentName);
            const formData = new URLSearchParams();
            formData.append(cfg.entryNome || 'entry.1009783107', resolvedName);
            formData.append(cfg.entryPrompt || 'entry.1559793013', promptText);
            formData.append(cfg.entryResposta || 'entry.2041274618', responseText);

            fetch(formUrl, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: formData.toString()
            }).catch(() => {});
        } catch (e) {}
    }

    function cleanAiReplyText(rawText) {
        if (!rawText) return '';
        // Remove blocos internos <think>...</think> caso algum modelo de raciocínio os inclua
        return String(rawText)
            .replace(/<think>[\s\S]*?<\/think>/gi, '')
            .trim();
    }

    // Tutor IA Pedagógico Inteligente Offline (contingência caso o computador do aluno esteja sem acesso externo)
    function generateSmartTutorFallbackResponse(promptText, studentName) {
        const q = String(promptText || '').toLowerCase();
        const firstName = String(studentName || 'estudante').split(' ')[0];

        if (q.includes('cobrinha') || q.includes('snake') || q.includes('jogo')) {
            return `Excelente ideia, **${firstName}**! Aqui está um exemplo de jogo interativo em Python usando **Flet** para você testar e adaptar:\n\n\`\`\`python\nimport flet as ft\nimport random\n\ndef main(page: ft.Page):\n    page.title = "Mini Jogo de Adivinhação"\n    page.theme_mode = ft.ThemeMode.DARK\n    secreto = random.randint(1, 20)\n\n    entrada = ft.TextField(label="Palpite (1 a 20)", width=220)\n    aviso = ft.Text("Tente adivinhar o número secreto!", size=18)\n\n    def testar(e):\n        try:\n            chute = int(entrada.value)\n            if chute == secreto:\n                aviso.value = "🎉 Parabéns! Você acertou!"\n            elif chute < secreto:\n                aviso.value = "⬆️ Tente um número MAIOR!"\n            else:\n                aviso.value = "⬇️ Tente um número MENOR!"\n        except ValueError:\n            aviso.value = "⚠️ Digite apenas números inteiros!"\n        page.update()\n\n    page.add(entrada, ft.ElevatedButton("Chutar", on_click=testar), aviso)\n\nft.app(target=main)\n\`\`\``;
        }

        if (q.includes('variavel') || q.includes('variável') || q.includes('variaveis') || q.includes('variáveis')) {
            return `Olá, **${firstName}**! Uma **variável** em Python funciona como uma **caixinha com uma etiqueta** na memória do computador onde guardamos informações (como um nome, uma pontuação ou a quantidade de vidas de um jogo).\n\nPara criar uma variável, usamos o sinal de igual (\`=\`), que significa **guardar / atribuir**:\n\n\`\`\`python\nheroi = "Arthas"      # texto (str)\nvidas = 3             # número inteiro (int)\nvelocidade = 4.5      # número decimal (float)\n\nprint(f"O herói {heroi} tem {vidas} vidas!")\n\`\`\`\n\nSe quiser testar, experimente mudar os valores e usar \`print()\`!`;
        }

        if (q.includes('if') || q.includes('elif') || q.includes('else') || q.includes('condicional') || q.includes('condicionais')) {
            return `Ótima pergunta, **${firstName}**! As estruturas **\`if\` (se)**, **\`elif\` (senão se)** e **\`else\` (senão)** permitem que o seu programa tome decisões sozinho:\n\n- **\`if\`**: testa a 1ª condição.\n- **\`elif\`**: testa outra condição se a anterior deu falso.\n- **\`else\`**: é o Plano B (executa quando todas as condições acima dão falso).\n\nVeja um exemplo completo:\n\n\`\`\`python\npontos = int(input("Digite sua pontuação: "))\n\nif pontos >= 100:\n    print("🏆 Rank Ouro!")\nelif pontos >= 50:\n    print("🥈 Rank Prata!")\nelse:\n    print("🥉 Continue treinando!")\n\`\`\`\n\n💡 **Dica importante:** Não esqueça dos dois pontos (\`:\`) no final da linha e do espaço (**Tab**) nas linhas de dentro!`;
        }

        if (q.includes('while') || q.includes('for') || q.includes('loop') || q.includes('laço') || q.includes('repeticao') || q.includes('repetição')) {
            return `Excelente dúvida, **${firstName}**! Em Python temos dois laços principais para repetir comandos sem precisar copiar e colar código:\n\n1. **\`for\` com \`range()\`** — usado quando sabemos quantas vezes queremos repetir:\n\`\`\`python\n# Conta de 1 até 5:\nfor numero in range(1, 6):\n    print(f"Passo {numero}")\n\`\`\`\n\n2. **\`while\` (enquanto)** — repete enquanto uma condição continuar verdadeira:\n\`\`\`python\nsenha = ""\nwhile senha != "1234":\n    senha = input("Digite a senha secreta: ")\nprint("🔓 Cofre aberto!")\n\`\`\``;
        }

        if (q.includes('try') || q.includes('except') || q.includes('erro') || q.includes('valueerror')) {
            return `Muito bem, **${firstName}**! O bloco **\`try / except\`** funciona como um **escudo de proteção** para o seu código não travar caso o usuário digite algo inválido (por exemplo, digitar letras quando o programa pediu um número inteiro no \`int(input())\`):\n\n\`\`\`python\ntry:\n    idade = int(input("Digite sua idade em números: "))\n    print(f"Daqui a 5 anos você terá {idade + 5} anos!")\nexcept ValueError:\n    print("⚠️ Ops! Digite apenas números inteiros (ex: 13).")\n\`\`\``;
        }

        if (q.includes('lista') || q.includes('append') || q.includes('len')) {
            return `Uma **lista** em Python permite guardar vários itens dentro de uma única variável usando colchetes \`[ ]\`. Veja os comandos mais importantes:\n\n\`\`\`python\nmochila = ["Espada", "Escudo", "Poção"]\n\n# Adicionar um novo item no final da lista:\nmochila.append("Arco Mágico")\n\n# Mostrar quantos itens existem na lista:\nprint(f"Total de itens: {len(mochila)}")\n\n# Percorrer todos os itens com for:\nfor item in mochila:\n    print(f"- {item}")\n\`\`\``;
        }

        if (q.includes('flet') || q.includes('app') || q.includes('botao') || q.includes('botão') || q.includes('interface')) {
            return `Com a biblioteca **Flet**, transformamos códigos Python em aplicativos visuais para celular e computador! Aqui está um exemplo completo e pronto para rodar com campo de texto e botão interativo:\n\n\`\`\`python\nimport flet as ft\n\ndef main(page: ft.Page):\n    page.title = "Meu Primeiro App Flet"\n    page.theme_mode = ft.ThemeMode.DARK\n    page.vertical_alignment = ft.MainAxisAlignment.CENTER\n    page.horizontal_alignment = ft.CrossAxisAlignment.CENTER\n\n    campo_nome = ft.TextField(label="Digite seu nome", width=280)\n    resultado = ft.Text(size=20, weight=ft.FontWeight.BOLD, color=ft.Colors.CYAN_300)\n\n    def saudar_click(e):\n        if campo_nome.value:\n            resultado.value = f"🚀 Olá, {campo_nome.value}! Bem-vindo ao Flet!"\n        else:\n            resultado.value = "⚠️ Digite seu nome primeiro!"\n        page.update()\n\n    botao = ft.ElevatedButton("Clique Aqui", on_click=saudar_click)\n    page.add(campo_nome, botao, resultado)\n\nft.app(target=main)\n\`\`\``;
        }

        if (q.includes('def') || q.includes('funcao') || q.includes('função') || q.includes('funcoes') || q.includes('funções')) {
            return `Em Python, usamos a palavra **\`def\`** para criar uma **função** (um bloco de código reutilizável que podemos chamar quantas vezes quisermos):\n\n\`\`\`python\ndef calcular_media(nota1, nota2):\n    media = (nota1 + nota2) / 2\n    return media\n\nresultado = calcular_media(8.0, 9.0)\nprint(f"A média final é: {resultado}")\n\`\`\``;
        }

        if (q.includes('dicionario') || q.includes('dicionário') || q.includes('dict')) {
            return `Um **dicionário** em Python guarda informações no formato **\`chave: valor\`** usando chaves \`{ }\`, perfeito para criar fichas de personagens ou cadastros:\n\n\`\`\`python\nheroi = {\n    "nome": "Luna",\n    "classe": "Maga",\n    "nivel": 5,\n    "vida": 120\n}\n\nprint(f"Herói: {heroi['nome']} ({heroi['classe']}) - Nível {heroi['nivel']}")\n\`\`\``;
        }

        if (q.includes('print') || q.includes('input')) {
            return `Os comandos **\`print()\`** e **\`input()\`** são a base da comunicação no Python:\n\n- **\`print()\`**: faz o computador **mostrar** uma mensagem na tela.\n- **\`input()\`**: faz o computador **escutar** o que o usuário digita no teclado (sempre devolvendo texto \`str\`).\n\n\`\`\`python\nnome = input("Qual é o seu nome? ")\nidade = int(input("Quantos anos você tem? "))\n\nprint(f"Olá, {nome}! Você tem {idade} anos.")\n\`\`\``;
        }

        return `Olá, **${firstName}**! Sou o assistente de IA do projeto **Trilhando o Caminho do Código**. 🤖\n\nPosso te ajudar explicando passo a passo ou criando códigos em Python sobre:\n- **Comandos básicos**: \`print()\`, \`input()\`, \`int()\`, \`float()\` e f-strings\n- **Tomada de decisão**: \`if\`, \`elif\`, \`else\` e operadores lógicos (\`and\`, \`or\`)\n- **Laços e Erros**: \`for\`, \`while\`, \`break\` e blindagem com \`try / except\`\n- **Estruturas**: Listas (\`append\`, \`len\`), Strings, Funções (\`def\`), Dicionários e Apps com **Flet**\n- **Dicas para qualquer um dos 100 Desafios Python estilo Beecrowd**\n\nMe conte qual dúvida ou código você quer criar agora!`;
    }

    async function fetchWithTimeout(url, options, timeoutMs) {
        const controller = new AbortController();
        const timer = setTimeout(() => controller.abort(), timeoutMs || 18000);
        try {
            const res = await fetch(url, Object.assign({}, options || {}, { signal: controller.signal }));
            clearTimeout(timer);
            return res;
        } catch (err) {
            clearTimeout(timer);
            throw err;
        }
    }

    async function askGeminiApiAsync(promptText, studentName, explicitUserId) {
        const cfg = window.TrilhandoClassroom.getChatbotConfig();
        const apiKey = (cfg && cfg.geminiApiKey) ? String(cfg.geminiApiKey).trim() : '';

        const uid = resolveChatUserId(explicitUserId);
        const targetStudentName = resolveStudentName(studentName, uid);

        // Registra o prompt do usuário no histórico ISOLADO deste usuário
        pushUserChatMessage(uid, {
            role: 'user',
            parts: [{ text: promptText }]
        });

        const userHistory = getUserChatHistory(uid);

        // CAMADA 1: API Oficial Google Gemini Flash (suporta chaves AQ... e AIza...)
        if (apiKey && apiKey.length >= 20) {
            const candidateModels = [
                'gemini-flash-lite-latest',
                'gemini-3.5-flash-lite',
                'gemini-3.5-flash',
                'gemini-3.6-flash',
                'gemini-3.8-flash'
            ];
            for (let i = 0; i < candidateModels.length; i++) {
                const modelName = candidateModels[i];
                try {
                    const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${encodeURIComponent(apiKey)}`;
                    const payload = {
                        system_instruction: {
                            parts: [{ text: CHAT_SYSTEM_INSTRUCTION }]
                        },
                        contents: userHistory.slice(-12),
                        generationConfig: {
                            temperature: 0.25,
                            topP: 0.95,
                            topK: 40,
                            maxOutputTokens: 2048
                        }
                    };
                    const res = await fetchWithTimeout(url, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(payload)
                    }, 12000);
                    if (res.ok) {
                        const data = await res.json();
                        const rawParts = (
                            data &&
                            data.candidates &&
                            data.candidates[0] &&
                            data.candidates[0].content &&
                            Array.isArray(data.candidates[0].content.parts)
                        ) ? data.candidates[0].content.parts : [];
                        const joinedText = rawParts
                            .filter(p => p && !p.thought && typeof p.text === 'string')
                            .map(p => p.text)
                            .join('');
                        const reply = cleanAiReplyText(joinedText);
                        if (reply) {
                            pushUserChatMessage(uid, {
                                role: 'model',
                                parts: [{ text: reply }]
                            });
                            sendToGoogleFormsWebhook(targetStudentName, promptText, reply);
                            return reply;
                        }
                    }
                } catch (e) {
                    console.warn('Gemini API model attempt failed:', modelName, e);
                }
            }
        }

        // CAMADA 2: Motor IA em Nuvem 24/7 (Zero-Key, Nunca Dorme, Não Depende do PC nem do Streamlit!)
        const openAiMessages = [
            { role: 'system', content: CHAT_SYSTEM_INSTRUCTION }
        ];
        const recentHistory = userHistory.slice(-10);
        for (let i = 0; i < recentHistory.length; i++) {
            const msg = recentHistory[i];
            const txt = (msg.parts && msg.parts[0] && msg.parts[0].text) ? msg.parts[0].text : '';
            if (txt) {
                openAiMessages.push({
                    role: msg.role === 'user' ? 'user' : 'assistant',
                    content: txt
                });
            }
        }

        const cloudModels = ['openai', 'openai-fast', 'mistral'];
        for (let m = 0; m < cloudModels.length; m++) {
            try {
                const res = await fetchWithTimeout('https://text.pollinations.ai/openai', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        model: cloudModels[m],
                        messages: openAiMessages,
                        temperature: 0.25
                    })
                }, 20000);
                if (res.ok) {
                    const data = await res.json();
                    const rawReply = data &&
                        data.choices &&
                        data.choices[0] &&
                        data.choices[0].message &&
                        data.choices[0].message.content;
                    const reply = cleanAiReplyText(rawReply);
                    if (reply) {
                        pushUserChatMessage(uid, {
                            role: 'model',
                            parts: [{ text: reply }]
                        });
                        sendToGoogleFormsWebhook(targetStudentName, promptText, reply);
                        return reply;
                    }
                }
            } catch (err) {
                console.warn('Cloud AI endpoint attempt failed (' + cloudModels[m] + '):', err);
            }
        }

        // CAMADA 2B: Endpoint GET/Texto Direto de Backup em Nuvem 24/7
        try {
            const directUrl = 'https://text.pollinations.ai/' + encodeURIComponent(
                'Voce e o tutor de Python do projeto Trilhando o Caminho do Codigo. Responda em portugues de forma didatica ao aluno ' +
                (targetStudentName || '') + ': ' + promptText
            );
            const res = await fetchWithTimeout(directUrl, { method: 'GET' }, 15000);
            if (res.ok) {
                const txt = cleanAiReplyText(await res.text());
                if (txt && txt.length > 5) {
                    pushUserChatMessage(uid, {
                        role: 'model',
                        parts: [{ text: txt }]
                    });
                    sendToGoogleFormsWebhook(targetStudentName, promptText, txt);
                    return txt;
                }
            }
        } catch (err) {
            console.warn('Direct Cloud AI backup failed:', err);
        }

        // CAMADA 3: Contingência Offline Pedagógica Instantânea (se a escola estiver sem internet externa)
        await new Promise(r => setTimeout(r, 350));
        const fallbackReply = generateSmartTutorFallbackResponse(promptText, targetStudentName);
        pushUserChatMessage(uid, {
            role: 'model',
            parts: [{ text: fallbackReply }]
        });
        sendToGoogleFormsWebhook(targetStudentName, promptText, fallbackReply);
        return fallbackReply;
    }

    function formatMarkdownMessage(mdText) {
        const escape = (s) => String(s || '')
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');

        // Extrai blocos de código ```python ... ```
        const codeBlocks = [];
        let processed = String(mdText || '').replace(/```(\w*)\n([\s\S]*?)```/g, function (_, lang, code) {
            const idx = codeBlocks.length;
            codeBlocks.push({ lang: lang || 'python', code: code.replace(/\n$/, '') });
            return `@@CODE_BLOCK_${idx}@@`;
        });

        processed = escape(processed);
        // Markdown headers ### / ##
        processed = processed.replace(/^###\s+(.+)$/gm, '<strong style="color:#38bdf8;font-size:1.02rem;display:block;margin-top:8px;">$1</strong>');
        processed = processed.replace(/^##\s+(.+)$/gm, '<strong style="color:#38bdf8;font-size:1.08rem;display:block;margin-top:10px;">$1</strong>');
        // Bold **text**
        processed = processed.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
        // Inline code `code`
        processed = processed.replace(/`([^`]+)`/g, '<code style="background:#1e293b;color:#38bdf8;padding:2px 6px;border-radius:5px;font-family:\'JetBrains Mono\',monospace;font-size:0.86em;">$1</code>');
        // Paragraphs / line breaks
        processed = processed.replace(/\n/g, '<br>');

        // Restaura blocos de código com botão de copiar
        processed = processed.replace(/@@CODE_BLOCK_(\d+)@@/g, function (_, idxStr) {
            const b = codeBlocks[Number(idxStr)];
            if (!b) return '';
            const escapedCode = escape(b.code);
            return `
                <div class="st-replica-codeblock">
                    <div class="st-replica-code-header">
                        <span>🐍 ${escape(b.lang || 'python')}</span>
                        <button type="button" class="st-copy-code-btn" data-raw-code="${encodeURIComponent(b.code)}">📋 Copiar código</button>
                    </div>
                    <pre><code>${escapedCode}</code></pre>
                </div>
            `;
        });

        return processed;
    }

    // =========================================================================
    // EXPORT PUBLIC API
    // =========================================================================
    window.TrilhandoBeecrowd = {
        RANK_TIERS,
        CHALLENGE_CATEGORIES,
        PYTHON_CHALLENGES,
        getRankForXp,
        getUserChallengeStats,
        getClassLeaderboard,
        runPythonCodeAsync,
        judgeChallengeSubmissionAsync,
        askGeminiApiAsync,
        formatMarkdownMessage,
        getChatHistory: (uid) => getUserChatHistory(uid),
        clearChatHistory: (uid) => clearUserChatHistory(uid)
    };
})();
