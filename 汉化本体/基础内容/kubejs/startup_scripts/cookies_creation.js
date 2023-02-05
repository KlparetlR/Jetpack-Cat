
// ItemEvents.modification(event => {
//   event.modify('apex:deployable_doc', item => {
//   item.maxStackSize = 8
//   })
// })


//Gun Scrap


onEvent('item.registry', event => {
  event.create('gun_scrap').displayName('枪械废料').tooltip("用于制作枪箱和弹药")
  // event.create('incendiary_bullet').displayName('燃烧弹').tooltip("用于使用燃烧弹的枪械")
})










//attachment crate

onEvent('item.registry', event => {
	event.create('attachment_crate').food(food => {
		food
    		.hunger(6)
    		.saturation(6)
    		// .effect('speed', 600, 0, 1)
    		.removeEffect('poison')
    		.alwaysEdible()
    		.fastToEat()
    		.meat()
    		.eaten(ctx => {
      		ctx.player.tell("嚼嚼！美味的木头！嗯！")
          ctx.server.scheduleInTicks(2, ctx.server, function (callback) {
    	        callback.data.runCommand('/execute as ' + ctx.player.name + ' run ftbquests change_progress ' + ctx.player.name + ' complete 0B8BE182025B6319');
    			})
      	})
	}).displayName('枪械配件箱').tooltip("吃这个箱子即可随机获得一个随机的枪械配件!").glow(true)
})






//Gun Crates


onEvent('item.registry', event => {
	event.create('gun_crate_rare').food(food => {
		food
    		.hunger(6)
    		.saturation(6)
    		// .effect('speed', 600, 0, 1)
    		.removeEffect('poison')
    		.alwaysEdible()
    		.fastToEat()
    		.meat()
    		.eaten(ctx => {
      		ctx.player.tell("嚼嚼！美味的木头！嗯！")
          ctx.server.scheduleInTicks(2, ctx.server, function (callback) {
    	        callback.data.runCommand('/execute as ' + ctx.player.name + ' run ftbquests change_progress ' + ctx.player.name + ' complete 1C87D9E0931E21CE');
    			})
      	})
	}).displayName('稀有枪箱').tooltip("吃掉这个箱子即可随机获得一把稀有枪械！").glow(true)
})


onEvent('item.registry', event => {
	event.create('gun_crate_super_rare').food(food => {
		food
    		.hunger(6)
    		.saturation(6)
    		// .effect('speed', 600, 0, 1)
    		.removeEffect('poison')
    		.alwaysEdible()
    		.fastToEat()
    		.meat()
    		.eaten(ctx => {
      		ctx.player.tell("嚼嚼！美味的木头！嗯！")
          ctx.server.scheduleInTicks(2, ctx.server, function (callback) {
    	        callback.data.runCommand('/execute as ' + ctx.player.name + ' run ftbquests change_progress ' + ctx.player.name + ' complete 15F58CF7DEBCCD92');
    			})
      	})
	}).displayName('超级稀有枪箱').tooltip("吃掉这个箱子即可随机获得一把超级稀有枪械！").glow(true)
})


onEvent('item.registry', event => {
	event.create('gun_crate_exotic').food(food => {
		food
    		.hunger(6)
    		.saturation(6)
    		// .effect('speed', 600, 0, 1)
    		.removeEffect('poison')
    		.alwaysEdible()
    		.fastToEat()
    		.meat()
    		.eaten(ctx => {
      		ctx.player.tell("嚼嚼！美味的木头！嗯！")
          ctx.server.scheduleInTicks(2, ctx.server, function (callback) {
    	        ctx.server.runCommand('/execute as ' + ctx.player.name + ' run ftbquests change_progress ' + ctx.player.name + ' complete 736DFC761A1E0B22');
    			})
      	})
	}).displayName('奇特的枪箱').tooltip("吃掉这个箱子即可随机获得一把奇异的枪械！").glow(true)
})




//Cookies


onEvent('item.registry', event => {
	event.create('warp_to_death_cookie').food(food => {
		food
    		.hunger(6)
    		.saturation(6)
    		// .effect('speed', 600, 0, 1)
    		.removeEffect('poison')
    		.alwaysEdible()
    		.fastToEat()
    		.meat()
    		.eaten(ctx => {
      		ctx.player.tell("传送到最后一个死亡点")
          ctx.server.runCommand('/execute as ' + ctx.player.name + ' run ftbquests change_progress ' + ctx.player.name + ' complete 2D63E01B226FEB8F');
          ctx.server.scheduleInTicks(23, ctx.server, function (callback) {
    	        callback.data.runCommand('/execute as ' + ctx.player.name + ' run back')
    			})
      	})
	}).displayName('死亡曲奇').tooltip("吃了这块曲奇会把你传送到最后的死亡点！").glow(true)
})


onEvent('item.registry', event => {
	event.create('scary_city_cookie').food(food => {
		food
    		.hunger(6)
    		.saturation(6)
    		// .effect('speed', 600, 0, 1)
    		.removeEffect('poison')
    		.alwaysEdible()
    		.fastToEat()
    		.meat()
    		.eaten(ctx => {
      		ctx.player.tell("但是它...太可怕了！")
          ctx.server.runCommand('/execute at ' + ctx.player.name + ' as @e[distance=..10] run ftbquests change_progress ' + ctx.player.name + ' complete 2D63E01B226FEB8F');
          ctx.server.scheduleInTicks(23, ctx.server, function (callback) {
    	        callback.data.runCommand('/execute at ' + ctx.player.name + ' as @e[distance=..10] in lostcities:lostcity positioned as ' + ctx.player.name + ' run tp @s ~ 245 ~')
    			})
      	})
	}).displayName('恐怖之城曲奇').tooltip("吃了这块曲奇会把你传送到恐怖之城！").glow(true)
})


onEvent('item.registry', event => {
	event.create('gummy_land_z_cookie').food(food => {
		food
    		.hunger(6)
    		.saturation(6)
    		// .effect('speed', 600, 0, 1)
    		.removeEffect('poison')
    		.alwaysEdible()
    		.fastToEat()
    		.meat()
    		.eaten(ctx => {
      		ctx.player.tell("软糖熊曾经统治着这片土地......")
          ctx.server.runCommand('/execute as ' + ctx.player.name + ' run ftbquests change_progress ' + ctx.player.name + ' complete 2D63E01B226FEB8F');
          ctx.server.scheduleInTicks(23, ctx.server, function (callback) {
    	        callback.data.runCommand('/execute at ' + ctx.player.name + ' as @e[distance=..10] in candyworld:candy_world positioned as ' + ctx.player.name + ' run tp @s ~ 245 ~')
    			})
      	})
	}).displayName('软糖乐园曲奇').tooltip("吃了这块曲奇会把你传送到软糖乐园！").glow(true)
})


onEvent('item.registry', event => {
	event.create('null_space_cookie').food(food => {
		food
    		.hunger(6)
    		.saturation(6)
    		// .effect('speed', 600, 0, 1)
    		.removeEffect('poison')
    		.alwaysEdible()
    		.fastToEat()
    		.meat()
    		.eaten(ctx => {
      		ctx.player.tell("我觉得我不喜欢这个地方...")
          ctx.server.runCommand('/execute as ' + ctx.player.name + ' run ftbquests change_progress ' + ctx.player.name + ' complete 2D63E01B226FEB8F');
          ctx.server.scheduleInTicks(23, ctx.server, function (callback) {
    	        callback.data.runCommand('/execute at ' + ctx.player.name + ' as @e[distance=..10] in sonicraft:null_space_dimension positioned as ' + ctx.player.name + ' run tp @s ~ 245 ~')
    			})
      	})
	}).displayName('零核空间曲奇').tooltip("吃了这块曲奇会把你传送到零核空间！").glow(true)
})


onEvent('item.registry', event => {
	event.create('new_earth_cookie').food(food => {
		food
    		.hunger(6)
    		.saturation(6)
    		// .effect('speed', 600, 0, 1)
    		.removeEffect('poison')
    		.alwaysEdible()
    		.fastToEat()
    		.meat()
    		.eaten(ctx => {
      		ctx.player.tell("回到新地球！")
          ctx.server.runCommand('/execute as ' + ctx.player.name + ' run ftbquests change_progress ' + ctx.player.name + ' complete 2D63E01B226FEB8F');
          ctx.server.scheduleInTicks(23, ctx.server, function (callback) {
    	        callback.data.runCommand('/execute at ' + ctx.player.name + ' as @e[distance=..10] in minecraft:overworld positioned as ' + ctx.player.name + ' run tp @s ~ 245 ~')
    			})
      	})
	}).displayName('新地球曲奇').tooltip("吃了这块曲奇会把你传送到新地球！").glow(true)
})


onEvent('item.registry', event => {
	event.create('heck_cookie').food(food => {
		food

    		.hunger(6)
    		.saturation(6)
    		// .effect('speed', 600, 0, 1)
    		.removeEffect('poison')
    		.alwaysEdible()
    		.fastToEat()
    		.meat()
    		.eaten(ctx => {
      		ctx.player.tell("我感觉不太好，斯塔克先生")
          ctx.server.runCommand('/execute as ' + ctx.player.name + ' run ftbquests change_progress ' + ctx.player.name + ' complete 2D63E01B226FEB8F');
          ctx.server.scheduleInTicks(23, ctx.server, function (callback) {
    	        callback.data.runCommand('/execute at ' + ctx.player.name + ' as @e[distance=..10] in minecraft:the_nether positioned as ' + ctx.player.name + ' run tp @s ~ 129 ~')
    			})
      	})
	}).displayName('地狱曲奇').tooltip("吃了这块曲奇会把你传送到地狱！").glow(true)
})


onEvent('item.registry', event => {
	event.create('inner_earth_cookie').food(food => {
		food
    		.hunger(6)
    		.saturation(6)
    		// .effect('speed', 600, 0, 1)
    		.removeEffect('poison')
    		.alwaysEdible()
    		.fastToEat()
    		.meat()
    		.eaten(ctx => {
      		ctx.player.tell("恐龙和怪物！来吧！")
          ctx.server.runCommand('/execute as ' + ctx.player.name + ' run ftbquests change_progress ' + ctx.player.name + ' complete 2D63E01B226FEB8F');
          ctx.server.scheduleInTicks(23, ctx.server, function (callback) {
    	        callback.data.runCommand('/execute at ' + ctx.player.name + ' as @e[distance=..10] in world_blender:world_blender positioned as ' + ctx.player.name + ' run tp @s ~ 245 ~')
    			})
      	})
	}).displayName('地心曲奇').tooltip("吃了这块曲奇会把你传送到地心！").glow(true)
})


onEvent('item.registry', event => {
	event.create('eight_bit_cookie').food(food => {
		food
    		.hunger(6)
    		.saturation(6)
    		// .effect('speed', 600, 0, 1)
    		.removeEffect('poison')
    		.alwaysEdible()
    		.fastToEat()
    		.meat()
    		.eaten(ctx => {
      		ctx.player.tell("蓝爸爸是你吗？")
          ctx.server.runCommand('/execute as ' + ctx.player.name + ' run ftbquests change_progress ' + ctx.player.name + ' complete 2D63E01B226FEB8F');
          ctx.server.scheduleInTicks(23, ctx.server, function (callback) {
    	        callback.data.runCommand('/execute at ' + ctx.player.name + ' as @e[distance=..10] in sonicraft:mobius positioned as ' + ctx.player.name + ' run tp @s ~ 245 ~')
    			})
      	})
	}).displayName('8bit曲奇').tooltip("吃了这块曲奇会把你传送到8bit世界！").glow(true)
})


onEvent('item.registry', event => {
	event.create('broken_forest_cookie').food(food => {
		food
    		.hunger(6)
    		.saturation(6)
    		// .effect('speed', 600, 0, 1)
    		.removeEffect('poison')
    		.alwaysEdible()
    		.fastToEat()
    		.meat()
    		.eaten(ctx => {
      		ctx.player.tell("我不应该在这里...")
          ctx.server.runCommand('/execute as ' + ctx.player.name + ' run ftbquests change_progress ' + ctx.player.name + ' complete 2D63E01B226FEB8F');
          ctx.server.scheduleInTicks(23, ctx.server, function (callback) {
    	        callback.data.runCommand('/execute at ' + ctx.player.name + ' as @e[distance=..10] in twilightforest:skylight_forest positioned as ' + ctx.player.name + ' run tp @s ~ 245 ~')
    			})
      	})
	}).displayName('破碎森林曲奇').tooltip("吃了这块曲奇会把你传送到破碎森林！").glow(true)
})


onEvent('item.registry', event => {
	event.create('twilight_forest_cookie').food(food => {
		food
    		.hunger(6)
    		.saturation(6)
    		// .effect('speed', 600, 0, 1)
    		.removeEffect('poison')
    		.alwaysEdible()
    		.fastToEat()
    		.meat()
    		.eaten(ctx => {
      		ctx.player.tell("我不应该在这里...")
          ctx.server.runCommand('/execute as ' + ctx.player.name + ' run ftbquests change_progress ' + ctx.player.name + ' complete 2D63E01B226FEB8F');
          ctx.server.scheduleInTicks(23, ctx.server, function (callback) {
    	        callback.data.runCommand('/execute at ' + ctx.player.name + ' as @e[distance=..10] in twilightforest:twilightforest positioned as ' + ctx.player.name + ' run tp @s ~ 245 ~')
    			})
      	})
	}).displayName('暮色森林曲奇').tooltip("吃了这块曲奇会把你传送到暮色森林！").glow(true)
})
