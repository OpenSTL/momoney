
# Make the virtual environment if it doesn't exist
if [ ! -d ".venv" ]; then
  python -m venv .venv
fi

# Go into the virtual environment
source .venv/Scripts/activate

# Get pre-requisites
pip install -r requirements.txt

# Start local server on port 8000
export PY=python
export PORT=8000

mkdir -p content/data 
pushd data
python export_data.py
popd

./develop_server.sh restart $PORT
