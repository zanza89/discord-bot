module.exports = {
	name: 'guildMemberAdd',
	execute(member) {
		console.log('New User ' + member.user.username + ' has joined ' + member.guild.name);
		member.guild.channels.cache.find(c => c.name === 'verifizierung').send(member.user.tag + 'has joined this server');
	},
};