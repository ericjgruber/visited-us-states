document.addEventListener('readystatechange', event => { 
  // After the page fully loads, count all the visited states on the map.
  if (event.target.readyState === "complete") {
    let visitedStates = document.querySelectorAll('path.visited');
    document.getElementById('stateCount').innerHTML = ' (' + visitedStates.length + ')';
  
  // After the page full loads, county all the planned states on the map.
    let plannedStates = document.querySelectorAll('path.planned');
    document.getElementById('statePlanned').innerHTML = ' (' + plannedStates.length + ')';
  }
});