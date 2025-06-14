==================================
前言
==================================

----------------------------------
项目主页
----------------------------------
https://github.com/yidao620c/python3-cookbook

----------------------------------
译者的话
----------------------------------
人生苦短，我用 Python！

译者一直坚持使用 Python 3，因为它代表了 Python 的未来。虽然向后兼容是它的硬伤，但是这个局面迟早会改变的，
而且 Python 3 的未来需要每个人的帮助和支持。
目前市面上的教程书籍，网上的手册大部分基本都是 2.x 系列的，专门基于 3.x 系列的书籍少的可怜。

最近看到一本《Python Cookbook》3rd Edition，完全基于 Python 3，写的也很不错。
为了 Python 3 的普及，我也不自量力，想做点什么事情。于是乎，就有了翻译这本书的冲动了！
这不是一项轻松的工作，却是一件值得做的工作：不仅方便了别人，而且对自己翻译能力也是一种锻炼和提升。

译者会坚持对自己每一句的翻译负责，力求高质量。但受能力限制，也难免有疏漏或者表意不当的地方。
如果译文中有什么错漏的地方请大家见谅，也欢迎大家随时指正： yidao620@gmail.com

----------------------------------
作者的话
----------------------------------
自从 2008 年以来，Python 3 横空出世并慢慢进化。Python 3 的流行一直被认为需要很长一段时间。
事实上，到我写这本书的 2013 年，绝大部分的 Python 程序员仍然在生产环境中使用的是版本 2 系列，
最主要是因为 Python 3 不向后兼容。毫无疑问，对于工作在遗留代码上的每个程序员来讲，向后兼容是不得不考虑的问题。
但是放眼未来，你就会发现 Python 3 给你带来不一样的惊喜。

正如 Python 3 代表未来一样，新的《Python Cookbook》版本相比较之前的版本有了一个全新的改变。
首先，也是最重要的，这意味着本书是一本非常前沿的参考书。书中所有代码都是在 Python 3.3 版本下面编写和测试的，
并没有考虑之前老版本的兼容性，也没有标注旧版本下的解决方案。这样子可能会有争议，
但是我们最终的目的是写一本完全基于现代工具和语言的书籍。
我们希望本书能够指导人们使用 Python 3 编写新的代码或者升级之前的遗留代码。

毫无疑问，编写一本这样的书给编辑工作带来一定的挑战。如果在网上搜索 Python 秘籍的话，会在诸如 ActiveState’s Python recipes 或者 Stack Overflow 的网站上搜到数以千计的有用的秘籍，但是其中绝大部分都已经是过时的了。
这些秘籍除了是基于 Python 2 编写之外，可能还有很多解决方案在不同的版本之间是不一样的 （比如 2.3 和 2.4 版本）。
另外，它们还会经常使用一些过时的技术，这些可能已经内置到 Python 3.3 里面去了。寻找完全基于 Python 3 的秘籍真的难上加难啊。

这本书的所有主题都是基于已经存在的代码和技术，而不是专门去寻找 Python 3 特有的秘籍。
在原有代码基础上，我们完全使用最新的 Python 技术去改造。
所以，任何想使用最新技术编写代码的程序员，都可以将本书当做一本很好的参考书籍。

在选择要包含哪些秘籍方面，很明显不可能编写一本书囊括 Python 领域所有的东西。
因此，我们优先选择了 Python 语言核心部分，以及那些有着广泛应用领域的问题。
另外，其中有很多秘籍用来展示 Python 3 的新特性，
这对于很多人来说是比较陌生的，哪怕是使用 Python 老版本的经验丰富的程序员。
这些示例程序也会偏向于展示一些有着广泛应用的编程技术 （即编程模式），
而不是仅仅定位在一些具体的问题上。尽管也提及到了一些第三方包，但是本书主要定位在 Python 语言核心和标准库。


----------------------------------
这本书适合谁
----------------------------------
这本书的目标读者是那些想深入理解 Python 语言机制和现代编程风格的有经验的 Python 程序员。
本书大部分内容集中于在标准库，框架和应用程序中广泛使用的高级技术。
本书所有示例均假设读者具有一定的编程背景并且可以读懂相关主题
（比如基本的计算机科学知识，数据结构知识，算法复杂度，系统编程，并行，C 语言编程等）。
另外，每个示例都只是一个入门指导，如果读者想深入研究，需要自己去查阅更多资料。
我们假定读者可以很熟练的使用搜索引擎以及知道怎样查询在线的 Python 文档。

有一些更加高级的秘籍，如果耐心阅读，将有助于理解 Python 底层的工作原理。
从中你将学到一些新的技巧和技术，并应用到你自己的代码中去。

----------------------------------
这本书不适合谁
----------------------------------
这本书不适合 Python 的初学者。事实上，本书假定读者具有 Python 教程或入门书籍中所教授的基础知识。
本书也不是那种快速参考手册 （例如快速查询某个模块下的某个函数）。
本书旨在聚焦几个最重要的主题，演示几种可能的解决方案，
提供一个跳板引导读者进入一些更高级的内容（这些可以在网上或者参考手册中找到）。

----------------------------------
在线示例代码
----------------------------------
本书几乎所有源代码均可以在 http://github.com/dabeaz/python-cookbook 上面找到。
作者欢迎各位读者修正 bug，改进代码和评论。


----------------------------------
使用示例代码
----------------------------------

本书就是帮助你完成你的工作的。
一般来讲，只要是本书上面的示例代码，你都可以随时拿过去在你的源代码和文档中使用。
除非你使用了大量的代码，否则不需要向我们申请许可。
例如，使用几个代码片段去完成一个程序不需要许可，贩卖或者分发示例代码的光盘则需要许可。
引用本书和示例代码去网上回答一个问题不需要许可，但是合并大量的代码到你的正式产品文档中去则需要许可。

我们不会要求你添加代码的出处，但是如果你这么做了，我们会很感激的。
引用通常包含标题，作者，出版社，ISBN。
例如：*Python Cookbook*, 3rd edition, by David Beazley and Brian K. Jones (O’Reilly).
Copyright 2013 David Beazley and Brian Jones, 978-1-449-34037-7.

如果你觉得你对示例代码的使用超出了合理使用或者上述列出的许可范围，
请随时联系我们，我们的邮箱是 permissions@oreilly.com。

----------------------------------
联系我们
----------------------------------
请将关于本书的评论和问题发送给出版社：

| O’Reilly Media, Inc.
| 1005 Gravenstein Highway North
| Sebastopol, CA 95472
| 800-998-9938 (in the United States or Canada)
| 707-829-0515 (international or local)
| 707-829-0104 (fax)

|

我们为本书建立了一个网页，其中包含勘误表，示例和一些其他信息。
可以通过链接 http://oreil.ly/python_cookbook_3e 访问。

关于本书的建议和技术性问题，请发送邮件至： bookquestions@oreilly.com

关于我们的书籍，讨论会，新闻的更多信息，请访问我们的网站： http://www.oreilly.com

在 Facebook 上找到我们：http://facebook.com/oreilly

在 Twitter 上关注我们：http://twitter.com/oreillymedia

在 YouTube 上观看我们：http://www.youtube.com/oreillymedia

----------------------------------
致谢
----------------------------------
我们衷心感谢本书的技术校审人员 Jake Vanderplas，Robert Kern 和 Andrea Crotti 非常有用的评论和建议，
还有 Python 社区的帮助和鼓励。我们同样感谢上一个版本的编辑 Alex Martelli，Anna Ravenscroft 和 David Ascher。
尽管这个版本是新创作的，但是前一个版本为本书提供了一个挑选主题和秘籍的初始框架。
最后也是最重要的，我们要感谢所有早期预览版本的读者，感谢你们为本书的改进提出的建议和意见。
