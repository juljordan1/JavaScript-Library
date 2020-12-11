const baseURL = 'https://api.spacexdata.com/v3';

const searchForm = document.querySelector('form');
//consoLe.Log(searchForm);
const spaceShips = document.querySelector('ul');
//console.Log(spaceShips);
const imageUl = document.getElementById('images');
console.log(imageUl);

searchForm.addEventListener('submit', fetchSpace); 
function fetchSpace(event) {
    console.log(event);
    event.preventDefault(); 

    fetch(`${baseURL}/rockets`)
        .then(responseObj => responseObj.json())
        .then(jsonData =>   displayRockets(jsonData))
}

function displayRockets(json){
    console.log('Results:',json);

    json.forEach(rocket => {
        let item = document.createElement('li');
        item.innerText = rocket.rocket_name;
        spaceShips.appendChild (item);

        let imageLi =document.createElement('li');
        let image = document.createElement('img');
        image.setAttribute('src', rocket.flickr_images[0]);
        image.style.height = '200px';
        image.style.width = 'auto'
        console.log(image);

        imageLi.appendChild(image);
        imageUl.appendChild(imageLi);

    })
}



