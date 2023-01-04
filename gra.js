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
    document.getElementById("sound").innerHTML="<embed src=\""+soundfile+"\" hidden=\"true\" autostart=\"true\" loop=\"true\"/>";
}

