window.onload = function() {
  const div = document.getElementById('grid');
  const url = 'https://api.punkapi.com/v2/beers';

  // for creating necessary nodes to the element
  function createElements(element) {
    return document.createElement(element);
  }

  // for appending the children of the first element
  function appendingChildren(parent, el) {
    return parent.appendChild(el);
  }
  const getData = fetch(url)
    .then((resp) => resp.json());
// div class panel info
    getData.then(function(data) {
        data.forEach(function(beer) {
          // creating the elements here
          let divTwo = createElements('div'),
           panelDiv = createElements('div'),
           img = createElements('img'),
           h3 = createElements('h3');
           p = createElements('p');
           img.src = `http://placeimg.com/300/260/beer`;
           h3.innerHTML = `Name:${beer.name} </br>
           Tagline: ${beer.tagline}`;
           p.innerHTML = `Alcohol content: ${beer.abv}%`;
           // appending elements
           (appendingChildren(div, divTwo)).className += 'beerGrid',
           appendingChildren(divTwo, h3),
           appendingChildren(divTwo, img),
           appendingChildren(divTwo, p);
        });

        $('.buttons').click(function(event) {
      /* Act on the event */
        const myThis = $(this);
        const item = $('#grid');
        const itemSort = $('div', item);

        itemSort.sort(function(a, b){
          // Get only the percentages from the whole text
          const checkA = parseFloat($(a).text().split(' ').pop());
          const checkB = parseFloat($(b).text().split(' ').pop());

          // Check which button has been clicked and sort accordingly
          if(myThis.hasClass('ascending')){
            return (checkA > checkB) ? 1 : (checkA < checkB) ? -1 : 0; // ascending sort
            } else {
            return (checkA < checkB) ? 1 :  (checkA > checkB) ? -1 : 0; // descending sort
            }
          });
            //loop through items and append the modified value
            $.each(itemSort, function(index, val){
                $(item).append(val);
            });
          event.preventDefault();
        });
    })
    .catch(function(error) {
      console.log(error);
    });
}
