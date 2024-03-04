## 要求
1. 所有图片横向等宽排列，所有文字在图片正中，小字隐藏
2. 点击某张图片时，图片拓宽，小字分别从上从下进入画面

## steps
1. 选中元素数组
2. 监听click事件并执行transition 的css样式类
3. 监听open-active事件并执行函数，让隐藏文字浮动到这个图片上

## 知识点
1. flex box - contianer vs items：在container中控制所有item变成flex排布，并控制整体空间（如上下居中，左右居中等），在item中控制不同items之间的占比（包括grow，shrink，basis）/顺序（order）等问题
    - 具体请看what the flexbox的笔记
2. 用toggle增加/取消样式类： 
    - 直接：this.classList.toggle('.className')
    - 或者增加if条件以监测某个属性，再toggle：if(e.propertyName.includes('.xxx'))
3. 用transitionend监听完成了css过渡效果（？）的事件（此处是在.panel >*的所有元素中都设置了过渡）

## 问题
什么是“过渡效果”？


