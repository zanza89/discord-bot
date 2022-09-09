const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('restart')
		.setDescription('reboots the bot'),
	async execute(interaction) {
		console.log('bot has is beeing rebooted');
		interaction.send('bot is restarting.. ');
		process.exit();
	},
};