// IIFE (Immediately Invoked Function Execution)

(function chai(){ // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => { // Unnamed IIFE with parameter
    console.log(`DB CONNECTED TWO ${name}`)
})("Ankit");