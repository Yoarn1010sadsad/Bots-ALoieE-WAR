const Discord = require('discord.js')

module.exports = {
    name: "backup",
    description: "show all server backups",

    async run (client, message, args) {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You dont have enough perms to use this cmd!")
    message.channel.send(`**Your Backups**
**x!backup load ||436MJKYCAG||**
||SPEDO ϟ Community Backup | (25. May 2021 - 17:09 UTC)||
**=======================================================**
**x!backup load ||436MJJ6DS6||**
||SPEDO ϟ Community Backup | (25. May 2021 - 17:09 UTC)||

||<@${message.author.id}>||`)
    }
}