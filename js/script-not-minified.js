document.addEventListener('DOMContentLoaded', () => {
    portfolioData.currentLang = localStorage.getItem('lang') || 'fr';

    initData();
    initTheme();
    initCanvas();

    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }

    const params = new URLSearchParams(window.location.search);
    const projId = params.get('project');
    if (projId) { loadProject(projId); } else { renderHomePage(false); }
});

function t(obj) {
    return getText(obj, portfolioData.currentLang);
}

function L() {
    return portfolioData.labels[portfolioData.currentLang];
}

function P() {
    return portfolioData.profile[portfolioData.currentLang];
}

function initData() {
    const p = P();
    document.getElementById('header-name').textContent = p.name;
    document.getElementById('header-role').textContent = p.role;

    const controls = document.getElementById('header-controls');
    const currentLang = portfolioData.currentLang;

    controls.innerHTML = `
        <div class="cv-dropdown">
            <button class="icon-btn" id="cv-btn" title="${L().downloadCV}"><i data-lucide="file-down"></i></button>
            <div class="cv-menu" id="cv-menu">
                <a href="${portfolioData.cvLinks.fr.url}" target="_blank">${portfolioData.cvLinks.fr.label}</a>
                <a href="${portfolioData.cvLinks.intFr.url}" target="_blank">${portfolioData.cvLinks.intFr.label}</a>
                <a href="${portfolioData.cvLinks.intEn.url}" target="_blank">${portfolioData.cvLinks.intEn.label}</a>
            </div>
        </div>
        <a class="icon-btn" href="mailto:${p.email}" title="Email"><i data-lucide="mail"></i></a>
        <a class="icon-btn" href="${p.github}" target="_blank" title="GitHub"><i data-lucide="github"></i></a>
        <a class="icon-btn" href="${p.linkedin}" target="_blank" title="LinkedIn"><i data-lucide="linkedin"></i></a>
        <button id="lang-toggle" class="icon-btn lang-btn" title="Language">${currentLang.toUpperCase()}</button>
        <button id="theme-toggle" class="icon-btn" title="Toggle Theme"><i data-lucide="sun"></i></button>
    `;

    initCVDropdown();
    initLangToggle();
    initThemeListeners();
    lucide.createIcons();
}

function initCVDropdown() {
    const cvBtn = document.getElementById('cv-btn');
    const cvMenu = document.getElementById('cv-menu');

    cvBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        cvMenu.classList.toggle('show');
    });

    document.addEventListener('click', () => {
        cvMenu.classList.remove('show');
    });
}

function initLangToggle() {
    const btn = document.getElementById('lang-toggle');
    btn.addEventListener('click', () => {
        const newLang = portfolioData.currentLang === 'fr' ? 'en' : 'fr';
        portfolioData.currentLang = newLang;
        localStorage.setItem('lang', newLang);
        btn.textContent = newLang.toUpperCase();

        const params = new URLSearchParams(window.location.search);
        const projId = params.get('project');
        if (projId) { loadProject(projId); } else { renderHomePage(false); }

        const p = P();
        document.getElementById('header-name').textContent = p.name;
        document.getElementById('header-role').textContent = p.role;
    });
}

function typewrite(el, speed = 100) {
    if (!el || el.dataset.typedDone === "true") return;
    const txt = el.getAttribute('data-text') || el.textContent.trim();
    el.textContent = "";

    let i = 0;
    function step() {
        if (i <= txt.length) {
            el.textContent = txt.slice(0, i);
            i++;
            setTimeout(step, speed);
        } else {
            el.dataset.typedDone = "true";
        }
    }
    step();
}

function renderHomePage(scrollToProjects = false) {
    const app = document.getElementById('app');
    const p = P();
    const l = L();
    const lang = portfolioData.currentLang;

    app.innerHTML = `
        <main class="main">
            <section class="section hero fadein visible">
                <div class="hero-card">
                    <img src="${p.avatar}" alt="Profile" class="profile-photo">
                    <div class="hero-text">
                        <h2 id="typed-hero" data-text="${p.welcomeTitle}"></h2>
                        <p class="lead">${p.welcomeText}</p>
                        <div class="hero-actions">
                            <div class="cv-dropdown-hero">
                                <button class="btn" id="hero-cv-btn">${l.downloadCV} ▼</button>
                                <div class="cv-menu-hero" id="hero-cv-menu">
                                    <a href="${portfolioData.cvLinks.fr.url}" target="_blank">${portfolioData.cvLinks.fr.label}</a>
                                    <a href="${portfolioData.cvLinks.intFr.url}" target="_blank">${portfolioData.cvLinks.intFr.label}</a>
                                    <a href="${portfolioData.cvLinks.intEn.url}" target="_blank">${portfolioData.cvLinks.intEn.label}</a>
                                </div>
                            </div>
                            <button class="btn" onclick="document.getElementById('projects').scrollIntoView({behavior:'smooth'})">${l.viewProjects}</button>
                            <a class="btn" href="#contact">${l.getInTouch}</a>
                        </div>
                    </div>
                </div>
            </section>

            <section id="skills" class="section">
                <h3 class="section-title" data-text="${l.skills}"></h3>
                <div class="skills-grid">
                    ${portfolioData.skills.map(s => `
                        <div class="skill">
                            <h4>${s.name}</h4>
                            <div class="bar" data-level="${s.level}"><div class="bar-fill"></div></div>
                        </div>
                    `).join('')}
                </div>
            </section>

            <section id="projects" class="section">
                <h3 class="section-title" data-text="${l.projects}"></h3>
                <div class="project-filters">
                    <button class="btn-filter active" data-filter="all">${l.all}</button>
                    <button class="btn-filter" data-filter="csharp">C# / WPF</button>
                    <button class="btn-filter" data-filter="html">HTML / CSS</button>
                    <button class="btn-filter" data-filter="php">PHP / Laravel</button>
                    <button class="btn-filter" data-filter="javascript">JavaScript / Phaser</button>
                    <button class="btn-filter" data-filter="iot">IoT</button>
                </div>
                <div class="projects-grid">
                    ${portfolioData.projects.map(proj => `
                        <article class="project-tile" data-category="${proj.category.join(' ')}" onclick="loadProject('${proj.id}')" style="cursor:pointer;">
                            <div class="thumb" style="background-image:url('${proj.thumb}')"></div>
                            <div class="info">
                                <div class="info-header">
                                    <h4>${t(proj.title)}</h4>
                                    <span class="proj-status ${proj.statusClass}">${t(proj.status)}</span>
                                </div>
                                <p class="proj-desc">${t(proj.summary)}</p>
                                <p class="proj-date">${t(proj.date)}</p>
                                <div class="info-footer">
                                    <div class="tags-wrapper">${proj.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}</div>
                                    <button class="btn outline small">${l.details}</button>
                                </div>
                            </div>
                        </article>
                    `).join('')}
                </div>
            </section>

            <section id="education" class="section">
                <h3 class="section-title" data-text="${l.education}"></h3>
                <div class="card-list">
                    ${portfolioData.education.map(e => `
                        <div class="card">
                            <span class="card-date">${t(e.date)}</span>
                            <h4>${t(e.title)}</h4>
                            <p class="muted">${t(e.desc)}</p>
                        </div>
                    `).join('')}
                </div>
            </section>

            <section id="experience" class="section">
                <h3 class="section-title" data-text="${l.experiences}"></h3>
                <div class="card-list">
                    ${portfolioData.experience.map(e => `
                        <div class="card">
                            <span class="card-date">${t(e.date)}</span>
                            <h4>${t(e.title)}</h4>
                            <p class="muted">${t(e.desc)}</p>
                        </div>
                    `).join('')}
                </div>
            </section>

            <section id="languages" class="section">
                <h3 class="section-title" data-text="${l.languagesSkills}"></h3>
                <div class="two-col">
                    <div>
                        <h4>${l.languages}</h4>
                        <ul>${(portfolioData.languages[lang] || portfolioData.languages.en).map(lang => `<li>${lang}</li>`).join('')}</ul>
                    </div>
                    <div>
                        <h4>${l.softSkills}</h4>
                        <ul>${(portfolioData.softSkills[lang] || portfolioData.softSkills.en).map(s => `<li>${s}</li>`).join('')}</ul>
                    </div>
                </div>
            </section>

            <section id="hobbies" class="section">
                <h3 class="section-title" data-text="${l.hobbies}"></h3>
                <div class="projects-grid">
                    ${(portfolioData.hobbies[lang] || portfolioData.hobbies.en).map(h => `
                        <article class="project-tile hobby-tile">
                            <div class="thumb" style="background-image:url('${h.image}')"></div>
                            <div class="info">
                                <div class="info-footer">
                                    <h4>${h.title}</h4>
                                    <span class="tag">${h.tags}</span>
                                </div>
                            </div>
                        </article>
                    `).join('')}
                </div>
            </section>

            <section id="references" class="section">
                <h3 class="section-title" data-text="${l.references}"></h3>
                <div class="card-list">
                    ${portfolioData.references.map(ref => `
                        <div class="card">
                            <h4>${ref.name}</h4>
                            <p class="muted">${t(ref.role)}</p>
                            <p class="muted" style="font-size:0.9rem">${t(ref.place)}</p>
                            <a href="mailto:${ref.email}" class="btn outline small" style="margin-top:10px">
                                ${ref.email}
                            </a>
                        </div>
                    `).join('')}
                </div>
            </section>

            <section id="contact" class="section contact">
                <h3 class="section-title" data-text="${l.contact}"></h3>
                <p class="muted" style="margin-bottom:20px;">${l.contactDesc}</p>
                <form id="contact-form">
                    <input type="text" name="website" style="display:none;">
                    <input name="name" placeholder="${l.name}" required>
                    <input name="email" type="email" placeholder="${l.emailPlaceholder}" required>
                    <textarea name="message" rows="5" placeholder="${l.messagePlaceholder}" required></textarea>
                    <div class="form-row">
                        <button class="btn" type="submit">${l.sendMessage}</button>
                    </div>
                </form>
            </section>

            <footer class="footer">© ${new Date().getFullYear()} Mattys BEAUFORT LOURDAULT</footer>
        </main>`;

    initEffects();
    initContactForm();
    initHeroCVDropdown();

    if (scrollToProjects) {
        setTimeout(() => document.getElementById('projects')?.scrollIntoView({ behavior: 'auto' }), 10);
    } else {
        window.scrollTo(0, 0);
    }
}

function initHeroCVDropdown() {
    const cvBtn = document.getElementById('hero-cv-btn');
    const cvMenu = document.getElementById('hero-cv-menu');

    if (cvBtn && cvMenu) {
        cvBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            cvMenu.classList.toggle('show');
        });

        document.addEventListener('click', () => {
            cvMenu.classList.remove('show');
        });
    }
}

window.loadProject = function (id) {
    const proj = portfolioData.projects.find(p => p.id === id);
    if (!proj) return;
    const app = document.getElementById('app');
    const l = L();

    app.innerHTML = `
        <main class="main centered">
            <section class="section project-single fadein visible" style="margin-top: 40px;">
                <div style="margin-bottom: 20px;">
                    <button onclick="renderHomePage(true)" class="btn outline small">${l.backToProjects}</button>
                </div>
                
                <div class="project-top card">
                    <h2 class="section-title" data-text="${t(proj.title)}"></h2>
                    <p class="card-date">${t(proj.date)}</p>
                    <p class="muted">${t(proj.description)}</p>
                    <div class="project-meta-row">
                        <div class="tags-wrapper">
                            ${proj.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                        </div>
                        <div class="proj-cta">
                            ${proj.github ? `<a href="${proj.github}" target="_blank" class="btn outline">GitHub</a>` : ''}
                        </div>
                    </div>
                </div>

                <div class="project-layout">
                    <div class="project-gallery">
                        <h3 class="section-title" style="text-align:left;" data-text="${l.gallery}"></h3>
                        ${proj.gallery.map(media => {
                            if (media.type === 'video') {
                                return `
                                <div class="gthumb video-thumb" 
                                     style="background-image:url('${media.thumb || media.src}')" 
                                     onclick="openLightbox('${media.src}','${t(media.caption)}', 'video')">
                                     <i data-lucide="play-circle" class="play-icon"></i>
                                </div>`;
                            } else {
                                return `
                                <div class="gthumb" 
                                     style="background-image:url('${media.src}')" 
                                     onclick="openLightbox('${media.src}','${t(media.caption)}', 'image')">
                                </div>`;
                            }
                        }).join('')}
                    </div>
                    <div class="project-details card fadein">
                        ${proj.detailsSections.map(s => `
                            <h4>${t(s.title)}</h4>
                            ${s.text ? `<p class="muted">${t(s.text)}</p>` : ''}
                            ${s.list ? `<ul class="muted">${(t(s.list) || []).map(item => `<li>${item}</li>`).join('')}</ul>` : ''}
                        `).join('')}
                    </div>
                </div>
            </section>
            <footer class="footer">© ${new Date().getFullYear()} Mattys BEAUFORT LOURDAULT</footer>
        </main>`;

    setTimeout(() => {
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }, 10);

    app.querySelectorAll('.section-title').forEach(el => typewrite(el));
    lucide.createIcons();
}

function initEffects() {
    const hero = document.getElementById('typed-hero');
    if (hero) typewrite(hero, 40);

    const obs = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('visible');
                const t = e.target.querySelector('.section-title');
                if (t) typewrite(t, 100);
            }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.section').forEach(s => obs.observe(s));

    const barObs = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                const l = e.target.getAttribute('data-level');
                e.target.querySelector('.bar-fill').style.width = l + "%";
            }
        });
    });
    document.querySelectorAll('.bar').forEach(b => barObs.observe(b));

    initFilters();
    lucide.createIcons();
}

function initFilters() {
    const btns = document.querySelectorAll('.btn-filter');
    const items = document.querySelectorAll('#projects .project-tile');

    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            btns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const f = btn.getAttribute('data-filter');
            items.forEach(it => {
                const c = it.getAttribute('data-category');
                if (c) {
                    it.style.display = (f === 'all' || c.includes(f)) ? 'flex' : 'none';
                }
            });
        });
    });
}

function initThemeListeners() {
    const btn = document.getElementById('theme-toggle');
    const body = document.body;
    btn.addEventListener('click', () => {
        const next = body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        body.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
        btn.innerHTML = `<i data-lucide="${next === 'dark' ? 'sun' : 'moon'}"></i>`;
        lucide.createIcons();
    });
}
function initTheme() {
    const s = localStorage.getItem('theme') || 'dark';
    document.body.setAttribute('data-theme', s);
}

window.openLightbox = function (src, cap, type = 'image') {
    const m = document.getElementById('img-modal');
    const imgEl = document.getElementById('img-modal-content');
    const vidEl = document.getElementById('video-modal-content');
    
    if (type === 'video') {
        imgEl.style.display = 'none';
        vidEl.style.display = 'block';
        vidEl.src = src;
        vidEl.play();
    } else {
        vidEl.style.display = 'none';
        vidEl.pause();
        imgEl.style.display = 'block';
        imgEl.src = src;
    }
    
    document.getElementById('img-modal-caption').textContent = cap;
    m.classList.add('visible');
    m.style.pointerEvents = 'all';
}

document.getElementById('img-modal-close').addEventListener('click', () => {
    const m = document.getElementById('img-modal');
    const vidEl = document.getElementById('video-modal-content');
    m.classList.remove('visible');
    m.style.pointerEvents = 'none';
    vidEl.pause(); 
    vidEl.removeAttribute('src'); 
    vidEl.load(); 
});

function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const data = new FormData(form);
        try {
            const res = await fetch("php/sendmail.php", { method: "POST", body: data });
            const json = await res.json();
            if (json.success) { alert("Message sent successfully!"); form.reset(); }
            else { alert("Error sending message."); }
        } catch (e) { alert("Error sending message."); }
    });
}

function initCanvas() {
    const c = document.getElementById('bg-canvas');
    if (!c) return;
    const ctx = c.getContext('2d');
    let W = c.width = innerWidth, H = c.height = innerHeight;
    window.addEventListener('resize', () => { W = c.width = innerWidth; H = c.height = innerHeight; nodes = []; build(); });

    const colors = {
        dark: { g1: 'rgba(1,3,8,0.02)', g2: 'rgba(1,3,8,0.06)', l1: '51,170,255', dot: '180,230,255' },
        light: { g1: 'rgba(200,220,255,0.1)', g2: 'rgba(200,220,255,0.2)', l1: '0,80,180', dot: '0,70,150' }
    };

    let nodes = [];
    function build() {
        const space = Math.max(60, Math.floor(Math.min(W, H) / 10));
        for (let r = 0; r <= Math.ceil(H / space); r++) {
            for (let k = 0; k <= Math.ceil(W / space); k++) {
                nodes.push({
                    x: k * space + (Math.random() * 2 - 1) * space * 0.35,
                    y: r * space + (Math.random() * 2 - 1) * space * 0.35,
                    ox: k * space + (Math.random() * 2 - 1) * space * 0.35,
                    oy: r * space + (Math.random() * 2 - 1) * space * 0.35,
                    r: 0.8 + Math.random() * 1.8
                });
            }
        }
    }
    build();

    function loop(now) {
        const th = document.body.getAttribute('data-theme') || 'dark';
        const col = colors[th === 'light' ? 'light' : 'dark'];
        ctx.clearRect(0, 0, W, H);
        const g = ctx.createLinearGradient(0, 0, W, H);
        g.addColorStop(0, col.g1); g.addColorStop(1, col.g2);
        ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);

        nodes.forEach((n, i) => {
            const t = now * 0.0007 + i;
            n.x = n.ox + Math.sin(t * 1.1) * 6 + Math.cos(t * 0.7) * 4;
            n.y = n.oy + Math.cos(t * 1.3) * 6 + Math.sin(t * 0.5) * 4;
            for (let j = i + 1; j < nodes.length; j++) {
                const n2 = nodes[j];
                const d = Math.hypot(n.x - n2.x, n.y - n2.y);
                if (d < 140) {
                    ctx.beginPath();
                    ctx.lineWidth = 6 * (1 - d / 140);
                    ctx.strokeStyle = `rgba(${col.l1},${(1 - d / 140) * 0.06})`;
                    ctx.moveTo(n.x, n.y); ctx.lineTo(n2.x, n2.y); ctx.stroke();
                }
            }
            ctx.beginPath(); ctx.fillStyle = `rgba(${col.dot},0.5)`;
            ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2); ctx.fill();
        });
        requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
}