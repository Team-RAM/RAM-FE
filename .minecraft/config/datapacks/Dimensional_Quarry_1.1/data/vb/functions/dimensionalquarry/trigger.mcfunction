# Choose loot table
# Normal:
execute at @s[nbt=!{Item:{tag:{Enchantments:[{lvl: 1s, id: "minecraft:silk_touch"}]}}}] if block ^ ^1 ^-1 minecraft:glass run loot insert ^ ^ ^-1 loot vb:clear_focus_default
execute at @s[nbt=!{Item:{tag:{Enchantments:[{lvl: 1s, id: "minecraft:silk_touch"}]}}}] if block ^ ^1 ^-1 minecraft:light_gray_stained_glass run loot insert ^ ^ ^-1 loot vb:clay_focus_default
execute at @s[nbt=!{Item:{tag:{Enchantments:[{lvl: 1s, id: "minecraft:silk_touch"}]}}}] if block ^ ^1 ^-1 minecraft:black_stained_glass run loot insert ^ ^ ^-1 loot vb:coal_focus_default
execute at @s[nbt=!{Item:{tag:{Enchantments:[{lvl: 1s, id: "minecraft:silk_touch"}]}}}] if block ^ ^1 ^-1 minecraft:light_blue_stained_glass run loot insert ^ ^ ^-1 loot vb:diamond_focus_default
execute at @s[nbt=!{Item:{tag:{Enchantments:[{lvl: 1s, id: "minecraft:silk_touch"}]}}}] if block ^ ^1 ^-1 minecraft:lime_stained_glass run loot insert ^ ^ ^-1 loot vb:emerald_focus_default
execute at @s[nbt=!{Item:{tag:{Enchantments:[{lvl: 1s, id: "minecraft:silk_touch"}]}}}] if block ^ ^1 ^-1 minecraft:yellow_stained_glass run loot insert ^ ^ ^-1 loot vb:gold_focus_default
execute at @s[nbt=!{Item:{tag:{Enchantments:[{lvl: 1s, id: "minecraft:silk_touch"}]}}}] if block ^ ^1 ^-1 minecraft:orange_stained_glass run loot insert ^ ^ ^-1 loot vb:iron_focus_default
execute at @s[nbt=!{Item:{tag:{Enchantments:[{lvl: 1s, id: "minecraft:silk_touch"}]}}}] if block ^ ^1 ^-1 minecraft:blue_stained_glass run loot insert ^ ^ ^-1 loot vb:lapis_focus_default
execute at @s[nbt=!{Item:{tag:{Enchantments:[{lvl: 1s, id: "minecraft:silk_touch"}]}}}] if block ^ ^1 ^-1 minecraft:white_stained_glass run loot insert ^ ^ ^-1 loot vb:quartz_focus_default
execute at @s[nbt=!{Item:{tag:{Enchantments:[{lvl: 1s, id: "minecraft:silk_touch"}]}}}] if block ^ ^1 ^-1 minecraft:red_stained_glass run loot insert ^ ^ ^-1 loot vb:redstone_focus_default
# Silk touch:
execute at @s[nbt={Item:{tag:{Enchantments:[{lvl: 1s, id: "minecraft:silk_touch"}]}}}] if block ^ ^1 ^-1 minecraft:glass run loot insert ^ ^ ^-1 loot vb:clear_focus_silk
execute at @s[nbt={Item:{tag:{Enchantments:[{lvl: 1s, id: "minecraft:silk_touch"}]}}}] if block ^ ^1 ^-1 minecraft:light_gray_stained_glass run loot insert ^ ^ ^-1 loot vb:clay_focus_silk
execute at @s[nbt={Item:{tag:{Enchantments:[{lvl: 1s, id: "minecraft:silk_touch"}]}}}] if block ^ ^1 ^-1 minecraft:black_stained_glass run loot insert ^ ^ ^-1 loot vb:coal_focus_silk
execute at @s[nbt={Item:{tag:{Enchantments:[{lvl: 1s, id: "minecraft:silk_touch"}]}}}] if block ^ ^1 ^-1 minecraft:light_blue_stained_glass run loot insert ^ ^ ^-1 loot vb:diamond_focus_silk
execute at @s[nbt={Item:{tag:{Enchantments:[{lvl: 1s, id: "minecraft:silk_touch"}]}}}] if block ^ ^1 ^-1 minecraft:lime_stained_glass run loot insert ^ ^ ^-1 loot vb:emerald_focus_silk
execute at @s[nbt={Item:{tag:{Enchantments:[{lvl: 1s, id: "minecraft:silk_touch"}]}}}] if block ^ ^1 ^-1 minecraft:yellow_stained_glass run loot insert ^ ^ ^-1 loot vb:gold_focus_silk
execute at @s[nbt={Item:{tag:{Enchantments:[{lvl: 1s, id: "minecraft:silk_touch"}]}}}] if block ^ ^1 ^-1 minecraft:orange_stained_glass run loot insert ^ ^ ^-1 loot vb:iron_focus_silk
execute at @s[nbt={Item:{tag:{Enchantments:[{lvl: 1s, id: "minecraft:silk_touch"}]}}}] if block ^ ^1 ^-1 minecraft:blue_stained_glass run loot insert ^ ^ ^-1 loot vb:lapis_focus_silk
execute at @s[nbt={Item:{tag:{Enchantments:[{lvl: 1s, id: "minecraft:silk_touch"}]}}}] if block ^ ^1 ^-1 minecraft:white_stained_glass run loot insert ^ ^ ^-1 loot vb:quartz_focus_silk
execute at @s[nbt={Item:{tag:{Enchantments:[{lvl: 1s, id: "minecraft:silk_touch"}]}}}] if block ^ ^1 ^-1 minecraft:red_stained_glass run loot insert ^ ^ ^-1 loot vb:redstone_focus_silk

scoreboard players remove @s miner_energy 5000
execute store result block 279 63 360 PowerAcceptor.energy double 1 run scoreboard players get @s miner_energy
execute at @s run playsound minecraft:block.stone.break block @a[distance=..5]
