execute at @e[type=minecraft:item_frame,nbt={Item:{id:"minecraft:diamond_pickaxe"}}] if block ^ ^ ^-1 minecraft:dropper[facing=up,triggered=false] if block ^ ^1 ^-1 #vb:foci if block ^ ^2 ^-1 minecraft:dragon_egg if block ^1 ^ ^-1 techreborn:low_voltage_su run particle minecraft:portal ^ ^0.5 ^-0.5 0.135 0.135 0.135 0 1
execute at @e[type=minecraft:item_frame,nbt={Item:{id:"minecraft:diamond_pickaxe"}}] if block ^ ^ ^-1 minecraft:dropper[facing=up,triggered=false] if block ^ ^1 ^-1 #vb:foci if block ^ ^2 ^-1 minecraft:dragon_egg if block ^1 ^ ^-1 techreborn:medium_voltage_su run particle minecraft:portal ^ ^0.5 ^-0.5 0.135 0.135 0.135 0 1
execute at @e[type=minecraft:item_frame,nbt={Item:{id:"minecraft:diamond_pickaxe"}}] if block ^ ^ ^-1 minecraft:dropper[facing=up,triggered=false] if block ^ ^1 ^-1 #vb:foci if block ^ ^2 ^-1 minecraft:dragon_egg if block ^1 ^ ^-1 techreborn:high_voltage_su run particle minecraft:portal ^ ^0.5 ^-0.5 0.135 0.135 0.135 0 1
