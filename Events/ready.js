module.exports = (client) => {
    client.user.setPresence({
        game: {
            name: "Prendre les commandes"
        }
    });
};
