const Discord = require('discord.js')

module.exports = {
    name: "invite",
    description: "send bot invite",

    async run (client, message, args) {
      message.reply('The Bot Send You DM Message With Bot Invite')
    message.author.send(`https://discord.com/api/oauth2/authorize?client_id=845978616029511701&permissions=8&scope=bot`)
    }
}