module.exports = {
	name: 'interactionCreate',
	execute(interaction) {
		console.log(interaction.user.tag + ' in ' + interaction.channel.name + ' triggered an interaction.');

		// selectMenu handling
		if (!interaction.isSelectMenu()) return;
		// moderator-chat
		const channel = interaction.client.channels.cache.get('985944666748891147');
		// id: select_logo
		if (interaction.customId === 'select_logo') {
			interaction.update({ content: 'Danke, du hast ein Logo ausgesucht!', components: [] });
			console.log(interaction.values);
			interaction.channel.send(interaction.user.tag + ' has voted for Design ' + interaction.values);
		}
		// id: select_fusion
		if (interaction.customId === 'select_fusion') {
			interaction.update({ content: 'Danke, du hast deine Stimme für die Clan- Fusion abgegeben', components: [] });
			channel.send(interaction.user.tag + ' hat abgestimmt: ' + interaction.values);
		}

		// id: select_offi
		if (interaction.customId === 'select_offi') {
			interaction.update({ content: 'Danke, du hast deine Stimme für Pawnza abgegeben', components: [] });
			channel.send(interaction.user.tag + ' hat abgestimmt: ' + interaction.values);
		}
	},
};