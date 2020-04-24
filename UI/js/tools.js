
function generateName(){
	var theme = document.getElementById('game-theme-name').value;
	var cmd = (theme) ? `-t --name-t ${theme}` : "-t --name"
	document.getElementById('G-name').innerHTML = run_command(cmd.split(" "));
}

function generateNpcName(){
	gender = document.getElementById('gender').value;
	first_name = document.getElementById('first-name').value;
	last_name = document.getElementById('last-name').value;
	if(gender == "male" || gender == "female"){
		if(first_name && last_name && gender) var cmd = `-t --npc-g-f-l ${gender} ${first_name} ${last_name}`
		else if(first_name && !last_name && gender) var cmd = `-t --npc-g-f ${gender} ${first_name}`
		else if(!first_name && last_name && gender) var cmd = `-t --npc-g-l ${gender} ${last_name}`
		else var cmd = `-t --npc-g ${gender}`		
	}else{
		if(first_name && last_name) var cmd = `-t --npc-f-l ${first_name} ${last_name}`
		else if(first_name && !last_name) var cmd = `-t --npc-f ${first_name}`
		else if(!first_name && last_name) var cmd = `-t --npc-l ${last_name}`
		else var cmd = "-t --npc"
	}
	  document.getElementById('G-npc').innerHTML = run_command(cmd.split(" "));
}

function generateTheme(){
	var theme = document.getElementById('custom-theme').value;
	var cmd = (theme) ? `-t --theme-n ${theme}` : "-t --theme"
	document.getElementById('G-theme').innerHTML = run_command(cmd.split(" "))
}

function generateItemName(){
	var item = document.getElementById("ItemsGen").value;
	if(item != "x"){
		var cmd = `-t --item ${item}`
		document.getElementById('G-item').innerHTML = run_command(cmd.split(" "));
	}else{
		alert("You must select an Item type before generating Item names!");
	}
}