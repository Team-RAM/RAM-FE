# Store power in _ramfe_sc_power
execute store result score @s _ramfe_sc_power run data get entity @s cardinal_components[0].chest:necklace.tag.Power
execute at @e[type=minecraft:shulker_bullet,distance=..3] if score @s _ramfe_sc_power matches 100..6000 run function ram_fe:shulkerprotect/trigger_shulker
execute store result entity @s cardinal_components[0].chest:necklace.tag.Power int 1 run scoreboard players get @s