hiconst fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_47_07_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxNixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDc5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDc5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDQxLFxuICAgICAgICA0OCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxLFxuICAgICAgICA1MixcbiAgICAgICAgMTcwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxODksXG4gICAgICAgIDQ3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMSxcbiAgICAgICAgMTc1LFxuICAgICAgICA1OSxcbiAgICAgICAgNTEsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY5LFxuICAgICAgICAxNzksXG4gICAgICAgIDIyNyxcbiAgICAgICAgNjEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDQzLFxuICAgICAgICAyMSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwLFxuICAgICAgICAyMSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDQ0LFxuICAgICAgICA5OSxcbiAgICAgICAgMjMyLFxuICAgICAgICA3NCxcbiAgICAgICAgMTMzLFxuICAgICAgICA0NSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTIxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDcyLFxuICAgICAgICAxOCxcbiAgICAgICAgNDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgODEsXG4gICAgICAgIDYxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTIwLFxuICAgICAgICA1NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNSxcbiAgICAgICAgMTc5LFxuICAgICAgICA4OCxcbiAgICAgICAgOTcsXG4gICAgICAgIDMxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAzLFxuICAgICAgICAxMDksXG4gICAgICAgIDUxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDcsXG4gICAgICAgIDEzLFxuICAgICAgICAzNCxcbiAgICAgICAgMTc1LFxuICAgICAgICA4NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDI3LFxuICAgICAgICA3NixcbiAgICAgICAgMTA2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTMyLFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNjksXG4gICAgICAgIDM0LFxuICAgICAgICAxODIsXG4gICAgICAgIDU3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMixcbiAgICAgICAgMTg2LFxuICAgICAgICA2MCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDkyLFxuICAgICAgICAyNCxcbiAgICAgICAgOTAsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgODgsXG4gICAgICAgIDM1LFxuICAgICAgICAxNDksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTU5LFxuICAgICAgICA4MyxcbiAgICAgICAgMTk3LFxuICAgICAgICA4NSxcbiAgICAgICAgMTY0LFxuICAgICAgICA2MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNzEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDgxLFxuICAgICAgICA3MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjI1LFxuICAgICAgICA1NixcbiAgICAgICAgNTIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxODYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgODQsXG4gICAgICAgIDk4LFxuICAgICAgICAxNjksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxODEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjAzLFxuICAgICAgICA2MCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMixcbiAgICAgICAgMTM2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgOTFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDg1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMixcbiAgICAgICAgMjExLFxuICAgICAgICAzMSxcbiAgICAgICAgNyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNzksXG4gICAgICAgIDEyNyxcbiAgICAgICAgOTUsXG4gICAgICAgIDMzLFxuICAgICAgICA4MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTU0LFxuICAgICAgICA4LFxuICAgICAgICAxODcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxODUsXG4gICAgICAgIDM3LFxuICAgICAgICAzMyxcbiAgICAgICAgOTYsXG4gICAgICAgIDIyNixcbiAgICAgICAgODIsXG4gICAgICAgIDkyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDYyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDc1LFxuICAgICAgICAyMDksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjI4LFxuICAgICAgICA4NSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEyLFxuICAgICAgICAzOSxcbiAgICAgICAgODksXG4gICAgICAgIDY5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjIsXG4gICAgICAgIDQzLFxuICAgICAgICAwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjUwLFxuICAgICAgICA0NyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE2MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJNSTE4ZExpcjBMQ0tRWkZuZ3p3R21sYS83cG1zNG13V2RDYXBlb3FndGZFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzM0NjY5MDIzOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiODBGRUE2N0IxOEZEQjBBMjkxRUVDMTAyNUQ0QkY4NDhcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxMzgyNDcxXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkxLZnJjRWM5UmZlZDQ4ZDRnZGFhNWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZmM5YzNjYzctNTk2YS00M2Y4LWEwZmYtMGFlMDUyNmRiMjM1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxMCxcbiAgICAgIDIsXG4gICAgICAxOTQsXG4gICAgICA0OSxcbiAgICAgIDE0MixcbiAgICAgIDI1MixcbiAgICAgIDUxLFxuICAgICAgMTQyLFxuICAgICAgMzksXG4gICAgICAyNTQsXG4gICAgICAxNDUsXG4gICAgICAxNDYsXG4gICAgICAyMixcbiAgICAgIDExLFxuICAgICAgMTc0LFxuICAgICAgMTIzLFxuICAgICAgNjQsXG4gICAgICAxMDcsXG4gICAgICAyMDksXG4gICAgICAxNDFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjAzLFxuICAgICAgMjUsXG4gICAgICA2MSxcbiAgICAgIDE3LFxuICAgICAgMjAsXG4gICAgICAzNCxcbiAgICAgIDIwNCxcbiAgICAgIDExNSxcbiAgICAgIDIyNixcbiAgICAgIDEzMSxcbiAgICAgIDY0LFxuICAgICAgODgsXG4gICAgICA0OSxcbiAgICAgIDIzNCxcbiAgICAgIDczLFxuICAgICAgMTY5LFxuICAgICAgMTExLFxuICAgICAgMjMwLFxuICAgICAgMjE4LFxuICAgICAgMTkxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjc0NFdLMjI4XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMzNDY2OTAyMzk6MzNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJNdXNrYW5cIixcbiAgICBcImxpZFwiOiBcIjI2MzQ4ODA3MzEyMTkxMDozM0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLKy9xWklDRUwzczZMUUdHQWNnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlh5ZUNmTXpDNi9IWU1WQ05ocFZyT0FiZ2JRVnBRVW1URGJydmZhRnE2VUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiRHg2anRXdDdIUWIzbTBlYWlyb214UDhPTU8vc0VNYXUvQUZqSUgzUmg2ZVJ1UnJhenFTNzBhSk1hRlRjT3lOTEZ2UHV0K2xsWDNNZGpZemUvWnpxQUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwic0FJNTJHTjgyRVpKMWl1TzZiSXBXazVod1c3TUUwUlh3cnc5TnhNeTZYZkdTQURHNFgxUFFqdkliaXpqN0VSTWEzdk9valRqc2hnd2ZSenRld1BHaEE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMzQ2NjkwMjM5OjMzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDY0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjEzODI0NjYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFOQllcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU5CWS5qc29uIjogIntcImtleURhdGFcIjpcIm9uUkFLSFI1Z1pPOUw5N1I0aXBjVDQ0VGl2TGdFTjJra2ZZOGw5WlJYMzg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NTc1Mjk5NTAzLFwiY3VycmVudEluZGV4XCI6NCxcImRldmljZUluZGV4ZXNcIjpbMCwzLDRdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
