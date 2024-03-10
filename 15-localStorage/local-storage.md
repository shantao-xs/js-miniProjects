15 localstorage

event.preventDefault()防止页面自动刷新

知识点：input元素如何选中输入的文本内容querySelector('[name=targetInputBox]').value

功能；
输入文本框可以新增的菜单里
然后文本框被清空
在菜单里，每条数据都需要一个checkbox和具体的文本，如果被check，就把图标从复选框转换成一个emoji
数据存储在local，刷新页面也仍然不丢失
步骤：
1.监听submit，把监听的数据存到local storage
2.监听check，把check的装填存到local
其中的问题：怎么存？local需要什么样的datatype？怎么读取local的数据？
3. 把submit和check的结果应用到html页面上：ul和li的呈现，配合已经设置好的css样式


步骤：
1.监听到提交submit后，提取input框里的值，2.储存数据（注意要标记flag done:flase），并存入数据集
监听到checkbox被click后，也储存数据到localstorage
3.清空input：  this.reset()
4. html化：将数据集在页面中展示出来
4.1 展示：xx.innerHTML = ...
4.2 遍历数据集里的每条数据.map()最后再组合起来.join('')，每一条数据作为<ul>中的<li>展示
4.2.1 为了让checkbox的图标可以在复选框和emoji之间转换，需要判断是否要在input中引入checked这个属性（通过创建这条数据的时候给数据增加一个属性done:false来判定）
5. 在localstorage中存取、读写数据，与创建的数据集items交互
- 存入localstorage：.setItems()，注意，存储只能存字符串，所以要用JSON.stringify()来把object转换成字符串
- 读取localstorage并转为object：JSON.parse(localStorage.getItem('items))
6. 在localstorage中储存checkbox的状态
6.1 点击checkbox时，把checkbox的状态也记录下来
难点1：定位到的是input元素吗？还是它的父元素>
难点2：怎么保证这个input元素能够被识别？——新建一个属性data-index来储存唯一标识
难点3：怎么记录状态？用一个逻辑值来toggle，使checked的状态可以来回切换
其他和5同理，也是stringify后存入sotrage（.setItem)
注意ul和li的关系，ul父列表里应该



7. *增加功能，clearAll button，清空localstorage
这里需要把items数组改成let变量而不是const常量


localstorage有什么用？
本地储存数据，即便刷新也仍然保存
在dev tools-application-storage-local storage中可以查询存储的数据

localstorage的方法：
setItem('arrays',JSON.stringify(newItem)})
getItem()
removeItem()
