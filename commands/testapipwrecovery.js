const { SlashCommandBuilder } = require('discord.js');
const { request } = require('undici');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('testapipwrecovery')
		.setDescription('password recovery')
		.addUserOption(option =>
			option
				.setName('target')
				.setDescription('the user targeted')
				.setRequired(true)),
	async execute(interaction) {
		async function destructure(url_api) {
			const { statusCode, headers, trailers, body } = await request(url_api) || {};
			console.log('response received ', statusCode);
			console.log('headers: ', headers);
			for await (const data of body) {
				console.log('data', data);
			}
			console.log('data json: ', await body.json());
			console.log('trailers', trailers);
		}
		const url_api = 'https://immortal.zwoggel.org/api/json/reset_pw';
		// const targetId = interaction.options.getUser('target').id;
		destructure(url_api);
		// date keys
		// let datakeys = Array.apply(null, Array(100));
		// datakeys = Object.keys(data);
		// console.table('data keys: ' + datakeys);
		// // data enries
		// const dataentries = Object.entries(data['code'[0]]);
		// console.log('data entries: ' + dataentries);
		// interaction.reply('Success: ' + success + '\nMessage: ' + message + '\nCurrent_Time: ' + current_time + '\nData: ' + data + '\nCode: ' + code);
		interaction.reply('see logs');
	},
};