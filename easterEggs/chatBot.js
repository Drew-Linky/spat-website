
const sickShades = "data:image/webp;base64,UklGRs4AAABXRUJQVlA4TMIAAAAvJcADELU4jSTJkeCg8t/g02NBoRen0bCJeLb75DuxAIB03s82kuqPntl4D9sXWFxX2x1Uf5y9pV2AmRPAecZNyWW2WUjBKL95wWoGecB/vnIkA1v7zi9OJJDX+86u1QI8+AezIDzBmZ07rh/UgnsH00AdYYp3DG6gb3cFssocHxmfUz3UHpbD7n6VKzt356wYtLsrkJUBPuw7B9d7j66/Knv3nW8cWe3Tv7+jPNz5wn63Z3JnmxUTcotHzJuRk4yYEg==";
var pcOut = document.getElementById('pc-output');
var pcIn =  document.getElementById('pc-input');

/**
 * Defines the 'rules' for the bot to follow.
 * The pattern must be a Regex pattern.
 */
const rules = [
    {
        pattern: createPattern(['trickstier']),
        handler: () => {
            if(document.documentElement.dataset.trickstier  == "true") return outputConsole("can't undo what's done", true);
            outputConsole("got it", true);
            makeItTrickstierOldMan();
        },
    },
    {
        pattern: createPattern(['720']),
        handler: () => {
            outputConsole(`I'm thinking of a number between my buttocks. Do you know what it is? It's my credit score, and it happens to be 720. The higher my credit score, the better chance I have at saving a lot of money. I'm thinking of a number between 450 and 850. Do you know what it is? It happens to be 720, which is my free credit score. This number is between my buttocks. This number I'm thinking is between 450 and 850. The higher this number it is, the better chance I have at saving a lot of money. But the number is between my buttocks. Do you know what number it is? It happens to be between 450 and 850. And the number is between my buttocks. The number is 720. But do you know what number I'm thinking of? I'm thinking of a number between my buttocks. It happens to be between 450 and 850. And it could save me a lot of money the higher it is. Fortunately, that number is 720, which is a number between 450 and 850. This number between 450 and 850 happens to be between my buttocks. The higher the number is between my buttocks, the better chance I have at saving a lot of money. This number happens to be between my buttocks, which means that I will save a lot of money. But do you know what number I'm thinking of? The number I'm thinking of is 720. and it happens to be between my buttocks. It's between 450 and 850 and it still happens to be between my buttocks. The higher this number is that's between my buttocks, the better chance I have at saving a lot of money. Do you know what this number is? It's my free credit score and it happens to be 720 and between my buttocks. The higher this number that is 720 is, that is between 450 and 850 is, the better my chances at saving a lot of money. Between my buttocks. Won't you reach in and grab it for me? I'm thinking that it's 720 and that it's between my buttocks. Won't you reach in and grab it? It's a number between 720 and 720. And it happens to be also between 450 and 850 and between my buttocks. Won't you reach it and get it? I'm thinking that you can reach in and get it because it is between my buttocks. Won't you reach in and get this free credit report that is between my buttocks? The number is between 450 and 850 and it happens to be 720. The higher this number is that is 720, the better chance I have at saving a lot of money between my buttocks. Won't you reach in between my buttocks and grab this number that is greater than 450 and less than 850? This number is 720 and you can grab it because it's between my buttocks. It happens to be 720. But do you know what number I'm thinking of? I'm thinking of a number that could save you a lot of money. It's between my buttocks. It happens to be 720. And it is between the numbers 450 and 850. It could save you a lot of money. A lot of money between my buttocks. But I'm thinking that this number is between 450 and 850. The higher this number is, although the highest can be 850, the better chance you have at saving a lot of money. This number is between my buttocks. You can reach in between my buttocks and get a number. Hopefully, this number is greater than 450 and less than 850. Otherwise, it might not be your credit score. My credit score happens to be 720, which as you will notice is between 450 and 850. But do you know what number I'm thinking of? I'm thinking of a number between 450 and 850. Fortunately, 720 is this number because it is between 450 and 850. But I'm thinking of a number between 450 and 850. Do you know what it is? It happens to be between my buttocks. And it could save you a lot of money. The higher this number between my buttocks is, the more money it could save you. I'm thinking of a number though that is between my buttocks. It is still 720. Once you reach in and grab 720 for me, don't grab 450 or 850 as these are the two extremes. These are not my free credit score. My free credit score happens to be 720. But I'm thinking that you can reach in and grab it because it is between my buttocks. The number between my buttocks happens to be well, I'm thinking that it's 720, but I could be wrong because your number could be anywhere between 450 and 850. I'm thinking that the number is probably 720. Won't you reach in and grab it for me? But I'm thinking of a number that is between my buttocks. Won't you reach in and grab a number that's between my buttocks? The number between 450 and 850 is between my buttocks. The number 720 is between my buttocks. If you can reach in and grab this number that is between my buttocks, you can save a lot of money. The higher the number is between my buttocks, the more money you could save between my buttocks. I'm thinking of a number between my buttocks. This number is the affformentioned number between 450 and 850. And it happens to be between my buttocks. The higher the number is, the better chance you have of saving a lot of buttocks on your credit report. I'm thinking of buttocks between my numbers. The numbers happen to be 450 and 850. And they're between my buttocks. My buttocks happen to be between the numbers of 450 and 850. This number is 720. I'm thinking that the number 720 could save you a lot of money. Do you know why? It's between 450 and 850. And it's also within my buttocks. You can reach in and grab a free credit report that could save you a lot of money. I'm thinking that it's between 450 and 850 and could save you a lot of money. Do you know what it is? It's my buttocks that you can reach in between and get a number that is 720 that I'm thinking of right now. The number is 720 and you can reach in between my buttocks and get it. You can reach in between my buttocks and get a number. I'm thinking you can reach in between my buttocks for a number that's between 450 and 850 and my buttocks. Do you know what you can reach in between my buttocks to get? It's your free credit report and it happens for me to be 720 and between my buttocks. You can reach in between my buttocks if you so choose to retrieve this number which is 720 which happens to be between my buttocks. Why don't you reach in between my buttocks? The higher the number that you reach in and grab in between my buttocks, the better chance you have at saving a lot of money after you have reached in and grabbed a number between my buttocks. I'm thinking though that you might want to reach in and grab between my buttocks in order to get a number that is between 450 and 850. The number that is between 450 and 850 is less than 850 and greater than 450 and between my buttocks. The number happens to also be 720. A number that is between 450 and 850 and between my buttocks. But I'm thinking that this number is greater than 450. But is it less than 850? It's 720 and it happens to be your free credit score. The higher the number, the greater chance you have at saving a lot of money. Between my buttocks. If you reach in and grab it between my buttocks. I'm thinking you can reach in and grab in between my buttocks a number that is 720, which just so happens to be my credit score. Or you could grab a number that is between 450 and 850. Do you know what it is for me? It happens to be between my buttocks. And the number is 720 between my buttocks. You can reach in and grab a number between 450 and 850 that happens so to be between my buttocks. If you grab this number that is between my buttocks, you can get a lot of money. 450 and 850. These are the numbers that it has to be between. If you reach in and grab between my buttocks, you could save a lot of money. Your credit score could be saved a lot of. This could save you a lot of money if you reach between my buttocks. I'm thinking this could save you a lot of money if you reach in between my buttocks. You could save a lot of buttocks. Save a lot of buttocks. In between my buttocks. Reach in between my buttocks and grab the number 720. Save a lot of money if you grab in between my buttocks and grab a number that it happens to be 720. It's a number between 450 and 850. And it happens to be a number between 450 and 850. This number between 450 and 850 happens to be between my buttocks. And you can reach in and grab your free credit score which is between 450 and 850. It happens to be in between my buttocks. The number is 720 and it happens to be between 450 and 850 which is also between my buttocks. The numbers 450 and 850 happen to be outside of 720 which is in between the numbers 450 and 850 which happens to have the numbers 450 and 850 as the boundaries of 720. 720 is a number between my buttocks. You can reach in between my buttocks and grab a number. This number is your free credit report and it happens to be Oh god. No. No. What? Just shut up. Just shut up. I'm so sick of hearing it. No. Help me. Pillows everywhere. You reach in between my buttocks. Help. But I'm not reaching anywhere. 850 450. I think he's gone. Just die for God's sakes.`, true);
        },
    },
    {
        pattern: createPattern(['elephants', 'elephant']), 
        handler: () => {
            outputConsole("This seems like Juli's doing", true)
        },
    },
    {
        pattern: createPattern(['🐘']), 
        handler: () => {
            outputConsole("Seems like Juli's been here...", true)
        },
    },
    {
        pattern: createAllKeywordsPattern(['we', 'watch', 'video']),
        handler: () => outputConsole("That's a good idea, what could we watch?", true),
    },    
    {
        pattern: createAllKeywordsPattern(['cal']),
        handler: () => outputConsole(
            `<span style="color:#f2a400">CALSPRITE: </span><img style="margin: 0; width: 24px; display: inline-block;" alt="" src="${where}/easterEggs/emotes/calSprite.gif" />`,
            false,
            true
        ),
    },
    {
        pattern: createAllKeywordsPattern(['make', 'quirky']),
        handler: () => {
            randomizeQuirking();
            outputConsole("If you say so, dude", true)
        },
    },
    {
        pattern: createPattern(["fuck", "bitch", "fuckin", "fucking"]),
        handler: () => {
            outputConsole("Wow", true)
            outputConsole("Bad day?", true)
        },
    },
    ...whosThis(
        'makin',
        () => outputConsole("makin is a fiend. he is a horrible little goblin man and we keep him in a box to be taken out only when absolutely necessary, otherwise he runs rampant and bites people", true)
    ),
    ...whosThis(
        'Cait',
        () => outputConsole("I haven't seen her around in a while my broseph, but I have always found her quite agreeable", true)
    ),
    ...whosThis(
        'WoC',
        () => outputConsole("Intelligent. Handsome. Funny. A muscular stallion obsessed troll-robot fusion's man, especially since he fuckin' created me. I hear he grows a mean cayenne pepper.", true)
    ),
    ...whosThis(
        'Tarty',
        () => outputConsole("My man has grasped the Gnosis. He's on that Siol smoke, he's on that king dust, the nonmen nibblers. He has seen the starving heavens, the Inverse Fire. He was flipping bricks for the King-After-The-Fall before y'all even became an agricultural civilization. The Apocalypse ain't nothin' to him, man.", true)
    ),
    ...whosThis(
        'MrNostalgic',
        () => outputConsole("One of my biggest fans. I gotta be totally, completely honest with you broham: I love him.", true)
    ),
    ...whosThis(
        'Ennemy',
        () => outputConsole("I wonder what bro is studying today. Maybe he's doing art. Or language. Or history. Or medicine. Or all of the above again. His brain is almost as big as mine.", true)
    ),
    ...whosThis(
        'Carlarc',
        () => outputConsole("Some might say he is the physical return of Christ. Not many people say this, but some do. Shoot, he's alright even if he does get up to some sick nasty profanity at times.", true)
    ),
    ...whosThis(
        'juli',
        () => outputConsole("Cool chick, check out [London](https://archiveofourown.org/works/55691521/chapters/141369259). I wonder how Crystal Palace's last match went.", true)
    ),
    ...whosThis(
        'Misha',
        () => outputConsole("This guy? This guy is too powerful for you. Go watch every anime in existence and then you might--MIGHT--be able to handle hearing about him.", true)
    ),
    ...whosThis(
        'Alice',
        () => outputConsole("As she is proud to tell anyone, she is Michael Guy Bowman's wife. Go listen to his [music](https://michaelguybowman.com/).", true)
    ),
    ...whosThis(
        'Niklink',
        () => outputConsole("One of the subreddit mods. I have it on good authority that he is a consummate bro.", true)
    ),
    ...whosThis(
        'Livina',
        () => outputConsole("She's chill, been around for a long time. Couldn't ask for a better assassin for idiots on Reddit.", true)
    ),
    ...whosThis(
        'fresh_fish',
        () => outputConsole("Has trouble distinguishing fine art of megafauna, it seems. I simply cannot relate, Broselina.", true)
    ),
    ...whosThis(
        'Sung',
        () => outputConsole("Mysterious. Enigmatic. Into gay dudes fuckin', I guess.", true)
    ),
    ...whosThis(
        'interrobang',
        () => outputConsole("Local expert in cosmology. Perhaps he can educate me on this universe's constellations of fine musclebeasts. Makes me sweaty just thinking about it.", true)
    ),
    ...whosThis(
        'Bolas',
        () => outputConsole("I heard this guy watched The Room like four hundred times in a single year. I can believe it, too. Seems like it cooked his brain, can't seem to stop thinking about Robert Pattinson.", true)
    ),
    ...whosThis(
        'Ifnar',
        () => outputConsole("Beware the Eye.", true)
    ),
    ...whosThis(
        'terminalTermagant',
        () => outputConsole("Often seen in the company of lupoCani. If she starts acting smug, you've already lost the conversation in more ways than I could possibly robo-calculate for you my dude. Just give up now.", true)
    ),
    ...whosThis(
        'lupoCani',
        () => outputConsole("Often seen in the company of tT. Provider of proper, excellent argumentation. Stylish, too.", true)
    ),
    ...whosThis(
        'Kidpen',
        () => outputConsole("Despite the name, I don't think he's actually a kid or a pen. What's he hiding behind that prodigious mustache, I wonder?", true)
    ),
    ...whosThis(
        'Moonjail',
        () => outputConsole("Favored furnisher of fecal funny. Not really my type of humor, but--oh god, I can hear Hugh Neutron already. Get out while you still can.", true)
    ),
    ...whosThis(
        'MrCheeze',
        () => outputConsole("I swear to Jegus, this guy is fucking everywhere. Can't shake a stick without hitting a Youtube video he's commented on.", true)
    ),
    ...whosThis(
        'Problem Sleuth',
        () => outputConsole("What, does he think he's too good to have an avatar? Or perhaps you mean the dashing detective from Andrew Hussie's better story by the same name?", true)
    ),
    ...whosThis(
        'Dingus',
        () => outputConsole("Shitposter Extraordinaire. May possibly never be matched in meme prowess. It brings a manly tear to my eye.", true)
    ),
    ...whosThis(
        'Drew Linky',
        () => outputConsole("Why do you want to know about him? It's not as if he hasn't talked to excess already. [If you really want to know, though...](https://drewlinky.com/Drew/aboutme.html)", true)
    ),
    ...whosThis(
        'tensei',
        () => outputConsole("An excellent member of the Homestuck music team, renowned for his skills shredding the guitar.", true)
    ),
    ...whosThis(
        'Wheals',
        () => outputConsole("A long time member of the community, recognizable for his iconic Kid Radd avatar. ", true)
    ),
    ...whosThis(
        'Fat Husky',
        () => outputConsole("Why do you ask? Is he okay? Is he still in snow? ", true)
    ),
    ...whosThis(
        'Nights',
        () => outputConsole("A member of the community from a while ago. Creates [Oceanfalls](https://mspfa.com/?s=14456&p=1), and an ardent defender of huskies from snow.", true)
    ),
    ...whosThis(
        'jesus christ',
        (el) =>{
            insertAfter(el, messageReact('pray'))
            outputConsole("Perhaps you meant to ask about Makin?", true)
        }
    ),
    {
        pattern: createPattern(['howHigh']),
        handler: (el) => {
            insertAfter(el, messageReact())
            outputConsole("howHigh indeed...", true)
        },
    },
    {
        pattern: createPattern(['hello', 'hi', 'hey', 'sup', 'howdy']),
        handler: () => {
            outputConsole("Yes, mister dude (or dudette)?", true)
        },
    },

];

/**
 * Listens for a message, and triggers ArquiusBot.
 */
pcIn.addEventListener('keydown', async (event) => {
    if(event.key == 'Enter'){
        
        var args = pcIn.value.trim().split(' ');
        if (args[0] == '') return;

        // Let's echo back the input.
        el = outputConsole(`<p class="${userColor}" style="font-size:unset; font-weight:unset;"> ${userAbbr}: ` + args.join(' ') + `</p>`, false, true);

        // Disabling the prompt.
        pcIn.value = '';
        pcIn.disabled = true;

        // Let's check if what was pasted is a YouTube video and, if it is,
        // if there is a compatible easter egg to load.
        const youtubeId = youtube_parser(args[0]);

        if(youtubeId){
            const viewportWidth = window.innerWidth;
            if(viewportWidth <= '600'){
                outputConsole("Can't watch a video in this small screen!", true)
                return;
            }

            const easterEgg = await getTheLyrics(youtubeId);
            if(easterEgg){
                outputConsole("Sure, we can watch it", true)
                loadYoutube(youtubeId);
            }else{
                outputConsole("I don't want to watch that right now", true)
            }
            return;
        }

        // Let's see if there is an acceptable response, else we do a default answer.
        setTimeout(() => {
            var passed = false;
            for (const rule of rules) {
                if (rule.pattern.test(args.join(' '))) {
                    rule.handler(el);
                    passed = true;
                    break;
                }
            }
            if(!passed){
                outputConsole("Excuse me dude, but I don't understand what you are saying", true)
            }
        }, 250);

    }
});

/**
 * Outputs to the chatbox. Misnomer, as it was previously a console.
 * 
 * @param {String} data - Either a simple string or a string containing HTML. 
 * @param {Boolean} arquius - This triggers ArquiusBot before image and color.
 * @param {Boolean} html - Deactivates the animation for pure HTML responses. 
 * @returns {Node} Returns the element created.
 */
function outputConsole (data, arquius = false, html = false){
    if(!pcOut) return;
    console.log(data);
    
    let el = document.createElement('p');
    let dataIn = data;

    if(arquius){
        dataIn = data.replaceAll('x', '%')
            .replaceAll('loo', '100');
        el.classList.add('arquius-quirk');
    };
    
    if(html){
        el.innerHTML = data;
        pcOut.append(el);
        pcIn.disabled = false;
        return;
    }else{
        dataIn = dataIn.replace(/\*\*([^\*]+)\*\*/g, '<strong>$1</strong>');
        
        dataIn = dataIn.replace(/\*([^\*]+)\*/g, '<em>$1</em>');
        
        dataIn = dataIn.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank">$1</a>');
    }

    pcOut.append(el);

    if(arquius){
        pcIn.placeholder = 'ArquiusBot is thinking...';
        pcOut.append(el);
        animateText(el, dataIn);
    } else {
        el.innerText = dataIn;
        pcOut.append(el);
    }

    return el;
}

/**
 * Creates a regex pattern with a given array of strings to match any of the words.
 * @param {Array} keywords - Array of strings
 * @returns {RegExp}
 */
function createPattern(keywords) {
    const escapedKeywords = keywords.map(kw => 
        kw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    );
    
    const patternString = escapedKeywords.join('|'); 

    return new RegExp(`(?:[^\w]|^)(${patternString})(?:[^\w]|$)`, 'i'); 
}

/**
 * Creates a regex pattern with a given array of strings to match all of the
 * words at least once.
 * @param {Array} keywords - Array of strings
 * @returns {RegExp}
 */
function createAllKeywordsPattern(keywords) {
    const safeKeywords = keywords.map(word => `\\b${word}\\b`);

    const lookaheads = safeKeywords.map(word => `(?=.*?${word})`).join('');
    
    const patternString = lookaheads + /.*/.source; 
    
    return new RegExp(patternString, 'i'); 
}

/**
 * Creates an array from different possible 'who is' for a given name.
 * @param {string} person 
 * @param {CallableFunction} handlerCallback 
 * @returns {Array}
 */
function whosThis(person, handlerCallback){
    return [
        {
            pattern: createAllKeywordsPattern(['who is', person]),
            handler: handlerCallback,
        },
        {
            pattern: createAllKeywordsPattern(['who\'s', person]),
            handler: handlerCallback,
        },
        {
            pattern: createAllKeywordsPattern(['do', 'you', 'know', person]),
            handler: handlerCallback,
        }
    ]
}

// https://codepen.io/distil/pen/XJWPqvp
function animateText(element, text, initialContent = '') {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = text; 

    const words = [];
    tempDiv.childNodes.forEach(node => {
        if (node.nodeType === Node.TEXT_NODE) {
            words.push(...node.textContent.split(/\s+/).filter(w => w.length > 0)); 
        } else {
            words.push(node.outerHTML); 
        }
    });

    const outputWords = words.map(word => word.startsWith('<') ? word : word + ' ');
    
    let index = 0;

    function typeNextWord() {
        if (index < outputWords.length) {
            element.innerHTML += outputWords[index]; 
            index++;
            setTimeout(typeNextWord, 100); 
        }else{
            pcIn.placeholder = '';
            pcIn.disabled = false;
        }
    }

    element.innerHTML = initialContent; 
    typeNextWord();
}