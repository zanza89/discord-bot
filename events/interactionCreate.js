const discord = require('discord.js');
const { ComponentType } = require('discord.js');
module.exports = {
	name: 'interactionCreate',
	execute(interaction, client) {
		console.log(interaction.user.tag + ' in ' + interaction.channel.name + ' triggered an interaction.');

		// selectMenu handling
		if (!interaction.isSelectMenu()) return;
		if (interaction.customId === 'select_logo') {
			interaction.update({ content: 'something was selected', components: [] });
			console.log(interaction);
			const collector = discord.InteractionCollector({ client, componentType: ComponentType.SelectMenu });
			collector.on('collect', i => {
				if (i.user.id === interaction.user.id) {
					i.reply(i.user.id + 'clicked on the ' + i.customId + ' button.');
				}
				else {
					i.reply({ content: 'These Menu isnt for you!', ephermal: true });
				}
			});
		}
	},
};