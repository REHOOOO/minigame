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
    const drawbutton = document.getElementById("draw-button");  // ��÷ ��ư
    const numbercheck = document.getElementById("defaultCheck1");   // ���� üũ
    const writecheck = document.getElementById("defaultCheck2");    // ���� �Է� üũ
    const min = document.getElementById("min");  // �ּҰ�
    const max = document.getElementById("max");  // �ִ밪
    const output = document.getElementById("output"); // ���
    const number = document.getElementById("number"); // ��� ����
    const exclution = document.getElementById("exclution"); // ���� ����

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
            if (exclution.value) {  // ���� ���� ����
                var exclutionarr = exclution.value;
                for (i = 0; i < exclutionarr.length; i++) {
                    if (exclutionarr[i] == ' ') {   // i��° ���ڰ� ������ ��
                        if (i - temp > 0) { // i�� temp���� Ŭ��
                            exarr[exnum] = exclutionarr.substring(temp, i); // temp���� i-1��° ���ڱ��� exarr�� ����
                            temp = i + 1;
                            exnum++;
                        }
                        else {  // i�� temp�� ���ų� ���� ��
                            temp = i + 1;
                        }
                    }
                    if (i == exclutionarr.length - 1) { // ������ ���ڰ� ������ �ƴ� ��� 
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
