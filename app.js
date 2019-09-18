
const argv=require ('./config/yargs').argv;
const colors = require('colors');
const {crearArchivo,listarTabla } = require('../03-Bases Node/multiplicar/multiplicar');
 

let comando = argv._[0];

switch(comando){

    case'listar':
    listarTabla(argv.base, argv.limite);    
    break;

    case'crear':
    crearArchivo(argv.base, argv.limite)  .then(archivo => console.log(`Archivo creado: ${archivo}`.green))
  .catch(e => console.log(e) );
    break;

    default:
        console.log ('comando no reconocido ');
    break;

}







