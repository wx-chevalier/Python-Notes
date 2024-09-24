
##################
Image Manipulation
##################

.. image:: /_static/photos/34575689432_3de8e9a348_k_d.jpg

Most image processing and manipulation techniques can be carried out
effectively using two libraries: Python Imaging Library (PIL) and Open Source
Computer Vision (OpenCV).

A brief description of both is given below.


**********************
Python Imaging Library
**********************

The `Python Imaging Library <http://www.pythonware.com/products/pil/>`_, or PIL
for short, is one of the core libraries for image manipulation in Python. Unfortunately,
its development has stagnated, with its last release in 2009.

Luckily for you, there's an actively-developed fork of PIL called
`Pillow <http://python-pillow.github.io/>`_ -- it's easier to install, runs on
all major operating systems, and supports Python 3.

Installation
~~~~~~~~~~~~

Before installing Pillow, you'll have to install Pillow's prerequisites. Find
the instructions for your platform in the
`Pillow installation instructions <https://pillow.readthedocs.io/en/3.0.0/installation.html>`_.

After that, it's straightforward:

.. code-block:: console

    $ pip install Pillow

Example
~~~~~~~

.. code-block:: python

    from PIL import Image, ImageFilter
    #Read image
    im = Image.open( 'image.jpg' )
    #Display image
    im.show()

    #Applying a filter to the image
    im_sharp = im.filter( ImageFilter.SHARPEN )
    #Saving the filtered image to a new file
    im_sharp.save( 'image_sharpened.jpg', 'JPEG' )

    #Splitting the image into its respective bands, i.e. Red, Green,
    #and Blue for RGB
    r,g,b = im_sharp.split()

    #Viewing EXIF data embedded in image
    exif_data = im._getexif()
    exif_data

There are more examples of the Pillow library in the
`Pillow tutorial <https://pillow.readthedocs.io/en/stable/handbook/tutorial.html>`_.


***************************
Open Source Computer Vision
***************************

Open Source Computer Vision, more commonly known as OpenCV, is a more advanced
image manipulation and processing software than PIL. It has been implemented
in several languages and is widely used.

Installation
~~~~~~~~~~~~

In Python, image processing using OpenCV is implemented using the ``cv2`` and
``NumPy`` modules.  The `installation instructions for OpenCV
<http://docs.opencv.org/2.4/doc/tutorials/introduction/table_of_content_introduction/table_of_content_introduction.html#table-of-content-introduction>`_
should guide you through configuring the project for yourself.

NumPy can be downloaded from the Python Package Index(PyPI):

.. code-block:: console

    $ pip install numpy


Example
~~~~~~~

.. code-block:: python

    import cv2
    #Read Image
    img = cv2.imread('testimg.jpg')
    #Display Image
    cv2.imshow('image',img)
    cv2.waitKey(0)
    cv2.destroyAllWindows()

    #Applying Grayscale filter to image
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

    #Saving filtered image to new file
    cv2.imwrite('graytest.jpg',gray)

There are more Python-implemented examples of OpenCV in this `collection of
tutorials
<https://opencv-tutorial.readthedocs.io/en/latest/>`_.
