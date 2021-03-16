const akty = document.getElementById('akty');

const generateCard = (title, tresc) => {
    const container = document.createElement('div');
    const header = document.createElement('h1');
    const text = document.createElement('p');

    header.innerHTML = title;
    text.innerHTML = tresc;

    container.classList.add('container');
    container.appendChild(header);
    container.appendChild(text);
    akty.appendChild(container);
}

const fetchData = url => {
    fetch(url).then(response => {
        if(!response.ok) throw Error('Nie można załadować danych.');

        return response.json();
    })
    .then(data => {
        const ustawy = data.ustawy;

        ustawy.forEach(el => {
            generateCard(el.title, el.text.split('\n').join('<br><br>'));
        })
    })
    .catch(err => console.log(err));
}

fetchData('https://symulatorssejmu.pl/prawo.json');