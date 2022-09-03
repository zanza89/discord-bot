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
			fullBody.replace('984cefe0-5531-4690-919c-fa51d6009f48', 'andieine');
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
		const result = await request('https://immortal.zwoggel.org/api/json/charlist');
		const { message, success, current_time, data } = await getJSONResponse(result.body);
		// if (!list.length) {
		// 	return interaction.editReply('error 404');
		// }
		console.log('message : ' + message);
		console.log('success : ' + success);
		console.log('current_time : ' + current_time);
		console.log('data: ' + data);
		console.log('server_paragon : ' + data.server_paragon);
		console.log('user1_name : ' + data.andieine);
		const { char_name, active, twink, paragon_level, discord_id, last_update } = data.andieine;
		console.log('char_name : ' + char_name);
		console.log('active : ' + active);
		console.log('twink : ' + twink);
		console.log('paragon_level : ' + paragon_level);
		console.log('discord_id : ' + discord_id);
		console.log('last_update : ' + last_update);
		interaction.reply('logs');
	},
};