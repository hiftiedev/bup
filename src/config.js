module.exports = {
    client: {
        token: process.env.CLIENT_TOKEN,
        id: process.env.CLIENT_ID,
    },
    handler: {
        prefix: "?",
        deploy: true,
        commands: {
            prefix: true,
            slash: true,
            user: true,
            message: true,
        },
        mongodb: {
            uri: process.env.MONGODB_URI,
            toggle: false,
        },
    },
    users: {
        developers: ["853147823066578946"],
    },
    development: { 
        enabled: true,
        guild: "Enter your guild ID here or you can use .env",
    }, 
    messageSettings: {
        nsfwMessage: "The current channel is not a NSFW channel.",
        developerMessage: "You are not authorized to use this command.",
        cooldownMessage: "Slow down buddy! You're too fast to use this command.",
        notHasPermissionMessage: "You do not have the permission to use this command.",
        notHasPermissionComponent: "You do not have the permission to use this component.",
        missingDevIDsMessage: "This is a developer only command, but unable to execute due to missing user IDs in configuration file."
    }
};
