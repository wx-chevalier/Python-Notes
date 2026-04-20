## 初识 Python

### Python 简介

#### Python 的历史

1. 1989 年圣诞节：Guido von Rossum 开始写 Python 语言的编译器。
2. 1991 年 2 月：第一个 Python 编译器（同时也是解释器）诞生，它是用 C 语言实现的（后面），可以调用 C 语言的库函数。在最早的版本中，Python 已经提供了对“类”，“函数”，“异常处理”等构造块的支持，还有对列表、字典等核心数据类型，同时支持以模块为基础来构造应用程序。
3. 1994 年 1 月：Python 1.0 正式发布。
4. 2000 年 10 月 16 日：Python 2.0 发布，增加了完整的[垃圾回收](<https://zh.wikipedia.org/wiki/%E5%9E%83%E5%9C%BE%E5%9B%9E%E6%94%B6_(%E8%A8%88%E7%AE%97%E6%A9%9F%E7%A7%91%E5%AD%B8)>)，提供了对[Unicode](https://zh.wikipedia.org/wiki/Unicode)的支持。与此同时，Python 的整个开发过程更加透明，社区对开发进度的影响逐渐扩大，生态圈开始慢慢形成。
5. 2008 年 12 月 3 日：Python 3.0 发布，它并不完全兼容之前的 Python 代码，不过因为目前还有不少公司在项目和运维中使用 Python 2.x 版本，所以 Python 3.x 的很多新特性后来也被移植到 Python 2.6/2.7 版本中。

目前我使用的 Python 3.7.x 的版本是在 2018 年发布的，Python 的版本号分为三段，形如 A.B.C。其中 A 表示大版本号，一般当整体重写，或出现不向后兼容的改变时，增加 A；B 表示功能更新，出现新功能时增加 B；C 表示小的改动（例如：修复了某个 Bug），只要有修改就增加 C。如果对 Python 的历史感兴趣，可以阅读名为[《Python 简史》](http://www.cnblogs.com/vamei/archive/2013/02/06/2892628.html)的网络文章。

#### Python 的优缺点

Python 的优点很多，简单的可以总结为以下几点。

1. 简单明了，学习曲线低，比很多编程语言都容易上手。
2. 开放源代码，拥有强大的社区和生态圈，尤其是在数据分析和机器学习领域。
3. 解释型语言，天生具有平台可移植性，代码可以工作于不同的操作系统。
4. 对两种主流的编程范式（面向对象编程和函数式编程）都提供了支持。
5. 代码规范程度高，可读性强，适合有代码洁癖和强迫症的人群。

Python 的缺点主要集中在以下几点。

1. 执行效率稍低，对执行效率要求高的部分可以由其他语言（如：C、C++）编写。
2. 代码无法加密，但是现在很多公司都不销售卖软件而是销售服务，这个问题会被弱化。
3. 在开发时可以选择的框架太多（如 Web 框架就有 100 多个），有选择的地方就有错误。

#### Python 的应用领域

目前 Python 在 Web 应用后端开发、云基础设施建设、DevOps、网络数据采集（爬虫）、自动化测试、数据分析、机器学习等领域都有着广泛的应用。

### 安装 Python 解释器

想要开始 Python 编程之旅，首先得在自己使用的计算机上安装 Python 解释器环境，下面将以安装官方的 Python 解释器为例，讲解如何在不同的操作系统上安装 Python 环境。官方的 Python 解释器是用 C 语言实现的，也是使用最为广泛的 Python 解释器，通常称之为 CPython。除此之外，Python 解释器还有 Java 语言实现的 Jython、C#语言实现的 IronPython 以及 PyPy、Brython、Pyston 等版本，有兴趣的读者可以自行了解。

#### Windows 环境

可以在[Python 官方网站](https://www.python.org)下载到 Python 的 Windows 安装程序（exe 文件），需要注意的是如果在 Windows 7 环境下安装 Python 3.x，需要先安装 Service Pack 1 补丁包（可以通过一些工具软件自动安装系统补丁的功能来安装），安装过程建议勾选“Add Python 3.x to PATH”（将 Python 3.x 添加到 PATH 环境变量）并选择自定义安装，在设置“Optional Features”界面最好将“pip”、“tcl/tk”、“Python test suite”等项全部勾选上。强烈建议选择自定义的安装路径并保证路径中没有中文。安装完成会看到“Setup was successful”的提示。如果稍后运行 Python 程序时，出现因为缺失一些动态链接库文件而导致 Python 解释器无法工作的问题，可以按照下面的方法加以解决。

如果系统显示 api-ms-win-crt\*.dll 文件缺失，可以参照[《api-ms-win-crt\*.dll 缺失原因分析和解决方法》](https://zhuanlan.zhihu.com/p/32087135)一文讲解的方法进行处理或者直接在[微软官网](https://www.microsoft.com/zh-cn/download/details.aspx?id=48145)下载 Visual C++ Redistributable for Visual Studio 2015 文件进行修复；如果是因为更新 Windows 的 DirectX 之后导致某些动态链接库文件缺失问题，可以下载一个[DirectX 修复工具](https://dl.pconline.com.cn/download/360074-1.html)进行修复。

#### Linux 环境

Linux 环境自带了 Python 2.x 版本，但是如果要更新到 3.x 的版本，可以在[Python 的官方网站](https://www.python.org)下载 Python 的源代码并通过源代码构建安装的方式进行安装，具体的步骤如下所示（以 CentOS 为例）。

1. 安装依赖库（因为没有这些依赖库可能在源代码构件安装时因为缺失底层依赖库而失败）。

```Shell
yum -y install wget gcc zlib-devel bzip2-devel openssl-devel ncurses-devel sqlite-devel readline-devel tk-devel gdbm-devel db4-devel libpcap-devel xz-devel libffi-devel
```

2. 下载 Python 源代码并解压缩到指定目录。

```Shell
wget https://www.python.org/ftp/python/3.7.6/Python-3.7.6.tar.xz
xz -d Python-3.7.6.tar.xz
tar -xvf Python-3.7.6.tar
```

3. 切换至 Python 源代码目录并执行下面的命令进行配置和安装。

```Shell
cd Python-3.7.6
./configure --prefix=/usr/local/python37 --enable-optimizations
make && make install
```

4. 修改用户主目录下名为.bash_profile 的文件，配置 PATH 环境变量并使其生效。

```Shell
cd ~
vim .bash_profile
```

```Shell
# ... 此处省略上面的代码 ...

export PATH=$PATH:/usr/local/python37/bin

# ... 此处省略下面的代码 ...
```

5. 激活环境变量。

```Shell
source .bash_profile
```

#### macOS 环境

macOS 也自带了 Python 2.x 版本，可以通过[Python 的官方网站](https://www.python.org)提供的安装文件（pkg 文件）安装 Python 3.x 的版本。默认安装完成后，可以通过在终端执行`python`命令来启动 2.x 版本的 Python 解释器，启动 3.x 版本的 Python 解释器需要执行`python3`命令。

### 运行 Python 程序

#### 确认 Python 的版本

可以 Windows 的命令行提示符中键入下面的命令。

```Shell
python --version
```

在 Linux 或 macOS 系统的终端中键入下面的命令。

```Shell
python3 --version
```

当然也可以先输入`python`或`python3`进入交互式环境，再执行以下的代码检查 Python 的版本。

```Python
import sys

print(sys.version_info)
print(sys.version)
```

#### 编写 Python 源代码

可以用文本编辑工具（推荐使用[Sublime](https://www.sublimetext.com/)、[Visual Studio Code](https://code.visualstudio.com/)等高级文本编辑工具）编写 Python 源代码并用 py 作为后缀名保存该文件，代码内容如下所示。

```Python
print('hello, world!')
```

#### 运行程序

切换到源代码所在的目录并执行下面的命令，看看屏幕上是否输出了"hello, world!"。

```Shell
python hello.py
```

或

```Shell
python3 hello.py
```

#### 代码中的注释

注释是编程语言的一个重要组成部分，用于在源代码中解释代码的作用从而增强程序的可读性和可维护性，当然也可以将源代码中不需要参与运行的代码段通过注释来去掉，这一点在调试程序的时候经常用到。注释在随源代码进入预处理器或编译时会被移除，不会在目标代码中保留也不会影响程序的执行结果。

1. 单行注释 - 以#和空格开头的部分
2. 多行注释 - 三个引号开头，三个引号结尾

```Python
"""
第一个Python程序 - hello, world!
向伟大的Dennis M. Ritchie先生致敬

Version: 0.1
Author: 骆昊
"""
print('hello, world!')
# print("你好, 世界！")
```

### Python 开发工具

#### IDLE - 自带的集成开发工具

IDLE 是安装 Python 环境时自带的集成开发工具，如下图所示。但是由于 IDLE 的用户体验并不是那么好所以很少在实际开发中被采用。

![](https://ngte-superbed.oss-cn-beijing.aliyuncs.com/book/Python-100-Days/python-idle.png)

#### IPython - 更好的交互式编程工具

IPython 是一种基于 Python 的交互式解释器。相较于原生的 Python 交互式环境，IPython 提供了更为强大的编辑和交互功能。可以通过 Python 的包管理工具 pip 安装 IPython，具体的操作如下所示。

```Shell
pip install ipython
```

或

```Shell
pip3 install ipython
```

安装成功后，可以通过下面的 ipython 命令启动 IPython，如下图所示。

![](https://ngte-superbed.oss-cn-beijing.aliyuncs.com/book/Python-100-Days/python-ipython.png)

#### Sublime Text - 高级文本编辑器

![](https://ngte-superbed.oss-cn-beijing.aliyuncs.com/book/Python-100-Days/python-sublime.png)

- 首先可以通过[官方网站](https://www.sublimetext.com/)下载安装程序安装 Sublime Text 3 或 Sublime Text 2。

- 安装包管理工具。

  1. 通过快捷键 Ctrl+`或者在 View 菜单中选择 Show Console 打开控制台，输入下面的代码。

  - Sublime 3

  ```Python
  import  urllib.request,os;pf='Package Control.sublime-package';ipp=sublime.installed_packages_path();urllib.request.install_opener(urllib.request.build_opener(urllib.request.ProxyHandler()));open(os.path.join(ipp,pf),'wb').write(urllib.request.urlopen('http://sublime.wbond.net/'+pf.replace(' ','%20')).read())
  ```

  - Sublime 2

  ```Python
  import  urllib2,os;pf='Package Control.sublime-package';ipp=sublime.installed_packages_path();os.makedirs(ipp)ifnotos.path.exists(ipp)elseNone;urllib2.install_opener(urllib2.build_opener(urllib2.ProxyHandler()));open(os.path.join(ipp,pf),'wb').write(urllib2.urlopen('http://sublime.wbond.net/'+pf.replace(' ','%20')).read());print('Please restart Sublime Text to finish installation')
  ```

  2. 在浏览器中输入 https://sublime.wbond.net/Package%20Control.sublime-package 下载包管理工具的安装包，并找到安装 Sublime 目录下名为&quot;Installed Packages&quot;的目录，把刚才下载的文件放到这个文件加下，然后重启 Sublime Text 就搞定了。

- 安装插件。通过 Preference 菜单的 Package Control 或快捷键 Ctrl+Shift+P 打开命令面板，在面板中输入 Install Package 就可以找到安装插件的工具，然后再查找需要的插件。我们推荐大家安装以下几个插件：

  - SublimeCodeIntel - 代码自动补全工具插件。
  - Emmet - 前端开发代码模板插件。
  - Git - 版本控制工具插件。
  - Python PEP8 Autoformat - PEP8 规范自动格式化插件。
  - ConvertToUTF8 - 将本地编码转换为 UTF-8。

> **说明**：事实上[Visual Studio Code](https://code.visualstudio.com/)可能是更好的选择，它不用花钱并提供了更为完整和强大的功能，有兴趣的读者可以自行研究。

#### PyCharm - Python 开发神器

PyCharm 的安装、配置和使用在[《玩转 PyCharm》](../番外篇/玩转PyCharm.md)进行了介绍，有兴趣的读者可以选择阅读。

![](https://ngte-superbed.oss-cn-beijing.aliyuncs.com/book/Python-100-Days/python-pycharm.png)

### 练习

1. 在 Python 交互式环境中输入下面的代码并查看结果，请尝试将看到的内容翻译成中文。

   ```Python
   import this
   ```

   > **说明**：输入上面的代码，在 Python 的交互式环境中可以看到 Tim Peter 撰写的[“Python 之禅”](../Python之禅.md)，里面讲述的道理不仅仅适用于 Python，也适用于其他编程语言。

2. 学习使用 turtle 在屏幕上绘制图形。

   > **说明**：turtle 是 Python 内置的一个非常有趣的模块，特别适合对计算机程序设计进行初体验的小伙伴，它最早是 Logo 语言的一部分，Logo 语言是 Wally Feurzig 和 Seymour Papert 在 1966 发明的编程语言。

   ```Python
   import turtle

   turtle.pensize(4)
   turtle.pencolor('red')

   turtle.forward(100)
   turtle.right(90)
   turtle.forward(100)
   turtle.right(90)
   turtle.forward(100)
   turtle.right(90)
   turtle.forward(100)

   turtle.mainloop()
   ```

   > **提示**：本章提供的代码中还有画国旗和画小猪佩奇的代码，有兴趣的读者请自行研究。
