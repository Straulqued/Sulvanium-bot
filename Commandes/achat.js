const Discord = require('discord.js');
const valo = new Discord.WebhookClient(process.env.valo1, process.env.valo2);
const pala = new Discord.WebhookClient(process.env.pala1, process.env.pala2)
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