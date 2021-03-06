
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
		document.getElementsByClassName('table')[0].appendChild(tr);
	
		for (var tdCounter=0; tdCounter < 10; tdCounter++){

				td = document.createElement('td');
				td.className = 'table__td';
				td.style.backgroundColor = '#734222'; // Темные Ячейки
				td.style.height = '10%';
				td.style.width = '10%';
				td.style.lineHeight = '18px';
				td.style.fontSize = '40px';
				td.style.margin = '50px auto';
				document.getElementsByClassName('table__tr')[trCounter].appendChild(td);

				//Установка фонового цвета
				if ((trCounter%2 == 0 && tdCounter%2 == 0) || (trCounter%2 != 0 && tdCounter%2 != 0)){
					td.style.backgroundColor = '#FFDB8B';// Светлые ячейки
				};
				if ((tdCounter == 0 || tdCounter == 9) || (trCounter == 0 || trCounter == 9)) {
					td.style.backgroundColor = 'brown'; // Цвет поля букв и цифр
				};
					
				//Установка нумерации
				if (tdCounter == 0 && trCounter != 0 && trCounter != 9){
					td.innerText = trCounter;
				}	
				else if (tdCounter == 9 && trCounter != 0 && trCounter != 9){
					td.innerText = trCounter;
				};

				//Установка букв
				if (trCounter == 0 && tdCounter != 0 && tdCounter != 9){
					td.innerText = latters[tdCounter];
				}	
				else if (trCounter == 9 && tdCounter != 0 && tdCounter != 9){
					td.innerText = latters[tdCounter];
				};
				if (trCounter == 1 && tdCounter !=0 && tdCounter !=9){
					td.innerHTML = chessFiguresWhite[tdCounter];//Указание букв белых фигур
					//td.style.color = 'white'; //Цвет белых букв
				};
				if (trCounter == 2 && tdCounter !=0 && tdCounter !=9){
					td.innerHTML = chessFiguresWhite[0];//Указание пешек белых фигур
					td.style.color = 'white'; //Цвет белых букв
				};
				if (trCounter == 8 && tdCounter !=0 && tdCounter !=9){
					td.innerHTML = chessFiguresBlack[tdCounter];//Указание букв черных фигур
					td.style.color = 'black'; //Цвет белых букв
				};
				if (trCounter == 7 && tdCounter !=0 && tdCounter !=9){
					td.innerHTML = chessFiguresBlack[0];//Указание пешек черных фигур
					//td.style.color = 'black'; //Цвет черных букв
				};
			}
	}
	return table;
}
