const { MessageEmbed } = require('discord.js')
module.exports = {
    name: "nuke",
    description: "Nukes a given channel",
    async execute(client, message, args) {
        if(!message.member.hasPermission("ADMINISTRATOR")) {
            return message.reply("You do not have the perms to use this cmd!")
        }
        let reason = args.join(" ") || "No Reason"
        if(!message.channel.deletable) {
            return message.reply("This channel cannot be nuked!")
        }
        let newchannel = await message.channel.clone()
        await message.channel.delete()
        let embed = new MessageEmbed()
        .setTitle("This Channel Has Been Nuked")
        .setDescription(`\`${reason}\``)
        .setColor("BLUE")
        .setTimestamp()
        .setImage('https://media0.giphy.com/media/oe33xf3B50fsc/200.gif')
        .setFooter(client.user.username , client.user.displayAvatarURL())
        await newchannel.send(embed)
    }
}