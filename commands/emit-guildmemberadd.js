const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('emitmemberadd')
		.setDescription('emits a memberAdd event'),
	async execute(interaction) {
		// client.emit('guildMemberAdd', 'a new member');
		console.log(interaction);
	},
};