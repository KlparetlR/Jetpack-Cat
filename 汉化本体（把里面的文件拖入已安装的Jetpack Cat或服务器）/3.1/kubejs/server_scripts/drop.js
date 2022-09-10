onEvent('item.right_click', (event) => {
  if (event.item.id == 'xpcoins:platinum_coin' || event.item.id == 'xpcoins:coin_press' || event.item.id == 'xpcoins:golden_coin' ) {
    event.cancel()
    event.item.count--;
    event.player.tell('此物品已删除，抱歉 ¯\\_(ツ)_/¯');
  }
});
