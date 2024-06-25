var Janelas = [];

function JanelasAbertas(Janelas) {
var Janelas = [...new Set(Janelas)];
return Janelas 
}


function remVal(Janelas,value) {
	
var temporario = [];
var im = Janelas.length;

for (let i = 0; i < im; i++) {
if(value!=Janelas[0]) {temporario.push(Janelas[0]);}
Janelas.shift();
}
var im = temporario.length;
for (let i = 0; i < im; i++) {Janelas.push(temporario[i]);}

return temporario;

}