# 15 localstorage
## 主要功能
1. 可以新增item，在页面中以列表的方式显示
2. 可以对item进行checkbox操作
3. 数据存储：item的文本和check状态都被存入localstorage，以防页面刷新后丢失
4. 其他：可以进行clearAll, clearChecked等操作

## 步骤
针对新增item、新增item的checkbox、增加clearAll等button分别进行：
1. 选择器选到当前元素：针对数据端选定items所在的元素，针对html端选定itemList所在的元素
2. 监听click/submit等事件，执行函数，在函数中：
    - 确定item的数据内容，两个属性：文本和check状态
    - 更新新的item到items数组（文本更新到items.text，check状态更新到items.done）
    - 将items数组通过`itemList.innerHTML = ...` 的形式在html端展现（<ul><li>）：`.map().join('')`
    - 将items数组更新到localStorage，即便刷新页面也不丢失：`localStorage.setItem('items',JSON.stringify(items))`
3. 增加clearAll和clearChecked功能
    - 这里需要把items数组改成let变量而不是const常量
4. 其他细节：
    - 如果被check，就把图标从复选框转换成一个emoji（用css样式.checked来实现，注意写input-checked实现的逻辑）
    - 更新checkbox的状态需要注意两点：①怎么找到目标checkbox ②2.怎么只找checkbox而不找其他元素 ③怎么切换checkbox状态
        1. 怎么找到目标checkbox：新建一个属性data-index来储存唯一标识定位它
        2. 怎么切换checkbox状态：不是直接赋值=false/true，而是通过= !input.done来随意toggle
    - 

## 知识点
### 1.JS
1. localStroage
    - 打开devTool的application可查看
    - `.setItem(key,value)` 写入localStorage，键值对储存，
    - `.getItem(key)` 读取localStorage
    - removeItem()
    - localStorage的读写数据类型：注意value必须是字符串形式，故存写时需要通过`JSON.stringify()`转为string，读取时需要用JSON.parse()转为object
2. submit元素`input type="submit"`相关
    - 在处理input type="submit"时，使用this.reset()来清空输入框
    - 在处理input type="submit"时，用event.preventDefault()阻止submit键默认提交的行为，以免页面被主动刷新（但是还是可以继续执行handleAdd操作并且更新dish list的
3. querySelector选择器
    - 一般通过class定位元素，比如document.querySelector('.my-class');
    - 怎么定位指定的input元素？用name来定位，比如document.querySelector('[name=targetName]')
    - 怎么获取用户input的数据？通过document.querySelector('[name=targetName]').value来获得用户输入的值

### 2.HTML
1. form元素
form主要用来做什么？处理用户input的数据，常用的表单元素包括label, input-text, input-submit, input-checkbox等

### 3.CSS
1. flexbox的应用？
2. :before伪类的应用？


## 易错点
//??? 怎么读取input里的用户输入数据？不能直接选择e.target.value，那样只会返回父元素<form class="add-items">这个对象，应该要选择input[name="item"]的子元素，并读取它的值.value
//!!! 从localstorage中存取的时候，不要忘记转化JSON object or string！

//??? 怎么才能够用html显示出来？必须要把这个显示的return赋值给目标元素（.plates)的innerHTML属性！
//??? 怎么写唯一标识符？用id不能直接写index等数字，可以自定义如data-index, data-xxx... ，这样可以反复使用数字${i}
//!!! label的for必须要跟input的id对应上！如果不关联，则无法点击切换checkbox状态

//这里只需要修改对应checkbox的done状态（1.怎么找到对应的box？ 2.怎么只找checkbox而不找其他元素？ 3.怎么toggle该checkbox的状态？）
//!!! 不要忘记，只对input元素进行排查，排除其他元素！

//易错：用handleClick是存储toggle checkbox的状态，用display里的 ${item.done?'checked':''}则是配置这个状态下应该如何展示
//怎么找到input type=submit里用户输入的文本值？【错了两遍！】先定位到该子元素'input[name=item]'，再去读取它的.value
//怎么找到目标checkbox的对应的label再items中的文本？【错了两遍！】用到data-index这个属性定位它在items数组中的位置
//怎么检查当前元素是不是input元素？ e.target.matches('input')

//出错0319
e.target.matches 用来检查元素
html的显示： //!!! 一定要更新innerHTML才会显示！
  // id和name的区别？（id有唯一性优势，那name存在的意义是？）