var choose_deck = document.querySelector('.choose-deck');
var gmboard = document.querySelector('.gmboard');
var emotion_board = document.querySelector('.emotion_board');
var family_deck = document.querySelector('.family-deck');
var class_deck = document.querySelector('.class-deck');
var friend_deck = document.querySelector('.friend-deck');
var fam_card = document.querySelector('.family_card');
var class_card = document.querySelector('.class_card');
var friend_card = document.querySelector('.friend_card');
var fam_text = document.querySelector('.fam_text');
var class_text = document.querySelector('.class_text');
var friend_text = document.querySelector('.friend_text');
var re_or_yes = document.querySelector('re_or_yes');
var situation = document.querySelector('.situation');
var wheel_btn = document.querySelector('.wheel_btn');
var wheel_show = document.querySelector('.wheel_show');
var feelings_wheel_img = document.getElementById('feelings_wheel_img');
var fam_index = 0;
var class_index = 0;
var friend_index = 0;


var family_arr = ["你的父母把最好的禮物都送給你生病中的哥哥/弟弟", "你最好的朋友邀請你跟他度假十五天", "有人沒敲門就進去你的房間", "你的女兒說他生病了，體溫計顯示他現在44度", "你發現在你出生後，你的父母就不能再生育",
"你媽媽送了一份禮物給你爸爸，但一個禮拜後你發現爸爸在網路上把它賣掉","你的兒子只跟女孩子玩", "在家庭聚會中，大家圍著桌子開始講起不政經的故事來","有些家長讓他們10歲的孩子玩16歲才能玩的電腦遊戲",
"你的祖父常常說重複的故事","你父母不想給你零用錢，改把錢存到銀行供你日後使用","你跟比你小三歲的弟弟，今年分別獲贈一台智慧型手機","你的孩子成績優異，但有流言說它作弊","你姊姊介紹他的女朋友給你認識","你有一位坐輪椅的朋友很受女生歡迎","你最好的朋友打扮得跟你一模一樣",
"如果沒有得到好成績，你不能用手機","你的祖母將要跟你同住","你媽媽把午餐帶到學校/辦公處給你","你祖父年紀老邁，現在要入住養老院","你爸爸經常外出工作，他每次回來都會帶禮物給你","你媽媽每次責備完你後都會跟你道歉","因為爸爸找到新工作，全家要移居海外","你奶奶/阿嬤在一個手遊中擊敗你"
,"你要跟你剛出生的妹妹共用你的房間","鄰居家遭小偷，你朋友會抱著毛絨娃娃睡覺","你父母要求你照顧你的弟妹","你爺爺/阿公邀請你下午跟他一起去釣魚","在餐廳裡，隔壁桌的小孩鬧脾氣、尖叫，結果被打了一巴掌","你14歲的姪女跟男朋友同睡","你的孩子向你承認他是同性戀","你的親戚都鼓勵你去看心理醫生",
"你爸媽醉醺醺地告訴你他們兩個如何墜入愛河"];
var class_arr = ["你做錯事，卻害另一個同學無辜受罰","班上有位你不喜歡的同學被學長姐欺負","你被換掉無法參賽，但你的隊伍在大賽中勝出了","你將參加為期一周的戶外教學","有同學跟你講一些不正經的故事","你爸媽要求你每天晚上花一、兩個小時讀書，因為他們希望你考第一名","你的老師雖然很嚴厲，但是非常公正","班上來了位新同學，但沒有人想跟他玩",
"你被選為班代","你被老師處發，所以你的父母想跟老師面談","你是小組中唯一的女生/男生","有警察到學校跟你們講解網路的危險","你最好的朋友邀請你一起去看恐怖片","你收到告白信","你的朋友翹課，是因為要跟不常見面的父親去吃飯","你的爸爸或媽媽在你就讀的學校任教","你朋友因為互相侮辱對方的家長而打起架來",
"某位老師稱一位成績差的學生為笨蛋","你跟同學一起準備的表演因為天氣惡劣(例如颱風)取消了","一位你不喜歡的老師在全班面前稱讚你","你同學的爸爸被解雇，失業了","學校規定所有學生每天都要打掃","你同學告訴你說，他爸媽離婚了，但他因為能夠收到雙倍的禮物而感到開心","你朋友在嘲笑一位有身心障礙的同學",
"你的學校每天下午都有安排運動時間","因為班上有人確診，你整個星期都不用去學校","你跟學長姐玩，而他們提議你作弊","班上有位同學比其他人少三歲","學校禁止學生在全班去海邊玩時下水游泳","你被邀請到同學家過吃晚餐","你哥哥被留級，結果他跟你在同一班","你媽媽被邀請到你們班，介紹他的職業","你最好的朋友跟你說他再也無法忍受父母了，想要搬去跟你一起住"];
var friend_arr = ["你的朋友都不回你的訊息","你的好友說帶有種族歧視的笑話","你的朋友邀請你一起參加同志大遊行","你朋友30歲、單身、待業中，至今仍然住在爸媽家裡","你最好的朋友成為了僧侶/神職人員","你的朋友有自殘傾向，向你尋求幫助","你的好友很自豪地向你介紹他的新男朋友。他外貌出眾，卻只顧著自說自話","政府在所有公共地方裝設監控攝影機",
"你懷疑你正值青少年的孩子，正在跟一位比他年長很多的人約會","你發現一直欺負你的人也在正到虐待","你父母常在朋友面前吹噓關於你的事","一位遠親急需移植腎臟，而你是唯一合適的捐贈者","有算命阿姨跟你說你前世是一位歷史名人","你察覺你的教育成比你父母更高","你的父母告訴你他們要分居","為了拉近男女間的收入差距，政府決定增加女性的薪水",
"你爸媽中了大樂透，他們將全數金額捐給慈善機構","你有瞬間移動的能力","國內有納稅的外籍人士現在也擁有選舉投票權","你的小孩在未經你同意就去打耳洞或刺青","你父母要求你在Facebook上把他們加為你的好友","你的孩子責怪你一直對他的學業要求過於寬鬆","你的兄弟姐妹請你的父母替他繳稅","你的配偶正在接受某種自然療法",
"一個親子鑑定結果表示，你一直是為父親的男人原來並非你的生父","你憑履歷請來了一位保母，卻發現他的手上布滿紋身","你的孩子是資優生，他把所有時間都花在閱讀上","你伴侶的父母希望你們舉行宗教婚禮","你16歲的兒子已經一個月沒跟你說話，卻跟祖父母吐露心聲","你發現你爸爸或媽媽在你出生前曾經入獄"];

shuffle(family_arr);
shuffle(class_arr);
shuffle(friend_arr);

/*
wheel_btn.onclick = function() {
    choose_deck.style.opacity = 0.3;
    gmboard.style.opacity = 0.3;
    emotion_board.style.opacity = 0.3;
    
    feelings_wheel_img.style = "display: flex;";
}

*/

family_deck.onclick = function() {
    choose_deck.style.opacity = 0.3;
    gmboard.style.opacity = 0.3;
    emotion_board.style.opacity = 0.3;
    fam_card.style = "display: flex;";
    fam_text.innerHTML = family_arr[fam_index];
    situation.innerHTML = "情境: " + family_arr[fam_index];
    if(fam_index < family_arr.length - 1) {
        fam_index++;
    }
    else {
        fam_index = 0;
    }
}

class_deck.onclick = function() {
    choose_deck.style.opacity = 0.3;
    gmboard.style.opacity = 0.3;
    emotion_board.style.opacity = 0.3;
    class_card.style = "display: flex;";
    class_text.innerHTML = class_arr[class_index];
    situation.innerHTML = "情境: " + class_arr[class_index];
    if(class_index < class_arr.length - 1) {
        class_index++;
    }
    else {
        class_index = 0;
    }
}

friend_deck.onclick = function() {
    choose_deck.style.opacity = 0.3;
    gmboard.style.opacity = 0.3;
    emotion_board.style.opacity = 0.3;
    friend_card.style = "display: flex;";
    friend_text.innerHTML = friend_arr[friend_index];
    situation.innerHTML = "情境: " + friend_arr[friend_index];
    if(friend_index < friend_arr.length - 1) {
        friend_index++;
    }
    else {
        friend_index = 0;
    }
}

friend_card.addEventListener('click', function (e) {
    friend_card.style.display = "none";
    choose_deck.style.opacity = 1;
    gmboard.style.opacity = 1;
    emotion_board.style.opacity = 1;
    }
);
class_card.addEventListener('click', function (e) {
    class_card.style.display = "none";
    choose_deck.style.opacity = 1;
    emotion_board.style.opacity = 1;
    gmboard.style.opacity = 1;
    }
);

fam_card.addEventListener('click', function (e) {
    fam_card.style.display = "none";
    choose_deck.style.opacity = 1;
    emotion_board.style.opacity = 1;
    gmboard.style.opacity = 1;
    }
);

feelings_wheel_img.addEventListener('click', function (e) {

    feelings_wheel_img.sytle = "display: none !important;";
    choose_deck.style.opacity = 1;
    emotion_board.style.opacity = 1;
    gmboard.style.opacity = 1;
});

function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}