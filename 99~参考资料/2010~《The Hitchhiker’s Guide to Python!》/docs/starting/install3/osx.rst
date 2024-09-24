:orphan: This article should not be added to a toctree for now

.. _install3-osx:


###############################
Installing Python 3 on Mac OS X
###############################

.. image:: /_static/photos/34435689480_2e6f358510_k_d.jpg

**Mac OS X comes with Python 2.7 out of the box between versions 10.8 and 12.3.**

If your Mac OS X version is between the above versions,
you do not need to install or configure anything else to use Python 2. These
instructions document the installation of Python 3.

The version of Python that ships with OS X is great for learning, but it's not
good for development. The version shipped with OS X may be out of date from the
`official current Python release <https://www.python.org/downloads/mac-osx/>`_,
which is considered the stable production version.


**************
Doing it Right
**************

Let's install a real version of Python.

Before installing Python, you'll need to install GCC. GCC can be obtained
by downloading `Xcode <https://developer.apple.com/xcode/>`_, the smaller
`Command Line Tools <https://developer.apple.com/downloads/>`_ (must have an
Apple account) or the even smaller `OSX-GCC-Installer <https://github.com/kennethreitz/osx-gcc-installer#readme>`_
package.

.. note::
    If you already have Xcode installed, do not install OSX-GCC-Installer.
    In combination, the software can cause issues that are difficult to
    diagnose.

.. note::
    If you perform a fresh install of Xcode, you will also need to add the
    commandline tools by running ``xcode-select --install`` on the terminal.

While OS X comes with a large number of Unix utilities, those familiar with
Linux systems will notice one key component missing: a package manager.
`Homebrew <https://brew.sh>`_ fills this void.

To `install Homebrew <https://brew.sh/#install>`_, open :file:`Terminal` or
your favorite OS X terminal emulator and run

.. code-block:: console

    $ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"

The script will explain what changes it will make and prompt you before the
installation begins.
Once you've installed Homebrew, insert the Homebrew directory at the top
of your :envvar:`PATH` environment variable. You can do this by adding the following
line at the bottom of your :file:`~/.profile` file

.. code-block:: console

    export PATH="/usr/local/opt/python/libexec/bin:$PATH"

If you have OS X 10.12 (Sierra) or older use this line instead

.. code-block:: console

    export PATH=/usr/local/bin:/usr/local/sbin:$PATH

Now, we can install Python 3:

.. code-block:: console

    $ brew install python

This will take a minute or two.

***
Pip
***

Homebrew installs ``pip`` pointing to the Homebrew'd Python 3 for you.


*********************
Working with Python 3
*********************

At this point, you have the system Python 2.7 available, potentially the
:ref:`Homebrew version of Python 2 <install-osx>` installed, and the Homebrew
version of Python 3 as well.

.. code-block:: console

    $ python

will launch the Homebrew-installed Python 3 interpreter.

.. code-block:: console

    $ python2

will launch the Homebrew-installed Python 2 interpreter (if any).

.. code-block:: console

    $ python3

will launch the Homebrew-installed Python 3 interpreter.

If the Homebrew version of Python 2 is installed then ``pip2`` will point to Python 2.
If the Homebrew version of Python 3 is installed then ``pip`` will point to Python 3.

The rest of the guide will assume that ``python`` references Python 3.

.. code-block:: console

    # Do I have a Python 3 installed?
    $ python --version
    Python 3.7.1 # Success!


*****************************
Pipenv & Virtual Environments
*****************************

The next step is to install Pipenv, so you can install dependencies and manage virtual environments.

A Virtual Environment is a tool to keep the dependencies required by different projects
in separate places, by creating virtual Python environments for them. It solves the
"Project X depends on version 1.x but, Project Y needs 4.x" dilemma, and keeps
your global site-packages directory clean and manageable.

For example, you can work on a project which requires Django 1.10 while also
maintaining a project which requires Django 1.8.

So, onward! To the :ref:`Pipenv & Virtual Environments <virtualenvironments-ref>` docs!

--------------------------------

This page is a remixed version of `another guide <https://www.stuartellis.name/articles/python-development-windows/>`_,
which is available under the same license.
