How to contribute
-----------------

This guide is under heavy development. If you would like to contribute, please
see:

https://docs.python-guide.org/notes/contribute/

How to test your changes
------------------------

The html version of this guide is built with [sphinx](http://www.sphinx-doc.org/en/stable/). You may test your revisions locally by having sphinx installed. You can do this easily with pip (as described in the link).

``` bash
pip install --user sphinx
```

Then navigate to the directory of the Makefile and ```make build``` or ```make html```. Sphinx will then generate the HTML in a folder called `_build/html/`

After navigating to this folder, you can then use Python's built in web server to view your changes locally:

``` bash
python3 -m http.server
```

By default, `http.server` listens on every IP address bound on your host on port 8000. To bind to a specific one, say, localhost on port 8005:

``` bash
python3 -m http.server 8005 --bind 127.0.0.1
```

Style Guide
-----------

For all contributions, please follow the `Guide Style Guide`:

https://docs.python-guide.org/notes/styleguide/
