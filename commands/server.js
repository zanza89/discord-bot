const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
		await interaction.reply('Server name:' + interaction.guild.name + '\nTotal members: ' + interaction.guild.memberCount + '\ncreated at: ' + interaction.guild.createdAt + '\nverification lvl: ' + interaction.guild.verificationLevel);
	},
};