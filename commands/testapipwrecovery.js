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
			const params = {
				discord_id: targetId,
				auth_token: 'ThisIsAToken',
			};
			const options = {
				method: 'POST',
				body: JSON.stringify(params),
			};
			fetch('https://immortal.zwoggel.org/api/json/reset_pw', options)
				.then(response =>
					response.json())
				.then(response => {
					console.log('Respone: ' + response);
					return response;
				});
		}
		async function destructure(targetId) {
			const { message, success, current_time, data } = await getJSONResponse(targetId) || {};
			console.log(message);
			console.log(success);
			console.log(current_time);
			console.log(data);
			return data;
		}
		const targetId = interaction.options.getUser('target').id;
		const data = destructure(targetId);
		Object.entries(data['code']);
		console.log('data : ' + data);
		// interaction.reply('Success: ' + success + '\nMessage: ' + message + '\nCurrent_Time: ' + current_time + '\nData: ' + data + '\nCode: ' + code);
		interaction.reply('see logs');
	},
};