# Quarry interval (default: 3 seconds)
schedule function vb:dimensionalquarry/dimensional_quarry 3s
execute as @e[type=minecraft:item_frame,nbt={Item:{id:"minecraft:diamond_pickaxe"}}] at @s if block ^ ^ ^-1 minecraft:dropper[facing=up,triggered=false] if block ^ ^2 ^-1 minecraft:dragon_egg if block ^ ^1 ^-1 #vb:foci if block ^-1 ^ ^-1 #vb:storage if block ^1 ^ ^-1 #vb:energy run function vb:dimensionalquarry/blocks_match
