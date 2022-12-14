const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('message')
		.setDescription('message a target')
		.addUserOption(option =>
			option
				.setName('target')
				.setDescription('The user')
				.setRequired(true))
		.addStringOption(option =>
			option
				.setName('input')
				.setDescription('the input if the message')
				.setRequired(true)),

	async execute(interaction) {
		const input = interaction.options.getString('input');
		const target = 
		// get all members in the guild
		interaction.guild.members.fetch().then((members) => {
			// iterate a function through every member of the guild
			// with `Array.prototype.forEach()`
			members.forEach((member) => {
				// if (blacklist.includes(member.id) || member.user.bot)
				// 	return console.log("1 usuário da BlackList não recebeu a mensagem.");
				member.send(input).catch(console.error);
			});
		});

		// else if (interaction.commandName === 'message') {
		// 	await interaction.client.users.fetch(target).then(user =>
		// 		user.send(interaction.options.getString));

		// }
		// console.log(id);
		// interaction.member.createDM().then(dmchannel => {
		// 	dmchannel.send('welcome to SoloLvLing');
		// }).catch((e) => {
		// 	console.error(e);
		// });
		return interaction.reply('message sent to all' + '\ninput:\n' + input);
	},
};