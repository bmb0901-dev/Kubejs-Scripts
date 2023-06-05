var rlClass = Java.type('net.minecraft.util.ResourceLocation');
var recipeClass =  Java.type('thaumcraft.api.crafting.InfusionRecipe');

var thaumHelper = Java.type('thaumcraft.api.ThaumcraftApiHelper');
var thaumApi = Java.type('thaumcraft.api.ThaumcraftApi');

var itemStack = Java.type('net.minecraft.item.ItemStack');
var itemClass = Java.type('net.minecraft.item.Item');

var aspect = Java.type('thaumcraft.api.aspects.Aspect');
var aspectsList = Java.type('thaumcraft.api.aspects.AspectList');

var matClass = Java.type('slimeknights.tconstruct.library.materials.Material');
var traits = Java.type('slimeknights.tconstruct.tools.TinkerTraits');
var tinkersReg = Java.type('slimeknights.tconstruct.library.TinkerRegistry');
var head = Java.type('slimeknights.tconstruct.library.materials.HeadMaterialStats');

events.listen('world.load', function(event){
	//Steel Items
	var steel = new recipeClass('INFUSION', new itemStack(item.getItem('immersiveengineering:metal'),1,8), 0, new aspectsList().add(aspect.FIRE, 15).add(aspect.AIR, 15), new itemStack(item.getItem('minecraft:iron_ingot')), new itemStack(item.getItem("minecraft:coal")));
	var steelPick = new recipeClass('INFUSION', new itemStack(item.getItem('immersiveengineering:pickaxe_steel')), 0, new aspectsList().add(aspect.FIRE, 50).add(aspect.AIR,25), new itemStack(item.getItem('minecraft:iron_pickaxe')), new itemStack(item.getItem("minecraft:iron_ingot")));

	thaumApi.addInfusionCraftingRecipe(new rlClass("STEEL_PICKAXE"), steelPick);
	thaumApi.addInfusionCraftingRecipe(new rlClass("STEEL_INGOT"), steel);

	//Void Items
	var voidMetal2 = new recipeClass('BASEELDRITCH', new itemStack(item.getItem('thaumcraft:ingot'),1,1), 2, new aspectsList().add(aspect.VOID, 50).add(aspect.FLUX, 25), new itemStack(item.getItem('immersiveengineering:metal'),1,8), new itemStack(item.getItem('thaumcraft:void_seed')));
	var voidPick = new recipeClass('BASEELDRITCH', new itemStack(item.getItem('thaumcraft:void_pick')), 0, new aspectsList().add(aspect.VOID, 75).add(aspect.FLUX, 50), new itemStack(item.getItem('immersiveengineering:pickaxe_steel')), new itemStack(item.getItem("thaumcraft:ingot"),1,1));
	var voidMetalShard = new recipeClass('BASEELDRITCH', 'tconstruct:shard {Material:"void_metal"}', 0, new aspectsList().add(aspect.FLUX, 25), new itemStack(item.getItem('thaumcraft:ingot'),1,1), new itemStack(item.getItem('thaumcraft:void_pick')));

	thaumApi.addInfusionCraftingRecipe(new rlClass("VOID_INGOT2"), voidMetal2);
	thaumApi.addInfusionCraftingRecipe(new rlClass("VOID_PICK2"), voidPick);
	thaumApi.addInfusionCraftingRecipe(new rlClass("VOID_SHARD"), voidMetalShard);

	//Misc
	var creativeDisk = new recipeClass('INFUSION', new itemStack(item.getItem('refinedstorage:storage_disk'),1,4), 0, new aspectsList().add(aspect.VOID, 75), new itemStack(item.getItem('draconicevolution:draconium_chest')), new itemStack(item.getItem("draconicevolution:chaos_shard")), new itemStack(item.getItem("refinedstorage:storage_part"),1,3));

	thaumApi.addInfusionCraftingRecipe(new rlClass('C_DISK'), creativeDisk);

// Materials
	var matVoid = new matClass('void_metal', 0x1a001a);
	matVoid.setCraftable(true);
	matVoid.addItem(new itemStack(item.getItem('thaumcraft:ingot'),1,1), 1, 144);
	matVoid.addTrait(traits.insatiable, "head");
	matVoid.addTrait(traits.dense, "head");

	// Tinkers Registry
	tinkersReg.addMaterialStats(matVoid, new head(540,7.0,6.0,3));
	tinkersReg.addMaterial(matVoid);
	
});
