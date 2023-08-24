/*!
* Start Bootstrap - Simple Sidebar v6.0.6 (https://startbootstrap.com/template/simple-sidebar)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-simple-sidebar/blob/master/LICENSE)
*/
// 
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    const drawbutton = document.getElementById("draw-button");  // 추첨 버튼
    const numbercheck = document.getElementById("defaultCheck1");   // 숫자 체크
    const writecheck = document.getElementById("defaultCheck2");    // 직접 입력 체크
    const min = document.getElementsByName("min");  // 최소값
    const max = document.getElementsByName("max");  // 최대값

    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

    drawbutton.onclick = function () {
        if (numbercheck.checked) {
            // alert(((window.crypto.getRandomValues(new Uint32Array(1)) / 4294967296)*(max.value-min.value))+min.value)
        }
        else if (writecheck.checked) {

        }
    };
});
