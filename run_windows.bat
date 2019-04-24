set OUTPUTDIR=output
set PELICANCONF=pelicanconf.py

call make_venv.bat
call .venv\Scripts\activate.bat

pip install -r requirements.txt

mkdir -p content/data 
pushd data
python export_data.py
popd

pelican content -o %OUTPUTDIR% -s %PELICANCONF%

cd %OUTPUTDIR%
pelican -l
