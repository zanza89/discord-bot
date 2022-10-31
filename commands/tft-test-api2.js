const { SlashCommandBuilder } = require('discord.js');
const { request } = require('undici');
const { apikey } = require('../apikey.json');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('tft-test-api2')
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
		const url = 'https://europe.api.riotgames.com/riot/account/v1/accounts/by-riot-id/';
		const targetGameName = interaction.options.getString('ingame_name');
		const targetTagLine = interaction.options.getString('tag_line');
		const url_suffix = '?api_key=' + apikey;
		async function getJSONResponse(body) {
			let fullBody = '';

			for await (const data of body) {
				fullBody += data.toString();
			}
			return JSON.parse(fullBody);
		}

		const result = await request(url + targetGameName + '/' + targetTagLine + url_suffix);
		const { puuid, gameName, tagLine } = await getJSONResponse(result.body) || {};
		console.log('puuid: ', puuid);
		console.log('gameName: ', gameName);
		console.log('tagLine: ', tagLine);
		interaction.reply('ingame name: ' + targetGameName + '\n' +
                            'tag: ' + targetTagLine + '\n' +
                            'puuid: ' + puuid + '\n' +
                            'gameName: ' + gameName + '\n' +
                            'tagLine: ' + tagLine);
	},
};