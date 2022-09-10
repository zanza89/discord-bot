const { SlashCommandBuilder, SelectMenuBuilder, EmbedBuilder, ActionRowBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('surveyclanfusion')
		.setDescription('starts a survey to all guild members'),
	async execute(interaction) {
		const embedOffi = new EmbedBuilder()
			.setColor(0x3498DB)
			.setAuthor({ name: 'Tona', iconURL: 'https://cdn.discordapp.com/avatars/123301130443685890/557b618fabe8a274f5eb1ca02924fd70.webp' })
			.setTitle('SoloLvLing - Clan Umfrage (geheim)')
			.setDescription('Hallo ihr Lieben!\n\nWie immer entscheiden alle zusammen. Die Wahl ist gheim, d.h. keiner sieht die Entscheidung des Anderen.')
			.setThumbnail('https://cdn.discordapp.com/attachments/987474227995230329/1012661919078952980/IMG_0128.png')
			.addFields({ name: 'Stimme für einen neuen Offizier!', value: 'wie Ihr sicherlich schon mitbekommen habt, ist durch durch den Austritt von Killernosdra ein Offi Poste im Clan frei geworden.\n Bitte erwählt einen Neuen aus einen der beiden Kandidaten.' },
				{ name: '#Pawnza', value: 'Er war der Clanleader seines früheren Schatten- Clans.' },
				{ name: '#Ralox', value: 'Er war Vize- Clanleiter in einem WoW- Clan.' },
			)
			.setURL('https://immortal.zwoggel.org');
		const embedFusion = new EmbedBuilder()
			.setColor(0x3498DB)
			.addFields({ name: 'Stimme für einen Clan- Transfer!', value: ' Bitte liest euch alles genau durch. Fragen könnt ihr gerne im DC Chat stellen! Klickt auf den Text und dann auf "Original Anzeigen" falls ihr Probleme mit Darstellung habt.' })
			.setImage('https://cdn.discordapp.com/attachments/987474227995230329/1017966098794164314/unknown.png')
			.setTimestamp();
		const actionrow = new ActionRowBuilder()
			.addComponents(
				new SelectMenuBuilder()
					.setCustomId('select_offi')
					.setPlaceholder('für Offizier nichts ausgewählt..')
					.addOptions(
						{
							label: '#Pawnza',
							description: 'ich stimme für Pawnza also Offizier',
							value: 'ich Stimme dafür Pawnza',
						},
						{
							label: '#Ralox',
							description: 'ich stimme für Ralox also Offizier',
							value: 'ich Stimme dafür Ralox',
						},
					),
			);
		const actionrow2 = new ActionRowBuilder()
			.addComponents(
				new SelectMenuBuilder()
					.setCustomId('select_fusion')
					.setPlaceholder('für Clan Fusion nichts ausgewählt..')
					.addOptions(
						{
							label: 'ja',
							description: 'ich stimme dafür',
							value: 'Ja - ich Stimme dafür',
						},
						{
							label: 'nein',
							description: 'ich stimme dagegen',
							value: 'Nein - ich Stimme dagegen',
						},
						{
							label: 'enthalten',
							description: 'ich enthalte mich der Stimme',
							value: 'ich enthalte mich der Stimme',
						},
					),
			);
		await interaction.channel.send({ content: '', ephemeral: true, embeds: [embedOffi], components: [actionrow] });
		await interaction.channel.send({ content: '', ephemeral: true, embeds: [embedFusion], components: [actionrow2] });
	},
};