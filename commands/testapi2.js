const { SlashCommandBuilder } = require('discord.js');
const { request } = require('undici');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('testapi2')
		.setDescription('test2 to fetch da api json using undici'),
	async execute(interaction) {
		async function getJSONResponse(body) {
			let fullBody = '';

			for await (const data of body) {
				fullBody += data.toString();
			}

			return JSON.parse(fullBody);
		}
		const immortalResult = request('https://immortal.zwoggel.org/api/json/charlist');
		const { list } = await getJSONResponse(immortalResult.body);
		if (!list.length) {
			return interaction.editReply('ERROR - No results found');
		}
		interaction.editReply(list[0]);
	},
};