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
				<th class="unbound" style="width:3rem;"></th>
				<th>A</th>
				<th>B</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><button>Edit</button></td>
				<td>1</td>
				<td>1</td>
			</tr>
			<tr>
				<td><button>Edit</button></td>
				<td>2</td>
				<td>2</td>
			</tr>
		</tbody>
	</table>
	<script>
		const myTable = document.getElementById("myTable");

		// initailize jatatable!
		Jatatable.init(myTable, {
			autoColumnWidth : false,  // default is false
			defaultColumnWidth: 125,  // in effect if autoColumnWidth is set to false
		});

		// insert column
		let rows = Jatatable.insertColumn(myTable, "New Column Header"); 
		//rows refer to all of the tr elements inside the tbody element;
		
		// delete column
		Jatatable.deleteColumn(myTable, 1);

	</script>
</body>
</html>
```

## Devlog

2022.11.17
1. Add 'defaultColumnWidth' property (Number) into init settings. Default value is 100.

2022.11.14
1. Add Jatatable.deleteColumn(HTMLTableElement tbElement, Number columnIndex) function.

2022.11.13
1. Add "unbound" class to th elements can prevent those columns from being auto-sized.

2022.11.02
1. Column width can be smaller than its header text when autoColumnWidth is set to false.
2. Declare a const Jatatable variable holding all of its methods as its properties.

2022.10.31
1. Add Jatatable.insertColumn(HTMLTableElement tbElement, string headerText) function.

2022.10.30
1. Table columns can be resized by dragging the right edge of each column header.

## Demo
https://bbljjatatable.azurewebsites.net/
