# Jatatable
A JS Library For HTML Table Element.

## Usage:
```
<html>
<head>
    <link href="jatatable/jatatable.css" rel="stylesheet" type="text/css">
    <script src="jatatable/jatatable.js"></script>
</head>
<body>
    <table id="myTable">
        <thead>
            <tr>
                <th>A</th>
                <th>A</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>1</td>
            </tr>
            <tr>
                <td>2</td>
                <td>2</td>
            </tr>
       </tbody>
    </table>
    <script>
        const myTable = document.getElementById("myTable");
        
        // initailize jatatable!
        jatatable(myTable, {
            autoColumnWidth : true, //set column width according to each header's text width; if false, column width is default to 100px;
        });
        
        // insert column
        let rows = jatatableInsertColumn(myTable, "New Column Header"); //rows are all of the tr elements inside the tbody element;
    </script>
</body>
</html>
```

## Devlog
2022.10.30
1. Table columns can be resized by dragging the right edge of each column header.

2022.10.31
1. Add jatatableInsertColumn function.

## Demo
https://bbljjatatable.azurewebsites.net/
