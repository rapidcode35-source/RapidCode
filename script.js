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
        html: `"<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Magic Click</title>\n    <link rel=\"stylesheet\" href=\"style.css\">\n</head>\n<body>\n    <div class=\"container\">\n        <button id=\"magicBtn\" class=\"neon-btn\">\n            Tap the Magic!\n        </button>\n    </div>\n    <script src=\"script.js\"></script>\n</body>\n</html>"`,
        css: `"body {\n    margin: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    min-height: 100vh;\n    background-color: #010101; /* Extra Dark */\n    overflow: hidden; /* Taaki scrollbar na dikhe explosion par */\n    font-family: sans-serif;\n}\n\n.neon-btn {\n    padding: 20px 40px;\n    font-size: 1.5rem;\n    color: #fff;\n    background: transparent;\n    border: 2px solid #03e9f4;\n    text-transform: uppercase;\n    letter-spacing: 2px;\n    cursor: pointer;\n    border-radius: 10px;\n    position: relative;\n    overflow: hidden;\n    transition: 0.3s;\n    /* Basic glow humesha ke liye */\n    box-shadow: 0 0 10px rgba(3, 233, 244, 0.5);\n}\n\n/* Click animation for button itself */\n.neon-btn:active {\n    transform: scale(0.95);\n    background-color: #03e9f4;\n    color: #010101;\n    box-shadow: 0 0 50px #03e9f4;\n}\n\n/* Particles ki Styling (jo JS se banenge) */\n.particle {\n    position: absolute;\n    width: 6px;\n    height: 6px;\n    background: #03e9f4;\n    border-radius: 50%;\n    pointer-events: none; /* Mouse particles ko interfere na kare */\n    opacity: 0; /* Shuru mein invisible */\n    /* Hum keyframe animation set karenge */\n    animation: explode 0.8s ease-out forwards;\n}\n\n@keyframes explode {\n    0% {\n        transform: translate(0, 0) scale(1);\n        opacity: 1;\n    }\n    100% {\n        /* JS custom variables (--tx, --ty) se direction decide karega */\n        transform: translate(var(--tx), var(--ty)) scale(0);\n        opacity: 0;\n    }\n}"`,
        js: `// "const button = document.getElementById('magicBtn');\n\nbutton.addEventListener('click', function(e) {\n    // 1. Decide karein kitne particles chahiye (jitne zyada, utna chaotic magic)\n    const particleCount = 50;\n\n    // 2. Loop chalakar particles banayein\n    for (let i = 0; i < particleCount; i++) {\n        // Particle HTML element create karna\n        const particle = document.createElement('span');\n        particle.classList.add('particle');\n        \n        // Isko body mein add karna\n        document.body.appendChild(particle);\n\n        // 3. Position: Particle kahan se start ho?\n        const x = e.clientX;\n        const y = e.clientY;\n        \n        particle.style.left = ;\n        particle.style.top = ;\n\n        // 4. Direction & Distance: Particle kahan tak jaye? (Randomize)\n        const randomX = (Math.random() - 0.5) * 500; // range: -250px to 250px\n        const randomY = (Math.random() - 0.5) * 500; \n        \n        particle.style.setProperty('--tx', );\n        particle.style.setProperty('--ty', );\n\n        // Random particle size variation\n        const size = Math.random() * 8 + 2; // 2px to 10px\n        particle.style.width = ;\n        particle.style.height = ;\n\n        // 5. Cleanup: Animation khatam hone ke baad element ko remove karein\n        setTimeout(() => {\n            particle.remove();\n        }, 800); // 800ms match karna chahiye animation time se\n    }\n});";`,
    },
    {
        id: "project-2",
        title: "no means no ",
        html: `not found`,
        css: `not found`,
        js: `not found`,
    },


    {
        id: "project-3",
        title: "LUXE Mobile Card",
        html: `"<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>LUXE Mobile Card</title>\n    <link rel=\"stylesheet\" href=\"style.css\">\n</head>\n<body>\n    <div class=\"card-container\" id=\"luxe-card\">\n        <div class=\"card-inner\" id=\"card-inner\">\n            <div class=\"card-front\">\n                <img src=\"https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80\" alt=\"LUXE Watch\" class=\"product-img\">\n                <h2 class=\"brand\">LUXE</h2>\n                <h3 class=\"product-name\">Chronograph Elite</h3>\n                <p class=\"price\">$4,999</p>\n                <button class=\"buy-btn\" id=\"add-to-cart-btn\">Add to Cart</button>\n            </div>\n            <div class=\"card-back\">\n                <div class=\"success-icon\">✔️</div>\n                <h2 class=\"success-title\">Success!</h2>\n                <p class=\"success-msg\">Your product is now in your cart section.</p>\n                <button class=\"back-btn\" id=\"go-back-btn\">Keep Shopping</button>\n            </div>\n        </div>\n    </div>\n    <script src=\"script.js\"></script>\n</body>\n</html>"`,
        css: `"* { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Helvetica Neue', sans-serif; }\nbody { display: flex; justify-content: center; align-items: center; min-height: 100vh; background: url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop') center/cover no-repeat; overflow: hidden; }\n.card-container { width: 85vw; max-width: 340px; height: 520px; perspective: 1000px; }\n.card-inner { position: relative; width: 100%; height: 100%; transition: transform 0.8s cubic-bezier(0.4, 0.2, 0.2, 1); transform-style: preserve-3d; }\n.card-inner.is-flipped { transform: rotateY(180deg); }\n.card-front, .card-back { position: absolute; width: 100%; height: 100%; backface-visibility: hidden; border-radius: 24px; background: rgba(255, 255, 255, 0.05); backdrop-filter: blur(15px); -webkit-backdrop-filter: blur(15px); border: 1px solid rgba(255, 255, 255, 0.2); box-shadow: 0 25px 45px rgba(0, 0, 0, 0.5); display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 20px; color: #fff; text-align: center; overflow: hidden; }\n.card-front::before { content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: radial-gradient(800px circle at var(--x, 50%) var(--y, 50%), rgba(255, 255, 255, 0.15), transparent 40%); pointer-events: none; z-index: 1; }\n.product-img { width: 200px; height: 200px; object-fit: cover; border-radius: 50%; margin-bottom: 25px; box-shadow: 0 10px 20px rgba(0,0,0,0.3); z-index: 2; }\n.brand { font-size: 14px; letter-spacing: 4px; color: #ccc; margin-bottom: 5px; z-index: 2;}\n.product-name { font-size: 26px; font-weight: 300; margin-bottom: 15px; z-index: 2;}\n.price { font-size: 22px; font-weight: bold; margin-bottom: 30px; z-index: 2;}\n.buy-btn, .back-btn { padding: 15px 40px; border: none; border-radius: 30px; background: #fff; color: #000; font-size: 16px; font-weight: bold; cursor: pointer; transition: 0.3s; z-index: 2; width: 80%; }\n.buy-btn:hover, .back-btn:hover { background: #e0e0e0; transform: scale(1.05); }\n.card-back { transform: rotateY(180deg); }\n.success-icon { font-size: 60px; background: #4CAF50; width: 100px; height: 100px; display: flex; justify-content: center; align-items: center; border-radius: 50%; margin-bottom: 20px; box-shadow: 0 0 20px rgba(76, 175, 80, 0.5); }\n.success-title { font-size: 32px; margin-bottom: 10px; }\n.success-msg { font-size: 16px; color: #ccc; margin-bottom: 40px; line-height: 1.5; }"`,
        js: `"const container = document.getElementById('luxe-card');\nconst cardInner = document.getElementById('card-inner');\nconst cardFront = document.querySelector('.card-front');\nconst addBtn = document.getElementById('add-to-cart-btn');\nconst backBtn = document.getElementById('go-back-btn');\n\naddBtn.addEventListener('click', () => {\n    cardInner.classList.add('is-flipped');\n});\n\nbackBtn.addEventListener('click', () => {\n    cardInner.classList.remove('is-flipped');\n});\n\ncontainer.addEventListener('mousemove', (e) => {\n    const rect = container.getBoundingClientRect();\n    const x = e.clientX - rect.left;\n    const y = e.clientY - rect.top;\n    cardFront.style.setProperty('--x', \${x}px);\n    cardFront.style.setProperty(--y, ;\n});\n\ncontainer.addEventListener('mouseleave', () => {\n    cardFront.style.setProperty('--x', '50%');\n    cardFront.style.setProperty('--y', '50%');\n});"`
    },



    {
        id: "project-4",
        title: "niki shoose",
        html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>3D Sneaker Card</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet">
</head>
<body>

    <div class="container">
        <div class="product-card">
            <div class="img-bx">
                <img src="https://assets.codepen.io/4164355/shoes.png" alt="Nike Sneaker">
            </div>

            <div class="content-bx">
                <h2>Nike Air Max</h2>
                <div class="price">₹14,999</div>
                
                <button class="add-btn" id="addToCartBtn">
                    <span class="text-add">Add to Cart</span>
                    <span class="text-added"><i>&#10004;</i> Added!</span>
                </button>
            </div>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>`,
        css: `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #1a1a1a;
    padding: 20px;
}

.container {
    width: 100%;
    display: flex;
    justify-content: center;
}

.product-card {
    background-color: #252525;
    width: 100%;
    max-width: 350px;
    border-radius: 25px;
    padding: 30px;
    position: relative;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    transition: 0.5s ease;
    perspective: 1000px;
}

.product-card:hover {
    box-shadow: 0 20px 50px rgba(0, 255, 136, 0.2);
}

.img-bx {
    position: relative;
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
}

.img-bx img {
    max-width: 100%;
    transform: rotate(-25deg);
    transition: 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    filter: drop-shadow(5px 10px 15px rgba(0,0,0,0.5));
}

/* 3D Pop-out Effect */
.product-card:hover .img-bx img {
    transform: rotate(0deg) translateZ(60px) translateY(-25px) scale(1.15);
    filter: drop-shadow(15px 25px 35px rgba(0,0,0,0.8));
}

.content-bx {
    text-align: center;
    margin-top: 15px;
    color: white;
}

.content-bx h2 {
    font-size: 22px;
    letter-spacing: 1px;
}

.content-bx .price {
    font-size: 18px;
    color: #00ff88;
    font-weight: 600;
    margin: 8px 0 25px 0;
}

/* Animated Button */
.add-btn {
    position: relative;
    padding: 12px 30px;
    background: #00ff88;
    color: #1a1a1a;
    font-weight: 700;
    border: none;
    border-radius: 40px;
    cursor: pointer;
    text-transform: uppercase;
    transition: 0.5s;
    overflow: hidden;
    width: 160px;
    height: 48px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
}

.add-btn span {
    position: absolute;
    transition: 0.5s;
    width: 100%;
}

.text-added {
    opacity: 0;
    transform: translateY(40px);
}

/* JS Triggered Class */
.add-btn.clicked {
    background-color: #00a359;
    pointer-events: none;
}

.add-btn.clicked .text-add {
    opacity: 0;
    transform: translateY(-40px);
}

.add-btn.clicked .text-added {
    opacity: 1;
    transform: translateY(0);
    color: white;
}`,
        js: `// Button element ko select karein
const cartBtn = document.getElementById('addToCartBtn');

// Click event listener lagayein
cartBtn.addEventListener('click', function() {
    // 'clicked' class ko add karein animation trigger karne ke liye
    this.classList.add('clicked');
    
    // Console mein message (Optional)
    console.log("Product added to cart!");
});`,
    },



    
    {
        id: "project-5",
        title: "niki shoose",
        html: `not found`,
        css: `not found`,
        js: `not found`,
    },



    
    {
        id: "project-6",
        title: "niki shoose",
        html: `not found`,
        css: `not found`,
        js: `not found`,
    },





    
    {
        id: "project-7",
        title: "niki shoose",
        html: `not found`,
        css: `not found`,
        js: `not found`,
    },





    
    {
        id: "project-8",
        title: "niki shoose",
        html: `not found`,
        css: `not found`,
        js: `not found`,
    },





    
    {
        id: "project-9",
        title: "niki shoose",
        html: `not found`,
        css: `not found`,
        js: `not found`,
    },





    
    {
        id: "project-10",
        title: "niki shoose",
        html: `not found`,
        css: `not found`,
        js: `not found`,
    },





    
    {
        id: "project-11",
        title: "niki shoose",
        html: `not found`,
        css: `not found`,
        js: `not found`,
    },






    
    {
        id: "project-12",
        title: "niki shoose",
        html: `not found`,
        css: `not found`,
        js: `not found`,
    },






    
    {
        id: "project-13",
        title: "niki shoose",
        html: `not found`,
        css: `not found`,
        js: `not found`,
    },
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
