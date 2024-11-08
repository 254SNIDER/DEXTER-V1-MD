const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || '254740818798'  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://SithumKalhara:97531@cluster0.iva7dbo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'Sithumkalhara271@gmail.com'
global.github = 'https://github.com/Sithuwa/SITHUWA-MD'
global.location = 'Sri Lanka'
global.gurl = 'https://instagram.com' // add your username
global.sudo = process.env.SUDO || "254740818798"
global.devs = '254740818798';
global.website = 'https://github.com/Sithuwa/SITHUWA-MD' //wa.me/+94000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/15b1dd8aeaa47888d75d7.jpg'
module.exports = {
  sessionName: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0xweWxkaXB1Q01HOC8xaWo4RzJucU5kTGkzeHovNXhNZEwrdzdPQnBsQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWS9Wc2NQUDJBamhOcXJpYVcxY2IrSzZYK1o5cEI4NWs1WHordGR2ZkNoVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnTWNIdkVXd1NiaHZJNkNTMWlWai9tajNNWmtSb2pCK0FaTUtrM1haNmtrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYSHI2SHRlbnVwR2trdW1tV2RPMUMzQlJCNWo5MDB2UXZRcDNFZ3BaQmlBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNHYXQydU83REl4M2Q2R2tDUGRwa1NSZUZhdXJoSTBjMWdvUUJQc2huRWs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNrTitsb0I2UDV0QjBiR1dCL1FSNDZOdVdjQmpQd1ZaNFF5R1R5UmZ5M1k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEYvcjVFMSt3azMydTVtb2h0SUJ4MjE3Tks4L2I0bHFxU29HWFFtOGUzRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicWFrUnVRWnZiUklCKzN1MC9CL0syV2R3MFA3enkvaGVnRjRpMWFpRmFIYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InBoWXpLOGYxTVMwNTNtTUdoUERyUlBUR3pYSUlwMU1JL3VybExUL091d3JSc3FiQ1lIUWRNdW5RdlpuRHdLb1plZlVySUtwM0YyYVlUalZDYW0zM2pnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjI1LCJhZHZTZWNyZXRLZXkiOiIvN0NWaTVKT01VOEQwR1IrSlZhMmhRNU8yTVlzS21oa2MvN0FnZUJwdG5BPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NDc0MDgxODc5OEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBM0VBNzUzMEYyQzM3OEI5NEZBMTg4Qzg0MjdGRjA4MiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzMxMDY0Nzk3fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJXYnNadGlkRFRXV3JNb1BER080UnlnIiwicGhvbmVJZCI6IjZhODI3MTY5LTJmYjgtNDI3NS1iMjUwLTdjMmVmMTdiMDEwYiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0V0JEWXk3b2N6L2hIaTJXOHlFdk1JU1JWcXc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia3JOcVRuNGlzWTljQUhEUkFtYXJKUTZRUEh3PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkhCNU4xVlM5IiwibWUiOnsiaWQiOiIyNTQ3NDA4MTg3OTg6NkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiIkV2F3ZXJ1IPCfkoDwn5KAIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMZjhuYjBIRU12bnQ3a0dHQVlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJnczZVTFFDN01leUZYSGJFOCtRMXJyTStuVThGUnAwTTNjMnhBS0NtWTI4PSIsImFjY291bnRTaWduYXR1cmUiOiJHTmJadklUQ2pxOVNZb3ZCYzFJTDFWRDYwbm9XVWI5YTNCMzFBdnVCUmpnSzg2azUwMnI3STAzZ0wybU01dU95NUZxTVFIT1lZM3hzUU9nZ3Mrc25CQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiL25KMVBRcElJM0dIaVJwblFoTVBzYzRmdkZOdXJzUitwOXJoY0tSbG1XczIxclhTTFAvV3BtMVlnNEdhZUxvL1ZMQ21MNVR1WncwWE14Y2pPZk5UaXc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTQ3NDA4MTg3OTg6NkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJZTE9sQzBBdXpIc2hWeDJ4UFBrTmE2elBwMVBCVWFkRE4zTnNRQ2dwbU52In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMxMDY0NzkzLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUNkQiJ9",      //Put Your Session Id Here
  author:  process.env.PACK_AUTHER ||  'Toxical☠💀',
  packname:  process.env.PACK_NAME || 'MADE BY Darkace',
  
  botname:   process.env.BOT_NAME === undefined ? "TOXICAL -MD💀💀" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'Dark Ace 254' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '254' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  caption :process.env.CAPTION || "\t*•ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱɪᴛʜᴜᴡᴀ-ᴍᴅ•* ",   //*『sᴜʙsᴄʀɪʙᴇ • ʙʟᴀᴅᴇ ᴛᴇᴄʜ』*\n youtube.com/@blade444"),	
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'sithuwa-md',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
 
