const Discord = require('discord.js');

module.exports = {
    name: "help",
    description: "The help command, what do you expect?",

    async run (client, message, args){
          
        const embed = new Discord.MessageEmbed()
        .setTitle('**__Bot Commands__**')
        .addField('`=kick`', 'Kicks a member from your server')
        .addField('`=ad`','Send DM message with partner ad')
        .addField('`=ban`', 'Bans a member from your server')
        .addField('`=clear`', 'Clear number of messages')
        .addField('`=lock`', 'Lock a metion channel for specific role')
        .addField('`=unlock`','Unlock a metion channel for specific role')
        .addField('`=unban`','Unban a member has been banned from the server')
        .addField('`=nuke`','Nuke a channel and clear all messages into the channel')
        .addField('`=h`','Send a help message to staff role for give you a help')
        .addField('`=slow`','Set a slowmode to same channel')
        .addField('`=say`','Delete your message and bot send it instead of you')
        .addField('`=help`','Send a help message with all bot commands')
        .addField('`=mute`','Mute someone that you mention')
        .addField('`=unmute`','Unmute someone that you mention')
        .addField('`=invite`','Send you DM Message With Bot Invite')
        .setColor(`BLUE`)
        .setTimestamp()
        message.channel.send(embed)
    }
}