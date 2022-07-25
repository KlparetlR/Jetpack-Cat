




onEvent('player.chat', (event) => {
  if (event.message.contains('party')) {
    event.player.tell('友善的人工智能：对不起，伙计！团队已被禁用，因为他们弄乱了我的程序')
    event.cancel()
  }
})
