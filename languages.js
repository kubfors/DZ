function privet(lang) {
    switch(true) {
        case lang==="en":
            console.log("Good morning!");
            break;
        case lang==="de":
            console.log("Guten Tag!");
            break;
        case lang==="ru":
            console.log("Доброе утро!");
            break;
        case lang==="fr":
            console.log("Bonjour!");
            break;
        case lang==="es":
            console.log("¡Buenos días!");
            break;
        case lang==="it":
            console.log("Buongiorno!");
            break;
        case lang==="zh":
            console.log("早上好!");
            break;
        case lang==="ja":
            console.log("おはよう!");
            break;
        default:
            console.log("Hello!");
    }
}

