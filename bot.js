client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});

const adminprefix = "c";
const devs = ['507978288250093568'];
client.on('message', message => {
  var argresult = message.content.split(`).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
    
if (message.content.startsWith(adminprefix + 'setG')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(${argresult} تم تغيير بلاينق البوت إلى )
} else 
  if (message.content.startsWith(adminprefix + 'setN')) {
client.user.setUsername(argresult).then
    message.channel.sendMessage(${argresult} : تم تغيير أسم البوت إلى)
return message.reply("**لا يمكنك تغيير الاسم يجب عليك الانتظآر لمدة ساعتين . **");
} else
  if (message.content.startsWith(adminprefix + 'setA')) {
client.user.setAvatar(argresult);
  message.channel.sendMessage(${argresult} : تم تغير صورة البوت);
      } else     
if (message.content.startsWith(adminprefix + 'setT')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk");
    message.channel.sendMessage(تم تغيير تويتش البوت إلى  ${argresult}`)
}
});

client.login(process.env.BOT_TOKEN);
