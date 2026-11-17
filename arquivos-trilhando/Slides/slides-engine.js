document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const progressBar = document.getElementById('progressBar');
    const counter = document.getElementById('slideCounter');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const notesToggle = document.getElementById('notesToggle');
    const notesPanel = document.getElementById('notesPanel');
    const notesContent = document.getElementById('notesContent');
    const fullscreenToggle = document.getElementById('fullscreenToggle');

    let current = 0;
    let notesVisible = false;

    // Inject Code Modal HTML dynamically if not present
    if (!document.getElementById('codeModalOverlay')) {
        const modalHTML = `
        <div class="code-modal-overlay" id="codeModalOverlay">
            <div class="code-modal-content">
                <div class="code-modal-header">
                    <div class="code-modal-title" id="modalTitle">🔍 Detalhes da Demonstração</div>
                    <button class="code-modal-close" id="modalCloseBtn" title="Fechar (Esc)">✕</button>
                </div>
                <div class="code-modal-body">
                    <div>
                        <div class="modal-section-title">💻 Código Python Completo</div>
                        <div class="prompt-code" id="modalCodeBody"></div>
                    </div>
                    <div id="explanationContainer" style="display:none;">
                        <div class="modal-section-title">💡 Explicação Passo a Passo</div>
                        <div class="content-box accent-box" id="modalExplanationBody" style="font-size: 0.9rem; line-height: 1.6; color: #e2e8f0;"></div>
                    </div>
                    <div id="terminalContainer" style="display:none;">
                        <div class="modal-section-title">🖥️ Simulação da Saída no Terminal</div>
                        <div class="terminal-sim" id="modalTerminalBody"></div>
                    </div>
                </div>
                <div class="code-modal-actions">
                    <span style="font-size: 0.78rem; color: var(--text-muted);">Pressione <kbd style="background:rgba(255,255,255,0.1); padding:2px 6px; border-radius:4px; color:#fff;">Esc</kbd> para fechar</span>
                    <button class="copy-code-btn" id="modalCopyBtn">📋 Copiar Código</button>
                </div>
            </div>
        </div>`;
        document.body.insertAdjacentHTML('beforeend', modalHTML);
    }

    const modalOverlay = document.getElementById('codeModalOverlay');
    const modalTitle = document.getElementById('modalTitle');
    const modalCodeBody = document.getElementById('modalCodeBody');
    const modalExplanationBody = document.getElementById('modalExplanationBody');
    const explanationContainer = document.getElementById('explanationContainer');
    const modalTerminalBody = document.getElementById('modalTerminalBody');
    const terminalContainer = document.getElementById('terminalContainer');
    const modalCloseBtn = document.getElementById('modalCloseBtn');
    const modalCopyBtn = document.getElementById('modalCopyBtn');

    function showSlide(index) {
        if (index < 0 || index >= slides.length) return;
        slides.forEach(s => s.classList.remove('active'));
        slides[index].classList.add('active');
        current = index;
        
        const pct = ((index + 1) / slides.length) * 100;
        if (progressBar) progressBar.style.width = pct + '%';
        if (counter) counter.textContent = `${index + 1} / ${slides.length}`;
        
        if (prevBtn) prevBtn.disabled = index === 0;
        if (nextBtn) nextBtn.disabled = index === slides.length - 1;
        
        if (notesVisible && notesContent) {
            const note = slides[index].getAttribute('data-notes') || 'Sem notas registradas para este slide.';
            notesContent.innerHTML = note;
        }

        // Scroll slide content to top
        slides[index].scrollTop = 0;
    }

    function next() { if (current < slides.length - 1) showSlide(current + 1); }
    function prev() { if (current > 0) showSlide(current - 1); }

    function toggleNotes() {
        notesVisible = !notesVisible;
        if (notesPanel) notesPanel.classList.toggle('visible', notesVisible);
        if (notesToggle) notesToggle.classList.toggle('active', notesVisible);
        if (notesVisible && notesContent) {
            const note = slides[current].getAttribute('data-notes') || 'Sem notas registradas para este slide.';
            notesContent.innerHTML = note;
        }
    }

    function toggleFullscreen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(err => console.log(err));
        } else {
            document.exitFullscreen().catch(err => console.log(err));
        }
    }

    // Modal Expand Functions
    function openCodeModal(title, rawCode, formattedCodeHTML, explanation, terminalOutput) {
        if (modalTitle) modalTitle.innerHTML = title || '🔍 Demonstração de Código';
        if (modalCodeBody) modalCodeBody.innerHTML = formattedCodeHTML || rawCode;
        
        if (explanation && explanation.trim()) {
            modalExplanationBody.innerHTML = explanation;
            explanationContainer.style.display = 'block';
        } else {
            explanationContainer.style.display = 'none';
        }

        if (terminalOutput && terminalOutput.trim()) {
            modalTerminalBody.innerHTML = terminalOutput;
            terminalContainer.style.display = 'block';
        } else {
            terminalContainer.style.display = 'none';
        }

        // Store raw code on copy button for copy action
        if (modalCopyBtn) {
            modalCopyBtn.setAttribute('data-raw-code', rawCode);
            modalCopyBtn.innerHTML = '📋 Copiar Código';
        }

        modalOverlay.classList.add('active');
    }

    function closeCodeModal() {
        modalOverlay.classList.remove('active');
    }

    // Delegation for Expand Buttons
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('.expand-demo-btn');
        if (btn) {
            e.stopPropagation();
            const parentCard = btn.closest('.code-preview-card') || btn.closest('.content-box') || btn.parentElement;
            const codeElem = parentCard.querySelector('.prompt-code');
            
            const title = btn.getAttribute('data-title') || parentCard.getAttribute('data-title') || '💻 Demonstração Interativa';
            const formattedHTML = codeElem ? codeElem.innerHTML : btn.getAttribute('data-code');
            const rawCode = btn.getAttribute('data-raw-code') || (codeElem ? codeElem.textContent : '');
            const explanation = btn.getAttribute('data-explanation') || parentCard.getAttribute('data-explanation') || '';
            const terminal = btn.getAttribute('data-terminal') || parentCard.getAttribute('data-terminal') || '';

            openCodeModal(title, rawCode, formattedHTML, explanation, terminal);
        }
    });

    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeCodeModal);
    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) closeCodeModal();
        });
    }

    if (modalCopyBtn) {
        modalCopyBtn.addEventListener('click', () => {
            const rawCode = modalCopyBtn.getAttribute('data-raw-code') || '';
            if (rawCode) {
                navigator.clipboard.writeText(rawCode).then(() => {
                    modalCopyBtn.innerHTML = '✓ Copiado com Sucesso!';
                    setTimeout(() => { modalCopyBtn.innerHTML = '📋 Copiar Código'; }, 2000);
                }).catch(() => {
                    modalCopyBtn.innerHTML = '❌ Falha ao Copiar';
                });
            }
        });
    }

    if (prevBtn) prevBtn.addEventListener('click', prev);
    if (nextBtn) nextBtn.addEventListener('click', next);
    if (notesToggle) notesToggle.addEventListener('click', toggleNotes);
    if (fullscreenToggle) fullscreenToggle.addEventListener('click', toggleFullscreen);

    // Keyboard Shortcuts
    document.addEventListener('keydown', e => {
        const hwModal = document.getElementById('trilhandoHomeworkModal');
        if (hwModal && hwModal.classList.contains('active')) {
            if (e.key === 'Escape') hwModal.classList.remove('active');
            return;
        }

        if (modalOverlay && modalOverlay.classList.contains('active')) {
            if (e.key === 'Escape') closeCodeModal();
            return;
        }

        if (e.target && e.target.closest && e.target.closest('#slideAiChatSidebar')) {
            if (e.key === 'Escape' && document.body.classList.contains('ai-chat-open')) {
                toggleAiSidebar(false);
            }
            return;
        }

        const tag = (e.target && e.target.tagName) ? e.target.tagName.toUpperCase() : '';
        if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;

        if (e.key === 'ArrowRight' || e.key === ' ') {
            e.preventDefault();
            next();
        } else if (e.key === 'ArrowLeft') {
            e.preventDefault();
            prev();
        } else if (e.key === 'n' || e.key === 'N') {
            toggleNotes();
        } else if (e.key === 'f' || e.key === 'F') {
            toggleFullscreen();
        } else if (e.key === 'i' || e.key === 'I') {
            toggleAiSidebar();
        }
    });

    // Touch Swipe Navigation for Mobile Devices
    let touchStartX = 0;
    let touchStartY = 0;
    let touchEndX = 0;
    let touchEndY = 0;
    let touchStartedInSidebar = false;

    document.addEventListener('touchstart', e => {
        touchStartedInSidebar = Boolean(e.target && e.target.closest && e.target.closest('#slideAiChatSidebar'));
        if (e.touches && e.touches.length === 1) {
            touchStartX = e.touches[0].screenX;
            touchStartY = e.touches[0].screenY;
        }
    }, { passive: true });

    document.addEventListener('touchend', e => {
        if (touchStartedInSidebar) return;
        if (e.changedTouches && e.changedTouches.length === 1) {
            touchEndX = e.changedTouches[0].screenX;
            touchEndY = e.changedTouches[0].screenY;
            handleSwipe();
        }
    }, { passive: true });

    function handleSwipe() {
        const deltaX = touchEndX - touchStartX;
        const deltaY = touchEndY - touchStartY;
        if (Math.abs(deltaX) > 45 && Math.abs(deltaX) > Math.abs(deltaY) * 1.4) {
            const activeModal = document.querySelector('#missionModal[style*="display: flex"], #fsImgOverlay[style*="display: flex"], .code-modal-overlay.active, .media-modal-overlay.active, #trilhandoHomeworkModal.active');
            if (activeModal) return;

            if (deltaX < 0) {
                next();
            } else {
                prev();
            }
        }
    }

    // Media Carousel Handling
    document.addEventListener('click', (e) => {
        const navBtn = e.target.closest('.carousel-nav-btn');
        const indicatorBtn = e.target.closest('.carousel-indicator-btn');
        
        if (navBtn || indicatorBtn) {
            const container = (navBtn || indicatorBtn).closest('.media-carousel-container');
            if (!container) return;
            
            const carouselSlides = container.querySelectorAll('.media-carousel-slide');
            const indicators = container.querySelectorAll('.carousel-indicator-btn');
            let currentIdx = Array.from(carouselSlides).findIndex(s => s.classList.contains('active'));
            if (currentIdx === -1) currentIdx = 0;
            
            let nextIdx = currentIdx;
            
            if (indicatorBtn) {
                nextIdx = parseInt(indicatorBtn.getAttribute('data-target-slide'), 10);
            } else if (navBtn.classList.contains('next-btn')) {
                nextIdx = (currentIdx + 1) % carouselSlides.length;
            } else if (navBtn.classList.contains('prev-btn')) {
                nextIdx = (currentIdx - 1 + carouselSlides.length) % carouselSlides.length;
            }
            
            carouselSlides.forEach((s, idx) => s.classList.toggle('active', idx === nextIdx));
            indicators.forEach((ind, idx) => ind.classList.toggle('active', idx === nextIdx));
        }
    });

    // Inject Media Modal HTML dynamically if not present
    if (!document.getElementById('mediaModalOverlay')) {
        const mediaModalHTML = `
        <div class="media-modal-overlay" id="mediaModalOverlay">
            <div class="media-modal-content">
                <div class="code-modal-header">
                    <div class="code-modal-title" id="mediaModalTitle">🔍 Projeção de Mídia em Alta Resolução</div>
                    <button class="code-modal-close" id="mediaModalCloseBtn" title="Fechar (Esc)">✕</button>
                </div>
                <div class="media-modal-view-stage" id="mediaModalViewStage"></div>
                <div style="padding: 16px 24px; background: rgba(15, 23, 42, 0.95); border-top: 1px solid rgba(255,255,255,0.08);">
                    <div class="modal-section-title" id="mediaModalPromptHeader">📜 Prompt Utilizado</div>
                    <div class="prompt-box-text" id="mediaModalPromptText" style="margin:0; font-size: 0.88rem; line-height: 1.6;"></div>
                </div>
            </div>
        </div>`;
        document.body.insertAdjacentHTML('beforeend', mediaModalHTML);
    }

    const mediaModalOverlay = document.getElementById('mediaModalOverlay');
    const mediaModalTitle = document.getElementById('mediaModalTitle');
    const mediaModalViewStage = document.getElementById('mediaModalViewStage');
    const mediaModalPromptHeader = document.getElementById('mediaModalPromptHeader');
    const mediaModalPromptText = document.getElementById('mediaModalPromptText');
    const mediaModalCloseBtn = document.getElementById('mediaModalCloseBtn');

    function openMediaModal(title, isGood, mediaNode, promptText) {
        if (mediaModalTitle) mediaModalTitle.innerHTML = title || '🔍 Projeção em Alta Resolução';
        
        const promptFooter = mediaModalPromptText ? mediaModalPromptText.parentElement : null;
        if (promptFooter) {
            if (promptText && promptText.trim()) {
                promptFooter.style.display = 'block';
                if (mediaModalPromptHeader) {
                    mediaModalPromptHeader.innerHTML = isGood ? '✨ Prompt BOM Estruturado' : '💀 Prompt RUIM Vago';
                    mediaModalPromptHeader.style.color = isGood ? 'var(--cefet-green)' : 'var(--cefet-red)';
                }
                if (mediaModalPromptText) {
                    mediaModalPromptText.className = 'prompt-box-text ' + (isGood ? 'good' : 'bad');
                    mediaModalPromptText.textContent = promptText || '';
                }
            } else {
                promptFooter.style.display = 'none';
            }
        }

        if (mediaModalViewStage) {
            mediaModalViewStage.innerHTML = '';
            const cloneNode = mediaNode.cloneNode(true);
            cloneNode.style.width = '320px';
            cloneNode.style.height = 'auto';
            cloneNode.style.minWidth = '260px';
            cloneNode.style.maxHeight = '72vh';
            cloneNode.style.maxWidth = '88vw';
            cloneNode.style.objectFit = 'contain';
            cloneNode.style.background = '#ffffff';
            cloneNode.style.padding = '12px';
            cloneNode.style.borderRadius = '16px';
            cloneNode.style.boxShadow = '0 0 50px rgba(0, 229, 255, 0.4)';

            if (cloneNode.tagName === 'VIDEO') {
                cloneNode.controls = true;
                cloneNode.autoplay = true;
                cloneNode.style.background = 'transparent';
                cloneNode.style.padding = '0';
                cloneNode.style.width = '100%';
            }
            mediaModalViewStage.appendChild(cloneNode);
        }

        if (mediaModalOverlay) mediaModalOverlay.classList.add('active');
    }

    function closeMediaModal() {
        if (mediaModalViewStage) {
            const video = mediaModalViewStage.querySelector('video');
            if (video) video.pause();
        }
        if (mediaModalOverlay) mediaModalOverlay.classList.remove('active');
    }

    // Media & QR Code Click Handler
    document.addEventListener('click', (e) => {
        // 1. Media Cards (comparativos com prompt)
        const mediaCard = e.target.closest('.media-card');
        if (mediaCard && (e.target.tagName === 'IMG' || e.target.tagName === 'VIDEO' || e.target.closest('.media-expand-btn'))) {
            e.stopPropagation();
            const mediaNode = mediaCard.querySelector('img, video');
            const titleElem = mediaCard.querySelector('.media-title-bad, .media-title-good');
            const isGood = mediaCard.querySelector('.media-title-good') !== null;
            const promptBox = mediaCard.querySelector('.prompt-box-text');
            
            const title = titleElem ? titleElem.textContent : '🔍 Mídia Expandida';
            const promptText = promptBox ? promptBox.textContent : '';

            if (mediaNode) {
                openMediaModal(title, isGood, mediaNode, promptText);
            }
            return;
        }

        // 2. QR Codes e Imagens Interativas gerais
        const qrcodeTarget = e.target.closest('.qrcode-container, .qrcode-img, img.qrcode-img');
        if (qrcodeTarget) {
            e.stopPropagation();
            const imgNode = qrcodeTarget.tagName === 'IMG' ? qrcodeTarget : qrcodeTarget.querySelector('img');
            if (imgNode) {
                const title = imgNode.getAttribute('alt') || 'QR Code Expandido';
                openMediaModal(`📱 ${title}`, true, imgNode, '');
            }
        }
    });

    if (mediaModalCloseBtn) mediaModalCloseBtn.addEventListener('click', closeMediaModal);
    if (mediaModalOverlay) {
        mediaModalOverlay.addEventListener('click', (e) => {
            if (e.target === mediaModalOverlay) closeMediaModal();
        });
    }

    // Close Modals on Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (mediaModalOverlay && mediaModalOverlay.classList.contains('active')) {
                closeMediaModal();
            }
        }
    });

    // =========================================================================
    // ABA LATERAL DO CHAT GEMINI IA INTEGRADO NOS SLIDES (SPLIT-VIEW)
    // =========================================================================
    let aiSidebarOpen = false;
    let aiSidebarWide = false;
    let aiSending = false;

    function escapeChatHtml(str) {
        return String(str || '')
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    }

    function fallbackFormatMarkdown(mdText) {
        if (window.TrilhandoBeecrowd && typeof window.TrilhandoBeecrowd.formatMarkdownMessage === 'function') {
            return window.TrilhandoBeecrowd.formatMarkdownMessage(mdText);
        }
        const codeBlocks = [];
        let processed = String(mdText || '').replace(/```(\w*)\n([\s\S]*?)```/g, function (_, lang, code) {
            const idx = codeBlocks.length;
            codeBlocks.push({ lang: lang || 'python', code: code.replace(/\n$/, '') });
            return `@@CODE_BLOCK_${idx}@@`;
        });
        processed = escapeChatHtml(processed);
        processed = processed.replace(/^###\s+(.+)$/gm, '<strong style="color:#38bdf8;font-size:0.96rem;display:block;margin-top:6px;">$1</strong>');
        processed = processed.replace(/^##\s+(.+)$/gm, '<strong style="color:#38bdf8;font-size:1.02rem;display:block;margin-top:8px;">$1</strong>');
        processed = processed.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
        processed = processed.replace(/`([^`]+)`/g, '<code style="background:#1e293b;color:#38bdf8;padding:2px 5px;border-radius:4px;font-family:\'JetBrains Mono\',monospace;font-size:0.84em;">$1</code>');
        processed = processed.replace(/\n/g, '<br>');
        processed = processed.replace(/@@CODE_BLOCK_(\d+)@@/g, function (_, idxStr) {
            const b = codeBlocks[Number(idxStr)];
            if (!b) return '';
            return `
                <div class="st-replica-codeblock">
                    <div class="st-replica-code-header">
                        <span>🐍 ${escapeChatHtml(b.lang || 'python')}</span>
                        <button type="button" class="st-copy-code-btn" data-raw-code="${encodeURIComponent(b.code)}">📋 Copiar código</button>
                    </div>
                    <pre><code>${escapeChatHtml(b.code)}</code></pre>
                </div>
            `;
        });
        return processed;
    }

    function ensureBeecrowdEngineLoaded() {
        return new Promise((resolve) => {
            if (window.TrilhandoBeecrowd && typeof window.TrilhandoBeecrowd.askGeminiApiAsync === 'function') {
                resolve(true);
                return;
            }
            const existingScript = document.querySelector('script[src*="beecrowd-arena.js"]');
            if (existingScript) {
                existingScript.addEventListener('load', () => resolve(true));
                existingScript.addEventListener('error', () => resolve(false));
                setTimeout(() => resolve(Boolean(window.TrilhandoBeecrowd)), 1500);
                return;
            }
            const s = document.createElement('script');
            s.src = 'beecrowd-arena.js';
            s.onload = () => resolve(true);
            s.onerror = () => resolve(false);
            document.body.appendChild(s);
        });
    }

    function getActiveSlideContextInfo() {
        const activeSlideEl = slides[current];
        if (!activeSlideEl) return { number: current + 1, title: 'Slide ' + (current + 1), summary: '' };
        const stepEl = activeSlideEl.querySelector('.slide-step');
        const titleEl = activeSlideEl.querySelector('.slide-title');
        const subEl = activeSlideEl.querySelector('.slide-subtitle');
        const bodyEl = activeSlideEl.querySelector('.slide-body');

        const stepText = stepEl ? stepEl.textContent.trim() : '';
        const titleText = titleEl ? titleEl.textContent.trim() : ('Slide ' + (current + 1));
        const subText = subEl ? subEl.textContent.trim() : '';
        let bodyText = bodyEl ? bodyEl.innerText.replace(/\s+/g, ' ').trim() : '';
        if (bodyText.length > 650) {
            bodyText = bodyText.substring(0, 650) + '...';
        }
        return {
            number: current + 1,
            step: stepText,
            title: titleText,
            subtitle: subText,
            summary: bodyText
        };
    }

    function getSlideChatUser() {
        try {
            if (window.TrilhandoClassroom && typeof window.TrilhandoClassroom.getCurrentUser === 'function') {
                const u = window.TrilhandoClassroom.getCurrentUser();
                if (u) {
                    return {
                        id: String(u.id || 'anon'),
                        name: u.role === 'admin' ? (u.fullName || 'Professor / Administrador') : (u.fullName || u.username || 'Estudante')
                    };
                }
            }
        } catch (e) {}
        return { id: 'anon', name: 'Estudante' };
    }

    function getSlideChatHistory(uid) {
        if (window.TrilhandoBeecrowd && typeof window.TrilhandoBeecrowd.getChatHistory === 'function') {
            return window.TrilhandoBeecrowd.getChatHistory(uid);
        }
        try {
            const raw = localStorage.getItem('trilhando_chat_histories_v1');
            if (raw) {
                const parsed = JSON.parse(raw);
                if (parsed && Array.isArray(parsed[uid])) return parsed[uid];
            }
        } catch (e) {}
        return [];
    }

    function injectSlideAiSidebar() {
        // 1. Garante que o botão 🤖 Chat IA exista na barra superior (.top-controls)
        const topControls = document.querySelector('.top-controls');
        let toggleBtn = document.getElementById('slideAiChatToggleBtn');
        if (!toggleBtn && topControls) {
            toggleBtn = document.createElement('button');
            toggleBtn.type = 'button';
            toggleBtn.id = 'slideAiChatToggleBtn';
            toggleBtn.className = 'control-btn slide-ai-toggle-btn';
            toggleBtn.title = 'Abrir/Fechar Chat IA ao lado do slide (Atalho: I)';
            toggleBtn.innerHTML = '<span class="slide-ai-online-dot"></span> 🤖 Chat IA';
            const fsBtn = document.getElementById('fullscreenToggle');
            if (fsBtn && fsBtn.parentNode === topControls) {
                topControls.insertBefore(toggleBtn, fsBtn);
            } else {
                topControls.appendChild(toggleBtn);
            }
        }

        // 2. Cria a aba lateral discreta na borda direita caso o aluno queira puxar por ali
        if (!document.getElementById('slideAiEdgeTab')) {
            const edgeTab = document.createElement('button');
            edgeTab.type = 'button';
            edgeTab.id = 'slideAiEdgeTab';
            edgeTab.className = 'slide-ai-edge-tab';
            edgeTab.title = 'Abrir Tutor IA ao lado do slide (Atalho: I)';
            edgeTab.innerHTML = `
                <span style="font-size:1.05rem;">🤖</span>
                <span class="edge-vertical-text">Chat IA</span>
            `;
            document.body.appendChild(edgeTab);
            edgeTab.addEventListener('click', (e) => {
                e.stopPropagation();
                toggleAiSidebar(true);
            });
        }

        // 3. Cria o container da Aba Lateral (#slideAiChatSidebar)
        if (!document.getElementById('slideAiChatSidebar')) {
            const sidebar = document.createElement('aside');
            sidebar.id = 'slideAiChatSidebar';
            sidebar.className = 'slide-ai-sidebar';
            sidebar.setAttribute('aria-label', 'Tutor Inteligente Gemini Flash');
            sidebar.innerHTML = `
                <div class="slide-ai-header">
                    <div class="slide-ai-brand">
                        <div class="slide-ai-brand-icon">🤖</div>
                        <div class="slide-ai-brand-text">
                            <h4>Tutor IA • Gemini Flash</h4>
                            <span><i class="slide-ai-online-dot"></i> Auxílio ao vivo nos slides</span>
                        </div>
                    </div>
                    <div class="slide-ai-header-actions">
                        <button type="button" class="slide-ai-icon-btn" id="slideAiExpandWidthBtn" title="Expandir/Restaurar largura do Chat">↔️</button>
                        <button type="button" class="slide-ai-icon-btn danger" id="slideAiClearBtn" title="Limpar conversa" style="display:none;">🗑️</button>
                        <button type="button" class="slide-ai-icon-btn close-btn" id="slideAiCloseBtn" title="Fechar aba lateral (Esc)">✕</button>
                    </div>
                </div>

                <div class="slide-ai-quickbar">
                    <button type="button" class="slide-ai-chip explain-slide-chip" id="slideAiExplainCurrentBtn">
                        ✨ Explicar este Slide passo a passo
                    </button>
                    <button type="button" class="slide-ai-chip" data-slide-ai-quick="O que é uma variável em Python e como usar print e input?">💡 print / input</button>
                    <button type="button" class="slide-ai-chip" data-slide-ai-quick="Me explique como funciona o if, elif e else com um exemplo simples.">🔀 if / else</button>
                    <button type="button" class="slide-ai-chip" data-slide-ai-quick="Qual a diferença entre o laço for e o while? Me dê um exemplo.">🔁 for / while</button>
                    <button type="button" class="slide-ai-chip" data-slide-ai-quick="Como proteger meu código usando try e except ValueError?">🛡️ try / except</button>
                    <button type="button" class="slide-ai-chip" data-slide-ai-quick="Como criar um app com botão e campo de texto usando Flet?">📱 Flet</button>
                </div>

                <div class="slide-ai-messages" id="slideAiMessagesBox"></div>

                <div class="slide-ai-footer">
                    <div class="slide-ai-input-pill">
                        <textarea id="slideAiPromptInput" rows="1" placeholder="Tire sua dúvida sem sair do slide (Enter envia)..."></textarea>
                        <button type="button" class="slide-ai-send-btn" id="slideAiSendBtn" title="Enviar pergunta">➤</button>
                    </div>
                </div>
            `;
            document.body.appendChild(sidebar);
        }

        if (toggleBtn) {
            toggleBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                toggleAiSidebar();
            });
        }

        const closeBtn = document.getElementById('slideAiCloseBtn');
        if (closeBtn) {
            closeBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                toggleAiSidebar(false);
            });
        }

        const expandWidthBtn = document.getElementById('slideAiExpandWidthBtn');
        if (expandWidthBtn) {
            expandWidthBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                aiSidebarWide = !aiSidebarWide;
                document.body.classList.toggle('ai-chat-wide', aiSidebarWide);
                expandWidthBtn.textContent = aiSidebarWide ? '⇤' : '↔️';
            });
        }

        const clearBtn = document.getElementById('slideAiClearBtn');
        if (clearBtn) {
            clearBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                const u = getSlideChatUser();
                if (window.TrilhandoBeecrowd && typeof window.TrilhandoBeecrowd.clearChatHistory === 'function') {
                    window.TrilhandoBeecrowd.clearChatHistory(u.id);
                } else {
                    try {
                        const raw = localStorage.getItem('trilhando_chat_histories_v1');
                        const parsed = raw ? JSON.parse(raw) : {};
                        parsed[u.id] = [];
                        localStorage.setItem('trilhando_chat_histories_v1', JSON.stringify(parsed));
                    } catch (err) {}
                }
                renderSlideAiMessages();
            });
        }

        const explainBtn = document.getElementById('slideAiExplainCurrentBtn');
        if (explainBtn) {
            explainBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                const info = getActiveSlideContextInfo();
                const prompt = `Estou assistindo à aula no Slide ${info.number} ("${info.title}"). Me explique de forma bem didática e com um exemplo prático o que este slide ensina:\n\nResumo do slide: ${info.subtitle ? info.subtitle + ' — ' : ''}${info.summary}`;
                sendSlideAiPrompt(prompt);
            });
        }

        const sidebarEl = document.getElementById('slideAiChatSidebar');
        if (sidebarEl) {
            sidebarEl.querySelectorAll('[data-slide-ai-quick]').forEach(chip => {
                chip.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const q = chip.getAttribute('data-slide-ai-quick');
                    if (q) sendSlideAiPrompt(q);
                });
            });
        }

        const promptInp = document.getElementById('slideAiPromptInput');
        const sendBtn = document.getElementById('slideAiSendBtn');

        function handleTriggerSend() {
            if (!promptInp || aiSending) return;
            const text = promptInp.value.trim();
            if (!text) return;
            promptInp.value = '';
            promptInp.style.height = 'auto';
            sendSlideAiPrompt(text);
        }

        if (sendBtn) {
            sendBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                handleTriggerSend();
            });
        }

        if (promptInp) {
            promptInp.addEventListener('input', () => {
                promptInp.style.height = 'auto';
                promptInp.style.height = Math.min(promptInp.scrollHeight, 95) + 'px';
            });
            promptInp.addEventListener('keydown', (e) => {
                e.stopPropagation();
                if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleTriggerSend();
                } else if (e.key === 'Escape') {
                    toggleAiSidebar(false);
                }
            });
        }

        window.addEventListener('storage', (e) => {
            if (e && (e.key === 'trilhando_chat_histories_v1' || e.key === 'trilhando_classroom_session_v1')) {
                renderSlideAiMessages();
            }
        });
        window.addEventListener('trilhando:authchange', renderSlideAiMessages);
    }

    function bindSlideChatCopyButtons(containerEl) {
        if (!containerEl) return;
        containerEl.querySelectorAll('.st-copy-code-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const raw = decodeURIComponent(btn.getAttribute('data-raw-code') || '');
                navigator.clipboard.writeText(raw).then(() => {
                    btn.textContent = '✅ Copiado!';
                    setTimeout(() => { btn.textContent = '📋 Copiar código'; }, 1800);
                });
            });
        });
    }

    function renderSlideAiMessages() {
        const msgBox = document.getElementById('slideAiMessagesBox');
        const clearBtn = document.getElementById('slideAiClearBtn');
        const promptInp = document.getElementById('slideAiPromptInput');
        const sendBtn = document.getElementById('slideAiSendBtn');
        const explainBtn = document.getElementById('slideAiExplainCurrentBtn');
        if (!msgBox) return;

        const u = getSlideChatUser();
        const history = getSlideChatHistory(u.id);
        const slideInfo = getActiveSlideContextInfo();

        if (explainBtn) {
            explainBtn.innerHTML = `✨ Explicar Slide ${slideInfo.number} (${escapeChatHtml(slideInfo.title.length > 26 ? slideInfo.title.slice(0, 26) + '…' : slideInfo.title)})`;
        }

        let html = '';
        if (history.length === 0) {
            html = `
                <div class="st-chat-msg-assistant">
                    <div style="font-weight:800;color:#38BDF8;margin-bottom:4px;display:flex;align-items:center;gap:6px;font-size:0.78rem;">
                        <span>🤖</span> <span>GEMINI FLASH • TUTOR NOS SLIDES</span>
                    </div>
                    <div style="color:#F3F4F6;font-size:0.84rem;line-height:1.5;">
                        Olá, <strong>${escapeChatHtml(u.name)}</strong>! Estou aqui ao lado dos slides para te ajudar durante a aula.<br><br>
                        👆 Clique em <strong>"✨ Explicar Slide ${slideInfo.number}"</strong> acima ou digite sua dúvida abaixo sem precisar sair da apresentação!
                    </div>
                </div>
            `;
        } else {
            html = history.map(msg => {
                const txt = (msg.parts && msg.parts[0] && msg.parts[0].text) ? msg.parts[0].text : '';
                if (msg.role === 'user') {
                    return `
                        <div class="st-chat-msg-user">
                            <span style="font-size:1.05rem;">🧑‍💻</span>
                            <div style="flex:1;color:#F8FAFC;white-space:pre-wrap;">${escapeChatHtml(txt)}</div>
                        </div>
                    `;
                } else {
                    return `
                        <div class="st-chat-msg-assistant">
                            <div style="font-weight:800;color:#38BDF8;margin-bottom:4px;display:flex;align-items:center;gap:6px;font-size:0.76rem;">
                                <span>🤖</span> <span>GEMINI FLASH</span>
                            </div>
                            <div style="color:#F3F4F6;">${fallbackFormatMarkdown(txt)}</div>
                        </div>
                    `;
                }
            }).join('');
        }

        if (aiSending) {
            html += `
                <div class="st-chat-msg-assistant" style="opacity:0.9;">
                    <strong style="color:#38BDF8;font-size:0.82rem;">🤖 Gemini Flash gerando explicação...</strong>
                </div>
            `;
        }

        msgBox.innerHTML = html;
        msgBox.scrollTop = msgBox.scrollHeight;
        bindSlideChatCopyButtons(msgBox);

        if (clearBtn) {
            clearBtn.style.display = history.length > 0 ? 'inline-flex' : 'none';
        }
        if (promptInp) promptInp.disabled = aiSending;
        if (sendBtn) sendBtn.disabled = aiSending;
    }

    async function sendSlideAiPrompt(promptText) {
        if (aiSending) return;
        if (!aiSidebarOpen) {
            toggleAiSidebar(true);
        }
        aiSending = true;
        renderSlideAiMessages();

        await ensureBeecrowdEngineLoaded();
        const u = getSlideChatUser();

        if (window.TrilhandoBeecrowd && typeof window.TrilhandoBeecrowd.askGeminiApiAsync === 'function') {
            try {
                const reqPromise = window.TrilhandoBeecrowd.askGeminiApiAsync(promptText, u.name, u.id);
                renderSlideAiMessages();
                await reqPromise;
            } catch (err) {
                console.warn('Slide AI Chat error:', err);
            }
        }

        aiSending = false;
        renderSlideAiMessages();
        const inp = document.getElementById('slideAiPromptInput');
        if (inp) inp.focus();
    }

    function toggleAiSidebar(forceState) {
        aiSidebarOpen = typeof forceState === 'boolean' ? forceState : !aiSidebarOpen;
        document.body.classList.toggle('ai-chat-open', aiSidebarOpen);
        const toggleBtn = document.getElementById('slideAiChatToggleBtn');
        if (toggleBtn) {
            toggleBtn.classList.toggle('active', aiSidebarOpen);
        }
        if (aiSidebarOpen) {
            ensureBeecrowdEngineLoaded().then(() => {
                renderSlideAiMessages();
            });
            renderSlideAiMessages();
            setTimeout(() => {
                const inp = document.getElementById('slideAiPromptInput');
                if (inp && window.innerWidth > 860) inp.focus();
            }, 220);
        }
    }

    // Atualiza o botão "Explicar Slide X" sempre que o usuário muda de slide
    const originalShowSlide = showSlide;
    showSlide = function(index) {
        originalShowSlide(index);
        if (aiSidebarOpen) {
            const explainBtn = document.getElementById('slideAiExplainCurrentBtn');
            if (explainBtn) {
                const slideInfo = getActiveSlideContextInfo();
                explainBtn.innerHTML = `✨ Explicar Slide ${slideInfo.number} (${escapeChatHtml(slideInfo.title.length > 26 ? slideInfo.title.slice(0, 26) + '…' : slideInfo.title)})`;
            }
        }
    };

    injectSlideAiSidebar();

    // Initialize slide (with optional query param jump)
    const params = new URLSearchParams(window.location.search);
    const targetParam = params.get('slide');
    if (targetParam === 'last') {
        showSlide(slides.length - 1);
    } else if (targetParam === 'quiz') {
        const quizSlideIdx = Array.from(slides).findIndex(s => s.querySelector('[data-trilhando-quiz]'));
        showSlide(quizSlideIdx >= 0 ? quizSlideIdx : 0);
    } else if (targetParam && !isNaN(parseInt(targetParam, 10))) {
        const idx = Math.max(0, Math.min(slides.length - 1, parseInt(targetParam, 10) - 1));
        showSlide(idx);
    } else {
        showSlide(0);
    }
    if (params.get('chat') === '1' || params.get('ia') === '1') {
        toggleAiSidebar(true);
    }
});


