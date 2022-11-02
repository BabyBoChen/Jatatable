# Jatatable
A JS Library For HTML Table Element.

## Usage:
```
<html>
<head>
	...
	<link href="jatatable/jatatable.css" rel="stylesheet" type="text/css">
	<script src="jatatable/jatatable.js"></script>
</head>
<body>
	<table id="myTable">
		<thead>
			<tr>
				<th>A</th>
				<th>B</th>
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
		Jatatable.init(myTable, {
			autoColumnWidth : false,
		});

		// insert column
		let rows = Jatatable.insertColumn(myTable, "New Column Header"); 
		//rows refer to all of the tr elements inside the tbody element;

	</script>
</body>
</html>
```

## Devlog

2022.11.02
1. Column Width can be smaller than its text when autoColumnWidth is set to false.
2. Declare a const Jatatable variable holding all of its methods as its properties.

2022.10.31
1. Add jatatableInsertColumn(HTMLTableElement tbElement, string headerText) function.

2022.10.30
1. Table columns can be resized by dragging the right edge of each column header.

## Demo
https://bbljjatatable.azurewebsites.net/
