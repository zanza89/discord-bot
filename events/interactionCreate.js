module.exports = {
	name: 'interactionCreate',
	execute(interaction) {
		console.log(interaction.user.tag + ' in ' + interaction.channel.name + ' triggered an interaction.');

		// selectMenu handling
		if (!interaction.isSelectMenu()) return;
		if (interaction.customId === 'select_logo') {
			interaction.update({ content: 'Du hast abgestimmt!', components: [] });
			console.log(interaction.values);
			interaction.channel.send(interaction.user.tag + ' has voted for Design' + interaction.values);
		}
	},
};