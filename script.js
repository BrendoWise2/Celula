let machineId = null; // Variável para armazenar o ID da parada
let btnSalvar = document.querySelector('#salvarButton');
let celulaSelecionada, operatorName;
let startHour, endHour, totalTime;
let startDate, endDate;


btnSalvar.addEventListener('click', function () {
    salvarEquipamento();
});


function salvarEquipamento() {
    operatorName = document.getElementById('operator').value;
    celulaSelecionada = document.getElementById('celulas');

    startHour = document.getElementById('startHour');
    endHour = document.getElementById('endHour');

    startDate = document.getElementById('startDate');
    endDate = document.getElementById('endDate');

    totalTime = document.getElementById('totalTime');


    console.log(celulaSelecionada.value);
    console.log(operatorName);
    console.log(startHour.value);
    console.log(startDate.value);
    console.log(totalTime.value);

}



