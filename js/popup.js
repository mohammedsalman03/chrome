const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a425bb3a1emshacddd96f1956a77p1d5f37jsnc2a11ed8f617',
		'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
	}
};

fetch('https://livescore6.p.rapidapi.com/matches/v2/list-by-date?Category=soccer&Date=20231801&Timezone=-7', options) 
.then(
    response => {
        response.json().then(
            data => {

                console.log(data);
                let temp = "";
                const indices = [0, 1, 2, 3, 81];
                const filteredStages = data.Stages.filter((stage, index) => indices.includes(index));
                if(data){
                    document.getElementById("fixtures").innerHTML = filteredStages.map((x) => {
                        let hour=String(x.Events[0].Esd).slice(8,10)
                        let minutes=String(x.Events[0].Esd).slice(10,12)
                        let year=String(x.Events[0].Esd).slice(0,4)
                        let month=String(x.Events[0].Esd).slice(4,6)
                        let day=String(x.Events[0].Esd).slice(6,8)
                        let ampm= hour>=12 ? 'AM' : 'PM';
                        if(hour>=12){
                            day=String(parseInt(day)+1);
                        }else{
                            day=String(parseInt(day));
                        }
                        hour=hour%12;
                        hour=hour?hour:12;
                        if(parseInt(minutes)+30==60){
                            hour=parseInt(++hour);
                            if(parseInt(minutes)+30 == 60){
                                minutes=00;
                            }else{
                                minutes=(parseInt(minutes)+30);
                            }
                            
                        }else{
                            minutes=(parseInt(minutes)+30).toString();
                        }
                        temp += `<tr>
                        <td>${x.Cnm}</td>
                        <td>${x.Snm}</td>
                        <td>${x.Events[0].T1[0].Nm}</td>
                        <td>${x.Events[0].T2[0].Nm}</td>
                        <td>${day}/${month}/${year}</td>
                        <td>${(hour).toString().padStart(2, '0')}:${(minutes).toString().padStart(2, '0')} ${ampm}</th>
                       </tr>`;
                        
                    }).join(' ');;
    
                }
                
                document.getElementById("fixtures").innerHTML += temp;
            }
        )
    }).catch((err)=>{
        console.log(err);
    })
        
    






/*async function fetchData() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a425bb3a1emshacddd96f1956a77p1d5f37jsnc2a11ed8f617',
            'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
        }
    };

    const res = await fetch('https://livescore6.p.rapidapi.com/matches/v2/list-by-date?Category=soccer&Date=20231801&Timezone=-7', options)
    const record = await res.json()

    console.log('record', record)
    let date= new Date();
    
    const indices = [0, 1, 2, 93, 94];
const filteredStages = record.Stages.filter((stage, index) => indices.includes(index));
document.getElementById("fixture").innerHTML = filteredStages.map(item => {
        var temp = "";

        item.records.forEach((x) => {
            
            temp+= "<tr>";
            temp+= "<td>" + x.Cnm + "</td>";
            temp+= "<td>" + x.Snm + "</td>";
            temp+= "<td>" + x.Events[0].T1[0].Nm + "</td>";
            temp+= "<td>" + x.Events[0].T2[0].Nm + "</td>";
            temp+= "<td>" + date.getDate(x.Events[0].Esd)/(date.getMonth(x.Events[0].Esd)+1).toString().padStart(2, '0')/date.getFullYear(x.Events[0].Esd) + "</td>";
            temp+= "<td>" + String(item.Events[0].Esd).slice(8,10)}: String(item.Events[0].Esd).slice(10,12) + "</td>";
            temp+= "</tr>";
        });
});

*/
    
/*`<td>${item.Cnm}</td> <td>${item.Snm}</td> <td>${item.Events[0].T1[0].Nm}</td> <td>${item.Events[0].T2[0].Nm}</td> <td><i class="material-icons" style="font-size:18px">today</i></td> <td>${date.getDate(item.Events[0].Esd)}/${(date.getMonth(item.Events[0].Esd)+1).toString().padStart(2, '0')}/${date.getFullYear(item.Events[0].Esd)}</td> <td><i class="material-icons" style="font-size:18px">access_alarm</i> ${String(item.Events[0].Esd).slice(8,10)}:${String(item.Events[0].Esd).slice(10,12)} PM</td>`
).join(' ');*/
/*}*/


/*
fetchData(); */