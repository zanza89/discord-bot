module.exports = {
	name: 'interactionCreate',
	execute(interaction) {
		if (!interaction.isChatInputCommand()) return;
		console.log(interaction.user.tag + ' in ' + interaction.channel.name + ' triggered an interaction.');

		if (!interaction.isButton()) return;
		console.log(interaction);

		if (!interaction.isSelectMenu()) return;
		console.log(interaction);
	},
};