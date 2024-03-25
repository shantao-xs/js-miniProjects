# css variables
## key features
### 1. 有三个组件可以调节padding、背景颜色、模糊程度等属性
padding、模糊程度：滑动框。用input-range实现
背景颜色：取色器。用input-color实现

1. 设置初始值
用:root{}伪类定义全局的css自定义变量--customeAttribute
2. 把初始化过的变量应用给img和“JS”字样
<img>和<span class=h1>

### 2. 调节组件的同时使“JS”字样和实例图片同时产生对应效果
1. 选择可调节组件的父元素数组：inputs = document.querySelectorAll('element location here')
2. 遍历所有可调节组件，监听产生变化的那个，并执行handleUpdate
- 遍历：inputs.forEach()
- 监听变化：(1)`event='change'` (2)`event='mousemove'`
- 执行handleUpdate：
    - 定位到自定义css变量的所在位置（根目录）`document.documentElement`
    - 改变--customAttribute的值 `style.setProperty('--customAttribute',this.value)`
        - 注意1：对不同的自定义css变量，通过字符串模板的写法来插入当前input的name属性的值 \`--${this.name}`
        - 注意2：对有后缀单位的属性比如--blur:10px,记得在this.value后+suffix
            - 用`data-sizing`自定义类来储存所有的后缀单位名，并令`suffix=this.dataset.sizing`使得后缀单位名被存储进suffix

## core points
1. 元素选择器、监听器
2. 在html中自定义元素的属性 data-
3. 在css中自定义属性并把自定义属性应用到html元素里 --blur
4. 改变css变量