# 序列类型

序列的一个特点就是根据索引（index，即元素的位置）来获取序列中的元素，第一个索引是 0，第二个索引是 1，以此类推。所有序列类型都可以进行某些通用的操作，比如：

- 索引（indexing）
- 分片（sliceing）
- 迭代（iteration）
- 加（adding）
- 乘（multiplying）

除了上面这些，我们还可以检查某个元素是否属于序列的成员，计算序列的长度等等。说完序列，我们接下来看看 Python 中常用的数据类型，如下：

- 列表（list）
- 元组（tuple）
- 字符串（string）
- 字典（dict）
- 集合（set）

其中，列表、元组和字符串都属于序列类型，它们可以进行某些通用的操作，比如索引、分片等；字典属于映射类型，每个元素由键（key）和值（value）构成；集合是一种特殊的类型，它所包含的元素是不重复的。

# 通用的序列操作

## 索引

序列中的元素可以通过索引获取，索引从 0 开始。看看下面的例子：

```
>>> nums = [1, 2, 3, 4, 5]   # 列表
>>> nums[0]
1
>>> nums[1]
2
>>> nums[-1]                 # 索引 -1 表示最后一个元素
5
>>> s = 'abcdef'             # 字符串
>>> s[0]
'a'
>>> s[1]
'b'
>>>
>>> a = (1, 2, 3)            # 元组
>>> a[0]
1
>>> a[1]
2
```

注意到，-1 则代表序列的最后一个元素，-2 代表倒数第二个元素，以此类推。

## 分片

索引用于获取序列中的单个元素，而分片则用于获取序列的部分元素。分片操作需要提供两个索引作为边界，中间用冒号相隔，比如：

```python
>>> numbers = [1, 2, 3, 4, 5, 6]
>>> numbers[0:2]                   # 列表分片
[1, 2]
>>> numbers[2:5]
[3, 4, 5]
>>> s = 'hello, world'             # 字符串分片
>>> s[0:5]
'hello'
>>> a = (2, 4, 6, 8, 10)           # 元组分片
>>> a[2:4]
(6, 8)
```

这里需要特别注意的是，分片有两个索引，第 1 个索引的元素是包含在内的，而第 2 个元素的索引则不包含在内，也就是说，numbers[2:5] 获取的是 numbers[2], numbers[3], numbers[4]，没有包括 numbers[5]。下面列举使用分片的一些技巧。

- 访问最后几个元素

假设需要访问序列的最后 3 个元素，我们当然可以像下面这样做：

```python
>>> numbers = [1, 2, 3, 4, 5, 6]
>>> numbers[3:6]
[4, 5, 6]
```

有没有更简洁的方法呢？想到可以使用负数形式的索引，你可能会尝试这样做：

```python
>>> numbers = [1, 2, 3, 4, 5, 6]
>>> numbers[-3:-1]      # 实际取出的是 numbers[-3], numbers[-2]
[4, 5]
>>> numbers[-3:0]       # 左边索引的元素比右边索引出现得晚，返回空序列
[]
```

上面的两种使用方式并不能正确获取序列的最后 3 个元素，Python 提供了一个捷径：

```python
>>> numbers = [1, 2, 3, 4, 5, 6, 7, 8]
>>> numbers[-3:]
[6, 7, 8]
>>> numbers[5:]
[6, 7, 8]
```

也就是说，如果希望分片包含最后一个元素，可将第 2 个索引置为空。如果要复制整个序列，可以将两个索引都置为空：

```python
>>> numbers = [1, 2, 3, 4, 5, 6, 7, 8]
>>> nums = numbers[:]
>>> nums
[1, 2, 3, 4, 5, 6, 7, 8]
```

- 使用步长

使用分片的时候，步长默认是 1，即逐个访问，我们也可以自定义步长，比如：

```python
>>> numbers = [1, 2, 3, 4, 5, 6, 7, 8]
>>> numbers[0:4]
[1, 2, 3, 4]
>>> numbers[0:4:1]    # 步长为 1，不写也可以，默认为 1
[1, 2, 3, 4]
>>> numbers[0:4:2]    # 步长为 2，取出 numbers[0], numbers[2]
[1, 3]
>>> numbers[::3]      # 等价于 numbers[0:8:3]，取出索引为 0, 3, 6 的元素
[1, 4, 7]
```

另外，步长也可以是负数，表示从右到左取元素：

```python
>>> numbers = [1, 2, 3, 4, 5, 6, 7, 8]
>>> numbers[0:4:-1]
[]
>>> numbers[4:0:-1]       # 取出索引为 4, 3, 2, 1 的元素
[5, 4, 3, 2]
>>> numbers[4:0:-2]       # 取出索引为 4, 2 的元素
[5, 3]
>>> numbers[::-1]         # 从右到左取出所有元素
[8, 7, 6, 5, 4, 3, 2, 1]
>>> numbers[::-2]         # 取出索引为 7, 5, 3, 1 的元素
[8, 6, 4, 2]
>>> numbers[6::-2]        # 取出索引为 6, 4, 2, 0 的元素
[7, 5, 3, 1]
>>> numbers[:6:-2]        # 取出索引为 7 的元素
[8]
```

这里总结一下使用分片操作的一些方法，分片的使用形式是：

```python
# 左索引:右索引:步长
left_index:right_index:step
```

要牢牢记住的是：

- 左边索引的元素包括在结果之中，右边索引的元素不包括在结果之中；
- 当使用一个负数作为步长时，必须让左边索引大于右边索引；
- 对正数步长，从左向右取元素；对负数步长，从右向左取元素；

## 加

序列可以进行「加法」操作，如下：

```python
>>> [1, 2, 3] + [4, 5, 6]     # 「加法」效果其实就是连接在一起
[1, 2, 3, 4, 5, 6]
>>> (1, 2, 3) + (4, 5, 6)
(1, 2, 3, 4, 5, 6)
>>> 'hello, ' + 'world!'
'hello, world!'
>>> [1, 2, 3] + 'abc'
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: can only concatenate list (not "str") to list
```

这里需要注意的是：两种相同类型的序列才能「加法」操作。

## 乘

序列可以进行「乘法」操作，比如：

```python
>>> 'abc' * 3
'abcabcabc'
>>> [0] * 3
[0, 0, 0]
>>> [1, 2, 3] * 3
[1, 2, 3, 1, 2, 3, 1, 2, 3]
```

## in

为了检查一个值是否在序列中，可以使用 `in` 运算符，比如：

```python
>>> 'he' in 'hello'
True
>>> 'hl' in 'hello'
False
>>> 10 in [6, 8, 10]
True
```

# map/reduce/filter

map/reduce/filter 是 Python 中较为常用的内建高阶函数，它们为函数式编程提供了不少便利。

## map

`map` 函数的使用形式如下：

```
map(function, sequence)
```

对 sequence 中的 item 依次执行 function(item)，并将结果组成一个 List 返回，也就是：

```
[function(item1), function(item2), function(item3), ...]
```

```py
>>> def square(x):
...     return x * x

>>> map(square, [1, 2, 3, 4])
[1, 4, 9, 16]

>>> map(lambda x: x * x, [1, 2, 3, 4])   # 使用 lambda
[1, 4, 9, 16]

>>> map(str, [1, 2, 3, 4])
['1', '2', '3', '4']

>>> map(int, ['1', '2', '3', '4'])
[1, 2, 3, 4]

def double(x):
    return 2 * x

def triple(x):
    return 3 *x

def square(x):
    return x * x

funcs = [double, triple, square]  # 列表元素是函数对象

# 相当于 [double(4), triple(4), square(4)]
value = list(map(lambda f: f(4), funcs))

print value

# output
[8, 12, 16]
```

上面的代码中，我们加了 list 转换，是为了兼容 Python3，在 Python2 中 map 直接返回列表，Python3 中返回迭代器。

## reduce

`reduce` 函数的使用形式如下：

```
reduce(function, sequence[, initial])
```

先将 sequence 的前两个 item 传给 function，即 function(item1, item2)，函数的返回值和 sequence 的下一个 item 再传给 function，即 function(function(item1, item2), item3)，如此迭代，直到 sequence 没有元素，如果有 initial，则作为初始值调用。也就是说：

```
reduece(f, [x1, x2, x3, x4]) = f(f(f(x1, x2), x3), x4)
```

看一些例子，就能很快理解了。

```python
>>> reduce(lambda x, y: x * y, [1, 2, 3, 4])  # 相当于 ((1 * 2) * 3) * 4
24
>>> reduce(lambda x, y: x * y, [1, 2, 3, 4], 5) # ((((5 * 1) * 2) * 3)) * 4
120
>>> reduce(lambda x, y: x / y, [2, 3, 4], 72)  #  (((72 / 2) / 3)) / 4
3
>>> reduce(lambda x, y: x + y, [1, 2, 3, 4], 5)  # ((((5 + 1) + 2) + 3)) + 4
15
>>> reduce(lambda x, y: x - y, [8, 5, 1], 20)  # ((20 - 8) - 5) - 1
6
>>> f = lambda a, b: a if (a > b) else b   # 两两比较，取最大值
>>> reduce(f, [5, 8, 1, 10])
10
```

## filter

`filter` 函数用于过滤元素，它的使用形式如下：

```
filter(function, sequnce)
```

将 function 依次作用于 sequnce 的每个 item，即 function(item)，将返回值为 True 的 item 组成一个 List/String/Tuple (取决于 sequnce 的类型，python3 统一返回迭代器) 返回。

```python
>>> even_num = list(filter(lambda x: x % 2 == 0, [1, 2, 3, 4, 5, 6]))
>>> even_num
[2, 4, 6]
>>> odd_num = list(filter(lambda x: x % 2, [1, 2, 3, 4, 5, 6]))
>>> odd_num
[1, 3, 5]
>>> filter(lambda x: x < 'g', 'hijack')
'ac'        # python2
>>> filter(lambda x: x < 'g', 'hijack')
<filter object at 0x1034b4080>   # python3
```
