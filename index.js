function inizioGioco(){
    let turno=0;
    let ordineCarte=random();
    console.log(ordineCarte);
    let div1= document.getElementById("1");
    let div2= document.getElementById("2");
    let div3= document.getElementById("3");
    let div4= document.getElementById("4");
    let div5= document.getElementById("5");
    let div6= document.getElementById("6");
    let div7= document.getElementById("7 ");
    let div8= document.getElementById("8");
}

function random() {
    var numeri = [];
  
    for (var i = 1; i <= 8; i++) {
      numeri.push(i);
    }
    var numeriRandom = [];
  
    while (numeri.length > 0) {
      var indiceCasuale = Math.floor(Math.random() * numeri.length);
      var numeroCasuale = numeri.splice(indiceCasuale, 1)[0];
      numeriRandom.push(numeroCasuale);
    }
    return numeriRandom;
  }
