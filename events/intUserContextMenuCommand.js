module.exports = {
	name: 'interactionUserContextMenuCommand',
	execute(interaction) {
		const name = interaction.targetUser.username;
		console.log('user ' + name + ' in ' + interaction.channel.name + ' responded to survey with ' + interaction.targetMessage);
	},
};