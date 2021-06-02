const Discord = require("discord.js");
const client = new Discord.Client();
const clave = require('./clave');

client.on("ready", () => {
    console.log(`LINK STATO, V.1.0.0`);
});
 

client.on("message", (message) => {
    
    let nombre = message.author.username;
    let mensaje = message.content.toLocaleLowerCase();
    switch(mensaje){
        case "tarea":
            message.channel.send("No hay tarea no hay escuela");
        break;
        case "yga":
            message.channel.send(yga());
        break;
        case "nadie":
            message.channel.send("A nadie le importa * canche en la oscuridad *");
        break;
        
    };

//---------------------FUNCIONES---------------------
    function yga(){
        let min = 1;
        let max = 4;
        let aleatorio = Math.trunc(Math.random()*(max-min)+min);

        let gamer = [];
        gamer[1] = "Vos sos gaymer pero sin el mer";
        gamer[2] = "Dedusco que el que puso el mensaje es yga no es asi " + nombre;
        gamer[3] = "Puedo confirmar por su manera de hablar que es yga";
        
        return gamer[aleatorio];
    };
//--------------------------------------------------
});
client.login(clave.clave);