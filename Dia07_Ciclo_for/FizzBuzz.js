// ciclo for del 1 al 100 de 1 en 1
// si el numero es divisble entre 3 ----> Fizz
// si el numero es divisible entre 5 ----> Buzz
//Si en numero es divisib le entre 3 y 5 ----> FizzBuzz


for(var  i = 1; i <= 100; i++){

    if ( i % 3=== 0 && i % 5 === 0){
        console.log (i + " : Fizz Buzz")
    }
    else if ( i % 3=== 0){
        console.log(i +  " : Fizz")
    }
    
    else if(i % 5===0){
        console.log ( i + " : Buzz")
    }
    else {
        console.log(i)
    }
} 



 

