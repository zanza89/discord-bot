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
				fullBody += JSON.stringify(data);
			}

			return JSON.parse(fullBody);
		}
		const immortalResult = await request('https://immortal.zwoggel.org/api/json/charlist');
		// const char_name = 'char_name';
		// const data = 'data';
		// const ok = 'message';
		const response = await getJSONResponse(immortalResult.data[0][0]);
		try {
			const property_keys = Object.keys(response);
			const property_values = Object.values(response);
			const property_entries = Object.entries(response);

			console.log('keys: ' + property_keys);
			console.log('values: ' + property_values);
			console.log('entries: ' + property_entries);
		}
		catch (error) {
			console.log('there was a mistake happened');
			console.log(error);
		}
		interaction.deferReply('...');
	},
};