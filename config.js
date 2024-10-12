const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923030215642";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_14_01_10_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDkxLFxuICAgICAgICA4MSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTM5LFxuICAgICAgICAyMzksXG4gICAgICAgIDEzMyxcbiAgICAgICAgNjcsXG4gICAgICAgIDY1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTksXG4gICAgICAgIDEwNSxcbiAgICAgICAgNTMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjI4LFxuICAgICAgICA1NixcbiAgICAgICAgNjUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc1LFxuICAgICAgICA4MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDQ1LFxuICAgICAgICA1OSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTk1LFxuICAgICAgICA2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxODUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjUyLFxuICAgICAgICA3NSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNjIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjExLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOCxcbiAgICAgICAgNDQsXG4gICAgICAgIDkyLFxuICAgICAgICAzMixcbiAgICAgICAgMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDU2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDYzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxODYsXG4gICAgICAgIDIxMixcbiAgICAgICAgOTYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTc0LFxuICAgICAgICAxNTksXG4gICAgICAgIDIyNixcbiAgICAgICAgMTU5LFxuICAgICAgICAyMzksXG4gICAgICAgIDI3LFxuICAgICAgICA0NyxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTAsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTEsXG4gICAgICAgIDg3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDI2LFxuICAgICAgICAxNCxcbiAgICAgICAgMTMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjEsXG4gICAgICAgIDQwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDYxLFxuICAgICAgICA5NSxcbiAgICAgICAgODcsXG4gICAgICAgIDczLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTIxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxODksXG4gICAgICAgIDEyMyxcbiAgICAgICAgODEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMSxcbiAgICAgICAgMjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDkzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjE4LFxuICAgICAgICA1NCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNDksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDkxLFxuICAgICAgICA0NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNSxcbiAgICAgICAgMzEsXG4gICAgICAgIDMsXG4gICAgICAgIDExMixcbiAgICAgICAgMTg5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjUyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDI5LFxuICAgICAgICA4OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDQwLFxuICAgICAgICAxOTksXG4gICAgICAgIDM3LFxuICAgICAgICA5MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDExNyxcbiAgICAgICAgNDcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE3NixcbiAgICAgICAgODQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjA4LFxuICAgICAgICA0NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDksXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDgwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA3N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTkxLFxuICAgICAgICA3MSxcbiAgICAgICAgMjIyLFxuICAgICAgICA5NCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxODMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjUyLFxuICAgICAgICA3OSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNjEsXG4gICAgICAgIDM4LFxuICAgICAgICA3LFxuICAgICAgICAxMjksXG4gICAgICAgIDEyOCxcbiAgICAgICAgOTksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDEwLFxuICAgICAgICAzNyxcbiAgICAgICAgNDUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNixcbiAgICAgICAgODQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDc2LFxuICAgICAgICAxMyxcbiAgICAgICAgNjYsXG4gICAgICAgIDI4LFxuICAgICAgICA4MyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDUxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDQzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDM5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTg3LFxuICAgICAgICAyOSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDc4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjVSVWswMWJKbGFndUtQd2xtaGhrOUNsbU1hdlRpeXRRYUlJbXBCa0dWYms9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMDMwMjE1NjQyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJDQzg0Qzk5QTAzQTRCRENGMDAxNjMzRkFDMDM2RDM5RVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3Mjg3NDE2OTBcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMwMzAyMTU2NDJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjVCRUUyMUU5MDdFNzhFQjIxNTk5NzNDMkYxQUE3NUNCXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyODc0MTY5MVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIzUzVQV0lzd1FGS01WNkR6NU9Vb0Z3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjAyYzM5MzZlLTVmNDYtNGY5NC04Y2M2LTMyOGE0MmE0NGUwY1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3MCxcbiAgICAgIDI0NSxcbiAgICAgIDIzMyxcbiAgICAgIDE5MSxcbiAgICAgIDEwOSxcbiAgICAgIDE1OSxcbiAgICAgIDk5LFxuICAgICAgOTEsXG4gICAgICAyMTEsXG4gICAgICAxMTQsXG4gICAgICAyNDIsXG4gICAgICAxMDEsXG4gICAgICAxMTIsXG4gICAgICA2NyxcbiAgICAgIDE5LFxuICAgICAgMjUsXG4gICAgICAxMDQsXG4gICAgICA3OCxcbiAgICAgIDI1MyxcbiAgICAgIDE3OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTksXG4gICAgICA3MSxcbiAgICAgIDE0NixcbiAgICAgIDE2NixcbiAgICAgIDE1OCxcbiAgICAgIDIwMSxcbiAgICAgIDk2LFxuICAgICAgMjA3LFxuICAgICAgMjA2LFxuICAgICAgMjE2LFxuICAgICAgMTksXG4gICAgICA4MCxcbiAgICAgIDIxMSxcbiAgICAgIDExOCxcbiAgICAgIDgxLFxuICAgICAgNTksXG4gICAgICAyNDQsXG4gICAgICA5NCxcbiAgICAgIDE0MixcbiAgICAgIDIwMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIyWUdTRFE2OVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMDMwMjE1NjQyOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIwMTkyODAyMTY4NDQ3MToyQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkhhbXphIFZvaHJhXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSTc4dHI4R0VMU0NxcmdHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJvR2pDblQrUVNiTm8xaTU4dkpVSWw1ZStPV280THpIK3Z6aWE5Rmo4NVRrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInF0TmtkNEQrRmJsZ08wN2ZVUUhDeURzUGNMZ2xLL1dMTnh2Y3ZTQ3NuQWRtNFpFTXdnUEc5MWQyOGJiaTB2Y1pXbXVPL2Q1NTdtVHpVVERqUUExWkFRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImh5c3hDM3UxdWlkOG9uNW1FZGRvRmNSS2ZxczJJdldTK0dZbXZRMEtPQVdMZTJDZ2h2enZhM29mVGRpaXlEVjI3NGJnaHR0K1dJOGc1RUhBMDl5SkFRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzAzMDIxNTY0MjoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA1NixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA1N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI4NzQxNjg4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSmlJXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKaUkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIzSGdMeVJJaHREeEdkaTZ6VG9kZGJrNjRuKzFUY3hLa1NCb00vUXJFa2ZVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE3NDM2MzM5MzQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyODc0MTY5MDc4NFwifSIKfQ==  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
