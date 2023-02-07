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
	scale(1)

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

//width()
//height()

//tlo.scale(width(),height())

loadSound("muzyka","muzyka.mp3")



// play a looping soundtrack (check out AudioPlayOpt for more options)
let music = play("muzyka", {
    volume: 0.8,
    loop: true
})

// using the handle to control (check out AudioPlay for more controls / info)
// music.pause()
//music.play()

onKeyPress('space', ()=>{
	play('muzyka')
})



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

onUpdate(()=>{

	if(balwan.pos.x < 400) balwan.pos.x += 1
})
