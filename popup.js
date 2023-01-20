async function fetchData() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '********',
            'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
        }
    };

    const res = await fetch('https://livescore6.p.rapidapi.com/matches/v2/list-by-date?Category=soccer&Date=20231801&Timezone=-7', options)
    const record = await res.json()

    console.log('record', record)
    document.getElementById("fixtures").innerHTML = record.Stages.map(item => `                 
    <li>${item.Events[0].T1[0].Nm} Vs ${item.Events[0].T2[0].Nm}</li>`);
}

fetchData();