
filters = {
        invalidRows : function (rows, column_names) {
        var filtered_rows = rows.filter(function(row){
            column_names.forEach(function(column_name){
                if (isNaN(row[column_name])){return false;}
            });
            return true;
        });
        return filtered_rows;
    }
}