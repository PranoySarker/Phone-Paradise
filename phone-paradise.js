const searchPhone = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;

    const url = 'https://openapi.programming-hero.com/api/phones?';
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhone(data.data))
}

const displayPhone = phones => {
    console.log(phones);
    const searchResult = document.getElementById('search-result');
    phones.forEach(element => {
        console.log(element);
    });
}