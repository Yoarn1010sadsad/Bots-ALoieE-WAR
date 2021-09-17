const Discord = require ("discord.js")

exports.run = async (client, message) => {
 if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You do not have permissions to use this command!")
  let embed = new Discord.MessageEmbed()
.setColor("#363940")       
.setFooter('Bot Made By Spedo')
.addField('__**Boosters Rewards**__. \n 300x steam accounts. \n 50x origin with 5+ games. \n Booster role (Until the boost ends). \n Private chat for only boosters. \n Access to generator room (Until the boost ends). \n Limited icon and gif for only boosters.');
message.channel.send(embed)
}
module.exports.boost = {
  name: 'boost'
}