console.log('starting app');

setTimeout(() =>{
    console.log('inside timeout');
}, 1500)

setTimeout(() =>{
    console.log('no delay');
}, 0)

console.log('finishing');
