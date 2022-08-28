const discord = require('discord.js');

module.exports = {
	name: 'messageCreate',
	execute(message) {
		// collect 'test'
		if (message.author.bot) return;

		// message.channel.send('bot is collecting messages now..');
		const filter = m => m.content.includes('test');
		const collector = new discord.MessageCollector(message.channel, filter);
		collector.on('collect', m => {
			console.log('collected message: ' + m.content);
		});

	},
};