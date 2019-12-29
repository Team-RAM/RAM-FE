var RecipeTweaker = libcd.require("libcd.recipe.RecipeTweaker")
var TweakerUtils = libcd.require("libcd.util.TweakerUtils")
var TRTweaker = libcd.require("techreborn.TRTweaker")

// Books
var IntroBook = TweakerUtils.createItemStack("minecraft:written_book")
var ArmorstandBook = TweakerUtils.createItemStack("minecraft:written_book")
// Special NBT
TweakerUtils.addNbtToStack(ArmorstandBook, '{title:"Statues V2.5",author:"Stick God",datapack:"ArmourStatuesV2",pages:["[{\\"text\\":\\"      \\",\\"color\\":\\"white\\"},{\\"text\\":\\"Statues V2.5\\",\\"color\\":\\"dark_blue\\"},{\\"text\\":\\"     \\",\\"color\\":\\"white\\"},{\\"text\\":\\"\u24be\\",\\"color\\":\\"dark_purple\\",\\"hoverEvent\\":{\\"action\\":\\"show_text\\",\\"value\\":[{\\"text\\":\\"This book allows you to apply basic settings to an armour stand. Clicking the coloured links will adjust the closest armour stand within three blocks.\\",\\"color\\":\\"yellow\\"}]}},{\\"text\\":\\"\n\nTable of Contents\\",\\"color\\":\\"black\\"},{\\"text\\":\\"\nStyle Settings\\",\\"color\\":\\"dark_aqua\\",\\"clickEvent\\":{\\"action\\":\\"change_page\\",\\"value\\":2}},{\\"text\\":\\"\nNudge Position\\",\\"color\\":\\"dark_aqua\\",\\"clickEvent\\":{\\"action\\":\\"change_page\\",\\"value\\":3}},{\\"text\\":\\"\nAdjust Rotation\\",\\"color\\":\\"dark_aqua\\",\\"clickEvent\\":{\\"action\\":\\"change_page\\",\\"value\\":3}},{\\"text\\":\\"\nPose Presets\\",\\"color\\":\\"dark_aqua\\",\\"clickEvent\\":{\\"action\\":\\"change_page\\",\\"value\\":4}},{\\"text\\":\\"\nPose Adjustment\\",\\"color\\":\\"dark_aqua\\",\\"clickEvent\\":{\\"action\\":\\"change_page\\",\\"value\\":5}},{\\"text\\":\\"\nAuto Alignment\\",\\"color\\":\\"dark_aqua\\",\\"clickEvent\\":{\\"action\\":\\"change_page\\",\\"value\\":6}},{\\"text\\":\\"\nExchange Slots\\",\\"color\\":\\"dark_aqua\\",\\"clickEvent\\":{\\"action\\":\\"change_page\\",\\"value\\":6}},{\\"text\\":\\"\nPose Mirror & Flip\\",\\"color\\":\\"dark_aqua\\",\\"clickEvent\\":{\\"action\\":\\"change_page\\",\\"value\\":7}},{\\"text\\":\\"\nUtilities\\",\\"color\\":\\"dark_aqua\\",\\"clickEvent\\":{\\"action\\":\\"change_page\\",\\"value\\":7}},{\\"text\\":\\"\n\n      \\",\\"color\\":\\"white\\"},{\\"text\\":\\"Check Target\\",\\"color\\":\\"dark_green\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 999\\"}}]","[{\\"text\\":\\"     \\",\\"color\\":\\"white\\"},{\\"text\\":\\"Style Settings\\",\\"color\\":\\"dark_blue\\"},{\\"text\\":\\"\n\nShow Base Plate:\\",\\"color\\":\\"black\\"},{\\"text\\":\\"\n        \\",\\"color\\":\\"white\\"},{\\"text\\":\\"Yes\\",\\"color\\":\\"dark_green\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 1\\"}},{\\"text\\":\\" / \\",\\"color\\":\\"black\\"},{\\"text\\":\\"No\\",\\"color\\":\\"red\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 2\\"}},{\\"text\\":\\"\nShow Arms:\\",\\"color\\":\\"black\\"},{\\"text\\":\\"\n        \\",\\"color\\":\\"white\\"},{\\"text\\":\\"Yes\\",\\"color\\":\\"dark_green\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 3\\"}},{\\"text\\":\\" / \\",\\"color\\":\\"black\\"},{\\"text\\":\\"No\\",\\"color\\":\\"red\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 4\\"}},{\\"text\\":\\"\nSmall Stand:\\",\\"color\\":\\"black\\"},{\\"text\\":\\"\n        \\",\\"color\\":\\"white\\"},{\\"text\\":\\"Yes\\",\\"color\\":\\"dark_green\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 5\\"}},{\\"text\\":\\" / \\",\\"color\\":\\"black\\"},{\\"text\\":\\"No\\",\\"color\\":\\"red\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 6\\"}},{\\"text\\":\\"\nApply Gravity:\\",\\"color\\":\\"black\\"},{\\"text\\":\\"\n        \\",\\"color\\":\\"white\\"},{\\"text\\":\\"Yes\\",\\"color\\":\\"dark_green\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 7\\"}},{\\"text\\":\\" / \\",\\"color\\":\\"black\\"},{\\"text\\":\\"No\\",\\"color\\":\\"red\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 8\\"}},{\\"text\\":\\"\nStand Visible:\\",\\"color\\":\\"black\\"},{\\"text\\":\\"\n        \\",\\"color\\":\\"white\\"},{\\"text\\":\\"Yes\\",\\"color\\":\\"dark_green\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 9\\"}},{\\"text\\":\\" / \\",\\"color\\":\\"black\\"},{\\"text\\":\\"No\\",\\"color\\":\\"red\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 10\\"}},{\\"text\\":\\"\nDisplay Name:\\",\\"color\\":\\"black\\"},{\\"text\\":\\"\n        \\",\\"color\\":\\"white\\"},{\\"text\\":\\"Yes\\",\\"color\\":\\"dark_green\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 11\\"}},{\\"text\\":\\" / \\",\\"color\\":\\"black\\"},{\\"text\\":\\"No\\",\\"color\\":\\"red\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 12\\"}}]","[{\\"text\\":\\"     .\\",\\"color\\":\\"white\\"},{\\"text\\":\\"Nudge Position\\",\\"color\\":\\"dark_blue\\"},{\\"text\\":\\"   \\",\\"color\\":\\"white\\"},{\\"text\\":\\"\u24be\\",\\"color\\":\\"dark_purple\\",\\"hoverEvent\\":{\\"action\\":\\"show_text\\",\\"value\\":[{\\"text\\":\\"Turn gravity off before nudging the Y-position.\n\nNudges are in 16ths of a block to align with the pixels of the block textures.\\",\\"color\\":\\"yellow\\"}]}},{\\"text\\":\\"\n\nX:  \\",\\"color\\":\\"black\\"},{\\"text\\":\\"-8\\",\\"color\\":\\"dark_green\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 40\\"}},{\\"text\\":\\" \\",\\"color\\":\\"white\\"},{\\"text\\":\\"-3\\",\\"color\\":\\"dark_green\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 101\\"}},{\\"text\\":\\" \\",\\"color\\":\\"white\\"},{\\"text\\":\\"-1\\",\\"color\\":\\"dark_green\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 102\\"}},{\\"text\\":\\" \\",\\"color\\":\\"white\\"},{\\"text\\":\\"+1\\",\\"color\\":\\"dark_green\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 103\\"}},{\\"text\\":\\" \\",\\"color\\":\\"white\\"},{\\"text\\":\\"+3\\",\\"color\\":\\"dark_green\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 104\\"}},{\\"text\\":\\" \\",\\"color\\":\\"white\\"},{\\"text\\":\\"+8\\",\\"color\\":\\"dark_green\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 43\\"}},{\\"text\\":\\"\nY:  \\",\\"color\\":\\"black\\"},{\\"text\\":\\"-8\\",\\"color\\":\\"dark_green\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 44\\"}},{\\"text\\":\\" \\",\\"color\\":\\"white\\"},{\\"text\\":\\"-3\\",\\"color\\":\\"dark_green\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 105\\"}},{\\"text\\":\\" \\",\\"color\\":\\"white\\"},{\\"text\\":\\"-1\\",\\"color\\":\\"dark_green\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 106\\"}},{\\"text\\":\\" \\",\\"color\\":\\"white\\"},{\\"text\\":\\"+1\\",\\"color\\":\\"dark_green\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 107\\"}},{\\"text\\":\\" \\",\\"color\\":\\"white\\"},{\\"text\\":\\"+3\\",\\"color\\":\\"dark_green\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 108\\"}},{\\"text\\":\\" \\",\\"color\\":\\"white\\"},{\\"text\\":\\"+8\\",\\"color\\":\\"dark_green\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 47\\"}},{\\"text\\":\\"\nZ:  \\",\\"color\\":\\"black\\"},{\\"text\\":\\"-8\\",\\"color\\":\\"dark_green\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 48\\"}},{\\"text\\":\\" \\",\\"color\\":\\"white\\"},{\\"text\\":\\"-3\\",\\"color\\":\\"dark_green\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 109\\"}},{\\"text\\":\\" \\",\\"color\\":\\"white\\"},{\\"text\\":\\"-1\\",\\"color\\":\\"dark_green\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 110\\"}},{\\"text\\":\\" \\",\\"color\\":\\"white\\"},{\\"text\\":\\"+1\\",\\"color\\":\\"dark_green\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 111\\"}},{\\"text\\":\\" \\",\\"color\\":\\"white\\"},{\\"text\\":\\"+3\\",\\"color\\":\\"dark_green\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 112\\"}},{\\"text\\":\\" \\",\\"color\\":\\"white\\"},{\\"text\\":\\"+8\\",\\"color\\":\\"dark_green\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 51\\"}},{\\"text\\":\\"\n\n     \\",\\"color\\":\\"white\\"},{\\"text\\":\\"Adjust Rotation\\",\\"color\\":\\"dark_blue\\"},{\\"text\\":\\"  \\",\\"color\\":\\"white\\"},{\\"text\\":\\"\u24be\\",\\"color\\":\\"dark_purple\\",\\"hoverEvent\\":{\\"action\\":\\"show_text\\",\\"value\\":[{\\"text\\":\\"The angle step (default 15\u00b0) is used for both the stand rotation and the pose adjustments.\n\nToward and Away turn the armour stand to face toward or away from you.\\",\\"color\\":\\"yellow\\"}]}},{\\"text\\":\\"\n\n  \\",\\"color\\":\\"white\\"},{\\"text\\":\\"<<\\",\\"color\\":\\"dark_green\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 56\\"}},{\\"text\\":\\"  \\",\\"color\\":\\"white\\"},{\\"text\\":\\"45\u00b0\\",\\"color\\":\\"dark_green\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 120\\"}},{\\"text\\":\\" \\",\\"color\\":\\"black\\"},{\\"text\\":\\"15\u00b0\\",\\"color\\":\\"dark_green\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 121\\"}},{\\"text\\":\\" \\",\\"color\\":\\"black\\"},{\\"text\\":\\"5\u00b0\\",\\"color\\":\\"dark_green\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 122\\"}},{\\"text\\":\\" \\",\\"color\\":\\"black\\"},{\\"text\\":\\"1\u00b0\\",\\"color\\":\\"dark_green\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 123\\"}},{\\"text\\":\\"  \\",\\"color\\":\\"white\\"},{\\"text\\":\\">>\\",\\"color\\":\\"dark_green\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 57\\"}},{\\"text\\":\\"\n\n     \\",\\"color\\":\\"white\\"},{\\"text\\":\\"Toward\\",\\"color\\":\\"dark_green\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 124\\"}},{\\"text\\":\\"   \\",\\"color\\":\\"white\\"},{\\"text\\":\\"Away\\",\\"color\\":\\"dark_green\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 125\\"}}]","[{\\"text\\":\\"     \\",\\"color\\":\\"white\\"},{\\"text\\":\\"Pose Presets\\",\\"color\\":\\"dark_blue\\"},{\\"text\\":\\"    \\",\\"color\\":\\"white\\"},{\\"text\\":\\"\u24be\\",\\"color\\":\\"dark_purple\\",\\"hoverEvent\\":{\\"action\\":\\"show_text\\",\\"value\\":[{\\"text\\":\\"The Death pose is for a figure lying down and requires a separate armour stand for the legs.\n\nThe Block and Item presets are designed to hold blocks and items in line with the world grid.\\",\\"color\\":\\"yellow\\"}]}},{\\"text\\":\\"\n\nAttention\\",\\"color\\":\\"dark_green\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 20\\"}},{\\"text\\":\\"    .\\",\\"color\\":\\"white\\"},{\\"text\\":\\"Confident\\",\\"color\\":\\"dark_green\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 30\\"}},{\\"text\\":\\"\nWalking\\",\\"color\\":\\"dark_green\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 21\\"}},{\\"text\\":\\"      ..\\",\\"color\\":\\"white\\"},{\\"text\\":\\"Salute\\",\\"color\\":\\"dark_green\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 31\\"}},{\\"text\\":\\"\nRunning\\",\\"color\\":\\"dark_green\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 22\\"}},{\\"text\\":\\"     ..\\",\\"color\\":\\"white\\"},{\\"text\\":\\"Death\\",\\"color\\":\\"dark_green\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 32\\"}},{\\"text\\":\\"\nPointing\\",\\"color\\":\\"dark_green\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 23\\"}},{\\"text\\":\\"     ..\\",\\"color\\":\\"white\\"},{\\"text\\":\\"Facepalm\\",\\"color\\":\\"dark_green\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 33\\"}},{\\"text\\":\\"\nBlocking\\",\\"color\\":\\"dark_green\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 24\\"}},{\\"text\\":\\"     .\\",\\"color\\":\\"white\\"},{\\"text\\":\\"Lazing\\",\\"color\\":\\"dark_green\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 34\\"}},{\\"text\\":\\"\nLungeing\\",\\"color\\":\\"dark_green\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 25\\"}},{\\"text\\":\\"    .\\",\\"color\\":\\"white\\"},{\\"text\\":\\"Confused\\",\\"color\\":\\"dark_green\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 35\\"}},{\\"text\\":\\"\nWinning\\",\\"color\\":\\"dark_green\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 26\\"}},{\\"text\\":\\"      ..\\",\\"color\\":\\"white\\"},{\\"text\\":\\"Formal\\",\\"color\\":\\"dark_green\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 36\\"}},{\\"text\\":\\"\nSitting\\",\\"color\\":\\"dark_green\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 27\\"}},{\\"text\\":\\"       ..\\",\\"color\\":\\"white\\"},{\\"text\\":\\"Sad\\",\\"color\\":\\"dark_green\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 37\\"}},{\\"text\\":\\"\nArabesque\\",\\"color\\":\\"dark_green\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 28\\"}},{\\"text\\":\\" .\\",\\"color\\":\\"white\\"},{\\"text\\":\\"Joyous\\",\\"color\\":\\"dark_green\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 38\\"}},{\\"text\\":\\"\nCupid\\",\\"color\\":\\"dark_green\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 29\\"}},{\\"text\\":\\"        .\\",\\"color\\":\\"white\\"},{\\"text\\":\\"Stargazing\\",\\"color\\":\\"dark_green\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 39\\"}},{\\"text\\":\\"\n\nBlock\\",\\"color\\":\\"dark_green\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 141\\"}},{\\"text\\":\\"        ..\\",\\"color\\":\\"white\\"},{\\"text\\":\\"Item\\",\\"color\\":\\"dark_green\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 142\\"}}]","[{\\"text\\":\\"   .\\",\\"color\\":\\"white\\"},{\\"text\\":\\"Pose Adjustment\\",\\"color\\":\\"dark_blue\\"},{\\"text\\":\\"  \\",\\"color\\":\\"white\\"},{\\"text\\":\\"\u24be\\",\\"color\\":\\"dark_purple\\",\\"hoverEvent\\":{\\"action\\":\\"show_text\\",\\"value\\":[{\\"text\\":\\"The angle step set for adjusting the stand rotation is also used for the pose adjustments.\\",\\"color\\":\\"yellow\\"}]}},{\\"text\\":\\"\n\n          .\\",\\"color\\":\\"white\\"},{\\"text\\":\\"X\\",\\"color\\":\\"black\\"},{\\"text\\":\\"     .\\",\\"color\\":\\"white\\"},{\\"text\\":\\"Y\\",\\"color\\":\\"black\\"},{\\"text\\":\\"     .\\",\\"color\\":\\"white\\"},{\\"text\\":\\"Z\\",\\"color\\":\\"black\\"},{\\"text\\":\\"\nHead\\",\\"color\\":\\"black\\"},{\\"text\\":\\"   \\",\\"color\\":\\"white\\"},{\\"text\\":\\"-\\",\\"color\\":\\"red\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 60\\"}},{\\"text\\":\\" .\\",\\"color\\":\\"white\\"},{\\"text\\":\\"+\\",\\"color\\":\\"dark_green\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 61\\"}},{\\"text\\":\\"  .\\",\\"color\\":\\"white\\"},{\\"text\\":\\"-\\",\\"color\\":\\"red\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 62\\"}},{\\"text\\":\\" .\\",\\"color\\":\\"white\\"},{\\"text\\":\\"+\\",\\"color\\":\\"dark_green\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 63\\"}},{\\"text\\":\\"  .\\",\\"color\\":\\"white\\"},{\\"text\\":\\"-\\",\\"color\\":\\"red\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 64\\"}},{\\"text\\":\\" .\\",\\"color\\":\\"white\\"},{\\"text\\":\\"+\\",\\"color\\":\\"dark_green\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 65\\"}},{\\"text\\":\\"\n\nBody\\",\\"color\\":\\"black\\"},{\\"text\\":\\"   \\",\\"color\\":\\"white\\"},{\\"text\\":\\"-\\",\\"color\\":\\"red\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 67\\"}},{\\"text\\":\\" .\\",\\"color\\":\\"white\\"},{\\"text\\":\\"+\\",\\"color\\":\\"dark_green\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 66\\"}},{\\"text\\":\\"  .\\",\\"color\\":\\"white\\"},{\\"text\\":\\"-\\",\\"color\\":\\"red\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 68\\"}},{\\"text\\":\\" .\\",\\"color\\":\\"white\\"},{\\"text\\":\\"+\\",\\"color\\":\\"dark_green\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 69\\"}},{\\"text\\":\\"  .\\",\\"color\\":\\"white\\"},{\\"text\\":\\"-\\",\\"color\\":\\"red\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 70\\"}},{\\"text\\":\\" .\\",\\"color\\":\\"white\\"},{\\"text\\":\\"+\\",\\"color\\":\\"dark_green\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 71\\"}},{\\"text\\":\\"\n\nR.Arm\\",\\"color\\":\\"black\\"},{\\"text\\":\\"  .\\",\\"color\\":\\"white\\"},{\\"text\\":\\"-\\",\\"color\\":\\"red\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 72\\"}},{\\"text\\":\\" .\\",\\"color\\":\\"white\\"},{\\"text\\":\\"+\\",\\"color\\":\\"dark_green\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 73\\"}},{\\"text\\":\\"  .\\",\\"color\\":\\"white\\"},{\\"text\\":\\"-\\",\\"color\\":\\"red\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 74\\"}},{\\"text\\":\\" .\\",\\"color\\":\\"white\\"},{\\"text\\":\\"+\\",\\"color\\":\\"dark_green\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 75\\"}},{\\"text\\":\\"  .\\",\\"color\\":\\"white\\"},{\\"text\\":\\"-\\",\\"color\\":\\"red\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 77\\"}},{\\"text\\":\\" .\\",\\"color\\":\\"white\\"},{\\"text\\":\\"+\\",\\"color\\":\\"dark_green\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 76\\"}},{\\"text\\":\\"\n\nL.Arm\\",\\"color\\":\\"black\\"},{\\"text\\":\\"  .\\",\\"color\\":\\"white\\"},{\\"text\\":\\"-\\",\\"color\\":\\"red\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 78\\"}},{\\"text\\":\\" .\\",\\"color\\":\\"white\\"},{\\"text\\":\\"+\\",\\"color\\":\\"dark_green\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 79\\"}},{\\"text\\":\\"  .\\",\\"color\\":\\"white\\"},{\\"text\\":\\"-\\",\\"color\\":\\"red\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 81\\"}},{\\"text\\":\\" .\\",\\"color\\":\\"white\\"},{\\"text\\":\\"+\\",\\"color\\":\\"dark_green\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 80\\"}},{\\"text\\":\\"  .\\",\\"color\\":\\"white\\"},{\\"text\\":\\"-\\",\\"color\\":\\"red\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 82\\"}},{\\"text\\":\\" .\\",\\"color\\":\\"white\\"},{\\"text\\":\\"+\\",\\"color\\":\\"dark_green\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 83\\"}},{\\"text\\":\\"\n\nR.Leg\\",\\"color\\":\\"black\\"},{\\"text\\":\\"  .\\",\\"color\\":\\"white\\"},{\\"text\\":\\"-\\",\\"color\\":\\"red\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 84\\"}},{\\"text\\":\\" .\\",\\"color\\":\\"white\\"},{\\"text\\":\\"+\\",\\"color\\":\\"dark_green\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 85\\"}},{\\"text\\":\\"  .\\",\\"color\\":\\"white\\"},{\\"text\\":\\"-\\",\\"color\\":\\"red\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 87\\"}},{\\"text\\":\\" .\\",\\"color\\":\\"white\\"},{\\"text\\":\\"+\\",\\"color\\":\\"dark_green\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 86\\"}},{\\"text\\":\\"  .\\",\\"color\\":\\"white\\"},{\\"text\\":\\"-\\",\\"color\\":\\"red\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 89\\"}},{\\"text\\":\\" .\\",\\"color\\":\\"white\\"},{\\"text\\":\\"+\\",\\"color\\":\\"dark_green\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 88\\"}},{\\"text\\":\\"\n\nL.Leg\\",\\"color\\":\\"black\\"},{\\"text\\":\\"  .\\",\\"color\\":\\"white\\"},{\\"text\\":\\"-\\",\\"color\\":\\"red\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 90\\"}},{\\"text\\":\\" .\\",\\"color\\":\\"white\\"},{\\"text\\":\\"+\\",\\"color\\":\\"dark_green\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 91\\"}},{\\"text\\":\\"  .\\",\\"color\\":\\"white\\"},{\\"text\\":\\"-\\",\\"color\\":\\"red\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 92\\"}},{\\"text\\":\\" .\\",\\"color\\":\\"white\\"},{\\"text\\":\\"+\\",\\"color\\":\\"dark_green\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 93\\"}},{\\"text\\":\\"  .\\",\\"color\\":\\"white\\"},{\\"text\\":\\"-\\",\\"color\\":\\"red\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 94\\"}},{\\"text\\":\\" .\\",\\"color\\":\\"white\\"},{\\"text\\":\\"+\\",\\"color\\":\\"dark_green\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 95\\"}}]","[{\\"text\\":\\"     \\",\\"color\\":\\"white\\"},{\\"text\\":\\"Auto Alignment\\",\\"color\\":\\"dark_blue\\"},{\\"text\\":\\"   \\",\\"color\\":\\"white\\"},{\\"text\\":\\"\u24be\\",\\"color\\":\\"dark_purple\\",\\"hoverEvent\\":{\\"action\\":\\"show_text\\",\\"value\\":[{\\"text\\":\\"Pose and position an armour stand to align a held block or item with an adjacent block.\\",\\"color\\":\\"yellow\\"}]}},{\\"text\\":\\"\n\n\\",\\"color\\":\\"white\\"},{\\"text\\":\\"Block on surface\\",\\"color\\":\\"dark_green\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 151\\"},\\"hoverEvent\\":{\\"action\\":\\"show_text\\",\\"value\\":[{\\"text\\":\\"Align an armour stand placed on a surface so that a block held by it appears on the surface.\\",\\"color\\":\\"yellow\\"}]}},{\\"text\\":\\"\n\n\\",\\"color\\":\\"white\\"},{\\"text\\":\\"Item on surface\\",\\"color\\":\\"dark_green\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 152\\"},\\"hoverEvent\\":{\\"action\\":\\"show_text\\",\\"value\\":[{\\"text\\":\\"Align an armour stand placed on a surface so that an item held by it appears upright on the surface.\\",\\"color\\":\\"yellow\\"}]}},{\\"text\\":\\"\n\\",\\"color\\":\\"white\\"},{\\"text\\":\\"Item flat on surface\\",\\"color\\":\\"dark_green\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 153\\"},\\"hoverEvent\\":{\\"action\\":\\"show_text\\",\\"value\\":[{\\"text\\":\\"Align an armour stand placed on a surface so that a non-tool item held by it appears flat on the surface.\\",\\"color\\":\\"yellow\\"}]}},{\\"text\\":\\"\n\\",\\"color\\":\\"white\\"},{\\"text\\":\\"Tool flat on surface\\",\\"color\\":\\"dark_green\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 154\\"},\\"hoverEvent\\":{\\"action\\":\\"show_text\\",\\"value\\":[{\\"text\\":\\"Align an armour stand placed on a surface so that a tool held by it appears flat on the surface.\\",\\"color\\":\\"yellow\\"}]}},{\\"text\\":\\"\n\n\\",\\"color\\":\\"white\\"},{\\"text\\":\\"Tool rack\\",\\"color\\":\\"dark_green\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 155\\"},\\"hoverEvent\\":{\\"action\\":\\"show_text\\",\\"value\\":[{\\"text\\":\\"Align an armour stand with a tripwire hook on the wall above it so that a tool held by it appears to be hanging up.\n\nAlso locks the armour stand and disables all slots except the main hand.\\",\\"color\\":\\"yellow\\"}]}},{\\"text\\":\\"\n\n    \\",\\"color\\":\\"white\\"},{\\"text\\":\\"Exchange Slots\\",\\"color\\":\\"dark_blue\\"},{\\"text\\":\\"   \\",\\"color\\":\\"white\\"},{\\"text\\":\\"\u24be\\",\\"color\\":\\"dark_purple\\",\\"hoverEvent\\":{\\"action\\":\\"show_text\\",\\"value\\":[{\\"text\\":\\"Exchange items between equipment slots\\",\\"color\\":\\"yellow\\"}]}},{\\"text\\":\\"\n\n   \\",\\"color\\":\\"white\\"},{\\"text\\":\\"Main \\",\\"color\\":\\"black\\"},{\\"text\\":\\"<->\\",\\"color\\":\\"dark_green\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 161\\"}},{\\"text\\":\\" Off Hand\\",\\"color\\":\\"black\\"},{\\"text\\":\\"\n  \\",\\"color\\":\\"white\\"},{\\"text\\":\\"Main Hand \\",\\"color\\":\\"black\\"},{\\"text\\":\\"<->\\",\\"color\\":\\"dark_green\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 162\\"}},{\\"text\\":\\" Head\\",\\"color\\":\\"black\\"}]","[{\\"text\\":\\"  .\\",\\"color\\":\\"white\\"},{\\"text\\":\\"Pose Mirror & Flip\\",\\"color\\":\\"dark_blue\\"},{\\"text\\":\\" \\",\\"color\\":\\"white\\"},{\\"text\\":\\"\u24be\\",\\"color\\":\\"dark_purple\\",\\"hoverEvent\\":{\\"action\\":\\"show_text\\",\\"value\\":[{\\"text\\":\\"Mirroring copies the arm or leg pose from left to right or vice versa. Flipping reverses the armour stands pose entirely.\\",\\"color\\":\\"yellow\\"}]}},{\\"text\\":\\"\n\n \\",\\"color\\":\\"white\\"},{\\"text\\":\\"Mirror Arms\\",\\"color\\":\\"black\\"},{\\"text\\":\\"  \\",\\"color\\":\\"white\\"},{\\"text\\":\\"L>R\\",\\"color\\":\\"dark_green\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 131\\"}},{\\"text\\":\\"  \\",\\"color\\":\\"white\\"},{\\"text\\":\\"R>L\\",\\"color\\":\\"dark_green\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 132\\"}},{\\"text\\":\\"\n          \\",\\"color\\":\\"white\\"},{\\"text\\":\\"Legs\\",\\"color\\":\\"black\\"},{\\"text\\":\\"  \\",\\"color\\":\\"white\\"},{\\"text\\":\\"L>R\\",\\"color\\":\\"dark_green\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 133\\"}},{\\"text\\":\\"  \\",\\"color\\":\\"white\\"},{\\"text\\":\\"R>L\\",\\"color\\":\\"dark_green\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 134\\"}},{\\"text\\":\\"\n\n                  .\\",\\"color\\":\\"white\\"},{\\"text\\":\\"<-Flip->\\",\\"color\\":\\"dark_green\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 135\\"}},{\\"text\\":\\"\n\n         \\",\\"color\\":\\"white\\"},{\\"text\\":\\"Utilities\\",\\"color\\":\\"dark_blue\\"},{\\"text\\":\\"        \\",\\"color\\":\\"white\\"},{\\"text\\":\\"\u24be\\",\\"color\\":\\"dark_purple\\",\\"hoverEvent\\":{\\"action\\":\\"show_text\\",\\"value\\":[{\\"text\\":\\"Copying an armour stand stores its settings and pose in the book and these can then be pasted into another armour stand. The book must be the selected item in your main hand for this to work.\n\nLocking an armour stand prevents it from being changed using the book and disables interaction with the equipment slots.\n\nSealing an armour stand, which is only available in creative mode, does the same and in addition makes it invulnerable\\",\\"color\\":\\"yellow\\"}]}},{\\"text\\":\\"\n\n     .\\",\\"color\\":\\"white\\"},{\\"text\\":\\"Copy\\",\\"color\\":\\"dark_green\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 1004\\"}},{\\"text\\":\\" / \\",\\"color\\":\\"black\\"},{\\"text\\":\\"Paste\\",\\"color\\":\\"red\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 1005\\"}},{\\"text\\":\\"\n\n     \\",\\"color\\":\\"white\\"},{\\"text\\":\\"Lock\\",\\"color\\":\\"dark_green\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 1000\\"}},{\\"text\\":\\" / \\",\\"color\\":\\"black\\"},{\\"text\\":\\"Unlock\\",\\"color\\":\\"red\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 1001\\"}},{\\"text\\":\\"\n\n     \\",\\"color\\":\\"white\\"},{\\"text\\":\\"Seal\\",\\"color\\":\\"dark_green\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 1002\\"}},{\\"text\\":\\" / \\",\\"color\\":\\"black\\"},{\\"text\\":\\"Unseal\\",\\"color\\":\\"red\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/trigger as_trigger set 1003\\"}}]"],SavedPose:{Pose:{Head:[0f,0f,0f],Body:[0f,0f,0f],LeftArm:[0f,0f,0f],RightArm:[0f,0f,0f],LeftLeg:[0f,0f,0f],RightLeg:[0f,0f,0f]},Rotation:[0f,0f],NoBasePlate:0b,ShowArms:0b,Small:0b,NoGravity:0b,Invisible:0b,CustomNameVisible:0b,PoseSaved:0b}}')
TweakerUtils.addNbtToStack(IntroBook, '{pages:[\'{"text":"Welcome to ATM: Fabric!\n\n "}\',"",""],title:"RAM-Fabric Edition Guide",author:Martmists}')
// Book recipes
RecipeTweaker.addShapeless(["minecraft:writable_book", "minecraft:armor_stand"], ArmorstandBook)
RecipeTweaker.addShapeless(["minecraft:dirt"], IntroBook)

// Recipe Conflicts
RecipeTweaker.removeRecipe("soulshards:vile_dust")
RecipeTweaker.removeRecipe("retroexchange:transmution_id_45")
TRTweaker.addGrinder(["minecraft:soul_sand@1"], ["soulshards:vile_dust@2"], 2, 200)

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
