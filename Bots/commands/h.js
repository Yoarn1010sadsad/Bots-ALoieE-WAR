const Discord = require('discord.js')

module.exports = {
    name: "h",
    description: "send help message",

    async run (client, message, args)  {
       
      
       
        let channel = message.member.voice.channel
        if(channel) {
        channel = "**The User Is Existing In** <#" + message.member.voice.channel + ">"
        }else{
        channel = ':no_entry: **No Existing In Voice Channel** :no_entry:'
        }
                    var reason = args.join(" ");
        if(!reason) reason = "No Reason Given";
                const embed = new Discord.MessageEmbed()
                .addField("**__User__**:\n",` ${message.author} |**need your help!**
                **Please wait patiently for the staff.**`)
                .addField("**__Voice__**:", `${channel}`)
                .addField("**__Roles Staff__**:\n", `<@&846336271966011418>`)
                .addField("**__Reason__**:\n", reason)
                .setColor(`#11CCEE`)
                .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
                .setFooter(message.author.username + "#" + message.author.discriminator, message.author.avatarURL)
        .setTimestamp(new Date())
                message.channel.send(`<@&846336271966011418>`).then(x => x.delete({ timeout: 30 }))
                message.channel.send(embed)
            }
        }