onEvent('item.right_click', (event) => {
  if (event.item.id == 'apex:boutique' ) {
    event.cancel()
    event.item.count--;
    event.player.tell('如果使用此物品将导致游戏崩溃');
  }
});
