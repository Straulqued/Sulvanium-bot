const Discord = require('discord.js');

module.exports.run = (client, message, args) => {

        message.delete(message.author);
    	message.channel.send(msg);
}


module.exports.help = {
    name: 'say'
};
