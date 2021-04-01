function calcular() {
    let  moedas = document.getElementById("moedas");
    let tipoMoeda = moedas.options[moedas.selectedIndex].value
   
    let moedaDeOrigem = (document.getElementById("moedaDeOrigem").value);
    let valorMoeda = Number(moedaDeOrigem.replace(',','.'));
    
    let converterEmDolar = valorMoeda / 5.65;
    let converterEmEuro = valorMoeda / 6.64;
    let converterEmLibra = valorMoeda / 7.79;
      
    if (tipoMoeda == 'dolar'){
      
         alert(`O valor total convertido é de $ ${converterEmDolar.toFixed(2).replace('.',',')}`);
      
    } else if (tipoMoeda == 'euro'){
      
          alert(`O valor total convertido é de € ${converterEmEuro.toFixed(2).replace('.',',')}`);
      
    } else if(tipoMoeda == 'libra'){
      
          alert(`O valor total convertido é de £ ${converterEmLibra.toFixed(2).replace('.',',')}`);

    } else {

        alert("Você não selecionou a moeda para converter");
   
    }

}




