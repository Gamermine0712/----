let 설치_방법 = ""
let 놓은_갯수 = 0
let 부순_갯수 = 0
let 대상: TargetSelector = null
let 주운_갯수 = 0
events.onCameraUsed(function (isSelfie) {
	
})
player.onChat("run", function () {
    player.say("run을 실행했습니다.")
})
events.onItemDropped(function (item, count) {
    if (item == EMERALD) {
        player.say("에메랄드가 복사되었다!")
        mobs.give(
        mobs.target(LOCAL_PLAYER),
        EMERALD,
        1
        )
    }
})
events.onEntitySpawned(function (mob, spawner) {
	
})
events.onPlayerBounced(function (height, block) {
    player.say("" + blocks.nameOfBlock(block) + "에서 " + height + "칸 위로 올라갔다!")
})
events.onBlockPlaced(function (block, tool, count, method) {
    if (method == events.BlockPlacementMethod.Entity) {
        설치_방법 = "플레이어"
    } else {
        설치_방법 = "명령어"
    }
    놓은_갯수 += count
    player.say("" + blocks.nameOfBlock(block) + "을" + blocks.nameOfBlock(tool) + "로" + 설치_방법 + "가" + 놓은_갯수 + "개 놨다!")
})
events.onEndOfDay(function () {
    player.say("낮이 끝남")
})
events.onItemEquipped(function (item, slot, enchantments) {
	
})
events.onItemUsed(function (item, method) {
    if (method == events.useMethod(events.UseMethod.UseTool)) {
        player.say("" + blocks.nameOfBlock(item) + "을 사용한다.")
    } else if (method == events.useMethod(events.UseMethod.EquipArmor)) {
        player.say("" + blocks.nameOfBlock(item) + "을 입는다!")
    } else if (method == events.useMethod(events.UseMethod.Attack)) {
        player.say("" + blocks.nameOfBlock(item) + "으로 공격한다!")
    } else {
    	
    }
})
events.onMobKilled(function (mob, weapon, isMonster) {
    if (isMonster) {
        player.say("악의 힘이 " + blocks.nameOfBlock(weapon) + "으로 처단!")
    } else {
        player.say("무고한 생명체가 " + blocks.nameOfBlock(weapon) + "으로 희생...")
    }
})
events.onBlockBroken(function (block, tool, count) {
    부순_갯수 += count
    player.say("" + blocks.nameOfBlock(tool) + "으로" + blocks.nameOfBlock(block) + "을" + 부순_갯수 + "개 깼다!")
})
events.onPlayerMessage(function (message, sender, receiver, messageType) {
    if (message.includes("도와줘")) {
        대상 = mobs.playerByName(sender)
        mobs.teleportToPlayer(
        mobs.target(LOCAL_PLAYER),
        대상
        )
    }
})
events.onItemAcquired(function (item, count, method) {
    주운_갯수 += count
    if (item == EMERALD) {
        if (method == events.AcquisitionMethod.PickedUp) {
            player.say("에메랄드를 " + 주운_갯수 + "개 주웠다!")
        }
    }
})
events.onItemInteracted(function (item, count, method) {
	
})
