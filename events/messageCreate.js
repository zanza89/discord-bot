const discord = require('discord.js');

module.exports = {
	name: 'messageCreate',
	execute(message) {
		// log every message in console
		// console.log(message.content);
		// console.log(message.createdAt.toDateString());
		// console.log(message.author.tag);

		// use collection class
		if (message.author.bot) return;
		if (message.content.toLowerCase() === '?listen') {
			message.channel.send('bot is collecting messages now..');
			const filter = m => m.content.includes('test');
			const collector = new discord.MessageCollector(message.channel, filter);
			collector.on('collect', m => {
				console.log('collected message: ' + m.content);
			});
		}
	},
};