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
		// const [char_name, active, twink, paragon_level, discord_id, last_update] = Object.entries(data['984cefe0-5531-4690-919c-fa51d6009f48']);
		// console.log('char_name_tag' + ' = ' + char_name);
		// console.log('active_tag' + ' = ' + active);
		// console.log('twink_tag' + ' = ' + twink);
		// console.log('paragon_level_tag' + ' = ' + paragon_level);
		// console.log('discord_id_tag' + ' = ' + discord_id);
		// console.log('last_update_tag' + ' = ' + last_update);
		// console.log(discord_id[0, 1]);
		// keys array
		let keys = Array.apply(null, Array(100));
		keys = Object.keys(data).splice(1);
		console.log('keys: ' + keys + '\nsize: ' + keys.length);
		let counter = 0;
		// char_names array
		// discord_id array
		const charnames = Array();
		const discordids = Array();
		for (let i = 0; i < keys.length ; i++) {
			const [char_name, active, twink, paragon_level, discord_id, last_update] = Object.entries(data[keys[i]]);
			charnames.push(char_name[0, 1]);
			discordids.push(discord_id[0, 1]);
			console.log(active, twink, paragon_level, discord_id, last_update);
			counter++;
		}
		console.log('counter = ' + counter);
		console.log('charnames = ' + charnames);
		console.log('discordids = ' + discordids);

		// merge arrays
		const arrmerge = [[], []];
		console.log(arrmerge);
		console.table(arrmerge);
		console.log(charnames[0]);
		for (let i = 0; i < charnames.length; i++) {
			arrmerge[i] = charnames[i];
			for (let j = 1; j < charnames[i].length; j++) {
				arrmerge[i][j] = discordids[1];
			}
		}
		console.log(arrmerge);
		console.table(arrmerge);

		function createAndFillTwoDArray({
			rows,
			columns,
			value,
		}) {
			return Array.from({ length:rows }, () => (
				Array.from({ length:columns }, () => Array.push(value))
			));
		}
		let newarray = [];
		for (let i = 0; i < charnames.length; i++) {
			newarray = createAndFillTwoDArray({ rows:charnames.length, columns:2, value: charnames[i] });

		}

		console.table(newarray);

		// check if element in array
		// let el = 6;
		// let flag = false;
		// for (let i = 0; i < array.length; i++) {
		// 	if (el === array[i]) {
		// 		flag = 1;
		// 	}
		// }
		// // Check if flag value changed.
		// if (flag == true) {
		// 	console.log('Element Found');
		// } else {
		// 	console.log('Element Not Found');
		// }
		// const map = Object.entries(data).map(el => el.discord_id);
		// console.log(map);
		// console.log(map.get(discord_id));
	},
};