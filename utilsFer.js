try {
    const utils = require("Utils");
    const baseUrl = utils.getBaseUrl(); //Trigger URL
  
   // bmconsole.log(`Testeando el BaseUrl : ${clientId} y el ENV ES ${env}`);
   
  /*
    Charla con JOACO: 
   	   meli feedback leadership accelerator
	   Meli lideres
   */
  
   // result.text('Acá carga el baseUrl y hará el accessToken()');
 	//user.get('tokenBm')
utils.getAccessToken().then(token => {
      //  bmconsole.log(`EL TOKEN ES : ${token}`);
      const options =
      {
        method: 'POST',
        url: `${baseUrl}`,
        body:
        {
          chatPlatform: 'WHATSAPP',
          platformContactId: '5491155240037',
          ruleNameOrId:'FerLeflothTest-3139a7224668e4d@bm.com-1611411129355'
        },
        headers:
        {
          'Content-Type': 'application/x-www-form-urlencoded',
          'access-token': `${token}`,
          Accept: 'application/json'
        }
      };
     // result.text('no rompió ell getAccessToken , ahora va a hacer el RP');
     
      rp({
        url: options.url,
        method: options.method,
        json: true,
        body: options.body,
        headers: options.headers
      })
        .then(response => {
   		bmconsole.log('[OK][FerLefloth Test]-/intent/trigger Testing');
     	result.done();
        });
    	}).catch(err => {
      bmconsole.error(`[Error en Rp] [FerLefloth Test] - /intent/trigger Testing ${err.message}`);
      user.set('error', `[Error en Rp] [FerLefloth Test] - /intent/trigger Testing ${err}`);
      result.done();
    });
  } catch (err) {
    bmconsole.error(`[Error en Catch] [FerLefloth Test] - /intent/trigger Testing ${err.message}`);
    user.set('error', `[Error en Cath] [FerLefloth Test] - /intent/trigger Testing ${err}`);
    result.done();
  }