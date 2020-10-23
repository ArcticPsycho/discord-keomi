const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client();
const prefix = "k!";

client.on("message", function(message) {
if (message.author.bot) return;
if (!message.content.startsWith(prefix) || message.author.bot) return;

const args = message.content.slice(prefix.length).trim().split(' ');
const command = args.shift().toLowerCase();
const commandBody = message.content.slice(prefix.length);

if (command === "ping") {
const timeTaken = Date.now() - message.createdTimestamp;
message.channel.send(`Pong! This message had a latency of ${timeTaken}ms.`);
} else if (message.content === `${prefix}beep`) {
		message.channel.send('Boop!');
	} else if (message.content === `${prefix}server`) {
		message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
	} else if (message.content === `${prefix}user info`)  {
		message.channel.send(`***Username:***  ${message.author.tag}\n***User ID:***  ${message.author.id}\n***Is this user a bot?:***  ${message.author.bot}\n***User created at:***  ${message.author.createdAt}`);
	} else if (command === 'args-info') {
	if (!args.length) {
		return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
	} else if (message.content === `${prefix}help`) {
		message.channel.send(`Hello! If you're having bot issues, please submit a ticket in the Keomi Support server, which can be found here: https://discord.gg/tctgKsq\nFor command help, please use k!commands!`) {

	message.channel.send(`Command name: ${command}\nArguments: ${args}`);
}
});
client.login(config.BOT_TOKEN);
