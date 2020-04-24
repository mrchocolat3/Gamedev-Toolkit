var data = require(`./data/data`)

//Real weapons:
var wp_anti_tank = data.get_data(`-i --wp-real anti_tanks`)
var wp_carbines = data.get_data(`-i --wp-real carbines`)
var wp_handguns = data.get_data(`-i --wp-real handguns`)
var wp_knife = data.get_data(`-i --wp-real knife`)
var wp_mine = data.get_data(`-i --wp-real mines`)
var wp_nade = data.get_data(`-i --wp-real nades`)
var wp_rifle = data.get_data(`-i --wp-real rifles`)
var wp_shotgun = data.get_data(`-i --wp-real shotgun`)
var wp_sub_machine = data.get_data(`-i --wp-real sub_machine`)
var wp_t_assult = data.get_data(`-i --wp-real t_assult`)
var wp_t_explosives = data.get_data(`-i --wp-real t_explosives`)

var prp_h_Bathroom = data.get_data(`-i --props prp_h_Bathroom`)
var prp_h_Bedroom = data.get_data(`-i --props prp_h_Bedroom`)
var prp_h_Kitchen = data.get_data(`-i --props prp_h_Kitchen`)
var prp_h_Laundry = data.get_data(`-i --props prp_h_Laundry`)
var prp_h_Livingroom = data.get_data(`-i --props prp_h_Livingroom`)
var prp_h_Misc = data.get_data(`-i --props prp_h_Misc`)
var prp_h_Technology = data.get_data(`-i --props prp_h_Technology`)
var prp_park = data.get_data(`-i --props prp_park`)
var prp_street = data.get_data(`-i --props prp_street`)

// Game weapons:
var wp_game = data.get_data(`-i --wp-game`)

// Names:
var theme_names = data.get_data(`-n --theme`)
var male_names = data.get_data(`-n --male`)
var female_names = data.get_data(`-n --female`)

// Word list
var word_list = data.get_data(`-i --word`)

function Pickrandom(list = []){
	return list[Math.floor(Math.random() * list.length)]
}

module.exports = {
	generateNpcNames: function(gender, first_name = null, last_name = null){
		if(gender == 'male') var name = Pickrandom(male_names)
		if(gender == 'female') var name = Pickrandom(female_names)
		else var name = Pickrandom([Pickrandom(male_names), Pickrandom(female_names)])
		
		if(first_name != null && last_name != null) var result = `${first_name} ${name} ${last_name}`
		else if(first_name != null && last_name == null) var result = `${first_name} ${name}`
		else if(last_name != null && first_name == null) var result = `${name} ${last_name}`
		else result = `${name}`

		return result
	},
	generateGameName: function(theme){
		var word = Pickrandom(word_list)
		var word2 = Pickrandom(word_list)
		if (theme == null){
			k = Pickrandom([word, word2])
			j = Pickrandom([`${word} ${word2}`, `${word2} ${word}`])
			var name = Pickrandom([k, j])
		}
		else{
			var name = Pickrandom([
				Pickrandom([word, `${word2}'s ${theme} ${word}`]),
				Pickrandom([`${theme}: The ${word2}`, `${Pickrandom(word_list)}: ${word2} ${theme}`])
				])
		}
		return name
	},
	generateTheme: function (theme = null){
		var word = Pickrandom(theme_names)
		if( theme != null){
			k = Pickrandom([word, theme])
			j = Pickrandom([f`{word} {theme}`, f`{theme} {word}`])
			var name = Pickrandom([k, j])
		}
		else var name = word

		return name
	},
	generateItemName: function(listname) {return Pickrandom(eval(listname))},

	getApplist: function(){
		var apps = launcher.get_apps()
		var system = launcher.get_system()

		if (system == `Darwin`){
			app = ['apps.replace(`.app`, ``) for apps in apps']
			return app
		}
		else{ return null}
	}
}