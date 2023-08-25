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
    const min = document.getElementById("min");  // 최소값
    const max = document.getElementById("max");  // 최대값
    const output = document.getElementById("output"); // 출력
    const number = document.getElementById("number"); // 출력 개수
    const exclution = document.getElementById("exclution"); // 제외 숫자

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
            // output.textContent = Math.floor(((window.crypto.getRandomValues(new Uint32Array(1)) / 4294967296) * (max.value - min.value)) + min.value)
            var numberarr = [];
            var exarr = [];
            var test = [];
            var i = 0;
            var exnum = 0;
            var temp = 0;
            if (exclution.value) {  // 제외 숫자 정리
                var exclutionarr = exclution.value;
                for (i = 0; i < exclutionarr.length; i++) {
                    if (exclutionarr[i] == ' ') {   // i번째 문자가 공백일 때
                        if (i - temp > 0) { // i가 temp보다 클때
                            exarr[exnum] = exclutionarr.substring(temp, i); // temp에서 i-1번째 문자까지 exarr에 저장
                            temp = i + 1;
                            exnum++;
                        }
                        else {  // i가 temp랑 같거나 작을 때
                            temp = i + 1;
                        }
                    }
                    if (i == exclutionarr.length - 1) { // 마지막 문자가 공백이 아닐 경우 
                        if (!(exclutionarr[i] == ' ')) {
                            exarr[exnum] = exclutionarr.substring(temp, i+1);
                            exnum++;
                        }
                    }
                }
            }

            for (i = 0; i < number.value; i++) {

            }
        }
        else if (writecheck.checked) {

        }
    };
});
