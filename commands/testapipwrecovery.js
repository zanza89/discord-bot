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
					return response;
				});
		}
		const targetId = interaction.options.getUser('target').id;
		const { message, success, current_time, data } = await getJSONResponse(targetId);
		const [code] = Object.entries(data[code]);
		interaction.reply('Success: ' + success + '\nMessage: ' + message + '\nCurrent_Time: ' + current_time + '\nData: ' + data + '\nCode: ' + code);
	},
};