// crear una funcion que genere una escusa aleatoria con esos datos 
// normas
// documentado
// prohibido la programacion declarativa
// debe estar separado en funciones
// no se pueden utilizar objetos
// obligatorio programacion funcional
// todas las variables y nombres en funcoines en ingles
// escritura camel-case

let surnames = ["10", "juan", "@12", "null", "antonioPerezDelCarmen", "abcdefghtioiasoisdjads", "Manolo", "Perez", "Soledad"];
let escuses = ["OMG?", "What’s going on?", "How much is it?", "18", null, undefined, function(){}];
let names= ["Jeferson", "Matilda", "R@fael", "1van", "Pep3", "Loquesea", "Fel1berto", "Pepit@", "D@M"];


//Función que recorre todo el array y llama a la función que lo limpia
const cleanArray=(arr,funcIf)=>{
    let filteredArray = []
    for(let i = 0; i < arr.length; i++){
        filteredArray.push(funcIf(arr[i]));
    }
    return filteredArray       
}

//Función que filtra solo los valores tipo string y los añade a una nueva array
const ifFunction=(element)=>{
    let str ='';
    if( typeof element === "string"){
        str=element;
    }
    return str
}
//----------------------------------------------------------------------------------------------------------------------------------------------
// Ejercicio 1 crear una funcion que genere una escusa aleatoria con esos datos 

//Creo función que genere número aleatorio
const randomNum=(array)=>{
    return Math.floor(Math.random() * array.length);
}
const excuseGenerator=(who,what,wholastname)=>{
    //limpio array para que deje los strings
    
    let cleanEscuses= cleanArray(what,ifFunction)
    // Genera números de index random dentro del length de cada array 
            let random1 = who[randomNum(who)];
            let random2 = what [randomNum (cleanEscuses)];
            let random3 =  wholastname [randomNum (wholastname)];
    
            return random1 + " " + random3 + " could not make it because "+ random2;
        }
    console.log(excuseGenerator(names, escuses, surnames));

//-------------------------------------------------------------------------------------------------------------------------------------------------
//Ejercicio 2:
// creeis otra funcion que cuente el numero de repeticiones de letras en cada array

const letterCount=(arr)=>{
//Creo variable que contenga mi función que limpia el array.
    let cleanedArray= cleanArray(arr,ifFunction)
    let obj = {};                                                     
    for(let i = 0; i < cleanedArray.length; i++){                                                                                       
        for(let j = 0; j <cleanedArray[i].length; j++){ 
// Luego de recorrer cada elemento del array si cada valor del obj es verdadero quiero que sume 1 cada vez que lo vea
            let key = cleanedArray[i][j];                                       
            if(obj[key]){                                            
                obj[key]=obj[key]+1;
            } 
            else {  
// por defecto inicio cada valor en 1                                                
                obj[key]=1;
            };
        };     
    };
    return obj
};
   
console.log(letterCount(escuses));

//----------------------------------------------------------------------------------------------------------------------------------
//Ejercicio 3
//suprimir repeticiones en un array y devolver el array sin la repeticion

const noRepeat=(arr)=>{
//Creo variable que contenga mi función que limpia el array.
let cleanedArray= cleanArray(arr,ifFunction)  
// Creo un objeto para almacenar las letras de los string en keys. También creo un array vacío para devolverlo con el resultado
    let obj = {};                                                                    
    let array =[];
//Recorre todo el array y cada elemento. Si la key dentro del obj existe (es true) que sume 1 cada vez que la vea                                                                   
    for(let i = 0; i < cleanedArray.length; i++){                        
        for(let j = 0; j <cleanedArray[i].length; j++){                                      
            let key = cleanedArray[i][j]
            if(obj[key]){                                                          
               obj[key]++
            }
//Si solo la ve una vez al menos, será 1
            else {
                obj[key]=1                                                          
            };
        };
    };
// recorre todo el obj buscando las keys que sean = 1 y las incluye en nuevo array
    for(let k in obj) {                                                     
        if(obj[k] === 1) {
            array.push(k)
        };
    };
    return array;
};    

console.log(noRepeat(escuses));

//-----------------------------------------------------------------------------------------------------------------------------------
// Ejercicio 4
// function que invierta todos los valores de el array
 const reverseArr=(arr)=>{
//Creo variable que contenga mi función que limpia el array.
    let cleanedArray= cleanArray(arr,ifFunction)  
//Declaro array vacía que la llenaré con nuevo orden
     let reversedArray =[];                                              
     for(let i = cleanedArray.length - 1; i >= 0; i--){       
//Itero sobre los elementos del array desde el último hasta el primero
          for (let j = cleanedArray[i].length - 1; j >= 0; j--){   
//Agrego elemento en orden contrario al nuevo array                
            reversedArray += cleanedArray[i][j];                                  
          };
     };
     return reversedArray;
 };

 console.log(reverseArr(escuses));