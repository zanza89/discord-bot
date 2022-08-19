// Require the necessary discord.js classes
const { Client, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'ping') {
		const sent = await interaction.reply({ content: 'Pinging...', fetchReply: true });
		interaction.editReply(`Roundtrip latency: ${sent.createdTimestamp - interaction.createdTimestamp}ms`);
	}
	else if (commandName === 'server') {
		await interaction.reply('Server name:' + interaction.guild.name + '\nTotal members: ' + interaction.guild.memberCount);
	}
	else if (commandName === 'user') {
		await interaction.reply('User tag:' + interaction.user.tag + '\nYour id:' + interaction.user.id);
	}
});

// client.on('guildMemberAdd', member => {
// 	member.createDM();
// 	member.dmChanel.send('Willkommen bei SoloLvLing');
// });

// Login to Discord with your client's token
client.login(token);