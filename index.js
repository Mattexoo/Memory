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
            div1.style.animation= 'animazione 1s'
            localStorage.setItem('divGirato', "1");
            div1.style.backgroundImage="url('./img/"+ ordineCarte[0]+".png')"
            div1.value=1;
            if(carteGirate==1){
                controllaCarteGirate(div1);
                carteGirate=0;
            }else{
                carteGirate=1;
                localStorage.setItem('cartaGirata', div1.style.backgroundImage)
                localStorage.setItem('divGirato', "1");
            }
        }
    })

    div2.addEventListener("click", function(){
        if(carteGirate<=1){
            div2.style.animation= 'animazione 1s'
            div2.style.backgroundImage="url('./img/"+ ordineCarte[1]+".png')"
            div2.value=1;
            if(carteGirate==1){
                controllaCarteGirate(div2);
                carteGirate=0;
            }else{
                carteGirate=1;
                localStorage.setItem('cartaGirata', div2.style.backgroundImage)
                localStorage.setItem('divGirato', "2");
            }
        }
    })

    div3.addEventListener("click", function(){
        if(carteGirate<=1){
            div3.style.animation= 'animazione 1s'
            div3.style.backgroundImage="url('./img/"+ ordineCarte[2]+".png')"
            div3.value=1;
            if(carteGirate==1){
                controllaCarteGirate(div3);
                carteGirate=0;
            }else{
                carteGirate=1;
                localStorage.setItem('cartaGirata', div3.style.backgroundImage)
                localStorage.setItem('divGirato', "3");
            }
        }
    })

    div4.addEventListener("click", function(){
        if(carteGirate<=1){
            div4.style.animation= 'animazione 1s'
            div4.style.backgroundImage="url('./img/"+ ordineCarte[3]+".png')"
            div4.value=1;
            if(carteGirate==1){
                controllaCarteGirate(div4);
                carteGirate=0;
            }else{
                carteGirate=1;
                localStorage.setItem('cartaGirata', div4.style.backgroundImage)
                localStorage.setItem('divGirato', "4");
            }
        }
    })

    div5.addEventListener("click", function(){
        if(carteGirate<=1){
            div5.style.animation= 'animazione 1s'
            div5.style.backgroundImage="url('./img/"+ ordineCarte[4]+".png')"
            div5.value=1;
            if(carteGirate==1){
                controllaCarteGirate(div5);
                carteGirate=0;
            }else{
                carteGirate=1;
                localStorage.setItem('cartaGirata', div5.style.backgroundImage)
                localStorage.setItem('divGirato', "5");
            }
        }
    })

    div6.addEventListener("click", function(){
        if(carteGirate<=1){
            div6.style.animation= 'animazione 1s'
            div6.style.backgroundImage="url('./img/"+ ordineCarte[5]+".png')"
            div6.value=1;
            if(carteGirate==1){
                controllaCarteGirate(div6);
                carteGirate=0;
            }else{
                carteGirate=1;
                localStorage.setItem('cartaGirata', div6.style.backgroundImage)
                localStorage.setItem('divGirato', "6");
            }
        }
    })

    div7.addEventListener("click", function(){
        if(carteGirate<=1){
            div7.style.animation= 'animazione 1s'
            div7.style.backgroundImage="url('./img/"+ ordineCarte[6]+".png')"
            div7.value=1;
            if(carteGirate==1){
                controllaCarteGirate(div7);
                carteGirate=0;
            }else{
                carteGirate=1;
                localStorage.setItem('cartaGirata', div7.style.backgroundImage)
                localStorage.setItem('divGirato', "7");
            }
        }
    })

    div8.addEventListener("click", function(){
        if(carteGirate<=1){
            div8.style.animation= 'animazione 1s'
            div8.style.backgroundImage="url('./img/"+ ordineCarte[7]+".png')"
            div8.value=1;
            if(carteGirate==1){
                controllaCarteGirate(div8);
                carteGirate=0; 
            }else{
                carteGirate=1;
                localStorage.setItem('cartaGirata', div8.style.backgroundImage)
                localStorage.setItem('divGirato', "8");
            }
        }
    })
    
}
let coppieRimaste=4;
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

function controllaCarteGirate(div){
    let carte=[];
    let a="";
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
        if(localStorage.getItem("cartaGirata")==div1.style.backgroundImage)  
        i++;
    }
    if(div2.style.backgroundImage!="url('./img/cartaD.jpg')"){
        if(localStorage.getItem("cartaGirata")==div2.style.backgroundImage)  
        i++;
    }
    if(div3.style.backgroundImage!="url('./img/cartaD.jpg')"){
        if(localStorage.getItem("cartaGirata")==div3.style.backgroundImage)  
        i++;
    }
    if(div4.style.backgroundImage!="url('./img/cartaD.jpg')"){
        if(localStorage.getItem("cartaGirata")==div4.style.backgroundImage)  
        i++;
    }
    if(div5.style.backgroundImage!="url('./img/cartaD.jpg')"){
        if(localStorage.getItem("cartaGirata")==div5.style.backgroundImage)  
        i++;
    }
    if(div6.style.backgroundImage!="url('./img/cartaD.jpg')"){
        if(localStorage.getItem("cartaGirata")==div6.style.backgroundImage)  
        i++;
    }
    if(div7.style.backgroundImage!="url('./img/cartaD.jpg')"){
        if(localStorage.getItem("cartaGirata")==div7.style.backgroundImage)  
        i++;
    }
    if(div8.style.backgroundImage!="url('./img/cartaD.jpg')"){
        if(localStorage.getItem("cartaGirata")==div8.style.backgroundImage)  
        i++;
    }
    if(i==2){
        console.log("ciao")
        coppieRimaste=coppieRimaste-1;
    }else{
        div.style.backgroundImage="url('./img/cartaD.jpg')";
        document.getElementById(localStorage.getItem("divGirato")).style.backgroundImage="url('./img/cartaD.jpg')"
    }
    if(coppieRimaste==0){
        alert("HAI COMPLETATO IL GIOCO")
    }
}