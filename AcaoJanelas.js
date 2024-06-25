    
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
		var temporario = remVal(Janelas,myWindow.textContent);
		divResultado.textContent = JanelasAbertas(temporario);

    }
	
	function openWindow(windowId) {
    var myWindow = document.getElementById(windowId);
    myWindow.style.display = "block";
	
	Janelas.push(myWindow.textContent);
	//var Janelas = document.getElementById('resultado').textContent+myWindow.textContent;

	divResultado.textContent = JanelasAbertas(Janelas);
}