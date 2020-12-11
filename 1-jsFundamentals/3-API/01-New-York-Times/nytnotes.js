const baseURL = 'https://cors-anywhere.herokuapp.com/https://api.nytimes.com/svc/search/v2/articlesearch.json'; //the base url that we pull data from
const key = 'scRabMPukqGaOzr8tGhsu7zl01JzwMAV'; // the key that you get registered
let url; // assigning value to the function
const searchTerm = document.querySelector('.search'); // all of these DOM elements link to or html
const startDate = document.querySelector('.start-date'); //links class start date
const endDate = document.querySelector('.end-date'); //links class end date
const searchForm = document.querySelector('form'); //links class form
const submitBtn = document.querySelector('.submit'); //links classsubmit
const nextBtn = document.querySelector('.next'); //links class next
const previousBtn = document.querySelector('.prev');//links class prev
const nav = document.querySelector('nav');//links class nav
const section = document.querySelector('section');//links class section
nav.style.display = 'none'; //had next 10 and prev 10 hidden at first
let pageNumber = 0; // starts on page 0 by default
// console.log('PageNumber:', pageNumber);
searchForm.addEventListener('submit', fetchResults); // looks for clicking the submit button
nextBtn.addEventListener('click', nextPage); // looks for next page button to be clicked
previousBtn.addEventListener('click', previousPage); //looks for prev button to be pressed
function fetchResults(e) { // the function that grams the results
    // console.log(e);
    e.preventDefault(); //prevents automatic refresh of the page
    url = `${baseURL}?api-key=${key}&page=${pageNumber}&q=${searchTerm.value}`; //combines the info from URL and makes it readable
    // console.log('URL:', url);
    if (startDate.value !== '') { //checking the start date to see if anyting is there
        console.log(startDate.value) //logs the start date if there is one
        url += '&begin_date=' + startDate.value; //add the start date to the URL
        console.log('URL:', url); // logs the URL with the start date
    }
    if (endDate.value !== '') { //checking the end date to see if anyting is there
        console.log(endDate.value)//logs the end date if there is one
        url += '&end_date=' + endDate.value;//adds the end date to the URL
        console.log('URL:', url);//logs the URL with the end date
    }
    fetch(url) //takes the information that comes out of the abve function and plus it into the fetch (looks for data to pull)
        .then(function (result) { //runs the fetch and if it is completed it will add the data to (result)
            console.log(result) //displays if the fetch is complete or not
            return result.json(); //turns the results into a JSON so it can be read (first declaration of our fetch)
        })
        .then(function (json) { //grabs the JSON data from the .then statement above
            console.log(json); // logs the JSON data
            displayResults(json); //Displays the JSON data 
        })
}
function displayResults(json) { //this function will allow our JSON data to be shown on the page
    console.log('Display Results', json); //this logs our results from the JSON data in our console
    // console.log(json.response.docs);
    while (section.firstChild) { //allows for multiple seaches in the text box without having to refresh (while there is data in the box)
        section.removeChild(section.firstChild); // removes the data from the text box
    }
    let articles = json.response.docs; //assigns 'articles' to the JSON data (depends on API structure for the naming of this file)
    // console.log(articles);
    if (articles.length === 0) { //if the article has a length of 0 then do not display it
        console.log('No results');//logs the JSON as 'no results' if it has a length of 0
    } else { //if the article has a length higher than 0
        for (let i = 0; i < articles.length; i++) { //if there is an article then it will create a heading and display the article in the list
            // console.log(i);
            let article = document.createElement('article'); //assigns the class to the API information
            let heading = document.createElement('h2');//assigns the class to the API information
            let link = document.createElement('a');//assigns the class to the API information
            let img = document.createElement('img');//assigns the class to the API information
            let para = document.createElement('p');//assigns the class to the API information
            let clearfix = document.createElement('div');//assigns the class to the API information
            let current = articles[i]; //assings 'current' to all the articles that are listed in the API
            console.log('Current:', current); //logs the articles that come up from the search
            link.href = current.web_url; //stacks the data on to  let link = document.createElement('a'); (maks the hyperlink clickable)
            link.textContent = current.headline.main; //shows the headline data from the API
            para.textContent = 'Keywords: '; //prints the 'Keywords: ' for people to see on the site
            for (let j = 0; j < current.keywords.length; j++) { //this function pulls the keywords from each article
                let span = document.createElement('span'); //generates a span for each keyword
                span.textContent += current.keywords[j].value + ' '; //assigns the keyword into the span
                para.appendChild(span);//links the keywords in order
            }
            if (current.multimedia.length > 0) { //if there is an image avalible
                img.src = 'http://www.nytimes.com/' + current.multimedia[0].url; //adds the image to the result
                img.alt = current.headline.main; //if the image is not there then it will just display the headline
            }
            clearfix.setAttribute('class', 'clearfix'); //ensures that the images dont exceed the size of the container
            heading.appendChild(link); //sets the link heading to the H2 element
            article.appendChild(heading); //appending the link to the h2 tag
            article.appendChild(img);//append the items in () and inserting them into article
            article.appendChild(para);//append the items in () and inserting them into article
            article.appendChild(clearfix);//append the items in () and inserting them into article
            section.appendChild(article);//append the items in () and inserting them into section
        }
    }
    if (articles.length === 10) { //if there are more than 10 it displays them in a single block per page
        nav.style.display = 'block';
    } else {
        nav.style.display = 'none'; // if there are less than 10 elements it does not display the buttons
    }
}
function nextPage(e) {//this adds funcionality to our next page button
    // console.log('Next button clicked');
    pageNumber++; //goes to the next page
    fetchResults(e); //grabs the results
    console.log('Page Number:', pageNumber); //shows the page number in the console
}
function previousPage(e) { //this adds funcionality to our prev page button
    // console.log('Previous button clicked');
    if (pageNumber > 0) { //if the page is on a page higher than 0
        pageNumber--; //go down in page number
    } else {
        return; //if the number is 0 return to 0
    }
    fetchResults(e); //grabs our results from going back or forward in page numbers
    console.log('Page:', pageNumber); // logs the results