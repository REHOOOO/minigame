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
            var numberarr = [];
            var exarr = [];
            var test = [];
            var outarr = [];
            var i = 0;
            var j = 0;
            var flag = 0;
            var exnum = 0;
            var temp = 0;

            if (exclution.value) {  // 제외 숫자 정리
                var exclutionarr = exclution.value;
                for (i = 0; i < exclutionarr.length; i++) {
                    if (exclutionarr[i] == ' ') {   // i번째 문자가 공백일 때
                        if (i - temp > 0) { // i가 temp보다 클때
                            if (Number(exclutionarr.substring(temp, i)) >= Number(min.value) && Number(exclutionarr.substring(temp, i)) <= Number(max.value)) {     // 제외 숫자는 최소값과 최대값 사이여야 함
                                exarr[exnum] = Number(exclutionarr.substring(temp, i)); // temp에서 i-1번째 문자까지 exarr에 저장
                                temp = i + 1;
                                exnum++;
                            }
                            else {
                                temp = i + 1;
                            }
                        }
                        else {  // i가 temp랑 같거나 작을 때
                            temp = i + 1;
                        }
                    }
                    if (i == exclutionarr.length - 1) { // 마지막 문자가 공백이 아닐 경우 
                        if (!(exclutionarr[i] == ' ')) {
                            if (Number(exclutionarr.substring(temp, i + 1)) >= Number(min.value) && Number(exclutionarr.substring(temp, i + 1)) <= Number(max.value)) {     // 제외 숫자는 최소값과 최대값 사이여야 함
                                exarr[exnum] = Number(exclutionarr.substring(temp, i + 1));
                                exnum++;
                            }
                        }
                    }
                }
            }

            if (Number(max.value) < Number(min.value)) {    // 최소 최대 안전성 검사
                alert("최소는 최대보다 클 수 없습니다");
                return;
            }

            if (Number(number.value) < 1) {                  // 추첨 개수 안전성 검사
                alert("추첨 개수는 1 이상이여야 합니다");
                return;
            }

            if (((Number(max.value) - Number(min.value) + 1) - exnum) < Number(number.value)) {     // 추첨 개수 안전성 검사
                alert("추첨 개수는 범위 내 숫자 개수보다 클 수 없습니다");
                return;
            }

            for (i = 0; i < Number(number.value); i++) {
                flag = 0;
                var random = Math.floor(((window.crypto.getRandomValues(new Uint32Array(1)) / 4294967296) * (Number(max.value) - Number(min.value) + 1)) + Number(min.value));
                for (j = 0; j < i; j++) {   // 이전에 나왔던 숫자인지 확인
                    if (numberarr[j] == random) {
                        flag = 1;
                        break;
                    }
                }
                if (flag == 0) {    // 이전에 나온 숫자가 아니라면 제외 숫자에 있는지 확인
                    for (j = 0; j < exnum; j++) {
                        if (exarr[j] == random) {
                            flag = 1;
                            break;
                        }
                    }
                }
                if (flag == 0) {    // 이전에 나오지도 않고 제외숫자에도 없으면 저장
                    numberarr[i] = random;
                }
                else {
                    i--;
                }
            }

            for (i = 0; i < Number(number.value); i++) {
                outarr = outarr + numberarr[i] + ', ';
            }
            output.textContent = outarr;
        }
        else if (writecheck.checked) {

        }
    };
});
