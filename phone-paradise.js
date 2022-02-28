//  onclick event funcion 
const searchPhone = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = '';
    //alert for avoid empty input 
    if (searchText == '') {
        alert('please write something to search your product');
    }
    else {
        const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => displayPhone(data.data))
    }
}

//display phones results
const displayPhone = data => {
    // console.log(data);
    const limit = 20;
    const phones = data.slice(0, limit);
    console.log(phones);
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';

    //check if there is data or not in the searched value
    if (phones.length == 0) {
        searchResult.innerHTML = `<h1 class='message'>There is no such result</h1>`
    }
    else {

        phones.forEach(phone => {
            console.log(phone);
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `<div class="card">
                            <img src="${phone.image}" class="card-img-top img-fluid" alt="...">
                            <div class="card-body">
                            <h5 class="card-title">${phone.phone_name}</h5>
                            <p class="card-text">${phone.brand}</p>
                            <button onclick = "LoadPhoneDetails(${phone.slug})" class="btn btn-primary">Details</button>
                        </div>
                    </div>`;
            searchResult.appendChild(div);
        });
    }
}