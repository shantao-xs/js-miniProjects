# click and drag to scroll

## 功能
鼠标点击卷轴，可以左右拖动

## 步骤
1. 选择并监听整个卷轴（重点：是整个卷轴，不是卷轴中的子元素）
2. 监听mouse的4种动作：down,up,move,leave，并施加事件触发的新css style
3. 记录mouse在down的位置，在move的位置，并算出移动距离walk
    - 怎么记录mouse在卷轴中的相对位置？卷轴在视口中的位置 vs mouse在视口中的位置
4. 记录卷轴向左偏移的距离scrollLeft，根据mouse walk，设定卷轴现在应该向右/向左移动多少距离
**重点：想要让整个卷轴移动，那所有步骤赋值的主体就是卷轴，而不是卷轴的子元素！**

## 知识点
### 1. e vs e.target vs this
```javascript
const slider = document.querySelector('.items');
slider.addEventListener('mousedown',(e)=>{...})
```
在上述文本中，类`'.items'`所在的元素被选中并监听了`'mousedown'`事件，针对其中被触发的具体元素（如item2），执行了箭头函数。明确这三者的定义：
this = <element>.items元素，是触发事件元素的**父元素**
e = <object>一个mousedown事件对象
e.target = <element>item2。mousedown事件对象的一个属性，指向触发事件的具体**子元素**，如item2

在此基础上，了解this和e和e.target属性的区别：
- **this：在箭头函数中使用this要格外小心。有赋值this的变量（如slider），就尽量不要用this！**
- e：可以获取mousedown相对于整个文档的位置
    - pageX,pageY
- e.target：可以获取mousedown相对于视口的位置尺寸
    - 尺寸：offsetWidth,offsetHeight或者getBoundingClientRect().width/height
    - 位置：
        1. 相对于**父元素**8items的偏移位置：offsetLeft,offsetTop
        2. 相对于**视口**的位置：clientX,clientY或者getBoundingClientRect().top/left

#### 视口vs窗口
视口是显示网页内容的整个取余，窗口包括地址栏搜索栏等  
一般情况下水平维度上，视口和窗口没差，但是碰到缩放、滚动等行为，明确视口在窗口里的相对位置至关重要

### 2. 位置信息（水平）
在整个页面中的位置：pageX
相对于视口的左边距：clientX/getBoundingClientRect().left
监听触发元素相对于**父元素**的偏移距离：offsetLeft
卷轴内元素向左移动的距离：scrollLeft

鼠标的位置：mouse event下的e
被监听元素的位置：this
触发event的对象的位置：e.target
页面的位置：window（页面下拉后的位置window.scrollY）

怎么得出A相对于B的位置？A在整个页面的位置-B相对于整个页面的位置

### 3. 卷轴
如何让卷轴可以左右移动？改变它的scrollLeft


### 4. mouse event
1. mousedown：在元素内按下（不需要松开）
2. mousemove：光标在元素内移动（左右）
3. mouseup：松开鼠标按键（只是松开，不是click那种按下-松开）
4. mouseleave：光标离开这个元素

### 5. 多个条件下执行函数
如何只允许AB条件都满足的情况下才执行函数func？
1. 针对AB条件引入新逻辑变量let isDown = false，随时toggle它，当它为true时表示当前条件被满足
2. 用别的属性检查办法（比如看active的css样式有没有被激活）来筛查

### 4. 其他
1. 防止页面自动刷新：ele.preventDefault()
    - 什么时候许需要防止页面自动刷新？如提交表单、拖拽页面、点击url等

## 易错点
//0319
- 注意什么是针对于viewport的位置，什么是针对于父元素的位置：要记录mousedown时的位置，对象应该是e(mousedown的event)而不是e.target
- 注意每次prev都要把slides的位置放在当前的slides.scrollLeft上！
- 记得过滤不点击只移动的情况！用isDown逻辑
- 拖拽页面时，要考虑preventDefault。此外还有提交表单，点击url等情况