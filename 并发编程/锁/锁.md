# 锁

```py
from win32event import CreateMutex
from win32api import CloseHandle, GetLastError
from winerror import ERROR_ALREADY_EXISTS
class singleinstance:
  """ Limits application to single instance """
  def __init__(self):
  self.mutexname = "testmutex_{D0E858DF-985E-4907-B7FB-8D732C3FC3B9}"
  self.mutex = CreateMutex(None, False, self.mutexname)
  self.lasterror = GetLastError()
  
  def aleradyrunning(self):
  return (self.lasterror == ERROR_ALREADY_EXISTS)
  
  def __del__(self):
  if self.mutex:
  CloseHandle(self.mutex)
#---------------------------------------------#
# sample usage:
#
from singleinstance import singleinstance
from sys import exit
# do this at beginnig of your application
myapp = singleinstance()
# check is another instance of same program running
if myapp.aleradyrunning():
  print "Another instance of this program is already running"
  exit(0)
# not running, safe to continue...
print "No another instance is running, can continue here"
```

# 锁

由于同一个进程之间的线程是内存共享的，所以当多个线程对同一个变量进行修改的时候，就会得到意想不到的结果。

让我们先看一个简单的例子：

```python
from threading import Thread, current_thread

num = 0

def calc():
    global num
    print 'thread %s is running...' % current_thread().name
    for _ in xrange(10000):
        num += 1
    print 'thread %s ended.' % current_thread().name

if __name__ == '__main__':
    print 'thread %s is running...' % current_thread().name

    threads = []
    for i in range(5):
        threads.append(Thread(target=calc))
        threads[i].start()
    for i in range(5):
        threads[i].join()

    print 'global num: %d' % num
    print 'thread %s ended.' % current_thread().name
```

在上面的代码中，我们创建了 5 个线程，每个线程对全局变量 num 进行 10000 次的 加 1 操作，这里之所以要循环 10000 次，是为了延长单个线程的执行时间，使线程执行时能出现中断切换的情况。现在问题来了，当这 5 个线程执行完毕时，全局变量的值是多少呢？是 50000 吗？

让我们看下执行结果：

```python
thread MainThread is running...
thread Thread-34 is running...
thread Thread-34 ended.
thread Thread-35 is running...
thread Thread-36 is running...
thread Thread-37 is running...
thread Thread-38 is running...
thread Thread-35 ended.
thread Thread-38 ended.
thread Thread-36 ended.
thread Thread-37 ended.
global num: 30668
thread MainThread ended.
```

我们发现 num 的值是 30668，事实上，num 的值是不确定的，你再运行一遍，会发现结果变了。

原因是因为 `num += 1` 不是一个原子操作，也就是说它在执行时被分成若干步：

- 计算 num + 1，存入临时变量 tmp 中；
- 将 tmp 的值赋给 num.

由于线程是交替运行的，线程在执行时可能中断，就会导致其他线程读到一个脏值。

为了保证计算的准确性，我们就需要给 `num += 1` 这个操作加上`锁`。当某个线程开始执行这个操作时，由于该线程获得了锁，因此其他线程不能同时执行该操作，只能等待，直到锁被释放，这样就可以避免修改的冲突。创建一个锁可以通过 `threading.Lock()` 来实现，代码如下：

```python
from threading import Thread, current_thread, Lock

num = 0
lock = Lock()

def calc():
    global num
    print 'thread %s is running...' % current_thread().name
    for _ in xrange(10000):
        lock.acquire()    # 获取锁
        num += 1
        lock.release()    # 释放锁
    print 'thread %s ended.' % current_thread().name

if __name__ == '__main__':
    print 'thread %s is running...' % current_thread().name

    threads = []
    for i in range(5):
        threads.append(Thread(target=calc))
        threads[i].start()
    for i in range(5):
        threads[i].join()

    print 'global num: %d' % num
    print 'thread %s ended.' % current_thread().name
```

让我们看下执行结果：

```python
thread MainThread is running...
thread Thread-44 is running...
thread Thread-45 is running...
thread Thread-46 is running...
thread Thread-47 is running...
thread Thread-48 is running...
thread Thread-45 ended.
thread Thread-47 ended.
thread Thread-48 ended.
thread Thread-46 ended.
thread Thread-44 ended.
global num: 50000
thread MainThread ended.
```

## GIL 锁

讲到 Python 中的多线程，就不得不面对 `GIL` 锁，`GIL` 锁的存在导致 Python 不能有效地使用多线程实现多核任务，因为在同一时间，只能有一个线程在运行。

`GIL` 全称是 Global Interpreter Lock，译为**全局解释锁**。早期的 Python 为了支持多线程，引入了 GIL 锁，用于解决多线程之间数据共享和同步的问题。但这种实现方式后来被发现是非常低效的，当大家试图去除 GIL 的时候，却发现大量库代码已重度依赖 GIL，由于各种各样的历史原因，GIL 锁就一直保留到现在。
