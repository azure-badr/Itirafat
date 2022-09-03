const dotenv = require("dotenv")
dotenv.config()

module.exports = {
  "token": process.env.TOKEN,
  "tatsuApiKey": process.env.TATSU_API_KEY,
  "tatsuApiUrl": process.env.TATSU_API_URL,
  "clientId": process.env.CLIENT_ID,
  "guildId": process.env.GUILD_ID,
  "confessionsApprovalChannelId": process.env.CONFESSIONS_APPROVAL_CHANNEL_ID,
  "confessionsChannelId": process.env.CONFESSIONS_CHANNEL_ID,
  "approveEmoji": "<:tick:881813025642909726>",
  "rejectEmoji": "<:cross:881813465835130880>",
  "permissions": [
    {
      "id": "883256631629082684",
      "permissions": [{
        "id": "268597891071868928",
        "type": "ROLE",
        "permission": true
      }]
    },
    {
      "id": "883255902378029086",
      "permissions": [
        {
          "id": "268597891071868928",
          "type": "ROLE",
          "permission": true
        },
        {
          "id": "629242275972775956",
          "type": "ROLE",
          "permission": true
        },
        {
          "id": "409046980816273418",
          "type": "ROLE",
          "permission": true
        }
      ]
    }
  ]
}
