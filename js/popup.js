async function fetchData() {
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
document.getElementById("fixtures").innerHTML = filteredStages.map(item => 
    
`<li>${item.Cnm} | ${item.Snm} | ${item.Events[0].T1[0].Nm} 🆚 ${item.Events[0].T2[0].Nm} | <i class="material-icons" style="font-size:18px">today</i> ${date.getDate(item.Events[0].Esd)}/${(date.getMonth(item.Events[0].Esd)+1).toString().padStart(2, '0')}/${date.getFullYear(item.Events[0].Esd)} | <i class="material-icons" style="font-size:18px">access_alarm</i> ${String(item.Events[0].Esd).slice(8,10)}:${String(item.Events[0].Esd).slice(10,12)} PM</li>`
).join(' ');


}

fetchData();