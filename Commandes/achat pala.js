const Discord = require('discord.js');
const valo = new Discord.WebhookClient('623850432858685457', '83js6mALsZoV2Rf1-DaevgJMmsDJNe4y5xAItKjh3ujPDdP417jWEexeohullhtt76-J');

module.exports.run = (client, message, args) => {
	if(args[0] == "val"){
			const item = args[1];
			const quantité = args[2];
			const delai = args[3];
			const prix = args[4];
			const pseudo = args[5];
        	message.reply('Votre commande a bien été prise en compte!');

			let commandevaloEmbed = new Discord.RichEmbed()
				.setDescription("Commande Valorion : ")
				.setColor("#00CED1")
				.addField("Item", ` ${item} `)
				.addField("Quantité", ` ${quantité} `)
				.addField("Delai", ` ${delai} `)
				.addField("Prix", ` ${prix} `)
				.addField("Pseudo", ` ${pseudo} `)
				.setFooter('Commande bien prise en compte');
			valo.send(commandevaloEmbed);
			
	}
}

module.exports.help = {
    name: 'achat val'
};