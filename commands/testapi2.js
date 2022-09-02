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
		// const immortalResult = await request('https://immortal.zwoggel.org/api/json/charlist');
		// const data = await getJSONResponse(immortalResult.data);
		// try {
		// 	const property_keys = Object.keys(data);
		// 	const property_values = Object.values(data);
		// 	const property_entries = Object.entries(data);

		// 	console.log('keys: ' + property_keys);
		// 	console.log('values: ' + property_values);
		// 	console.log('entries: ' + property_entries);
		// }
		// catch (error) {
		// 	console.log('there was a mistake happened');
		// 	console.log(error);
		// }
		// interaction.deferReply('...');

		const catResult = await request('https://aws.random.cat/meow');
		const { file } = await getJSONResponse(catResult.body);
		interaction.reply({ files: [file] });
	},
};