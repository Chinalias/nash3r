const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
  client.user.setGame(`By | A7MD`,'https://www.twitch.tv/Baktash');
  console.log('BOT ONLINE');
});
client.login('MzMxMDgxMjY4NzMxMDUyMDQy.Di5h_Q.Zv7UklLhGjz2f7w9iXOMT1lOSrg');
