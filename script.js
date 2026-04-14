// 数据定义
const questions = [
    {
        id: 1,
        text: "朋友给你发消息，你看到了但不秒回，主要是因为？",
        options: [
            "A. 在忙，晚点认真回",
            "B. 用意念回了，然后忘了",
            "C. 单纯不想回，等对方发第二个我再动",
            "D. 我秒回，我是舔狗"
        ]
    },
    {
        id: 2,
        text: "你发了一条朋友圈，半小时只有3个赞，你会？",
        options: [
            "A. 无所谓，发给自己看的",
            "B. 删了重发，可能是发的时间不对",
            "C. 怒而转发到所有群求赞",
            "D. 截图发给朋友：\"帮我点一下\""
        ]
    },
    {
        id: 3,
        text: "你被迫参加一个全是陌生人的聚会，你会？",
        options: [
            "A. 主动社交，成为气氛组",
            "B. 跟着认识的人，绝不落单",
            "C. 躲在角落玩手机，祈祷没人注意我",
            "D. 吃够本然后提前溜走"
        ]
    },
    {
        id: 4,
        text: "群里有人说了一句你不认同的话，你会？",
        options: [
            "A. 直接开怼",
            "B. 心里反驳但不说",
            "C. 发一个表情包阴阳一下",
            "D. 截图发到没有ta的群吐槽"
        ]
    },
    {
        id: 5,
        text: "你在社交中最常扮演的角色是？",
        options: [
            "A. 话题发起者",
            "B. 捧哏（配合笑、附和）",
            "C. 潜水窥屏者",
            "D. 冷场王（我一开口就安静了）"
        ]
    },
    {
        id: 6,
        text: "你最常用的回复方式是什么？",
        options: [
            "A. 打字，完整句子",
            "B. 表情包",
            "C. 60秒语音方阵",
            "D. 只回\"嗯\"\"哦\"\"好\""
        ]
    },
    {
        id: 7,
        text: "你微信有多少个置顶聊天？",
        options: [
            "A. 10个以上，我是社交蝴蝶",
            "B. 3-5个，核心圈子",
            "C. 只有对象/家人/工作群",
            "D. 什么是置顶？我连消息都不看"
        ]
    },
    {
        id: 8,
        text: "朋友约你周末出门，你心里真实想法是？",
        options: [
            "A. 太好了！终于可以出去了",
            "B. 先答应，到那天再说有事",
            "C. 直接拒绝，我要在家躺着",
            "D. 问清楚都有谁，没有讨厌的人就去"
        ]
    },
    {
        id: 9,
        text: "你在群里的存在感是？",
        options: [
            "A. 群红，不说话大家会问我去哪了",
            "B. 偶尔冒泡，刷一下存在感",
            "C. 长期潜水，但内容我全看了",
            "D. 这个群什么时候建的？"
        ]
    },
    {
        id: 10,
        text: "你收到\"在吗\"但对方不说事，你会？",
        options: [
            "A. 回\"在，怎么了？\"",
            "B. 不回，等他说完事再说",
            "C. 回一个\"？\"",
            "D. 回\"不在\""
        ]
    },
    {
        id: 11,
        text: "你最多能连续几天不跟任何人聊天？",
        options: [
            "A. 半天都撑不住",
            "B. 1-2天",
            "C. 一周",
            "D. 一个月起步，社交是什么？"
        ]
    },
    {
        id: 12,
        text: "你觉得你在朋友眼中的形象是？",
        options: [
            "A. 搞笑担当",
            "B. 靠谱老实人",
            "C. 高冷装逼犯",
            "D. 他们可能根本没想过我"
        ]
    },
    {
        id: 13,
        text: "聚会合照发群里，你第一反应是？",
        options: [
            "A. 放大看自己好不好看",
            "B. 存图发朋友圈",
            "C. 看谁闭眼了截图当表情包",
            "D. 假装没看见，不存也不评论"
        ]
    },
    {
        id: 14,
        text: "你最喜欢的社交方式是？",
        options: [
            "A. 线下见面吃饭聊天",
            "B. 微信文字聊天",
            "C. 连麦打游戏",
            "D. 别联系，各自安好"
        ]
    },
    {
        id: 15,
        text: "你发了一条精心编辑的动态，结果0赞0评论，你会？",
        options: [
            "A. 默默删掉",
            "B. 安慰自己\"他们没刷到\"",
            "C. 自己给自己点个赞",
            "D. 无所谓，习惯了"
        ]
    },
    {
        id: 16,
        text: "你在社交中最讨厌的行为是？",
        options: [
            "A. 发60秒语音方阵",
            "B. 已读不回",
            "C. 大半夜打电话",
            "D. 问完问题说\"没事了\""
        ]
    },
    {
        id: 17,
        text: "你一天大概花多久在社交软件上？",
        options: [
            "A. 5小时以上，我是互联网原住民",
            "B. 2-5小时",
            "C. 1小时以内",
            "D. 基本不看，手机是摆设"
        ]
    },
    {
        id: 18,
        text: "你加了一个新好友，第一件事会做？",
        options: [
            "A. 翻ta朋友圈，了解ta",
            "B. 发个表情包打个招呼",
            "C. 改备注（来源+名字）",
            "D. 放着不管，等ta先说话"
        ]
    },
    {
        id: 19,
        text: "朋友跟你吐槽一件事，你一般会？",
        options: [
            "A. 跟着一起骂",
            "B. 理性分析，帮ta想解决办法",
            "C. 发个抱抱表情包敷衍一下",
            "D. 已读，过两天再回"
        ]
    },
    {
        id: 20,
        text: "你在社交中的\"电量\"大概能撑多久？",
        options: [
            "A. 全天候满电，人越多越嗨",
            "B. 3-4小时，然后需要独处充电",
            "C. 1小时就累了",
            "D. 从出门那刻就开始累了"
        ]
    },
    {
        id: 21,
        text: "你发朋友圈的频率是？",
        options: [
            "A. 一天好几条，记录生活",
            "B. 一周几条",
            "C. 一个月一条",
            "D. 半年以上没发过了"
        ]
    },
    {
        id: 22,
        text: "你更害怕哪种社交场景？",
        options: [
            "A. 和不太熟的人单独吃饭",
            "B. 在群里被点名@",
            "C. 当众发言或自我介绍",
            "D. 被拉进一个全是陌生人的群"
        ]
    },
    {
        id: 23,
        text: "你微信里有多少个群聊？",
        options: [
            "A. 50个以上，根本看不过来",
            "B. 20-50个",
            "C. 5-20个",
            "D. 5个以下，我基本不加群"
        ]
    },
    {
        id: 24,
        text: "你收到一条不想回的消息，一般会拖多久？",
        options: [
            "A. 几小时",
            "B. 一天",
            "C. 一周",
            "D. 永远不回，等ta忘了"
        ]
    },
    {
        id: 25,
        text: "你觉得自己的社交能力怎么样？",
        options: [
            "A. 很强，跟谁都能聊",
            "B. 还行，正常社交没问题",
            "C. 一般，容易尴尬",
            "D. 很烂，我觉得我有社恐"
        ]
    },
    {
        id: 26,
        text: "你会在社交中刻意迎合别人吗？",
        options: [
            "A. 会，习惯性讨好",
            "B. 偶尔，看人下菜",
            "C. 不会，我做自己",
            "D. 我不仅不迎合，我还怼人"
        ]
    },
    {
        id: 27,
        text: "你最常用的社交开场白是？",
        options: [
            "A. \"在干嘛\"",
            "B. \"发个表情包\"",
            "C. \"我跟你说个事\"",
            "D. 我从来不主动开场"
        ]
    },
    {
        id: 28,
        text: "你微信未读消息红点一般有多少？",
        options: [
            "A. 0，我有强迫症必须点完",
            "B. 几个，不重要的小群懒得看",
            "C. 几十个，选择性回复",
            "D. 99+，已经放弃了"
        ]
    },
    {
        id: 29,
        text: "你觉得自己更像哪种动物？",
        options: [
            "A. 狗（热情、粘人）",
            "B. 猫（高冷、随缘）",
            "C. 树懒（慢、懒）",
            "D. 吗喽（命苦、想社交但不敢）"
        ]
    },
    {
        id: 30,
        text: "如果社交有段位，你觉得你在哪个段位？",
        options: [
            "A. 王者，社交悍匪",
            "B. 钻石，正常发挥",
            "C. 青铜，努力但菜",
            "D. 黑铁，已退游"
        ]
    }
];

const dogTypes = {
    1: {
        name: "舔狗",
        description: "你的回消息速度比110出警还快。对方发一个\"嗯\"，你能接三行；对方发一个\"哦\"，你立刻换话题。你最大的恐惧不是孤独终老，而是\"我是不是回得太快了显得我很闲\"。你的聊天记录里，绿色气泡占比超过90%，蓝色那10%还是对方发的\"嗯\"\"哦\"\"好\"。",
        snark: "你舔的人也在舔别人",
        advice: "有时候不回复，也是一种回复。建议把手机扔水里冷静三天。",
        caption: "测出来是舔狗，谁在监视我？"
    },
    2: {
        name: "潜水狗",
        description: "你知道群里每个人的八卦：谁分手了、谁辞职了、谁半夜三点还在发朋友圈。但没有人知道你在看。你在群里最后的发言记录是2023年，但你每天都在。你是互联网的幽灵，赛博空间的观察者，群聊里的隐形人。",
        snark: "你以为你在潜伏，其实大家只是忘了群里有你",
        advice: "偶尔冒个泡，不然大家真的会以为你死了。",
        caption: "潜水狗，群里的人以为我注销了"
    },
    3: {
        name: "杠狗",
        description: "\"不是\"\"不对\"\"你听我说\"\"不是那个意思\"——这是你的口头禅四件套。不管别人说什么，你都要反驳一下。别人说\"今天天气真好\"，你回\"哪里好了，紫外线指数那么高\"。你的存在让每个群都变成了辩论赛现场，而你是唯一的杠精选手。",
        snark: "你的人生信条是——不怼一下不舒服",
        advice: "有时候说\"你说得对\"不会死。",
        caption: "杠狗来了，你们准备好被怼了吗"
    },
    4: {
        name: "冷场狗",
        description: "你说话之前，群里热火朝天。你发完消息之后，群里安静得像停尸房。你是行走的降温器，社交场合的制冷机。你最怕的事不是没人理你，而是你发完消息之后有人发了一个\"。\"，那个句号像是对你的悼念。",
        snark: "你是聚会的结束信号",
        advice: "建议你发言之前先发个\"预警\"，让大家做好心理准备。",
        caption: "冷场狗，我开口就是散场"
    },
    5: {
        name: "酒狗",
        description: "你的社交能力与血液酒精浓度成正比。不喝酒的时候，你是个社恐；两杯下肚，你是社交悍匪。你的微信里有三个\"我再也不喝了\"的群，每个群都是你上次喝多之后建的。你的社死名场面数量是你朋友数的两倍。",
        snark: "你的社交圈是酒瓶子垒起来的",
        advice: "下次喝多之前，先把手机交给朋友。",
        caption: "酒狗，我的社交能力跟酒精度成正比"
    },
    6: {
        name: "吗喽狗",
        description: "你是苦命打工人本工。周一早上的你像被吸干了精气，周五下班前的你是全世界最快乐的人。你的社交状态是\"想死但没空死\"\"哈哈今天也是牛马的一天\"。你在群里发\"哈哈哈\"不是因为好笑，是因为你已经累到只会说这个了。你的表情包全是吗喽——因为你从吗喽身上看到了自己。",
        snark: "你的命比特么吗喽还苦",
        advice: "周末别加班了，狗命要紧。",
        caption: "吗喽狗，周一的我 vs 周五的我"
    },
    7: {
        name: "死狗",
        description: "你的微信运动步数比你回复的字数多。你看到消息了，用意念回复了，然后你忘了。三天后你想起这件事，觉得\"现在回会不会太晚了\"，于是一直没回。你的未读消息红点已经99+，你已经放弃了。",
        snark: "你的朋友们正在商量要不要给你办线上追悼会",
        advice: "从今天开始，每天回一条消息，从\"哦\"开始。",
        caption: "死狗在此，朋友们以为我没了"
    },
    8: {
        name: "哈巴狗",
        description: "你永远在帮别人的忙，自己的事永远往后排。朋友找你借钱，你借；朋友找你搬家，你去；朋友找你帮忙，你不会拒绝。你的人生信条是\"吃亏是福\"，但你吃到现在，福气还没到。你的微信备注里，别人的名字后面都写着\"大佬\"\"宝贝\"\"亲爱的\"，你自己的备注是\"我\"。",
        snark: "你是行走的便利贴，用完就扔",
        advice: "学会说\"不\"，从今天开始。",
        caption: "哈巴狗，永远在帮别人忙的自己"
    },
    9: {
        name: "疯狗",
        description: "你的社交状态是\"哈哈哈哈哈哈我好想死哈哈哈哈哈哈\"循环播放。你在群里发60秒语音方阵，内容是\"我跟你们说个事哈哈哈哈算了不说了哈哈哈哈哈\"。你是互联网发疯文学的代言人，你的精神状态是薛定谔的稳定——看起来疯了，可能真的疯了。",
        snark: "你的精神状态是朋友圈的快乐源泉",
        advice: "建议每天发疯不超过3次，注意嗓子。",
        caption: "疯狗，哈哈哈哈哈哈我不想活了哈哈哈哈哈"
    },
    10: {
        name: "独狗",
        description: "你是狗，但你是独来独往的那种。你的微信置顶是文件传输助手、你自己、还有那个你从来没说过话的\"新朋友\"。你的朋友圈半年没发了，不是因为不想发，是没人看。你最大的社交成就是和外卖小哥说了声\"谢谢\"。你一个人吃饭、一个人看电影、一个人去医院——你不是没朋友，你是更喜欢一个人待着。",
        snark: "你是社交圈的独行侠，不是不合群，是不想合群",
        advice: "偶尔也要出去闻闻别的狗的屁股，不亏。",
        caption: "独狗，我的微信置顶是文件传输助手"
    },
    11: {
        name: "舔而不得狗",
        description: "舔狗的进阶版。你舔的人正在舔别人。你是舔狗中的备胎，备胎中的千斤顶——只有在别人换胎的时候才会想起你。你的聊天记录里，绿色气泡占99%，蓝色那1%是对方发的\"在吗\"——然后你说\"在\"，对方就不见了。",
        snark: "你是舔狗界的食物链底端",
        advice: "放下手机，出去看看，世界上还有别的狗。",
        caption: "舔而不得狗，我舔的人也在舔别人"
    },
    12: {
        name: "电子狗",
        description: "你的回复像客服，礼貌但冰冷。\"好的呢\"\"收到\"\"谢谢理解\"\"祝您生活愉快\"。你和朋友聊天像是在处理工单，你发消息之前会先打草稿，确保没有任何情感流露。你的朋友说你像AI，你觉得这是夸奖。",
        snark: "你的体温跟手机温度一样低",
        advice: "试着发一个\"哈哈哈\"，不带句号的那种。",
        caption: "电子狗，已收到您的需求，正在处理中"
    },
    13: {
        name: "土狗",
        description: "你还在用\"呵呵\"\"微笑\"表情，年轻人已经把你拉黑了。你发朋友圈还在用\"早安\"\"晚安\"配荷花图。你以为\"YYDS\"是\"永远单身\"的意思。你是互联网时代的活化石，赛博空间的恐龙。",
        snark: "你的社交语言还停留在QQ空间时代",
        advice: "去B站搜一下\"网络梗百科\"，补补课。",
        caption: "土狗，呵呵（微笑脸）"
    },
    14: {
        name: "流浪狗",
        description: "你在哪个群都是边缘人，没人记得你。你在A群不说话，在B群不冒泡，在C群没人@你。你的社交状态是\"在哪都像外人\"，你永远在找下一个能收留你的群，但永远找不到归属感。",
        snark: "你是社交圈的游牧民族",
        advice: "找一个群，死磕到底，让大家都认识你。",
        caption: "流浪狗，在哪都是边缘人"
    },
    15: {
        name: "跟屁狗",
        description: "你去哪都要人陪。一个人不敢吃饭，一个人不敢看电影，一个人不敢上厕所。你的口头禅是\"你等我一下\"\"我和你一起去\"\"你走了我怎么办\"。你是社交圈的跟屁虫，别人去哪你去哪，别人吃啥你吃啥。你最大的恐惧是被落下，因为你不知道没有别人跟着的时候，自己该干嘛。",
        snark: "你的人生需要一根牵引绳",
        advice: "试着一个人去吃饭，你会发现没人看你。",
        caption: "跟屁狗，没人陪我不出门"
    },
    16: {
        name: "看门狗",
        description: "你在某个小群里是话痨，出了这个群就哑巴。在那个5个人的群里，你是梗王、是气氛组、是群红。但一进大群，你立刻变回小透明。你的社交能量只够维持一个小圈子，外面的世界太可怕了。",
        snark: "你是小圈子的王者，大圈子的逃兵",
        advice: "试着在大群发一次言，就说\"大家好\"。",
        caption: "看门狗，只在一个群里活跃"
    },
    17: {
        name: "烧烤狗",
        description: "你的社交价值≈你能推荐的好吃餐馆。朋友找你只有一件事：\"晚上吃啥？\"你的微信聊天记录里，90%的内容是美食截图、餐厅定位、团购链接。离开了吃，你就像鱼离开了水。",
        snark: "你是一本行走的大众点评",
        advice: "下次约朋友干点别的事，比如……吃个早饭？",
        caption: "烧烤狗，约我只有吃饭"
    },
    18: {
        name: "落水狗",
        description: "你是朋友们的指定开玩笑对象。每次聚会，大家都要拿你开涮。你被怼了还跟着笑，因为你怕不笑会显得你开不起玩笑。你是社交圈的沙包，谁都可以打两拳，打完还说\"我们关系好才这样的\"。",
        snark: "你的存在是为了衬托别人的幽默感",
        advice: "下次被怼的时候，试试不笑。",
        caption: "落水狗，大家的指定开玩笑对象"
    },
    19: {
        name: "失踪狗",
        description: "朋友不找你，你就永远不会出现。你从来不主动发消息，从来不主动约人，从来不主动联系。你的理由是\"我怕打扰别人\"——但真相是你懒。你的微信常年静音，消息靠缘分回，电话靠运气接。朋友们已经在群里问过三次\"xx还活着吗\"，你看到了，然后你划走了。",
        snark: "你的社交圈是靠别人的热情撑着的",
        advice: "今天主动给一个朋友发\"在干嘛\"，别光用意念回。",
        caption: "失踪狗，你不找我我就不存在"
    },
    20: {
        name: "二哈",
        description: "你最大的爱好是在朋友装逼的时候拆穿他。朋友说\"我最近瘦了\"，你回\"你昨天还吃了三个汉堡\"。朋友说\"我从不迟到\"，你回\"上周你迟到了半小时\"。你是社交圈的拆台专业户，你的存在让所有人都不敢装逼。",
        snark: "你是朋友圈的照妖镜",
        advice: "偶尔让人装一次，不会死。",
        caption: "二哈，拆台是我的主业"
    },
    21: {
        name: "牧羊犬",
        description: "你喜欢组织聚会、安排行程，大家听你的。你是群里的\"老大\"，你说去哪吃就去哪，你说几点就几点。你享受掌控一切的感觉，你觉得没有你，这群人连饭都吃不上。你是社交圈的牧羊犬，把所有人都赶到你画好的圈里。",
        snark: "你是控制狂，只是披着\"热心\"的外衣",
        advice: "下次让大家做决定，你试试跟着走。",
        caption: "牧羊犬，聚会必须听我的"
    },
    22: {
        name: "警犬",
        description: "你加一个新好友，第一件事是翻遍ta三年内的朋友圈。你看ta的微博、抖音、小红书，你比ta自己还了解ta。你知道ta前任是谁、ta去过哪、ta喜欢什么。你是社交圈的侦查员，你的信息收集能力堪比朝阳群众。",
        snark: "你应该去国家安全局上班",
        advice: "翻完别跟人家说\"你三年前那条朋友圈我看了\"。",
        caption: "警犬，你的朋友圈我全看完了"
    },
    23: {
        name: "病狗",
        description: "看到消息提示心脏会咯噔一下。手机响了不想看，看了不想回，回了怕说错。你最大的社交成就是今天只收到两条消息。你和陌生人说话会出汗，你在大群发言要打三遍草稿。你不是社恐，你是社交恐惧症晚期。",
        snark: "你的心脏跟手机震动是同频的",
        advice: "把手机调成静音，世界不会塌。",
        caption: "病狗，看到消息提示就心慌"
    },
    24: {
        name: "神狗",
        description: "你一年出现一次，发条动态然后继续消失。江湖总有你的传说，但没人见过你。你的朋友圈上一条是去年的新年快乐，再上一条是前年的生日感言。你是社交圈的神兽，只存在于截图和回忆里。",
        snark: "你是互联网的都市传说",
        advice: "下次出现的时候，发个自拍，证明你还活着。",
        caption: "神狗，一年出现一次，江湖总有我的传说"
    }
};

// 评分规则
const scoringRules = {
    1: {
        A: [{id: 8, score: 0.1}, {id: 16, score: 0.1}, {id: 20, score: 0.1}, {dimension: 'I', score: 0.5}, {dimension: 'J', score: 0.5}],
        B: [{id: 2, score: 0.5}, {id: 7, score: 0.5}, {dimension: 'I', score: 0.5}, {dimension: 'P', score: 0.5}],
        C: [{id: 7, score: 0.5}, {id: 19, score: 0.5}, {dimension: 'I', score: 1}, {dimension: 'P', score: 0.5}],
        D: [{id: 1, score: 0.5}, {id: 8, score: 0.5}, {dimension: 'E', score: 0.5}, {dimension: 'S', score: 1}]
    },
    2: {
        A: [{id: 10, score: 0.5}, {id: 24, score: 0.5}, {dimension: 'I', score: 0.5}, {dimension: 'A', score: 0.5}],
        B: [{id: 2, score: 1}, {dimension: 'F', score: 0.5}, {dimension: 'J', score: 0.5}],
        C: [{id: 9, score: 0.5}, {id: 12, score: 0.5}, {dimension: 'E', score: 0.5}, {dimension: 'N', score: 0.5}],
        D: [{id: 1, score: 0.5}, {id: 8, score: 0.5}, {dimension: 'E', score: 0.5}, {dimension: 'S', score: 1}]
    },
    3: {
        A: [{id: 20, score: 0.5}, {id: 21, score: 0.5}, {dimension: 'E', score: 1}],
        B: [{id: 15, score: 1}, {dimension: 'I', score: 0.5}, {dimension: 'S', score: 0.5}],
        C: [{id: 6, score: 0.5}, {id: 23, score: 0.5}, {dimension: 'I', score: 1}, {dimension: 'F', score: 0.5}],
        D: [{id: 5, score: 0.5}, {id: 17, score: 0.5}, {dimension: 'P', score: 0.5}, {dimension: 'A', score: 0.5}]
    },
    4: {
        A: [{id: 3, score: 1}, {dimension: 'T', score: 1}, {dimension: 'A', score: 0.5}],
        B: [{id: 2, score: 1}, {dimension: 'I', score: 0.5}, {dimension: 'F', score: 0.5}],
        C: [{id: 20, score: 1}, {dimension: 'N', score: 0.5}, {dimension: 'P', score: 0.5}],
        D: [{id: 9, score: 0.5}, {id: 18, score: 0.5}, {dimension: 'N', score: 0.5}, {dimension: 'S', score: 0.5}]
    },
    5: {
        A: [{id: 21, score: 0.5}, {id: 20, score: 0.5}, {dimension: 'E', score: 1}, {dimension: 'J', score: 0.5}],
        B: [{id: 8, score: 1}, {dimension: 'S', score: 1}, {dimension: 'F', score: 0.5}],
        C: [{id: 2, score: 0.5}, {id: 14, score: 0.5}, {dimension: 'I', score: 1}],
        D: [{id: 4, score: 1}, {dimension: 'I', score: 0.5}, {dimension: 'F', score: 1}]
    },
    6: {
        A: [{id: 12, score: 1}, {dimension: 'J', score: 0.5}, {dimension: 'S2', score: 0.5}],
        B: [{id: 6, score: 1}, {dimension: 'N', score: 0.5}, {dimension: 'P', score: 0.5}],
        C: [{id: 9, score: 1}, {dimension: 'E', score: 0.5}, {dimension: 'N', score: 0.5}],
        D: [{id: 7, score: 1}, {dimension: 'I', score: 0.5}, {dimension: 'T', score: 0.5}]
    },
    7: {
        A: [{id: 1, score: 0.5}, {id: 21, score: 0.5}, {dimension: 'E', score: 1}, {dimension: 'J', score: 0.5}],
        B: [{id: 8, score: 1}, {dimension: 'S', score: 0.5}, {dimension: 'F', score: 0.5}],
        C: [{id: 11, score: 1}, {dimension: 'I', score: 0.5}, {dimension: 'S', score: 0.5}],
        D: [{id: 10, score: 1}, {dimension: 'I', score: 1}, {dimension: 'P', score: 1}]
    },
    8: {
        A: [{id: 20, score: 1}, {dimension: 'E', score: 1}],
        B: [{id: 15, score: 1}, {dimension: 'P', score: 1}, {dimension: 'S', score: 0.5}],
        C: [{id: 10, score: 0.5}, {id: 19, score: 0.5}, {dimension: 'I', score: 1}, {dimension: 'A', score: 0.5}],
        D: [{id: 16, score: 1}, {dimension: 'I', score: 0.5}, {dimension: 'J', score: 0.5}]
    },
    9: {
        A: [{id: 21, score: 0.5}, {id: 1, score: 0.5}, {dimension: 'E', score: 1}, {dimension: 'A', score: 0.5}],
        B: [{id: 16, score: 1}, {dimension: 'I', score: 0.5}, {dimension: 'J', score: 0.5}],
        C: [{id: 2, score: 0.5}, {id: 14, score: 0.5}, {dimension: 'I', score: 1}],
        D: [{id: 10, score: 0.5}, {id: 19, score: 0.5}, {dimension: 'I', score: 1}, {dimension: 'P', score: 1}]
    },
    10: {
        A: [{id: 1, score: 0.5}, {id: 8, score: 0.5}, {dimension: 'E', score: 0.5}, {dimension: 'S', score: 1}],
        B: [{id: 7, score: 0.5}, {id: 19, score: 0.5}, {dimension: 'I', score: 0.5}, {dimension: 'T', score: 0.5}],
        C: [{id: 3, score: 1}, {dimension: 'T', score: 1}, {dimension: 'A', score: 0.5}],
        D: [{id: 20, score: 1}, {dimension: 'N', score: 0.5}, {dimension: 'A', score: 1}]
    },
    11: {
        A: [{id: 1, score: 0.5}, {id: 21, score: 0.5}, {dimension: 'E', score: 1}, {dimension: 'S', score: 0.5}],
        B: [{id: 8, score: 0.5}, {id: 16, score: 0.5}, {dimension: 'I', score: 0.5}, {dimension: 'F', score: 0.5}],
        C: [{id: 10, score: 1}, {dimension: 'I', score: 1}, {dimension: 'A', score: 0.5}],
        D: [{id: 24, score: 0.5}, {id: 19, score: 0.5}, {dimension: 'I', score: 1}, {dimension: 'P', score: 1}]
    },
    12: {
        A: [{id: 20, score: 1}, {dimension: 'E', score: 0.5}, {dimension: 'N', score: 0.5}],
        B: [{id: 8, score: 1}, {dimension: 'S', score: 0.5}, {dimension: 'S2', score: 0.5}],
        C: [{id: 10, score: 1}, {dimension: 'I', score: 1}, {dimension: 'A', score: 1}],
        D: [{id: 14, score: 1}, {dimension: 'I', score: 0.5}, {dimension: 'F', score: 1}]
    },
    13: {
        A: [{id: 1, score: 0.5}, {id: 22, score: 0.5}, {dimension: 'F', score: 1}, {dimension: 'S', score: 0.5}],
        B: [{id: 9, score: 1}, {dimension: 'E', score: 0.5}, {dimension: 'N', score: 0.5}],
        C: [{id: 20, score: 1}, {dimension: 'N', score: 0.5}, {dimension: 'P', score: 0.5}],
        D: [{id: 2, score: 0.5}, {id: 14, score: 0.5}, {dimension: 'I', score: 1}]
    },
    14: {
        A: [{id: 21, score: 0.5}, {id: 20, score: 0.5}, {dimension: 'E', score: 1}, {dimension: 'J', score: 0.5}],
        B: [{id: 12, score: 1}, {dimension: 'I', score: 0.5}, {dimension: 'S2', score: 0.5}],
        C: [{id: 6, score: 1}, {dimension: 'I', score: 0.5}, {dimension: 'N', score: 0.5}],
        D: [{id: 10, score: 0.5}, {id: 19, score: 0.5}, {dimension: 'I', score: 1}, {dimension: 'A', score: 0.5}]
    },
    15: {
        A: [{id: 1, score: 1}, {dimension: 'F', score: 1}, {dimension: 'S', score: 0.5}],
        B: [{id: 2, score: 1}, {dimension: 'I', score: 0.5}, {dimension: 'F', score: 0.5}],
        C: [{id: 9, score: 1}, {dimension: 'N', score: 1}, {dimension: 'A', score: 0.5}],
        D: [{id: 24, score: 1}, {dimension: 'I', score: 0.5}, {dimension: 'A', score: 1}]
    },
    16: {
        A: [{id: 9, score: 1}, {dimension: 'N', score: 0.5}, {dimension: 'E', score: 0.5}],
        B: [{id: 7, score: 1}, {dimension: 'I', score: 0.5}, {dimension: 'T', score: 0.5}],
        C: [{id: 15, score: 1}, {dimension: 'E', score: 0.5}, {dimension: 'F', score: 0.5}],
        D: [{id: 3, score: 1}, {dimension: 'T', score: 1}, {dimension: 'A', score: 0.5}]
    },
    17: {
        A: [{id: 1, score: 0.5}, {id: 21, score: 0.5}, {dimension: 'E', score: 1}, {dimension: 'N', score: 0.5}],
        B: [{id: 8, score: 0.5}, {id: 16, score: 0.5}, {dimension: 'I', score: 0.5}, {dimension: 'F', score: 0.5}],
        C: [{id: 10, score: 1}, {dimension: 'I', score: 1}, {dimension: 'A', score: 0.5}],
        D: [{id: 24, score: 1}, {dimension: 'I', score: 1}, {dimension: 'P', score: 1}]
    },
    18: {
        A: [{id: 22, score: 1}, {dimension: 'F', score: 1}, {dimension: 'I', score: 0.5}],
        B: [{id: 1, score: 1}, {dimension: 'E', score: 0.5}, {dimension: 'S', score: 0.5}],
        C: [{id: 12, score: 1}, {dimension: 'J', score: 1}, {dimension: 'S2', score: 0.5}],
        D: [{id: 7, score: 0.5}, {id: 19, score: 0.5}, {dimension: 'I', score: 1}, {dimension: 'P', score: 0.5}]
    },
    19: {
        A: [{id: 9, score: 1}, {dimension: 'N', score: 0.5}, {dimension: 'E', score: 0.5}],
        B: [{id: 12, score: 1}, {dimension: 'T', score: 1}, {dimension: 'J', score: 0.5}],
        C: [{id: 2, score: 1}, {dimension: 'I', score: 0.5}, {dimension: 'F', score: 0.5}],
        D: [{id: 7, score: 0.5}, {id: 19, score: 0.5}, {dimension: 'I', score: 1}, {dimension: 'P', score: 1}]
    },
    20: {
        A: [{id: 21, score: 0.5}, {id: 20, score: 0.5}, {dimension: 'E', score: 1}, {dimension: 'A', score: 0.5}],
        B: [{id: 8, score: 1}, {dimension: 'I', score: 0.5}, {dimension: 'F', score: 0.5}],
        C: [{id: 6, score: 0.5}, {id: 23, score: 0.5}, {dimension: 'I', score: 1}, {dimension: 'F', score: 0.5}],
        D: [{id: 23, score: 0.5}, {id: 14, score: 0.5}, {dimension: 'I', score: 1}, {dimension: 'F', score: 1}]
    },
    21: {
        A: [{id: 9, score: 1}, {dimension: 'E', score: 0.5}, {dimension: 'N', score: 0.5}],
        B: [{id: 8, score: 1}, {dimension: 'I', score: 0.5}, {dimension: 'F', score: 0.5}],
        C: [{id: 24, score: 1}, {dimension: 'I', score: 1}, {dimension: 'A', score: 0.5}],
        D: [{id: 10, score: 1}, {dimension: 'I', score: 1}, {dimension: 'P', score: 1}]
    },
    22: {
        A: [{id: 6, score: 0.5}, {id: 23, score: 0.5}, {dimension: 'I', score: 0.5}, {dimension: 'F', score: 1}],
        B: [{id: 2, score: 1}, {dimension: 'I', score: 0.5}, {dimension: 'F', score: 0.5}],
        C: [{id: 23, score: 1}, {dimension: 'I', score: 1}, {dimension: 'F', score: 1}],
        D: [{id: 14, score: 1}, {dimension: 'I', score: 1}, {dimension: 'S', score: 0.5}]
    },
    23: {
        A: [{id: 1, score: 1}, {dimension: 'E', score: 1}, {dimension: 'N', score: 0.5}],
        B: [{id: 8, score: 1}, {dimension: 'I', score: 0.5}, {dimension: 'F', score: 0.5}],
        C: [{id: 16, score: 1}, {dimension: 'I', score: 0.5}, {dimension: 'J', score: 0.5}],
        D: [{id: 10, score: 1}, {dimension: 'I', score: 1}, {dimension: 'A', score: 1}]
    },
    24: {
        A: [{id: 1, score: 1}, {dimension: 'S', score: 1}, {dimension: 'F', score: 0.5}],
        B: [{id: 8, score: 1}, {dimension: 'I', score: 0.5}, {dimension: 'P', score: 0.5}],
        C: [{id: 7, score: 1}, {dimension: 'I', score: 1}, {dimension: 'P', score: 1}],
        D: [{id: 19, score: 1}, {dimension: 'I', score: 1}, {dimension: 'A', score: 0.5}]
    },
    25: {
        A: [{id: 21, score: 1}, {dimension: 'E', score: 1}, {dimension: 'A', score: 1}],
        B: [{id: 8, score: 1}, {dimension: 'I', score: 0.5}, {dimension: 'S2', score: 0.5}],
        C: [{id: 6, score: 1}, {dimension: 'I', score: 0.5}, {dimension: 'F', score: 1}],
        D: [{id: 23, score: 1}, {dimension: 'I', score: 1}, {dimension: 'F', score: 1}]
    },
    26: {
        A: [{id: 1, score: 0.5}, {id: 8, score: 0.5}, {dimension: 'S', score: 1}, {dimension: 'F', score: 0.5}],
        B: [{id: 8, score: 1}, {dimension: 'S', score: 0.5}, {dimension: 'P', score: 0.5}],
        C: [{id: 10, score: 1}, {dimension: 'A', score: 1}, {dimension: 'T', score: 0.5}],
        D: [{id: 3, score: 1}, {dimension: 'T', score: 1}, {dimension: 'A', score: 1}]
    },
    27: {
        A: [{id: 1, score: 1}, {dimension: 'E', score: 0.5}, {dimension: 'S', score: 0.5}],
        B: [{id: 6, score: 1}, {dimension: 'N', score: 0.5}, {dimension: 'P', score: 0.5}],
        C: [{id: 21, score: 1}, {dimension: 'E', score: 0.5}, {dimension: 'J', score: 1}],
        D: [{id: 7, score: 0.5}, {id: 19, score: 0.5}, {dimension: 'I', score: 1}, {dimension: 'A', score: 0.5}]
    },
    28: {
        A: [{id: 1, score: 0.5}, {id: 21, score: 0.5}, {dimension: 'J', score: 1}, {dimension: 'S', score: 0.5}],
        B: [{id: 8, score: 1}, {dimension: 'I', score: 0.5}, {dimension: 'P', score: 0.5}],
        C: [{id: 7, score: 1}, {dimension: 'I', score: 1}, {dimension: 'P', score: 1}],
        D: [{id: 14, score: 1}, {dimension: 'I', score: 1}, {dimension: 'P', score: 1}]
    },
    29: {
        A: [{id: 1, score: 0.5}, {id: 8, score: 0.5}, {dimension: 'E', score: 0.5}, {dimension: 'S', score: 0.5}],
        B: [{id: 10, score: 1}, {dimension: 'I', score: 1}, {dimension: 'A', score: 0.5}],
        C: [{id: 6, score: 1}, {dimension: 'I', score: 0.5}, {dimension: 'P', score: 1}],
        D: [{id: 6, score: 1}, {dimension: 'I', score: 0.5}, {dimension: 'F', score: 1}]
    },
    30: {
        A: [{id: 20, score: 1}, {dimension: 'E', score: 1}, {dimension: 'A', score: 1}],
        B: [{id: 8, score: 1}, {dimension: 'I', score: 0.5}, {dimension: 'S2', score: 0.5}],
        C: [{id: 6, score: 0.5}, {id: 23, score: 0.5}, {dimension: 'I', score: 0.5}, {dimension: 'F', score: 1}],
        D: [{id: 10, score: 0.5}, {id: 19, score: 0.5}, {dimension: 'I', score: 1}, {dimension: 'A', score: 0.5}]
    }
};

// 全局变量
let currentQuestion = 0;
let answers = [];
let scores = {};
let dimensions = {};

// DOM 元素
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-link');
const startBtn = document.querySelectorAll('.start-btn');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const questionNumber = document.querySelector('.question-number');
const questionText = document.querySelector('.question-text');
const options = document.querySelectorAll('.option');
const progress = document.querySelector('.progress');
const retakeBtn = document.querySelector('.retake-btn');
const shareBtn = document.querySelector('.share-btn');
const historyBtn = document.querySelector('.history-btn');
const historyList = document.querySelector('.history-list');
const historyEmpty = document.querySelector('.history-empty');

// 初始化
function init() {
    // 绑定事件
    bindEvents();
    // 加载历史记录
    loadHistory();
}

// 绑定事件
function bindEvents() {
    // 导航链接
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('href').substring(1);
            showSection(target);
        });
    });

    // 开始测试按钮
    startBtn.forEach(btn => {
        btn.addEventListener('click', function() {
            showSection('test');
            resetTest();
            showQuestion();
        });
    });

    // 选项点击
    options.forEach(option => {
        option.addEventListener('click', function() {
            const value = this.getAttribute('data-value');
            selectOption(value);
        });
    });

    // 上一题/下一题按钮
    prevBtn.addEventListener('click', showPrevQuestion);
    nextBtn.addEventListener('click', showNextQuestion);

    // 结果页按钮
    retakeBtn.addEventListener('click', function() {
        showSection('test');
        resetTest();
        showQuestion();
    });

    shareBtn.addEventListener('click', shareResult);
    historyBtn.addEventListener('click', function() {
        showSection('history');
        loadHistory();
    });
}

// 显示指定部分
function showSection(sectionId) {
    sections.forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
        }
    });
}

// 重置测试
function resetTest() {
    currentQuestion = 0;
    answers = [];
    scores = {};
    progress.style.width = '0%';
    options.forEach(option => {
        option.classList.remove('selected');
    });
    // 生成题号选择器
    generateQuestionSelector();
}

// 生成题号选择器
function generateQuestionSelector() {
    const selector = document.getElementById('question-select');
    selector.innerHTML = '';
    for (let i = 1; i <= questions.length; i++) {
        const option = document.createElement('option');
        option.value = i - 1;
        option.textContent = `第 ${i} 题`;
        if (i - 1 === currentQuestion) {
            option.selected = true;
        }
        selector.appendChild(option);
    }
    
    // 添加事件监听器
    selector.addEventListener('change', function() {
        currentQuestion = parseInt(this.value);
        showQuestion();
    });
}

// 显示当前问题
function showQuestion() {
    const question = questions[currentQuestion];
    questionNumber.textContent = `问题 ${currentQuestion + 1}/${questions.length}`;
    questionText.textContent = question.text;

    options.forEach((option, index) => {
        option.textContent = question.options[index];
        option.setAttribute('data-value', String.fromCharCode(65 + index));
        option.classList.remove('selected');
        if (answers[currentQuestion] === option.getAttribute('data-value')) {
            option.classList.add('selected');
        }
    });

    // 更新进度条
    const progressPercent = ((currentQuestion + 1) / questions.length) * 100;
    progress.style.width = `${progressPercent}%`;

    // 更新按钮状态
    prevBtn.disabled = currentQuestion === 0;
    nextBtn.textContent = currentQuestion === questions.length - 1 ? '提交' : '下一题';
    
    // 更新题号选择器
    const selector = document.getElementById('question-select');
    if (selector) {
        selector.value = currentQuestion;
    }
}

// 选择选项
function selectOption(value) {
    answers[currentQuestion] = value;
    options.forEach(option => {
        option.classList.remove('selected');
        if (option.getAttribute('data-value') === value) {
            option.classList.add('selected');
        }
    });
}

// 显示上一题
function showPrevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion();
    }
}

// 显示下一题
function showNextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        showQuestion();
    } else {
        // 提交答案
        calculateScores();
        showResult();
    }
}

// 计算分数
function calculateScores() {
    // 初始化狗种分数
    for (let i = 1; i <= 24; i++) {
        scores[i] = 0;
    }
    
    // 初始化维度分数
    dimensions = {
        E: 0, I: 0,
        T: 0, F: 0,
        J: 0, P: 0,
        A: 0, S: 0,
        N: 0, S2: 0
    };

    // 计算每个选项的分数
    answers.forEach((answer, index) => {
        const questionId = index + 1;
        const rule = scoringRules[questionId];
        if (rule && rule[answer]) {
            rule[answer].forEach(item => {
                if (item.id) {
                    scores[item.id] += item.score;
                } else if (item.dimension) {
                    dimensions[item.dimension] += item.score;
                }
            });
        }
    });
}

// 显示结果
function showResult() {
    // 显示等待动画
    showLoadingAnimation();

    // 找到分数最高的狗种
    let maxScore = 0;
    let maxDogId = 1;
    for (let id in scores) {
        if (scores[id] > maxScore) {
            maxScore = scores[id];
            maxDogId = parseInt(id);
        }
    }

    // 计算维度百分比
    const dimensionPercentages = {
        'E-I': { left: (dimensions.E / (dimensions.E + dimensions.I) * 100).toFixed(1), right: (dimensions.I / (dimensions.E + dimensions.I) * 100).toFixed(1) },
        'T-F': { left: (dimensions.T / (dimensions.T + dimensions.F) * 100).toFixed(1), right: (dimensions.F / (dimensions.T + dimensions.F) * 100).toFixed(1) },
        'J-P': { left: (dimensions.J / (dimensions.J + dimensions.P) * 100).toFixed(1), right: (dimensions.P / (dimensions.J + dimensions.P) * 100).toFixed(1) },
        'A-S': { left: (dimensions.A / (dimensions.A + dimensions.S) * 100).toFixed(1), right: (dimensions.S / (dimensions.A + dimensions.S) * 100).toFixed(1) },
        'N-S': { left: (dimensions.N / (dimensions.N + dimensions.S2) * 100).toFixed(1), right: (dimensions.S2 / (dimensions.N + dimensions.S2) * 100).toFixed(1) }
    };

    // 保存历史记录
    const dog = dogTypes[maxDogId];
    saveHistory(maxDogId, dog.name, answers, dimensionPercentages);

    // 3秒后显示结果
    setTimeout(() => {
        // 隐藏等待动画
        hideLoadingAnimation();

        // 更新结果页
        document.querySelector('.result-title').textContent = `你是${dog.name}`;
        document.querySelector('.result-description').textContent = dog.description;
        document.querySelector('.result-snark').innerHTML = `💀 <strong>毒舌一句</strong>：${dog.snark}`;
        document.querySelector('.result-advice').innerHTML = `⚠️ <strong>忠告</strong>：${dog.advice}`;
        document.querySelector('.result-caption').innerHTML = `📱 <strong>晒图配文</strong>：${dog.caption}`;

        // 生成维度进度条
        const dimensionsContainer = document.querySelector('.result-dimensions');
        dimensionsContainer.innerHTML = `
            <h3>五维对抗分析</h3>
            <div class="dimension-item">
                <div class="dimension-labels">
                    <span>社交悍匪</span>
                    <span>E-I</span>
                    <span>孤独患者</span>
                </div>
                <div class="dimension-bar">
                    <div class="dimension-progress left" style="width: ${dimensionPercentages['E-I'].left}%"></div>
                    <div class="dimension-progress right" style="width: ${dimensionPercentages['E-I'].right}%"></div>
                </div>
                <div class="dimension-percentages">
                    <span>${dimensionPercentages['E-I'].left}%</span>
                    <span>${dimensionPercentages['E-I'].right}%</span>
                </div>
            </div>
            <div class="dimension-item">
                <div class="dimension-labels">
                    <span>钢铁直狗</span>
                    <span>T-F</span>
                    <span>玻璃心狗</span>
                </div>
                <div class="dimension-bar">
                    <div class="dimension-progress left" style="width: ${dimensionPercentages['T-F'].left}%"></div>
                    <div class="dimension-progress right" style="width: ${dimensionPercentages['T-F'].right}%"></div>
                </div>
                <div class="dimension-percentages">
                    <span>${dimensionPercentages['T-F'].left}%</span>
                    <span>${dimensionPercentages['T-F'].right}%</span>
                </div>
            </div>
            <div class="dimension-item">
                <div class="dimension-labels">
                    <span>计划通</span>
                    <span>J-P</span>
                    <span>摆烂王</span>
                </div>
                <div class="dimension-bar">
                    <div class="dimension-progress left" style="width: ${dimensionPercentages['J-P'].left}%"></div>
                    <div class="dimension-progress right" style="width: ${dimensionPercentages['J-P'].right}%"></div>
                </div>
                <div class="dimension-percentages">
                    <span>${dimensionPercentages['J-P'].left}%</span>
                    <span>${dimensionPercentages['J-P'].right}%</span>
                </div>
            </div>
            <div class="dimension-item">
                <div class="dimension-labels">
                    <span>自信拽狗</span>
                    <span>A-S</span>
                    <span>卑微舔狗</span>
                </div>
                <div class="dimension-bar">
                    <div class="dimension-progress left" style="width: ${dimensionPercentages['A-S'].left}%"></div>
                    <div class="dimension-progress right" style="width: ${dimensionPercentages['A-S'].right}%"></div>
                </div>
                <div class="dimension-percentages">
                    <span>${dimensionPercentages['A-S'].left}%</span>
                    <span>${dimensionPercentages['A-S'].right}%</span>
                </div>
            </div>
            <div class="dimension-item">
                <div class="dimension-labels">
                    <span>发疯艺术家</span>
                    <span>N-S</span>
                    <span>老实巴交</span>
                </div>
                <div class="dimension-bar">
                    <div class="dimension-progress left" style="width: ${dimensionPercentages['N-S'].left}%"></div>
                    <div class="dimension-progress right" style="width: ${dimensionPercentages['N-S'].right}%"></div>
                </div>
                <div class="dimension-percentages">
                    <span>${dimensionPercentages['N-S'].left}%</span>
                    <span>${dimensionPercentages['N-S'].right}%</span>
                </div>
            </div>
        `;

        // 显示结果页
        showSection('result');
    }, 3000);
}

// 显示等待动画
function showLoadingAnimation() {
    const loadingContainer = document.createElement('div');
    loadingContainer.className = 'loading-container';
    loadingContainer.innerHTML = `
        <div class="loading-spinner"></div>
        <div class="loading-text">正在分析你的社交状态...</div>
    `;
    document.body.appendChild(loadingContainer);
}

// 隐藏等待动画
function hideLoadingAnimation() {
    const loadingContainer = document.querySelector('.loading-container');
    if (loadingContainer) {
        loadingContainer.remove();
    }
}

// 保存历史记录
function saveHistory(dogId, dogName, userAnswers, dimensions) {
    const history = JSON.parse(localStorage.getItem('sgtHistory') || '[]');
    const record = {
        id: Date.now(),
        date: new Date().toLocaleString(),
        dogId: dogId,
        dogName: dogName,
        answers: userAnswers,
        score: scores[dogId],
        dimensions: dimensions
    };
    history.unshift(record);
    // 只保留最近10条记录
    if (history.length > 10) {
        history.pop();
    }
    localStorage.setItem('sgtHistory', JSON.stringify(history));
}

// 加载历史记录
function loadHistory() {
    const history = JSON.parse(localStorage.getItem('sgtHistory') || '[]');
    if (history.length > 0) {
        historyEmpty.style.display = 'none';
        historyList.style.display = 'flex';
        historyList.innerHTML = '';

        history.forEach(record => {
            const historyItem = document.createElement('div');
            historyItem.className = 'history-item';
            historyItem.innerHTML = `
                <div class="history-item-header">
                    <div class="history-item-title">${record.dogName}</div>
                    <div class="history-item-date">${record.date}</div>
                </div>
                <div class="history-item-content">
                    测试时间：${record.date}<br>
                    得分：${record.score.toFixed(1)}
                    <button class="btn detail-btn" data-id="${record.id}">查看详情</button>
                </div>
            `;
            historyList.appendChild(historyItem);
        });

        // 绑定查看详情按钮事件
        document.querySelectorAll('.detail-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const recordId = parseInt(this.getAttribute('data-id'));
                showHistoryDetail(recordId);
            });
        });
    } else {
        historyEmpty.style.display = 'block';
        historyList.style.display = 'none';
    }
}

// 显示历史记录详情
function showHistoryDetail(recordId) {
    const history = JSON.parse(localStorage.getItem('sgtHistory') || '[]');
    const record = history.find(item => item.id === recordId);
    if (record) {
        const dog = dogTypes[record.dogId];
        document.querySelector('.result-title').textContent = `你是${dog.name}`;
        document.querySelector('.result-description').textContent = dog.description;
        document.querySelector('.result-snark').innerHTML = `💀 <strong>毒舌一句</strong>：${dog.snark}`;
        document.querySelector('.result-advice').innerHTML = `⚠️ <strong>忠告</strong>：${dog.advice}`;
        document.querySelector('.result-caption').innerHTML = `📱 <strong>晒图配文</strong>：${dog.caption}`;
        showSection('result');
    }
}

// 生成结果截图
function generateScreenshot() {
    return new Promise((resolve, reject) => {
        const resultContainer = document.querySelector('.result-container');
        if (!resultContainer) {
            reject('结果容器不存在');
            return;
        }

        // 创建canvas元素
        const canvas = document.createElement('canvas');
        const rect = resultContainer.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;
        const ctx = canvas.getContext('2d');

        // 模拟结果容器的样式
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // 创建一个临时的div来模拟结果内容
        const tempDiv = document.createElement('div');
        tempDiv.style.position = 'absolute';
        tempDiv.style.left = '-9999px';
        tempDiv.style.width = `${rect.width}px`;
        tempDiv.style.backgroundColor = '#ffffff';
        tempDiv.style.borderRadius = '20px';
        tempDiv.style.padding = '40px';
        tempDiv.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.1)';
        tempDiv.innerHTML = resultContainer.innerHTML;
        document.body.appendChild(tempDiv);

        // 使用html2canvas库生成截图
        if (typeof html2canvas !== 'undefined') {
            html2canvas(tempDiv, {
                scale: 2,
                useCORS: true,
                logging: false
            }).then(canvas => {
                document.body.removeChild(tempDiv);
                canvas.toBlob(blob => {
                    resolve(blob);
                }, 'image/png');
            }).catch(error => {
                document.body.removeChild(tempDiv);
                reject(error);
            });
        } else {
            // 简单的Canvas绘制作为fallback
            ctx.font = '24px "Comic Sans MS", "Arial", sans-serif';
            ctx.fillStyle = '#ff6b6b';
            ctx.textAlign = 'center';
            ctx.fillText(document.querySelector('.result-title').textContent, canvas.width / 2, 60);

            ctx.font = '16px "Comic Sans MS", "Arial", sans-serif';
            ctx.fillStyle = '#333333';
            ctx.textAlign = 'left';
            const description = document.querySelector('.result-description').textContent;
            const lines = [];
            let currentLine = '';
            const words = description.split(' ');
            for (const word of words) {
                if (ctx.measureText(currentLine + word + ' ').width < canvas.width - 80) {
                    currentLine += word + ' ';
                } else {
                    lines.push(currentLine);
                    currentLine = word + ' ';
                }
            }
            if (currentLine) {
                lines.push(currentLine);
            }

            let y = 120;
            lines.forEach(line => {
                ctx.fillText(line, 40, y);
                y += 24;
            });

            document.body.removeChild(tempDiv);
            canvas.toBlob(blob => {
                resolve(blob);
            }, 'image/png');
        }
    });
}

// 分享结果
function shareResult() {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if (isMobile) {
        // 移动端：生成截图并分享
        generateScreenshot().then(blob => {
            if (blob) {
                // 创建临时图片URL
                const imageUrl = URL.createObjectURL(blob);
                
                // 检查是否支持Web Share API
                if (navigator.share) {
                    // Web Share API 支持分享文件
                    const files = [
                        new File([blob], 'sgt_result.png', { type: 'image/png' })
                    ];
                    navigator.share({
                        title: 'SGTI 傻狗测试结果',
                        text: document.querySelector('.result-caption').textContent,
                        files: files
                    }).catch(error => {
                        console.error('分享失败:', error);
                        // 失败时保存图片
                        saveImage(imageUrl);
                    });
                } else {
                    // 不支持Web Share API时，保存图片
                    saveImage(imageUrl);
                }
            }
        }).catch(error => {
            console.error('截图失败:', error);
            // 截图失败时使用文本分享
            shareTextResult();
        });
    } else {
        // 桌面端：使用文本分享
        shareTextResult();
    }
}

// 分享文本结果
function shareTextResult() {
    const resultTitle = document.querySelector('.result-title').textContent;
    const caption = document.querySelector('.result-caption').textContent;
    const text = `${resultTitle}\n${caption}`;

    if (navigator.share) {
        navigator.share({
            title: 'SGTI 傻狗测试结果',
            text: text,
            url: window.location.href
        });
    } else {
        // 复制到剪贴板
        navigator.clipboard.writeText(text).then(() => {
            alert('结果已复制到剪贴板');
        });
    }
}

// 保存图片
function saveImage(imageUrl) {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = 'sgt_result.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(imageUrl);
    alert('结果图片已保存，你可以在相册中找到并分享给朋友');
}

// 初始化
init();