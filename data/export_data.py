import pandas as pd
import os
import json

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
    valid_rows = (data != "Information Not Provided").all(1) 
    filtered_data = data[valid_rows]

    valid_rows = (filtered_data != "No Breakdown Provided").all(1)
    filtered_data = filtered_data[valid_rows]

    valid_rows = (filtered_data != "Breakdown of taxes not provided").all(1)
    filtered_data = filtered_data[valid_rows]

    # Duplicate columns
    filtered_data = filtered_data.loc[:,~filtered_data.columns.duplicated()]

    return filtered_data

def make_dict(data):
    return data.to_dict(orient='index')

def write_json(data, file):
    with open(file, 'w') as f:
        if isinstance(data, pd.DataFrame):
            data.to_json(f, orient="index")
        else:
            json.dump(data, f, indent=2)

if __name__ == "__main__":
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    data = pull_data(workbook_filename)

    combined_data = combine(data)
    filtered_data = filter(combined_data)
    filtered_data.to_csv(out_csv)
    #write_json(filtered_data, out_json)
    dict_data = make_dict(filtered_data)
    write_json(dict_data, out_json)

    print("Data processing complete")
