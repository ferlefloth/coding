
/*
Charla con JOACO: 
    meli feedback leadership accelerator
  Meli lideres
*/


////// EXPLICACIÓN DE GUILLE PARA USAR COMO MODELO DE CA PARA PEGARLE A UNA API///////

const utilsBm = require('UtilsBm');
const CONFIG = { // Se realiza una constante en donde se ponen todos los datos para la configuración de mi RP
chatPlatform: 'WHATSAPP',
platformContactId: '5491155240037',
ruleNameOrId:'FerLeflothTest-3139a7224668e4d@bm.com-1611411129355',
...utilsBm.getGeneralConfig(), //el ...utilsBm.getGeneral config nos devolverá el acces-token en un objeto;
};

const main = async () => { //Guille hace una constante main con una función asicrónica.
const {chatPlatform, platformContactId, ruleNameOrId, accessToken} = CONFIG; //descontructing en ES6 genera una variable por cada una con su key y value correspondiente

const response = await rp({  //ase el await en el rp
  method: 'POST',
  url: 'https://go.botmaker.com/api/v1.0/intent/trigger',
  form: { chatPlatform, platformContactId, ruleNameOrId },
  headers:{
    'access-token': accessToken, //este es el accessToken que trae el getGeneralConfig
  },
});

if (response != "true") {
  throw new Error("El servicio devolvió error");
}
};

main() //acá innicializa el main
.then(response => { if(response) result.text(response); }) //acá obtiene el response y hace las lógicas pertinentes
.catch(error => result.text(`Èrror: ${error.message}`))
.finally(() => result.done()); //Este finally hace que toooodo el codigo se vea afectado por el resultDone



//////EL CÓDIGO QUE ESTÁ ACÁ ABAJO ES EL DE EL //////
function getGeneralConfig() {
	return {
      accessToken: 'eyJhbGciOiJIUzUxMiJ9.eyJidXNpbmVzc0lkIjoiRmVyTGVmbG90aFRlc3QiLCJuYW1lIjoiRmVybmFuZG8gTGVmbG90aCIsImFwaSI6dHJ1ZSwiaWQiOiJiZEMxS3oxNGdnZmJRdHA5VmJoT1ZvWmZpYW4yIiwiZXhwIjoxNzczNjE1Njg2LCJqdGkiOiJiZEMxS3oxNGdnZmJRdHA5VmJoT1ZvWmZpYW4yIn0.4jOoAapCdcgV-V3i8XPTcw5MJNPTtorDOVL2H8AlH2EVsdbx_3BeRr7ybrmdYiUATKEYtAZpcwVhsIKJaodSpg'
    }
}
