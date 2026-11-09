// Hola mundo en la página
document.getElementById('mensaje').textContent = 'hola mundo desde javascript';

// Tu código de arreglos
var nombres = ['Cesar', 'Ana', 'Luis'];
var nombres2 = ['Cesar2', 'Ricardo', 'Juan2'];
nombres = nombres.concat(nombres2);
console.log(nombres);

nombres.splice(3);
console.log(nombres);

nombres.push("Maria");
console.log(nombres);

nombres.splice(2, 1);
console.log(nombres);

//Spread Operador
const arrayNums = [1, 2, 3];
const arrayNums2 = [3, 4, 5];

console.log(arrayNums);
console.log(...arrayNums);

const arrayNumsSpread = [... arrayNums, ...arrayNums2];
console.log(arrayNumsSpread);

//Rest operador
function testRest(nombre, apellido,...otros_parametros){
    console.log(nombre);
    console.log(apellido);
    console.log(otros_parametros);
}

console.log(testRest("Cesar","Cortez",12,true,"web","clase"));

//Funciones (metodos)

var val1 = 10;
var val2 = 20;

function sumaValores(v1,v2){
    return v1 + v2;
}
var sum1 = sumaValores(val1,val2);
console.log(sum1);

var sum2 = (v1,v2) => {
    return v1 + v2;
}

console.log(sum2(val1,val2));
console.log(sum2(100,50));

var sum3 = (v1,v2) => v1 + v2;
console.log(sum3(val1,val2));
console.log(sum3(500,10));

//objetos
var objetoUsuario = {
    "username": "Cesar",
    "score" : 70,
    "playTime" : 100
}
console.log(objetoUsuario);
objetoUsuario.profesional = false;
console.log(objetoUsuario);

class Usuario{

    constructor(username,score,playTime,profesional){
        this.username = username;
        this.score = score;
        this.playTime = playTime;
        this.profesional = profesional;
    }
    getName(){
        return this.username;
    }
}

var objetoUsuario2 = new Usuario("Juan",100,50,true);
console.log(objetoUsuario2);

//Alcance de variables (var vs let)
var a = 5;
var b  = 10;

if(a == 5){
    let a = 4;
    var b = 1;
    console.log(a);
    console.log(b);
}
    console.log(a);
    console.log(b);