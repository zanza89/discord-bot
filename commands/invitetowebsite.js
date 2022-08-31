const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('invitetowebsite')
		.setDescription('messages a target')
		.addUserOption(option =>
			option
				.setName('target')
				.setDescription('the user')
				.setRequired(true))
		.addUserOption(option =>
			option
				.setName('token')
				.setDescription('invite token')
				.setRequired(true)),
	async execute(interaction) {
		const target = interaction.options.getUser('target');
		const token = interaction.options.getString('token');
		await interaction.client.users.fetch(target).then(user =>
			user.send('hello world!' + token));
		// console.log(id);
		// interaction.member.createDM().then(dmchannel => {
		// 	dmchannel.send('welcome to SoloLvLing');
		// }).catch((e) => {
		// 	console.error(e);
		// });
		return interaction.reply('message sent to ' + target);
	},
};