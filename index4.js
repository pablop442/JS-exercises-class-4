// function que invierta todos los valores de el array

let surnames = ["10", "juan", "@12", "null", "antonioPerezDelCarmen", "abcdefghtioiasoisdjads", "Manolo", "Perez", "Soledad"];
let escuses = ["OMG?", "What’s going on?", "How much is it?", "18", null, undefined, function(){}];
let names= ["Jeferson", "Matilda", "R@fael", "1van", "Pep3", "Loquesea", "Fel1berto", "Pepit@", "D@M"];

// Ejercicio 4
 const reverseArr=(arr)=>{
     let reversedArray =[]                                              //declaro array vacía que la llenaré con nuevo orden
     for(let i = arr.length-1; i >= 0; i--){       
        if( typeof arr[i] !== "string"){                                // Si no es un string que devuelva cero           
            arr[i]=0
            }                                                           //itero sobre los elementos del array desde el último hasta el primero
          for (let j = arr[i].length-1; j >= 0; j--){                   // itero sobre los strings desde el último hasta el primero
            reversedArray += arr[i][j]                                  //agrego elemento en orden contrario al nuevo array
          };
     };
     return reversedArray
 };

 console.log(reverseArr(escuses))