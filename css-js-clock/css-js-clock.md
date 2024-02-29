# CSS & JS clock

## key features
### 指针实时旋转
1. 选择元素：定位到各指针元素的位置（以便之后更改这些元素的css style）
2. updateTime函数：
- 获取当前时间的时分秒，分别计算当前时间在时钟里的度数
- 更新每个指针元素的style的transform的度数，用字面量来写${}
3. 重复调用updateTime:通过setInterval令每隔一秒钟都调用一遍updateTime函数(注意：确保最后执行了updateTime)

### core points
1. 元素选择器 document.querySelector
2. 获取日期及精确到时分秒 new Date(), .getSeconds()
3. 改变css sytle：模板字符串/`${val}`和 targetElement.style.transform=...
4. 重复调用函数: setInterval(func, time)
5. css样式：
    5.1 transform 旋转，缩放，倾斜，平移 中的rotate
    5.2 transition: all 0.05s 表示状态过渡，all：对所有状态变化的属性都施加transition效果，0.05s：变化的耗时，timing-function: cubic-bezier(1,-0.39, 0, 1.11)变化的加速曲线