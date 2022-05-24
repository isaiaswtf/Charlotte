// Función de respuesta

//-- 
const wait = () => { 
return '*⌛ _Cargando..._ ▬▬▬▭*\n\n*🧘🏻‍♂️ Espere por favor,* esto puede tomar unos segundos.'
}

//--
const stick = () => {
  return '❎ Los siento ocurrió Error, repita después de este mensaje'
}

//--
const errorfg = (prefix) => {
  return `❎ Error! \n🔍 Intentalo de nuevo mas tarde`
}

//-- 
const group = () => {
  return '❎  Este comando es solo para grupos'
}

//-- 
const banf = () => {
  return '❎ Estás en la lista de baneados, Lo siento no puedes usar ningun comando'
}

//--
const ownerB = () => {
  return '❎  Esta función es solo para *Para el dueño del Bot*'
}
//--
const modsB = () => {
  return `*⚠️Solo el Dueño y Moderadores pueden usar este comando*`
}


//--
const userB = (prefix) => {
  return `≡ No estas Verificado como usuario del bot, para usar los comandos primero verificate\n\n┌─⊷ *VERIFICACIÓN* ⊶\n▢ Escribe *${prefix}Verify*\n└─────────────`
}

//--
const admin = () => {
  return '❎ Esta función es solo para administradores de grupo'
}

//--
const Badmin = () => {
  return '❎ ¡Para usar este comando debo ser *Administrador!*'
}

//prueba grupo
const famp = () => {
return '𝕱𝖆𝖒𝖎𝖑\𝖎𝖆⛧\𝕻𝖚\𝖙𝖆'
}
 
//Autoadmin
const sofii = () => {
	return '*Tu no eres Sophi zorra 🤨*'
}
const mariann = () =>{
	return `*No eres Marian, niño rata*`
}
const samm = () =>{
	return `*Te banearé para siempre por gracioso, malparido jueputa*`
}
const shagii = () => {
	return '*No hueles a Shagi, vete*'
}
const garyy = () => {
	return '*Tu no eres mi novio, come pit0*'
}
const criss = () => {
	return `*Quien poronga eres? No eres Cris*`
}
const pandaa = () => {
	return `No eres Panda!! Abrase alv plebe o le damos plomo y pal río`
}
const yulii = () => {
	return `*Lo siento, no eres Yuli 🐧🔪*`
}
const miaa = () => {
	return `*Puta madre, como vas a ser Mia? Gato qliao*`
}
const isaa = () => {
	return `No, ban por pendejo`
}
const modee = () => {
	return `No eres moderador del Bot`
}
const ghostt = () => {
	return `Quítate niño prieto`
}
module.exports =  { wait, stick, errorfg, group, banf, ownerB, userB, modsB, admin, Badmin, sofii, mariann, samm, shagii, garyy, criss, pandaa, yulii, miaa, isaa, famp, modee, ghostt} 