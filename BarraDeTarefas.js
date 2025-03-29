var Janelas = [];
var actions = [];

function JanelasAbertas(Janelas,myW) {

var divResultado = document.getElementById('resultado');
var Janelas = [...new Set(Janelas)]; // Replace with your texts
//actions.push(function() { openWindow(myW); });
//var actions = [...new Set(actions)]; // Replace with your texts

while (divResultado.hasChildNodes()) {  
  divResultado.removeChild(divResultado.firstChild);
}

Janelas.forEach(function(text, index) {
    var button = document.createElement('button');
    button.textContent = text;
	button.style.color="white";
	button.style.backgroundColor="transparent";
	button.style.fontFamily = "Arial, sans-serif";
	//button.style.cursor="pointer";
    button.onclick = actions[index];
    divResultado.appendChild(button);
});


return Janelas 
}


function remVal(Janelas,value) {
	
var temporario = [];
var im = Janelas.length;
//var indice = '';

for (let i = 0; i < im; i++) {
if(value!=Janelas[0]) {temporario.push(Janelas[0]);}
if(value==Janelas[0]) {var indice = i;}
Janelas.shift();
}
var im = temporario.length;
for (let i = 0; i < im; i++) {Janelas.push(temporario[i]);}

return [temporario,indice];

}