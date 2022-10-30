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
        jatatable(myTable, {});
    </script>
</body>
</html>
```

## Devlog
2022.10.30
1. Table Headers can be resided.

## Demo
https://bbljjatatable.azurewebsites.net/
