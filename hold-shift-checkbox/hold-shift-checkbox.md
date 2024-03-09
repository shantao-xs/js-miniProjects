# hold shift checkbox
## 步骤
1. 定位到所有checkbox input元素
    - 注意，定位自带元素如`input-checkbox`的时候，需要用`('.inbox input[type=checkbox]')`
2. 遍历并监听所有checkbox元素-click event
3. 遍历过程中，对存在shift键被按下的checkbox，执行查找函数handleCheck
3. 在查找函数中，遍历一次所有元素checkboxes
    1. 找到两个定位点：当前click+shiftKey点，上次click点（把上一次监听click时遍历的元素记下来全局保存）
    2. 遍历所有元素checkboxes，找到两个定位点之间的所有checkbox元素（用逻辑值inbetween? not inbetween?判定）
    3. 对所有中间的checkbox元素施加“被勾选”的状态效果（xx.checked=true）

## 易错点
在设计isInBetween的逻辑值时，不能僵硬地设置为true/false，而是要用inbetween=!inbeween来让选项可以被toggle（切换）

## 知识点
数组的不断遍历（利用两个或多个锚点判断遍历起始）
全局变量的更改与应用
this：是当前值，也是在遍历过程中可以赋给prev的值，具体this是什么，要看它所在的函数被谁调用，因为什么调用（比如click监听）
checkbox的应用：.checked属性
shift键的应用：用event.shiftKey判定是否被按下

## 主要功能
shift可以批量选中checkbox
选中后展示勾选+文字被划掉效果（type=checkbox自带这个效果）