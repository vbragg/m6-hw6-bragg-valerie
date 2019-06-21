var button = document.getElementsByTagName('button')[0];
var myHeading =document.getElementsByTagName('h1')[0];

 ourRandomLunchItem = document.createElement('p');
 var lunchItemWrapper = document.getElementById('generator-results');
 lunchItemWrapper.appendChild(ourRandomLunchItem);

 var placeholderText = document.createTextNode('');
 ourRandomLunchItem.appendChild(placeholderText);

var lunchItems = ['Jimmy Johns', 'Panda Express', 'Pot Bellys', 'Royal Bagel', 'Chick-fil-a', 'Panera', 'Baja Fresh', 'Chopt', 'Uncle Julios', 'Guapos', 'Union Jacks', 'Cafe Rio']

/* var myFunction = function() {
  myHeading.classList.add('big-and-bold');
}; */

var myFunction = function () {
  lunchItems.sort(function(a, b){return 0.5 - Math.random()});
  var ourRandomLunchItemFiller = document.createTextNode(lunchItems[0]);
  ourRandomLunchItem.appendChild(ourRandomLunchItemFiller);
  var ourButtonSection = document.getElementById('generator-button');
  ourButtonSection.removeChild(button);
  ourRandomLunchItem.classList.add('big-and-bold');
};

button.onclick = myFunction;
