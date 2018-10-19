const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const suck = JSON.parse(fs.readFileSync('./suck.json', 'utf8'));
const prefix = "!";
// By M7MD
client.on("message", message => {
    fs.writeFile('./suck.json', JSON.stringify(suck));
});
client.on('ready', () => {
    setInterval(function(){
        client.guilds.forEach(g => {
            if (suck[g.id]) {
                if (suck[g.id].role) {
                    var role = g.roles.get(suck[g.id].role);
                    if (role) {
                        role.edit({color : "RANDOM"});
                    };
                };
            };
        });
    }, 1500);
});
client.on("message", message => {
    if (!message.content.startsWith(prefix)) return;
    if (message.author.bot) return;
    if (message.channel.type !== "text") return message.reply("This Command Is Only Allowed In Servers");
    var args = message.content.split(" ");
    var command = args[0].slice(prefix.length);
    switch(command) {
        case "rainbow" :
        if (!message.member.hasPermission("MANAGE_ROLES")) return message.reply("no no");
        message.guild.createRole({name : "rainbow", color : "RANDOM"}).then(r => {
            r.edit({color : "RANDOm"});
            suck[message.guild.id] = {role : r.id};
        });
    };
});

client.login(process.env.BOT_TOKEN);
