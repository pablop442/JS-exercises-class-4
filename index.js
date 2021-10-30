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

// // Ejercicio 1 crear una funcion que genere una escusa aleatoria con esos datos 
const excuseGenerator=(who,what,wholastname)=>{
                                                                                                // Genera números de index random dentro del length de cada array 
      let randomWho=  who[Math.floor(Math.random()*who.length)];
       let randomWhat= what[Math.floor(Math.random()*what.length)];
       let randomWhoLastname= wholastname[Math.floor(Math.random()*wholastname.length)];

        return randomWho + " " + randomWhoLastname + " could not make it because "+ randomWhat;
    }
console.log(excuseGenerator(names, escuses, surnames));


