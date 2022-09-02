const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('testapi')
		.setDescription('test to fetch da api json'),
	async execute(interaction) {
		const data = { active: 'example' };
		const channel = interaction.client.channels.cache.get('1009958552892346378');
		fetch('https://immortal.zwoggel.org/api/json/charlist', {
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
					// const zanza = '921a8e63-79b6-416d-a424-e62d74211633';
					const property_keys = Object.keys(data);
					const property_values = Object.values(data);
					const property_entries = Object.entries(data);

					// const property_players = Object.keys(data.data);
					// const property_valuetest1 = Object.values(data.data);
					// const property_entries_data = Object.entries(data.data);

					// const property_players_serverparagon = Object.keys(data.data.server_paragon);
					// const property_value_serverparagon = Object.values(data.data.server_paragon);

					console.log('property_keys: ' + property_keys);
					console.log('property_values: ' + property_values);
					console.log('property_entries (Array): ' + property_entries);

					// console.log('property_players: ' + property_players);
					// console.log('property_players values: ' + property_valuetest1);
					// console.log('property_players entries (Array): ' + property_entries_data);

					// console.log('property_players serverparagon: ' + property_players_serverparagon);
					// console.log('property_players values serverparagon: ' + property_value_serverparagon);
					// let collection = [];
					// for (let i = 0; i < property_entries_data.length; i++) {
					// 	for (let j = 0; j < property_entries_data[i].length; j++) {
					// 		console.log('element_entry: ' + i + ' : ' + j + ' = ' + property_entries_data[i][j]);
					// 		collection = [i][1];
					// 		// not working with stringyfy
					// 		console.log('collection: ' + JSON.stringify(collection));
					// 	}
					// }

					// const stringified = JSON.stringify(property_entries);
					// console.log('stringified: ' + stringified);
				}
				catch (error) {
					console.log('reading object not successful');
					console.log(error);
				}
			})
			.catch((error) => {
				console.error('Error:', error);
			});
		channel.send('success');
	},
};