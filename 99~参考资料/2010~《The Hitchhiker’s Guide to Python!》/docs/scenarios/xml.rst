
###########
XML parsing
###########

.. image:: /_static/photos/33888714601_a1f7d020a2_k_d.jpg


********
untangle
********

`untangle <https://github.com/stchris/untangle>`_ is a simple library which
takes an XML document and returns a Python object which mirrors the nodes and
attributes in its structure.

For example, an XML file like this:

.. code-block:: xml

    <?xml version="1.0"?>
    <root>
        <child name="child1">
    </root>

can be loaded like this:

.. code-block:: python

    import untangle
    obj = untangle.parse('path/to/file.xml')

and then you can get the child element's name attribute like this:

.. code-block:: python

    obj.root.child['name']

untangle also supports loading XML from a string or a URL.


*********
xmltodict
*********

`xmltodict <https://github.com/martinblech/xmltodict>`_ is another simple
library that aims at making XML feel like working with JSON.

An XML file like this:

.. code-block:: xml

    <mydocument has="an attribute">
      <and>
        <many>elements</many>
        <many>more elements</many>
      </and>
      <plus a="complex">
        element as well
      </plus>
    </mydocument>

can be loaded into a Python dict like this:

.. code-block:: python

    import xmltodict

    with open('path/to/file.xml') as fd:
        doc = xmltodict.parse(fd.read())

and then you can access elements, attributes, and values like this:

.. code-block:: python

    doc['mydocument']['@has'] # == u'an attribute'
    doc['mydocument']['and']['many'] # == [u'elements', u'more elements']
    doc['mydocument']['plus']['@a'] # == u'complex'
    doc['mydocument']['plus']['#text'] # == u'element as well'

xmltodict also lets you roundtrip back to XML with the unparse function,
has a streaming mode suitable for handling files that don't fit in memory,
and supports XML namespaces.

**********
xmlschema
**********

`xmlschema <https://github.com/sissaschool/xmlschema>`_ provides support for using XSD-Schemas in Python.
Unlike other XML libraries, automatic type parsing is available, so f.e. if the schema defines an element to be of type ``int``, the parsed ``dict`` will contain also an ``int`` value for that element. 
Moreover the library supports automatic and explicit validation of XML documents against a schema.

.. code-block:: python

    from xmlschema import XMLSchema, etree_tostring

    # load a XSD schema file
    schema = XMLSchema("your_schema.xsd")
    
    # validate against the schema
    schema.validate("your_file.xml")
    
    # or
    schema.is_valid("your_file.xml")
    
    # decode a file
    data = schmema.decode("your_file.xml")
    
    # encode to string
    s = etree_tostring(schema.encode(data))
