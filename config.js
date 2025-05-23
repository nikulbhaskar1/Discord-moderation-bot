require('dotenv').config();

module.exports = {
    // Discord Configuration
    DISCORD_TOKEN: process.env.DISCORD_TOKEN || '',
    CLIENT_ID: process.env.CLIENT_ID || '',
    
    // Spotify Configuration
    SPOTIFY_CLIENT_ID: process.env.SPOTIFY_CLIENT_ID || '',
    SPOTIFY_CLIENT_SECRET: process.env.SPOTIFY_CLIENT_SECRET || '',
    
    // YouTube Configuration
    YOUTUBE_API_KEY: process.env.YOUTUBE_API_KEY || '',
    
    // Bot Configuration
    PREFIX: process.env.PREFIX || '!',
    OWNER_ID: process.env.OWNER_ID || '1234567890123456789',
    
    // Auto-moderation settings
    AUTO_MOD: {
        SPAM_THRESHOLD: 5,
        CAPS_THRESHOLD: 0.7,
        MAX_MENTIONS: 5,
        LINK_WHITELIST: ['discord.gg', 'youtube.com', 'spotify.com']
    },
    
    // Music settings
    MUSIC: {
        MAX_QUEUE_SIZE: 100,
        DEFAULT_VOLUME: 0.5,
        MAX_SONG_DURATION: 10 * 60 * 1000,
        SEARCH_RESULTS_LIMIT: 5
    },
    
    // Colors for embeds
    COLORS: {
        SUCCESS: 0x00ff00,
        ERROR: 0xff0000,
        WARNING: 0xffff00,
        INFO: 0x0099ff,
        MUSIC: 0x9b59b6,
        MODERATION: 0xe74c3c
    }
};
