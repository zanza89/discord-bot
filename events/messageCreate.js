const discord = require('discord.js');

module.exports = {
	name: 'messageCreate',
	execute(message) {
		// collect 'test'
		if (message.author.bot) return;

		// message.channel.send('bot is collecting messages now..');
		const filter = m => m.content.includes('discord');
		const collector = discord.MessageCollector({ filter, maxProcessed: 5 });
		collector.on('collect', m => {
			console.log('collected message: ' + m.content);
		});

		collector.on('end', collected => {
			console.log('collected ' + collected.size + ' items');
		});
	},
};