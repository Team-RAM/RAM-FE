# blocks matching
execute at @s run scoreboard players add @s miner_energy
execute at @s store result score @s miner_energy run data get block ^1 ^ ^-1 PowerAcceptor.energy
execute at @s if block ^1 ^ ^-1 techreborn:low_voltage_su if score @s miner_energy matches 2000..40000 run function vb:dimensionalquarry/trigger
execute at @s if block ^1 ^ ^-1 techreborn:medium_voltage_su if score @s miner_energy matches 2000..300000 run function vb:dimensionalquarry/trigger
execute at @s if block ^1 ^ ^-1 techreborn:high_voltage_su if score @s miner_energy matches 2000..10000000 run function vb:dimensionalquarry/trigger
