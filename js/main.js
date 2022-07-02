var userName = prompt("Sizning ismingiz")
var userAge = prompt("Sizning yoshingiz")
var userHeight = prompt("Sizning boyingiz")
var userSchool = prompt("Sizning maktabingiz soni")
var userHobby = prompt("Sizning hobiyingiz")
var userNumber = prompt("Sizning telefon raqamingiz")
var userFan = prompt("Sizning kumiringiz")

var result =
(`-Sizning ismingiz: ${userName}
-Sizning yoshingiz: ${userAge}da
-Sizning boyingiz: ${userAge}sm
-Sizning maktabingiz soni: ${userSchool}
-Sizning hobiyngizm: ${userHobby}
-Sizning telefon raqamingiz: ${userNumber}
-Sizning kumiringiz: ${userFan}`)



console.log(
`-Sizning ismingiz?
-Mening ismim: ${userName}
-Sizning yoshingiz?
-Mening yoshim: ${userAge}da
-Sizning boyingiz?
-Mening boyim: ${userAge}sm
-Sizning maktabingiz soni?
-Mening maktabimning soni: ${userSchool}
-Sizning hobiyingiz?
-Mening hobiyim: ${userHobby}
-Sizning telefon raqamingiz?
-Mening telefon raqamim: ${userNumber}
-Sizning kumiringiz?
-Mening kumirim: ${userFan}`)


alert(result)
