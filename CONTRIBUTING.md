Working with Municipal Data
===========================

This is a static site created using the
[pelican](http://docs.getpelican.com/en/stable/) static site generator. The data
is imported from an Excel file into CSV, then displayed using the Javascript
[D3](https://d3js.org/) library.

The pelican site content is in the `content` directory. The data is in the
`data` directory. The javascript for displaying data is in the `js` directory.

Rendering the Site with Pelican
-------------------------------

To work on the site, setup pelican so that it generates the pages on your local
machine. This requires python 3 to be installed on your computer.

### POSIX System (linux, mac, cygwin on windows)

Requires automake and bash to be installed on your system in addition to
`python3` being in your path.

1.  Run `make_venv.bash` to create a python virtual environment.
2.  Execute `source .venv\bin\activate` to enter the virtual environment in your
    terminal. This only applies to this terminal, you must run this for each
    terminal you wish to use pelican from.
3.  Execute `make devserver` to generate the pelican site in the `output`
    directory and start serving it on
    [http://localhost:8000](http://localhost:8000).

### Windows

> This all works better on POSIX systems, if you would like to have that on
> windows, you can install [Cygwin](https://www.cygwin.com/) to get this all
> working from within your windows box.

Requires Python 3 to be installed on your computer, and accessible as the first
`python` command found in your `PATH`.

1.  Run `run_windows.bat` to do the following for you.
    1.  Create a python virtual environment
    2.  Activate the virtual environment for the script
    3.  Install the required components of pelican in your virtual environment
    4.  Generate the pelican site in the `output`
    5.  Start serving the site on [http://localhost:8000](http://localhost:8000)
2.  Make changes to source files, javascript, data, etc.
3.  Press Ctrl+C in the terminal serving the Site
4.  Re run `run-window.bat` to generate and start serving again.
