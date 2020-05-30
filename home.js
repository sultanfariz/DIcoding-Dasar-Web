function openSidebar() {
    document.getElementById("sidebar").classList.toggle('active');
    document.getElementById("container").classList.toggle('active');
    // document.getElementById('sidebar').style.width = '200px';
    // document.getElementById('container').style.marginLeft = '200px';
}

function closeSidebar() {
    document.getElementById('sidebar').style.width = '0px';
    document.getElementById('container').style.marginLeft = '0px';
}

// const sidebartoggle = document.querySelector('.');