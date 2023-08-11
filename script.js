async function fetchData() {
    const url = 'https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=ree';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'd45f2f15d3msh170c440f2d96ef8p1daa04jsnfb12f239a0a2',
            'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com'
        }
    };

        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);

        
        document.getElementById("word").innerHTML = result.list.map(item => `<li>${item.author}</li>`).join('');

}
fetchData(); 