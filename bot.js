const Discord = require('discord.js')
const client = new Discord.Client()
const config = require("./config.json");


client.on('ready', () => {
    // Set bot status to: "Playing with JavaScript"
    client.user.setActivity("with JavaScript")

    // Alternatively, you can set the activity to any of the following:
    // PLAYING, STREAMING, LISTENING, WATCHING
    // For example:
    // client.user.setActivity("TV", {type: "WATCHING"})
});

// The bot will ping in this channel when it is powered up
client.on('ready', () => {
    var testChannel = client.channels.cache.get("716384407526703195") // Replace with known channel ID
    testChannel.send("Hello world! I am currently under development but please stick around for more :wink:")   
});


client.login(config.token);
