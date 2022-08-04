// priority: 0

console.info('Hello, World! (每次重新加载客户端资源时，您都会看到这一行)')

onEvent('jei.hide.items', event => {
	// Hide items in JEI here
	// event.hide('minecraft:cobblestone')
  event.hide('mca:book_supporters')
  event.hide('quark:backpack')
  event.hide('@potions')

  event.hide('k-turrets:arrow_turret_item')
  event.hide('k-turrets:bullet_turret_item')
  event.hide('k-turrets:firecharge_turret_item')
  event.hide('k-turrets:brick_turret_item')
  event.hide('k-turrets:cobble_turret_item')


})
