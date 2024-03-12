# array相关知识 sort
## 功能/要求
1. 排除所有包含a，an，the的单词后，对bandname进行升序排序
2. 以列表的形式在页面上显示出来

组合使用sort和其他筛选array的函数

sort排序逻辑
.sort((a,b)=>{return a>b ? 1 : -1;})

用正则搭配replace()来排除不希望包含的词
const regex = /^(a |the |an)/i  //不包括所有含a,the,an的，并忽略大小写
replace(regex,'')

用trim去除前后的空格

## 知识点
1. 选择器
    - 对class： querySelector('.className')
    - 对id：querySelector('#idName')
2. display在html语言上
用element.innerHTML=...来实现html元素的可视化

3. arrow function的陷阱
单条语句还是{return}？
如果是{}则必须有return，不然执行语句没效果
如果是单条语句，可以直接用()，省略return和{}
如：在对三元表达式a>b?1:-1时，要么用{}并且搭配if-return，要么直接用三元不要用{}

4. 正则
/ig 全局忽略大小写
^(element) 排除elemnt
(a |an )a后带空格或者an后带空格的

## 展开：把前5个band的icon换成吉他，其他换成架子鼓

## 易错点
1. innerHTML进行html展现的时候，不要忘记join！如果没有会默认用,连接各个元素，形成一个字符串，用join则可以不用分隔符、从而得到正确的HTML格式
2. splice和replace:splice是array的方法，replace是string的方法