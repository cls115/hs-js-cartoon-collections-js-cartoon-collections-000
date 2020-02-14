var dwarves = ["Doc", "Dopey", "Bashful", "Grumpy"];
function dwarfRollCall(dwarves) {
  var rollcall = "";
  for (var i = 0; i < dwarves.length; i++) {
    rollcall = rollcall + `${i+1}. ${dwarves[i]} `;
  }
  return rollcall;
}
function summonCaptainPlanet(planeteerCalls){
	var newCalls = [];
	for (var i = 0; i < planeteerCalls.length; i++) {
		var call = planeteerCalls[i].toUpperCase() + "!";
		newCalls.push(call);}
	return newCalls;
}
shortWords = ["wind", "fire"];
assortedWords = ["earth", "wind", "heart", "fire"];
function longPlaneteerCalls(words) {
  result = false 
  for(var i = 0; i < words.length; i++) {
  	if(words[i].length > 4) {
  	result = true	}
  }
  console.log("result", result);
  return result
}
function findTheCheese (foods) {
  var cheeses = ["cheddar", "gouda", "camembert"];
  for(var i = 0;i < foods.length; i++) {
  if (cheeses.includes(foods[i])){
  return (foods[i])
  }
}
  return "no cheese!"
}
  // for (var i = 0; i < cheeses.length; i++)
  //   for (var index = 0; index < foods.length; index++){ 
  //     if (cheeses[i]=== foods[index])
  //     return "cheddar";
  // }