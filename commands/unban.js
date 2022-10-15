const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('unban')
		.setDescription('unbans a specific user')
		.addUserOption(option =>
			option
				.setName('target')
				.setDescription('the member to ban')
				.setRequired(true)),
	async execute(interaction) {
		const user = interaction.options.getUser('target');

		interaction.guild.bans.fetch().then(bans => {
			const listTemp = bans.map(bannedUser => bannedUser.user.username).join('\n');
			if (listTemp.size < 1) {
				interaction.reply('es gibt nichts zu bannen');
				return;
			}
			interaction.guild.members.unban(user);
		})
			.catch(console.error);
		interaction.guild.bans.fetch().then(bans => {
			const list = bans.map(bannedUser => bannedUser.user.username).join('\n');
			interaction.reply(bans.size + ' users are banned: ' + '\n' + list);
		})
			.catch(console.error);
	},
};