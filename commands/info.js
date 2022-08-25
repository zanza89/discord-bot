const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('info')
		.setDescription('Get info about a user or a server!')
		.addSubcommand(subcommand =>
			subcommand
				.setName('user')
				.setDescription('Info about a user')
			// eslint-disable-next-line no-mixed-spaces-and-tabs
			    .addUserOption(option => option.setName('target').setDescription('The user')))
		.addSubcommand(subcommand =>
			subcommand
				.setName('server')
				.setDescription('info about the server')),
	async execute(interaction) {
		if (interaction.options.getSubcommand() === 'user') {
			const user = interaction.options.getUser('target');
			if (user) {
				await interaction.reply('Username: ' + user.username + '\nID: ' + user.id);
			}
			else {
				await interaction.reply('Your username: ' + interaction.user.username + '\nYour ID: ' + interaction.user.id);
			}
		}
		else if (interaction.options.getSubcommand() === 'server') {
			const serverName = interaction.guild.name;
			const memberCount = interaction.guild.memberCount;
			const createdAt = interaction.guild.createdAt;
			await interaction.reply('clan name: ' + serverName + '\nmember count: ' + memberCount + '\ncreated At: ' + createdAt);
		}
	},
};