
var table = document.createElement('table');
table.className = 'table';
//table.style.backgroundColor = 'yellow';
table.style.margin = '0 auto';
table.style.border = '1px solid black';
table.style.width = '600px';
table.style.height = '600px';
document.getElementsByTagName('body')[0].appendChild(table);

var tr, td;
for (var trCounter=0; trCounter < 10; trCounter++){
	tr = document.createElement('tr');
	tr.className = 'tr';
	document.getElementsByClassName('table')[0].appendChild(tr);
	
	for (var tdCounter=0; tdCounter < 10; tdCounter++){
		td = document.createElement('td');
		td.className = 'td';
		td.style.backgroundColor = 'yellow';
		td.style.height = '10%';
		td.style.width = '10%';
		document.getElementsByClassName('tr')[trCounter].appendChild(td);
		if ((trCounter%2 == 0 && tdCounter%2 == 0) || (trCounter%2 != 0 && tdCounter%2 != 0)){
			td.style.backgroundColor = 'white';
		}
		if ((tdCounter == 0 || tdCounter == 9) || (trCounter == 0 || trCounter == 9)) {
			td.style.backgroundColor = 'brown';
		}	
	}
	
}

//if (tdCounter > 0 && tdCounter < 9 && !=) {
			//td.style.backgroundColor = 'green';
		//}
		//if (tdCounter == 0 || tdCounter == 9) {
			//td.style.backgroundColor = 'brown';
		//}
	//}
	//if (trCounter == 0 || trCounter == 9) {
			//tr.style.backgroundColor = 'brown';
		//}
