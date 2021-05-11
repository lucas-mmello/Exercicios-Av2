function verificar(){
  var Saque = document.getElementById('txtSaque').value;
  var outNota100 = document.getElementById('outNota100');
  var outNota50 = document.getElementById('outNota50');
  var outNota10 = document.getElementById('outNota10');

  var div10 = Saque / 10;
  var div50 = Saque / 50;
  var rest50 = Saque % 50;

  var div100 = Saque / 100; 
  var rest100 = Saque % 100;


  if(Saque == ''){
      alert('Informe o valor do saque');
      return;
  }

  if(Saque < 10){
      alert('Informe um valor igual ou maior que 10');
      return;
  }

  if(isNaN(Saque)){
      alert('Informe o valor corretamente');
      return;
  }

  if((div10 % 1 === 0) == false){
    alert('Informe um valor que pode ser pago com as notas 10, 50 ou 100');
    return;
  }

  if(Saque==10){
    outNota100.textContent = '0 Nota(s) de R$ 100';
    outNota50.textContent = '0 Nota(s) de R$ 50';
    outNota10.textContent = '1 Nota(s) de R$ 10';

  }

  if(Saque>=100){
    if(div100 % 1 === 0){
      outNota100.textContent = div100 + ' Nota(s) de R$ 100';
      outNota50.textContent = '0 Nota(s) de R$ 50';
      outNota10.textContent = '0 Nota(s) de R$ 10';
    }

    if((rest100 / 50) % 1 === 0){
      outNota100.textContent = Math.floor(div100) + ' Nota(s) de R$ 100';
      outNota50.textContent = rest100 / 50 + ' Nota(s) de R$ 50';
      outNota10.textContent = '0 Nota(s) de R$ 10';
    }

    if((rest100 % 50) /10){
      outNota100.textContent = Math.floor(div100) + ' Nota(s) de R$ 100';
      outNota50.textContent = Math.floor(rest100 / 50) + ' Nota(s) de R$ 50';
      outNota10.textContent = (rest100 % 50) /10 + ' Nota(s) de R$ 10';


    }

   
  }

  if(Saque<100 && Saque>50){
    if(rest50 / 10){
      outNota100.textContent = '0 Nota(s) de R$ 100';
      outNota50.textContent = Math.floor(div50) + ' Nota(s) de R$ 50';
      outNota10.textContent = rest50 / 10 + ' Nota(s) de R$ 10';


    }



  }

  if(Saque==50){
      outNota100.textContent = '0 Nota(s) de R$ 100';
      outNota50.textContent = '1 Nota(s) de R$ 50';
      outNota10.textContent = '0 Nota(s) de R$ 10';
  }

  if(Saque<50)
    if(div10<5){
      outNota100.textContent = '0 Nota(s) de R$ 100';
      outNota50.textContent = '0 Nota(s) de R$ 50';
      outNota10.textContent = div10 + ' Nota(s) de R$ 10';
    }
}

document.getElementById('btnVerificar').addEventListener('click', verificar);
