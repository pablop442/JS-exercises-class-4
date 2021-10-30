// suprimir repeticiones en un array y devolver el array sin la repeticion
// Recorrer todo el array y los strings verificando cada letra y preguntando si es repetida, en caso de ser repetida eliminarla. Al final devolver el array sin repeticiones

let surnames = ["10", "juan", "@12", "null", "antonioPerezDelCarmen", "abcdefghtioiasoisdjads", "Manolo", "Perez", "Soledad"];
let escuses = ["OMG?", "What’s going on?", "How much is it?", "18", null, undefined, function(){}];
let names= ["Jeferson", "Matilda", "R@fael", "1van", "Pep3", "Loquesea", "Fel1berto", "Pepit@", "D@M"];

const noRepeat=(arr)=>{
    let obj = {}                                                                    // creo un objeto para almacenar las letras de los string en keys.
    let array =[]                                                                   // creo un array vacío para devolverlo con el resultado
    for(let i=0; i<arr.length;i++){                                               // Recorre todo el array
        if( typeof arr[i] !== "string"){                                            // Si no es un string que devuelva cero           
             arr[i]=0
        }
        for(let j=0; j<arr[i].length; j++){                                       // Recorre cada elemento del array
            let key = arr[i][j]
            if(obj[key]){                                                           // Si la key dentro del obj existe (es true) que sume 1 cada vez que la vea
               obj[key]++
            }
            else {
                obj[key]=1                                                          //Si solo la ve una vez al menos, será 1
            }
        }

    
    }
    for(let k in obj) {                                                     // recorre todo el obj buscando las keys que sean = 1 y las incluye en nuevo array
        if(obj[k] === 1) {
            array.push(k)
        }
    }
    return array
}    

console.log(noRepeat(surnames))