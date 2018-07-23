const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
  client.user.setGame(`By | A7MD`,'https://www.twitch.tv/Baktash');
  console.log('BOT ONLINE');
});

client.login(process.env.BOT_TOKEN);
