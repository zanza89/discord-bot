const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('test')
		.setDescription('emits a memberAdd event')
		.addSubcommand(subcommand =>
			subcommand
				.setName('ready')
				.setDescription('emits "ready"'))
		.addSubcommand(subcommand =>
			subcommand
				.setName('guildmemberadd')
				.setDescription('emits "guildMemberAdd"')
				.addUserOption(option => option.setName('target').setDescription('The user'))),
	async execute(interaction) {
		if (interaction.options.getSubcommand() === 'guildmemberadd') {
			const user = interaction.options.getUser('target');
			if (user) {
				await interaction.message.client.emit('guildMemberAdd', user);
				// await interaction.reply('Username: ' + user.username + '\nID: ' + user.id);
			}
			else {
				await interaction.message.client.emit('guildMemberAdd', interaction.user);
				// await interaction.reply('Your username: ' + interaction.user.username + '\nYour ID: ' + interaction.user.id);
			}
		}
		else if (interaction.options.getSubcommand() === 'ready') {
			// interaction.message.cache.client.emit('ready');
			console.log(interaction);
		}
	},
};