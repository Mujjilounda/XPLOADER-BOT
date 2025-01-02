  //project_name : XPLOADER
// @author : TYLOR
// @youtube : https://www.youtube.com/@heyits_tylor
// @instagram : heyits_tylor
// @telegram : t.me/heyits_tylor
// @github : Dark-Xploit
// @tiktok : heyits_tylor
// @whatsapp : +254754783972
//*
//* 
//=================================================//
const fs = require('fs')
const { color } = require('./lib/color')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//=================================================//
global.SESSION_ID = process.env.SESSION_ID || 'XPLOADER~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNE1GL0QzMGIrbVpBck1zYTlNbmxkNWpjOWhsVGVWOWVmeFFKVjdaNHRtST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZnFKYVVrZUFqSGtOOC9jZ1duQ2JtalBhclpMbzlsdHRNZXd5V3JaSDAxVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3Tml1dDYvditxT3NhYXA5Wmk2elg2SE05NEZMRVpVdDkzTzNoUkd4cjNNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUeUUxZ1NYR0UyNkR0ODJMR0dkMktMSUkxRTUyQ1VhNGhKQi9VSE5vK3c0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndNaE5qa3pKT1hxZ0ZPckFUUVZGeG9XTEVJZkFkK0RMSUxXZmltZ1Y1SGM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdVZFNaYnIxV1NxakxRSVZjd21ENVNjbFdsbHhGRkNTaFF1ZnB5TWhGaXM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUljakxicmhZZ0lYRTF5aGFyV0NIOWdqR3VWTnh4alJSUWRydm0rY0dXRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicXVTdUd1bENaZm52L1YyLy9yRFFWUS82dlZBbDlGd3dWaXkySDU4YkZEYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InA1aUJrb3cwcVY4cmJWK3laSUcrZGQyODhGY1FHMG12RitWYlp1MDlzTEJ4Z3QyaVdMczBPbjB4UHNTS1hGTTRVZ3Y5WG1FS1g0cHJSendhUHBIRWpRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTcwLCJhZHZTZWNyZXRLZXkiOiJHWlFqRHJvcE9FTmhzU3AyS2tPOGxsZnpkam85YllFNkxuZ1hCUmVCZm1vPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJxNG9qdEhENFFESzJkd3owUnNlSlpBIiwicGhvbmVJZCI6Ijc0NzMzZDQyLTQ4MTEtNDNlOS1hNzIyLThmOWQ5MTBmY2EzYyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1TjNxQldScjZ6T2dGRHAxYUtrZHBGMlBXSFU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid3MrTXBvaGJSU2RmVURXV1dZVlk4K3RTeHhvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkFBWVlURE5OIiwibWUiOnsiaWQiOiI5MjMwNTIyMDY0NjU6MTdAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2XoPCdmILwnZiH8J2XrvCdl7rwnZe68J2XtvCdl7nwlqOY8J2XpfCdl67wnZe78J2XtiDwnZe08J2XrvCdl7rwnZe28J2Xu/Cdl7QgyrjhtZciLCJsaWQiOiIxNTE0NTQwNjkzNDY1MzY6MTdAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPYmw3NnNDRU52TTI3c0dHQk1nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJTUUdKZTlWY0FzUjFWcXFYaGVYamlvalVJdHpLT2x1K0JXSk1EaTRsa0I4PSIsImFjY291bnRTaWduYXR1cmUiOiJROURocTMvTlRseWtLZUZrUTk1aWQ3UHFHNUlZUjU5OW5UOUNndThoNkV0OTYxeUlPS0tBSXEwRVR6NTkzSXoxUUJYVHVwbFBrQWxINlBmYzAwNkhEZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiMStDZEhHSFg5Q1pDL3JvbUdKZ2NBa1dIejAxaktXTDNzMHEwNlBnY083SmxtZDhyeHJSZTVEQjJ2VjU4VTdJRldtMnVLc3BETU5CVHI2UWxHeWlwamc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMwNTIyMDY0NjU6MTdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVWtCaVh2VlhBTEVkVmFxbDRYbDQ0cUkxQ0xjeWpwYnZnVmlUQTR1SlpBZiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczNTg0NTQ4MSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFFdmkifQ==' 
//Enter your Xploader session id here; must start with XPLOADER~

//=================================================//
global.botname = process.env.BOT_NAME || '᙭ᑭᒪOᗩᗪᗴᖇ ᗷOT' 
//Your desired bot name

//=================================================//
global.ownernumber = process.env.OWNER_NUMBER || '923052206465' 
//Type your number here

//=================================================//
global.ownername = process.env.OWNER_NAME || 'Muzammil' 
//Type your name here

//=================================================//
global.plink = process.env.PLINK || "https://www.instagram.com/heyits_tylor?igsh=YzljYTk1ODg3Zg=="

//=================================================//
global.wm = process.env.GL_WM || "©᙭ᑭᒪOᗩᗪᗴᖇ ᗷOT"

//=================================================//
global.packname = process.env.STICKER_PACK_NAME || "᙭ᑭᒪOᗩᗪᗴᖇ" 
//The sticker pack name

//=================================================//
global.author = process.env.STICKER_AUTHOR_NAME || "ᗷOT" 
//The sticker author name

//=================================================//
global.urldb =process.env.MONGODB_URL || ""
// just leave blank or enter a mongoDB url

//=================================================//
global.xprefix = process.env.PREFIX || '.' 
//Set your desired prefix

//=================================================//
global.mode = process.env.MODE || 'public';
// Set to 'private' to enable private mode, otherwise default is 'public'

//=================================================//
global.hituet = 0 
//=================================================//
global.autoviewstatus = process.env.AUTO_STATUS_VIEW || 'true'

//=================================================//
global.autoreactstatus = process.env.AUTO_STATUS_REACT || 'true'

//=================================================//
global.anticall = process.env.ANTI_CALL || 'false'

//=================================================//
global.welcome = process.env.WELCOME_MSG || 'false'

//=================================================//
global.statusemoji = process.env.STATUS_EMOJI || '💝'
//Set the emoji that you want to be reacted to status

//=================================================//
global.timezones = process.env.TIMEZONE || "Africa/Nairobi" 
//Don't edit this if you don't know!

//=================================================//
global.countrycode = process.env.COUNTRY_CODE || '254' 
//set your country code for functionality of blockforeign and antiforeign commands

//=================================================//
global.autoblockforeign = process.env.AUTO_BLOCK_FOREIGN || 'false';
// Set to 'true' to enable automatic blocking of foreign numbers

//=================================================//
global.gcantiforeign = process.env.GC_ANTI_FOREIGN || 'false';
// Set to 'true' to enable automatic removal of foreign numbers from groups

//=================================================//
global.autoread = process.env.AUTO_READ || 'false';
// Set to 'true' to enable automatic reading of messages

//=================================================//
//=================================================//
global.menustyle = process.env.MENU_STYLE || '2' 
// options 1, 2, 3, 4 or 5
// 1 = Document menu(Android only)
// 2 = Text only menu(Android & iOS)
//3 = Image menu with context(Android & iOS)
//4 = Image menu(Android & iOS)
//5 = Payment menu

//=================================================//
//Replies
global.mess = { 
  limit: '*Your limit is used up!*', 
  nsfw: '*Tell the admin to enable NSFW first!*', 
  done: '*Done*', 
  error: '*Sorry, I cannot perform that action!*', 
  success: '*©𝐗𝐩𝐥𝐨𝐚𝐝𝐞𝐫𝐁𝐨𝐭*', 
  premium: '*Only premium users can use this command!*', 
  owner: '*Apologies, only my owner can use this command!*', 
  group: '*This feature becomes available when you use it in a group!*', 
  admin: '*You’ll unlock this feature with me as an admin!*', 
  notadmin: '*This feature will work once you become an admin. A way of ensuring order!*' 
}
//=================================================//

//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(color(`Updated '${__filename}'`, 'red'))
  delete require.cache[file]
  require(file)
})
//=================================================//
