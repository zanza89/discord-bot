module.exports = {
	name: 'interactionCreate',
	execute(interaction) {
		console.log(interaction.user.tag + ' in ' + interaction.channel.name + ' triggered an interaction.');

		if (!interaction.isSelectMenu()) return;
		if (interaction.customId === 'select_logo') {
			interaction.update({ content: 'something was selected', components: [] });
			console.log(interaction);
		}
	},
};