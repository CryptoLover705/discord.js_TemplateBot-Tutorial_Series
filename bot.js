const Discord = require('discord.js')
const client = new Discord.Client()
const config = require("./config.json");


client.on('ready', () => {
    // Set bot status to: "Playing with JavaScript"
    client.user.setActivity("with JavaScript");
    // client.user.setActivity(`Serving ${client.guilds.size} servers`);

    // Alternatively, you can set the activity to any of the following:
    // PLAYING, STREAMING, LISTENING, WATCHING
    // For example:
    // client.user.setActivity("TV", {type: "WATCHING"})
});

// The bot will ping in this channel when it is powered up
client.on('ready', () => {
    var testChannel = client.channels.cache.get("xxxx") // Replace with known channel ID
    testChannel.send("Hello world! I am currently under development but please stick around for more :wink:")  
});
// This is for when members are removed from the server
client.on('guildMemberRemove',(member) => {
    client.channels.find('leave').send(`**${member.username}** has just left server.. Bye Bye`);
});
// when the bot gets added to a new server
client.on("guildCreate", guild => {
    // This event triggers when the bot joins a guild.
    client.channels.find('bot-logs').send(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
});
  // The bot leaves a server
client.on("guildDelete", guild => {
    // this event triggers when the bot is removed from a guild.
    client.channels.find('bot-logs').send(`I have been removed from: ${guild.name} (id: ${guild.id})`);
});

client.on("message", async message => {
    // This event will run on every single message received, from any channel or DM.
    
    // It's good practice to ignore other bots. This also makes your bot ignore itself
    // and not get into a spam loop (we call that "botception").
    if(message.author.bot) return;
    
    // Also good practice to ignore any message that does not start with our prefix, 
    // which is set in the configuration file.
    if(message.content.indexOf(config.prefix) !== 0) return;
    
    // Here we separate our "command" name, and our "arguments" for the command. 
    // e.g. if we have the message "+say Is this the real life?" , we'll get the following:
    // command = say
    // args = ["Is", "this", "the", "real", "life?"]
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
});

 


client.login(config.token);
