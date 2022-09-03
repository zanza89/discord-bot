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

		const result = await request('https://immortal.zwoggel.org/api/json/charlist');
		const { message, success, current_time, data } = await getJSONResponse(result.body);

		console.log('message : ' + message);
		console.log('success : ' + success);
		console.log('current_time : ' + current_time);
		console.log('data: ' + data);
		console.log('server_paragon : ' + data.server_paragon);
		console.log('char_name: ' + data['984cefe0-5531-4690-919c-fa51d6009f48'].char_name);
		console.log('active : ' + data['984cefe0-5531-4690-919c-fa51d6009f48'].active);
		console.log('twink : ' + data['984cefe0-5531-4690-919c-fa51d6009f48'].twink);
		console.log('paragon_level : ' + data['984cefe0-5531-4690-919c-fa51d6009f48'].paragon_level);
		console.log('discord_id : ' + data['984cefe0-5531-4690-919c-fa51d6009f48'].discord_id);
		console.log('last_update : ' + data['984cefe0-5531-4690-919c-fa51d6009f48'].last_update);
		interaction.reply(''
		+ 'char_name : ' + data['984cefe0-5531-4690-919c-fa51d6009f48'].char_name
		+ '\nactive : ' + data['984cefe0-5531-4690-919c-fa51d6009f48'].active
		+ '\ntwink : ' + data['984cefe0-5531-4690-919c-fa51d6009f48'].twink
		+ '\nparagon level : ' + data['984cefe0-5531-4690-919c-fa51d6009f48'].paragon_level
		+ '\ndiscordId : ' + data['984cefe0-5531-4690-919c-fa51d6009f48'].discord_id
		+ '\nlast updated : ' + data['984cefe0-5531-4690-919c-fa51d6009f48'].last_update);
		const [keys] = Object.keys(data);
		const [char_name, active, twink, paragon_level, discord_id, last_update] = Object.entries(data['984cefe0-5531-4690-919c-fa51d6009f48']);
		console.log('char_name_tag' + ' = ' + char_name);
		console.log('active_tag' + ' = ' + active);
		console.log('twink_tag' + ' = ' + twink);
		console.log('paragon_level_tag' + ' = ' + paragon_level);
		console.log('discord_id_tag' + ' = ' + discord_id);
		console.log('last_update_tag' + ' = ' + last_update);
		console.log(discord_id[0, 1]);
		console.log('keys: ' + keys);

		// const map = Object.entries(data).map(el => el.discord_id);
		// console.log(map);
		// console.log(map.get(discord_id));
	},
};