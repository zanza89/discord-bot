module.exports = {
	name: 'interactionCreate',
	execute(interaction, client) {
		console.log(interaction.user.tag + ' in ' + interaction.channel.name + ' triggered an interaction.');

		// selectMenu handling
		if (!interaction.isSelectMenu()) return;
		if (interaction.customId === 'select_logo') {
			interaction.update({ content: 'something was selected', components: [] });
			console.log(interaction.values);
			const destination = client.channels.cache.get('1013514283998523483');
			destination.send(interaction.user.tag + 'voted for Design' + interaction.value);
		}
	},
};