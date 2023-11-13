document.body.innerHTML += `
<p>Můj mail: jan.sleichert@prd.cz: ${validator.isEmail("jan.sleichert@prd.cz")}</p>
<p>Číslo platební karty je 4125010001000208: ${validator.isCreditCard("4125010001000208")}</p>
`
const email = prompt("Zadej svůj email")
document.body.innerHTML += `
<p>Zadaný email: ${email}</p>
`
//let zadanyMail = document.querySelector("#msg")
//zadanyMail.textContent = "nefunguje to"

let kontrola = (validator.isEmail(email))
document.body.innerHTML += `
<p>Kontrola zadaného mailu: ${kontrola}</p>
`
let zadanyMail = document.querySelector('#msg')
if (kontrola === true) {
zadanyMail.textContent = `email je v pořádku`
zadanyMail.classList.add("msg--valid")
}

else {
zadanyMail.textContent = `Neplatný email`
zadanyMail.classList.add("msg--invalid")
}
