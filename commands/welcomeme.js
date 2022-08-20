const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('welcomeme')
		.setDescription('Welcomes you'),
	async execute(interaction) {
		interaction.member.createDM().then(dmchannel => {
			dmchannel.send('welcome to SoloLvLing');
		}).catch((e) => {
			console.error(e);
		});
		return interaction.reply('whats that?');
	},
};