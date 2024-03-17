# followAlong-dropdown
## 联动
22 follow along links highlighter

## 功能
鼠标移动到nav上的nav item时，会出现对应的下拉框dropdown，每个下拉框都有一个背景框（白色或不同颜色）

## 步骤
**需要的元素**
- 下拉框的背景框，随着鼠标的移动和dropdown的大小改变其位置和大小
- 下拉框文本

**对应所需配置的元素（梳理DOM关系）**  
- nav（class=top）
    - 背景框（class=dropdownBackground）  
    *新增.open*
    - 下拉框们（class= cool>li） 
        - 每个下拉框 dropdown  
        *新增.trigger-enter和.trigger-enter-active*

1. 选择并监听下拉框们cool>li，触发mouseenter和mouseleave，分别施加/撤销样式效果
    - 这里注意用settimeout控制下拉框的文本和背景框出现的先后 **(enter和enter-active的区别？)**
    - 注意选中的是nodelist，需要一一遍历监听
2. 制作下拉框的背景框，选择并监听dropdownBackground，用.style.xxx设定它的大小(width,height)和位置(XY)
    - 确定它的位置：注意要考虑该下拉框的位置，及下拉框的祖父元素nav的位置
    - 给背景框施加显示的效果
3. **细节：背景框和下拉框出现的动画transition（？）**

## 知识点
通常，为了实现下拉框的外观效果，一种常见的做法是使用**额外的元素**来作为下拉框的背景容器，而不是直接给 ul-li 元素设置背景框。这样可以更灵活地设置下拉框的背景框的样式控制（位置，大小）和动画效果，并且避免它干扰\<li>内容布局。
这里就会涉及到这个额外元素的定位和大小设置问题。

### 1. CSS样式
opacity：显示的透明度，当opacity=1则可以完全显示
先出现背景框(display:block)，再出现下拉框的文本(opacity=1)：用setTimeout搭配if.contians来展示trigger-enter-active

### 2. 在JS中设定CSS样式
大小：
element.style.height/width=xxx
位置：
element.style.transform:`translate(${xx},${yy})`

设置位置时注意点：
1. 常用coords进行记录，以便统一整理和调取
```javascript
coords={
    width:...,
    transform:`translate(,)`
}
```
2. 常用getBoundingClientRect()的方法获得相对于viewport的大小位置，方便读取数据
3. 语法：设置位置时，因需要用到css字符串语法，需要注意单位px和`${}`的使用，如element.style.width=`${var}px`
4. 设置位置不仅要考虑当前元素相对于viewport的位置，还要考虑到它的parent elements比如nav等在整个viewport中的位置

## 易错点
1. querySelectAll()的时候，返回的是nodelist而不是单个的object
2. class的格式：以class选择元素，需要'.classname'，为元素增加class属性时，则不需要'.'，只需要add('classname')

## 问题
1. 为什么这样就可以先显示背景框再显示文本？
```javascript
setTimeout(()=>this.classList.contains('trigger-enter')&& this.classList.add('trigger-enter-active'),150)
```
