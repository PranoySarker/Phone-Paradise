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
    // console.log(phones);
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';

    //check if there is data or not in the searched value
    if (phones.length == 0) {
        searchResult.innerHTML = `<h1 class='message'>There is no such result</h1>`
    }
    else {

        phones.forEach(phone => {
            // console.log(phone);
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `<div class="card">
                            <img src="${phone.image}" class="card-img-top img-fluid" alt="...">
                            <div class="card-body">
                            <h5 class="card-title">${phone.phone_name}</h5>
                            <p class="card-text">${phone.brand}</p>
                            <button onclick = "loadPhoneDetails('${phone.slug}')" class="btn btn-primary">Details</button>
                        </div>
                    </div>`;
            searchResult.appendChild(div);
        });
    }
}


//function for load phone details
const loadPhoneDetails = phoneId => {
    console.log(phoneId);
    const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhoneDetails(data))

}

const displayPhoneDetails = phone => {
    console.log(phone);
    // console.log(phone.data.releaseDate);
    // console.log(phone.data.mainFeatures);
    // console.log(phone.data.mainFeatures.chipSet);
    // console.log(phone.data.mainFeatures.sensors);
    console.log(phone.data.others.Wlan);


    const phoneDetails = document.getElementById('phone-details');
    phoneDetails.textContent = '';

    const div = document.createElement('div');
    div.classList.add('details');
    div.innerHTML = `<h1 class ="fw-bold">${phone.data.slug}</h1>
                    <h4>Realease Date: ${phone.data.releaseDate}</h4>
                    <hr>
                     <h2 class="fw-bold">Main Features</h2>
                     <h5>Chipset: ${phone.data.mainFeatures.chipSet}</h5>
                     <h5>Display: ${phone.data.mainFeatures.displaySize}</h5>
                     <h5>Memory: ${phone.data.mainFeatures.memory}</h5>

                     <h2 class="fw-bold mt-5">Sensors</h2>
                     <h5>${phone.data.mainFeatures.sensors[0]}</h5>
                     <h5>${phone.data.mainFeatures.sensors[1]}</h5>
                     <h5>${phone.data.mainFeatures.sensors[2]}</h5>
                     <h5>${phone.data.mainFeatures.sensors[3]}</h5>
                     <h5>${phone.data.mainFeatures.sensors[4]}</h5>
                     
                     `;

    phoneDetails.appendChild(div);
}