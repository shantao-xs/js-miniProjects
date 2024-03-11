# day 16 shadow mouse move
## 功能
移动鼠标时，该图片的重叠阴影会随着鼠标方向移动

## 步骤
1. 选择锚点节点anchor，确定它的宽高
    - `const {offsetWidth: width, offsetHeight:height} = anchor`
2. 选择运动节点shadow，确定它的相对位置（相对于父元素anchor的左偏移left和顶部偏移top
    - `e.target.offsetLeft, e.target.offsetTop`
2. 监听anchor的mousemove event，获得鼠标移动的偏移量（基于其定位父元素左边缘的偏移量）
    - `let {offsetX : x, offsetY: y}=event`
3. 计算鼠标该偏移的距离，具体看要获得什么样的效果。比如不是让目标节点移动，而是让和目标节点重叠的shadow元素移动
    - 此处无脑套公式`Math.round((x / width * moveRange) - (moveRange / 2))`
4. 对运动节点shadow施加（可以是多个的）阴影效果
    - shadow.style.textShadow = \`${x_range_px y_range_px 0px color}`


## 知识点
### CSS

### JS
1. this和e.target的区别：
  - this：你监听的对象元素
  - e.target：触发监听事件的对象，比如点击了对象元素中的某个子元素，e.target就会指向这个子元素，而不是被监听的元素

2. mousemove event
    - offsetX & offsetY: offSetX：事件对象和目标节点的padding边在x轴/y轴上的偏移量
