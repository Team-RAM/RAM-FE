var RecipeTweaker = libcd.require("libcd.recipe.RecipeTweaker")
var TweakerUtils = libcd.require("libcd.util.TweakerUtils")

// better dispenser recipe
var dispenserPattern = [
    ' rs',
    'rds',
    ' rs'
]
var dispenserDict = {
    'r': 'minecraft:stick',
    's': 'minecraft:string',
    'd': 'minecraft:dropper'
}
RecipeTweaker.addDictShaped(dispenser, dispenserDict, "minecraft:dispenser")
