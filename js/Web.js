window.addEventListener('load',function () {
    let textarea = document.querySelector('textarea');
    let submit = document.querySelector('button');
    let ul = document.querySelector('ul');
    submit.addEventListener('click',function () {
        if(textarea.value == ''){
            alert('诶你还没有留言呢');
            return false;
        } else {
            let li = document.createElement('li');
                let date = new Date();
                let year = date.getFullYear();
                let month =date.getMonth() + 1;
                let dates = date.getDate();
                let day = date.getDay();
                let arr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
                let hh = date.getHours();
                hh = hh < 10 ? '0' + hh:hh;
                let mm = date.getMinutes();
                mm = mm < 10 ? '0' + mm:mm;
                let ss = date.getSeconds();
                ss = ss < 10 ? '0' + ss:ss;
            li.innerHTML = year + '年' + month + '月' + dates + '日' +'&nbsp' + hh + ':' + mm +':' + ss + '&nbsp&nbsp' + arr[day] + '&nbsp&nbsp&nbsp:&nbsp' + textarea.value + '<a href=\'javascript:;\'>删除</a>';
            textarea.value = '';
            ul.insertBefore(li,ul.children[0]);
            let a = document.querySelectorAll('a');
            for (let i = 0;i < a.length;i++){
                    a[i].addEventListener('click',function () {
                        ul.removeChild(this.parentNode);
                    })
            }
        }
    })
    let QQ = document.querySelector('.QQ');
    let WC = document.querySelector('.WC');
    let qq1 = document.querySelector('.qq');
    let wc1 = document.querySelector('.wc');
    let qq = document.querySelector('.qq').querySelector('img');
    let wc = document.querySelector('.wc').querySelector('img');
    let i = 0;
    QQ.addEventListener('click',function () {
        if(i == 0){
            qq1.style.left = '150px';
            qq.style.opacity = '.9';
            i = 1;
        } else {
            qq1.style.left = '30px';
            qq.style.opacity = '0';
            i = 0;
        }
    })
    let a = 0;
    WC.addEventListener('click',function () {
        if(a == 0){
            wc1.style.left = '501px';
            wc.style.opacity = '.9';
            a = 1;
        } else {
            wc1.style.left = '381px';
            wc.style.opacity = '0';
            a = 0;
        }
    })
})
$(function () {
    // let midTop =$('.mid').offset().top;
    setInterval(function () {
        // console.log($('.mid').offset().top) //一直为0?
        // console.log($(document).scrollTop())
    },1000)
    toggleTool();
    function toggleTool() {
        if($(document).scrollTop() >= 900){
            $(".top img").fadeIn();
        } else {
            $('.top img').fadeOut();
        }
    }
    $(window).scroll(function () {
        toggleTool();
    })
})