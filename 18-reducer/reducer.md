# reducer
## 功能
累加所有youtube视频的时长

## 步骤
1. 遍历读取所有的时间（来自自创属性data-time)，先了解数据类型（可以先consolelog一下看是什么数据类型）
2. 把分钟和秒钟分开，一律换算成秒钟
3. 累计求和（reducer）
4. 再转换成时分秒格式
5. 把求和结果展示出来

## 知识点
1. 选择器
    - 选择属性：`'[attributeName]'`
    - 选择类：`'.className'`
    - 选择id：`'#idName'`

2. 数据类型转换
- nodelist转为array：`Array.from(xxx)`
- string转num： `.map(parseFloat)`

3. reducer：累积计算
如累计求和：`.reduce((sum,cur)=> sum+=cur)`

## 易错点
1. 时刻记得查看当前变量属于什么数据类型！
如何查看：console.log(typeof(thisdata))
.split会产生string
原始数据选择后产生的是nodelist
一定要留意他们是不是number！
2. arrow function里不要忘记return！！！
3. 注意字符串转换时如何批量转换：.map(parseFloat)


## tips
1. devtool小知识
    - 查看当前数据的类型：f12 devtool看`_proto_`，也可以展开_proto_看当前数据类型可以使用什么方法（没有灰掉的方法）
    - 如果是想要查看const变量的值，需要先在console中输入该变量激活它才能看到

2. Math小知识
    - 取最低整数：`math.floor`
    - 四舍五入：`math.round`
    - 取余：`a % 10`


