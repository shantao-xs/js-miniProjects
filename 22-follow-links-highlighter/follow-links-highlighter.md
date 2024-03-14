# follow links highlighter
## 功能
移动鼠标时，页面上的鼠标当前移动到的links<a>会高亮

## 步骤
1. 选择所有想要监听的<a>元素，监听mouseenter（鼠标首次移动到**时）
2. 创建一个highlighter的元素，通过transform:translate来移动这个元素
3. 创建highlighter的样式（style.width/ height /transform）
4. 把highlighter元素加到父元素里 .append
5. 细节修正：防止页面向下滑动后highlighter位置的偏移 .top 和.left需要-window.scrollY/X





写位置相关的文档：当前元素，窗口位置，阴影元素等

什么是a元素？
什么是transitions？动画？
什么时候用foreach/map？