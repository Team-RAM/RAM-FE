execute as @e[type=minecraft:armor_stand,tag=cauldron_drop] at @s run summon minecraft:item ~ ~ ~ {Item:{id:"coww:cauldron",Count:1b}}
execute as @e[type=minecraft:armor_stand,tag=cauldron_drop] at @s run kill @e[type=minecraft:falling_block,distance=..1]
execute as @e[type=minecraft:armor_stand,tag=cauldron_drop] run kill @s
