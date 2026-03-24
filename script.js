// 1. Master Settings
const mySettings = {
    youtubeLink: "https://www.youtube.com/@RapidCode-35", 
    instagramLink: "https://www.instagram.com/rapidcode35?igsh=dnd2Z3o5cDZldDE2", 
    displayEmail: "rapidcode35@gmail.com" 
};

// 2. Project Database
const projectDatabase = [
    {
        id: "project-1", 
        title: "MAGIC BUTTON BURST",
        code: `\n<button id="magicBtn">Tap Me!</button>\n\n/* CSS */\n.particle { position: absolute; ... }`
    },
    {
        id: "project-2",
        title: "NO MEANS NO (DODGE)",
        code: `<button id="noBtn">No</button>\n\n// JS\nnoBtn.addEventListener('mouseover', ...)`
    },
    {
        id: "project-3", 
        title: "LUXE ROLEX CARD",
        code: `<div class="card">LUXE</div>`
    }
    // ... add your other projects here following the same format
];

// 3. Initialize Links on Load
window.onload = function() {
    const ytBtn = document.getElementById("youtubeBtn");
    const instaBtn = document.getElementById("instaBtn");
    const emailLink = document.getElementById("displayEmail");

    if(ytBtn) ytBtn.href = mySettings.youtubeLink;
    if(instaBtn) instaBtn.href = mySettings.instagramLink;
    
    if(emailLink) {
        emailLink.innerText = mySettings.displayEmail;
        emailLink.href = "mailto:" + mySettings.displayEmail;
    }
};

// 4. Search Logic
const searchInput = document.getElementById('searchInput');
const displayArea = document.getElementById('codeDisplayArea');

if(searchInput) {
    searchInput.addEventListener('input', function() {
        let query = this.value.toLowerCase().trim();

        if (query === "") {
            displayArea.innerHTML = ""; 
            return;
        }

        // Search by ID or Title
        let foundProject = projectDatabase.find(p => p.id === query || p.title.toLowerCase().includes(query));

        if (foundProject) {
            let safeCode = foundProject.code.replace(/</g, "&lt;").replace(/>/g, "&gt;");
            displayArea.innerHTML = `
                <div class="result-header">
                    <h3 style="color: #1e90ff;">${foundProject.title}</h3>
                    <button class="copy-btn" onclick="copyMyCode()">Copy Code</button>
                </div>
                <div class="code-box">
                    <pre><code id="actualCode">${safeCode}</code></pre>
                </div>
            `;
        } else {
            displayArea.innerHTML = `<p style="color: #ff4444; text-align: center; margin-top: 20px;">Project not found. Try "project-1"</p>`;
        }
    });
}

// 5. Copy Function
function copyMyCode() {
    const codeContainer = document.getElementById("actualCode");
    if(!codeContainer) return;
    
    const codeText = codeContainer.innerText;
    navigator.clipboard.writeText(codeText).then(() => {
        const btn = document.querySelector(".copy-btn");
        btn.innerText = "Copied! ✅";
        btn.style.backgroundColor = "#4CAF50"; 
        setTimeout(() => {
            btn.innerText = "Copy Code";
            btn.style.backgroundColor = "#1e90ff"; 
        }, 2000);
    }).catch(err => {
        alert("Copy failed. Please copy manually.");
    });
}
