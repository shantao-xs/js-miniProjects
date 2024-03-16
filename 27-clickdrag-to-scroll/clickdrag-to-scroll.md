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

### 3. mouse event
1. mousedown：在元素内按下（不需要松开）
2. mousemove：光标在元素内移动（左右）
3. mouseup：松开鼠标按键（只是松开，不是click那种按下-松开）
4. mouseleave：光标离开这个元素

### 4. 其他
1. 防止页面自动刷新：ele.preventDefault()
    - 什么时候许需要防止页面自动刷新？如提交表单、拖拽页面、点击url等