require('dotenv').config()
const { decryptMedia, client } = require('@open-wa/wa-decrypt')
const fs = require('fs-extra')
const ffmpeg = require('fluent-ffmpeg')
const axios = require('axios')
const moment = require('moment-timezone')
const getYouTubeID = require('get-youtube-id')
const os = require('os')
const get = require('got')
const isPorn = require('is-porn')
const speed = require('performance-now')
const fetch = require('node-fetch')
//const { spawn, exec } = require('child_process')
const nhentai = require('nhentai-js')
const { API } = require('nhentai-api')
const google = require('google-it')
const translatte = require('translatte')
const { stdout } = require('process')
const Math_js = require('mathjs');
const imageToBase64 = require('image-to-base64')
const bent = require('bent')
const request = require('request')
const emojiUnicode = require("emoji-unicode")
const googleIt = require('google-it');
const ytdl = require('ytdl-core');
const mysql = require('mysql')
const IG = require('./api/ig.js')
const ZODIAK = require('./api/zodiak.js')
const PIN = require('./api/pin.js')
const h2p = require('html2plaintext');
const { spawn, execFile } = require('child_process')
const BRAINLY = require(`./api/brainly.js`);
const TikTokScraper = require('tiktok-scraper')
const meme = require('./lib/meme')
const toxic = require('./lib/toxic')
const quotedd = require('./lib/database/quote')
const color = require('./lib/color')
const exec = require('await-exec')
const webp = require('webp-converter')
const Exif = require('./utils/exif')
const exif = new Exif()
const urlShortener = require('./lib/shortener')
const getLocationData = require('./utils/location')
const { addFilter, isFiltered } = require('./lib/msgFilter')
//const msgFilter = require('./lib/msgFilter')

const { RemoveBgResult, removeBackgroundFromImageBase64, removeBackgroundFromImageFile } = require('remove.bg')
const { liriklagu, quotemaker, randomNimek, fb, sleep, jadwalTv, fdci, ss, translate, randNominal, getStickerMaker, gasNulis, genUniqueId, generate, gasNulisFolio, getRandomText, processTime, nulis} = require('./lib/functions')
const { downloader, GetAccesToken, getGuestToken, getAktivate, getToken, startConvert, base64Only, getBase64, base64MimeType } = require('./lib/functions')

let tiktok_user = ('reemarmartin,vienbabinaaa,heart_juzmin,chikakiku,akuansellma,slzanblaa,sherylllvly,bbycky,ngelsk,salmanagibs').split(',')
var CreateMYSQL = mysql.createConnection(
    {host: "127.0.0.1", user: "root", password: "", database: "bot_whatsapp", charset: 'utf8mb4'}
);

const cekResi = require('./lib/cekResi')
const images = require('./lib/images')
const rugAapi = require('./lib/rugaApi')
const nobg = require('./lib/nobg')
const nsfww = require('./lib/nsfww')
const canvas = require('canvacord')

var util = require('util')
var Jimp = require('jimp');

const { 
    help, 
    snk, 
    info, 
    donatee, 
    readme, 
    listChannel, 
    menuadmin, 
    rules, 
    mit, 
    own,
    piloot,
    bahasalist, 
    premfitur 
    } = require('./lib/help')

const {
    instagram,
    tiktok,
    facebook,
    smule,
    starmaker,
    twitter,
    joox
    } = require('./lib/downloader')

const {
    stickerburn,
    stickerlight
    } = require('./lib/sticker')

const { 
    uploadImages, 
    custom
    } = require('./lib/fetcher')

// LOAD FILE
let truth = JSON.parse(fs.readFileSync('./lib/database/truth.json'))
let dare = JSON.parse(fs.readFileSync('./lib/database/dare.json'))
let banned = JSON.parse(fs.readFileSync('./lib/database/banned.json'))
let nsfw_ = JSON.parse(fs.readFileSync('./lib/database/nsfwz.json'))
let limit = JSON.parse(fs.readFileSync('./lib/database/limit.json'))
let welkom = JSON.parse(fs.readFileSync('./lib/database/welcome.json'))
let left = JSON.parse(fs.readFileSync('./lib/database/left.json'))
let muted = JSON.parse(fs.readFileSync('./lib/database/muted.json'))
let setting = JSON.parse(fs.readFileSync('./lib/database/setting.json'));
let msgLimit = JSON.parse(fs.readFileSync('./lib/database/msgLimit.json'));
let adminNumber = JSON.parse(fs.readFileSync('./lib/database/admin.json'))
let premium = JSON.parse(fs.readFileSync('./lib/database/prem.json'))
let _biodata = JSON.parse(fs.readFileSync('./lib/database/biodata.json'))
let _registered = JSON.parse(fs.readFileSync('./lib/database/registered.json'))
let taxax = JSON.parse(fs.readFileSync('./lib/database/bacotdb.json'))
let autostick = JSON.parse(fs.readFileSync('./lib/database/autostick.json'))
let say = JSON.parse(fs.readFileSync('./lib/database/say.json'))
const pilot = JSON.parse(fs.readFileSync('./lib/database/pilot.json'))
const bacot = require('./lib/database/bacotdb.json')
let { commandArray } = require('./lib/template.js');
const sticker = require('./lib/sticker.js')
const stickerArr = ['XM1N7CiW1xxkL8Oi6sCD2+xECehai2DI4bE37I7PIhw=', 'toFAeTndmqlzGRdBUY4K2EAnLdwCqgGF7nmMiaAX2Y0=', 'UWK/E5Jf/OLg+zFgICX3bwXc0iXfPEZ+PDDf0C+3Qvw=', 'BfppV7tESHi/QmrxuJG4WdXKYsO3lNTiXf0aBfasJ4E=', 'mHbEuCjA+RVWftr2AFuLieAJcyHYZnibd7waZPqvDNQ=']
const sendSticker = require('./sendSticker')

const process = require('process');
//-----------------------process-----------------------//

const unhandledRejections = new Map();
process.on('unhandledRejection', (reason, promise) => {
  unhandledRejections.set(promise, reason);
})
process.on('rejectionHandled', (promise) => {
  unhandledRejections.delete(promise);
})
process.on('Something went wrong', function (err) {
  console.log('Caught exception: ', err)
})
process.on('unhandledRejection', (reason, promise) => {
  console.log('Unhandled Rejection at:', promise, 'reason:', reason)
})

//-----------------------process-----------------------//

// PROTECT
let antilink = JSON.parse(fs.readFileSync('./lib/database/antilink.json'))
let antibadword = JSON.parse(fs.readFileSync('./lib/database/antibadword.json'))
//let antisticker = JSON.parse(fs.readFileSync('./lib/database/antisticker.json'))
let msgBadword = JSON.parse(fs.readFileSync('./lib/database/msgBadword.json'))
let badword = JSON.parse(fs.readFileSync('./lib/database/badword.json'))
let stickerspam = JSON.parse(fs.readFileSync('./lib/database/stickerspam.json'))

let { 
    limitCount,
    memberLimit, 
    groupLimit,
    banChats,
    barbarkey,
    vhtearkey,
    melodickey,
    tobzkey,
    restartState: isRestart,
    mtc: mtcState
    } = setting

//Nurutomo
const wav = require('node-wav')
const path = require('path')
const Utils = require('web-audio-api/build/utils')
const FormData = require('form-data')
const sharp = require('sharp')
const puppeteer = require('puppeteer')
const { Readable, Writable } = require('stream')
const { fromBuffer } = require('file-type')
const { sizeFormatter } = require('human-readable')
const format = sizeFormatter({
    std: 'JEDEC', // 'SI' (default) | 'IEC' | 'JEDEC'
    decimalPlaces: 2,
    keepTrailingZeroes: false,
    render: (literal, symbol) => `${literal} ${symbol}B`,
})
const ytIdRegex = /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/
var config = {
    downloadStatus: false, // Curi Status Orang :|
    devMode: false, // true,
    msg: {
        notAdmin: '🔰 Maaf anda bukan admin grup',
        notGroup: '👨‍👩‍👧‍👦 Fitur ini hanya bisa digunakan di grup',
        notBotAdmin: '🔰 Bot belum menjadi admin grup',
        notURL: '🌐 Tidak ada URL',
        noMedia: '📷 Tidak ada Media',
        noArgs: '❓ Tidak ada argumen',
        noJid: '❓ Tidak ada @user yang disebut',
        notAllowed: `❌ Fitur ini tidak bisa kamu gunakan`,
        add: '➕ Menambahkan:\n',
        remove: '➖ Mengeluarkan:\n',
        promote: '🔰 Menambahkan:\n',
        demote: '🙍‍♂️ Menurunkan:\n',
        self: 'Kok aku?',
        dev: '👨‍💻 Fitur masih dalam tahap pengembangan 🔧',
        devOff: '🔧 Fitur dinonaktifkan oleh developer',
        groupOff: '❌ Fitur dinonaktifkan untuk grup ini',
        success: '✅ Sukses',
        success: '❌ Gagal',
        list: value => `- ${value}`,
        promoteEach: user => `- @${user} menjadi Admin 🔰`,
        demoteEach: user => `- @${user} menjadi Member 🙍‍♂️`,
        promoteFail: user => `- @${user} sudah menjadi Admin 🔰`,
        demoteFail: user => `- @${user} sudah menjadi Member 🙍‍♂️`,
        promoteFormat: (success, failed) => config.msg.promote + success.map(config.msg.promoteEach).join('\n') + '\n' + failed.length > 0 ? failed.map(config.msg.promoteFail).join('\n') : '',
        demoteFormat: (success, failed) => config.msg.demote + success.map(config.msg.demoteEach).join('\n') + '\n' + failed.length > 0 ? failed.map(config.msg.demoteFail).join('\n') : '',
        yt: (title, filesize) => `*${title}*\n\n💾 Filesize: ${filesize}`,
        recommend: (prefix, command) => `Direkomendasikan pakai *${prefix + command}*`,
        sizeExceed: size => `❌ Ukuran file melebihi batas yang ditentukan\n💾 Filesize: *${size}*\n📈 Limit: *${config.sizeLimit} MB*`,
        waitConvert: (a, b, desc) => `⏱ Tunggu beberapa detik!\nSedang melakukan proses konversi *${a}* → *${b}*${desc ? `\n\n${desc.split('\n').map(v => `_${v}_`).join('\n')}` : ''}`,
        broadcast: (sender, msg) => `📢 *BROADCAST* 📢\n_From: @${sender.id}_\n\n${msg}`,
        error: e => `⚠ *ERROR* ⚠\n\n${e}`,
        
    },
    iklan: [
        'Anda butuh API? Sini aja:v https://st4rz.herokuapp.com (Iklan by https://wa.me/6285221100126)',
        // 'Grup: https://chat.whatsapp.com/EN08hYxatxgJXdxo9dsART',
        'Github: https://github.com/Nurutomo/nbot-wa',
        'API: https://repl.it/@Nurutomo/MhankBarBar-Api',
    ],
    stickerGIF: {
        fps: 15, // Lumayan
        quality: 90, // Buriq?
        target: '1M',
        duration: 10 // Detik (Durasi Maksimal)
    },
    sizeLimit: -Infinity, // Megabytes
    API: {
        mhankbarbar: {
            url: 'https://mhankbarbars-api--nurutomo.repl.co',
            ig: '/api/ig',
        }
    },
    features: {
        ytv: false,
        yta: false
    }
}

let state = {
    status: () => {
        if(banChats){
            return 'Nonaktif'
        }else if(mtcState){
            return 'Nonaktif'
        }else if(!mtcState){
            return 'Aktif'
        }else{
            return 'Aktif'
        }
    }
}

prefix = '.'
var timeStart = Date.now() / 1000
moment.tz.setDefault('Asia/Jakarta').locale('id')

module.exports = iluser = async (iluser, message) => {
    try {
        const { 
        	type, 
        	id, 
        	from, 
        	t, 	
        	sender, 
        	isGroupMsg, 
        	chat, 
        	chatId, 
        	caption, 
        	isMedia, 
        	mimetype, 
        	quotedMsg, 
        	quotedMsgObj, 
        	author, 
        	mentionedJidList 
        } = message

        let { body } = message
        //const dari = sender && sender.isMe ? to : from //biar selfbot ceunah
        const { name, formattedTitle } = chat
        let { pushname, verifiedName } = sender
        pushname = pushname || verifiedName
        const commands = caption || body || ''
        const chats = (type === 'chat') ? body : (type === 'image' || type === 'video') ? caption : ''
        const argx = commands.toLowerCase()
        const args =  commands.split(' ')
        const command = commands.toLowerCase().split(' ')[0] || ''
        const ar = args.map((v) => v.toLowerCase())
        const q = args.join(' ')
        global.prefix

        const time = moment(t * 1000).format('DD/MM HH:mm:ss')
        const timu = moment(t * 1000).format('DD/MM/YYYY');
        const timi = moment(t * 1000).add(30, 'days').calendar();
        const timii = moment(t * 1000).add(61, 'days').calendar();
        const botNumber = await iluser.getHostNumber()
        const blockNumber = await iluser.getBlockedIds()
        const groupId = isGroupMsg ? chat.groupMetadata.id : ''
        const groupAdmins = isGroupMsg ? await iluser.getGroupAdmins(groupId) : ''
        const isGroupAdmins = isGroupMsg ? groupAdmins.includes(sender.id) : false
        const isBotGroupAdmins = isGroupMsg ? groupAdmins.includes(botNumber + '@c.us') : false
        const SN = GenerateSerialNumber("000000000000000000000000")

        const reply = async (message) => iluser.reply(chatId, message, id, true)
        const isPremium = premium.includes(sender.id)
        const pendaftar = JSON.parse(fs.readFileSync('./lib/database/user.json'))

        const isMe = true
        const isBanned = banned.includes(sender.id)
        const isBlocked = blockNumber.includes(sender.id)
        const isNsfw = isGroupMsg ? nsfw_.includes(chat.id) : false
        global.pollfile = 'poll_Config_' + chat.id + '.json'
        global.voterslistfile = 'poll_voters_Config_' + chat.id + '.json'
        const uaOverride = 'WhatsApp/2.2029.4 Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36'
        const isUrl = new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/gi)
        const url = args.length !== 0 ? args[0] : ''


        const isQuotedImage = quotedMsg && quotedMsg.type === 'image'
        const isQuotedVideo = quotedMsg && quotedMsg.type === 'video'
        const isQuotedAudio = quotedMsg && (quotedMsg.type === 'audio' || quotedMsg.type === 'ptt' || quotedMsg.type === 'ppt')
        const isQuotedFile = quotedMsg && quotedMsg.type === 'document'
        const isImage = /^image/.test(mimetype)
		const isVideo = /^video/.test(mimetype)
		const isQuotedSticker = quotedMsgObj && quotedMsgObj.type === 'sticker'
        const isQuotedGif = quotedMsg && quotedMsg.mimetype === 'image/gif'
        const isBadword = badword.includes(chatId)
        body = (type === 'chat' && body.startsWith(prefix)) ? body : (((type === 'image' || type === 'video') && caption) && caption.startsWith(prefix)) ? caption : ''
        const arg = body.substring(body.indexOf(' ') + 1)
        const isautosticker = autostick.includes(chatId)
        const GroupLinkDetector = antilink.includes(chatId)
       // const AntiStickerSpam = antisticker.includes(chatId)
        const isPrivate = sender.id === chat.contact.id
        const stickermsg = message.type === 'sticker'
        const isCmd = command.startsWith(prefix)

        const tms = (Date.now() / 1000) - (timeStart);
        const cts = waktu(tms)

        const serial = sender.id
        const pengirim = JSON.parse(fs.readFileSync('./lib/database/user.json'))
        var cek = pengirim.includes(sender.id);
        const uwong = pengirim[Math.floor(Math.random() * pengirim.length)];
        const isAdmin = adminNumber.includes(sender.id)
        const ownerNumber = '6283142933894@c.us'
        const isOwner = ownerNumber.includes(sender.id)

        const pilotNumber = JSON.parse(fs.readFileSync('./lib/database/pilot.json'))
        const isPilot = pilot.includes(sender.id)
        
        // ANTI GRUPOS && ANTI PORNO
        if (isGroupMsg && GroupLinkDetector && !isGroupAdmins && !isOwner && !isPilot){
            if (chats.match(/(https?:\/\/chat.whatsapp.com)/gi)) {
                await iluser.reply(message.from, `*GROUP LINK DETECTOR*\n\nSedang memverifikasi link...`, message.id)
                await sleep(3000) 
                const check = await iluser.inviteInfo(chats)
                if (check.status == 200) {
                    await iluser.reply(message.from, `Link grup whatsapp ini valid!, kamu akan di wisuda`, message.id).then(() => {
                    iluser.removeParticipant(groupId, sender.id)})
                    console.log('removed ' + sender.id)
                } else {
                    await iluser.reply(message.from, `Link grup whatsapp ini tidak valid! kamu tidak di wisuda`, message.id)
                    console.log('Tidak di kick')
                }
            } else if (chats.match(/\bhttps?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi)) {
                const chatpn = chats.match(/\bhttps?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi)
                const flnrl = new URL(chatpn)
                console.log('Sedang memeriksa tautan...\n' + flnrl)
                //await iluser.reply(message.from, `*LINK PORN DETECTOR*\n\nSedang memeriksa tautan...`, id)
                isPorn(flnrl.hostname, function(error, status) {
                    if (status == true) {
                        iluser.reply(message.from, `Link mengandung unsur pornografi!\nSekarang di wisuda...`, id)
                        iluser.removeParticipant(groupId, sender.id)
                        console.log('Mengandung unsur pornografi ' + sender.id)
                    } else {
                    //iluser.reply(message.from, `Link tersebut tidak mengandung unsur pornografi`, message.id)
                    console.log('Tidak di kick')
                }
                })
            }
        } else {
            if (chats.match(/(https?:\/\/chat.whatsapp.com)/gi)) {
                console.log('Tautan berasal dari whitelist')
            }
        }

        if (chats.match(/(assalamualaikum)/)) {
           iluser.reply(from, `Waalaikumsalam ${pushname}`, message.id)
        }
        if (chats.match(/(ilwan)/)) {
           iluser.reply(from, 'ada apa ni sebut-sebut nama owner gw?', message.id)
        }
        if (args.includes('@6283142933894')) { //replace with your bot number
            iluser.reply(from, 'Mau ngapain tod pake tag owner gw??', message.id)
        }
                
        function waktu(seconds) { // TOBZ
            seconds = Number(seconds);
            var d = Math.floor(seconds / (3600 * 24));
            var h = Math.floor(seconds % (3600 * 24) / 3600);
            var m = Math.floor(seconds % 3600 / 60);
            var s = Math.floor(seconds % 60);
            var dDisplay = d > 0 ? d + (d == 1 ? " Hari, ":" Hari,") : "";
            var hDisplay = h > 0 ? h + (h == 1 ? " Jam, ":" Jam,") : "";
            var mDisplay = m > 0 ? m + (m == 1 ? " Menit, ":" Menit,") : "";
            var sDisplay = s > 0 ? s + (s == 1 ? " Detik, ":" Detik") : "";
            return dDisplay + hDisplay + mDisplay + sDisplay;
        }

        const apakah = [
            'Ya',
            'Tidak',
            'Coba Ulangi'
            ]

        const bisakah = [
            'Bisa',
            'Tidak Bisa',
            'Coba Ulangi'
            ]

        const kapankah = [
            '1 Minggu lagi',
            '1 Bulan lagi',
            '1 Tahun lagi'
            ]

        const rate = [
            '100%',
            '95%',
            '90%',
            '85%',
            '80%',
            '75%',
            '70%',
            '65%',
            '60%',
            '55%',
            '50%',
            '45%',
            '40%',
            '35%',
            '30%',
            '25%',
            '20%',
            '15%',
            '10%',
            '5%'
            ]

        const mess = {
            wait: 'Processing...',
            iklan: `\n\nFollow instagram.com/iluser.bot ya ${pushname} ☺\nAgar kamu tetap dapat info terkini dari bot`,
            iklann: `Follow instagram.com/iluser.bot ya ${pushname} ☺\nAgar kamu tetap dapat info terkini dari bot`,
            noprem: `Hii ${pushname}., \nKamu bukan user premium, jadi bot tidak bisa mengirimkan filenya untukmu. Silahkan unduh manual melalui link di bawah ini.`,
            blockk: '```Kamu telah di blokir karena melanggar #rules bot.!```\n\n\nUntuk unblock silahkan hubungi #owner bot',
            magernulissatu: 'Harap Tunggu, BOT Sedang Menulis Di Buku 1!',
            error: {
                St: '[ ❗ ERROR ] Tidak ada media',
                Ti: '[ ❗ ERROR ] Tidak ada stiker yang di balas',
                Qm: '[ ❗ ERROR ] Tema yang kamu pilih tidak tersedia!',
                Yt3: '[ ❗ ERROR ] Tidak dapat meng konversi ke mp3!',
                Yt4: '[ ❗ ERROR ] Error di sebabkan oleh sistem.',
                Ig: '[ ❗ ERROR ] Akun private atau link tidak valid',
                Ki: '[ ❗ ERROR ] Bot tidak bisa mengeluarkan Admin grup',
                Sp: '[ ❗ ERROR ] Bot tidak bisa mengeluarkan Admin',
                Ow: '[ ❗ ERROR ] Bot tidak bisa mengeluarkan Owner',
                Bk: '[ ❗ ERROR ] Bot tidak bisa memblokir Owner',
                Ad: '[ ❗ ERROR ] Tidak dapat menambahkan target, aku di private atau sering keluar',
                Iv: '[ ❗ ERROR ] Link yang anda kirim tidak valid!'
            }
        }

        const tutor = 'https://i.ibb.co/Hp1XGbL/a4dec92b8922.jpg'
        const errorurl = 'https://i.postimg.cc/BZhY3p8D/3819552.jpg'
        const errorurl2 = 'https://i.postimg.cc/BZhY3p8D/3819552.jpg'
        const ppdepresi = 'https://i.postimg.cc/4dZ0n8tT/fbee5949acdf18495777f89f64fa12ca.jpg'
       
        const isWhite = (chatId) => adminNumber.includes(chatId) ? true : false
        const isWhiteList = (chatId) => {
            if (adminNumber.includes(sender.id)) {
                if (muted.includes(chatId)) return false
                return true
            } else {
                return false
            }
        }

        const isMuted = (chatId) => {
          if(muted.includes(chatId)){
            return false
        }else{
            return true
            }
        }

        function banChat () {
            if(banChats == true) {
            return false
        }else{
            return true
            }
        }

        if (typeof Array.prototype.splice === 'undefined') {
            Array.prototype.splice = function (index, howmany, elemes) {
                howmany = typeof howmany === 'undefined' || this.length;
                var elems = Array.prototype.slice.call(arguments, 2),
                    newArr = this.slice(0, index),
                    last = this.slice(index + howmany);
                newArr = newArr.concat.apply(newArr, elems);
                newArr = newArr.concat.apply(newArr, last);
                return newArr;
            }
        }
        
        function restartAwal(iluser){
            setting.restartState = false
            isRestart = false
            iluser.sendText(setting.restartId, 'Restart Succesfull!')
            setting.restartId = 'undefined'
            fs.writeFileSync('./lib/database/setting.json', JSON.stringify(setting, null,2));
        }

        // FUNCTION
        // https://github.com/Gimenz/Mg-v2-WhatsApp-BOT/blob/803c5a0dc89e2a9e7bb118d1a8872fecd97d397e/msg/index.js#L76
        function isStickerMsg(id){
            if (isOwner, isAdmin) {return false;}
            let found = false;
            for (let i of stickerspam){
                if(i.id === id){
                    if (i.msg >= 12) {
                        found === true 
                        iluser.reply(from, '*SPAM STICKER*\n\nKamu telah melakukan spam stiker. Saatnya di wisuda...', message.id).then(() => {
                            iluser.removeParticipant(groupId, id)
                        }).then(() => {
                            const cus = id
                            var found = false
                            Object.keys(stickerspam).forEach((i) => {
                                if(stickerspam[i].id == cus){
                                    found = i
                                }
                            })
                            if (found !== false) {
                                stickerspam[found].msg = 1;
                                const resultx = 'Database telah direset!'
                                console.log(stickerspam[found])
                                fs.writeFileSync('./lib/database/stickerspam.json',JSON.stringify(stickerspam));
                                iluser.sendText(from, resultx)
                            } else {
                                    iluser.reply(from, `Nomor itu tidak terdaftar didalam database!`, id)
                            }
                        })
                        return true;
                    }else{
                        found === true
                        return false;
                    }   
                }
            }
            if (found === false){
                let obj = {id: `${id}`, msg:1};
                stickerspam.push(obj);
                fs.writeFileSync('./lib/database/stickerspam.json',JSON.stringify(stickerspam));
                return false;
            }  
        }
        function addStickerCount(id){
            if (isOwner, isAdmin) {return;}
            var found = false
            Object.keys(stickerspam).forEach((i) => {
                if(stickerspam[i].id == id){
                    found = i
                }
            })
            if (found !== false) {
                stickerspam[found].msg += 1;
                fs.writeFileSync('./lib/database/stickerspam.json',JSON.stringify(stickerspam));
            }
        }

                   
        function isMsgLimit(id){
                    if (isAdmin) {return false;}
                    let found = false;
                    for (let i of msgLimit){
                        if(i.id === id){
                            if (i.msg >= 8) {
                                found === true 
                                iluser.reply(message.from, `*「 𝗔𝗡𝗧𝗜 𝗦𝗣𝗔𝗠 」*\nMaaf, akun anda kami blok karena SPAM, dan tidak bisa di UNBLOK!`, message.id)
                                iluser.contactBlock(id)
                                banned.push(id)
                                fs.writeFileSync('./lib/database/banned.json', JSON.stringify(banned))
                                return true;
                            }else if(i.msg >= 8){
                                found === true
                                iluser.reply(message.from, `*「 𝗔𝗡𝗧𝗜 𝗦𝗣𝗔𝗠 」*\nNomor anda terdeteksi spam!\nMohon tidak spam 5 pesan lagi atau nomor anda AUTO BLOK!`, message.id)
                                return true
                            }else{
                                found === true
                                return false;
                            }   
                        }
                    }
                    if (found === false){
                        let obj = {id: `${id}`, msg:1};
                        msgLimit.push(obj);
                        fs.writeFileSync('./lib/database/msgLimit.json',JSON.stringify(msgLimit));
                        return false;
                    }  
                }
        function addMsgLimit(id){
                    if (isAdmin) {return;}
                    var found = false
                    Object.keys(msgLimit).forEach((i) => {
                        if(msgLimit[i].id == id){
                            found = i
                        }
                    })
                    if (found !== false) {
                        msgLimit[found].msg += 1;
                        fs.writeFileSync('./lib/database/msgLimit.json',JSON.stringify(msgLimit));
                    }
                }
        function isLimit(id){
                    if (isAdmin) {return false;}
                    let found = false;
                    for (let i of limit){
                        if(i.id === id){
                            let limits = i.limit;
                            if (limits >= limitCount) {
                                found = true;
                                iluser.reply(message.from, `Penggunaan perintah bot kamu sudah mencapai batas dan akan di reset besok pukul 7 pagi.\n\nIngin akses bot tanpa limit?\nUpgrade premium ae ngab. Cek fitur premium di ${prefix}premfitur`, message.id)
                                return true;
                            }else{
                                limit
                                found = true;
                                return false;
                            }
                        }
                    }
                    if (found === false){
                        let obj = {id: `${id}`, limit:1};
                        limit.push(obj);
                        fs.writeFileSync('./lib/database/limit.json',JSON.stringify(limit));
                        return false;
                    }  
                }
        function limitAdd (id) {
                    if (isAdmin) {return;}
                    var found = false;
                    Object.keys(limit).forEach((i) => {
                        if(limit[i].id == id){
                            found = i
                        }
                    })
                    if (found !== false) {
                        limit[found].limit += 1;
                        fs.writeFileSync('./lib/database/limit.json',JSON.stringify(limit));
                    }
                }
        
                // END HELPER FUNCTION

        // Serial Number Generator
        function GenerateRandomNumber(min,max){
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        // Generates a random alphanumberic character
        function GenerateRandomChar() {
            var chars = "1234567890ABCDEFGIJKLMNOPQRSTUVWXYZ";
            var randomNumber = GenerateRandomNumber(0,chars.length - 1);
            return chars[randomNumber];
        }
        // Generates a Serial Number, based on a certain mask
        function GenerateSerialNumber(mask){
            var serialNumber = "";
            if(mask != null){
                for(var i=0; i < mask.length; i++){
                    var maskChar = mask[i];
                    serialNumber += maskChar == "0" ? GenerateRandomChar() : maskChar;
                }
            }
            return serialNumber;
        }
        var nmr = sender.id
        var obj = pendaftar.some((val) => {
            return val.id === nmr
        })
        var cekage = pendaftar.some((val) => {
            return val.id === nmr && val.umur >= 12
        })

        function monospace(string) {
            return '```' + string + '```'
        }
        function isReg(obj){
            if (obj === true){
                return false
            } else {     
                return iluser.reply(message.from, `Hii ${pushname}.,\n\nKamu belum terverifikasi sebagai pengguna iluser_BOT.\nUntuk verifikasi, silahkan ketik ${prefix}verif\n\nFollow me on instagram:\nhttps://www.instagram.com/il.userr`, message.id) //if user is not registered
            }
        }

        function cekumur(obj){
            if (obj === true){
                return false
            } else {
                return iluser.reply(message.from, `Hii ${pushname}.,\nKamu belum cukup umur untuk mengunakan bot ini, min 12 tahun\n\nKamu bisa mendaftar ulang dengan cara donasi terlebih dahulu, bales ${prefix}donasi`, message.id) //if user is not registered
            }
        }

      /*  if (isGroupMsg && AntiStickerSpam && !isGroupAdmins && !isAdmin && !isOwner){
            if(stickermsg === true){
                if(isStickerMsg(serial)) return
                addStickerCount(serial)
            }
        } */

                if(body === prefix+'bot off' && isMuted(chatId) == true){
                    if(isGroupMsg) {
                        if (!isGroupAdmins) return iluser.reply(message.from, '⛔ *AKSES DI TOLAK* ⛔\n\nnte admin?', message.id)
                        if(isMsgLimit(serial)){
                            return
                        }else{
                            addMsgLimit(serial)
                        }
                        muted.push(chatId)
                        fs.writeFileSync('./lib/database/muted.json', JSON.stringify(muted, null, 2))
                        iluser.reply(message.from, `Bot telah dinonaktifkan pada grup ini\nKetik ${prefix}bot on untuk mengaktifkan`, message.id)
                    }else{
                        if(isMsgLimit(serial)){
                            return
                        }else{
                            addMsgLimit(serial)
                        }
                        muted.push(chatId)
                        fs.writeFileSync('./lib/database/muted.json', JSON.stringify(muted, null, 2))
                        iluser.reply(message.from, `Bot telah dinonaktifkan pada grup ini\nKetik ${prefix}bot on untuk mengaktifkan`, message.id)
                    }
                }
                if(body === prefix+'bot on' && isMuted(chatId) == false){
                    if(isGroupMsg) {
                        if (!isGroupAdmins) return iluser.reply(message.from, '⛔ *AKSES DI TOLAK* ⛔\n\nnte admin?', message.id)
                        if(isMsgLimit(serial)){
                            return
                        }else{
                            addMsgLimit(serial)
                        }
                        let index = muted.indexOf(chatId);
                        muted.splice(index,1)
                        fs.writeFileSync('./lib/database/muted.json', JSON.stringify(muted, null, 2))
                        iluser.reply(message.from, 'Bot telah di aktifkan pada grup ini', message.id)         
                    }else{
                        if(isMsgLimit(serial)){
                            return
                        }else{
                            addMsgLimit(serial)
                        }
                        let index = muted.indexOf(chatId);
                        muted.splice(index,1)
                        fs.writeFileSync('./lib/database/muted.json', JSON.stringify(muted, null, 2))
                        iluser.reply(message.from, 'Bot telah di aktifkan pada grup ini', message.id)                   
                    }
                }
                if (body === prefix+'unbanchat') {
                    if (!isOwner) return iluser.reply(message.from, 'Maaf, perintah ini hanya dapat dilakukan oleh Owner iluser_BOT!', message.id)
                    if(setting.banChats === false) return
                    setting.banChats = false
                    banChats = false
                    fs.writeFileSync('./lib/database/setting.json', JSON.stringify(setting, null, 2))
                    iluser.reply('Global chat has been enable!', id)
                }
;
        //AUTO VIEW
        iluser.sendSeen(chatId)

        // [BETA] Avoid Spam Message
        if (isCmd && isFiltered(from) && !isGroupMsg) {
        await iluser.reply(from, 'Cooldown 4 sec!', id)
        return console.log(color('[SPAM]', 'red'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname)) 
        }
        if (isCmd && isFiltered(from) && isGroupMsg) { 
        await iluser.reply(from, 'Cooldown 4 sec!', id)
        return console.log(color('[SPAM]', 'red'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(name || formattedTitle)) 
        }
        //if (!isCmd && !isGroupMsg) {console.log(color('[MSG]', 'yellow'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'magenta'), color(`${command} [${args.length}]`), 'from', color(pushname))}
        if (isCmd && !isGroupMsg) {console.log(color('[EXEC]'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))}
        if (isCmd && isGroupMsg) {console.log(color('[EXEC]'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(name || formattedTitle))}
        if (isBlocked && isCmd) return iluser.reply(from, mess.blockk, message.id)

        /*    if (!isCmd && !isGroupMsg && isAdmin) {
            axios.get(`http://simsumi.herokuapp.com/api?text=${encodeURIComponent(message.body)}&lang=id`)
.then(({data}) => {               
                iluser.reply(from, `${data.success}`, id)
                console.log(data)
            })
}

            if (!isCmd && !isGroupMsg && !isAdmin) {
            axios.get(`http://simsumi.herokuapp.com/api?text=${encodeURIComponent(message.body)}&lang=id`)
.then(({data}) => {               
                iluser.reply(from, `*Simi:* ${data.success}\n\n\nFollow me on instagram.com/iluser.bot`, id)
                console.log(data)
            })
}

            if (!isCmd && isAdmin  && isGroupMsg && quotedMsgObj.fromMe) {
            axios.get(`http://simsumi.herokuapp.com/api?text=${encodeURIComponent(message.body)}&lang=id`)
.then(({data}) => {               
                iluser.reply(from, `${data.success}`, id)
                console.log(data)
            })
} 

            if (!isCmd && !isAdmin  && isGroupMsg && quotedMsgObj.fromMe) {
            axios.get(`http://simsumi.herokuapp.com/api?text=${encodeURIComponent(message.body)}&lang=id`)
.then(({data}) => {               
                iluser.reply(from, `*Simi:* ${data.success}\n\n\nFollow me on instagram.com/iluser.bot`, id)
                console.log(data)
            })
} */
	function processSticker(input) {
    return new Promise((resolve, reject) => {
        if (typeof input == 'string' && /^data/.test(input)) input = Buffer.from(input.replace(/^data:.+;base64,/, ''))
        sharp(input)
            .toFormat('webp')
            .resize(512, 512, {
                fit: 'contain',
                background: {
                    r: 0,
                    g: 0,
                    b: 0,
                    alpha: 0
                }
            })
            .toBuffer()
            .then(resolve)
            .catch(reject)
    })
}
        //autosticker
        if (isGroupMsg && isautosticker && isMedia && isImage && !isCmd) {
                    const packname = `By: iluser_BOT`
                    const author = `t.me/iluser_BOT`
                    exif.create(packname, author)
                    const encryptMedia = isQuotedImage ? quotedMsg : message
                    const mediaData = await decryptMedia(encryptMedia, uaOverride)
                    webp.buffer2webpbuffer(mediaData, 'jpg', '-q 100')
                        .then(async (res) => {
                            sharp(res)
                                .resize(512, 512, {
                                    fit: 'contain',
                                    background: {
                                        r: 0,
                                        g: 0,
                                        b: 0,
                                        alpha: 0
                                    }
                                })
                                .toFile(`./temp/stage_${sender.id}.webp`, async (err) => {
                                    if (err) return console.error(err)
                                    await exec(`webpmux -set exif ./temp/data.exif ./temp/stage_${sender.id}.webp -o ./temp/${sender.id}.webp`, { log: true })
                                    if (fs.existsSync(`./temp/${sender.id}.webp`)) {
                                        const data = fs.readFileSync(`./temp/${sender.id}.webp`)
                                        const base64 = `data:image/webp;base64,${data.toString('base64')}`
                                        await iluser.sendRawWebpAsSticker(from, base64)
                                        iluser.reply(message.from, `${mess.iklann}`,id)
                                        fs.unlinkSync(`./temp/${sender.id}.webp`)
                                        fs.unlinkSync(`./temp/stage_${sender.id}.webp`)
                                        fs.unlinkSync('./temp/data.exif')
                                    }
                                })
                        })
                    }
        

     /*   if (isGroupMsg && isautosticker && isMedia && isImage && !isCmd) {
            const mediaData = await decryptMedia(message, uaOverride)
            const imageBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
            await iluser.sendImageAsSticker(from, imageBase64)
                .then(() => {
                    console.log(`Sticker processed for ${processTime(t, moment())} seconds`)
                })
                .catch(async (err) => {
                    console.error(err)
                    await iluser.reply(from, `Error!`, id)
                })
        }*/

         // ANTI SPAM
        addFilter(from)



        if (isMuted(chatId) && banChat() && !isBlocked && !isBanned || isOwner ) {
        switch(command) {

        case prefix+'addpilot':	
			if (!isOwner) return await iluser.reply(from, `Lo siapa?`, id)
            for (let i = 0; i < mentionedJidList.length; i++) {
                        pilot.push(mentionedJidList[i])
                        fs.writeFileSync('./lib/database/pilot.json', JSON.stringify(pilot))
                        await iluser.sendTextWithMentions(message.from, `Sukses menjadikan ${mentionedJidList.map(x => `@${x.replace('@c.us', '')}`).join('\n')} sebagai pilot bot`, id)
		 	//await iluser.reply(from, `Sukses menambahkan ${pushname} menjadi pilot bot!`, id)
            }
            break
        case prefix+'delpilot':	
			if (!isOwner) return await iluser.reply(from, `Lo siapa?`, id)
            	let inqa = pilot.indexOf(mentionedJidList[0])
                    pilot.splice(inqa, 1)
                    fs.writeFileSync('./lib/database/pilot.json', JSON.stringify(pilot))
                    await iluser.sendTextWithMentions(message.from, `Sukses nebghapus ${mentionedJidList.map(x => `@${x.replace('@c.us', '')}`).join('\n')} dari daftar pilot bot`, id)
            break
        case prefix+'tes':	
			if (!isPilot) return await iluser.reply(from, `Pilot only!`, id)            
            await iluser.reply(message.from, `ILWAN GANTENG NO DEBAT!`, id)
		 	//await iluser.reply(from, `Sukses menambahkan ${pushname} menjadi pilot bot!`, id)
            break

        case `${prefix}hilih`:
            if(isReg(obj)) return
                    if (quotedMsg) {
                        const quoteText = quotedMsg.type == 'chat' ? quotedMsg.body : quotedMsg.type == 'image' ? quotedMsg.caption : ''
                        const skyaaara = await get.get('https://freerestapi.herokuapp.com/api/v1/hilih?kata=' + quoteText).json()
                        iluser.reply(from, skyaaara.result, message.id)
                    } else {
                        const daasda = body.slice(7)
                        const skyaaara = await get.get('https://freerestapi.herokuapp.com/api/v1/hilih?kata=' + daasda).json()
                        iluser.reply(from, skyaaara.result, message.id)
                    }
                    break
        case `${prefix}alay`:
            if(isReg(obj)) return
                    if (quotedMsg) {
                        const quoteText = quotedMsg.type == 'chat' ? quotedMsg.body : quotedMsg.type == 'image' ? quotedMsg.caption : ''
                        const skyaaaras = await get.get('https://arugaz.herokuapp.com/api/bapakfont?kata=' + quoteText).json()
                        iluser.reply(from, skyaaaras.result, message.id)
                    } else {
                        const daasdas = body.slice(6)
                        const skyaaaras = await get.get('https://arugaz.herokuapp.com/api/bapakfont?kata=' + daasdas).json()
                        iluser.reply(from, skyaaaras.result, message.id)
                    }
                    break
        case `${prefix}say`:
            if(isReg(obj)) return
                    if (!isGroupMsg) return iluser.reply(from, '⛔ *AKSES DI TOLAK* ⛔\n\nHanya dapat di gunakan di dalam grup', message.id)
                    if (isLimit(serial)) return 

                    await limitAdd(serial)
                    const doto = fs.readFileSync('./lib/database/say.json')
                    const dotoJson = JSON.parse(doto)
                    const rondIndox = Math.floor(Math.random() * dotoJson.length)
                    const rondKoy = dotoJson[rondIndox]
                    iluser.reply(from, rondKoy, message.id)
                    break
        case `${prefix}addsay`:
            if(isReg(obj)) return
                    if (args.length == 1) return iluser.reply(from, `Kirim perintah *!addsay [teks]*, contoh *!addsay anjay*`, message.id)
                    const says = body.slice(8)
                    say.push(says)
                    fs.writeFileSync('./lib/database/say.json', JSON.stringify(say))
                    iluser.reply(from, `Add ${says} sukses!`, message.id)
                    break
        case `${prefix}delsay`:
            if(isReg(obj)) return
                    if (args.length == 1) return iluser.reply(from, `Kirim perintah *!addsay [teks]*, contoh *!addsay anjay*`, message.id)
                    const sayso = body.slice(8)
                    let delsayso = say.indexOf(sayso)
                    say.splice(delsayso, 1)
                    fs.writeFileSync('./lib/database/say.json', JSON.stringify(say))
                    iluser.reply(from, `Delete ${sayso} sukses!`, message.id)
                    break
        case `${prefix}saylist`:
            if(isReg(obj)) return
                    let saylisto = `Random say list\nTotal : ${say.length}\n`
                    for (let i of say) {
                        saylisto += `• ${i}\n`
                    }
                    await iluser.reply(from, saylisto, message.id)
                    break
        case `${prefix}'phdl`:
            if(isReg(obj)) return
                if (isGroupMsg) {
                    if (!isAdmin) return await iluser.reply(from, '\n⛔ *AKSES DI TOLAK* ⛔\n\nNte premium?', id)
                    if (!isUrl(url) && !url.includes('pornhub.com')) return await iluser.reply(from, `Format salah`, id)
                    await iluser.reply(from, mess.wait, id)
                    try {
                        nsfw.phDl(url)
                            .then(async ({ title, download_urls, thumbnail_url }) => {
                                const count = Object.keys(download_urls).length
                                if (count !== 2) {
                                    const shortsLow = await misc.shortener(download_urls['240P'])
                                    const shortsMid = await misc.shortener(download_urls['480P'])
                                    const shortsHigh = await misc.shortener(download_urls['720P'])
                                    await iluser.sendFileFromUrl(from, thumbnail_url, `${title}`, `Title: ${title}\n\nLinks:\n${shortsLow} (240P)\n${shortsMid} (480P)\n${shortsHigh} (720P)`, id)
                                        .then(() => console.log('Success sending pornhub metadata!'))
                                } else {
                                    const shortsLow = await misc.shortener(download_urls['240P'])
                                    await iluser.sendFileFromUrl(from, thumbnail_url, `${title}`, `Title: ${title}\n\nLinks:\n${shortsLow} (240P)`, id)
                                        .then(() => console.log('Success sending pornhub metadata!'))
                                }
                            })
                    } catch (err) {
                        console.error(err)
                        await iluser.reply(from, `Error!\n${err}`, id)
                    }
                } else {
                    if (!isUrl(url) && !url.includes('pornhub.com')) return await iluser.reply(from, `Format Salah`, id)
                    await iluser.reply(from, mess.wait, id)
                    try {
                        nsfw.phDl(url)
                            .then(async ({ title, download_urls, thumbnail_url }) => {
                                const count = Object.keys(download_urls).length
                                if (count !== 2) {
                                    const shortsLow = await misc.shortener(download_urls['240P'])
                                    const shortsMid = await misc.shortener(download_urls['480P'])
                                    const shortsHigh = await misc.shortener(download_urls['720P'])
                                    await iluser.sendFileFromUrl(from, thumbnail_url, `${title}`, `Title: ${title}\n\nLinks:\n${shortsLow} (240P)\n${shortsMid} (480P)\n${shortsHigh} (720P)`, id)
                                        .then(() => console.log('Success sending pornhub metadata!'))
                                } else {
                                    const shortsLow = await misc.shortener(download_urls['240P'])
                                    await iluser.sendFileFromUrl(from, thumbnail_url, `${title}`, `Title: ${title}\n\nLinks:\n${shortsLow} (240P)`, id)
                                        .then(() => console.log('Success sending pornhub metadata!'))
                                }
                            })
                    } catch (err) {
                        console.error(err)
                        await iluser.reply(from, `Error!\n${err}`, id)
                    }
                }
            break
        case `${prefix}indohot`:
            if(isReg(obj)) return
                    if (isLimit(serial)) return iluser.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik !limit Untuk Mengecek Kuota Limit Kamu`, message.id)

                    await limitAdd(serial)
                    if (isGroupMsg) {
                        const dsa = await get.get(`https://arugaz.herokuapp.com/api/indohot`).json()
                        const {
                            country,
                            durasi,
                            genre,
                            judul,
                            url
                        } = await dsa.result
                        await iluser.sendText(from, `*Judul* : ${judul}\n*Durasi* : ${durasi}\n*Genre* : ${genre}\n*Negara* : ${country}\n*Link* : ${url}`, message.id)
                    }
                    break
        case `${prefix}renungan`:
            if(isReg(obj)) return
                    if (isLimit(serial)) return iluser.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik !limit Untuk Mengecek Kuota Limit Kamu`, message.id)

                    await limitAdd(serial)
                    const agggg = await get.get(`https://api-jojo.herokuapp.com/api/renungan`).json()
                    try {
                        const {
                            Isi,
                            judul,
                            pesan
                        } = agggg
                        const rn = `• *Judul* : ${judul}\n• *Pesan* : ${pesan}\n• *Isi* : ${Isi}`
                        iluser.reply(from, rn, message.id)
                    } catch (err) {
                        iluser.reply(from, 'Error!', message.id)
                    }
                    break
        case `${prefix}setdesk`:
                    if (isGroupMsg) {
                        if (isGroupAdmins) {
                            try {
                                const desk = body.slice(9)
                                await iluser.setGroupDescription(from, `${desk}`, message.id)
                            } catch {
                                iluser.reply(from, 'Terjadi kesalahan, tidak dapat mengubah deskripsi grup', message.id)
                            }
                        } else {
                            iluser.reply(from, 'Maaf, fitur ini hanya untuk owner grup', message.id)
                        }
                    } else {
                        iluser.reply(from, 'Fitur ini hanya bisa di gunakan dalam grup', message.id)
                    }
                    break
        case `${prefix}send`:
                    if (isGroupMsg) return iluser.reply(from, 'Perintah ini hanya bisa dilakukan di chat personal!', message.id)
                    var cek = pengirim.includes(sender.id);
                    if (!cek) {
                        return iluser.reply(from, `kamu belum terdaftar untuk program ini, untuk mendaftar kirim ${prefix}reg no wa kamu\ncontoh : ${prefix}reg 6281234567890 `, message.id) //if user is not registered
                    } else {
                        if (isMedia && args.length >= 1) {
                            const mediaData = await decryptMedia(message, uaOverride)
                            const imageBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
                            const opo = body.slice(6)
                            iluser.sendImage(uwong, imageBase64, 'gambar.jpeg', `${opo}\n\npesan from : ${pushname}`)
                                .then(() => iluser.reply(from, 'Berhasil mengirim pesan\nTunggu pesan from seseorang, kalo ga di bales coba lagi aja', message.id))
                        } else if (isQuotedImage && args.length >= 1) {
                            const mediaData = await decryptMedia(quotedMsg, uaOverride)
                            const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                            const opo = body.slice(6)
                            iluser.sendImage(uwong, imageBase64, 'gambar.jpeg', `${opo}\n\npesan from : ${pushname}`)
                                .then(() => iluser.reply(from, 'Berhasil mengirim pesan\nTunggu pesan from seseorang, kalo ga di bales coba lagi aja', message.id))
                        } else if (args.length >= 1) {
                            const opo = body.slice(6)
                            iluser.sendText(uwong, `${opo}\n\npesan from : ${pushname}`)
                                .then(() => iluser.reply(from, 'Berhasil mengirim pesan\nTunggu pesan from seseorang, kalo ga di bales coba lagi aja', message.id))
                        } else {
                            await iluser.reply(from, 'Format salah', message.id)
                        }
                    }

                    break
        case prefix+'find': {
            var cek = pengirim.includes(sender.id);
            const isQuotedImage = quotedMsg && quotedMsg.type === 'image'
            if(!cek){
                return iluser.reply(from, `kamu belum terdaftar untuk program ini, untuk mendaftar kirim ${prefix}reg no wa kamu\ncontoh : ${prefix}reg 6281234567890 `, message.id) //if user is not registered
            } else {           
                if (isMedia && args.length >= 1) {
                    const mediaData = await decryptMedia(message, uaOverride)
                    const imageBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
                    const opo = body.slice(6)
                    //pengirim.push(from) //otomatis menambahkan nomor ke database
                    //fs.writeFileSync('./lib/user.json', JSON.stringify(pengirim))
                    iluser.sendImage(uwong, imageBase64, 'gambar.jpeg',`${opo}\n\nHai, kamu mendapat pesan dari : wa.me/${from.replace(/[@c.us]/g, '')}`)
                        .then(() => iluser.reply(from, 'Berhasil mengirim pesan\nTunggu pesan dari seseorang, kalo ga di bales coba lagi aja', id))
                } else if (isQuotedImage && args.length >= 1) {
                    const mediaData = await decryptMedia(quotedMsg, uaOverride)
                    const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                    const opo = body.slice(6)
                    //pengirim.push(from) //otomatis menambahkan nomor ke database
                    //fs.writeFileSync('./lib/user.json', JSON.stringify(pengirim))
                    iluser.sendImage(uwong, imageBase64, 'gambar.jpeg',`${opo}\n\nHai, kamu mendapat pesan dari : wa.me/${from.replace(/[@c.us]/g, '')}`)
                        .then(() => iluser.reply(from, 'Berhasil mengirim pesan\nTunggu pesan dari seseorang, kalo ga di bales coba lagi aja', id))                
                } else if (args.length >= 1) {
                    const opo = body.slice(6)
                    //pengirim.push(from) //otomatis menambahkan nomor ke database
                    //fs.writeFileSync('./lib/user.json', JSON.stringify(pengirim))
                    iluser.sendText(uwong, `${opo}\n\nHai, kamu mendapat pesan dari : wa.me/${from.replace(/[@c.us]/g, '').replace(/[-]/g, '')}`)
                        .then(() => iluser.reply(from, 'Berhasil mengirim pesan\nTunggu pesan dari seseorang, kalo ga di bales coba lagi aja', id))   
                } else {
                    await iluser.reply(from, 'Format salah! Untuk membuka daftar perintah kirim .menu', id)
                } 
            } 
        }     
            break 
        case prefix+'reg': { //menambahkan nomor ke database 
                if (!args.length === 1 ) return iluser.reply(from, 'Nomornya mana kak?\nEx: .reg 6285226236xnxx')  
                const text = body.slice(5).replace(/[-\s+]/g,'') + '@c.us'
                var cek = pengirim.includes(text);
                if(cek){
                    return iluser.reply(from, 'Nomor ini sudah terdaftar di database', id) //if number already exists on database
                } else {
                    const mentah = await iluser.checkNumberStatus(text) //VALIDATE WHATSAPP NUMBER
                    const hasil = mentah.canReceiveMessage ? `Sukses menambahkan nomor ke database.\n\nTotal user : *${pengirim.length}*` : false
                    if (!hasil) return iluser.reply(from, 'Invalid WhatsApp number\n\n[ Pastikan Format Penulisan Benar ]', message.id) 
                    {
                    pengirim.push(mentah.id._serialized)
                    fs.writeFileSync('./lib/database/user.json', JSON.stringify(pengirim))
                        iluser.sendText(from, hasil)
                    }
                }
        }
        break
        case prefix+'remove': //menghapus nomor dari database
            if (!isOwner) return iluser.reply(from, 'Fitur ini hanya dapat digunakan oleh admin bot')  
            if (!args.length >= 1) return iluser.reply(from, 'Masukkan nomornya, *GUNAKAN AWALAN 62* contoh: 6285226236155')  
            {
                let inx = pengirim.indexOf(args[0]+'@c.us')
                pengirim.splice(inx,1)
                fs.writeFileSync('./lib/database/user.json', JSON.stringify(pengirim))
                iluser.reply(from, 'Sukses menghapus nomor dari database', id)
            }
            break
        case prefix+'list': //melihat daftar nomor di database 
            if (!isOwner) return iluser.reply(from, 'Fitur ini hanya dapat digunakan oleh admin bot')  
            const num = fs.readFileSync('./lib/database/user.json')
            const daftarnum = JSON.parse(num)
            const hasill = daftarnum.toString().replace(/['"@c.us]/g,'').replace(/[,]/g, '\n');
            iluser.sendText(from, `Nih kontak user tuan.\nTotal *${pengirim.length}*\n\n${hasill}`) 
            break  

        case `${prefix}findsticker`:
        case `${prefix}findstiker`:
        case prefix+'findsk':
            if(isReg(obj)) return
                    if (args.length === 1) return iluser.reply(from, `Kirim perintah *${prefix}findsticker namastiker*\nContoh : *${prefix}findsticker pentol*`, message.id)
                    try {
                        const s = await axios.get('https://api.vhtear.com/wasticker?query=' + body.slice(13) + `&apikey=${vhtearkey}`)
                        for (let i = 0; i < s.data.result.data.length; i++) {
                        await iluser.sendStickerfromUrl(from, s.data.result.data[i])
                        }
                    } catch (err) {
                        console.error(err.message)
                        await iluser.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, terjadi kesalahan! atau kata kunci yang dicari tidak ditemukan')
                        iluser.sendText(ownerNumber, 'Find Sticker Error : ' + err)
                    }
                    break
        
        case `${prefix}prem`: //asumsikan admin itu premium member ya!
                    if (!isOwner) return iluser.reply(message.from, '⛔ *AKSES DI TOLAK* ⛔\n\nLo siapa anyink', message.id)
                    //var sia = mentionedJidList.name
                    for (let i = 0; i < mentionedJidList.length; i++) {
                        adminNumber.push(mentionedJidList[i])
                        fs.writeFileSync('./lib/database/admin.json', JSON.stringify(adminNumber))
                        iluser.reply(message.from, `
──「 *PREMIUM👑* 」──
+ *Number*\t: ${mentionedJidList[i].replace(/@c.us/g,'')}
+ *Status*\t\t: *ACTIVE*
+ *Since*\t\t\t: ${timu}
+ *Expired*\t\t: ${timi}
 Thx for Upgrade to Premium🥰
`, message.id)
                    }
                    break
                case `${prefix}delprem`:
                    if (!isOwner) return iluser.reply(message.from, '⛔ *AKSES DI TOLAK* ⛔\n\nLo siapa anyink', message.id)
                    let inq = adminNumber.indexOf(mentionedJidList[0])
                    adminNumber.splice(inq, 1)
                    fs.writeFileSync('./lib/database/admin.json', JSON.stringify(adminNumber))
                    iluser.reply(message.from, `
──「 *PREMIUM👑* 」──
+ *Number* : ${mentionedJidList[0].replace(/@c.us/g,'')}
+ *Status* : *DEACTIVE*
 See u for next order🙂
`, message.id)
                    break
        case `${prefix}prem2`: //asumsikan admin itu premium member ya!
                    if (!isOwner) return iluser.reply(message.from, '⛔ *AKSES DI TOLAK* ⛔\n\nLo siapa anyink', message.id)
                    //var sia = mentionedJidList.name
                    for (let i = 0; i < mentionedJidList.length; i++) {
                        adminNumber.push(mentionedJidList[i])
                        fs.writeFileSync('./lib/database/admin.json', JSON.stringify(adminNumber))
                        iluser.reply(message.from, `
──「 *PREMIUM👑* 」──
+ *Number*\t: ${mentionedJidList[i].replace(/@c.us/g,'')}
+ *Status*\t\t: *ACTIVE*
+ *Since*\t\t\t: ${timu}
+ *Expired*\t\t: ${timii}
 Thx for Upgrade to Premium🥰
`, message.id)
                    }
                    break

        case prefix+'gift':
        case prefix+'giftlimit': // Hanya Admin & Owner Elaina yang bisa gift Limit
            if(isReg(obj)) return
            if (!isAdmin) return iluser.reply(from, `⛔ *AKSES DI TOLAK* ⛔\n\nHanya untuk user premium!`, id)
                    const nomerr = arg.split(' ')[0]
                    const jmla = arg.split(' ')[1]
                    if(!nomerr) return iluser.reply(from, `Contoh : ${prefix}gift @tag_user 15`, id)
                    let textaa = nomerr.replace(/[-\s+@c.us]/g,'')
                    const cusz = textaa + '@c.us'
                    if(!jmla) return iluser.reply(from, `Masukkan Jumlah gift limit, ${prefix}gift [ @tagmember Jumlah ]\n=> Contoh : ${prefix}gift @62813118507151 15`, id)
                    if(jmla > 20) return await iluser.reply(from, `Maximal  20!`, id)
                        var found = false
                        Object.keys(limit).forEach((i) => {
                            if(limit[i].id == cusz){
                                found = i
                            }
                        })
                        if (found !== false) {
                            limit[found].limit = Math.max(0, limit[found].limit);
                            if(limit[found].limit <= 20) return iluser.reply(from, `Kuota Limit pada nomor tersebut masih penuh\nUntuk gift pastikan kuota limit target sudah habis`, id)
                            if(limit[found].limit <= 0) { // JIKA LIMIT 0 MAKA BISA GIFT
                                return iluser.reply(from, `Kuota limit pada nomor tersebut sudah penuh!`, id)
                            }else{
                            limit[found].limit -= jmla
                            const updated = limit[found]
                            const result = `Gift kuota limit sukses dengan SN: ${SN} pada ${moment().format('DD/MM/YY HH:mm:ss')}
GIFT KUOTA LIMIT*
• User : @${updated.id.replace('@c.us','')}
• Limit: ${limitCount-updated.limit}`
                            console.log(limit[found])
                            fs.writeFileSync('./lib/database/limit.json',JSON.stringify(limit));
                            iluser.sendTextWithMentions(from, result)
                            }
                        } else {
                                iluser.reply(from, `Nomor tersebut tidak terdaftar di database!`, id)
                        }
                break
        case prefix+'gdrive':
            if(isReg(obj)) return
            if (isLimit(serial)) return
            const regex = new RegExp("\/d\/(.+)\/", 'gi')
            //if (!args[1].match(regex)) { await iluser.reply(from, `Contoh: ${prefix}gdrive https://drive.google.com/file/d/1Cd8KjB9-cUU_Jy8Q/view`, id) }
                const urla = args[1]
                const units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
                function niceBytes(x){
                    let l = 0, n = parseInt(x, 10) || 0;
                    while(n >= 1024 && ++l){
                        n = n/1024;
                    }
                    return(n.toFixed(n < 10 && l > 0 ? 1 : 0) + ' ' + units[l]);
                }
                const m = urla.match(regex)
                const fileid = m.toString().trimStart('/', 'd').trim('/');
                const linke = 'https://drive.google.com/file' + fileid + 'view?usp=sharing'
                fetch('https://gdbypass.host/api/?link='+linke)
                    .then((res) => {
                        status = res.status
                        return res.json()
                    })
                    .then(async(body) => {
                        const fileName = body.data.Filename
                        const size = body.data.Filesize
                        const newLink = body.data.NewUnlimitedURL
                        const ling = await urlShortener(newLink)
                            iluser.reply(from, `*GOOGLE DRIVE BYPASS*\n\n• *Nama File :* ${fileName}\n*• File Size :* ${niceBytes(size)}\n*• Short Link :* ${ling}`, id)
                            limitAdd(serial)
                    })
                    .catch((err) => {
                        iluser.reply(from, `Maaf, Sepertinya Link Tidak Berhasil Di Bypass\n` + err, id)
                    })
            break

        case 'assalamualaikum':
        case 'assalamu\'alaikum':
        case 'assalamuallaikum': 
        case 'assalamualikum':    
        case 'assallamualaikum': 
        case 'asalamuallaikum':    
        case 'asalamualaikum':  
        case 'assalammualaikum':
      return iluser.reply(message.from, `Waalaikumsalam wr.wb *${undefined, pushname}* ☺ \nKetik ${prefix}menu untuk melihat fitur bot`, message.id);
      break
        case 'samlekom':
        case 'samlkom':
        case 'samlekum':
      return iluser.reply(message.from, `Salam macam apa ini anjing`, message.id)
        case '!help':
        case '!menu':
        case '!p':
        case '!bot':
        case '!command':
        case '/menu':
        case '/help':
        case '/bot':
        case '/p':
        case '/command':
        case '#menu':
        case '#help':
        case '#p':
        case '#p':
        case '#command':
        case '-menu':
        case '-help':
        case '-bot':
        case '-p':
        case '-command':
      return iluser.reply(message.from, `Mungkin maksud anda ${prefix}menu`, message.id);
      break;
        case 'shalom':
        case 'salom':
        case 'shallom':
        case 'syaloom':
        case 'saloom':
        case 'syalom':
        case 'shaloom':
        case 'syalloom':
      return iluser.reply(message.from, `Shallom *${undefined, pushname}* ☺ \nKetik ${prefix}menu untuk melihat fitur bot`, message.id);
      break    
        case 'thanks':
        case 'thx':
        case 'tq':
        case 'terimakasih':
        case 'makasi':
        case 'terimakasi':
        case 'makasih':
        case 'thank':
        case 'arigato':
        case 'nuhun':
        case 'mksi':
        case 'mksii':
        case 'maksh':
        case 'thnk':
        case 'arigatou':
        case '#terimakasih':
      return iluser.reply(message.from, `Sama-sama *${undefined, pushname}* ☺`, message.id);
      break

        case prefix+'bacotadd':      
        	if(isReg(obj)) return  
                        if (args.length == 0) return iluser.reply(message.from, `Untuk add kata kata toxic ${prefix}bacotadd kata kata contoh\n.toxic add rafi ganteng`, message.id)
                        const toxic = body.slice(10)
                            taxax.push(toxic)
                            fs.writeFileSync('./lib/database/bacotdb.json', JSON.stringify(taxax))
                            iluser.reply(message.from, `Sukses Menambahkan *${toxic}* ke database ${mess.iklan}`, message.id)
                            break
        case prefix+'bacot':               
            if(isReg(obj)) return
                if (isLimit(serial)) return 
                
                await limitAdd(serial)
                let bacotkun = bacot[Math.floor(Math.random() * bacot.length)]
                iluser.reply(from, bacotkun, message.id)              
             break
        break
            case prefix+'film':{
                if(isReg(obj)) return
                if (isLimit(serial)) return 
                
                await limitAdd(serial)
                if (args.lenght === 1) return iluser.reply(message.from, 'Contoh: .film Kungfu Hustle', message.id)
                const animdl = body.slice(6)
                const animekun = await get.get(`https://arugaz.herokuapp.com/api/sdmovie?film=${animdl}`).json()
                if (animekun.error) return iluser.reply(message.from, animekun.result, message.id)
                const { result } = animekun
                const { rating, sinopsis, thumb, title, video } = await result
                await iluser.sendFileFromUrl(message.from, thumb, 'animedl.jpg', `*FILM DITEMUKAN !*\n➤ Judul: ${title}\n➤ Sinopsis: ${sinopsis}\n➤ Rating: ${rating}\n➤ Link Download: ${video} ${mess.iklan}`, message.id)
            }
             break
        
        case prefix+'banchat':
            if (setting.banChats === true) return
            if (isOwner){
            setting.banChats = true
            banChats = true
            fs.writeFileSync('./lib/database/setting.json', JSON.stringify(setting, null, 2))
            iluser.sendText(from, 'Global chat has been disabled!', id)
            }
            break

        case prefix+'unmute':
            console.log(`Unmuted ${name}!`)
            await iluser.sendSeen(from)
            break
        case prefix+'unbanchat':
            iluser.sendText(from, 'Global chat has been enable!', id)
            console.log(`Banchat ${name}!`)
            await iluser.sendSeen(from)
            break
        case prefix+'goreng':{
    if(isReg(obj)) return
    if (isImage || isQuotedImage) {
        if (isQuotedSticker) iluser.reply(message.from, config.msg.waitConvert('webp (jpg 3x)', 'webp (jpg 3x)', 'Sedang menggoreng stiker:v (4 kali)'), id)
        else iluser.reply(message.from, config.msg.waitConvert('jpg', 'jpg', 'Sedang menggoreng:v (4 kali)'), id)
        const encryptMedia = !isImage && (isQuotedImage || isQuotedSticker) ? quotedMsg : message
        console.log(color('[WAPI]', 'green'), 'Downloading and decrypt media...')
        const mediaData = await decryptMedia(encryptMedia)
        // .complexFilter('eq=saturation=100:contrast=10:brightness=0.1:gamma=10,noise=alls=60:allf=t,unsharp=5:5:1.25:5:5:1,eq=gamma_r=100')
        const filter = 'eq=saturation=100,unsharp=5:5:1.25:5:5:1.0,noise=alls=40:allf=t'
        const quality = '20'
        let fry = await stream2Buffer(write => {
            ffmpeg(buffer2Stream(mediaData))
                .complexFilter(filter + ',scale=iw/2:ih/2')
                .outputOptions('-q:v', quality)
                .format('mjpeg')
                .on('start', commandLine => console.log(color('[FFmpeg]'), commandLine))
                .on('progress', progress => console.log(color('[FFmpeg]'), progress))
                .on('end', () => console.log(color('[FFmpeg]'), 'Processing finished!'))
                .stream(write)
        })
        fry = await stream2Buffer(write => {
            ffmpeg(buffer2Stream(fry))
                .complexFilter(filter + ',scale=iw/2:ih/2')
                .outputOptions('-q:v', quality)
                .format('mjpeg')
                .on('start', commandLine => console.log(color('[FFmpeg]'), commandLine))
                .on('progress', progress => console.log(color('[FFmpeg]'), progress))
                .on('end', () => console.log(color('[FFmpeg]'), 'Processing finished!'))
                .stream(write)
        })
        fry = await stream2Buffer(write => {
            ffmpeg(buffer2Stream(fry))
                .complexFilter(filter)
                .outputOptions('-q:v', quality)
                .format('mjpeg')
                .on('start', commandLine => console.log(color('[FFmpeg]'), commandLine))
                .on('progress', progress => console.log(color('[FFmpeg]'), progress))
                .on('end', () => console.log(color('[FFmpeg]'), 'Processing finished!'))
                .stream(write)
        })
        fry = await stream2Buffer(write => {
            ffmpeg(buffer2Stream(fry))
                .complexFilter(filter)
                .outputOptions('-q:v', quality)
                .format('mjpeg')
                .on('start', commandLine => console.log(color('[FFmpeg]'), commandLine))
                .on('progress', progress => console.log(color('[FFmpeg]'), progress))
                .on('end', () => console.log(color('[FFmpeg]'), 'Processing finished!'))
                .stream(write)
        })
        if (isQuotedSticker) {
            fry = await processSticker(fry, 'contain')
            iluser.sendRawWebpAsSticker(from, fry.toString('base64'))
        }
        else iluser.sendFile(from, baseURI(fry, 'image/jpg'), 'deepfry.jpg', `Nih gorengannya (deepfry) ${mess.iklan}`, id)
    } else iluser.reply(message.from, config.msg.noMedia, id)
}
    break
        case prefix+'sticker':
        case prefix+'stiker': // By Slavyan
        case prefix+'sk':
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
                //if (!isOwner) return await iluser.reply(message.from, `TUTUP`, id)
                if (isMedia && isImage || isQuotedImage) {
                    const packname = `By: iluser_BOT WhatsApp`
                    const author = `instagram.com/iluser.bot`
                    exif.create(packname, author)
                    const encryptMedia = isQuotedImage ? quotedMsg : message
                    const mediaData = await decryptMedia(encryptMedia, uaOverride)
                    webp.buffer2webpbuffer(mediaData, 'jpg', '-q 100')
                        .then(async (res) => {
                            sharp(res)
                                .resize(512, 512, {
                                    fit: 'contain',
                                    background: {
                                        r: 0,
                                        g: 0,
                                        b: 0,
                                        alpha: 0
                                    }
                                })
                                .toFile(`./temp/stage_${sender.id}.webp`, async (err) => {
                                    if (err) return console.error(err)
                                    await exec(`webpmux -set exif ./temp/data.exif ./temp/stage_${sender.id}.webp -o ./temp/${sender.id}.webp`, { log: true })
                                    if (fs.existsSync(`./temp/${sender.id}.webp`)) {
                                        const data = fs.readFileSync(`./temp/${sender.id}.webp`)
                                        const base64 = `data:image/webp;base64,${data.toString('base64')}`
                                        await iluser.sendRawWebpAsSticker(from, base64)
                                        iluser.reply(message.from, `${mess.iklann}`,id)
                                        fs.unlinkSync(`./temp/${sender.id}.webp`)
                                        fs.unlinkSync(`./temp/stage_${sender.id}.webp`)
                                        fs.unlinkSync('./temp/data.exif')
                                    }
                                })
                        })
                        .catch(async (err) => {
                            console.error(err)
                            await iluser.reply(message.from, 'Error!', id)
                        })
                    } else {
                        await iluser.reply(message.from, `Format salah`, id)
                    }
            break
        /* case prefix+'sticker':
        case prefix+'stiker':
        case prefix+'sk':
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            if (isImage || isQuotedImage || isQuotedFile) {
        const encryptMedia = isQuotedImage || isQuotedFile ? quotedMsg : message
        const _mimetype = encryptMedia.mimetype
        const mediaData = await decryptMedia(encryptMedia)
        if (_mimetype === 'image/webp') iluser.sendRawWebpAsSticker(message.from, mediaData.toString('base64'), false)

        const sticker = await processSticker(mediaData, 'contain')
        await iluser.sendRawWebpAsSticker(message.from, sticker.toString('base64'), false)
        iluser.reply(message.from, `${mess.iklann}`,id)
    } else iluser.reply(message.from, mess.error.St, message.id)
		break */
        case prefix+'ttp':
            if(isReg(obj)) return
                if (isLimit(serial)) return 
            
                await limitAdd(serial)
                try
                {
                    const string = body.toLowerCase().includes('.ttp') ? body.slice(5) : body.slice(5)
                    if(args)
                    {
                        if(quotedMsgObj == null)
                        {
                            const gasMake = await getStickerMaker(string)
                            if(gasMake.status == true)
                            {
                                try{
                                    await iluser.sendImageAsSticker(message.from, gasMake.base64)
                                    iluser.reply(message.from, `${mess.iklann}`,id)
                                }catch(err) {
                                    await iluser.reply(message.from, 'Gagal membuat.', message.id)
                                } 
                            }else{
                                await iluser.reply(message.from, gasMake.reason, message.id)
                            }
                        }else if(quotedMsgObj != null){
                            const gasMake = await getStickerMaker(quotedMsgObj.body)
                            if(gasMake.status == true)
                            {
                                try{
                                    await iluser.sendImageAsSticker(message.from, gasMake.base64)
                                    iluser.reply(message.from, `${mess.iklann}`,id)
                                }catch(err) {
                                    await iluser.reply(message.from, 'Gagal membuat.', message.id)
                                } 
                            }else{
                                await iluser.reply(message.from, gasMake.reason, message.id)
                            }
                        }
                       
                    }else{
                        await iluser.reply(message.from, 'Tidak boleh kosong.', message.id)
                    }
                }catch(error)
                {
                    console.log(error)
                }
            break;
        case prefix+'ttp2':
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            if (args.length === 1) return iluser.reply(message.from, `Contoh ${prefix}ttp2 iluser_BOT`, message.id)
            const ttp2t = body.slice(6)
            const lttp2 = ["Orange","White","Green","Black","Purple","Red","Yellow","Blue","Navy","Grey","Magenta","Brown","Gold"]
            const rttp2 = lttp2[Math.floor(Math.random() * (lttp2.length))]
            await iluser.sendStickerfromUrl(message.from, `https://api.vhtear.com/textmaker?text=${ttp2t}&warna=${rttp2}&apikey=${vhtearkey}`)
            iluser.reply(message.from, `${mess.iklann}`,id)
            break
        case prefix+'ttg':
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            try {
                if (quotedMsgObj == null) {
                    if (args.length === 1) return iluser.reply(message.from, `Contoh ${prefix}ttg aku bukan boneka`, message.id)
                        await iluser.sendStickerfromUrl(message.from, `https://api.vhtear.com/textxgif?text=${body.slice(5)}&apikey=${vhtearkey}`)
                    	iluser.reply(message.from, `${mess.iklann}`,id)
                } else {
                    await iluser.sendStickerfromUrl(message.from, `https://api.vhtear.com/textxgif?text=${quotedMsgObj}&apikey=${vhtearkey}`)
                    iluser.reply(message.from, `${mess.iklann}`,id)
                }
            } catch(e) {
                console.log(e)
                iluser.reply(message.from, 'Maaf, Server sedang Error')
            }
            break
        
        case prefix+'toimg':
            if(isReg(obj)) return
            if (quotedMsg && quotedMsg.type == 'sticker') {
                if (isLimit(serial)) return 
            
                await limitAdd(serial)
                const mediaData = await decryptMedia(quotedMsg)
                const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                await iluser.sendFile(message.from, imageBase64, 'imagesticker.jpg', `${mess.iklann}`, message.id)
            } else if (!quotedMsg) return iluser.reply(message.from, `Tag stikernya synk`, message.id)
            break
        case prefix+'wasted':
                if (isMedia && type === 'image' || isQuotedImage) {
                const encryptMediaWt = isQuotedImage ? quotedMsg : message
                const dataPotoWt = await decryptMedia(encryptMediaWt, uaOverride)
                const fotoWtNya = await uploadImages(dataPotoWt, `fotoProfilWt.${sender.id}`)
                await iluser.reply(from, `${mess.wait}`, id)
                await iluser.sendFileFromUrl(from, `https://some-random-api.ml/canvas/wasted?avatar=${fotoWtNya}`, 'Wasted.jpg', `${mess.iklann}`, id)
                console.log('Success sending Wasted image!')
                .catch(async (err) => {
                    console.error(err)
                    await iluser.reply(from, 'Error!', id)
                })
            } else {
                await iluser.reply(from, `Format Salah!`, id)
            }
            break
        case prefix+'kiss':
                try {
                    if (isMedia && isImage) {
                        const ppRaw = await iluser.getProfilePicFromServer(sender.id)
                        const ppSecond = await decryptMedia(message, uaOverride)
                        if (ppRaw === undefined) {
                            var ppFirst = errorImg
                        } else {
                            ppFirst = ppRaw
                        }
                        canvas.Canvas.kiss(ppFirst, ppSecond)
                            .then(async (buffer) => {
                                canvas.write(buffer, `${sender.id}_kiss.png`)
                                await iluser.sendFile(from, `${sender.id}_kiss.png`, `${sender.id}_kiss.png`, '', id)
                                fs.unlinkSync(`${sender.id}_kiss.png`)
                            })
                    } else if (quotedMsg) {
                        const ppRaw = await iluser.getProfilePicFromServer(sender.id)
                        const ppSecond = await iluser.getProfilePicFromServer(quotedMsgObj.sender.id)
                        if (ppRaw === undefined) {
                            var ppFirsts = errorImg
                        } else {
                            ppFirsts = ppRaw
                        }
                        canvas.Canvas.kiss(ppFirsts, ppSecond)
                            .then(async (buffer) => {
                                canvas.write(buffer, `${sender.id}_kiss.png`)
                                await iluser.sendFile(from, `${sender.id}_kiss.png`, `${sender.id}_kiss.png`, '', id)
                                fs.unlinkSync(`${sender.id}_kiss.png`)
                            })
                    } else {
                        await iluser.reply(from, `Format Salah!`, id)
                    }
                } catch (err) {
                    console.error(err)
                    await iluser.reply(from, 'Error!', id)
                }
            break
        case prefix+'stickergif':
        case prefix+'stikergif':
        case prefix+'sgif':
            if(isReg(obj)) return
                if (isLimit(serial)) return 
            
                await limitAdd(serial)
                if (isMedia && type === 'video' || mimetype === 'image/gif') {
                    try {
                        const mediaData = await decryptMedia(message, uaOverride)
                        const videoBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
                        await iluser.sendMp4AsSticker(from, videoBase64, { fps: 24, startTime: `00:00:00.0`, endTime : `00:00:05.0`, loop: 0, crop : true })
                            .then(async () => {
                                console.log(`Sticker processed for ${processTime(t, moment())} seconds`)
                                await iluser.reply(from, `${mess.iklann}`, id)
                            })
                    } catch (err) {
                        console.error(err)
                        await iluser.reply(message.from, `Kebesaran om videonya`, id)
                    }
                } else if (isQuotedGif || isQuotedVideo) {
                    try {
                        const mediaData = await decryptMedia(quotedMsg, uaOverride)
                        const videoBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                        await iluser.sendMp4AsSticker(from, videoBase64, { fps: 30, startTime: `00:00:00.0`, endTime : `00:00:03.0`, loop: 0, crop : true })
                            .then(async () => {
                                console.log(`Sticker processed for ${processTime(t, moment())} seconds`)
                                await iluser.reply(from, `${mess.iklann}`, id)
                            })
                    } catch (err) {
                        console.error(err)
                        await iluser.reply(message.from, `Kebesaran om videonya`, id)
                    }
                } else {
                    await iluser.reply(message.from, `Format Salah`, id)
                }
            break
        case prefix+'stickergif2': 
        case prefix+'stikergif2': 
        case prefix+'sgif2':{ 
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            if(isReg(obj)) return
        	const encryptMedia = isQuotedVideo || isQuotedFile ? quotedMsg : message
	        const mimetype = encryptMedia.mimetype
	        if (/image/.test(mimetype)) iluser.reply(message.from, config.msg.recommend(this.usedPrefix, 'stiker'), message.id)
	        console.log(color('[WAPI]'), 'Downloading and decrypting media...')
	        const mediaData = await decryptMedia(encryptMedia)
	        if (mimetype === 'image/webp') iluser.sendRawWebpAsSticker(message.from, mediaData.toString('base64'), true)
	        const pathFormat = {
	            name: new Date() * 1,
	            ext: mimetype.replace(/.+\//, '.'),
	            dir: path.resolve(path.join('temp', mimetype.replace(/\/.+/, '')))
	        }
	        const tempPath = path.format(pathFormat)
	        fs.mkdirSync(pathFormat.dir, { recursive: true })
	        fs.writeFileSync(tempPath, mediaData)
	        const sticker = await stream2Buffer(write => {
	            ffmpeg(tempPath)
	                .inputOptions([
	                    '-t', config.stickerGIF.duration || '5'
	                ])
	                .complexFilter([
	                    (config.stickerGIF.fps >= 1 ? 'fps=' + config.stickerGIF.fps + ',' : '') + 'scale=512:512:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=512:512:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1'
	                ])
	                .outputOptions([
	                    '-qscale', config.stickerGIF.quality,
	                    '-fs', config.stickerGIF.target || '1M',
	                    '-loop', '0',
	                    '-an',
	                    '-vsync', '0'
	                ])
	                .format('webp')
	                .on('start', commandLine => console.log(color('[FFmpeg]'), commandLine))
	                .on('progress', progress => console.log(color('[FFmpeg]'), progress))
	                .on('end', () => console.log(color('[FFmpeg]'), 'Processing finished!'))
	                .stream(write)
	        })
	        iluser.sendRawWebpAsSticker(message.from, sticker.toString('base64'), true).catch(() =>{ iluser.reply(message.from, `Size media terlalu besar.\nTurunkan resolusi atau perkecil ukuran video/gif`, message.id)
	        			})
	        fs.unlinkSync(tempPath)
	        
	    }
	    break;

        case prefix+'stickerlightning':
        case prefix+'slightning':
        case prefix+'slight':
        	if (!isOwner) return iluser.reply(from, `Di tutup todd`, id)
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            if (isMedia && type === 'image') {
                const mediaData = await decryptMedia(message, uaOverride)
                const getUrle = await uploadImages(mediaData, false)
                const imgnye = await stickerlight(getUrle)
                const Slight = imgnye.result.imgUrl
                await iluser.sendStickerfromUrl(message.from, Slight)
            } else if (quotedMsg && quotedMsg.type == 'image') {
                const mediaData = await decryptMedia(quotedMsg, uaOverride)
                const getUrle = await uploadImages(mediaData, false)
                const imgnye = await stickerlight(getUrle)
                const Slight = imgnye.result.imgUrl
                await iluser.sendStickerfromUrl(message.from, Slight)
                iluser.reply(message.from, `${mess.iklann}`,id)
            } else {
                await iluser.reply(message.from, `Format Salah\n\n⚠️ Kirim/balas gambar dengan ${prefix}slight`, message.id)
            }
            break
        case prefix+'stickerfire':
        case prefix+'sfire':
        	if (!isOwner) return iluser.reply(from, `Di tutup todd`, id)
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            if (isMedia && type === 'image') {
                const mediaData = await decryptMedia(message, uaOverride)
                const getUrli = await uploadImages(mediaData, false)
                const imgnya = await stickerburn(getUrli)
                const Sfire = imgnya.result.imgUrl
                await iluser.sendStickerfromUrl(message.from, Sfire)
            } else if (quotedMsg && quotedMsg.type == 'image') {
                const mediaData = await decryptMedia(quotedMsg, uaOverride)
                const getUrli = await uploadImages(mediaData, false)
                const imgnya = await stickerburn(getUrli)
                const Sfire = imgnya.result.imgUrl
                await iluser.sendStickerfromUrl(message.from, Sfire)
                iluser.reply(message.from, `${mess.iklann}`,id)
            } else {
                await iluser.reply(message.from, `Format Salah\n\n⚠️ Kirim/balas gambar dengan ${prefix}sfire`, message.id)
            }
            break
        case prefix+'blackpink':
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            if (isLimit(serial)) return 
            if (args.length === 1) return iluser.reply(message.from, `Contoh *${prefix}blackpink iluser_BOT*`, message.id)
            const blpk = body.slice(11)
            if (blpk.length > 10) return iluser.reply(message.from, '_Maksimal 10 huruf!_', message.id)
            await iluser.sendFileFromUrl(from, `https://api.vhtear.com/blackpinkicon?text=${blpk}&apikey=${vhtearkey}`, 'blackpink.jpg', `${mess.iklann}`, message.id)
            break
        case prefix+'thunder':
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            if (args.length === 1) return iluser.reply(message.from, `Contoh *${prefix}thunder iluser*`, message.id)
            const thndr = body.slice(9)
            if (thndr.length > 10) return iluser.reply(message.from, '_Maksimal 10 huruf!_', message.id)
            await iluser.sendFileFromUrl(message.from, `https://api.vhtear.com/thundertext?text=${thndr}&apikey=${vhtearkey}`, 'thndr.jpg', `${mess.iklann}`, message.id)
            break
        case prefix+'pornhub':
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            if (args.length === 1) return iluser.reply(message.from, `Contoh *${prefix}pornhub |iluser|Dev iluser_BOT*`, message.id)
            argz = body.trim().split('|')
            if (argz.length >= 2) {
                const lpornhub = argz[1]
                const lpornhub2 = argz[2]
                if (lpornhub.length > 10) return iluser.reply(message.from, '*Teks1 Terlalu Panjang!*\n_Maksimal 10 huruf!_', message.id)
                if (lpornhub2.length > 10) return iluser.reply(message.from, '*Teks2 Terlalu Panjang!*\n_Maksimal 10 huruf!_', message.id)
                iluser.sendFileFromUrl(message.from, `https://api.vhtear.com/pornlogo?text1=${lpornhub}&text2=${lpornhub2}&apikey=${vhtearkey}`,'Kontol.jpg',`${mess.iklann}`, message.id)
            } else {
                await iluser.reply(message.from, `Contoh *${prefix}pornhub |iluser|BOT*`, message.id)
            }
            break
        case prefix+'groupinfo' :
            if(isReg(obj)) return
            if (!isGroupMsg) return iluser.reply(message.from, '⛔ *AKSES DI TOLAK* ⛔\n\nHanya dapat di gunakan di dalam grup', message.id)
            isMuted(chatId) == false
            var totalMem = chat.groupMetadata.participants.length
            var desc = chat.groupMetadata.desc
            var groupname = name
            var welgrp = welkom.includes(chat.id)
            var leftgrp = left.includes(chat.id)
            var ngrp = nsfw_.includes(chat.id)
            var antlink = antilink.includes(chat.id)
           // var stprt = antisticker.includes(chat.id)
            var antbad = antibadword.includes(chat.id)
            var grouppic = await iluser.getProfilePicFromServer(chat.id)
            if (grouppic == undefined) {
                 var pfp = errorurl
            } else {
                 var pfp = grouppic 
            }
            await iluser.sendFileFromUrl(message.from, pfp, 'group.png', `*「 GROUP INFO 」*
*• *Name : ${groupname}* 
*• Members : ${totalMem}*
*• Welcome : ${welgrp ? 'Aktif' : 'Tidak Aktif'}*
*• Left : ${leftgrp ? 'Aktif' : 'Tidak Aktif'}*
*• Anti Sticker : ${stprt ? 'Aktif' : 'Tidak Aktif'}*
*• Anti Link : ${antlink ? 'Aktif' : 'Tidak Aktif'}*
*• Anti Badword : ${antbad ? 'Aktif' : 'Tidak Aktif'}*
*• Group Description* 
${desc}`)
            break
        case prefix+'quotes2' :
        case prefix+'quote2' :
            if(isReg(obj)) return
            iluser.sendText(message.from, quotedd())
            break
        case prefix+'quote':
        case prefix+'quotes':
            if(isReg(obj)) return
            if (isBlocked) return await iluser.reply(message.from, mess.blockk, message.id)
            const quotes = await axios.get('https://tobz-api.herokuapp.com/api/randomquotes?apikey='+tobzkey)
            iluser.reply(message.from, `${quotes.data.quotes}\n\n- ${quotes.data.author}`, message.id)
            break;
        case prefix+'tts':
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            try {
                if (args.length === 1) return iluser.reply(message.from, `Kirim perintah *${prefix}tts [ Bahasa ] [ Teks ]*, contoh *${prefix}tts id Pagi beban negara*`, message.id)
                var dataBhs = args[1]      
                const ttsHZ = require('node-gtts')(dataBhs)
                var dataText = body.slice(8)
                if (dataText === '') return iluser.reply(message.from, 'Masukkan teksnya', message.id)
                if (dataText.length > 500) return iluser.reply(message.from, 'Teks terlalu panjang!', message.id)
                var dataBhs = body.slice(5, 7)
                ttsHZ.save('./media/tts.mp3', dataText, function () {
                iluser.sendPtt(message.from, './media/tts.mp3', message.id)
                iluser.reply(message.from, `${mess.iklann}`,id)
                })
            } catch (err){
                console.log(err)
                iluser.reply(message.from, `[ERROR] Teks tidak ada, atau kode bahasa *${dataBhs}* tidak support\n~> *${prefix}bahasa* untuk melihat list kode bahasa`, message.id);
            }
            break
        case prefix+'koin':
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            const side = Math.floor(Math.random() * 2) + 1
            if (side == 1) {
              await iluser.sendStickerfromUrl(message.from, 'https://i.ibb.co/YTWZrZV/2003-indonesia-500-rupiah-copy.png', { method: 'get' })
              await iluser.reply(message.from, `${mess.iklann}`,id)
            } else {
              await iluser.sendStickerfromUrl(message.from, 'https://i.ibb.co/bLsRM2P/2003-indonesia-500-rupiah-copy-1.png', { method: 'get' })
              await iluser.reply(message.from, `${mess.iklann}`,id)
            }
            break
        case prefix+'dadu':
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            const dice = Math.floor(Math.random() * 6) + 1
            await iluser.sendStickerfromUrl(message.from, 'https://www.random.org/dice/dice' + dice + '.png', { method: 'get' })
            await iluser.reply(message.from, `${mess.iklann}`,id)
            break
        case prefix+'kapankah':
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            const when = args.join(' ')
            const ans = kapankah[Math.floor(Math.random() * (kapankah.length))]
            if (!when) iluser.reply(message.from, `⚠️ Format salah! Ketik *${prefix}menu* untuk penggunaan.`, message.id)
            await iluser.sendText(message.from, `Pertanyaan: *${when}* \n\nJawaban: ${ans}`)
            break
        case prefix+'nilai':
        case prefix+'rate':
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            const rating = args.join(' ')
            const awr = rate[Math.floor(Math.random() * (rate.length))]
            if (!rating) iluser.reply(message.from, `⚠️ Format salah! Ketik *${prefix}menu* untuk penggunaan.`, message.id)
            await iluser.sendText(message.from, `Pertanyaan: *${rating}* \n\nJawaban: ${awr}`)
            break
        case prefix+'apakah':
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            const nanya = args.join(' ')
            const jawab = apakah[Math.floor(Math.random() * (apakah.length))]
            if (!nanya) iluser.reply(message.from, `⚠️ Format salah! Ketik *${prefix}menu* untuk penggunaan.`, message.id)
            await iluser.sendText(message.from, `Pertanyaan: *${nanya}* \n\nJawaban: ${jawab}`)
            break
         case prefix+'bisakah':
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            const bsk = args.join(' ')
            const jbsk = bisakah[Math.floor(Math.random() * (bisakah.length))]
            if (!bsk) iluser.reply(message.from, `⚠️ Format salah! Ketik *${prefix}menu* untuk penggunaan.`, message.id)
            await iluser.sendText(message.from, `Pertanyaan: *${bsk}* \n\nJawaban: ${jbsk}`)
            break
        case prefix+'owner':
        case prefix+'creator':
        case '#owner':
            await iluser.sendContact(chatId, `6283142933894@c.us`, message.id)
            iluser.reply(message.from, 'Silahkan hubungi creator bot dengan cara yang sopan dan langsung ke poin pembahasan', message.id)
            break
        case prefix+'resetsticker':
            if(isReg(obj)) return
            if (!isAdmin) return iluser.reply(from, `Maaf, perintah ini hanya dapat dilakukan oleh user premium`, id)
            if (!args.length === 1) return iluser.reply(from, `Masukkan nomornya, *GUNAKAN AWALAN 62*\ncontoh: ${prefix}resetsticker 62852262236155 / ${prefix}resetsticker @member`, id) 
            const nomebr = args[1]
            let textz = nomebr.replace(/[-\s+@c.us]/g,'')
            const cuss = textz + '@c.us'
                var found = false
                Object.keys(stickerspam).forEach((i) => {
                    if(stickerspam[i].id == cuss){
                        found = i
                    }
                })
                if (found !== false) {
                    stickerspam[found].msg = 1;
                    const result = 'DB Sticker Spam has been reset'
                    console.log(stickerspam[found])
                    fs.writeFileSync('./lib/database/stickerspam.json',JSON.stringify(stickerspam));
                    iluser.reply(from, result, from)
                    limitAdd(serial)
                } else {
                        iluser.reply(from, `Maaf, Nomor itu tidak terdaftar di database!`, id)
                }
            break
        case prefix+'resetbadword':
            if(isReg(obj)) return
                    if (isLimit(serial)) return 
            
                    await limitAdd(serial)
                    if (!isGroupAdmins) return iluser.reply(message.from, '⛔ *AKSES DI TOLAK* ⛔\n\nnte admin?')  
                    if (!args.length === 1) return iluser.reply(message.from, `Masukkan nomornya, *GUNAKAN AWALAN 62*\ncontoh: #resetbadword 6285112554122 / ${prefix}resetbadword @member`, message.id) 
                    const nomer = args[1]
                    let text = nomer.replace(/[-\s+@c.us]/g,'')
                    const cus = text + '@c.us'
                        var found = false
                        Object.keys(msgBadword).forEach((i) => {
                            if(msgBadword[i].id == cus){
                                found = i
                            }
                        })
                        if (found !== false) {
                            msgBadword[found].msg = 1;
                            const result = 'DB Badword Spam has been reset'
                            console.log(msgBadword[found])
                            fs.writeFileSync('./lib/database/msgBadword.json',JSON.stringify(msgBadword));
                            iluser.reply(message.from, result, from)
                        } else {
                                iluser.reply(message.from, `${monospace(`Di database ngga ada nomer itu dik`)}`, message.id)
                        }
                break
        // ON OFF
        case `${prefix}autosticker`:
        	if(isReg(obj)) return
            if (!isGroupMsg) return iluser.reply(message.from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (!isGroupAdmins) return iluser.reply(message.from, `Perintah ini hanya bisa di gunakan oleh Admin group!`, id)
            if (!isBotGroupAdmins) return iluser.reply(message.from, `Perintah ini hanya bisa di gunakan jika Bot menjadi Admin!`, id)
            if (args[1] == 'enable') {
                var cek = autostick.includes(chatId);
                if(cek){
                    return iluser.reply(message.from, `AutoSticker\n\n*ALREADY ACTIVATED*`, id)
                } else {
                    autostick.push(chatId)
                    fs.writeFileSync('./lib/database/autostick.json', JSON.stringify(autostick))
                    iluser.reply(message.from, `AutoSticker\n\n*ACTIVATED*`, id)
                }
            } else if (args[1] == 'disable') {
                var cek = autostick.includes(chatId);
                if(!cek){
                    return iluser.reply(message.from, `AutoSticker\n\n*ALREADY DEACTIVATED*`, id)
                } else {
                    let nixx = autostick.indexOf(chatId)
                    autostick.splice(nixx, 1)
                    fs.writeFileSync('./lib/database/autostick.json', JSON.stringify(autostick))
                    iluser.reply(message.from, `AutoSticker\n\n*DEACTIVATED*`, id)
                }
            } else {
                iluser.reply(message.from, `Pilih enable atau disable udin!`, id)
            }
            break
        case prefix+'antilink':
            if(isReg(obj)) return
            if (!isGroupMsg) return iluser.reply(message.from, `Perintah ini hanya bisa di gunakan dalam group!`, message.id)
            if (!isGroupAdmins) return iluser.reply(message.from, `⛔ *AKSES DI TOLAK* ⛔\n\nnte admin?`, message.id)
            if (!isBotGroupAdmins) return iluser.reply(message.from, `Perintah ini hanya bisa di gunakan jika Bot menjadi Admin!`, message.id)
            if (args[1] == 'enable') {
                var cek = antilink.includes(chatId);
                if(cek){
                    return iluser.reply(message.from, `「 ANTI GROUP LINK 」\n\n   *ALREADY ACTIVATED ON ${name}*`, message.id) //if number already exists on database
                } else {
                    antilink.push(chatId)
                    fs.writeFileSync('./lib/database/antilink.json', JSON.stringify(antilink))
                    iluser.reply(message.from, `「 ANTI GROUP LINK 」\n\n   *ACTIVATED*\n`, message.id)
                }
            } else if (args[1] == 'disable') {
                var cek = antilink.includes(chatId);
                if(!cek){
                    return iluser.reply(message.from, `「 ANTI GROUP LINK 」\n\n   *ALREADY DEACTIVATED ON ${name}*`, message.id) //if number already exists on database
                } else {
                    let nixx = antilink.indexOf(chatId)
                    antilink.splice(nixx, 1)
                    fs.writeFileSync('./lib/database/antilink.json', JSON.stringify(antilink))
                    iluser.reply(message.from, `「 ANTI GROUP LINK 」\n\n   *DEACTIVATED*\n`, message.id)
                }
            } else {
                iluser.reply(message.from, `Pilih enable atau disable udin!`, message.id)
            }
            break    
       /* case prefix+'antisticker':
            if(isReg(obj)) return
            if (!isGroupMsg) return iluser.reply(message.from, `Perintah ini hanya bisa di gunakan dalam group!`, message.id)
            if (!isGroupAdmins) return iluser.reply(message.from, `⛔ *AKSES DI TOLAK* ⛔\n\nnte admin?`, message.id)
            if (!isBotGroupAdmins) return iluser.reply(message.from, `Perintah ini hanya bisa di gunakan jika Bot menjadi Admin!`, message.id)
            if (args[1] == 'enable') {
                var cek = antisticker.includes(chatId);
                if(cek){
                    return iluser.reply(message.from, `ANTI SPAM STICKER\n\n*ALREADY ACTIVATED*`, message.id)
                 } else {
                    antisticker.push(chatId)
                    fs.writeFileSync('./lib/database/antisticker.json', JSON.stringify(antisticker))
                    iluser.reply(message.from, `\nANTI SPAM STICKER\n\n*ACTIVATED*`, message.id)
                }
            } else if (args[1] == 'disable') {
                var cek = antisticker.includes(chatId);
                if(cek){
                    return iluser.reply(message.from, `*「 ANTI SPAM STICKER 」*\n\n*ALREADY DEACTIVATED*`, message.id) //if number already exists on database
                } else {
                    let nixx = antisticker.indexOf(chatId)
                    antisticker.splice(nixx, 1)
                    fs.writeFileSync('./lib/database/antisticker.json', JSON.stringify(antisticker))
                    iluser.reply(message.from, `\nANTI SPAM STICKER\n\n*DEACTIVATED*`, message.id)
                    limitAdd(serial)
                }
            } else {
                iluser.reply(message.from, `Pilih enable atau disable udin!`, message.id)
            }
            break*/
        case prefix+'antibadword':
            if(isReg(obj)) return
            if (!isGroupMsg) return iluser.reply(message.from, `Perintah ini hanya bisa di gunakan dalam group!`, message.id)
            if (!isGroupAdmins) return iluser.reply(message.from, `⛔ *AKSES DI TOLAK* ⛔\n\nnte admin?`, message.id)
            if (!isBotGroupAdmins) return iluser.reply(message.from, `Perintah ini hanya bisa di gunakan jika Bot menjadi Admin!`, message.id)
            if (args[1] == 'enable') {
                var cek = antibadword.includes(chatId);
                if(cek){
                    return iluser.reply(message.from, `「 ANTI BADWORD 」\n\n   *ALREADY ACTIVATED ON ${name}*`, message.id)
                } else {
                    antibadword.push(chatId)
                    fs.writeFileSync('./lib/database/antibadword.json', JSON.stringify(antibadword))
                    iluser.reply(message.from, `「 ANTI BADWORD 」\n\n   *ACTIVATED* `, message.id)
                }
            } else if (args[1] == 'disable') {
                var cek = antibadword.includes(chatId);
                if(!cek){
                    return iluser.reply(message.from, `「 ANTI BADWORD 」\n\n   *ALREADY DEACTIVATED ON ${name}*`, message.id)
                } else {
                    let nixx = antibadword.indexOf(chatId)
                    antibadword.splice(nixx, 1)
                    fs.writeFileSync('./lib/database/antibadword.json', JSON.stringify(antibadword))
                    iluser.reply(message.from, `「 ANTI BADWORD 」\n\n   *DEACTIVATED*`, message.id)
                }
            } else {
                iluser.reply(message.from, `Pilih enable atau disable udin!`, message.id)
            } 
            break   
          case `${prefix}stylewriting`:
          	if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            if (args.length === 1)  return iluser.reply(message.from, 'Kirim perintah *@sandwriting [ Teks ]*\nContoh *@sandwriting HARDIANTO GANS*', message.id)
            const swrt1 = body.slice(13)
            try {
            const swrt2 = await axios.get('https://api.vhtear.com/sand_writing?text1=' + swrt1 + '&apikey=' + vhtearkey)
            const { imgUrl } = swrt2.data.result
            const swrt3 = `*「 SAND WRITING 」*
   *Text : ${swrt1}*`
            const pictk = await bent("buffer")(imgUrl)
            const base64 = `data:image/jpg;base64,${pictk.toString("base64")}`
            iluser.sendImage(message.from, base64, `${swrt3} ${mess.iklan}`)
          } catch (err) {
            console.error(err.message)
            await iluser.sendFileFromUrl(message.from, errorurl2, 'error.png', '💔 Maaf, User tidak ditemukan')
            iluser.sendText(ownerNumber, 'Sand Writing Error : ' + err)
              }
            break
          case prefix+'lock':
            if(isReg(obj)) return
            if (!isGroupMsg) return iluser.reply(message.from, 'Fitur ini hanya bisa di gunakan dalam group', message.id)
            if (!isGroupAdmins) return iluser.reply(message.from, `⛔ *AKSES DI TOLAK* ⛔\n\nnte admin?`, message.id)
            if (!isBotGroupAdmins) return iluser.reply(message.from, 'Fitur ini hanya bisa di gunakan ketika bot menjadi admin', message.id)
                iluser.setGroupToAdminsOnly(groupId, true)
                iluser.sendTextWithMentions(message.from, `Grup telah ditutup oleh  @${sender.id.replace('@c.us','')}`, message.id)
              break
          case prefix+'unlock':
            if(isReg(obj)) return
            if (!isGroupMsg) return iluser.reply(message.from, 'Fitur ini hanya bisa di gunakan dalam group', message.id)
            if (!isGroupAdmins) return iluser.reply(message.from, `⛔ *AKSES DI TOLAK* ⛔\n\nnte admin?`, message.id)
            if (!isBotGroupAdmins) return iluser.reply(message.from, 'Fitur ini hanya bisa di gunakan ketika bot menjadi admin', message.id)
                iluser.setGroupToAdminsOnly(groupId, false)
                iluser.sendTextWithMentions(message.from, `Grup telah dibuka oleh @${sender.id.replace('@c.us','')}`, message.id)
              break        
        case prefix+'left':
            if(isReg(obj)) return
            if (!isOwner) return iluser.reply(message.from, 'Fitur ini dimatikan developer bot', message.id)
            if (!isGroupMsg) return iluser.reply(message.from, '⛔ *AKSES DI TOLAK* ⛔\n\nHanya dapat di gunakan di dalam grup', message.id)
            if (!isGroupAdmins) return iluser.reply(message.from, `⛔ *AKSES DI TOLAK* ⛔\n\nnte admin?`, message.id)
            if (args.length === 1) return iluser.reply(message.from, 'Pilih enable atau disable!', message.id)
            if (args[1].toLowerCase() === 'enable') {
                left.push(chat.id)
                fs.writeFileSync('./lib/database/left.json', JSON.stringify(left))
                iluser.reply(message.from, 'Fitur left berhasil di aktifkan di group ini!', message.id)
            } else if (args[1].toLowerCase() === 'disable') {
                left.splice(chat.id, 1)
                fs.writeFileSync('./lib/database/left.json', JSON.stringify(left))
                iluser.reply(message.from, 'Fitur left berhasil di nonaktifkan di group ini!', message.id)
            } else {
                iluser.reply(message.from, 'Pilih enable atau disable udin!', message.id)
            }
            break
        case prefix+'welcome':
            if(isReg(obj)) return
            if (!isOwner) return iluser.reply(message.from, 'Fitur ini dimatikan developer bot', message.id)
            if (!isGroupMsg) return iluser.reply(message.from, '⛔ *AKSES DI TOLAK* ⛔\n\nHanya dapat di gunakan di dalam grup', message.id)
            if (!isGroupAdmins) return iluser.reply(message.from, `⛔ *AKSES DI TOLAK* ⛔\n\nnte admin?`, message.id)
            if (args.length === 1) return iluser.reply(message.from, 'Pilih enable atau disable!', message.id)
            if (args[1].toLowerCase() === 'enable') {
                welkom.push(chat.id)
                fs.writeFileSync('./lib/database/welcome.json', JSON.stringify(welkom))
                iluser.reply(message.from, 'Fitur welcome berhasil di aktifkan di group ini!', message.id)
            } else if (args[1].toLowerCase() === 'disable') {
                welkom.splice(chat.id, 1)
                fs.writeFileSync('./lib/database/welcome.json', JSON.stringify(welkom))
                iluser.reply(message.from, 'Fitur welcome berhasil di nonaktifkan di group ini!', message.id)
            } else {
                iluser.reply(message.from, 'Pilih enable atau disable udin!', message.id)
            }
            break
        case prefix+'gambar':
        case prefix+'images':
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            if (args.length === 1) return iluser.reply(message.from, `Contoh : *${prefix}pinterest iluser_BOT*`, message.id)
            const ptrsq = body.slice(8)
            const ptrst = await fetch(`https://api.vhtear.com/pinterest?query=${ptrsq}&apikey=${vhtearkey}`)
            if (!ptrst.ok) throw new Error(`Error Pinterest : ${ptrst.statusText}`)
            const ptrs = await ptrst.json()
            const ptrsn = ptrs.result
            const b = JSON.parse(JSON.stringify(ptrsn))
            const ptrs2 =  b[Math.floor(Math.random() * b.length)]
            const image = await bent("buffer")(ptrs2)
            const base64 = `data:image/jpg;base64,${image.toString("base64")}`
            await iluser.sendImage(message.from, base64, 'ptrs.jpg', `Hasil Pencarian: *${ptrsq}* di server Pinterest${mess.iklan}`, message.id)
            await limitAdd(serial)
            break
        case prefix+'nhview':
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            if (args.length === 1) return iluser.reply(message.from, `Contoh : *${prefix}nhview 321421*`, message.id)
            const nhsh = body.slice(11)
            const nhsh2 = await axios.get('https://mnazria.herokuapp.com/api/nhentai?code='+nhsh)
            for (let i = 0; i < nhsh2.length; i++) {
                await iluser.sendImage(message.from, nhsh2[i].data, 'thumbserc.jpg', `${mess.iklann}`, message.id)
                }
            break
        case prefix+'loli':
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            const loli = await axios.get(`https://api.vhtear.com/randomloli&apikey=${vhtearkey}`)
            const loly = loli.data.result
            iluser.sendFileFromUrl(message.from, loly.result, 'loli.jpeg', `${mess.iklann}`, message.id)
            break
        case prefix+'shota':
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            const imageToBase64 = require('image-to-base64')
            var shouta = ['shota anime','anime shota'];
            var shotaa = shouta[Math.floor(Math.random() * shouta.length)];
            var urlshot = "https://api.fdci.se/rep.php?gambar=" + shotaa;
            
            axios.get(urlshot)
            .then((result) => {
            var sht = JSON.parse(JSON.stringify(result.data));
            var shotaak =  sht[Math.floor(Math.random() * sht.length)];
            imageToBase64(shotaak)
            .then(
                (response) => {
            let img = 'data:image/jpeg;base64,'+response
            iluser.sendFile(message.from, img, "shota.jpg", `${mess.iklann}`, message.id)
                    }) 
                .catch(
                    (error) => {
                        console.log(error);
                    })
            })
            break
        case prefix+'ptl':
        case prefix+'cewe':
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            const imageToBase64a = require('image-to-base64')
            var peteel = ['eimi fukada','japanese girl','korean girl','asian girl','rusian girls','beauty girl','muslim girl','haruna kawaguchi','yuki araki'];
            var peteele = peteel[Math.floor(Math.random() * peteel.length)];
            var urlshote = "https://api.fdci.se/rep.php?gambar=" + peteele;
            
            axios.get(urlshote)
            .then((result) => {
            var peteelz = JSON.parse(JSON.stringify(result.data));
            var peteela =  peteelz[Math.floor(Math.random() * peteelz.length)];
            imageToBase64a(peteela)
            .then(
                (response) => {
            let imge = 'data:image/jpeg;base64,'+response
            iluser.sendFile(message.from, imge, "peteel.jpg", `${mess.iklann}`, message.id)
                    }) 
                .catch(
                    (error) => {
                        console.log(error);
                    })
            })
            break
        case prefix+'ptl2':
        case prefix+'cowo':
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            const imageToBase64ab = require('image-to-base64')
            var cogan = ['korean boy','japanese boy','model boy','asian boy','rusian boy','chinese boy','muslim boy'];
            var cogana = cogan[Math.floor(Math.random() * cogan.length)];
            var urlcogan = "https://api.fdci.se/rep.php?gambar=" + cogana;
            
            axios.get(urlcogan)
            .then((result) => {
            var coganb = JSON.parse(JSON.stringify(result.data));
            var coganc =  coganb[Math.floor(Math.random() * coganb.length)];
            imageToBase64ab(coganc)
            .then(
                (response) => {
            let imgee = 'data:image/jpeg;base64,'+response
            iluser.sendFile(message.from, imgee, "peteel.jpg", `${mess.iklann}`, message.id)
                    }) 
                .catch(
                    (error) => {
                        console.log(error);
                    })
            })
            break
        case prefix+'wall':
        case prefix+'wallpaper':
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            const imageToBase64abc = require('image-to-base64')
            var walla = ['abstract wallpaper','cinematic wallpaper','dark wallpaper','mountain wallpaper','galaxy wallpaper','wallpaper city','space wallpaper','nature wallpaper','dark wallpaper'];
            var wallb = walla[Math.floor(Math.random() * walla.length)];
            var urlwall = "https://api.fdci.se/rep.php?gambar=" + wallb;
            
            axios.get(urlwall)
            .then((result) => {
            var awalla = JSON.parse(JSON.stringify(result.data));
            var awallb =  awalla[Math.floor(Math.random() * awalla.length)];
            imageToBase64abc(awallb)
            .then(
                (response) => {
            let gember = 'data:image/jpeg;base64,'+response
            iluser.sendFile(message.from, gember, "peteel.jpg", `${mess.iklann}`, message.id)
                    }) 
                .catch(
                    (error) => {
                        console.log(error);
                    })
            })
            break
        case prefix+'waifu':
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            const waifu = await axios.get('https://tobz-api.herokuapp.com/api/waifu?apikey' + tobzkey)
            iluser.sendFileFromUrl(message.from, waifu.data.image, 'Waifu.jpg', `• Name : ${waifu.data.name}\n• Description : ${waifu.data.desc}\n\n• Source : ${waifu.data.source} ${mess.iklan}`, message.id)
            break
        case prefix+'husbu':
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            const diti = fs.readFileSync('./lib/database/husbu.json')
            const ditiJsin = JSON.parse(diti)
            const rindIndix = Math.floor(Math.random() * ditiJsin.length)
            const rindKiy = ditiJsin[rindIndix]
            iluser.sendFileFromUrl(message.from, rindKiy.image, 'Husbu.jpg', `${rindKiy.teks} ${mess.iklan}`, message.id)
            break
        case prefix+'randomnekonime':
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            const nekonime = await axios.get(`https://tobz-api.herokuapp.com/api/nekonime?apikey=`+tobzkey)
            const nekon = nekonime.data
            if (nekon.result.endsWith('.png')) {
                var ext = '.png'
            } else {
                var ext = '.jpg'
            }
            iluser.sendFileFromUrl(message.from, nekon.result, `Nekonime${ext}`, `${mess.iklann}`, message.id)
            break
        case prefix+'randomtrapnime':
            if(isReg(obj)) return
            if (!isGroupMsg) return iluser.reply(message.from, '⛔ *AKSES DI TOLAK* ⛔\n\nHanya dapat di gunakan di dalam grup', message.id)
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            const trapnime = await axios.get('https://tobz-api.herokuapp.com/api/nsfwtrap?apikey='+tobzkey)
            const trapn = trapnime.data.result
            if (trapn.result.endsWith('.png')) {
                var ext = '.png'
            } else {
                var ext = '.jpg'
            }
            iluser.sendImage(message.from, trapn.result, `trapnime${ext}`, `${mess.iklann}`, message.id)
            break
        case prefix+'randomhentai':
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
        	if (!isAdmin) return await iluser.reply(message.from, `⛔ *AKSES DI TOLAK* ⛔\n\nNte Premium?`, message.id);
            const hentai = await axios.get(`https://tobz-api.herokuapp.com/api/hentai?apikey=`+tobzkey)
            const henta = hentai.data
            if (henta.result.endsWith('.png')) {
                var ext = '.png'
            } else {
                var ext = '.jpg'
            }
            iluser.sendImage(message.from, henta.result, `RandomHentai${ext}`, `${mess.iklann}`, message.id)
            break
        case prefix+'randomnsfwneko':
            if(isReg(obj)) return
            if (!isAdmin) return await iluser.reply(message.from, `⛔ *AKSES DI TOLAK* ⛔\n\nNte Premium?`, message.id);
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            const nsfwneko = await axios.get('https://tobz-api.herokuapp.com/api/nsfwneko?apikey='+tobzkey)
            const nsfwn = nsfwneko.data
            if (nsfwn.result.endsWith('.png')) {
                var ext = '.png'
            } else {
                var ext = '.jpg'
            }
            iluser.sendImage(message.from, nsfwn.result, `NsfwNeko${ext}`, `${mess.iklann}`, message.id)
            break
        case prefix+'randomanime':
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            const ranime = await axios.get('https://tobz-api.herokuapp.com/api/randomanime?apikey='+tobzkey)
            const ranimen = ranime.data
            if (ranimen.result.endsWith('.png')) {
                var ext = '.png'
            } else {
                var ext = '.jpg'
            }
            iluser.sendFileFromUrl(message.from, ranimen.result, `RandomAnime${ext}`, `${mess.iklann}`, message.id)
            break    
        case prefix+'randomhug':
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            const shug = await axios.get('https://tobz-api.herokuapp.com/api/hug?apikey='+tobzkey)
            const rhug = shug.data
            iluser.sendFileFromUrl(message.from, rhug.result, `RandomHug${ext}`, `${mess.iklann}`, message.id)
            break
        case prefix+'randomcry':
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            const scry = await axios.get('https://tobz-api.herokuapp.com/api/cry?apikey='+tobzkey)
            const rcry = scry.data
            iluser.sendFileFromUrl(message.from, rcry.result, `RandomCry${ext}`, `${mess.iklann}`, message.id)
            break
        case prefix+'randomkiss':
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            const skiss = await axios.get('https://tobz-api.herokuapp.com/api/kiss?apikey='+tobzkey)
            const rkiss = skiss.data
            iluser.sendFileFromUrl(message.from, rkiss.result, `RandomKiss${ext}`, `${mess.iklann}`, message.id)
            break
        case prefix+'subreddit':
            if(isReg(obj)) return
            argz = body.trim().split(' ')
            const sr = arg[1]
            try {
            const response1 = await axios.get('https://meme-api.herokuapp.com/gimme/' + sr + '/');
            const { postLink, title, subreddit, url, nsfw, spoiler } = response1.data
            await iluser.sendFileFromUrl(message.from, `${url}`, 'Reddit.jpg', `*Title*: ${title}` + '\n\n*Postlink*:' + `${postLink}`)
            } catch(err) {
                await iluser.sendFileFromUrl(message.from, errorurl, message.id) 
            }
            break
        case prefix+'nhder':
            if(isReg(obj)) return
            if (!isOwner) return iluser.reply(message.from, '⛔ *AKSES DI TOLAK* ⛔', message.id)
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            if (args.length >=2){
                const code = args[1]
                const url = 'https://nhder.herokuapp.com/download/nhentai/'+code+'/zip'
                //const short = []
                //const shortener = await urlShortener(url)
                //url['short'] = shortener
                //short.push(url)
                //const caption = `*NEKOPOI DOWNLOADER*\n\nLink: ${shortener}`
                //iluser.reply(message.from, caption, message.id)
                iluser.sendFileFromUrl(from, url, `Hentai X iluser_BOT.zip`, ``, id)
            } else {
                iluser.sendText(message.from, 'masukan code nuclear', message.id)
            }
            break
        case prefix+'quotesnime':
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            const skya = await axios.get('https://tobz-api.herokuapp.com/api/quotesnime/random?apikey='+tobzkey)
            skya_ = skya.data
            iluser.reply(message.from, `• *Quotes* : ${skya_.quote}\n• *Character* : ${skya_.character}\n• *Anime* : ${skya_.anime}`, message.id)
            break
        case prefix+'meme':
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            const response = await axios.get('https://meme-api.herokuapp.com/gimme/indonesia')
            const { postlink, title, subreddit, url, nsfw, spoiler } = response.data
            iluser.sendFileFromUrl(message.from, `${url}`, 'meme.jpg', `${title} ${mess.iklan}`, message.id)
            break      
        case prefix+'memeindo': //Chika chantexxzz
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            const memejoke = await axios.get(`https://api-zeks.harispoppy.com/api/memeindo?apikey=apivinz`)
            const memejokes = memejoke.data
            await limitAdd(serial)
            iluser.sendImage(from, memejokes.result, 'iluser.jpg', `${mess.iklann}`, id)
            break  
        case prefix+'quoteanime':
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
                        if(args[1]){
                            if(args[1] === 'anime'){
                                const anime = body.slice(13)
                                axios.get('https://animechanapi.xyz/api/quotes?anime='+anime).then(({ data }) => {
                                    let quote = data.data[0].quote 
                                    let char = data.data[0].character
                                    let anime = data.data[0].anime
                                    iluser.sendText(message.from, `"${quote}"\n\nCharacter : ${char}\nAnime : ${anime}`)
                                }).catch(err => {
                                    iluser.sendText('Quote Char/Anime tidak ditemukan!')
                                })
                            }else{
                                const char = body.slice(12)
                                axios.get('https://animechanapi.xyz/api/quotes?char='+char).then(({ data }) => {
                                    let quote = data.data[0].quote 
                                    let char = data.data[0].character
                                    let anime = data.data[0].anime
                                    iluser.sendText(message.from, `"${quote}"\n\nCharacter : ${char}\nAnime : ${anime}`)
                                }).catch(err => {
                                    iluser.sendText('Quote Char/Anime tidak ditemukan!')
                                })
                            }
                        }else{
                            axios.get('https://animechanapi.xyz/api/quotes/random').then(({ data }) => {
                                let penyanyi = data.result[0].penyanyi 
                                let judul = data.result[0].judul
                                let linkimg = data.result[0].linkImg
                                let lagu = data.result[0].linkMp3 
                                let size = data.result[0].filesize
                                let durasi = data.result[0].duration
                                iluser.sendText(message.from, `"${quote}"\n\nCharacter : ${char}\nAnime : ${anime}`)                               
                            }).catch(err => {
                                console.log(err)
                            })
                        }
            break
        case prefix+'malanime':
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            const keyword = message.body.replace('#malanime', '')
            try {
            const data = await fetch(
           `https://api.jikan.moe/v3/search/anime?q=${keyword}`
            )
            const parsed = await data.json()
            if (!parsed) {
              await iluser.sendFileFromUrl(message.from, errorurl2, 'error.png', '💔️ Maaf, Anime tidak ditemukan', message.id)
              return null
              }
            const { title, synopsis, episodes, url, rated, score, image_url } = parsed.results[0]
            const content = `*Anime Ditemukan!*
✨️ *Title:* ${title}
🎆️ *Episodes:* ${episodes}
💌️ *Rating:* ${rated}
❤️ *Score:* ${score}
💚️ *Synopsis:* ${synopsis}
🌐️ *URL*: ${url} ${mess.iklan}`

            const image = await bent("buffer")(image_url)
            const base64 = `data:image/jpg;base64,${image.toString("base64")}`
            iluser.sendImage(message.from, base64, title, content)
           } catch (err) {
             console.error(err.message)
             await iluser.sendFileFromUrl(message.from, errorurl2, 'error.png', '💔️ Maaf, Anime tidak ditemukan')
           }
          break
        case prefix+'malcharacter':
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            const keywords = message.body.replace('#malcharacter', '')
            try {
            const data = await fetch(
           `https://api.jikan.moe/v3/search/character?q=${keywords}`
            )
            const parsed = await data.json()
            if (!parsed) {
              await iluser.sendFileFromUrl(message.from, errorurl2, 'error.png', '💔️ Maaf, Anime tidak ditemukan', message.id)
              return null
              }
            const { name, alternative_names, url, image_url } = parsed.results[0]
            const contentt = `*Anime Ditemukan!*

✨️ *Name:* ${name}
💌️ *Alternative Names:* ${alternative_names}
🌐️ *URL*: ${url}`

            const image = await bent("buffer")(image_url)
            const base64 = `data:image/jpg;base64,${image.toString("base64")}`
            iluser.sendImage(message.from, base64, name, contentt)
           } catch (err) {
             console.error(err.message)
             await iluser.sendFileFromUrl(message.from, errorurl2, 'error.png', '💔️ Maaf, Anime tidak ditemukan')
           }
          break
        // PRAY //
        case prefix+'alaudio':
            if (args.length == 0) return iluser.reply(message.from, `*_${prefix}ALaudio <nama surah>_*\nMenampilkan tautan dari audio surah tertentu. Contoh penggunaan : ${prefix}ALaudio al-fatihah\n\n*_${prefix}ALaudio <nama surah> <ayat>_*\nMengirim audio surah dan ayat tertentu beserta terjemahannya dalam bahasa Indonesia. Contoh penggunaan : ${prefix}ALaudio al-fatihah 1\n\n*_${prefix}ALaudio <nama surah> <ayat> en_*\nMengirim audio surah dan ayat tertentu beserta terjemahannya dalam bahasa Inggris. Contoh penggunaan : ${prefix}ALaudio al-fatihah 1 en`, message.id)
              ayat = "ayat"
              bhs = ""
                var responseh = await axios.get('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/islam/surah.json')
                var surah = responseh.data
                var idx = surah.data.findIndex(function(post, index) {
                  if((post.name.transliteration.id.toLowerCase() == args[0].toLowerCase())||(post.name.transliteration.en.toLowerCase() == args[0].toLowerCase()))
                    return true;
                });
                nmr = surah.data[idx].number
                if(!isNaN(nmr)) {
                  if(args.length > 2) {
                    ayat = args[1]
                  }
                  if (args.length == 2) {
                    var last = function last(array, n) {
                      if (array == null) return void 0;
                      if (n == null) return array[array.length - 1];
                      return array.slice(Math.max(array.length - n, 0));
                    };
                    ayat = last(args)
                  } 
                  pesan = ""
                  if(isNaN(ayat)) {
                    var responsih2 = await axios.get('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/islam/surah/'+nmr+'.json')
                    var {nama, nama_translations, number_of_ayah, number_of_surah,  recitations} = responsih2.data
                    pesan = pesan + "Audio Quran Surah ke-"+number_of_surah+" "+nama+" ("+nama_translations.ar+") "+ "dengan jumlah "+ number_of_ayah+" ayat\n"
                    pesan = pesan + "Dilantunkan oleh "+recitations[0].nama+" : "+recitations[0].audio_url+"\n"
                    pesan = pesan + "Dilantunkan oleh "+recitations[1].nama+" : "+recitations[1].audio_url+"\n"
                    pesan = pesan + "Dilantunkan oleh "+recitations[2].nama+" : "+recitations[2].audio_url+"\n"
                    iluser.reply(message.from, pesan, message.id)
                  } else {
                    var responsih2 = await axios.get('https://api.quran.sutanlab.id/surah/'+nmr+"/"+ayat)
                    var {data} = responsih2.data
                    var last = function last(array, n) {
                      if (array == null) return void 0;
                      if (n == null) return array[array.length - 1];
                      return array.slice(Math.max(array.length - n, 0));
                    };
                    bhs = last(args)
                    pesan = ""
                    pesan = pesan + data.text.arab + "\n\n"
                    if(bhs == "en") {
                      pesan = pesan + data.translation.en
                    } else {
                      pesan = pesan + data.translation.id
                    }
                    pesan = pesan + "\n\n(Q.S. "+data.surah.nama.transliteration.id+":"+args[1]+")"
                    await iluser.sendFileFromUrl(message.from, data.audio.secondary[0])
                    await iluser.reply(message.from, pesan, message.id)
                  }
              }
              break
        case prefix+'jadwalshalat':
        case prefix+'jadwalsholat':
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            if (args.length === 1) return iluser.reply(message.from, `ontoh : *${prefix}jadwalShalat Tangerang*\nUntuk list daerah kirim perintah *${prefix}listDaerah*`)
            const daerah = body.slice(14)
            const jadwalShalat = await axios.get(`https://api.vhtear.com/jadwalsholat?query=${daerah}&apiKey=${vhtearkey}`)
            if (jadwalShalat.data.error) return iluser.reply(message.from, jadwalShalat.data.error, message.id)
            const { Shubuh, Zduhur, Ashr, Magrib, Isya, kota } = await jadwalShalat.data
            arrbulan = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
            tgl = new Date().getDate()
            bln = new Date().getMonth()
            thn = new Date().getFullYear()
            const resultJadwal = `「 JADWAL SHALAT 」\n\nJadwal shalat di ${kota}, ${tgl}-${arrbulan[bln]}-${thn}\n\nSubuh : ${Shubuh}\nDzuhur : ${Zduhur}\nAshar : ${Ashr}\nMaghrib : ${Magrib}\nIsya : ${Isya}`
            await limitAdd(serial)
            break
        case prefix+'quran':
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            if (args.length === 1) return iluser.reply(message.from, `Kirim perintah Surah Quran kamu dengan cara ketik perintah :\n*${prefix}quran* [ Urutan Surat ]\nContoh :\n*${prefix}quran 1*`, message.id)
            const qura = `https://api.vhtear.com/quran?no=${args[1]}&apikey=${vhtearkey}`
            const quraan = await axios.get(qura)
            const quraann = quraan.data
            let hasqu = `*「 AL-QURAN 」*\n\n*Surah : ${quraann.result.surah}*\n*Quran* : ${quraann.result.quran}*`
            await iluser.reply(message.from, `${hasqu} ${mess.iklan}`, message.id).catch((e) => iluser.reply(message.from, `*Terdapat kesalahan saat mencari surat ${args[1]}*`, message.id))
            await limitAdd(serial)
            break
        case prefix+'listsurah': // ARUGAZ
            if(isReg(obj)) return
            try {
                axios.get('https://raw.githubusercontent.com/ArugaZ/scraper-results/main/islam/surah.json')
                .then((response) => {
                    let hehex = '*「 DAFTAR SURAH 」*\n\n___________________________\n'
                    let nmr = 1
                    for (let i = 0; i < response.data.data.length; i++) {
                        hehex += nmr + '. ' +  monospace(response.data.data[i].name.transliteration.id.toLowerCase()) + '\n'
                        nmr++
                            }
                        hehex += '___________________________'
                    iluser.reply(message.from, hehex, message.id)
                })
            } catch(err) {
                iluser.reply(message.from, err, message.id)
            }
            break
        case prefix+'infosurah': // ARUGAZ
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            if (!isGroupMsg) return iluser.reply(message.from, `Perintah ini hanya bisa di gunakan dalam group!`, message.id)
            if (args.length == 1) return iluser.reply(message.from, `Contoh : *${prefix}infosurah al-fatihah*`, message.id)
                var responseh = await axios.get('https://raw.githubusercontent.com/ArugaZ/scraper-results/main/islam/surah.json')
                var { data } = responseh.data
                var idx = data.findIndex(function(post, index) {
                if((post.name.transliteration.id.toLowerCase() == args[1].toLowerCase())||(post.name.transliteration.en.toLowerCase() == args[1].toLowerCase()))
                    return true;
                });
                try {
                    var pesan = "*「 INFORMASI SURAH 」*\n\n___________________________\n\n"
                    pesan = pesan + "• *Nama* : "+ data[idx].name.transliteration.id + "\n" + "• *Asma* : " +data[idx].name.short+"\n"+"• *Arti* : "+data[idx].name.translation.id+"\n"+"• *Jumlah ayat* : "+data[idx].numberOfVerses+"\n"+"• *Nomor surah* : "+data[idx].number+"\n"+"Jenis : "+data[idx].revelation.id+"\n"+"• *Keterangan* : "+data[idx].tafsir.id
                    pesan += '\n\n___________________________'
                    iluser.reply(message.from, pesan, message.id)
                }catch{
                    iluser.reply(message.from, 'Data tidak ditemukan, atau nama surah salah', message.id)
                }
            break
        case prefix+'tafsir': // ARUGAZ
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            if (args.length == 1) return iluser.reply(message.from, `Contoh : *${prefix}tafsir al-fatihah 2*`, message.id)
                var responsh = await axios.get('https://raw.githubusercontent.com/ArugaZ/scraper-results/main/islam/surah.json')
                var {data} = responsh.data
                var idx = data.findIndex(function(post, index) {
                if((post.name.transliteration.id.toLowerCase() == args[1].toLowerCase())||(post.name.transliteration.en.toLowerCase() == args[1].toLowerCase()))
                    return true;
                });
            try{
                nmr = data[idx].number
                if(!isNaN(nmr)) {
                var responsih = await axios.get('https://api.quran.sutanlab.id/surah/'+nmr+"/"+args[2])
                    var {data} = responsih.data
                    pesan = ""
                    pesan = pesan + "*「 TAFSIR 」*\n\nTafsir Q.S. "+data.surah.name.transliteration.id+":"+args[2]+"\n\n"
                    pesan = pesan + data.text.arab + "\n\n"
                    pesan = pesan + "_" + data.translation.id + "_" + "\n\n" +data.tafsir.id.long
                    pesan += '\n\n___________________________'
                    iluser.reply(message.from, `${pesan} ${mess.iklan}`, message.id)
                }
            }catch{
                iluser.reply(message.from, 'Data tidak ditemukan, mungkin nama surah/ayat salah', message.id)
            }
            break
        // MEDIA //
        case prefix+'infogempa':
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            const bmkg = await axios.get('http://tobz-api.herokuapp.com/api/infogempa?apikey='+tobzkey)
            const { potensi, koordinat, lokasi, kedalaman, magnitude, waktu, map } = bmkg.data
            const hasil = `*${waktu}*\n📍 *Lokasi* : *${lokasi}*\n〽️ *Kedalaman* : *${kedalaman}*\n💢 *Magnitude* : *${magnitude}*\n🔘 *Potensi* : *${potensi}*\n📍 *Koordinat* : *${koordinat}*`
            iluser.sendFileFromUrl(message.from, map, 'shakemap.jpg', `${hasil} ${mess.iklan}`, message.id)
            break
        case prefix+'ssphone':
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            if (args.length === 1) return iluser.reply(message.from, `Contoh : *${prefix}ssphone https://neonime.vip*`, message.id)
            const ssphone = body.slice(9)
            iluser.sendFileFromUrl(message.from, `https://api.vhtear.com/ssweb?link=${ssphone}&type=phone&apikey=${vhtearkey}`, 'ssphone.jpg', `${mess.iklann}`, message.id)
            break
        case prefix+'sspc':
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            if (args.length === 1) return iluser.reply(message.from, `Contoh : *${prefix}sspc https://neonime.vip*`, message.id)
            const sspc = body.slice(6)
            iluser.sendFileFromUrl(message.from, `https://api.vhtear.com/ssweb?link=${sspc}&type=pc&apikey=${vhtearkey}`, 'sspc.jpg', `${mess.iklann}`, message.id)
            break
        case prefix+'shorturl':
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            if (args.length === 1) return iluser.reply(message.from, `Contoh : *${prefix}shorturl https://neonime.vip*`, message.id)
            const sorturl = body.slice(10)
            const surl = await axios.get('https://tobz-api.herokuapp.com/api/bitly?url='+ sorturl + '&apikey=' + tobzkey)
            const surll = surl.data
            if (surll.error) return iluser.reply(message.from, ssww.error, message.id)
            const surl2 = `Link : ${sorturl}\nShort URL : ${surll.result}`
            iluser.reply(message.from, surl2, message.id)
            break
        case prefix+'cuaca':
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            if (args.length === 1) return iluser.reply(message.from, `Contoh : *${prefix}cuaca tangerang`, message.id)
            const tempat = body.slice(7)
            const weather = await get.get('https://api-zefian.glitch.me/api/cuaca?q='+ tempat).json()
            if (weather.error) {
                iluser.reply(from, weather.error, id)
            } else {
                iluser.reply(from, `• tempat : ${weather.result.tempat}\n\n• Angin : ${weather.result.angin}\n• Cuaca : ${weather.result.cuaca}\n• Deskripsi : ${weather.result.desk}\n• Kelembapan : ${weather.result.kelembapan}\n• Suhu : ${weather.result.suhu}\n• Udara : ${weather.result.udara}`, id)
            }
            break
        case prefix+'covid':
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            argz = body.trim().split(' ')
            console.log(...argz[1])
            var slicedArgs = Array.prototype.slice.call(argz, 1);
            console.log(slicedArgs)
            const country = await slicedArgs.join(' ')
            console.log(country)
            const response2 = await axios.get('https://coronavirus-19-api.herokuapp.com/countries/' + country + '/')
            const { cases, todayCases, deaths, todayDeaths, active } = response2.data
                await iluser.sendText(message.from, '🌎️ Covid Info - ' + country + ' 🌍️\n\n✨️ Total Cases: ' + `${cases}` + '\n📆️ Today\'s Cases: ' + `${todayCases}` + '\n☣️ Total Deaths: ' + `${deaths}` + '\n☢️ Today\'s Deaths: ' + `${todayDeaths}` + '\n⛩️ Active Cases: ' + `${active} ${mess.iklan}` + '.')
            break
        case prefix+'spamcall':
            if(isReg(obj)) return
            argz = body.trim().split(' ')
            console.log(...arg[1])
            var slicedArgs = Array.prototype.slice.call(arg, 1);
            console.log(slicedArgs)
            const spam = await slicedArgs.join(' ')
            console.log(spam)
            const call2 = await axios.get('https://docs-jojo.herokuapp.com/api/spamcall?no=' + spam)
            const { logs } = call2.data
                await iluser.sendText(message.from, `Logs : ${logs}` + '.')
            break
        case prefix+'asupan':
        	if(isReg(obj)) return
            if (isBlocked) return await iluser.reply(message.from, mess.blockk, message.id)
            //if (!isOwner) return iluser.reply(message.from, 'Fitur ini sedang dalam pengembangan', message.id)
            if(args.length == 1)            
            {
                if (isLimit(serial)) return 
                const rand = getRandomText(tiktok_user)
                //const { collector } = await TikTokScraper.user(rand, {number: 0 });
                const { collector, headers } = await TikTokScraper.user(rand, {number: 0 });
                if(collector.length == 0)
                {
                    await iluser.reply(message.from, "Maaf, user tidak ditemukan atau tidak ditemukan video." ,id)
                }else{
                    const { videoUrl, webVideoUrl } = getRandomText(collector) 
                    await iluser.sendFileFromUrl(message.from, videoUrl, 'file.mp4', `Hii ${pushname} \nTarget!: @${rand}\nUrl: ${webVideoUrl} ${mess.iklan}`, false, { headers: headers })
                }
            }else if(args.length == 2)
            {
                const rand = args[1]
                const { collector, headers } = await TikTokScraper.user(rand, {number: 0 });
                if(collector.length == 0)
                {
                    await iluser.reply(message.from, "Maaf, user tidak ditemukan atau tidak ditemukan video.", message.id)
                }else{
                    const { videoUrl, webVideoUrl } = getRandomText(collector)
                    await iluser.sendFileFromUrl(message.from, videoUrl, 'file.mp4', `Hii:) \nTarget!: @${rand}\nUrl: ${webVideoUrl} ${mess.iklan}`, false, { headers: headers }, message.id)
                }limitAdd(serial)
            }
        break      
       /* case prefix+'ytmp4':
        case prefix+'yt':
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            if (args.length === 1) return iluser.reply(message.from, `Contoh ${prefix}yt https://www.youtube.com/xnxx`, message.id)
            let isLin = args[1].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
            if (!isLin) return iluser.reply(message.from, mess.error.Iv, message.id)
            try {
                const ytv = await get.get(`https://st4rz.herokuapp.com/api/ytv2?url=${args[1]}`).json()
                if (ytv.error) {
                    iluser.reply(message.from, ytv.error, message.id)
                } else {
                    
                    //if (Number(ytv.filesize.split(' MB')[0]) > 40.00) return iluser.reply(message.from, `Durasi Video Melebihi *20MB* silahkan download sendiri melalui Link:\n${ytv.result}`, message.id)
                    if (!isAdmin) return await iluser.sendFileFromUrl(message.from, ytv.thumb, 'thumb.jpg', `*Judul* : ${ytv.title}\n\n${mess.noprem}\n[${ytv.result}]`, message.id)
                    await iluser.sendFileFromUrl(message.from, ytv.thumb, 'thumb.jpg', `*Judul* : ${ytv.title}\n\n_Sedang mengirim video..._`, message.id)
                    await iluser.sendFileFromUrl(message.from, ytv.result, `${ytv.title}.mp4`, `YouTube X iluser_BOT ${mess.iklan}`, message.id).catch(() => iluser.reply(message.from, mess.error.Yt4, message.id))
                }
            } catch (er) {
                iluser.sendText(ownerNumber, 'Error ytmp4 : '+ er)
                iluser.reply(message.from, mess.error.Yt4, message.id)
            }
            break  */
       /* case prefix+'ytmp4':
        case prefix+'yt':
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            if (args.length === 1) return iluser.reply(message.from, `Contoh: ${prefix}yt https://www.youtube.com/xnxx`)
            let isLinn = args[1].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
            if (!isLinn) return iluser.reply(message.from, mess.error.Iv, message.id)
            try {
                const ytvh = await fetch(`http://api.vhtear.com/ytdl?link=${args[1]}&apikey=${vhtearkey}`)
                if (!ytvh.ok) throw new Error(`Error Get Video : ${ytvh.statusText}`)
                const ytvh2 = await ytvh.json()
                 if (ytvh2.status == false) {
                    iluser.reply(message.from, `ERROR NGAB`, message.id)
                } else {
                    //if (Number(ytvh2.result.size.split(' MB')[0]) > 40.00) return iluser.sendFileFromUrl(message.from, ytvh2.result.UrlVideo, `${title}.mp4`, `*「 YOUTUBE MP4 」*\n\n• *Judul* : ${ytvh2.result.title}\n• *Filesize* : ${ytvh2.result.size}\n\n__Maaf, Durasi video melebihi 30 MB. Silahkan download video melalui link dibawah_.\n${ytvh2.result.UrlVideo}`, message.id)
                    const { title, UrlVideo, imgUrl, size } = await ytvh2.result
                    if (!isAdmin) return await iluser.sendImage(message.from, './logo.png', 'nilogotod.png',`*「 YOUTUBE DOWNLOADER 」*\n\n${mess.noprem}\n[${UrlVideo}]`, message.id)
                    await iluser.sendFileFromUrl(message.from, UrlVideo, `${title}.mp4`, '', message.id).catch(() => iluser.reply(message.from, mess.error.Yt4, message.id))
                    await limitAdd(serial)
                }
            } catch (err) {
                iluser.sendText(ownerNumber, 'Error ytmp4 : '+ err)
                iluser.reply(message.from, mess.error.Yt4, message.id)
                console.log(err)
            }
            break */
        case prefix+'bucin':  
            if(isReg(obj)) return      	
        	if(isLimit(serial)) return
        		limitAdd(serial)
         const bucin = await get.get('https://arugaz.herokuapp.com/api/howbucins').json()
         await iluser.reply(message.from, `${bucin.desc}`, message.id)       
         break
         /*case prefix+'play':{
                if(isLimit(serial)) return
                if (args.length === 1) return iluser.reply(from, 'untuk menggunakan fitur ini .play namalagu\nContoh *.play twice TT*', id)
                 const ytplay = body.slice(6)
                 const umai = await get.get(`https://arugaytdl.herokuapp.com/search?q=${ytplay}`).json()
                 const videoid =  `${umai[0].id}`
                 if(!videoid) {
                    return iluser.reply(from,'Videonya gavalid gan.', id);
                    }fs.access('audio/'+umai[0].id+'.mp3', (err) => {
                    if(!err){
                      //  iluser.reply(from, mess.wait, id)
                        iluser.sendFile(from, 'audio/'+ umai[0].id +'.mp3', `${umai[0].id}.mp3`, '', id)
                        limitAdd(serial);
                    }else{
                        async function ytmp3(){
                            iluser.reply(from, mess.wait, id)
                            const media = `https://image.freepik.com/free-vector/headphones-illustration_39168-49.jpg`
                            var ehe = `🎶 Now Playing 🎶

🔉  *${umai[0].title}* 

Youtube Play Songs By iluser_BOT :)`
    iluser.sendFileFromUrl(from, media, 'foto.jpg', `${ehe}`, id)
                            ytdl.getInfo(umai[0].id).then(info => {
                            if (info.videoDetails.lengthSeconds > 1000){
                                iluser.reply(from, 'Video Terlalu Panjang Males BRO', id)
                            }else{
                                let stream = ytdl(umai[0].id, {
                                    quality: 'highestaudio',
                                    });
                                    ffmpeg(stream)
                                    .audioBitrate(128)
                                    .save(`audio/${umai[0].id}.mp3`)
                                    .on('end', () => {
                                    iluser.sendFile(from, 'audio/'+ umai[0].id +'.mp3', `${umai[0].id}.mp3`, '', id)
                                    });
                                limitAdd(serial);
                            }
                            })
                        }
                        ytmp3();
                    }
                })
            }
        break */
        /*case prefix+'play':  
            if(isReg(obj)) return      
            if (isBlocked) return await iluser.reply(message.from, mess.blockk, message.id)
            if (args.length == 1) return iluser.reply(message.from, `Contoh .play hanya rindu - andmesh`, message.id)
            if (isLimit(serial)) return 

                limitAdd(serial)
            axios.get(`https://arugaytdl.herokuapp.com/search?q=${body.slice(6)}`)
            .then(async (res) => {
                await iluser.sendFileFromUrl(message.from, `${res.data[0].thumbnail}`, ``, `Lagu ditemukan\n\nJudul: ${res.data[0].title}\nDurasi: ${res.data[0].duration}detik\nUploaded: ${res.data[0].uploadDate}\nView: ${res.data[0].viewCount}\n\n${mess.iklann}\n\nProses uploading...`, message.id)
                axios.get(`https://st4rz.herokuapp.com/api/yta2?url=https://youtu.be/${res.data[1].id}`)
                .then(async(rest) => {
                    await iluser.sendFile(message.from, `${rest.data.result}`, `${res.data[0].title}.mp3`, message.id).catch(() => iluser.reply(message.from, mess.error.Yt3, message.id))
                })
            })
            break   */
        case prefix+'play':
        case prefix+'lagu':
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            if (args.length == 1) return iluser.reply(message.from, `Contoh: ${prefix}play resah jadi luka`, message.id)
            try {
                const serplay = body.slice(6)
                const webplay = await fetch(`https://api.vhtear.com/ytmp3?query=${serplay}&apikey=${vhtearkey}`)
                if (!webplay.ok) throw new Error(`Error Get Video : ${webplay.statusText}`)
                const webplay2 = await webplay.json()
                 if (webplay2.status == false) {
                    iluser.reply(message.from, `*Maaf Terdapat kesalahan saat mengambil data, mohon pilih media lain...*`, message.id)
                } else {
                    //if (Number(webplay2.result.size.split(' MB')[0]) >= 70.00) return iluser.reply(message.from, 'Size audio sudah melebihi batas', message.id)
                    const { image, mp3, size, ext, title, duration } = await webplay2.result
                    const captplay = `*YOUTUBE PLAY*\n\n• *Judul* : ${title}\n• *Durasi* : ${duration}\n• *Exp* : ${ext}`
                    if (!isAdmin) return await iluser.sendFileFromUrl(message.from, image, `thumb.jpg`, `${captplay}\n\n${mess.noprem}\n[${mp3}]`, message.id)
                    await iluser.sendFileFromUrl(message.from, image, `thumb.jpg`, `${captplay}\n\nSedang mengirim audio...`, message.id)
                    //await iluser.sendFileFromUrl(message.from, mp3, `${title}.mp3`, `${title}`, message.id).catch(() => iluser.reply(message.from, mess.error.Yt4, message.id))
                    const responses = await fetch(mp3);
                    const buffer = await responses.buffer();
                    await fs.writeFile(`./media/ytmp3.mp3`, buffer)
                    await iluser.sendFile(from,'./media/ytmp3.mp3', 'iluser.mp3', `neeh`, id)
                }
            } catch (err) {
                iluser.sendText(ownerNumber, 'Error Play : '+ err)
                iluser.reply(message.from, mess.error.Yt3, message.id)
            }
            break
        case prefix+'lagu':
            if(isReg(obj)) return
            //if (!isOwner) return iluser.reply(message.from, 'FItur ini sedang gangguan.', message.id)
            if (isBlocked) return await iluser.reply(message.from, mess.blockk, message.id)
          //  if (!isOwner) return iluser.reply(message.from, 'Fitur ini sedang dalam pengembangan', message.id)
            if(args.length == 1) return await iluser.reply(message.from, "Maaf, tidak boleh kosong.", message.id)
            if (isLimit(serial)) return 
            
            limitAdd(serial)
            await googleIt({'query': `site:youtube.com ${body.slice(6)}`}).then(async results => 
            {
                await googleIt({'query': `site:youtube.com ${body.slice(6)} lirik`}).then(async results2 => 
                { 
                    if(typeof results.length == 0) return await iluser.reply(message.from, "Maaf, lagu tidak ditemukan.", message.id)
                    
                    if(results.length !==0)
                    {
                        ytdl.getInfo(results[0].link).then(async info => {
                            if(info.videoDetails.lengthSeconds < 600)
                            {
                                try
                                {
                                    const rands = await genUniqueId(5)
                                    await iluser.reply(message.from, `Ditemukan! \nJudul : ${results[0].title}`, message.id)
                                    CreateMYSQL.query('INSERT INTO `lagu` SET ?', {type: 'lagu',url: results[0].link,urlv2: results2[0].link, rand: rands, nomer: message.from.split('@')[0].split('-')[0], judul: results[0].title, judulv2: results2[0].title}, async function (err, result) {
                                        if (err) return console.log(`bom => ${err}`); 
                                            await iluser.reply(message.from, `Jika judul/lagu sudah benar silahkan balas \n\n.down ${rands}\n\nUntuk mendownload lagu tersebut.`, message.id)
                                        });
                                }catch(err)
                                {
                                    console.log(err)
                                    await iluser.reply(message.from, "Maaf, error.", message.id)
                                }
                            }else{
                                await iluser.reply(message.from, "Maaf, lagu lebih dari 10 menit silahkan cari lagu yang lain.", message.id)
                            } 
                        }).catch(async e => {
                            console.log(e)
                        })
                    }
                }).catch(async e => {
                    console.log(e)
                    await iluser.reply(message.from, e.toString())
                })  
            }).catch(async e => {
                console.log(e)
                await iluser.reply(message.from, e.toString())
            })   
        break
        case prefix+'down':
            if(isReg(obj)) return
            if (isBlocked) return await iluser.reply(message.from, mess.blockk, message.id)
            if(args.length == 1) return await iluser.reply(message.from, "Maaf, tidak boleh kosong.", message.id)
            CreateMYSQL.query(
            "SELECT url,urlv2,judul,judulv2,type FROM `lagu` WHERE `rand` = ? AND `nomer` = ? AND `type` in (?)",[args[1], message.from.split('@')[0].split('-')[0], ['lagu', 'laguv2', 'anime']],
            async function (err, result) 
            {
                if (err) console.log(err)
                if(result.length == 0) return await iluser.reply(message.from, 'Maaf, data/nomer tidak cocok didatabase kami.', message.id)

                if(result[0].type == 'lagu')
                {
                    await iluser.reply(message.from, `id ditemukan.\n*_Sedang mengirim audio..._*`, message.id)
                    let enable = 1;
                    let attempt = 0;
                    const idYT = result[0].url.split('v=')[1]
                    
                    while(enable)
                    {
                        const token = await getToken(idYT)
                        const startDL = await startConvert(idYT, token.token)
                        if(attempt == 5) { 
                            enable = 0; 
                            await iluser.reply(message.from, `*Error, coba lagi. Jika masih error silahkan hubungi admin.*`, message.id)
                        }
                        if(typeof startDL !== 'undefined')
                        {
                            console.log(startDL)
                            const base64 = await base64Only(startDL) 
                            if (!isAdmin) return await iluser.reply(message.from,`Judul 👉 ${result[0].judul}\n\n${mess.noprem}\n[${startDL}]`, message.id) 
                            await iluser.reply(message.from,`Judul 👉 ${result[0].judul} ${mess.iklann}`, message.id) 
                            await iluser.sendImage(message.from, "data:audio/mpeg;base64," + base64, `${token.title}.mp3`, '', message.id); 
                            enable = 0; 
                        }   
                        if(typeof startDL == 'undefined') attempt++    
                    }
                        
                }    
            })
        break 
        /*case prefix+'ytmp3':
                if(isReg(obj)) return
                    if(isLimit(serial)) return
                    if (args.length >= 1) {
                        let url = args[1]
                        if(!url.match(new RegExp('https://','gi'))) url = 'https://'+url
                        var videoid = url.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);
                        if(!videoid) {
                            return iluser.reply(message.from,"Videonya gavalid gan.", message.id);
                            }fs.access('audio/'+videoid[1]+'.mp3', (err) => {
                            if(!err){
                                iluser.sendFile(message.from,'audio/'+ videoid[1] +'.mp3', `${videoid[1]}.mp3`, '', message.id)
                                limitAdd(serial);
                            }else{
                                async function ytmp3(){
                                    ytdl.getInfo(videoid[1]).then(info => {
                                    if (info.videoDetails.lengthSeconds > 1000){
                                        iluser.reply(message.from, 'Video Terlalu Panjang Males BRO', message.id)
                                    }else{
                                        let stream = ytdl(videoid[1], {
                                            quality: 'highestaudio',
                                            });
                                            ffmpeg(stream)
                                            .audioBitrate(128)
                                            .save(`audio/${videoid[1]}.mp3`)
                                            .on('end', () => {
                                            iluser.sendFile(message.from,'audio/'+ videoid[1] +'.mp3', `${videoid[1]}.mp3`, '', message.id)
                                            });
                                        limitAdd(serial);
                                    }
                                    })
                                }
                                ytmp3();
                            }
                        })
                    }
                    limitAdd(serial)
                    break    */    
                    
                case prefix+'bass':{
                    if(isReg(obj)) return
                    if (isLimit(serial)) return 
            
                    await limitAdd(serial)
                    if (isQuotedAudio) {
                        let dB = 20
                        let freq = 60
                        if (args[0]) dB = clamp(parseInt(args[0]) || 20, 0, 50)
                        if (args[1]) freq = clamp(parseInt(args[1]) || 20, 20, 500)
                        let mediaData = await decryptMedia(quotedMsg)
                        let temp = './temp'
                        let name = new Date() * 1
                        let fileInputPath = path.join(temp, 'audio', `${name}.mp3`)
                        let fileOutputPath = path.join(temp, 'audio', `${name}_2.mp3`)
                        console.log(color('[fs]', 'green'), `Writing media into '${fileInputPath}'`)
                        iluser.reply(message.from, 'Processing...', ('mp3', 'mp3', `Bass ${freq}hz: +${dB}dB`), message.id)
                        fs.writeFile(fileInputPath, mediaData, err => {
                            if (err) return iluser.sendText(message.from, 'Ada yang error saat menulis file', message.id)
                            ffmpeg(fileInputPath)
                                .audioFilter('equalizer=f=' + freq + ':width_type=o:width=2:g=' + dB)
                                .format('mp3')
                                .on('start', function (commandLine) {
                                    console.log(color('[FFmpeg]', 'green'), commandLine)
                                })
                                .on('progress', function (progress) {
                                    console.log(color('[FFmpeg]', 'green'), progress)
                                })
                                .on('end', function () {
                                    console.log(color('[FFmpeg]', 'green'), 'Processing finished!')
                                    // fs.readFile(fileOutputPath, { encoding: 'base64' }, (err, base64) => {
                                    // if (err) return iluser.sendText(message.from, 'Ada yang error saat membaca file .mp3') && console.log(color('[ERROR]', 'red'), err)
                                    iluser.sendFile(message.from, fileOutputPath, 'distorted.mp3', '', message.id)
                                    iluser.reply(message.from, `${mess.iklann}`, message.id)
                                    // })
                                    setTimeout(() => {
                                        try {
                                            fs.unlinkSync(fileInputPath)
                                            fs.unlinkSync(fileOutputPath)
                                        } catch (e) { _err(e) }
                                    }, 30000)
                                })
                                .save(fileOutputPath)
                        })
                    }
                }
                break
               case prefix+'distord':{
                if(isReg(obj)) return
                   if (isLimit(serial)) return 
            
                  await limitAdd(serial)
                    if (isQuotedAudio) {
                        iluser.reply(message.from, mess.wait, ('mp3', 'wav', 'Biar mudah ngedit audionya ketika pake format itu'), message.id)
                        const encryptMedia = isQuotedAudio ? quotedMsg : message
                        const _mimetype = isQuotedAudio ? quotedMsg.mimetype : mimetype
                        console.log(color('[WAPI]', 'green'), 'Downloading and decrypt media...')
                        const mediaData = await decryptMedia(encryptMedia)
                        Utils.decodeAudioData(mediaData, (err, audioBuffer) => {
                            if (err) return iluser.sendText(message.from, mess.error.Yt4, ('Ada yang error saat decoding file mp3\n\n'))
                            generated = audioBuffer._data.map(channel => {
                                return channel.map(value => clampFloat(distordFX(value)))
                            })
        
                            buffer = wav.encode(generated, {
                                sampleRate: audioBuffer.sampleRate,
                                float: true,
                                bitDepth: 32
                            })
        
                            let temp = './temp'
                            let name = new Date() * 1
                            let fileInputPath = path.join(temp, 'audio', `${name}.wav`)
                            let fileOutputPath = path.join(temp, 'audio', `${name}.mp3`)
                            console.log(color('[fs]', 'green'), `Writing media into '${fileInputPath}'`)
                            iluser.reply(message.from, ('wav', 'mp3', 'Nah... sekarang dikembaliin lagi formatnya'), message.id)
                            fs.writeFile(fileInputPath, buffer, err => {
                                if (err) return iluser.sendText(message.from, mess.error.Yt4, ('Ada yang error saat menulis file\n\n'))
                                ffmpeg(fileInputPath)
                                    .format('mp3')
                                    .on('start', function (commandLine) {
                                        console.log(color('[FFmpeg]', 'green'), commandLine)
                                    })
                                    .on('progress', function (progress) {
                                        console.log(color('[FFmpeg]', 'green'), progress)
                                    })
                                    .on('end', function () {
                                        console.log(color('[FFmpeg]', 'green'), 'Processing finished!')
                                        fs.readFile(fileOutputPath, { encoding: 'base64' }, (err, base64) => {
                                         if (err) return iluser.sendText(message.from, 'Ada yang error saat membaca file .mp3') && console.log(color('[ERROR]', 'red'), err)
                                        iluser.sendFile(message.from, fileOutputPath, 'distorted.mp3', '', message.id)
                                    	iluser.reply(message.from, `${mess.iklann}`, message.id)
                                        })
                                        setTimeout(() => {
                                            try {
                                                fs.unlinkSync(fileInputPath)
                                                fs.unlinkSync(fileOutputPath)
                                            } catch (e) { _err(e) }
                                        }, 30000)
                                    })
                                    .save(fileOutputPath)
                            })
                        })
                    }
                }
                break
                case prefix+'tomp3':
                    if(isReg(obj)) return
                    if (isLimit(serial)) return 
            
                    await limitAdd(serial)
                    if ((isMedia || isQuotedVideo || isQuotedFile)) {
                        iluser.reply(message.from, mess.wait, ('mp4', 'mp3', 'Meng-ekstrak audio dari video'), message.id)
                        const encryptMedia = isQuotedVideo || isQuotedFile ? quotedMsg : message
                        const _mimetype = isQuotedVideo || isQuotedFile ? quotedMsg.mimetype : mimetype
                        console.log(color('[WAPI]', 'green'), 'Downloading and decrypt media...')
                        const mediaData = await decryptMedia(encryptMedia)
                        let temp = './temp'
                        let name = new Date() * 1
                        let fileInputPath = path.join(temp, 'video', `${name}.${_mimetype.replace(/.+\//, '')}`)
                        let fileOutputPath = path.join(temp, 'audio', `${name}.mp3`)
                        console.log(color('[fs]', 'green'), `Downloading media into '${fileInputPath}'`)
                        fs.writeFile(fileInputPath, mediaData, err => {
                            if (err) return iluser.sendText(message.from, 'Ada yang error saat menulis file\n\n' + err) && _err(err)
                            // ffmpeg -y -t 5 -i <input_file> -vf "scale=512:512:flags=lanczos:force_original_aspect_ratio=decrease" -qscale 100 <output_file>.webp
                            ffmpeg(fileInputPath)
                                .format('mp3')
                                .on('start', function (commandLine) {
                                    console.log(color('[FFmpeg]', 'green'), commandLine)
                                })
                                .on('progress', function (progress) {
                                    console.log(color('[FFmpeg]', 'green'), progress)
                                })
                                .on('end', function () {
                                    console.log(color('[FFmpeg]', 'green'), 'Processing finished!')
                                     fs.readFile(fileOutputPath, { encoding: 'base64' }, (err, base64) => {
                                    if (err) return iluser.sendText(message.from, 'Ada yang error saat membaca file .mp3') && console.log(color('[ERROR]', 'red'), err)
                                    iluser.sendFile(message.from, fileOutputPath, 'audio.mp3', '', message.id)
                                    //iluser.reply(from `${mess.iklann}`, message.id)
                                     })
                                    setTimeout(() => {
                                        try {
                                            fs.unlinkSync(fileInputPath)
                                            fs.unlinkSync(fileOutputPath)
                                        } catch (e) {
                                            console.log(color('[ERROR]', 'red'), e)
                                        }
                                    }, 30000)
                                })
                                .save(fileOutputPath)
                        })
                    }
                break  
        /*case prefix+'ytmp3':
            if(isReg(obj)) return
            if (isBlocked) return await iluser.reply(message.from, mess.blockk, message.id)            
            if (args.length === 1) return iluser.reply(message.from, 'Contoh .ytmp3 https://www.youtube.com/xnxx')
            .ytmp3
            if(isLimit(serial)) return

            limitAdd(serial)
            let isLinks = args[1].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
            if (!isLinks) return iluser.reply(message.from, mess.error.Iv, message.id)
            try {
                const resp = await get.get('https://st4rz.herokuapp.com/api/yta2?url='+ args[1]).json()
                if (resp.error) {
                    iluser.reply(message.from, resp.error, message.id)
                } else {
                    const { title, thumb, filesize, result } = await resp
                    //if (Number(filesize.split(' MB')[0]) >= 10.00) return iluser.reply(message.from, 'Maaf ukuran video sudah melebihi batas maksimal 10 MB!', message.id)
                    if (!isAdmin) return await iluser.sendFileFromUrl(message.from, thumb, 'thumb.jpg', `*Judul* : ${title}\n\n${mess.noprem}\n[${result}]`, message.id)
                    await iluser.sendFileFromUrl(message.from, thumb, 'thumb.jpg', `*Judul* : ${title}\n\n_Sedang mengirim audio..._`, message.id)
                    await iluser.sendFileFromUrl(message.from, result, `${title}`, '', message.id).catch(() => iluser.reply(message.from, mess.error.Yt3, message.id))
                }
            } catch (err) {
                iluser.sendText(ownerNumber, 'Error ytmp3 : '+ err)
                iluser.reply(message.from, mess.error.Yt3, message.id)
            }
            break */
case prefix+'ig2': 
            if(isReg(obj)) return
            try {
            if (args.length === 1) return iluser.reply(message.from, 'Linknya mana?', message.id)
                if (isLimit(serial)) return 
            
                limitAdd(serial)
                const link = args[1]
                if(!link.includes('instagram.com')) return await iluser.reply(message.from, "Maaf, url tidak valid bersumber dari facebook.com", message.id)
                const puppeteer = require('puppeteer')
                const browser = await puppeteer.launch({headless: true, args: [
                  "--disable-notifications"
                ]}); 
                try {
                    
                    const page = await browser.newPage();
                    await page.goto('https://downloadgram.com/', {waitUntil: 'networkidle2'});  
                    await page.type('input[id="dg-url"]', link);
                    await page.keyboard.press('Enter');                    
                    await page.waitForSelector('div[class="success"]', {visible: true})
                    let spanHref = await page.$eval('div[class="success"] a', span => span.getAttribute('href'));  
                    await browser.close()
                    if (!isAdmin) return await iluser.sendImage(message.from, './logo.png', 'kntl.png',`*INSTAGRAM DOWNLOADER*\n\n${mess.noprem}\n[${spanHref}]`, message.id);
                    await iluser.sendFileFromUrl( message.from,  spanHref, ``, `Sukses Mengunduh Media Instagram ${mess.iklan}`, message.id)
                
                } catch (error) {
                    await iluser.reply(message.from, "Maaf, tidak menemukan link download mungkin postingan private.", message.id)
                    await browser.close()
                }
            } catch (error) {
                console.log(error)
            }
        break

        case prefix+'tt': 
            if(isReg(obj)) return
            try {
            if (args.length === 1) return iluser.reply(message.from, 'Linknya mana?', message.id)
                if (isLimit(serial)) return 
            
                limitAdd(serial)
                const link = args[1]
                //if(!link.includes('instagram.com')) return await iluser.reply(message.from, "Maaf, url tidak valid bersumber dari facebook.com", message.id)
                const puppeteer = require('puppeteer')
                const browser = await puppeteer.launch({headless: true, args: [
                  "--disable-notifications"
                ]}); 
                try {
                    
                    const page = await browser.newPage();
                    await page.goto('https://ttdownloader.com/', {waitUntil: 'networkidle2'});  
                    await page.type('#url', link);
                    await page.keyboard.press('Enter');                    
                    await page.waitForSelector('div[class="download"]', {visible: true})
                    let spanHref = await page.$eval('div[class="download"] a', span => span.getAttribute('href'));  
                    await browser.close()
                    if (!isAdmin) return await iluser.sendImage(message.from, './logo.png', 'kntl.png',`*TIKTOK DOWNLOADER*\n\n${mess.noprem}\n[${spanHref}]`, message.id);
                    //await iluser.sendFile(message.from,  spanHref, `tiktod.mp4`, '', message.id)
                    const responses = await fetch(spanHref);
                    const buffer = await responses.buffer();
                    await fs.writeFile(`./media/tiktod.mp4`, buffer)
                    await iluser.sendFile(from,'./media/tiktod.mp4', 'iluser.mp4',`${mess.iklann}`, id)

                } catch (error) {
                    await iluser.reply(message.from, "Maaf, tidak menemukan link download mungkin postingan private.", message.id)
                    await browser.close()
                }
            } catch (error) {
                console.log(error)
            }
        break

        case prefix+'ytmp4':
        case prefix+'yt': 
            try {
            if (args.length === 1) return iluser.reply(message.from, 'Linknya mana?', message.id)
            
                const link = args[1]
                //if(!link.includes('instagram.com')) return await iluser.reply(message.from, "Maaf, url tidak valid bersumber dari facebook.com", message.id)
                const puppeteer = require('puppeteer')
                const browser = await puppeteer.launch({headless: true, args: [
                  "--disable-notifications"
                ]}); 
                try {
                    
                    const page = await browser.newPage();
                    await page.goto('https://ytmp3.cc/en13/', {waitUntil: 'networkidle2'});  
                    await page.click("#mp4");
                    await page.type('input[id="input"]', link);
                    await page.keyboard.press('Enter');                    
                    await page.waitForSelector('div[id="buttons"]', {visible: true})
                    let spanHref = await page.$eval('div[id="buttons"] > a', span => span.getAttribute('href'));  
                    await browser.close()
                    if (!isAdmin) return await iluser.sendImage(message.from, './logo.png', 'kntl.png',`*YouTube Video Downloader*\n\n${mess.noprem}\n[${spanHref}]`, message.id);
                    await iluser.sendFileFromUrl( message.from,  spanHref, ``, `${mess.iklann}`, message.id)
                
                } catch (error) {
                    await iluser.reply(message.from, "Maaf, tidak menemukan link download mungkin postingan private.", message.id)
                    await browser.close()
                }
            } catch (error) {
                console.log(error)
            }
        break
        case prefix+'ytmp3': 
        case prefix+'mp3':
            try {
            if (args.length === 1) return iluser.reply(message.from, 'Linknya mana?', message.id)
            
                const link = args[1]
                //if(!link.includes('instagram.com')) return await iluser.reply(message.from, "Maaf, url tidak valid bersumber dari facebook.com", message.id)
                const puppeteer = require('puppeteer')
                const browser = await puppeteer.launch({headless: true, args: [
                  "--disable-notifications"
                ]}); 
                try {
                    
                    const page = await browser.newPage();
                    await page.goto('https://ytmp3.cc/en13/', {waitUntil: 'networkidle2'});  
                    await page.click("#mp3");
                    await page.type('input[id="input"]', link);
                    await page.keyboard.press('Enter');                    
                    await page.waitForSelector('div[id="buttons"]', {visible: true})
                    let spanHref = await page.$eval('div[id="buttons"] > a', span => span.getAttribute('href'));  
                    await browser.close()
                    if (!isAdmin) return await iluser.sendImage(message.from, './logo.png', 'kntl.png',`*YouTube Audio Downloader*\n\n${mess.noprem}\n[${spanHref}]`, message.id);
                    await iluser.sendFileFromUrl( message.from,  spanHref, ``, `Sukses Mengunduh `, message.id)
                
                } catch (error) {
                    await iluser.reply(message.from, "Maaf, tidak menemukan link download mungkin postingan private.", message.id)
                    await browser.close()
                }
            } catch (error) {
                console.log(error)
            }
        break

/*case prefix+'ytmp3': {
            const yt2matekudasai = body.slice(7)
            if (!yt2matekudasai) return iluser.reply(from, `Contoh: ${prefix}ytmp3 https://yotube.com/blabla`, message.id)
            iluser.reply(from, mess.wait, message.id)
            const puppeteer = require('puppeteer')
            try {
            (async () => {
            const browser = await puppeteer.launch({
                headless: true,
            });
            const page = await browser.newPage();
            await page
            .goto("https://ytmp3.cc/en13/", {
            waitUntil: "networkidle2"
            })
            .then(async () => {
            await page.click("#mp3");
            await page.type("#input", yt2matekudasai);
            await page.click("#submit");
            await new Promise(resolve => setTimeout(resolve, 10000));
            const element = await page.$(
                'div[id="buttons"] > a'
            );
            const text = await (await element.getProperty("href")).jsonValue();
            if (!isAdmin){
                await iluser.sendImage(message.from, './logo.png', 'kntl.png', `*YTMP3 MANUAL SCRAPPER*\n\n${mess.noprem}\n${text}`, message.id)
                await browser.close();
            }else {
                await iluser.sendFileFromUrl(from, text, 'audio.mp3', message.id)
                await browser.close();
            }
                                                                        
            })
            .catch((err => {
            console.log(err)
            iluser.reply(from, 'error', message.id)
            }))
            })();
            } catch (error) {
            console.log('error bang')
            iluser.reply(from, 'error', message.id)
            }
            }
            break 
case prefix+'ytmp4':
case prefix+'yt': {
            const yt2matekudasai = body.slice(7)
            if (!yt2matekudasai) return iluser.reply(from, `Contoh: ${prefix}yt https://yotube.com/blabla`, message.id)
            iluser.reply(from, mess.wait, message.id)
            const puppeteer = require('puppeteer')
            try {
            (async () => {
            const browser = await puppeteer.launch({
                headless: true,
            });
            const page = await browser.newPage();
            await page
            .goto("https://ytmp3.cc/en13/", {
            waitUntil: "networkidle2"
            })
            .then(async () => {
            await page.click("#mp4");
            await page.type("#input", yt2matekudasai);
            await page.click("#submit");
            await new Promise(resolve => setTimeout(resolve, 10000));
            const element = await page.$(
                'div[id="buttons"] > a'
            );
            const text = await (await element.getProperty("href")).jsonValue();
            if (!isAdmin){
                await iluser.sendImage(message.from, './logo.png', 'kntl.png', `*YTMP4 MANUAL SCRAPPER*\n\n${mess.noprem}\n${text}`, message.id)
                await browser.close();
            }else {
                await iluser.sendFileFromUrl(from, text, 'video.mp4',`${mess.iklann}`, message.id)
                await browser.close();
            }
                                                            
            })
            .catch((err => {
            console.log(err)
            iluser.reply(from, 'error', message.id)
            }))
            })();
            } catch (error) {
            console.log('error bang')
            iluser.reply(from, 'error', message.id)
            }
            }
            break 
        /*case prefix+'ytmp3':
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            if (args.length === 1) return iluser.reply(message.from, `Contoh: ${prefix}ytmp3 https://www.youtube.com/xnxx`, message.id)
            let isLinks = args[1].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
            if (!isLinks) return iluser.reply(message.from, mess.error.Iv, message.id)
            try {
                const vhtearyt3 = await fetch(`https://api.vhtear.com/ytdl?link=${args[1]}&apikey=${vhtearkey}`)
                if (!vhtearyt3.ok) throw new Error(`Error ytmp3 3 : ${vhtearyt3.statusText}`)
                const vhtearyt33 = await vhtearyt3.json()
                 if (vhtearyt33.status == false) {
                    iluser.reply(message.from, `*Maaf Terdapat kesalahan saat mengambil data, mohon pilih media lain...*`, message.id)
                } else {
                    if(Number(vhtearyt33.result.size.split(' MB')[0]) >= 70.00) return iluser.sendFileFromUrl(message.from, vhtearyt33.result.imgUrl, `thumb.jpg`, `*「 YOUTUBE MP3 」*\n\n• *Judul* : ${vhtearyt33.result.title}\n• *Filesize* : ${vhtearyt33.result.size}\n\n_Maaf, Durasi audio melebihi 30 MB. Silahkan download audio melalui link dibawah_.\n${vhtearyt33.result.UrlMp3}`, message.id)
                    const { title, ext, size, UrlMp3, status, imgUrl } = await vhtearyt33.result
                    console.log(`VhTear Giliran ${ext}\n${size}\n${status}`)
                    const captions = `*「 YOUTUBE MP3 」*\n\n• *Judul* : ${title}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_ ${mess.iklan}`
                    iluser.sendFileFromUrl(message.from, imgUrl, `thumb.jpg`, captions, message.id)
                    //await iluser.sendFile(message.from, UrlMp3, `${title}.mp3`, '', message.id)
                    await iluser.sendFileFromUrl(message.from, UrlMp3, `${title}.mp3`, '', message.id).catch(() => iluser.reply(message.from, mess.error.Yt4, message.id))
                    await limitAdd(serial)
                }
            } catch (err) {
                iluser.sendText(ownerNumber, 'Error ytmp3 : '+ err)
                iluser.reply(message.from, mess.error.Yt3, message.id)
            }
            break  */
        case prefix+'google':
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            const googleQuery = body.slice(8)
            if(googleQuery == undefined || googleQuery == ' ') return iluser.reply(message.from, `*Hasil Pencarian : ${googleQuery}* tidak ditemukan`, message.id)
            google({ 'query': googleQuery }).then(results => {
            let vars = `_*Hasil Pencarian : ${googleQuery}*_\n`
            for (let i = 0; i < results.length; i++) {
                vars +=  `\n═════════════════\n\n*Judul* : ${results[i].title}\n\n*Deskripsi* : ${results[i].snippet}\n\n*Link* : ${results[i].link} ${mess.iklan}\n\n`
            }
                iluser.reply(message.from, vars, message.id);
            }).catch(e => {
                console.log(e)
                iluser.sendText(ownerNumber, 'Google Error : ' + e);
            })
            break
        case prefix+'translate':   
            if(isReg(obj)) return         
            if (isLimit(serial)) return
            
            await limitAdd(serial)
            if(args[1] == undefined || args[2] == undefined) return
            if(args.length >= 2){
                var codelang = args[1]
                var texta = body.slice(11+codelang.length);
                translatte(texta, {to: codelang}).then(res => {
                    iluser.sendText(message.from,res.text);
                    limitAdd(serial)
                }).catch(err => {
                     iluser.sendText(message.from,`[ERROR] Teks tidak ada, atau kode bahasa ${codelang} tidak support\n~> *${prefix}bahasa* untuk melihat list kode bahasa`);
                });
            }
            break

            //18+ Content
        case prefix+'bokep': // MFARELS
        case prefix+'randombokep':
        case prefix+'bkp':             
            if(isReg(obj)) return
            if (isLimit(serial)) return  
            if (!isAdmin) return iluser.reply(message.from, '\n⛔ *AKSES DI TOLAK* ⛔\n\nNte premium?', message.id)
            await limitAdd(serial) 
            const mskkntl = fs.readFileSync('./lib/database/18+.json') 
            const kntlnya = JSON.parse(mskkntl) 
            const rindBkp = Math.floor(Math.random() * kntlnya.length) // MFARELS
            const rindBkep = konsolJsin[rindBkp] 
            iluser.sendFileFromUrl(message.from, rindBkep.image, 'Bokep.jpg', `${rindBkep.teks} ${mess.iklan}`, message.id) // MFARELS
            break 
        case prefix+'randomblowjob':
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            if (!isAdmin) return iluser.reply(message.from, '\n⛔ *AKSES DI TOLAK* ⛔\n\nNte premium?', message.id)
            await limitAdd(serial)
            const sblow = await axios.get('https://tobz-api.herokuapp.com/api/nsfwblowjob?apikey='+tobzkey)
            const rblow = sblow.data
            iluser.sendFileFromUrl(message.from, rblow.result, `RandoBlow${ext}`, `${mess.iklann}`, message.id)
            break
        case prefix+'xnxx':
            if(isReg(obj)) return
            if (!isAdmin) return iluser.reply(message.from, '\n⛔ *AKSES DI TOLAK* ⛔\n\nOnly premium user can use this command', message.id)
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            if (args.length === 1) return iluser.reply(message.from, `Contoh: ${prefix}xnxx https://www.xnxx.com/coli-terosss`, message.id)
            if (!args[1].match(isUrl) && !args[1].includes('xnxx.com')) return iluser.reply(message.from, mess.error.Iv, message.id)
            try {
                const resq = await axios.get('https://mhankbarbars.herokuapp.com/api/xnxx?url='+ args[1] +'&apiKey='+ barbarkey)
                const resp = resq.data
                 if (resp.error) {
                    iluser.reply(message.from, ytvv.error, message.id)
                } else {
                    if (Number(resp.result.size.split(' MB')[0]) > 20.00) return iluser.reply(message.from, 'Maaf durasi video sudah melebihi batas maksimal 20 menit!', message.id)
                    iluser.sendFileFromUrl(message.from, resp.result.thumb, 'thumb.jpg', `• *Judul* : ${resp.result.judul}\n• *Deskripsi* : ${resp.result.desc}\n• *Filesize* : ${resp.result.size}\n\nSilahkan tunggu sebentar proses pengiriman file membutuhkan waktu beberapa menit.`, message.id)
                    await iluser.sendFileFromUrl(message.from, resp.result.vid, `${resp.result.title}.mp4`, '', message.id)}
            } catch (err) {
                console.log(err)
                await iluser.sendFileFromUrl(message.from, errorurl2, 'error.png', '💔️ Maaf, Video tidak ditemukan')
                iluser.sendText(ownerNumber, 'Xnxx Error : ' + err)
            }
            break
        case prefix+'hehe':
            if(isReg(obj)) return
            if (!isAdmin) return iluser.reply(message.from, '\n⛔ *AKSES DI TOLAK* ⛔\n\nOnly premium user can use this command', message.id)
            {
              if (args.length === 1) return iluser.reply(from, 'mw ap?', message.id)
                if (isLimit(serial)) return
            
                await limitAdd(serial)
               iluser.reply(from, mess.wait, message.id)
               const porn = body.slice(6)
               const umai = await get.get(`https://mnazria.herokuapp.com/api/porn?search=${porn}`).json()
               const { author, result } = await umai
               iluser.sendFileFromUrl(from, `${result[1].image}`, 'porn.jpg', `• Title: ${result[1].title}\n• Durasi: ${result[1].duration}\n\nSilahkan tunggu sebentar proses pengiriman file membutuhkan waktu beberapa menit.`,  id)
               const dl = await get.get(`https://mnazria.herokuapp.com/api/porndownloadxvideos?url=${result[1].url}`).json()
               iluser.sendFileFromUrl(from, dl.mp4, 'bokep.mp4', 'nih bacol', id).catch(() => iluser.reply(from, mess.error.Yt4, message.id))
           }
           break

        case prefix+'ramalpasangan':
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            if (args.length === 1) return iluser.reply(message.from, `Contoh : *${prefix}ramalpasangan iluser|iluser_BOT*`, message.id)
            argz = body.trim().split('|')
            if (arg.length >= 2) {
            let kamu = arg[0]
            let pacar = arg[1]
            let rpmn = rate[Math.floor(Math.random() * (rate.length))]
            let rpmn2 = rate[Math.floor(Math.random() * (rate.length))]
            let rpmn3 = rate[Math.floor(Math.random() * (rate.length))]
            let rpmn4 = rate[Math.floor(Math.random() * (rate.length))]
            let rpmn5 = rate[Math.floor(Math.random() * (rate.length))]
            let rpmn6 = rate[Math.floor(Math.random() * (rate.length))]
            let rjh2 = `*Hasil Pengamatan!*\nPasangan dengan nama ${kamu} dan ${pacar}\n\n• Cinta : ${rpmn}\n• Jodoh : ${rpmn2}\n• Kemiripan : ${rpmn3}\n• Kesukaan : ${rpmn4}\n• Kesamaan : ${rpmn5}\n• Kebucinan ${rpmn6}`
            iluser.reply(message.from, `${rjh2} ${mess.iklan}`, message.id)
            } else {
            await iluser.reply(message.from, 'Wrong Format!', message.id)
            }
            break
        case prefix+'artinama':
            if(isReg(obj)) return
            if (isLimit(serial)) return
            
            await limitAdd(serial)
            if (args.length === 1) return iluser.reply(message.from, `Contoh : *${prefix}artinama iluser*`, message.id)
            try {
            const resp = await axios.get('https://api.vhtear.com/artinama?nama=' + body.slice(9) + '&apikey=' + vhtearkey)
            if (resp.data.error) return iluser.reply(message.from, resp.data.error, message.id)
            const anm2 = `• Artinama : ${resp.data.result.hasil}`
            iluser.reply(message.from, `${anm2} ${mess.iklan}`, message.id)
            } catch (err) {
                console.error(err.message)
                await iluser.sendFileFromUrl(message.from, errorurl2, 'error.png', '💔️ Maaf, User tidak ditemukan')
                iluser.sendText(ownerNumber, 'Artinama Error : ' + err)
           }
            break
        case prefix+'zodiak2':
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            if (args.length === 1) return iluser.reply(message.from, `Kirim perintah *${prefix}zodiak [zodiak kamu]*\nContoh : *${prefix}zodiak scorpio*`, message.id)
            try {
            const resp = await axios.get('https://api.vhtear.com/zodiak?query=' + body.slice(8) + '&apikey=' + vhtearkey)
            if (resp.data.error) return iluser.reply(message.from, resp.data.error, message.id)
            const anm2 = `• Zodiak : ${resp.data.result.zodiak}\n• Ramalan : ${resp.data.result.ramalan}\n• Nomor Keberuntungan : ${resp.data.result.nomorKeberuntungan}\n• Motivasi : ${resp.data.result.motivasi}\n• Inspirasi : ${resp.data.result.inspirasi}`
            iluser.reply(message.from, `${anm2} ${mess.iklan}`, message.id)
            } catch (err) {
                console.error(err.message)
                await iluser.sendFileFromUrl(message.from, errorurl2, 'error.png', '💔️ Maaf, Zodiak tidak ditemukan')
                iluser.sendText(ownerNumber, 'Zodiak Error : ' + err)
           }
           break
        case prefix+'caklontong':
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            try {
            const resp = await axios.get('https://api.vhtear.com/funkuis&apikey=' + vhtearkey)
            if (resp.data.error) return iluser.reply(message.from, resp.data.error, message.id)
            const anm2 = `Soal : ${resp.data.result.soal}\nPoin : ${resp.data.result.poin}`
            const jwban = `Jawaban : ${resp.data.result.jawaban}`
            iluser.reply(message.from, anm2, message.id)
            iluser.sendText(message.from, `30 Detik Lagi...`, message.id)
            await sleep(10000)
            iluser.sendText(message.from, `20 Detik Lagi...`, message.id)
            await sleep(10000)
            iluser.sendText(message.from, `10 Detik Lagi...`, message.id)
            await sleep(10000)
            iluser.reply(message.from, `${jwban} \nDeskripsi : ${resp.data.result.desk} ${mess.iklan}`, message.id)
            } catch (err) {
                console.error(err.message)
                await iluser.sendFileFromUrl(message.from, errorurl2, 'error.png', '💔️ Maaf, Soal Quiz tidak ditemukan')
                iluser.sendText(ownerNumber, 'Zodiak Error : ' + err)
           }
           break
         case prefix+'tebakgambar':
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            try {
            const resp = await axios.get('https://api.vhtear.com/tebakgambar&apikey=' + vhtearkey)
            if (resp.data.error) return iluser.reply(message.from, resp.data.error, message.id)
            const jwban = `Jawaban : ${resp.data.result.jawaban}`
            await iluser.sendFileFromUrl(message.from, resp.data.result.soalImg, 'tebakgambar.jpg', '_Silahkan Jawab Maksud Dari Gambar Ini_', message.id)
            iluser.sendText(message.from, `30 Detik Lagi...`, message.id)
            await sleep(10000)
            iluser.sendText(message.from, `20 Detik Lagi...`, message.id)
            await sleep(10000)
            iluser.sendText(message.from, `10 Detik Lagi...`, message.id)
            await sleep(10000)
            iluser.reply(message.from, `${jwban} ${mess.iklan}`, message.id)
            } catch (err) {
                console.error(err.message)
                await iluser.sendFileFromUrl(message.from, errorurl2, 'error.png', '💔️ Maaf, Soal Quiz tidak ditemukan')
                iluser.sendText(ownerNumber, 'Tebak Gambar Error : ' + err)
           }
           break
         case prefix+'family100':
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            try {
            const resp = await axios.get('https://api.vhtear.com/family100&apikey=' + vhtearkey)
            if (resp.data.error) return iluser.reply(message.from, resp.data.error, message.id)
            const anm2 = `• Soal : ${resp.data.result.soal}\n_Silahkan DiJawab_`
            const jwban = `• Jawaban : ${resp.data.result.jawaban}`
            iluser.reply(message.from, anm2, message.id)
            iluser.sendText(message.from, `30 Detik Lagi...`, message.id)
            await sleep(10000)
            iluser.sendText(message.from, `20 Detik Lagi...`, message.id)
            await sleep(10000)
            iluser.sendText(message.from, `10 Detik Lagi...`, message.id)
            await sleep(10000)
            iluser.reply(message.from, `${jwban} ${mess.iklan}`, message.id)
            } catch (err) {
                console.error(err.message)
                await iluser.sendFileFromUrl(message.from, errorurl2, 'error.png', '💔️ Maaf, Soal Quiz tidak ditemukan')
                iluser.sendText(ownerNumber, 'Family100 Error : ' + err)
           }
           break
        case prefix+'heroml':
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            if (args.length === 1) return iluser.reply(message.from, `Kirim perintah *${prefix}heroml [nama hero]*\nContoh : *${prefix}heroml akai*`, message.id)
            try {
            const resp = await axios.get('https://api.vhtear.com/herodetail?query=' + body.slice(8) + '&apikey=' + vhtearkey)
            if (resp.data.error) return iluser.reply(message.from, resp.data.error, message.id)
            const anm2 = `• Title : ${resp.data.result.title}\n• Quotes : ${resp.data.result.quotes}\n• Info : ${resp.data.result.info}\n• Atribut : ${resp.data.result.attributes}`
            iluser.sendFileFromUrl(message.from, resp.data.result.pictHero, 'hero.jpg', `${anm2} ${mess.iklan}`, message.id)
            } catch (err) {
                console.error(err.message)
                await iluser.sendFileFromUrl(message.from, errorurl2, 'error.png', '💔️ Maaf, Hero tidak ditemukan')
                iluser.sendText(ownerNumber, 'Heroml Error : ' + err)
           }
            break
        case prefix+'nomorhoki':
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            if (args.length === 1) return iluser.reply(message.from, `Kirim perintah *${prefix}nomorhoki [no hp kamu]*\nContoh : *${prefix}nomorhoki 0895384009405*`, message.id)
            try {
            const resp = await axios.get('https://api.vhtear.com/nomerhoki?no=' + body.slice(11) + '&apikey=' + vhtearkey)
            if (resp.data.error) return iluser.reply(message.from, resp.data.error, message.id)
            const anm2 = `• Hasil :\n ${resp.data.result.hasil}`
            iluser.reply(message.from, `${anm2} ${mess.iklan}`, message.id)
            } catch (err) {
                console.error(err.message)
                await iluser.sendFileFromUrl(message.from, errorurl2, 'error.png', '💔️ Maaf, Nomor Hoki tidak ditemukan')
                iluser.sendText(ownerNumber, 'Nomorhoki Error : ' + err)
           }
            break
        case prefix+'alamat':
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            if (args.length === 1) return iluser.reply(message.from, `Contoh: *${prefix}alamat kopang*`, message.id)
            try {
            const respe = await axios.get('https://api.vhtear.com/infoalamat?query=' + body.slice(8) + '&apikey=' + vhtearkey)
            if (respe.data.error) return iluser.reply(message.from, respe.data.error, message.id)
            const anm2 = `• Data :\n ${respe.data.result.data} • Deskripsi :\n ${respe.data.result.deskripsi} `
            iluser.reply(message.from, `${anm2} ${mess.iklan}`, message.id)
            } catch (err) {
                console.error(err.message)
                await iluser.sendFileFromUrl(message.from, errorurl2, 'error.png', '💔️ Maaf, Nomor Hoki tidak ditemukan')
                iluser.sendText(ownerNumber, 'Alamat : ' + err)
           }
            break
        case prefix+'trendtwit':
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            if (args.length === 1) return iluser.reply(message.from, `Contoh: *${prefix}trendtwit indonesia*`, message.id)
            try {
            const resp = await axios.get('https://api.vhtear.com/trendtwitter?country=' + body.slice(11) + '&apikey=' + vhtearkey)
            if (resp.data.error) return iluser.reply(message.from, resp.data.error, message.id)
            const anm2 = `${resp.data.result.data} `
            iluser.reply(message.from, `${anm2} ${mess.iklan}`, message.id)
            } catch (err) {
                console.error(err.message)
                await iluser.sendFileFromUrl(message.from, errorurl2, 'error.png', '💔️ Maaf, Nomor Hoki tidak ditemukan')
                iluser.sendText(ownerNumber, 'Alamat : ' + err)
           }
            break
        case prefix+'artimimpi':
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            if (args.length === 1) return iluser.reply(message.from, `Kirim perintah *${prefix}artimimpi [mimpi]*\nContoh : *${prefix}artimimpi ular*`, message.id)
            try {
            const resp = await axios.get('https://api.vhtear.com/artimimpi?query=' + body.slice(10) + '&apikey=' + vhtearkey)
            if (resp.data.error) return iluser.reply(message.from, resp.data.error, message.id)
            const anm2 = `• Artimimpi : ${resp.data.result.hasil}`
            iluser.reply(message.from, `${anm2} ${mess.iklan}`, message.id)
            } catch (err) {
                console.error(err.message)
                await iluser.sendFileFromUrl(message.from, errorurl2, 'error.png', '💔️ Maaf, Mimpi tidak ditemukan')
                iluser.sendText(ownerNumber, 'Artimimpi Error : ' + err)
           }
            break
        /* case prefix+'wiki':
            if(isReg(obj)) return         
            if (isLimit(serial)) return
            
            await limitAdd(serial)
            if (args.length === 1) return iluser.reply(message.from, `Kirim perintah *${prefix}wiki [ Query ]*\nContoh : *${prefix}wiki asu*`, message.id)
            const queryz_ = body.slice(6)
            const wiki = await axios.get(`https://api.vhtear.com/wikipedia?query=${queryz_}&apikey=${vhtearkey}`)
            if (wiki.data.error) {
                iluser.reply(message.from, wiki.data.error, message.id)
            } else {
                iluser.sendFileFromUrl(message.from, wiki.data.result.ImgResult, '', `*「 WIKI 」*\n\n• *Query* : ${queryz_}\n\n• *Result* : ${wiki.data.result.Info}`, message.id)
            }
            break */ 
        case prefix+'cersex':
            if(isReg(obj)) return         
            if (isLimit(serial)) return
            
            await limitAdd(serial)
            const cersex = await axios.get(`https://api.vhtear.com/cerita_sex&apikey=${vhtearkey}`)
            if (cersex.data.error) {
                iluser.reply(message.from, cersex.data.error, message.id)
            } else {
                iluser.sendFileFromUrl(message.from, cersex.data.result.image, '', `*Result* : ${cersex.data.result.cerita}`, message.id)
            }
            break 
    case prefix+'chatpremium':
	    if (!isOwner) return await iluser.reply(message.from, `Perintah ini hanya bisa digunakan oleh super owner bot`, id)
		const msgny = body.slice(11)
		const pngm = await iluser.getHostNumber(adminNumber)
		iluser.sendText(pngm, `FROM OWNER BOT: ${serial.replace(/[@c.us]/g, '')}\n\n${msgny}\n\n\n*iluser_BOT*`)
		await iluser.reply(message.from, `Sukses chat user premium`, id)
		break
    case prefix+'carbon':
         if (args.length === 1) return iluser.reply(message.from, 'Teks nya mana??', id)
		 iluser.reply(message.from, mess.wait, id)	
	     const darculanyas = `https://carbonnowsh.herokuapp.com/?code=${body.slice(8)}&theme=darcula&backgroundColor=rgba(50, 50, 50, 150)`
	      iluser.sendFileFromUrl(from, darculanyas)
	     break
    case prefix+'ceklokasi':
        if (!quotedMsg && !quotedMsg.type == 'location') return iluser.reply(message.from, `Maaf, format pesan salah.\nKirimkan lokasi dan reply dengan caption ${prefix}ceklokasi`, id)
            console.log(`Request Status Zona Penyebaran Covid-19 (${quotedMsg}, ${quotedMsg}).`)
            const zoneStatus = await getLocationData(quotedMsg.lat, quotedMsg.lng)
            if (zoneStatus.kode !== 200) iluser.sendText(from, 'Maaf, Terjadi error ketika memeriksa lokasi yang anda kirim.')
            let datax = ''
            for (let i = 0; i < zoneStatus.data.length; i++) {
                const { zone, region } = zoneStatus.data[i]
                const _zone = zone == 'green' ? 'Hijau* (Aman) \n' : zone == 'yellow' ? 'Kuning* (Waspada) \n' : 'Merah* (Bahaya) \n'
                datax += `${i + 1}. Kel. *${region}* Berstatus *Zona ${_zone}`
            }
            const texto = `*CEK LOKASI PENYEBARAN COVID-19*\nHasil pemeriksaan dari lokasi yang anda kirim adalah *${zoneStatus.status}* ${zoneStatus.optional}\n\nInformasi lokasi terdampak disekitar anda:\n${datax}`
            iluser.sendText(message.from, texto, id)
            break	
    case prefix+'infonomor':
        if (args.length == 1) return iluser.reply(message.from, 'Nomornya mana??', id)
        const nomro = body.slice(11)
      	const nomronya = await fetch(`http://docs-jojo.herokuapp.com/api/infonomor?no=${nomro}`)
      	const nmro = await nomronya.json()
      	iluser.reply(message.from, `• *Nomor* : ${nmro.nomor} \n• *Internasional* : ${nmro.international} \n• *Operator* : ${nmro.op}`, id)
     	break
    case prefix+'pantun':
            fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/pantun.txt')
            .then(res => res.text())
            .then(body => {
                let splitpantun = body.split('\n')
                let randompantun = splitpantun[Math.floor(Math.random() * splitpantun.length)]
                iluser.reply(message.from, randompantun.replace(/aruga-line/g,"\n"), id)
            })
            .catch(() => {
                iluser.reply(message.from, 'Ada yang Error!', id)
            })
            break
    case prefix+'toxic':
      if(isReg(obj)) return
      if (args.length === 1) return iluser.reply('Neh Contoh Mhank\n*#toxic [TEXT]\nnih gw kasih bonus:\n#toxic UserGoblok*', id)
      iluser.reply (from, `tunggu yaahh ${pushname} sayang kagak bakal lama\n*Ngk kayak Nunggu si Dia ngk pernah Datang Datang*`, id)
      const copastaje = body.slice(7)
      if(copastaje.length > 15) return iluser.reply(from, 'maximal 15 Huruf', id)
      iluser.sendFileFromUrl(from, `https://arugaz.my.id/api/textpro/toxictext?text=${copastaje}`, 'pantai.jpg', `neeh sayang ${pushname}\n*ngak lama kan, Ngak kayak nunggu dia Datang Tak di undang Pulang tak di antar*`, id)
      break
        case prefix+'phcomment':
                if(isReg(obj)) return
                const phcoments = body.slice(11)
                if (!phcoments) return await iluser.reply(from, `Format Salah!\nketik : ${prefix}phcomment text1|text2\nContoh : ${prefix}phcomment test|tas`, id)
                const usernamePh = phcoments.split('|')[0]
                const commentPh = phcoments.split('|')[1]
                const ppPhRaw = await iluser.getProfilePicFromServer(sender.id)
                if (ppPhRaw === undefined) {
                    var ppPh = errorurl
                } else {
                    var ppPh = ppPhRaw
                }
                const dataPpPh = await bent('buffer')(ppPh)
                const linkPpPh = await uploadImages(dataPpPh, `${sender.id}_ph`)
                await iluser.reply(from, mess.wait, id)
                const preproccessPh = await axios.get(`https://nekobot.xyz/api/imagegen?type=phcomment&image=${linkPpPh}&text=${commentPh}&username=${usernamePh}`)
                await iluser.sendFileFromUrl(from, preproccessPh.data.message, 'ph.jpg', '', id)
                console.log('Success creating image!')
            break
 
        case prefix+'wiki':
            if (args.length === 1) return iluser.reply(from, 'Contoh : *.wiki covid-19*', id)
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            const query_ = body.slice(6)
            const wiki = await get.get('https://docs-jojo.herokuapp.com/api/wiki?q='+ query_).json()
            if (wiki.error) {
                iluser.reply(from, wiki.error, id)
            } else {
                iluser.reply(from, `*Artikel*: ${query_}\n\n*Hasil*: ${wiki.result} ${mess.iklan}`, id)
                //iluser.sendImage(from, wiki.img, 'nigambar.jpg',`*Artikel*: ${query_}\n\n*Hasil*: ${wiki.result} ${mess.iklan}`, id)
            }
            break   
        case prefix+'kbbi':
            if(isReg(obj)) return         
            if (isLimit(serial)) return
            
            await limitAdd(serial)
            if (args.length === 1) return iluser.reply(message.from, `Contoh : *${prefix}kbbi asu*`, message.id)
            const kbbl = body.slice(6)
            const kbbl2 = await axios.get(`https://api.vhtear.com/kbbi?query=${kbbl}&apikey=${vhtearkey}`)

            if (kbbl2.data.error) {
                iluser.reply(message.from, kbbl2.data.error, message.id)
            } else {
                iluser.sendText(message.from, `*「 KBBI 」*\n\n• *Query* : ${kbbl}\n\n• *Result* : ${kbbl2.data.result.hasil} ${mess.iklan}`, message.id)
            }
            break
        case prefix+'googleimage':
            if(isReg(obj)) return         
            if (isLimit(serial)) return
            
            await limitAdd(serial)
            argz = body.trim().split('|')
            if (argz.length >= 2) {
            const qwery = argz[1]
            const jum = argz[2]
            if(!qwery) return await iluser.reply(message.from, `Contoh = ${prefix}googleimage |loli|3`, message.id)
            if(!jum) return await iluser.reply(message.from, `Jumlah gambar diperlukan, contoh = ${prefix}googleimage |loli|3`, message.id)
            if(jum >= 6) return await iluser.reply(message.from, 'Jangan serakah anyink', message.id)
            var gis = require('g-i-s');
            var opts = {
                searchTerm: qwery
                };
                gis(opts, logResults);
                    
                function logResults(error, results) {
                    if (error) {
                        iluser.reply(message.from, 'Maaf, Fitur Sedang Error', message.id)
                    } else {
                        const item = results.slice(0, jum)
                        item.forEach(async(res) => {
                        console.log(res)
                        const yurl = await urlShortener(res.url)
                        iluser.sendImage(message.from, res.url, null, `• Link : ${yurl}\n• Image size : ${res.height} x ${res.width} ${mess.iklan}`) 
                        })
                    }
                }
            }
            break
        case prefix+'sandwriting':
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            if (args.length === 1)  return iluser.reply(message.from, `${prefix}Contoh *${prefix}sandwriting iluser_BOT Cantik*`, message.id)
            const swrt = body.slice(13)
            try {
            const swrt2 = await axios.get('https://api.vhtear.com/sand_writing?text1=' + swrt + '&apikey=' + vhtearkey)
            const { imgUrl } = swrt2.data.result
            const swrt3 = `*「 SAND WRITING 」*

*Text : ${swrt}* ${mess.iklan}`
            const pictk = await bent("buffer")(imgUrl)
            const base64 = `data:image/jpg;base64,${pictk.toString("base64")}`
            iluser.sendImage(message.from, base64, swrt3)
            } catch (err) {
             console.error(err.message)
             await iluser.sendFileFromUrl(message.from, errorurl2, 'error.png', '💔️ Maaf, User tidak ditemukan')
             iluser.sendText(ownerNumber, 'Sand Writing Error : ' + err)
           }
          break
         case prefix+'tahta':
            if(isReg(obj)) return
             if (isLimit(serial)) return 
    
             await limitAdd(serial)
             const jreng = body.slice(7)
             if (!jreng) return iluser.reply(message.from, `Contoh *${prefix}tahta iluser_BOT*`, message.id)
             if (jreng.length > 11) return iluser.reply(message.from, 'Maksimal 11 Huruf!', message.id)
             iluser.sendText(message.from, mess.wait, message.id)
             await iluser.sendFileFromUrl(message.from, `https://api.vhtear.com/hartatahta?text=${jreng}&apikey=${vhtearkey}`,`${jreng}.jpg`,`${mess.iklann}`, message.id)        
             break
        case prefix+'resepmasakan':
        case prefix+'resep':
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            if (args.length === 1)  return iluser.reply(message.from, `Contoh *${prefix}resepmasakan rawon*`, message.id)
            argz = body.trim().split(' ')
            console.log(...arg[1])
            var slicedArgs = Array.prototype.slice.call(argz, 1);
            console.log(slicedArgs)
            const rmk = await slicedArgs.join(' ')
            console.log(rmk)
            try {
            const resp = await axios.get('https://api.vhtear.com/resepmasakan?query=' + rmk + '&apikey=' + vhtearkey)
            const { bahan, cara, image, title  } = resp.data.result
            const rmk3 = `*Resep Ditemukan!*
• *Judul:* ${title}
• *Bahan:* ${bahan}
• *Cara:* ${cara}`

            const pictk = await bent("buffer")(image)
            const base64 = `data:image/jpg;base64,${pictk.toString("base64")}`
            iluser.sendImage(message.from, base64, title, `${rmk3} ${mess.iklan}`)
            } catch (err) {
             console.error(err.message)
             await iluser.sendFileFromUrl(message.from, errorurl2, 'error.png', '💔️ Maaf, Resep tidak ditemukan')
             iluser.sendText(ownerNumber, 'Resepmasakan Error : ' + err)
           }
           break
        case prefix+'tw':
        case prefix+'twt':
        case prefix+'twitter':
            if(isReg(obj)) return
            if (isBlocked) return await iluser.reply(message.from, mess.blockk, message.id)
            if(args.length == 1) return await iluser.reply(message.from, "Maaf, tidak boleh kosong.", message.id)
            if (isLimit(serial)) return 
            
            await limitAdd(serial) 
            if (args[1].includes('twitter.com') == true) {
                try {
                    const getToken = await GetAccesToken()
                    const getGuest = await getGuestToken(getToken.access_token)
                    if(args[1].includes('status/')==true)
                    {
                        const post_id = args[1].split('status/')[1].split('/')[0]
                        const getAktivated = await getAktivate(getToken.access_token, getGuest.guest_token, post_id)
                        if(typeof getAktivated.errors == 'undefined')
                        {
                            const total = getAktivated.extended_entities.media[0].video_info.variants.length - 1
                            const urldownload = getAktivated.extended_entities.media[0].video_info.variants[total]
                            const namauser = getAktivated.user.screen_name
                            const waktu = getAktivated.extended_entities.media[0].video_info.duration_millis / 1000 + ` detik.`
                            let result_url = ''
                            urldownload.content_type == 'application/x-mpegURL' ? result_url = getAktivated.extended_entities.media[0].video_info.variants[total - 1].url : result_url = urldownload.url;
                            await iluser.sendFileFromUrl(message.from,  result_url, `inifile.mp4`, `Sukses Download!\nDari: @${namauser}\nDurasi: ${waktu} ${mess.iklan}`, message.id);
                        
                        }
                        else if(getAktivated.errors[0].message == 'Sorry, you are not authorized to see this status.')
                        {
                            await iluser.reply(message.from, 'Maaf, user private.', message.id)
                        }else if(getAktivated.errors[0].message == 'No status found with that ID.')
                        {
                            await iluser.reply(message.from, 'Maaf, tidak ditemukan status dalam id tersebut.', message.id)
                        }else if(getAktivated.errors[0].message == 'No data available for specified ID.')
                        {
                            await iluser.reply(message.from, 'Maaf, tidak ditemukan data dalam id tersebut.', message.id)
                        }else if(getAktivated.errors[0].message == 'Invalid or expired token.')
                        {
                            await iluser.reply(message.from, 'Token kadaluarsa. Lapor admin segera https://wa.me/6289618530831')
                        }

                    }
                } catch(err)  {
                    console.log(err)
                    await iluser.reply(message.from, "⛔ error", message.id)
                }

            } else {
                await globaliluser.reply(message.from, "⛔ Not valid url/post_id", message.id)
            }
        break        
        case prefix+'twitterstalk':
        case prefix+'twtstalk':
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            if (args.length === 1)  return iluser.reply(message.from, `Contoh *${prefix}twtstalk @miakhalifah*1`, message.id)
            argz = body.trim().split(' ')
            console.log(...argz[1])
            var slicedArgs = Array.prototype.slice.call(argz, 1);
            console.log(slicedArgs)
            const twstalk = await slicedArgs.join(' ')
            console.log(twstalk)
            try {
            const twstalk2 = await axios.get('https://mhankbarbars.herokuapp.com/api/twstalk?username=' + twstalk + '&apiKey=' + barbarkey)
            const { followers_count, full_name, name, profile_pic, status_count } = twstalk2.data
            const twstalk3 = `*User Ditemukan!*

• *Nama:* ${name}
• *Nama Panjang:* ${full_name}
• *Jumlah Pengikut:* ${followers_count}
• *Jumlah Postingan:* ${status_count} ${mess.iklan}`

            const pictk = await bent("buffer")(profile_pic)
            const base64 = `data:image/jpg;base64,${pictk.toString("base64")}`
            iluser.sendImage(message.from, base64, name, twstalk3)
            } catch (err) {
             console.error(err.message)
             await iluser.sendFileFromUrl(message.from, errorurl2, 'error.png', '💔️ Maaf, User tidak ditemukan')
             iluser.sendText(ownerNumber, 'Twitter Error : ' + err)
           }
          break
        case prefix+'runtime':
            iluser.reply(from, `Bot telah aktif selama :\n${cts}`, message.id)
            break
        /*case prefix+'igstalk':
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            if (args.length === 1)  return iluser.reply(message.from, `Contoh *${prefix}igstalk duar_amjay*`, message.id)
            argz = body.trim().split(' ')
            console.log(...argz[1])
            var slicedArgs = Array.prototype.slice.call(argz, 1);
            console.log(slicedArgs)
            const istalk = await slicedArgs.join(' ')
            console.log(istalk)
            try {
            const istalk2 = await axios.get('https://tobz-api.herokuapp.com/api/stalk?username=' + istalk)
            const { Biodata, Jumlah_Followers, Jumlah_Following, Profile_pic, Jumlah_Post, Name, Username } = istalk2.data
            const istalk3 = `*User Ditemukan!*

• *Username:* ${Username}
• *Nama:* ${Name}
• *Bio:* ${Biodata}
• *Mengikuti:* ${Jumlah_Following}
• *Pengikut:* ${Jumlah_Followers}
• *Jumlah Postingan:* ${Jumlah_Post} ${mess.iklan}`
            
            const pictk = await bent("buffer")(Profile_pic)
            const base64 = `data:image/jpg;base64,${pictk.toString("base64")}`
            iluser.sendImage(message.from, base64, Username, istalk3)
            } catch (err) {
             console.error(err.message)
             await iluser.sendFileFromUrl(message.from, errorurl2, 'error.png', '💔️ Maaf, User tidak ditemukan')
             iluser.sendText(ownerNumber, 'Igstalk Error : ' + err)
           }
          break*/
        case `${prefix}igstalk`:
            if (args.length === 1)  return iluser.reply(from, `Contoh *${prefix}igstalk duar_amjay*`, message.id)
            argz = body.trim().split(' ')
            console.log(...argz[1])
            var slicedArgs = Array.prototype.slice.call(argz, 1);
            console.log(slicedArgs)
            const istalk = await slicedArgs.join(' ')
            console.log(istalk)
            try {
            const istalk2 = await axios.get('https://api.vhtear.com/igprofile?query=' + istalk + '&apikey=' + vhtearkey)
            const { biography, follower, follow, post_count, full_name, username, picture, is_private } = istalk2.data.result
            const istalk3 = `*User Ditemukan!*
• *Username:* ${username}
• *Nama:* ${full_name}
• *Bio:* ${biography}
• *Mengikuti:* ${follow}
• *Pengikut:* ${follower}
• *Jumlah Postingan:* ${post_count}`

            const pictk = await bent("buffer")(picture)
            const base64 = `data:image/jpg;base64,${pictk.toString("base64")}`
            iluser.sendImage(from, base64, username, istalk3, message.id)
            } catch (err) {
             console.error(err.message)
             await iluser.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, User tidak ditemukan')
             iluser.sendText(ownerNumber, 'Igstalk Error : ' + err)
           }
          break
        case prefix+'tiktokstalk':
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            if (args.length === 1)  return iluser.reply(message.from, `Contoh *${prefix}tiktokstalk @duar_amjay*`, message.id)
            argz = body.trim().split(' ')
            console.log(...argz[1])
            var slicedArgs = Array.prototype.slice.call(argz, 1);
            console.log(slicedArgs)
            const tstalk = await slicedArgs.join(' ')
            console.log(tstalk)
            try {
            const tstalk2 = await axios.get('https://api.vhtear.com/tiktokprofile?query=' + tstalk + '&apikey=' + vhtearkey)
            const { username, bio, follow, follower, title, like_count, video_post, description, picture, url_account } = tstalk2.data.result
            const tiktod = `*User Ditemukan!*
• *Username:* ${username}
• *Judul:* ${title}
• *Bio:* ${bio}
• *Mengikuti:* ${follow}
• *Pengikut:* ${follower}
• *Jumlah Like*: ${like_count}
• *Jumlah Postingan:* ${video_post}
• *Deskripsi:* ${description}
• *Link:* ${url_account} ${mess.iklan}`

            const pictk = await bent("buffer")(picture)
            const base64 = `data:image/jpg;base64,${pictk.toString("base64")}`
            iluser.sendImage(message.from, base64, title, tiktod)
            } catch (err) {
             console.error(err.message)
             await iluser.sendFileFromUrl(message.from, errorurl2, 'error.png', '💔️ Maaf, User tidak ditemukan')
             iluser.sendText(ownerNumber, 'Error Tiktokstalk : '+ err)
           }
          break
        case prefix+'smulestalk':
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            if (args.length === 1) return iluser.reply(message.from, `Contoh : *${prefix}smulestalk loli*`, message.id)
            argz = body.trim().split(' ')
            console.log(...argz[1])
            var slicedArgs = Array.prototype.slice.call(argz, 1);
            console.log(slicedArgs)
            const sstalk = await slicedArgs.join(' ')
            console.log(sstalk)
            try {
            const sstalk2 = await axios.get('https://api.vhtear.com/smuleprofile?query=' + sstalk + '&apikey=' + vhtearkey)
            const { username, full_name, follower, follow, biography, is_vip, picture, recording } = sstalk2.data.result
            const smule = `*User Ditemukan!*
• *Username:* ${username}
• *Full Name:* ${title}
• *Biografi:* ${biography}
• *Mengikuti:* ${follow}
• *Pengikut:* ${follower}
• *VIP*: ${is_vip}
• *Total Rekaman:* ${recording} ${mess.iklan}`

            const pictk = await bent("buffer")(picture)
            const base64 = `data:image/jpg;base64,${pictk.toString("base64")}`
            iluser.sendImage(message.from, base64, title, smule)
            } catch (err) {
             console.error(err.message)
             await iluser.sendFileFromUrl(message.from, errorurl2, 'error.png', '💔️ Maaf, User tidak ditemukan')
             iluser.sendText(ownerNumber, 'Error Smulestalk : '+ err)
            }
          break
        case prefix+'':
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            if (args.length === 1) return iluser.reply(message.from, `Contoh: ${prefix} halo beban`, message.id)
            const que = body.slice(2)
            const sigo = await axios.get(`http://simsumi.herokuapp.com/api?text=${que}&lang=id`)
            const sigot = sigo.data
            iluser.reply(message.from, sigot.success, message.id)
            console.log(sigot)
            break 
        case prefix+'s':
        case '#s':
        case '/s':
        	if(isReg(obj)) return  
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
           if (args.length ===1) return iluser.reply(message.from, 'ketik .s kata kata untuk mengobrol dengan sim simi \ncontoh *. dimana rumahnya?*', message.id)
           const simi = body.slice(3)
           const rafi = await get.get(`https://api.be-line.me/simisimi?lang=id&text=${simi}`).json()
           if (rafi.reason) return iluser.reply(message.from, 'Aduh Gak Ngerti mungkin server error atau kakaknya yg error', message.id)
           await iluser.reply(message.from, rafi.result, message.id)         
           break
        case prefix+'ig': 
        case prefix+'instagram':
            if(isReg(obj)) return
            if (isLimit(serial)) return
            if (args.length === 1) return iluser.reply(message.from, `Contoh: ${prefix}ig likpost`, message.id)
            if (!args[1].match(isUrl) && !args[1].includes('instagram.com')) return iluser.reply(message.from, `Maaf, link yang kamu kirim tidak valid. [Invalid Link]`, message.id)
            instagram(args[1]).then(async(res) => {
                let username = res.owner_username;
                for (let i = 0; i < res.post.length; i++) {
                if (res.post[i].type == "image") {
                		if (!isAdmin) return await iluser.sendImage(message.from, './logo.png', 'kntl.png', `*「 INSTAGRAM 」*\n\n• *Username* : ${username}\n• *Tipe* : Image\n\n${mess.noprem}\n[${res.post[i].urlDownload}]`, message.id);
                        await iluser.sendFileFromUrl(message.from, res.post[i].urlDownload, "ig.jpg", `*「 INSTAGRAM 」*\n\n• *Username* : ${username}\n• *Tipe* : Image ${mess.iklan}`, message.id);
                        limitAdd(serial)
                    } else if (res.post[i].type == "video") {
                    	if (!isAdmin) return await iluser.sendImage(message.from, './logo.png', 'kntl.png',`*「 INSTAGRAM 」*\n\n• *Username* : ${username}\n• *Tipe* : Video\n\n${mess.noprem}\n[${res.post[i].urlDownload}]`, message.id);
                        await iluser.sendFileFromUrl(message.from, res.post[i].urlDownload, "ig.mp4", `*「 INSTAGRAM 」*\n\n• *Username* : ${username}\n• *Tipe* : Video ${mess.iklan}`, message.id);
                        limitAdd(serial)
                    }
                }
            }).catch((err) => {
                console.log(err);
                iluser.reply(message.from, `[ERROR] Terjadi Kesalahan`, message.id)
            })
            break
        case prefix+'ig2': 
        case prefix+'instagram2':
            if(isReg(obj)) return
            if (isBlocked) return await iluser.reply(message.from, mess.blockk, message.id)
            if (args.length === 1) return iluser.reply(message.from, 'Linknya mana cooook!!!')
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            if (!args[1].match(isUrl) && !args[1].includes('instagram.com')) return iluser.reply(message.from, mess.error.Iv, message.id)
            try {
                const resp = await get.get(`https://st4rz.herokuapp.com/api/ig?url=${args[1]}`).json()
                if (resp.result.includes('.mp4')) {
                    var ext = '.mp4'
                } else {
                    var ext = '.jpg'
                }
                if (!isAdmin) return await iluser.sendImage(message.from, './logo.png', 'kntl.png',`Sukses mengunduh media instagram!\n\n${mess.noprem}\n[${resp.result}]`, message.id);
                await iluser.sendFileFromUrl(message.from, resp.result, `igeh${ext}`, `Sukses mengunduh media instagram ${mess.iklan}`, message.id)
            } catch {
                iluser.reply(message.from, mess.error.Ig, message.id)
                }
            break
        case prefix+'fb2':
        	if(isReg(obj)) return         
            if (isLimit(serial)) return
            
            await limitAdd(serial)
            if (args.length === 1) return iluser.reply(message.from, `Contoh : ${prefix}fb https://www.facebook.com/xnxx`, message.id)
            facebook(args[1]).then(async(res) => {
                let { VideoUrl } = await res
                const epbe2 = `*FACEBOOK DOWNLOADER*\n`
                if (!isAdmin) return await iluser.sendImage(message.from, './logo.png', 'kntl.png',`${epbe2}\n\n${mess.noprem}\n[${VideoUrl}]`, message.id);
                iluser.sendFileFromUrl(message.from, VideoUrl, `Facebook.mp4`, `${epbe2} ${mess.iklan}`, message.id)
            }).catch((err) => {
                console.log(err);
                iluser.reply(message.from, `Maaf, Terjadi Kesalahan`, message.id)
            })
            break
        case prefix+'fb':
            if(isReg(obj)) return
            try {
                if (args.length === 1) return iluser.reply(message.from, 'Linknya mana?', message.id)
               if (isLimit(serial)) return 
            
                limitAdd(serial)
                const link = args[1]
                if(!link.includes('facebook.com')) return await iluser.reply(message.from, "Maaf, url tidak valid bersumber dari facebook.com", message.id)
                const puppeteer = require('puppeteer')
                const browser = await puppeteer.launch({headless: true, args: [
                  "--disable-notifications"
                ]}); 
                try {
                    
                    const page = await browser.newPage();
                    await page.goto('https://sfull.net/', {waitUntil: 'networkidle2'});  
                    await page.type('input[id="url"]', link);
                    await page.keyboard.press('Enter');
                    await page.waitForSelector('div[class="abuttons"]', {visible: true})
                    const getDownload = await page.$$('div[class="abuttons"] a');
                    await getDownload[getDownload.length-1].click()
                    await page.waitForSelector('div[class="col-12 btn-sfull"]', {visible: true})
                    let spanHref = await page.$eval('div[class="col-12 btn-sfull"] center a', span => span.getAttribute('href'));  
                    await browser.close()
                    if (!isAdmin) return await iluser.sendImage(message.from, './logo.png', 'kntl.png',`*FACEBOOK DOWNLOADER*\n\n${mess.noprem}\n[${spanHref}]`, message.id);
                    await iluser.sendFileFromUrl( message.from,  spanHref, `inifile.mp4`, `Sukses Download Facebok! ${mess.iklan}`, message.id)
                
                } catch (error) {
                    await iluser.reply(message.from, "Maaf, tidak menemukan link download mungkin postingan private.", message.id)
                    await browser.close()
                }
            } catch (error) {
                console.log(error)
            }
        break
        case prefix+'pin':
            if(isReg(obj)) return
            if (isBlocked) return await iluser.reply(message.from, mess.blockk, message.id)
            if(args.length == 1) return await iluser.reply(message.from, `Pastikan contoh benar!\n${prefix}pin <link>`, message.id)
            //if (args[1].includes('pinterest.com') != true || args[1].includes('pin.it') != true) return await iluser.reply(message.from, `Pastikan link berasal dari pinterest!`, message.id)
            else{
                if (isLimit(serial)) return 
            
                await limitAdd(serial)
                const a = await PIN.PinterestAPI(args[1]) 
                const get64 = await getBase64(a)
                const getFileType = base64MimeType(get64).split('/')[1]
                await iluser.sendImage(message.from, get64, `inifile.${getFileType}`, `Pinterest X iluser_BOT ${mess.iklan}`, message.id); 
            }
        break
        case prefix+'zodiak':
            if(isReg(obj)) return
            if (isBlocked) return await iluser.reply(message.from, mess.blockk, message.id)
            if(args.length == 1) return await iluser.reply(message.from, 'Tidak boleh kosong', message.id);
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            if(args[1]=='aries' || args[1]=='gemini' || args[1]=='leo' || args[1]=='libra' || args[1]=='sagitarius' || args[1]=='aquarius' || 
            args[1]=='taurus' || args[1]=='cancer' || args[1]=='virgo' || args[1]=='scorpio' || args[1]=='capricorn' || 
            args[1]=='pisces') {
                const zodiak = await ZODIAK.getZodiakToday(args[1])
                return await iluser.reply(message.from, `Zodiak ${args[1].toUpperCase()} Hari ini.\n
Umum :
${zodiak.umum}

Love :
${zodiak.love.replace('Couple', 'Couple')}

Keuangan :
${zodiak.keuangan} ${mess.iklan}`, message.id); 
            }
            await iluser.reply(message.from, `Kode : Tidak ditemukan!`, message.id)
        break
        case prefix+'waktu':
            if(isReg(obj)) return         
            if (isLimit(serial)) return
            
            await limitAdd(serial)
            await iluser.reply(message.from, `Waktu Indonesia Barat: *${moment().utcOffset('+0700').format('HH:mm')}* WIB \nWaktu Indonesia Tengah: *${moment().utcOffset('+0800').format('HH:mm')}* WITA \nWaktu Indonesia Timur: *${moment().utcOffset('+0900').format('HH:mm')}* WIT ${mess.iklan}`, message.id)
            break
        case prefix+'tiktok':
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            if (args.length === 1) return iluser.reply(message.from, `Contoh : ${prefix}tiktok https://vt.tiktok.com/xnxx/`, message.id)
            tiktok(args[1]).then(async(res) => {
                let { video, title, image, desk, dibuat, duration } = await res
                let ttiktok = `*TIKTOK DOWNLOADER*\n\n• *Judul* : ${title}\n• Deskripsi : ${desk}\n• Durasi : ${duration}\n• Dibuat : ${dibuat}\n\n_Silahkan tunggu sebentar proses pengiriman file membutuhkan waktu beberapa menit._`
                //iluser.sendFileFromUrl(message.from, image, 'thumb.jpg', ttiktok, message.id)
                if (!isAdmin) return await iluser.sendImage(message.from, './logo.png', 'kntl.png',`*TIKTOK DOWNLOADER*\n\n${mess.noprem}\n[${video}]`, message.id);
                await iluser.sendFileFromUrl(message.from, video, `${title}.mp4`, `Tiktok X iluser_BOT ${mess.iklan}`, message.id).catch(() => iluser.reply(message.from, mess.error.Yt4, message.id))
                await limitAdd(serial)
            }).catch((err) => {
                console.log(err);
                iluser.reply(message.from, `Maaf, Terjadi Kesalahan`, message.id)
            })
            break
        case prefix+'smule':
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            if (args.length === 1) return iluser.reply(message.from, `Contoh : ${prefix}smule https://www.smule.com/p/xnxx`, message.id)
            
            smule(args[1]).then(async(res) => {
                let { Type, title, url, image } = await res
                let tsmule = `*「 SMULE DOWNLOADER 」*\n\n• *Judul* : ${title}\n• *Type:* ${Type}\n\n_Silahkan tunggu sebentar proses pengiriman file membutuhkan waktu beberapa menit._`
                iluser.sendFileFromUrl(message.from, image, 'thumb.jpg', tsmule, message.id)
                await iluser.sendFileFromUrl(message.from, url, `${title}.mp3`, `Smule X iluser_BOT ${mess.iklan}`, message.id).catch(() => iluser.reply(message.from, mess.error.Yt4, message.id))
                await limitAdd(serial)
            }).catch((err) => {
                console.log(err);
                iluser.reply(message.from, `Maaf, Terjadi Kesalahan`, message.id)
            })
            break
        case prefix+'starmaker':
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            if (args.length === 1) return iluser.reply(message.from, `Contoh: ${prefix}starmaker [linkStarmaker]`, message.id)
            
            starmaker(args[1]).then(async(res) => {
                let { image, desc, url, title } = await res
                let tstarmaker = `*「 STARMAKER DOWNLOADER 」*\n\n• *Judul* : ${title}\n• *Deskripsi:* ${desc}\n\n_Silahkan tunggu sebentar proses pengiriman file membutuhkan waktu beberapa menit._`
                iluser.sendFileFromUrl(message.from, image, 'thumb.jpg', tstarmaker, message.id)
                await iluser.sendFileFromUrl(message.from, url, `${title}.mp3`, '', message.id).catch(() => iluser.reply(message.from, mess.error.Yt4, message.id))
                await limitAdd(serial)
            }).catch((err) => {
                console.log(err);
                iluser.reply(message.from, `Maaf, Terjadi Kesalahan`, message.id)
            })
            break
        case prefix+'twitter2':
        case prefix+'twt2':
        case prefix+'tw2':
            if(isReg(obj)) return

            if (isLimit(serial)) return 
            if (args.length === 1) return iluser.reply(message.from, `Contoh: ${prefix}tw2 [ Link Twitter ]`, message.id)
            
            twitter(args[1]).then(async(res) => {
                let { desk, urlVideo } = await res
                let ttwitter = `*「 TWITTER DOWNLOADER 」*\n\n• *Aplikasi:* Twitter\n• *Deskripsi:* ${desk} ${mess.iklann}\n\n_Silahkan tunggu sebentar proses pengiriman file membutuhkan waktu beberapa menit._`
                await iluser.sendFileFromUrl(message.from, urlVideo, `twit.mp3`, ttwitter, message.id).catch(() => iluser.reply(message.from, mess.error.Yt4, message.id))
                await limitAdd(serial)
            }).catch((err) => {
                console.log(err);
                iluser.reply(message.from, `Maaf, Terjadi Kesalahan`, message.id)
            })
            break
        case prefix+'maps':
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            if (args.length === 1) return iluser.reply(message.from, `Contoh: ${prefix}maps Jakarta*`, message.id)
            argz = body.trim().split(' ')
            console.log(...argz[1])
            var slicedArgs = Array.prototype.slice.call(argz, 1);
            console.log(slicedArgs)
            const mapz = await slicedArgs.join(' ')
            console.log(mapz)
            try {
            const mapz2 = await axios.get('https://mnazria.herokuapp.com/api/maps?search=' + mapz)
            const { gambar } = mapz2.data
            const pictk = await bent("buffer")(gambar)
            const base64 = `data:image/jpg;base64,${pictk.toString("base64")}`
            iluser.sendImage(message.from, base64, 'maps.jpg', `*Hasil Maps : ${mapz}* ${mess.iklan}`, message.id)
            } catch (err) {
             console.error(err.message)
             await iluser.sendFileFromUrl(message.from, errorurl2, 'error.png', '💔️ Maaf, User tidak ditemukan')
             iluser.sendText(ownerNumber, 'Error Maps : '+ err)
           }
          break
        /*case prefix+'joox':
        	if(isReg(obj)) return         
            if (isLimit(serial)) return
            
            await limitAdd(serial)
            if (args.length === 1) return iluser.reply(message.from, `Contoh : *${prefix}joox Alan Walker*`, message.id)
            joox(args[1]).then(async(res) => {
                let { penyanyi, judul, album, linkImg, linkMp3, filesize, ext, duration } = await res
                let tjoox = `*「 JOOX DOWNLOADER 」*\n\n• *Penyanyi:* ${penyanyi}\n• *Judul:* ${judul}\n• *Album:* ${album}\n• *Ext:* ${ext}\n• *Size:* ${filesize}\n• *Durasi:* ${duration} ${mess.iklann}\n\n_Silahkan tunggu sebentar proses pengiriman file membutuhkan waktu beberapa menit._`
                iluser.sendImage(message.from, linkImg, judul, tjoox)
                iluser.sendFileFromUrl(message.from, linkMp3, `${judul}.${ext}`, '', message.id).catch(() => iluser.reply(message.from, mess.error.Yt4, message.id))
                await limitAdd(serial)
            }).catch((err) => {
                console.log(err);
                iluser.reply(message.from, `Maaf, Terjadi Kesalahan`, message.id)
            })
            break*/
        case prefix+'joox': {
            if(isReg(obj)) return 
            if(isLimit(serial)) return
            if (args.length === 1) return await iluser.reply(from, 'Kirim perintah .joox nama lagu \nContoh .joox armada apa kabar sayang')
            const play = body.slice(6)
            try {
                const joox = await get.get('https://mnazria.herokuapp.com/api/jooxnich?search='+ play).json()
                if (joox.error) {
                    await iluser.reply(from, 'Wah ternyata lagunya tidak ada wkwkwk', id)
                } else {
                    const { msinger, msong, imgSrc, m4aUrl,mp3Url, result } = await joox
                    if (!isAdmin) return await iluser.sendImage(message.from, './logo.png', 'kntl.png',`👉 Penyanyi : ${result.msinger}\n👉 Judul : ${result.msong}\n\n${mess.noprem}\n[${result.mp3Url}]`, message.id);
                    await iluser.sendFileFromUrl(from, result.imgSrc, 'imgsrc.jpg', `👉 Penyanyi : ${result.msinger}\n👉 Judul : ${result.msong}\n\nSilahkan tunggu sebentar proses pengiriman file membutuhkan waktu beberapa menit.`, id)
                    await iluser.sendFileFromUrl(from, result.mp3Url, `${result.msong}.mp3`, '', id).catch(() => iluser.reply(from, mess.error.Yt3, id))
                }
            } catch (err) {
                iluser.sendText(ownerNumber, 'Error ytmp3 : '+ err)
                iluser.reply(from, mess.error.Yt3, id)
            }}
            limitAdd(serial)
            break
        case prefix+'checkip':
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            if (args.length === 1) return iluser.reply(from, 'Kirim perintah *#checkip [ipaddress]*\nContoh : *#checkip 182.0.144.145*', id)
            iluser.reply(from, mess.wait, id)
            argz = body.trim().split(' ')
            console.log(...argz[0])
            var slicedArgs = Array.prototype.slice.call(arg, 0);
            console.log(slicedArgs)
            const cekip = await slicedArgs.join(' ')
            console.log(cekip)
            try {
            const cekip2 = await axios.get('https://mnazria.herokuapp.com/api/check?ip=' + cekip)
            const { city, continent_name, country_name, ip, latitude, location, longitude, region_name } = cekip2.data
            const cekip3 = `*User Ditemukan!*
• *Kota:* ${city}
• *Benua:* ${continent_name}
• *Negara:* ${country_name}
• *Ip Address:* ${ip}
• *Garis Lintang:* ${latitude}
• *Kode Telepon:* +${location.calling_code}
• *Ibu Kota:* +${location.capital}
• *Bahasa:* +${location.languages[0].name}
• *Garis Bujur:* ${longitude}
• *Wilayah:* +${region_name}`

            const pictk = await bent("buffer")(location.country_flag)
            const base64 = `data:image/jpg;base64,${pictk.toString("base64")}`
            iluser.sendImage(from, location.country_flag, `${city}`, cekip3)
            await limitAdd(serial)
            } catch (err) {
             console.error(err.message)
             await iluser.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, User tidak ditemukan')
             iluser.sendText(ownerNumber, 'Error Check IP : '+ err)
           }
          break
        /*case prefix+'nhentai':
        case prefix+'nh':
            if(isReg(obj)) return
            if (!isGroupMsg) return iluser.reply(message.from, '⛔ *AKSES DI TOLAK* ⛔\n\nHanya dapat di gunakan di dalam grup', message.id)
            if (args.length === 2) {
                const nuklir = body.split(' ')[1]
                
                const cek = await nhentai.exists(nuklir)
                if (cek === true)  {
                    try {
                        const api = new API()
                        const pic = await api.getBook(nuklir).then(book => {
                            return api.getImageURL(book.cover)
                        })
                        const dojin = await nhentai.getDoujin(nuklir)
                        const { title, details, link } = dojin
                        const { parodies, tags, artists, groups, languages, categories } = await details
                        var teks = `*Title* : ${title}\n\n*Parodies* : ${parodies}\n\n*Tags* : ${tags.join(', ')}\n\n*Artists* : ${artists.join(', ')}\n\n*Groups* : ${groups.join(', ')}\n\n*Languages* : ${languages.join(', ')}\n\n*Categories* : ${categories}\n\n*Link* : ${link}`
                        exec('nhentai --id=' + nuklir + ` -P mantap.pdf -o ./hentong/${nuklir}.pdf --format `+ `${nuklir}.pdf`, (error, stdout, stderr) => {
                            iluser.sendFileFromUrl(message.from, pic, 'hentod.jpg', teks, message.id).then(() => 
                            iluser.sendFile(message.from, `./hentong/${nuklir}.pdf/${nuklir}.pdf.pdf`, `${title}.pdf`, '', message.id)).catch(() => 
                            iluser.sendFile(message.from, `./hentong/${nuklir}.pdf/${nuklir}.pdf.pdf`, `${title}.pdf`, '', message.id))
                            if (error) {
                                console.log('error : '+ error.message)
                                return
                            }
                            if (stderr) {
                                console.log('stderr : '+ stderr)
                                return
                            }
                            console.log('stdout : '+ stdout)
                            })
                    } catch (err) {
                        iluser.reply(message.from, '[❗] Terjadi kesalahan, mungkin kode nuklir salah', message.id)
                    }
                } else {
                    iluser.reply(message.from, '[❗] Kode nuklir Salah!')
                }
            } else {
                iluser.reply(message.from, '[ WRONG ] Kirim perintah *#nhentai [kode]* untuk contoh kirim perintah *#readme*')
            }
            break*/
        case prefix+'brainly':    
        	if(isReg(obj)) return         
            if (isLimit(serial)) return
            
            await limitAdd(serial)     
                if(args.length == 1) return await iluser.reply(message.from, `❌ *Error*\n├ Pastikan contoh benar!\n└ ${prefix}brainly <soal>`, message.id)                
                else{
                    let pertanyaan = [];
                    let jawabanbrain = [];
                    const brainly = await BRAINLY.GetSoal(body.slice(9));
                    for (var i = 0; i < brainly.body.data.questionSearch.edges.length; i++) {
                        const jawaban = await BRAINLY.GetJawaban(brainly.body.data.questionSearch.edges[i].node.databaseId)
                        pertanyaan.push(h2p(jawaban.body.data.questionById.content));
                        jawabanbrain.push(h2p(jawaban.body.data.questionById.answers.nodes[0].content));
                    }  
                    for (var i = 0; i < pertanyaan.length; i++) {
                        await iluser.reply(message.from, ` ${[i + 1]}.${pertanyaan[i]}\n\n${jawabanbrain[i]} ${mess.iklan}`, message.id);
                    }
                }
            break;  
        case prefix+'math':
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            if (args.length === 1) return iluser.reply(message.from, `Contoh: ${prefix}math 12*12\n*NOTE* :\n- Untuk Perkalian Menggunakan *\n- Untuk Pertambahan Menggunakan +\n- Untuk Pengurangan Mennggunakan -\n- Untuk Pembagian Menggunakan /`, message.id)
            const mtk = body.slice(6)
            if (typeof Math_js.evaluate(mtk) !== "number") {
            iluser.reply(message.from, `"${mtk}", bukan angka!\nContoh: ${prefix}math 12*12\n*NOTE* :\n- Untuk Perkalian Menggunakan *\n- Untuk Pertambahan Menggunakan +\n- Untuk Pengurangan Mennggunakan -\n- Untuk Pembagian Menggunakan /`, message.id)
        } else {
            iluser.reply(message.from, `*「 MATH 」*\n\n*Kalkulator*\n${mtk} = ${Math_js.evaluate(mtk)}`, message.id)
        }
        break
        case prefix+'wait':
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            if (isMedia && type === 'image' || quotedMsg && quotedMsg.type === 'image') {
                if (isMedia) {
                    var mediaData = await decryptMedia(message, uaOverride)
                } else {
                    var mediaData = await decryptMedia(quotedMsg, uaOverride)
                }
                const fetch = require('node-fetch')
                const imgBS4 = `data:${mimetype};base64,${mediaData.toString('base64')}`
                iluser.reply(message.from, 'Searching....', message.id)
                fetch('https://trace.moe/api/search', {
                    method: 'POST',
                    body: JSON.stringify({ image: imgBS4 }),
                    headers: { "Content-Type": "application/json" }
                })
                .then(respon => respon.json())
                .then(resolt => {
                    if (resolt.docs && resolt.docs.length <= 0) {
                        iluser.reply(message.from, 'Maaf, saya tidak tau ini anime apa', message.id)
                    }
                    const { is_adult, title, title_chinese, title_romaji, title_english, episode, similarity, filename, at, tokenthumb, anilist_id } = resolt.docs[0]
                    teks = ''
                    if (similarity < 0.92) {
                        teks = '*Saya memiliki keyakinan rendah dalam hal ini* :\n\n'
                    }
                    teks += `• *Title Japanese* : ${title}\n• *Title chinese* : ${title_chinese}\n• *Title Romaji* : ${title_romaji}\n• *Title English* : ${title_english}\n`
                    teks += `• *Ecchi* : ${is_adult}\n`
                    teks += `• *Eps* : ${episode.toString()}\n`
                    teks += `• *Kesamaan* : ${(similarity * 100).toFixed(1)}%\n`
                    var video = `https://media.trace.moe/video/${anilist_id}/${encodeURIComponent(filename)}?t=${at}&token=${tokenthumb}`;
                    iluser.sendFileFromUrl(message.from, video, 'nimek.mp4', `${teks} ${mess.iklan}`, message.id).catch(() => {
                        iluser.reply(message.from, teks, message.id)
                    })
                })
                .catch(() => {
                    iluser.reply(message.from, 'Error !', message.id)
                })
            } else {
                iluser.sendFileFromUrl(message.from, tutor, 'Tutor.jpg', 'Neh contoh mhank!', message.id)
            }
            break
        case '.textmaker':         
        	if(isReg(obj)) return         
            if (isLimit(serial)) return
            
            await limitAdd(serial)
                if (args.length === 1) return iluser.sendFile(message.from, './media/img/contoh.jpg', 'Tutor.jpg', 'Neh contoh mhank!', message.id)
                argz = body.trim().split('|')
                if ((isMedia || isQuotedImage) && argz.length >= 2) {
                	const top = argz[1]
                	const bott = argz[2]
                	const encryptMedia = isQuotedImage ? quotedMsg : message
                	const mediaData = await decryptMedia(encryptMedia, uaOverride)
                	const getUrl = await uploadImages(mediaData, false)
                	const ImageBase64 = await custom(getUrl, top, bott)
                	await iluser.sendFile(message.from, ImageBase64, 'image.png',`Jadi brooh ${mess.iklan}`)
                }else {                	
                await iluser.sendFile(message.from, './media/img/contoh.jpg', 'Tutor.jpg', 'Neh contoh mhank!', message.id)
                }
                break
    case prefix+'exif':
                if (!isOwner) return await iluser.reply(from, `Nte siapa?`, id)
                const exx = body.slice(6)
                const namaPack = exx.split('|')[0]
                const authorPack = exx.split('|')[1]
                exif.create(namaPack, authorPack)
                await iluser.reply(from, `setting done.`, id)
            break
        case 'stickermeme':
        case 'stcmeme':
                if ((isMedia && isImage || isQuotedImage) && argz.length >= 2) {
                    await iluser.reply(from, `${mess.wait}`, id)
                    argz = body.trim().split('|')
                    const top = argz[1]
                    const bottom = argz[2]
                    const encryptMedia = isQuotedImage ? quotedMsg : message
                    const mediaData = await decryptMedia(encryptMedia, uaOverride)
                    const getUrl = await uploadImages(mediaData, `meme.${sender.id}`)
                    const create = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${getUrl}`
                    const meme = await bent('buffer')(create)
                    webp.buffer2webpbuffer(meme, 'png', '-q 100')
                        .then((res) => {
                            sharp(res)
                                .resize(512, 512)
                                .toFile(`./temp/stage_${sender.id}.webp`, async (err) => {
                                    if (err) return console.error(err)
                                    await exec(`webpmux -set exif ./temp/data.exif ./temp/stage_${sender.id}.webp -o ./temp/${sender.id}.webp`, { log: true })
                                    if (fs.existsSync(`./temp/${sender.id}.webp`)) {
                                        const data = fs.readFileSync(`./temp/${sender.id}.webp`)
                                        const base64 = `data:image/webp;base64,${data.toString('base64')}`
                                        await iluser.sendRawWebpAsSticker(from, base64)
                                        console.log(`Sticker processed for ${processTime(t, moment())} seconds`)
                                        fs.unlinkSync(`./temp/${sender.id}.webp`)
                                        fs.unlinkSync(`./temp/stage_${sender.id}.webp`)
                                    }
                                })
                        })
                } else {
                    await iluser.reply(from, `Format Salah!`, id)
                }
            break
        case prefix+'memesticker':
        case prefix+'memestiker':{  
        		if(isReg(obj)) return        
            	if (isLimit(serial)) return
            
            	await limitAdd(serial)  
        				if (args.length === 1) return iluser.sendFile(message.from, 'Silahkan balas gambar yang dikirim dengan .memestiker |tex ataas|text bawah', message.id)              
                        if(isLimit(serial)) return
                            if ((isMedia || isQuotedImage) && args.length >= 2) {
                                argz = body.trim().split('|')
                                const top = argz[1]
                                const bott = argz[2]
                                const encryptMedia = isQuotedImage ? quotedMsg : message
                                const mediaData = await decryptMedia(encryptMedia, uaOverride)
                                const getUrl = await uploadImages(mediaData, false)
                                const ImageBase64 = await meme.custom(getUrl, top, bott)
                                iluser.sendImageAsSticker(message.from, ImageBase64, 'image.png', '', null, true)
                                    .then(() => {
                                        iluser.reply(message.from, `${mess.iklann}`,id)
                                    })
                                    .catch(() => {
                                        iluser.reply(message.from, 'Ada yang error!')
                                    })
                            } else {
                                await iluser.reply(message.from, `Silahkan balas gambar yang dikirim dengan .memestiker |tex ataas|text bawah`, message.id)
                            }
                            limitAdd(serial)
                        }
                            break
        case prefix+'quoteit':
        	if(isReg(obj)) return         
            if (isLimit(serial)) return
            
            await limitAdd(serial)
            if (isBlocked) return await reply(message.from, mess.blockk, message.id)
            if(args.length == 1) return await reply(message.from, "Maaf, tidak boleh kosong.", message.id)
            if (isMedia) 
            {
                try{
                    const pesannya = body.slice(9).split('|')[0]
                    let wm = ''
                    typeof body.slice(9).split('|')[1] == 'undefined' ? wm = ' ' : wm = body.slice(9).split('|')[1]
                    const mediaData = await decryptMedia(message);
                    const imageBase64 = `data:${message.mimetype};base64,${mediaData.toString('base64')}`;
                    const rand = await genUniqueId(5)
                    const result = await generate(pesannya, wm, rand, encodeURIComponent(imageBase64), 'true')
                    result == 'fail' ? await reply(message.from, "⛔ error/resend") : await iluser.sendImage( message.from, result, `${rand}.jpg`, `QuoteIT X *iluser_BOT* ${mess.iklan}`, message.id);
                }catch(err)
                {
                    console.log(err)
                }
            }else{
              try {
                if (message.quotedMsgObj == null) 
                {    
                    const pesannya = body.slice(9).split('|')[0]
                    let wm = ''
                    typeof body.slice(9).split('|')[1] == 'undefined' ? wm = ' ' : wm = body.slice(9).split('|')[1] 
                    const rand = await genUniqueId(5)
                    const param = await randNominal()
                    const result = await generate(pesannya, wm, rand, param, false)
                    result == 'fail' ? await iluser.reply(message.from, "⛔ error/resend") : await iluser.sendImage( message.from, result, `${rand}.jpg`, `QuoteIT X *iluser_BOT* ${mess.iklan}`, message.id);
                }else if (message.quotedMsgObj!== null) 
                {
                    if(message.quotedMsgObj.type== 'image')
                    {
                        try{
                            const pesannya = body.slice(9).split('|')[0]
                            let wm = ''
                            typeof body.slice(9).split('|')[1] == 'undefined' ? wm = ' ' : wm = body.slice(9).split('|')[1]
                            const mediaData = await decryptMedia(message.quotedMsgObj);
                            const imageBase64 = `data:${message.quotedMsgObj.mimetype};base64,${mediaData.toString('base64')}`;
                            const rand = await genUniqueId(5) 
                            const result = await generate(pesannya, wm, rand, encodeURIComponent(imageBase64), 'true')
                            result == 'fail' ? await iluser.reply(message.from, "⛔ error/resend") : await iluser.sendImage( message.from, result, `${rand}.jpg`, `QuoteIT X *iluser_BOT* ${mess.iklan}`);
                        }catch(err)
                        {
                            console.log(err)
                        }
                    
                    }else if(message.quotedMsgObj.type == 'chat')
                    {
                        const pesannya = message.quotedMsgObj.body
                        let wm = body.slice(9) 
                        const rand = await genUniqueId(5)
                        const param = await randNominal()
                        const result = await generate(pesannya, wm, rand, param, false)
                        result == 'fail' ? await iluser.reply(message.from, "⛔ error/resend") : await iluser.sendImage( message.from, result, `${rand}.jpg`, `QuoteIT X *iluser_BOT* ${mess.iklan}`);
                    }
                        
                    else{
                        await iluser.reply(message.from, 'Maaf, tidak ditemukan foto/text.', message.id)
                    }
                }      
              } catch (error) {
                 console.log(error) 
              }  
            }
        break
        case prefix+'quotemaker':
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            argz = body.trim().split('|')
            if (arg.length >= 4) {
                const quotes = argz[1]
                const author = argz[2]
                const theme = argz[3]
                await quotemaker(quotes, author, theme).then(amsu => {
                    iluser.sendFile(message.from, amsu, 'quotesmaker.jpg','neh...').catch(() => {
                       iluser.reply(message.from, mess.error.Qm, message.id)
                    })
                })
            } else {
                iluser.reply(message.from, `Usage: \n${prefix}quotemaker |teks|watermark|theme\n\nEx :\n${prefix}quotemaker |ini contoh|bicit|random`, message.id)
            }
            break
        case prefix+'listchannel':
            if(isReg(obj)) return
            iluser.reply(message.from, listChannel, message.id)
            break
        case prefix+'tv':
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            if (args.length === 1) return iluser.reply(message.from, 'Kirim perintah *#jadwalTv [channel]*', message.id)
            const queri = body.slice(4)
            const jadwal = await fetch(`https://api-zeks.harispoppy.com/api/jadwaltv?channel=${queri}&apikey=apivinz`)
			const jdwl = await jadwal.json()
            iluser.reply(from, `Nih tod \n${jdwl.result}\n`, id)
            break
        case prefix+'jadwaltvnow': // API MATI
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            const jadwalNow = await axios.get('https://docs-jojo.herokuapp.com/jadwaltvnow')
            iluser.reply(message.from, `Jam : ${jadwalNow.data.jam}\n\nJadwalTV : ${jadwalNow.data.jadwalTV}`, message.id)
            break
        case prefix+'write':
        case prefix+'nulis':
        	if(isReg(obj)) return         
            if (isLimit(serial)) return
            
            await limitAdd(serial)
                if(!args.lenght >= 2) return
           		let nulos= body.slice(7)
                await iluser.reply(from, 'Lg ditulisin', message.id)
                console.log('Creating writing...')
                await iluser.sendFileFromUrl(from, `https://api.vhtear.com/write?text=${nulos}&apikey=${vhtearkey}`, 'nulis.jpg', '', message.id)
                    .then(() => console.log('Success sending write image!'))
                    .catch(async (err) => {
                        console.error(err)
                        await iluser.reply(from, `Error!\n${err}`, message.id)
                    })
            break
            case prefix+'nulis2': 
            if(isReg(obj)) return         
            if (isLimit(serial)) return
            
            await limitAdd(serial)
            if(args.length == 1) return await iluser.reply(message.from, "Kata katanya mana tlol.")
            const getNulis = await gasNulis(body.slice(7)) 
            if(getNulis.status == true)
            {
                await iluser.sendImage(message.from, getNulis.base64, 'file.jpg', `Sukses nulis! ${mess.iklan}`, message.id)
            }else{
                await iluser.reply(message.from, getNulis.reason, `gagal nulis.`)
            }
        break
case prefix+'nulis3':
            if(isReg(obj)) return         
            if (isLimit(serial)) return
            
            await limitAdd(serial)
            if(args.length == 1) return await iluser.reply(message.from, "Kata katanya mna tlol.", message.id)
            const getNulis2 = await gasNulisFolio(body.slice(8))
            if(getNulis2.status == true)
            {
                await iluser.sendImage(message.from, getNulis2.base64, 'file.jpg', `Sukses nulis! ${mess.iklan}`, message.id)
            }else{
                await iluser.reply(message.from, getNulis2.reason, `gagal nulis.`, message.id)
            }
        break
            case prefix+'asu':
            if(isReg(obj)) return         
            if (isLimit(serial)) return
            
            await limitAdd(serial)
            const list = ["https://cdn.shibe.online/shibes/247d0ac978c9de9d9b66d72dbdc65f2dac64781d.jpg","https://cdn.shibe.online/shibes/1cf322acb7d74308995b04ea5eae7b520e0eae76.jpg","https://cdn.shibe.online/shibes/1ce955c3e49ae437dab68c09cf45297d68773adf.jpg","https://cdn.shibe.online/shibes/ec02bee661a797518d37098ab9ad0c02da0b05c3.jpg","https://cdn.shibe.online/shibes/1e6102253b51fbc116b887e3d3cde7b5c5083542.jpg","https://cdn.shibe.online/shibes/f0c07a7205d95577861eee382b4c8899ac620351.jpg","https://cdn.shibe.online/shibes/3eaf3b7427e2d375f09fc883f94fa8a6d4178a0a.jpg","https://cdn.shibe.online/shibes/c8b9fcfde23aee8d179c4c6f34d34fa41dfaffbf.jpg","https://cdn.shibe.online/shibes/55f298bc16017ed0aeae952031f0972b31c959cb.jpg","https://cdn.shibe.online/shibes/2d5dfe2b0170d5de6c8bc8a24b8ad72449fbf6f6.jpg","https://cdn.shibe.online/shibes/e9437de45e7cddd7d6c13299255e06f0f1d40918.jpg","https://cdn.shibe.online/shibes/6c32141a0d5d089971d99e51fd74207ff10751e7.jpg","https://cdn.shibe.online/shibes/028056c9f23ff40bc749a95cc7da7a4bb734e908.jpg","https://cdn.shibe.online/shibes/4fb0c8b74dbc7653e75ec1da597f0e7ac95fe788.jpg","https://cdn.shibe.online/shibes/125563d2ab4e520aaf27214483e765db9147dcb3.jpg","https://cdn.shibe.online/shibes/ea5258fad62cebe1fedcd8ec95776d6a9447698c.jpg","https://cdn.shibe.online/shibes/5ef2c83c2917e2f944910cb4a9a9b441d135f875.jpg","https://cdn.shibe.online/shibes/6d124364f02944300ae4f927b181733390edf64e.jpg","https://cdn.shibe.online/shibes/92213f0c406787acd4be252edb5e27c7e4f7a430.jpg","https://cdn.shibe.online/shibes/40fda0fd3d329be0d92dd7e436faa80db13c5017.jpg","https://cdn.shibe.online/shibes/e5c085fc427528fee7d4c3935ff4cd79af834a82.jpg","https://cdn.shibe.online/shibes/f83fa32c0da893163321b5cccab024172ddbade1.jpg","https://cdn.shibe.online/shibes/4aa2459b7f411919bf8df1991fa114e47b802957.jpg","https://cdn.shibe.online/shibes/2ef54e174f13e6aa21bb8be3c7aec2fdac6a442f.jpg","https://cdn.shibe.online/shibes/fa97547e670f23440608f333f8ec382a75ba5d94.jpg","https://cdn.shibe.online/shibes/fb1b7150ed8eb4ffa3b0e61ba47546dd6ee7d0dc.jpg","https://cdn.shibe.online/shibes/abf9fb41d914140a75d8bf8e05e4049e0a966c68.jpg","https://cdn.shibe.online/shibes/f63e3abe54c71cc0d0c567ebe8bce198589ae145.jpg","https://cdn.shibe.online/shibes/4c27b7b2395a5d051b00691cc4195ef286abf9e1.jpg","https://cdn.shibe.online/shibes/00df02e302eac0676bb03f41f4adf2b32418bac8.jpg","https://cdn.shibe.online/shibes/4deaac9baec39e8a93889a84257338ebb89eca50.jpg","https://cdn.shibe.online/shibes/199f8513d34901b0b20a33758e6ee2d768634ebb.jpg","https://cdn.shibe.online/shibes/f3efbf7a77e5797a72997869e8e2eaa9efcdceb5.jpg","https://cdn.shibe.online/shibes/39a20ccc9cdc17ea27f08643b019734453016e68.jpg","https://cdn.shibe.online/shibes/e67dea458b62cf3daa4b1e2b53a25405760af478.jpg","https://cdn.shibe.online/shibes/0a892f6554c18c8bcdab4ef7adec1387c76c6812.jpg","https://cdn.shibe.online/shibes/1b479987674c9b503f32e96e3a6aeca350a07ade.jpg","https://cdn.shibe.online/shibes/0c80fc00d82e09d593669d7cce9e273024ba7db9.jpg","https://cdn.shibe.online/shibes/bbc066183e87457b3143f71121fc9eebc40bf054.jpg","https://cdn.shibe.online/shibes/0932bf77f115057c7308ef70c3de1de7f8e7c646.jpg","https://cdn.shibe.online/shibes/9c87e6bb0f3dc938ce4c453eee176f24636440e0.jpg","https://cdn.shibe.online/shibes/0af1bcb0b13edf5e9b773e34e54dfceec8fa5849.jpg","https://cdn.shibe.online/shibes/32cf3f6eac4673d2e00f7360753c3f48ed53c650.jpg","https://cdn.shibe.online/shibes/af94d8eeb0f06a0fa06f090f404e3bbe86967949.jpg","https://cdn.shibe.online/shibes/4b55e826553b173c04c6f17aca8b0d2042d309fb.jpg","https://cdn.shibe.online/shibes/a0e53593393b6c724956f9abe0abb112f7506b7b.jpg","https://cdn.shibe.online/shibes/7eba25846f69b01ec04de1cae9fed4b45c203e87.jpg","https://cdn.shibe.online/shibes/fec6620d74bcb17b210e2cedca72547a332030d0.jpg","https://cdn.shibe.online/shibes/26cf6be03456a2609963d8fcf52cc3746fcb222c.jpg","https://cdn.shibe.online/shibes/c41b5da03ad74b08b7919afc6caf2dd345b3e591.jpg","https://cdn.shibe.online/shibes/7a9997f817ccdabac11d1f51fac563242658d654.jpg","https://cdn.shibe.online/shibes/7221241bad7da783c3c4d84cfedbeb21b9e4deea.jpg","https://cdn.shibe.online/shibes/283829584e6425421059c57d001c91b9dc86f33b.jpg","https://cdn.shibe.online/shibes/5145c9d3c3603c9e626585cce8cffdfcac081b31.jpg","https://cdn.shibe.online/shibes/b359c891e39994af83cf45738b28e499cb8ffe74.jpg","https://cdn.shibe.online/shibes/0b77f74a5d9afaa4b5094b28a6f3ee60efcb3874.jpg","https://cdn.shibe.online/shibes/adccfdf7d4d3332186c62ed8eb254a49b889c6f9.jpg","https://cdn.shibe.online/shibes/3aac69180f777512d5dabd33b09f531b7a845331.jpg","https://cdn.shibe.online/shibes/1d25e4f592db83039585fa480676687861498db8.jpg","https://cdn.shibe.online/shibes/d8349a2436420cf5a89a0010e91bf8dfbdd9d1cc.jpg","https://cdn.shibe.online/shibes/eb465ef1906dccd215e7a243b146c19e1af66c67.jpg","https://cdn.shibe.online/shibes/3d14e3c32863195869e7a8ba22229f457780008b.jpg","https://cdn.shibe.online/shibes/79cedc1a08302056f9819f39dcdf8eb4209551a3.jpg","https://cdn.shibe.online/shibes/4440aa827f88c04baa9c946f72fc688a34173581.jpg","https://cdn.shibe.online/shibes/94ea4a2d4b9cb852e9c1ff599f6a4acfa41a0c55.jpg","https://cdn.shibe.online/shibes/f4478196e441aef0ada61bbebe96ac9a573b2e5d.jpg","https://cdn.shibe.online/shibes/96d4db7c073526a35c626fc7518800586fd4ce67.jpg","https://cdn.shibe.online/shibes/196f3ed10ee98557328c7b5db98ac4a539224927.jpg","https://cdn.shibe.online/shibes/d12b07349029ca015d555849bcbd564d8b69fdbf.jpg","https://cdn.shibe.online/shibes/80fba84353000476400a9849da045611a590c79f.jpg","https://cdn.shibe.online/shibes/94cb90933e179375608c5c58b3d8658ef136ad3c.jpg","https://cdn.shibe.online/shibes/8447e67b5d622ef0593485316b0c87940a0ef435.jpg","https://cdn.shibe.online/shibes/c39a1d83ad44d2427fc8090298c1062d1d849f7e.jpg","https://cdn.shibe.online/shibes/6f38b9b5b8dbf187f6e3313d6e7583ec3b942472.jpg","https://cdn.shibe.online/shibes/81a2cbb9a91c6b1d55dcc702cd3f9cfd9a111cae.jpg","https://cdn.shibe.online/shibes/f1f6ed56c814bd939645138b8e195ff392dfd799.jpg","https://cdn.shibe.online/shibes/204a4c43cfad1cdc1b76cccb4b9a6dcb4a5246d8.jpg","https://cdn.shibe.online/shibes/9f34919b6154a88afc7d001c9d5f79b2e465806f.jpg","https://cdn.shibe.online/shibes/6f556a64a4885186331747c432c4ef4820620d14.jpg","https://cdn.shibe.online/shibes/bbd18ae7aaf976f745bc3dff46b49641313c26a9.jpg","https://cdn.shibe.online/shibes/6a2b286a28183267fca2200d7c677eba73b1217d.jpg","https://cdn.shibe.online/shibes/06767701966ed64fa7eff2d8d9e018e9f10487ee.jpg","https://cdn.shibe.online/shibes/7aafa4880b15b8f75d916b31485458b4a8d96815.jpg","https://cdn.shibe.online/shibes/b501169755bcf5c1eca874ab116a2802b6e51a2e.jpg","https://cdn.shibe.online/shibes/a8989bad101f35cf94213f17968c33c3031c16fc.jpg","https://cdn.shibe.online/shibes/f5d78feb3baa0835056f15ff9ced8e3c32bb07e8.jpg","https://cdn.shibe.online/shibes/75db0c76e86fbcf81d3946104c619a7950e62783.jpg","https://cdn.shibe.online/shibes/8ac387d1b252595bbd0723a1995f17405386b794.jpg","https://cdn.shibe.online/shibes/4379491ef4662faa178f791cc592b52653fb24b3.jpg","https://cdn.shibe.online/shibes/4caeee5f80add8c3db9990663a356e4eec12fc0a.jpg","https://cdn.shibe.online/shibes/99ef30ea8bb6064129da36e5673649e957cc76c0.jpg","https://cdn.shibe.online/shibes/aeac6a5b0a07a00fba0ba953af27734d2361fc10.jpg","https://cdn.shibe.online/shibes/9a217cfa377cc50dd8465d251731be05559b2142.jpg","https://cdn.shibe.online/shibes/65f6047d8e1d247af353532db018b08a928fd62a.jpg","https://cdn.shibe.online/shibes/fcead395cbf330b02978f9463ac125074ac87ab4.jpg","https://cdn.shibe.online/shibes/79451dc808a3a73f99c339f485c2bde833380af0.jpg","https://cdn.shibe.online/shibes/bedf90869797983017f764165a5d97a630b7054b.jpg","https://cdn.shibe.online/shibes/dd20e5801badd797513729a3645c502ae4629247.jpg","https://cdn.shibe.online/shibes/88361ee50b544cb1623cb259bcf07b9850183e65.jpg","https://cdn.shibe.online/shibes/0ebcfd98e8aa61c048968cb37f66a2b5d9d54d4b.jpg"]
            let kya = list[Math.floor(Math.random() * list.length)]
            iluser.sendFileFromUrl(message.from, kya, 'Dog.jpeg', `Dah mirip *${undefined, pushname}* belum?`, message.id)
            break
        case prefix+'qrcode':
            if(isReg(obj)) return         
            if (isLimit(serial)) return
            
            await limitAdd(serial)
           if(!args.lenght >= 2) return
           let qrcodes = body.slice(8)
           await iluser.sendFileFromUrl(message.from, `https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${qrcodes}`, 'gambar.png', `Qrcode X iluser_BOT ${mess.iklan}`, message.id)
           break
        case prefix+'neko':
        case prefix+'kucing':
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            q2 = Math.floor(Math.random() * 900) + 300;
            q3 = Math.floor(Math.random() * 900) + 300;
            iluser.sendFileFromUrl(message.from, 'http://placekitten.com/'+q3+'/'+q2, 'neko.png','Neko ')
            break
        case prefix+'pokemon':
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            q7 = Math.floor(Math.random() * 890) + 1;
            iluser.sendFileFromUrl(message.from, 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+q7+'.png','Pokemon.png',)
            break
        case prefix+'lirik':
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            if (args.length == 1) return iluser.reply(message.from, `ontoh ${prefix}lirik aku bukan boneka`, message.id)
            const lagu = body.slice(7)
            const lirik = await liriklagu(lagu)
            iluser.reply(message.from, `${lirik} ${mess.iklan}`, message.id)
            break
        case prefix+'chord':
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            if (args.length === 1) return iluser.reply(message.from, `ontoh ${prefix}chord aku bukan boneka`, message.id)
            const query__ = body.slice(7)
            const chord = await axios.get('https://tobz-api.herokuapp.com/api/chord?q='+ query__ + '&apikey='+tobzkey)
            if (chord.data.error) return iluser.reply(message.from, chord.data.error, message.id)
            iluser.reply(message.from, `${chord.data.result} ${mess.iklan}`, message.id)
            break
        case prefix+'listdaerah':
            if(isReg(obj)) return
            if (!isGroupMsg) return iluser.reply(message.from, `Perintah ini hanya bisa di gunakan dalam group!`, message.id)
            const listDaerah = await axios.get('https://tobz-api.herokuapp.com/api/daerah')
            iluser.reply(message.from, listDaerah.data.result, message.id)
            break
        case prefix+'slap':
            if (!isGroupMsg) return iluser.reply(message.from, `Perintah ini hanya bisa di gunakan dalam group!`, message.id)
            const slap = arg.split(' ')
            const person = author.replace('@c.us', '')
            await iluser.sendGiphyAsSticker(message.from, 'https://media.giphy.com/media/S8507sBJm1598XnsgD/source.gif')
            iluser.sendTextWithMentions(message.from, '@' + person + ' *slapped* ' + slap)
            break
        case `${prefix}hug`: //thanks to SASHA BOT
                    argz = body.trim().split(' ')
                    const janjing = author.replace('@c.us', '')
                    await iluser.sendGiphyAsSticker(message.from, 'https://media.giphy.com/media/od5H3PmEG5EVq/giphy.gif')
                    iluser.sendTextWithMentions(message.from, `${prefix}` + janjing + ' *peyuuuk* ' + arg[1])
                    break
        case `${prefix}pat`: //thanks to SASHA BOT
                    argz = body.trim().split(' ')
                    const jartod = author.replace('@c.us', '')
                    await iluser.sendGiphyAsSticker(message.from, 'https://media.giphy.com/media/Z7x24IHBcmV7W/giphy.gif')
                    iluser.sendTextWithMentions(message.from, `${prefix}` + jartod + ' *👈 Si Mengelu-elus si👉* ' + arg[1])
                    break
        case `${prefix}imgcompress`:
        		if(isReg(obj)) return
            	        
            	if (isLimit(serial)) return
            
            	await limitAdd(serial)
                if (isMedia) {
                    const gambar = await decryptMedia(message, uaOverride)
                    await processImg(gambar)
                } else if (quotedMsg && quotedMsg.type == 'image') {
                    const compres = await decryptMedia(quotedMsg)
                    await processImg(compres)
                } else {
                    iluser.sendText(message.from, `Tidak ada gambar! untuk !compress kirim gambar dengan caption !compress`)
                }
                async function processImg(gambar) {
                    let image = await Jimp.read(gambar);
                    image.quality(55).write('./quote/compressed.jpeg', function (err) {
                        if (err) console.log(err);
                        iluser.sendFile(message.from, './quote/compressed.jpeg', 'compressed.jpg', '_*Processing Sukses!_');
                    });
                }
                break
            case `${prefix}jarak`:
            	if(isReg(obj)) return
            	        
            	if (isLimit(serial)) return
            
            	await limitAdd(serial)
                argz = body.trim().split('|')
                const jar = argz[1]
                const rak = argz[2]
                try {
                    const resp = await axios.get(`https://api.vhtear.com/distance?from=${jar}&to=${rak}&apikey=${vhtearkey}`)
                    if (resp.data.error) return iluser.reply(message.from, resp.data.error, message.id)
                    const kbbuaw = `• ${resp.data.result.data}`
                    iluser.reply(message.from, kbbuaw, message.id)
                } catch (err) {
                    console.error(err.message)
                    await iluser.sendFileFromUrl(message.from, errorurl2, 'error.png', '💔️ Maaf, tidak ditemukan')
                    iluser.sendText(ownerNumber, 'Jarak Error : ' + err)
                }
                break
            case `${prefix}spek`:
                if(isReg(obj)) return
            	        
            	if (isLimit(serial)) return
            
            	await limitAdd(serial)	
                const hpnya = body.slice(6)
                try {
                    const resp = await axios.get(`https://api.vhtear.com/gsmarena?query=${hpnya}&apikey=${vhtearkey}`)
                    if (resp.data.error) return iluser.reply(message.from, resp.data.error, message.id)
                    const kbbuaww = `• ${resp.data.result.spec}`
                    iluser.sendFileFromUrl(message.from, resp.data.result.image, 'gsm.jpg', kbbuaww, message.id)
                } catch (err) {
                    console.error(err.message)
                    await iluser.sendFileFromUrl(message.from, errorurl2, 'error.png', '💔️ Maaf, tidak ditemukan')
                    iluser.sendText(ownerNumber, 'Spek Error : ' + err)
                }
                break
            case `${prefix}motor`:
                if(isReg(obj)) return
            	        
            	if (isLimit(serial)) return
            
            	await limitAdd(serial)
                const mtr = body.slice(7)
                try {
                    const resp = await axios.get(`https://api.vhtear.com/infomotor?merk=${mtr}&apikey=${vhtearkey}`)
                    if (resp.data.error) return iluser.reply(message.from, resp.data.error, message.id)
                    const kbbuaww = `• *Title* : ${resp.data.result.title}\n• *Harga* : ${resp.data.result.harga}\n• *Spesifikasi* : ${resp.data.result.spesifikasi}\n• *Kelebihan* : ${resp.data.result.kelebihan}\n• *Kekurangan* : ${resp.data.result.kekurangan}`
                    iluser.sendFileFromUrl(message.from, resp.data.result.image, 'gsm.jpg', `${kbbuaww} ${mess.iklan}`, message.id)
                } catch (err) {
                    console.error(err.message)
                    await iluser.sendFileFromUrl(message.from, errorurl2, 'error.png', '💔️ Maaf, tidak ditemukan')
                    iluser.sendText(ownerNumber, 'Motor Error : ' + err)
                }
                break
            case `${prefix}mobil`:
                if(isReg(obj)) return
            	        
            	if (isLimit(serial)) return
            
            	await limitAdd(serial)
                const mbl = body.slice(7)
                try {
                    const resp = await axios.get(`https://api.vhtear.com/infomobil?merk=${mbl}&apikey=${vhtearkey}`)
                    if (resp.data.error) return iluser.reply(message.from, resp.data.error, message.id)
                    const kbbuaww = `• *Title* : ${resp.data.result.title}\n• *Harga* : ${resp.data.result.harga}\n• *Spesifikasi* : ${resp.data.result.spesifikasi}\n• *Kelebihan* : ${resp.data.result.kelebihan}\n• *Kekurangan* : ${resp.data.result.kekurangan}`
                    iluser.sendFileFromUrl(message.from, resp.data.result.image, 'gsm.jpg', `${kbbuaww} ${mess.iklan}`, message.id)
                } catch (err) {
                    console.error(err.message)
                    await iluser.sendFileFromUrl(message.from, errorurl2, 'error.png', '💔️ Maaf, tidak ditemukan')
                    iluser.sendText(ownerNumber, 'Mobil Error : ' + err)
                }
                break
        case `${prefix}images`:
        case `${prefix}gambar`:
                if(isReg(obj)) return
            	        
            	if (isLimit(serial)) return
            
            	await limitAdd(serial)	
                if (args.length === 1) return iluser.reply(message.from, `Untuk mencari gambar di pinterest\nketik: !images [search]\ncontoh: !images naruto`, message.id)
                const cariwall = body.slice(8)
                const hasilwall = await images.fdci(cariwall)
                iluser.sendFileFromUrl(message.from, hasilwall, '', '', message.id)
                    .catch(() => {
                        iluser.reply(message.from, 'Ada yang eror!', message.id)
                    })
                break
        case `${prefix}wallanime`:
                    const walnime = ['https://wallpaperaccess.com/full/395986.jpg', 'https://wallpaperaccess.com/full/21628.jpg', 'https://wallpaperaccess.com/full/21622.jpg', 'https://wallpaperaccess.com/full/21612.jpg', 'https://wallpaperaccess.com/full/21611.png', 'https://wallpaperaccess.com/full/21597.jpg', 'https://cdn.nekos.life/wallpaper/QwGLg4oFkfY.png', 'https://wallpaperaccess.com/full/21591.jpg', 'https://cdn.nekos.life/wallpaper/bUzSjcYxZxQ.jpg', 'https://cdn.nekos.life/wallpaper/j49zxzaUcjQ.jpg', 'https://cdn.nekos.life/wallpaper/YLTH5KuvGX8.png', 'https://cdn.nekos.life/wallpaper/Xi6Edg133m8.jpg', 'https://cdn.nekos.life/wallpaper/qvahUaFIgUY.png', 'https://cdn.nekos.life/wallpaper/leC8q3u8BSk.jpg', 'https://cdn.nekos.life/wallpaper/tSUw8s04Zy0.jpg', 'https://cdn.nekos.life/wallpaper/sqsj3sS6EJE.png', 'https://cdn.nekos.life/wallpaper/HmjdX_s4PU4.png', 'https://cdn.nekos.life/wallpaper/Oe2lKgLqEXY.jpg', 'https://cdn.nekos.life/wallpaper/GTwbUYI-xTc.jpg', 'https://cdn.nekos.life/wallpaper/nn_nA8wTeP0.png', 'https://cdn.nekos.life/wallpaper/Q63o6v-UUa8.png', 'https://cdn.nekos.life/wallpaper/ZXLFm05K16Q.jpg', 'https://cdn.nekos.life/wallpaper/cwl_1tuUPuQ.png', 'https://cdn.nekos.life/wallpaper/wWhtfdbfAgM.jpg', 'https://cdn.nekos.life/wallpaper/3pj0Xy84cPg.jpg', 'https://cdn.nekos.life/wallpaper/sBoo8_j3fkI.jpg', 'https://cdn.nekos.life/wallpaper/gCUl_TVizsY.png', 'https://cdn.nekos.life/wallpaper/LmTi1k9REW8.jpg', 'https://cdn.nekos.life/wallpaper/sbq_4WW2PUM.jpg', 'https://cdn.nekos.life/wallpaper/QOSUXEbzDQA.png', 'https://cdn.nekos.life/wallpaper/khaqGIHsiqk.jpg', 'https://cdn.nekos.life/wallpaper/iFtEXugqQgA.png', 'https://cdn.nekos.life/wallpaper/deFKIDdRe1I.jpg', 'https://cdn.nekos.life/wallpaper/OHZVtvDm0gk.jpg', 'https://cdn.nekos.life/wallpaper/YZYa00Hp2mk.jpg', 'https://cdn.nekos.life/wallpaper/R8nPIKQKo9g.png', 'https://cdn.nekos.life/wallpaper/_brn3qpRBEE.jpg', 'https://cdn.nekos.life/wallpaper/ADTEQdaHhFI.png', 'https://cdn.nekos.life/wallpaper/MGvWl6om-Fw.jpg', 'https://cdn.nekos.life/wallpaper/YGmpjZW3AoQ.jpg', 'https://cdn.nekos.life/wallpaper/hNCgoY-mQPI.jpg', 'https://cdn.nekos.life/wallpaper/3db40hylKs8.png', 'https://cdn.nekos.life/wallpaper/iQ2FSo5nCF8.jpg', 'https://cdn.nekos.life/wallpaper/meaSEfeq9QM.png', 'https://cdn.nekos.life/wallpaper/CmEmn79xnZU.jpg', 'https://cdn.nekos.life/wallpaper/MAL18nB-yBI.jpg', 'https://cdn.nekos.life/wallpaper/FUuBi2xODuI.jpg', 'https://cdn.nekos.life/wallpaper/ez-vNNuk6Ck.jpg', 'https://cdn.nekos.life/wallpaper/K4-z0Bc0Vpc.jpg', 'https://cdn.nekos.life/wallpaper/Y4JMbswrNg8.jpg', 'https://cdn.nekos.life/wallpaper/ffbPXIxt4-0.png', 'https://cdn.nekos.life/wallpaper/x63h_W8KFL8.jpg', 'https://cdn.nekos.life/wallpaper/lktzjDRhWyg.jpg', 'https://cdn.nekos.life/wallpaper/j7oQtvRZBOI.jpg', 'https://cdn.nekos.life/wallpaper/MQQEAD7TUpQ.png', 'https://cdn.nekos.life/wallpaper/lEG1-Eeva6Y.png', 'https://cdn.nekos.life/wallpaper/Loh5wf0O5Aw.png', 'https://cdn.nekos.life/wallpaper/yO6ioREenLA.png', 'https://cdn.nekos.life/wallpaper/4vKWTVgMNDc.jpg', 'https://cdn.nekos.life/wallpaper/Yk22OErU8eg.png', 'https://cdn.nekos.life/wallpaper/Y5uf1hsnufE.png', 'https://cdn.nekos.life/wallpaper/xAmBpMUd2Zw.jpg', 'https://cdn.nekos.life/wallpaper/f_RWFoWciRE.jpg', 'https://cdn.nekos.life/wallpaper/Y9qjP2Y__PA.jpg', 'https://cdn.nekos.life/wallpaper/eqEzgohpPwc.jpg', 'https://cdn.nekos.life/wallpaper/s1MBos_ZGWo.jpg', 'https://cdn.nekos.life/wallpaper/PtW0or_Pa9c.png', 'https://cdn.nekos.life/wallpaper/32EAswpy3M8.png', 'https://cdn.nekos.life/wallpaper/Z6eJZf5xhcE.png', 'https://cdn.nekos.life/wallpaper/xdiSF731IFY.jpg', 'https://cdn.nekos.life/wallpaper/Y9r9trNYadY.png', 'https://cdn.nekos.life/wallpaper/8bH8CXn-sOg.jpg', 'https://cdn.nekos.life/wallpaper/a02DmIFzRBE.png', 'https://cdn.nekos.life/wallpaper/MnrbXcPa7Oo.png', 'https://cdn.nekos.life/wallpaper/s1Tc9xnugDk.jpg', 'https://cdn.nekos.life/wallpaper/zRqEx2gnfmg.jpg', 'https://cdn.nekos.life/wallpaper/PtW0or_Pa9c.png', 'https://cdn.nekos.life/wallpaper/0ECCRW9soHM.jpg', 'https://cdn.nekos.life/wallpaper/kAw8QHl_wbM.jpg', 'https://cdn.nekos.life/wallpaper/ZXcaFmpOlLk.jpg', 'https://cdn.nekos.life/wallpaper/WVEdi9Ng8UE.png', 'https://cdn.nekos.life/wallpaper/IRu29rNgcYU.png', 'https://cdn.nekos.life/wallpaper/LgIJ_1AL3rM.jpg', 'https://cdn.nekos.life/wallpaper/DVD5_fLJEZA.jpg', 'https://cdn.nekos.life/wallpaper/siqOQ7k8qqk.jpg', 'https://cdn.nekos.life/wallpaper/CXNX_15eGEQ.png', 'https://cdn.nekos.life/wallpaper/s62tGjOTHnk.jpg', 'https://cdn.nekos.life/wallpaper/tmQ5ce6EfJE.png', 'https://cdn.nekos.life/wallpaper/Zju7qlBMcQ4.jpg', 'https://cdn.nekos.life/wallpaper/CPOc_bMAh2Q.png', 'https://cdn.nekos.life/wallpaper/Ew57S1KtqsY.jpg', 'https://cdn.nekos.life/wallpaper/hVpFbYJmZZc.jpg', 'https://cdn.nekos.life/wallpaper/sb9_J28pftY.jpg', 'https://cdn.nekos.life/wallpaper/JDoIi_IOB04.jpg', 'https://cdn.nekos.life/wallpaper/rG76AaUZXzk.jpg', 'https://cdn.nekos.life/wallpaper/9ru2luBo360.png', 'https://cdn.nekos.life/wallpaper/ghCgiWFxGwY.png', 'https://cdn.nekos.life/wallpaper/OSR-i-Rh7ZY.png', 'https://cdn.nekos.life/wallpaper/65VgtPyweCc.jpg', 'https://cdn.nekos.life/wallpaper/3vn-0FkNSbM.jpg', 'https://cdn.nekos.life/wallpaper/u02Y0-AJPL0.jpg', 'https://cdn.nekos.life/wallpaper/_-Z-0fGflRc.jpg', 'https://cdn.nekos.life/wallpaper/3VjNKqEPp58.jpg', 'https://cdn.nekos.life/wallpaper/NoG4lKnk6Sc.jpg', 'https://cdn.nekos.life/wallpaper/xiTxgRMA_IA.jpg', 'https://cdn.nekos.life/wallpaper/yq1ZswdOGpg.png', 'https://cdn.nekos.life/wallpaper/4SUxw4M3UMA.png', 'https://cdn.nekos.life/wallpaper/cUPnQOHNLg0.jpg', 'https://cdn.nekos.life/wallpaper/zczjuLWRisA.jpg', 'https://cdn.nekos.life/wallpaper/TcxvU_diaC0.png', 'https://cdn.nekos.life/wallpaper/7qqWhEF_uoY.jpg', 'https://cdn.nekos.life/wallpaper/J4t_7DvoUZw.jpg', 'https://cdn.nekos.life/wallpaper/xQ1Pg5D6J4U.jpg', 'https://cdn.nekos.life/wallpaper/aIMK5Ir4xho.jpg', 'https://cdn.nekos.life/wallpaper/6gneEXrNAWU.jpg', 'https://cdn.nekos.life/wallpaper/PSvNdoISWF8.jpg', 'https://cdn.nekos.life/wallpaper/SjgF2-iOmV8.jpg', 'https://cdn.nekos.life/wallpaper/vU54ikOVY98.jpg', 'https://cdn.nekos.life/wallpaper/QjnfRwkRU-Q.jpg', 'https://cdn.nekos.life/wallpaper/uSKqzz6ZdXc.png', 'https://cdn.nekos.life/wallpaper/AMrcxZOnVBE.jpg', 'https://cdn.nekos.life/wallpaper/N1l8SCMxamE.jpg', 'https://cdn.nekos.life/wallpaper/n2cBaTo-J50.png', 'https://cdn.nekos.life/wallpaper/ZXcaFmpOlLk.jpg', 'https://cdn.nekos.life/wallpaper/7bwxy3elI7o.png', 'https://cdn.nekos.life/wallpaper/7VW4HwF6LcM.jpg', 'https://cdn.nekos.life/wallpaper/YtrPAWul1Ug.png', 'https://cdn.nekos.life/wallpaper/1p4_Mmq95Ro.jpg', 'https://cdn.nekos.life/wallpaper/EY5qz5iebJw.png', 'https://cdn.nekos.life/wallpaper/aVDS6iEAIfw.jpg', 'https://cdn.nekos.life/wallpaper/veg_xpHQfjE.jpg', 'https://cdn.nekos.life/wallpaper/meaSEfeq9QM.png', 'https://cdn.nekos.life/wallpaper/Xa_GtsKsy-s.png', 'https://cdn.nekos.life/wallpaper/6Bx8R6D75eM.png', 'https://cdn.nekos.life/wallpaper/zXOGXH_b8VY.png', 'https://cdn.nekos.life/wallpaper/VQcviMxoQ00.png', 'https://cdn.nekos.life/wallpaper/CJnRl-PKWe8.png', 'https://cdn.nekos.life/wallpaper/zEWYfFL_Ero.png', 'https://cdn.nekos.life/wallpaper/_C9Uc5MPaz4.png', 'https://cdn.nekos.life/wallpaper/zskxNqNXyG0.jpg', 'https://cdn.nekos.life/wallpaper/g7w14PjzzcQ.jpg', 'https://cdn.nekos.life/wallpaper/KavYXR_GRB4.jpg', 'https://cdn.nekos.life/wallpaper/Z_r9WItzJBc.jpg', 'https://cdn.nekos.life/wallpaper/Qps-0JD6834.jpg', 'https://cdn.nekos.life/wallpaper/Ri3CiJIJ6M8.png', 'https://cdn.nekos.life/wallpaper/ArGYIpJwehY.jpg', 'https://cdn.nekos.life/wallpaper/uqYKeYM5h8w.jpg', 'https://cdn.nekos.life/wallpaper/h9cahfuKsRg.jpg', 'https://cdn.nekos.life/wallpaper/iNPWKO8d2a4.jpg', 'https://cdn.nekos.life/wallpaper/j2KoFVhsNig.jpg', 'https://cdn.nekos.life/wallpaper/z5Nc-aS6QJ4.jpg', 'https://cdn.nekos.life/wallpaper/VUFoK8l1qs0.png', 'https://cdn.nekos.life/wallpaper/rQ8eYh5mXN8.png', 'https://cdn.nekos.life/wallpaper/D3NxNISDavQ.png', 'https://cdn.nekos.life/wallpaper/Z_CiozIenrU.jpg', 'https://cdn.nekos.life/wallpaper/np8rpfZflWE.jpg', 'https://cdn.nekos.life/wallpaper/ED-fgS09gik.jpg', 'https://cdn.nekos.life/wallpaper/AB0Cwfs1X2w.jpg', 'https://cdn.nekos.life/wallpaper/DZBcYfHouiI.jpg', 'https://cdn.nekos.life/wallpaper/lC7pB-GRAcQ.png', 'https://cdn.nekos.life/wallpaper/zrI-sBSt2zE.png', 'https://cdn.nekos.life/wallpaper/_RJhylwaCLk.jpg', 'https://cdn.nekos.life/wallpaper/6km5m_GGIuw.png', 'https://cdn.nekos.life/wallpaper/3db40hylKs8.png', 'https://cdn.nekos.life/wallpaper/oggceF06ONQ.jpg', 'https://cdn.nekos.life/wallpaper/ELdH2W5pQGo.jpg', 'https://cdn.nekos.life/wallpaper/Zun_n5pTMRE.png', 'https://cdn.nekos.life/wallpaper/VqhFKG5U15c.png', 'https://cdn.nekos.life/wallpaper/NsMoiW8JZ60.jpg', 'https://cdn.nekos.life/wallpaper/XE4iXbw__Us.png', 'https://cdn.nekos.life/wallpaper/a9yXhS2zbhU.jpg', 'https://cdn.nekos.life/wallpaper/jjnd31_3Ic8.jpg', 'https://cdn.nekos.life/wallpaper/Nxanxa-xO3s.png', 'https://cdn.nekos.life/wallpaper/dBHlPcbuDc4.jpg', 'https://cdn.nekos.life/wallpaper/6wUZIavGVQU.jpg', 'https://cdn.nekos.life/wallpaper/_-Z-0fGflRc.jpg', 'https://cdn.nekos.life/wallpaper/H9OUpIrF4gU.jpg', 'https://cdn.nekos.life/wallpaper/xlRdH3fBMz4.jpg', 'https://cdn.nekos.life/wallpaper/7IzUIeaae9o.jpg', 'https://cdn.nekos.life/wallpaper/FZCVL6PyWq0.jpg', 'https://cdn.nekos.life/wallpaper/5dG-HH6d0yw.png', 'https://cdn.nekos.life/wallpaper/ddxyA37HiwE.png', 'https://cdn.nekos.life/wallpaper/I0oj_jdCD4k.jpg', 'https://cdn.nekos.life/wallpaper/ABchTV97_Ts.png', 'https://cdn.nekos.life/wallpaper/58C37kkq39Y.png', 'https://cdn.nekos.life/wallpaper/HMS5mK7WSGA.jpg', 'https://cdn.nekos.life/wallpaper/1O3Yul9ojS8.jpg', 'https://cdn.nekos.life/wallpaper/hdZI1XsYWYY.jpg', 'https://cdn.nekos.life/wallpaper/h8pAJJnBXZo.png', 'https://cdn.nekos.life/wallpaper/apO9K9JIUp8.jpg', 'https://cdn.nekos.life/wallpaper/p8f8IY_2mwg.jpg', 'https://cdn.nekos.life/wallpaper/HY1WIB2r_cE.jpg', 'https://cdn.nekos.life/wallpaper/u02Y0-AJPL0.jpg', 'https://cdn.nekos.life/wallpaper/jzN74LcnwE8.png', 'https://cdn.nekos.life/wallpaper/IeAXo5nJhjw.jpg', 'https://cdn.nekos.life/wallpaper/7lgPyU5fuLY.jpg', 'https://cdn.nekos.life/wallpaper/f8SkRWzXVxk.png', 'https://cdn.nekos.life/wallpaper/ZmDTpGGeMR8.jpg', 'https://cdn.nekos.life/wallpaper/AMrcxZOnVBE.jpg', 'https://cdn.nekos.life/wallpaper/ZhP-f8Icmjs.jpg', 'https://cdn.nekos.life/wallpaper/7FyUHX3fE2o.jpg', 'https://cdn.nekos.life/wallpaper/CZoSLK-5ng8.png', 'https://cdn.nekos.life/wallpaper/pSNDyxP8l3c.png', 'https://cdn.nekos.life/wallpaper/AhYGHF6Fpck.jpg', 'https://cdn.nekos.life/wallpaper/ic6xRRptRes.jpg', 'https://cdn.nekos.life/wallpaper/89MQq6KaggI.png', 'https://cdn.nekos.life/wallpaper/y1DlFeHHTEE.png']
                    let walnimek = walnime[Math.floor(Math.random() * walnime.length)]
                    iluser.sendFileFromUrl(message.from, walnimek, 'Nimek.jpg', '', message.id)
                    break
        case prefix+'cerpen': // ARUGAZ
            if(isReg(obj)) return
            if(isLimit(serial)) return
            if (!isGroupMsg) return iluser.reply(message.from, `Perintah ini hanya bisa di gunakan dalam group!`, message.id)
            const cerpen = await get.get('https://arugaz.herokuapp.com/api/cerpen').json()
            iluser.reply(message.from, `• *Cerpen*: ${cerpen.result}`, message.id)
            break
        case prefix+'puisi': // ARUGAZ
            if(isReg(obj)) return
            if(isLimit(serial)) return
            if (!isGroupMsg) return iluser.reply(message.from, `Perintah ini hanya bisa di gunakan dalam group!`, message.id)
            const puisi = await get.get('https://arugaz.herokuapp.com/api/puisi1').json()
            iluser.reply(message.from, `• *Puisi*: ${puisi.result}`, message.id)
            break
        case prefix+'puisi2': // ARUGAZ
            if(isReg(obj)) return
            if(isLimit(serial)) return
            if (!isGroupMsg) return iluser.reply(message.from, `Perintah ini hanya bisa di gunakan dalam group!`, message.id)
            const puisi2 = await get.get('https://arugaz.herokuapp.com/api/puisi2').json()
            iluser.reply(message.from, `• *Puisi*: ${puisi2.result}`, message.id)
            break
        case prefix+'puisi3': // ARUGAZ
            if(isReg(obj)) return
            if(isLimit(serial)) return
            if (!isGroupMsg) return iluser.reply(message.from, `Perintah ini hanya bisa di gunakan dalam group!`, message.id)
            const puisi3 = await get.get('https://arugaz.herokuapp.com/api/puisi3').json()
            iluser.reply(message.from, `• *Puisi*: ${puisi3.result}`, message.id)
            break
        // ADMIN & OWNER
        case 'cekprefix':
            iluser.reply(message.from, `PREFIX YANG SAAT INI DIGUNAKAN *「* ${prefix} *」*`, message.id)
            break
        /*case prefix+'setprefix':
            if(!isOwner) return iluser.reply(message.from, `⛔ *AKSES DI TOLAK* ⛔\n\nLo siapa anyink`, message.id)
            if (args.length === 1) return iluser.reply(message.from, `Kirim perintah *${prefix}prefix [ NEW PREFIX ]*`, message.id)
            const prefa = body.slice(11)
            setting.prefix = `${prefa}`
            prefix = `${prefa}`
            fs.writeFileSync('./lib/database/setting.json', JSON.stringify(setting))
            iluser.sendText(message.from, `Berhasil Mengganti Prefix Ke *「* ${prefa} *」*`)
            break */
        case prefix+'setprefix':
            if(!isOwner) return iluser.reply(from, `⛔ *AKSES DI TOLAK* ⛔\n\nLo siapa anyink`, message.id)
            if (args.length === 1) return iluser.reply(from, `Kirim perintah *${prefix}prefix [ NEW PREFIX ]*`, message.id)
            prefix = args[1]
            iluser.sendText(from, `Berhasil Mengganti Prefix Ke *「* ${prefix} *」*`)
            break
        case prefix+'bc': // KASIH CREDIT DONG KALO COPAS
            if (isPilot){
                bctxt = body.slice(4)
                txtbc = `\n${bctxt}\n\n\n-= *iluser_BOT* =-`
                const semuagrup = await iluser.getAllChatIds();
                if(quotedMsg && quotedMsg.type == 'image'){
                    const mediaData = await decryptMedia(quotedMsg)
                    const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                    for(let grupnya of semuagrup){
                        var cekgrup = await iluser.getChatById(grupnya)
                        if(!cekgrup.isReadOnly) iluser.sendImage(grupnya, imageBase64, 'gambar.jpeg', txtbc)
                    }
                    iluser.sendText(from, 'Broadcast sukses!')
                }else{
                    for(let grupnya of semuagrup){
                        var cekgrup = await iluser.getChatById(grupnya)
                        if(!cekgrup.isReadOnly && isMuted(grupnya)) iluser.sendText(grupnya, txtbc)
                    }
                            iluser.reply('Broadcast Success!')
                }
            }
                break
        case prefix+'adminlist':
            if (!isGroupMsg) return iluser.reply(message.from, '⛔ *AKSES DI TOLAK* ⛔\n\nHanya dapat di gunakan di dalam grup', message.id)
            let mimin = ''
            for (let admon of groupAdmins) {
                mimin += `• @${admon.replace(/@c.us/g, '')}\n` 
            }
            await sleep(2000)
            await iluser.sendTextWithMentions(message.from, mimin)
            break
        case prefix+'ownergroup':
            if (!isGroupMsg) return iluser.reply(message.from, '⛔ *AKSES DI TOLAK* ⛔\n\nHanya dapat di gunakan di dalam grup', message.id)
            const Owner_ = chat.groupMetadata.owner
            await iluser.sendTextWithMentions(message.from, `Owner Group : @${Owner_}`)
            break
        case prefix+'otagall': // FOR OWNER & ADMIN iluser_BOT
        case prefix+'omentionall':
            if (!isGroupMsg) return iluser.reply(message.from, '⛔ *AKSES DI TOLAK* ⛔\n\nHanya dapat di gunakan di dalam grup', message.id)
            if (!isAdmin) return iluser.reply(message.from, '⛔ *AKSES DI TOLAK* ⛔\n\nLo siapa anyink', message.id)
            const groupMek = await iluser.getGroupMembers(groupId)
            let heho = `${body.slice(9)}\n\n`
            for (let i = 0; i < groupMek.length; i++) {
                heho += '•'
                heho += ` @${groupMek[i].id.replace(/@c.us/g, '')}\n`
            }
            heho += '\nPowered by *_iluser_BOT_*'
            await sleep(2000)
            await iluser.sendTextWithMentions(message.from, heho)
            break
        case prefix+'tagall': // FOR GROUP ADMINS
        case prefix+'mentionall':
            if (!isGroupMsg) return iluser.reply(message.from, '⛔ *AKSES DI TOLAK* ⛔\n\nHanya dapat di gunakan di dalam grup', message.id)
            if (!isGroupAdmins) return iluser.reply(message.from, `⛔ *AKSES DI TOLAK* ⛔\n\nnte admin?`, message.id)
            if (!isBotGroupAdmins) return iluser.reply(message.from, 'Perintah ini hanya bisa di gunakan ketika bot menjadi admin', message.id)
            const groupMem = await iluser.getGroupMembers(groupId)
            let hehe = `${body.slice(8)}\n\n`
            for (let i = 0; i < groupMem.length; i++) {
                hehe += '•'
                hehe += ` @${groupMem[i].id.replace(/@c.us/g, '')}\n`
            }
            hehe += '\nPowered by *_iluser_BOT_*'
            await sleep(2000)
            await iluser.sendTextWithMentions(message.from, hehe, message.id)
            break;
        case prefix+'okickall':
            if (!isGroupMsg) return iluser.reply(message.from, '⛔ *AKSES DI TOLAK* ⛔\n\nHanya dapat di gunakan di dalam grup', message.id)
            if (!isOwner) return iluser.reply(message.from, 'Perintah ini hanya untuk Admin iluser_BOT', message.id)
            if (!isBotGroupAdmins) return iluser.reply(message.from, 'Perintah ini hanya bisa di gunakan ketika bot menjadi admin', message.id)
            const allMeq = await iluser.getGroupMembers(groupId)
            for (let i = 0; i < allMeq.length; i++) {
                if ((adminNumber, ownerNumber).includes(allMeq[i].id)) {
                    console.log('Upss this is Admin group')
                } else {
                    await iluser.removeParticipant(groupId, allMeq[i].id)
                }
            }
            iluser.reply(message.from, 'Succes kick all member', message.id)
            break
        case prefix+'kickall':
            if (!isGroupMsg) return iluser.reply(message.from, '⛔ *AKSES DI TOLAK* ⛔\n\nHanya dapat di gunakan di dalam grup', message.id)
            const isGroupOwner = sender.id === chat.groupMetadata.owner
            if (!isGroupOwner) return iluser.reply(message.from, 'Perintah ini hanya bisa di gunakan oleh Owner group', message.id)
            if (!isBotGroupAdmins) return iluser.reply(message.from, 'Perintah ini hanya bisa di gunakan ketika bot menjadi admin', message.id)
            const allMek = await iluser.getGroupMembers(groupId)
            for (let i = 0; i < allMek.length; i++) {
                if ((adminNumber, ownerNumber).includes(allMek[i].id)) {
                    console.log('Upss this is Admin group')
                } else {
                    await iluser.removeParticipant(groupId, allMek[i].id)
                }
            }
            iluser.reply(message.from, 'Success kick all member', message.id)
            break
        case prefix+'leaveall':
            if (!isOwner) return iluser.reply(message.from, '⛔ *AKSES DI TOLAK* ⛔\n\nLo siapa anyink', message.id)
            const allChats = await iluser.getAllChatIds()
            const allGroups = await iluser.getAllGroups()
            for (let gclist of allGroups) {
                await iluser.sendText(gclist.contact.id, `Maaf bot sedang melakukan pembersihan rutin\ntotal chat: ${allChats.length}\n\nUser premium bisa langsung menambahkan bot dengan perintah .join`)
                await iluser.leaveGroup(gclist.contact.id)
                //await iluser.deleteChat(chatId)
            }
            iluser.reply(message.from, 'Succes leave all group!', message.id)
            break
        case prefix+'clearall':
            if (!isPilot) return iluser.reply(message.from, '⛔ *AKSES DI TOLAK* ⛔\n\nLo siapa anyink', message.id)
            iluser.reply(message.from, '[ WARN ] clearing all chat...', message.id)
            const allChatz = await iluser.getAllChats()
            for (let dchat of allChatz) {
                await iluser.deleteChat(dchat.id)
            }
            iluser.sendText(message.from, 'Succes clear all chat!', message.id)
            break
        case prefix+'oadd':
            const orang = args[1]
            if (!isGroupMsg) return iluser.reply(message.from, 'Fitur ini hanya bisa di gunakan dalam group', message.id)
            if (args.length === 1) return iluser.reply(message.from, `Contoh *${prefix}add* 628xxxxx`, message.id)
            if (!isPilot) return iluser.reply(message.from, 'Perintah ini hanya untuk Admin iluser_BOT', message.id)
            if (!isBotGroupAdmins) return iluser.reply(message.from, 'Perintah ini hanya bisa di gunakan ketika bot menjadi admin', message.id)
            try {
                await iluser.addParticipant(message.from,`${orang}@c.us`)
            } catch {
                iluser.reply(message.from, mess.error.Ad, message.id)
            }
            break
        case prefix+'add':
            const orgh = body.slice(5)
            if (!isGroupMsg) return iluser.reply(message.from, '⛔ *AKSES DI TOLAK* ⛔\n\nHanya dapat di gunakan di dalam grup', message.id)
            if (args.length === 1) return iluser.reply(message.from, `Untuk menggunakan fitur ini, kirim perintah *${prefix}add* 628xxxxx`, message.id)
            if (!isGroupAdmins) return iluser.reply(message.from, `⛔ *AKSES DI TOLAK* ⛔\n\nnte admin?`, message.id)
            if (!isBotGroupAdmins) return iluser.reply(message.from, 'Perintah ini hanya bisa di gunakan ketika bot menjadi admin', message.id)
            try {
                await iluser.addParticipant(message.from,`${orgh}@c.us`)
            } catch {
                iluser.reply(message.from, mess.error.Ad, message.id)
            }
            break
        case prefix+'okick':
        case 'p':
        	if (isPilot){
            if (!isGroupMsg) return iluser.reply(message.from, 'Perintah ini hanya bisa di gunakan dalam group', message.id)            
            if (!isBotGroupAdmins) return iluser.reply(message.from, 'Perintah ini hanya bisa di gunakan ketika bot menjadi admin', message.id)
            if (mentionedJidList.length === 0) return iluser.reply(message.from, `Untuk menggunakan Perintah ini, kirim perintah *${prefix}okick* @tagmember`, message.id)
            await iluser.sendText(message.from, `Mengeluarkan anak anjing ${mentionedJidList.map(x => `@${x.replace('@c.us', '')}`).join('\n')}`)
            for (let i = 0; i < mentionedJidList.length; i++) {
                if ((adminNumber, ownerNumber).includes(mentionedJidList[i])) return iluser.reply(message.from, mess.error.Sp, message.id)
                await iluser.removeParticipant(groupId, mentionedJidList[i])
            }
        }
            break
        case prefix+'kick':
            if (!isGroupMsg) return iluser.reply(message.from, '⛔ *AKSES DI TOLAK* ⛔\n\nHanya dapat di gunakan di dalam grup', message.id)
            if (!isGroupAdmins) return iluser.reply(message.from, `⛔ *AKSES DI TOLAK* ⛔\n\nnte admin?`, message.id)
            if (!isBotGroupAdmins) return iluser.reply(message.from, 'Perintah ini hanya bisa di gunakan ketika bot menjadi admin', message.id)
            if (mentionedJidList.length === 0) return iluser.reply(message.from, `Untuk menggunakan Perintah ini, kirim perintah *${prefix}kick* @tagmember`, message.id)
            await iluser.sendTextWithMentions(message.from, `Akang gendaang, mari kita tendang ${mentionedJidList.map(x => `@${x.replace('@c.us', '')}`).join('\n')}`)
            for (let i = 0; i < mentionedJidList.length; i++) {
               // if (isGroupOwner.includes(mentionedJidList[i])) return iluser.reply(message.from, `Sorry mint, gabisa mewisudakan owner grup`, message.id)
                await iluser.removeParticipant(groupId, mentionedJidList[i])
            }
            break
        case prefix+'oleave':
            if (!isGroupMsg) return iluser.reply(message.from, '⛔ *AKSES DI TOLAK* ⛔\n\nHanya dapat di gunakan di dalam grup', message.id)
            if (!isPilot) return iluser.reply(message.from, 'Pilot Only!', message.id)
            await iluser.sendText(message.from,'iluser_BOT DIPERINTAHKAN KELUAR OLEH OWNER!!').then(() => iluser.leaveGroup(groupId))
            break
        case prefix+'leave':
            if (!isGroupMsg) return iluser.reply(message.from, 'Perintah ini hanya bisa di gunakan dalam group', message.id)
            if (!isGroupAdmins) return iluser.reply(message.from, `⛔ *AKSES DI TOLAK* ⛔\n\nnte admin?`, message.id)
            await iluser.sendText(message.from,'Sayonara').then(() => iluser.leaveGroup(groupId))
            break
        case prefix+'opromote':
            if (!isGroupMsg) return iluser.reply(message.from, 'Perintah ini hanya bisa di gunakan dalam group', message.id)
            if (!isPilot) return iluser.reply(message.from, 'Perintah ini hanya untuk Admin iluser_BOT', message.id)
            if (!isBotGroupAdmins) return iluser.reply(message.from, 'Fitur ini hanya bisa di gunakan ketika bot menjadi admin', message.id)
            if (mentionedJidList.length === 0) return iluser.reply(message.from, `Untuk menggunakan fitur ini, kirim perintah *${prefix}opromote* @tagmember`, message.id)
            if (mentionedJidList.length >= 2) return iluser.reply(message.from, 'Maaf, perintah ini hanya dapat digunakan kepada 1 user.', message.id)
            if (groupAdmins.includes(mentionedJidList[0])) return iluser.reply(message.from, 'Maaf, user tersebut sudah menjadi admin.', message.id)
            await iluser.promoteParticipant(groupId, mentionedJidList[0])
            await iluser.sendTextWithMentions(message.from, `Perintah Owner diterima, menambahkan @${mentionedJidList[0]} sebagai admin.`)
            break
        case prefix+'promote':
            if (!isGroupMsg) return iluser.reply(message.from, 'Fitur ini hanya bisa di gunakan dalam group', message.id)
            if (!isGroupAdmins) return iluser.reply(message.from, `⛔ *AKSES DI TOLAK* ⛔\n\nnte admin?`, message.id)
            if (!isBotGroupAdmins) return iluser.reply(message.from, 'Fitur ini hanya bisa di gunakan ketika bot menjadi admin', message.id)
            if (mentionedJidList.length === 0) return iluser.reply(message.from, `Untuk menggunakan fitur ini, kirim perintah *${prefix}promote* @tagmember`, message.id)
            if (mentionedJidList.length >= 2) return iluser.reply(message.from, 'Maaf, perintah ini hanya dapat digunakan kepada 1 user.', message.id)
            if (groupAdmins.includes(mentionedJidList[0])) return iluser.reply(message.from, 'Maaf, user tersebut sudah menjadi admin.', message.id)
            await iluser.promoteParticipant(groupId, mentionedJidList[0])
            await iluser.sendTextWithMentions(message.from, `Perintah diterima, menambahkan @${mentionedJidList[0]} sebagai admin.`)
            break
        case prefix+'odemote':
            if (!isGroupMsg) return iluser.reply(message.from, 'Perintah ini hanya bisa di gunakan dalam group', message.id)
            if (!isPilot) return iluser.reply(message.from, 'Perintah ini hanya untuk Admin iluser_BOT', message.id)
            if (!isBotGroupAdmins) return iluser.reply(message.from, 'Fitur ini hanya bisa di gunakan ketika bot menjadi admin', message.id)
            if (mentionedJidList.length === 0) return iluser.reply(message.from, `Contoh: *${prefix}odemote* @tagadmin`, message.id)
            if (mentionedJidList.length >= 2) return iluser.reply(message.from, 'Maaf, perintah ini hanya dapat digunakan kepada 1 orang.', message.id)
            if (!groupAdmins.includes(mentionedJidList[0])) return iluser.reply(message.from, 'Maaf, user tersebut tidak menjadi admin.', message.id)
            await iluser.demoteParticipant(groupId, mentionedJidList[0])
            await iluser.sendTextWithMentions(message.from, `Perintah Owner diterima, menghapus jabatan @${mentionedJidList[0]}.`)
            break
        case prefix+'demote':
            if (!isGroupMsg) return iluser.reply(message.from, 'Fitur ini hanya bisa di gunakan dalam group', message.id)
            if (!isGroupAdmins) return iluser.reply(message.from, `⛔ *AKSES DI TOLAK* ⛔\n\nnte admin?`, message.id)
            if (!isBotGroupAdmins) return iluser.reply(message.from, 'Fitur ini hanya bisa di gunakan ketika bot menjadi admin', message.id)
            if (mentionedJidList.length === 0) return iluser.reply(message.from, `Contoh: *${prefix}demote* @tagadmin`, message.id)
            if (mentionedJidList.length >= 2) return iluser.reply(message.from, 'Maaf, perintah ini hanya dapat digunakan kepada 1 orang.', message.id)
            if (!groupAdmins.includes(mentionedJidList[0])) return iluser.reply(message.from, 'Maaf, user tersebut tidak menjadi admin.', message.id)
            await iluser.demoteParticipant(groupId, mentionedJidList[0])
            await iluser.sendTextWithMentions(message.from, `Perintah diterima, menghapus jabatan @${mentionedJidList[0]}.`)
            break
        case `${prefix}cgc`:
                    if (!isPilot) return iluser.reply(message.from, 'Perintah ini hanya bisa digunakan oleh Owner', message.id)
                    argz = body.trim().split(' ')
                    const gcname = argz[1]
                    iluser.createGroup(gcname, mentionedJidList)
                    iluser.sendText(message.from, 'Berhasil membuat group!')
                    break
        case `${prefix}setgrouplimit`:
                    if (!isPilot) return iluser.reply(message.from, 'Perintah ini hanya untuk Owner BOT', message.id)
                    if (args.length == 1) return iluser.reply(message.from, `Contoh *${prefix}setgrouplimit 15*`, message.id)
                    const gli = body.slice(15)
                    setting.groupLimit = `${gli}`
                    groupLimit = `${gli}`
                    fs.writeFileSync('./lib/database/setting.json', JSON.stringify(setting, null, 2))
                    iluser.reply(message.from, `Mengubah limit group ke ${gli} silakan restart!`, message.id)
                    break
        case `${prefix}setmemberlimit`:
                    if (!isOwner) return iluser.reply(message.from, 'Perintah ini hanya untuk Owner BOT', message.id)
                    if (args.length == 1) return iluser.reply(message.from, `Contoh *${prefix}setgrouplimit 15*`, message.id)
                    const gliii = body.slice(15)
                    setting.memberLimit = `${gliii}`
                    memberLimit = `${gliii}`
                    fs.writeFileSync('./lib/database/setting.json', JSON.stringify(setting, null, 2))
                    iluser.reply(message.from, `Mengubah limit member ke ${gliii}`, message.id)
                    break
        case `${prefix}setlimituser`:
                    if (!isOwner) return iluser.reply(message.from, 'Perintah ini hanya untuk Owner BOT', message.id)
                    if (args.length == 1) return iluser.reply(message.from, `Contoh *${prefix}setgrouplimit 15*`, message.id)
                    const glii = body.slice(14)
                    setting.limitCount = `${glii}`
                    limitCount = `${glii}`
                    fs.writeFileSync('./lib/database/setting.json', JSON.stringify(setting, null, 2))
                    iluser.reply(message.from, `Berhasil mengubah limit babu jadi ${glii}/hari\n\nSilakan restart server!`, message.id)
                    break
        case `${prefix}mtcstart`:
                    if (mtcState === true) return
                    if (!isOwner) return
                    setting.mtc = true
                    fs.writeFileSync('./lib/database/setting.json', JSON.stringify(setting, null, 2))
                    iluser.reply(message.from, 'Maintenance sudah di Umumkan!', message.id)
                    break
        case `${prefix}mtcstop`:
                    if (mtcState === false) return
                    if (!isOwner) return
                    setting.mtc = false
                    fs.writeFileSync('./lib/database/setting.json', JSON.stringify(setting, null, 2))
                    iluser.reply(message.from, 'Maintenance sudah di Umumkan!', message.id)
                    break
        case prefix+'fakta':
			if(isReg(obj)) return         
            if (isLimit(serial)) return
            
            await limitAdd(serial)
            fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/faktaunix.txt')
            .then(res => res.text())
            .then(body => {
                let splitnix = body.split('\n')
                let randomnix = splitnix[Math.floor(Math.random() * splitnix.length)]
                iluser.reply(message.from, randomnix, message.id)
            })
            break
        case `${prefix}tod`: //aksara
                    if(isReg(obj)) return
            		        
            		if (isLimit(serial)) return
            
            		await limitAdd(serial)
                    if (!isGroupMsg) return iluser.reply(message.from, 'Perintah ini hanya bisa digunakan dalam group!', message.id)
                    const sliin = "https://blog.elevenia.co.id/wp-content/uploads/2020/04/27420-truth-or-dare.jpg"
                    const gmeek = await iluser.getGroupMembersId(groupId)
                    let gmimk = gmeek[Math.floor(Math.random() * gmeek.length)]
                    const mmkkk = `     *「 TRUTH OR DARE 」*`
                    const lllk = `Truth or Dare kali ini ditujukan kepada @${gmimk.replace(/@c.us/g, '')} \n\nSilahkan balas pesan ini dengan\n${prefix}truth atau\n${prefix}dare`
                    iluser.sendFileFromUrl(message.from, sliin, 'ddas.jpg', mmkkk, message.id)
                    await sleep(3000)
                    await iluser.sendTextWithMentions(message.from, lllk, message.id)
                    break
        case `${prefix}truth`:{
            const dota = fs.readFileSync('./lib/database/truth.json')
            const dotaJson = JSON.parse(dota)
            const rondtruth = Math.floor(Math.random() * dotaJson.length)
            const rondtruthh = dotaJson[rondtruth]
            await iluser.reply(message.from, `*TRUTH*\n\n${rondtruthh}`,id)
        }
            break
        case `${prefix}dare`:{
            const dotaa = fs.readFileSync('./lib/database/dare.json')
            const dotaaJson = JSON.parse(dotaa)
            const ronddare = Math.floor(Math.random() * dotaaJson.length)
            const ronddaree = dotaaJson[ronddare]
            await iluser.reply(message.from, `*DARE*\n\n${ronddaree}`,id)
        }
            break
        case `${prefix}addtruth`:
        if (!isAdmin) return iluser.reply(message.from, 'Pmau apa lo?', id)
            const truthh = body.slice(10)
            truth.push(truthh)
            fs.writeFileSync('./lib/database/truth.json', JSON.stringify(truth))
            iluser.reply(message.from, `Kalimat *${truthh}*\ntelah berhasil ditambahkan ke Database`,id)
            break
        case `${prefix}deltruth`:
        if (!isAdmin) return iluser.reply(message.from, 'Pmau apa lo?', id)
            const truthhh = body.slice(10)
            let deltruthhh = truth.indexOf(truthhh)
            truth.splice(deltruthhh, 1)
            fs.writeFileSync('./lib/database/truth.json', JSON.stringify(truth))
            iluser.sendText(self, `Kalimat *${truthhh}*\nTelah berhasil dihapus dari database`)
            break
        case `${prefix}truthlist`:
            let truthlist = `Random *truth* list\nTotal : ${truth.lenght}\n`
            for (let i of truth) {
            truthlist += `☛ ${i}\n`
            }
            await iluser.reply(message.from,truthlist, id)
            break
        case `${prefix}adddare`:
        if (!isAdmin) return iluser.reply(message.from, 'mau apa lo?', id)
            const daree = body.slice(9)
            dare.push(daree)
            fs.writeFileSync('./lib/database/dare.json', JSON.stringify(dare))
            iluser.reply(message.from, `Kalimat *${daree}*\ntelah berhasil ditambahkan ke Database`,id)
            break
        case `${prefix}deldare`:
        if (!isAdmin) return iluser.reply(message.from, 'Pmau apa lo?', id)
            const dareee = body.slice(9)
            let deldareee = dare.indexOf(dareee)
            dare.splice(deldareee, 1)
            fs.writeFileSync('./lib/database/dare.json', JSON.stringify(dare))
            iluser.sendText(self, `Kalimat *${dareee}*\nTelah berhasil dihapus dari database`)
            break
        case `${prefix}darelist`:
            let darelist = `Random *Dare* list\nTotal : ${dare.lenght}\n`
            for (let i of dare) {
            darelist += `☛ ${i}\n`
            }
            await iluser.reply(message.from, darelist, id)
            break
        case `${prefix}babi`:
        	if(isReg(obj)) return         
            if (isLimit(serial)) return
            
            await limitAdd(serial)
                    const gmek = await iluser.getGroupMembersId(groupId)
                    let gmik = gmek[Math.floor(Math.random() * gmek.length)]
                    const mmkk = `YANG PALING BABI DISINI ADALAH @${gmik.replace(/@c.us/g, '')}`
                    iluser.sendTextWithMentions(message.from, mmkk, message.id)
                    break
        case `${prefix}ganteng`:
        	if(isReg(obj)) return         
            if (isLimit(serial)) return
            
            await limitAdd(serial)
                    const gmekk = await iluser.getGroupMembersId(groupId)
                    let gmikk = gmekk[Math.floor(Math.random() * gmekk.length)]
                    const mmkkkk = `YANG PALING GANTENG DISINI ADALAH @${gmikk.replace(/@c.us/g, '')}`
                    iluser.sendTextWithMentions(message.from, mmkkkk, message.id)
                    break
        case `${prefix}cantik`:
        	if(isReg(obj)) return         
            if (isLimit(serial)) return
            
            await limitAdd(serial)
                    const gmekkk = await iluser.getGroupMembersId(groupId)
                    let gmikkk = gmekkk[Math.floor(Math.random() * gmekkk.length)]
                    const mmkkkkk = `YANG PALING CANTIK DISINI ADALAH @${gmikkk.replace(/@c.us/g, '')}`
                    iluser.sendTextWithMentions(message.from, mmkkkkk, message.id)
                    break
        case `${prefix}lewds`: //thanks to BOCCHI BOT
        case `${prefix}lewd`:
        	if(isReg(obj)) return  
            if (!isAdmin) return iluser.reply(message.from, '\n⛔ *AKSES DI TOLAK* ⛔\n\nNte premium?', message.id)       
            if (isLimit(serial)) return
            
            await limitAdd(serial)
                    if (isGroupMsg) {
                        nsfww.randomLewd()
                            .then(async ({
                                url
                            }) => {
                                await iluser.sendFileFromUrl(message.from, url, 'lewd.jpg', '', null, null, true)
                                    .then(() => console.log('Success sending lewd!'))
                            })
                            .catch(async (err) => {
                                console.error(err)
                                await iluser.reply(message.from, err, message.id)
                            })
                    } else {
                        nsfww.randomLewd()
                            .then(async ({
                                url
                            }) => {
                                await iluser.sendFileFromUrl(message.from, url, 'lewd.jpg', '', null, null, true)
                                    .then(() => console.log('Success sending lewd!'))
                            })
                            .catch(async (err) => {
                                console.error(err)
                                await iluser.reply(message.from, err, message.id)
                            })
                    }
                    break
                case `${prefix}fetish`: //thanks to BOCCHI BOT                    
                    if (args.length === 1) return await iluser.reply(message.from, 'Wrong Format!', message.id)
                    if (!isAdmin) return iluser.reply(message.from, '\n⛔ *AKSES DI TOLAK* ⛔\n\nNte premium?', message.id)
                    if (isLimit(serial)) return iluser.reply(message.from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik !limit Untuk Mengecek Kuota Limit Kamu`, message.id)

                    await limitAdd(serial)
                    if (isGroupMsg) {
                        try {
                            if (args[1] === 'armpits') {
                                nsfww.armpits()
                                    .then(async ({
                                        url
                                    }) => {
                                        await iluser.sendFileFromUrl(message.from, url, 'armpits.jpg', `${mess.iklann}`, message.id)
                                            .then(() => console.log('Success sending armpits pic!'))
                                    })
                            } else if (args[1] === 'feets') {
                                nsfww.feets()
                                    .then(async ({
                                        url
                                    }) => {
                                        await iluser.sendFileFromUrl(message.from, url, 'feets.jpg', `${mess.iklann}`, message.id)
                                            .then(() => console.log('Success sending feets pic!'))
                                    })
                            } else if (args[1] === 'thighs') {
                                nsfww.thighs()
                                    .then(async ({
                                        url
                                    }) => {
                                        await iluser.sendFileFromUrl(message.from, url, 'thighs.jpg', `${mess.iklann}`, message.id)
                                            .then(() => console.log('Success sending thighs pic!'))
                                    })
                            } else if (args[1] === 'ass') {
                                nsfww.ass()
                                    .then(async ({
                                        url
                                    }) => {
                                        await iluser.sendFileFromUrl(message.from, url, 'ass.jpg', `${mess.iklann}`, message.id)
                                            .then(() => console.log('Success sending ass pic!'))
                                    })
                            } else if (args[1] === 'boobs') {
                                nsfww.boobs()
                                    .then(async ({
                                        url
                                    }) => {
                                        await iluser.sendFileFromUrl(message.from, url, 'boobs.jpg', `${mess.iklann}`, message.id)
                                            .then(() => console.log('Success sending boobs pic!'))
                                    })
                            } else if (args[1] === 'belly') {
                                nsfww.belly()
                                    .then(async ({
                                        url
                                    }) => {
                                        await iluser.sendFileFromUrl(message.from, url, 'belly.jpg', `${mess.iklann}`, message.id)
                                            .then(() => console.log('Success sending belly pic!'))
                                    })
                            } else if (args[1] === 'sideboobs') {
                                nsfww.sideboobs()
                                    .then(async ({
                                        url
                                    }) => {
                                        await iluser.sendFileFromUrl(message.from, url, 'sideboobs.jpg', `${mess.iklann}`, message.id)
                                            .then(() => console.log('Success sending sideboobs pic!'))
                                    })
                            } else if (args[1] === 'ahegao') {
                                nsfww.ahegao()
                                    .then(async ({
                                        url
                                    }) => {
                                        await iluser.sendFileFromUrl(message.from, url, 'ahegao.jpg', `${mess.iklann}`, message.id)
                                            .then(() => console.log('Success sending ahegao pic!'))
                                    })
                            } else {
                                await iluser.reply(message.from, 'Tag not found.', message.id)
                            }
                        } catch (err) {
                            console.error(err)
                            await iluser.reply(message.from, err, message.id)
                        }
                    } else {
                        try {
                            if (args[1] === 'armpits') {
                                nsfww.armpits()
                                    .then(async ({
                                        url
                                    }) => {
                                        await iluser.sendFileFromUrl(message.from, url, 'armpits.jpg', `${mess.iklann}`, message.id)
                                            .then(() => console.log('Success sending armpits pic!'))
                                    })
                            } else if (args[1] === 'feets') {
                                nsfww.feets()
                                    .then(async ({
                                        url
                                    }) => {
                                        await iluser.sendFileFromUrl(message.from, url, 'feets.jpg', `${mess.iklann}`, message.id)
                                            .then(() => console.log('Success sending feets pic!'))
                                    })
                            } else if (args[1] === 'thighs') {
                                nsfww.thighs()
                                    .then(async ({
                                        url
                                    }) => {
                                        await iluser.sendFileFromUrl(message.from, url, 'thighs.jpg', `${mess.iklann}`, message.id)
                                            .then(() => console.log('Success sending thighs pic!'))
                                    })
                            } else if (args[1] === 'ass') {
                                nsfww.ass()
                                    .then(async ({
                                        url
                                    }) => {
                                        await iluser.sendFileFromUrl(message.from, url, 'ass.jpg', `${mess.iklann}`, message.id)
                                            .then(() => console.log('Success sending ass pic!'))
                                    })
                            } else if (args[1] === 'boobs') {
                                nsfww.boobs()
                                    .then(async ({
                                        url
                                    }) => {
                                        await iluser.sendFileFromUrl(message.from, url, 'boobs.jpg', `${mess.iklann}`, message.id)
                                            .then(() => console.log('Success sending boobs pic!'))
                                    })
                            } else if (args[1] === 'belly') {
                                nsfww.belly()
                                    .then(async ({
                                        url
                                    }) => {
                                        await iluser.sendFileFromUrl(message.from, url, 'belly.jpg', `${mess.iklann}`, message.id)
                                            .then(() => console.log('Success sending belly pic!'))
                                    })
                            } else if (args[1] === 'sideboobs') {
                                nsfww.sideboobs()
                                    .then(async ({
                                        url
                                    }) => {
                                        await iluser.sendFileFromUrl(message.from, url, 'sideboobs.jpg', `${mess.iklann}`, message.id)
                                            .then(() => console.log('Success sending sideboobs pic!'))
                                    })
                            } else if (args[1] === 'ahegao') {
                                nsfww.ahegao()
                                    .then(async ({
                                        url
                                    }) => {
                                        await iluser.sendFileFromUrl(message.from, url, 'ahegao.jpg', `${mess.iklann}`, message.id)
                                            .then(() => console.log('Success sending ahegao pic!'))
                                    })
                            } else {
                                await iluser.reply(message.from, 'Tag not found.', message.id)
                            }
                        } catch (err) {
                            console.error(err)
                            await iluser.reply(message.from, err, message.id)
                        }
                    }
                    break
            case `${prefix}ptlvid`:
		            if(isReg(obj)) return
		                    
		            if (isLimit(serial)) return
		            
		            await limitAdd(serial)
                    const ditai = fs.readFileSync('./lib/database/asupan.json')
                    const ditaiJsin = JSON.parse(ditai)
                    const rindIndixa = Math.floor(Math.random() * ditaiJsin.length)
                    const rindKiya = ditaiJsin[rindIndixa]
                    iluser.sendFileFromUrl(message.from, rindKiya, 'asupan.mp4', `Neeeh ${mess.iklan}`, message.id)
                    break
        case prefix+'join':
            if (!isAdmin) return iluser.reply(message.from, '\n⛔ *AKSES DI TOLAK* ⛔\n\nNte premium?', message.id)
            if (isAdmin) return iluser.reply(message.from, '\n⛔ *AKSES DI TOLAK* ⛔\n\nSilahkan hubungi creator bot untuk memasukkan bot secara manual', message.id)
            if (args.length === 1) return iluser.reply(message.from, 'Contoh .join https://chat.whatsapp.com/xnxx', message.id)
            const link = body.slice(6)
            const tGr = await iluser.getAllGroups()
            const minMem = 10
            const isLink = link.match(/(https:\/\/chat.whatsapp.com)/gi)
            const check = await iluser.inviteInfo(link)
            if (!isLink) return iluser.reply(message.from, 'Ini link? 👊🤬', message.id)
            if (tGr.length > 256) return iluser.reply(message.from, 'Maaf jumlah group sudah maksimal!', message.id)
            if (check.size < minMem) return iluser.reply(message.from, 'Di bawah 10 member, bot tidak bisa masuk', message.id)
            if (check.status === 200) {
                await iluser.joinGroupViaLink(link).then(() => iluser.reply(message.from, 'Joined!', id))
            } else {
                iluser.reply(message.from, 'Link group tidak valid atau bot sudah dikeluarkan!', message.id)
            }
            break
        case prefix+'odelete':
        case prefix+'odel':
            if (!isGroupMsg) return iluser.reply(message.from, 'Perintah ini hanya bisa di gunakan dalam group', message.id)
            if (!isOwner, !isAdmin) return iluser.reply(message.from, 'Perintah ini hanya untuk Admin iluser_BOT', message.id)
            if (!quotedMsg) return iluser.reply(message.from, `Salah!!, Contoh: *${prefix}delete [tagpesanbot]*`, message.id)
            if (!quotedMsgObj.fromMe) return iluser.reply(message.from, 'Salah!!, Bot tidak bisa mengahpus chat user lain!', message.id)
            iluser.deleteMessage(quotedMsgObj.chatId, quotedMsgObj.id, false)
            break
        case prefix+'delete':
        case prefix+'del':
            if (!isGroupMsg) return iluser.reply(message.from, 'Fitur ini hanya bisa di gunakan dalam group', message.id)
            if (!isGroupAdmins) return iluser.reply(message.from, `⛔ *AKSES DI TOLAK* ⛔\n\nnte admin?`, message.id)
            if (!quotedMsg) return iluser.reply(message.from, `Salah!!, Contoh: *${prefix}delete [tagpesanbot]*`, message.id)
            if (!quotedMsgObj.fromMe) return iluser.reply(message.from, 'Salah!!, Bot tidak bisa mengahpus chat user lain!', message.id)
            iluser.deleteMessage(quotedMsgObj.chatId, quotedMsgObj.id, false)
            break
        case prefix+'sider':
            if (!isGroupMsg) return iluser.reply(message.from, `Perintah ini hanya bisa di gunakan dalam group!`, message.id)                
            if (!quotedMsg) return iluser.reply(message.from, `Tolong Reply Pesan iluser_BOT`, message.id)
            if (!quotedMsgObj.fromMe) return iluser.reply(message.from, `Tolong Reply Pesan iluser_BOT`, message.id)
            try {
                const reader = await iluser.getMessageReaders(quotedMsgObj.id)
                let list = ''
                for (let pembaca of reader) {
                list += `- @${pembaca.id.replace(/@c.us/g, '')}\n` 
            }
                iluser.sendTextWithMentions(message.from, `Ciee, Ngeread...\n\n${list}`)
            } catch(err) {
                console.log(err)
                iluser.reply(message.from, `Maaf, Belum Ada Yang Membaca Pesan iluser_BOT atau Mereka Menonaktifkan Read Receipts`, message.id)    
            }
            break
        case prefix+'linkgroup':
        case prefix+'link':
            if (!isGroupMsg) return iluser.reply(message.from, `Fitur ini hanya bisa di gunakan dalam group`, message.id)
            if (!isBotGroupAdmins) return iluser.reply(message.from, `Fitur ini hanya bisa di gunakan ketika bot menjadi admin`, message.id)
            const namagcnye = chat.formattedTitle
            var gclink = await iluser.getGroupInviteLink(groupId)
            var linkgc  = `${gclink}`
            iluser.sendLinkWithAutoPreview(message.from, linkgc, '', '', message.id)
            break
        case prefix+'resetlinkgroup':
        case prefix+'resetlink':
            if (!isGroupMsg) return iluser.reply(message.from, `Fitur ini hanya bisa di gunakan dalam group`, message.id)
            if (!isGroupAdmins) return iluser.reply(message.from, `⛔ *AKSES DI TOLAK* ⛔\n\nnte admin?`, message.id)
            if (!isBotGroupAdmins) return iluser.reply(message.from, `Fitur ini hanya bisa di gunakan ketika bot menjadi admin`, message.id)
            if (isGroupMsg) {
                await iluser.revokeGroupInviteLink(groupId);
                iluser.sendTextWithMentions(message.from, `Link group telah direset oleh admin @${sender.id.replace('@c.us', '')}`)
            }
            break
        case prefix+'getses':
            if (isOwner){
            if (isGroupMsg){
                const sesPic = await iluser.getSnapshot()  
                await iluser.sendFile(message.from, sesPic, 'session.png', 'Nih tuan', message.id)
            }else{
                const sesPic = await iluser.getSnapshot()  
                await iluser.sendFile(message.from, sesPic, 'session.png', 'Nih tuan', message.id)
                //await iluser.deleteChat(chatId)
            }
        }
            break;
        case prefix+'listuser':
            await iluser.reply(message.from, `List user bot\nTotal : ${pendaftar.length}`, message.id)
            break        
        case prefix+'listprem':
            let admn = `Neeh user premium\nTotal : ${adminNumber.length}\n`
            for (let i of adminNumber) {
                admn += `• ${i.replace(/@c.us/g,'')}\n`
            }
            await iluser.reply(message.from, admn, message.id)
            break
        case prefix+'limit':
        	if (isAdmin) return iluser.reply(message.from, `Kamu User Premium.`, message.id)
            var found = false
            const limidat = JSON.parse(fs.readFileSync('./lib/database/limit.json'))
            for(let lmt of limidat){
                if(lmt.id === serial){
                    let limitCounts = limitCount-lmt.limit
                    if(limitCounts <= 0) return iluser.reply(message.from, `Limit penggunaan bot kamu sudah habis`, message.id)
                    iluser.reply(message.from, `Sisa limit request kamu tersisa : *${limitCounts}*`, message.id)
                    found = true
                }
            }
            console.log(limit)
            console.log(limidat)
            if (found === false){
                let obj = {id: `${serial}`, limit:1};
                limit.push(obj);
                fs.writeFileSync('./lib/database/limit.json',JSON.stringify(limit, 1));
                iluser.reply(message.from, `Sisa limit request kamu tersisa : *${limitCount}*`, message.id)
            }
            break
        case prefix+'run':
            const q = body.slice(5)
            if(isOwner){
            if (!q) return iluser.reply(from, 'Harap masukkan code JavaScript!', message.id)
            try {
                let evaled = await eval(q)
                if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                iluser.sendText(from, evaled)
            } catch (err) {
                iluser.reply(message.from, err, message.id)
            }}

        break
        case prefix+'restart': // WORK IF YOU RUN USING PM2
            if(isOwner){
                iluser.sendText(message.from, '*[WARN]* Restarting ...')
                setting.restartState = true
                setting.restartId = chatId
                var obj = []
                //fs.writeFileSync('./lib/setting.json', JSON.stringify(obj, null,2));
                fs.writeFileSync('./lib/database/limit.json', JSON.stringify(obj));
                fs.writeFileSync('./lib/database/muted.json', JSON.stringify(obj));
                fs.writeFileSync('./lib/database/msgLimit.json', JSON.stringify(obj));
                fs.writeFileSync('./lib/database/banned.json', JSON.stringify(obj));
                fs.writeFileSync('./lib/database/welcome.json', JSON.stringify(obj));
                fs.writeFileSync('./lib/database/left.json', JSON.stringify(obj));
                fs.writeFileSync('./lib/database/nsfwz.json', JSON.stringify(obj));
                const spawn = require('child_process').exec;
                function os_func() {
                    this.execCommand = function (command) {
                        return new Promise((resolve, reject)=> {
                        spawn(command, (error, stdout, stderr) => {
                            if (error) {
                                reject(error);
                                return;
                            }
                            resolve(stdout)
                        });
                    })
                }}
                var oz = new os_func();
                oz.execCommand('pm2 restart index').then(res=> {
                }).catch(err=> {
                    console.log("os >>>", err);
                })
            }
            break
        /*case prefix+'restlimit':
            let obj = [];
            fs.writeFileSync('./lib/database/limit.json', JSON.stringify(obj));
            iluser.sendText('6283142933894@c.us','[INFO] Limit restarted!');
            console.log('[INFO] Limit restarted!');
            break*/
        case prefix+'restlimit':
            if(isOwner){
                let benetc = limit.indexOf(limit[0])
                limit.splice(benetc)
                fs.writeFileSync('./lib/database/limit.jsonsd', JSON.stringify(limit))
                iluser.sendText(from, '*[ WARN ]* Restarting limit user...')
                console.log('[INFO] Limit restarted!');
            }
            break
        /*case prefix+'restlimit':
            if(isOwner){
                function formpost(req, res) {
                    var data = req.body;
                    fs.writeFile('./lib/database/limit.json', JSON.stringify(data), cb);
                    }
                    iluser.sendText(from, '*[WARN]* Restarting limit user...')
                    setting.restartState = true
                    setting.restartId = chatId
                    var obj = []
                    fs.writeFileSync('./lib/database/limit.json', JSON.stringify(obj));
                    break
            }*/
        case prefix+'block':
            if (!isPilot) return iluser.reply(message.from, '⛔ *AKSES DI TOLAK* ⛔\n\nLo siapa anyink', message.id)
            for (let i = 0; i < mentionedJidList.length; i++) {
                let unblock = `${mentionedJidList[i]}`
                await iluser.contactBlock(unblock).then((a)=>{
                    console.log(a)
                    iluser.reply(message.from, `Sukses memblokir target ${args[1]}!`, message.id)
                })
            }
            break
        case prefix+'unblock':
            if (!isPilot) return iluser.reply(message.from, '⛔ *AKSES DI TOLAK* ⛔\n\nLo siapa anyink', message.id)
            for (let i = 0; i < mentionedJidList.length; i++) {
                let unblock = `${mentionedJidList[i]}`
                await iluser.contactUnblock(unblock).then((a)=>{
                    console.log(a)
                    iluser.reply(message.from, `Sukses membuka blokir target`, message.id)
                })
            } 
            break
        case prefix+'setname':
            if (!isPilot) return iluser.reply(message.from, `⛔ *AKSES DI TOLAK* ⛔\n\nLo siapa anyink`, message.id)
                const setnem = body.slice(9)
                await iluser.setMyName(setnem)
                iluser.reply(message.from, `Merubah nama bot menjadi *${setnem}..*`, id)
            break
        case prefix+'setstatus':
            if (!isPilot) return iluser.reply(message.from, `⛔ *AKSES DI TOLAK* ⛔\n\nLo siapa anyink`, message.id)
                const setstat = body.slice(11)
                await iluser.setMyStatus(setstat)
                iluser.reply(message.from, `Sukses merubah status menjadi ${setstat}`, message.id)
            break
        case prefix+'setprofile':
            if (!isPilot) return iluser.reply(message.from, `⛔ *AKSES DI TOLAK* ⛔\n\nLo siapa anyink`, message.id)
            if (isMedia) {
                const mediaData = await decryptMedia(message)
                const imageBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
                await iluser.setProfilePic(imageBase64)
                iluser.reply(`Sukses mengubah foto profile`, message.id)
            } else if (quotedMsg && quotedMsg.type == 'image') {
                const mediaData = await decryptMedia(quotedMsg)
                const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                await iluser.setProfilePic(imageBase64)
                iluser.reply(message.from, `Sukses mengubah foto profile`, message.id)
            } else {
                iluser.reply(message.from, `Format Salah`, message.id)
            }
            break
        case `${prefix}getpp`:
			if (!isGroupMsg) return iluser.reply(from, 'Hanya untuk di grup!.', message.id)
				var pik = await iluser.getProfilePicFromServer(mentionedJidList[0])
				await iluser.sendFileFromUrl(from, pik, 'pik.jpg', 'Nih Foto profilnya', message.id)
				break
		case `${prefix}getsts`:
			if (!isGroupMsg) return iluser.reply(from, 'Hanya untuk di grup!.', id)
				var ssts = await iluser.getStatus(mentionedJidList[0])
				const { status } = ssts
				await iluser.sendTextWithMentions(from, `Status dari @${mentionedJidList[0].replace('@c.us', '')}.\n\n${status}\n`, id)			
				break
        case prefix+'ban':
            if (!isPilot) return iluser.reply(message.from, 'Perintah ini hanya bisa di gunakan oleh admin iluser_BOT!', message.id)
            for (let i = 0; i < mentionedJidList.length; i++) {
                if ((adminNumber).includes(mentionedJidList[i])) return iluser.reply(message.from,`Maaf ${pushname}, Kamu tidak bisa banned Admin iluser_BOT!`, message.id)
                banned.push(mentionedJidList[i])
                fs.writeFileSync('./lib/database/banned.json', JSON.stringify(banned))
                iluser.reply(message.from, `Sukses membanned target`,id)
            }
            break
        case prefix+'unban':
            if (!isPilot) return iluser.reply(message.from, 'Perintah ini hanya bisa di gunakan oleh admin iluser_BOT!', message.id)
                let inz = banned.indexOf(mentionedJidList[0])
                banned.splice(inz, 1)
                fs.writeFileSync('./lib/database/banned.json', JSON.stringify(banned))
                iluser.reply(message.from, 'Sukses unbanned target', message.id)
            break
        case prefix+'listgroup':
        	if(isPilot){
                iluser.getAllGroups().then((res) => {
                let berhitung1 = 1
                let gc = `*This is list of group* :\n`
                for (let i = 0; i < res.length; i++) {
                    gc += `\n═════════════════\n\n*No : ${i+1}*\n*Nama* : ${res[i].name}\n*Pesan Belum Dibaca* : ${res[i].unreadCount} chat\n*Tidak Spam* : ${res[i].notSpam}\n`
                }
                iluser.reply(message.from, gc, message.id)
            })
            }
            break
        case prefix+'listbanned':
            let bened = `This is list of banned number\nTotal : ${banned.length}\n`
            for (let i of banned) {
                bened += `• ${i.replace(/@c.us/g,'')}\n`
            }
            await iluser.reply(message.from, bened, message.id)
            break
        case prefix+'listblock':
            let hih = `This is list of blocked number\nTotal : ${blockNumber.length}\n`
            for (let i of blockNumber) {
                hih += `• ${i.replace(/@c.us/g,'')}\n`
            }
            await iluser.reply(message.from, hih, message.id)
            break
        case prefix+'ping':
        case prefix+'stat':
            if(isPilot){
    const loadedMsg = await iluser.getAmountOfLoadedMessages()
    const chatIds = await iluser.getAllChatIds()
    const groups = await iluser.getAllGroups()
    const groupsIn = groups.filter(x => x.groupMetadata.participants.map(x => [botNumber, '6281515860089@c.us'].includes(x.id._serialized)).includes(true))
    const me = await iluser.getMe()
    const battery = await iluser.getBatteryLevel()
    const isCharging = await iluser.getIsPlugged()
    const used = process.memoryUsage()
    const cpus = os.cpus().map(cpu => {
        cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
        return cpu
    })
    const cpu = cpus.reduce((last, cpu, _, { length }) => {
        last.total += cpu.total
        last.speed += cpu.speed / length
        last.times.user += cpu.times.user
        last.times.nice += cpu.times.nice
        last.times.sys += cpu.times.sys
        last.times.idle += cpu.times.idle
        last.times.irq += cpu.times.irq
        return last
    }, {
        speed: 0,
        total: 0,
        times: {
            user: 0,
            nice: 0,
            sys: 0,
            idle: 0,
            irq: 0
        }
    })
    const speed = moment() / 1000 - t
    iluser.reply(message.from, `
Status :
- *${loadedMsg}* Loaded Messages
- *${groups.length}* Group Chats
- *${chatIds.length - groups.length}* Personal Chats
- *${chatIds.length}* Total Chats

*Device Info* :
${monospace(`
Battery : ${battery}% ${isCharging ? '🔌 Mengisi daya...' : '⚡ Tidak mengisi daya'}
${Object.keys(me.phone).map(key => `${key} : ${me.phone[key]}`).join('\n')}
`.trim())}

*Server Info* :
RAM: ${format(os.totalmem() - os.freemem())} / ${format(os.totalmem())}
_NodeJS Memory Usage_
${monospace(Object.keys(used).map(key => `${key} : ${format(used[key])}`).join('\n'))}

Speed Respon: ${speed} _Detik_
`.trim(), message.id)
}
break
        case prefix+'setgroupname':
            if (!isGroupMsg) return iluser.reply(message.from, `Fitur ini hanya bisa di gunakan dalam group`, message.id)
            if (!isGroupAdmins) return iluser.reply(message.from, `⛔ *AKSES DI TOLAK* ⛔\n\nnte admin?`, message.id)
            if (!isBotGroupAdmins) return iluser.reply(message.from, `Fitur ini hanya bisa di gunakan ketika bot menjadi admin`, message.id)
            const namagrup = body.slice(14)
            let sebelum = chat.groupMetadata.formattedName
            let halaman = global.page ? global.page : await iluser.getPage()
            await halaman.evaluate((chatId, subject) =>
            Store.WapQuery.changeSubject(chatId, subject),groupId, `${namagrup}`)
            iluser.sendTextWithMentions(message.from, `Nama grup telah diubah oleh @${sender.id.replace('@c.us','')}\n\n• Before: ${sebelum}\n• After: ${namagrup}`)
            break
        case prefix+'setgroupicon':
            if (!isGroupMsg) return iluser.reply(message.from, `Fitur ini hanya bisa di gunakan dalam group`, message.id)
            if (!isGroupAdmins) return iluser.reply(message.from, `⛔ *AKSES DI TOLAK* ⛔\n\nnte admin?`, message.id)
            if (!isBotGroupAdmins) return iluser.reply(message.from, `Fitur ini hanya bisa di gunakan ketika bot menjadi admin`, message.id)
            if (isMedia) {
                const mediaData = await decryptMedia(message)
                const imageBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
                await iluser.setGroupIcon(message.from, imageBase64)
                iluser.sendTextWithMentions(message.from, `Profile group telah diubah oleh @${sender.id.replace('@c.us','')}`)
            } else if (quotedMsg && quotedMsg.type == 'image') {
                const mediaData = await decryptMedia(quotedMsg)
                const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                await iluser.setGroupIcon(message.from, imageBase64)
                iluser.sendTextWithMentions(message.from, `Profile group telah diubah oleh @${sender.id.replace('@c.us','')}`)
            } else {
                iluser.reply(message.from, `Wrong Format!\n⚠️ Harap Kirim Gambar Dengan ${prefix}setgroupicon`, message.id)
            }
            break
        case prefix+'bug':
            if (args.length === 1) return iluser.reply(message.from, `Kata katanya mana tlol`, message.id)
            const bug = body.slice(4)
            if(!bug) return
            if(isGroupMsg){
                iluser.sendText(ownerNumber, `*[BUG REPORT]*\n*WAKTU* : ${time}\nNO PENGIRIM : wa.me/${sender.id.match(/\d+/g)}\nGroup : ${formattedTitle}\n\n${bug}`)
                iluser.reply(message.from, 'Masalah telah di laporkan ke owner BOT, laporan palsu/main2 akan di blokir bot!' ,id)
            }else{
                iluser.sendText(ownerNumber, `*[BUG REPORT]*\n*WAKTU* : ${time}\nNO PENGIRIM : wa.me/${sender.id.match(/\d+/g)}\n\n${bug}`)
                iluser.reply(message.from, 'Masalah telah di laporkan ke owner BOT, laporan palsu/main2 akan di blokir bot!', message.id)
            }
            break
         case prefix+'profile':
            if (isBanned, isBlocked) return false
            if (isGroupMsg) {
                if (!quotedMsg) {
                var block = blockNumber.includes(author)
                var bend = banned.includes(author)
                var pic = await iluser.getProfilePicFromServer(author)
                var namae = pushname
                var sts = await iluser.getStatus(author)
                var adm = isGroupAdmins
                var donate = isAdmin
                const { status } = sts
                if (pic == undefined) {
                    var pfp = errorurl 
                } else {
                    var pfp = pic
                } 
                await iluser.sendFileFromUrl(message.from, pfp, 'pfp.jpg', 
`*User Profile* ✨️ \n
• Username: *${namae}*\n
• User Info: *${status}*\n
• Block : *${block}*\n*
• Banned : *${bend}*\n
• Admin Group: *${adm}*\n
• User Premium: *${donate}*`)
             } else if (quotedMsg) {
             var qmid = quotedMsgObj.sender.id
             var block = blockNumber.includes(qmid)
             var bend = banned.includes(author)
             var pic = await iluser.getProfilePicFromServer(qmid)
             var namae = quotedMsgObj.sender.name
             var sts = await iluser.getStatus(qmid)
             var adm = isGroupAdmins
             var donate = isAdmin
             const { status } = sts
              if (pic == undefined) {
              var pfp = errorurl 
              } else {
              var pfp = pic
              } 
              await iluser.sendFileFromUrl(message.from, pfp, 'pfp.jpg', 
`*User Profile* ✨️ \n
• Username: *${namae}*\n
• User Info: *${status}*\n
• Block : *${block}*\n*
• Banned : *${bend}*\n
• Admin Group: *${adm}*\n
• User Premium: *${donate}*`)
             }
            }
            break
        case prefix+'verif':
            const nonye = sender.id
            const pporang = await iluser.getProfilePicFromServer(sender.id)
            if (pporang === undefined) {
            var pepe = ppdepresi
            } else {
            var pepe = pporang
            }
            var ceknya = nonye
            var obj = pendaftar.some((val) => {
            return val.id === ceknya
            })
            if (obj === true){
            return iluser.reply(from, 'Kamu sudah melakukan verifikasi', id) // BAKAL RESPON JIKA NO UDAH ADA
            } else {
            const mentah = await iluser.checkNumberStatus(nonye) // PENDAFTARAN
            const msg = (`\t\t*VERIFY-SUCCES*

NAMA : ${pushname}
SERIAL : ${SN}
NOMOR : ${nonye.replace(/[@c.us]/g, '')}
API : wa.me/${nonye.replace('@c.us', '')}
WAKTU : ${moment().format('DD/MM/YY HH:mm:ss')}
LIMIT : ${limitCount}/Day

Ketik ${prefix}menu untuk melihat dafar menu
Total user terverifikasi: ${pendaftar.length}

Subscribe t.me/iluser_BOT untuk mendapatkan info terbaru dari bot`)
            const hasil = mentah.canReceiveMessage ? msg : false
            if (!hasil) return iluser.reply(from, 'Nomor WhatsApp tidak valid [ Tidak terdaftar di WhatsApp ]', id) 
            {
            const register = ({
            id: mentah.id._serialized
            })
            pendaftar.push(register)
            fs.writeFileSync('./lib/database/user.json', JSON.stringify(pendaftar)) // DATABASE
            iluser.sendFileFromUrl(from, pepe, 'ppnya.jpg', hasil, id)
            }
            }
            break
       /* case prefix+'daftar':  // NAMBAHIN NOMOR DI DATABASE
                argz = body.trim().split('|')
                if (argz.length >= 2) {
                const nonye = sender.id
                const namanye = argz[1]
                const umurnye = argz[2]
                    if(isNaN(umurnye)) return await iluser.reply(message.from, 'Umur harus berupa angka ya tod!!', message.id)
                    if(umurnye >= 40) return await iluser.reply(message.from, 'Tua banget anyink', message.id)
                    const jenenge = namanye.replace(' ','')
                    var ceknya = nonye
                        var obj = pendaftar.some((val) => {
                            return val.id === ceknya
                        })
                        if (obj === true){
                            return iluser.reply(message.from, 'kamu sudah terdaftar tod', message.id) // BAKAL RESPON JIKA NO UDAH ADA
                        } else {
                            const mentah = await iluser.checkNumberStatus(nonye) // PENDAFTARAN
                            const msg = monospace(`Pendaftaran berhasil dengan SN:\n${SN} pada ${moment().format('DD/MM/YY HH:mm:ss')}
₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋
[Nama]: ${jenenge} [@${nonye.replace(/[@c.us]/g, '')}]
[Nomor]: wa.me/${nonye.replace('@c.us', '')}
[Umur]: ${umurnye} Tahun
⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻
Total user terdaftar ${pendaftar.length}\n\nSubscribe Untuk Support Bot:\nhttps://www.youtube.com/iluser`, message.id)
                            const hasil = mentah.canReceiveMessage ? msg : false
                            if (!hasil) return iluser.reply(message.from, 'Nomor WhatsApp tidak valid [ Tidak terdaftar di WhatsApp ]', message.id) 
                            {
                            const register = ({
                                id: mentah.id._serialized,
                                nama: jenenge,
                                umur: umurnye
                            })
                            pendaftar.push(register)
                            fs.writeFileSync('./lib/database/user.json', JSON.stringify(pendaftar)) // DATABASE
                                iluser.sendTextWithMentions(message.from, hasil, message.id)
                            }
                        }
                    } else {
                        await iluser.reply(message.from, `Format yang kamu masukkan salah, kirim ${prefix}daftar |nama|umur\n\ncontoh format: ${prefix}daftar |sugiono|20\n`, message.id) //if user is not registered
                    }
                break
            case prefix+'daftarulang':
                    if (!isPilot) return iluser.reply(message.from, 'Hanya user premium yang bisa tod', message.id)  
                    const nomernya = args[1]
                    let textnya = nomernya.replace(/[-\s+@c.us]/g,'')
                    const cusnya = textnya + '@c.us'
                    const umurnya = args[2]
                    if(umurnya >= 40) return await iluser.reply(message.from, 'Tua banget tlol, mna bisa', message.id)
                        var found = false
                        Object.keys(pendaftar).forEach((i) => {
                            if(pendaftar[i].id == cusnya){
                                found = i
                            }
                        })
                        if (found !== false) {
                            pendaftar[found].umur = umurnya;
                            const updated = pendaftar[found]
                            const result = monospace(`Update data berhasil dengan SN: ${SN} pada ${moment().format('DD/MM/YY HH:mm:ss')}
₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋
[Nama]: ${updated.nama} | @${updated.id.replace(/[@c.us]/g, '')}
[Nomor]: wa.me/${updated.id.replace('@c.us', '')}
[Umur]: ${updated.umur} Tahun
⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻
Total User terdaftar ${pendaftar.length}`)
                            console.log(pendaftar[found])
                            fs.writeFileSync('./lib/database/user.json',JSON.stringify(pendaftar));
                            iluser.sendTextWithMentions(message.from, result, message.id)
                        } else {
                                iluser.reply(message.from, `${monospace(`Nomernya gaada di database tod`)}`, message.id)
                        }
                break*/
        // LIST MENU
        case prefix+'master':
        if(isOwner){
            iluser.reply(message.from, own, id)
        }
        break
        case prefix+'pilot':
        if(isPilot){
            iluser.reply(message.from, piloot, id)
        }
            break
        case prefix+'menu':
        case prefix+'help':
            if(isReg(obj)) return            	
            //if(!isOwner) return iluser.reply(message.from, `Halo ${pushname} 👋\n\nMenunya banyak. tapi sengaja di sembunyikan.\nFollow instagram.com/iluser.bot agar kamu dapat info update fitur terkini dari bot`, message.id)
            if (isGroupMsg){
            	//iluser.reply(message.from, `\nHii ${pushname},\n\nBOT SEDANG DALAM TAHAP PENGEMBANGAN\nUntuk melihat fitur bot, silahkan kunjungi link di bawah ini\n• _https://youtu.be/MZ6jAJgH_2s_\n• _t.me/iluser_BOT_\n\nSupport bot dengan subscribe:\nhttps://youtube.com/iluser\n`, message.id)
                // await iluser.reply(message.from, `[ Info menu akan segera di update ]\n\nTonton cara penggunaan bot disini: https://youtu.be/MZ6jAJgH_2s\n\nSubscribe channel telegram agar ${undefined, pushname} tetap dapat update terbaru: t.me/iluser_BOT`, message.id)
               // await sleep(2000) 
                await iluser.sendImage(message.from, './logo.png', 'iluser.png', help.replace(undefined, prefix, cts, pendaftar, pushname), message.id)
                await iluser.sendImage(message.from, './dana.jpeg', 'donasiajg.jpeg', mit, message.id) 
                //await iluser.reply(message.from, help.replace(undefined, prefix, cts, pendaftar, pushname), message.id)
                //await iluser.reply(message.from, mit, message.id) 
            }else{
              //  await iluser.reply(message.from, `[ Info menu akan segera di update ]\n\nTonton cara penggunaan bot disini: https://youtu.be/MZ6jAJgH_2s\n\nSubscribe channel telegram agar ${undefined, pushname} tetap dapat update terbaru: t.me/iluser_BOT`, message.id)
               // await sleep(2000) 
                //await iluser.reply(message.from, help.replace(undefined, prefix, cts, pendaftar, pushname), message.id)
                //await iluser.reply(message.from, mit, message.id) 
                await iluser.sendImage(message.from, './logo.png', 'iluser.png', help.replace(undefined, pushname, cts, pendaftar, prefix), message.id)
                await iluser.sendImage(message.from, './dana.jpeg', 'donasiajg.jpeg', mit, message.id) 
                //await iluser.deleteChat(chatId)
            }
            break;
        case prefix+'menuadmin':
        case prefix+'adminmenu':
        	if (!isGroupMsg) return iluser.reply(message.from, '⛔ *AKSES DI TOLAK* ⛔\n\nHanya dapat di gunakan di dalam grup', message.id)
        	await iluser.sendImage(message.from, './logo.png', 'iluser.png', menuadmin, message.id)
        	break


            //NEW FITURE
        case prefix+'ytsearch':
            if (args.length === 1) return iluser.reply(from, `Kirim perintah *${prefix}ytsearch [ Query ]*, Contoh : #ytsearch alan walker alone`)
            const ytsher = body.slice(10)
            try {
                const response2 = await fetch(`https://api.vhtear.com/youtube?query=${encodeURIComponent(ytsher)}&apikey=${vhtearkey}`)
                if (!response2.ok) throw new Error(`unexpected response ${response2.statusText}`)
                const jsonserc = await response2.json()
                const { result } = await jsonserc
                let xixixi = `*「 YOUTUBE SEARCH 」*\n\n*Hasil Pencarian : ${ytsher}*\n`
                for (let i = 0; i < result.length; i++) {
                    xixixi += `\n─────────────────\n\n• *Judul* : ${result[i].title}\n• *Ditonton* : ${result[i].views}\n• *Durasi* : ${result[i].duration}\n• *Channel* : ${result[i].channel}\n• *URL* : ${result[i].urlyt}\n`
                }
                await iluser.sendFileFromUrl(from, result[0].image, 'thumbserc.jpg', xixixi, id)
            } catch (err) {
                    console.log(err)
                    await iluser.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Video tidak ditemukan')
                    iluser.sendText(ownerNumber, 'YT Search Error : ' + err)
            }
            break
        case prefix+'mlmaker':
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            if (args.length === 1) return iluser.reply(from, `Contoh ${prefix}mlmaker |saber|iluser`, id)
            argz = body.trim().split('|')
            if (argz.length >= 2) {
                iluser.reply(from, mess.wait, id)
                const lmlog = argz[1]
                const lmlog2 = argz[2]
                iluser.sendFileFromUrl(from, `https://api.vhtear.com/logoml?hero=${lmlog}&text=${lmlog2}&apikey=${vhtearkey}`,'emel.jpg',`${mess.iklann}`, id)
                await limitAdd(serial)
            } else {
                await iluser.reply(from, `Wrong Format!\nContoh: ${prefix}mlmaker |saber|iluser`, id)
            }
            break
        case prefix+'readmore':
            if(isReg(obj)) return
            if (isLimit(serial)) return
            if (args.length === 1) return iluser.reply(from,  `Contoh: ${prefix}readmore hai beb|an keluarga`, id)
            const readcuys = body.slice(10)
            const readcuys1 = readcuys.split('|')[0]
            const readcuys2 = readcuys.split('|')[1]
            iluser.reply(from, `${readcuys1}‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‎${readcuys2}`, id)
            await limitAdd(serial)
            break
        case prefix+'shopee':
        	if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)
            if (args.length === 1) return iluser.reply(from, `Contoh: *${prefix}shopee HP Samsul a20*`)
            const shopek = body.slice(8)
            try {
                const dataplai = await axios.get(`https://api.vhtear.com/shopee?query=${shopek}&count=5&apikey=${vhtearkey}`)
                const dataplay = dataplai.data.result
                 let shopeq = `*「 SHOPEE 」*\n\n*Hasil Pencarian : ${shopek}*\n`
                for (let i = 0; i < dataplay.items.length; i++) {
                    shopeq += `\n─────────────────\n\n• *Nama* : ${dataplay.items[i].nama}\n• Harga* : ${dataplay.items[i].harga}\n• *Terjual* : ${dataplay.items[i].terjual}\n• *Lokasi Toko* : ${dataplay.items[i].shop_location}\n• *Deskripsi* : ${dataplay.items[i].description}\n• *Link Product : ${dataplay.items[i].link_product}*\n`
                }
                await iluser.sendFileFromUrl(from, dataplay.items[0].image_cover, `shopee.jpg`, shopeq, id)
            } catch (err){
                console.log(err)
            }
            break
        case prefix+'playstore':
        	if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)
            if (args.length === 1) return iluser.reply(from, `Kirim perintah *${prefix}playstore [ Query ]*, Contoh : *${prefix}playstore Mobile Legends*`)
            const keywotp = body.slice(11)
            try {
                const dataplai = await axios.get(`https://api.vhtear.com/playstore?query=${keywotp}&apikey=${vhtearkey}`)
                const dataplay = dataplai.data
                 let keluarplay = `*「 PLAYSTORE 」*\n\nHasil Pencarian : ${keywotp}*\n`
                for (let i = 0; i < dataplay.result.length; i++) {
                    keluarplay += `\n─────────────────\n\n• *Nama* : ${dataplay.result[i].title}\n• *Developer* : ${dataplay.result[i].developer}\n• *Deskripsi* : ${dataplay.result[i].description}\n• *Paket ID* : ${dataplay.result[i].app_id}\n• *Harga* : ${dataplay.result[i].price}\n• *Link App* : https://play.google.com${dataplay.result[i].url}\n`
                }
                await iluser.sendFileFromUrl(from, dataplay.result[0].icon, `iconapk.webp`, keluarplay, id)
            } catch (err){
                console.log(err)
            }
            break
        case prefix+'newstickerline':
        	if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)
            try {
                const stcline = await fetch(`https://api.vhtear.com/newsticker?apikey=${vhtearkey}`)
                if (!stcline.ok) throw new Error(`unexpected response ${stcline.statusText}`)
                const stcline2 = await stcline.json()
                const { hasil } = await stcline2.result
                let xixixi = `*「 NEW STICKER LINE 」*\n\n`
                for (let i = 0; i < hasil.length; i++) {
                    xixixi += `\n─────────────────\n\n*Title* : ${hasil[i].title}\n*Url* : ${hasil[i].uri}\n`
                }
                await iluser.sendFileFromUrl(from, 'https://play-lh.googleusercontent.com/BkvRJsjYiEjb0-XKuop2AurqFKLhhu_iIP06TrCTGAq180P9Briv8Avz8ncLp7bOmCs', 'newstc.jpg', xixixi, id)
            } catch (err) {
                    console.log(err)
                    await iluser.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Video tidak ditemukan')
                    iluser.sendText(ownerNumber, 'Berita Error : ' + err)
            }
            break
        case prefix+'news':
        	if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)
            try {
                const response2 = await fetch(`https://api.vhtear.com/beritaterbaru&apikey=${vhtearkey}`)
                if (!response2.ok) throw new Error(`unexpected response ${response2.statusText}`)
                const jsonber = await response2.json()
                const { data } = await jsonber.result
                let xixixi = `*「 BERITA TERKINI 」*\n\n`
                for (let i = 0; i < data.length; i++) {
                    xixixi += `\n─────────────────\n\n*Source* : ${data[i].url}\n*Penulis* : ${data[i].author}\n*Judul* : ${data[i].title}\n*Deskripsi* : ${data[i].description}\n*Dipublikasi* : ${data[i].publishedAt}\n*Konten* : ${data[i].content}\n`
                }
                await iluser.sendFileFromUrl(from, data[0].urlToImage, 'thumbserc.jpg', xixixi, id)
            } catch (err) {
                    console.log(err)
                    await iluser.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Video tidak ditemukan')
                    iluser.sendText(ownerNumber, 'Berita Error : ' + err)
            }
            break
        case prefix+'jadwalbola':
        	if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)
            try {
                const jdbola = await fetch(`https://api.vhtear.com/jadwalbola&apikey=${vhtearkey}`)
                if (!jdbola.ok) throw new Error(`unexpected response ${jdbola.statusText}`)
                const jdbola2 = await jdbola.json()
                const { data } = await jdbola2.result
                let xixixi = `*「 JADWAL BOLA 」*\n\n`
                for (let i = 0; i < data.length; i++) {
                    xixixi += `\n─────────────────\n\n*Kick-Off* : ${data[i].kickoff}\n*Pertandingan* : ${data[i].pertandingan}\n*Stasiun TV* : ${data[i].stasiuntv}`
                }
                await iluser.sendText(from, xixixi, id)
            } catch (err) {
                    console.log(err)
                    await iluser.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Jadwal tidak ditemukan')
                    iluser.sendText(ownerNumber, 'Jadwal Bola Error : ' + err)
            }
            break
        case prefix+'emstik':
        case prefix+'emstick':
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)
          //  if (args.length !== 1) return iluser.reply(from, `Contoh: *${prefix}emstik 😫*`, id)
            const emoji = emojiUnicode(args[1])
            console.log('Creating code emoji => ' + emoji)
            iluser.sendStickerfromUrl(from, `https://api.vhtear.com/emojitopng?code=${emoji}&apikey=${vhtearkey}`)
             .catch ((err) => {
                console.log(err)
                iluser.reply(from, 'Maaf, emoji yang kamu kirim tidak support untuk dijadikan sticker, cobalah emoji lain', id)
               })
            break //nih bro case lagi
   case `${prefix}sline`:
   if (args.length === 1) return iluser.reply(from, `Contoh: ${prefix}sline https://store.line.me/stickershop/product/4877/id`, id)
   const getline = await axios.get(`http://enznoire.herokuapp.com/line?url=${body.slice(7)}`)
   if (getline.status === false) {
    return iluser.relpy(from, '[ERROR] mungkin linknya tidak valid')
   } else {
    await iluser.sendStickerfromUrl(from, getline.data.thumb)
    for (let i = 0; i < getline.data.sticker.length; i++) {
    await iluser.sendStickerfromUrl(from, `${getline.data.sticker[i]}`, id)
    }
   }
   break

    case prefix+'nickepep': //CHIKABOT
    if(isReg(obj)) return                      
    if (isLimit(serial)) return 
    iluser.reply(from, mess.wait, id)
    const amjayepep = await fetch('https://api-zeks.harispoppy.com/api/nickepep?apikey=apivinz') 
    const ptrsss = await amjayepep.json()
    const amjayepep2 = ptrsss.result 
    const amjayepep3 = JSON.parse(JSON.stringify(amjayepep2))         
    const amjayepep1 = amjayepep3[Math.floor(Math.random() * (amjayepep2.length))]
    iluser.reply(from, `*NICK EPEP GENERATOR*\n\n${amjayepep1}\n`, id)
         break

        //SCRAP MANUAL
        case prefix+'marvel': {
                    const marvel = body.slice(8)
                    const marvel1 = marvel.split('|')[0]
                    const marvel2 = marvel.split('|')[1]
                    if (!marvel) return iluser.reply(from, `Contoh: ${prefix}marvel iluser|bot`, id)
                    
        	if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)
                    const puppeteer = require('puppeteer')
            try {
                (async () => {
                    const browser = await puppeteer.launch({
                        headless: true,
                    });
                    const page = await browser.newPage();
                    await page
                        .goto("https://textpro.me/create-logo-style-marvel-studios-online-971.html", {
                            waitUntil: "networkidle2"
                        })
                        .then(async () => {
                            await page.type("#text-0", marvel1);
                            await page.type("#text-1", marvel2);
                            await page.click("#submit");
                            await new Promise(resolve => setTimeout(resolve, 3000));
                            const element = await page.$(
                                'div[class="thumbnail"] > img'
                                );
                            const text = await (await element.getProperty("src")).jsonValue();
                            const urlmp4 = ({
                                url: text
                            })
                            iluser.sendFileFromUrl(from, text, 'asu.jpg', `${mess.iklann}`, id)
                            browser.close();
            
                        })
                        .catch((err => {
                            console.log(err)
                            iluser.reply(from, 'error', id)
                        }))
            })();
            } catch (error) {
            console.log('error bang')
            iluser.reply(from, 'error', id)
            }
            }
            break
        case prefix+'glitch': {
                    const gelit = body.slice(8)
        	        const gelit1 = gelit.split('|')[0]
        	        const gelit2 = gelit.split('|')[1]
        	        if (!gelit) return iluser.reply(from, `Contoh: ${prefix}glitch iluser|bot`, id)
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)
                    const puppeteer = require('puppeteer')
            try {
                (async () => {
                    const browser = await puppeteer.launch({
                        headless: true,
                    });
                    const page = await browser.newPage();
                    await page
                        .goto("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", {
                            waitUntil: "networkidle2"
                        })
                        .then(async () => {
                            await page.type("#text-0", gelit1);
                            await page.type("#text-1", gelit2);
                            await page.click("#submit");
                            await new Promise(resolve => setTimeout(resolve, 3000));
                            const element = await page.$(
                                'div[class="thumbnail"] > img'
                                );
                            const text = await (await element.getProperty("src")).jsonValue();
                            const urlmp4 = ({
                                url: text
                            })
                            iluser.sendFileFromUrl(from, text, 'asu.jpg', `${mess.iklann}`, id)
                            browser.close();
            
                        })
                        .catch((err => {
                            console.log(err)
                            iluser.reply(from, 'error', id)
                        }))
            })();
            } catch (error) {
            console.log('error bang')
            iluser.reply(from, 'error', id)
            }
            }
            break
        case prefix+'avenger': {
                    const avenger = body.slice(9)
                    const avenger1 = avenger.split('|')[0]
                    const avenger2 = avenger.split('|')[1]
                    if (!avenger) return iluser.reply(from, `Contoh: ${prefix}avenger iluser|bot`, id)
                    iluser.reply(from, mess.wait, id)
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial) 
                    const puppeteer = require('puppeteer')
            try {
                (async () => {
                    const browser = await puppeteer.launch({
                        headless: true,
                    });
                    const page = await browser.newPage();
                    await page
                        .goto("https://textpro.me/create-3d-avengers-logo-online-974.html", {
                            waitUntil: "networkidle2"
                        })
                        .then(async () => {
                            await page.type("#text-0", avenger1);
                            await page.type("#text-1", avenger2);
                            await page.click("#submit");
                            await new Promise(resolve => setTimeout(resolve, 3000));
                            const element = await page.$(
                                'div[class="thumbnail"] > img'
                                );
                            const text = await (await element.getProperty("src")).jsonValue();
                            const urlmp4 = ({
                                url: text
                            })
                            iluser.sendFileFromUrl(from, text, 'asu.jpg', `${mess.iklann}`, id)
                            browser.close();
            
                        })
                        .catch((err => {
                            console.log(err)
                            iluser.reply(from, 'error', id)
                        }))
            })();
            } catch (error) {
            console.log('error bang')
            iluser.reply(from, 'error', id)
            }
            }
            break
        case prefix+'wolf': {
                    const logo = body.slice(6)
                    const logo1 = logo.split('|')[0]
                    const logo2 = logo.split('|')[1]
                    if (!logo) return iluser.reply(from, `Contoh: ${prefix}wolf iluser|bot`, id)
                    iluser.reply(from, mess.wait, id)
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)        
                    const puppeteer = require('puppeteer')
            try {
                (async () => {
                    const browser = await puppeteer.launch({
                        headless: true,
                    });
                    const page = await browser.newPage();
                    await page
                        .goto("https://textpro.me/create-wolf-logo-galaxy-online-936.html", {
                            waitUntil: "networkidle2"
                        })
                        .then(async () => {
                            await page.type("#text-0", logo1);
                            await page.type("#text-1", logo2);
                            await page.click("#submit");
                            await new Promise(resolve => setTimeout(resolve, 3000));
                            const element = await page.$(
                                'div[class="thumbnail"] > img'
                                );
                            const text = await (await element.getProperty("src")).jsonValue();
                            const urlmp4 = ({
                                url: text
                            })
                            iluser.sendFileFromUrl(from, text, 'asu.jpg', `${mess.iklann}`, id)
                            browser.close();
            
                        })
                        .catch((err => {
                            console.log(err)
                            iluser.reply(from, 'error', id)
                        }))
            })();
            } catch (error) {
            console.log('error bang')
            iluser.reply(from, 'error', id)
            }
            }
            break
        case prefix+'vintage': {
                    const tmbk = body.slice(9)
                    const tmbk1 = tmbk.split('|')[0]
                    const tmbk2 = tmbk.split('|')[1]
                    if (!tmbk) return iluser.reply(from, `Contoh: ${prefix}vintage iluser|bot`, id)
                    iluser.reply(from, mess.wait, id)
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)        
                    const puppeteer = require('puppeteer')
            try {
                (async () => {
                    const browser = await puppeteer.launch({
                        headless: true,
                    });
                    const page = await browser.newPage();
                    await page
                        .goto("https://textpro.me/create-realistic-vintage-style-light-bulb-1000.html", {
                            waitUntil: "networkidle2"
                        })
                        .then(async () => {
                            await page.type("#text-0", tmbk1);
                            await page.type("#text-1", tmbk2);
                            await page.click("#submit");
                            await new Promise(resolve => setTimeout(resolve, 3000));
                            const element = await page.$(
                                'div[class="thumbnail"] > img'
                                );
                            const text = await (await element.getProperty("src")).jsonValue();
                            const urlmp4 = ({
                                url: text
                            })
                            iluser.sendFileFromUrl(from, text, 'asu.jpg', `${mess.iklann}`, id)
                            browser.close();
            
                        })
                        .catch((err => {
                            console.log(err)
                            iluser.reply(from, 'error', id)
                        }))
            })();
            } catch (error) {
            console.log('error bang')
            iluser.reply(from, 'error', id)
            }
            }
            break
        case prefix+'logogame2': {
                    const logo2 = body.slice(11)
                    const logo21 = logo2.split('|')[0]
                    const logo22 = logo2.split('|')[1]
                    if (!logo2) return iluser.reply(from, `Contoh: ${prefix}logogame2 iluser|bot`, id)
                    iluser.reply(from, mess.wait, id)
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)        
                    const puppeteer = require('puppeteer')
            try {
                (async () => {
                    const browser = await puppeteer.launch({
                        headless: true,
                    });
                    const page = await browser.newPage();
                    await page
                        .goto("https://ephoto360.com/hieu-ung-chu/tao-logo-avatar-theo-phong-cach-mascot-364.html", {
                            waitUntil: "networkidle2"
                        })
                        .then(async () => {
                            await page.type("#text-0", logo21);
                            await page.type("#text-1", logo22);
                            await page.click("#submit");
                            await new Promise(resolve => setTimeout(resolve, 3000));
                            const element = await page.$(
                                'div[class="thumbnail"] > img'
                                );
                            const text = await (await element.getProperty("src")).jsonValue();
                            const urlmp4 = ({
                                url: text
                            })
                            iluser.sendFileFromUrl(from, text, 'asu.jpg', `${mess.iklann}`, id)
                            browser.close();
            
                        })
                        .catch((err => {
                            console.log(err)
                            iluser.reply(from, 'error', id)
                        }))
            })();
            } catch (error) {
            console.log('error bang')
            iluser.reply(from, 'error', id)
            }
            }
            break
        case prefix+'summer': {
                    const space = body.slice(8)
                    if (!space) return iluser.reply(from, `Contoh: ${prefix}summer iluser bot`, id)
                    iluser.reply(from, mess.wait, id)
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)       
                    const puppeteer = require('puppeteer')
            try {
                (async () => {
                    const browser = await puppeteer.launch({
                        headless: true,
                    });
                    const page = await browser.newPage();
                    await page
                        .goto("https://textpro.me/write-in-sand-summer-beach-free-online-991.html", {
                            waitUntil: "networkidle2"
                        })
                        .then(async () => {
                            await page.type("#text-0", space);
                            await page.click("#submit");
                            await new Promise(resolve => setTimeout(resolve, 3000));
                            const element = await page.$(
                                'div[class="thumbnail"] > img'
                                );
                            const text = await (await element.getProperty("src")).jsonValue();
                            const urlmp4 = ({
                                url: text
                            })
                            iluser.sendFileFromUrl(from, text, 'asu.jpg', `${mess.iklann}`, id)
                            browser.close();
            
                        })
                        .catch((err => {
                            console.log(err)
                            iluser.reply(from, 'error', id)
                        }))
            })();
            } catch (error) {
            console.log('error bang')
            iluser.reply(from, 'error', id)
            }
            }
            break
        case prefix+'blood':
        case prefix+'darah': {
                    const darah = body.slice(7)
                    if (!darah) return iluser.reply(from, `Contoh: ${prefix}darah iluser bot`, id)
                    iluser.reply(from, mess.wait, id)
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)        
                    const puppeteer = require('puppeteer')
            try {
                (async () => {
                    const browser = await puppeteer.launch({
                        headless: true,
                    });
                    const page = await browser.newPage();
                    await page
                        .goto("https://textpro.me/horror-blood-text-effect-online-883.html", {
                            waitUntil: "networkidle2"
                        })
                        .then(async () => {
                            await page.type("#text-0", darah);
                            await page.click("#submit");
                            await new Promise(resolve => setTimeout(resolve, 3000));
                            const element = await page.$(
                                'div[class="thumbnail"] > img'
                                );
                            const text = await (await element.getProperty("src")).jsonValue();
                            const urlmp4 = ({
                                url: text
                            })
                            iluser.sendFileFromUrl(from, text, 'asu.jpg', `${mess.iklann}`, id)
                            browser.close();
            
                        })
                        .catch((err => {
                            console.log(err)
                            iluser.reply(from, 'error', id)
                        }))
            })();
            } catch (error) {
            console.log('error bang')
            iluser.reply(from, 'error', id)
            }
            }
            break
        case prefix+'bw': {
                    const text1 = body.slice(4)
                    if (!text1) return iluser.reply(from, `Contoh: ${prefix}bw iluserbot`, id)
                    iluser.reply(from, mess.wait, id)
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)        
                    const puppeteer = require('puppeteer')
            try {
                (async () => {
                    const browser = await puppeteer.launch({
                        headless: true,
                    });
                    const page = await browser.newPage();
                    await page
                        .goto("https://textpro.me/double-exposure-text-effect-black-white-976.html", {
                            waitUntil: "networkidle2"
                        })
                        .then(async () => {
                            await page.type("#text-0", text1);
                            await page.click("#submit");
                            await new Promise(resolve => setTimeout(resolve, 3000));
                            const element = await page.$(
                                'div[class="thumbnail"] > img'
                                );
                            const text = await (await element.getProperty("src")).jsonValue();
                            const urlmp4 = ({
                                url: text
                            })
                            iluser.sendFileFromUrl(from, text, 'asu.jpg', `${mess.iklann}`, id)
                            browser.close();
            
                        })
                        .catch((err => {
                            console.log(err)
                            iluser.reply(from, 'error', id)
                        }))
            })();
            } catch (error) {
            console.log('error bang')
            iluser.reply(from, 'error', id)
            }
            }
            break
        case prefix+'dropwater': {
                    const hujan = body.slice(11)
                    if (!hujan) return iluser.reply(from, `Contoh: ${prefix}dropwater iluserbot`, id)
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)        
                    iluser.reply(from, mess.wait, id)
                    const puppeteer = require('puppeteer')
            try {
                (async () => {
                    const browser = await puppeteer.launch({
                        headless: true,
                    });
                    const page = await browser.newPage();
                    await page
                        .goto("https://textpro.me/dropwater-text-effect-872.html", {
                            waitUntil: "networkidle2"
                        })
                        .then(async () => {
                            await page.type("#text-0", hujan);
                            await page.click("#submit");
                            await new Promise(resolve => setTimeout(resolve, 3000));
                            const element = await page.$(
                                'div[class="thumbnail"] > img'
                                );
                            const text = await (await element.getProperty("src")).jsonValue();
                            const urlmp4 = ({
                                url: text
                            })
                            iluser.sendFileFromUrl(from, text, 'asu.jpg', `${mess.iklann}`, id)
                            browser.close();
            
                        })
                        .catch((err => {
                            console.log(err)
                            iluser.reply(from, 'error', id)
                        }))
            })();
            } catch (error) {
            console.log('error bang')
            iluser.reply(from, 'error', id)
            }
            }
            break
        case prefix+'heker': {
                    const heker = body.slice(7)
                    if (!heker) return iluser.reply(from, `Contoh: ${prefix}heker iluserbot`, id)
                    iluser.reply(from, mess.wait, id)
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)       
                    const puppeteer = require('puppeteer')
            try {
                (async () => {
                    const browser = await puppeteer.launch({
                        headless: true,
                    });
                    const page = await browser.newPage();
                    await page
                        .goto("https://textpro.me/matrix-style-text-effect-online-884.html", {
                            waitUntil: "networkidle2"
                        })
                        .then(async () => {
                            await page.type("#text-0", heker);
                            await page.click("#submit");
                            await new Promise(resolve => setTimeout(resolve, 3000));
                            const element = await page.$(
                                'div[class="thumbnail"] > img'
                                );
                            const text = await (await element.getProperty("src")).jsonValue();
                            const urlmp4 = ({
                                url: text
                            })
                            iluser.sendFileFromUrl(from, text, 'asu.jpg', `${mess.iklann}`, id)
                            browser.close();
            
                        })
                        .catch((err => {
                            console.log(err)
                            iluser.reply(from, 'error', id)
                        }))
            })();
            } catch (error) {
            console.log('error bang')
            iluser.reply(from, 'error', id)
            }
            }
            break
        case prefix+'neon': {
                    const text2 = body.slice(6)
                    if (!text2) return iluser.reply(from, `Contoh: ${prefix}neon iluserbot`, id)
                    iluser.reply(from, mess.wait, id)
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)        
                    const puppeteer = require('puppeteer')
            try {
                (async () => {
                    const browser = await puppeteer.launch({
                        headless: true,
                    });
                    const page = await browser.newPage();
                    await page
                        .goto("https://textpro.me/neon-text-effect-online-963.html", {
                            waitUntil: "networkidle2"
                        })
                        .then(async () => {
                            await page.type("#text-0", text2);
                            await page.click("#submit");
                            await new Promise(resolve => setTimeout(resolve, 3000));
                            const element = await page.$(
                                'div[class="thumbnail"] > img'
                                );
                            const text = await (await element.getProperty("src")).jsonValue();
                            const urlmp4 = ({
                                url: text
                            })
                            iluser.sendFileFromUrl(from, text, 'asu.jpg', `${mess.iklann}`, id)
                            browser.close();
            
                        })
                        .catch((err => {
                            console.log(err)
                            iluser.reply(from, 'error', id)
                        }))
            })();
            } catch (error) {
            console.log('error bang')
            iluser.reply(from, 'error', id)
            }
            }
            break
        case prefix+'firework': {
                    const text3 = body.slice(10)
                    if (!text3) return iluser.reply(from, `Contoh: ${prefix}firework iluserbot`, id)
                    iluser.reply(from, mess.wait, id)
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)        
                    const puppeteer = require('puppeteer')
            try {
                (async () => {
                    const browser = await puppeteer.launch({
                        headless: true,
                    });
                    const page = await browser.newPage();
                    await page
                        .goto("https://textpro.me/firework-sparkle-text-effect-930.html", {
                            waitUntil: "networkidle2"
                        })
                        .then(async () => {
                            await page.type("#text-0", text3);
                            await page.click("#submit");
                            await new Promise(resolve => setTimeout(resolve, 3000));
                            const element = await page.$(
                                'div[class="thumbnail"] > img'
                                );
                            const text = await (await element.getProperty("src")).jsonValue();
                            const urlmp4 = ({
                                url: text
                            })
                            iluser.sendFileFromUrl(from, text, 'asu.jpg', `${mess.iklann}`, id)
                            browser.close();
            
                        })
                        .catch((err => {
                            console.log(err)
                            iluser.reply(from, 'error', id)
                        }))
            })();
            } catch (error) {
            console.log('error bang')
            iluser.reply(from, 'error', id)
            }
            }
            break
       	case prefix+'pubg2': {
                    const pubg2 = body.slice(7)
                    if (!pubg2) return iluser.reply(from, `Contoh: ${prefix}pubg2 iluserbot`, id)
                    iluser.reply(from, mess.wait, id)
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)        
                    const puppeteer = require('puppeteer')
            try {
                (async () => {
                    const browser = await puppeteer.launch({
                        headless: true,
                    });
                    const page = await browser.newPage();
                    await page
                        .goto("https://ephoto360.com/tao-logo-pubg-truc-tuyen-mien-phi-714.html", {
                            waitUntil: "networkidle2"
                        })
                        .then(async () => {
                            await page.type("#text-0", pubg2);
                            await page.click("#submit");
                            await new Promise(resolve => setTimeout(resolve, 3000));
                            const element = await page.$(
                                'div[class="thumbnail"] > img'
                                );
                            const text = await (await element.getProperty("src")).jsonValue();
                            const urlmp4 = ({
                                url: text
                            })
                            iluser.sendFileFromUrl(from, text, 'asu.jpg', `${mess.iklann}`, id)
                            browser.close();
            
                        })
                        .catch((err => {
                            console.log(err)
                            iluser.reply(from, 'error', id)
                        }))
            })();
            } catch (error) {
            console.log('error bang')
            iluser.reply(from, 'error', id)
            }
            }
            break
        case prefix+'pubg1': {
                    const pubg1 = body.slice(7)
                    if (!pubg1) return iluser.reply(from, `Contoh: ${prefix}pubg1 iluserbot`, id)
                    iluser.reply(from, mess.wait, id)
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)        
                    const puppeteer = require('puppeteer')
            try {
                (async () => {
                    const browser = await puppeteer.launch({
                        headless: true,
                    });
                    const page = await browser.newPage();
                    await page
                        .goto("https://ephoto360.com/tao-logo-pubg-truc-tuyen-mien-phi-714.html", {
                            waitUntil: "networkidle2"
                        })
                        .then(async () => {
                            await page.click("#radio0-radio-c87fef3f338741be9153ad59020d1647",);
                            await page.type("#text-0", pubg1);
                            await page.click("#submit");
                            await new Promise(resolve => setTimeout(resolve, 3000));
                            const element = await page.$(
                                'div[class="thumbnail"] > img'
                                );
                            const text = await (await element.getProperty("src")).jsonValue();
                            const urlmp4 = ({
                                url: text
                            })
                            iluser.sendFileFromUrl(from, text, 'asu.jpg', `${mess.iklann}`, id)
                            browser.close();
            
                        })
                        .catch((err => {
                            console.log(err)
                            iluser.reply(from, 'error', id)
                        }))
            })();
            } catch (error) {
            console.log('error bang')
            iluser.reply(from, 'error', id)
            }
            }
            break
        case prefix+'logopink': {
                    const logo2 = body.slice(10)
                    const logo21 = logo2.split('|')[0]
                    const logo22 = logo2.split('|')[1]
                    if (!logo2) return iluser.reply(from, `Contoh: ${prefix}logopink iluser|bot`, id)
                    iluser.reply(from, mess.wait, id)  
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)      
                    const puppeteer = require('puppeteer')
            try {
                (async () => {
                    const browser = await puppeteer.launch({
                        headless: true,
                    });
                    const page = await browser.newPage();
                    await page
                        .goto("https://ephoto360.com/hieu-ung-chu/tao-logo-avatar-theo-phong-cach-mascot-364.html", {
                            waitUntil: "networkidle2"
                        })
                        .then(async () => {
                            await page.click("#radio0-radio-2d9ad95364a04b8f86f38a0501b08510",);
                            await page.type("#text-0", logo21);
                            await page.type("#text-1", logo22);
                            await page.click("#submit");
                            await new Promise(resolve => setTimeout(resolve, 3000));
                            const element = await page.$(
                                'div[class="thumbnail"] > img'
                                );
                            const text = await (await element.getProperty("src")).jsonValue();
                            const urlmp4 = ({
                                url: text
                            })
                            iluser.sendFileFromUrl(from, text, 'asu.jpg', `${mess.iklann}`, id)
                            browser.close();
            
                        })
                        .catch((err => {
                            console.log(err)
                            iluser.reply(from, 'error', id)
                        }))
            })();
            } catch (error) {
            console.log('error bang')
            iluser.reply(from, 'error', id)
            }
            }
            break
        case prefix+'logodemon': {
                    const logo1 = body.slice(11)
                    const logo11 = logo1.split('|')[0]
                    const logo12 = logo1.split('|')[1]
                    if (!logo1) return iluser.reply(from, `Contoh: ${prefix}logoneon iluser|bot`, id)
                    iluser.reply(from, mess.wait, id)   
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)     
                    const puppeteer = require('puppeteer')
            try {
                (async () => {
                    const browser = await puppeteer.launch({
                        headless: true,
                    });
                    const page = await browser.newPage();
                    await page
                        .goto("https://ephoto360.com/hieu-ung-chu/tao-logo-avatar-theo-phong-cach-mascot-364.html", {
                            waitUntil: "networkidle2"
                        })
                        .then(async () => {
                            await page.click("#radio0-radio-829e5eab721f42a08d08f75c83411f54",);
                            await page.type("#text-0", logo11);
                            await page.type("#text-1", logo12);
                            await page.click("#submit");
                            await new Promise(resolve => setTimeout(resolve, 3000));
                            const element = await page.$(
                                'div[class="thumbnail"] > img'
                                );
                            const text = await (await element.getProperty("src")).jsonValue();
                            const urlmp4 = ({
                                url: text
                            })
                            iluser.sendFileFromUrl(from, text, 'asu.jpg', `${mess.iklann}`, id)
                            browser.close();
            
                        })
                        .catch((err => {
                            console.log(err)
                            iluser.reply(from, 'error', id)
                        }))
            })();
            } catch (error) {
            console.log('error bang')
            iluser.reply(from, 'error', id)
            }
            }
            break
        case prefix+'drop': {
                    const babi = body.slice(6)
                    if (!babi) return iluser.reply(from, `Contoh: ${prefix}drop iluser bot`, id)
                    iluser.reply(from, mess.wait, id)   
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)     
                    const puppeteer = require('puppeteer')
            try {
                (async () => {
                    const browser = await puppeteer.launch({
                        headless: true,
                    });
                    const page = await browser.newPage();
                    await page
                        .goto("https://ephoto360.com/hieu-ung-viet-chu-len-cua-kinh-mua-tam-trang-dep-682.html", {
                            waitUntil: "networkidle2"
                        })
                        .then(async () => {
                            await page.type("#text-0", babi);
                            await page.click("#submit");
                            await new Promise(resolve => setTimeout(resolve, 5000));
                            const element = await page.$(
                                'div[class="thumbnail"] > img'
                                );
                            const text = await (await element.getProperty("src")).jsonValue();
                            const urlmp4 = ({
                                url: text
                            })
                            iluser.sendFileFromUrl(from, text, 'asu.jpg', `${mess.iklann}`, id)
                            browser.close();
            
                        })
                        .catch((err => {
                            console.log(err)
                            iluser.reply(from, 'error', id)
                        }))
            })();
            } catch (error) {
            console.log('error bang')
            iluser.reply(from, 'error', id)
            }
            }
            break
        case prefix+'awan': {
                    const awan = body.slice(6)
                    if (!awan) return iluser.reply(from, `Contoh: ${prefix}awan iluser bot`, id)
                    iluser.reply(from, mess.wait, id)  
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)      
                    const puppeteer = require('puppeteer')
            try {
                (async () => {
                    const browser = await puppeteer.launch({
                        headless: true,
                    });
                    const page = await browser.newPage();
                    await page
                        .goto("https://ephoto360.com/viet-chu-may-len-bau-troi-don-gian-va-doc-dao-723.html", {
                            waitUntil: "networkidle2"
                        })
                        .then(async () => {
                            await page.type("#text-0", awan);
                            await page.click("#submit");
                            await new Promise(resolve => setTimeout(resolve, 5000));
                            const element = await page.$(
                                'div[class="thumbnail"] > img'
                                );
                            const text = await (await element.getProperty("src")).jsonValue();
                            const urlmp4 = ({
                                url: text
                            })
                            iluser.sendFileFromUrl(from, text, 'asu.jpg', `${mess.iklann}`, id)
                            browser.close();
            
                        })
                        .catch((err => {
                            console.log(err)
                            iluser.reply(from, 'error', id)
                        }))
            })();
            } catch (error) {
            console.log('error bang')
            iluser.reply(from, 'error', id)
            }
            }
            break
        case prefix+'fbgold': {
                    const fbgold = body.slice(8)
                    if (!fbgold) return iluser.reply(from, `Contoh: ${prefix}fbgold iluser_BOT`, id)
                    iluser.reply(from, mess.wait, id)   
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)     
                    const puppeteer = require('puppeteer')
            try {
                (async () => {
                    const browser = await puppeteer.launch({
                        headless: true,
                    });
                    const page = await browser.newPage();
                    await page
                        .goto("https://ephoto360.com/tao-chung-nhan-nut-bac-nut-vang-online-485.html", {
                            waitUntil: "networkidle2"
                        })
                        .then(async () => {
                            await page.click("#radio0-radio-e10d3fa7ac6042aa8615ecf7686ad9af");
                            await page.type("#text-0", fbgold);
                            await page.click("#submit");
                            await new Promise(resolve => setTimeout(resolve, 3000));
                            const element = await page.$(
                                'div[class="thumbnail"] > img'
                                );
                            const text = await (await element.getProperty("src")).jsonValue();
                            const urlmp4 = ({
                                url: text
                            })
                            iluser.sendFileFromUrl(from, text, 'asu.jpg', `${mess.iklann}`, id)
                            browser.close();
            
                        })
                        .catch((err => {
                            console.log(err)
                            iluser.reply(from, 'error', id)
                        }))
            })();
            } catch (error) {
            console.log('error bang')
            iluser.reply(from, 'error', id)
            }
            }
            break
        case prefix+'iggold': {
                    const iggold = body.slice(8)
                    if (!iggold) return iluser.reply(from, `Contoh: ${prefix}iggold iluser_BOT`, id)
                    iluser.reply(from, mess.wait, id)    
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)    
                    const puppeteer = require('puppeteer')
            try {
                (async () => {
                    const browser = await puppeteer.launch({
                        headless: true,
                    });
                    const page = await browser.newPage();
                    await page
                        .goto("https://ephoto360.com/tao-chung-nhan-nut-bac-nut-vang-online-485.html", {
                            waitUntil: "networkidle2"
                        })
                        .then(async () => {
                            await page.click("#radio0-radio-4446d42af46342b79cf02a4213d23465");
                            await page.type("#text-0", iggold);
                            await page.click("#submit");
                            await new Promise(resolve => setTimeout(resolve, 3000));
                            const element = await page.$(
                                'div[class="thumbnail"] > img'
                                );
                            const text = await (await element.getProperty("src")).jsonValue();
                            const urlmp4 = ({
                                url: text
                            })
                            iluser.sendFileFromUrl(from, text, 'asu.jpg', `${mess.iklann}`, id)
                            browser.close();
            
                        })
                        .catch((err => {
                            console.log(err)
                            iluser.reply(from, 'error', id)
                        }))
            })();
            } catch (error) {
            console.log('error bang')
            iluser.reply(from, 'error', id)
            }
            }
            break
        case prefix+'twgold': {
                    const twgold = body.slice(8)
                    if (!twgold) return iluser.reply(from, `Contoh: ${prefix}twgold iluser_BOT`, id)
                    iluser.reply(from, mess.wait, id)
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)        
                    const puppeteer = require('puppeteer')
            try {
                (async () => {
                    const browser = await puppeteer.launch({
                        headless: true,
                    });
                    const page = await browser.newPage();
                    await page
                        .goto("https://ephoto360.com/tao-chung-nhan-nut-bac-nut-vang-online-485.html", {
                            waitUntil: "networkidle2"
                        })
                        .then(async () => {
                            await page.click("#radio0-radio-a410bdff021441f78bc7e9deb8257581");
                            await page.type("#text-0", twgold);
                            await page.click("#submit");
                            await new Promise(resolve => setTimeout(resolve, 3000));
                            const element = await page.$(
                                'div[class="thumbnail"] > img'
                                );
                            const text = await (await element.getProperty("src")).jsonValue();
                            const urlmp4 = ({
                                url: text
                            })
                            iluser.sendFileFromUrl(from, text, 'asu.jpg', `${mess.iklann}`, id)
                            browser.close();
            
                        })
                        .catch((err => {
                            console.log(err)
                            iluser.reply(from, 'error', id)
                        }))
            })();
            } catch (error) {
            console.log('error bang')
            iluser.reply(from, 'error', id)
            }
            }
            break
        case prefix+'ytgold': {
                    const ytgold = body.slice(8)
                    if (!ytgold) return iluser.reply(from, `Contoh: ${prefix}ytgold iluser_BOT`, id)
                    iluser.reply(from, mess.wait, id)
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)        
                    const puppeteer = require('puppeteer')
            try {
                (async () => {
                    const browser = await puppeteer.launch({
                        headless: true,
                    });
                    const page = await browser.newPage();
                    await page
                        .goto("https://ephoto360.com/tao-chung-nhan-nut-bac-nut-vang-online-485.html", {
                            waitUntil: "networkidle2"
                        })
                        .then(async () => {
                            await page.click("#radio0-radio-4dfba8d39a3e4e22843ab840fd02d3df");
                            await page.type("#text-0", ytgold);
                            await page.click("#submit");
                            await new Promise(resolve => setTimeout(resolve, 3000));
                            const element = await page.$(
                                'div[class="thumbnail"] > img'
                                );
                            const text = await (await element.getProperty("src")).jsonValue();
                            const urlmp4 = ({
                                url: text
                            })
                            iluser.sendFileFromUrl(from, text, 'asu.jpg', `${mess.iklann}`, id)
                            browser.close();
            
                        })
                        .catch((err => {
                            console.log(err)
                            iluser.reply(from, 'error', id)
                        }))
            })();
            } catch (error) {
            console.log('error bang')
            iluser.reply(from, 'error', id)
            }
            }
            break
        case prefix+'fbsilver': {
                    const fbsilver = body.slice(10)
                    if (!fbsilver) return iluser.reply(from, `Contoh: ${prefix}fbsilver iluser_BOT`, id)
                    iluser.reply(from, mess.wait, id)   
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)     
                    const puppeteer = require('puppeteer')
            try {
                (async () => {
                    const browser = await puppeteer.launch({
                        headless: true,
                    });
                    const page = await browser.newPage();
                    await page
                        .goto("https://ephoto360.com/tao-chung-nhan-nut-bac-nut-vang-online-485.html", {
                            waitUntil: "networkidle2"
                        })
                        .then(async () => {
                            await page.click("#radio0-radio-b8cc1a5fd9954d2a91311785947cfdd0");
                            await page.type("#text-0", fbsilver);
                            await page.click("#submit");
                            await new Promise(resolve => setTimeout(resolve, 3000));
                            const element = await page.$(
                                'div[class="thumbnail"] > img'
                                );
                            const text = await (await element.getProperty("src")).jsonValue();
                            const urlmp4 = ({
                                url: text
                            })
                            iluser.sendFileFromUrl(from, text, 'asu.jpg', `${mess.iklann}`, id)
                            browser.close();
            
                        })
                        .catch((err => {
                            console.log(err)
                            iluser.reply(from, 'error', id)
                        }))
            })();
            } catch (error) {
            console.log('error bang')
            iluser.reply(from, 'error', id)
            }
            }
            break
        case prefix+'igsilver': {
                    const igsilver = body.slice(10)
                    if (!igsilver) return iluser.reply(from, `Contoh: ${prefix}igsilver iluser_BOT`, id)
                    iluser.reply(from, mess.wait, id)  
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)      
                    const puppeteer = require('puppeteer')
            try {
                (async () => {
                    const browser = await puppeteer.launch({
                        headless: true,
                    });
                    const page = await browser.newPage();
                    await page
                        .goto("https://ephoto360.com/tao-chung-nhan-nut-bac-nut-vang-online-485.html", {
                            waitUntil: "networkidle2"
                        })
                        .then(async () => {
                            await page.click("#radio0-radio-1be3b2a116e4485ebcec43dd10baa8a5");
                            await page.type("#text-0", igsilver);
                            await page.click("#submit");
                            await new Promise(resolve => setTimeout(resolve, 3000));
                            const element = await page.$(
                                'div[class="thumbnail"] > img'
                                );
                            const text = await (await element.getProperty("src")).jsonValue();
                            const urlmp4 = ({
                                url: text
                            })
                            iluser.sendFileFromUrl(from, text, 'asu.jpg', `${mess.iklann}`, id)
                            browser.close();
            
                        })
                        .catch((err => {
                            console.log(err)
                            iluser.reply(from, 'error', id)
                        }))
            })();
            } catch (error) {
            console.log('error bang')
            iluser.reply(from, 'error', id)
            }
            }
            break
        case prefix+'twsilver': {
                    const twsilver = body.slice(10)
                    if (!twsilver) return iluser.reply(from, `Contoh: ${prefix}twsilver iluser_BOT`, id)
                    iluser.reply(from, mess.wait, id)  
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)      
                    const puppeteer = require('puppeteer')
            try {
                (async () => {
                    const browser = await puppeteer.launch({
                        headless: true,
                    });
                    const page = await browser.newPage();
                    await page
                        .goto("https://ephoto360.com/tao-chung-nhan-nut-bac-nut-vang-online-485.html", {
                            waitUntil: "networkidle2"
                        })
                        .then(async () => {
                            await page.click("#radio0-radio-8a5b4bb53cb8441ba806e69e00cf40b6");
                            await page.type("#text-0", twsilver);
                            await page.click("#submit");
                            await new Promise(resolve => setTimeout(resolve, 3000));
                            const element = await page.$(
                                'div[class="thumbnail"] > img'
                                );
                            const text = await (await element.getProperty("src")).jsonValue();
                            const urlmp4 = ({
                                url: text
                            })
                            iluser.sendFileFromUrl(from, text, 'asu.jpg', `${mess.iklann}`, id)
                            browser.close();
            
                        })
                        .catch((err => {
                            console.log(err)
                            iluser.reply(from, 'error', id)
                        }))
            })();
            } catch (error) {
            console.log('error bang')
            iluser.reply(from, 'error', id)
            }
            }
            break
        case prefix+'ytsilver': {
                    const ytsilver = body.slice(10)
                    if (!ytsilver) return iluser.reply(from, `Contoh: ${prefix}ytsilver iluser_BOT`, id)
                    iluser.reply(from, mess.wait, id)  
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)      
                    const puppeteer = require('puppeteer')
            try {
                (async () => {
                    const browser = await puppeteer.launch({
                        headless: true,
                    });
                    const page = await browser.newPage();
                    await page
                        .goto("https://ephoto360.com/tao-chung-nhan-nut-bac-nut-vang-online-485.html", {
                            waitUntil: "networkidle2"
                        })
                        .then(async () => {
                            await page.click("#radio0-radio-a53b07c2e8354a16b5a14e34bfbe666f");
                            await page.type("#text-0", ytsilver);
                            await page.click("#submit");
                            await new Promise(resolve => setTimeout(resolve, 3000));
                            const element = await page.$(
                                'div[class="thumbnail"] > img'
                                );
                            const text = await (await element.getProperty("src")).jsonValue();
                            const urlmp4 = ({
                                url: text
                            })
                            iluser.sendFileFromUrl(from, text, 'asu.jpg', `${mess.iklann}`, id)
                            browser.close();
            
                        })
                        .catch((err => {
                            console.log(err)
                            iluser.reply(from, 'error', id)
                        }))
            })();
            } catch (error) {
            console.log('error bang')
            iluser.reply(from, 'error', id)
            }
            }
            break
        case prefix+'codbanner1': {
                    const codbanner1 = body.slice(12)
                    if (!codbanner1) return iluser.reply(from, `Contoh: ${prefix}codbanner1 iluser_BOT`, id)
                    iluser.reply(from, mess.wait, id)  
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)      
                    const puppeteer = require('puppeteer')
            try {
                (async () => {
                    const browser = await puppeteer.launch({
                        headless: true,
                    });
                    const page = await browser.newPage();
                    await page
                        .goto("https://ephoto360.com/tao-banner-youtube-call-of-duty-warzone-mien-phi-614.html", {
                            waitUntil: "networkidle2"
                        })
                        .then(async () => {
                            await page.click("#radio0-radio-182a06fa03e04c26b1ebfb9e46f3255a");
                            await page.type("#text-0", codbanner1);
                            await page.click("#submit");
                            await new Promise(resolve => setTimeout(resolve, 3000));
                            const element = await page.$(
                                'div[class="thumbnail"] > img'
                                );
                            const text = await (await element.getProperty("src")).jsonValue();
                            const urlmp4 = ({
                                url: text
                            })
                            iluser.sendFileFromUrl(from, text, 'asu.jpg', `${mess.iklann}`, id)
                            browser.close();
            
                        })
                        .catch((err => {
                            console.log(err)
                            iluser.reply(from, 'error', id)
                        }))
            })();
            } catch (error) {
            console.log('error bang')
            iluser.reply(from, 'error', id)
            }
            }
            break
    case prefix+'codbanner2': {
                    const codbanner2 = body.slice(12)
                    if (!codbanner2) return iluser.reply(from, `Contoh: ${prefix}codbanner2 iluser_BOT`, id)
                    iluser.reply(from, mess.wait, id)  
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)      
                    const puppeteer = require('puppeteer')
            try {
                (async () => {
                    const browser = await puppeteer.launch({
                        headless: true,
                    });
                    const page = await browser.newPage();
                    await page
                        .goto("https://ephoto360.com/tao-banner-youtube-call-of-duty-warzone-mien-phi-614.html", {
                            waitUntil: "networkidle2"
                        })
                        .then(async () => {
                            await page.click("#radio0-radio-8b1be550f6f443d8bb2358403fc079db");
                            await page.type("#text-0", codbanner2);
                            await page.click("#submit");
                            await new Promise(resolve => setTimeout(resolve, 3000));
                            const element = await page.$(
                                'div[class="thumbnail"] > img'
                                );
                            const text = await (await element.getProperty("src")).jsonValue();
                            const urlmp4 = ({
                                url: text
                            })
                            iluser.sendFileFromUrl(from, text, 'asu.jpg', `${mess.iklann}`, id)
                            browser.close();
            
                        })
                        .catch((err => {
                            console.log(err)
                            iluser.reply(from, 'error', id)
                        }))
            })();
            } catch (error) {
            console.log('error bang')
            iluser.reply(from, 'error', id)
            }
            }
            break
    case prefix+'codbanner3': {
                    const codbanner3 = body.slice(12)
                    if (!codbanner3) return iluser.reply(from, `Contoh: ${prefix}codbanner3 iluser_BOT`, id)
                    iluser.reply(from, mess.wait, id)  
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)      
                    const puppeteer = require('puppeteer')
            try {
                (async () => {
                    const browser = await puppeteer.launch({
                        headless: true,
                    });
                    const page = await browser.newPage();
                    await page
                        .goto("https://ephoto360.com/tao-banner-youtube-call-of-duty-warzone-mien-phi-614.html", {
                            waitUntil: "networkidle2"
                        })
                        .then(async () => {
                            await page.click("#radio0-radio-23f570de58c94cbb9349d1a06cd5fa1c");
                            await page.type("#text-0", codbanner3);
                            await page.click("#submit");
                            await new Promise(resolve => setTimeout(resolve, 3000));
                            const element = await page.$(
                                'div[class="thumbnail"] > img'
                                );
                            const text = await (await element.getProperty("src")).jsonValue();
                            const urlmp4 = ({
                                url: text
                            })
                            iluser.sendFileFromUrl(from, text, 'asu.jpg', `${mess.iklann}`, id)
                            browser.close();
            
                        })
                        .catch((err => {
                            console.log(err)
                            iluser.reply(from, 'error', id)
                        }))
            })();
            } catch (error) {
            console.log('error bang')
            iluser.reply(from, 'error', id)
            }
            }
            break
    case prefix+'codbanner4': {
                    const codbanner4 = body.slice(12)
                    if (!codbanner4) return iluser.reply(from, `Contoh: ${prefix}codbanner4 iluser_BOT`, id)
                    iluser.reply(from, mess.wait, id)  
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)      
                    const puppeteer = require('puppeteer')
            try {
                (async () => {
                    const browser = await puppeteer.launch({
                        headless: true,
                    });
                    const page = await browser.newPage();
                    await page
                        .goto("https://ephoto360.com/tao-banner-youtube-call-of-duty-warzone-mien-phi-614.html", {
                            waitUntil: "networkidle2"
                        })
                        .then(async () => {
                            await page.click("#radio0-radio-6d3c21b6fb414bbeb794a899315ef16a");
                            await page.type("#text-0", codbanner4);
                            await page.click("#submit");
                            await new Promise(resolve => setTimeout(resolve, 3000));
                            const element = await page.$(
                                'div[class="thumbnail"] > img'
                                );
                            const text = await (await element.getProperty("src")).jsonValue();
                            const urlmp4 = ({
                                url: text
                            })
                            iluser.sendFileFromUrl(from, text, 'asu.jpg', `${mess.iklann}`, id)
                            browser.close();
            
                        })
                        .catch((err => {
                            console.log(err)
                            iluser.reply(from, 'error', id)
                        }))
            })();
            } catch (error) {
            console.log('error bang')
            iluser.reply(from, 'error', id)
            }
            }
            break
    case prefix+'ffcover1': {
                    const ffcover1 = body.slice(10)
                    if (!ffcover1) return iluser.reply(from, `Contoh: ${prefix}ffcover1 iluser_BOT`, id)
                    iluser.reply(from, mess.wait, id)  
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)      
                    const puppeteer = require('puppeteer')
            try {
                (async () => {
                    const browser = await puppeteer.launch({
                        headless: true,
                    });
                    const page = await browser.newPage();
                    await page
                        .goto("https://ephoto360.com/tao-anh-bia-cover-game-free-fire-voi-ten-cua-ban-644.html", {
                            waitUntil: "networkidle2"
                        })
                        .then(async () => {
                            await page.click("#radio0-radio-18e72a21196c490eaf1d602c21db2aad");
                            await page.type("#text-0", ffcover1);
                            await page.click("#submit");
                            await new Promise(resolve => setTimeout(resolve, 3000));
                            const element = await page.$(
                                'div[class="thumbnail"] > img'
                                );
                            const text = await (await element.getProperty("src")).jsonValue();
                            const urlmp4 = ({
                                url: text
                            })
                            iluser.sendFileFromUrl(from, text, 'asu.jpg', `${mess.iklann}`, id)
                            browser.close();
            
                        })
                        .catch((err => {
                            console.log(err)
                            iluser.reply(from, 'error', id)
                        }))
            })();
            } catch (error) {
            console.log('error bang')
            iluser.reply(from, 'error', id)
            }
            }
            break
    case prefix+'ffcover2': {
                    const ffcover2 = body.slice(10)
                    if (!ffcover2) return iluser.reply(from, `Contoh: ${prefix}ffcover2 iluser_BOT`, id)
                    iluser.reply(from, mess.wait, id)  
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)      
                    const puppeteer = require('puppeteer')
            try {
                (async () => {
                    const browser = await puppeteer.launch({
                        headless: true,
                    });
                    const page = await browser.newPage();
                    await page
                        .goto("https://ephoto360.com/tao-anh-bia-cover-game-free-fire-voi-ten-cua-ban-644.html", {
                            waitUntil: "networkidle2"
                        })
                        .then(async () => {
                            await page.click("#radio0-radio-128c11e9903a46c8920f545e8c5dcf44");
                            await page.type("#text-0", ffcover2);
                            await page.click("#submit");
                            await new Promise(resolve => setTimeout(resolve, 3000));
                            const element = await page.$(
                                'div[class="thumbnail"] > img'
                                );
                            const text = await (await element.getProperty("src")).jsonValue();
                            const urlmp4 = ({
                                url: text
                            })
                            iluser.sendFileFromUrl(from, text, 'asu.jpg', `${mess.iklann}`, id)
                            browser.close();
            
                        })
                        .catch((err => {
                            console.log(err)
                            iluser.reply(from, 'error', id)
                        }))
            })();
            } catch (error) {
            console.log('error bang')
            iluser.reply(from, 'error', id)
            }
            }
            break
    case prefix+'ffcover3': {
                    const ffcover3 = body.slice(10)
                    if (!ffcover3) return iluser.reply(from, `Contoh: ${prefix}ffcover3 iluser_BOT`, id)
                    iluser.reply(from, mess.wait, id)  
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)      
                    const puppeteer = require('puppeteer')
            try {
                (async () => {
                    const browser = await puppeteer.launch({
                        headless: true,
                    });
                    const page = await browser.newPage();
                    await page
                        .goto("https://ephoto360.com/tao-anh-bia-cover-game-free-fire-voi-ten-cua-ban-644.html", {
                            waitUntil: "networkidle2"
                        })
                        .then(async () => {
                            await page.click("#radio0-radio-445f01325cf04e149b82d85eea600b3d");
                            await page.type("#text-0", ffcover3);
                            await page.click("#submit");
                            await new Promise(resolve => setTimeout(resolve, 3000));
                            const element = await page.$(
                                'div[class="thumbnail"] > img'
                                );
                            const text = await (await element.getProperty("src")).jsonValue();
                            const urlmp4 = ({
                                url: text
                            })
                            iluser.sendFileFromUrl(from, text, 'asu.jpg', `${mess.iklann}`, id)
                            browser.close();
            
                        })
                        .catch((err => {
                            console.log(err)
                            iluser.reply(from, 'error', id)
                        }))
            })();
            } catch (error) {
            console.log('error bang')
            iluser.reply(from, 'error', id)
            }
            }
            break
    case prefix+'ffcover4': {
                    const ffcover4 = body.slice(10)
                    if (!ffcover4) return iluser.reply(from, `Contoh: ${prefix}ffcover4 iluser_BOT`, id)
                    iluser.reply(from, mess.wait, id)  
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)      
                    const puppeteer = require('puppeteer')
            try {
                (async () => {
                    const browser = await puppeteer.launch({
                        headless: true,
                    });
                    const page = await browser.newPage();
                    await page
                        .goto("https://ephoto360.com/tao-anh-bia-cover-game-free-fire-voi-ten-cua-ban-644.html", {
                            waitUntil: "networkidle2"
                        })
                        .then(async () => {
                            await page.click("#radio0-radio-beb962fc3aaf42788a118668f2a60f32");
                            await page.type("#text-0", ffcover4);
                            await page.click("#submit");
                            await new Promise(resolve => setTimeout(resolve, 3000));
                            const element = await page.$(
                                'div[class="thumbnail"] > img'
                                );
                            const text = await (await element.getProperty("src")).jsonValue();
                            const urlmp4 = ({
                                url: text
                            })
                            iluser.sendFileFromUrl(from, text, 'asu.jpg', `${mess.iklann}`, id)
                            browser.close();
            
                        })
                        .catch((err => {
                            console.log(err)
                            iluser.reply(from, 'error', id)
                        }))
            })();
            } catch (error) {
            console.log('error bang')
            iluser.reply(from, 'error', id)
            }
            }
            break
    case prefix+'ffcover5': {
                    const ffcover5 = body.slice(10)
                    if (!ffcover5) return iluser.reply(from, `Contoh: ${prefix}ffcover5 iluser_BOT`, id)
                    iluser.reply(from, mess.wait, id)  
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)      
                    const puppeteer = require('puppeteer')
            try {
                (async () => {
                    const browser = await puppeteer.launch({
                        headless: true,
                    });
                    const page = await browser.newPage();
                    await page
                        .goto("https://ephoto360.com/tao-anh-bia-cover-game-free-fire-voi-ten-cua-ban-644.html", {
                            waitUntil: "networkidle2"
                        })
                        .then(async () => {
                            await page.click("#radio0-radio-8738b5a3aaaa4c79954549e91e467194");
                            await page.type("#text-0", ffcover5);
                            await page.click("#submit");
                            await new Promise(resolve => setTimeout(resolve, 3000));
                            const element = await page.$(
                                'div[class="thumbnail"] > img'
                                );
                            const text = await (await element.getProperty("src")).jsonValue();
                            const urlmp4 = ({
                                url: text
                            })
                            iluser.sendFileFromUrl(from, text, 'asu.jpg', `${mess.iklann}`, id)
                            browser.close();
            
                        })
                        .catch((err => {
                            console.log(err)
                            iluser.reply(from, 'error', id)
                        }))
            })();
            } catch (error) {
            console.log('error bang')
            iluser.reply(from, 'error', id)
            }
            }
            break
    case prefix+'ffcover6': {
                    const ffcover6 = body.slice(10)
                    if (!ffcover6) return iluser.reply(from, `Contoh: ${prefix}ffcover6 iluser_BOT`, id)
                    iluser.reply(from, mess.wait, id)  
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)      
                    const puppeteer = require('puppeteer')
            try {
                (async () => {
                    const browser = await puppeteer.launch({
                        headless: true,
                    });
                    const page = await browser.newPage();
                    await page
                        .goto("https://ephoto360.com/tao-anh-bia-cover-game-free-fire-voi-ten-cua-ban-644.html", {
                            waitUntil: "networkidle2"
                        })
                        .then(async () => {
                            await page.click("#radio0-radio-5e1ee0f40a7c490882cef86d9d10b5d9");
                            await page.type("#text-0", ffcover6);
                            await page.click("#submit");
                            await new Promise(resolve => setTimeout(resolve, 3000));
                            const element = await page.$(
                                'div[class="thumbnail"] > img'
                                );
                            const text = await (await element.getProperty("src")).jsonValue();
                            const urlmp4 = ({
                                url: text
                            })
                            iluser.sendFileFromUrl(from, text, 'asu.jpg', `${mess.iklann}`, id)
                            browser.close();
            
                        })
                        .catch((err => {
                            console.log(err)
                            iluser.reply(from, 'error', id)
                        }))
            })();
            } catch (error) {
            console.log('error bang')
            iluser.reply(from, 'error', id)
            }
            }
            break
    case prefix+'neonlogo1': {
                    const neonlogo1 = body.slice(11)
                    if (!neonlogo1) return iluser.reply(from, `Contoh: ${prefix}neonlogo1 iluser_BOT`, id)
                    iluser.reply(from, mess.wait, id)  
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)      
                    const puppeteer = require('puppeteer')
            try {
                (async () => {
                    const browser = await puppeteer.launch({
                        headless: true,
                    });
                    const page = await browser.newPage();
                    await page
                        .goto("https://en.ephoto360.com/create-blue-neon-logo-online-507.html", {
                            waitUntil: "networkidle2"
                        })
                        .then(async () => {
                            await page.click("#radio0-radio-2cb0949e9e734e46b149e7e3927ba535");
                            await page.type("#text-0", neonlogo1);
                            await page.click("#submit");
                            await new Promise(resolve => setTimeout(resolve, 3000));
                            const element = await page.$(
                                'div[class="thumbnail"] > img'
                                );
                            const text = await (await element.getProperty("src")).jsonValue();
                            const urlmp4 = ({
                                url: text
                            })
                            iluser.sendFileFromUrl(from, text, 'asu.jpg', `${mess.iklann}`, id)
                            browser.close();
            
                        })
                        .catch((err => {
                            console.log(err)
                            iluser.reply(from, 'error', id)
                        }))
            })();
            } catch (error) {
            console.log('error bang')
            iluser.reply(from, 'error', id)
            }
            }
            break
    case prefix+'neonlogo2': {
                    const neonlogo2 = body.slice(11)
                    if (!neonlogo2) return iluser.reply(from, `Contoh: ${prefix}neonlogo2 iluser_BOT`, id)
                    iluser.reply(from, mess.wait, id)  
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)      
                    const puppeteer = require('puppeteer')
            try {
                (async () => {
                    const browser = await puppeteer.launch({
                        headless: true,
                    });
                    const page = await browser.newPage();
                    await page
                        .goto("https://en.ephoto360.com/create-blue-neon-logo-online-507.html", {
                            waitUntil: "networkidle2"
                        })
                        .then(async () => {
                            await page.click("#radio0-radio-6e80d16485bd412fae4b36c09a9fc6ad");
                            await page.type("#text-0", neonlogo2);
                            await page.click("#submit");
                            await new Promise(resolve => setTimeout(resolve, 3000));
                            const element = await page.$(
                                'div[class="thumbnail"] > img'
                                );
                            const text = await (await element.getProperty("src")).jsonValue();
                            const urlmp4 = ({
                                url: text
                            })
                            iluser.sendFileFromUrl(from, text, 'asu.jpg', `${mess.iklann}`, id)
                            browser.close();
            
                        })
                        .catch((err => {
                            console.log(err)
                            iluser.reply(from, 'error', id)
                        }))
            })();
            } catch (error) {
            console.log('error bang')
            iluser.reply(from, 'error', id)
            }
            }
            break
    case prefix+'neonlogo3': {
                    const neonlogo3 = body.slice(11)
                    if (!neonlogo3) return iluser.reply(from, `Contoh: ${prefix}neonlogo3 iluser_BOT`, id)
                    iluser.reply(from, mess.wait, id)  
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)      
                    const puppeteer = require('puppeteer')
            try {
                (async () => {
                    const browser = await puppeteer.launch({
                        headless: true,
                    });
                    const page = await browser.newPage();
                    await page
                        .goto("https://en.ephoto360.com/create-blue-neon-logo-online-507.html", {
                            waitUntil: "networkidle2"
                        })
                        .then(async () => {
                            await page.click("#radio0-radio-f81ef05283f946a3bbbc4ce2653f735e");
                            await page.type("#text-0", neonlogo3);
                            await page.click("#submit");
                            await new Promise(resolve => setTimeout(resolve, 3000));
                            const element = await page.$(
                                'div[class="thumbnail"] > img'
                                );
                            const text = await (await element.getProperty("src")).jsonValue();
                            const urlmp4 = ({
                                url: text
                            })
                            iluser.sendFileFromUrl(from, text, 'asu.jpg', `${mess.iklann}`, id)
                            browser.close();
            
                        })
                        .catch((err => {
                            console.log(err)
                            iluser.reply(from, 'error', id)
                        }))
            })();
            } catch (error) {
            console.log('error bang')
            iluser.reply(from, 'error', id)
            }
            }
            break
    case prefix+'neonlogo4': {
                    const neonlogo4 = body.slice(11)
                    if (!neonlogo4) return iluser.reply(from, `Contoh: ${prefix}neonlogo4 iluser_BOT`, id)
                    iluser.reply(from, mess.wait, id)  
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)      
                    const puppeteer = require('puppeteer')
            try {
                (async () => {
                    const browser = await puppeteer.launch({
                        headless: true,
                    });
                    const page = await browser.newPage();
                    await page
                        .goto("https://en.ephoto360.com/create-blue-neon-logo-online-507.html", {
                            waitUntil: "networkidle2"
                        })
                        .then(async () => {
                            await page.click("#radio0-radio-2bea561a11304a3ebd4b1533cd0675d1");
                            await page.type("#text-0", neonlogo4);
                            await page.click("#submit");
                            await new Promise(resolve => setTimeout(resolve, 3000));
                            const element = await page.$(
                                'div[class="thumbnail"] > img'
                                );
                            const text = await (await element.getProperty("src")).jsonValue();
                            const urlmp4 = ({
                                url: text
                            })
                            iluser.sendFileFromUrl(from, text, 'asu.jpg', `${mess.iklann}`, id)
                            browser.close();
            
                        })
                        .catch((err => {
                            console.log(err)
                            iluser.reply(from, 'error', id)
                        }))
            })();
            } catch (error) {
            console.log('error bang')
            iluser.reply(from, 'error', id)
            }
            }
            break
    case prefix+'neonlogo5': {
                    const neonlogo5 = body.slice(11)
                    if (!neonlogo5) return iluser.reply(from, `Contoh: ${prefix}neonlogo5 iluser_BOT`, id)
                    iluser.reply(from, mess.wait, id)  
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)      
                    const puppeteer = require('puppeteer')
            try {
                (async () => {
                    const browser = await puppeteer.launch({
                        headless: true,
                    });
                    const page = await browser.newPage();
                    await page
                        .goto("https://en.ephoto360.com/create-blue-neon-logo-online-507.html", {
                            waitUntil: "networkidle2"
                        })
                        .then(async () => {
                            await page.click("#radio0-radio-63e2a3f285ce4973bdcbcf294542a8f2");
                            await page.type("#text-0", neonlogo5);
                            await page.click("#submit");
                            await new Promise(resolve => setTimeout(resolve, 3000));
                            const element = await page.$(
                                'div[class="thumbnail"] > img'
                                );
                            const text = await (await element.getProperty("src")).jsonValue();
                            const urlmp4 = ({
                                url: text
                            })
                            iluser.sendFileFromUrl(from, text, 'asu.jpg', `${mess.iklann}`, id)
                            browser.close();
            
                        })
                        .catch((err => {
                            console.log(err)
                            iluser.reply(from, 'error', id)
                        }))
            })();
            } catch (error) {
            console.log('error bang')
            iluser.reply(from, 'error', id)
            }
            }
            break
    case prefix+'neonlogo6': {
                    const neonlogo6 = body.slice(11)
                    if (!neonlogo6) return iluser.reply(from, `Contoh: ${prefix}neonlogo6 iluser_BOT`, id)
                    iluser.reply(from, mess.wait, id)  
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)      
                    const puppeteer = require('puppeteer')
            try {
                (async () => {
                    const browser = await puppeteer.launch({
                        headless: true,
                    });
                    const page = await browser.newPage();
                    await page
                        .goto("https://en.ephoto360.com/create-blue-neon-logo-online-507.html", {
                            waitUntil: "networkidle2"
                        })
                        .then(async () => {
                            await page.click("#radio0-radio-b50e661800794acda097aeb44315c29a");
                            await page.type("#text-0", neonlogo6);
                            await page.click("#submit");
                            await new Promise(resolve => setTimeout(resolve, 3000));
                            const element = await page.$(
                                'div[class="thumbnail"] > img'
                                );
                            const text = await (await element.getProperty("src")).jsonValue();
                            const urlmp4 = ({
                                url: text
                            })
                            iluser.sendFileFromUrl(from, text, 'asu.jpg', `${mess.iklann}`, id)
                            browser.close();
            
                        })
                        .catch((err => {
                            console.log(err)
                            iluser.reply(from, 'error', id)
                        }))
            })();
            } catch (error) {
            console.log('error bang')
            iluser.reply(from, 'error', id)
            }
            }
            break

    case prefix+'catatan': {
                    const test = body.slice(9)
                    if (!test) return iluser.reply(from, `Contoh: ${prefix}catatan iluser_BOT`, id)
                    iluser.reply(from, mess.wait, id)  
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)      
                    const puppeteer = require('puppeteer')
            try {
                (async () => {
                    const browser = await puppeteer.launch({
                        headless: true,
                    });
                    const page = await browser.newPage();
                    await page
                        .goto("https://thiepmung.com/thong-diep-yeu-thuong/card/tao-luu-but-tren-so-352.html", {
                            waitUntil: "networkidle2"
                        })
                        .then(async () => {
                            await page.type("#text-0", test);
                            await page.click("#submit");
                            await new Promise(resolve => setTimeout(resolve, 3000));
                            const element = await page.$(
                                'div[class="thumbnail"] > img'
                                );
                            const text = await (await element.getProperty("src")).jsonValue();
                            const urlmp4 = ({
                                url: text
                            })
                            iluser.sendFileFromUrl(from, text, 'asu.jpg', `${mess.iklann}`, id)
                            browser.close();
            
                        })
                        .catch((err => {
                            console.log(err)
                            iluser.reply(from, 'error', id)
                        }))
            })();
            } catch (error) {
            console.log('error bang')
            iluser.reply(from, 'error', id)
            }
            }
            break
    case prefix+'neonlight': {
                    const tes1 = body.slice(11)
                    if (!tes1) return iluser.reply(from, `Contoh: ${prefix}neonlight iluser bot`, id)
                    iluser.reply(from, mess.wait, id)       
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)
                    const puppeteer = require('puppeteer')
            try {
                (async () => {
                    const browser = await puppeteer.launch({
                        headless: true,
                    });
                    const page = await browser.newPage();
                    await page
                        .goto("https://textpro.me/create-a-futuristic-technology-neon-light-text-effect-1006.html", {
                            waitUntil: "networkidle2"
                        })
                        .then(async () => {
                            //await page.click("#radio0-radio-a53b07c2e8354a16b5a14e34bfbe666f");
                            await page.type("#text-0", tes1);
                            await page.click("#submit");
                            await new Promise(resolve => setTimeout(resolve, 3000));
                            const element = await page.$(
                                'div[class="thumbnail"] > img'
                                );
                            const text = await (await element.getProperty("src")).jsonValue();
                            const urlmp4 = ({
                                url: text
                            })
                            iluser.sendFileFromUrl(from, text, 'asu.jpg', `${mess.iklann}`, id)
                            browser.close();
            
                        })
                        .catch((err => {
                            console.log(err)
                            iluser.reply(from, 'error', id)
                        }))
            })();
            } catch (error) {
            console.log('error bang')
            iluser.reply(from, 'error', id)
            }
            }
            break
    case prefix+'awan2': {
                    const tes2 = body.slice(7)
                    if (!tes2) return iluser.reply(from, `Contoh: ${prefix}awan2 iluser bot`, id)
                    iluser.reply(from, mess.wait, id)       
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)
                    const puppeteer = require('puppeteer')
            try {
                (async () => {
                    const browser = await puppeteer.launch({
                        headless: true,
                    });
                    const page = await browser.newPage();
                    await page
                        .goto("https://textpro.me/create-realistic-cloud-text-effect-online-free-999.html", {
                            waitUntil: "networkidle2"
                        })
                        .then(async () => {
                            //await page.click("#radio0-radio-a53b07c2e8354a16b5a14e34bfbe666f");
                            await page.type("#text-0", tes2);
                            await page.click("#submit");
                            await new Promise(resolve => setTimeout(resolve, 3000));
                            const element = await page.$(
                                'div[class="thumbnail"] > img'
                                );
                            const text = await (await element.getProperty("src")).jsonValue();
                            const urlmp4 = ({
                                url: text
                            })
                            iluser.sendFileFromUrl(from, text, 'asu.jpg', `${mess.iklann}`, id)
                            browser.close();
            
                        })
                        .catch((err => {
                            console.log(err)
                            iluser.reply(from, 'error', id)
                        }))
            })();
            } catch (error) {
            console.log('error bang')
            iluser.reply(from, 'error', id)
            }
            }
            break
    case prefix+'fskertas': {
                    const tes3 = body.slice(10)
                    if (!tes3) return iluser.reply(from, `Contoh: ${prefix}fskertas iluserbot`, id)
                    iluser.reply(from, mess.wait, id)       
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)
                    const puppeteer = require('puppeteer')
            try {
                (async () => {
                    const browser = await puppeteer.launch({
                        headless: true,
                    });
                    const page = await browser.newPage();
                    await page
                        .goto("https://thiepmung.com/thong-diep-yeu-thuong/card/tao-thong-diep-tren-giay-cam-tay-349.html", {
                            waitUntil: "networkidle2"
                        })
                        .then(async () => {
                            //await page.click("#radio0-radio-a53b07c2e8354a16b5a14e34bfbe666f");
                            await page.type("#text-0", tes3);
                            await page.click("#submit");
                            await new Promise(resolve => setTimeout(resolve, 3000));
                            const element = await page.$(
                                'div[class="thumbnail"] > img'
                                );
                            const text = await (await element.getProperty("src")).jsonValue();
                            const urlmp4 = ({
                                url: text
                            })
                            iluser.sendFileFromUrl(from, text, 'asu.jpg', `${mess.iklann}`, id)
                            browser.close();
            
                        })
                        .catch((err => {
                            console.log(err)
                            iluser.reply(from, 'error', id)
                        }))
            })();
            } catch (error) {
            console.log('error bang')
            iluser.reply(from, 'error', id)
            }
            }
            break
    case prefix+'catatan2': {
                    const tes4 = body.slice(10)
                    if (!tes4) return iluser.reply(from, `Contoh: ${prefix}catatan2 iluser bot`, id)
                    iluser.reply(from, mess.wait, id)       
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)
                    const puppeteer = require('puppeteer')
            try {
                (async () => {
                    const browser = await puppeteer.launch({
                        headless: true,
                    });
                    const page = await browser.newPage();
                    await page
                        .goto("https://thiepmung.com/thong-diep-yeu-thuong/card/tao-status-viet-tay-332.html", {
                            waitUntil: "networkidle2"
                        })
                        .then(async () => {
                            //await page.click("#radio0-radio-a53b07c2e8354a16b5a14e34bfbe666f");
                            await page.type("#text-0", tes4);
                            await page.click("#submit");
                            await new Promise(resolve => setTimeout(resolve, 3000));
                            const element = await page.$(
                                'div[class="thumbnail"] > img'
                                );
                            const text = await (await element.getProperty("src")).jsonValue();
                            const urlmp4 = ({
                                url: text
                            })
                            iluser.sendFileFromUrl(from, text, 'asu.jpg', `${mess.iklann}`, id)
                            browser.close();
            
                        })
                        .catch((err => {
                            console.log(err)
                            iluser.reply(from, 'error', id)
                        }))
            })();
            } catch (error) {
            console.log('error bang')
            iluser.reply(from, 'error', id)
            }
            }
            break
    case prefix+'luv': {
                    const tes5 = body.slice(5)
                    if (!tes5) return iluser.reply(from, `Contoh: ${prefix}luv iluser bot`, id)
                    iluser.reply(from, mess.wait, id)       
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)
                    const puppeteer = require('puppeteer')
            try {
                (async () => {
                    const browser = await puppeteer.launch({
                        headless: true,
                    });
                    const page = await browser.newPage();
                    await page
                        .goto("https://thiepmung.com/hieu-ung-chu-anh/name-heart/viet-ten-len-hinh-trai-tim-194.html", {
                            waitUntil: "networkidle2"
                        })
                        .then(async () => {
                            await page.click("#radio0-radio-1bf9db5be8bb486eb8193c774726e5ba");
                            await page.type("#text-0", tes5);
                            await page.click("#submit");
                            await new Promise(resolve => setTimeout(resolve, 3000));
                            const element = await page.$(
                                'div[class="thumbnail"] > img'
                                );
                            const text = await (await element.getProperty("src")).jsonValue();
                            const urlmp4 = ({
                                url: text
                            })
                            iluser.sendFileFromUrl(from, text, 'asu.jpg', `${mess.iklann}`, id)
                            browser.close();
            
                        })
                        .catch((err => {
                            console.log(err)
                            iluser.reply(from, 'error', id)
                        }))
            })();
            } catch (error) {
            console.log('error bang')
            iluser.reply(from, 'error', id)
            }
            }
            break
    case prefix+'fsheker': {
                    const tes6 = body.slice(9)
                    if (!tes6) return iluser.reply(from, `Contoh: ${prefix}fsheker iluserbot`, id)
                    iluser.reply(from, mess.wait, id)       
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)
                    const puppeteer = require('puppeteer')
            try {
                (async () => {
                    const browser = await puppeteer.launch({
                        headless: true,
                    });
                    const page = await browser.newPage();
                    await page
                        .goto("https://thiepmung.com/tao-avatar-online/avatar-hacker/tao-avatar-hacker-tao-ps-avatar-hacker-256.html", {
                            waitUntil: "networkidle2"
                        })
                        .then(async () => {
                            await page.click("#radio0-radio-61ec1c20ffd145b8b6765c36c579b51f");
                            await page.type("#text-0", tes6);
                            await page.click("#submit");
                            await new Promise(resolve => setTimeout(resolve, 3000));
                            const element = await page.$(
                                'div[class="thumbnail"] > img'
                                );
                            const text = await (await element.getProperty("src")).jsonValue();
                            const urlmp4 = ({
                                url: text
                            })
                            iluser.sendFileFromUrl(from, text, 'asu.jpg', `${mess.iklann}`, id)
                            browser.close();
            
                        })
                        .catch((err => {
                            console.log(err)
                            iluser.reply(from, 'error', id)
                        }))
            })();
            } catch (error) {
            console.log('error bang')
            iluser.reply(from, 'error', id)
            }
            }
            break
    case prefix+'fsheker2': {
                    const tes7 = body.slice(10)
                    if (!tes7) return iluser.reply(from, `Contoh: ${prefix}fsheker2 iluserb bot`, id)
                    iluser.reply(from, mess.wait, id)       
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)
                    const puppeteer = require('puppeteer')
            try {
                (async () => {
                    const browser = await puppeteer.launch({
                        headless: true,
                    });
                    const page = await browser.newPage();
                    await page
                        .goto("https://thiepmung.com/tao-avatar-online/avatar-hacker/tao-avatar-hacker-tao-ps-avatar-hacker-256.html", {
                            waitUntil: "networkidle2"
                        })
                        .then(async () => {
                            await page.click("#radio0-radio-408900e8ea4e4badb43c8b2ad71f2a4b");
                            await page.type("#text-0", tes7);
                            await page.click("#submit");
                            await new Promise(resolve => setTimeout(resolve, 3000));
                            const element = await page.$(
                                'div[class="thumbnail"] > img'
                                );
                            const text = await (await element.getProperty("src")).jsonValue();
                            const urlmp4 = ({
                                url: text
                            })
                            iluser.sendFileFromUrl(from, text, 'asu.jpg', `${mess.iklann}`, id)
                            browser.close();
            
                        })
                        .catch((err => {
                            console.log(err)
                            iluser.reply(from, 'error', id)
                        }))
            })();
            } catch (error) {
            console.log('error bang')
            iluser.reply(from, 'error', id)
            }
            }
            break
    case prefix+'fsminion': {
                    const tes8 = body.slice(10)
                    if (!tes8) return iluser.reply(from, `Contoh: ${prefix}fsminion iluserbot`, id)
                    iluser.reply(from, mess.wait, id)       
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)
                    const puppeteer = require('puppeteer')
            try {
                (async () => {
                    const browser = await puppeteer.launch({
                        headless: true,
                    });
                    const page = await browser.newPage();
                    await page
                        .goto("https://thiepmung.com/tao-poster-online/poster-minion/thong-diep-minion-che-anh-minio-17.html", {
                            waitUntil: "networkidle2"
                        })
                        .then(async () => {
                            await page.click("#radio0-radio-a76871df693c4a0fa890fb25a2e7e9a4");
                            await page.type("#text-0", tes8);
                            await page.click("#submit");
                            await new Promise(resolve => setTimeout(resolve, 3000));
                            const element = await page.$(
                                'div[class="thumbnail"] > img'
                                );
                            const text = await (await element.getProperty("src")).jsonValue();
                            const urlmp4 = ({
                                url: text
                            })
                            iluser.sendFileFromUrl(from, text, 'asu.jpg', `${mess.iklann}`, id)
                            browser.close();
            
                        })
                        .catch((err => {
                            console.log(err)
                            iluser.reply(from, 'error', id)
                        }))
            })();
            } catch (error) {
            console.log('error bang')
            iluser.reply(from, 'error', id)
            }
            }
            break
    case prefix+'fsminion2': {
                    const tes9 = body.slice(11)
                    if (!tes9) return iluser.reply(from, `Contoh: ${prefix}fsminion2 iluserbot`, id)
                    iluser.reply(from, mess.wait, id)       
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)
                    const puppeteer = require('puppeteer')
            try {
                (async () => {
                    const browser = await puppeteer.launch({
                        headless: true,
                    });
                    const page = await browser.newPage();
                    await page
                        .goto("https://thiepmung.com/tao-poster-online/poster-minion/thong-diep-minion-che-anh-minio-17.html", {
                            waitUntil: "networkidle2"
                        })
                        .then(async () => {
                            await page.click("#radio0-radio-e9bcabd92777495fbdc05932d91e34d1");
                            await page.type("#text-0", tes9);
                            await page.click("#submit");
                            await new Promise(resolve => setTimeout(resolve, 3000));
                            const element = await page.$(
                                'div[class="thumbnail"] > img'
                                );
                            const text = await (await element.getProperty("src")).jsonValue();
                            const urlmp4 = ({
                                url: text
                            })
                            iluser.sendFileFromUrl(from, text, 'asu.jpg', `${mess.iklann}`, id)
                            browser.close();
            
                        })
                        .catch((err => {
                            console.log(err)
                            iluser.reply(from, 'error', id)
                        }))
            })();
            } catch (error) {
            console.log('error bang')
            iluser.reply(from, 'error', id)
            }
            }
            break
    case prefix+'sadboi': {
                    const tes10 = body.slice(8)
                    if (!tes10) return iluser.reply(from, `Contoh: ${prefix}sadboi iluserbot`, id)
                    iluser.reply(from, mess.wait, id)       
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)
                    const puppeteer = require('puppeteer')
            try {
                (async () => {
                    const browser = await puppeteer.launch({
                        headless: true,
                    });
                    const page = await browser.newPage();
                    await page
                        .goto("https://ephoto360.com/tao-hinh-nen-12-cung-hoang-dao-full-hd-cho-mobile-710.html", {
                            waitUntil: "networkidle2"
                        })
                        .then(async () => {
                            await page.click("#radio0-radio-a57c8514b6e64507be7df9929bdbdbb0");
                            await page.click("#radio1-radio-cb87e9f7e92f40f8a5bd1d932e77addb");
                            await page.type("#text-0", tes10);
                            await page.click("#submit");
                            await new Promise(resolve => setTimeout(resolve, 3000));
                            const element = await page.$(
                                'div[class="thumbnail"] > img'
                                );
                            const text = await (await element.getProperty("src")).jsonValue();
                            const urlmp4 = ({
                                url: text
                            })
                            iluser.sendFileFromUrl(from, text, 'asu.jpg', `${mess.iklann}`, id)
                            browser.close();
            
                        })
                        .catch((err => {
                            console.log(err)
                            iluser.reply(from, 'error', id)
                        }))
            })();
            } catch (error) {
            console.log('error bang')
            iluser.reply(from, 'error', id)
            }
            }
            break
    case prefix+'sadgirl': {
                    const tes11 = body.slice(9)
                    if (!tes11) return iluser.reply(from, `Contoh: ${prefix}sadgirl iluserbot`, id)
                    iluser.reply(from, mess.wait, id)       
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)
                    const puppeteer = require('puppeteer')
            try {
                (async () => {
                    const browser = await puppeteer.launch({
                        headless: true,
                    });
                    const page = await browser.newPage();
                    await page
                        .goto("https://ephoto360.com/tao-hinh-nen-12-cung-hoang-dao-full-hd-cho-mobile-710.html", {
                            waitUntil: "networkidle2"
                        })
                        .then(async () => {
                            await page.click("#radio0-radio-a57c8514b6e64507be7df9929bdbdbb0");
                            await page.click("#radio1-radio-6b8134e7814c47fb89c38224e31ab1fe");
                            await page.type("#text-0", tes11);
                            await page.click("#submit");
                            await new Promise(resolve => setTimeout(resolve, 3000));
                            const element = await page.$(
                                'div[class="thumbnail"] > img'
                                );
                            const text = await (await element.getProperty("src")).jsonValue();
                            const urlmp4 = ({
                                url: text
                            })
                            iluser.sendFileFromUrl(from, text, 'asu.jpg', `${mess.iklann}`, id)
                            browser.close();
            
                        })
                        .catch((err => {
                            console.log(err)
                            iluser.reply(from, 'error', id)
                        }))
            })();
            } catch (error) {
            console.log('error bang')
            iluser.reply(from, 'error', id)
            }
            }
            break
    case prefix+'logo': {
                    const tes12 = body.slice(6)
                    const tes121 = tes12.split('|')[0]
                    const tes122 = tes12.split('|')[1]
                    if (!tes12) return iluser.reply(from, `Contoh: ${prefix}logo iluser|u know my name`, id)
                    iluser.reply(from, mess.wait, id)       
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)
                    const puppeteer = require('puppeteer')
            try {
                (async () => {
                    const browser = await puppeteer.launch({
                        headless: true,
                    });
                    const page = await browser.newPage();
                    await page
                        .goto("https://ephoto360.com/tao-logo-hoa-ma-vang-de-xay-dung-thuong-hieu-719.html", {
                            waitUntil: "networkidle2"
                        })
                        .then(async () => {
                            await page.click("#radio0-radio-941bfa8347a3462480d3ef964431e032",);
                            await page.type("#text-0", tes121);
                            await page.type("#text-1", tes122);
                            await page.click("#submit");
                            await new Promise(resolve => setTimeout(resolve, 3000));
                            const element = await page.$(
                                'div[class="thumbnail"] > img'
                                );
                            const text = await (await element.getProperty("src")).jsonValue();
                            const urlmp4 = ({
                                url: text
                            })
                            iluser.sendFileFromUrl(from, text, 'asu.jpg', `${mess.iklann}`, id)
                            browser.close();
            
                        })
                        .catch((err => {
                            console.log(err)
                            iluser.reply(from, 'error', id)
                        }))
            })();
            } catch (error) {
            console.log('error bang')
            iluser.reply(from, 'error', id)
            }
            }
            break
    case prefix+'daun': {
                    const tes13 = body.slice(6)
                    if (!tes13) return iluser.reply(from, `Contoh: ${prefix}daun iluser`, id)
                    iluser.reply(from, mess.wait, id)       
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)
                    const puppeteer = require('puppeteer')
            try {
                (async () => {
                    const browser = await puppeteer.launch({
                        headless: true,
                    });
                    const page = await browser.newPage();
                    await page
                        .goto("https://ephoto360.com/hieu-ung-chu/hieu-ung-chu-ghep-tu-la-cay-146.html", {
                            waitUntil: "networkidle2"
                        })
                        .then(async () => {
                            await page.type("#text-0", tes13);
                            await page.click("#submit");
                            await new Promise(resolve => setTimeout(resolve, 3000));
                            const element = await page.$(
                                'div[class="thumbnail"] > img'
                                );
                            const text = await (await element.getProperty("src")).jsonValue();
                            const urlmp4 = ({
                                url: text
                            })
                            iluser.sendFileFromUrl(from, text, 'asu.jpg', `${mess.iklann}`, id)
                            browser.close();
            
                        })
                        .catch((err => {
                            console.log(err)
                            iluser.reply(from, 'error', id)
                        }))
            })();
            } catch (error) {
            console.log('error bang')
            iluser.reply(from, 'error', id)
            }
            }
            break
    case prefix+'api': {
                    const tes13 = body.slice(5)
                    if (!tes13) return iluser.reply(from, `Contoh: ${prefix}api iluser`, id)
                    iluser.reply(from, mess.wait, id)       
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)
                    const puppeteer = require('puppeteer')
            try {
                (async () => {
                    const browser = await puppeteer.launch({
                        headless: true,
                    });
                    const page = await browser.newPage();
                    await page
                        .goto("https://en.ephoto360.com/flame-lettering-effect-372.html", {
                            waitUntil: "networkidle2"
                        })
                        .then(async () => {
                            await page.type("#text-0", tes13);
                            await page.click("#submit");
                            await new Promise(resolve => setTimeout(resolve, 3000));
                            const element = await page.$(
                                'div[class="thumbnail"] > img'
                                );
                            const text = await (await element.getProperty("src")).jsonValue();
                            const urlmp4 = ({
                                url: text
                            })
                            iluser.sendFileFromUrl(from, text, 'asu.jpg', `${mess.iklann}`, id)
                            browser.close();
            
                        })
                        .catch((err => {
                            console.log(err)
                            iluser.reply(from, 'error', id)
                        }))
            })();
            } catch (error) {
            console.log('error bang')
            iluser.reply(from, 'error', id)
            }
            }
            break
    case prefix+'logo2': {
                    const tes14 = body.slice(7)
                    const tes141 = tes14.split('|')[0]
                    const tes142 = tes14.split('|')[1]
                    if (!tes14) return iluser.reply(from, `Contoh: ${prefix}logo2 iluser|bot`, id)
                    iluser.reply(from, mess.wait, id)       
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)
                    const puppeteer = require('puppeteer')
            try {
                (async () => {
                    const browser = await puppeteer.launch({
                        headless: true,
                    });
                    const page = await browser.newPage();
                    await page
                        .goto("https://ephoto360.com/tao-logo-chu-truc-tuyen-499.html", {
                            waitUntil: "networkidle2"
                        })
                        .then(async () => {
                            await page.click("#radio0-radio-b68e29b9c08946db9cdcb48bf77ec6b4",);
                            await page.type("#text-0", tes141);
                            await page.type("#text-1", tes142);
                            await page.click("#submit");
                            await new Promise(resolve => setTimeout(resolve, 3000));
                            const element = await page.$(
                                'div[class="thumbnail"] > img'
                                );
                            const text = await (await element.getProperty("src")).jsonValue();
                            const urlmp4 = ({
                                url: text
                            })
                            iluser.sendFileFromUrl(from, text, 'asu.jpg', `${mess.iklann}`, id)
                            browser.close();
            
                        })
                        .catch((err => {
                            console.log(err)
                            iluser.reply(from, 'error', id)
                        }))
            })();
            } catch (error) {
            console.log('error bang')
            iluser.reply(from, 'error', id)
            }
            }
            break
    case prefix+'logo3': {
                    const tes15 = body.slice(7)
                    const tes151 = tes15.split('|')[0]
                    const tes152 = tes15.split('|')[1]
                    if (!tes15) return iluser.reply(from, `Contoh: ${prefix}logo3 iluser|bot`, id)
                    iluser.reply(from, mess.wait, id)       
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)
                    const puppeteer = require('puppeteer')
            try {
                (async () => {
                    const browser = await puppeteer.launch({
                        headless: true,
                    });
                    const page = await browser.newPage();
                    await page
                        .goto("https://ephoto360.com/tao-banner-logo-chu-nghe-thuat-705.html", {
                            waitUntil: "networkidle2"
                        })
                        .then(async () => {
                            await page.type("#text-0", tes151);
                            await page.type("#text-1", tes152);
                            await page.click("#submit");
                            await new Promise(resolve => setTimeout(resolve, 3000));
                            const element = await page.$(
                                'div[class="thumbnail"] > img'
                                );
                            const text = await (await element.getProperty("src")).jsonValue();
                            const urlmp4 = ({
                                url: text
                            })
                            iluser.sendFileFromUrl(from, text, 'asu.jpg', `${mess.iklann}`, id)
                            browser.close();
            
                        })
                        .catch((err => {
                            console.log(err)
                            iluser.reply(from, 'error', id)
                        }))
            })();
            } catch (error) {
            console.log('error bang')
            iluser.reply(from, 'error', id)
            }
            }
            break
    case prefix+'mememaker': {
                    const gelit = body.slice(11)
                    const gelit1 = gelit.split('|')[0]
                    const gelit2 = gelit.split('|')[1]
                    const gelit3 = gelit.split('|')[2]
                    if (!gelit) return iluser.reply(from, `Contoh: ${prefix}glitch iluser|bot`, id)
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)
                    const puppeteer = require('puppeteer')
            try {
                (async () => {
                    const browser = await puppeteer.launch({
                        headless: true,
                    });
                    const page = await browser.newPage();
                    await page
                        .goto("https://thiepmung.com/tao-anh-che-drake-meme-hai-huoc-ba-dao-602.html", {
                            waitUntil: "networkidle2"
                        })
                        .then(async () => {
                            await page.type("#text-0", gelit1);
                            await page.type("#text-1", gelit2);
                            await page.type("#text-2", gelit3);
                            await page.click("#submit");
                            await new Promise(resolve => setTimeout(resolve, 3000));
                            const element = await page.$(
                                'div[class="thumbnail"] > img'
                                );
                            const text = await (await element.getProperty("src")).jsonValue();
                            const urlmp4 = ({
                                url: text
                            })
                            iluser.sendFileFromUrl(from, text, 'asu.jpg', `${mess.iklann}`, id)
                            browser.close();
            
                        })
                        .catch((err => {
                            console.log(err)
                            iluser.reply(from, 'error', id)
                        }))
            })();
            } catch (error) {
            console.log('error bang')
            iluser.reply(from, 'error', id)
            }
            }
            break
        case prefix+'a1': {
                    const tes15 = body.slice(4)
                    const tes151 = tes15.split('|')[0]
                    const tes152 = tes15.split('|')[1]
                    if (!tes15) return iluser.reply(from, `Contoh: ${prefix}logo3 iluser|bot`, id)
                    iluser.reply(from, mess.wait, id)       
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)
                    const puppeteer = require('puppeteer')
            try {
                (async () => {
                    const browser = await puppeteer.launch({
                        headless: true,
                    });
                    const page = await browser.newPage();
                    await page
                        .goto("https://thiepmung.com/viet-thu-phap/ten-thu-phap/viet-thu-phap-tinh-yeu-7.html", {
                            waitUntil: "networkidle2"
                        })
                        .then(async () => {
                            await page.type("#text-0", tes151);
                            await page.type("#text-1", tes152);
                            await page.click("#submit");
                            await new Promise(resolve => setTimeout(resolve, 3000));
                            const element = await page.$(
                                'div[class="thumbnail"] > img' 
                                );
                            const text = await (await element.getProperty("src")).jsonValue();
                            const urlmp4 = ({
                                url: text
                            })
                            iluser.sendFileFromUrl(from, text, 'asu.jpg', `${mess.iklann}`, id)
                            browser.close();
            
                        })
                        .catch((err => {
                            console.log(err)
                            iluser.reply(from, 'error', id)
                        }))
            })();
            } catch (error) {
            console.log('error bang')
            iluser.reply(from, 'error', id)
            }
            }
            break
        case prefix+'a2': {
                    const tes15 = body.slice(4)
                    const tes151 = tes15.split('|')[0]
                    const tes152 = tes15.split('|')[1]
                    if (!tes15) return iluser.reply(from, `Contoh: ${prefix}logo3 iluser|bot`, id)
                    iluser.reply(from, mess.wait, id)       
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)
                    const puppeteer = require('puppeteer')
            try {
                (async () => {
                    const browser = await puppeteer.launch({
                        headless: true,
                    });
                    const page = await browser.newPage();
                    await page
                        .goto("https://thiepmung.com/viet-thu-phap/ten-thu-phap/viet-thu-phap-tinh-yeu-7.html", {
                            waitUntil: "networkidle2"
                        })
                        .then(async () => {
                        	await page.click("#radio0-radio-1bf9db5be8bb486eb8193c774726e5ba");
                            await page.type("#text-0", tes151);
                            await page.type("#text-1", tes152);
                            await page.click("#submit");
                            await new Promise(resolve => setTimeout(resolve, 3000));
                            const element = await page.$(
                                'div[class="thumbnail"] > img' 
                                );
                            const text = await (await element.getProperty("src")).jsonValue();
                            const urlmp4 = ({
                                url: text
                            })
                            iluser.sendFileFromUrl(from, text, 'asu.jpg', `${mess.iklann}`, id)
                            browser.close();
            
                        })
                        .catch((err => {
                            console.log(err)
                            iluser.reply(from, 'error', id)
                        }))
            })();
            } catch (error) {
            console.log('error bang')
            iluser.reply(from, 'error', id)
            }
            }
            break
        case prefix+'a3': {
                    const tes15 = body.slice(4)
                    if (!tes15) return iluser.reply(from, `Contoh: ${prefix}logo3 iluser|bot`, id)
                    iluser.reply(from, mess.wait, id)       
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)
                    const puppeteer = require('puppeteer')
            try {
                (async () => {
                    const browser = await puppeteer.launch({
                        headless: false,
                    });
                    const page = await browser.newPage();
                    await page
                        .goto("https://thiepmung.com/tao-chu-ky-anh-sang-neon-nhieu-mau-sac-online-779.html", {
                            waitUntil: "networkidle2"
                        })
                        .then(async () => {
                        	await page.click("#radio0-radio-7647ec5bf47c4dab91b6db3afef6c980");
                            await page.type("#text-0", tes15);
                            await page.click("#submit");
                            await new Promise(resolve => setTimeout(resolve, 3000));
                            const element = await page.$(
                                'div[class="thumbnail"] > img' 
                                );
                            const text = await (await element.getProperty("src")).jsonValue();
                            const urlmp4 = ({
                                url: text
                            })
                            iluser.sendFileFromUrl(from, text, 'asu.jpg', `${mess.iklann}`, id)
                            browser.close();
            
                        })
                        .catch((err => {
                            console.log(err)
                            iluser.reply(from, 'error', id)
                        }))
            })();
            } catch (error) {
            console.log('error bang')
            iluser.reply(from, 'error', id)
            }
            }
            break
        case prefix+'ctext':
             if(isReg(obj)) return
			 if (args.length == 1) return iluser.reply(from, `Contoh: ${prefix}ctext iluser`, id)
            const ctex = body.slice(7)
			await iluser.sendFileFromUrl(from, `https://flamingtext.com/net-fu/proxy_form.cgi?script=neon-logo&text=${ctex}&fontname=pistoleer&useShadow&_loc=generate&imageoutput=true`,`ctext.jpg`,`${mess.iklann}`, id)
            break



        // INFORMATION
        case prefix+'donate':
        case prefix+'donasi':
        	//if(!isOwner) return iluser.reply(message.from, `\nHii ${pushname},\n\nBot is under maintenance\n• _https://youtu.be/MZ6jAJgH_2s_\n`, message.id)
            iluser.sendImage(message.from, './dana.jpeg', 'iluser.jpeg', donatee.replace(undefined, pushname), message.id)
            break
        case prefix+'about':
            if(isReg(obj)) return
            iluser.reply(message.from, info, message.id)
            break
        case prefix+'info':
            if(isReg(obj)) return
            iluser.sendText(message.from, readme)
            break
        case prefix+'bahasa':
            iluser.sendText(message.from, bahasalist)
            break
// By Gimenz
        case prefix+'wa.me':
        case prefix+'wame':
            if(isReg(obj)) return
            iluser.reply(message.from, `Nih ${pushname} nomor wa lu\n\nwa.me/${sender.id.replace(/[@c.us]/g, '')}\n\nAtau\n\napi.whatsapp.com/send?phone=${sender.id.replace(/[@c.us]/g, '')}`, message.id)
            break
        case prefix+'premfitur':
        case '#premfitur':        
            iluser.reply(from, premfitur, id)
            break
// By Gimenz
        case prefix+'snk':
            iluser.reply(message.from, snk, message.id)
            break
        case '#rules':
        case prefix+'rules':
            iluser.reply(message.from, rules, message.id)
            break;

//PREMIUM tobz
		case prefix+'video':
			if(isReg(obj)) return
            if (isLimit(serial)) return 
            if (args.length === 1) return iluser.reply(from, `Kirim perintah *.video* [ Video ]`)
            const syt = body.slice(7)
            iluser.reply(from, mess.wait, id)
            try {
                const linkytvid = await axios.get(`https://api.vhtear.com/youtube?query=${encodeURIComponent(syt)}&apikey=${vhtearkey}`)
                const { result } = await linkytvid.data
                let angkanya = 1
                let tobzlod = `*「 YOUTUBE VIDEO 」*\n\n*Hasil Pencarian : ${syt}*\n\n─────────────────\n\nKetik ${prefix}getvideo [angka] untuk mengambil ID, Contoh : ${prefix}getvideo 2\n`
                for (let i = 0; i < result.length; i++) {
                    tobzlod += `\n─────────────────\n\n*Urutan* : ${i+1}\n*Judul* : ${result[i].title}\n*Durasi* : ${result[i].duration}\n*Channel* : ${result[i].channel}\n*Perintah download* : ${prefix}getvideo ${result[i].id}\n`
                }
                    tobzlod += `\n\n`
                for (let ii = 0; ii < result.length; ii++) {
                    tobzlod += `(.)${result[ii].id}`
                }
                await iluser.sendFileFromUrl(from, result[0].image, 'tumbail.jpg', tobzlod, id)
                await limitAdd(serial)
            } catch (err){
                console.log(err)
                iluser.sendText(ownerNumber, 'Error Get Video : '+ err)
                iluser.reply(from, mess.error.Yt4, id)
                }
            break
		case prefix+'getvideo':
			if(isReg(obj)) return
            if (isLimit(serial)) return 
            if (args.length === 1) return iluser.reply(from, `Kirim perintah *.getvideo* [ Id Download ], untuk contoh silahkan kirim perintah *.readme*`, id)
            try {    
            if (quotedMsg && quotedMsg.type == 'image') {
                if (!Number(args[1])) return iluser.reply(from, `*Apabila ditag hanya cantumkan nomer urutan bukan ID Download!*\nContoh : *${prefix}getvideo 1*`, id)
                const dataDownmp3 = quotedMsg.type == 'chat' ? quotedMsg.body : quotedMsg.type == 'image' ? quotedMsg.caption : ''
                const pilur = dataDownmp3.split('(.)')
                console.log(pilur[args[1]])
                iluser.reply(from, mess.wait, id)
                const mhanky45 = await fetch(`https://api.vhtear.com/ytdl?link=https://youtu.be/${pilur[args[1]]}&apikey=${vhtearkey}`)
                if (!mhanky45.ok) throw new Error(`Error Get Video : ${mhanky45.statusText}`)
                const mhankyt45 = await mhanky45.json()
                if (mhankyt45.status == false) {
                    iluser.reply(from, `*Maaf Terdapat kesalahan saat mengambil data, mohon pilih media lain...*`, id)
                } else {
                    const { title, ext, imgUrl, size, UrlVideo } = await mhankyt45.result
                    //if (Number(size.split(' MB')[0]) > 30.00) return iluser.sendFileFromUrl(from, imgUrl, `thumb.jpg`, `*「 YOUTUBE VIDEO DOWNLOADER 」*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${size}\n*Link* : ${UrlVideo}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`, id)
                        const captions = `*YOUTUBE VIDEO DOWNLOADER*\n\n*Title* : ${title}\n*Ext* : MP4\n*Filesize* : ${size}\n\n*Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit*`                  
                        if (!isAdmin) return await iluser.sendFileFromUrl(message.from, imgUrl, 'thumb.jpg', `${captions}\n\n${mess.noprem}\n[${UrlVideo}]`, message.id) 
                        await iluser.sendFileFromUrl(from, imgUrl, `thumb.jpg`, captions, id)
                        await iluser.sendFileFromUrl(from, UrlVideo, `${title}.mp4`, `${mess.iklann}`, id).catch(() => iluser.reply(from, mess.error.Yt3, id))
                        await limitAdd(serial)
                }
            } else if (quotedMsg && quotedMsg.type == 'chat') { 
                    iluser.reply(from, `*Salah tag! hanya tag pesan berisi data hasil dari penelusuran video.*`, id)
            } else {
                if (args.length === 1) return iluser.reply(from, `Kirim perintah *.getvideo [ Id Download ]*`)
                if (args[1] <= 25) return iluser.reply(from, `*Apabila ditag hanya cantumkan nomer urutan bukan ID Download!*\nContoh : *.getvideo 1*`,)
                iluser.reply(from, mess.wait, id)
                const mhanky45 = await fetch(`https://api.vhtear.com/ytdl?link=https://youtu.be/${pilur[args[1]]}&apikey=${vhtearkey}`)
                if (!mhanky45.ok) throw new Error(`Error Get Video : ${mhanky45.statusText}`)
                const mhankyt45 = await mhanky45.json()
                if (mhankyt45.status == false) {
                    iluser.reply(from, `*Maaf Terdapat kesalahan saat mengambil data, mohon pilih media lain...*`, id)
                } else {
                    const { title, ext, imgUrl, size, UrlVideo } = await mhankyt45.result
                    if (Number(size.split(' MB')[0]) > 30.00) return iluser.sendFileFromUrl(from, imgUrl, `thumb.jpg`, `*「 YOUTUBE VIDEO DOWNLOADER 」*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${size}\n*Link* : ${UrlVideo}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`, id)
                        const captions = `*「 YOUTUBE VIDEO DOWNLOADER 」*\n\n*Title* : ${title}\n*Ext* : MP4\n*Filesize* : ${size}\n\n*Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit*`                  
                        iluser.sendFileFromUrl(from, imgUrl, `thumb.jpg`, captions, id)
                        await iluser.sendFileFromUrl(from, UrlVideo, `${title}.mp4`, `Video telah terkirim ${pushname}`, id).catch(() => iluser.reply(from, mess.error.Yt3, id))
                        await limitAdd(serial)
                    }
                }
            } catch (err) {
                console.log(err)
                iluser.sendText(ownerNumber, 'Error Get Video : '+ err)
                iluser.reply(from, mess.error.Yt4, id)
            }
            break
		case prefix+'music':
		case prefix+'musik':
			if(isReg(obj)) return
            if (isLimit(serial)) return 
            if (args.length === 1) return iluser.reply(from, `Kirim perintah *${prefix}musik* [ Lagu ]`)
            const quer = body.slice(7)
            iluser.reply(from, mess.wait, id)
            try {
                const resmus = await fetch(`https://api.vhtear.com/youtube?query=${encodeURIComponent(quer)}&apikey=${vhtearkey}`)
                if (!resmus.ok) throw new Error(`unexpected response ${resmus.statusText}`)
                const jsonsercmu = await resmus.json()
                const { result } = await jsonsercmu
                let berhitung = 1
                let xixixi = `*「 YOUTUBE MUSIC 」*\n\n*Hasil Pencarian : ${quer}*\n\n─────────────────\n\nKetik ${prefix}getmusik [angka] untuk mengambil ID, Contoh : ${prefix}getmusik 2\n`
                for (let i = 0; i < result.length; i++) {
                    xixixi += `\n─────────────────\n\n*Urutan* : ${berhitung+i}\n*Title* : ${result[i].title}\n*Channel* : ${result[i].channel}\n*Durasi* : ${result[i].duration}\n*Perintah download* : *.getmusik ${result[i].id}*\n`
                }
                    xixixi += `\n\n`
                for (let ii = 0; ii < result.length; ii++) {
                    xixixi += `(.)${result[ii].id}`
                }
                await iluser.sendFileFromUrl(from, result[0].image, 'thumbserc.jpg', xixixi, id)
                await limitAdd(serial)
            } catch (err){
                console.log(err)
                iluser.sendFileFromUrl(from, errorurl, 'error.png', '💔 Maaf, Music tidak ditemukan')
                iluser.sendText(ownerNumber, 'Music Error : ' + err)
            }
            break
        case prefix+'getmusic':
        case prefix+'getmusik':
		if(isReg(obj)) return
            if (isLimit(serial)) return iluser.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik .limit Untuk Mengecek Kuota Limit Kamu`, id)
            try {
                if (quotedMsg && quotedMsg.type == 'image') {
                    if (args.length === 1) return iluser.reply(from, `Kirim perintah *${prefix}getmusik [ Id Download ]*`)
                    if (!Number(args[1])) return iluser.reply(from, `*Apabila ditag hanya cantumkan nomer urutan bukan ID Download!*\nContoh : *${prefix}getmusik 1*`, id)
                    const dataDownmp3 = quotedMsg.type == 'chat' ? quotedMsg.body : quotedMsg.type == 'image' ? quotedMsg.caption : ''
                    const pilur = dataDownmp3.split('(.)')
                    console.log(pilur[args[1]])
                    iluser.reply(from, mess.wait, id)
                    const mhanky35 = await fetch(`https://api.vhtear.com/ytdl?link=https://youtu.be/${pilur[args[1]]}&apikey=${vhtearkey}`)
                    if (!mhanky35.ok) throw new Error(`Error Get Video : ${mhanky35.statusText}`)
                    const mhankyt35 = await mhanky35.json()
                     if (mhankyt35.status == false) {
                        iluser.reply(from, `*Maaf Terdapat kesalahan saat mengambil data, mohon pilih media lain...*`, id)
                    } else {
                        try{
                        const { title, ext, size, UrlMp3, status, imgUrl } = await mhankyt35.result
                        //if (Number(size.split(' MB')[0]) >= 10.00) return iluser.sendFileFromUrl(from, imgUrl, `thumb.jpg`, `*「 YOUTUBE MUSIC DOWNLOADER 」*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${size}\n*Link* : ${UrlMp3}\n\n*Untuk durasi lebih dari batas disajikan dalam bentuk link*`, id)
                        console.log(`CHANGE API BARBAR : ${ext}\n${size}\n${status}`)
                        const captions = `*「 YOUTUBE MUSIC DOWNLOADER 」*\n\n*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${size}\n\n*Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit*`
                        if (!isAdmin) return await iluser.sendFileFromUrl(message.from, imgUrl, 'thumb.jpg', `${captions}\n\n${mess.noprem}\n[${UrlMp3}]`, message.id) 
                        await iluser.sendFileFromUrl(from, imgUrl, `thumb.jpg`, captions, id)
                        await iluser.sendFileFromUrl(from, UrlMp3, `${title}.mp3`, `by iluser_BOT`, id).catch(() => iluser.reply(from, mess.error.Yt4, id))
                        await limitAdd(serial)
                        } catch (err){
                            console.log(err)
                        }
                    }    
                } else if (quotedMsg && quotedMsg.type == 'chat') { 
                    iluser.reply(from, `*Salah tag! hanya tag pesan berisi data hasil dari penelusuran musik.*`, id)
                } else {
                    if (args.length === 1) return iluser.reply(from, `Kirim perintah *.getmusik [ Id Download ]*`)
                    if (args[1] <= 25) return iluser.reply(from, `*Apabila ingin mengambil data musik dengan nomor urutan, mohon tag pesan bot tentang pencarian musik!*`,)
                    iluser.reply(from, mess.wait, id)
                    const mhanky35 = await fetch(`https://api.vhtear.com/ytdl?link=https://youtu.be/${pilur[args[1]]}&apikey=${vhtearkey}`)
                    if (!mhanky35.ok) throw new Error(`Error Get Video : ${mhanky35.statusText}`)
                    const mhankyt35 = await mhanky35.json()
                     if (mhankyt35.status == false) {
                        iluser.reply(from, `*Maaf Terdapat kesalahan saat mengambil data, mohon pilih media lain...*`, id)
                    } else {
                        const { title, ext, size, UrlMp3, status, imgUrl } = await mhankyt35.result
                        if (Number(size.split(' MB')[0]) >= 10.00) return iluser.sendFileFromUrl(from, imgUrl, `thumb.jpg`, `*「 YOUTUBE MUSIC DOWNLOADER 」*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${size}\n*Link* : ${UrlMp3}\n\n*Untuk durasi lebih dari batas disajikan dalam bentuk link*`, id)
                        console.log(`CHANGE API BARBAR : ${ext}\n${size}\n${status}`)
                        const captions = `*「 YOUTUBE MUSIC DOWNLOADER 」*\n\n*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${size}\n\n*Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit*`
                        iluser.sendFileFromUrl(from, imgUrl, `thumb.jpg`, captions, id)
                        await iluser.sendFileFromUrl(from, UrlMp3, `${title}.mp3`, `DOWNLOADER MUSIC BY ILUSER`, id).catch(() => iluser.reply(from, mess.error.Yt4, id))
                        await limitAdd(serial)
                   }
                }
            } catch (err) {
                iluser.sendText(ownerNumber, 'Error Get Music : '+ err)
                iluser.reply(from, `*Kesalahan! Pastikan id download sudah benar.*`, id)
                console.log(err)
            }
            break
        case `${prefix}xxx`:
            if (!isAdmin) return await iluser.reply(from, '\n⛔ *AKSES DI TOLAK* ⛔\n\nNte premium?', id)
            if (args.length === 1) return iluser.reply(from, `Kirim perintah *.xxx* [ Judul ]`)
            const querXXX = body.slice(9)
            iluser.reply(from, mess.wait, id)
            try {
                const resxxx = await fetch(`https://api.vhtear.com/xxxsearch?query=${encodeURIComponent(querXXX)}&apikey=${vhtearkey}`)
                if (!resxxx.ok) throw new Error(`unexpected response ${resxxx.statusText}`)
                const resxxx2 = await resxxx.json()
                const { data } = await resxxx2.result
                let berhitung = 1
                let xixixi = `*「 XVIDEOS 」*\n\n*Hasil Pencarian : ${querXXX}*\n\n─────────────────\n\nKetik .getxxx [angka] untuk mengambil ID, Contoh : .getxxx 2\n`
                for (let i = 0; i < data.length; i++) {
                    xixixi += `\n─────────────────\n\n*Urutan* : ${berhitung+i}\n*Title* : ${data[i].title}\n*Duration* : ${data[i].duration}\n*Perintah download* : *.getxxx ${data[i].url}*\n`
                }
                    xixixi += `\n\n`
                for (let ii = 0; ii < data.length; ii++) {
                    xixixi += `(.)${data[ii].url}`
                }
                await iluser.sendFileFromUrl(from, data[0].image, 'thumbxxx.jpg', xixixi, id)
                
            } catch (err){
                console.log(err)
                iluser.sendFileFromUrl(from, errorurl, 'error.png', '💔️ Maaf, XXX tidak ditemukan')
                iluser.sendText(ownerNumber, 'XXX Error : ' + err)
            }
            break
        case `${prefix}getxxx`:
            if (!isAdmin) return await iluser.reply(from, '\n⛔ *AKSES DI TOLAK* ⛔\n\nNte premium?', id)
            try {
                if (quotedMsg && quotedMsg.type == 'image') {
                    if (args.length === 1) return iluser.reply(from, `Kirim perintah *.getxxx [ Id Download ]*`)
                    if (!Number(args[1])) return iluser.reply(from, `*Apabila ditag hanya cantumkan nomer urutan bukan ID Download!*\nContoh : *.getxxx 1*`, id)
                    const datavideo = quotedMsg.type == 'chat' ? quotedMsg.body : quotedMsg.type == 'image' ? quotedMsg.caption : ''
                    const pilur = datavideo.split('(.)')
                    console.log(pilur[args[1]])
                    iluser.reply(from, mess.wait, id)
                    const getxxx = await fetch(`https://api.vhtear.com/xxxdownload?link=${pilur[args[1]]}&apikey=${vhtearkey}`)
                    if (!getxxx.ok) throw new Error(`Error XXX : ${getxxx.statusText}`)
                    const getxxx2 = await getxxx.json()
                     if (getxxx2.status == false) {
                        iluser.reply(from, `*Maaf Terdapat kesalahan saat mengambil data, mohon pilih media lain...*`, id)
                    } else {
                        try{
                        const { title, urlVideo, response } = await getxxx2.result
                        console.log(`STATUS API : ${response}`)
                        let xixixi = `*「 XXX DOWNLOADER 」*\n\n${title}`
                        for (let i = 0; i < urlVideo.length; i++) {
                            xixixi += `\n─────────────────\n\n*Title* : ${urlVideo[i].title}\n*Default Quality* : ${urlVideo[i].defaultQuality}\n*Format* : ${urlVideo[i].format}\n*Quality* : ${urlVideo[i].quality}\n*Url Video* : ${urlVideo[i].videoUrl}\n\n`
                        }
                        const captions = `*「 XXX DOWNLOADER 」*\n\n*Title* : ${title}\n\n*Ext* : MP4\n\n*Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit*`
                        iluser.sendFileFromUrl(from, `https://thumbs.dreamstime.com/b/xxx-neon-sign-dark-background-xxx-neon-sign-dark-background-vector-illustration-129829099.jpg`, `xxx.jpg`, xixixi, id)
                        // await iluser.sendFileFromUrl(from, result, `${title}.mp3`, `Music telah terkirim ${pushname}`, id).catch(() => iluser.reply(from, mess.error.Yt4, id))
                        
                        } catch (err){
                            console.log(err)
                        }
                    }    
                } else if (quotedMsg && quotedMsg.type == 'chat') { 
                    iluser.reply(from, `*Salah tag! hanya tag pesan berisi data hasil dari penelusuran videp.*`, id)
                } else {
                    if (args.length === 1) return iluser.reply(from, `Kirim perintah *.getxvideos [ Id Download ]*`)
                    if (args[1] <= 25) return iluser.reply(from, `*Apabila ingin mengambil data video dengan nomor urutan, mohon tag pesan bot tentang pencarian video!*`,)
                    iluser.reply(from, mess.wait, id)
                    const getxxx = await fetch(`https://api.vhtear.com/xxxsearch?link=${pilur[args[1]]}&apikey=${vhtearkey}`)
                    if (!getxxx.ok) throw new Error(`Error XXX : ${getxxx.statusText}`)
                    const getxxx2 = await getxxx.json()
                     if (getxxx2.status == false) {
                        iluser.reply(from, `*Maaf Terdapat kesalahan saat mengambil data, mohon pilih media lain...*`, id)
                    } else {
                        //if (Number(getxxx2.result.data.duration.split(':')[0]) > 5) return iluser.sendFileFromUrl(from, imgUrl, `thumb.jpg`, `*「 XXX DOWNLOADER 」*\n\n*Website* : XVideos\n\n*Ext* : MP4\n*Link* : ${shortvidxv2}\n*Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit*`, id)
                        const { title, urlVideo, response } = await getxxx2.result
                        console.log(`STATUS API : ${response}`)
                        let xixixi = `*「 XXX DOWNLOADER 」*\n\n*Title* : ${title}`
                        for (let i = 0; i < urlVideo.length; i++) {
                            xixixi += `\n─────────────────\n\n*Default Quality* : ${urlVideo[i].defaultQuality}\n*Format* : ${urlVideo[i].format}\n*Quality* : ${urlVideo[i].quality}\n*Url Video* : ${urlVideo[i].videoUrl}\n\n`
                        }
                        const captions = `*「 XXX DOWNLOADER 」*\n\n*Title* : ${title}\n\n*Ext* : MP4\n\n*Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit*`
                        iluser.sendFileFromUrl(from, `https://thumbs.dreamstime.com/b/xxx-neon-sign-dark-background-xxx-neon-sign-dark-background-vector-illustration-129829099.jpg`, `xxx.jpg`, xixixi, id)
                        // await iluser.sendFileFromUrl(from, result, `${title}.mp3`, `Music telah terkirim ${pushname}`, id).catch(() => iluser.reply(from, mess.error.Yt4, id))
                        
                   }
                }
            } catch (err) {
                iluser.sendText(ownerNumber, 'Error XVideos : '+ err)
                iluser.reply(from, `*Kesalahan! Pastikan id download sudah benar.*`, id)
                console.log(err)
            }
            break
        case `${prefix}xvideos`:
            if (!isAdmin) return await iluser.reply(from, '\n⛔ *AKSES DI TOLAK* ⛔\n\nNte premium?', id)
            if (args.length === 1) return iluser.reply(from, `Kirim perintah *.xvideos* [ Lagu ]`)
            const querVID = body.slice(9)
            iluser.reply(from, mess.wait, id)
            try {
                const resvid = await fetch(`https://mnazria.herokuapp.com/api/porn?search=${encodeURIComponent(querVID)}`)
                if (!resvid.ok) throw new Error(`unexpected response ${resvid.statusText}`)
                const jsonserxvid = await resvid.json()
                const { result } = await jsonserxvid
                let berhitung = 1
                let xixixi = `*「 XVIDEOS 」*\n\n*Hasil Pencarian : ${querVID}*\n\n─────────────────\n\nKetik .getxvideos [angka] untuk mengambil ID, Contoh : .getxvideos 2\n`
                for (let i = 0; i < result.length; i++) {
                    xixixi += `\n─────────────────\n\n*Urutan* : ${berhitung+i}\n*Title* : ${result[i].title}\n*Actors* : ${result[i].actors}\n*Durasi* : ${result[i].duration}\n*Perintah download* : *.getxvideos ${result[i].url}*\n`
                }
                    xixixi += `\n\n`
                for (let ii = 0; ii < result.length; ii++) {
                    xixixi += `(.)${result[ii].url}`
                }
                await iluser.sendFileFromUrl(from, result[0].image, 'thumbxvid.jpg', xixixi, id)
            } catch (err){
                console.log(err)
                iluser.sendFileFromUrl(from, errorurl, 'error.png', '💔️ Maaf, Xvideos tidak ditemukan')
                iluser.sendText(ownerNumber, 'Xvideos Error : ' + err)
            }
            break
        case `${prefix}getxvideos`:
            if (!isAdmin) return await iluser.reply(from, '\n⛔ *AKSES DI TOLAK* ⛔\n\nNte premium?', id)
            try {
                if (quotedMsg && quotedMsg.type == 'image') {
                    if (args.length === 1) return iluser.reply(from, `Kirim perintah *.getxvideos [ Id Download ]*`)
                    if (!Number(args[1])) return iluser.reply(from, `*Apabila ditag hanya cantumkan nomer urutan bukan ID Download!*\nContoh : *.getxvideos 1*`, id)
                    const datavideo = quotedMsg.type == 'chat' ? quotedMsg.body : quotedMsg.type == 'image' ? quotedMsg.caption : ''
                    const pilur = datavideo.split('(.)')
                    console.log(pilur[args[1]])
                    iluser.reply(from, mess.wait, id)
                    const vidxvid = await fetch(`https://mnazria.herokuapp.com/api/porndownloadxvideos?url=${pilur[args[1]]}`)
                    if (!vidxvid.ok) throw new Error(`Error Get Video : ${vidxvid.statusText}`)
                    const vidxvideo = await vidxvid.json()
                     if (vidxvideo.status == false) {
                        iluser.reply(from, `*Maaf Terdapat kesalahan saat mengambil data, mohon pilih media lain...*`, id)
                    } else {
                        try{
                        const { mp4 } = await vidxvideo
                        const shortvidxv = await urlShortener(mp4)
                        const captions = `*「 XVIDEOS DOWNLOADER 」*\n\n*Website* : XVideos\n*Ext* : MP3\n\n*Silahkan download file media sedang melalui link yang tersedia.*\n${shortvidxv}`
                        await iluser.sendFileFromUrl(from, `https://sensorstechforum.com/wp-content/uploads/2019/07/xvideos-virus-image-sensorstechforum-com.jpg`, ``, captions, id)
                        await iluser.sendFileFromUrl(from, shortvidxv, `bokep.mp4`, `XVIDEOS BY iluser_BOT`, id).catch(() => iluser.reply(from, mess.error.Yt4, id))
                        
                        } catch (err){
                            console.log(err)
                        }
                    }    
                } else if (quotedMsg && quotedMsg.type == 'chat') { 
                    iluser.reply(from, `*Salah tag! hanya tag pesan berisi data hasil dari penelusuran videp.*`, id)
                } else {
                    if (args.length === 1) return iluser.reply(from, `Kirim perintah *.getxvideos [ Id Download ]*`)
                    if (args[1] <= 25) return iluser.reply(from, `*Apabila ingin mengambil data video dengan nomor urutan, mohon tag pesan bot tentang pencarian videp!*`,)
                    iluser.reply(from, mess.wait, id)
                    const getvide = await get.get(`https://mnazria.herokuapp.com/api/porndownloadxvideos?url=${pilur[args[1]]}`).json
                    if (getvide.error) {
                        iluser.reply(from, getvide.error, id)
                    } else {
                        const { mp4 } = await mhankyt35
                        const shortvidxv2 = await urlShortener(mp4)
                        console.log(`CHANGE API BARBAR : ${ext}\n${filesize}\n${status}`)
                        const captions = `*「 XVIDEOS DOWNLOADER 」*\n\n*Website* : XVideos\n\n*Ext* : MP4\n*Link* : ${shortvidxv2}\n*Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit*`
                        iluser.sendFileFromUrl(from, `https://sensorstechforum.com/wp-content/uploads/2019/07/xvideos-virus-image-sensorstechforum-com.jpg`, ``, captions, id)
                        // await iluser.sendFileFromUrl(from, result, `${title}.mp3`, `Music telah terkirim ${pushname}`, id).catch(() => iluser.reply(from, mess.error.Yt4, id))
                        
                   }
                }
            } catch (err) {
                iluser.sendText(ownerNumber, 'Error XVideos : '+ err)
                iluser.reply(from, `*Kesalahan! Pastikan id download sudah benar.*`, id)
                console.log(err)
            }
            break

		case prefix+'>':
			if (!isOwner) return iluser.reply(from, `Nte siapa?`, id)
			const cmdw = exec(`${body.slice(3)}`, function(stderr, data) {
				if (stderr) {
					console.log(stderr)
					iluser.reply(from, data + '\n\n' + stderr, id)
				} else {
					console.log(data)
					iluser.reply(from, data, id)
				}
			})
			break

        
            /**
 * Convert Writable Stream to Buffer
 * @param {WritableStreamCallback} cb Callback with stream
 * @returns {Promise<Buffer>}
 */
function stream2Buffer(cb = noop) {
    return new Promise(resolve => {
        let write = new Writable()
        write.data = []
        write.write = function (chunk) {
            this.data.push(chunk)
        }
        write.on('finish', function () {
            resolve(Buffer.concat(this.data))
        })

        cb(write)
    })
}

/**
 * Convert Buffer to Readable Stream
 * @param {Buffer} buffer
 * @returns {ReadableStream}
 */
function buffer2Stream(buffer) {
    return new Readable({
        read() {
            this.push(buffer)
            this.push(null)
        }
    })
}

function processSticker(input) {
    return new Promise((resolve, reject) => {
        if (typeof input == 'string' && /^data/.test(input)) input = Buffer.from(input.replace(/^data:.+;base64,/, ''))
        sharp(input)
            .toFormat('webp')
            .resize(512, 512, {
                fit: 'contain',
                background: {
                    r: 0,
                    g: 0,
                    b: 0,
                    alpha: 0
                }
            })
            .toBuffer()
            .then(resolve)
            .catch(reject)
    })
}

function baseURI(buffer = Buffer.from([]), metatype = 'text/plain') {
    return `data:${metatype};base64,${buffer.toString('base64')}`
}

/**
 * create custom meme
 * @param  {String} imageUrl
 * @param  {String} topText
 * @param  {String} bottomText
 */
async function customText(imageUrl, top, bottom) {
    return new Promise((resolve, reject) => {
        let fix = str => str.trim().replace(/\s/g, '_').replace(/\?/g, '~q').replace(/\%/g, '~p').replace(/\#/g, '~h').replace(/\//g, '~s')
        fetchBase64(`https://api.memegen.link/images/custom/${fix(top)}/${fix(bottom)}.png?background=${imageUrl}`, 'image/png')
            .then(result => resolve(result))
            .catch(err => {
                console.error(err)
                reject(err)
            })
    })
}


/**
 * Fetch base64 from url
 * @param {String} url
 */

const fetchBase64 = (url, mimetype) => {
    return new Promise((resolve, reject) => {
        console.log('Get base64 from:', url)
        return fetch(url)
            .then((res) => {
                const _mimetype = mimetype || res.headers.get('content-type')
                res.buffer()
                    .then((result) => resolve(`data:${_mimetype};base64,` + result.toString('base64')))
            })
            .catch((err) => {
                console.error(err)
                reject(err)
            })
    })
}
function ytv(url) {
    return new Promise((resolve, reject) => {
        if (ytIdRegex.test(url)) {
            let ytId = ytIdRegex.exec(url)
            url = 'https://youtu.be/' + ytId[1]
            post('https://www.y2mate.com/mates/en60/analyze/ajax', {
                url,
                q_auto: 0,
                ajax: 1
            })
                .then(res => res.json())
                .then(res => {
                    console.log('Scraping...')
                    document = (new JSDOM(res.result)).window.document
                    yaha = document.querySelectorAll('td')
                    filesize = yaha[yaha.length - 23].innerHTML
                    id = /var k__id = "(.*?)"/.exec(document.body.innerHTML) || ['', '']
                    thumb = document.querySelector('img').src
                    title = document.querySelector('b').innerHTML

                    post('https://www.y2mate.com/mates/en60/convert', {
                        type: 'youtube',
                        _id: id[1],
                        v_id: ytId[1],
                        ajax: '1',
                        token: '',
                        ftype: 'mp4',
                        fquality: 360
                    })
                        .then(res => res.json())
                        .then(res => {
                            let KB = parseFloat(filesize) * (1000 * /MB$/.test(filesize))
                            resolve({
                                dl_link: /<a.+?href="(.+?)"/.exec(res.result)[1],
                                thumb,
                                title,
                                filesizeF: filesize,
                                filesize: KB
                            })
                        }).catch(reject)
                }).catch(reject)
        } else reject('URL INVALID')
    })
}

function yta(url) {
    return new Promise((resolve, reject) => {
        if (ytIdRegex.test(url)) {
            let ytId = ytIdRegex.exec(url)
            url = 'https://youtu.be/' + ytId[1]
            post('https://www.y2mate.com/mates/en60/analyze/ajax', {
                url,
                q_auto: 0,
                ajax: 1
            })
                .then(res => res.json())
                .then(res => {
                    let document = (new JSDOM(res.result)).window.document
                    let type = document.querySelectorAll('td')
                    let filesize = type[type.length - 10].innerHTML
                    let id = /var k__id = "(.*?)"/.exec(document.body.innerHTML) || ['', '']
                    let thumb = document.querySelector('img').src
                    let title = document.querySelector('b').innerHTML

                    post('https://www.y2mate.com/mates/en60/convert', {
                        type: 'youtube',
                        _id: id[1],
                        v_id: ytId[1],
                        ajax: '1',
                        token: '',
                        ftype: 'mp3',
                        fquality: 128
                    })
                        .then(res => res.json())
                        .then(res => {
                            let KB = parseFloat(filesize) * (1000 * /MB$/.test(filesize))
                            resolve({
                                dl_link: /<a.+?href="(.+?)"/.exec(res.result)[1],
                                thumb,
                                title,
                                filesizeF: filesize,
                                filesize: KB
                            })
                        }).catch(reject)
                }).catch(reject)
        } else reject('URL INVALID')
    })
}
function post(url, formdata) {
    console.log(Object.keys(formdata).map(key => `${key}=${encodeURIComponent(formdata[key])}`).join('&'))
    return fetch(url, {
        method: 'POST',
        headers: {
            accept: "*/*",
            'accept-language': "en-US,en;q=0.9",
            'content-type': "application/x-www-form-urlencoded; charset=UTF-8"
        },
        body: Object.keys(formdata).map(key => `${key}=${encodeURIComponent(formdata[key])}`).join('&')
    })
}


            function clampFloat(value) {
                return value > 1 ? 1 : value < -1 ? -1 : value
            }
            function useQuoted(text, quotedMsgObj) {
                if (text && quotedMsgObj) return false
                else if (!text && quotedMsgObj) return true
                else if (text && !quotedMsgObj) return false
                else return ''
            }
            function clamp(value, min, max) {
                return Math.min(Math.max(min, value), max)
            }
            function distordFX(value) {
                return value > 0 ? 1 : value < 0 ? -1 : 0
            }   
                        
            //await iluser.sendSeen(from) 
            }
        }

    } catch (err) {prefix+
        console.log(color('[ERROR]', 'red'), err)
        //iluser.kill().then(a => console.log(a))
    }
}
