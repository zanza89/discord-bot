const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { request } = require('undici');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('info')
		.setDescription('Get info about a user or a server!')
		.addSubcommand(subcommand =>
			subcommand
				.setName('user')
				.setDescription('Info about a user')
			// eslint-disable-next-line no-mixed-spaces-and-tabs
			    .addUserOption(option => option.setName('target').setDescription('The user')))
		.addSubcommand(subcommand =>
			subcommand
				.setName('server')
				.setDescription('info about the server'))
		.addSubcommand(subcommand =>
			subcommand
				.setName('me')
				.setDescription('displays your clan activity')),
	async execute(interaction) {
		async function getJSONResponse(body) {
			let fullBody = '';

			for await (const data of body) {
				fullBody += data.toString();
			}
			return JSON.parse(fullBody);
		}
		if (interaction.options.getSubcommand() === 'user') {
			const user = interaction.options.getUser('target');
			if (user) {
				await interaction.reply('Username: ' + user.username + '\nID: ' + user.id);
			}
			else {
				await interaction.reply('Your username: ' + interaction.user.username + '\nYour ID: ' + interaction.user.id);
			}
		}
		else if (interaction.options.getSubcommand() === 'server') {
			const serverName = interaction.guild.name;
			const memberCount = interaction.guild.memberCount;
			const createdAt = interaction.guild.createdAt;
			await interaction.reply('clan name: ' + serverName + '\nmember count: ' + memberCount + '\ncreated At: ' + createdAt);
		}
		else if (interaction.options.getSubcommand() === 'me') {
			const result = await request('https://immortal.zwoggel.org/api/json/charlist');
			const { message, success, current_time, data } = await getJSONResponse(result.body);
			const [char_name, active, twink, paragon_level, discord_id, last_update] = Object.entries(data['921a8e63-79b6-416d-a424-e62d74211633']);
			const embed = new EmbedBuilder()
				.setColor(0x3498DB)
				.setTitle(char_name[0, 1].toString())
				.addFields(
					{ name: 'active', value: active[0, 1].toString() },
					{ name: 'twink', value: twink[0, 1].toString() },
					{ name: 'paragon level', value: paragon_level[0, 1].toString() },
					{ name: 'discord ID', value: discord_id[0, 1].toString() },
					{ name: 'last updated', value: last_update[0, 1].toString() })
				.setTimestamp()
				.setFooter({ text: 'message ' + message + ' success: ' + success + ' current time: ' + current_time });

			interaction.reply({ embeds: [embed] });
		}
	},
};