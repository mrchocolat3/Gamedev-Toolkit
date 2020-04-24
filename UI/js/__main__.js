// import sys
// import webbrowser
var command = require("./command")
t = "-c"
n = "openFile"


function get_command(cmd){
	if(cmd.length > 0){
		var command_type = cmd[0]
		var command_name = cmd.slice(1, cmd.length)
		return [command_type, command_name]
	}
}

function run_command_tools(cmd){
	tag = cmd[0]
	if (tag == '--name-t') return command.generateGameName(theme=cmd[1])
	if (tag == '--name') return command.generateGameName(theme=null)

	if (tag == '--theme') return command.generateTheme(theme=null) 
	if (tag == '--theme-n') return command.generateTheme(theme=cmd[1])

	if (tag == '--item') return command.generateItemName(listname=cmd[1])

	if (tag == '--npc-g-f-l') return command.generateNpcNames(cmd[1], first_name=cmd[2], last_name=cmd[3])
	if (tag == '--npc-g-f') return command.generateNpcNames(cmd[1], first_name=cmd[2], last_name=null)	
	if (tag == '--npc-g-l') return command.generateNpcNames(cmd[1], first_name=null, last_name=cmd[2])
	if (tag == '--npc-g') return command.generateNpcNames(cmd[1], first_name=null, last_name=null)
	if (tag == '--npc-f') return command.generateNpcNames(null, first_name=cmd[1], last_name=null)
	if (tag == '--npc-l') return command.generateNpcNames(null, first_name=null, last_name=cmd[1])
	if (tag == '--npc-f-l') return command.generateNpcNames(null, first_name=cmd[1], last_name=cmd[2])
	if (tag == '--npc') return command.generateNpcNames(null, first_name=null, last_name=null)
}

function run_command_apps(tag){if (tag[0] == '--ls') return command.getApplist()}


module.exports = {
	run_command: function(cmd){
		var values = get_command(cmd)
		var command_type = values[0]
		var command_name = values[1]
		if (command_type == "-t") return (`${run_command_tools(command_name)}`)

		if (command_type == '-b')
			var link = command_name[0]
			require("electron").shell.openExternal(link)

		if (command_type == "-g-app")
			var apps = run_command_apps(command_name)
			if(apps == null){ return ("no_apps_found") }else{ return (apps)}
	}
}
