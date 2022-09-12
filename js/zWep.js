var zWep = [
  {
    weaponName: "无锋剑",
    weaponType: "单手剑",
    rankLevel: 1,
    weaponProp: [
      {
        initValue: 23.2450008392334,
        type: "GROW_CURVE_ATTACK_101",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
    ],
    descText:
      "少年人的梦想、踏上旅途的兴奋——如果这两种珍贵的品质还不够锋利，那就用勇气补足吧。",
    id: 11101,
    icon: "UI_EquipIcon_Sword_Blunt",
    awakeIcon: "UI_EquipIcon_Sword_Blunt_Awaken",
  },
  {
    weaponName: "银剑",
    weaponType: "单手剑",
    rankLevel: 2,
    weaponProp: [
      {
        initValue: 32.93000030517578,
        type: "GROW_CURVE_ATTACK_101",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
    ],
    descText: "能退魔的银剑。大家都知道，其实用料是银合金而不是纯银。",
    id: 11201,
    icon: "UI_EquipIcon_Sword_Silver",
    awakeIcon: "UI_EquipIcon_Sword_Silver_Awaken",
  },
  {
    weaponName: "冷刃",
    weaponType: "单手剑",
    rankLevel: 3,
    weaponProp: [
      {
        initValue: 38.74129867553711,
        type: "GROW_CURVE_ATTACK_101",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.07660000026226044,
        type: "GROW_CURVE_CRITICAL_101",
        propType: "攻击力百分比",
      },
    ],
    descText: "多层锻打的精钢铸就的可靠兵器，曾见证旧主诸多冒险奇谭。",
    id: 11301,
    skillAffixName: "止水融冰",
    skillAffixText:
      "对处于水元素或冰元素影响下的敌人，造成的伤害提高<span>12%</span>。",
    skillAffixValue: {
      level1: [0.11999999731779099],
      level2: [0.15000000596046448],
      level3: [0.18000000715255737],
      level4: [0.20999999344348907],
      level5: [0.23999999463558197],
    },
    icon: "UI_EquipIcon_Sword_Steel",
    awakeIcon: "UI_EquipIcon_Sword_Steel_Awaken",
  },
  {
    weaponName: "黎明神剑",
    weaponType: "单手剑",
    rankLevel: 3,
    weaponProp: [
      {
        initValue: 38.74129867553711,
        type: "GROW_CURVE_ATTACK_101",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.10199999809265137,
        type: "GROW_CURVE_CRITICAL_101",
        propType: "暴击伤害",
      },
    ],
    descText:
      "一把曾经耀若朝阳的宝剑，掌握它的人会获得「自我感觉良好」的力量加持。剑身上的发光材料已经褪去。",
    id: 11302,
    skillAffixName: "激励",
    skillAffixText: "生命值高于90%时，暴击率提升<span>14%</span>。",
    skillAffixValue: {
      level1: [0.14000000059604645],
      level2: [0.17499999701976776],
      level3: [0.20999999344348907],
      level4: [0.24500000476837158],
      level5: [0.2800000011920929],
    },
    icon: "UI_EquipIcon_Sword_Dawn",
    awakeIcon: "UI_EquipIcon_Sword_Dawn_Awaken",
  },
  {
    weaponName: "旅行剑",
    weaponType: "单手剑",
    rankLevel: 3,
    weaponProp: [
      {
        initValue: 39.875099182128906,
        type: "GROW_CURVE_ATTACK_102",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.06373299658298492,
        type: "GROW_CURVE_CRITICAL_101",
        propType: "防御力百分比",
      },
    ],
    descText: "趁手的钢剑，剑柄里藏着剪子、放大镜、火绒等方便旅行的小物件。",
    id: 11303,
    skillAffixName: "旅程",
    skillAffixText: "获得元素晶球或元素微粒时，恢复<span>1%</span>生命值。",
    skillAffixValue: {
      level1: [0.009999999776482582, 1],
      level2: [0.012500000186264515, 1],
      level3: [0.014999999664723873, 1],
      level4: [0.017500000074505806, 1],
      level5: [0.019999999552965164, 1],
    },
    icon: "UI_EquipIcon_Sword_Traveler",
    awakeIcon: "UI_EquipIcon_Sword_Traveler_Awaken",
  },
  {
    weaponName: "暗铁剑",
    weaponType: "单手剑",
    rankLevel: 3,
    weaponProp: [
      {
        initValue: 38.74129867553711,
        type: "GROW_CURVE_ATTACK_101",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 30.600000381469727,
        type: "GROW_CURVE_CRITICAL_101",
        propType: "元素精通",
      },
    ],
    descText: "其实就是稍微有些黑的铁剑。",
    id: 11304,
    skillAffixName: "过载",
    skillAffixText:
      "触发超载、超导、感电、原激化、超激化、超绽放或雷元素扩散反应后的12秒内，攻击力提高<span>20%</span>。",
    skillAffixValue: {
      level1: [0.20000000298023224, 12],
      level2: [0.25, 12],
      level3: [0.30000001192092896, 12],
      level4: [0.3499999940395355, 12],
      level5: [0.4000000059604645, 12],
    },
    icon: "UI_EquipIcon_Sword_Darker",
    awakeIcon: "UI_EquipIcon_Sword_Darker_Awaken",
  },
  {
    weaponName: "吃虎鱼刀",
    weaponType: "单手剑",
    rankLevel: 3,
    weaponProp: [
      {
        initValue: 38.74129867553711,
        type: "GROW_CURVE_ATTACK_101",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.07660000026226044,
        type: "GROW_CURVE_CRITICAL_101",
        propType: "攻击力百分比",
      },
    ],
    descText: "用来剖鱼的锋利铁刀，刀身狭长，非常锋利。",
    id: 11305,
    skillAffixName: "决",
    skillAffixText:
      "攻击命中时，有50%的概率对单个敌人造成<span>240%</span>攻击力的伤害。该效果每<span>15</span>秒只能触发一次。",
    skillAffixValue: {
      level1: [0.5, 2.4000000953674316, 15],
      level2: [0.5, 2.799999952316284, 14],
      level3: [0.5, 3.200000047683716, 13],
      level4: [0.5, 3.5999999046325684, 12],
      level5: [0.5, 4, 11],
    },
    icon: "UI_EquipIcon_Sword_Sashimi",
    awakeIcon: "UI_EquipIcon_Sword_Sashimi_Awaken",
  },
  {
    weaponName: "飞天御剑",
    weaponType: "单手剑",
    rankLevel: 3,
    weaponProp: [
      {
        initValue: 37.60749816894531,
        type: "GROW_CURVE_ATTACK_104",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.11333300173282623,
        type: "GROW_CURVE_CRITICAL_101",
        propType: "元素充能效率",
      },
    ],
    descText: "可靠的钢剑，传说著名的「御剑公子」曾试图借助它飞天。",
    id: 11306,
    skillAffixName: "决心",
    skillAffixText:
      "施放元素爆发后，提高<span>12%</span>攻击力和移动速度，持续15秒。",
    skillAffixValue: {
      level1: [0.11999999731779099, 15],
      level2: [0.15000000596046448, 15],
      level3: [0.18000000715255737, 15],
      level4: [0.20999999344348907, 15],
      level5: [0.23999999463558197, 15],
    },
    icon: "UI_EquipIcon_Sword_Mitsurugi",
    awakeIcon: "UI_EquipIcon_Sword_Mitsurugi_Awaken",
  },
  {
    weaponName: "西风剑",
    weaponType: "单手剑",
    rankLevel: 4,
    weaponProp: [
      {
        initValue: 41.067100524902344,
        type: "GROW_CURVE_ATTACK_204",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.1333329975605011,
        type: "GROW_CURVE_CRITICAL_201",
        propType: "元素充能效率",
      },
    ],
    descText: "西风骑士团的制式长剑。轻快锐利之余，也能轻易导出元素力量。",
    id: 11401,
    skillAffixName: "顺风而行",
    skillAffixText:
      "攻击造成暴击时，有<span>60%</span>的几率产生少量元素微粒，能为角色恢复6点元素能量。该效果每<span>12</span>秒只能触发一次。",
    skillAffixValue: {
      level1: [0.6000000238418579, 12],
      level2: [0.699999988079071, 10.5],
      level3: [0.800000011920929, 9],
      level4: [0.8999999761581421, 7.5],
      level5: [1, 6],
    },
    icon: "UI_EquipIcon_Sword_Zephyrus",
    awakeIcon: "UI_EquipIcon_Sword_Zephyrus_Awaken",
  },
  {
    weaponName: "笛剑",
    weaponType: "单手剑",
    rankLevel: 4,
    weaponProp: [
      {
        initValue: 42.4010009765625,
        type: "GROW_CURVE_ATTACK_201",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.09000000357627869,
        type: "GROW_CURVE_CRITICAL_201",
        propType: "攻击力百分比",
      },
    ],
    descText: "细剑的锈迹下透露出原本华丽的装饰，挥舞时轻若无物。",
    id: 11402,
    skillAffixName: "和弦",
    skillAffixText:
      "普通攻击或重击命中时，会获得一个和音。积攒了5个和音后，释放音律的力量，对周围的敌人造成<span>100%</span>攻击力的伤害。和音最多存在30秒，每0.5秒至多获得1个和音。",
    skillAffixValue: {
      level1: [1, 1],
      level2: [1, 1.25],
      level3: [1, 1.5],
      level4: [1, 1.75],
      level5: [1, 2],
    },
    icon: "UI_EquipIcon_Sword_Troupe",
    awakeIcon: "UI_EquipIcon_Sword_Troupe_Awaken",
  },
  {
    weaponName: "祭礼剑",
    weaponType: "单手剑",
    rankLevel: 4,
    weaponProp: [
      {
        initValue: 41.067100524902344,
        type: "GROW_CURVE_ATTACK_204",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.1333329975605011,
        type: "GROW_CURVE_CRITICAL_201",
        propType: "元素充能效率",
      },
    ],
    descText:
      "在漫长岁月中石化的道具剑，上面的仪式性装饰依然清晰可见。拥有受时间之风冲刷的祝福力量。",
    id: 11403,
    skillAffixName: "气定神闲",
    skillAffixText:
      "元素战技造成伤害时，有<span>40%</span>的概率重置该技能的冷却时间，该效果每<span>30</span>秒只能触发一次。",
    skillAffixValue: {
      level1: [0.4000000059604645, 30],
      level2: [0.5, 26],
      level3: [0.6000000238418579, 22],
      level4: [0.699999988079071, 19],
      level5: [0.800000011920929, 16],
    },
    icon: "UI_EquipIcon_Sword_Fossil",
    awakeIcon: "UI_EquipIcon_Sword_Fossil_Awaken",
  },
  {
    weaponName: "宗室长剑",
    weaponType: "单手剑",
    rankLevel: 4,
    weaponProp: [
      {
        initValue: 42.4010009765625,
        type: "GROW_CURVE_ATTACK_201",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.09000000357627869,
        type: "GROW_CURVE_CRITICAL_201",
        propType: "攻击力百分比",
      },
    ],
    descText:
      "曾支配蒙德的旧日贵族的佩剑。做工精良，装饰与雕花彰显着挥舞者的身份。",
    id: 11404,
    skillAffixName: "专注",
    skillAffixText:
      "攻击造成伤害时，暴击率提升<span>8%</span>，最多堆叠5次。攻击造成暴击后，移除已有的专注效果。",
    skillAffixValue: {
      level1: [0.07999999821186066],
      level2: [0.10000000149011612],
      level3: [0.11999999731779099],
      level4: [0.14000000059604645],
      level5: [0.1599999964237213],
    },
    icon: "UI_EquipIcon_Sword_Theocrat",
    awakeIcon: "UI_EquipIcon_Sword_Theocrat_Awaken",
  },
  {
    weaponName: "匣里龙吟",
    weaponType: "单手剑",
    rankLevel: 4,
    weaponProp: [
      {
        initValue: 42.4010009765625,
        type: "GROW_CURVE_ATTACK_201",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.09000000357627869,
        type: "GROW_CURVE_CRITICAL_201",
        propType: "攻击力百分比",
      },
    ],
    descText: "雕饰浮华的利刃，却丝毫不损它的柔韧与锋锐。破空之声有如龙吟。",
    id: 11405,
    skillAffixName: "踏火息雷",
    skillAffixText:
      "对处于火元素或雷元素影响下的敌人，造成的伤害提高<span>20%</span>。",
    skillAffixValue: {
      level1: [0.20000000298023224],
      level2: [0.23999999463558197],
      level3: [0.2800000011920929],
      level4: [0.3199999928474426],
      level5: [0.36000001430511475],
    },
    icon: "UI_EquipIcon_Sword_Rockkiller",
    awakeIcon: "UI_EquipIcon_Sword_Rockkiller_Awaken",
  },
  {
    weaponName: "试作斩岩",
    weaponType: "单手剑",
    rankLevel: 4,
    weaponProp: [
      {
        initValue: 43.734901428222656,
        type: "GROW_CURVE_ATTACK_202",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.07506699860095978,
        type: "GROW_CURVE_CRITICAL_201",
        propType: "物理伤害加成",
      },
    ],
    descText: "黑岩厂中秘藏的古老长剑。可挥砍断岩而刃不卷。",
    id: 11406,
    skillAffixName: "碎石",
    skillAffixText:
      "普通攻击或重击命中时，攻击力和防御力提高<span>4%</span>，持续6秒，最多叠加4层。该效果每0.3秒只能触发一次。",
    skillAffixValue: {
      level1: [0.03999999910593033],
      level2: [0.05000000074505806],
      level3: [0.05999999865889549],
      level4: [0.07000000029802322],
      level5: [0.07999999821186066],
    },
    icon: "UI_EquipIcon_Sword_Proto",
    awakeIcon: "UI_EquipIcon_Sword_Proto_Awaken",
  },
  {
    weaponName: "铁蜂刺",
    weaponType: "单手剑",
    rankLevel: 4,
    weaponProp: [
      {
        initValue: 42.4010009765625,
        type: "GROW_CURVE_ATTACK_201",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 36,
        type: "GROW_CURVE_CRITICAL_201",
        propType: "元素精通",
      },
    ],
    descText:
      "外形流利的细长刺剑，是从异国经由商路流落到璃月的奇异兵器。轻快无比，剑芒极其锐利。",
    id: 11407,
    skillAffixName: "注能之刺",
    skillAffixText:
      "造成元素伤害后的6秒内，角色造成的伤害提高<span>6%</span>，该效果最多叠加2层。该效果每1秒可以触发一次。",
    skillAffixValue: {
      level1: [0.05999999865889549, 1, 6],
      level2: [0.07500000298023224, 1, 6],
      level3: [0.09000000357627869, 1, 6],
      level4: [0.10499999672174454, 1, 6],
      level5: [0.11999999731779099, 1, 6],
    },
    icon: "UI_EquipIcon_Sword_Exotic",
    awakeIcon: "UI_EquipIcon_Sword_Exotic_Awaken",
  },
  {
    weaponName: "黑岩长剑",
    weaponType: "单手剑",
    rankLevel: 4,
    weaponProp: [
      {
        initValue: 43.734901428222656,
        type: "GROW_CURVE_ATTACK_202",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.07999999821186066,
        type: "GROW_CURVE_CRITICAL_201",
        propType: "暴击伤害",
      },
    ],
    descText: "黑岩锻造而成的长剑。玄色的剑身隐隐流露血光。",
    id: 11408,
    skillAffixName: "乘胜追击",
    skillAffixText:
      "击败敌人后，攻击力提升<span>12%</span>，持续30秒。该效果至多叠加3层，每层持续时间独立。",
    skillAffixValue: {
      level1: [0.11999999731779099, 30],
      level2: [0.15000000596046448, 30],
      level3: [0.18000000715255737, 30],
      level4: [0.20999999344348907, 30],
      level5: [0.23999999463558197, 30],
    },
    icon: "UI_EquipIcon_Sword_Blackrock",
    awakeIcon: "UI_EquipIcon_Sword_Blackrock_Awaken",
  },
  {
    weaponName: "黑剑",
    weaponType: "单手剑",
    rankLevel: 4,
    weaponProp: [
      {
        initValue: 42.4010009765625,
        type: "GROW_CURVE_ATTACK_201",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.05999999865889549,
        type: "GROW_CURVE_CRITICAL_201",
        propType: "暴击率",
      },
    ],
    descText: "渴求着纷争与砍杀的漆黑长剑，据说会让人沉醉在浴血厮杀的亢奋中。",
    id: 11409,
    skillAffixName: "「正义」",
    skillAffixText:
      "普通攻击与重击的造成的伤害提升<span>20%</span>；此外，普通攻击与重击暴击时，回复等同于攻击力<span>60%</span>的生命值。该效果每5秒至多发动一次。",
    skillAffixValue: {
      level1: [0.20000000298023224, 0.6000000238418579, 5, 1],
      level2: [0.25, 0.699999988079071, 5, 1],
      level3: [0.30000001192092896, 0.800000011920929, 5, 1],
      level4: [0.3499999940395355, 0.8999999761581421, 5, 1],
      level5: [0.4000000059604645, 1, 5, 1],
    },
    icon: "UI_EquipIcon_Sword_Bloodstained",
    awakeIcon: "UI_EquipIcon_Sword_Bloodstained_Awaken",
  },
  {
    weaponName: "暗巷闪光",
    weaponType: "单手剑",
    rankLevel: 4,
    weaponProp: [
      {
        initValue: 45.06869888305664,
        type: "GROW_CURVE_ATTACK_203",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 11.999987602233887,
        type: "GROW_CURVE_CRITICAL_201",
        propType: "元素精通",
      },
    ],
    descText: "有着黑夜颜色的笔直长剑，曾属于穿行于暗巷的盗贼。",
    id: 11410,
    skillAffixName: "街巷游侠",
    skillAffixText:
      "角色造成的伤害提升<span>12%</span>。受到伤害后，该伤害提升效果会失效5秒。",
    skillAffixValue: {
      level1: [0.11999999731779099, 5],
      level2: [0.15000000596046448, 5],
      level3: [0.18000000715255737, 5],
      level4: [0.20999999344348907, 5],
      level5: [0.23999999463558197, 5],
    },
    icon: "UI_EquipIcon_Sword_Outlaw",
    awakeIcon: "UI_EquipIcon_Sword_Outlaw_Awaken",
  },
  {
    weaponName: "降临之剑",
    weaponType: "单手剑",
    rankLevel: 4,
    weaponProp: [
      {
        initValue: 38.74129867553711,
        type: "GROW_CURVE_ATTACK_101",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.07660000026226044,
        type: "GROW_CURVE_CRITICAL_101",
        propType: "攻击力百分比",
      },
    ],
    descText: "造型独特的剑。看起来并不属于这个世界。",
    id: 11412,
    skillAffixName: "降世",
    skillAffixText:
      '<span>仅在以下平台生效：</span>\n<span>"PlayStation Network"</span>\n普通攻击与重击命中敌人后有<span>50%</span>概率在小范围内造成<span>200%</span>攻击力的伤害。该效果每10秒只能触发一次；此外，旅行者装备降临之剑时，攻击力提升<span>66</span>点。',
    skillAffixValue: {
      level1: [0.5, 2, 10, 66],
      level2: [],
      level3: [],
      level4: [],
      level5: [],
    },
    icon: "UI_EquipIcon_Sword_Psalmus",
    awakeIcon: "UI_EquipIcon_Sword_Psalmus_Awaken",
  },
  {
    weaponName: "腐殖之剑",
    weaponType: "单手剑",
    rankLevel: 4,
    weaponProp: [
      {
        initValue: 42.4010009765625,
        type: "GROW_CURVE_ATTACK_201",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.10000000149011612,
        type: "GROW_CURVE_CRITICAL_201",
        propType: "元素充能效率",
      },
    ],
    descText: "希冀着生命的诡谲直剑，附有连龙也能侵蚀的腐殖之毒。",
    id: 11413,
    skillAffixName: "无尽的渴慕",
    skillAffixText:
      "元素战技造成的伤害增加<span>16%</span>，元素战技的暴击率提升<span>6%</span>。",
    skillAffixValue: {
      level1: [0.1599999964237213, 0.05999999865889549],
      level2: [0.20000000298023224, 0.07500000298023224],
      level3: [0.23999999463558197, 0.09000000357627869],
      level4: [0.2800000011920929, 0.10499999672174454],
      level5: [0.3199999928474426, 0.11999999731779099],
    },
    icon: "UI_EquipIcon_Sword_Magnum",
    awakeIcon: "UI_EquipIcon_Sword_Magnum_Awaken",
  },
  {
    weaponName: "天目影打刀",
    weaponType: "单手剑",
    rankLevel: 4,
    weaponProp: [
      {
        initValue: 41.067100524902344,
        type: "GROW_CURVE_ATTACK_204",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.11999999731779099,
        type: "GROW_CURVE_CRITICAL_201",
        propType: "攻击力百分比",
      },
    ],
    descText: "传说中连以神速见长的天狗都能斩落的名士订制的刀。",
    id: 11414,
    skillAffixName: "岩藏之胤",
    skillAffixText:
      "施放元素战技后，获得1个胤种，该效果每5秒至多触发一次。胤种持续30秒，至多同时存在3个。施放元素爆发后，会清除持有的所有胤种，并在2秒之后，基于消耗的胤种数量，每个为该角色恢复<span>6</span>点元素能量。",
    skillAffixValue: {
      level1: [30, 3, 5, 6],
      level2: [30, 3, 5, 7.5],
      level3: [30, 3, 5, 9],
      level4: [30, 3, 5, 10.5],
      level5: [30, 3, 5, 12],
    },
    icon: "UI_EquipIcon_Sword_Bakufu",
    awakeIcon: "UI_EquipIcon_Sword_Bakufu_Awaken",
  },
  {
    weaponName: "辰砂之纺锤",
    weaponType: "单手剑",
    rankLevel: 4,
    weaponProp: [
      {
        initValue: 41.067100524902344,
        type: "GROW_CURVE_ATTACK_204",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.15013299882411957,
        type: "GROW_CURVE_CRITICAL_201",
        propType: "防御力百分比",
      },
    ],
    descText:
      "由不似这个世界的物质制成的剑，其中的力量就连侵蚀龙的腐殖之毒也能抵御住吧。",
    id: 11415,
    skillAffixName: "无垢之心",
    skillAffixText:
      "元素战技造成的伤害值提高，提高数值相当于防御力的<span>40%</span>。该效果每1.5秒最多触发一次，并将在元素战技造成伤害后的0.1秒后清除效果。",
    skillAffixValue: {
      level1: [0.4000000059604645, 4000, 1.5, 0.10000000149011612],
      level2: [0.5, 5000, 1.5, 0.10000000149011612],
      level3: [0.6000000238418579, 6000, 1.5, 0.10000000149011612],
      level4: [0.699999988079071, 7000, 1.5, 0.10000000149011612],
      level5: [0.800000011920929, 8000, 1.5, 0.10000000149011612],
    },
    icon: "UI_EquipIcon_Sword_Opus",
    awakeIcon: "UI_EquipIcon_Sword_Opus_Awaken",
  },
  {
    weaponName: "笼钓瓶一心",
    weaponType: "单手剑",
    rankLevel: 4,
    weaponProp: [
      {
        initValue: 42.4010009765625,
        type: "GROW_CURVE_ATTACK_201",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.09000000357627869,
        type: "GROW_CURVE_CRITICAL_201",
        propType: "攻击力百分比",
      },
    ],
    descText:
      "于遥远北国诞生之名刀，曾在归乡路上沾染无数罪恶，只为「一心」二字。",
    id: 11416,
    skillAffixName: "澄澄一心传",
    skillAffixText:
      "普通攻击、重击或下落攻击命中敌人时，将卷起切落风，造成180%攻击力的范围伤害，并且使攻击力提升15%，持续8秒。该效果每8秒至多触发一次。",
    skillAffixValue: {
      level1: [1.7999999523162842, 0.15000000596046448, 8, 8],
      level2: [],
      level3: [],
      level4: [],
      level5: [],
    },
    icon: "UI_EquipIcon_Sword_Youtou",
    awakeIcon: "UI_EquipIcon_Sword_Youtou_Awaken",
  },
  {
    weaponName: "原木刀",
    weaponType: "单手剑",
    rankLevel: 4,
    weaponProp: [
      {
        initValue: 43.734901428222656,
        type: "GROW_CURVE_ATTACK_202",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.06666699796915054,
        type: "GROW_CURVE_CRITICAL_201",
        propType: "元素充能效率",
      },
    ],
    descText: "从兰那罗的故事中得到的武器。具有刀的形制，能够贯穿森林的敌人。",
    id: 11417,
    skillAffixName: "森林的瑞佑",
    skillAffixText:
      "触发燃烧、原激化、超激化、蔓激化、绽放、超绽放或烈绽放后，将在角色周围产生至多存在10秒的「种识之叶」。拾取种识之叶的角色元素精通提升<span>60</span>点，持续12秒。每20秒至多通过这种方式产生一枚种识之叶。角色处于队伍后台时也能触发。种识之叶的效果无法叠加。",
    skillAffixValue: {
      level1: [60, 12, 20, 10],
      level2: [75, 12, 20, 10],
      level3: [90, 12, 20, 10],
      level4: [105, 12, 20, 10],
      level5: [120, 12, 20, 10],
    },
    icon: "UI_EquipIcon_Sword_Arakalari",
    awakeIcon: "UI_EquipIcon_Sword_Arakalari_Awaken",
  },
  {
    weaponName: "风鹰剑",
    weaponType: "单手剑",
    rankLevel: 5,
    weaponProp: [
      {
        initValue: 47.5369987487793,
        type: "GROW_CURVE_ATTACK_302",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.09000000357627869,
        type: "GROW_CURVE_CRITICAL_301",
        propType: "物理伤害加成",
      },
    ],
    descText:
      "西风骑士团的灵魂。历经千年仍在呼唤你卷起正义之风，祓除奸邪，一如上一位挥舞此剑的女杰。",
    id: 11501,
    skillAffixName: "西风之鹰的抗争",
    skillAffixText:
      "攻击力提高<span>20%</span>；受到伤害时触发：高扬抗争旗号的西风鹰之魂苏醒，恢复等同于攻击力的<span>100%</span>的生命值，并对周围的敌人造成<span>200%</span>攻击力的伤害。该效果每15秒只能触发一次。",
    skillAffixValue: {
      level1: [0.20000000298023224, 1, 2, 15],
      level2: [0.25, 1.149999976158142, 2.299999952316284, 15],
      level3: [0.30000001192092896, 1.2999999523162842, 2.5999999046325684, 15],
      level4: [0.3499999940395355, 1.4500000476837158, 2.9000000953674316, 15],
      level5: [0.4000000059604645, 1.600000023841858, 3.200000047683716, 15],
    },
    icon: "UI_EquipIcon_Sword_Falcon",
    awakeIcon: "UI_EquipIcon_Sword_Falcon_Awaken",
  },
  {
    weaponName: "天空之刃",
    weaponType: "单手剑",
    rankLevel: 5,
    weaponProp: [
      {
        initValue: 45.9364013671875,
        type: "GROW_CURVE_ATTACK_301",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.11999999731779099,
        type: "GROW_CURVE_CRITICAL_301",
        propType: "元素充能效率",
      },
    ],
    descText:
      "象征风龙的荣誉的骑士剑，如今失而复得。剑脊上吹息着风之神的赐福，蕴含苍空与长风的力量。",
    id: 11502,
    skillAffixName: "穿刺高天的利齿",
    skillAffixText:
      "暴击率提升<span>4%</span>；施放元素爆发时，获得破空之势：移动速度提升<span>10%</span>，攻击速度提升<span>10%</span>，普通攻击与重击命中时，额外造成<span>20%</span>攻击力的伤害，持续12秒。",
    skillAffixValue: {
      level1: [
        0.03999999910593033, 0.10000000149011612, 0.10000000149011612,
        0.20000000298023224, 12,
      ],
      level2: [
        0.05000000074505806, 0.10000000149011612, 0.10000000149011612, 0.25, 12,
      ],
      level3: [
        0.05999999865889549, 0.10000000149011612, 0.10000000149011612,
        0.30000001192092896, 12,
      ],
      level4: [
        0.07000000029802322, 0.10000000149011612, 0.10000000149011612,
        0.3499999940395355, 12,
      ],
      level5: [
        0.07999999821186066, 0.10000000149011612, 0.10000000149011612,
        0.4000000059604645, 12,
      ],
    },
    icon: "UI_EquipIcon_Sword_Dvalin",
    awakeIcon: "UI_EquipIcon_Sword_Dvalin_Awaken",
  },
  {
    weaponName: "苍古自由之誓",
    weaponType: "单手剑",
    rankLevel: 5,
    weaponProp: [
      {
        initValue: 45.9364013671875,
        type: "GROW_CURVE_ATTACK_301",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 43.20000076293945,
        type: "GROW_CURVE_CRITICAL_301",
        propType: "元素精通",
      },
    ],
    descText:
      "如同悠古的歌声一般苍蓝的直剑，如同风之国土自由的誓言一般锐利的武器。",
    id: 11503,
    skillAffixName: "抗争的践行之歌",
    skillAffixText:
      "飘游风中的「千年的大乐章」的一部分。造成的伤害提高<span>10%</span>；触发元素反应时，角色获得一枚奋起之符，每0.5秒内至多触发一次，角色处于队伍后台也能触发。拥有2枚奋起之符时，将消耗所有奋起之符，使附近的队伍中所有角色获得持续12秒的「千年的大乐章·抗争之歌」效果：普通攻击、重击、下落攻击造成的伤害提高<span>16%</span>，攻击力提升<span>20%</span>。触发后20秒内，无法再次获得奋起之符。「千年的大乐章」触发的多种数值效果中，同类数值效果不可叠加。",
    skillAffixValue: {
      level1: [
        0.10000000149011612, 0.5, 12, 0.1599999964237213, 0.20000000298023224,
        20,
      ],
      level2: [0.125, 0.5, 12, 0.20000000298023224, 0.25, 20],
      level3: [
        0.15000000596046448, 0.5, 12, 0.23999999463558197, 0.30000001192092896,
        20,
      ],
      level4: [
        0.17499999701976776, 0.5, 12, 0.2800000011920929, 0.3499999940395355,
        20,
      ],
      level5: [
        0.20000000298023224, 0.5, 12, 0.3199999928474426, 0.4000000059604645,
        20,
      ],
    },
    icon: "UI_EquipIcon_Sword_Widsith",
    awakeIcon: "UI_EquipIcon_Sword_Widsith_Awaken",
  },
  {
    weaponName: "斫峰之刃",
    weaponType: "单手剑",
    rankLevel: 5,
    weaponProp: [
      {
        initValue: 45.9364013671875,
        type: "GROW_CURVE_ATTACK_301",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.1080000028014183,
        type: "GROW_CURVE_CRITICAL_301",
        propType: "攻击力百分比",
      },
    ],
    descText: "传说中象征着某一则特定契约的利刃，曾经斩落过山岳的尖端。",
    id: 11504,
    skillAffixName: "金璋皇极",
    skillAffixText:
      "护盾强效提升<span>20%</span>。攻击命中后的8秒内，攻击力提升<span>4%</span>。该效果至多可叠加5层，每0.3秒只能触发一次。此外，处于护盾庇护下时，该效果的攻击力提升效果提高100%。",
    skillAffixValue: {
      level1: [0.20000000298023224, 0.03999999910593033, 8],
      level2: [0.25, 0.05000000074505806, 8],
      level3: [0.30000001192092896, 0.05999999865889549, 8],
      level4: [0.3499999940395355, 0.07000000029802322, 8],
      level5: [0.4000000059604645, 0.07999999821186066, 8],
    },
    icon: "UI_EquipIcon_Sword_Kunwu",
    awakeIcon: "UI_EquipIcon_Sword_Kunwu_Awaken",
  },
  {
    weaponName: "磐岩结绿",
    weaponType: "单手剑",
    rankLevel: 5,
    weaponProp: [
      {
        initValue: 44.33580017089844,
        type: "GROW_CURVE_ATTACK_304",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.09600000083446503,
        type: "GROW_CURVE_CRITICAL_301",
        propType: "暴击率",
      },
    ],
    descText: "由纯净的翠玉精琢细雕而成的仪礼宝剑，挥舞时剑风中似有叹息之声。",
    id: 11505,
    skillAffixName: "护国的无垢之心",
    skillAffixText:
      "生命值提升<span>20%</span>。此外，基于装备该武器的角色生命值上限的<span>1.2%</span>，获得攻击力加成。",
    skillAffixValue: {
      level1: [0.20000000298023224, 0.012000000104308128],
      level2: [0.25, 0.014999999664723873],
      level3: [0.30000001192092896, 0.017999999225139618],
      level4: [0.3499999940395355, 0.020999999716877937],
      level5: [0.4000000059604645, 0.024000000208616257],
    },
    icon: "UI_EquipIcon_Sword_Morax",
    awakeIcon: "UI_EquipIcon_Sword_Morax_Awaken",
  },
  {
    weaponName: "雾切之回光",
    weaponType: "单手剑",
    rankLevel: 5,
    weaponProp: [
      {
        initValue: 47.5369987487793,
        type: "GROW_CURVE_ATTACK_302",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.09600000083446503,
        type: "GROW_CURVE_CRITICAL_301",
        propType: "暴击伤害",
      },
    ],
    descText: "闪烁着凄烈紫光的太刀。名之为「回光」是因为一度破碎的过去。",
    id: 11509,
    skillAffixName: "雾切御腰物",
    skillAffixText:
      "获得<span>12%</span>所有元素伤害加成，并能获得「雾切之巴印」的威势。雾切之巴印：持有1/2/3层雾切之巴印时，获得<span>8/16/28%</span>自己的元素类型的元素伤害加成。在下列情况下，角色将各获得1层雾切之巴印：普通攻击造成元素伤害时，持续5秒；施放元素爆发时，持续10秒；此外，角色元素能量低于100%时，将获得1层雾切之巴印，此雾切之巴印会在角色的元素能量充满时消失。每层雾切之巴印的持续时间独立计算。",
    skillAffixValue: {
      level1: [
        0.11999999731779099, 0.07999999821186066, 0.1599999964237213,
        0.2800000011920929, 5, 10,
      ],
      level2: [
        0.15000000596046448, 0.10000000149011612, 0.20000000298023224,
        0.3499999940395355, 5, 10,
      ],
      level3: [
        0.18000000715255737, 0.11999999731779099, 0.23999999463558197,
        0.41999998688697815, 5, 10,
      ],
      level4: [
        0.20999999344348907, 0.14000000059604645, 0.2800000011920929,
        0.49000000953674316, 5, 10,
      ],
      level5: [
        0.23999999463558197, 0.1599999964237213, 0.3199999928474426,
        0.5600000023841858, 5, 10,
      ],
    },
    icon: "UI_EquipIcon_Sword_Narukami",
    awakeIcon: "UI_EquipIcon_Sword_Narukami_Awaken",
  },
  {
    weaponName: "波乱月白经津",
    weaponType: "单手剑",
    rankLevel: 5,
    weaponProp: [
      {
        initValue: 45.9364013671875,
        type: "GROW_CURVE_ATTACK_301",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.07199999690055847,
        type: "GROW_CURVE_CRITICAL_301",
        propType: "暴击率",
      },
    ],
    descText:
      "经津传奉命锻造的名作。因其如汹涌海涛般的气度，而得「波乱」之名。",
    id: 11510,
    skillAffixName: "白刃流转",
    skillAffixText:
      "获得<span>12%</span>所有元素伤害加成；队伍中附近的其他角色在施放元素战技时，会为装备该武器的角色产生1层「波穗」效果，至多叠加2层，每0.3秒最多触发1次。装备该武器的角色施放元素战技时，如果有积累的「波穗」效果，则将消耗已有的「波穗」，获得「波乱」：根据消耗的层数，每层提升<span>20%</span>普通攻击伤害，持续8秒。",
    skillAffixValue: {
      level1: [
        0.11999999731779099, 2, 0.30000001192092896, 0.20000000298023224, 8,
      ],
      level2: [0.15000000596046448, 2, 0.30000001192092896, 0.25, 8],
      level3: [
        0.18000000715255737, 2, 0.30000001192092896, 0.30000001192092896, 8,
      ],
      level4: [
        0.20999999344348907, 2, 0.30000001192092896, 0.3499999940395355, 8,
      ],
      level5: [
        0.23999999463558197, 2, 0.30000001192092896, 0.4000000059604645, 8,
      ],
    },
    icon: "UI_EquipIcon_Sword_Amenoma",
    awakeIcon: "UI_EquipIcon_Sword_Amenoma_Awaken",
  },
  {
    weaponName: "训练大剑",
    weaponType: "双手剑",
    rankLevel: 1,
    weaponProp: [
      {
        initValue: 23.2450008392334,
        type: "GROW_CURVE_ATTACK_101",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
    ],
    descText:
      "仅仅是削出了剑形的厚重铁片。在意志强韧的人手里，也有劈开磐石的力量。",
    id: 12101,
    icon: "UI_EquipIcon_Claymore_Aniki",
    awakeIcon: "UI_EquipIcon_Claymore_Aniki_Awaken",
  },
  {
    weaponName: "佣兵重剑",
    weaponType: "双手剑",
    rankLevel: 2,
    weaponProp: [
      {
        initValue: 32.93000030517578,
        type: "GROW_CURVE_ATTACK_101",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
    ],
    descText: "沉重坚实的古旧大剑，饱经战火与岁月的洗练。",
    id: 12201,
    icon: "UI_EquipIcon_Claymore_Oyaji",
    awakeIcon: "UI_EquipIcon_Claymore_Oyaji_Awaken",
  },
  {
    weaponName: "铁影阔剑",
    weaponType: "双手剑",
    rankLevel: 3,
    weaponProp: [
      {
        initValue: 38.74129867553711,
        type: "GROW_CURVE_ATTACK_101",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.07660000026226044,
        type: "GROW_CURVE_CRITICAL_101",
        propType: "生命值百分比",
      },
    ],
    descText:
      "这把剑是著名的光之狮艾伦德林的佩剑的仿品。握紧它，感受传说中大英雄的力量吧！注意：幻想请适度。",
    id: 12301,
    skillAffixName: "不屈",
    skillAffixText:
      "生命值低于<span>70%</span>时，重击不会轻易被打断，并提高<span>30%</span>重击伤害。",
    skillAffixValue: {
      level1: [0.699999988079071, 0.30000001192092896],
      level2: [0.75, 0.3499999940395355],
      level3: [0.800000011920929, 0.4000000059604645],
      level4: [0.8500000238418579, 0.44999998807907104],
      level5: [0.8999999761581421, 0.5],
    },
    icon: "UI_EquipIcon_Claymore_Glaive",
    awakeIcon: "UI_EquipIcon_Claymore_Glaive_Awaken",
  },
  {
    weaponName: "沐浴龙血的剑",
    weaponType: "双手剑",
    rankLevel: 3,
    weaponProp: [
      {
        initValue: 37.60749816894531,
        type: "GROW_CURVE_ATTACK_104",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 40.79999923706055,
        type: "GROW_CURVE_CRITICAL_101",
        propType: "元素精通",
      },
    ],
    descText:
      "据说是北方英雄浸过龙血的钢铁大剑，有刀枪不入的神力…这种护佑并不会延伸到挥舞它的人身上。",
    id: 12302,
    skillAffixName: "踏火息雷",
    skillAffixText:
      "对处于火元素或雷元素影响下的敌人，造成的伤害提高<span>12%</span>。",
    skillAffixValue: {
      level1: [0.11999999731779099],
      level2: [0.15000000596046448],
      level3: [0.18000000715255737],
      level4: [0.20999999344348907],
      level5: [0.23999999463558197],
    },
    icon: "UI_EquipIcon_Claymore_Siegfry",
    awakeIcon: "UI_EquipIcon_Claymore_Siegfry_Awaken",
  },
  {
    weaponName: "白铁大剑",
    weaponType: "双手剑",
    rankLevel: 3,
    weaponProp: [
      {
        initValue: 38.74129867553711,
        type: "GROW_CURVE_ATTACK_101",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.09560000151395798,
        type: "GROW_CURVE_CRITICAL_101",
        propType: "防御力百分比",
      },
    ],
    descText:
      "白铁锻成的双手剑，兼顾了重量与强度。即使臂力一般的人也能舞得生风，在力量强大者手中更是威力无穷。",
    id: 12303,
    skillAffixName: "收割",
    skillAffixText: "击败敌人时，恢复<span>8%</span>生命值。",
    skillAffixValue: {
      level1: [0.07999999821186066],
      level2: [0.10000000149011612],
      level3: [0.11999999731779099],
      level4: [0.14000000059604645],
      level5: [0.1599999964237213],
    },
    icon: "UI_EquipIcon_Claymore_Tin",
    awakeIcon: "UI_EquipIcon_Claymore_Tin_Awaken",
  },
  {
    weaponName: "石英大剑",
    weaponType: "双手剑",
    rankLevel: 3,
    weaponProp: [
      {
        initValue: 38.74129867553711,
        type: "GROW_CURVE_ATTACK_101",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 30.600000381469727,
        type: "GROW_CURVE_CRITICAL_101",
        propType: "元素精通",
      },
    ],
    descText:
      "古朴厚重的大剑，由坚固的黑色石英雕琢打磨而成，上面有着鎏金的花纹，尽显优雅庄严。",
    id: 12304,
    skillAffixName: "余热",
    skillAffixText:
      "触发超载、融化、燃烧、蒸发、烈绽放或火元素扩散反应后的12秒内，攻击力提高<span>20%</span>。",
    skillAffixValue: {
      level1: [0.20000000298023224],
      level2: [0.25],
      level3: [0.30000001192092896],
      level4: [0.3499999940395355],
      level5: [0.4000000059604645],
    },
    icon: "UI_EquipIcon_Claymore_Quartz",
    awakeIcon: "UI_EquipIcon_Claymore_Quartz_Awaken",
  },
  {
    weaponName: "以理服人",
    weaponType: "双手剑",
    rankLevel: 3,
    weaponProp: [
      {
        initValue: 38.74129867553711,
        type: "GROW_CURVE_ATTACK_101",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.07660000026226044,
        type: "GROW_CURVE_CRITICAL_101",
        propType: "攻击力百分比",
      },
    ],
    descText: "精钢打造的趁手大铁棒子。最好的理论依据。",
    id: 12305,
    skillAffixName: "有话直说",
    skillAffixText:
      "施放元素战技后，普通攻击和重击命中时会在小范围内额外造成<span>60%</span>攻击力的伤害。该效果持续15秒，伤害每3秒只能触发一次。",
    skillAffixValue: {
      level1: [0.6000000238418579, 15, 3],
      level2: [0.75, 15, 3],
      level3: [0.8999999761581421, 15, 3],
      level4: [1.0499999523162842, 15, 3],
      level5: [1.2000000476837158, 15, 3],
    },
    icon: "UI_EquipIcon_Claymore_Reasoning",
    awakeIcon: "UI_EquipIcon_Claymore_Reasoning_Awaken",
  },
  {
    weaponName: "飞天大御剑",
    weaponType: "双手剑",
    rankLevel: 3,
    weaponProp: [
      {
        initValue: 38.74129867553711,
        type: "GROW_CURVE_ATTACK_101",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.09560000151395798,
        type: "GROW_CURVE_CRITICAL_101",
        propType: "物理伤害加成",
      },
    ],
    descText: "可靠的大剑。传说著名的「御剑公子」曾试图借助它二度飞天。",
    id: 12306,
    skillAffixName: "勇气",
    skillAffixText:
      "普通攻击和重击命中时，攻击力提高<span>6%</span>，持续6秒，最多叠加4层。该效果每0.5秒只能触发一次。",
    skillAffixValue: {
      level1: [0.05999999865889549],
      level2: [0.07000000029802322],
      level3: [0.07999999821186066],
      level4: [0.09000000357627869],
      level5: [0.10000000149011612],
    },
    icon: "UI_EquipIcon_Claymore_Mitsurugi",
    awakeIcon: "UI_EquipIcon_Claymore_Mitsurugi_Awaken",
  },
  {
    weaponName: "西风大剑",
    weaponType: "双手剑",
    rankLevel: 4,
    weaponProp: [
      {
        initValue: 41.067100524902344,
        type: "GROW_CURVE_ATTACK_204",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.1333329975605011,
        type: "GROW_CURVE_CRITICAL_201",
        propType: "元素充能效率",
      },
    ],
    descText: "西风骑士团的重型仪式剑。能轻易导出元素力量，具有卓越的破坏力。",
    id: 12401,
    skillAffixName: "顺风而行",
    skillAffixText:
      "攻击造成暴击时，有<span>60%</span>的几率产生少量元素微粒，能为角色恢复6点元素能量。该效果每<span>12</span>秒只能触发一次。",
    skillAffixValue: {
      level1: [0.6000000238418579, 12],
      level2: [0.699999988079071, 10.5],
      level3: [0.800000011920929, 9],
      level4: [0.8999999761581421, 7.5],
      level5: [1, 6],
    },
    icon: "UI_EquipIcon_Claymore_Zephyrus",
    awakeIcon: "UI_EquipIcon_Claymore_Zephyrus_Awaken",
  },
  {
    weaponName: "钟剑",
    weaponType: "双手剑",
    rankLevel: 4,
    weaponProp: [
      {
        initValue: 42.4010009765625,
        type: "GROW_CURVE_ATTACK_201",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.09000000357627869,
        type: "GROW_CURVE_CRITICAL_201",
        propType: "生命值百分比",
      },
    ],
    descText: "装有时钟的厚重大剑，其中的计时机关早已被破坏。",
    id: 12402,
    skillAffixName: "叛逆的守护者",
    skillAffixText:
      "受到伤害时，生成一个伤害吸收量等同于生命值上限<span>20%</span>的护盾，持续10秒或直到护盾失效,每<span>45</span>秒只能触发一次。角色处于护盾庇护下时，造成的伤害提升<span>12%</span>。",
    skillAffixValue: {
      level1: [0.20000000298023224, 45, 0.11999999731779099],
      level2: [0.23000000417232513, 45, 0.15000000596046448],
      level3: [0.25999999046325684, 45, 0.18000000715255737],
      level4: [0.28999999165534973, 45, 0.20999999344348907],
      level5: [0.3199999928474426, 45, 0.23999999463558197],
    },
    icon: "UI_EquipIcon_Claymore_Troupe",
    awakeIcon: "UI_EquipIcon_Claymore_Troupe_Awaken",
  },
  {
    weaponName: "祭礼大剑",
    weaponType: "双手剑",
    rankLevel: 4,
    weaponProp: [
      {
        initValue: 43.734901428222656,
        type: "GROW_CURVE_ATTACK_202",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.06666699796915054,
        type: "GROW_CURVE_CRITICAL_201",
        propType: "元素充能效率",
      },
    ],
    descText:
      "在漫长岁月中石化的道具大剑，上面的仪式性装饰依然清晰可见。拥有受时间之风冲刷的祝福力量。",
    id: 12403,
    skillAffixName: "气定神闲",
    skillAffixText:
      "元素战技造成伤害时，有<span>40%</span>的概率重置该技能的冷却时间，该效果每<span>30</span>秒只能触发一次。",
    skillAffixValue: {
      level1: [0.4000000059604645, 30],
      level2: [0.5, 26],
      level3: [0.6000000238418579, 22],
      level4: [0.699999988079071, 19],
      level5: [0.800000011920929, 16],
    },
    icon: "UI_EquipIcon_Claymore_Fossil",
    awakeIcon: "UI_EquipIcon_Claymore_Fossil_Awaken",
  },
  {
    weaponName: "宗室大剑",
    weaponType: "双手剑",
    rankLevel: 4,
    weaponProp: [
      {
        initValue: 43.734901428222656,
        type: "GROW_CURVE_ATTACK_202",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.05999999865889549,
        type: "GROW_CURVE_CRITICAL_201",
        propType: "攻击力百分比",
      },
    ],
    descText:
      "曾支配蒙德的旧日贵族的大剑。用料极佳，历久犹弥新。是贵族的战斗兵器。",
    id: 12404,
    skillAffixName: "专注",
    skillAffixText:
      "攻击造成伤害时，暴击率提升<span>8%</span>，最多堆叠5次。攻击造成暴击后，移除已有的专注效果。",
    skillAffixValue: {
      level1: [0.07999999821186066],
      level2: [0.10000000149011612],
      level3: [0.11999999731779099],
      level4: [0.14000000059604645],
      level5: [0.1599999964237213],
    },
    icon: "UI_EquipIcon_Claymore_Theocrat",
    awakeIcon: "UI_EquipIcon_Claymore_Theocrat_Awaken",
  },
  {
    weaponName: "雨裁",
    weaponType: "双手剑",
    rankLevel: 4,
    weaponProp: [
      {
        initValue: 42.4010009765625,
        type: "GROW_CURVE_ATTACK_201",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 36,
        type: "GROW_CURVE_CRITICAL_201",
        propType: "元素精通",
      },
    ],
    descText: "散发着黯淡荧光的无锋大剑，纯粹以气势和力量碾碎敌人。",
    id: 12405,
    skillAffixName: "止水息雷",
    skillAffixText:
      "对处于水元素或雷元素影响下的敌人，造成的伤害提高<span>20%</span>。",
    skillAffixValue: {
      level1: [0.20000000298023224],
      level2: [0.23999999463558197],
      level3: [0.2800000011920929],
      level4: [0.3199999928474426],
      level5: [0.36000001430511475],
    },
    icon: "UI_EquipIcon_Claymore_Perdue",
    awakeIcon: "UI_EquipIcon_Claymore_Perdue_Awaken",
  },
  {
    weaponName: "试作古华",
    weaponType: "双手剑",
    rankLevel: 4,
    weaponProp: [
      {
        initValue: 43.734901428222656,
        type: "GROW_CURVE_ATTACK_202",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.05999999865889549,
        type: "GROW_CURVE_CRITICAL_201",
        propType: "攻击力百分比",
      },
    ],
    descText: "黑岩厂中秘藏的古老大刀。挥舞时，仿佛连空间本身也要被一刀两断。",
    id: 12406,
    skillAffixName: "粉碎",
    skillAffixText:
      "普通攻击和重击命中时，有50%的概率对小范围内的敌人造成<span>240%</span>攻击力的额外伤害。该效果每15秒只能触发一次。",
    skillAffixValue: {
      level1: [0.5, 2.4000000953674316],
      level2: [0.5, 3],
      level3: [0.5, 3.5999999046325684],
      level4: [0.5, 4.199999809265137],
      level5: [0.5, 4.800000190734863],
    },
    icon: "UI_EquipIcon_Claymore_Proto",
    awakeIcon: "UI_EquipIcon_Claymore_Proto_Awaken",
  },
  {
    weaponName: "白影剑",
    weaponType: "双手剑",
    rankLevel: 4,
    weaponProp: [
      {
        initValue: 42.4010009765625,
        type: "GROW_CURVE_ATTACK_201",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.11259999871253967,
        type: "GROW_CURVE_CRITICAL_201",
        propType: "防御力百分比",
      },
    ],
    descText:
      "剑身上有一面未开刃的异国大剑，经商路流落到璃月。在了解它的人手里，破坏力极可观。",
    id: 12407,
    skillAffixName: "注能之锋",
    skillAffixText:
      "普通攻击和重击命中后，攻击力和防御力提高<span>6%</span>。该效果持续6秒，最多叠加4层，每0.5秒只能触发一次。",
    skillAffixValue: {
      level1: [0.05999999865889549],
      level2: [0.07500000298023224],
      level3: [0.09000000357627869],
      level4: [0.10499999672174454],
      level5: [0.11999999731779099],
    },
    icon: "UI_EquipIcon_Claymore_Exotic",
    awakeIcon: "UI_EquipIcon_Claymore_Exotic_Awaken",
  },
  {
    weaponName: "黑岩斩刀",
    weaponType: "双手剑",
    rankLevel: 4,
    weaponProp: [
      {
        initValue: 42.4010009765625,
        type: "GROW_CURVE_ATTACK_201",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.11999999731779099,
        type: "GROW_CURVE_CRITICAL_201",
        propType: "暴击伤害",
      },
    ],
    descText: "坚韧无比的黑岩大刀，通体皆为玄赤之色。",
    id: 12408,
    skillAffixName: "乘胜追击",
    skillAffixText:
      "击败敌人后，攻击力提升<span>12%</span>，持续30秒。该效果至多叠加3层，每层持续时间独立。",
    skillAffixValue: {
      level1: [0.11999999731779099, 30],
      level2: [0.15000000596046448, 30],
      level3: [0.18000000715255737, 30],
      level4: [0.20999999344348907, 30],
      level5: [0.23999999463558197, 30],
    },
    icon: "UI_EquipIcon_Claymore_Blackrock",
    awakeIcon: "UI_EquipIcon_Claymore_Blackrock_Awaken",
  },
  {
    weaponName: "螭骨剑",
    weaponType: "双手剑",
    rankLevel: 4,
    weaponProp: [
      {
        initValue: 42.4010009765625,
        type: "GROW_CURVE_ATTACK_201",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.05999999865889549,
        type: "GROW_CURVE_CRITICAL_201",
        propType: "暴击率",
      },
    ],
    descText: "来自古代大海的稀有兵器，舞剑猎猎宛如太古的涛声。",
    id: 12409,
    skillAffixName: "破浪",
    skillAffixText:
      "角色在场上时，每4秒提升<span>6%</span>造成的伤害，<span>3%</span>受到的伤害。该效果最多叠加5层，不随角色退场重置，受到伤害后会减少1层效果。",
    skillAffixValue: {
      level1: [4, 0.05999999865889549, 0.029999999329447746],
      level2: [4, 0.07000000029802322, 0.027000000700354576],
      level3: [4, 0.07999999821186066, 0.024000000208616257],
      level4: [4, 0.09000000357627869, 0.02199999988079071],
      level5: [4, 0.10000000149011612, 0.019999999552965164],
    },
    icon: "UI_EquipIcon_Claymore_Kione",
    awakeIcon: "UI_EquipIcon_Claymore_Kione_Awaken",
  },
  {
    weaponName: "千岩古剑",
    weaponType: "双手剑",
    rankLevel: 4,
    weaponProp: [
      {
        initValue: 42.4010009765625,
        type: "GROW_CURVE_ATTACK_201",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.09000000357627869,
        type: "GROW_CURVE_CRITICAL_201",
        propType: "攻击力百分比",
      },
    ],
    descText: "以璃月的基岩为原料削凿成的厚重大剑。",
    id: 12410,
    skillAffixName: "千岩诀·同心",
    skillAffixText:
      "队伍中每有一位璃月角色，装备该武器的角色便获得<span>7%</span>攻击力提升与<span>3%</span>暴击率提升。至多获得4层提升效果。",
    skillAffixValue: {
      level1: [0.07000000029802322, 0.029999999329447746, 4],
      level2: [0.07999999821186066, 0.03999999910593033, 4],
      level3: [0.09000000357627869, 0.05000000074505806, 4],
      level4: [0.10000000149011612, 0.05999999865889549, 4],
      level5: [0.10999999940395355, 0.07000000029802322, 4],
    },
    icon: "UI_EquipIcon_Claymore_Lapis",
    awakeIcon: "UI_EquipIcon_Claymore_Lapis_Awaken",
  },
  {
    weaponName: "雪葬的星银",
    weaponType: "双手剑",
    rankLevel: 4,
    weaponProp: [
      {
        initValue: 43.734901428222656,
        type: "GROW_CURVE_ATTACK_202",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.07506699860095978,
        type: "GROW_CURVE_CRITICAL_201",
        propType: "物理伤害加成",
      },
    ],
    descText: "储存在壁画之间的古老大剑。由星银铸成，似乎拥有斩开冰雪的力量。",
    id: 12411,
    skillAffixName: "霜葬",
    skillAffixText:
      "普通攻击与重击命中敌人时，有<span>60%</span>概率在敌人上方生成恒冰晶核并坠落，造成<span>80%</span>攻击力的范围伤害。若敌人处于冰元素影响下，则造成<span>200%</span>攻击力的伤害。该效果每10秒至多触发一次。",
    skillAffixValue: {
      level1: [0.6000000238418579, 0.800000011920929, 2, 10],
      level2: [0.699999988079071, 0.949999988079071, 2.4000000953674316, 10],
      level3: [0.800000011920929, 1.100000023841858, 2.799999952316284, 10],
      level4: [0.8999999761581421, 1.25, 3.200000047683716, 10],
      level5: [1, 1.399999976158142, 3.5999999046325684, 10],
    },
    icon: "UI_EquipIcon_Claymore_Dragonfell",
    awakeIcon: "UI_EquipIcon_Claymore_Dragonfell_Awaken",
  },
  {
    weaponName: "衔珠海皇",
    weaponType: "双手剑",
    rankLevel: 4,
    weaponProp: [
      {
        initValue: 41.067100524902344,
        type: "GROW_CURVE_ATTACK_204",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.11999999731779099,
        type: "GROW_CURVE_CRITICAL_201",
        propType: "攻击力百分比",
      },
    ],
    descText: "海中的大王。经过风干，是称手的兵器以及应急食品。",
    id: 12412,
    skillAffixName: "海洋的胜利",
    skillAffixText:
      "元素爆发造成的伤害提升<span>12%</span>。元素爆发命中敌人时，有100%概率召唤大鲔冲击，造成<span>100%</span>攻击力的范围伤害。该效果每15秒至多触发一次。",
    skillAffixValue: {
      level1: [0.11999999731779099, 1, 1, 15],
      level2: [0.15000000596046448, 1, 1.25, 15],
      level3: [0.18000000715255737, 1, 1.5, 15],
      level4: [0.20999999344348907, 1, 1.75, 15],
      level5: [0.23999999463558197, 1, 2, 15],
    },
    icon: "UI_EquipIcon_Claymore_MillenniaTuna",
    awakeIcon: "UI_EquipIcon_Claymore_MillenniaTuna_Awaken",
  },
  {
    weaponName: "桂木斩长正",
    weaponType: "双手剑",
    rankLevel: 4,
    weaponProp: [
      {
        initValue: 42.4010009765625,
        type: "GROW_CURVE_ATTACK_201",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.10000000149011612,
        type: "GROW_CURVE_CRITICAL_201",
        propType: "元素充能效率",
      },
    ],
    descText: "过去在踏鞴砂打造的刀，沉重而坚韧。",
    id: 12414,
    skillAffixName: "名士振舞",
    skillAffixText:
      "元素战技造成的伤害提升<span>6%</span>。元素战技命中后，角色流失3点元素能量，并在此后的6秒内，每2秒恢复<span>3</span>点元素能量。该效果每10秒至多触发一次，角色处于队伍后台也能触发。",
    skillAffixValue: {
      level1: [0.05999999865889549, 3, 3, 6, 10],
      level2: [0.07500000298023224, 3, 3.5, 6, 10],
      level3: [0.09000000357627869, 3, 4, 6, 10],
      level4: [0.10499999672174454, 3, 4.5, 6, 10],
      level5: [0.11999999731779099, 3, 5, 6, 10],
    },
    icon: "UI_EquipIcon_Claymore_Bakufu",
    awakeIcon: "UI_EquipIcon_Claymore_Bakufu_Awaken",
  },
  {
    weaponName: "恶王丸",
    weaponType: "双手剑",
    rankLevel: 4,
    weaponProp: [
      {
        initValue: 42.4010009765625,
        type: "GROW_CURVE_ATTACK_201",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.09000000357627869,
        type: "GROW_CURVE_CRITICAL_201",
        propType: "攻击力百分比",
      },
    ],
    descText:
      "传说中「恶王」的爱刀，刀身庞大雄伟，但挥舞起来却出乎意料地轻便。",
    id: 12416,
    skillAffixName: "驭浪的海祇民",
    skillAffixText:
      "队伍中所有角色的元素能量上限的总和，每1点能使装备此武器的角色的元素爆发造成的伤害提高<span>0.12%</span>，通过这种方式，元素爆发造成的伤害至多提高<span>40%</span>。",
    skillAffixValue: {
      level1: [0.11999999731779099, 0.4000000059604645],
      level2: [0.15000000596046448, 0.5],
      level3: [0.18000000715255737, 0.6000000238418579],
      level4: [0.20999999344348907, 0.699999988079071],
      level5: [0.23999999463558197, 0.800000011920929],
    },
    icon: "UI_EquipIcon_Claymore_Maria",
    awakeIcon: "UI_EquipIcon_Claymore_Maria_Awaken",
  },
  {
    weaponName: "森林王器",
    weaponType: "双手剑",
    rankLevel: 4,
    weaponProp: [
      {
        initValue: 43.734901428222656,
        type: "GROW_CURVE_ATTACK_202",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.06666699796915054,
        type: "GROW_CURVE_CRITICAL_201",
        propType: "元素充能效率",
      },
    ],
    descText:
      "从兰那罗的故事中得到的武器。具有大剑的形制，能够粉碎森林的敌人。",
    id: 12417,
    skillAffixName: "森林的瑞佑",
    skillAffixText:
      "触发燃烧、原激化、超激化、蔓激化、绽放、超绽放或烈绽放后，将在角色周围产生至多存在10秒的「种识之叶」。拾取种识之叶的角色元素精通提升<span>60</span>点，持续12秒。每20秒至多通过这种方式产生一枚种识之叶。角色处于队伍后台时也能触发。种识之叶的效果无法叠加。",
    skillAffixValue: {
      level1: [60, 12, 20, 10],
      level2: [75, 12, 20, 10],
      level3: [90, 12, 20, 10],
      level4: [105, 12, 20, 10],
      level5: [120, 12, 20, 10],
    },
    icon: "UI_EquipIcon_Claymore_Arakalari",
    awakeIcon: "UI_EquipIcon_Claymore_Arakalari_Awaken",
  },
  {
    weaponName: "天空之傲",
    weaponType: "双手剑",
    rankLevel: 5,
    weaponProp: [
      {
        initValue: 47.5369987487793,
        type: "GROW_CURVE_ATTACK_302",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.07999999821186066,
        type: "GROW_CURVE_CRITICAL_301",
        propType: "元素充能效率",
      },
    ],
    descText:
      "象征风龙的骄傲广布长空的双手剑。挥舞时的低吟是风龙的气势，蕴含苍空与长风的力量。",
    id: 12501,
    skillAffixName: "斩裂晴空的龙脊",
    skillAffixText:
      "造成的伤害提高<span>8%</span>；施放元素爆发后：普通攻击和重击命中时会发出真空刃，对路径上的敌人造成<span>80%</span>攻击力的伤害，持续20秒或直至发出8次真空刃。",
    skillAffixValue: {
      level1: [0.07999999821186066, 0.800000011920929, 20, 8],
      level2: [0.10000000149011612, 1, 20, 8],
      level3: [0.11999999731779099, 1.2000000476837158, 20, 8],
      level4: [0.14000000059604645, 1.399999976158142, 20, 8],
      level5: [0.1599999964237213, 1.600000023841858, 20, 8],
    },
    icon: "UI_EquipIcon_Claymore_Dvalin",
    awakeIcon: "UI_EquipIcon_Claymore_Dvalin_Awaken",
  },
  {
    weaponName: "狼的末路",
    weaponType: "双手剑",
    rankLevel: 5,
    weaponProp: [
      {
        initValue: 45.9364013671875,
        type: "GROW_CURVE_ATTACK_301",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.1080000028014183,
        type: "GROW_CURVE_CRITICAL_301",
        propType: "攻击力百分比",
      },
    ],
    descText:
      "狼的骑士所使的大剑。原本只是城中铁匠赠予的厚重的铁片，却在他与狼的情谊中，获得神话般的力量。",
    id: 12502,
    skillAffixName: "如狼般狩猎者",
    skillAffixText:
      "攻击力提高<span>20%</span>；攻击命中生命值低于30%的敌人时，队伍中所有成员的攻击力提高<span>40%</span>，持续12秒。该效果30秒只能触发一次。",
    skillAffixValue: {
      level1: [0.20000000298023224, 0.4000000059604645],
      level2: [0.25, 0.5],
      level3: [0.30000001192092896, 0.6000000238418579],
      level4: [0.3499999940395355, 0.699999988079071],
      level5: [0.4000000059604645, 0.800000011920929],
    },
    icon: "UI_EquipIcon_Claymore_Wolfmound",
    awakeIcon: "UI_EquipIcon_Claymore_Wolfmound_Awaken",
  },
  {
    weaponName: "松籁响起之时",
    weaponType: "双手剑",
    rankLevel: 5,
    weaponProp: [
      {
        initValue: 49.137699127197266,
        type: "GROW_CURVE_ATTACK_303",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.04500000178813934,
        type: "GROW_CURVE_CRITICAL_301",
        propType: "物理伤害加成",
      },
    ],
    descText:
      "如同翻弄草木的息吹一般轻盈的大剑，如同吹倒树木的飓风一般摧枯拉朽的武器。",
    id: 12503,
    skillAffixName: "揭旗的叛逆之歌",
    skillAffixText:
      "飘游风中的「千年的大乐章」的一部分。攻击力提高<span>16%</span>；普通攻击或重击命中敌人时，角色获得一枚低语之符，每0.3秒内至多触发一次。拥有4枚低语之符时，将消耗所有低语之符，使附近的队伍中所有角色获得持续12秒的「千年的大乐章·揭旗之歌」效果：普通攻击速度提高<span>12%</span>，攻击力提升<span>20%</span>。触发后20秒内，无法再次获得低语之符。「千年的大乐章」触发的多种数值效果中，同类数值效果不可叠加。",
    skillAffixValue: {
      level1: [
        0.1599999964237213, 0.30000001192092896, 12, 0.11999999731779099,
        0.20000000298023224, 20,
      ],
      level2: [
        0.20000000298023224, 0.30000001192092896, 12, 0.15000000596046448, 0.25,
        20,
      ],
      level3: [
        0.23999999463558197, 0.30000001192092896, 12, 0.18000000715255737,
        0.30000001192092896, 20,
      ],
      level4: [
        0.2800000011920929, 0.30000001192092896, 12, 0.20999999344348907,
        0.3499999940395355, 20,
      ],
      level5: [
        0.3199999928474426, 0.30000001192092896, 12, 0.23999999463558197,
        0.4000000059604645, 20,
      ],
    },
    icon: "UI_EquipIcon_Claymore_Widsith",
    awakeIcon: "UI_EquipIcon_Claymore_Widsith_Awaken",
  },
  {
    weaponName: "无工之剑",
    weaponType: "双手剑",
    rankLevel: 5,
    weaponProp: [
      {
        initValue: 45.9364013671875,
        type: "GROW_CURVE_ATTACK_301",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.1080000028014183,
        type: "GROW_CURVE_CRITICAL_301",
        propType: "攻击力百分比",
      },
    ],
    descText: "能靖祛妖魔奸佞，仿佛有神威的无锋大剑。",
    id: 12504,
    skillAffixName: "金璋皇极",
    skillAffixText:
      "护盾强效提升<span>20%</span>。攻击命中后的8秒内，攻击力提升<span>4%</span>。该效果至多可叠加5层，每0.3秒只能触发一次。此外，处于护盾庇护下时，该效果的攻击力提升效果提高100%。",
    skillAffixValue: {
      level1: [0.20000000298023224, 0.03999999910593033, 8],
      level2: [0.25, 0.05000000074505806, 8],
      level3: [0.30000001192092896, 0.05999999865889549, 8],
      level4: [0.3499999940395355, 0.07000000029802322, 8],
      level5: [0.4000000059604645, 0.07999999821186066, 8],
    },
    icon: "UI_EquipIcon_Claymore_Kunwu",
    awakeIcon: "UI_EquipIcon_Claymore_Kunwu_Awaken",
  },
  {
    weaponName: "赤角石溃杵",
    weaponType: "双手剑",
    rankLevel: 5,
    weaponProp: [
      {
        initValue: 44.33580017089844,
        type: "GROW_CURVE_ATTACK_304",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.19200000166893005,
        type: "GROW_CURVE_CRITICAL_301",
        propType: "暴击伤害",
      },
    ],
    descText:
      "依据过去的主人的说法，这是何等鬼怪精妖都能打跑的大杵「赤角石见石溃金涂金啮御狮子」。",
    id: 12510,
    skillAffixName: "御伽大王御伽话",
    skillAffixText:
      "防御力提高<span>28%</span>；普通攻击与重击造成的伤害值提高，提高数值相当于防御力的<span>40%</span>。",
    skillAffixValue: {
      level1: [0.2800000011920929, 0.4000000059604645, 80000],
      level2: [0.3499999940395355, 0.5, 80000],
      level3: [0.41999998688697815, 0.6000000238418579, 80000],
      level4: [0.49000000953674316, 0.699999988079071, 80000],
      level5: [0.5600000023841858, 0.800000011920929, 80000],
    },
    icon: "UI_EquipIcon_Claymore_Itadorimaru",
    awakeIcon: "UI_EquipIcon_Claymore_Itadorimaru_Awaken",
  },
  {
    weaponName: "新手长枪",
    weaponType: "长柄武器",
    rankLevel: 1,
    weaponProp: [
      {
        initValue: 23.2450008392334,
        type: "GROW_CURVE_ATTACK_101",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
    ],
    descText: "笔直得像旗杆一般的长枪，挥舞起来颇具气势。足以应付大多数情况。",
    id: 13101,
    icon: "UI_EquipIcon_Pole_Gewalt",
    awakeIcon: "UI_EquipIcon_Pole_Gewalt_Awaken",
  },
  {
    weaponName: "铁尖枪",
    weaponType: "长柄武器",
    rankLevel: 2,
    weaponProp: [
      {
        initValue: 32.93000030517578,
        type: "GROW_CURVE_ATTACK_101",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
    ],
    descText: "一头有尖，可攻可守的护身武器。在旅者当中十分流行。",
    id: 13201,
    icon: "UI_EquipIcon_Pole_Rod",
    awakeIcon: "UI_EquipIcon_Pole_Rod_Awaken",
  },
  {
    weaponName: "白缨枪",
    weaponType: "长柄武器",
    rankLevel: 3,
    weaponProp: [
      {
        initValue: 38.74129867553711,
        type: "GROW_CURVE_ATTACK_101",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.050999999046325684,
        type: "GROW_CURVE_CRITICAL_101",
        propType: "暴击率",
      },
    ],
    descText: "千岩军士兵的制式装备，枪身牢靠，枪尖锋锐，是无比可靠的武器。",
    id: 13301,
    skillAffixName: "锐利",
    skillAffixText: "普通攻击造成的伤害提升<span>24%</span>。",
    skillAffixValue: {
      level1: [0.23999999463558197],
      level2: [0.30000001192092896],
      level3: [0.36000001430511475],
      level4: [0.41999998688697815],
      level5: [0.47999998927116394],
    },
    icon: "UI_EquipIcon_Pole_Ruby",
    awakeIcon: "UI_EquipIcon_Pole_Ruby_Awaken",
  },
  {
    weaponName: "钺矛",
    weaponType: "长柄武器",
    rankLevel: 3,
    weaponProp: [
      {
        initValue: 39.875099182128906,
        type: "GROW_CURVE_ATTACK_102",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.05106699839234352,
        type: "GROW_CURVE_CRITICAL_101",
        propType: "攻击力百分比",
      },
    ],
    descText: "在矛上增加斧刃的兵器，有不俗的破坏力。是千岩军军官青睐的武器。",
    id: 13302,
    skillAffixName: "沉重",
    skillAffixText:
      "对普通攻击命中的敌人造成<span>160%</span>攻击力的额外伤害。该效果每10秒只能触发一次。",
    skillAffixValue: {
      level1: [1.600000023841858, 10],
      level2: [2, 10],
      level3: [2.4000000953674316, 10],
      level4: [2.799999952316284, 10],
      level5: [3.200000047683716, 10],
    },
    icon: "UI_EquipIcon_Pole_Halberd",
    awakeIcon: "UI_EquipIcon_Pole_Halberd_Awaken",
  },
  {
    weaponName: "黑缨枪",
    weaponType: "长柄武器",
    rankLevel: 3,
    weaponProp: [
      {
        initValue: 37.60749816894531,
        type: "GROW_CURVE_ATTACK_104",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.10213299840688705,
        type: "GROW_CURVE_CRITICAL_101",
        propType: "生命值百分比",
      },
    ],
    descText: "解决了白缨容易弄脏问题的绝世好枪。",
    id: 13303,
    skillAffixName: "克柔",
    skillAffixText: "对史莱姆类敌人造成的伤害增加<span>40%</span>。",
    skillAffixValue: {
      level1: [0.4000000059604645],
      level2: [0.5],
      level3: [0.6000000238418579],
      level4: [0.699999988079071],
      level5: [0.800000011920929],
    },
    icon: "UI_EquipIcon_Pole_Noire",
    awakeIcon: "UI_EquipIcon_Pole_Noire_Awaken",
  },
  {
    weaponName: "匣里灭辰",
    weaponType: "长柄武器",
    rankLevel: 4,
    weaponProp: [
      {
        initValue: 41.067100524902344,
        type: "GROW_CURVE_ATTACK_204",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 48,
        type: "GROW_CURVE_CRITICAL_201",
        propType: "元素精通",
      },
    ],
    descText: "金龙缠绕的长枪，轻快锐利无比。大抵真能轻易屠龙。",
    id: 13401,
    skillAffixName: "踏火止水",
    skillAffixText:
      "对处于水元素或火元素影响下的敌人，造成的伤害提高<span>20%</span>。",
    skillAffixValue: {
      level1: [0.20000000298023224],
      level2: [0.23999999463558197],
      level3: [0.2800000011920929],
      level4: [0.3199999928474426],
      level5: [0.36000001430511475],
    },
    icon: "UI_EquipIcon_Pole_Stardust",
    awakeIcon: "UI_EquipIcon_Pole_Stardust_Awaken",
  },
  {
    weaponName: "试作星镰",
    weaponType: "长柄武器",
    rankLevel: 4,
    weaponProp: [
      {
        initValue: 42.4010009765625,
        type: "GROW_CURVE_ATTACK_201",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.10000000149011612,
        type: "GROW_CURVE_CRITICAL_201",
        propType: "元素充能效率",
      },
    ],
    descText: "黑岩厂中秘藏的古老钩枪。锋芒上点点的闪光有如夜空稀星。",
    id: 13402,
    skillAffixName: "嗜魔",
    skillAffixText:
      "施放元素战技后，普通攻击和重击造成的伤害提高<span>8%</span>。该效果持续12秒，最多叠加2层。",
    skillAffixValue: {
      level1: [0.07999999821186066],
      level2: [0.10000000149011612],
      level3: [0.11999999731779099],
      level4: [0.14000000059604645],
      level5: [0.1599999964237213],
    },
    icon: "UI_EquipIcon_Pole_Proto",
    awakeIcon: "UI_EquipIcon_Pole_Proto_Awaken",
  },
  {
    weaponName: "流月针",
    weaponType: "长柄武器",
    rankLevel: 4,
    weaponProp: [
      {
        initValue: 43.734901428222656,
        type: "GROW_CURVE_ATTACK_202",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.07506699860095978,
        type: "GROW_CURVE_CRITICAL_201",
        propType: "物理伤害加成",
      },
    ],
    descText:
      "枪尖狭长，尾部分出半月刀刃的异国兵器，经由商路流落到璃月。稍事练习掌握，便有极其出众的杀伤力。",
    id: 13403,
    skillAffixName: "注能之针",
    skillAffixText:
      "获得元素微粒或元素晶球后的5秒内，普通攻击和重击额外造成<span>20</span>%攻击力伤害。",
    skillAffixValue: {
      level1: [0.20000000298023224],
      level2: [0.25],
      level3: [0.30000001192092896],
      level4: [0.3499999940395355],
      level5: [0.4000000059604645],
    },
    icon: "UI_EquipIcon_Pole_Exotic",
    awakeIcon: "UI_EquipIcon_Pole_Exotic_Awaken",
  },
  {
    weaponName: "黑岩刺枪",
    weaponType: "长柄武器",
    rankLevel: 4,
    weaponProp: [
      {
        initValue: 42.4010009765625,
        type: "GROW_CURVE_ATTACK_201",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.11999999731779099,
        type: "GROW_CURVE_CRITICAL_201",
        propType: "暴击伤害",
      },
    ],
    descText: "以黑岩与陨铁铸成的兵器，玄锋清凛的光泽中仿佛隐隐可见血色。",
    id: 13404,
    skillAffixName: "乘胜追击",
    skillAffixText:
      "击败敌人后，攻击力提升<span>12%</span>，持续30秒。该效果至多叠加3层，每层持续时间独立。",
    skillAffixValue: {
      level1: [0.11999999731779099, 30],
      level2: [0.15000000596046448, 30],
      level3: [0.18000000715255737, 30],
      level4: [0.20999999344348907, 30],
      level5: [0.23999999463558197, 30],
    },
    icon: "UI_EquipIcon_Pole_Blackrock",
    awakeIcon: "UI_EquipIcon_Pole_Blackrock_Awaken",
  },
  {
    weaponName: "决斗之枪",
    weaponType: "长柄武器",
    rankLevel: 4,
    weaponProp: [
      {
        initValue: 41.067100524902344,
        type: "GROW_CURVE_ATTACK_204",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.07999999821186066,
        type: "GROW_CURVE_CRITICAL_201",
        propType: "暴击率",
      },
    ],
    descText:
      "血红色的锋利长枪，过去是某位角斗士无比珍视的宝物。枪芒上曾沾染了无数野兽与人的鲜血。",
    id: 13405,
    skillAffixName: "角斗士",
    skillAffixText:
      "身边至少有2个敌人时，获得<span>16%</span>攻击力提升与<span>16%</span>防御力提升；身边的敌人少于2个时，获得<span>24%</span>攻击力提升。",
    skillAffixValue: {
      level1: [2, 0.23999999463558197, 0.1599999964237213, 0.1599999964237213],
      level2: [
        2, 0.30000001192092896, 0.20000000298023224, 0.20000000298023224,
      ],
      level3: [
        2, 0.36000001430511475, 0.23999999463558197, 0.23999999463558197,
      ],
      level4: [2, 0.41999998688697815, 0.2800000011920929, 0.2800000011920929],
      level5: [2, 0.47999998927116394, 0.3199999928474426, 0.3199999928474426],
    },
    icon: "UI_EquipIcon_Pole_Gladiator",
    awakeIcon: "UI_EquipIcon_Pole_Gladiator_Awaken",
  },
  {
    weaponName: "千岩长枪",
    weaponType: "长柄武器",
    rankLevel: 4,
    weaponProp: [
      {
        initValue: 43.734901428222656,
        type: "GROW_CURVE_ATTACK_202",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.05999999865889549,
        type: "GROW_CURVE_CRITICAL_201",
        propType: "攻击力百分比",
      },
    ],
    descText: "取孤云阁的岩片精工打造的长枪，枪尖坚固无比。",
    id: 13406,
    skillAffixName: "千岩诀·同心",
    skillAffixText:
      "队伍中每有一位璃月角色，装备此武器的角色便获得<span>7%</span>攻击力提升与<span>3%</span>暴击率提升。至多获得4层提升效果。",
    skillAffixValue: {
      level1: [0.07000000029802322, 0.029999999329447746, 4],
      level2: [0.07999999821186066, 0.03999999910593033, 4],
      level3: [0.09000000357627869, 0.05000000074505806, 4],
      level4: [0.10000000149011612, 0.05999999865889549, 4],
      level5: [0.10999999940395355, 0.07000000029802322, 4],
    },
    icon: "UI_EquipIcon_Pole_Lapis",
    awakeIcon: "UI_EquipIcon_Pole_Lapis_Awaken",
  },
  {
    weaponName: "西风长枪",
    weaponType: "长柄武器",
    rankLevel: 4,
    weaponProp: [
      {
        initValue: 43.734901428222656,
        type: "GROW_CURVE_ATTACK_202",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.06666699796915054,
        type: "GROW_CURVE_CRITICAL_201",
        propType: "元素充能效率",
      },
    ],
    descText: "西风骑士团的制式长枪。枪杆直挺，枪尖轻风流溢。",
    id: 13407,
    skillAffixName: "顺风而行",
    skillAffixText:
      "攻击造成暴击时，有<span>60%</span>的几率产生少量元素微粒，能为角色恢复6点元素能量。该效果每<span>12</span>秒只能触发一次。",
    skillAffixValue: {
      level1: [0.6000000238418579, 12],
      level2: [0.699999988079071, 10.5],
      level3: [0.800000011920929, 9],
      level4: [0.8999999761581421, 7.5],
      level5: [1, 6],
    },
    icon: "UI_EquipIcon_Pole_Zephyrus",
    awakeIcon: "UI_EquipIcon_Pole_Zephyrus_Awaken",
  },
  {
    weaponName: "宗室猎枪",
    weaponType: "长柄武器",
    rankLevel: 4,
    weaponProp: [
      {
        initValue: 43.734901428222656,
        type: "GROW_CURVE_ATTACK_202",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.05999999865889549,
        type: "GROW_CURVE_CRITICAL_201",
        propType: "攻击力百分比",
      },
    ],
    descText:
      "某位曾支配蒙德的旧日贵族，曾经珍爱的长枪。过去不曾见过天日，但如今依然尖锐无比。",
    id: 13408,
    skillAffixName: "专注",
    skillAffixText:
      "攻击造成伤害时，暴击率提升<span>8%</span>，最多堆叠5次。攻击造成暴击后，移除已有的专注效果。",
    skillAffixValue: {
      level1: [0.07999999821186066],
      level2: [0.10000000149011612],
      level3: [0.11999999731779099],
      level4: [0.14000000059604645],
      level5: [0.1599999964237213],
    },
    icon: "UI_EquipIcon_Pole_Theocrat",
    awakeIcon: "UI_EquipIcon_Pole_Theocrat_Awaken",
  },
  {
    weaponName: "龙脊长枪",
    weaponType: "长柄武器",
    rankLevel: 4,
    weaponProp: [
      {
        initValue: 41.067100524902344,
        type: "GROW_CURVE_ATTACK_204",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.15013299882411957,
        type: "GROW_CURVE_CRITICAL_201",
        propType: "物理伤害加成",
      },
    ],
    descText: "利用龙之牙制成的长枪。有着奇异的温暖触感。",
    id: 13409,
    skillAffixName: "霜葬",
    skillAffixText:
      "普通攻击与重击命中敌人时，有<span>60%</span>概率在敌人上方生成恒冰晶核并坠落，造成<span>80%</span>攻击力的范围伤害。若敌人处于冰元素影响下，则造成<span>200%</span>攻击力的伤害。该效果每10秒至多触发一次。",
    skillAffixValue: {
      level1: [0.6000000238418579, 0.800000011920929, 2, 10],
      level2: [0.699999988079071, 0.949999988079071, 2.4000000953674316, 10],
      level3: [0.800000011920929, 1.100000023841858, 2.799999952316284, 10],
      level4: [0.8999999761581421, 1.25, 3.200000047683716, 10],
      level5: [1, 1.399999976158142, 3.5999999046325684, 10],
    },
    icon: "UI_EquipIcon_Pole_Everfrost",
    awakeIcon: "UI_EquipIcon_Pole_Everfrost_Awaken",
  },
  {
    weaponName: "喜多院十文字",
    weaponType: "长柄武器",
    rankLevel: 4,
    weaponProp: [
      {
        initValue: 43.734901428222656,
        type: "GROW_CURVE_ATTACK_202",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 24,
        type: "GROW_CURVE_CRITICAL_201",
        propType: "元素精通",
      },
    ],
    descText: "曾经在八酝岛守望「祟神」的枪法名士所用的特殊长枪。",
    id: 13414,
    skillAffixName: "名士振舞",
    skillAffixText:
      "元素战技造成的伤害提升<span>6%</span>。元素战技命中后，角色流失3点元素能量，并在此后的6秒内，每2秒恢复<span>3</span>点元素能量。该效果每10秒至多触发一次，角色处于队伍后台也能触发。",
    skillAffixValue: {
      level1: [0.05999999865889549, 3, 3, 6, 10],
      level2: [0.07500000298023224, 3, 3.5, 6, 10],
      level3: [0.09000000357627869, 3, 4, 6, 10],
      level4: [0.10499999672174454, 3, 4.5, 6, 10],
      level5: [0.11999999731779099, 3, 5, 6, 10],
    },
    icon: "UI_EquipIcon_Pole_Bakufu",
    awakeIcon: "UI_EquipIcon_Pole_Bakufu_Awaken",
  },
  {
    weaponName: "「渔获」",
    weaponType: "长柄武器",
    rankLevel: 4,
    weaponProp: [
      {
        initValue: 42.4010009765625,
        type: "GROW_CURVE_ATTACK_201",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.10000000149011612,
        type: "GROW_CURVE_CRITICAL_201",
        propType: "元素充能效率",
      },
    ],
    descText: "在久远的过去，曾经闻名稻妻的大盗爱用的枪。",
    id: 13415,
    skillAffixName: "船歌",
    skillAffixText:
      "元素爆发造成的伤害提升<span>16%</span>，元素爆发的暴击率提升<span>6%</span>。",
    skillAffixValue: {
      level1: [0.1599999964237213, 0.05999999865889549],
      level2: [0.20000000298023224, 0.07500000298023224],
      level3: [0.23999999463558197, 0.09000000357627869],
      level4: [0.2800000011920929, 0.10499999672174454],
      level5: [0.3199999928474426, 0.11999999731779099],
    },
    icon: "UI_EquipIcon_Pole_Mori",
    awakeIcon: "UI_EquipIcon_Pole_Mori_Awaken",
  },
  {
    weaponName: "断浪长鳍",
    weaponType: "长柄武器",
    rankLevel: 4,
    weaponProp: [
      {
        initValue: 45.06869888305664,
        type: "GROW_CURVE_ATTACK_203",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.029999999329447746,
        type: "GROW_CURVE_CRITICAL_201",
        propType: "攻击力百分比",
      },
    ],
    descText: "以海渊之下的闪亮材质打造而成的薙刀，一度曾为天狗一族所有。",
    id: 13416,
    skillAffixName: "驭浪的海祇民",
    skillAffixText:
      "队伍中所有角色的元素能量上限的总和，每1点能使装备此武器的角色的元素爆发造成的伤害提高<span>0.12%</span>，通过这种方式，元素爆发造成的伤害至多提高<span>40%</span>。",
    skillAffixValue: {
      level1: [0.11999999731779099, 0.4000000059604645],
      level2: [0.15000000596046448, 0.5],
      level3: [0.18000000715255737, 0.6000000238418579],
      level4: [0.20999999344348907, 0.699999988079071],
      level5: [0.23999999463558197, 0.800000011920929],
    },
    icon: "UI_EquipIcon_Pole_Maria",
    awakeIcon: "UI_EquipIcon_Pole_Maria_Awaken",
  },
  {
    weaponName: "贯月矢",
    weaponType: "长柄武器",
    rankLevel: 4,
    weaponProp: [
      {
        initValue: 43.734901428222656,
        type: "GROW_CURVE_ATTACK_202",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 24,
        type: "GROW_CURVE_CRITICAL_201",
        propType: "元素精通",
      },
    ],
    descText:
      "从兰那罗的故事中得到的武器。形制如同巨大的箭矢，能够作为枪矛使用。",
    id: 13417,
    skillAffixName: "幽林月影",
    skillAffixText:
      "触发燃烧、原激化、超激化、蔓激化、绽放、超绽放或烈绽放后，将在角色周围产生至多存在10秒的「苏生之叶」。拾取苏生之叶的角色攻击力提升<span>16%</span>，持续12秒。每20秒至多通过这种方式产生一枚苏生之叶。角色处于队伍后台时也能触发。",
    skillAffixValue: {
      level1: [0.1599999964237213, 12, 20, 10],
      level2: [0.20000000298023224, 12, 20, 10],
      level3: [0.23999999463558197, 12, 20, 10],
      level4: [0.2800000011920929, 12, 20, 10],
      level5: [0.3199999928474426, 12, 20, 10],
    },
    icon: "UI_EquipIcon_Pole_Arakalari",
    awakeIcon: "UI_EquipIcon_Pole_Arakalari_Awaken",
  },
  {
    weaponName: "护摩之杖",
    weaponType: "长柄武器",
    rankLevel: 5,
    weaponProp: [
      {
        initValue: 45.9364013671875,
        type: "GROW_CURVE_ATTACK_301",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.14399999380111694,
        type: "GROW_CURVE_CRITICAL_301",
        propType: "暴击伤害",
      },
    ],
    descText: "在早已失落的古老祭仪中，使用的朱赤「柴火杖」。",
    id: 13501,
    skillAffixName: "无羁的朱赤之蝶",
    skillAffixText:
      "生命值提升<span>20%</span>。此外，基于装备该武器的角色生命值上限的<span>0.8%</span>，获得攻击力加成。当装备该武器的角色生命值低于50%时，进一步获得<span>1%</span>基于生命值上限的攻击力提升。",
    skillAffixValue: {
      level1: [0.20000000298023224, 0.00800000037997961, 0.009999999776482582],
      level2: [0.25, 0.009999999776482582, 0.012000000104308128],
      level3: [0.30000001192092896, 0.012000000104308128, 0.014000000432133675],
      level4: [0.3499999940395355, 0.014000000432133675, 0.01600000075995922],
      level5: [0.4000000059604645, 0.01600000075995922, 0.017999999225139618],
    },
    icon: "UI_EquipIcon_Pole_Homa",
    awakeIcon: "UI_EquipIcon_Pole_Homa_Awaken",
  },
  {
    weaponName: "天空之脊",
    weaponType: "长柄武器",
    rankLevel: 5,
    weaponProp: [
      {
        initValue: 47.5369987487793,
        type: "GROW_CURVE_ATTACK_302",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.07999999821186066,
        type: "GROW_CURVE_CRITICAL_301",
        propType: "元素充能效率",
      },
    ],
    descText:
      "象征风龙坚定决心的长枪。直挺的枪杆直指天穹，蕴含苍空与长风的力量。",
    id: 13502,
    skillAffixName: "斫断黑翼的利齿",
    skillAffixText:
      "暴击率提升<span>8%</span>，普通攻击速度提升<span>12%</span>。此外，普通攻击与重击命中敌人时，有<span>50%</span>概率触发真空刃，在小范围内造成额外<span>40%</span>攻击力的伤害。该效果每2秒至多触发一次。",
    skillAffixValue: {
      level1: [
        0.07999999821186066, 0.11999999731779099, 0.5, 0.4000000059604645, 2,
      ],
      level2: [
        0.10000000149011612, 0.11999999731779099, 0.5, 0.550000011920929, 2,
      ],
      level3: [
        0.11999999731779099, 0.11999999731779099, 0.5, 0.699999988079071, 2,
      ],
      level4: [
        0.14000000059604645, 0.11999999731779099, 0.5, 0.8500000238418579, 2,
      ],
      level5: [0.1599999964237213, 0.11999999731779099, 0.5, 1, 2],
    },
    icon: "UI_EquipIcon_Pole_Dvalin",
    awakeIcon: "UI_EquipIcon_Pole_Dvalin_Awaken",
  },
  {
    weaponName: "贯虹之槊",
    weaponType: "长柄武器",
    rankLevel: 5,
    weaponProp: [
      {
        initValue: 45.9364013671875,
        type: "GROW_CURVE_ATTACK_301",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.1080000028014183,
        type: "GROW_CURVE_CRITICAL_301",
        propType: "攻击力百分比",
      },
    ],
    descText:
      "或许能贯穿一切的锋利长枪。挥舞当中，仿佛能见到空气被枪尖划破的裂痕。",
    id: 13504,
    skillAffixName: "金璋皇极",
    skillAffixText:
      "护盾强效提升<span>20%</span>。攻击命中后的8秒内，攻击力提升<span>4%</span>。该效果至多可叠加5层，每0.3秒只能触发一次。此外，处于护盾庇护下时，该效果的攻击力提升效果提高100%。",
    skillAffixValue: {
      level1: [0.20000000298023224, 0.03999999910593033, 8],
      level2: [0.25, 0.05000000074505806, 8],
      level3: [0.30000001192092896, 0.05999999865889549, 8],
      level4: [0.3499999940395355, 0.07000000029802322, 8],
      level5: [0.4000000059604645, 0.07999999821186066, 8],
    },
    icon: "UI_EquipIcon_Pole_Kunwu",
    awakeIcon: "UI_EquipIcon_Pole_Kunwu_Awaken",
  },
  {
    weaponName: "和璞鸢",
    weaponType: "长柄武器",
    rankLevel: 5,
    weaponProp: [
      {
        initValue: 47.5369987487793,
        type: "GROW_CURVE_ATTACK_302",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.04800000041723251,
        type: "GROW_CURVE_CRITICAL_301",
        propType: "暴击率",
      },
    ],
    descText: "魔神翡玉化作的长枪，拥有刺杀远古海兽的沉重与锋利。",
    id: 13505,
    skillAffixName: "昭理的鸢之枪",
    skillAffixText:
      "命中敌人时自身攻击力提高<span>3.2%</span>，持续6秒，最高可以叠加7层。该效果每0.3秒最多触发一次。满层状态时伤害提升<span>12%</span>。",
    skillAffixValue: {
      level1: [0.03200000151991844, 0.11999999731779099],
      level2: [0.039000000804662704, 0.15000000596046448],
      level3: [0.04600000008940697, 0.18000000715255737],
      level4: [0.05299999937415123, 0.20999999344348907],
      level5: [0.05999999865889549, 0.23999999463558197],
    },
    icon: "UI_EquipIcon_Pole_Morax",
    awakeIcon: "UI_EquipIcon_Pole_Morax_Awaken",
  },
  {
    weaponName: "息灾",
    weaponType: "长柄武器",
    rankLevel: 5,
    weaponProp: [
      {
        initValue: 49.137699127197266,
        type: "GROW_CURVE_ATTACK_303",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.035999998450279236,
        type: "GROW_CURVE_CRITICAL_301",
        propType: "攻击力百分比",
      },
    ],
    descText: "由奇异晶石打造成的锋锐利器。幽幽蓝光似乎诉说着无尽往事。",
    id: 13507,
    skillAffixName: "灭却之戒法",
    skillAffixText:
      "获得<span>12%</span>所有元素伤害加成；施放元素战技后，获得持续20秒的「圆顿」，攻击力每1秒提升<span>3.2%</span>，该攻击力提升效果至多叠加6次。当装备此武器的角色处于队伍后台时，「圆顿」的攻击力提升效果翻倍。",
    skillAffixValue: {
      level1: [0.11999999731779099, 1, 0.03200000151991844, 6, 20],
      level2: [0.15000000596046448, 1, 0.03999999910593033, 6, 20],
      level3: [0.18000000715255737, 1, 0.04800000041723251, 6, 20],
      level4: [0.20999999344348907, 1, 0.0560000017285347, 6, 20],
      level5: [0.23999999463558197, 1, 0.06400000303983688, 6, 20],
    },
    icon: "UI_EquipIcon_Pole_Santika",
    awakeIcon: "UI_EquipIcon_Pole_Santika_Awaken",
  },
  {
    weaponName: "薙草之稻光",
    weaponType: "长柄武器",
    rankLevel: 5,
    weaponProp: [
      {
        initValue: 45.9364013671875,
        type: "GROW_CURVE_ATTACK_301",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.11999999731779099,
        type: "GROW_CURVE_CRITICAL_301",
        propType: "元素充能效率",
      },
    ],
    descText: "用于「斩草」的薙刀。对向此物之军势，也会如苇草般倒下吧…",
    id: 13509,
    skillAffixName: "非时之梦·常世灶食",
    skillAffixText:
      "攻击力获得提升，提升程度相当于元素充能效率超出100%部分的<span>28%</span>，至多通过这种方式提升<span>80%</span>。施放元素爆发后的12秒内，元素充能效率提升<span>30%</span>。",
    skillAffixValue: {
      level1: [0.2800000011920929, 0.800000011920929, 0.30000001192092896, 12],
      level2: [0.3499999940395355, 0.8999999761581421, 0.3499999940395355, 12],
      level3: [0.41999998688697815, 1, 0.4000000059604645, 12],
      level4: [0.49000000953674316, 1.100000023841858, 0.44999998807907104, 12],
      level5: [0.5600000023841858, 1.2000000476837158, 0.5, 12],
    },
    icon: "UI_EquipIcon_Pole_Narukami",
    awakeIcon: "UI_EquipIcon_Pole_Narukami_Awaken",
  },
  {
    weaponName: "学徒笔记",
    weaponType: "法器",
    rankLevel: 1,
    weaponProp: [
      {
        initValue: 23.2450008392334,
        type: "GROW_CURVE_ATTACK_101",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
    ],
    descText:
      "某个优等生留下的学习笔记，娟秀的字迹非常好看。记录了不少实用的咒语。",
    id: 14101,
    icon: "UI_EquipIcon_Catalyst_Apprentice",
    awakeIcon: "UI_EquipIcon_Catalyst_Apprentice_Awaken",
  },
  {
    weaponName: "口袋魔导书",
    weaponType: "法器",
    rankLevel: 2,
    weaponProp: [
      {
        initValue: 32.93000030517578,
        type: "GROW_CURVE_ATTACK_101",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
    ],
    descText: "精心编纂，只留下考试重点的魔导参考小册。",
    id: 14201,
    icon: "UI_EquipIcon_Catalyst_Pocket",
    awakeIcon: "UI_EquipIcon_Catalyst_Pocket_Awaken",
  },
  {
    weaponName: "魔导绪论",
    weaponType: "法器",
    rankLevel: 3,
    weaponProp: [
      {
        initValue: 37.60749816894531,
        type: "GROW_CURVE_ATTACK_104",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 40.79999923706055,
        type: "GROW_CURVE_CRITICAL_101",
        propType: "元素精通",
      },
    ],
    descText: "第十二版。结合时代发展加注了新内容，并修订了第十一版的错别字。",
    id: 14301,
    skillAffixName: "止水息雷",
    skillAffixText:
      "对处于水元素或雷元素影响下的敌人，造成的伤害提高<span>12%</span>。",
    skillAffixValue: {
      level1: [0.11999999731779099],
      level2: [0.15000000596046448],
      level3: [0.18000000715255737],
      level4: [0.20999999344348907],
      level5: [0.23999999463558197],
    },
    icon: "UI_EquipIcon_Catalyst_Intro",
    awakeIcon: "UI_EquipIcon_Catalyst_Intro_Awaken",
  },
  {
    weaponName: "讨龙英杰谭",
    weaponType: "法器",
    rankLevel: 3,
    weaponProp: [
      {
        initValue: 38.74129867553711,
        type: "GROW_CURVE_ATTACK_101",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.07660000026226044,
        type: "GROW_CURVE_CRITICAL_101",
        propType: "生命值百分比",
      },
    ],
    descText:
      "五名英雄踏上屠龙征途的虚构故事。文笔很差，结构散乱。失败的教训是这本书所拥有的伟大力量。",
    id: 14302,
    skillAffixName: "传承",
    skillAffixText:
      "主动切换角色时，新登场的角色攻击力提升<span>24%</span>，持续10秒。该效果每20秒只能触发一次。",
    skillAffixValue: {
      level1: [0.23999999463558197, 10, 20],
      level2: [0.30000001192092896, 10, 20],
      level3: [0.36000001430511475, 10, 20],
      level4: [0.41999998688697815, 10, 20],
      level5: [0.47999998927116394, 10, 20],
    },
    icon: "UI_EquipIcon_Catalyst_Pulpfic",
    awakeIcon: "UI_EquipIcon_Catalyst_Pulpfic_Awaken",
  },
  {
    weaponName: "异世界行记",
    weaponType: "法器",
    rankLevel: 3,
    weaponProp: [
      {
        initValue: 38.74129867553711,
        type: "GROW_CURVE_ATTACK_101",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.08500000089406967,
        type: "GROW_CURVE_CRITICAL_101",
        propType: "元素充能效率",
      },
    ],
    descText: "廉价的幻想小说，不具备参考价值。作为法器的力量当然也来自幻想。",
    id: 14303,
    skillAffixName: "能量沐浴",
    skillAffixText: "获得元素微粒或元素晶球时，恢复<span>1%</span>生命值。",
    skillAffixValue: {
      level1: [0.009999999776482582],
      level2: [0.012500000186264515],
      level3: [0.014999999664723873],
      level4: [0.017500000074505806],
      level5: [0.019999999552965164],
    },
    icon: "UI_EquipIcon_Catalyst_Lightnov",
    awakeIcon: "UI_EquipIcon_Catalyst_Lightnov_Awaken",
  },
  {
    weaponName: "翡玉法球",
    weaponType: "法器",
    rankLevel: 3,
    weaponProp: [
      {
        initValue: 39.875099182128906,
        type: "GROW_CURVE_ATTACK_102",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 20.399999618530273,
        type: "GROW_CURVE_CRITICAL_101",
        propType: "元素精通",
      },
    ],
    descText:
      "由璃月北郊绝云间出产的硬玉雕琢而成的法器。小巧轻盈，经久耐用，江湖人称「翡玉丸」。",
    id: 14304,
    skillAffixName: "激流",
    skillAffixText:
      "触发蒸发、感电、冰冻、绽放或水元素扩散后的12秒内，攻击力提高<span>20%</span>。",
    skillAffixValue: {
      level1: [0.20000000298023224],
      level2: [0.25],
      level3: [0.30000001192092896],
      level4: [0.3499999940395355],
      level5: [0.4000000059604645],
    },
    icon: "UI_EquipIcon_Catalyst_Jade",
    awakeIcon: "UI_EquipIcon_Catalyst_Jade_Awaken",
  },
  {
    weaponName: "甲级宝珏",
    weaponType: "法器",
    rankLevel: 3,
    weaponProp: [
      {
        initValue: 39.875099182128906,
        type: "GROW_CURVE_ATTACK_102",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.03400000184774399,
        type: "GROW_CURVE_CRITICAL_101",
        propType: "暴击率",
      },
    ],
    descText: "两块玉石拼成的精致玉佩。",
    id: 14305,
    skillAffixName: "奔袭战术",
    skillAffixText:
      "击败敌人后的15秒内，移动速度和攻击力提升<span>12%</span>。",
    skillAffixValue: {
      level1: [0.11999999731779099, 15],
      level2: [0.14000000059604645, 15],
      level3: [0.1599999964237213, 15],
      level4: [0.18000000715255737, 15],
      level5: [0.20000000298023224, 15],
    },
    icon: "UI_EquipIcon_Catalyst_Phoney",
    awakeIcon: "UI_EquipIcon_Catalyst_Phoney_Awaken",
  },
  {
    weaponName: "琥珀玥",
    weaponType: "法器",
    rankLevel: 3,
    weaponProp: [
      {
        initValue: 38.74129867553711,
        type: "GROW_CURVE_ATTACK_101",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 30.600000381469727,
        type: "GROW_CURVE_CRITICAL_101",
        propType: "元素精通",
      },
    ],
    descText: "用琥珀雕磨制成的法器，在日照下会散发出温暖的光晕。",
    id: 14306,
    skillAffixName: "元素熟练",
    skillAffixText:
      "普通攻击命中后，获得<span>6%</span>元素伤害加成。该效果持续6秒，最多可以叠加2层。",
    skillAffixValue: {
      level1: [0.05999999865889549, 6],
      level2: [0.07500000298023224, 6],
      level3: [0.09000000357627869, 6],
      level4: [0.10499999672174454, 6],
      level5: [0.11999999731779099, 6],
    },
    icon: "UI_EquipIcon_Catalyst_Amber",
    awakeIcon: "UI_EquipIcon_Catalyst_Amber_Awaken",
  },
  {
    weaponName: "西风秘典",
    weaponType: "法器",
    rankLevel: 4,
    weaponProp: [
      {
        initValue: 42.4010009765625,
        type: "GROW_CURVE_ATTACK_201",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.10000000149011612,
        type: "GROW_CURVE_CRITICAL_201",
        propType: "元素充能效率",
      },
    ],
    descText: "西风骑士团的学者间流传的秘典，记载着元素与物质的道理和力量。",
    id: 14401,
    skillAffixName: "顺风而行",
    skillAffixText:
      "攻击造成暴击时，有<span>60%</span>的几率产生少量元素微粒，能为角色恢复6点元素能量。该效果每<span>12</span>秒只能触发一次。",
    skillAffixValue: {
      level1: [0.6000000238418579, 12],
      level2: [0.699999988079071, 10.5],
      level3: [0.800000011920929, 9],
      level4: [0.8999999761581421, 7.5],
      level5: [1, 6],
    },
    icon: "UI_EquipIcon_Catalyst_Zephyrus",
    awakeIcon: "UI_EquipIcon_Catalyst_Zephyrus_Awaken",
  },
  {
    weaponName: "流浪乐章",
    weaponType: "法器",
    rankLevel: 4,
    weaponProp: [
      {
        initValue: 42.4010009765625,
        type: "GROW_CURVE_ATTACK_201",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.11999999731779099,
        type: "GROW_CURVE_CRITICAL_201",
        propType: "暴击伤害",
      },
    ],
    descText:
      "记载着歌谱的厚重记事簿。尽管遭受了虫蛀和风化，残留的手迹仍透露出力量。",
    id: 14402,
    skillAffixName: "登场乐",
    skillAffixText:
      "角色登场时，随机获得一个主题曲，持续10秒。每30秒只能触发一次。宣叙调：攻击力提升<span>60%</span>；咏叹调：全元素伤害提升<span>48%</span>;间奏曲：元素精通提升<span>240</span>。",
    skillAffixValue: {
      level1: [0.6000000238418579, 0.47999998927116394, 240, 10, 30],
      level2: [0.75, 0.6000000238418579, 300, 10, 30],
      level3: [0.8999999761581421, 0.7200000286102295, 360, 10, 30],
      level4: [1.0499999523162842, 0.8399999737739563, 420, 10, 30],
      level5: [1.2000000476837158, 0.9599999785423279, 480, 10, 30],
    },
    icon: "UI_EquipIcon_Catalyst_Troupe",
    awakeIcon: "UI_EquipIcon_Catalyst_Troupe_Awaken",
  },
  {
    weaponName: "祭礼残章",
    weaponType: "法器",
    rankLevel: 4,
    weaponProp: [
      {
        initValue: 41.067100524902344,
        type: "GROW_CURVE_ATTACK_204",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 48,
        type: "GROW_CURVE_CRITICAL_201",
        propType: "元素精通",
      },
    ],
    descText:
      "经历漫长岁月的剧本，记载着的颂词和剧本已经无法辨认。被下了受时间之风侵蚀毁坏的诅咒。",
    id: 14403,
    skillAffixName: "气定神闲",
    skillAffixText:
      "元素战技造成伤害时，有<span>40%</span>的概率重置该技能的冷却时间，该效果每<span>30</span>秒只能触发一次。",
    skillAffixValue: {
      level1: [0.4000000059604645, 30],
      level2: [0.5, 26],
      level3: [0.6000000238418579, 22],
      level4: [0.699999988079071, 19],
      level5: [0.800000011920929, 16],
    },
    icon: "UI_EquipIcon_Catalyst_Fossil",
    awakeIcon: "UI_EquipIcon_Catalyst_Fossil_Awaken",
  },
  {
    weaponName: "宗室秘法录",
    weaponType: "法器",
    rankLevel: 4,
    weaponProp: [
      {
        initValue: 43.734901428222656,
        type: "GROW_CURVE_ATTACK_202",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.05999999865889549,
        type: "GROW_CURVE_CRITICAL_201",
        propType: "攻击力百分比",
      },
    ],
    descText:
      "属于曾支配蒙德的贵族麾下的宫廷魔导师，其中记载的史话与法术同样翔实。",
    id: 14404,
    skillAffixName: "专注",
    skillAffixText:
      "攻击造成伤害时，暴击率提升<span>8%</span>，最多堆叠5次。攻击造成暴击后，移除已有的专注效果。",
    skillAffixValue: {
      level1: [0.07999999821186066],
      level2: [0.10000000149011612],
      level3: [0.11999999731779099],
      level4: [0.14000000059604645],
      level5: [0.1599999964237213],
    },
    icon: "UI_EquipIcon_Catalyst_Theocrat",
    awakeIcon: "UI_EquipIcon_Catalyst_Theocrat_Awaken",
  },
  {
    weaponName: "匣里日月",
    weaponType: "法器",
    rankLevel: 4,
    weaponProp: [
      {
        initValue: 42.4010009765625,
        type: "GROW_CURVE_ATTACK_201",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.05999999865889549,
        type: "GROW_CURVE_CRITICAL_201",
        propType: "暴击率",
      },
    ],
    descText: "材质难解的暗金宝珠，饱含日月天地的光辉，脉动着温暖的力量。",
    id: 14405,
    skillAffixName: "日月辉",
    skillAffixText:
      "普通攻击命中后的6秒内，元素战技与元素爆发的伤害提高<span>20%</span>；元素战技与元素爆发命中后的6秒内，普通攻击的伤害提高<span>20%</span>。",
    skillAffixValue: {
      level1: [0.20000000298023224],
      level2: [0.25],
      level3: [0.30000001192092896],
      level4: [0.3499999940395355],
      level5: [0.4000000059604645],
    },
    icon: "UI_EquipIcon_Catalyst_Resurrection",
    awakeIcon: "UI_EquipIcon_Catalyst_Resurrection_Awaken",
  },
  {
    weaponName: "试作金珀",
    weaponType: "法器",
    rankLevel: 4,
    weaponProp: [
      {
        initValue: 42.4010009765625,
        type: "GROW_CURVE_ATTACK_201",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.09000000357627869,
        type: "GROW_CURVE_CRITICAL_201",
        propType: "生命值百分比",
      },
    ],
    descText: "黑岩厂中秘藏的金珀法器。其中黯黯绽放着日月星光。",
    id: 14406,
    skillAffixName: "炊金",
    skillAffixText:
      "施放元素爆发后6秒内，每2秒恢复<span>4</span>点元素能量，队伍中的所有角色每2秒恢复<span>4%</span>生命值。",
    skillAffixValue: {
      level1: [6, 2, 4, 0.03999999910593033],
      level2: [6, 2, 4.5, 0.04500000178813934],
      level3: [6, 2, 5, 0.05000000074505806],
      level4: [6, 2, 5.5, 0.054999999701976776],
      level5: [6, 2, 6, 0.05999999865889549],
    },
    icon: "UI_EquipIcon_Catalyst_Proto",
    awakeIcon: "UI_EquipIcon_Catalyst_Proto_Awaken",
  },
  {
    weaponName: "万国诸海图谱",
    weaponType: "法器",
    rankLevel: 4,
    weaponProp: [
      {
        initValue: 43.734901428222656,
        type: "GROW_CURVE_ATTACK_202",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 24,
        type: "GROW_CURVE_CRITICAL_201",
        propType: "元素精通",
      },
    ],
    descText:
      "详尽记载了大陆周边海流气候的海图，是从异国经由商路流落到璃月的奇异典籍。",
    id: 14407,
    skillAffixName: "注能之卷",
    skillAffixText:
      "触发元素反应后的10秒内，获得<span>8%</span>元素伤害加成，该效果最多可以叠加2层。",
    skillAffixValue: {
      level1: [0.07999999821186066],
      level2: [0.10000000149011612],
      level3: [0.11999999731779099],
      level4: [0.14000000059604645],
      level5: [0.1599999964237213],
    },
    icon: "UI_EquipIcon_Catalyst_Exotic",
    awakeIcon: "UI_EquipIcon_Catalyst_Exotic_Awaken",
  },
  {
    weaponName: "黑岩绯玉",
    weaponType: "法器",
    rankLevel: 4,
    weaponProp: [
      {
        initValue: 42.4010009765625,
        type: "GROW_CURVE_ATTACK_201",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.11999999731779099,
        type: "GROW_CURVE_CRITICAL_201",
        propType: "暴击伤害",
      },
    ],
    descText: "由黑岩制成的神秘法器，无常的赤色闪光仿佛大地深处的悸动同调。",
    id: 14408,
    skillAffixName: "乘胜追击",
    skillAffixText:
      "击败敌人后，攻击力提升<span>12%</span>，持续30秒。该效果至多叠加3层，每层持续时间独立。",
    skillAffixValue: {
      level1: [0.11999999731779099, 30],
      level2: [0.15000000596046448, 30],
      level3: [0.18000000715255737, 30],
      level4: [0.20999999344348907, 30],
      level5: [0.23999999463558197, 30],
    },
    icon: "UI_EquipIcon_Catalyst_Blackrock",
    awakeIcon: "UI_EquipIcon_Catalyst_Blackrock_Awaken",
  },
  {
    weaponName: "昭心",
    weaponType: "法器",
    rankLevel: 4,
    weaponProp: [
      {
        initValue: 41.067100524902344,
        type: "GROW_CURVE_ATTACK_204",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.11999999731779099,
        type: "GROW_CURVE_CRITICAL_201",
        propType: "攻击力百分比",
      },
    ],
    descText: "幽暗的琉璃宝珠，传说中拥有洞察人心清白的力量。",
    id: 14409,
    skillAffixName: "回响",
    skillAffixText:
      "普通攻击与重击命中时，有50%几率发射一枚昭心法球，造成<span>240%</span>攻击力伤害，至多在敌人之间弹射4次。该效果每<span>12</span>秒至多触发一次。",
    skillAffixValue: {
      level1: [0.5, 4, 2.4000000953674316, 12],
      level2: [0.5, 4, 2.700000047683716, 11],
      level3: [0.5, 4, 3, 10],
      level4: [0.5, 4, 3.299999952316284, 9],
      level5: [0.5, 4, 3.5999999046325684, 8],
    },
    icon: "UI_EquipIcon_Catalyst_Truelens",
    awakeIcon: "UI_EquipIcon_Catalyst_Truelens_Awaken",
  },
  {
    weaponName: "暗巷的酒与诗",
    weaponType: "法器",
    rankLevel: 4,
    weaponProp: [
      {
        initValue: 43.734901428222656,
        type: "GROW_CURVE_ATTACK_202",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.06666699796915054,
        type: "GROW_CURVE_CRITICAL_201",
        propType: "元素充能效率",
      },
    ],
    descText:
      "过去贵族时代流行的歌谱，作者已无从考究。其中记载了某位侠盗的故事…",
    id: 14410,
    skillAffixName: "变化万端",
    skillAffixText:
      "普通攻击命中敌人后，冲刺或替代冲刺的能力消耗的体力降低<span>14%</span>，持续5秒。此外，使用冲刺或替代冲刺的能力后，攻击力提升<span>20%</span>，持续5秒。",
    skillAffixValue: {
      level1: [0.20000000298023224, 5, 0.14000000059604645, 5],
      level2: [0.25, 5, 0.1599999964237213, 5],
      level3: [0.30000001192092896, 5, 0.18000000715255737, 5],
      level4: [0.3499999940395355, 5, 0.20000000298023224, 5],
      level5: [0.4000000059604645, 5, 0.2199999988079071, 5],
    },
    icon: "UI_EquipIcon_Catalyst_Outlaw",
    awakeIcon: "UI_EquipIcon_Catalyst_Outlaw_Awaken",
  },
  {
    weaponName: "忍冬之果",
    weaponType: "法器",
    rankLevel: 4,
    weaponProp: [
      {
        initValue: 42.4010009765625,
        type: "GROW_CURVE_ATTACK_201",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.09000000357627869,
        type: "GROW_CURVE_CRITICAL_201",
        propType: "攻击力百分比",
      },
    ],
    descText: "具有某种冰冷意志的奇特果实，散发着微弱的苦涩气息。",
    id: 14412,
    skillAffixName: "霜葬",
    skillAffixText:
      "普通攻击与重击命中敌人时，有<span>60%</span>概率在敌人上方生成恒冰晶核并坠落，造成<span>80%</span>攻击力的范围伤害。若敌人处于冰元素影响下，则造成<span>200%</span>攻击力的伤害。该效果每10秒至多触发一次。",
    skillAffixValue: {
      level1: [0.6000000238418579, 0.800000011920929, 2, 10],
      level2: [0.699999988079071, 0.949999988079071, 2.4000000953674316, 10],
      level3: [0.800000011920929, 1.100000023841858, 2.799999952316284, 10],
      level4: [0.8999999761581421, 1.25, 3.200000047683716, 10],
      level5: [1, 1.399999976158142, 3.5999999046325684, 10],
    },
    icon: "UI_EquipIcon_Catalyst_Everfrost",
    awakeIcon: "UI_EquipIcon_Catalyst_Everfrost_Awaken",
  },
  {
    weaponName: "嘟嘟可故事集",
    weaponType: "法器",
    rankLevel: 4,
    weaponProp: [
      {
        initValue: 41.067100524902344,
        type: "GROW_CURVE_ATTACK_204",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.11999999731779099,
        type: "GROW_CURVE_CRITICAL_201",
        propType: "攻击力百分比",
      },
    ],
    descText:
      "一本封面华丽的童书，内容皆是童言无忌的短小故事，读之令人忍俊不禁。\n即使业已成年的读者，读到书中天真无邪的冒险故事，也会忍不住神往吧。",
    id: 14413,
    skillAffixName: "嘟嘟！大冒险",
    skillAffixText:
      "普通攻击命中敌人后的6秒内，重击造成的伤害提升<span>16%</span>；重击命中敌人后的6秒内，攻击力提升<span>8%</span>。",
    skillAffixValue: {
      level1: [0.1599999964237213, 6, 0.07999999821186066, 6],
      level2: [0.20000000298023224, 6, 0.10000000149011612, 6],
      level3: [0.23999999463558197, 6, 0.11999999731779099, 6],
      level4: [0.2800000011920929, 6, 0.14000000059604645, 6],
      level5: [0.3199999928474426, 6, 0.1599999964237213, 6],
    },
    icon: "UI_EquipIcon_Catalyst_Ludiharpastum",
    awakeIcon: "UI_EquipIcon_Catalyst_Ludiharpastum_Awaken",
  },
  {
    weaponName: "白辰之环",
    weaponType: "法器",
    rankLevel: 4,
    weaponProp: [
      {
        initValue: 43.734901428222656,
        type: "GROW_CURVE_ATTACK_202",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.06666699796915054,
        type: "GROW_CURVE_CRITICAL_201",
        propType: "元素充能效率",
      },
    ],
    descText:
      "承载着过去的「狐斋宫」思念的法器。但她的思念之大，是无法完全装进这样小小的器物当中的。",
    id: 14414,
    skillAffixName: "樱之斋宫",
    skillAffixText:
      "装备该武器的角色触发雷元素相关反应后，队伍中附近的与该元素反应相关的元素类型的角色，获得<span>10%</span>对应元素的元素伤害加成，持续6秒。通过这种方式，角色获得的元素伤害加成无法叠加。",
    skillAffixValue: {
      level1: [0.10000000149011612, 6, 1],
      level2: [0.125, 6, 1],
      level3: [0.15000000596046448, 6, 1],
      level4: [0.17499999701976776, 6, 1],
      level5: [0.20000000298023224, 6, 1],
    },
    icon: "UI_EquipIcon_Catalyst_Bakufu",
    awakeIcon: "UI_EquipIcon_Catalyst_Bakufu_Awaken",
  },
  {
    weaponName: "证誓之明瞳",
    weaponType: "法器",
    rankLevel: 4,
    weaponProp: [
      {
        initValue: 43.734901428222656,
        type: "GROW_CURVE_ATTACK_202",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.05999999865889549,
        type: "GROW_CURVE_CRITICAL_201",
        propType: "攻击力百分比",
      },
    ],
    descText:
      "大日御舆收藏的白夜国之宝。蛇神到来后，渊下宫用以公证大誓与大愿的宝物。",
    id: 14415,
    skillAffixName: "微光的海渊民",
    skillAffixText:
      "施放元素战技后，元素充能效率提升<span>24%</span>，持续10秒。",
    skillAffixValue: {
      level1: [0.23999999463558197, 10],
      level2: [0.30000001192092896, 10],
      level3: [0.36000001430511475, 10],
      level4: [0.41999998688697815, 10],
      level5: [0.47999998927116394, 10],
    },
    icon: "UI_EquipIcon_Catalyst_Jyanome",
    awakeIcon: "UI_EquipIcon_Catalyst_Jyanome_Awaken",
  },
  {
    weaponName: "盈满之实",
    weaponType: "法器",
    rankLevel: 4,
    weaponProp: [
      {
        initValue: 42.4010009765625,
        type: "GROW_CURVE_ATTACK_201",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.10000000149011612,
        type: "GROW_CURVE_CRITICAL_201",
        propType: "元素充能效率",
      },
    ],
    descText: "从兰那罗的故事中得到的果实。其中蕴含着战胜任何危机的潜能。",
    id: 14417,
    skillAffixName: "圆满之相",
    skillAffixText:
      "触发元素反应后，获得「盈缺」效果：元素精通提升<span>24</span>点，攻击力降低5%。每0.3秒至多获得一层盈缺效果，至多叠加5层。未触发元素反应时将每6秒失去一层。角色处于队伍后台时也能触发效果。",
    skillAffixValue: {
      level1: [-0.05000000074505806, 24, 0.30000001192092896, 6],
      level2: [-0.05000000074505806, 27, 0.30000001192092896, 6],
      level3: [-0.05000000074505806, 30, 0.30000001192092896, 6],
      level4: [-0.05000000074505806, 33, 0.30000001192092896, 6],
      level5: [-0.05000000074505806, 36, 0.30000001192092896, 6],
    },
    icon: "UI_EquipIcon_Catalyst_Arakalari",
    awakeIcon: "UI_EquipIcon_Catalyst_Arakalari_Awaken",
  },
  {
    weaponName: "天空之卷",
    weaponType: "法器",
    rankLevel: 5,
    weaponProp: [
      {
        initValue: 47.5369987487793,
        type: "GROW_CURVE_ATTACK_302",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.07199999690055847,
        type: "GROW_CURVE_CRITICAL_301",
        propType: "攻击力百分比",
      },
    ],
    descText:
      "象征风龙与其主风之神的云图集。细致记载了北地天空的风与云，蕴含苍空与长风的力量。",
    id: 14501,
    skillAffixName: "浮游四方的灵云",
    skillAffixText:
      "元素伤害加成提升<span>12%</span>；普通攻击命中时，有50%的概率获得高天流云的青睐，在15秒内主动攻击附近的敌人，造成等同于<span>160%</span>攻击力的伤害。该效果每30秒只能触发一次。",
    skillAffixValue: {
      level1: [0.11999999731779099, 0.5, 1.600000023841858, 30],
      level2: [0.15000000596046448, 0.5, 2, 30],
      level3: [0.18000000715255737, 0.5, 2.4000000953674316, 30],
      level4: [0.20999999344348907, 0.5, 2.799999952316284, 30],
      level5: [0.23999999463558197, 0.5, 3.200000047683716, 30],
    },
    icon: "UI_EquipIcon_Catalyst_Dvalin",
    awakeIcon: "UI_EquipIcon_Catalyst_Dvalin_Awaken",
  },
  {
    weaponName: "四风原典",
    weaponType: "法器",
    rankLevel: 5,
    weaponProp: [
      {
        initValue: 45.9364013671875,
        type: "GROW_CURVE_ATTACK_301",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.07199999690055847,
        type: "GROW_CURVE_CRITICAL_301",
        propType: "暴击率",
      },
    ],
    descText:
      "崇信风的无名先民所写的教典珍本。数千年流传的信仰之力得到了风的青睐，饱含祝福与力量。",
    id: 14502,
    skillAffixName: "无边际的眷顾",
    skillAffixText:
      "移动速度提高10%；在场上每4秒获得<span>8%</span>元素伤害加成。该效果最多叠加4层，持续直到角色倒下或离场。",
    skillAffixValue: {
      level1: [0.10000000149011612, 0.07999999821186066],
      level2: [0.10000000149011612, 0.10000000149011612],
      level3: [0.10000000149011612, 0.11999999731779099],
      level4: [0.10000000149011612, 0.14000000059604645],
      level5: [0.10000000149011612, 0.1599999964237213],
    },
    icon: "UI_EquipIcon_Catalyst_Fourwinds",
    awakeIcon: "UI_EquipIcon_Catalyst_Fourwinds_Awaken",
  },
  {
    weaponName: "尘世之锁",
    weaponType: "法器",
    rankLevel: 5,
    weaponProp: [
      {
        initValue: 45.9364013671875,
        type: "GROW_CURVE_ATTACK_301",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.1080000028014183,
        type: "GROW_CURVE_CRITICAL_301",
        propType: "攻击力百分比",
      },
    ],
    descText: "蕴含着某种悠远记忆的石锁，随着无穷的变换透露出其中的力量。",
    id: 14504,
    skillAffixName: "金璋皇极",
    skillAffixText:
      "护盾强效提升<span>20%</span>。攻击命中后的8秒内，攻击力提升<span>4%</span>。该效果至多可叠加5层，每0.3秒只能触发一次。此外，处于护盾庇护下时，该效果的攻击力提升效果提高100%。",
    skillAffixValue: {
      level1: [0.20000000298023224, 0.03999999910593033, 8],
      level2: [0.25, 0.05000000074505806, 8],
      level3: [0.30000001192092896, 0.05999999865889549, 8],
      level4: [0.3499999940395355, 0.07000000029802322, 8],
      level5: [0.4000000059604645, 0.07999999821186066, 8],
    },
    icon: "UI_EquipIcon_Catalyst_Kunwu",
    awakeIcon: "UI_EquipIcon_Catalyst_Kunwu_Awaken",
  },
  {
    weaponName: "不灭月华",
    weaponType: "法器",
    rankLevel: 5,
    weaponProp: [
      {
        initValue: 45.9364013671875,
        type: "GROW_CURVE_ATTACK_301",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.1080000028014183,
        type: "GROW_CURVE_CRITICAL_301",
        propType: "生命值百分比",
      },
    ],
    descText: "出自深海的美玉之环，闪烁着清澈如月的光泽，一如遥远往昔。",
    id: 14506,
    skillAffixName: "白夜皓月",
    skillAffixText:
      "治疗加成提升<span>10%</span>；普通攻击造成的伤害增加，增加值为装备该武器的角色生命值上限的<span>1%</span>。在施放元素爆发后的12秒内，普通攻击命中敌人时恢复0.6点元素能量，每0.1秒至多通过这种方式恢复一次元素能量。",
    skillAffixValue: {
      level1: [
        0.10000000149011612, 0.009999999776482582, 12, 0.6000000238418579,
        0.10000000149011612,
      ],
      level2: [
        0.125, 0.014999999664723873, 12, 0.6000000238418579,
        0.10000000149011612,
      ],
      level3: [
        0.15000000596046448, 0.019999999552965164, 12, 0.6000000238418579,
        0.10000000149011612,
      ],
      level4: [
        0.17499999701976776, 0.02500000037252903, 12, 0.6000000238418579,
        0.10000000149011612,
      ],
      level5: [
        0.20000000298023224, 0.029999999329447746, 12, 0.6000000238418579,
        0.10000000149011612,
      ],
    },
    icon: "UI_EquipIcon_Catalyst_Kaleido",
    awakeIcon: "UI_EquipIcon_Catalyst_Kaleido_Awaken",
  },
  {
    weaponName: "神乐之真意",
    weaponType: "法器",
    rankLevel: 5,
    weaponProp: [
      {
        initValue: 45.9364013671875,
        type: "GROW_CURVE_ATTACK_301",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.14399999380111694,
        type: "GROW_CURVE_CRITICAL_301",
        propType: "暴击伤害",
      },
    ],
    descText: "表演神乐之舞时所用的神铃，为宫司所赐福。神樱之香萦绕其上。",
    id: 14509,
    skillAffixName: "神樱神游神乐舞",
    skillAffixText:
      "施放元素战技时，将获得「神乐舞」的效果，使装备该武器的角色的元素战技造成的伤害提高<span>12%</span>，该效果持续16秒，至多叠加3层。持有3层时，该角色获得<span>12%</span>所有元素伤害加成。",
    skillAffixValue: {
      level1: [0.11999999731779099, 16, 0.11999999731779099],
      level2: [0.15000000596046448, 16, 0.15000000596046448],
      level3: [0.18000000715255737, 16, 0.18000000715255737],
      level4: [0.20999999344348907, 16, 0.20999999344348907],
      level5: [0.23999999463558197, 16, 0.23999999463558197],
    },
    icon: "UI_EquipIcon_Catalyst_Narukami",
    awakeIcon: "UI_EquipIcon_Catalyst_Narukami_Awaken",
  },
  {
    weaponName: "猎弓",
    weaponType: "弓",
    rankLevel: 1,
    weaponProp: [
      {
        initValue: 23.2450008392334,
        type: "GROW_CURVE_ATTACK_101",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
    ],
    descText:
      "猎手演奏的音乐由两种音色组成。弓弦颤动的声音，和羽箭破空的低啸。",
    id: 15101,
    icon: "UI_EquipIcon_Bow_Hunters",
    awakeIcon: "UI_EquipIcon_Bow_Hunters_Awaken",
  },
  {
    weaponName: "历练的猎弓",
    weaponType: "弓",
    rankLevel: 2,
    weaponProp: [
      {
        initValue: 32.93000030517578,
        type: "GROW_CURVE_ATTACK_101",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
    ],
    descText:
      "饱经磨炼又精心护养的弓，经历了漫长的岁月。仿佛会主动配合射手的动作一般好使。",
    id: 15201,
    icon: "UI_EquipIcon_Bow_Old",
    awakeIcon: "UI_EquipIcon_Bow_Old_Awaken",
  },
  {
    weaponName: "鸦羽弓",
    weaponType: "弓",
    rankLevel: 3,
    weaponProp: [
      {
        initValue: 39.875099182128906,
        type: "GROW_CURVE_ATTACK_102",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 20.399999618530273,
        type: "GROW_CURVE_CRITICAL_101",
        propType: "元素精通",
      },
    ],
    descText:
      "相传渡鸦是死的使者。将鸦羽装饰在弓臂上，射出的每一箭都宣告着猎物的终末。",
    id: 15301,
    skillAffixName: "踏火止水",
    skillAffixText:
      "对处于水元素或火元素影响下的敌人，造成的伤害提高<span>12%</span>。",
    skillAffixValue: {
      level1: [0.11999999731779099],
      level2: [0.15000000596046448],
      level3: [0.18000000715255737],
      level4: [0.20999999344348907],
      level5: [0.23999999463558197],
    },
    icon: "UI_EquipIcon_Bow_Crowfeather",
    awakeIcon: "UI_EquipIcon_Bow_Crowfeather_Awaken",
  },
  {
    weaponName: "神射手之誓",
    weaponType: "弓",
    rankLevel: 3,
    weaponProp: [
      {
        initValue: 38.74129867553711,
        type: "GROW_CURVE_ATTACK_101",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.10199999809265137,
        type: "GROW_CURVE_CRITICAL_101",
        propType: "暴击伤害",
      },
    ],
    descText:
      "据说曾属于技艺高强的射手，是一把上好的弓。因为散发出强烈的气息，难以用于狩猎。",
    id: 15302,
    skillAffixName: "精准",
    skillAffixText: "针对要害造成的伤害提升<span>24%</span>。",
    skillAffixValue: {
      level1: [0.23999999463558197],
      level2: [0.30000001192092896],
      level3: [0.36000001430511475],
      level4: [0.41999998688697815],
      level5: [0.47999998927116394],
    },
    icon: "UI_EquipIcon_Bow_Arjuna",
    awakeIcon: "UI_EquipIcon_Bow_Arjuna_Awaken",
  },
  {
    weaponName: "反曲弓",
    weaponType: "弓",
    rankLevel: 3,
    weaponProp: [
      {
        initValue: 37.60749816894531,
        type: "GROW_CURVE_ATTACK_104",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.10213299840688705,
        type: "GROW_CURVE_CRITICAL_101",
        propType: "生命值百分比",
      },
    ],
    descText: "据说能射下苍鹰的猎弓，但能不能做到主要还得看弓手的技术。",
    id: 15303,
    skillAffixName: "收割",
    skillAffixText: "击败敌人时，恢复<span>8%</span>生命值。",
    skillAffixValue: {
      level1: [0.07999999821186066],
      level2: [0.10000000149011612],
      level3: [0.11999999731779099],
      level4: [0.14000000059604645],
      level5: [0.1599999964237213],
    },
    icon: "UI_EquipIcon_Bow_Curve",
    awakeIcon: "UI_EquipIcon_Bow_Curve_Awaken",
  },
  {
    weaponName: "弹弓",
    weaponType: "弓",
    rankLevel: 3,
    weaponProp: [
      {
        initValue: 37.60749816894531,
        type: "GROW_CURVE_ATTACK_104",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.06800000369548798,
        type: "GROW_CURVE_CRITICAL_101",
        propType: "暴击率",
      },
    ],
    descText:
      "其实就是一把弓。在无数的改进和实验中，发明出究极弹弓的人发现自己做了一把弓。",
    id: 15304,
    skillAffixName: "弹弓",
    skillAffixText:
      "普通攻击与重击的箭矢若在发射后的0.3秒内击中敌人，则造成的伤害增加<span>36%</span>；否则，造成的伤害下降10%。",
    skillAffixValue: {
      level1: [0.30000001192092896, 0.36000001430511475, 0.10000000149011612],
      level2: [0.30000001192092896, 0.41999998688697815, 0.10000000149011612],
      level3: [0.30000001192092896, 0.47999998927116394, 0.10000000149011612],
      level4: [0.30000001192092896, 0.5400000214576721, 0.10000000149011612],
      level5: [0.30000001192092896, 0.6000000238418579, 0.10000000149011612],
    },
    icon: "UI_EquipIcon_Bow_Sling",
    awakeIcon: "UI_EquipIcon_Bow_Sling_Awaken",
  },
  {
    weaponName: "信使",
    weaponType: "弓",
    rankLevel: 3,
    weaponProp: [
      {
        initValue: 39.875099182128906,
        type: "GROW_CURVE_ATTACK_102",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.06800000369548798,
        type: "GROW_CURVE_CRITICAL_101",
        propType: "暴击伤害",
      },
    ],
    descText: "造型简单的木制弓。传说它曾被人用作远程通讯的道具。",
    id: 15305,
    skillAffixName: "飞矢传书",
    skillAffixText:
      "重击若命中要害，则额外造成<span>100%</span>攻击力的伤害，该伤害必定暴击。此效果每10秒只能触发一次。",
    skillAffixValue: {
      level1: [1],
      level2: [1.25],
      level3: [1.5],
      level4: [1.75],
      level5: [2],
    },
    icon: "UI_EquipIcon_Bow_Msg",
    awakeIcon: "UI_EquipIcon_Bow_Msg_Awaken",
  },
  {
    weaponName: "黑檀弓",
    weaponType: "弓",
    rankLevel: 3,
    weaponProp: [
      {
        initValue: 38.74129867553711,
        type: "GROW_CURVE_ATTACK_101",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.07660000026226044,
        type: "GROW_CURVE_CRITICAL_101",
        propType: "攻击力百分比",
      },
    ],
    descText: "用檀木制成的长弓，弓臂比寻常木材硬。因此力量也更大。",
    id: 15306,
    skillAffixName: "摧坚",
    skillAffixText: "对遗迹机关类敌人：造成的伤害提高<span>40%</span>。",
    skillAffixValue: {
      level1: [0.4000000059604645],
      level2: [0.5],
      level3: [0.6000000238418579],
      level4: [0.699999988079071],
      level5: [0.800000011920929],
    },
    icon: "UI_EquipIcon_Bow_Hardwood",
    awakeIcon: "UI_EquipIcon_Bow_Hardwood_Awaken",
  },
  {
    weaponName: "西风猎弓",
    weaponType: "弓",
    rankLevel: 4,
    weaponProp: [
      {
        initValue: 41.067100524902344,
        type: "GROW_CURVE_ATTACK_204",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.1333329975605011,
        type: "GROW_CURVE_CRITICAL_201",
        propType: "元素充能效率",
      },
    ],
    descText: "西风骑士团的制式反曲弓，只有杰出的弓手能与它的杰出性能相衬。",
    id: 15401,
    skillAffixName: "顺风而行",
    skillAffixText:
      "攻击造成暴击时，有<span>60%</span>的几率产生少量元素微粒，能为角色恢复6点元素能量。该效果每<span>12</span>秒只能触发一次。",
    skillAffixValue: {
      level1: [0.6000000238418579, 12],
      level2: [0.699999988079071, 10.5],
      level3: [0.800000011920929, 9],
      level4: [0.8999999761581421, 7.5],
      level5: [1, 6],
    },
    icon: "UI_EquipIcon_Bow_Zephyrus",
    awakeIcon: "UI_EquipIcon_Bow_Zephyrus_Awaken",
  },
  {
    weaponName: "绝弦",
    weaponType: "弓",
    rankLevel: 4,
    weaponProp: [
      {
        initValue: 42.4010009765625,
        type: "GROW_CURVE_ATTACK_201",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 36,
        type: "GROW_CURVE_CRITICAL_201",
        propType: "元素精通",
      },
    ],
    descText: "曾经作为乐器大放异彩的弓。如今已经不再能令人起舞。",
    id: 15402,
    skillAffixName: "无矢之歌",
    skillAffixText: "元素战技与元素爆发的伤害提高<span>24%</span>。",
    skillAffixValue: {
      level1: [0.23999999463558197],
      level2: [0.30000001192092896],
      level3: [0.36000001430511475],
      level4: [0.41999998688697815],
      level5: [0.47999998927116394],
    },
    icon: "UI_EquipIcon_Bow_Troupe",
    awakeIcon: "UI_EquipIcon_Bow_Troupe_Awaken",
  },
  {
    weaponName: "祭礼弓",
    weaponType: "弓",
    rankLevel: 4,
    weaponProp: [
      {
        initValue: 43.734901428222656,
        type: "GROW_CURVE_ATTACK_202",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.06666699796915054,
        type: "GROW_CURVE_CRITICAL_201",
        propType: "元素充能效率",
      },
    ],
    descText:
      "在漫长岁月中石化的道具猎弓，上面的仪式性装饰依然清晰可见。拥有受时间之风冲刷的祝福力量。",
    id: 15403,
    skillAffixName: "气定神闲",
    skillAffixText:
      "元素战技造成伤害时，有<span>40%</span>的概率重置该技能的冷却时间，该效果每<span>30</span>秒只能触发一次。",
    skillAffixValue: {
      level1: [0.4000000059604645, 30],
      level2: [0.5, 26],
      level3: [0.6000000238418579, 22],
      level4: [0.699999988079071, 19],
      level5: [0.800000011920929, 16],
    },
    icon: "UI_EquipIcon_Bow_Fossil",
    awakeIcon: "UI_EquipIcon_Bow_Fossil_Awaken",
  },
  {
    weaponName: "宗室长弓",
    weaponType: "弓",
    rankLevel: 4,
    weaponProp: [
      {
        initValue: 42.4010009765625,
        type: "GROW_CURVE_ATTACK_201",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.09000000357627869,
        type: "GROW_CURVE_CRITICAL_201",
        propType: "攻击力百分比",
      },
    ],
    descText:
      "曾支配蒙德的旧日贵族的长弓。经过无数世代，弓弦仍十分有力，击发迅猛。",
    id: 15404,
    skillAffixName: "专注",
    skillAffixText:
      "攻击造成伤害时，暴击率提升<span>8%</span>，最多堆叠5次。攻击造成暴击后，移除已有的专注效果。",
    skillAffixValue: {
      level1: [0.07999999821186066],
      level2: [0.10000000149011612],
      level3: [0.11999999731779099],
      level4: [0.14000000059604645],
      level5: [0.1599999964237213],
    },
    icon: "UI_EquipIcon_Bow_Theocrat",
    awakeIcon: "UI_EquipIcon_Bow_Theocrat_Awaken",
  },
  {
    weaponName: "弓藏",
    weaponType: "弓",
    rankLevel: 4,
    weaponProp: [
      {
        initValue: 42.4010009765625,
        type: "GROW_CURVE_ATTACK_201",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.09000000357627869,
        type: "GROW_CURVE_CRITICAL_201",
        propType: "攻击力百分比",
      },
    ],
    descText: "布满锈迹的铁造大弓，一般人根本拿不动，遑论引弓放矢。",
    id: 15405,
    skillAffixName: "速射弓斗",
    skillAffixText:
      "普通攻击造成的伤害提升<span>40%</span>，重击造成的伤害下降10%。",
    skillAffixValue: {
      level1: [0.4000000059604645, 0.10000000149011612],
      level2: [0.5, 0.10000000149011612],
      level3: [0.6000000238418579, 0.10000000149011612],
      level4: [0.699999988079071, 0.10000000149011612],
      level5: [0.800000011920929, 0.10000000149011612],
    },
    icon: "UI_EquipIcon_Bow_Recluse",
    awakeIcon: "UI_EquipIcon_Bow_Recluse_Awaken",
  },
  {
    weaponName: "试作澹月",
    weaponType: "弓",
    rankLevel: 4,
    weaponProp: [
      {
        initValue: 42.4010009765625,
        type: "GROW_CURVE_ATTACK_201",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.09000000357627869,
        type: "GROW_CURVE_CRITICAL_201",
        propType: "攻击力百分比",
      },
    ],
    descText: "黑岩厂中秘藏的原型长弓。放矢之姿有如透过薄暮的月光。",
    id: 15406,
    skillAffixName: "离簇不归",
    skillAffixText:
      "重击若命中要害，则提升10%移动速度与<span>36%</span>攻击力，持续10秒。",
    skillAffixValue: {
      level1: [0.10000000149011612, 0.36000001430511475, 10],
      level2: [0.10000000149011612, 0.44999998807907104, 10],
      level3: [0.10000000149011612, 0.5400000214576721, 10],
      level4: [0.10000000149011612, 0.6299999952316284, 10],
      level5: [0.10000000149011612, 0.7200000286102295, 10],
    },
    icon: "UI_EquipIcon_Bow_Proto",
    awakeIcon: "UI_EquipIcon_Bow_Proto_Awaken",
  },
  {
    weaponName: "钢轮弓",
    weaponType: "弓",
    rankLevel: 4,
    weaponProp: [
      {
        initValue: 41.067100524902344,
        type: "GROW_CURVE_ATTACK_204",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.15013299882411957,
        type: "GROW_CURVE_CRITICAL_201",
        propType: "物理伤害加成",
      },
    ],
    descText:
      "以金属制成，用滑轮引弦的复合弓，来自异国。护养极其困难，但引弓轻松，威力惊人。",
    id: 15407,
    skillAffixName: "注能之矢",
    skillAffixText:
      "普通攻击与重击命中时，提升<span>4%</span>攻击力与<span>1.2%</span>普通攻击速度。该效果持续6秒，最多可以叠加4层，每0.3秒只能触发一次。",
    skillAffixValue: {
      level1: [0.03999999910593033, 0.012000000104308128, 0.30000001192092896],
      level2: [0.05000000074505806, 0.014999999664723873, 0.30000001192092896],
      level3: [0.05999999865889549, 0.017999999225139618, 0.30000001192092896],
      level4: [0.07000000029802322, 0.020999999716877937, 0.30000001192092896],
      level5: [0.07999999821186066, 0.024000000208616257, 0.30000001192092896],
    },
    icon: "UI_EquipIcon_Bow_Exotic",
    awakeIcon: "UI_EquipIcon_Bow_Exotic_Awaken",
  },
  {
    weaponName: "黑岩战弓",
    weaponType: "弓",
    rankLevel: 4,
    weaponProp: [
      {
        initValue: 43.734901428222656,
        type: "GROW_CURVE_ATTACK_202",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.07999999821186066,
        type: "GROW_CURVE_CRITICAL_201",
        propType: "暴击伤害",
      },
    ],
    descText:
      "以黑岩塑成的弓。弓臂坚硬无比，只有膂力绝人的弓手才能尽心所欲地使用。",
    id: 15408,
    skillAffixName: "乘胜追击",
    skillAffixText:
      "击败敌人后，攻击力提升<span>12%</span>，持续30秒。该效果至多叠加3层，每层持续时间独立。",
    skillAffixValue: {
      level1: [0.11999999731779099, 30],
      level2: [0.15000000596046448, 30],
      level3: [0.18000000715255737, 30],
      level4: [0.20999999344348907, 30],
      level5: [0.23999999463558197, 30],
    },
    icon: "UI_EquipIcon_Bow_Blackrock",
    awakeIcon: "UI_EquipIcon_Bow_Blackrock_Awaken",
  },
  {
    weaponName: "苍翠猎弓",
    weaponType: "弓",
    rankLevel: 4,
    weaponProp: [
      {
        initValue: 42.4010009765625,
        type: "GROW_CURVE_ATTACK_201",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.05999999865889549,
        type: "GROW_CURVE_CRITICAL_201",
        propType: "暴击率",
      },
    ],
    descText: "高洁的青绿猎弓，曾属于在林间狩猎的某人。",
    id: 15409,
    skillAffixName: "苍翠之风",
    skillAffixText:
      "普通攻击与重击命中时，有50%几率生成一个风之眼，持续吸引周围敌人，并对其中的敌人每0.5秒造成<span>40%</span>攻击的伤害。该效果持续4秒，每<span>14</span>秒至多触发一次。",
    skillAffixValue: {
      level1: [0.5, 0.4000000059604645, 0.5, 4, 14],
      level2: [0.5, 0.5, 0.5, 4, 13],
      level3: [0.5, 0.6000000238418579, 0.5, 4, 12],
      level4: [0.5, 0.699999988079071, 0.5, 4, 11],
      level5: [0.5, 0.800000011920929, 0.5, 4, 10],
    },
    icon: "UI_EquipIcon_Bow_Viridescent",
    awakeIcon: "UI_EquipIcon_Bow_Viridescent_Awaken",
  },
  {
    weaponName: "暗巷猎手",
    weaponType: "弓",
    rankLevel: 4,
    weaponProp: [
      {
        initValue: 43.734901428222656,
        type: "GROW_CURVE_ATTACK_202",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.05999999865889549,
        type: "GROW_CURVE_CRITICAL_201",
        propType: "攻击力百分比",
      },
    ],
    descText: "外形精巧奢华的长弓，曾属于某位从未被抓获的义贼。",
    id: 15410,
    skillAffixName: "街巷伏击",
    skillAffixText:
      "装备该武器的角色处于队伍后台时，每1秒角色造成的伤害提升<span>2%</span>，最多通过这种方式获得<span>20%</span>的伤害提升；在场上超过4秒后，上述伤害提升效果每1秒会流失<span>4%</span>，直到降低至0%。",
    skillAffixValue: {
      level1: [0.019999999552965164, 4],
      level2: [0.02500000037252903, 4],
      level3: [0.029999999329447746, 4],
      level4: [0.03500000014901161, 4],
      level5: [0.03999999910593033, 4],
    },
    icon: "UI_EquipIcon_Bow_Outlaw",
    awakeIcon: "UI_EquipIcon_Bow_Outlaw_Awaken",
  },
  {
    weaponName: "落霞",
    weaponType: "弓",
    rankLevel: 4,
    weaponProp: [
      {
        initValue: 43.734901428222656,
        type: "GROW_CURVE_ATTACK_202",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.06666699796915054,
        type: "GROW_CURVE_CRITICAL_201",
        propType: "元素充能效率",
      },
    ],
    descText: "以白金精制而成的宝弓，其上镶嵌着霞光闪烁的宝珠。",
    id: 15411,
    skillAffixName: "渊中霞彩",
    skillAffixText:
      "具有夕暮、流霞、朝晖三种状态，分别能使造成的伤害提升<span>6%/10%/14%</span>。攻击命中敌人后，将转换为下一种状态，每7秒至多转换一次状态。装备该武器的角色处于队伍后台时该效果依旧能触发转换。",
    skillAffixValue: {
      level1: [
        7, 0.05999999865889549, 0.10000000149011612, 0.14000000059604645,
      ],
      level2: [7, 0.07500000298023224, 0.125, 0.17499999701976776],
      level3: [
        7, 0.09000000357627869, 0.15000000596046448, 0.20999999344348907,
      ],
      level4: [
        7, 0.10499999672174454, 0.17499999701976776, 0.24500000476837158,
      ],
      level5: [7, 0.11999999731779099, 0.20000000298023224, 0.2800000011920929],
    },
    icon: "UI_EquipIcon_Bow_Fallensun",
    awakeIcon: "UI_EquipIcon_Bow_Fallensun_Awaken",
  },
  {
    weaponName: "幽夜华尔兹",
    weaponType: "弓",
    rankLevel: 4,
    weaponProp: [
      {
        initValue: 42.4010009765625,
        type: "GROW_CURVE_ATTACK_201",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.11259999871253967,
        type: "GROW_CURVE_CRITICAL_201",
        propType: "物理伤害加成",
      },
    ],
    descText: "有着如同罪与幻想之夜一般颜色的弓。",
    id: 15412,
    skillAffixName: "极夜二重奏",
    skillAffixText:
      "普通攻击命中敌人后的5秒内，元素战技造成的伤害提升<span>20%</span>；元素战技命中敌人后的5秒内，普通攻击造成的伤害提升<span>20%</span>。",
    skillAffixValue: {
      level1: [0.20000000298023224, 5, 0.20000000298023224, 5],
      level2: [0.25, 5, 0.25, 5],
      level3: [0.30000001192092896, 5, 0.30000001192092896, 5],
      level4: [0.3499999940395355, 5, 0.3499999940395355, 5],
      level5: [0.4000000059604645, 5, 0.4000000059604645, 5],
    },
    icon: "UI_EquipIcon_Bow_Nachtblind",
    awakeIcon: "UI_EquipIcon_Bow_Nachtblind_Awaken",
  },
  {
    weaponName: "风花之颂",
    weaponType: "弓",
    rankLevel: 4,
    weaponProp: [
      {
        initValue: 42.4010009765625,
        type: "GROW_CURVE_ATTACK_201",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 36,
        type: "GROW_CURVE_CRITICAL_201",
        propType: "元素精通",
      },
    ],
    descText: "点缀以无名花朵的弓，承载着同样无名之人的殷切希望。",
    id: 15413,
    skillAffixName: "风花之愿",
    skillAffixText:
      "施放元素战技时，获得风之花的悠古愿望加持，攻击力提升<span>16%</span>，持续6秒。",
    skillAffixValue: {
      level1: [0.1599999964237213, 6],
      level2: [0.20000000298023224, 6],
      level3: [0.23999999463558197, 6],
      level4: [0.2800000011920929, 6],
      level5: [0.3199999928474426, 6],
    },
    icon: "UI_EquipIcon_Bow_Fleurfair",
    awakeIcon: "UI_EquipIcon_Bow_Fleurfair_Awaken",
  },
  {
    weaponName: "破魔之弓",
    weaponType: "弓",
    rankLevel: 4,
    weaponProp: [
      {
        initValue: 41.067100524902344,
        type: "GROW_CURVE_ATTACK_204",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.11999999731779099,
        type: "GROW_CURVE_CRITICAL_201",
        propType: "攻击力百分比",
      },
    ],
    descText: "曾经属于某个巫女的战弓。以优越的技法打造，精巧而耐用。",
    id: 15414,
    skillAffixName: "浅濑之弭",
    skillAffixText:
      "普通攻击造成的伤害提升<span>16%</span>，重击造成的伤害提升<span>12%</span>。当装备该武器的角色元素能量等于100%时，这个效果提升100%。",
    skillAffixValue: {
      level1: [0.1599999964237213, 0.11999999731779099, 1],
      level2: [0.20000000298023224, 0.15000000596046448, 1],
      level3: [0.23999999463558197, 0.18000000715255737, 1],
      level4: [0.2800000011920929, 0.20999999344348907, 1],
      level5: [0.3199999928474426, 0.23999999463558197, 1],
    },
    icon: "UI_EquipIcon_Bow_Bakufu",
    awakeIcon: "UI_EquipIcon_Bow_Bakufu_Awaken",
  },
  {
    weaponName: "掠食者",
    weaponType: "弓",
    rankLevel: 4,
    weaponProp: [
      {
        initValue: 42.4010009765625,
        type: "GROW_CURVE_ATTACK_201",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.09000000357627869,
        type: "GROW_CURVE_CRITICAL_201",
        propType: "攻击力百分比",
      },
    ],
    descText: "设计风格相当独特的弓，应该不属于这个世界。",
    id: 15415,
    skillAffixName: "强力攻击",
    skillAffixText:
      '<span>仅在以下平台生效：</span>\n<span>"PlayStation Network"</span>\n对敌人造成冰元素伤害后，普通攻击与重击造成的伤害提高10%，该效果持续6秒，至多叠加2次；此外，埃洛伊装备掠食者时，攻击力提升66点。',
    skillAffixValue: {
      level1: [0.10000000149011612, 6, 66],
      level2: [],
      level3: [],
      level4: [],
      level5: [],
    },
    icon: "UI_EquipIcon_Bow_Predator",
    awakeIcon: "UI_EquipIcon_Bow_Predator_Awaken",
  },
  {
    weaponName: "曚云之月",
    weaponType: "弓",
    rankLevel: 4,
    weaponProp: [
      {
        initValue: 43.734901428222656,
        type: "GROW_CURVE_ATTACK_202",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.05999999865889549,
        type: "GROW_CURVE_CRITICAL_201",
        propType: "攻击力百分比",
      },
    ],
    descText: "出自螺钿与珊瑚的精美战弓，月色的弓臂上流动着凄然的光彩。",
    id: 15416,
    skillAffixName: "驭浪的海祇民",
    skillAffixText:
      "队伍中所有角色的元素能量上限的总和，每1点能使装备此武器的角色的元素爆发造成的伤害提高<span>0.12%</span>，通过这种方式，元素爆发造成的伤害至多提高<span>40%</span>。",
    skillAffixValue: {
      level1: [0.11999999731779099, 0.4000000059604645],
      level2: [0.15000000596046448, 0.5],
      level3: [0.18000000715255737, 0.6000000238418579],
      level4: [0.20999999344348907, 0.699999988079071],
      level5: [0.23999999463558197, 0.800000011920929],
    },
    icon: "UI_EquipIcon_Bow_Maria",
    awakeIcon: "UI_EquipIcon_Bow_Maria_Awaken",
  },
  {
    weaponName: "王下近侍",
    weaponType: "弓",
    rankLevel: 4,
    weaponProp: [
      {
        initValue: 41.067100524902344,
        type: "GROW_CURVE_ATTACK_204",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.11999999731779099,
        type: "GROW_CURVE_CRITICAL_201",
        propType: "攻击力百分比",
      },
    ],
    descText: "从兰那罗的故事中得到的武器。具有弓的形制，能够射落森林的敌人。",
    id: 15417,
    skillAffixName: "迷宫之王的教导",
    skillAffixText:
      "施放元素战技或元素爆发时，将获得「森林教诲」的效果，元素精通提升<span>60</span>点，持续12秒。该效果将在切换角色时移除。森林教诲的持续时间结束或被移除时，将对附近一名敌人造成<span>100%</span>攻击力的伤害。森林教诲每20秒至多触发一次。",
    skillAffixValue: {
      level1: [60, 12, 1, 20],
      level2: [80, 12, 1.2000000476837158, 20],
      level3: [100, 12, 1.399999976158142, 20],
      level4: [120, 12, 1.600000023841858, 20],
      level5: [140, 12, 1.7999999523162842, 20],
    },
    icon: "UI_EquipIcon_Bow_Arakalari",
    awakeIcon: "UI_EquipIcon_Bow_Arakalari_Awaken",
  },
  {
    weaponName: "竭泽",
    weaponType: "弓",
    rankLevel: 4,
    weaponProp: [
      {
        initValue: 42.4010009765625,
        type: "GROW_CURVE_ATTACK_201",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.10000000149011612,
        type: "GROW_CURVE_CRITICAL_201",
        propType: "元素充能效率",
      },
    ],
    descText: "似乎是如今已经绝种的鱼。身躯富有弹性，系上绳索后能充当弓使用。",
    id: 15418,
    skillAffixName: "网破",
    skillAffixText:
      "施放元素战技后，将触发「沿洄」效果，在攻击命中敌人时造成<span>80%</span>攻击力的范围伤害，该效果将在15秒或触发3次范围伤害后移除。每2秒至多通过这种方式造成一次范围伤害，每12秒至多触发一次沿洄。",
    skillAffixValue: {
      level1: [0.800000011920929, 15, 3, 2, 12],
      level2: [1, 15, 3, 2, 12],
      level3: [1.2000000476837158, 15, 3, 2, 12],
      level4: [1.399999976158142, 15, 3, 2, 12],
      level5: [1.600000023841858, 15, 3, 2, 12],
    },
    icon: "UI_EquipIcon_Bow_Fin",
    awakeIcon: "UI_EquipIcon_Bow_Fin_Awaken",
  },
  {
    weaponName: "天空之翼",
    weaponType: "弓",
    rankLevel: 5,
    weaponProp: [
      {
        initValue: 47.5369987487793,
        type: "GROW_CURVE_ATTACK_302",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.04800000041723251,
        type: "GROW_CURVE_CRITICAL_301",
        propType: "暴击率",
      },
    ],
    descText:
      "象征风龙身为风之神眷属的大弓。释弦时的鸣声是风之神的偏爱，蕴含苍空与长风的力量。",
    id: 15501,
    skillAffixName: "回响长天的诗歌",
    skillAffixText:
      "暴击伤害提高<span>20%</span>；攻击命中时有<span>60%</span>概率造成125%攻击力的小范围物理伤害，该效果每<span>4</span>秒只能触发一次。",
    skillAffixValue: {
      level1: [0.20000000298023224, 0.6000000238418579, 1.25, 4],
      level2: [0.25, 0.699999988079071, 1.25, 3.5],
      level3: [0.30000001192092896, 0.800000011920929, 1.25, 3],
      level4: [0.3499999940395355, 0.8999999761581421, 1.25, 2.5],
      level5: [0.4000000059604645, 1, 1.25, 2],
    },
    icon: "UI_EquipIcon_Bow_Dvalin",
    awakeIcon: "UI_EquipIcon_Bow_Dvalin_Awaken",
  },
  {
    weaponName: "阿莫斯之弓",
    weaponType: "弓",
    rankLevel: 5,
    weaponProp: [
      {
        initValue: 45.9364013671875,
        type: "GROW_CURVE_ATTACK_301",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.1080000028014183,
        type: "GROW_CURVE_CRITICAL_301",
        propType: "攻击力百分比",
      },
    ],
    descText:
      "极为古老的弓。即使原主不复存在，其中蕴藏之力依旧——那种力量无主，却在万物当中。距离心系之物越是遥远，那种力量愈是剧烈。",
    id: 15502,
    skillAffixName: "矢志不忘",
    skillAffixText:
      "普通攻击与重击造成的伤害提升<span>12%</span>；普通攻击与重击的箭矢发射后每经过0.1秒，伤害还会提升<span>8%</span>，至多提升5次。",
    skillAffixValue: {
      level1: [0.11999999731779099, 0.07999999821186066],
      level2: [0.15000000596046448, 0.10000000149011612],
      level3: [0.18000000715255737, 0.11999999731779099],
      level4: [0.20999999344348907, 0.14000000059604645],
      level5: [0.23999999463558197, 0.1599999964237213],
    },
    icon: "UI_EquipIcon_Bow_Amos",
    awakeIcon: "UI_EquipIcon_Bow_Amos_Awaken",
  },
  {
    weaponName: "终末嗟叹之诗",
    weaponType: "弓",
    rankLevel: 5,
    weaponProp: [
      {
        initValue: 45.9364013671875,
        type: "GROW_CURVE_ATTACK_301",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.11999999731779099,
        type: "GROW_CURVE_CRITICAL_301",
        propType: "元素充能效率",
      },
    ],
    descText: "如同诗人的乐器一般优美的弓，放出的箭矢如同叹息声一般穿透人心。",
    id: 15503,
    skillAffixName: "别离的思念之歌",
    skillAffixText:
      "飘游风中的「千年的大乐章」的一部分。元素精通提高<span>60</span>点；元素战技或元素爆发命中敌人时，角色获得一枚追思之符，每0.2秒内至多触发一次，角色处于队伍后台也能触发。拥有4枚追思之符时，将消耗所有追思之符，使附近的队伍中所有角色获得持续12秒的「千年的大乐章·别离之歌」效果：元素精通提高<span>100</span>点，攻击力提升<span>20%</span>。触发后20秒内，无法再次获得追思之符。「千年的大乐章」触发的多种数值效果中，同类数值效果不可叠加。",
    skillAffixValue: {
      level1: [60, 0.20000000298023224, 12, 100, 0.20000000298023224, 20],
      level2: [75, 0.20000000298023224, 12, 125, 0.25, 20],
      level3: [90, 0.20000000298023224, 12, 150, 0.30000001192092896, 20],
      level4: [105, 0.20000000298023224, 12, 175, 0.3499999940395355, 20],
      level5: [120, 0.20000000298023224, 12, 200, 0.4000000059604645, 20],
    },
    icon: "UI_EquipIcon_Bow_Widsith",
    awakeIcon: "UI_EquipIcon_Bow_Widsith_Awaken",
  },
  {
    weaponName: "冬极白星",
    weaponType: "弓",
    rankLevel: 5,
    weaponProp: [
      {
        initValue: 45.9364013671875,
        type: "GROW_CURVE_ATTACK_301",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.07199999690055847,
        type: "GROW_CURVE_CRITICAL_301",
        propType: "暴击率",
      },
    ],
    descText: "如同深冬坚冰一样尖锐的无垢之弓。",
    id: 15507,
    skillAffixName: "极昼的先兆者",
    skillAffixText:
      "元素战技和元素爆发造成的伤害提高<span>12%</span>；普通攻击、重击、元素战技或元素爆发命中敌人后，将产生1层持续12秒的「白夜极星」效果。处于1/2/3/4层「白夜极星」效果下时，攻击力将提高<span>10/20/30/48%</span>。由普通攻击、重击、元素战技或元素爆发产生的「白夜极星」将分别独立存在。",
    skillAffixValue: {
      level1: [
        0.11999999731779099, 12, 0.10000000149011612, 0.20000000298023224,
        0.30000001192092896, 0.47999998927116394,
      ],
      level2: [0.15000000596046448, 12, 0.125, 0.25, 0.375, 0.6000000238418579],
      level3: [
        0.18000000715255737, 12, 0.15000000596046448, 0.30000001192092896,
        0.44999998807907104, 0.7200000286102295,
      ],
      level4: [
        0.20999999344348907, 12, 0.17499999701976776, 0.3499999940395355,
        0.5249999761581421, 0.8399999737739563,
      ],
      level5: [
        0.23999999463558197, 12, 0.20000000298023224, 0.4000000059604645,
        0.6000000238418579, 0.9599999785423279,
      ],
    },
    icon: "UI_EquipIcon_Bow_Worldbane",
    awakeIcon: "UI_EquipIcon_Bow_Worldbane_Awaken",
  },
  {
    weaponName: "若水",
    weaponType: "弓",
    rankLevel: 5,
    weaponProp: [
      {
        initValue: 44.33580017089844,
        type: "GROW_CURVE_ATTACK_304",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.19200000166893005,
        type: "GROW_CURVE_CRITICAL_301",
        propType: "暴击伤害",
      },
    ],
    descText: "色泽流移难测的长弓，在光下显现着如水的润蓝。",
    id: 15508,
    skillAffixName: "洗濯诸类之形",
    skillAffixText:
      "生命值提升<span>16%</span>。周围存在敌人时，装备该武器的角色造成的伤害都会提升<span>20%</span>，不论该角色处于场上或是处于队伍后台。",
    skillAffixValue: {
      level1: [
        0.1599999964237213, 0.20000000298023224, 0.5, 1.2000000476837158,
      ],
      level2: [0.20000000298023224, 0.25, 0.5, 1.2000000476837158],
      level3: [
        0.23999999463558197, 0.30000001192092896, 0.5, 1.2000000476837158,
      ],
      level4: [0.2800000011920929, 0.3499999940395355, 0.5, 1.2000000476837158],
      level5: [0.3199999928474426, 0.4000000059604645, 0.5, 1.2000000476837158],
    },
    icon: "UI_EquipIcon_Bow_Kirin",
    awakeIcon: "UI_EquipIcon_Bow_Kirin_Awaken",
  },
  {
    weaponName: "飞雷之弦振",
    weaponType: "弓",
    rankLevel: 5,
    weaponProp: [
      {
        initValue: 45.9364013671875,
        type: "GROW_CURVE_ATTACK_301",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.14399999380111694,
        type: "GROW_CURVE_CRITICAL_301",
        propType: "暴击伤害",
      },
    ],
    descText: "曾由将军御赐的长弓，闪烁着永不熄灭的雷光。",
    id: 15509,
    skillAffixName: "飞雷御执",
    skillAffixText:
      "攻击力提高<span>20%</span>，并能获得「飞雷之巴印」的威势。飞雷之巴印：持有1/2/3层飞雷之巴印时，普通攻击造成的伤害提高<span>12/24/40%</span>。在下列情况下，角色将各获得1层飞雷之巴印：普通攻击造成伤害时，持续5秒；施放元素战技时，持续10秒；此外，角色元素能量低于100%时，将获得1层飞雷之巴印，此飞雷之巴印会在角色的元素能量充满时消失。每层飞雷之巴印的持续时间独立计算。",
    skillAffixValue: {
      level1: [
        0.20000000298023224, 0.11999999731779099, 0.23999999463558197,
        0.4000000059604645, 5, 10,
      ],
      level2: [0.25, 0.15000000596046448, 0.30000001192092896, 0.5, 5, 10],
      level3: [
        0.30000001192092896, 0.18000000715255737, 0.36000001430511475,
        0.6000000238418579, 5, 10,
      ],
      level4: [
        0.3499999940395355, 0.20999999344348907, 0.41999998688697815,
        0.699999988079071, 5, 10,
      ],
      level5: [
        0.4000000059604645, 0.23999999463558197, 0.47999998927116394,
        0.800000011920929, 5, 10,
      ],
    },
    icon: "UI_EquipIcon_Bow_Narukami",
    awakeIcon: "UI_EquipIcon_Bow_Narukami_Awaken",
  },
  {
    weaponName: "猎人之径",
    weaponType: "弓",
    rankLevel: 5,
    weaponProp: [
      {
        initValue: 44.33580017089844,
        type: "GROW_CURVE_ATTACK_304",
        propType: "FIGHT_PROP_BASE_ATTACK",
      },
      {
        initValue: 0.09600000083446503,
        type: "GROW_CURVE_CRITICAL_301",
        propType: "暴击率",
      },
    ],
    descText: "以珍贵的白枝制成的饰金猎弓，曾经射落无数侵入森林的恶兽。",
    id: 15511,
    skillAffixName: "兽径的终点",
    skillAffixText:
      "获得<span>12%</span>所有元素伤害加成。重击命中敌人后，将获得「无休止的狩猎」：重击造成的伤害值提高，提高值相当于元素精通数值的<span>160%</span>。该效果将在生效12次或10秒后消失，每12秒至多获得一次无休止的狩猎。",
    skillAffixValue: {
      level1: [0.11999999731779099, 1.600000023841858, 12, 10, 12],
      level2: [0.15000000596046448, 2, 12, 10, 12],
      level3: [0.18000000715255737, 2.4000000953674316, 12, 10, 12],
      level4: [0.20999999344348907, 2.799999952316284, 12, 10, 12],
      level5: [0.23999999463558197, 3.200000047683716, 12, 10, 12],
    },
    icon: "UI_EquipIcon_Bow_Ayus",
    awakeIcon: "UI_EquipIcon_Bow_Ayus_Awaken",
  },
];
