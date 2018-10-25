var randomNumber = Math.floor(Math.random() * 100) + 1;


//调用DOM接口API document对象的querySelector()函数获取页面元素
//https://developer.mozilla.org/zh-CN/docs/Web/API/Document/querySelector

//获取页面中的由选择器.guesses定位的第一个html元素
//获取猜数历史数据存放区
var guesses = document.querySelector('.guesses');
var lastResult = document.querySelector('.lastResult');
var lowOrHi = document.querySelector('.lowOrHi');
var guessSubmit = document.querySelector('.guessSubmit');
var guessField = document.querySelector('.guessField');

//初始化猜数控制数据
var guessCount = 1;//设置猜测次数为1
var resetButton;//设置重置按钮变量
// 通过调用HTMLElement接口API，HTMLElement.focus()方法可以设置指定元素获取焦点。
// https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/focus
guessField.focus();//使得猜数文本区获得焦点


//定义猜数游戏函数
function checkGuess() {
    //获取用户输入的数据，并将其转换为数字
    var userGuess = Number(guessField.value);
    //如果用户猜测次数为1，则在猜数历史数据字符串中增加前缀提示
    if (guessCount === 1) {
        guesses.textContent = '上次猜的数: ';
    }
    //将用户输入的猜数接入猜数历史中，并用空格隔开
    guesses.textContent += userGuess + ' ';

    //判断是否猜中
    if (userGuess === randomNumber) {
        lastResult.textContent = '恭喜你！猜对了！';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        setGameOver();
    } else if (guessCount === 10) {
        lastResult.textContent = '!!!GAME OVER!!!';
        lowOrHi.textContent = '';
        setGameOver();
    } else {
        lastResult.textContent = '你猜错了！';
        lastResult.style.backgroundColor = 'red';
        if (userGuess < randomNumber) {
            lowOrHi.textContent = '刚才你猜低了！';
        } else if (userGuess > randomNumber) {
            lowOrHi.textContent = '刚才你猜高了！';
        }
    }
    guessCount++;
    guessField.value = '';
    guessField.focus();
}
guessSubmit.addEventListener('click', checkGuess);
function setGameOver() {
    //禁用文本框输入
    guessField.disabled = true;
    //禁用确定按钮
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = '开始新游戏';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}
function resetGame() {
    guessCount = 1;
    var resetParas = document.querySelectorAll('.resultParas p');
    for(var i = 0 ; i < resetParas.length ; i++) {
      resetParas[i].textContent = '';
    }
    resetButton.parentNode.removeChild(resetButton);
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();
    lastResult.style.backgroundColor = 'white';
    randomNumber = Math.floor(Math.random() * 100) + 1;
  }