const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const fs = require('fs');
const Enmap = require('enmap');
client.config = config;
client.commands = new Enmap();

fs.readdir("./src/events", (err, files) => {
    if(err) return console.log(err)
    files.forEach(file => {
        if(!file.endsWith(".js")) return;
        const event = require(`./src/events/${file}`);
        let eventName = file.split(".")[0];
        client.on(eventName, event.bind(null, client));
        delete require.cache[require.resolve(`./src/events/${file}`)]
    });
});

fs.readdir("./src/commands", (err, files) => {
    if(err) return console.log(err);
    files.forEach(file => {
        if(!file.endsWith(".js")) return;
        let props = require(`./src/commands/${file}`);
        let commandName = file.split(".")[0];
        console.log(`Trying to load command, ${commandName}.js`);
        client.commands.set(commandName, props)
    });
});
client.login(process.env.TOKEN);
