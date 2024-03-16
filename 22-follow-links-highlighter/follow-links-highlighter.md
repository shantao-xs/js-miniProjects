# follow links highlighter
## 功能
移动鼠标时，页面上的鼠标当前移动到的links<a>会高亮
已有：css样式highlight

## 步骤
1. 监听所有的a，触发事件mouseenter时执行
    - mouseenter evnet: 鼠标首次移动到**时
    - !注意allselect返回的是nodelist，需要遍历每个元素
2. 创建一个拥有highlight的css样式效果的newHL的元素，把他加到要应用的页面范围里：body.appendChild
3. 平移newHL的位置到被监听的<a>元素上
    - 元素位置：top,left
        - 细节：防止页面向下滑动后highlighter位置的偏移 .top 和.left需要+window.scrollY/X
    - 元素大小：width, height
    - 获取<a>元素所在位置和大小：可以用.offsetWidth, .offsetTop等来获取，也可以用getBoundingClientRect()后使用.width, .top等来获取，更加直观方便

## 易错点
1. forEach和map的区别？
    -  foreach：需要改变原数组时，map：产生新数组时
2. 怎么在js中配置css的内联样式？
    1. 用element.sytle访问该属性 
    2. 用字符串类型来写，比如xx.style.color="blue"或者模板字符串`${this.offsetWidth}px` 
    3. ！从js获取的样式尺寸没有单位，不要忘记转为css样式的时候需要写单位px！
    4. ！转为css样式的时候``封口不对
3. 拼写错误，特别是transform!
    //1.监听所有的a，触发事件mouseenter时执行（注意allselect返回的是nodelist） 2.创建一个新的由highlight效果的元素newHL放入body全局，可以随着鼠标移动改变定位 3.根据当前鼠标所在地（this）的位置、大小，确定newHL的位置、大小（这一步注意拉动页面改变window.scrollX/Y可能会造成的偏移）
4. <css相关>style.width和offsetwidth的区别？
    - 前者是元素宽度，后者是包括内边距、边框和滚动条的整个元素的可见宽度
5. <css相关> css内联和外联的区别？
    - 内联：在html文件中写 外联：在css文件中写再导入html文件 
    - 如果是这种用变量动态操作样式必须得在js里写内联
6. 什么是transition？什么是transform？
    - transition：动画相关，让元素的交互更加平滑
    - transform：位移相关，让元素平移(改变xy轴坐标)、旋转、缩放、倾斜等，常用的有translate,rotate,scale,skewd




写位置相关的文档：当前元素，窗口位置，阴影元素等

什么是transitions？动画？
什么时候用foreach/map？