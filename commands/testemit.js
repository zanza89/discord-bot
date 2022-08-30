const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('testemit')
		.setDescription('emits an event')
		.addSubcommand(subcommand =>
			subcommand
				.setName('ready')
				.setDescription('emits "ready"'))
		.addSubcommand(subcommand =>
			subcommand
				.setName('guildmemberadd')
				.setDescription('emits "guildMemberAdd"')),
	async execute(interaction) {
		if (interaction.options.getSubcommand() === 'guildmemberadd') {
			await interaction.client.emit('guildMemberAdd', interaction.user);
			await interaction.reply('username: ' + interaction.user.username + ' emitted - "guildMemberAdd"');
		}
		else if (interaction.options.getSubcommand() === 'ready') {
			await interaction.client.emit('ready');
			await interaction.reply('username: ' + interaction.user.username + ' emitted - "ready" (once: true)');
		}
	},
};