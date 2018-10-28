const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', function() {
    console.log(`i am ready ${client.user.username}`);
});











const developers = ["452379478618800129","","346343289861046273"]
const adminprefix = ".";
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'ply')) {
    client.user.setGame(argresult);
      message.channel.send(`**Now Playig   ${argresult}**`)
  } else 
     if (message.content === (adminprefix + "leaveserver")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'wat')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**Now Watching   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'lis')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**Now Listening   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'stream')) {
    client.user.setGame(argresult, "https://www.twitch.tv/idk");
      message.channel.send(`**Now Streaming   ${argresult}**`)
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});

client.on('message', message => {
        var prefix = '-'; // هنا تقدر تغير البرفكس
    var command = message.content.split(" ")[0];
    if(command == prefix + 'bc') { // الكوماند {prefix} bc
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(`**${message.author.username} يا حلو كيف تبي تسوي برود كاست وما معك *ADMINISTRATOR*`);
        var args = message.content.split(' ').slice(1).join(' ');
        if(message.author.bot) return;
    if(!args) return message.channel.send(`**➥ Useage:** ${prefix}bc كلامك `);
       
        let bcSure = new Discord.RichEmbed()
        .setTitle(`:mailbox_with_mail: **هل انت متأكد انك تريد ارسال رسالتك الى** ${message.guild.memberCount} **عضو**`)
        .setThumbnail(client.user.avatarURL)
        .setColor('RANDOM')
        .setDescription(`**\n:envelope: ➥ رسالتك**\n\n${args}`)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.avatarURL)
       
        message.channel.send(bcSure).then(msg => {
            msg.react('✅').then(() => msg.react('❎'));
            message.delete();
           
           
            let yesEmoji = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
            let noEmoji = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;
           
            let sendBC = msg.createReactionCollector(yesEmoji);
            let dontSendBC = msg.createReactionCollector(noEmoji);
           
            sendBC.on('collect', r => {
                message.guild.members.forEach(member => {
                    member.send(args.replace(`[user]`, member)).catch();
                    if(message.attachments.first()){
                        member.sendFile(message.attachments.first().url).catch();
                    }
                })
                message.channel.send(`:timer: **يتم الان الارسال الى** \`\`${message.guild.memberCount}\`\` **عضو**`).then(msg => msg.delete(5000));
                msg.delete();
            })
            dontSendBC.on('collect', r => {
                msg.delete();
                message.reply(':white_check_mark: **تم الغاء ارسال رسالتك بنجاح**').then(msg => msg.delete(5000));
            });
        })
    }
});

client.login(process.env.BOT_TOKEN);
