var RecipeTweaker = libcd.require("libcd.recipe.RecipeTweaker")
var TweakerUtils = libcd.require("libcd.util.TweakerUtils")
var TRTweaker = libcd.require("techreborn.TRTweaker")

// Recipe Conflicts
RecipeTweaker.removeRecipe("soulshards:vile_dust")
RecipeTweaker.removeRecipe("retroexchange:transmution_id_45")
TRTweaker.addGrinder(["minecraft:soul_sand@1"], ["soulshards:vile_dust@2"], 2, 200)
