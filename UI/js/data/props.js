var prp_h_Bathroom = ['Bath towels', 'Hand towels', 'Bath mat', 'Shower curtain', 'Bathtub', 'Rug', 'Cleaning supplies', 'Scale', 'Shower organizers', 'Toilet plunger', 'Toilet paper stand']

var prp_h_Bedroom = ['Mattress', 'Bed frame', 'Pillows', 'Comforter/sheets', 'Dresser', 'Nightstand', 'Curtains/blinds', 'Hangers', 'Mirror', 'Lamp', 'Alarm clock']

var prp_h_Kitchen = ['Table / Chairs', 'Pot & Pans', 'Dishes and Bowls', 'Cups / Mugs', 'Utensils', 'Blender / mixer', 'Coffie Pot / Teapot', 'Toaster', 'Microwave', 'Can/bottle opener', 'Oven mitts', 'Dish towels', 'Swiffer/duster', 'Broom & dust pan', 'Mop/bucket', 'Dish soap', 'Dish drying rack', 'Sponges', 'Paper towels stand', 'Tupperware', 'Wasterpaper basket', 'Water pitcher/filter', 'ice trays', 'Measuring Cups']

var prp_h_Laundry = ['Hamper', 'Ironing board', 'Iron']

var prp_h_Livingroom = ['Couch', 'Chairs', 'Coffee Table', 'TV stand', 'Floor Lamp', 'Curtains / blinds', 'Bed', 'Master Bed']

var prp_h_Misc = ['Vaccum', 'Desk/chair', 'Key hook', 'Flashlight', 'First Aid Kit', 'Batteries', 'Light bulbs', 'Surge protectors', 'Fan', 'Space heater', 'Book shelf', 'Books', 'Screwdriver / Basic tools', 'Garbage bags']

var prp_h_Technology = ['TV','DVD/Blu Ray player','Computer / laptop','Wifi router','Mobile phone','Camera']

var prp_park = ['Gate', 'Slide', 'Pond', 'Big round tree', 'Benches', 'Lamp post', 'Dustbins', 'Play Items']

var prp_street = ['Sofa', 'Tin', 'Toolbox', 'Paintbox', 'VLC', 'Median', 'Divider', 'Ladder', 'Trolly', 'Restroom', 'Chair', 'Suitcase', 'Fence', 'Travelbag', 'Water pump', 'Phone Booth', 'Lamp Post', 'Electric Box', 'Stop sign', 'Warning Sign', 'Roads', 'Sewage Grid']


module.exports = {
	get_props : function(props) {
		return eval(props)
	}
}