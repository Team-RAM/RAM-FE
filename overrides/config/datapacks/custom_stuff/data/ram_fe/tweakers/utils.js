var RecipeTweaker = libcd.require("libcd.recipe.RecipeTweaker");

// better dispenser recipe
var dispenserPattern = [
    ' rs',
    'rds',
    ' rs'
];
var dispenserDict = {
    'r': 'minecraft:stick',
    's': 'minecraft:string',
    'd': 'minecraft:dropper'
};
RecipeTweaker.addDictShaped(dispenserPattern, dispenserDict, "minecraft:dispenser");
