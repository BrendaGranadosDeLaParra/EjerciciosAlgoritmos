//let num1 = parseFloat(prompt("Ingresa el primer número entre el 1 y el 100:"));
//let num2 = parseFloat(prompt("Ingresa el segundo número entre el 1 y el 100:"));
//let num3 = parseFloat(prompt("Ingresa el tercer número entre el 1 y el 100:"));
//let numeroMayor;
//if(num1 >= num2 && num1 >= num3);
//alert("Este es el número mayor");


//Ejercicio 4
let num4 = parseInt(prompt("Ingresa un número entre el 1 y el 100"));
if(num4 >= 1 && num4 <= 100){
    if((num4 % 3) == 0){
        console.log( num4 + " Es múltiplo de tres");
    }
    else{console.log( num4 + " No es múltiplo de tres");
}
}

//Ejercicio 5 Elaborar un algoritmo para leer 3 números y determinar sí uno es la suma de los otros dos
let num5 = parseFloat(prompt("Ingresa el primer número"));
let num6 = parseFloat(prompt("Ingresa el segundo número"));
let num7 = parseFloat(prompt("Ingresa el tercer número"));

if(num5 == (num6 + num7)){
    console.log(num5 + " Es la suma de " + num6 + "+"  + num7 );
}
else if(num6 == (num5 + num7)){
    console.log(num6 + " Es la suma de " + num5 + "+" + num7 );
}
else if(num7 == (num5 + num6)){
    console.log(num7 + " Es la suma de " + num5 + "+" + num6 );
}
else{
    console.log("Lo siento no hay relación")
}

//Ejercicio 6 Elabora un algoritmo para leer un número y determinar si es par o impar
let num8 = parseFloat(prompt("Ingresa un número"));
if ((num8 % 2) == 0){
    console.log( "El número " + num8 + " es par");
    }
else{ 
    console.log( "El número " + num8 + " no es par");
}

     
     
 


        

