// //css选择器--document.querySelector()
// var img4=document.querySelector('#images>a:nth-child(4)');
// //ID--docment.getElementById()
// var img4=document.getElementById('images').children[4];
// //类名--document.getElementsByClassName()
// var img4=document.getElementsByClassName('hiddenImg')[3];
// //标签名--document.getElementsByTagName
// var img4=document.getElementsByTagName('a')[4];

//获得一组li文本
var txtList=document.querySelectorAll(".txtItem");



// console.log(img4);
// img4.style.display="block";
// img0.style.display="none";

// //获取一组带超链接的图像
var imagesA=document.getElementById("images").children;
console.log(imagesA);

var txtList=document.querySelectorAll(".txtItem");

//行内样式实现换显示样式
// //26行元素隐藏
// imagesA[0].style.display="none";
// //30行元素显示
// imagesA[4].style.display="block";


// //通过更换CSS类名来实现
// //26行元素隐藏
// imagesA[0].className="hiddenImg";
// //38行元素显示
// imagesA[4].className="displayImg";

//利用计时器间隔15，显示1张图像，其余图像隐藏。

//初始化当前显示的图片/文本编号
var currentNo=0;
function changeImg(){
    //排他原理，先去掉同类，再突出自己
    var nodeLength=txtItem.length
    for(var i=0;i<nodeLength;i++){
        //同类图片透明度0（.hiddenImg)
        imagesA[i].className="hiddenImg";
        //同类文本设置正常非高亮
        txtList[currentNo].className="txtItem nodeLength";
        // console.log(imagesA[i]);
    }
    // //或者
    // for(const item of imagesA){
    //     item.className="hiddenImg";
    // }

    //再突出自己
    imagesA[currentNo].className="displayImg";
    txtList[currentNo].className="txtItem heighlightColor";
    // 换个元素，为下一次计时器调用做准备
    if(currentNo<7){currentNo++;}
    else{
        currentNo=0;
    }
    // console.log(currentNo);
}
//网页加载后启动定时器
var timer=window.setInterval(changeImg,1000)
//鼠标移入后重置定时器
function starChange(){
    timer=window.setInterval(changeImg,1000);
}
//鼠标移出后移除定时器
function starChange(){
    window.clearInterval(timer);
}
var imagesDiv=document.getElementById('#images');
 console.log(imagesDiv);
//定义启动定时器函数，函数功能为启动定时器

//定义停止定时器函数，函数功能为停止定时器

//为轮播图添加鼠标移入事件
imagesDiv.addEventListener('mouseover',starChange);
imagesDiv.addEventListener('mouseout',stopChange);
