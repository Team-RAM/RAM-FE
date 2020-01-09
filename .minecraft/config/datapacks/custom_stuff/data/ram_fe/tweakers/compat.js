var RecipeTweaker = libcd.require("libcd.recipe.RecipeTweaker")
var TweakerUtils = libcd.require("libcd.util.TweakerUtils")

// Compat
// IronBarrels2 + Blockus
var barrelPattern = [
    ' i ',
    'ibi',
    ' i '
]
var baseBarrels = ["oak", "birch", "jungle", "acacia", "dark_oak", "bamboo"]
for (var i = 0; i < baseBarrels.length; i = i + 1) {
    var barrel = baseBarrels[i]
    var dict = {
        'i': "minecraft:iron_ingot",
        'b': "blockus:"+barrel+"_barrel"
    }
    RecipeTweaker.addDictShaped(barrelPattern, dict, "ironbarrels2:iron_barrel")
}
