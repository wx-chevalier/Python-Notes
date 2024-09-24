
######################
Continuous Integration
######################

.. image:: /_static/photos/33907150594_9abba7ad0a_k_d.jpg

.. note::
    For advice on writing your tests, see :doc:`/writing/tests`.


****
Why?
****

Martin Fowler, who first wrote about `Continuous Integration <http://martinfowler.com/articles/continuousIntegration.html>`_
(short: CI) together with Kent Beck, describes CI as follows:

    Continuous Integration is a software development practice where members of
    a team integrate their work frequently, usually each person integrates at
    least daily - leading to multiple integrations per day. Each integration is
    verified by an automated build (including test) to detect integration errors
    as quickly as possible. Many teams find that this approach leads to
    significantly reduced integration problems and allows a team to develop
    cohesive software more rapidly.


*******
Jenkins
*******

`Jenkins CI <http://jenkins-ci.org>`_ is an extensible Continuous Integration engine. Use it.


********
Buildbot
********

`Buildbot <http://docs.buildbot.net/current/>`_ is a Python system to
automate the compile/test cycle to validate code changes.


***
Tox
***

`tox <https://tox.readthedocs.io/en/latest/>`_ is an automation tool providing
packaging, testing, and deployment of Python software right from the console or
CI server. It is a generic virtualenv management and test command line tool
which provides the following features:

* Checking that packages install correctly with different Python versions and
  interpreters
* Running tests in each of the environments, configuring your test tool of
  choice
* Acting as a front-end to Continuous Integration servers, reducing boilerplate
  and merging CI and shell-based testing


*********
Travis-CI
*********

`Travis-CI <https://travis-ci.org/>`_ is a distributed CI server which builds
tests for open source projects for free. It provides multiple workers to run
Python tests on and seamlessly integrates with GitHub. You can even have it
comment on your Pull Requests whether this particular changeset breaks the
build or not. So, if you are hosting your code on GitHub, Travis-CI is a great
and easy way to get started with Continuous Integration.

In order to get started, add a :file:`.travis.yml` file to your repository with
this example content::

    language: python
    python:
      - "2.6"
      - "2.7"
      - "3.2"
      - "3.3"
    # command to install dependencies
    script: python tests/test_all_of_the_units.py
    branches:
      only:
        - master


This will get your project tested on all the listed Python versions by
running the given script, and will only build the ``master`` branch. There are a
lot more options you can enable, like notifications, before and after steps,
and much more. The `Travis-CI docs <https://docs.travis-ci.com/user/languages/python/>`_
explain all of these options, and are very thorough.

In order to activate testing for your project, go to `the Travis-CI site <https://travis-ci.org/>`_
and login with your GitHub account. Then activate your project in your
profile settings and you're ready to go. From now on, your project's tests
will be run on every push to GitHub.
