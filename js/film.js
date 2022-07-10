window.addEventListener('load',function () {
    let left = document.querySelector('.left');
    let right = document.querySelector('.right');
    let banner = document.querySelector('.banner');
    let ul = banner.querySelector('ul');
    let lis = ul.querySelectorAll('li');
    let ol = banner.querySelector('ol');
    let BannerWidth = banner.offsetWidth;
    banner.addEventListener('mouseover',function () {
        left.style.display = 'block';
        right.style.display = 'block';
        clearInterval(timer);
        timer = null;
    })
    banner.addEventListener('mouseout',function () {
        left.style.display = 'none';
        right.style.display = 'none';
        timer = setInterval(function () {
            right.click();
        },2000)
    })
    for(let i = 0;i < lis.length;i++){
        let li =document.createElement('li');
        li.setAttribute('index',i);
        ol.appendChild(li);
        li.addEventListener('click',function () {
            for (let i = 0;i < lis.length;i++){
                ol.children[i].className = '';
            }
            this.className = 'current';
            let index = this.getAttribute('index');
            num = index;
            circle = index;
            animate(ul,-index * BannerWidth);
        })
    }
    ol.children[0].className = 'current';
    let num = 0;
    let circle = 0;
    let first =lis[0].cloneNode(true);
    ul.appendChild(first);
    let flag = true;
    right.addEventListener('click',function () {
        if(flag){
            flag = false;
            if(num == ul.children.length -1){
                ul.style.left = 0;
                num = 0;
            }
            num++;
            animate(ul,-num * BannerWidth,function () {
                flag = true;
            })
            circle++;
            if(circle == ol.children.length){
                circle = 0;
            }
            circlechange();
        }
    })
    left.addEventListener('click',function () {
        if(num == 0){
            num = ul.children.length - 1;
            ul.style.left = - num * BannerWidth;
        }
        num--;
        animate(ul,-num * BannerWidth)
        circle--;
        // if(circle < 0){
        //     circle = ol.children.length - 1;
        // }
        circle = circle < 0? ol.children.length - 1:circle;
        circlechange()
    })
    function circlechange() {
        for(let i = 0;i < ol.children.length;i++){
            ol.children[i].className = '';
        }
        ol.children[circle].className = 'current';
    }
    let timer = setInterval(function () {
        right.click();
    },2000)

    let intro = document.querySelector('.intro');
    let boxs = intro.querySelectorAll('div');
    // console.log(boxs);
    // console.log(boxs[0]);
    let i = 0;
    boxs[0].addEventListener('click',function () {
        // this.style.transform = 'rotateY(180deg)';
        if(i == 0){
            this.style.fontSize = '9px';
            this.style.lineHeight = '15px';
            this.innerHTML = '《不能说的秘密》是周杰伦导演，杜致朗、周杰伦编剧，周杰伦、桂纶镁、黄秋生、曾恺玹等主演，于2007年7月31日在中国大陆上映。该片是周杰伦自导自演的电影处女作。\n' +
                '影片以周杰伦自己的高中生活为背景，讲述了转学到一所艺术学校的钢琴天才小伦在一间古老的钢琴练习室里见到演奏神秘钢琴乐的路小雨进而展开的一段奇幻爱情故事';
            i = 1;
        } else{
            this.style.fontSize = '20px';
            this.style.lineHeight = '100px';
            this.innerHTML = '不能说的秘密';
            i = 0;
        }
    })
    let a = 0;
    boxs[1].addEventListener('click',function () {
        // this.style.transform = 'rotateY(180deg)';
        if(a == 0){
            this.style.fontSize = '18px';
            this.style.lineHeight = '22px';
            this.innerHTML = '该剧改编自顾漫同名小说，主要讲述何以琛和赵默笙一段年少时的爱恋牵出一生的情缘，一个执着于等待和相爱的故事。';
            a = 1;
        } else{
            this.style.fontSize = '20px';
            this.style.lineHeight = '100px';
            this.innerHTML = '何以笙箫默';
            a = 0;
        }
    })
    let b= 0;
    boxs[2].addEventListener('click',function () {
        // this.style.transform = 'rotateY(180deg)';
        if(b == 0){
            this.style.fontSize = '14px';
            this.style.lineHeight = '15px';
            this.innerHTML = '影片讲述藤原拓海代替父亲藤原文太每天运送豆腐而无意中成长为一个“飘移”高手并打败了中里毅、须藤京一等赛车高手。而这时，藤原拓海的恋爱出现了危机。最终藤原拓海决定加入赛车队，开始一个真正赛车手的生活。';
            b = 1;
        } else{
            this.style.fontSize = '20px';
            this.style.lineHeight = '100px';
            this.innerHTML = '头文字D';
            b = 0;
        }
    })
    let c = 0;
    boxs[3].addEventListener('click',function () {
        // this.style.transform = 'rotateY(180deg)';
        if(c == 0){
            this.style.fontSize = '16px';
            this.style.lineHeight = '22px';
            this.innerHTML = '该剧讲述了林北星意外删除旧手机中的短信回到过去，重新认识了昔日陌路校友张万森，从而展开一段奇妙的时空拯救之旅的故事';
            c = 1;
        } else{
            this.style.fontSize = '20px';
            this.style.lineHeight = '100px';
            this.innerHTML = '一闪一闪亮星星';
            c = 0;
        }
    })
    let d = 0;
    boxs[4].addEventListener('click',function () {
        // this.style.transform = 'rotateY(180deg)';
        if(d == 0){
            this.style.fontSize = '9px';
            this.style.lineHeight = '15px';
            this.innerHTML = '首尔市道峰区双门洞住着五个家庭，这五个家庭都有一个生于1971年孩子。德善、善宇、东龙、崔泽' +
                '、正焕，是从小一起长大的好朋友，1988年时他们正处于18岁的青春年华。他们有着共同的兴趣，也有着共同崇拜的偶像，彼此之间还有着暧昧的男女情愫。在那个纯真的年代，他们共同谱写了许多美好的记忆.';
            d = 1;
        } else{
            this.style.fontSize = '20px';
            this.style.lineHeight = '100px';
            this.innerHTML = '请回答1988';
            d = 0;
        }
    })
    let e = 0;
    boxs[5].addEventListener('click',function () {
        // this.style.transform = 'rotateY(180deg)';
        if(e == 0){
            this.style.fontSize = '9px';
            this.style.lineHeight = '100px';
            this.innerHTML = '“斯人若彩虹,遇上方知有”';
            e = 1;
        } else{
            this.style.fontSize = '20px';
            this.style.lineHeight = '100px';
            this.innerHTML = '怦然心动(美)';
            e = 0;
        }
    })
    let img_box = document.querySelector('.img-box');
    let div = img_box.querySelectorAll('div');
    // console.log(div)
    for (let i = 0;i < div.length;i++){
        div[i].addEventListener('mouseover',function () {
            for(let i = 0;i < div.length;i++){
                div[i].classList.remove('active');
            };
            div[i].classList.add('active');
        })
    }
    let ball = document.querySelector('.ball');
    let me = document.querySelector('.me');
    let g = 1;
    ball.addEventListener('click',function () {
        if(g == 1){
            me.style.opacity = '1';
            img_box.style.display = 'none';
            g = 0;
        } else{
            me.style.opacity = '0';
            img_box.style.display = 'flex';
            g = 1;
        }
    })
})
