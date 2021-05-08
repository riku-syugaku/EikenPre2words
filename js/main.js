
const question = document.getElementById('question');
const choice1 = document.getElementById('choice1');

const btn = document.getElementById('btn');
const result = document.getElementById('result');
const scoreLabel = document.querySelector('#result > p')
const item1 = document.createElement('li');
const item2 = document.createElement('li');
const item3 = document.createElement('li');
const item4 = document.createElement('li');
const close = document.getElementById('close');
const modal = document.getElementById('modal');
const modal2 = document.getElementById('modal2');
const modal3 = document.getElementById('modal3');
const okay = document.getElementById('okay');
let answer = document.getElementById('answer');
const isCorrected = document.getElementById('isCorrected');


const quizSet = [
  {q:`ability`,c:`能力`},
  {q:`accident`,c:`事故`},
  {q:`activity`,c:`活動`},
  {q:`adult`,c:`大人`},
  {q:`agreement`,c:`契約`},
  {q:`allergy`,c:`アレルギー`},
  {q:`amateur`,c:`アマチュア`},
  {q:`amount`,c:`量`},
  {q:`anniversary`,c:`記念日`},
  {q:`appointment`,c:`任命`},
  {q:`approach`,c:`アプローチ`},
  {q:`aquarium`,c:`水族館`},
  {q:`argument`,c:`口論、論争`},
  {q:`article`,c:`記事`},
  {q:`assistant`,c:`アシスタント`},
  {q:`atmosphere`,c:`雰囲気`},
  {q:`attention`,c:`注意`},
  {q:`audience`,c:`聴衆`},
  {q:`author`,c:`著者、作者`},
  {q:`average`,c:`平均`},
  {q:`behavior`,c:`ふるまい、行動`},
  {q:`capital`,c:`首都、資本`},
  {q:`cash`,c:`現金`},
  {q:`castle`,c:`城`},
  {q:`cause`,c:`原因`},
  {q:`celebration`,c:`お祝い`},
  {q:`ceremony`,c:`儀式`},
  {q:`channel`,c:`チャネル`},
  {q:`charm`,c:`魅力`},
  {q:`chemistry`,c:`化学`},
  {q:`childhood`,c:`子供時代`},
  {q:`choice`,c:`選択`},
  {q:`claim`,c:`主張、要求`},
  {q:`climate`,c:`気候`},
  {q:`clothes`,c:`衣服`},
  {q:`coast`,c:`海岸`},
  {q:`condition`,c:`状態`},
  {q:`conference`,c:`会議`},
  {q:`corner`,c:`角、隅`},
  {q:`custom`,c:`習慣、慣習`},
  {q:`data`,c:`データ`},
  {q:`deal`,c:`取り引き`},
  {q:`degree`,c:`程度、温度`},
  {q:`detail`,c:`詳細`},
  {q:`diet`,c:`ダイエット`},
  {q:`direction`,c:`方向`},
  {q:`director`,c:`ディレクター、監督`},
  {q:`discovery`,c:`発見`},
  {q:`disease`,c:`病気`},
  {q:`distance`,c:`距離`},
  {q:`dormitory`,c:`寮`},
  {q:`edge`,c:`縁、刃`},
  {q:`effect`,c:`効果、影響`},
  {q:`electricity`,c:`電気`},
  {q:`emergency`,c:`緊急事態`},
  {q:`emotion`,c:`感情`},
  {q:`employee`,c:`従業員`},
  {q:`energy`,c:`エネルギー`},
  {q:`engine`,c:`エンジン`},
  {q:`entertainment`,c:`娯楽`},
  {q:`entrance`,c:`入口`},
  {q:`equipment`,c:`設備、装置`},
  {q:`examination`,c:`試験`},
  {q:`excuse`,c:`言い訳`},
  {q:`exercise`,c:`運動`},
  {q:`exhibition`,c:`展覧会`},
  {q:`experience`,c:`経験`},
  {q:`experiment`,c:`実験`},
  {q:`factory`,c:`工場`},
  {q:`faith`,c:`信仰`},
  {q:`fashion`,c:`ファッション`},
  {q:`figure`,c:`形、数字`},
  {q:`frame`,c:`額縁`},
  {q:`freedom`,c:`自由`},
  {q:`function`,c:`機能`},
  {q:`garbage`,c:`生ゴミ`},
  {q:`graduation`,c:`卒業`},
  {q:`habit`,c:`習慣`},
  {q:`harmony`,c:`調和`},
  {q:`harvest`,c:`収穫`},
  {q:`height`,c:`高さ`},
  {q:`housework`,c:`家事`},
  {q:`idea`,c:`考え`},
  {q:`imagination`,c:`想像力`},
  {q:`importance`,c:`重要性`},
  {q:`industry`,c:`産業、工業`},
  {q:`information`,c:`情報`},
  {q:`insect`,c:`昆虫`},
  {q:`instruction`,c:`指示、訓練`},
  {q:`instrument`,c:`楽器`},
  {q:`interest`,c:`興味`},
  {q:`interview`,c:`インタビュー`},
  {q:`introduction`,c:`導入、紹介`},
  {q:`issue`,c:`問題、発行`},
  {q:`journey`,c:`旅行`},
  {q:`knowledge`,c:`知識`},
  {q:`lawyer`,c:`弁護士`},
  {q:`lecture`,c:`講義`},
  {q:`license`,c:`免許`},
  {q:`limit`,c:`限界`},
  {q:`literature`,c:`文学`},
  {q:`location`,c:`地域`},
  {q:`majority`,c:`場所、位置`},
  {q:`manager`,c:`支配人、管理者`},
  {q:`manual`,c:`説明書`},
  {q:`match`,c:`試合`},
  {q:`material`,c:`材料`},
  {q:`meaning`,c:`意味`},
  {q:`memory`,c:`思い出`},
  {q:`mess`,c:`散らかった状態`},
  {q:`method`,c:`方法`},
  {q:`model`,c:`モデル`},
  {q:`moment`,c:`瞬間`},
  {q:`muscle`,c:`筋肉`},
  {q:`nationality`,c:`国籍`},
  {q:`nature`,c:`自然`},
  {q:`necessity`,c:`必要性`},
  {q:`network`,c:`ネットワーク`},
  {q:`noise`,c:`騒音`},
  {q:`objective`,c:`目的`},
  {q:`officer`,c:`警官、役人`},
  {q:`operation`,c:`操作`},
  {q:`opinion`,c:`意見`},
  {q:`organization`,c:`組織`},
  {q:`origin`,c:`起源`},
  {q:`passenger`,c:`乗客`},
  {q:`patient`,c:`患者`},
  {q:`permission`,c:`許可`},
  {q:`planet`,c:`惑星`},
  {q:`policy`,c:`政策、方針`},
  {q:`pollution`,c:`汚染`},
  {q:`popularity`,c:`人気`},
  {q:`population`,c:`人口`},
  {q:`position`,c:`位置、地位`},
  {q:`praise`,c:`称賛`},
  {q:`pressure`,c:`圧力`},
  {q:`principal`,c:`校長`},
  {q:`privacy`,c:`プライバシー`},
  {q:`prize`,c:`賞`},
  {q:`process`,c:`過程、製法`},
  {q:`product`,c:`製品`},
  {q:`professor`,c:`教授`},
  {q:`project`,c:`事業、計画`},
  {q:`purpose`,c:`目的`},
  {q:`quality`,c:`品質`},
  {q:`reaction`,c:`反応`},
  {q:`recipe`,c:`レシピ`},
  {q:`relation`,c:`関係`},
  {q:`research`,c:`研究`},
  {q:`reservation`,c:`予約`},
  {q:`resource`,c:`資源`},
  {q:`response`,c:`応答`},
  {q:`responsibility`,c:`責任`},
  {q:`result`,c:`結果`},
  {q:`role`,c:`役割`},
  {q:`safety`,c:`安全`},
  {q:`sample`,c:`サンプル`},
  {q:`scene`,c:`場面、眺め`},
  {q:`security`,c:`警備`},
  {q:`selection`,c:`選択`},
  {q:`sense`,c:`感覚`},
  {q:`sentence`,c:`文`},
  {q:`shape`,c:`形、形状`},
  {q:`shortage`,c:`不足`},
  {q:`signal`,c:`信号`},
  {q:`silence`,c:`沈黙`},
  {q:`spirit`,c:`精神、霊`},
  {q:`standard`,c:`標準`},
  {q:`statement`,c:`声明`},
  {q:`statue`,c:`像`},
  {q:`strength`,c:`力、強さ`},
  {q:`success`,c:`成功`},
  {q:`surface`,c:`表面`},
  {q:`symbol`,c:`シンボル`},
  {q:`technology`,c:`科学技術`},
  {q:`temperature`,c:`温度`},
  {q:`tourist`,c:`観光客`},
  {q:`traffic`,c:`交通`},
  {q:`training`,c:`訓練`},
  {q:`trick`,c:`手品`},
  {q:`truth`,c:`真実`},
  {q:`variety`,c:`多様`},
  {q:`victim`,c:`犠牲`},
  {q:`victory`,c:`勝利`},
  {q:`view`,c:`眺め`},
  {q:`voyage`,c:`航海`},
  {q:`waste`,c:`無駄`},
  {q:`wave`,c:`波`},
  {q:`width`,c:`幅`},
  {q:`ability`,c:`能力`},
]
const WrongAns = [
  `能力`,
  `事故`,
  `活動`,
  `大人`,
  `契約`,
  `アレルギー`,
  `アマチュア`,
  `量`,
  `記念日`,
  `任命`,
  `アプローチ`,
  `水族館`,
  `口論、論争`,
  `記事`,
  `アシスタント`,
  `雰囲気`,
  `注意`,
  `聴衆`,
  `著者、作者`,
  `平均`,
  `ふるまい、行動`,
  `首都、資本`,
  `現金`,
  `城`,
  `原因`,
  `お祝い`,
  `儀式`,
  `チャネル`,
  `魅力`,
  `化学`,
  `子供時代`,
  `選択`,
  `主張、要求`,
  `気候`,
  `衣服`,
  `海岸`,
  `状態`,
  `会議`,
  `角、隅`,
  `習慣、慣習`,
  `データ`,
  `取り引き`,
  `程度、温度`,
  `詳細`,
  `ダイエット`,
  `方向`,
  `ディレクター、監督`,
  `発見`,
  `病気`,
  `距離`,
  `寮`,
  `縁、刃`,
  `効果、影響`,
  `電気`,
  `緊急事態`,
  `感情`,
  `従業員`,
  `エネルギー`,
  `エンジン`,
  `娯楽`,
  `入口`,
  `設備、装置`,
  `試験`,
  `言い訳`,
  `運動`,
  `展覧会`,
  `経験`,
  `実験`,
  `工場`,
  `信仰`,
  `ファッション`,
  `形、数字`,
  `額縁`,
  `自由`,
  `機能`,
  `生ゴミ`,
  `卒業`,
  `習慣`,
  `調和`,
  `収穫`,
  `高さ`,
  `家事`,
  `考え`,
  `想像力`,
  `重要性`,
  `産業、工業`,
  `情報`,
  `昆虫`,
  `指示、訓練`,
  `楽器`,
  `興味`,
  `インタビュー`,
  `導入、紹介`,
  `問題、発行`,
  `旅行`,
  `知識`,
  `弁護士`,
  `講義`,
  `免許`,
  `限界`,
  `文学`,
  `地域`,
  `場所、位置`,
  `支配人、管理者`,
  `説明書`,
  `試合`,
  `材料`,
  `意味`,
  `思い出`,
  `散らかった状態`,
  `方法`,
  `モデル`,
  `瞬間`,
  `筋肉`,
  `国籍`,
  `自然`,
  `必要性`,
  `ネットワーク`,
  `騒音`,
  `目的`,
  `警官、役人`,
  `操作`,
  `意見`,
  `組織`,
  `起源`,
  `乗客`,
  `患者`,
  `許可`,
  `惑星`,
  `政策、方針`,
  `汚染`,
  `人気`,
  `人口`,
  `位置、地位`,
  `称賛`,
  `圧力`,
  `校長`,
  `プライバシー`,
  `賞`,
  `過程、製法`,
  `製品`,
  `教授`,
  `事業、計画`,
  `目的`,
  `品質`,
  `反応`,
  `レシピ`,
  `関係`,
  `研究`,
  `予約`,
  `資源`,
  `応答`,
  `責任`,
  `結果`,
  `役割`,
  `安全`,
  `サンプル`,
  `場面、眺め`,
  `警備`,
  `選択`,
  `感覚`,
  `文`,
  `形、形状`,
  `不足`,
  `信号`,
  `沈黙`,
  `精神、霊`,
  `標準`,
  `声明`,
  `像`,
  `力、強さ`,
  `成功`,
  `表面`,
  `シンボル`,
  `科学技術`,
  `温度`,
  `観光客`,
  `交通`,
  `訓練`,
  `手品`,
  `真実`,
  `多様`,
  `犠牲`,
  `勝利`,
  `眺め`,
  `航海`,
  `無駄`,
  `波`,
  `幅`,
  `能力`,

]
const QuizVerb = [
  {q:`accept`,c:`受け入れる`},
  {q:`access`,c:`近づく`},
  {q:`achieve`,c:`成し遂げる`},
  {q:`admit`,c:`認める`},
  {q:`advertise`,c:`宣伝する`},
  {q:`advise`,c:`アドバイスする`},
  {q:`afford`,c:`与える`},
  {q:`allow`,c:`許す`},
  {q:`announce`,c:`発表する`},
  {q:`apologize`,c:`謝る`},
  {q:`appear`,c:`現れる`},
  {q:`apply`,c:`適用する`},
  {q:`attend`,c:`出席する`},
  {q:`attract`,c:`引き付ける`},
  {q:`avoid`,c:`避ける`},
  {q:`bake`,c:`焼く`},
  {q:`balance`,c:`バランスを取る`},
  {q:`bark`,c:`吠える`},
  {q:`behave`,c:`振る舞う`},
  {q:`bite`,c:`かむ`},
  {q:`block`,c:`邪魔する`},
  {q:`blow`,c:`（風が）吹く`},
  {q:`borrow`,c:`借りる`},
  {q:`breathe`,c:`呼吸する`},
  {q:`burn`,c:`燃やす`},
  {q:`change`,c:`変える`},
  {q:`chase`,c:`追跡する`},
  {q:`cheer`,c:`歓声をあげる`},
  {q:`climb`,c:`登る`},
  {q:`collect`,c:`集める`},
  {q:`communicate`,c:`意思疎通をする`},
  {q:`compete`,c:`競争する`},
  {q:`complain`,c:`文句を言う`},
  {q:`connect`,c:`接続する`},
  {q:`contain`,c:`含む`},
  {q:`control`,c:`支配する`},
  {q:`cost`,c:`（費用）がかかる`},
  {q:`count`,c:`数える`},
  {q:`create`,c:`創造する`},
  {q:`cure`,c:`治す`},
  {q:`damage`,c:`損害を与える`},
  {q:`decorate`,c:`飾る`},
  {q:`decrease`,c:`減少する`},
  {q:`delay`,c:`遅らせる`},
  {q:`deliver`,c:`配達する`},
  {q:`deny`,c:`否定する`},
  {q:`design`,c:`設計する`},
  {q:`develop`,c:`発達させる`},
  {q:`dig`,c:`掘る`},
  {q:`disappear`,c:`姿を消す`},
  {q:`discuss`,c:`議論する`},
  {q:`display`,c:`表示する`},
  {q:`divide`,c:`分割する`},
  {q:`draw`,c:`描く、引く`},
  {q:`earn`,c:`得る、稼ぐ`},
  {q:`educate`,c:`教育する`},
  {q:`embarrass`,c:`困らせる`},
  {q:`employ`,c:`雇う`},
  {q:`enter`,c:`入る`},
  {q:`entertain`,c:`楽しませる`},
  {q:`escape`,c:`逃れる`},
  {q:`exchange`,c:`両替する`},
  {q:`expand`,c:`拡大する`},
  {q:`expect`,c:`期待する`},
  {q:`explain`,c:`説明する`},
  {q:`explore`,c:`調査する`},
  {q:`fail`,c:`失敗する`},
  {q:`feed`,c:`食べ物を与える`},
  {q:`fix`,c:`修理する`},
  {q:`float`,c:`浮かぶ`},
  {q:`flow`,c:`流れる`},
  {q:`fold`,c:`折る`},
  {q:`follow`,c:`従う、ついていく`},
  {q:`forgive`,c:`許す`},
  {q:`freeze`,c:`凍る`},
  {q:`fulfill`,c:`果たす`},
  {q:`gather`,c:`集める`},
  {q:`handle`,c:`扱う`},
  {q:`hide`,c:`隠す`},
  {q:`hire`,c:`雇う`},
  {q:`imagine`,c:`想像する`},
  {q:`import`,c:`輸入する`},
  {q:`impress`,c:`印象づける`},
  {q:`improve`,c:`改善する`},
  {q:`include`,c:`含める`},
  {q:`increase`,c:`増加する`},
  {q:`influence`,c:`影響を与える`},
  {q:`insist`,c:`主張する`},
  {q:`introduce`,c:`紹介する`},
  {q:`invent`,c:`発明する`},
  {q:`join`,c:`加わる`},
  {q:`judge`,c:`判断する`},
  {q:`lead`,c:`導く`},
  {q:`lift`,c:`持ち上げる`},
  {q:`link`,c:`つなぐ`},
  {q:`locate`,c:`見つける`},
  {q:`lock`,c:`鍵をかける`},
  {q:`mean`,c:`意味する`},
  {q:`measure`,c:`測定する`},
  {q:`melt`,c:`溶ける`},
  {q:`memorize`,c:`暗記する`},
  {q:`miss`,c:`し損なう`},
  {q:`move`,c:`動く`},
  {q:`notice`,c:`気付く`},
  {q:`obey`,c:`従う`},
  {q:`occur`,c:`起こる`},
  {q:`order`,c:`注文する`},
  {q:`organize`,c:`組織する`},
  {q:`pack`,c:`詰め込む`},
  {q:`paint`,c:`ペンキを塗る`},
  {q:`pause`,c:`休止する`},
  {q:`pay`,c:`支払う`},
  {q:`pick`,c:`摘む`},
  {q:`plant`,c:`植える`},
  {q:`polish`,c:`磨く`},
  {q:`pour`,c:`注ぐ`},
  {q:`pray`,c:`祈る`},
  {q:`prepare`,c:`準備する`},
  {q:`press`,c:`押す`},
  {q:`pretend`,c:`偽る、ふりをする`},
  {q:`prevent`,c:`防ぐ`},
  {q:`print`,c:`印刷する`},
  {q:`produce`,c:`生産する`},
  {q:`promise`,c:`約束する`},
  {q:`pronounce`,c:`発音する`},
  {q:`protect`,c:`保護する`},
  {q:`prove`,c:`証明する`},
  {q:`provide`,c:`供給する`},
  {q:`publish`,c:`出版する`},
  {q:`punish`,c:`罰する`},
  {q:`raise`,c:`上げる`},
  {q:`recognize`,c:`認める`},
  {q:`recommend`,c:`推薦する`},
  {q:`record`,c:`記録する`},
  {q:`recover`,c:`回復する`},
  {q:`recycle`,c:`再利用する`},
  {q:`reduce`,c:`減らす`},
  {q:`refer`,c:`参照する、言及する`},
  {q:`reject`,c:`拒絶する`},
  {q:`rely`,c:`頼る`},
  {q:`remind`,c:`思い出させる`},
  {q:`rent`,c:`貸す、借りる`},
  {q:`repair`,c:`修復する`},
  {q:`repeat`,c:`繰り返す`},
  {q:`replace`,c:`置き換える`},
  {q:`reply`,c:`応答する`},
  {q:`request`,c:`リクエストする`},
  {q:`require`,c:`必要とする`},
  {q:`rescue`,c:`救助する`},
  {q:`respond`,c:`応答する`},
  {q:`retire`,c:`引退する`},
  {q:`save`,c:`節約する`},
  {q:`scream`,c:`叫び声を上げる`},
  {q:`separate`,c:`分ける`},
  {q:`serve`,c:`提供する`},
  {q:`shake`,c:`振る`},
  {q:`share`,c:`共有する`},
  {q:`sign`,c:`符号`},
  {q:`sink`,c:`沈む`},
  {q:`slide`,c:`滑らせる`},
  {q:`slip`,c:`滑る`},
  {q:`solve`,c:`解決する`},
  {q:`spell`,c:`つづる`},
  {q:`spread`,c:`広がる、広げる`},
  {q:`stand`,c:`我慢する`},
  {q:`stick`,c:`くっつく`},
  {q:`stretch`,c:`ストレッチする`},
  {q:`suggest`,c:`提案する`},
  {q:`supply`,c:`供給する`},
  {q:`support`,c:`支持する、支える`},
  {q:`surround`,c:`囲む`},
  {q:`survive`,c:`生き残る`},
  {q:`taste`,c:`味わう`},
  {q:`throw`,c:`投げる`},
  {q:`touch`,c:`触れる`},
  {q:`track`,c:`追跡する`},
  {q:`trade`,c:`交換する`},
  {q:`train`,c:`訓練する`},
  {q:`translate`,c:`翻訳する`},
  {q:`treat`,c:`取り扱う、治癒する`},
  {q:`trust`,c:`信頼する`},
  {q:`upset`,c:`動揺する`},
  {q:`warn`,c:`警告する`},
  {q:`weigh`,c:`重さを量る`},
  {q:`whisper`,c:`ささやく`},
  {q:`widen`,c:`広げる`},
  {q:`wish`,c:`願う`},
  {q:`wonder`,c:`〜かなと思う`},
  {q:`yell`,c:`叫ぶ、怒鳴る`},
  {q:`smile`,c:`微笑む`},

]
const WrongVerb = [
  `受け入れる`,
  `近づく`,
  `成し遂げる`,
  `認める`,
  `宣伝する`,
  `アドバイスする`,
  `与える`,
  `許す`,
  `発表する`,
  `謝る`,
  `現れる`,
  `適用する`,
  `出席する`,
  `引き付ける`,
  `避ける`,
  `焼く`,
  `バランスを取る`,
  `吠える`,
  `振る舞う`,
  `かむ`,
  `邪魔する`,
  `（風が）吹く`,
  `借りる`,
  `呼吸する`,
  `燃やす`,
  `変える`,
  `追跡する`,
  `歓声をあげる`,
  `登る`,
  `集める`,
  `意思疎通をする`,
  `競争する`,
  `文句を言う`,
  `接続する`,
  `含む`,
  `支配する`,
  `（費用）がかかる`,
  `数える`,
  `創造する`,
  `治す`,
  `損害を与える`,
  `飾る`,
  `減少する`,
  `遅らせる`,
  `配達する`,
  `否定する`,
  `設計する`,
  `発達させる`,
  `掘る`,
  `姿を消す`,
  `議論する`,
  `表示する`,
  `分割する`,
  `描く、引く`,
  `得る、稼ぐ`,
  `教育する`,
  `困らせる`,
  `雇う`,
  `入る`,
  `楽しませる`,
  `逃れる`,
  `両替する`,
  `拡大する`,
  `期待する`,
  `説明する`,
  `調査する`,
  `失敗する`,
  `食べ物を与える`,
  `修理する`,
  `浮かぶ`,
  `流れる`,
  `折る`,
  `従う、ついていく`,
  `許す`,
  `凍る`,
  `果たす`,
  `集める`,
  `扱う`,
  `隠す`,
  `雇う`,
  `想像する`,
  `輸入する`,
  `印象づける`,
  `改善する`,
  `含める`,
  `増加する`,
  `影響を与える`,
  `主張する`,
  `紹介する`,
  `発明する`,
  `加わる`,
  `判断する`,
  `導く`,
  `持ち上げる`,
  `つなぐ`,
  `見つける`,
  `鍵をかける`,
  `意味する`,
  `測定する`,
  `溶ける`,
  `暗記する`,
  `し損なう`,
  `動く`,
  `気付く`,
  `従う`,
  `起こる`,
  `注文する`,
  `組織する`,
  `詰め込む`,
  `ペンキを塗る`,
  `休止する`,
  `支払う`,
  `摘む`,
  `植える`,
  `磨く`,
  `注ぐ`,
  `祈る`,
  `準備する`,
  `押す`,
  `偽る、ふりをする`,
  `防ぐ`,
  `印刷する`,
  `生産する`,
  `約束する`,
  `発音する`,
  `保護する`,
  `証明する`,
  `供給する`,
  `出版する`,
  `罰する`,
  `上げる`,
  `認める`,
  `推薦する`,
  `記録する`,
  `回復する`,
  `再利用する`,
  `減らす`,
  `参照する、言及する`,
  `拒絶する`,
  `頼る`,
  `思い出させる`,
  `貸す、借りる`,
  `修復する`,
  `繰り返す`,
  `置き換える`,
  `応答する`,
  `リクエストする`,
  `必要とする`,
  `救助する`,
  `応答する`,
  `引退する`,
  `節約する`,
  `叫び声を上げる`,
  `分ける`,
  `提供する`,
  `振る`,
  `共有する`,
  `符号`,
  `沈む`,
  `滑らせる`,
  `滑る`,
  `解決する`,
  `つづる`,
  `広がる、広げる`,
  `我慢する`,
  `くっつく`,
  `ストレッチする`,
  `提案する`,
  `供給する`,
  `支持する、支える`,
  `囲む`,
  `生き残る`,
  `味わう`,
  `投げる`,
  `触れる`,
  `追跡する`,
  `交換する`,
  `訓練する`,
  `翻訳する`,
  `取り扱う、治癒する`,
  `信頼する`,
  `動揺する`,
  `警告する`,
  `重さを量る`,
  `ささやく`,
  `広げる`,
  `願う`,
  `〜かなと思う`,
  `叫ぶ、怒鳴る`,
  `微笑む`,
]
const QuizElse =[
  {q:`additional`,c:`追加の`},
  {q:`available`,c:`入手できる`},
  {q:`awful`,c:`ひどい`},
  {q:`bright`,c:`明るい`},
  {q:`calm`,c:`落ち着いた`},
  {q:`careless`,c:`不注意な`},
  {q:`comfortable`,c:`快適な`},
  {q:`complete`,c:`完全な`},
  {q:`confident`,c:`自信のある`},
  {q:`correct`,c:`正しい`},
  {q:`delicate`,c:`繊細な`},
  {q:`delighted`,c:`喜んで`},
  {q:`disappointed`,c:`失望した`},
  {q:`excellent`,c:`優れた`},
  {q:`extra`,c:`追加の`},
  {q:`fantastic`,c:`素晴らしい`},
  {q:`flat`,c:`平らな`},
  {q:`formal`,c:`正式の`},
  {q:`frightened`,c:`おびえた`},
  {q:`global`,c:`地球全体の`},
  {q:`handsome`,c:`ハンサムな`},
  {q:`harmful`,c:`有害な`},
  {q:`helpful`,c:`有用な`},
  {q:`honest`,c:`正直な`},
  {q:`huge`,c:`巨大な`},
  {q:`intelligent`,c:`知能の高い`},
  {q:`legal`,c:`法律上の、合法な`},
  {q:`loud`,c:`大声の`},
  {q:`modern`,c:`現代の`},
  {q:`narrow`,c:`狭い`},
  {q:`natural`,c:`自然の`},
  {q:`nervous`,c:`緊張して`},
  {q:`noisy`,c:`騒々しい`},
  {q:`particular`,c:`特定の`},
  {q:`personal`,c:`個人的な`},
  {q:`plain`,c:`あきらかな`},
  {q:`polite`,c:`礼儀正しい`},
  {q:`private`,c:`個人的な`},
  {q:`proud`,c:`誇りに思って`},
  {q:`regular`,c:`通常の`},
  {q:`safe`,c:`安全な`},
  {q:`sharp`,c:`鋭い`},
  {q:`silly`,c:`ばかげた、愚かな`},
  {q:`similar`,c:`類似した`},
  {q:`simple`,c:`単純な`},
  {q:`smooth`,c:`滑らかな`},
  {q:`square`,c:`正方形の`},
  {q:`steady`,c:`着実な`},
  {q:`straight`,c:`まっすぐな`},
  {q:`technical`,c:`専門の`},
  {q:`thin`,c:`薄い、細い、やせた`},
  {q:`tiny`,c:`小さな、ちっぽけな`},
  {q:`tough`,c:`頑丈な`},
  {q:`traditional`,c:`伝統的な`},
  {q:`typical`,c:`典型的な`},
  {q:`usual`,c:`いつもの、普通の`},
  {q:`whole`,c:`全体の`},
  {q:`wild`,c:`野生の`},
  {q:`actually`,c:`実際に`},
  {q:`anyway`,c:`とにかく`},
  {q:`apparently`,c:`明らかに`},
  {q:`besides`,c:`さらに`},
  {q:`cheerfully`,c:`快活に`},
  {q:`clearly`,c:`はっきり`},
  {q:`directly`,c:`直接に`},
  {q:`equally`,c:`平等に、等しく`},
  {q:`especially`,c:`特に`},
  {q:`eventually`,c:`結局`},
  {q:`exactly`,c:`正確に、まさに`},
  {q:`fairly`,c:`公正に`},
  {q:`finally`,c:`ついに`},
  {q:`forever`,c:`永久に`},
  {q:`fortunately`,c:`幸運なことに`},
  {q:`frankly`,c:`正直に`},
  {q:`further`,c:`さらに、もっと遠くに`},
  {q:`generally`,c:`一般的な`},
  {q:`gently`,c:`優しく`},
  {q:`gradually`,c:`徐々に`},
  {q:`hardly`,c:`ほとんど〜ない`},
  {q:`lately`,c:`近頃、最近`},
  {q:`nearly`,c:`ほとんど`},
  {q:`nowadays`,c:`今日では、近頃は`},
  {q:`otherwise`,c:`さもないと`},
  {q:`perhaps`,c:`多分`},
  {q:`pleasantly`,c:`愉快に`},
  {q:`quite`,c:`かなり、とても`},
  {q:`rapidly`,c:`すばやく`},
  {q:`rather`,c:`かなり`},
  {q:`secretly`,c:`秘密に`},
  {q:`seldom`,c:`めったに〜しない`},
  {q:`somewhere`,c:`どこか`},
  {q:`totally`,c:`全く、完全に`},
  {q:`unfortunately`,c:`不運にも`},
  {q:`although`,c:`であるが`},
  {q:`once`,c:`一度`},
  {q:`while`,c:`している間に`},
  {q:`against`,c:`に対して`},
  {q:`below`,c:`〜より下に`},
  {q:`except`,c:`〜を除いて`},
  {q:`additional`,c:`追加の`},
]
const WrongElse =[
  `追加の`,
  `入手できる`,
  `ひどい`,
  `明るい`,
  `落ち着いた`,
  `不注意な`,
  `快適な`,
  `完全な`,
  `自信のある`,
  `正しい`,
  `繊細な`,
  `喜んで`,
  `失望した`,
  `優れた`,
  `追加の`,
  `素晴らしい`,
  `平らな`,
  `正式の`,
  `おびえた`,
  `地球全体の`,
  `ハンサムな`,
  `有害な`,
  `有用な`,
  `正直な`,
  `巨大な`,
  `知能の高い`,
  `法律上の、合法な`,
  `大声の`,
  `現代の`,
  `狭い`,
  `自然の`,
  `緊張して`,
  `騒々しい`,
  `特定の`,
  `個人的な`,
  `あきらかな`,
  `礼儀正しい`,
  `個人的な`,
  `誇りに思って`,
  `通常の`,
  `安全な`,
  `鋭い`,
  `ばかげた、愚かな`,
  `類似した`,
  `単純な`,
  `滑らかな`,
  `正方形の`,
  `着実な`,
  `まっすぐな`,
  `専門の`,
  `薄い、細い、やせた`,
  `小さな、ちっぽけな`,
  `頑丈な`,
  `伝統的な`,
  `典型的な`,
  `いつもの、普通の`,
  `全体の`,
  `野生の`,
  `実際に`,
  `とにかく`,
  `明らかに`,
  `さらに`,
  `快活に`,
  `はっきり`,
  `直接に`,
  `平等に、等しく`,
  `特に`,
  `結局`,
  `正確に、まさに`,
  `公正に`,
  `ついに`,
  `永久に`,
  `幸運なことに`,
  `正直に`,
  `さらに、もっと遠くに`,
  `一般的な`,
  `優しく`,
  `徐々に`,
  `ほとんど〜ない`,
  `近頃、最近`,
  `ほとんど`,
  `今日では、近頃は`,
  `さもないと`,
  `多分`,
  `愉快に`,
  `かなり、とても`,
  `すばやく`,
  `かなり`,
  `秘密に`,
  `めったに〜しない`,
  `どこか`,
  `全く、完全に`,
  `不運にも`,
  `であるが`,
  `一度`,
  `している間に`,
  `に対して`,
  `〜より下に`,
  `〜を除いて`,
  `追加の`,

]
const QuizIdiom =[
  {q:`A as well as B`,c:`BはもちろんAも`},
  {q:`a couple of`,c:`2,3の`},
  {q:`a number of `,c:`たくさんの〜`},
  {q:`according to `,c:`〜によると`},
  {q:`all the way`,c:`ずっと`},
  {q:` along with `,c:`〜と一緒に`},
  {q:`as  as possible`,c:`できるだけ〜`},
  {q:`as a result of `,c:`〜の結果として、`},
  {q:`as if [though] ...`,c:`まるで〜かのように`},
  {q:`as well at first`,c:`はじめは`},
  {q:`at (the) sight of `,c:`〜を見て`},
  {q:`be about to do`,c:`まさに〜するところである`},
  {q:`be aware of `,c:`〜に気づいている`},
  {q:`be bad [poor] at `,c:`〜が下手である`},
  {q:`be based on `,c:`〜に基づいている`},
  {q:`be crowded with `,c:`〜で混雑する`},
  {q:`be dependent on `,c:`〜に依存する`},
  {q:`be familiar with `,c:`〜に精通していること`},
  {q:`be independent of `,c:`〜から独立して`},
  {q:`be likely to do`,c:`〜しそうである`},
  {q:`be made from `,c:`〜から作られる`},
  {q:`be made up of `,c:`〜から成る`},
  {q:`be popular with [among] `,c:`〜に人気がある`},
  {q:`be responsible for `,c:`〜に責任がある`},
  {q:`be satisfied with `,c:`〜に満足する`},
  {q:`be similar to `,c:`〜に似ている`},
  {q:`be sold out`,c:`売り切れる`},
  {q:`be supposed to do`,c:`〜することになっている`},
  {q:`be sure to do`,c:`必ず〜する`},
  {q:`be tired of `,c:`〜に飽きている`},
  {q:`be used to doing`,c:`〜するのに慣れている`},
  {q:`be worth doing`,c:`〜する価値がある`},
  {q:`because of `,c:`〜の理由で`},
  {q:`believe in `,c:`〜の存在を信じる`},
  {q:`bring about `,c:`〜をもたらする`},
  {q:`by accident [chance]`,c:`偶然に`},
  {q:`by heart`,c:`暗記して`},
  {q:`by mistake`,c:`間違って`},
  {q:`by nature`,c:`生まれつき`},
  {q:`by the end of `,c:`〜の終わりまでに`},
  {q:`can't help doing`,c:`〜せざるを得ない`},
  {q:`carry out `,c:`〜を実行する`},
  {q:`catch up with `,c:`〜に追いつく`},
  {q:`check in`,c:`チェックインする`},
  {q:`cheer A up`,c:`Aを元気づける`},
  {q:`come across `,c:`〜をふと見つける`},
  {q:`come true`,c:`実現する`},
  {q:`come up with `,c:`〜を思い付く`},
  {q:`dress up`,c:`正装する`},
  {q:`drop by`,c:`立ち寄る`},
  {q:`due to `,c:`〜が原因で`},
  {q:`each other`,c:`お互い`},
  {q:`either A or B`,c:`AまたはBのどちらか`},
  {q:`enough to do`,c:`行うのに十分な`},
  {q:`even though ...`,c:`たとえ …であっても`},
  {q:`(every) now and then`,c:`ときどき`},
  {q:`every other month [day,year,week]`,c:`１ヶ月[日、年、週]おきに`},
  {q:`exchange A for B`,c:`AとBを両替する`},
  {q:`fall asleep`,c:`眠りに落ちる`},
  {q:`far from `,c:`遠くから`},
  {q:`fill out [in] `,c:`〜に書き込む`},
  {q:`fill up `,c:`〜を満たす`},
  {q:`for a while`,c:`しばらくの間`},
  {q:`for free`,c:`無料で`},
  {q:`for fun`,c:`遊びで`},
  {q:`for instance`,c:`例えば`},
  {q:`get A back from B`,c:`BからAを取り戻す`},
  {q:`get along [on] with `,c:`〜とうまくやっていく`},
  {q:`get around`,c:`歩き回る、動き回る`},
  {q:`get away`,c:`離れる`},
  {q:`get in touch with `,c:`〜と連絡を取る`},
  {q:`get married to `,c:`〜と結婚する`},
  {q:`get rid of `,c:`〜を取り除く`},
  {q:`get together`,c:`集まる`},
  {q:`give A a ride`,c:`Aに車に乗せる`},
  {q:`go against `,c:`〜に反する`},
  {q:`go ahead`,c:`先に行く`},
  {q:`go through `,c:`経験する`},
  {q:`go wrong`,c:`うまくいかない、故障する`},
  {q:`had better do`,c:`〜したほうがいい`},
  {q:`hand in `,c:`〜を提出する`},
  {q:`have A in common with B`,c:`Bと共通してAを持つ`},
  {q:`hear from `,c:`〜から便りをもらう`},
  {q:`in addition to `,c:`〜に加えて`},
  {q:`in advance`,c:`あらかじめ`},
  {q:`in any case`,c:`とにかく`},
  {q:`in fact`,c:`実際は`},
  {q:`in order to do`,c:`〜するために`},
  {q:`in particular`,c:`特に`},
  {q:`in place of `,c:`〜の代わりに`},
  {q:`in return`,c:`お返しに`},
  {q:`in spite of `,c:`〜にもかかわらず、`},
  {q:`in that case`,c:`その場合には`},
  {q:`in the past`,c:`これまで`},
  {q:`in time`,c:`間に合って`},
  {q:`instead of `,c:`〜の代わりに`},
  {q:`intend to do`,c:`〜するつもりである`},
  {q:`keep (on) doing`,c:`〜し続ける`},
  {q:`keep up with `,c:`〜に遅れずについていく`},
  {q:`keep A in mind`,c:`Aを心に留めておく`},
  {q:`little by little`,c:`少しずつ`},
  {q:`look after `,c:`〜の世話をする`},
  {q:`look forward to `,c:`〜を楽しみに待つ`},
  {q:`look up `,c:`〜を調べる`},
  {q:`lose one's way`,c:`道に迷う`},
  {q:`major in `,c:`〜を専攻する`},
  {q:`make a decision`,c:`決定する`},
  {q:`make a mistake`,c:`間違える`},
  {q:`make (a) noise`,c:`騒音を立てる`},
  {q:`make a reservation`,c:`予約する`},
  {q:`make a speech`,c:`スピーチをする`},
  {q:`make an appointment with `,c:`〜の予約をする`},
  {q:`make an effort`,c:`努力する`},
  {q:`make friends with `,c:`〜と友達になる`},
  {q:`make fun of `,c:`〜をからかう`},
  {q:`make one's bed`,c:`ベッドを整える`},
  {q:`make a promise`,c:`約束する`},
  {q:`make sure (that) ...`,c:`…であることを確実にする`},
  {q:`make up one's mind to do`,c:`〜しようと決心する`},
  {q:`name A after B`,c:`BにちなんでAを名付ける`},
  {q:`neither A nor B`,c:`AでもBでもない`},
  {q:`next to `,c:`〜の隣に`},
  {q:`no longer `,c:`もはや〜ではない`},
  {q:`not so much A as B`,c:`AというよりはむしろB`},
  {q:`on board `,c:`〜に乗って`},
  {q:`on business`,c:`仕事で`},
  {q:`on foot`,c:`徒歩で`},
  {q:`on purpose`,c:`わざと`},
  {q:`on sale`,c:`発売中の`},
  {q:`on (the [an] ) average`,c:`平均して`},
  {q:`on the other hand`,c:`一方では`},
  {q:`on time`,c:`時間通りに`},
  {q:`once in a while`,c:`ときどき`},
  {q:`out of the question`,c:`問題にならない`},
  {q:`pay attention to `,c:`〜に注意を払う`},
  {q:`pick A up`,c:`Aを車で迎えに行く`},
  {q:`pick up `,c:`〜を買い求める`},
  {q:`play an important role [part] in `,c:`〜で重要な役割を演じる`},
  {q:`plenty of `,c:`たくさんの〜`},
  {q:`point out `,c:`〜指摘する`},
  {q:`prefer A to B`,c:`BよりAを好む`},
  {q:`prevent [keep] A from doing`,c:`Aが〜するのを妨げる`},
  {q:`provide A with B`,c:`AにBを供給する`},
  {q:`put A in order`,c:`Aを整理する`},
  {q:`put [write] down `,c:`〜を書き留める`},
  {q:`put off `,c:`〜を延期する`},
  {q:`raise money`,c:`資金を調達する`},
  {q:`rely on `,c:`〜に頼る`},
  {q:`remind A of B`,c:`AにBを思い出させる`},
  {q:`right away`,c:`直ちに`},
  {q:`run after `,c:`〜を追いかける`},
  {q:`run out of `,c:`〜がなくなる`},
  {q:`run over `,c:`〜をひく`},
  {q:`see if ...`,c:`かどうかを確かめる`},
  {q:`slow down`,c:`速度を落とす`},
  {q:`so far`,c:`これまでのところ`},
  {q:`so that A can [will,may] do`,c:`Aが〜できるように`},
  {q:`something is wrong with `,c:`〜はどこか調子が悪い`},
  {q:`sooner or later`,c:`遅かれ早かれ`},
  {q:`sound like `,c:`〜のように聞こえる`},
  {q:`spend A doing`,c:`Aを〜して過ごする`},
  {q:`stand by `,c:`〜を支援する`},
  {q:`stand for `,c:`〜を表す`},
  {q:`stay in bed`,c:`寝ている`},
  {q:`stay out`,c:`外出している`},
  {q:`succeed in `,c:`〜に成功する`},
  {q:`such as `,c:`〜のような`},
  {q:`take A back to B`,c:`BにAを返品する`},
  {q:`take a look at `,c:`〜を見る`},
  {q:`take a rest`,c:`休憩する`},
  {q:`take a seat`,c:`座る`},
  {q:`take after `,c:`〜に似ている`},
  {q:`take care of `,c:`〜の世話をする`},
  {q:`take off`,c:`離陸する`},
  {q:`take over `,c:`〜引き継ぐ`},
  {q:`take part in `,c:`〜に参加する`},
  {q:`take place`,c:`行われる`},
  {q:`tell a lie`,c:`嘘をつく`},
  {q:`tend to do`,c:`〜をする傾向がある`},
  {q:`thanks to `,c:`〜のおかげで`},
  {q:`That's why ...`,c:`そういうわけで`},
  {q:`the instant (that) ...`,c:`するとすぐに`},
  {q:`the way ...`,c:`やり方`},
  {q:`There is no doubt (that) ...`,c:`〜は間違いない`},
  {q:`these days`,c:`この頃`},
  {q:`This is because ...`,c:`これは〜だからである`},
  {q:`to begin with`,c:`まず第一に`},
  {q:`together with `,c:`〜に加えて`},
  {q:`try one's best`,c:`自分のベストを尽くす`},
  {q:`turn on `,c:`〜のスイッチを入れる`},
  {q:`turn out to be `,c:`〜であることがわかる`},
  {q:`used to do`,c:`以前は〜であった`},
  {q:`when it comes to `,c:`〜のこととなると`},
  {q:`whether  or not`,c:`〜であろうとなかろうと`},
  {q:`without fail`,c:`必ず、間違いなく`},
  {q:`work for `,c:`〜で失敗する作業なし`},
  {q:`A as well as B`,c:`BはもちろんAも`},
  {q:`a couple of`,c:`2,3の`},
  {q:`a number of `,c:`たくさんの〜`},
  {q:`according to `,c:`〜によると`},

  
]
const WrongIdiom =[
  `BはもちろんAも`,
  `2,3の`,
  `たくさんの〜`,
  `〜によると`,
  `ずっと`,
  `〜と一緒に`,
  `できるだけ〜`,
  `〜の結果として、`,
  `まるで〜かのように`,
  `はじめは`,
  `〜を見て`,
  `まさに〜するところである`,
  `〜に気づいている`,
  `〜が下手である`,
  `〜に基づいている`,
  `〜で混雑する`,
  `〜に依存する`,
  `〜に精通していること`,
  `〜から独立して`,
  `〜しそうである`,
  `〜から作られる`,
  `〜から成る`,
  `〜に人気がある`,
  `〜に責任がある`,
  `〜に満足する`,
  `〜に似ている`,
  `売り切れる`,
  `〜することになっている`,
  `必ず〜する`,
  `〜に飽きている`,
  `〜するのに慣れている`,
  `〜する価値がある`,
  `〜の理由で`,
  `〜の存在を信じる`,
  `〜をもたらする`,
  `偶然に`,
  `暗記して`,
  `間違って`,
  `生まれつき`,
  `〜の終わりまでに`,
  `〜せざるを得ない`,
  `〜を実行する`,
  `〜に追いつく`,
  `チェックインする`,
  `Aを元気づける`,
  `〜をふと見つける`,
  `実現する`,
  `〜を思い付く`,
  `正装する`,
  `立ち寄る`,
  `〜が原因で`,
  `お互い`,
  `AまたはBのどちらか`,
  `行うのに十分な`,
  `たとえ …であっても`,
  `ときどき`,
  `１ヶ月[日、年、週]おきに`,
  `AとBを両替する`,
  `眠りに落ちる`,
  `遠くから`,
  `〜に書き込む`,
  `〜を満たす`,
  `しばらくの間`,
  `無料で`,
  `遊びで`,
  `例えば`,
  `BからAを取り戻す`,
  `〜とうまくやっていく`,
  `歩き回る、動き回る`,
  `離れる`,
  `〜と連絡を取る`,
  `〜と結婚する`,
  `〜を取り除く`,
  `集まる`,
  `Aに車に乗せる`,
  `〜に反する`,
  `先に行く`,
  `経験する`,
  `うまくいかない、故障する`,
  `〜したほうがいい`,
  `〜を提出する`,
  `Bと共通してAを持つ`,
  `〜から便りをもらう`,
  `〜に加えて`,
  `あらかじめ`,
  `とにかく`,
  `実際は`,
  `〜するために`,
  `特に`,
  `〜の代わりに`,
  `お返しに`,
  `〜にもかかわらず、`,
  `その場合には`,
  `これまで`,
  `間に合って`,
  `〜の代わりに`,
  `〜するつもりである`,
  `〜し続ける`,
  `〜に遅れずについていく`,
  `Aを心に留めておく`,
  `少しずつ`,
  `〜の世話をする`,
  `〜を楽しみに待つ`,
  `〜を調べる`,
  `道に迷う`,
  `〜を専攻する`,
  `決定する`,
  `間違える`,
  `騒音を立てる`,
  `予約する`,
  `スピーチをする`,
  `〜の予約をする`,
  `努力する`,
  `〜と友達になる`,
  `〜をからかう`,
  `ベッドを整える`,
  `約束する`,
  `…であることを確実にする`,
  `〜しようと決心する`,
  `BにちなんでAを名付ける`,
  `AでもBでもない`,
  `〜の隣に`,
  `もはや〜ではない`,
  `AというよりはむしろB`,
  `〜に乗って`,
  `仕事で`,
  `徒歩で`,
  `わざと`,
  `発売中の`,
  `平均して`,
  `一方では`,
  `時間通りに`,
  `ときどき`,
  `問題にならない`,
  `〜に注意を払う`,
  `Aを車で迎えに行く`,
  `〜を買い求める`,
  `〜で重要な役割を演じる`,
  `たくさんの〜`,
  `〜指摘する`,
  `BよりAを好む`,
  `Aが〜するのを妨げる`,
  `AにBを供給する`,
  `Aを整理する`,
  `〜を書き留める`,
  `〜を延期する`,
  `資金を調達する`,
  `〜に頼る`,
  `AにBを思い出させる`,
  `直ちに`,
  `〜を追いかける`,
  `〜がなくなる`,
  `〜をひく`,
  `かどうかを確かめる`,
  `速度を落とす`,
  `これまでのところ`,
  `Aが〜できるように`,
  `〜はどこか調子が悪い`,
  `遅かれ早かれ`,
  `〜のように聞こえる`,
  `Aを〜して過ごする`,
  `〜を支援する`,
  `〜を表す`,
  `寝ている`,
  `外出している`,
  `〜に成功する`,
  `〜のような`,
  `BにAを返品する`,
  `〜を見る`,
  `休憩する`,
  `座る`,
  `〜に似ている`,
  `〜の世話をする`,
  `離陸する`,
  `〜引き継ぐ`,
  `〜に参加する`,
  `行われる`,
  `嘘をつく`,
  `〜をする傾向がある`,
  `〜のおかげで`,
  `そういうわけで`,
  `するとすぐに`,
  `やり方`,
  `〜は間違いない`,
  `この頃`,
  `これは〜だからである`,
  `まず第一に`,
  `〜に加えて`,
  `自分のベストを尽くす`,
  `〜のスイッチを入れる`,
  `〜であることがわかる`,
  `以前は〜であった`,
  `〜のこととなると`,
  `〜であろうとなかろうと`,
  `必ず、間違いなく`,
  `〜で失敗する作業なし`,
  `BはもちろんAも`,
  `2,3の`,
  `たくさんの〜`,
  `〜によると`,

]
const QuizExpress =[
  {q:`Anything else ?`,c:`他にありますか？`},
{q:`Are you sure ... ?`,c:`〜は確かですか。`},
{q:`Can I be of any assistance ?`,c:`ご用はお有りですか。`},
{q:`Certainly , ma'am.`,c:`承知しました。`},
{q:`Come on .`,c:`バカ言うな。さあ。`},
{q:`Congratulations !`,c:`おめでとう！`},
{q:`Could you tell me ~ ?`,c:`〜を教えていただけますか？`},
{q:`Do you mind if ... ?`,c:`〜してもよろしいでしょうか。`},
{q:`Does that mean ... ?`,c:`それはつまり〜ということですか？`},
{q:`Either will do .`,c:`どちらでもいいですよ。`},
{q:`Go ahead .`,c:`どうぞ。`},
{q:`Guess what !`,c:`ねえねえ聞いて！`},
{q:`Have a good time .`,c:`楽しんでくださいね。`},
{q:`How about ~ ?`,c:`〜はどうですか？`},
{q:`How can I get there ?`,c:`そこへはどうやって行けますか？`},
{q:`How can I help you ?`,c:`御用はございますか？`},
{q:`How do you like ~ ?`,c:`〜はどうですか？`},
{q:`I agree .`,c:`賛成です。`},
{q:`I don't mind .`,c:`構いません。`},
{q:`I guess so .`,c:`そう思います。`},
{q:`I have an appointment with ~ .`,c:`〜と約束があります。`},
{q:`I have no idea .`,c:`わかりません。`},
{q:`I have to go now .`,c:`もう行かなければいけません。`},
{q:`I'd love to .`,c:`喜んで。`},
{q:`if you like`,c:`よろしければ`},
{q:`I'll be back at five .`,c:`５時に戻ります。`},
{q:`I'll miss you .`,c:`あなたかがいなく成ると寂しくなります。`},
{q:`I'm afraid ... .`,c:`残念ながら〜だと思います。`},
{q:`I'm having trouble with ~ .`,c:`〜で困っています。`},
{q:`I'm just looking .`,c:`見ているだけです。`},
{q:`I'm not sure .`,c:`よくわかりません。`},
{q:`I'm sorry to hear that .`,c:`それはお気の毒に。`},
{q:`Is it OK if ... ?`,c:`〜してもいいですか？`},
{q:`It all depends .`,c:`時と場合によります。`},
{q:`It's up to you .`,c:`あなた次第です。`},
{q:`Let me see .`,c:`ええと。`},
{q:`May I ask you a favor ?`,c:`お願いがあるのですが。`},
{q:`May I leave a message ?`,c:`伝言をお願いできますか？`},
{q:`May I speak to ~ ?`,c:`（電話で）〜はいますか？`},
{q:`May I take a message ?`,c:`伝言を承りましょうか？`},
{q:`My pleasure .`,c:`どういたしまして。`},
{q:`Neither do I .`,c:`わたしもそうではありません。`},
{q:`Not really .`,c:`それほどでもありません。`},
{q:`Not yet .`,c:`まだです。`},
{q:`Nothing special .`,c:`特に何も。`},
{q:`Of course .`,c:`もちろん。`},
{q:`Please feel free to do ~ .`,c:`ご自由に〜してください。`},
{q:`Please help yourself to ~ .`,c:`どうぞご自由に召し上がってください。`},
{q:`Please make yourself at home.`,c:`楽にしてください。`},
{q:`Please say hello to ~ .`,c:`〜によろしくお伝えください。`},
{q:`Take care .`,c:`気をつけて。お大事に。`},
{q:`Take it easy .`,c:`気楽にね。無理しないで。`},
{q:`Take your time .`,c:`ごゆっくりどうぞ。`},
{q:`That sounds good.`,c:`それはいいですね。`},
{q:`That sounds like fun .`,c:`それは楽しそうですね。`},
{q:`That would be nice.`,c:`それは素晴らしいですね。`},
{q:`That would help .`,c:`それは助かります。`},
{q:`That's fine with me .`,c:`私はそれで結構です。`},
{q:`That's good to hear .`,c:`それは良かったです。`},
{q:`None of your business .`,c:`余計なお世話です。`},
{q:`That's  very kind of you .`,c:`ご親切にありがとう。`},
{q:`The same to you .`,c:`あなたもね。`},
{q:`This is A speaking .`,c:`（電話で）Aです。`},
{q:`Well done !`,c:`よくやった！`},
{q:`What a shame !`,c:`なんと残念な！`},
{q:`What's the matter?`,c:`どうしたの？`},
{q:`What's wrong ?`,c:`どうしたの？`},
{q:`Why don't you do ~ ?`,c:`〜してはどうですか？`},
{q:`Would you like ~ ?`,c:`〜はいかがですか？`},
{q:`Would you mind doing ~ ?`,c:`〜していただけませんか？`},
{q:`You have the wrong number .`,c:`（電話で）番号間違えてますよ？`},
]
const WrongExpress =[
  `他にありますか？`,
`〜は確かですか。`,
`ご用はお有りですか。`,
`承知しました。`,
`バカ言うな。さあ。`,
`おめでとう！`,
`〜を教えていただけますか？`,
`〜してもよろしいでしょうか。`,
`それはつまり〜ということですか？`,
`どちらでもいいですよ。`,
`どうぞ。`,
`ねえねえ聞いて！`,
`楽しんでくださいね。`,
`〜はどうですか？`,
`そこへはどうやって行けますか？`,
`御用はございますか？`,
`〜はどうですか？`,
`賛成です。`,
`構いません。`,
`そう思います。`,
`〜と約束があります。`,
`わかりません。`,
`もう行かなければいけません。`,
`喜んで。`,
`よろしければ`,
`５時に戻ります。`,
`あなたかがいなく成ると寂しくなります。`,
`残念ながら〜だと思います。`,
`〜で困っています。`,
`見ているだけです。`,
`よくわかりません。`,
`それはお気の毒に。`,
`〜してもいいですか？`,
`時と場合によります。`,
`あなた次第です。`,
`ええと。`,
`お願いがあるのですが。`,
`伝言をお願いできますか？`,
`（電話で）〜はいますか？`,
`伝言を承りましょうか？`,
`どういたしまして。`,
`わたしもそうではありません。`,
`それほどでもありません。`,
`まだです。`,
`特に何も。`,
`もちろん。`,
`ご自由に〜してください。`,
`どうぞご自由に召し上がってください。`,
`楽にしてください。`,
`〜によろしくお伝えください。`,
`気をつけて。お大事に。`,
`気楽にね。無理しないで。`,
`ごゆっくりどうぞ。`,
`それはいいですね。`,
`それは楽しそうですね。`,
`それは素晴らしいですね。`,
`それは助かります。`,
`私はそれで結構です。`,
`それは良かったです。`,
`余計なお世話です。`,
`ご親切にありがとう。`,
`あなたもね。`,
`（電話で）Aです。`,
`よくやった！`,
`なんと残念な！`,
`どうしたの？`,
`どうしたの？`,
`〜してはどうですか？`,
`〜はいかがですか？`,
`〜していただけませんか？`,
`（電話で）番号間違えてますよ？`,
]

function butotnClick(){location.reload();}
let button = document.getElementById('reset');
button.onclick = butotnClick;

let form = document.forms[0];
let selectbox = form.selectbox;

selectbox.addEventListener('change', ()=> {
 // console.log(selectbox.value);
}, false);

let a = 0;
let max = 100;
let e = 0;let f = 0;let g = 0;
let h = 0;

selectbox.onchange = function(){

if(selectbox.value === "1-10"){  
  function Change() { [a, h, e,f,g,max] = [0, 8, 10,10,10,60];}
  Change(); Quizset();
  }
else if(selectbox.value === "11-20"){ 
  function Change() { [a, h, e,f,g,max] = [10, 18, 20,20,20,100];}
  Change();
   Quizset();
  }
 else if(selectbox.value === "21-30"){
  function Change() { [a, h, e,f,g,max] = [20, 28, 30,30,30,90];}
  Change();
   Quizset();
}  
else if(selectbox.value === "31-40"){
      function Change() { [a, h, e,f,g,max] = [30, 38, 40,40,40,90];}
      Change();
      Quizset();
    }
else if(selectbox.value === "41-50"){
function Change() { [a, h, e,f,g,max] = [40, 48, 50,50,50,100];}
Change();
Quizset();
}
else if(selectbox.value === "51-60"){
       function Change() { [a, h, e,f,g,max] = [50, 58, 60,60,60,110];}
Change();
Quizset();
}
else if(selectbox.value === "61-70"){
            function Change() { [a, h, e,f,g,max] = [60, 68, 0,0,0,50];}
Change();Quizset();
}
else if(selectbox.value === "71-80"){
       function Change() { [a, h, e,f,g,max] = [70, 78, 0,0,0,60];}
Change();Quizset();
}
else if(selectbox.value === "81-90"){
      function Change() { [a, h, e,f,g,max] = [80, 88, 0,0,0,70];}
Change();Quizset();
 }
                
else if(selectbox.value === "91-100"){
          function Change() { [a, h, e,f,g,max] = [90, 98, 0,0,0,80];}
Change();Quizset();
 }
else if(selectbox.value === "101-110"){
         function Change() { [a, h, e,f,g,max] = [100, 108, 0,0,0,90];}
Change();Quizset();
 }
 else if(selectbox.value === "111-120"){
       function Change() { [a, h, e,f,g,max] = [110, 118, 40,40,40,100];}
     Change();Quizset();
 }
 else if(selectbox.value === "121-130"){
        function Change() { [a, h, e,f,g,max] = [120, 128, 30,30,30,90];}
     Change();Quizset();
 }
else if(selectbox.value === "131-140"){
      function Change() { [a, h, e,f,g,max] = [130, 138,40,40,40,120];}
Change();Quizset();
  }
 else if(selectbox.value === "141-150"){
      function Change() { [a, h, e,f,g,max] = [140, 148,0,0,0,120];}
 Change();Quizset();
  }
  else if(selectbox.value === "151-160"){
      function Change() { [a, h, e,f,g,max] = [150, 158,0,0,0,120];}
 Change();Quizset();
  }
  else if(selectbox.value === "161-170"){
      function Change() { [a, h, e,f,g,max] = [160, 168,0,0,0,120];}
 Change();Quizset();
  }
  else if(selectbox.value === "171-180"){
      function Change() { [a, h, e,f,g,max] = [170, 178,0,0,0,120];}
 Change();Quizset();
  }
  else if(selectbox.value === "181-190"){
      function Change() { [a, h, e,f,g,max] = [180, 188,0,0,0,120];}
 Change();Quizset();
  }
  else{

    location.reload();
  }

  function Quizset () {
    choice1.removeEventListener('click',event);
    const b = Math.floor(Math.random() * (max - e)) + e ;
    let c = Math.floor(Math.random() * (max - f)) + f ;
    let d = Math.floor(Math.random() * (max - g)) + g ;
    
  Qnum.textContent = `No.${a + 1}`;
  question.textContent = quizSet[a].q;
  
  var speak   = new SpeechSynthesisUtterance();
  speak.text  = question.textContent;
  speak.rate  = 1; // 読み上げ速度 0.1-10 初期値:1 (倍速なら2, 半分の倍速なら0.5, )
  speak.pitch = 1;// 声の高さ 0-2 初期値:1(0で女性の声) 
  speak.lang  = 'en-US'; //(日本語:ja-JP, アメリカ英語:en-US, イギリス英語:en-GB, 中国語:zh-CN, 韓国語:ko-KR)
  
  speechSynthesis.speak(speak);
  
  
  
  while(choice1.firstChild){
  choice1.removeChild(choice1.firstChild);
  }
  
  item1.textContent = quizSet[a].c;
  const ul1 = document.querySelector('ul');
    ul1.appendChild(item1);
  
    item2.textContent = WrongAns[b];
    const ul = document.querySelector('ul');
      ul.appendChild(item2);
  
    item3.textContent = WrongAns[c];
    const ul2 = document.querySelector('ul');
      ul.appendChild(item3);
    
     item4.textContent = WrongAns[d];
     const ul3 = document.querySelector('ul');
       ul.appendChild(item4);
  
  
       function shuffle() {
  
        const x = Math.floor(Math.random() * 4 + 1) ;
        //console.log(x);
        
        if(x == 1){ 
          ul.insertBefore(item3,item1);
          ul.insertBefore(item2,item1);
          ul.insertBefore(item4,item1);
      
        }else if(x == 2){
          ul.insertBefore(item1,item4);
          ul.insertBefore(item2,item1);
        }else if(x == 3){
          ul.insertBefore(item1,item3);
          ul.insertBefore(item2,item1);
        }
        else{
          ul.insertBefore(item4,item2);
        }
      }
      
      shuffle();
  
      function checkAnswer(){
          
        let event = function(e){
          let t = e.target;
  
  
          if(t == item1){
          //正解の場合
  
          modal3.classList.remove('hidden');
          isCorrected.textContent = `正解！`;  
  
          setTimeout(()=>{
            modal3.classList.add('hidden');
  
            choice1.removeEventListener('click',event);
  
            //合格の場合
            if(a > h){
  
  
              var Finish   = new SpeechSynthesisUtterance();
              Finish.text  = 'Great!!Good job!!';
              Finish.rate  = 1; // 読み上げ速度 0.1-10 初期値:1 (倍速なら2, 半分の倍速なら0.5, )
              Finish.pitch = 1;// 声の高さ 0-2 初期値:1(0で女性の声) 
              Finish.lang  = 'en-US'; //(日本語:ja-JP, アメリカ英語:en-US, イギリス英語:en-GB, 中国語:zh-CN, 韓国語:ko-KR)
              speechSynthesis.speak(Finish);
    
              modal.classList.remove('hidden');
               //alert(`合格!!`)
                
                close.addEventListener('click',()=>{
                  location.reload();
              })
  
            }else{
                //次の問題へ
              a++;
              Quizset();
            }
          },500);
      
        }else{
          
            //間違った場合
  
          modal2.classList.remove('hidden');
          
          answer.textContent = ` 
          "${question.textContent}" は「${item1.textContent}」です。やり直し！`;
  
          var OMT   = new SpeechSynthesisUtterance();
          OMT.text  = 'one more time';
          OMT.rate  = 1; // 読み上げ速度 0.1-10 初期値:1 (倍速なら2, 半分の倍速なら0.5, )
          OMT.pitch = 1;// 声の高さ 0-2 初期値:1(0で女性の声) 
          OMT.lang  = 'en-US'; //(日本語:ja-JP, アメリカ英語:en-US, イギリス英語:en-GB, 中国語:zh-CN, 韓国語:ko-KR)
          speechSynthesis.speak(OMT);
          
          okay.addEventListener('click',()=>{
            modal2.classList.add('hidden');
            choice1.removeEventListener('click',event);
          });
          
          Change();
          Quizset();
  
          }};
  
        choice1.addEventListener('click',event,false);
                }
       checkAnswer();
  
  } 
  


}

let selectbox1 = form.selectbox1;
selectbox1.addEventListener('change', ()=> {
 // console.log(selectbox.value);
}, false);
//動詞
selectbox1.onchange = function(){

if(selectbox1.value === "verb1"){ 
   function Change() { [a, h, e,f,g,max] = [0, 8, 10,10,10,49];}
  Change(); Quizset(); 
}
else if(selectbox1.value === "verb2"){
   function Change() { [a, h, e,f,g,max] = [10, 18, 20,20,20,50];}
  Change(); Quizset();
  }
  else if(selectbox1.value === "verb3"){
     function Change() { [a, h, e,f,g,max] = [20, 28, 30,30,30,50];}
  Change(); Quizset();
    }
  else if(selectbox1.value === "verb4"){
       function Change() { [a, h, e,f,g,max] = [30, 38, 0,0,0,29];}
  Change(); Quizset();
      }
      else if(selectbox1.value === "verb5"){
             function Change() { [a, h, e,f,g,max] = [40,48, 0,0,0,39];}
      Change(); Quizset();
            }
      else if(selectbox1.value === "verb6"){
             function Change() { [a, h, e,f,g,max] = [50,58, 0,0,0,49];}
      Change(); Quizset();
            }
      else if(selectbox1.value === "verb7"){
             function Change() { [a, h, e,f,g,max] = [60,68, 0,0,0,59];}
      Change(); Quizset();
            }
      else if(selectbox1.value === "verb8"){
             function Change() { [a, h, e,f,g,max] = [70,78, 0,0,0,69];}
      Change(); Quizset();
            }
      else if(selectbox1.value === "verb9"){
             function Change() { [a, h, e,f,g,max] = [80,88, 0,0,0,39];}
      Change(); Quizset();
            }
      else if(selectbox1.value === "verb10"){
             function Change() { [a, h, e,f,g,max] = [90,98, 0,0,0,39];}
      Change(); Quizset();
            }
     
      else if(selectbox1.value === "verb11"){
             function Change() { [a, h, e,f,g,max] = [100,108, 0,0,0,39];}
      Change(); Quizset();
            }
     
      else if(selectbox1.value === "verb12"){
             function Change() { [a, h, e,f,g,max] = [110,118, 0,0,0,100];}
      Change(); Quizset();
            }
     
      else if(selectbox1.value === "verb13"){
             function Change() { [a, h, e,f,g,max] = [120,128, 0,0,0,100];}
      Change(); Quizset();
            }
     
      else if(selectbox1.value === "verb14"){
             function Change() { [a, h, e,f,g,max] = [130,138, 0,0,0,100];}
      Change(); Quizset();
            }
     
      else if(selectbox1.value === "verb15"){
             function Change() { [a, h, e,f,g,max] = [140,148, 0,0,0,100];}
      Change(); Quizset();
            }
     
      else if(selectbox1.value === "verb16"){
             function Change() { [a, h, e,f,g,max] = [150,158, 0,0,0,100];}
      Change(); Quizset();
            }
     
      else if(selectbox1.value === "verb17"){
             function Change() { [a, h, e,f,g,max] = [160,168, 0,0,0,100];}
      Change(); Quizset();
            }
     
      else if(selectbox1.value === "verb18"){
             function Change() { [a, h, e,f,g,max] = [170,178, 0,0,0,100];}
      Change(); Quizset();
            }
     
      else if(selectbox1.value === "verb19"){
             function Change() { [a, h, e,f,g,max] = [180,188, 0,0,0,100];}
      Change(); Quizset();
            }
     
      else { location.reload();}

      function Quizset () {
        choice1.removeEventListener('click',event);
        const b = Math.floor(Math.random() * (max - e)) + e ;
        let c = Math.floor(Math.random() * (max - f)) + f ;
        let d = Math.floor(Math.random() * (max - g)) + g ;
        
      Qnum.textContent = `No.${a + 1}`;
      question.textContent = QuizVerb[a].q;
      
      var speak   = new SpeechSynthesisUtterance();
      speak.text  = question.textContent;
      speak.rate  = 1; // 読み上げ速度 0.1-10 初期値:1 (倍速なら2, 半分の倍速なら0.5, )
      speak.pitch = 1;// 声の高さ 0-2 初期値:1(0で女性の声) 
      speak.lang  = 'en-US'; //(日本語:ja-JP, アメリカ英語:en-US, イギリス英語:en-GB, 中国語:zh-CN, 韓国語:ko-KR)
      
      speechSynthesis.speak(speak);
      
      
      
      while(choice1.firstChild){
      choice1.removeChild(choice1.firstChild);
      }
      
      item1.textContent = QuizVerb[a].c;
      const ul1 = document.querySelector('ul');
        ul1.appendChild(item1);
      
        item2.textContent = WrongVerb[b];
        const ul = document.querySelector('ul');
          ul.appendChild(item2);
      
        item3.textContent = WrongVerb[c];
        const ul2 = document.querySelector('ul');
          ul.appendChild(item3);
        
         item4.textContent = WrongVerb[d];
         const ul3 = document.querySelector('ul');
           ul.appendChild(item4);
      
      
           function shuffle() {
      
            const x = Math.floor(Math.random() * 4 + 1) ;
            //console.log(x);
            
            if(x == 1){ 
              ul.insertBefore(item3,item1);
              ul.insertBefore(item2,item1);
              ul.insertBefore(item4,item1);
          
            }else if(x == 2){
              ul.insertBefore(item1,item4);
              ul.insertBefore(item2,item1);
            }else if(x == 3){
              ul.insertBefore(item1,item3);
              ul.insertBefore(item2,item1);
            }
            else{
              ul.insertBefore(item4,item2);
            }
          }
          
          shuffle();
      
          function checkAnswer(){
              
            let event = function(e){
              let t = e.target;
      
      
              if(t == item1){
              //正解の場合
      
              modal3.classList.remove('hidden');
              isCorrected.textContent = `正解！`;  
      
              setTimeout(()=>{
                modal3.classList.add('hidden');
      
                choice1.removeEventListener('click',event);
      
                //合格の場合
                if(a > h){
      
      
                  var Finish   = new SpeechSynthesisUtterance();
                  Finish.text  = 'Great!!Good job!!';
                  Finish.rate  = 1; // 読み上げ速度 0.1-10 初期値:1 (倍速なら2, 半分の倍速なら0.5, )
                  Finish.pitch = 1;// 声の高さ 0-2 初期値:1(0で女性の声) 
                  Finish.lang  = 'en-US'; //(日本語:ja-JP, アメリカ英語:en-US, イギリス英語:en-GB, 中国語:zh-CN, 韓国語:ko-KR)
                  speechSynthesis.speak(Finish);
        
                  modal.classList.remove('hidden');
                   //alert(`合格!!`)
                    
                    close.addEventListener('click',()=>{
                      location.reload();
                  })
      
                }else{
                    //次の問題へ
                  a++;
                  Quizset();
                }
              },500);
          
            }else{
              
                //間違った場合
      
              modal2.classList.remove('hidden');
              
              answer.textContent = ` 
              "${question.textContent}" は「${item1.textContent}」です。やり直し！`;
      
              var OMT   = new SpeechSynthesisUtterance();
              OMT.text  = 'one more time';
              OMT.rate  = 1; // 読み上げ速度 0.1-10 初期値:1 (倍速なら2, 半分の倍速なら0.5, )
              OMT.pitch = 1;// 声の高さ 0-2 初期値:1(0で女性の声) 
              OMT.lang  = 'en-US'; //(日本語:ja-JP, アメリカ英語:en-US, イギリス英語:en-GB, 中国語:zh-CN, 韓国語:ko-KR)
              speechSynthesis.speak(OMT);
              
              okay.addEventListener('click',()=>{
                modal2.classList.add('hidden');
                choice1.removeEventListener('click',event);
              });
              
              Change();
              Quizset();
      
              }};
      
            choice1.addEventListener('click',event,false);
                    }
           checkAnswer();
      
      } 
      

}
//その他
let selectbox2 = form.selectbox2;
selectbox2.addEventListener('change', ()=> {
 // console.log(selectbox.value);
}, false);
selectbox2.onchange = function(){
 if(selectbox2.value === "else1"){   
          function Change() { [a, h, e,f,g,max] = [0, 8, 10,10,10,99];}
          Change(); Quizset(); 
 }
else if(selectbox2.value === "else2"){
         function Change() { [a, h, e,f,g,max] = [10, 18, 20,20,20,99];}
        Change(); Quizset(); 
    }
else if(selectbox2.value === "else3"){         
               function Change() { [a, h, e,f,g,max] = [20, 28, 30,30,30,99];}
              Change(); Quizset(); 
                }
else if(selectbox2.value === "else4"){               
                 function Change() { [a, h, e,f,g,max] = [30, 38, 40,40,40,99];}
                Change(); Quizset(); 
                }
 else if(selectbox2.value === "else5"){               
                 function Change() { [a, h, e,f,g,max] = [40, 48, 50,50,50,99];}
                Change(); Quizset(); 
                }
 else if(selectbox2.value === "else6"){               
                 function Change() { [a, h, e,f,g,max] = [50, 58, 0,0,0,49];}
                Change(); Quizset(); 
                }
 else if(selectbox2.value === "else7"){               
                 function Change() { [a, h, e,f,g,max] = [60, 68, 0,0,0,59];}
                Change(); Quizset(); 
                }
 else if(selectbox2.value === "else8"){               
                 function Change() { [a, h, e,f,g,max] = [70, 78, 0,0,0,69];}
                Change(); Quizset(); 
                }
 else if(selectbox2.value === "else9"){               
                 function Change() { [a, h, e,f,g,max] = [80, 88, 0,0,0,79];}
                Change(); Quizset(); 
                }
 else if(selectbox2.value === "else10"){               
                 function Change() { [a, h, e,f,g,max] = [90, 98, 0,0,0,89];}
                Change(); Quizset(); 
                }        

else { location.reload();}
 
function Quizset () {
  choice1.removeEventListener('click',event);
  const b = Math.floor(Math.random() * (max - e)) + e ;
  let c = Math.floor(Math.random() * (max - f)) + f ;
  let d = Math.floor(Math.random() * (max - g)) + g ;
  
Qnum.textContent = `No.${a + 1}`;
question.textContent = QuizElse[a].q;

var speak   = new SpeechSynthesisUtterance();
speak.text  = question.textContent;
speak.rate  = 1; // 読み上げ速度 0.1-10 初期値:1 (倍速なら2, 半分の倍速なら0.5, )
speak.pitch = 1;// 声の高さ 0-2 初期値:1(0で女性の声) 
speak.lang  = 'en-US'; //(日本語:ja-JP, アメリカ英語:en-US, イギリス英語:en-GB, 中国語:zh-CN, 韓国語:ko-KR)

speechSynthesis.speak(speak);



while(choice1.firstChild){
choice1.removeChild(choice1.firstChild);
}

item1.textContent = QuizElse[a].c;
const ul1 = document.querySelector('ul');
  ul1.appendChild(item1);

  item2.textContent = WrongElse[b];
  const ul = document.querySelector('ul');
    ul.appendChild(item2);

  item3.textContent = WrongElse[c];
  const ul2 = document.querySelector('ul');
    ul.appendChild(item3);
  
   item4.textContent = WrongElse[d];
   const ul3 = document.querySelector('ul');
     ul.appendChild(item4);


     function shuffle() {

      const x = Math.floor(Math.random() * 4 + 1) ;
      //console.log(x);
      
      if(x == 1){ 
        ul.insertBefore(item3,item1);
        ul.insertBefore(item2,item1);
        ul.insertBefore(item4,item1);
    
      }else if(x == 2){
        ul.insertBefore(item1,item4);
        ul.insertBefore(item2,item1);
      }else if(x == 3){
        ul.insertBefore(item1,item3);
        ul.insertBefore(item2,item1);
      }
      else{
        ul.insertBefore(item4,item2);
      }
    }
    
    shuffle();

    function checkAnswer(){
        
      let event = function(e){
        let t = e.target;


        if(t == item1){
        //正解の場合

        modal3.classList.remove('hidden');
        isCorrected.textContent = `正解！`;  

        setTimeout(()=>{
          modal3.classList.add('hidden');

          choice1.removeEventListener('click',event);

          //合格の場合
          if(a > h){


            var Finish   = new SpeechSynthesisUtterance();
            Finish.text  = 'Great!!Good job!!';
            Finish.rate  = 1; // 読み上げ速度 0.1-10 初期値:1 (倍速なら2, 半分の倍速なら0.5, )
            Finish.pitch = 1;// 声の高さ 0-2 初期値:1(0で女性の声) 
            Finish.lang  = 'en-US'; //(日本語:ja-JP, アメリカ英語:en-US, イギリス英語:en-GB, 中国語:zh-CN, 韓国語:ko-KR)
            speechSynthesis.speak(Finish);
  
            modal.classList.remove('hidden');
             //alert(`合格!!`)
              
              close.addEventListener('click',()=>{
                location.reload();
            })

          }else{
              //次の問題へ
            a++;
            Quizset();
          }
        },500);
    
      }else{
        
          //間違った場合

        modal2.classList.remove('hidden');
        
        answer.textContent = ` 
        "${question.textContent}" は「${item1.textContent}」です。やり直し！`;

        var OMT   = new SpeechSynthesisUtterance();
        OMT.text  = 'one more time';
        OMT.rate  = 1; // 読み上げ速度 0.1-10 初期値:1 (倍速なら2, 半分の倍速なら0.5, )
        OMT.pitch = 1;// 声の高さ 0-2 初期値:1(0で女性の声) 
        OMT.lang  = 'en-US'; //(日本語:ja-JP, アメリカ英語:en-US, イギリス英語:en-GB, 中国語:zh-CN, 韓国語:ko-KR)
        speechSynthesis.speak(OMT);
        
        okay.addEventListener('click',()=>{
          modal2.classList.add('hidden');
          choice1.removeEventListener('click',event);
        });
        
        Change();
        Quizset();

        }};

      choice1.addEventListener('click',event,false);
              }
     checkAnswer();

} 


}
let selectbox3 = form2.selectbox3;
selectbox3.addEventListener('change', ()=> {
}, false);
//熟語
selectbox3.onchange = function(){
  if(selectbox3.value === "idiom1"){          
           function Change() { [a, h, e,f,g,max] = [0, 8, 10,10,10,99];}
           Change(); Quizset(); 
     }
           else if(selectbox3.value === "idiom2"){
             function Change() { [a, h, e,f,g,max] = [10, 18, 20,20,20,99];}
             Change(); Quizset(); 
   }
    else if(selectbox3.value === "idiom3"){    
               function Change() { [a, h, e,f,g,max] = [20, 28, 30,30,30,99];}
               Change(); Quizset(); 
       }
    else if(selectbox3.value === "idiom4"){
                 function Change() { [a, h, e,f,g,max] = [30, 38, 40,40,40,99];}
                 Change(); Quizset(); 
     }
    else if(selectbox3.value === "idiom5"){
              function Change() { [a, h, e,f,g,max] = [40, 48, 50,50,50,99];}
              Change(); Quizset(); 
      }
     else if(selectbox3.value === "idiom6"){
               function Change() { [a, h, e,f,g,max] = [50, 58, 0,0,0,49];}
               Change(); Quizset(); 
       }
      else if(selectbox3.value === "idiom7"){
                function Change() { [a, h, e,f,g,max] = [60, 68, 0,0,0,59];}
                Change(); Quizset(); 
      }
       else if(selectbox3.value === "idiom8"){
               function Change() { [a, h, e,f,g,max] = [70, 78, 0,0,0,69];}
               Change(); Quizset(); 
    }
       else if(selectbox3.value === "idiom9"){
              function Change() { [a, h, e,f,g,max] = [80, 88, 0,0,0,79];}
              Change(); Quizset(); 
      }
     else if(selectbox3.value === "idiom10"){
             function Change() { [a, h, e,f,g,max] = [90, 98, 0,0,0,89];}
             Change(); Quizset(); 
      }
      else if(selectbox3.value === "idiom11"){
        function Change() { [a, h, e,f,g,max] = [100, 108, 0,0,0,99];}
        Change(); Quizset(); 
 }
 else if(selectbox3.value === "idiom12"){
  function Change() { [a, h, e,f,g,max] = [110, 118, 0,0,0,100];}
  Change(); Quizset(); 
}
else if(selectbox3.value === "idiom13"){
  function Change() { [a, h, e,f,g,max] = [120, 128, 0,0,0,120];}
  Change(); Quizset(); 
}
else if(selectbox3.value === "idiom14"){
  function Change() { [a, h, e,f,g,max] = [130, 98, 0,0,0,120];}
  Change(); Quizset(); 
}
else if(selectbox3.value === "idiom15"){
  function Change() { [a, h, e,f,g,max] = [140, 148, 0,0,0,120];}
  Change(); Quizset(); 
}
else if(selectbox3.value === "idiom16"){
  function Change() { [a, h, e,f,g,max] = [150, 158, 0,0,0,120];}
  Change(); Quizset(); 
}
else if(selectbox3.value === "idiom17"){
  function Change() { [a, h, e,f,g,max] = [160, 168, 0,0,0,120];}
  Change(); Quizset(); 
}
else if(selectbox3.value === "idiom18"){
  function Change() { [a, h, e,f,g,max] = [170, 178, 0,0,0,120];}
  Change(); Quizset(); 
}
else if(selectbox3.value === "idiom19"){
  function Change() { [a, h, e,f,g,max] = [180, 188, 0,0,0,120];}
  Change(); Quizset(); 
}
else if(selectbox3.value === "idiom20"){
  function Change() { [a, h, e,f,g,max] = [190, 197, 0,0,0,120];}
  Change(); Quizset(); 
}


else { location.reload();}
  
function Quizset () {
  choice1.removeEventListener('click',event);
  const b = Math.floor(Math.random() * (max - e)) + e ;
  let c = Math.floor(Math.random() * (max - f)) + f ;
  let d = Math.floor(Math.random() * (max - g)) + g ;
  
Qnum.textContent = `No.${a + 1}`;
question.textContent = QuizIdiom[a].q;

var speak   = new SpeechSynthesisUtterance();
speak.text  = question.textContent;
speak.rate  = 1; // 読み上げ速度 0.1-10 初期値:1 (倍速なら2, 半分の倍速なら0.5, )
speak.pitch = 1;// 声の高さ 0-2 初期値:1(0で女性の声) 
speak.lang  = 'en-US'; //(日本語:ja-JP, アメリカ英語:en-US, イギリス英語:en-GB, 中国語:zh-CN, 韓国語:ko-KR)

speechSynthesis.speak(speak);



while(choice1.firstChild){
choice1.removeChild(choice1.firstChild);
}

item1.textContent = QuizIdiom[a].c;
const ul1 = document.querySelector('ul');
  ul1.appendChild(item1);

  item2.textContent = WrongIdiom[b];
  const ul = document.querySelector('ul');
    ul.appendChild(item2);

  item3.textContent = WrongIdiom[c];
  const ul2 = document.querySelector('ul');
    ul.appendChild(item3);
  
   item4.textContent = WrongIdiom[d];
   const ul3 = document.querySelector('ul');
     ul.appendChild(item4);


     function shuffle() {

      const x = Math.floor(Math.random() * 4 + 1) ;
      //console.log(x);
      
      if(x == 1){ 
        ul.insertBefore(item3,item1);
        ul.insertBefore(item2,item1);
        ul.insertBefore(item4,item1);
    
      }else if(x == 2){
        ul.insertBefore(item1,item4);
        ul.insertBefore(item2,item1);
      }else if(x == 3){
        ul.insertBefore(item1,item3);
        ul.insertBefore(item2,item1);
      }
      else{
        ul.insertBefore(item4,item2);
      }
    }
    
    shuffle();

    function checkAnswer(){
        
      let event = function(e){
        let t = e.target;


        if(t == item1){
        //正解の場合

        modal3.classList.remove('hidden');
        isCorrected.textContent = `正解！`;  

        setTimeout(()=>{
          modal3.classList.add('hidden');

          choice1.removeEventListener('click',event);

          //合格の場合
          if(a > h){


            var Finish   = new SpeechSynthesisUtterance();
            Finish.text  = 'Great!!Good job!!';
            Finish.rate  = 1; // 読み上げ速度 0.1-10 初期値:1 (倍速なら2, 半分の倍速なら0.5, )
            Finish.pitch = 1;// 声の高さ 0-2 初期値:1(0で女性の声) 
            Finish.lang  = 'en-US'; //(日本語:ja-JP, アメリカ英語:en-US, イギリス英語:en-GB, 中国語:zh-CN, 韓国語:ko-KR)
            speechSynthesis.speak(Finish);
  
            modal.classList.remove('hidden');
             //alert(`合格!!`)
              
              close.addEventListener('click',()=>{
                location.reload();
            })

          }else{
              //次の問題へ
            a++;
            Quizset();
          }
        },500);
    
      }else{
        
          //間違った場合

        modal2.classList.remove('hidden');
        
        answer.textContent = ` 
        "${question.textContent}" は「${item1.textContent}」です。やり直し！`;

        var OMT   = new SpeechSynthesisUtterance();
        OMT.text  = 'one more time';
        OMT.rate  = 1; // 読み上げ速度 0.1-10 初期値:1 (倍速なら2, 半分の倍速なら0.5, )
        OMT.pitch = 1;// 声の高さ 0-2 初期値:1(0で女性の声) 
        OMT.lang  = 'en-US'; //(日本語:ja-JP, アメリカ英語:en-US, イギリス英語:en-GB, 中国語:zh-CN, 韓国語:ko-KR)
        speechSynthesis.speak(OMT);
        
        okay.addEventListener('click',()=>{
          modal2.classList.add('hidden');
          choice1.removeEventListener('click',event);
        });
        
        Change();
        Quizset();

        }};

      choice1.addEventListener('click',event,false);
              }
     checkAnswer();

} 

 }
//表現
let selectbox4 = form2.selectbox4;
selectbox4.addEventListener('change', ()=> {
}, false);
selectbox4.onchange = function(){
  if(selectbox4.value === "express1"){
             function Change() { [a, h, e,f,g,max] = [0, 8, 10,10,10,71];}
            Change(); Quizset(); 
      }
    else if(selectbox4.value === "express2"){
             function Change() { [a, h, e,f,g,max] = [10, 18, 20,20,20,71];}
             Change(); Quizset(); 
     }
    else if(selectbox4.value === "express3"){
             function Change() { [a, h, e,f,g,max] = [20, 28, 30,30,30,71];}
             Change(); Quizset(); 
     }
     else if(selectbox4.value === "express4"){
            function Change() { [a, h, e,f,g,max] = [30, 38, 40,40,40,71];}
            Change(); Quizset(); 
      }
    else if(selectbox4.value === "express5"){
            function Change() { [a, h, e,f,g,max] = [40, 48, 0,0,0,39];}
            Change(); Quizset(); 
     }
     else if(selectbox4.value === "express6"){
            function Change() { [a, h, e,f,g,max] = [50, 58, 0,0,0,49];}
            Change(); Quizset(); 
      }
     else if(selectbox4.value === "express7"){
                 function Change() { [a, h, e,f,g,max] = [60, 69, 0,0,0,59];}
                 Change(); Quizset(); 
         }
 
 else { location.reload();}
  
 function Quizset () {
  choice1.removeEventListener('click',event);
  const b = Math.floor(Math.random() * (max - e)) + e ;
  let c = Math.floor(Math.random() * (max - f)) + f ;
  let d = Math.floor(Math.random() * (max - g)) + g ;
  
Qnum.textContent = `No.${a + 1}`;
question.textContent = QuizExpress[a].q;

var speak   = new SpeechSynthesisUtterance();
speak.text  = question.textContent;
speak.rate  = 1; // 読み上げ速度 0.1-10 初期値:1 (倍速なら2, 半分の倍速なら0.5, )
speak.pitch = 1;// 声の高さ 0-2 初期値:1(0で女性の声) 
speak.lang  = 'en-US'; //(日本語:ja-JP, アメリカ英語:en-US, イギリス英語:en-GB, 中国語:zh-CN, 韓国語:ko-KR)

speechSynthesis.speak(speak);



while(choice1.firstChild){
choice1.removeChild(choice1.firstChild);
}

item1.textContent = QuizExpress[a].c;
const ul1 = document.querySelector('ul');
  ul1.appendChild(item1);

  item2.textContent = WrongExpress[b];
  const ul = document.querySelector('ul');
    ul.appendChild(item2);

  item3.textContent = WrongExpress[c];
  const ul2 = document.querySelector('ul');
    ul.appendChild(item3);
  
   item4.textContent = WrongExpress[d];
   const ul3 = document.querySelector('ul');
     ul.appendChild(item4);


     function shuffle() {

      const x = Math.floor(Math.random() * 4 + 1) ;
      //console.log(x);
      
      if(x == 1){ 
        ul.insertBefore(item3,item1);
        ul.insertBefore(item2,item1);
        ul.insertBefore(item4,item1);
    
      }else if(x == 2){
        ul.insertBefore(item1,item4);
        ul.insertBefore(item2,item1);
      }else if(x == 3){
        ul.insertBefore(item1,item3);
        ul.insertBefore(item2,item1);
      }
      else{
        ul.insertBefore(item4,item2);
      }
    }
    
    shuffle();

    function checkAnswer(){
        
      let event = function(e){
        let t = e.target;


        if(t == item1){
        //正解の場合

        modal3.classList.remove('hidden');
        isCorrected.textContent = `正解！`;  

        setTimeout(()=>{
          modal3.classList.add('hidden');

          choice1.removeEventListener('click',event);

          //合格の場合
          if(a > h){


            var Finish   = new SpeechSynthesisUtterance();
            Finish.text  = 'Great!!Good job!!';
            Finish.rate  = 1; // 読み上げ速度 0.1-10 初期値:1 (倍速なら2, 半分の倍速なら0.5, )
            Finish.pitch = 1;// 声の高さ 0-2 初期値:1(0で女性の声) 
            Finish.lang  = 'en-US'; //(日本語:ja-JP, アメリカ英語:en-US, イギリス英語:en-GB, 中国語:zh-CN, 韓国語:ko-KR)
            speechSynthesis.speak(Finish);
  
            modal.classList.remove('hidden');
             //alert(`合格!!`)
              
              close.addEventListener('click',()=>{
                location.reload();
            })

          }else{
              //次の問題へ
            a++;
            Quizset();
          }
        },500);
    
      }else{
        
          //間違った場合

        modal2.classList.remove('hidden');
        
        answer.textContent = ` 
        "${question.textContent}" は「${item1.textContent}」です。やり直し！`;

        var OMT   = new SpeechSynthesisUtterance();
        OMT.text  = 'one more time';
        OMT.rate  = 1; // 読み上げ速度 0.1-10 初期値:1 (倍速なら2, 半分の倍速なら0.5, )
        OMT.pitch = 1;// 声の高さ 0-2 初期値:1(0で女性の声) 
        OMT.lang  = 'en-US'; //(日本語:ja-JP, アメリカ英語:en-US, イギリス英語:en-GB, 中国語:zh-CN, 韓国語:ko-KR)
        speechSynthesis.speak(OMT);
        
        okay.addEventListener('click',()=>{
          modal2.classList.add('hidden');
          choice1.removeEventListener('click',event);
        });
        
        Change();
        Quizset();

        }};

      choice1.addEventListener('click',event,false);
              }
     checkAnswer();

} 



 }


