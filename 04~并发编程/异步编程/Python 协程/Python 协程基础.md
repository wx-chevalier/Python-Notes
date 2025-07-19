# 协程基础

### 3.1 什么是协程（Coroutine）？

- 协程是一种比线程更轻量级的用户态“微线程”，由程序自身调度，而不是操作系统。
- 协程可以在执行过程中暂停（挂起）和恢复（唤醒），实现高效的并发。
- 协程适合大量 I/O 密集型任务，能极大减少线程/进程切换的开销。

### 3.2 协程与线程、进程的区别

| 特性     | 进程     | 线程     | 协程     |
| -------- | -------- | -------- | -------- |
| 调度者   | 操作系统 | 操作系统 | 程序自身 |
| 切换开销 | 大       | 较大     | 极小     |
| 并发性   | 支持     | 支持     | 支持     |
| 资源占用 | 高       | 较高     | 极低     |
| 适用场景 | CPU 密集 | I/O 密集 | I/O 密集 |

### 3.3 Python 中的协程实现方式

#### 1. 生成器（Generator）实现协程（早期方式）

- 生成器本质上是可以暂停和恢复的函数。
- 使用 `yield` 语句实现暂停和恢复。

**示例：**

```python
def simple_coroutine():
    print("协程开始")
    x = yield
    print("协程恢复，收到：", x)

coro = simple_coroutine()
next(coro)         # 启动协程，执行到第一个 yield
coro.send(42)      # 恢复协程，向 yield 发送值
```

#### 2. `yield from` 语法（简化协程嵌套）

- `yield from` 可以将一个生成器的控制权委托给另一个生成器，简化多层嵌套。

**示例：**

```python
def subgen():
    yield 1
    yield 2

def delegator():
    yield from subgen()
    yield 3

for i in delegator():
    print(i)  # 输出 1, 2, 3
```

#### 3. 原生协程（async/await，现代推荐方式）

- Python 3.5+ 引入 `async def` 和 `await`，支持原生协程。
- `async def` 定义协程函数，`await` 用于挂起等待另一个协程的结果。

**示例：**

```python
import asyncio

async def hello():
    print("Hello ...")
    await asyncio.sleep(1)
    print("... World!")

asyncio.run(hello())
```

### 3.4 协程的调度与事件循环

- 协程本身不会自动运行，需要事件循环（如 `asyncio`）来调度和管理。
- 事件循环负责检测哪些协程可以运行、挂起和恢复。

### 3.5 协程的优点

- 极低的资源消耗，适合高并发场景。
- 代码结构清晰，避免回调地狱。
- 易于管理大量 I/O 操作。

### 3.6 协程的局限

- 主要适用于 I/O 密集型任务，不适合 CPU 密集型任务。
- 需要异步库的支持（如 aiohttp、aiomysql 等）。
- 调试和错误追踪相对复杂。

协程是 Python 异步编程的核心，能高效处理大量 I/O 并发任务。现代 Python 推荐使用 `async/await` 语法和 `asyncio` 库来实现协程。
