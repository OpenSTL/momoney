REM Creates a virtual environment for python if it hasn't already been created
REM Requires python 3 to be (first) in the path

if not exist ".venv" (
  python -m venv .venv
)
