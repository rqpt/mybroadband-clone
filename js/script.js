myID = document.getElementById('sticky-title');

const myScrollFunc = function() {
    let y = window.scrollY;
    if (y >= 100) {
        myID.className = 'visible';
    } else {
        myID.className = 'hidden';
    }
};

window.addEventListener('scroll', myScrollFunc);
