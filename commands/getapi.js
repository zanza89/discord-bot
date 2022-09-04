const { SlashCommandBuilder } = require('discord.js');
const { request } = require('undici');
const { fs } = require('fs');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('getapi')
		.setDescription('test2 to fetch da api json using undici'),
	async execute(interaction) {
		async function getJSONResponse(body) {
			let fullBody = '';

			for await (const data of body) {
				fullBody += data.toString();
			}
			return JSON.parse(fullBody);
		}

		const filePath = '/data';
		const url = 'https://immortal.zwoggel.org/api/json/charlist';
		const result = await request(url);
		const { message, success, current_time, data } = await getJSONResponse(result.body);
		interaction.reply('api fetched from url' + url + '\nmessage : ' + message + '\nsuccess : ' + success + '\nserver_time' + current_time);

		let keys = Array.apply(null, Array(100));
		keys = Object.keys(data).splice(1);
		console.table('created aray keys: ' + keys + '\nsize: ' + keys.length);

		const keys_data = keys;
		fs.writeFile(filePath, keys_data, (err) => {
			if (err) {console.log('Error: ' + err);}
			else {console.log('Data (keys) written to' + filePath);}
		});

		const iterator = keys.keys();
		console.log('index of keys : ' + iterator);

		const charnames = Array();
		const discordids = Array();
		for (const key of iterator) {
			const [char_name, active, twink, paragon_level, discord_id, last_update] = Object.entries(data[keys[key]]);
			charnames.push(char_name[0, 1]);
			discordids.push(discord_id[0, 1]);
			console.log(active, twink, paragon_level, discord_id, last_update);
		}
		console.table('charnames = ' + charnames);
		console.table('discordids = ' + discordids);

		const charnames_data = charnames;
		fs.writeFile(filePath, charnames_data, (err) => {
			if (err) {console.log('Error: ' + err);}
			else {console.log('Data (charnames) written to' + filePath);}
		});

		const discordids_data = charnames;
		fs.writeFile(filePath, discordids_data, (err) => {
			if (err) {console.log('Error: ' + err);}
			else {console.log('Data (charnames) written to' + filePath);}
		});
		// // merge arrays
		// const arrmerge = [[], []];
		// console.log(arrmerge);
		// console.table(arrmerge);
		// console.log(charnames[0]);
		// for (let i = 0; i < charnames.length; i++) {
		// 	arrmerge[i] = charnames[i];
		// 	for (let j = 1; j < charnames[i].length; j++) {
		// 		arrmerge[i][j] = discordids[1];
		// 	}
		// }
		// console.log(arrmerge);
		// console.table(arrmerge);

		// function createAndFillTwoDArray({
		// 	rows,
		// 	columns,
		// 	value,
		// }) {
		// 	return Array.from({ length:rows }, () => (
		// 		Array.from({ length:columns }, () => value)
		// 	));
		// }
		// // let newarray = [];
		// for (let i = 0; i < charnames.length; i++) {
		// 	createAndFillTwoDArray({ rows:charnames.length, columns:2, value: charnames[i] });

		// }

		// console.table(newarray);

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