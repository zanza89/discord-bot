const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ban')
		.setDescription('bans a specific user')
		.addUserOption(option =>
			option
				.setName('target')
				.setDescription('the member to ban')
				.setRequired(true))
		.addStringOption(option =>
			option
				.setName('ingamename')
				.setDescription('the ingame name of the user / leave blank if identic'))
		.addStringOption(option =>
			option
				.setName('reason')
				.setDescription('the reason why the user is banned'))
		.addStringOption(option =>
			option
				.setName('joinedclans')
				.setDescription('previous clans the user has joined')),
	async execute(interaction) {
		const user = interaction.options.getUser('target');
		const ingameName = interaction.options.getString('ingamename');
		const banReason = interaction.options.getString('reason');
		const clans = interaction.options.getString('joinedclans');
		await interaction.guild.members.ban(user);
		interaction.guild.bans.fetch().then(bans => {
			const list = bans.map(bannedUser => bannedUser.user.username).join('\n');
			interaction.reply(bans.size + ' users are banned: ' + '\n' + list);
		})
			.catch(console.error);
		const channel = interaction.client.channels.cache.get('985944666748891147');

		await channel.send('Name: ' + ingameName + ' / ' + 'Discord: ' + user.username + '\n'
                            + 'Grund: ' + banReason + '\n'
                            + 'war vorher bei: ' + clans);
	},
};