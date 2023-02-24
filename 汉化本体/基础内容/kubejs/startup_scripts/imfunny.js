onEvent('item.tooltip', tooltip => {
  tooltip.add(['minecraft:wooden_hoe'], '你妈妈穿木底鞋')
  tooltip.add('minecraft:golden_hoe', ["你妈妈戴着", '一块假金表'])
  tooltip.add('minecraft:stone_hoe', ["你妈妈一副", '冰冷的克伦人表情'])
  tooltip.add('minecraft:iron_hoe', ["你妈妈穿着一个", '中世纪骑士头盔'])
  tooltip.add('minecraft:diamond_hoe', ["你妈妈戴着一双", '钻石耳环'])
  tooltip.add('supplementaries:jar', ["§c生物必须是较低的生命值", '§c才能被玻璃罐捕获'])
  tooltip.add('supplementaries:jar_tinted', ["§c生物必须是较低的生命值", '§c才能被玻璃罐捕获'])
  tooltip.add('ftbquests:book', ["\u00A7d" + "也可以按热键", "\u00A7d" + '[ESC]键下面的[~]键'])
  tooltip.add('cgm:grenade_launcher', ["向地面射击并", '跳起来以弹飞自己'])
  tooltip.add('cgm:workbench', ['已禁用，抱歉'])
	tooltip.add('quark:midori_pillar', ["哈哈哈，你可能以为是钻石", '我很享受这个\:\]'])
  tooltip.add('backpacked:marksman', ["这已经被应用", '于所有的背包'])
  tooltip.add('backpacked:looted', ["这可能不会拾取", '所有物品。不要使用它。'])



  tooltip.addAdvanced(['additionalguns:ar1_lvl1', 'additionalguns:kraber_lvl1', 'additionalguns:rifle3030_lvl1', 'additionalguns:r99_lvl1', 'additionalguns:spitfire_lvl1', 'additionalguns:r301_lvl1', 'cgm:machine_pistol', 'cgm:shotgun', 'cgm:rifle', 'cgm:heavy_rifle', 'cgm:bazooka', 'cgm:grenade_launcher', 'cgm:mini_gun', 'cgm:pistol'], (item, advanced, text) => {
    text.add(Text.of("\u00A7b" + '稀有枪械'))
  })
  tooltip.addAdvanced(['additionalguns:ar1_lvl2', 'additionalguns:kraber_lvl2', 'additionalguns:rifle3030_lvl2', 'additionalguns:r99_lvl2', 'additionalguns:spitfire_lvl2', 'additionalguns:r301_lvl2', 'additionalguns:machine_pistol_lvl2', 'additionalguns:shotgun_lvl2', 'additionalguns:rifle_lvl2', 'additionalguns:heavy_rifle_lvl2', 'additionalguns:bazooka_lvl2', 'additionalguns:grenade_launcher_lvl2', 'additionalguns:mini_gun_lvl2', 'additionalguns:pistol_lvl2'], (item, advanced, text) => {
    text.add(Text.of("\u00A79" + '超稀有枪械'))

  })
  tooltip.addAdvanced(['additionalguns:ar1_bfg', 'additionalguns:kraber_lvl3', 'additionalguns:rifle3030_lvl3', 'additionalguns:r99_lvl3', 'additionalguns:spitfire_lvl3', 'additionalguns:r301_lvl3', 'additionalguns:ar1_lvl3', 'additionalguns:machine_pistol_lvl3', 'additionalguns:shotgun_lvl3', 'additionalguns:rifle_lvl3', 'additionalguns:heavy_rifle_lvl3', 'additionalguns:bazooka_lvl3', 'additionalguns:grenade_launcher_lvl3', 'additionalguns:mini_gun_lvl3', 'additionalguns:pistol_lvl3', 'moguns:akm_custom', 'moguns:scar_h', 'moguns:ppsh_41', 'moguns:thompson', 'moguns:scar_l', 'moguns:mp5', 'moguns:benelli', 'moguns:g36c', 'moguns:hog_bonker', 'moguns:blue_heat', 'moguns:hellfire'], (item, advanced, text) => {
    text.add(Text.of("\u00A7d" + '奇特的枪械'))
  })
  tooltip.addAdvanced(['cgm:assault_rifle', 'moguns:glock17'], (item, advanced, text) => {
    text.add(Text.of('普通枪械'))
  })
  tooltip.addAdvanced(['moguns:glock17'], (item, advanced, text) => {
    text.add(Text.of('无限弹药'))
  })














})
