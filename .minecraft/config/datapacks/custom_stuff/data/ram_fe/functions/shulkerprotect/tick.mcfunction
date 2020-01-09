scoreboard players set @a _ramfe_sc_power 0
execute as @e[type=minecraft:player] at @s if data entity @s cardinal_components[0].chest:necklace{id:"shulkercharm:shulker_charm"} run function ram_fe:shulkerprotect/has_necklace
