# 线程

线程（thread）是进程（process）中的一个实体，一个进程至少包含一个线程。比如，对于视频播放器，显示视频用一个线程，播放音频用另一个线程。如果我们把进程看成一个容器，则线程是此容器的工作单位。进程和线程的区别主要有：

- 进程之间是相互独立的，多进程中，同一个变量，各自有一份拷贝存在于每个进程中，但互不影响；而同一个进程的多个线程是内存共享的，所有变量都由所有线程共享；
- 由于进程间是独立的，因此一个进程的崩溃不会影响到其他进程；而线程是包含在进程之内的，线程的崩溃就会引发进程的崩溃，继而导致同一进程内的其他线程也奔溃；

# 多线程

在 Python 中，进行多线程编程的模块有两个：thread 和 threading。其中，thread 是低级模块，threading 是高级模块，对 thread 进行了封装，一般来说，我们只需使用 threading 这个模块。

下面，我们看一个简单的例子：

```python
from threading import Thread, current_thread

def thread_test(name):
    print 'thread %s is running...' % current_thread().name
    print 'hello', name
    print 'thread %s ended.' % current_thread().name

if __name__ == "__main__":
    print 'thread %s is running...' % current_thread().name
    print 'hello world!'
    t = Thread(target=thread_test, args=("test",), name="TestThread")
    t.start()
    t.join()
    print 'thread %s ended.' % current_thread().name
```

可以看到，创建一个新的线程，就是把一个函数和函数参数传给 Thread 实例，然后调用 start 方法开始执行。代码中的 current_thread 用于返回当前线程的实例。

执行结果如下：

```
thread MainThread is running...
hello world!
thread TestThread is running...
hello test
thread TestThread ended.
thread MainThread ended.
```

# 线程

线程（thread）是进程（process）中的一个实体，一个进程至少包含一个线程。比如，对于视频播放器，显示视频用一个线程，播放音频用另一个线程。如果我们把进程看成一个容器，则线程是此容器的工作单位。进程和线程的区别主要有：

- 进程之间是相互独立的，多进程中，同一个变量，各自有一份拷贝存在于每个进程中，但互不影响；而同一个进程的多个线程是内存共享的，所有变量都由所有线程共享；

- 由于进程间是独立的，因此一个进程的崩溃不会影响到其他进程；而线程是包含在进程之内的，线程的崩溃就会引发进程的崩溃，继而导致同一进程内的其他线程也奔溃；

# 多线程

在 Python 中，进行多线程编程的模块有两个：thread 和 threading。其中，thread 是低级模块，threading 是高级模块，对 thread 进行了封装，一般来说，我们只需使用 threading 这个模块。

```py
from threading import Thread, current_thread

def thread_test(name):
    print 'thread %s is running...' % current_thread().name
    print 'hello', name
    print 'thread %s ended.' % current_thread().name

if __name__ == "__main__":
    print 'thread %s is running...' % current_thread().name
    print 'hello world!'
    t = Thread(target=thread_test, args=("test",), name="TestThread")
    t.start()
    t.join()
    print 'thread %s ended.' % current_thread().name

thread MainThread is running...
hello world!
thread TestThread is running...
hello test
thread TestThread ended.
thread MainThread ended.
```

可以看到，创建一个新的线程，就是把一个函数和函数参数传给 Thread 实例，然后调用 start 方法开始执行。代码中的 current_thread 用于返回当前线程的实例。
