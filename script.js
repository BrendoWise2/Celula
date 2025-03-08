let machineId = null; // Variável para armazenar o ID da parada
let btnSalvar = document.querySelector('#salvarButton');
let celulaSelecionada, operatorName;
let startHour, endHour, totalTime;
let startDate, endDate;


btnSalvar.addEventListener('click', function () {
    salvarEquipamento();
    btnSalvar.disabled = true;
    setInterval(disabledBnt, 4000);

});

function disabledBnt() {
    btnSalvar.disabled = false;
}


function salvarEquipamento() {
    operatorName = document.getElementById('operator').value;
    celulaSelecionada = document.getElementById('celulas').value;

    startHour = document.getElementById('startHour').value;
    endHour = document.getElementById('endHour').value;

    startDate = document.getElementById('startDate').value;
    endDate = document.getElementById('endDate').value;

    totalTime = document.getElementById('totalTime').value;



    fetch("http://localhost:8080/celula/salvar", {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            operator: operatorName,
            celula: celulaSelecionada,
            startH: startHour,
            endH: endHour,
            totalTimeH: totalTime,
            startD: startDate,
            endD: endDate,

        })



    })
        .then(response => response.json())
        .then(data => {
            console.log("Dados enviados com sucesso:", data);
        })
        .catch(error => {
            console.error("Erro ao enviar os dados:", error);
        });

}



