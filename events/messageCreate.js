// const discord = require('discord.js');

module.exports = {
	name: 'messageCreate',
	execute(message) {
		// collect 'test'
		if (message.author.bot) return;

		// message.channel.send('bot is collecting messages now..');
		const filter = m => m.content.includes('?crystal-ocean');
		const collector = message.channel.createMessageCollector({ filter, maxProcessed: 5 });
		collector.on('collect', m => {
			console.log('collected message: ' + m.content);
		});

		collector.on('end', collected => {
			console.log('collected ' + collected.size + ' items');
		});
	},
};