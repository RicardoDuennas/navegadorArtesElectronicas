let table = document.getElementById("csv-data");
let url = "repositorioarteselectronicas.csv";
 
fetch(url)
  .then(response => response.text())
  .then(data => {
    let rows = data.split("\n");
    for (let i = 0; i < rows.length; i++) {
      let cells = rows[i].split(",");
      let row = table.insertRow();
      for (let j = 0; j < cells.length; j++) {
        let cell = row.insertCell();
        cell.innerText = cells[j];
      }
    }
  })
  .catch(error => console.log(error));