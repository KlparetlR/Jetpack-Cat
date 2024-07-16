const S1 = 'mekanism';
// const S2 = 'stage2';
// const S3 = 'stage3';
global.stages = {
    'mekanism:osmium_ore': S1
    // 'minecraft:gravel': S1,
    // 'minecraft:cobblestone': S2,
    // 'minecraft:iron_ore': S3
};
onEvent('block.break', event => {
    if(!global.stages[event.block.id] || !event.player.stages) return;
    if(event.player.stages.has(global.stages[event.block.id])) return;
    event.cancel();
    event.player.tell('必须打败母亲，才能挖掘锇矿石！');
});


// onEvent('block.break', event => {
//     if(event.player && event.player.stages && !event.player.stages.has("breakblocks")){
//         event.cancel();
//     }
// });
