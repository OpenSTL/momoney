
filters = {
    invalidRows : function (rows, column_names) {
        var filtered_rows = rows.filter(function(row){
            row_okay = true;
            column_names.forEach(function(column_name){
                if (isNaN(row[column_name]))
                {
                    row_okay = false;
                    return;
                }
            });
            return row_okay;
        });
        return filtered_rows;
    },

    invalidValues : function (series) {
        var filtered_series = series.filter(function(value){
            if (isNaN(value)){return false;}
            return true;
        });
        return filtered_series;
    },

    largest : function (rows, field){
        var highest = 0;
        rows.forEach(function(row){
            if (row[field] > highest){
                    highest = row[field];
            }
        });
        return highest;
    }

}