(function(){
  
var counter = 0, // to keep track of current slide
    $items = document.querySelectorAll('.current figure'), // a collection of all of the slides, caching for performance
    numItems = $items.length; // total number of slides
    console.log($items);
   

var projectCounter = 0,
    $projects = document.querySelectorAll('.diy-slideshow') // a collection of all the projects
    numProjects = $projects.length;
    console.log($projects);
    $currentProject = document.querySelectorAll('.current');


// this function is what cycles the slides, showing the next or previous slide and hiding all the others
var showCurrent = function(){
  var itemToShow = Math.abs(counter%numItems);// uses remainder (aka modulo) operator to get the actual index of the element to show  
  
  // remove .show from whichever element currently has it 
  // http://stackoverflow.com/a/16053538/2006057
  [].forEach.call( $items, function(el){
    el.classList.remove('show');
  });
  
  // add .show to the one item that's supposed to have it
  $items[itemToShow].classList.add('show');    
};

var changeProject = function(){
  var itemToShow = Math.abs(counter%numItems);
  var projectToShow = Math.abs(projectCounter%numProjects);// uses remainder (aka modulo) operator to get the actual index of the element to show  
  
  [].forEach.call( $items, function(el){
    el.classList.remove('show');
  });
  // remove .current from whichever element currently has it 
  // http://stackoverflow.com/a/16053538/2006057
  [].forEach.call( $projects, function(el){
    el.classList.remove('current');
  });


  // add .current to the one item that's supposed to have it
  $projects[projectToShow].classList.add('current');  
  // $items[itemToShow].classList.add('show'); 
  $items = document.querySelectorAll('.current figure');
   $items[itemToShow].classList.add('show'); 

};

// add click events to prev & next buttons 
var nextSlide = document.querySelectorAll('.next');
for (var i = 0; i < nextSlide.length; ++i){
nextSlide[i].addEventListener('click', function() {
     counter++;
     showCurrent();
  }, false);
};

var prevSlide = document.querySelectorAll('.prev');
for (var i = 0; i < nextSlide.length; ++i){
prevSlide[i].addEventListener('click', function() {
     counter--;
     showCurrent();
  }, false);
};

// wire up project buttons
document.querySelector('#p1').addEventListener('click', function() {
     projectCounter = 0;
     changeProject();
     
  }, false);

document.querySelector('#p2').addEventListener('click', function() {
     projectCounter = 1;
     changeProject();
     
  }, false);

document.querySelector('#p3').addEventListener('click', function() {
     projectCounter = 2;
     changeProject();
     
  }, false);
  
})();  