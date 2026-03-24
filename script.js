// ==========================================
// ⚙️ TERE WEBSITE KI MASTER SETTINGS
// ==========================================
const mySettings = {
    youtubeLink: "https://www.youtube.com/@RapidCode-35", 
    instagramLink: "https://www.instagram.com/rapidcode35?igsh=dnd2Z3o5cDZldDE2", 
    displayEmail: "rapidcode35@gmail.com" 
};

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

// ==========================================
// 🟢 TERE YOUTUBE VIDEOS KA DATA (13 PROJECTS)
// ==========================================
const projectDatabase = [
    {
        id: "project-1", 
        title: "MAGIC BUTTON BURST",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Magic Click</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <button id="magicBtn" class="neon-btn">
            Tap the Magic!
        </button>
    </div>
    <script src="script.js"></script>
</body>
</html>


        CSS

body {
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #010101; /* Extra Dark */
    overflow: hidden; /* Taaki scrollbar na dikhe explosion par */
    font-family: sans-serif;
}

.neon-btn {
    padding: 20px 40px;
    font-size: 1.5rem;
    color: #fff;
    background: transparent;
    border: 2px solid #03e9f4;
    text-transform: uppercase;
    letter-spacing: 2px;
    cursor: pointer;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    transition: 0.3s;
    /* Basic glow humesha ke liye */
    box-shadow: 0 0 10px rgba(3, 233, 244, 0.5);
}

/* Click animation for button itself */
.neon-btn:active {
    transform: scale(0.95);
    background-color: #03e9f4;
    color: #010101;
    box-shadow: 0 0 50px #03e9f4;
}

/* Particles ki Styling (jo JS se banenge) */
.particle {
    position: absolute;
    width: 6px;
    height: 6px;
    background: #03e9f4;
    border-radius: 50%;
    pointer-events: none; /* Mouse particles ko interfere na kare */
    opacity: 0; /* Shuru mein invisible */
    /* Hum keyframe animation set karenge */
    animation: explode 0.8s ease-out forwards;
}

@keyframes explode {
    0% {
        transform: translate(0, 0) scale(1);
        opacity: 1;
    }
    100% {
        /* JS custom variables (--tx, --ty) se direction decide karega */
        transform: translate(var(--tx), var(--ty)) scale(0);
        opacity: 0;
    }
}




java script



const button = document.getElementById('magicBtn');

button.addEventListener('click', function(e) {
    // 1. Decide karein kitne particles chahiye (jitne zyada, utna chaotic magic)
    const particleCount = 50;

    // 2. Loop chalakar particles banayein
    for (let i = 0; i < particleCount; i++) {
        // Particle HTML element create karna
        const particle = document.createElement('span');
        particle.classList.add('particle');
        
        // Isko body mein add karna
        document.body.appendChild(particle);

        // 3. Position: Particle kahan se start ho?
        // Hum chahte hain ki ye pure background pe spread ho jaaye button click par,
        // ya sirf button se nikalta hua lage. Hum background burst karte hain.
        // Use clientX/Y to start from click position or 
        // button position. Let's do click position.
        const x = e.clientX;
        const y = e.clientY;
        
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;

        // 4. Direction & Distance: Particle kahan tak jaye? (Randomize)
        // CSS variables use karenge animation dynamic banane ke liye
        // negative range taaki har direction mein jaye
        const randomX = (Math.random() - 0.5) * 500; // range: -250px to 250px
        const randomY = (Math.random() - 0.5) * 500; 
        
        particle.style.setProperty('--tx', `${randomX}px`);
        particle.style.setProperty('--ty', `${randomY}px`);

        // Random particle size variation
        const size = Math.random() * 8 + 2; // 2px to 10px
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        // 5. Cleanup: Animation khatam hone ke baad element ko remove karein
        setTimeout(() => {
            particle.remove();
        }, 800); // 800ms match karna chahiye animation time se
    }
}); `
    },
    {
        id: "project-2",
        title: "NO MEANS NO (DODGE)",
        code: `<!DOCTYPE html>
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
}`
    },
    {
        id: "project-3", 
        title: "LUXE ROLEX CARD",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LUXE Mobile Card</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <div class="card-container" id="luxe-card">
        <div class="card-inner" id="card-inner">
            
            <div class="card-front">
                <img src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="LUXE Watch" class="product-img">
                <h2 class="brand">LUXE</h2>
                <h3 class="product-name">Chronograph Elite</h3>
                <p class="price">$4,999</p>
                <button class="buy-btn" id="add-to-cart-btn">Add to Cart</button>
            </div>

            <div class="card-back">
                <div class="success-icon">✔️</div>
                <h2 class="success-title">Success!</h2>
                <p class="success-msg">Your product is now in your cart section.</p>
                <button class="back-btn" id="go-back-btn">Keep Shopping</button>
            </div>

        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>

                                        CSS


* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Helvetica Neue', sans-serif;
}

body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    /* Dark premium background */
    background: url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop') center/cover no-repeat;
    overflow: hidden; /* Prevents scrollbars on mobile */
}

/* --- 3D FLIP MECHANICS --- */
.card-container {
    /* Mobile oriented width */
    width: 85vw; 
    max-width: 340px;
    height: 520px;
    perspective: 1000px; /* Gives the 3D depth */
}

.card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.8s cubic-bezier(0.4, 0.2, 0.2, 1);
    transform-style: preserve-3d;
}

/* This class triggers the flip */
.card-inner.is-flipped {
    transform: rotateY(180deg);
}

/* --- GLASSMORPHISM FOR BOTH SIDES --- */
.card-front, .card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden; /* Hides the back when looking at front */
    border-radius: 24px;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 25px 45px rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    color: #fff;
    text-align: center;
    overflow: hidden;
}

/* --- FRONT CARD STYLES --- */
.card-front::before {
    content: '';
    position: absolute;
    top: 0; left: 0; width: 100%; height: 100%;
    background: radial-gradient(
        800px circle at var(--x, 50%) var(--y, 50%), 
        rgba(255, 255, 255, 0.15), 
        transparent 40%
    );
    pointer-events: none;
    z-index: 1;
}

.product-img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 25px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.3);
    z-index: 2;
}

.brand { font-size: 14px; letter-spacing: 4px; color: #ccc; margin-bottom: 5px; z-index: 2;}
.product-name { font-size: 26px; font-weight: 300; margin-bottom: 15px; z-index: 2;}
.price { font-size: 22px; font-weight: bold; margin-bottom: 30px; z-index: 2;}

.buy-btn, .back-btn {
    padding: 15px 40px;
    border: none;
    border-radius: 30px;
    background: #fff;
    color: #000;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;
    z-index: 2;
    width: 80%;
}

.buy-btn:hover, .back-btn:hover {
    background: #e0e0e0;
    transform: scale(1.05);
}

/* --- BACK CARD STYLES --- */
.card-back {
    transform: rotateY(180deg);
}

.success-icon {
    font-size: 60px;
    background: #4CAF50;
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-bottom: 20px;
    box-shadow: 0 0 20px rgba(76, 175, 80, 0.5);
}

.success-title { font-size: 32px; margin-bottom: 10px; }
.success-msg { font-size: 16px; color: #ccc; margin-bottom: 40px; line-height: 1.5; }





                JAVA SCRIPT
                
                
const container = document.getElementById('luxe-card');
const cardInner = document.getElementById('card-inner');
const cardFront = document.querySelector('.card-front');
const addBtn = document.getElementById('add-to-cart-btn');
const backBtn = document.getElementById('go-back-btn');

// --- 3D FLIP LOGIC ---
// Flip to back when Add to Cart is clicked
addBtn.addEventListener('click', () => {
    cardInner.classList.add('is-flipped');
});

// Flip to front when Keep Shopping is clicked
backBtn.addEventListener('click', () => {
    cardInner.classList.remove('is-flipped');
});

// --- DYNAMIC SHINE LOGIC (On Front Card) ---
container.addEventListener('mousemove', (e) => {
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    cardFront.style.setProperty('--x', `${x}px`);
    cardFront.style.setProperty('--y', `${y}px`);
});

// Reset shine when mouse leaves
container.addEventListener('mouseleave', () => {
    cardFront.style.setProperty('--x', `50%`);
    cardFront.style.setProperty('--y', `50%`);
});`
    },
    {
        id: "project-4", 
        title: "NEON GLOW TEXT",
        code: `<h1 class="neon">GLOW</h1><style>.neon { text-shadow: 0 0 10px #fff, 0 0 20px #03e9f4; }</style>`
    },
    {
        id: "project-5", 
        title: "SMOOTH SCROLL NAV",
        code: `<nav><ul><li>Home</li><li>About</li></ul></nav>`
    },
    {
        id: "project-6", 
        title: "GLASSMORPHISM CARD",
        code: `<div class="glass">Content</div><style>.glass { background: rgba(255,255,255,0.1); backdrop-filter: blur(10px); }</style>`
    },
    {
        id: "project-7", 
        title: "3D BUTTON HOVER",
        code: `<button class="btn-3d">Click</button><style>.btn-3d { transform: perspective(1px) translateZ(0); }</style>`
    },
    {
        id: "project-8", 
        title: "DARK MODE TOGGLE",
        code: `<input type="checkbox" id="darkToggle"><script>document.body.classList.toggle('dark-mode')</script>`
    },
    {
        id: "project-9", 
        title: "ANIMATED LOADERS",
        code: `<div class="loader"></div><style>@keyframes spin { 100% { transform: rotate(360deg); } }</style>`
    },
    {
        id: "project-10", 
        title: "IMAGE SLIDER",
        code: `<div class="slider">Images go here</div>`
    },
    {
        id: "project-11", 
        title: "MODAL POPUP",
        code: `<div id="modal" class="hidden">Popup Box</div>`
    },
    {
        id: "project-12", 
        title: "SOCIAL MEDIA BAR",
        code: `<div class="social-icons">FB | IG | YT</div>`
    },
    {
        id: "project-13", 
        title: "CONTACT FORM PRO",
        code: `<form><input type="text" placeholder="Name"><button>Send</button></form>`
    } 
]; // <--- Array ends here properly

// ==========================================
// 🔴 SEARCH & COPY LOGIC (DO NOT TOUCH)
// ==========================================
const searchInput = document.getElementById('searchInput');
const displayArea = document.getElementById('codeDisplayArea');

if(searchInput) {
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
            displayArea.innerHTML = `<p style="color: #ff4444; text-align: center; margin-top: 20px;">Project not found. Type "project-1" to "project-13"</p>`;
        }
    });
}

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
    });
}
