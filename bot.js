const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
  client.user.setGame(`Rlly ?`,'https://www.twitch.tv/Baktash');
  console.log('BOT ONLINE');
});

client.login(process.env.BOT_TOKEN);
