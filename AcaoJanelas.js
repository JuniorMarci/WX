
function makeWindowDraggable(windowId) {
        var isDragging = false,
            initialMouseX,
            initialMouseY,
            initialWindowX,
            initialWindowY,
            myWindow = document.getElementById(windowId),
            myTitleBar = myWindow.querySelector('.title-bar');

        myTitleBar.addEventListener("mousedown", function (e) {
            isDragging = true;
            initialMouseX = e.clientX;
            initialMouseY = e.clientY;
            initialWindowX = myWindow.offsetLeft;
            initialWindowY = myWindow.offsetTop;

            document.addEventListener("mousemove", handleMouseMove);
            document.addEventListener("mouseup", function () {
                isDragging = false;
                document.removeEventListener("mousemove", handleMouseMove);
            });
        });

        function handleMouseMove(e) {
            if (isDragging) {
                var deltaX = e.clientX - initialMouseX;
                var deltaY = e.clientY - initialMouseY;

                myWindow.style.left = initialWindowX + deltaX + "px";
                myWindow.style.top = initialWindowY + deltaY + "px";
            }
        }
    }
	
	
	
let zIndex = 0;

function bringToFront(id) {
    document.getElementById(id).style.zIndex = ++zIndex;
	document.getElementById("Menu").style.zIndex = ++zIndex;
	document.getElementById("taskbar").style.zIndex = ++zIndex;
}


    
    function minimizeWindow(windowId) {
        var myWindow = document.getElementById(windowId);
        myWindow.style.display = "none";
    }

    function maximizeWindow(windowId) {
        var myWindow = document.getElementById(windowId);
		if((myWindow.style.height=="99%")*(myWindow.style.width=="99%")){
		myWindow.style.height = "200px";
		myWindow.style.width = "300px";
		}
		
		else {
		myWindow.style.height = "99%";
		myWindow.style.width = "99%";
		myWindow.style.left = 0;
		myWindow.style.top = 0;
		}
    }

    function closeWindow(windowId) {
	var myWindow = document.getElementById(windowId);
        myWindow.style.display = "none";
		var novo = remVal(Janelas,myWindow.querySelector('span').textContent)
		var temporario = novo[0];
		actions.splice(novo[1],1);
		//divResultado.querySelector('span').textContent = JanelasAbertas(temporario);
		JanelasAbertas(temporario,windowId);

    }
	
	function openWindow(windowId) {
    var myWindow = document.getElementById(windowId);
    myWindow.style.display = "block";
	bringToFront(windowId);
	if (Janelas.includes(myWindow.querySelector('span').textContent)){}
	else {
	Janelas.push(myWindow.querySelector('span').textContent);
	//var Janelas = document.getElementById('resultado').querySelector('span').textContent+myWindow.querySelector('span').textContent;
	actions.push(function() { openWindow(windowId); });
	//divResultado.querySelector('span').textContent = JanelasAbertas(Janelas);
	JanelasAbertas(Janelas,windowId);
	}
}



var LisJan = ["myWindow1","myWindow2","myWindow3"];
LisJan.forEach(function(windowId) {
    makeWindowDraggable(windowId);
    document.getElementById(windowId).onclick = function() { bringToFront(windowId); };
});



