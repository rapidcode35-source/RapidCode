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
    },
    
    {
        id: "project-3",
        title: "PRODUCT CARD ROLEX WATCH",
        code: `       ....HTML...
        <!DOCTYPE html>
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





                    ..... CSS .... 
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





                    ..... JAVA SCRIPT....
                    
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
});     `
    },

   


{
        id: "project-4",
        title: "Nike Sneaker",
        code: `      ....HTML....
        
        <!DOCTYPE html>
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
</html>
        
                 
                    
                    
                    ..... CSS .....
        
        * {
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
}
                   
                       
                       
                       .... JS .....
                       
                       
// Button element ko select karein
const cartBtn = document.getElementById('addToCartBtn');

// Click event listener lagayein
cartBtn.addEventListener('click', function() {
    // 'clicked' class ko add karein animation trigger karne ke liye
    this.classList.add('clicked');
    
    // Console mein message (Optional)
    console.log("Product added to cart!");
});`
    },

    {
        id: "project-5",
        title: "SCARCH BUTTON AND ICON ANIMATION ",
        code: `    UPLOAD SOON....        `
    },

    {
        id: "project-6",
        title: "College Farewell Video Layout",
        code: `
<div class="video-container">
    <video controls>
        <source src="seniors-farewell.mp4" type="video/mp4">
    </video>
    <h2>Goodbye Seniors!</h2>
</div>
        `
    },

    {
        id: "project-7",
        title: "College Farewell Video Layout",
        code: `
<div class="video-container">
    <video controls>
        <source src="seniors-farewell.mp4" type="video/mp4">
    </video>
    <h2>Goodbye Seniors!</h2>
</div>
        `
    },

    {
        id: "project-8",
        title: "College Farewell Video Layout",
        code: `
<div class="video-container">
    <video controls>
        <source src="seniors-farewell.mp4" type="video/mp4">
    </video>
    <h2>Goodbye Seniors!</h2>
</div>
        `
    },

    {
        id: "project-9",
        title: "College Farewell Video Layout",
        code: `
<div class="video-container">
    <video controls>
        <source src="seniors-farewell.mp4" type="video/mp4">
    </video>
    <h2>Goodbye Seniors!</h2>
</div>
        `
    },

    {
        id: "project-10",
        title: "College Farewell Video Layout",
        code: `
<div class="video-container">
    <video controls>
        <source src="seniors-farewell.mp4" type="video/mp4">
    </video>
    <h2>Goodbye Seniors!</h2>
</div>
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



