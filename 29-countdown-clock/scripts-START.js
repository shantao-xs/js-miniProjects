//格式已经设计好，要求：1. 点击对应时间按钮可以倒数 2.可以自定义倒数时长
//时间相关的联系. 1s=1000毫秒
let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTimeDisplay = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');
const customTime = document.querySelector('#custom');

//!! 为什么计时器现在动不起来？
function timer(seconds){
    //!!! 为了避免重复点击两个时间，出现两个不能停的setinterval，在新的timer执行前，要把旧的停掉
    clearInterval(countdown);

    const now = Date.now();
    const then = now+seconds*1000;
     //注意要包含刚开始的那个时间（如10s倒计时从10开始）
    displayTimeLeft(seconds);
    //展示剩余时间
    displayEndTime(then);
    //setinterval(func,intervalTime):创建一个计时器。按照时间间隔intervalTime，重复执行函数func
    countdown = setInterval(() => {
        //计算剩余秒数
        const secondsLeft = Math.round((then-Date.now())/1000);
        //如果倒计时到0就停止
        if(secondsLeft<0){
            clearInterval(countdown); //为什么这里要输入countdown?
            return;
        }
        displayTimeLeft(secondsLeft);       
    }, 1000); 
}

//展示计时器，用时分秒的形式分别展现
//注意这个textcontent属性，用来动态更新文本值
//注意如果mins为0的时候
function displayTimeLeft(seconds){
    const mins = Math.floor(seconds/60);
    const secs = seconds%60;
    const display = `${mins}:${secs<10?'0':''}${secs}`; //格式细节：为了让秒数的个位数也以0*的形式出现，这里需要令秒在10以下时在secs前面增加0

    timerDisplay.textContent = display;
    //让标题栏变成动态变化的时间
    document.title = display;
}

function displayEndTime(timestamp){
    //timestamp:时间戳，可以从中分别获取hours,date,mins等
    const end = new Date(timestamp);
    const hours = end.getHours();
    const minutes =end.getMinutes();
    endTimeDisplay.textContent = `be back at ${hours}:${minutes}`;
}

function startTimer(){
    const seconds = parseInt(this.dataset.time); //读取每个button的data-time值，注意转换成数字而不是字符串
    timer(seconds);
}
buttons.forEach(button=>button.addEventListener('click',startTimer));

function startCustomTimer(e){
    e.preventDefault(); //表单提交惯例防止默认刷新
    const minutes = this.querySelector('input[name=minutes]').value; //注意选择元素的写法不要搞错
    const seconds = minutes*60;
    timer(seconds);
    this.reset();
}
customTime.addEventListener('submit',startCustomTimer);

//延申：初始仪表板有界面。功能只限制在3小时内，如果超出会弹出提醒
//倒计时增加小时