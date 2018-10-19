const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
    
    let args = message.content.split(' ').slice(1).join(' ');
    
  if (message.content === 'ping') {
      message.channel.send(`<@-{message.author.id}> Ping..!`)
  }
  
  
  if (message.content.startsWith('-bc')) {
          if (!args[0]) {
message.channel.send("**-bc <message>**");
return;
}
message.guild.members.forEach(m => {
   if(!message.member.hasPermission('ADMINISTRATOR')) return;
   m.send(`${args}`);

});
  }
 
});

client.login(process.env.BOT_TOKEN);
