// creeis otra funcion que cuente el numero de repeticiones de letras en cada array
// Recorrer todo el array y luego cada string (index) del array. En cada recorrido del string preguntar si ha visto esa letra y sumar uno por cada letra no vista, si ya la vio sumar.

let surnames = ["10", "juan", "@12", "null", "antonioPerezDelCarmen", "abcdefghtioiasoisdjads", "Manolo", "Perez", "Soledad"];
let escuses = ["OMG?", "What’s going on?", "How much is it?", "18", null, undefined, function(){}];
let names= ["Jeferson", "Matilda", "R@fael", "1van", "Pep3", "Loquesea", "Fel1berto", "Pepit@", "D@M"];


const letterCount=(arr)=>{
    let obj = {}                                                     // creo un objeto para almacenar las letras de los string en keys.
    for(let i=0; i<arr.length-1;i++){                                 // Recorre todo el array
         if( typeof arr[i] !== "string"){                            // Si no es un string que devuelva cero           
                 arr[i]=0
                 }                                                      
        for(let j=0; j<arr[i].length-1; j++){ 
            let key = arr[i][j]                                       // Recorre cada elemento del array
            if(obj[key]){                                            // Si cada valor del obj es verdadero quiero que sume 1 cada vez que lo vea. 
                obj[key]=obj[key]+1
            } 
            else {                                                  // por defecto inicio cada valor en 1
                obj[key]=1
            };
        };     
    };
    return obj
};
    
let output = letterCount(escuses);
console.log(output);

// const newObj={
//     a:1
// }

// console.log(newObj.a)
// console.log(newObj['a'])
// let myString = 'Hala'
// let objTwo={}
// for(let i = 0; i<=myString.length-1; i++ ){
//     let key = myString[i]
//     if(objTwo[key]){
//         objTwo[key]=objTwo[key]+1;
//     }
//     else { 
//         objTwo[key]=1;
//     }
//     console.log(myString[i])
// }
// console.log(objTwo)