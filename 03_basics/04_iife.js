
// Immediately Invoked Function Expression (IIFE) 

(function chai(){
    console.log(`DB CONNECTED`);
}) () ;
    // must use ; semicollan when iife end 
(
    (name)=>{
        console.log(`db connected two ${name}`);
        
    }
)('ramji')