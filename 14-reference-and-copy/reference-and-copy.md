# 基础：reference and copy
## 知识点
### 1. 如果令a=b，a是在refer还是copy b？
- 对基础数据类型premitive data type，=会直接创建一个新的空间储存，故是直接copy
- 对复杂数据类型如object，array等，会让ab两个变量引用同一个地址的数据  

  

### 2. 对array如何copy而不是引用？以免引发对原值错误的更改？4种办法：
- `const copy=array.slice()`
- `const copy=[ ].concat(array)`
- `const copy = [...array]`
- `const copy = Array.from(array)`
  

### 3. 对object如何copy而不是引用？以免引发对原值错误的更改？
- 只copy一层的值：
    - `const newPerson = {...person}`
    - `const newPerson = Object.assign({},person)`
        - 如果是`Object.assign({},person,{number:99})`，则newPerson复制了person的所有属性并修改了其中的number属性  

    **注意！assign只能复制一层的数据，如果有嵌套层的对象数据，它仍然是在引用而不是复制！**

- 为了copy整个对象（包括嵌套的数据值）：
为了避免错误，可以把这个对象转为字符串复制，再parse回对象：`const newPerson = JSON.parse(JSON.stringify(person))`

