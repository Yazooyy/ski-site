const Discord = require('discord.js'); 

module.exports = (client, guild) => {
    console.log(client.config.logprefix + ` Removed from guild, ${guild.name} (${guild.id}) which is owned by ${guild.owner} (${guild.owner.id})`);
    let logging = client.channels.get(client.config.genrallogging);
    let embed = new Discord.RichEmbed()
     .setColor('RED')
     .setDescription(`Sucessfully removed from guild, ${guild.name}`)
     .setFooter(`${guild.name} is owned by ${guild.owner}`);
    logging.send(embed);
};
