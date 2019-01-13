module.exports = (client, ready) => {
    console.log(client.config.logprefix+` ${client.guilds.size} server's were fetched, on startup`)
    console.log(client.config.logprefix+` ${client.users.size} user's were fetched, on startup`)
    console.log(client.config.logprefix+` ${client.channels.size} channels's were fetched, on startup`)

    client.user.setActivity('to stokeley', { type: 'LISTENING' });
};
