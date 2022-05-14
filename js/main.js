//Script em JS(index.html)
setInterval(function(){
    
    let novaHora = new Date();

    //variaveis com o valor da data
    let ano = novaHora.getFullYear();
    let mes = novaHora.getMonth() + 1;
    let dia = novaHora.getDate();
    let hora = novaHora.getHours();
    let minuto = novaHora.getMinutes();
    let segundo = novaHora.getSeconds();
    let diaSemana = novaHora.getDay();

    // Chamamos a função zero para que ela retorne a concatenação
    // com os minutos e segundos, deixando-os com dois dígitos
    mes = zero(mes);
    dia = zero(dia);
    hora = zero(hora);
    minuto = zero(minuto);
    segundo = zero(segundo);
    
    //mostrar dia da semana
    let semana;
    if(diaSemana ==0){
        semana = 'Domingo';
    }else if(diaSemana ==1){
        semana = 'Segunda';
    }else if(diaSemana ==2){
        semana = 'Terca';
    }else if(diaSemana ==3){
        semana = 'Quarta';
    }else if(diaSemana ==4){
        semana = 'Quinta';
    }else if(diaSemana ==5){
        semana = 'Sexta';
    }else if(diaSemana ==6){
        semana = 'Sábado';
    }

    //variavel com a data completa
    let data = `${dia}/${mes}/${ano}`;
    
    //mudar o valor do elemento com a data
    document.querySelector('.data').innerHTML = hora+':'+minuto+':'+segundo;
    document.querySelector('.dia').innerHTML =  data;
    document.querySelector('.semana').innerHTML = semana;
},1000)

// A function zero concatena a string (número) 0 em frente aos números
// mantendo o zero na frente dos números menores que 10. Exemplo:
// 21:05:01
// 21:05:02
// e assim, sucessivamente
function zero(x) {
    if (x < 10) {
        x = '0' + x;
    } return x;
}



//pegar posição do usuario
function getUserPosition() {
    let url;
    navigator.geolocation.getCurrentPosition((pos) => {
      let lat = pos.coords.latitude;
      let long = pos.coords.longitude;
      url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&APPID=95b11822eb429c84c1143a19251b1881`;
      fetchApi(url);
    });
  }

  
function fetchApi(url) {
    let city = document.querySelector('.city');
    let temp = document.querySelector('span');
    fetch(url)
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      let tempInCelsius = ((5/9) * (data.main.temp-32)).toFixed(1);
      temp.innerText = tempInCelsius;
    })
    .catch((err) => {
      city.innerText = `Impossível acessar o OpenWeather. Verifique a sua conexão.`;
      temp.innerText = `-`;
    })
  }
  
  getUserPosition();

function alarme()
{

    let audio = document.getElementById('audio').value;
      audio.play();

}

