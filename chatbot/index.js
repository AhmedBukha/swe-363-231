const process = require('process');

var cowsay = require("cowsay");

console.log(cowsay.say({
    text : "I'm ask me anything and I will try my best to answer",
    e : "oO",
    T : "U "
}));



process.stdin.on('data', data => { 
   
    let  input = data.toString().trim().toLowerCase();

    switch(input){
        case"hello":
            console.log(cowsay.say({
                text : "Hey!",
                e : "oO",
                T : "U "
            }));
            break;
        case "what's your name?":
            console.log(cowsay.say({
                text : "My name is Mr.Wise Cow",
                e : "oO",
                T : "U "
             }));
            break;
            case "how old are you?":
                    console.log(cowsay.say({
                        text : "99 :3",
                        e : "oO",
                        T : "U "
                    }));
                    break;
                    case "how is the weather? ":
                        console.log(cowsay.say({
                            text : "Gud ig ;/",
                            e : "oO",
                            T : "U "
                        }));
                        break;
                   case "exit":
                            console.log(cowsay.say({
                                text : "Thanks for the chatting lmao",
                                e : "oO",
                                T : "U "
                            }));
                            
                            process.exit();
                            break;
                 case "quit":
                                console.log(cowsay.say({
                                    text : "Thanks for the chatting lmao",
                                    e : "oO",
                                    T : "U "
                                }));
                                process.exit();
                                break;
            default: 
            console.log(cowsay.say({
                text : "Idk what you wrote :) ",
                e : "oO",
                T : "U "
            }));
    }
    
  });