const EventEmitter = require('node:events');
const myEmitter = new EventEmitter();

const process = require('process');
// Logged In:
myEmitter.on('auth', function loggIn(username, password) {
    if(username ==="admin" && password==="1234"){
        console.log("User logged in");
    }
    else{
        console.log("Wrong credintials")
    }

    console.log("TIMESTAMP: USER_X logged in")
  
});


myEmitter.on('auth', function logOut(username, password) {
  
    
    console.log("TIMESTAMP: USER_X loggedOut in")
  
});


console.log(myEmitter.listeners('auth'));

myEmitter.emit('auth', process.argv[2],process.argv[3], process.argv[2],process.argv[3]);

