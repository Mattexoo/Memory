function inizioGioco(){
    let turno=0;
    let carteGirate=0;
    let ordineCarte=random();
    console.log(ordineCarte);
    let div1= document.getElementById("1");
    let div2= document.getElementById("2");
    let div3= document.getElementById("3");
    let div4= document.getElementById("4");
    let div5= document.getElementById("5");
    let div6= document.getElementById("6");
    let div7= document.getElementById("7");
    let div8= document.getElementById("8");

    div1.style.backgroundImage="url('./img/cartaD.jpg')"
    div2.style.backgroundImage="url('./img/cartaD.jpg')"
    div3.style.backgroundImage="url('./img/cartaD.jpg')"
    div4.style.backgroundImage="url('./img/cartaD.jpg')"
    div5.style.backgroundImage="url('./img/cartaD.jpg')"
    div6.style.backgroundImage="url('./img/cartaD.jpg')"
    div7.style.backgroundImage="url('./img/cartaD.jpg')"
    div8.style.backgroundImage="url('./img/cartaD.jpg')"

    div1.style.backgroundSize= "cover";
    div2.style.backgroundSize= "cover";
    div3.style.backgroundSize= "cover";
    div4.style.backgroundSize= "cover";
    div5.style.backgroundSize= "cover";
    div6.style.backgroundSize= "cover";
    div7.style.backgroundSize= "cover";
    div8.style.backgroundSize= "cover";

    div1.addEventListener("click", function(){
        if(carteGirate<=1){
            div1.style.backgroundImage="url('./img/"+ ordineCarte[0]+".png')"
            if(carteGirate==1){
                controllaCarteGirate();
                carteGirate=0;
            }else{
                carteGirate=1;
            }
        }
    })

    div2.addEventListener("click", function(){
        if(carteGirate<=1){
            div2.style.backgroundImage="url('./img/"+ ordineCarte[1]+".png')"
            if(carteGirate==1){
                controllaCarteGirate();
                carteGirate=0;
            }else{
                carteGirate=1;
            }
        }
    })

    div3.addEventListener("click", function(){
        if(carteGirate<=1){
            div3.style.backgroundImage="url('./img/"+ ordineCarte[2]+".png')"
            if(carteGirate==1){
                controllaCarteGirate();
                carteGirate=0;
            }else{
                carteGirate=1;
            }
        }
    })

    div4.addEventListener("click", function(){
        if(carteGirate<=1){
            div4.style.backgroundImage="url('./img/"+ ordineCarte[3]+".png')"
            if(carteGirate==1){
                controllaCarteGirate();
                carteGirate=0;
            }else{
                carteGirate=1;
            }
        }
    })

    div5.addEventListener("click", function(){
        if(carteGirate<=1){
            div5.style.backgroundImage="url('./img/"+ ordineCarte[4]+".png')"
            if(carteGirate==1){
                controllaCarteGirate();
                carteGirate=0;
            }else{
                carteGirate=1;
            }
        }
    })

    div6.addEventListener("click", function(){
        if(carteGirate<=1){
            div6.style.backgroundImage="url('./img/"+ ordineCarte[5]+".png')"
            if(carteGirate==1){
                controllaCarteGirate();
                carteGirate=0;
            }else{
                carteGirate=1;
            }
        }
    })

    div7.addEventListener("click", function(){
        if(carteGirate<=1){
            div7.style.backgroundImage="url('./img/"+ ordineCarte[6]+".png')"
            if(carteGirate==1){
                controllaCarteGirate();
                carteGirate=0;
            }else{
                carteGirate=1;
            }
        }
    })

    div8.addEventListener("click", function(){
        if(carteGirate<=1){
            div8.style.backgroundImage="url('./img/"+ ordineCarte[7]+".png')"
            if(carteGirate==1){
                controllaCarteGirate();
                carteGirate=0;
            }else{
                carteGirate=1;
            }
        }
    })
    
}

function random() {
    var numeri = [1, 1, 2, 2, 3, 3, 4, 4];
    var sequenza = [];
  
    while (numeri.length > 0) {
      var indiceCasuale = Math.floor(Math.random() * numeri.length);
      var numeroCasuale = numeri.splice(indiceCasuale, 1)[0];
      sequenza.push(numeroCasuale);
    }

    return sequenza;
}

function controllaCarteGirate(){
    let carte=[];
    let i=0;
    let div1= document.getElementById("1");
    let div2= document.getElementById("2");
    let div3= document.getElementById("3");
    let div4= document.getElementById("4");
    let div5= document.getElementById("5");
    let div6= document.getElementById("6");
    let div7= document.getElementById("7");
    let div8= document.getElementById("8");

    if(div1.style.backgroundImage!="url('./img/cartaD.jpg')"){
        carte[i]=div1.style.backgroundImage;
        i++;
    }
    if(div2.style.backgroundImage!="url('./img/cartaD.jpg')"){
        carte[i]=div2.style.backgroundImage;
        i++;
    }
    if(div3.style.backgroundImage!="url('./img/cartaD.jpg')"){
        carte[i]=div3.style.backgroundImage;
        i++;
    }
    if(div4.style.backgroundImage!="url('./img/cartaD.jpg')"){
        carte[i]=div4.style.backgroundImage;
        i++;
    }
    if(div5.style.backgroundImage!="url('./img/cartaD.jpg')"){
        carte[i]=div5.style.backgroundImage;
        i++;
    }
    if(div6.style.backgroundImage!="url('./img/cartaD.jpg')"){
        carte[i]=div6.style.backgroundImage;
        i++;
    }
    if(div7.style.backgroundImage!="url('./img/cartaD.jpg')"){
        carte[i]=div7.style.backgroundImage;
        i++;
    }
    if(div8.style.backgroundImage!="url('./img/cartaD.jpg')"){
        carte[i]=div8.style.backgroundImage;
        i++;
    }
    console.log(carte)
}
