const discord = require('discord.js');

module.exports = {
	name: 'messageCreate',
	execute(message) {
		// collect 'test'
		if (message.author.bot) return;

		// message.channel.send('bot is collecting messages now..');
		let counter = 0;
		const filter = m => m.content.includes('test');
		const collector = new discord.MessageCollector(message.channel, filter);
		collector.on('collect', m => {
			console.log('collected message: ' + m.content);
			// eslint-disable-next-line no-const-assign
			++counter;
			if (counter === 3) {
				collector.stop();
			}
		});

		collector.on('end', collected => {
			console.log('collected ' + collected.size + ' items');
		});
	},
};