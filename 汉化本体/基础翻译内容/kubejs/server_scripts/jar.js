onEvent('item.entity_interact', e => {
    if (e.item.id.contains('jar'))
        if (e.target.type == "minecraft:player" || e.target.type == "minecraft:ender_dragon") {
            e.server.tell("没门！不过你试得不错，哈哈。我猜你肯定为自己想到的这个点子而兴奋。我喜欢你气哭的眼泪！嗯嗯，美味的眼泪！！")
            e.cancel()
        }
});