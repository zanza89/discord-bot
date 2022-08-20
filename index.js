const fs = require('node:fs');
const path = require('node:path');

// Require the necessary discord.js classes
const { Client, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.commands = new Map();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	client.commands.set(command.data.name, command);
}

// When the client is ready, run this code (only once)
client.once('ready', c => {
	console.log('Ready! Logged in as ' + c.user.tag);
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	}
	catch (e) {
		console.error(e);
		await interaction.reply({ content: 'there was an error while executing this command!', ephermal:true });
	}
});

client.on('guildMemberAdd', member => {
	member.createDM();
	member.dmChanel.send('Willkommen bei SoloLvLing');
});

// Login to Discord with your client's token
client.login(token);