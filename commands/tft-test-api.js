const { SlashCommandBuilder } = require('discord.js');
const { fetch } = require('undici');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('tft-test-api')
		.setDescription('tft api test fetch')
		.addStringOption(option =>
			option
				.setName('ingame_name')
				.setDescription('the ingame name')
				.setRequired(true))
		.addStringOption(option =>
			option
				.setName('tag_line')
				.setDescription('tag line #0000')
				.setRequired(true)),
	async execute(interaction) {
		async function destructure(url_api) {
			const data = {
				apiKey: 'RGAPI-8c8765e5-922d-4804-8091-c990cb83b31d',
			};
			const { status, headers, body } = await fetch(url_api, { body: data, method: 'POST' }) || {};
			console.log('Response Code: ', status);
			console.log('Response Headers: ', headers);
			console.log('body: ', body);
			interaction.reply('ingame name: ' + targetGameName + '\n' +
                            'tag :' + targetTagLine + '\n' +
                            'response code: ' + status + '\n' +
                            'body: ' + body);
		}
		const url_api = 'https://europe.api.riotgames.com/riot/account/v1/accounts/by-riot-id/';
		const targetGameName = interaction.options.getString('ingame_name');
		const targetTagLine = interaction.options.getString('tag_line');
		destructure(url_api + targetGameName + '/' + targetTagLine);
	},
};