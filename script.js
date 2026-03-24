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
        title: "LUXE E-commerce Product Card",
        code: `
<div class="product-card">
    <img src="watch.jpg" alt="Rolex">
    <h3>LUXE Premium Watch</h3>
    <button>Add to Cart</button>
</div>

<style>
/* CSS Code */
.product-card {
    border: 1px solid #ddd;
    text-align: center;
}
</style>
        `
    },

    {
        id: "project-2",
        title: "no means no",
        code: ` <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Proposal</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <div class="heart">❤️</div>
        <h1 id="question">did you marry me?</h1>
        
        <div class="buttons" id="button-container">
            <button id="yesBtn">Yes!</button>
            <button id="noBtn">No</button>
        </div>

        <div id="message" class="hidden">
            Yay! I knew you'd say yes! 🎉
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html> 




                    CSS


@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

body {
    background-color: #ffe6e6; /* Soft pastel pink */
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden; /* Prevents scrollbars when the button runs away */
    text-align: center;
}

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 20px;
    max-width: 400px; /* Perfect for vertical mobile view */
}

/* Heartbeat Animation */
.heart {
    font-size: 80px;
    animation: heartbeat 1s infinite alternate;
}

@keyframes heartbeat {
    from { transform: scale(1); }
    to { transform: scale(1.2); }
}

h1 {
    color: #ff4d4d;
    font-size: 2.2rem;
    margin-bottom: 20px;
}

.buttons {
    display: flex;
    gap: 30px;
    justify-content: center;
    align-items: center;
    width: 100%;
}

button {
    padding: 12px 35px;
    font-size: 1.2rem;
    font-weight: 700;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    transition: transform 0.2s ease;
}

#yesBtn {
    background-color: #ff4d4d;
    color: white;
    box-shadow: 0 5px 15px rgba(255, 77, 77, 0.4);
}

#yesBtn:hover {
    transform: scale(1.1);
    background-color: #ff1a1a;
}

#noBtn {
    background-color: white;
    color: #ff4d4d;
    border: 2px solid #ff4d4d;
}

.hidden {
    display: none !important;
}

#message {
    font-size: 1.8rem;
    color: #ff4d4d;
    font-weight: bold;
    animation: fadeIn 1s ease-in;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
} 



                JAVA SCRIPT

const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const question = document.getElementById('question');
const message = document.getElementById('message');
const buttonContainer = document.getElementById('button-container');

// The "Dodging" logic for the No button
noBtn.addEventListener('mouseover', () => {
    // Calculate random position within the viewport bounds
    const maxX = window.innerWidth - noBtn.clientWidth;
    const maxY = window.innerHeight - noBtn.clientHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    // Change position to absolute so it can break out of the flexbox
    noBtn.style.position = 'absolute';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
});

// The Success logic for the Yes button
yesBtn.addEventListener('click', () => {
    // Hide the question and buttons
    question.classList.add('hidden');
    buttonContainer.classList.add('hidden');
    
    // Show the success message
    message.classList.remove('hidden');
});                
        `
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
