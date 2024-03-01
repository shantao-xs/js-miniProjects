# array cardio day1
## key features
### 1. array methods review
1. `arr.filter(a=>func)` 筛选出符合条件的数组元素
2. `arr.includes('de')` 数组中是否有包含de的词
3. `arr.map(a=>func)` 遍历数组元素并执行func，返回新数组
4. `arr.forEach(a=>func)` 遍历数组元素并执行func，在原数组上进行改变
5. `arr.reduce((last,prev)=>func)` 遍历数组元素进行累积计算
6. `arr.sort((a,b)=>a>b?1:-1)` 默认升序.sort()，降序则需要用到(a,b)


### 2. string methods
1. `str1.concat(str2)` 合并两个字符串
2. `str.split(',')` 依据','把字符串切割成一个有多个元素的数组

### 3. arrow function
1. 单行模式，无需return，无需{}  
`a=>a=a/2`
2. {}模式，需要写return  
```javascirpt
a=>{
    a=a/2; 
    return a;
}
```