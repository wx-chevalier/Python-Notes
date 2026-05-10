## 第 01 课：初识 Python

### Python 简介

Python 是由荷兰人吉多·范罗苏姆（Guido von Rossum）发明的一种编程语言，是目前世界上最受欢迎和拥有最多用户群体的编程语言。

<img src="https://ngte-superbed.oss-cn-beijing.aliyuncs.com/book/Python-100-Days/20210816232538.png" width="85%">

#### Python 的历史

1. 1989 年圣诞节：Guido 开始写 Python 语言的编译器。
2. 1991 年 2 月：第一个 Python 解释器诞生，它是用 C 语言实现的，可以调用 C 语言的库函数。
3. 1994 年 1 月：Python 1.0 正式发布。
4. 2000 年 10 月：Python 2.0 发布，Python 的整个开发过程更加透明，生态圈开始慢慢形成。
5. 2008 年 12 月：Python 3.0 发布，引入了诸多现代编程语言的新特性，但并不完全兼容之前的 Python 代码。
6. 2020 年 1 月：在 Python 2 和 Python 3 共存了 11 年之后，官方停止了对 Python 2 的更新和维护，希望用户尽快过渡到 Python 3。

> **说明**：大多数软件的版本号一般分为三段，形如 A.B.C，其中 A 表示大版本号，当软件整体重写升级或出现不向后兼容的改变时，才会增加 A；B 表示功能更新，出现新功能时增加 B；C 表示小的改动（例如：修复了某个 Bug），只要有修改就增加 C。

#### Python 的优缺点

Python 的优点很多，简单为大家列出几点。

1. 简单明确，跟其他很多语言相比，Python 更容易上手。
2. 能用更少的代码做更多的事情，提升开发效率。
3. 开放源代码，拥有强大的社区和生态圈。
4. 能够做的事情非常多，有极强的适应性。
5. 能够在 Windows、macOS、Linux 等各种系统上运行。

Python 最主要的缺点是执行效率低，但是当我们更看重产品的开发效率而不是执行效率的时候，Python 就是很好的选择。

#### Python 的应用领域

目前 Python 在 Web 服务器应用开发、云基础设施开发、**网络数据采集**（爬虫）、**数据分析**、量化交易、**机器学习**、**深度学习**、自动化测试、自动化运维等领域都有用武之地。

### 安装 Python 环境

想要开始你的 Python 编程之旅，首先得在计算机上安装 Python 环境，简单的说就是得安装运行 Python 程序的工具，通常也称之为 Python 解释器。我们强烈建议大家安装 Python 3 的环境，很明显它是目前更好的选择。

#### Windows 环境

可以在[Python 官方网站](https://www.python.org/downloads/)找到下载链接并下载 Python 3 的安装程序。

![](https://ngte-superbed.oss-cn-beijing.aliyuncs.com/book/Python-100-Days/20210719222940.png)

对于 Windows 操作系统，可以下载“executable installer”。需要注意的是，如果在 Windows 7 环境下安装 Python 3，需要先安装 Service Pack 1 补丁包，大家可以在 Windows 的“运行”中输入`winver`命令，从弹出的窗口上可以看到你的系统是否安装了该补丁包。如果没有该补丁包，一定要先通过“Windows Update”或者类似“CCleaner”这样的工具自动安装该补丁包，安装完成后通常需要重启你的 Windows 系统，然后再开始安装 Python 环境。

![](https://ngte-superbed.oss-cn-beijing.aliyuncs.com/book/Python-100-Days/20210719222956.png)

双击运行刚才下载的安装程序，会打开 Python 环境的安装向导。在执行安装向导的时候，记得勾选“Add Python 3.x to PATH”选项，这个选项会帮助我们将 Python 的解释器添加到 PATH 环境变量中（不理解没关系，照做就行），具体的步骤如下图所示。

![](https://ngte-superbed.oss-cn-beijing.aliyuncs.com/book/Python-100-Days/20210719223007.png)

![](https://ngte-superbed.oss-cn-beijing.aliyuncs.com/book/Python-100-Days/20210719223021.png)

![](https://ngte-superbed.oss-cn-beijing.aliyuncs.com/book/Python-100-Days/20210719223317.png)

![](https://ngte-superbed.oss-cn-beijing.aliyuncs.com/book/Python-100-Days/20210719223332.png)

安装完成后可以打开 Windows 的“命令行提示符”工具（或“PowerShell”）并输入`python --version`或`python -V`来检查安装是否成功，命令行提示符可以在“运行”中输入`cmd`来打开或者在“开始菜单”的附件中找到它。如果看了 Python 解释器对应的版本号（如：Python 3.7.8），说明你的安装已经成功了，如下图所示。

![](https://ngte-superbed.oss-cn-beijing.aliyuncs.com/book/Python-100-Days/20210719223350.png)

> **说明**：如果安装过程显示安装失败或执行上面的命令报错，很有可能是因为你的 Windows 系统缺失了一些动态链接库文件或 C 构建工具导致的问题。可以在[微软官网](https://www.microsoft.com/zh-cn/download/details.aspx?id=48145)下载 Visual C++ Redistributable for Visual Studio 2015 文件进行修复，64 位的系统需要下载有 x64 标记的安装文件。也可以通过下面的百度云盘地址获取修复工具，运行修复工具，按照如下图所示的方式进行修复，链接: https://pan.baidu.com/s/1iNDnU5UVdDX5sKFqsiDg5Q 提取码: cjs3。
>
> ![QQ20210711-0](https://ngte-superbed.oss-cn-beijing.aliyuncs.com/book/Python-100-Days/20210816234614.png)

除此之外，你还应该检查一下 Python 的包管理工具是否已经可用，对应的命令是`pip --version`。

#### macOS 环境

macOS 自带了 Python 2，但是我们需要安装和使用的是 Python 3。可以通过 Python 官方网站提供的[下载链接](https://www.python.org/downloads/release/python-376/)找到适合 macOS 的“macOS installer”来安装 Python 3，安装过程基本不需要做任何勾选，直接点击“下一步”即可。安装完成后，可以在 macOS 的“终端”工具中输入`python3`命令来调用 Python 3 解释器，因为如果直接输入`python`，将会调用 Python 2 的解释器。

### 总结

Python 语言可以做很多的事情，也值得我们去学习。要使用 Python 语言，首先需要在自己的计算机上安装 Python 环境，也就是运行 Python 程序的 Python 解释器。
