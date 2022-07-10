window.addEventListener('load',function () {
    function getTimer(){
        let clock = document.querySelector('.clock');
        let date = new Date();
        let hh = date.getHours();
        hh = hh < 10 ? '0' + hh:hh;
        let mm = date.getMinutes();
        mm = mm < 10 ? '0' + mm:mm;
        let ss = date.getSeconds();
        ss = ss < 10 ? '0' + ss:ss;
        // return hh + ':' + mm +':' + ss;
        clock.innerHTML = hh + ':' + mm +':' + ss;
    }
    getTimer();
    setInterval(function () {
        getTimer();
    },1000);
})