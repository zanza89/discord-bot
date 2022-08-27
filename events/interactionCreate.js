module.exports = {
	name: 'interactionCreate',
	execute(interaction) {
		console.log(interaction.user.tag + ' in ' + interaction.channel.name + ' triggered an interaction.');
	},
},
{
	name: 'interactionUserContextMenuCommand',
	execute(interaction) {
		const name = interaction.targetUser.username;
		console.log('user ' + name + ' in ' + interaction.channel.name + ' responded to survey with ' + interaction.targetMessage);
	},
};