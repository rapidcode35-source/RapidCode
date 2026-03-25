// ==========================================
// ⚙️ TERE WEBSITE KI MASTER SETTINGS
// ==========================================
const mySettings = {
    youtubeLink: "https://www.youtube.com/@RapidCode-35", 
    instagramLink: "https://www.instagram.com/rapidcode35?igsh=dnd2Z3o5cDZldDE2", 
    displayEmail: "rapidcode35@gmail.com" 
};

// Yeh code HTML mein apne aap links fit kar dega
window.onload = function() {
    document.getElementById("youtubeBtn").href = mySettings.youtubeLink;
    document.getElementById("instaBtn").href = mySettings.instagramLink;
    
    // Email ko clickable banayega
    const emailLink = document.getElementById("displayEmail");
    emailLink.innerText = mySettings.displayEmail;
    emailLink.href = "mailto:" + mySettings.displayEmail;
};

// ==========================================
// 🟢 TERE YOUTUBE VIDEOS KA DATA YAHAN AAYEGA 🟢
// ==========================================
const projectDatabase = [
    
    {
        id: "project-1", 
        title: "TAP THE MAGIC BUTTON",
        code: `     ....HTML....
        
        `
    },

    


    {
        id: "project-2",
        title: "NO means NO",
        code: `      SORRY, CODE IS UPDATE SOON NOW YOU CONTUNUE NEXT.... UPDATE SOON.....      `
    }
            
];

// ==========================================
// 🔴 ISKE NEECHE KUCH BHI CHANGE MAT KARNA 🔴
// ==========================================
const searchInput = document.getElementById('searchInput');
const displayArea = document.getElementById('codeDisplayArea');

searchInput.addEventListener('input', function() {
    let query = this.value.toLowerCase().trim();

    if (query === "") {
        displayArea.innerHTML = ""; 
        return;
    }

    let foundProject = projectDatabase.find(project => project.id === query);

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
        displayArea.innerHTML = `<p style="color: #ff4444; text-align: center; margin-top: 20px;">Project not found. Check spelling (e.g., project-1)</p>`;
    }
});

function copyMyCode() {
    const codeText = document.getElementById("actualCode").innerText;
    navigator.clipboard.writeText(codeText).then(() => {
        const btn = document.querySelector(".copy-btn");
        btn.innerText = "Copied! ✅";
        btn.style.backgroundColor = "#4CAF50"; 
        setTimeout(() => {
            btn.innerText = "Copy Code";
            btn.style.backgroundColor = "#1e90ff"; 
        }, 2000);
    }).catch(err => {
        console.error('Copy failed:', err);
    });
}



