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
				.addUserOption(option => option.setName('target').setDescription('The user').setRequired(true)))
		.addSubcommand(subcommand =>
			subcommand
				.setName('marshalcommander')
				.setDescription('lists wether a of a specific guildmember the role "Techniker')
				.addUserOption(option => option.setName('target').setDescription('The user').setRequired(true))),
	async execute(interaction) {
		if (interaction.options.getSubcommand() === 'onlinemembers') {
			await interaction.guild.members.fetch({ withPresences: true }).then(fetchedMembers => {
				const totalOnline = fetchedMembers.filter(member => member.presence?.status === 'online');
				// Now you have a collection with all online member objects in the totalOnline variable
				console.log('There are currently ' + totalOnline.size + ' members online in this guild!');
				interaction.reply('online: ' + totalOnline.size);
			});
		}
		else if (interaction.options.getSubcommand() === 'allmembers') {
			// First use guild.members.fetch to make sure all members are cached
			interaction.guild.members.fetch({ withPresences: true }).then(fetchedMembers => {
				const totalMembers = fetchedMembers;
				// Now you have a collection with all online member objects in the totalOnline variable
				console.log(`There are currently ${totalMembers.size} members online in this guild!`);
				interaction.reply('total member: ' + totalMembers.size);
			});
		}
		else if (interaction.options.getSubcommand() === 'offlinemembers') {
			await interaction.guild.members.fetch({ withPresences: true }).then(fetchedMembers => {
				const totalOffline = fetchedMembers.filter(member => member.presence?.status === 'offline');
				// Now you have a collection with all online member objects in the totalOnline variable
				console.log('There are currently ' + totalOffline.size + ' members offline in this guild!');
				interaction.reply('offline: ' + totalOffline.size);
			});
		}
		else if (interaction.options.getSubcommand() === 'techniker') {
			const member = interaction.options.getMember('target');
			if (member.roles.cache.some(role => role.name === 'Techniker')) {
				await interaction.reply(member + ' has the role "Techniker"');
			}
			else {
				await interaction.reply(member + ' has not the role "Techniker"');
			}
		}
		else if (interaction.options.getSubcommand() === 'marshalcommander') {
			const member = interaction.options.getMember('target');
			if (member.roles.cache.some(role => role.name === 'Marshal/Commander')) {
				await interaction.reply(member + 'has the role "Marshal/Commander"');
			}
			else {
				await interaction.reply(member + ' has not the role "Marshal/Commander"');
			}
		}
	},
};