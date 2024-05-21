async function loadIntoTable(url, table){
    const tableHead=table.querySelector('thead')
    const tableBody=table.querySelector('tbody')

    const response= await fetch(url);
    const data=await response.json();
    console.log(data[0])

    //clear our table
    tableHead.innerHTML = '<tr></tr>';
    tableBody.innerHTML="";

    //putting headers
    for(const headerText in data[0]){
        const headerElement=document.createElement("th");
        headerElement.textContent=headerText;
        tableHead.querySelector('tr').appendChild(headerElement);
    }

    for(let i=0;i<data.length;i++){
        const obj=Object.values(data[i]);
        const rowElement=document.createElement('tr');
        for (const cellText of obj) {
            const cellElement=document.createElement('td')
            cellElement.textContent=cellText;
            rowElement.appendChild(cellElement);
        }
        tableBody.appendChild(rowElement);
    }
}

loadIntoTable("https://jsonplaceholder.typicode.com/posts", document.querySelector("table"))