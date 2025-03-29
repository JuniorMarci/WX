var Conta = [];

function CalculadoraConta(dig) {
Conta.push(dig.toString());

const esp = ['+','-','*','/'];
var e1 = '';
var e2 = '';
var mue = false; 
var Opera = ''; 
for (var i = 0; i < Conta.length; i++) {
if(esp.includes(Conta [i])){
mue=true;
Opera=Conta[i];
 }
else if (mue) {e2 = e2+Conta[i];}
else {e1 = e1+Conta[i];}

}

if(Opera=="+"){var r = Number(e1)+Number(e2)}
else if(Opera=="-"){var r = Number(e1)-Number(e2)}
else if(Opera=="*"){var r = Number(e1)*Number(e2)}
else if(Opera=="/"){var r = Number(e1)/Number(e2)}



return r

}