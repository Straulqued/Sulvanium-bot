const Discord = require('discord.js');
const valo = new Discord.WebhookClient('623850432858685457', '83js6mALsZoV2Rf1-DaevgJMmsDJNe4y5xAItKjh3ujPDdP417jWEexeohullhtt76-J');
const pala = new Discord.WebhookClient('623850316579864576', '2LbGwYP9-EIzLfZn0z4_vj0-GBQWD_VHFdd4qZuyJ3bBcbnY5iMOh9R7Qldoh1-coPX0')
module.exports.run = (client, message, args) => {
	if(args[0] == "valo"){
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
	if(args[0] == "pala"){
			const item = args[1];
			const quantité = args[2];
			const delai = args[3];
			const prix = args[4];
			const pseudo = args[5];
        	message.reply('Votre commande a bien été prise en compte!');

			let commandepalaEmbed = new Discord.RichEmbed()
				.setDescription("Commande Paladium : ")
				.setColor("#00CED1")
				.addField("Item", ` ${item} `)
				.addField("Quantité", ` ${quantité} `)
				.addField("Delai", ` ${delai} `)
				.addField("Prix", ` ${prix} `)
				.addField("Pseudo", ` ${pseudo} `)
				.setFooter('Commande bien prise en compte');
			pala.send(commandepalaEmbed);
	}
}

module.exports.help = {
    name: 'achat'
};