
//var tableFirst = document.createElement('div');
//tableFirst.fun = chessBoard;
//document.getElementsByTagName('body')[0].appendChild(tableFirst);

document.write(chessBoard());


function chessBoard() {

	var table = document.createElement('table');
	table.className = 'table';
	table.style.margin = '50px auto';
	table.style.border = '1px solid black';
	table.style.width = '600px';
	table.style.height = '600px';
	document.getElementsByTagName('div')[0].appendChild(table);

	var tr, td;

	for (var trCounter=0; trCounter < 10; trCounter++){
	
		tr = document.createElement('tr');
		tr.className = 'table__tr';
		tr.style.textAlign = 'center';
		tr.style.fontSize = '25px';
		//tr.style.color = 'white';
		document.getElementsByClassName('table')[0].appendChild(tr);
	
		for (var tdCounter=0; tdCounter < 10; tdCounter++){

				td = document.createElement('td');
				td.className = 'table__td';
				td.style.backgroundColor = 'yellow';
				td.style.height = '10%';
				td.style.width = '10%';
				document.getElementsByClassName('table__tr')[trCounter].appendChild(td);

				//Установка цвета
				if ((trCounter%2 == 0 && tdCounter%2 == 0) || (trCounter%2 != 0 && tdCounter%2 != 0)){
					td.style.backgroundColor = 'white';
				}

				if ((tdCounter == 0 || tdCounter == 9) || (trCounter == 0 || trCounter == 9)) {
					td.style.backgroundColor = 'brown';
				}
					
				//Установка нумерации
				if (tdCounter == 0 && trCounter != 0 && trCounter != 9){
					td.innerText = trCounter;
				}	
	
				else if (tdCounter == 9 && trCounter != 0 && trCounter != 9){
					td.innerText = trCounter;
				}

				//Установка букв
				if (trCounter == 0 && tdCounter != 0 && tdCounter != 9){
					td.innerText = latters[tdCounter];
					//td.display = 'table-cell';
					//td.transform = 'rotate(90deg)';
				}	
	
				else if (trCounter == 9 && tdCounter != 0 && tdCounter != 9){
					td.innerText = latters[tdCounter];
				}	
			}
	}
	return table;
}
