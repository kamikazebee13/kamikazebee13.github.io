async function loadCSV(file) {
	const response = await fetch(file);
	const data = await response.text();
	const rows = data.split("\n").map(row => row.split(","));
	return rows;
}

document.addEventListener("DOMContentLoaded", () => {
	populateTable("letsGoTable", "letsGo.csv"); //populates the table with ID 'letsGoTable'
});

document.addEventListener("DOMContentLoaded", () => {
    const tables = document.querySelectorAll(".checklistTable"); // Select all tables with the class 'gameTable'

    tables.forEach(table => {
        const tableId = table.id; // Get the table's ID
        const csvFile = `${tableId}.csv`; // Assume the CSV file matches the table ID
        populateTable(tableId, csvFile); // Call the populate function for each table
    });
});


async function populateTable(tableId, csvFile) {
	const tableBody = document.querySelector(`#${tableId} tbody`); //select table body, this is specific to the letsGoTable and code will need to be updated when more tables are added
	const data = await loadCSV("data/letsGo.csv"); //load csv file
	
	data.slice(1).forEach(row => {
		if (row.length < 6) return; //skip incomplete rows
		
		const tr = document.createElement("tr");
		
		//Create checkbox for the "Caught" column
		const checkboxCell = document.createElement("td");
		const checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkboxCell.appendChild(checkbox);
		
		//Create an image element for the "Image" column
		const imgCell = document.createElement("td");
		const img = document.createElement("img");
		img.src = row[2];
		img.alt = row[3];
		img.width = 50;
		img.height = 50;
		imgCell.appendChild(img);
		
		//Fill other table cells
		tr.innerHTML = `
			<td></td> <!--Placeholder for checkbox-->
			<td>${row[0]}</td> <!--Regional Dex #-->
			<td>${row[1]}</td> <!--National Dex #-->
			<td></td> <!--Placeholder for image-->
			<td>${row[3]}</td> <!--Pokemon Name-->
			<td>${row[4]}</td> <!--Evolution Mechanic-->
			<td>${row[5]}</td> <!--Primary Location-->
		`;
		
		//append checkbox and image to their respective cells
		tr.children[0].appendChild(checkbox);
		tr.children[3].appendChild(img);
		
		//add row to table body
		tableBody.appendChild(tr);
	});
}
