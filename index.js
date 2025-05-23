const { Client, GatewayIntentBits, Collection } = require('discord.js');
const config = require('./config');
const logger = require('./utils/logger');
const commandHandler = require('./handlers/commandHandler');
const eventHandler = require('./handlers/eventHandler');

// Keep-alive system for 24/7 uptime
require('./keepalive');

// Create Discord client with necessary intents
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildModeration
    ]
});

// Initialize collections for commands and music queues
client.commands = new Collection();
client.musicQueues = new Collection();
client.warnings = new Collection();
client.blacklist = new Collection();

// Initialize handlers
commandHandler(client);
eventHandler(client);

// Global error handling with auto-restart capability
process.on('unhandledRejection', error => {
    logger.error('Unhandled promise rejection:', error);
});

process.on('uncaughtException', error => {
    logger.error('Uncaught exception:', error);
    // Graceful restart instead of immediate exit
    setTimeout(() => {
        process.exit(1);
    }, 5000);
});

// Auto-reconnect on disconnect
client.on('disconnect', () => {
    logger.warn('Bot disconnected, attempting to reconnect...');
});

client.on('reconnecting', () => {
    logger.info('Bot reconnecting...');
});

// Keep-alive ping every 5 minutes to prevent timeout
setInterval(() => {
    if (client.ws.ping > 0) {
        logger.debug(`Heartbeat: ${client.ws.ping}ms`);
    }
}, 5 * 60 * 1000);

// Login to Discord
client.login(config.DISCORD_TOKEN)
    .then(() => {
        logger.info('Bot login successful');
    })
    .catch(error => {
        logger.error('Failed to login:', error);
        process.exit(1);
    });

module.exports = client;
