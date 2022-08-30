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
				.setName('allmembers')
				.setDescription('lists all members')),
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
	},
};