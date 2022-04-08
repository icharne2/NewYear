function res(){
    document.getElementById("osoby").value = "0";
    document.getElementById("wynik").innerHTML = "0";
}

function policz(s){
    let k = document.getElementById("karta").checked;
    let o = document.getElementById("osoby").value;
    let wynik;

    if(s==1)
        wynik = 100;
        else if(s==2)
            wynik = 160;
            else if(s==3)
                wynik = 250;
                else if(s==4)
                    wynik = 300;
    
    wynik = wynik * o;

    if(k){
        document.getElementById("wynik").innerHTML = wynik - wynik*0.2;
    }else{
        document.getElementById("wynik").innerHTML = wynik;
    }
}
