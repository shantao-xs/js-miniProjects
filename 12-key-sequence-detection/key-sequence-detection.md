# key sequence detection
## 功能
检查用键盘输入固定密码，当密码正确时，触发动态效果显示在屏幕上

## 知识点-array相关
如何动态控制array长度
如何将array转为字符串
如何往array里插入新的值

## 步骤
1. 监听keyup事件，执行handleKey函数
2. 在handleKey中，收集keyup的字母到array里`.push()`，把array控制在固定长度`.splice(startindex,delte_length)`，将这串array转为字符串后`.join('')`和密码比较
3. 如果输入的正是密码，就触发动态效果（方法来自写好的cornify.js）