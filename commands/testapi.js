const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('testapi')
		.setDescription('test to fetch da api json'),
	async execute(interaction) {
		const data = { username: 'example' };
		const channel = interaction.client.channels.cache.get('1009958552892346378');
		fetch('https://immortal.zwoggel.org/api/public/playerlist', {
			// eslint-disable-next-line no-inline-comments
			method: 'POST', // or 'PUT'
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((response) => response.json())
			// eslint-disable-next-line no-shadow
			.then((data) => {
				console.log('Success:', data);
				// const reviver = function(value) {
				// 	if (typeof value === 'undefined') { return null; }
				// 	if (value.match('<') || value.match('>') || value.match('z')) {
				// 		return 'aaaaa';
				// 	}
				// };
				try {
					const data_parsed = JSON.parse(data);
					console.log('data parsed: ' + data_parsed);
				}
				catch (error) {
					console.log('parse not successful');
					console.log(error);
				}
			})
			.catch((error) => {
				console.error('Error:', error);
			});
		channel.send('success');
	},
};