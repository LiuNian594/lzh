[toc]
#亚马逊轮播图
##任务
亚马逊首页活动轮播图。
1. 图片自动切换，鼠标移入图片区自动切换停止。
2. 单机左右两个按钮时，可以将图片切换到对应方向的下一张或上一张。
3. 图片切换时，有淡入淡出效果，底部说明跟随切换，并高亮（橙色显示）
4. 鼠标移入文本区时，切换到对应图片，且文本区升高
##程序逻辑
1. 自动切换图片
- 切换图片，使用图片堆叠方式，通过控制图片的透明度实现，JS程序中，定时切换样式。
- 定时器，更换相关点的样式（图片，文本）。
- 定时器停止，样式保留为最后一次定时器执行时的状态。
- 涉及事件：鼠标移入移出
2. 上一张下一张
- 单机“下一张”按钮/图标，切换下一张图片，如果图片到达最后一张，让图片切回第1张
- 单机“上一张”按钮/图标，切换下一张图片，如果图片到达第一张，让图片切回最后一张图片
- 涉及事件：单击
## 解决方案
html