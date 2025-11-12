
/* Trickster shenanigans */

/**
 * Credits:
 * - ASCII fonts: https://patorjk.com/software/taag/
 * - Pesterchum Handle generator: https://homestuck.net/tools/chumhandle-generator/
 * - ThreeJS for the cursor handling: https://threejs.org/
 * - Draggable console (unused): https://codepen.io/Mouette/pen/vYLrbqe
 * - Animate the text like AI: https://codepen.io/distil/pen/XJWPqvp
 * - FlaringK for the AWESOME CSS, I used it for the LE text style but I could've saved time on the Pesterchum styles sadface: https://mspfa.com/?s=41577&p=1
 */

// Constants for different effects across the scripts.
const pageTitle = document.title; 
const modelPath = where + '/sburblogo.gltf';

// Variables for the ThreeJS 3D cursor effect
let scene, camera, renderer;
let cursorModel;
let targetRotationY = 0;
let lastMouseX = 0;
let mixer; 
let hoverAnimationAction; 
let clock;

let threeJsLoaded = false;
let threeJsLoading = false;

// Variables for the chatBot
let alrOpened = false;
let userHandle;
let userAbbr;
let userColor;

// Variables for the YouTube player
const titleTargetWidth = 35; // Window title width
let player;
let timeupdater = null;
let currentTitle = "";
let videoId;
let videoJson;

/**
 * Init function. This loads other scripts and set ups
 * all the needed functions.
 * 
 * @returns {void} This function does not return a value.
 */
function trickster(){

  // Changes the document theme to 'trickster'.
	const html = document.documentElement;
	html.dataset.theme = 'trickster';

  // Creates the canvas for the 3D cursor
  const canvas = document.createElement('canvas');
  canvas.id = 'cursor-canvas';
  document.body.appendChild(canvas);

  // Some default styling.
  landOfXandY();
  fancyLetters();

  // Importing the ChatBot functions.
	importScript('/easterEggs/chatBot.js');
	const handlerGenerator = importScript('/easterEggs/generatePesterNick.js');

  let handleName;
  let abbUserName;
  // Sets up the fake user for the chatbot.
  handlerGenerator.onload= () => {
    ({
      handleName,
      abbUserName
    } = randomHandle());
    const availableColors = ['ampora','blapck','caliborn','calliope','captor','dammek','darkergardenGnostic','darkerghostyTrickster','darkergolgothasTerror','darkergutsyGumshoe','darkertentacleTherapist','darkertimaeusTestified','darkertipsyGnostalgic','darkerturntechGodhead','gardenGnostic','geromy','ghostyTrickster','golgothasTerror','gutsyGumshoe','hellajeff','joeyclaire','judeharley','leijon','lightergardenGnostic','lighterghostyTrickster','lightergolgothasTerror','lightergutsyGumshoe','lightertentacleTherapist','lightertimaeusTestified','lightertipsyGnostalgic','lighterturntechGodhead','lime','makara','maryam','megido','nitram','pastelgardenGnostic','pastelghostyTrickster','pastelgolgothasTerror','pastelgutsyGumshoe','pasteltentacleTherapist','pasteltimaeusTestified','pasteltipsyGnostalgic','pastelturntechGodhead','peixes','pyrope','scratch','serket','sweetbro','tentacleTherapist','timaeusTestified','tipsyGnostalgic','turntechGodhead','vantas','xefros','zahhak']
    const randomIndex = Math.floor(Math.random() * availableColors.length);
    userAbbr = abbUserName;
    userHandle = handleName;
    userColor = availableColors[randomIndex];
  }
  

    

  // Init ThreeJS and ChatBot.
  loadThreeJs();
  loadChatBot();

}

/*
*                       ___            __   __  
*  |\/|  /\  | |\ |    |__  |  | |\ | /  ` /__` 
*  |  | /~~\ | | \|    |    \__/ | \| \__, .__/ 
*                                               
*/

/**
 * Get all usernames that have an avatar next to it (like in Voces Populi)
 * and separates into two, then converts it into Land of X and Y.
 * 
 * @returns {void} This function does not return a value.
 */
function landOfXandY(){

	document.querySelectorAll('img.avatar + p, img.avatar + div p').forEach(el => {

		const name = el.innerText;
		var land = false;

    // Separates the names in multiple forms, like foo_bar, foo bar, foo.bar and fooBar
		switch(true){
			case(name.split(' ').length == 2):
				land = name.split(' ');
				break;
			case(name.split('_').length == 2):
				land = name.split('_');
				break;
			case(name.split('.').length == 2):
				land = name.split('.');
				break;
      
			// Camel Case (like the usernames of pesterchum users)
			case(name.replace(/([a-z])([A-Z])/g, "$1 $2").split(' ').length == 2):
				land = name.replace(/([a-z])([A-Z])/g, "$1 $2").split(' ');
				break;
				
		}

    // Capitalizes the first letter so it's Land of Foo and Bar
		land[0] = capitalizeFirstLetter(land[0]);
		land[1] = capitalizeFirstLetter(land[1]);

		if (land){
			el.innerText = "Land of " + land[0] + " and " + land[1];
		}
  	});
}

/**
 * Get all headings and apply an animation class. In normal trickster mode, this
 * just makes the text bounce. In trickstier mode, this makes the text rainbow
 * like Lord English's.
 * 
 * Secondary effect: Changes all occurences of 'Several People Are Typing' to
 * some easter egg name.
 * 
 * @returns {void} This function does not return a value.
 */
function fancyLetters(){

	document.querySelectorAll('h1, h2, h3').forEach(el => {

    // This changes the text in one out of 20 times.
    if(el.textContent.toLowerCase() == "several people are typing"){
      const chance = Math.floor(Math.random() * 20);
      if(chance == 1){
        el.textContent = randomString([
          'Several Rats Are Typing',
          'Several Nerds Are Typing',
          'Homestucks',
          'Terminally Online Weirdos'
        ]);
      }
    }

		const characters = el.textContent.split('');

		const wrappedCharacters = characters.map((char, i) => {
      // Sets the lordEnglish classes for the trickstier mode
      const lordEnglish = ['r','g','b','o'];

      // If it's a space, then just return a space
			if (char === ' ') return '<span style="width:0.7em"> </span>';

      // Mod between the length of lE class array, and puts --i: as style
      // to delay a bit each character so it's like a wave animation.
			return `<span style="--i:${i}" class="${(lordEnglish[(i % lordEnglish.length)])}">${char}</span>`;
    }).join('');

    el.innerHTML = wrappedCharacters;
  	});
}

/**
 * Randomizes the quirking on all text across the website.
 * 
 * @returns {void} This function does not return a value.
 */
function randomizeQuirking(){

  // Selects all possible text blocks.
  document.querySelectorAll('p, blockquote, a').forEach(el => {
  
    // If it's inside the chatbox, stop.
    if(el.closest("#pesterchum")){
      return;
    }

    // Generates a random number for this instance
    const magicNumber = Math.floor((Math.random()) * 100);
    const text = el.innerText;

    // If the number is between a range, then it gets applied that quirk.
    switch(true){
        case betweenNumbers(0, magicNumber, 10):
            el.innerText = text.toLowerCase();
            break;
        case betweenNumbers(10, magicNumber, 20):
            el.innerText = capitalizeFirstLetter(text);
            break;

        // Tavros
        case betweenNumbers(30, magicNumber, 35):
            var value = text
            .replaceAll(':)',"}:)")
            .replaceAll(':(',"}:(")
            .replaceAll(':D',"}:D")
            .replaceAll('D:',"D:{")
            .replaceAll(';)',"};)");
            el.innerText = reverseStringCase(value);
            break;

        // Karkat
        case betweenNumbers(40, magicNumber, 45):
            el.innerText = text.toUpperCase();
            break;

        // Terezi
        case betweenNumbers(50, magicNumber, 55):
            el.innerText = text.toUpperCase()
            .replaceAll(':)',">:]")
            .replaceAll(':(',">:[")
            .replaceAll(':D',">:D")
            .replaceAll('D:',"D:<")
            .replaceAll(';)',">;]")
            .replaceAll('a',"4").replaceAll('A',"4")
            .replaceAll('i',"1").replaceAll('I',"1")
            .replaceAll('e',"3").replaceAll('E',"3");
            break;
        
        // Gamzee
        case betweenNumbers(60, magicNumber, 65):
            var value = text
            .replaceAll(':)',":o)")
            .replaceAll(':(',":o(")
            .replaceAll(':D',":oD")
            .replaceAll('D:',"Do:")
            .replaceAll(';)',";o)")
            .replaceAll('ing',"in")
            .replaceAll('ING',"IN");

            const textArray = value.split('');
            let newText = '';
            for (let i = 0; i < textArray.length; i++) {
                if(i % 2){
                    newText += textArray[i].toUpperCase();
                }else{
                    newText += textArray[i].toLowerCase();
                }
            }
            el.innerText = newText;
            break;

        // Vriska
        case betweenNumbers(80, magicNumber, 89):
            el.innerText = text
            .replaceAll(':)',"::::)")
            .replaceAll(':(',"::::(")
            .replaceAll(':D',"::::D")
            .replaceAll('D:',"D::::")
            .replaceAll(';)',":::;)")
            .replaceAll('ight',"8")
            .replaceAll('ate',"8")
            .replaceAll('ait',"8")
            .replaceAll('epte',"8")
            .replaceAll('b',"8")
            .replaceAll('B',"8");
            break;
    }
  });
}

/**
 * Attempts to load the threeJS and GLTF scripts from known CDN sources.
 * 
 * @returns {void} This function does not return a value.
 */
function loadThreeJs() {
  if (threeJsLoaded || threeJsLoading) {
    return;
  }
  
  threeJsLoading = true;

  const script = document.createElement('script');
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r126/three.min.js';
  script.integrity = 'sha384-B0xHR74PuT9pS5Mml6k+6Weu3sFxlNojmwaWew9tLHOvfrlroWD3W5nzyVo/XXIg';
  script.crossOrigin = 'anonymous';

  const script2 = document.createElement('script');
  script2.src = 'https://unpkg.com/three@0.126.0/examples/js/loaders/GLTFLoader.js';
  script2.integrity = 'sha384-AEb/BX3YlmtV0ojuXiEU8C/HnQ+ftI0J40CIuE08tbhZnuvRXOTznQ8S2TBEa6fh';
  script2.crossOrigin = 'anonymous';
  
  script.onload = () => {
    document.head.appendChild(script2);
    script2.onload= () => {
      threeJsLoaded = true;
      threeJsLoading = false;
      initialize3DCursor();
      clock = new THREE.Clock();
    }
  };
  
  script.onerror = () => {
    threeJsLoading = false;
  };

  document.head.appendChild(script);
}

/**
 * Loads the YouTube API and the video by it's ID.
 * @param {string} id - Youtube Video ID
 */
function loadYoutube(id){
  const script = document.createElement('script');
  script.src = 'https://www.youtube.com/iframe_api';
  document.head.append(script);

  const iframe = document.createElement('iframe');
  iframe.id = "youtube-player";
  iframe.src = `https://www.youtube-nocookie.com/embed/${id}?enablejsapi=1`;

  document.body.append(iframe);

}

/**
 * Loads the best fucking chabot in existance.
 * 
 * @returns {void} This function does not return a value.
 */
function loadChatBot(){
  // Creates the chatbot icon, always visible on the corner
  const chatBot = document.createElement('div');
  chatBot.id = 'chatBot';
  chatBot.addEventListener('click', (event) => {
    openChatbox();
  });

  // Creates the Pesterchum box
  const console = document.createElement('div');
  console.id = 'pesterchum';

  console.innerHTML = `
  <div class="pc-header" id="pesterchumheader">
    <div class="pc-title">: : ArquiusBot : :</div>
  </div>
  <div class="pc-content">
    <span class="pc-subtitle">PESTERLOG:</span>
    <div class="pc-box"><div id="pc-output"></div></div>
  </div>
  <div class="pc-inputbox">
    <input id="pc-input"></input>
  </div>`;
   
  // Appends the chatbot to the body.
  document.body.append(chatBot);
  document.body.append(console);
}

/**
 * Activates an even trickstier mode than normal trickster mode.
 * 
 * @returns {void} This function does not return a value.
 */
function makeItTrickstierOldMan(){
  
  // Sets the theme to trickstier
	const html = document.documentElement;
	html.dataset.trickstier = 'true';

  // Calls every text element
  const allElements = document.querySelectorAll('p, span, blockquote, a');
  
  // Skews every text randomly.
  allElements.forEach(element => {

    // Let's get numbers from -2 to 2
    const randomX = (Math.random() * 4) - 2;
    const randomY = (Math.random() * 4) - 2;

    // Makes the style changes for the selected element
    element.style.transform = `skew(${randomX}deg, ${randomY}deg)`;
    element.style.webkitTransform = `skew(${randomX}deg, ${randomY}deg)`;
    element.style.msTransform = `skew(${randomX}deg, ${randomY}deg)`;
  });

}

/**
 *___       __   ___  ___     __      __                  __         ___ 
 * |  |__| |__) |__  |__     |  \    |__) |  | |    |    /__` |__| |  |  
 * |  |  | |  \ |___ |___    |__/    |__) \__/ |___ |___ .__/ |  | |  |  
 *                                                                       
 */

/**
 * Initializes the Three.js scene for the 3D cursor.
 * 
 * This function performs the following steps:
 * 1. Checks if Three.js and the GLTFLoader are available.
 * 2. Grabs the '#cursor-canvas' element.
 * 3. Sets up the WebGLRenderer, Scene, and an OrthographicCamera.
 * 4. Adds ambient and directional lights to the scene.
 * 5. Uses GLTFLoader to load the 3D model from `modelPath`.
 * 6. On model load, it sets up an animation mixer (if animations exist).
 * 7. Calls `animate()` to start the render loop.
 * 8. Calls `initializeLinkHoverEvents()` to bind hover effects.
 * 9. Adds the 'mousemove' listener to run `updateCursorAnimation`.
 * 
 * @returns {void}
 */
function initialize3DCursor() {

  if (!window.THREE || !window.THREE.GLTFLoader) {
    console.error("THREE.js or GLTFLoader is not loaded!");
    return;
  }

  const canvas = document.getElementById('cursor-canvas');
  if (!canvas) {
    console.error("Canvas element #cursor-canvas not found.");
    return;
  }

  renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true, 
    antialias: true 
  });
  renderer.setSize(canvas.clientWidth, canvas.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  scene = new THREE.Scene();

  const cursorSize = 2; 
  camera = new THREE.OrthographicCamera(
    cursorSize / -2, cursorSize / 2, 
    cursorSize / 2, cursorSize / -2, 
    0.1, 
    1000 
  );

  camera.position.set(6, 4, 2); 
  camera.lookAt(0, 0, 0); 

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.7); 
  scene.add(ambientLight);
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5); 
  directionalLight.position.set(1, 3, 2); 
  scene.add(directionalLight);

    const loader = new THREE.GLTFLoader();

  loader.load(
    modelPath,
    (gltf) => {

      console.log("Model loaded.");
      cursorModel = gltf.scene;

      modelPivot = new THREE.Group();

      modelPivot.rotation.y = Math.PI / 4; 
      modelPivot.rotation.x = Math.PI / 8; 

      modelPivot.add(cursorModel);

      scene.add(modelPivot);

      if (gltf.animations && gltf.animations.length > 0) {

        mixer = new THREE.AnimationMixer(cursorModel); 
        const clip = gltf.animations[0]; 
        hoverAnimationAction = mixer.clipAction(clip);
        hoverAnimationAction.setLoop(THREE.LoopRepeat);

        console.log("GLTF animation ready.");
      } else {
        console.warn("This GLTF model has no animations.");
      }

      animate();

      initializeLinkHoverEvents(); 
    },
    undefined, 
    (error) => {
      console.error("Error loading model:", error);
    }
  );

  lastMouseX = window.innerWidth / 2;

  document.removeEventListener('mousemove', loadThreeJs); 
  document.addEventListener('mousemove', updateCursorAnimation);

  document.addEventListener('mousemove', updateCursorAnimation);
}

/**
 * Finds all 'a' (anchor) tags on the page and adds mouse listeners
 * to trigger the 3D cursor's hover animation.
 * - `mouseenter`: Plays the 'hoverAnimationAction'.
 * - `mouseleave`: Fades out the 'hoverAnimationAction'.
 * 
 * @returns {void}
 */
function initializeLinkHoverEvents() {
  const links = document.querySelectorAll('a');

  links.forEach(link => {

    link.addEventListener('mouseenter', () => {
      if (hoverAnimationAction) {
        hoverAnimationAction.reset().play();
      }
    });

    link.addEventListener('mouseleave', () => {
      if (hoverAnimationAction) {
        hoverAnimationAction.fadeOut(0.25);
      }
    });
  });
}

/**
 * Event handler for 'mousemove' to update the 3D cursor's state.
 * 1. Moves the canvas element ('#cursor-canvas') to follow the mouse.
 * 2. Calculates the horizontal mouse movement (deltaX).
 * 3. Sets the `targetRotationY` based on mouse speed to create a "swing" effect.
 * 
 * @param {MouseEvent} event - The 'mousemove' event object.
 * @returns {void}
 */
function updateCursorAnimation(event) {

  const canvas = document.getElementById('cursor-canvas');
  if (canvas) {

    const x = event.clientX - canvas.clientWidth / 2;
    const y = event.clientY - canvas.clientHeight / 2;
    canvas.style.transform = `translate(${x}px, ${y}px)`;
  }

  const deltaX = event.clientX - lastMouseX;

  const swingAmount = 0.03; 
  targetRotationY = deltaX * -swingAmount; 

  lastMouseX = event.clientX;
}

/**
 * The main Three.js render loop, called via requestAnimationFrame.
 * 
 * This function does the following on every frame:
 * 1. Updates the animation mixer (if it exists).
 * 2. Smoothly interpolates (lerps) the `modelPivot` rotation 
 * towards the `targetRotationY` (set by mouse movement).
 * 3. Applies damping to the target rotation so the swing effect fades.
 * 4. Renders the final scene and camera.
 * * @returns {void}
 */
function animate() {

  requestAnimationFrame(animate);

  const delta = clock.getDelta();

  if (mixer) {
    mixer.update(delta);
  }

  if (modelPivot) {
    const lerpSpeed = 0.1; 
    const damping = 0.90;  

    const restingRotationY = Math.PI / 4;
    const restingRotationX = Math.PI / 8;

    let finalTargetY = restingRotationY + targetRotationY;

    modelPivot.rotation.y += (finalTargetY - modelPivot.rotation.y) * lerpSpeed;

    modelPivot.rotation.x += (restingRotationX - modelPivot.rotation.x) * lerpSpeed;

    targetRotationY *= damping;
  }

  renderer.render(scene, camera);
}

/**
 *  __            ___  __   __      
 * /  ` |__|  /\   |  |__) /  \ \_/ 
 * \__, |  | /~~\  |  |__) \__/ / \ 
 *                                  
 */

/**
 * Opens the chatbox, deactivates the animations on the icon.
 * 
 * If not opened: Inits the chatbox with the first 'message'.
 *
 * @returns {void} This function does not return a value.
 */
function openChatbox(){
    document.getElementById('pesterchum').classList.toggle('open');
    document.getElementById('chatBot').classList.toggle('open');
    if(!alrOpened){
      let el = document.createElement('p');
      let bars = ' - - ';
      let userName = `${userHandle} [${userAbbr}]`
      let botName = 'arquiusBot [AB]';
      let joinText = 'began pestering'
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      let timeNow = `at ${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
      let bar = document.createElement('span');
      let join = document.createElement('span');
      let time = document.createElement('span');
      let bot = document.createElement('span');
      bar.innerText = bars;
      time.innerText = timeNow;
      join.innerText = joinText;
      bot.innerText = botName;
      bar.style.color = '#333';
      join.style.color = '#333';
      time.style.color = '#333';
      bot.style.color = '#e00707';

      let user = document.createElement('span');
      user.innerText = userName;
      user.classList.add(userColor);
      user.style.fontSize = 'unset';
      user.style.fontWeight = 'unset';

      el.innerHTML = [bar.outerHTML,user.outerHTML,join.outerHTML,bot.outerHTML,time.outerHTML,bar.outerHTML].join(' ');
      var pcOut = document.getElementById('pc-output');
      pcOut.append(el);

      alrOpened = true;
    }
}

/**
 * Makes a fake reaction element that goes up by the given 
 * @param {*} emoteName - Emote image name from the easterEggs/emote folder.
 * @param {*} speed - Specifies the speed of the counter. Between 1 to 3, being 3 the fastest.
 * @param {*} limit - Limits the amount of reactions given.
 * @returns {Node} Returns the span element with the reaction.
 */
function messageReact(emoteName = 'howHigh', speed = 3, limit = 20) {

  const emote = document.createElement('span');
  emote.classList.add('reaction');
  emote.style.setProperty('--emote-image',`url(${where + '/easterEggs/emotes/' + emoteName + '.png' })`);

  let reactions = 1;
  let iter = 1;

  /*
  * Loop that incrementes the reaction number and sets a new timer
  * to be recursively called by a random number. It gets limited by
  * the limit variable.
  */
  function loopReaction() {
    let timeOut;

    reactions += 1;
    emote.innerText = reactions;

    switch (speed) {
      case 1:
        timeOut = (Math.random() * 4000) + 2000;
        break;
      case 2:
        timeOut = (Math.random() * 3000) + 1000;
        break;
      case 3:
      default:
        timeOut = (Math.random() * 2000) + 0;
        break;
    }

    iter += 1;
    if(iter == limit) return;
    setTimeout(loopReaction, timeOut);
  }

  loopReaction(); 

  return emote;
}

/**
 *            __     __  
 * |\/| |  | /__` | /  ` 
 * |  | \__/ .__/ | \__, 
 *                       
 */

/**
 * Sets up the Youtube API 
 */
function onYouTubeIframeAPIReady() {
  console.log('YouTube IFrame API is fully loaded and ready! Connecting to iframe...');
  
  player = new YT.Player('youtube-player', {
      events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange
      }
  });
}

function onPlayerReady(event) {
  event.target.playVideo();
}

/**
 * Main function for the Youtube Easter Egg. TODO: This eventually should
 * be updated with more functions so the video easter egg can do more
 * weirdness across the webside.
 * @param {*} event - Event provided by YouTube
 */
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING) {
    timeupdater = setInterval(() => {
      if (player) { 
        const currentTime = player.getCurrentTime();
        
        const rawNewTitle = getTitleByTime(currentTime, videoJson);
        const newTitle = centerTitle(rawNewTitle, titleTargetWidth);
        
        if (newTitle !== currentTitle) {
          document.title = newTitle;
          currentTitle = newTitle;
        }
      }
    }, 10);
    
  } else {
    clearInterval(timeupdater);
    timeupdater = null;
  }
}

/**
 * Returns the title that corresponds to the video second.
 * TODO: Update this to bring all the data in the object.
 * 
 * @param {number} currentTime 
 * @param {Array} map 
 * @returns {string}
 */
function getTitleByTime(currentTime, map) {
  for (let i = map.length - 1; i >= 0; i--) {
    if (currentTime >= map[i].time) {
      return map[i].text;
    }
  }
  return pageTitle; 
}

/**
 * Returns a transformed text centered with the pad character.
 * TODO: Find a better character that works with the windows title better.
 * 
 * @param {*} text 
 * @param {*} targetWidth 
 * @param {*} padChar 
 * @returns {string}
 */
function centerTitle(text, targetWidth, padChar = '​​​​​​​\u205f') {
    const textLength = text.length;
    
    if (textLength >= targetWidth) {
        return text;
    }
    
    const totalPadding = targetWidth - textLength;
    const leftPaddingCount = Math.floor(totalPadding / 2);
    
    for (let i = 0; i < leftPaddingCount; i++) {
      text = padChar + text;
    }
    return text;
}

/**
 * Set ups the videoJson from the videoId given.
 * 
 * @param {string} videoId - Video ID string.
 * @returns {boolean} If the video was found, then will return true.
 */
async function getTheLyrics(videoId) {
  try {

    const response = await fetch(where + '/easterEggs/videos/' + videoId + '.json');

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    videoJson = await response.json();
    return true;

  } catch (error) {
    return false;
  }
}

/*
*       ___          ___    ___  __  
*  |  |  |  | |    |  |  | |__  /__` 
*  \__/  |  | |___ |  |  | |___ .__/              
*                    
*/

/**
 * Returns a boolean if the number is between two numbers.
 * @param {number} val1 - Value that should be more than the between value
 * @param {number} between - Value that is going to get compared against
 * @param {number} val2 - Value that should be less than the between value
 * 
 * @returns {boolean} True if the value is between val1 and val2, otherwise false.
 */
function betweenNumbers(val1, between, val2){
	return ((between > val1) && (between < val2));
}

/**
 * Capitalizes the first letter of a given string.
 * @param {string} val - The string to capitalize.
 * @returns {string} The string with the first letter capitalized.
 */

function capitalizeFirstLetter(val) {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

/**
 * Reverses the case of each character in a string.
 *
 * @param {string} text - The input string to transform.
 * @returns {string} The string with its character cases flipped.
 */
function reverseStringCase(text) {
  let reversedString = [];

  for (let i = 0; i < text.length; i++) {
    if (text[i] == text[i].toUpperCase()) {
      reversedString.push(text[i].toLowerCase());
    } else {
      reversedString.push(text[i].toUpperCase());
    }
  }
  
  return reversedString.join("");
}

// TODO: draggable music player
/*
function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  console.log(document.getElementById(elmnt.id + "header"))
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
*/

/**
 * Returns a random string within the given array.
 *
 * @param {Array<any>} arr - An array of elements.
 * @returns {any} Returns the randomly picked element.
 */
function randomString(arr){
    const randomIndex = Math.floor(Math.random() * arr.length);
    return(arr[randomIndex])
}

/**
 * Halts execution for the given amount.
 *
 * @param {number} - Number of milisecond to halt.
 * @returns {Promise} Returns setTimeout promise.
 */
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Inserts the given node to the reference node.
 * 
 * @param {Node} referenceNode - Node to be taken as reference.
 * @param {Node} newNode - Node that will be placed after the reference.
 */
function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

/**
 * Loads the given script in the directory the server is currently loaded.
 * 
 * @param {string} str - URI of the loaded script.
 * @returns {Node} - Element that contains said script.
 */
function importScript(str){
  const el = document.createElement('script');
	el.src = where + '/' + str; 
	document.head.appendChild(el);

  return el;
}

/**
 * Parses a YouTube URL to get the Video ID
 * @param {string} url - Valid YouTube URL
 * @returns {string} Video ID
 */
function youtube_parser(url){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
}

/**
*  __   ___  __        __      ___            __  ___    __        __  
* |  \ |__  |__) |  | / _`    |__  |  | |\ | /  `  |  | /  \ |\ | /__` 
* |__/ |___ |__) \__/ \__>    |    \__/ | \| \__,  |  | \__/ | \| .__/ 
*                                                                      
*/

/**
 * Get the current time of the player and copies it to your clipboard.
 */
function gT(){
  number = player.getCurrentTime();
  navigator.clipboard.writeText(number.toFixed(2))
  .then(() => {
    console.log('Text copied to clipboard');
  })
  .catch((error) => {
    console.error('Error copying text to clipboard:', error);
  });
  console.log(player.getCurrentTime());
}

