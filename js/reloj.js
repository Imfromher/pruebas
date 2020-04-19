(function(){

    var actualizarHora = function(){
        var fecha = new Date();
        var hora = fecha.getHours();
        var ampm;
        var minutos = fecha.getMinutes();
        var segundos = fecha.getSeconds();
        var diaSemana = fecha.getDay();
        var dia = fecha.getDate();
        var mes = fecha.getMonth();
        var year = fecha.getFullYear();


        var pDiaSemana = document.getElementById('diaSemana');
        var pDia = document.getElementById('dia');
        var pMes = document.getElementById('mes');
        var pYear = document.getElementById('year');
        var pHoras = document.getElementById('horas');
        var pMinutos = document.getElementById('minutos');
        var pAMPM = document.getElementById('ampm');
        var pSegundos = document.getElementById('segundos');

        var semana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
        pDiaSemana.textContent = semana[diaSemana]; 
        
        pDia.textContent = dia;

        var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

        pMes.textContent = meses[mes];

        pYear.textContent = year;

        if(hora >= 12){
            hora = hora - 12;
            ampm = 'PM';
        }else{
            ampm = 'AM';
        }

        if (hora == 0){
            hora = 12;
        };

        if (hora < 10){
            hora = "0" + hora;
        };

        pHoras.textContent = hora;
        pAMPM.textContent = ampm;

        if(minutos < 10){
            minutos = "0" + minutos;
        };

        if (segundos < 10 ){
            segundos = "0" + segundos;
        };

        pMinutos.textContent = minutos;
        pSegundos.textContent = segundos;

    };

    actualizarHora();

    var intervalo = setInterval(actualizarHora, 1000);

}())