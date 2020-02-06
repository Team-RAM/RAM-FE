scoreboard players remove @s _ramfe_sc_power 50
execute store result entity @s cardinal_components[0].chest:necklace.tag.Power int 1 run scoreboard players get @s _ramfe_sc_power
kill @e[type=minecraft:shulker_bullet,distance=0]
