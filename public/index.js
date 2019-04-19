window.onload = function() {
  const div = document.getElementById('accordion');
  const url = 'https://api.punkapi.com/v2/beers';

  // for creating necessary nodes to the element
  function createElements(element) {
    return document.createElement(element);
  }

  // for appending the children of the first element
  function appendingChildren(parent, el) {
    return parent.appendChild(el);
  }
// div class panel info
  fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
        data.forEach(function(beer) {
          // creating the elements here
          let divTwo = createElements('div'),
           panelDiv = createElements('div'),
           h3 = createElements('h3'),
           h4 = createElements('h4');
           p = createElements('p');
           h3.innerHTML = `${beer.name}`;
           h4.innerHTML = `${beer.tagline}
           ${beer.first_brewed}`;

           // appending elements
           (appendingChildren(div, h3)).className += 'beerInfoAccordion';
           (appendingChildren(div, panelDiv)).className += 'panel';
           (appendingChildren(panelDiv, p))
           appendingChildren(p, h4);
           appendingChildren(p, h4);
        });

        // Add delegated listener
        $('#accordion').on('click', '.beerInfoAccordion', function(){
          const $this = $(this);
          if ( $this.next().is(":visible")){
            $this.next().hide('slow');
          } else {
            $('div.panel:visible').hide('slow');
            $this.next().show('slow');
          }
        });
    })
    .catch(function(error) {
      console.log(error);
    });
}
