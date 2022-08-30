const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('list')
		.setDescription('lists ...')
		.addSubcommand(subcommand =>
			subcommand
				.setName('onlinemembers')
				.setDescription('lists all online members'))
		.addSubcommand(subcommand =>
			subcommand
				.setName('offlinemembers')
				.setDescription('lists all offline members'))
		.addSubcommand(subcommand =>
			subcommand
				.setName('allmembers')
				.setDescription('lists all members'))
		.addSubcommand(subcommand =>
			subcommand
				.setName('techniker')
				.setDescription('lists wether a of a specific guildmember the role "Techniker')
				.addUserOption(option => option.setName('target').setDescription('The user').setRequired(true))),
	async execute(interaction) {
		if (interaction.options.getSubcommand() === 'onlinemembers') {
			await interaction.reply('see in logs');
			await interaction.guild.members.fetch({ withPresences: true }).then(fetchedMembers => {
				const totalOnline = fetchedMembers.filter(member => member.presence?.status === 'online');
				// Now you have a collection with all online member objects in the totalOnline variable
				console.log('There are currently ' + totalOnline.size + ' members online in this guild!');
			});
		}
		else if (interaction.options.getSubcommand() === 'allmembers') {
			// todo
			await interaction.reply('not yet implemented');
		}
		else if (interaction.options.getSubcommand() === 'offlinemembers') {
			await interaction.reply('see in logs');
			await interaction.guild.members.fetch({ withPresences: true }).then(fetchedMembers => {
				const totalOffline = fetchedMembers.filter(member => member.presence?.status === 'offline');
				// Now you have a collection with all online member objects in the totalOnline variable
				console.log('There are currently ' + totalOffline.size + ' members offline in this guild!');
			});
		}
		else if (interaction.options.getSubcommand() === 'techniker') {
			const member = interaction.options.getMember('target');
			if (member.roles.cache.some(role => role.name === 'Techniker')) {
				await interaction.reply('this guildmember has the role "Techniker"');
			}
			else {
				await interaction.reply('this guildmember has not the role "Techniker"');
			}
		}
	},
};