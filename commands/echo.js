const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('echo')
		.setDescription('Replies with your input!')
		.addStringOption(option =>
			option.setName('input')
				.setDescription('The input to echo back')
			// eslint-disable-next-line no-mixed-spaces-and-tabs
		        .setRequired(true)),
	async execute(interaction) {
		const input_string = interaction.options.getString('input');
		interaction.reply(input_string);
	},
};