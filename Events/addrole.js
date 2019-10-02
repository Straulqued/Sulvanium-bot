const Discord = require('discord.js');
const prefix = '!';

module.exports = (client, message, args) => {
	bot.on('guildMemberAdd', member => {
  	console.log('Le joueur' + member.user.tag + 'a rejoint le serveur!');

  	var role = member.guild.roles.find('name', 'user');
  	member.addRole(621065142616195072);
}