    
    function minimizeWindow(windowId) {
        var myWindow = document.getElementById(windowId);
        myWindow.style.display = "none";
    }

    function maximizeWindow() {
        // Adicione a lógica para maximizar a janela
    }

    function closeWindow(windowId) {
	var myWindow = document.getElementById(windowId);
        myWindow.style.display = "none";
		var novo = remVal(Janelas,myWindow.textContent)
		var temporario = novo[0];
		actions.splice(novo[1],1);
		//divResultado.textContent = JanelasAbertas(temporario);
		JanelasAbertas(temporario,windowId);

    }
	
	function openWindow(windowId) {
    var myWindow = document.getElementById(windowId);
    myWindow.style.display = "block";
	if (Janelas.includes(myWindow.textContent)){}
	else {
	Janelas.push(myWindow.textContent);
	//var Janelas = document.getElementById('resultado').textContent+myWindow.textContent;
	actions.push(function() { openWindow(windowId); });
	//divResultado.textContent = JanelasAbertas(Janelas);
	JanelasAbertas(Janelas,windowId);
	}
}