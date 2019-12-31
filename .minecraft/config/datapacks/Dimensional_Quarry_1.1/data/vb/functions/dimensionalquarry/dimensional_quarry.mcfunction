# Quarry interval (default: 20 seconds)
schedule function vb:dimensionalquarry/dimensional_quarry 5s
execute as @e[type=minecraft:item_frame,nbt={Item:{id:"minecraft:diamond_pickaxe"}}] at @s if block ^ ^ ^-1 minecraft:dropper[facing=up,triggered=false] if block ^ ^2 ^-1 minecraft:dragon_egg if block ^1 ^ ^-1 techreborn:low_voltage_su run function vb:dimensionalquarry/blocks_match
execute as @e[type=minecraft:item_frame,nbt={Item:{id:"minecraft:diamond_pickaxe"}}] at @s if block ^ ^ ^-1 minecraft:dropper[facing=up,triggered=false] if block ^ ^2 ^-1 minecraft:dragon_egg if block ^1 ^ ^-1 techreborn:medium_voltage_su run function vb:dimensionalquarry/blocks_match
execute as @e[type=minecraft:item_frame,nbt={Item:{id:"minecraft:diamond_pickaxe"}}] at @s if block ^ ^ ^-1 minecraft:dropper[facing=up,triggered=false] if block ^ ^2 ^-1 minecraft:dragon_egg if block ^1 ^ ^-1 techreborn:high_voltage_su run function vb:dimensionalquarry/blocks_match
