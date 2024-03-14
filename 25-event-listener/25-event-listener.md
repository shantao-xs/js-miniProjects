# event listener related
## 提问：
什么是event触发的默认模式？
什么是capture，怎么使用？
什么是propogation，怎么使用？
怎么使用once？




## 知识点
假设现在选中了所有的div元素...
default: bubbling 默认事件从被触发的最里层div开始往外层层触发
capture：true 从外到里触发，会从最外层的div开始往内逐层触发
.stopPropogation() 阻止向别的层级bubbling，只有本div元素会被触发事件
once 事件只会被触发一次
