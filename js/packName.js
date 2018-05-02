const fristName = "美丽的,漂亮的,可爱的,聪明的,温柔的,甜美的,性感的,高雅的,完美的,娇羞的,动人的,娇艳的,阳光的,精致的,雅致的,俊秀的,调皮的,时尚的"

const lastName = "公孙离,明世隐,女娲,梦奇,苏烈,周瑜,百里玄策,百里守约,后羿,铠,鬼谷子,芈月,干将莫邪,孙悟空,花木兰,东皇太一,阿轲,刘备,孙膑,大乔,哪吒,诸葛亮,黄忠,杨戬,橘右京,亚瑟,马可波罗,太乙真人,雅典娜,夏侯惇,蔡文姬,成吉思汗,关羽,虞姬,不知火舞,刘邦,钟馗,李元芳,李白,娜可露露,兰陵王,张飞,貂蝉,吕布,牛魔,张良,露娜,韩信,艾琳,安琪拉,姜子牙,武则天,王昭君,甄姬,扁鹊,高渐离,嬴政,妲己,老夫子,达摩,典韦,曹操,钟无艳,墨子,程咬金,白起,刘禅,庄周,项羽,狄仁杰,鲁班七号,宫本武藏,小乔,赵云,廉颇,孙尚香,暗裔剑魔,阿狸,阿卡丽,牛头酋长,阿木木,冰晶凤凰,安妮,寒冰,龙王索尔,阿兹尔,巴德,机器人,布隆,皮城女警,青钢影,库奇,德莱厄斯,黛安娜,德莱文,蒙多,艾克,伊莉丝,伊芙琳,伊泽瑞尔,末日,剑姬,菲兹,加里奥,盖伦,纳尔,酒桶,男枪,人马,大发明家,艾瑞莉娅,翠神,凤女,嘉文四世,贾克斯,杰斯,烬,金克丝,卡莉丝塔,卡尔玛,死歌,卡萨丁,卡特琳娜,天使,凯隐,凯南,卡兹克,千珏,克烈,大嘴,妖姬,盲僧,蕾欧娜,丽桑卓,奥巴马,璐璐,拉克丝,石头人,蚂蚱,大树,剑圣,赏金,孙悟空,莫甘娜,娜美,狗头,泰坦,豹女,梦魇,努努,奥拉夫,发条,奥恩,潘森,波比,奎因,洛,龙龟,雷克塞,雷克顿,雷恩加尔,锐雯,兰博,瑞兹,猪妹,小丑,慎,龙女,炼金,老司机,希维尔,斯卡纳,琴女,索拉卡,斯维因,辛德拉,塔姆,岩雀,男刀,塔里克,提莫,锤石,炮娘,蛮王,崔斯特,图奇,乌迪尔,厄加特,韦鲁斯,薇恩,小法,维克兹,蔚,维克托,弗拉基米尔,沃里克,霞,泽拉斯,赵信,亚索,约里克,扎克,劫,吉格斯,基兰,佐伊,婕拉,陈伟霆,李小璐,刘诗诗,周笔畅,鹿晗,黄子韬,张艺兴,乔振宇,高大伟,贾乃亮,张颂文,雷杰,马苏,张铭鑫,罗米,舒畅,杨幂,刘亦菲,周杰伦,邓超,郑凯,金星,张迪,华晨宇,赵丽颖,霍建华,胡歌,范冰冰,李冰冰,唐嫣,郑爽,胡彦兵,迪丽热巴,韩庚,杨洋,刘德华,吴亦凡,关晓彤,周星驰,赵本山,王俊凯,成龙,李易峰,全智贤,佟丽娅,林心如,张杰,谢娜,易烊千玺,张国荣,张曦予,刘涛,李晨,乔任梁,苍井空,文章,杨紫,姚笛,波多野结衣,黄晓明,王源,宋仲基,小泽玛利亚,权志龙,范·迪塞尔,金城武,史泰龙,Angelababy,彭于晏,李连杰,艾薇儿,贾老板,宋慧乔,景甜"

const FN = fristName.split(',')
const LN = lastName.split(',')
// console.log(FN)
// console.log(LN)

// 随机数函数
function randomNum(minNum,maxNum){
    switch(arguments.length){
    case 1:
     return parseInt(Math.random()*minNum+1);
    break;
    case 2:
     return parseInt(Math.random()*(maxNum-minNum+1)+minNum);
    break;
    default:
     return 0;
    break;
    }
}
// 昵称
$("#name").click(function(){
    const nickName = FN[randomNum(0,17)] + LN[randomNum(0,280)];
    $("#name").text(nickName);
    localStorage.name = nickName;
});

// 男头像
const menPhoto =  "./libs/photo/"+randomNum(1,6) +".png";
$("#men").attr('src',menPhoto);
$("#men").click(function(){
    localStorage.menPh = menPhoto;
    localStorage.womenPh = '';
    localStorage.sex = '男';
    $(this).addClass('select-border')
    $("#women").removeClass('select-border')
})


const womenPhoto = "./libs/photo/"+randomNum(7,12) +".png"
$("#women").attr('src',womenPhoto);
// 女头像
$("#women").click(function(){
    localStorage.womenPh = womenPhoto;
    localStorage.menPh = '';
    localStorage.sex = '女';
    $(this).addClass('select-border')
    $("#men").removeClass('select-border')
})


$("button").click(function(){
    window.location.href = "test.html"
})

