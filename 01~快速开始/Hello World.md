# Hello Word

某个较完整的 Python 应用程序如下：

```py
import os
import os.path
import time

# class used to handle one application instance mechanism;
class ApplicationInstance:
   # specify the file used to save the application instance pid
   def __init__(self, pid_file):
        self.pid_file = pid_file
        self.check()
        self.startApplication()

    # called when the single instance starts to save it's pid
    def startApplication(self):
        file = open(self.pid_file, 'wt')
        file.write(str(os.getpid()))
        file.close()
        # called when the single instance exit ( remove pid file )

    # check if the current application is already running
    def check(self):
      # check if the pidfile exists
      if not os.path.isfile(self.pid_file):
        return

      # read the pid from the file
      pid = 0
      try:
        file = open(self.pid_file, 'rt')
        data = file.read()
        file.close()
        pid = int(data)
      except:
        pass

      # check if the process with specified by pid exists
      if 0 == pid:
        return

      try:
        os.kill(pid, 0)  # this will raise an exception if the pid is not valid
      except:
        return

      # exit the application
      print("The application is already running !")
      exit(0)  # exit raise an exception so don't put it in a try/except block

    def exitApplication(self):
        try:
            os.remove(self.pid_file)
        except:
            pass


if __name__ == '__main__':
            # create application instance
    appInstance = ApplicationInstance('/tmp/myapp.pid')

    # do something here
    print("Start MyApp")
    time.sleep(5)  # sleep 5 seconds
    print("End MyApp")
    # remove pid file
    appInstance.exitApplication()
```

# 输入输出

Python2 提供了 input，raw_input，print 等用于输入输出，但在 Python3 中发生了一些改变，raw_input 已经没有了，input 的用法发生了变化，print 也从原来的语句变成了一个函数。

## 输入

首先看 Python2 中的 raw_input，raw_input 会读取控制台的输入，并返回字符串类型。

```sh
>>> name = raw_input('please enter your name: ')
please enter your name: ethan     # 输入一个字符串
>>> name
'ethan'
>>> type(name)
<type 'str'>
>>>
>>> num = raw_input('please enter your id: ')
please enter your id: 12345       # 输入一个数值
>>> num
'12345'
>>> type(num)
<type 'str'>
>>>
>>> sum = raw_input('please enter a+b: ')
please enter a+b: 3+6             # 输入一个表达式
>>> sum
'3+6'
>>> type(sum)
<type 'str'>
```

可以看到，不管我们输入一个字符串、数值还是表达式，raw_input 都直接返回一个字符串。`input` 的用法跟 `raw_input` 类似，形式如下：

```python
input(prompt)
```

事实上，`input` 本质上是使用 `raw_input` 实现的，如下：

```python
def input(prompt):
    return (eval(raw_input(prompt)))
```

也就是说，调用 `input` 实际上是通过调用 `raw_input` 再调用 `eval` 函数实现的。这里的 `eval` 通常用来执行一个字符串表达式，并返回表达式的值，它的基本用法如下：

```
>>> eval('1+2')
3
>>> a = 1
>>> eval('a+9')
10
```

现在，让我们看看 `input` 的用法：

```python
>>> name = input('please input your name: ')
please input your name: ethan         # 输入字符串如果没加引号会出错
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
  File "<string>", line 1, in <module>
NameError: name 'ethan' is not defined
>>>
>>> name = input('please input your name: ')
please input your name: 'ethan'       # 添加引号
>>> name
'ethan'
>>>
>>> num = input('please input your id: ')
please input your id: 12345           # 输入数值
>>> num                               # 注意返回的是数值类型，而不是字符串
12345
>>> type(num)
<type 'int'>
>>>
>>> sum = input('please enter a+b: ')  # 输入数字表达式，会对表达式求值
please enter a+b: 3+6
>>> sum
9
>>> type(sum)
<type 'int'>
>>>
>>> sum = input('please enter a+b: ')   # 输入字符串表达式，会字符串进行运算
please enter a+b: '3'+'6'
>>> sum
'36'
```

可以看到，使用 `input` 的时候，如果输入的是字符串，必须使用引号把它们括起来；如果输入的是数值类型，则返回的也是数值类型；如果输入的是表达式，会对表达式进行运算。Python3 中的 input 就是 Python2 中的 raw_input，也就是说，原 Python2 中的 raw_input 被重命名为 input 了。

## 输出

使用 print 最简单的方式就是直接在 print 后面加上数字、字符串、列表等对象，比如：

```sh
# Python 2.7.11 (default, Feb 24 2016, 10:48:05)
>>> print 123
123
>>> print 'abc'
abc
>>> x = 10
>>> print x
10
>>> d = {'a': 1, 'b': 2}
>>> print d
{'a': 1, 'b': 2}
>>>
>>> print(123)
123
>>> print('abc')
abc
>>> print(x)
10
>>> print(d)
{'a': 1, 'b': 2}
```

有时，我们需要对输出进行一些格式化，比如限制小数的精度等，直接看几个例子：

```sh
>>> s = 'hello'
>>> l = len(s)
>>> print('the length of %s is %d' % (s, l))
the length of hello is 5
>>>
>>> pi = 3.14159
>>> print('%10.3f' % pi)     # 字段宽度 10，精度 3
     3.142
>>> print('%010.3f' % pi)    # 用 0 填充空白
000003.142
>>> print('%+f' % pi)        # 显示正负号
+3.141590
```

在 Python3 中使用 print 跟 Python2 差别不大，不过要注意的是在 Python3 中使用 print 必须加括号，否则会抛出 SyntaxError。另外，如果不想 print 换行输出，可以参考下面的方式：

```python
>>> for i in range(0, 3):
...     print(i)
...
0
1
2
>>> for i in range(0, 3):
...     print(i, end='')    # 加上一个 end 参数
...
012
```
