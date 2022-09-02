module.exports = {
	name: 'messageCreate',
	execute(message) {
		// collect 'test'
		// if (message.author.bot) return;

		// const channel = message.client.channels.cache.get('1009960570683928627');
		// const filter = m => m.content.includes('immortal');
		// const collector = message.channel.createMessageCollector({ filter, maxProcessed: 5 });
		// collector.on('collect', m => {
		// 	console.log('collected message: ' + m.content);
		// 	channel.send(m.content);
		// });

		// collector.on('end', collected => {
		// 	console.log('collected ' + collected.size + ' items');
		// });

		console.log(message);
	},
};