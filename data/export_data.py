import pandas as pd
import os

workbook_filename = "import_data.xlsx"
out_json = "../content/data/full.json"
out_csv = "../content/data/full.csv"

def pull_data(workbook_filename):
    data = pd.read_excel(
        workbook_filename, index_col=0, header=0, skipfooter=5,
        sheet_name=["Budget", "Revenues", "Expenditures", "Debts"])       

    return data

def combine(data):
    return pd.concat(
        [data["Budget"], data["Revenues"], data["Expenditures"],
        data["Debts"]], axis=1)

def filter(data):
    valid_rows =(data != "Information Not Provided").all(1) 
    filtered_data = data[valid_rows]
    return filtered_data

def make_dict(data):
    pass

if __name__ == "__main__":
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    data = pull_data(workbook_filename)

    combined_data = combine(data)
    filtered_data = filter(combined_data)
    filtered_data.to_csv(out_csv)
    print(combined_data)