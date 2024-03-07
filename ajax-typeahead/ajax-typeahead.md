# ajax typeahead 异步搜索展示
## 主要功能
1. 搜索city或state时，根据输入关键词展示来自[该文档](https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json)的关联结果
2. 关联结果中，输入框内的文字要高亮

## 执行步骤
1. 从数据源取回cities数据集
2. 监听搜索框输入内容
3. 遍历数据集，找到搜索框里的匹配内容（city or state），返回目标城市数据
4. 展示目标城市数据列表
5. 为列表里的关键词加highlight效果

## 知识点
1. 异步
在需要和其他端口交互时（如前端vs后端，前端vs数据库等），需要用异步操作存取数据。
方法一：`fetch(url).then(obj=>...)`
方法二：`async await（这里没有）`
具体执行：从其他端口fetch数据，并调用.json()方法读取.json文件，再讲读取的数据写入array
fetch(url)
obj.json()
.push(...data)


2. 监听输入键
xx.addEventListener('keyup',func...)
监听得到的：
addEventListener：返回undefined
event.target.value：返回监听对象的值

3. .filter()与.find()的区别
find()只显示找到的第一个答案
filter()显示找到的所有答案

4. 在html里展示数据
const html = `<span>${在这里写html的语法内容}</span>`
- 注意map和join的使用
- ！`suggestions.innerHTML=html;`  这句重点，必须先选择了suggestions元素位置，然后把html格式施加给该元素，不然无法让html格式生效

5. 参数传递还是全局变量？
如果要在函数findKeyWord里使用cities数组，
法1：定义cities为全局变量直接引用
法2：在函数里设置参数cities，并且在调用这个函数的.addEventListener('keyup',findKeyWord)里把findKeyWord这里传入cities数组，不然会导致cities uncaught无法抓取

6. 正则
- 写正则：需要用new regExp(word,'gi')来生成
- 应用正则：string.prototype.match(正则) OR 正则.test(string.prototype)