// ==========================================
// ⚙️ 1. CENTRAL CONFIGURATION (Yahan se change karo)
// ==========================================
const appConfig = {
    youtube: "https://www.youtube.com/@RapidCode-35",
    instagram: "https://www.instagram.com/rapidcode35?igsh=dnd2Z3o5cDZldDE2",
    email: "rapidcode35@gmail.com"
};

// ==========================================
// 📂 2. PROJECT DATABASE (Sabhi codes yahan ayenge)
// ==========================================
const projectDatabase = [
    {
        id: "project-1",
        title: "Magic Neon Button",
        html: `\n<button class="neon-btn">Magic Click</button>`,
        css: `/* CSS */\n.neon-btn {\n  color: #03e9f4;\n  border: 2px solid #03e9f4;\n  padding: 10px 20px;\n  background: transparent;\n}`,
        js: `// JS\nconst btn = document.querySelector('.neon-btn');\nbtn.onclick = () => alert('Magic!');`
    },
    {
        id: "project-2",
        title: "NO MEANS NO",
        html: `<div class="farewell-card">\n  <h2>Goodbye Seniors!</h2>\n</div>`,
        css: `.farewell-card { background: #333; padding: 20px; }`,
        js: `console.log("Farewell logic loaded.");`
    },

    {
        id: "project-3",
        title: "ROLEX PRODUCT CARD",
        html: `<div class="farewell-card">\n  <h2>Goodbye Seniors!</h2>\n</div>`,
        css: `.farewell-card { background: #333; padding: 20px; }`,
        js: `console.log("Farewell logic loaded.");`
    },

    {
        id: "project-4",
        title: "NIKI SHOOSE",
        html: `<div class="farewell-card">\n  <h2>Goodbye Seniors!</h2>\n</div>`,
        css: `.farewell-card { background: #333; padding: 20px; }`,
        js: `console.log("Farewell logic loaded.");`
    }
    // Aur projects isi format mein add kar sakte ho...
];

// ==========================================
// 🛠️ 3. CORE LOGIC (Dont change unless needed)
// ==========================================

// Setup Links on Load
window.onload = () => {
    document.getElementById("youtubeBtn").href = appConfig.youtube;
    document.getElementById("instaBtn").href = appConfig.instagram;
    const emailLink = document.getElementById("displayEmail");
    emailLink.innerText = appConfig.email;
    emailLink.href = "mailto:" + appConfig.email;
};

const searchInput = document.getElementById('searchInput');
const resultArea = document.getElementById('projectResultArea');

searchInput.addEventListener('input', function() {
    const query = this.value.toLowerCase().trim();
    if (query === "") { resultArea.innerHTML = ""; return; }

    const project = projectDatabase.find(p => p.id === query);

    if (project) {
        resultArea.innerHTML = `
            <div style="margin-top:20px;">
                <h2 style="color: #ff8c00; font-size: 1.2rem;">${project.title}</h2>
                <div class="tab-container">
                    <button class="tab-btn" onclick="renderCode('${project.id}', 'html')">HTML</button>
                    <button class="tab-btn" onclick="renderCode('${project.id}', 'css')">CSS</button>
                    <button class="tab-btn" onclick="renderCode('${project.id}', 'js')">JS</button>
                </div>
                <div id="codeContentWrapper"></div>
            </div>
        `;
    } else {
        resultArea.innerHTML = `<p style="color: #666; text-align: center; margin-top: 20px;">No project found with that ID...</p>`;
    }
});

function renderCode(projectId, type) {
    const project = projectDatabase.find(p => p.id === projectId);
    const rawCode = project[type];
    const safeCode = rawCode.replace(/</g, "&lt;").replace(/>/g, "&gt;");

    document.getElementById('codeContentWrapper').innerHTML = `
        <div class="result-header">
            <span style="text-transform: uppercase; color: #1e90ff; font-size: 14px;">${type}</span>
            <button class="copy-btn" onclick="copyCode()">Copy Code</button>
        </div>
        <div class="code-box">
            <pre><code id="targetCode">${safeCode}</code></pre>
        </div>
    `;
}

function copyCode() {
    const code = document.getElementById("targetCode").innerText;
    navigator.clipboard.writeText(code).then(() => {
        const btn = document.querySelector(".copy-btn");
        btn.innerText = "Copied! ✅";
        btn.style.background = "#4CAF50";
        setTimeout(() => {
            btn.innerText = "Copy Code";
            btn.style.background = "#1e90ff";
        }, 2000);
    });
}
