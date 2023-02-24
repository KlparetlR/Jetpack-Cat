onEvent('item.right_click', (event) => {
  if (event.item.id == 'moguns:taki' ) {
    // event.cancel()
    // event.item.count--;
    event.server.runCommandSilent(`/execute as ${event.player} run effect give ${event.player} minecraft:wither 5 3 false`)
    event.player.tell('你为什么要吃熔融金属？');
  }
});



// onEvent('item.right_click', (event) => {
//   if (event.item.id == 'moguns:taki' ) {
//     event.cancel()
//     event.item.count--;
//
//     event.player.tell('你为什么要吃熔融金属？');
//   }
// });

//${event.player}




// onEvent('item.right_click', (event) => {
//   if (event.item.id == 'moguns:taki' ) {
//     event.cancel()
//     event.item.count--;
//
//     event.player.tell('如果使用此物品将导致游戏崩溃');
//   }
// });
