$(function () {
    // let flag = true;
    // $('.button1').click(function () {
    //     if (flag) {
    //         $(this).siblings('.logo').children('.logo1').html('钟情于LOL，jisoo，rose，吴世勋，鹿晗,Jay等各路优秀的明星~ 这个废柴能熟练掌握面向百度编程、Windows和Linux的开关机、\' +\n' +
    //             '//                 \'PS和PR的安装和卸载，还喜欢看剧，请回答1988，一闪一闪亮星星等等（（（。。。生命不息，折腾不止！目前坐等毕业中...');
    //         flag = false;
    //     } else {
    //         $(this).siblings('.logo').children('.logo1').html('我这一生都是坚定不移的唯物主义者,唯你,我希望有来生');
    //         flag = true;
    //     }
    // })

    $('.photo').on('click',function () {
            // $('.min').fadeToggle(1000);
        $('.clock').fadeToggle(1000);
        }
    )
    $('.min').click(function () {
        $('.small-box').stop().fadeToggle(1000);
    })
    $('.vanish').on('click',function () {
        $('.small-box,.min,.tap').stop().fadeToggle(1000);
    })
})

window.addEventListener('load',function () {
    let btn = document.querySelector('.button1');
    let text = document.querySelector('.logo1');
    let logo = document.querySelector('.logo');
    let flag = true;
    btn.addEventListener('click',function () {
        if(flag){
            logo.style.height = '100px';
            text.innerHTML='钟情于LOL，jisoo，rose，吴世勋，鹿晗,Jay等各路优秀的明星~ 这个废柴能熟练掌握面向百度编程、Windows和Linux的开关机、' +
                'PS和PR的安装和卸载，喜欢看剧，请回答1988，一闪一闪亮星星等等（（（。。。生命不息，折腾不止！目前坐等毕业中...';
            flag = false;
        } else {
            logo.style.height = '50px';
            text.innerHTML = '我这一生都是坚定不移的唯物主义者,唯你,我希望有来生';
            flag = true;
        }
    })

    let vanish = document.querySelector('.vanish');
    vanish.addEventListener('mouseover',function () {
        vanish.innerHTML="miss"
    })
    vanish.addEventListener('mouseleave',function () {
        vanish.innerHTML = '';
    })
    let ul = document.querySelector('.last');
    let a = ul.querySelectorAll('a');
    let lis = ul.children;
    for (let i = 0;i < lis.length;i++){
        lis[i].addEventListener('mouseover',function () {
            this.children[1].style.display = 'block';
        })
        lis[i].addEventListener('mouseout',function () {
            this.children[1].style.display = 'none';
        })
    }
})



