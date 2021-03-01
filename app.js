window.onload = () => {
    alert('Strona jest w fazie tworzenia.');
}

function mobileState() {
    const mobileNav = document.getElementById('nav');
    const logoMobile = document.getElementById('logo-mobile');

    if(mobileNav.style.marginLeft == '-60%') {
        mobileNav.style.marginLeft = '0';
        logoMobile.style.opacity = '0';
    }
    else {
        mobileNav.style.marginLeft = '-60%';
        logoMobile.style.opacity = '1';
    }
}