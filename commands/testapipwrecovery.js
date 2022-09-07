const { SlashCommandBuilder } = require('discord.js');
const { fetch } = require('undici');

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
		async function getJSONResponse(targetId) {
			const api = 'https://immortal.zwoggel.org/api/json/reset_pw';
			const rsp = await fetch(api, {
				method: 'POST',
				headers: {
					'content-type': 'application/json',
				},
				body: JSON.stringify({
					discord_id: targetId,
					auth_token: 'ThisIsAToken',
				}),
			});
			if (rsp.status !== 200) {
				console.log(rsp.status, 'Anfrage fehlgeschlagen');
				return;
			}
			const json = await rsp.json();
			console.log(rsp.status, json);
			return JSON.parse(rsp);
		}
		const targetId = interaction.options.getUser('target').id;
		const { message, success, current_time, data } = await getJSONResponse(targetId);
		const [code] = Object.entries(data[code]);
		interaction.reply('Success: ' + success + '\nMessage: ' + message + '\nCurrent_Time: ' + current_time + '\nData: ' + data + '\nCode: ' + code);
	},
};