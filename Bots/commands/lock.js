const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "lock",
    description: "Unlocks a given channel for a particular role!",
    run: async(client, message, args) => {
        if(!message.member.hasPermission("LOCK_CHANNELS")) return message.reply("You do not have permissions to use this command!")
        const channel = message.mentions.channels.first()
        if(!channel.name) return message.reply("Please mention a valid channel!")
        const roletofind = args.slice(1).join("")
        const role = message.guild.roles.cache.find(r => r.id === roletofind)
        if(!role) return message.reply("Please give a valid role id!")   // gen access id = 828974594676228097     // member role id = 772473775664529438
        let embed = new MessageEmbed()
        .setDescription(`This channel has been locked by <@${message.author.id}>`)
        .setTimestamp()
        channel.updateOverwrite(role, {
            SEND_MESSAGES: false
        })
        await channel.send(embed)
    }
}