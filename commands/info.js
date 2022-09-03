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
			const [info] = data;
			const embed = new EmbedBuilder()
				.setColor(0x3498DB)
				.setTitle(info.char_name)
				.addFields(
					{ name: 'active', value: info.active },
					{ name: 'twink', value: info.twink },
					{ name: 'paragon level', value: info.paragon_level },
					{ name: 'discord ID', value: info.discord_id },
					{ name: 'last updated', value: info.last_update })
				.setTimestamp()
				.setFooter({ text: 'message ' + message + '\u00A9' + 'success: ' + success + '\u00A9' + 'current time: ' + current_time });

			interaction.reply({ embeds: [embed] });
		}
	},
};