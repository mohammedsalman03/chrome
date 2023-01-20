async function fetchData() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'dc8994b59cmsh4a2a7f54d5cb30bp1e20c5jsne08aca9d8b5e',
            'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
        }
    };

    const res = await fetch('https://livescore6.p.rapidapi.com/matches/v2/list-by-date?Category=soccer&Date=20231801&Timezone=-7', options)
    const record = await res.json()

    console.log('record', record)
    let date= new Date();
    const indices = [0, 1, 4, 49, 50];
const filteredStages = record.Stages.filter((stage, index) => indices.includes(index));
document.getElementById("fixtures").innerHTML = filteredStages.map(item => `                 
    <li>${item.Cnm} | ${item.Snm} | ${item.Events[0].T1[0].Nm} Vs ${item.Events[0].T2[0].Nm} | ${date.getDate(item.Events[0].Esd)}/${(date.getMonth(item.Events[0].Esd)+1).toString().padStart(2, '0')}/${date.getFullYear(item.Events[0].Esd)} ${date.getHours(item.Events[0].Esd).toString().padStart(2, '0')}:${date.getMinutes(item.Events[0].Esd).toString().padStart(2, '0')}</li>`);


}

fetchData();