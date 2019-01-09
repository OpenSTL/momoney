import pandas as pd
import os

workbook_filename = "import_data.xlsx"
out_json = "../content/data/full.json"
out_csv = "../content/data/full.csv"

def pull_data(workbook_filename):
    data = pd.read_excel(workbook_filename, None)
    return data

if __name__ == "__main__":
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    data = pull_data(workbook_filename)
