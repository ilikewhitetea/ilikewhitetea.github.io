import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

kaboom({
    debug: true,
    fullscreen:true,

});

loadSprite('tlo', 'background.png')
loadSprite('balwan', '1.png')
loadSprite("renifer", "2.png")
loadSprite("sanki", "3.png")

const tlo = add([
	sprite('tlo'),   
	pos(0, 0),    
])

const renifer = add([
	sprite('renifer'),   
	pos(20, 80),    
])

const sanki = add([
	sprite('sanki'),   
	pos(240, 100),    
])

const balwan = add([
	sprite('balwan'),   
	pos(120, 80),    
])

function playSound(soundfile){
    document.getElementById("sound").innerHTML="<embed src=\""+soundfile+"\" hidden=\"true\" autostart=\"true\" loop=\"false\"/>";
}

if(onclick(this(window))){// Your condition
    playSound("muzyka.mp3"); // Location to your sound file
}

// const player = add([
// 	sprite("balwan"),   
// 	pos(120, 80),    

// ])
// const player = add([
// 	sprite("3"),   
// 	pos(120, 80),    
// 	rotate(0),        
// 	origin("center"), 


// player.onUpdate(() => {

// 	player.angle += 120 * dt()
// })

// for (let i = 0; i < 3; i++) {

// 	const x = rand(0, width())
// 	const y = rand(0, height())

// 	add([
// 		sprite("1"),
// 		pos(x, y),
// 	])
//     add([
// 		sprite("2"),
// 		pos(x, y),
// 	])
//     add([
// 		sprite("3"),
// 		pos(x, y),
// 	])

// }
