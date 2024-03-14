# fixed nav
## 功能
页面向下滚动时，导航栏到顶后：
1. 导航栏固定在顶部
2. 正文版面放大
3. 导航栏左侧滑动出现logo

## 步骤
1. 监听导航栏，当导航栏滚动到顶部时（window滚动幅度与导航栏距离顶部原始距离相同），触发fixed-nav类效果
2. 配置fixed-nav效果
    - nav固定在顶部：注意留出固定的空间给nav不要让它吃字
    - 正文版面放大：配置正文元素让它放大`transform:scale(?)`
    - nav左侧滑动出现logo：注意留出给logo用的足够宽度

## 知识点
### 1.JS
1. 各种距离：（注意不同属性获取时有没有单位如px）
    垂直层面上：
    - 元素与父元素的顶部距离offsetTop
    - 元素本身的高度offsetHeight
    - 页面滚动的距离scrollY
    - 页面顶部内边距body.style.paddingTop
    水平层面上：
    - 元素与父元素的左侧距离offsetLeft
    - 元素本身宽度offsetHeight
    - 页面横向滚动的距离scrollX

2. 新增class样式效果
`element.classList.add('newclassname')`

### 2.CSS
1. transform
scale可以让元素放大缩小

2. max-width
可以控制一个元素出现的最大宽度（或者直接让它无法出现）

3. 固定元素position:fixed
固定元素时，注意要在页面上始终留出一个和固定元素同样高度的空位

4. 应该对哪个层级的元素施加class样式效果？
如碰到页面切换，那个切换效果的类应该放在哪里？比如class，比如nav，比如section。这个取决于页面切换后要对哪些元素施加变化，如果变化只在一个元素中发生，就可以缩小这个类的作用范围，反之，则可以给整个body施加变化

5. 类的读法
```
.fixed-nav nav{
   ...
}
```
在.fixed-nav类里，只对其中的nav元素起作用

## 易错点
1. nav.offsetTop需要固定一个值，不能直接用在if语句里，不然等页面下滑后nav的offsetTop会变化（这个变量必须是全局变量而不是handleNavFixed里的局部变量，如果是局部，nav的位置不同就会直接影响它的offsetTop的值）
2. 提取paddingTop的时候，不要忘记是body.style!
3. 监听scroll时，需要监听window整个页面，而不是nav单个元素