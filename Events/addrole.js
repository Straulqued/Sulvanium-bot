const Discord = require('discord.js');
const prefix = '!';

module.exports = (client, message) => {
	bot.on('guildMemberAdd', member => {
  	console.log('User' + member.user.tag + 'has joined the server!');

  	var role = member.guild.roles.find('name', 'user');
  	member.addRole(621065142616195072);
}