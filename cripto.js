function crypto(password) {
    if (password.length <= 1) return password
    return password[1] + password[0] + crypto(password.slice(2))
}

function check(encryptedPassword, passwordToCheck) {
    return crypto(encryptedPassword) === passwordToCheck
}

console.log(crypto('password'))
console.log(check('ssapdorw', 'password'))
console.log(check('ssapdorw', 'wrong'))
