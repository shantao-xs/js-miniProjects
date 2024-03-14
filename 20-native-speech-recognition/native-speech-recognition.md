# native speech recognition（web API相关）

## 功能
1. 用户说话时（英文）可以自动识别文字并显示
2. 停止说话会自动换行
3. 碰到关键词（如weather）会触发特殊效果
4. 拓展：让识别关键词hoop up to某个链接/图片/api

## 步骤


## 知识点
### 1. web api
web api可以是浏览器内置（如speechrecognition)，也可以是第三方api（如google maps api)
怎么读api的文档？

### 2. JS
1. DOM相关：getElementById和querySelector的区别？
    - getElementById：精准定位唯一id
    - querySelector：可以批量选择"#id"、".class"、\"[attribute]"

2. Array数组相关：includes和contains的区别？
    - includes：找array中是否有某个特定的值，如arr.includes(12)
    - contains：找DOM元素中某节点是否包含某子节点，如parent.contains(child)





调用speechrecognition方法
什么是.start方法？
什么是.interinResults方法？

监听result事件
什么是event.result? 什么是result[0]？什么是result的transcript属性？

document.createElement怎么用？
.createElemen创建html新元素，如.createElemen('p')创建新的<p>

一般搭配.appendChild把新元素添加进DOM指定位置（用getElementById-精准定位唯一id或者querySelector-批量选择）
如
para = document.createElemen('p')
para.textContent="新增了一段话"
document.getElementById('container').appendChild(para)

