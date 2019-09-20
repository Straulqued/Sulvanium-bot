const Discord = require('discord.js');
const prefix = "!say"
module.exports.run = (client, message, args) => {

		let msg = message.content.slice(prefix.length)
        message.delete(message.author);
    	message.channel.send(msg);
}


module.exports.help = {
    name: 'say'
};
