var male_name = require("./male_name").get_names()
var female_name = require("./female_name").get_f_names()
var themes = require("./themeName").get_themes()
var game_weapons = require("./game_weapons").get_g_weapons()

var r_wp = require("./real_weapons")
var props = require("./props")
var word = require("./word_list").get_words()
module.exports = {
	get_data: function(cmd){
		var cmd = cmd.split(" ")
		var tag = cmd[0]

		if (tag == "-i"){
			if (cmd[1] == "--wp-game") return game_weapons
			if (cmd[1] == "--wp-real") return r_wp.get_wepaon_list(cmd[2])
			if (cmd[1] == "--props") return props.get_props(cmd[2])
			if (cmd[1] == "--word") return word
		}
		
		if (tag == "-n"){
			if (cmd[1] == "--male") return male_name
			if (cmd[1] == "--female") return female_name
			if (cmd[1] == "--theme") return themes
		}
		
		if (tag == "-a")
			if (cmd[1] == "--mac") return get_mac_apps()
	}
}