document.onload = () => {
    alert('Strona jest w fazie tworzenia.');
}

function mobileState() {
    const mobileNav = document.getElementById('nav');

    if(mobileNav.style.marginLeft == '-50%') {
        mobileNav.style.marginLeft = '0';
    }
    else {
        mobileNav.style.marginLeft = '-50%';
    }
}