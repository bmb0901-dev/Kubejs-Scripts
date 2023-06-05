var HV_Class = Java.type('blusunrize.immersiveengineering.common.blocks.metal.TileEntityConnectorHV');
var LV_Class = Java.type('blusunrize.immersiveengineering.common.blocks.metal.TileEntityConnectorLV');
var BlockPos = Java.type('net.minecraft.util.math.BlockPos');
var tileEntities = utils.clientWorld.minecraftWorld.field_147482_g;

events.listen('world.tick', function(event){
for(var i=0; i<tileEntities.length;i++){
	var current = tileEntities[i];
	if(current instanceof HV_Class){
		var EnergyClass = Java.type('blusunrize.immersiveengineering.common.util.EnergyHelper');
		var EnumFacing = Java.type('net.minecraft.util.EnumFacing');

		var HV = current;
		var x = HV.func_174877_v().func_177958_n();
		var y = HV.func_174877_v().func_177956_o();
		var z = HV.func_174877_v().func_177952_p();
		
		var energy = HV.getEnergyStored(facing.down);
		
		var C = utils.server.overworld.getBlock(new BlockPos(x+0,y-1,z+0));
		if(C.blockState == 'twilightforest:block_storage[variant=carminite]' && energy > 0){
			var x = C.pos.func_177958_n();
			var y = C.pos.func_177956_o();
			var z = C.pos.func_177952_p();
			
			var S1 = utils.server.overworld.getBlock(new BlockPos(x+0,y+0,z+1));
			var S2 = utils.server.overworld.getBlock(new BlockPos(x+0,y+0,z-1));
						
			if(S1.blockState=='immersiveengineering:storage[type=steel]'){
				var x = S1.pos.func_177958_n();
				var y = S1.pos.func_177956_o();
				var z = S1.pos.func_177952_p();
				var C1 = utils.server.overworld.getBlock(new BlockPos(x+0,y-1,z+0));
				C1.entity.receiveEnergy(facing.up,50, false);

			}
			if(S2.blockState== 'immersiveengineering:storage[type=steel]'){ 
				var x = S1.pos.func_177958_n();
				var y = S1.pos.func_177956_o();
				var z = S1.pos.func_177952_p();
				var C2 = utils.server.overworld.getBlock(new BlockPos(x+0,y-1,z-2));
				C2.entity.receiveEnergy(facing.up,50, false);
			}
		}
	}
}
});