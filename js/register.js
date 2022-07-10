window.addEventListener('load',function () {
    let left = document.querySelector('.left');
    let right = document.querySelector('.right');
    let ball = document.querySelector('.ball');
    let small_ball = ball.querySelector('.small-ball')
    let box = document.querySelector('#big-box');
        let flag = true;
        ball.addEventListener('click',function () {
            if(flag){
                box.style.transform = "rotateY(180deg)";
                small_ball.style.left = 79 + 'px';
                flag = false;
            } else {
                box.style.transform = "rotateY(0deg)";
                small_ball.style.left = 0;
                flag = true;
            }
        })

    left.addEventListener('click',function () {
        let lef = small_ball.style.left;
        let num1 = lef.substring(0,1);
        // console.log(num1);
        if(num1 == 0){
            return false;
        } else{
            ball.click();
        }
        small_ball.style.left = 0;
    });
    right.addEventListener('click',function () {
        let rig = small_ball.style.left;
        let num = rig.substring(0,2);
        // console.log(num);
        if(num == 79){
            return false;
        } else{
            ball.click();
        }
        small_ball.style.left = 79 + 'px';
    })
    let user = document.getElementsByName('user')[0];
    // console.log(user);
    let email = document.getElementsByName('email')[0];
    let pwd = document.getElementsByName('pwd')[0];
    let repwd = document.getElementsByName('repwd')[0];
    let pwd1 = document.getElementsByName('pwd1')[0];
    let user1 = document.getElementsByName('user1')[0];
    let message1 = document.querySelector('.message1');
    let message2 = document.querySelector('.message2');
    let message3 = document.querySelector('.message3');
    let message4 = document.querySelector('.message4');
    let message5 = document.querySelector('.message5');
    let message6 = document.querySelector('.message6');
    let eye = document.querySelector('.eye');
    let reg = document.querySelector('.reg');
    // console.log(message)
    let a = [user,user1];
    for(let i = 0;i < a.length; i++){
        a[i].addEventListener('blur',function () {
            if(this.value.length < 2 || this.value.length > 6){
                this.nextElementSibling.classList.remove('green');
                this.nextElementSibling.classList.add('red');
                this.nextElementSibling.innerHTML = '请输入2~6个字母或文字';
                // this.focus();
                // console.log(this.nextSibling)
            } else {
                this.nextElementSibling.classList.remove('red');
                this.nextElementSibling.classList.add('green');
                this.nextElementSibling.innerHTML = '用户名输入正确';
                // email.focus();
            }
        })
    }
    email.addEventListener('blur',function () {
        let x = this.value;
        a = x.indexOf('@');
        b = x.lastIndexOf('.');
        if(a < 1 || b < a + 2 || b + 2 >= x.length){
            message2.classList.remove('green');
            message2.classList.add('red');
            message2.innerHTML = '邮箱格式不正确，请重新输入'
        } else{
            message2.classList.remove('red');
            message2.classList.add('green');
            message2.innerHTML = '邮箱输入正确';
        }
    })
    pwd.addEventListener('blur',function () {
        let res_password = /^(?=.*[0-9])(?=.*[a-zA-Z])[0-9A-Za-z~!@#$%^&*._?]{8,15}$/;
        if(res_password.test(pwd.value)){
            message3.classList.remove('red');
            message3.classList.add('green');
            message3.innerHTML = '密码输入正确';
        } else {
            message3.classList.remove('green');
            message3.classList.add('red');
            message3.innerHTML = '密码须包含数字和字母，且在8~15位之间'
        }
    })
    pwd1.addEventListener('blur',function () {
        let res_password = /^(?=.*[0-9])(?=.*[a-zA-Z])[0-9A-Za-z~!@#$%^&*._?]{8,15}$/;
        if(res_password.test(pwd.value)){
            message6.classList.remove('red');
            message6.classList.add('green');
            message6.innerHTML = '密码输入正确';
        } else {
            message6.classList.remove('green');
            message6.classList.add('red');
            message6.innerHTML = '密码须包含数字和字母，且在8~15位之间';
        }
    })
    repwd.addEventListener('blur',function () {
        if(repwd.value == pwd.value && repwd.value != ''){
            message4.classList.remove('red');
            message4.classList.add('green');
            message4.innerHTML = '密码一致';
        } else {
            message4.classList.remove('green');
            message4.classList.add('red');
            message4.innerHTML = '密码不一致，请重新输入';
        }
    })
    let i = 0;
    eye.addEventListener('click',function () {
        if(i == 0){
            pwd1.type = 'text';
            this.innerHTML = '&#xe6a0;'
            i = 1;
        } else {
            pwd1.type = 'password';
            this.innerHTML = '&#xe6a2;';
            i = 0;
        }
    })
    // reg.addEventListener('click',function () {
    //         // if(user.value != '' && email.value != '' && pwd.value != '' && repwd.value != ''){
    //         //         right.click()
    //         // }
    // })
})
