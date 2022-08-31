const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('message')
		.setDescription('messages a target')
		.addUserOption(option =>
			option
				.setName('target')
				.setDescription('the user')
				.setRequired(true)),
	async execute(interaction) {
		const target = interaction.options.getUser('target');
		await interaction.client.users.fetch(target).then(user =>
			user.send('hello world!'));
		// console.log(id);
		// interaction.member.createDM().then(dmchannel => {
		// 	dmchannel.send('welcome to SoloLvLing');
		// }).catch((e) => {
		// 	console.error(e);
		// });
		return interaction.reply('message sent to ' + target);
	},
};