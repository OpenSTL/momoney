Working with Municipal Data
===========================

This is a static site created using the
[pelican](http://docs.getpelican.com/en/stable/) static site generator. The data
is imported from an Excel file into CSV, then displayed using the Javascript
[D3](https://d3js.org/) library.

The pelican site content is in the `content` directory. The data is in the
`data` directory. The javascript for displaying data is in the `js` directory.

Pelican can use [Markdown](https://en.wikipedia.org/wiki/Markdown),
[reStructuredText](http://docutils.sourceforge.net/rst.html) or Plain HTML to
make pages. For simple pages, markdown is preferred. You can find a simple
[cheat-sheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet),
[guide](https://www.markdownguide.org/),
[the creators page](https://daringfireball.net/projects/markdown/), and
[the offical spec](https://commonmark.org/) helpful. Markdown files should use
the `.md` extension. The primary goal of markdown is to have a text file that
is well laid-out to edit and read in plain text format, and the rules of layout
can also be leveraged to generate HTML (or PDF, Word Doc, etc) from it.

Rendering the Site with Pelican
-------------------------------

To work on the site, setup pelican so that it generates the pages on your local
machine. This requires python 3 to be installed on your computer.

### POSIX System (linux, mac, cygwin on windows)

Requires automake and bash to be installed on your system in addition to
`python3` being in your path.

It is important that there are no spaces in the directories above where your
repo is located. For example if you are running from
`/home/me/My Git Repos/municipalityBudgetsSTL`, consider moving the directory
to something like `/home/me/git_repos/municipalityBudgetsSTL`.

1.  From the repo run `./make_venv.bash` to create a python virtual environment.
    (Or just run `python3 -m venv .venv`.)
2.  Execute `source .venv/bin/activate` to enter the virtual environment in your
    terminal. This only applies to this terminal, you must run this for each
    terminal you wish to use pelican from.
3.  Execute `pip install -r requirements.txt` to install pelican and its
    pre-requisites.
4.  Execute `make devserver` to generate the pelican site in the `output`
    directory and start serving it on
    [http://localhost:8000](http://localhost:8000).
5.  Modify files and they will be immediately updated in the served version.
6.  When complete, run `make stopserver` to stop the running server.

### Windows - Lowest Barrier to Entry

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
4.  Re run `run_windows.bat` to generate and start serving again.

### Windows (Git Bash) - A Bit better

Requires Python 3 to be installed on your computer, and accessible as the first
`python` command found in your `PATH`.

Requires Git to be installed on your computer, and the following to be run from
the "Git Bash" command prompt.

1.  From the root of the repo run the `run_windows.bash` command prompt. This
    will do the following:
    1.  If it doesn't already exist, create a python virtual environment in the
        `.venv` directory.
    2.  Activate the virtual environment for the script
    3.  Install the required components of pelican in your virtual environment
    4.  Start serving the site on
        [http://localhost:8000](http://localhost:8000). This will automatically
        regenerate content as it is editing.
2.  Make changes to the content, refresh the page in your web browser to see
    the changes. (Test it by adding
    [markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
    text to the `pages\about.md` file.)
3.  Run `stop_windows.bash` to stop the server.

### Windows (Cygwin) - The Best

Start by installing [Cygwin](https://www.cygwin.com/) on your computer. Cygwin
functions very much like a linux operating system, which has been compiled to
run on your windows computer. It isn't great with graphical applications (some
work, some are iffy), but is great for command line tools.

1.  From the main [Cygwin](https://www.cygwin.com/) page, click on the link for
    [setup-x86_64.exe](https://www.cygwin.com/setup-x86_64.exe) to download the
    installer.
2.  Run the installer.
3.  For download source, select `Install from Internet`.
4.  The root directory of `C:\cygwin64` is probably fine.
5.  Pick anywhere for the `Local Package Directory`, once the install is
    complete, this can be deleted.
6.  Select a mirror from the list of "Available Download Sites". Probably an
    http:// one.
7.  Pick packages you want to install from the categorized list. The easiest
    way to find specific ones is with the search box. Click on the package line
    where it says "Skip" to change it to a specific version number to mark it
    for installation.
    These are required for the script:
    *  `python3`
    *  `python3-pip`
    *  `make`
    You might also like these:
    *  `git`
    *  `openssh`
    Feel free to add anything else you see that is interesting.

Once the Cygwin install is complete, open it (from the desktop icon or start
menu). Then run the following:

1.  Change to the directory of your code. For example if the repo is at
    `C:\Users\me\git\municipalityBudgetsSTL`, then enter
    `cd /cygdrive/c/Users/me/git/municipalityBudgetsSTL`.
    1.  It is important that there are no spaces in the directories above where
        your repo is located. For example if you are running from
        `C:\Users\me\My Git Repos\municipalityBudgetsSTL`, consider moving the
         directory to something like
         `C:\Users\me\git_repos\municipalityBudgetsSTL`.
2.  Create a python virtual environment `python3 -m venv .venv`.
    1.  Don't re-use one created in one of the above methods, if it already
        existed, run `rm -rf .venv` to remove it.
3.  Execute `source .venv/bin/activate` to enter the virtual environment in your
    terminal. This only applies to this terminal, you must run this for each
    terminal you wish to use pelican from.
4.  Execute `pip install -r requirements.txt` to install pelican and its
    pre-requisites.
5.  Execute `make devserver` to generate the pelican site in the `output`
    directory and start serving it on
    [http://localhost:8000](http://localhost:8000).
6.  Modify files and they will be immediately updated in the served version.
7.  When complete, run `make stopserver` to stop the running server.
