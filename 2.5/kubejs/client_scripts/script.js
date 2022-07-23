// priority: 0

console.info('Hello, World! (每次重新加载客户端资源时，您都会看到这一行)')

onEvent('jei.hide.items', event => {
	// Hide items in JEI here
	// event.hide('minecraft:cobblestone')
  event.hide('mca:book_supporters')
  event.hide('quark:backpack')
  event.hide('@potions')



})
