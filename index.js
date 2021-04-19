/*Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.
Your task is to write a function maskify, which changes all but the last four characters into '#'.

maskify("4556364607935616") == "############5616"

*/

/**function maskify(cc) {

   
   myCc=[]
    for(let i=0; cc <= 10; i++){
        //console.log('Iteracción dentro del CC: ' + i);
       if (i === 3){
           
        console.log('Iterando' + i) 
        break;
       }
    }
    
  }

console.log(maskify(5))
console.log(myCc)
//console.log(`Este es el masky : ${maskify(123)}`) 
*/
/*
console.log('First!');

setTimeout(function second(){ //Macro Task , se ejecuta una vez que terminen de ejcutarse todas las otras
    console.log('Timed Out!')
}, 0000)

console.log('Final!');*/

//////////////////// SIN FUNCIÓN CALLBACK//////////////
/*const movies = [
  { title: `A New Hope`, body:`After Princess Leia, the leader of the Rebel Alliance, is held hostage by Darth Vader, Luke and Han Solo must free her and destroy the powerful weapon created by the Galactic Empire.`},
  { title: `The Empire Strikes Back`, body: `Darth Vader is adamant about turning Luke Skywalker to the dark side. Master Yoda trains Luke to become a Jedi Knight while his friends try to fend off the Imperial fleet.` }
]

function getMovies(){
setTimeout(() => {
  movies.forEach((movie, index) => {
      console.log(movie.title)
  })
}, 1000);
}

function createMovies(movie){
setTimeout(() => {
  movies.push(movie)
}, 2000);
}

getMovies();


createMovies({ title: `Return of the Jedi`, body:`Luke Skywalker attempts to bring his father back to the light side of the Force. At the same time, the rebels hatch a plan to destroy the second Death Star.` });


-------En este caso se renderiza solo dos pelis , porque el createMovies tarda 2 segundos en aparecer y el getMovies solo 1 segundo. Por eso nunca devuelve las 3 películas el getMovies
*/

/*-------------------------------------- ASÍ ES COMO FUNCIONA UN CALLBACK , PASANDO UN PARÁMETRO QUE ES UNA FUNCIÓN ----------------------------
const movies = [
  { title: `A New Hope`, body:`After Princess Leia, the leader of the Rebel Alliance, is held hostage by Darth Vader, Luke and Han Solo must free her and destroy the powerful weapon created by the Galactic Empire.`},
  { title: `The Empire Strikes Back`, body: `Darth Vader is adamant about turning Luke Skywalker to the dark side. Master Yoda trains Luke to become a Jedi Knight while his friends try to fend off the Imperial fleet.` }
]

function getMovies(){
setTimeout(() => {
  movies.forEach((movie, index) => {
      console.log(movie.title)
  })
}, 1000);
}

function createMovies(movie, callback){ //Le pasas como parámetro un callback , que en este caso sería el getMovies
setTimeout(() => {
  movies.push(movie);
  callback();
}, 2000);
}


createMovies({ title: `Return of the Jedi`, 
          body:`Luke Skywalker attempts to bring his father back to the light side of the Force. 
          At the same time, the rebels hatch a plan to destroy the second Death Star.` }, getMovies);*/


//-------------------COMO FUNCIONAN LAS PROMISES--------------
/*const movies = [
  { title: `A New Hope`, body:`After Princess Leia, the leader of the Rebel Alliance, is held hostage by Darth Vader, Luke and Han Solo must free her and destroy the powerful weapon created by the Galactic Empire.`},
  { title: `The Empire Strikes Back`, body: `Darth Vader is adamant about turning Luke Skywalker to the dark side. Master Yoda trains Luke to become a Jedi Knight while his friends try to fend off the Imperial fleet.` }
]

function getMovies(){
setTimeout(() => {
  movies.forEach((movie, index) => {
      console.log(movie.title)
  })
}, 1000);
}

function createMovies(movie){
return new Promise((resolve, reject) => { //tenemos el Resolve y el Reject. El resolve resuelve la promesa y la devuelve. Mientras que el reject, en el caso que exita un error, devuelve un mensaje de error
  setTimeout(() => {
      movies.push(movie);

      const error = false;

      if(!error){
          resolve();
      }
      else{
          reject('Error: Something went wrng!')
      }
  }, 2000);
})
}

createMovies({ title: `Return of the Jedi`, body:`Luke Skywalker attempts to bring his father back to the light side of the Force. At the same time, the rebels hatch a plan to destroy the second Death Star.`})
.then(getMovies); // El .then lo que hace es que , luego de realizarse la promesa, se ejecute el getMovies()*/

////////// EXPLICACIÓN DE ASYNC Y AWAIT /////////////////
      ///// PRIMERA PARTE //////////
/*async function example() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 2000)
  });

  let result = await promise; // wait until the promise resolves (*)

  console.log(result); // "done!"
}

example();*/

    /// SEGUNDA PARTE ///

    const movies = [
      { title: `A New Hope`, body:`After Princess Leia, the leader of the Rebel Alliance, is held hostage by Darth Vader, Luke and Han Solo must free her and destroy the powerful weapon created by the Galactic Empire.`},
      { title: `The Empire Strikes Back`, body: `Darth Vader is adamant about turning Luke Skywalker to the dark side. Master Yoda trains Luke to become a Jedi Knight while his friends try to fend off the Imperial fleet.` }
  ]

function getMovies(){
  setTimeout(() => {
      movies.forEach((movie, index) => {
          console.log(movie.title)
      })
  }, 1000);
}

function createMovies(movie){
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          movies.push(movie);

          const error = false;

          if(!error){
              resolve();
          }
          else{
              reject('Error: Something went wrong!')
          }
      }, 2000);
  })
}

async function init(){
  await createMovies({ title: `Return of the Jedi`, body:`Luke Skywalker attempts to bring his father back to the light side of the Force. At the same time, the rebels hatch a plan to destroy the second Death Star.`});
  
  getMovies();// (*) Esta función está esperando que se termine de ejecutar el await de createMovies
}

init();