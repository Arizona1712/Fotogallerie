let images = ['graffiti-1.jpg', 
    'graffiti-2.jpg', 
    'graffiti-3.jpg', 
    'graffiti-4.jpg', 
    'graffiti-5.jpg', 
    'graffiti-6.jpg', 
    'graffiti-7.jpg', 
    'graffiti-8.jpg', 
    'graffiti-9.jpg', 
    'graffiti-10.jpg', 
    'graffiti-11.jpg', 
    'graffiti-12.jpg', 
    'graffiti-13.jpg', 
    'graffiti-14.jpg', 
    'graffiti-15.jpg', 
    'graffiti-16.jpg', 
    'graffiti-17.jpg', 
    'graffiti-18.jpg', 
    'graffiti-19.jpg', 
    'graffiti-20.jpg'
];


function render() {
    let content = document.getElementById('content');
    content.innerHTML = ``;

    for (let i = 0; i < images.length; i++) {
        const image = images[i];
        
        content.innerHTML += `
            <img id="image${i}" onclick="openImage(${i})" class="img-box" src="./img/${image}">
            `;
    }
}


function openImage(i) {
    let overlay = document.getElementById('imgOverlay');
    document.getElementById('imgOverlay').classList.remove('hide');
    
    overlay.innerHTML = `
        <div class="main-overlay">
            <div>
                <img id="quit-btn" class="can" onclick="closeImage(${i})" src="./img/can.png"
            </div>
            <div class="img-big-box">
                <img id="arrowLeft" class="arrow" onclick="previousImage(${i})" src="./img/arrow-left.png">
                <img id="image${i}" class="img-big" onclick="closeImage(${i})" src="./img/${images[i]}">
                <img id="arrowRight" class="arrow" onclick="nextImage(${i})" src="./img/arrow-right.png">
            </div>
        </div>
        `;
}


function previousImage(i) {
    i--;
    if (i < 0) {
        openImage(images.length - 1);
    } else {
        openImage(i);  
    }
}


function nextImage(i) {
    i++;
    if (i > images.length - 1) {
        openImage(0);
    } else {
        openImage(i); 
    }
}


function closeImage(i) {
    document.getElementById('imgOverlay').classList.add('hide');
}


function showMenu() {
    document.getElementById('b-menu').classList.add('showOverlayMenu');
}


function closeMenu() {
    document.getElementById('b-menu').classList.remove('showOverlayMenu');
}


