var RecipeTweaker = libcd.require("libcd.recipe.RecipeTweaker");
var CauldronRecipeTweaker = libcd.require("mods.coww.libcd.CauldronRecipeTweaker");

RecipeTweaker.removeRecipe("requiem:opus_daemonium");

CauldronRecipeTweaker.addCauldronRecipe(["minecraft:feather", "minecraft:bone", "minecraft:rotten_flesh", "mobz:rottenflesh", "minecraft:redstone"], "thehallow:blood", "minecraft:book", "requiem:opus_daemonium_curse");
CauldronRecipeTweaker.addCauldronRecipe(["minecraft:feather", "minecraft:bone", "minecraft:rotten_flesh", "mobz:rottenflesh", "minecraft:glowstone_dust"], "thehallow:blood", "minecraft:book", "requiem:opus_daemonium_cure");
