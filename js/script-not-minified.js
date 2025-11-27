document.addEventListener('DOMContentLoaded', () => {
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

function initData() {
    const p = portfolioData.profile;
    document.getElementById('header-name').textContent = p.name;
    document.getElementById('header-role').textContent = p.role;
    
    const controls = document.getElementById('header-controls');
    controls.innerHTML = `
        <a class="icon-btn" href="${p.cvLink}" target="_blank" title="Download CV"><i data-lucide="file-down"></i></a>
        <a class="icon-btn" href="mailto:${p.email}" title="Email"><i data-lucide="mail"></i></a>
        <a class="icon-btn" href="${p.github}" target="_blank" title="GitHub"><i data-lucide="github"></i></a>
        <a class="icon-btn" href="${p.linkedin}" target="_blank" title="LinkedIn"><i data-lucide="linkedin"></i></a>
        <button id="theme-toggle" class="icon-btn" title="Toggle Theme"><i data-lucide="sun"></i></button>
    `;
    initThemeListeners();
    lucide.createIcons();
}

/* --- TYPING --- */
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
    const p = portfolioData.profile;

    app.innerHTML = `
        <main class="main">
            <section class="section hero fadein visible">
                <div class="hero-card">
                    <img src="${p.avatar}" alt="Profile" class="profile-photo">
                    <div class="hero-text">
                        <h2 id="typed-hero" data-text="${p.welcomeTitle}"></h2>
                        <p class="lead">${p.welcomeText}</p>
                        <div class="hero-actions">
                            <a class="btn" href="${p.cvLink}" target="_blank">Download CV</a>
                            <button class="btn" onclick="document.getElementById('projects').scrollIntoView({behavior:'smooth'})">View Projects</button>
                            <a class="btn outline" href="#contact">Get in Touch</a>
                        </div>
                    </div>
                </div>
            </section>

            <section id="skills" class="section">
                <h3 class="section-title" data-text="Skills"></h3>
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
                <h3 class="section-title" data-text="Projects"></h3>
                <div class="project-filters">
                    <button class="btn-filter active" data-filter="all">All</button>
                    <button class="btn-filter" data-filter="csharp">C# / WPF</button>
                    <button class="btn-filter" data-filter="html">HTML / CSS</button>
                    <button class="btn-filter" data-filter="php">PHP / Laravel</button>
                    <button class="btn-filter" data-filter="javascript">JavaScript / Phaser</button>
                </div>
                <div class="projects-grid">
                    ${portfolioData.projects.map(proj => `
                        <article class="project-tile" data-category="${proj.category.join(' ')}" onclick="loadProject('${proj.id}')" style="cursor:pointer;">
                            <div class="thumb" style="background-image:url('${proj.thumb}')"></div>
                            <div class="info">
                                <div class="info-header">
                                    <h4>${proj.title}</h4>
                                    <span class="proj-status ${proj.statusClass}">${proj.status}</span>
                                </div>
                                <p class="proj-desc">${proj.summary}</p>
                                <p class="proj-date">${proj.date}</p>
                                <div class="info-footer">
                                    <div class="tags-wrapper">${proj.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
                                    <button class="btn outline small">Details</button>
                                </div>
                            </div>
                        </article>
                    `).join('')}
                </div>
            </section>

            <section id="education" class="section">
                <h3 class="section-title" data-text="Education"></h3>
                <div class="card-list">
                    ${portfolioData.education.map(e => `
                        <div class="card">
                            <span class="card-date">${e.date}</span>
                            <h4>${e.title}</h4>
                            <p class="muted">${e.desc}</p>
                        </div>
                    `).join('')}
                </div>
            </section>

            <section id="experience" class="section">
                <h3 class="section-title" data-text="Experiences"></h3>
                <div class="card-list">
                    ${portfolioData.experience.map(e => `
                        <div class="card">
                            <span class="card-date">${e.date}</span>
                            <h4>${e.title}</h4>
                            <p class="muted">${e.desc}</p>
                        </div>
                    `).join('')}
                </div>
            </section>

            <section id="languages" class="section">
                <h3 class="section-title" data-text="Languages & Soft Skills"></h3>
                <div class="two-col">
                    <div>
                        <h4>Languages</h4>
                        <ul>${portfolioData.languages.map(l => `<li>${l}</li>`).join('')}</ul>
                    </div>
                    <div>
                        <h4>Soft Skills</h4>
                        <ul>${portfolioData.softSkills.map(s => `<li>${s}</li>`).join('')}</ul>
                    </div>
                </div>
            </section>

            <section id="hobbies" class="section">
                <h3 class="section-title" data-text="Hobbies"></h3>
                <div class="projects-grid">
                    ${portfolioData.hobbies.map(h => `
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
                <h3 class="section-title" data-text="References"></h3>
                <div class="card-list">
                    ${portfolioData.references.map(ref => `
                        <div class="card">
                            <h4>${ref.name}</h4>
                            <p class="muted">${ref.role}</p>
                            <p class="muted" style="font-size:0.9rem">${ref.place}</p>
                            <a href="mailto:${ref.email}" class="btn outline small" style="margin-top:10px">
                                ${ref.email}
                            </a>
                        </div>
                    `).join('')}
                </div>
            </section>

            <section id="contact" class="section contact">
                <h3 class="section-title" data-text="Contact"></h3>
                <p class="muted" style="margin-bottom:20px;">Email me for collaboration, internships, or project inquiries</p>
                <form id="contact-form">
                    <input type="text" name="website" style="display:none;">
                    <input name="name" placeholder="Name" required>
                    <input name="email" type="email" placeholder="Email" required>
                    <textarea name="message" rows="5" placeholder="Message" required></textarea>
                    <div class="form-row">
                        <button class="btn" type="submit">Send Message</button>
                    </div>
                </form>
            </section>

            <footer class="footer">© ${new Date().getFullYear()} Mattys Lourdault</footer>
        </main>`;

    initEffects();
    initContactForm();
    
    if(scrollToProjects) {
        setTimeout(() => document.getElementById('projects')?.scrollIntoView({behavior:'auto'}), 10);
    } else {
        window.scrollTo(0,0);
    }
}

window.loadProject = function(id) {
    const proj = portfolioData.projects.find(p => p.id === id);
    if (!proj) return;
    const app = document.getElementById('app');
    
    app.innerHTML = `
        <main class="main centered">
            <section class="section project-single fadein visible" style="margin-top: 40px;">
                <div style="margin-bottom: 20px;">
                    <button onclick="renderHomePage(true)" class="btn outline small">← Back to Projects</button>
                </div>
                
                <div class="project-top card">
                    <h2 class="section-title" data-text="${proj.title}"></h2>
                    <p class="card-date">${proj.date}</p>
                    <p class="muted">${proj.description}</p>
                    <div class="project-meta-row">
                        <div class="tags-wrapper">
                            ${proj.tags.map(t => `<span class="tag">${t}</span>`).join('')}
                        </div>
                        <div class="proj-cta">
                            ${proj.github ? `<a href="${proj.github}" target="_blank" class="btn outline">GitHub</a>` : ''}
                        </div>
                    </div>
                </div>

                <div class="project-layout">
                    <div class="project-gallery">
                        <h3 class="section-title" style="text-align:left;" data-text="Gallery"></h3>
                        ${proj.gallery.map(img => `
                            <div class="gthumb" 
                                 style="background-image:url('${img.src}')" 
                                 onclick="openLightbox('${img.src}','${img.caption}')">
                            </div>
                        `).join('')}
                    </div>
                    <div class="project-details card fadein">
                        ${proj.detailsSections.map(s => `
                            <h4>${s.title}</h4>
                            ${s.text ? `<p class="muted">${s.text}</p>` : ''}
                            ${s.list ? `<ul class="muted">${s.list.map(l=>`<li>${l}</li>`).join('')}</ul>` : ''}
                        `).join('')}
                    </div>
                </div>
            </section>
            <footer class="footer">© ${new Date().getFullYear()} Mattys Lourdault</footer>
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
    if(hero) typewrite(hero, 40);
    
    const obs = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if(e.isIntersecting) {
                e.target.classList.add('visible');
                const t = e.target.querySelector('.section-title');
                if(t) typewrite(t, 100);
            }
        });
    }, {threshold: 0.1});
    document.querySelectorAll('.section').forEach(s => obs.observe(s));

    const barObs = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if(e.isIntersecting) {
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

window.openLightbox = function(src, cap) {
    const m = document.getElementById('img-modal');
    document.getElementById('img-modal-content').src = src;
    document.getElementById('img-modal-caption').textContent = cap;
    m.classList.add('visible');
    m.style.pointerEvents = 'all';
}
document.getElementById('img-modal-close').addEventListener('click', () => {
    const m = document.getElementById('img-modal');
    m.classList.remove('visible');
    m.style.pointerEvents = 'none';
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
        } catch(e) { alert("Error sending message."); }
    });
}

function initCanvas() {
    const c = document.getElementById('bg-canvas');
    if (!c) return;
    const ctx = c.getContext('2d');
    let W = c.width = innerWidth, H = c.height = innerHeight;
    window.addEventListener('resize', () => { W = c.width = innerWidth; H = c.height = innerHeight; nodes=[]; build(); });
    
    const colors = {
        dark: {g1:'rgba(1,3,8,0.02)', g2:'rgba(1,3,8,0.06)', l1:'51,170,255', dot:'180,230,255'},
        light: {g1:'rgba(200,220,255,0.1)', g2:'rgba(200,220,255,0.2)', l1:'0,80,180', dot:'0,70,150'}
    };
    
    let nodes = [];
    function build() {
        const space = Math.max(60, Math.floor(Math.min(W,H)/10));
        for(let r=0; r<=Math.ceil(H/space); r++) {
            for(let k=0; k<=Math.ceil(W/space); k++) {
                nodes.push({
                    x: k*space + (Math.random()*2-1)*space*0.35,
                    y: r*space + (Math.random()*2-1)*space*0.35,
                    ox: k*space + (Math.random()*2-1)*space*0.35,
                    oy: r*space + (Math.random()*2-1)*space*0.35,
                    r: 0.8+Math.random()*1.8
                });
            }
        }
    }
    build();

    function loop(now) {
        const th = document.body.getAttribute('data-theme') || 'dark';
        const col = colors[th==='light'?'light':'dark'];
        ctx.clearRect(0,0,W,H);
        const g = ctx.createLinearGradient(0,0,W,H);
        g.addColorStop(0, col.g1); g.addColorStop(1, col.g2);
        ctx.fillStyle = g; ctx.fillRect(0,0,W,H);

        nodes.forEach((n, i) => {
            const t = now * 0.0007 + i;
            n.x = n.ox + Math.sin(t*1.1)*6 + Math.cos(t*0.7)*4;
            n.y = n.oy + Math.cos(t*1.3)*6 + Math.sin(t*0.5)*4;
            for(let j=i+1; j<nodes.length; j++){
                const n2 = nodes[j];
                const d = Math.hypot(n.x-n2.x, n.y-n2.y);
                if(d < 140) {
                    ctx.beginPath();
                    ctx.lineWidth = 6 * (1-d/140);
                    ctx.strokeStyle = `rgba(${col.l1},${(1-d/140)*0.06})`;
                    ctx.moveTo(n.x, n.y); ctx.lineTo(n2.x, n2.y); ctx.stroke();
                }
            }
            ctx.beginPath(); ctx.fillStyle = `rgba(${col.dot},0.5)`;
            ctx.arc(n.x, n.y, n.r, 0, Math.PI*2); ctx.fill();
        });
        requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
}