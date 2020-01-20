fill ~-1 ~-1 ~-1 ~1 ~ ~1 air
tp @s ~ ~-1 ~
kill @s
summon minecraft:armor_stand ~ ~ ~ {NoGravity:1b,Invulnerable:1b,Invisible:1b}
tag @e[type=minecraft:armor_stand,distance=0] add cauldron_drop
summon minecraft:falling_block ~ ~ ~ {NoGravity:1b,Invulnerable:1b,Time:-32768s,Motion:[0d, 0d, 0d],BlockState:{Name:"minecraft:cauldron"}}
summon minecraft:falling_block ~ ~-1 ~ {NoGravity:1b,Invulnerable:1b,Time:-32768s,Motion:[0d, 0.0201d, 0d],BlockState:{Name:"minecraft:glowstone"}}
summon minecraft:falling_block ~1 ~-1 ~ {NoGravity:1b,Invulnerable:1b,Time:-32768s,Motion:[-0.0201d, 0.0201d, 0d],BlockState:{Name:"minecraft:redstone_block"}}
summon minecraft:falling_block ~-1 ~-1 ~ {NoGravity:1b,Invulnerable:1b,Time:-32768s,Motion:[0.0201d, 0.0201d, 0d],BlockState:{Name:"minecraft:redstone_block"}}
summon minecraft:falling_block ~ ~-1 ~1 {NoGravity:1b,Invulnerable:1b,Time:-32768s,Motion:[0d, 0.0201d, -0.0201d],BlockState:{Name:"minecraft:redstone_block"}}
summon minecraft:falling_block ~ ~-1 ~-1 {NoGravity:1b,Invulnerable:1b,Time:-32768s,Motion:[0d, 0.0201d, 0.0201d],BlockState:{Name:"minecraft:redstone_block"}}
summon minecraft:falling_block ~1 ~-1 ~1 {NoGravity:1b,Invulnerable:1b,Time:-32768s,Motion:[-0.0201d, 0.0201d, -0.0201d],BlockState:{Name:"minecraft:lapis_block"}}
summon minecraft:falling_block ~1 ~-1 ~-1 {NoGravity:1b,Invulnerable:1b,Time:-32768s,Motion:[-0.0201d, 0.0201d, 0.0201d],BlockState:{Name:"minecraft:lapis_block"}}
summon minecraft:falling_block ~-1 ~-1 ~1 {NoGravity:1b,Invulnerable:1b,Time:-32768s,Motion:[0.0201d, 0.0201d, -0.0201d],BlockState:{Name:"minecraft:lapis_block"}}
summon minecraft:falling_block ~-1 ~-1 ~-1 {NoGravity:1b,Invulnerable:1b,Time:-32768s,Motion:[0.0201d, 0.0201d, 0.0201d],BlockState:{Name:"minecraft:lapis_block"}}
schedule function ram_fe:create_cauldron/drop_cauldron 10s