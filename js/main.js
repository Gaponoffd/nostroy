
/// Аккордеон на секции question 
var questionLink = document.querySelectorAll(".question__link");
var questionElem = document.querySelectorAll(".question__elem");
for (let i = 0; i < questionLink.length; i++) {
  questionLink[i].addEventListener("click", function(e) {

        e.preventDefault();

        for (let j = 0; j < questionElem.length; j++) {
            if (j !== i) {
              questionElem[j].classList.remove("question__elem_activ");
            };
        };

        this.closest('.question__elem').classList.toggle("question__elem_activ");
    });
};

///Слайдер на секции reviews

var reviewsList = document.querySelector(".reviews__list");
var linkOne = document.querySelector(".reviews-navigate__link_one");
var linkTwo = document.querySelector(".reviews-navigate__link_two");
var linkThree = document.querySelector(".reviews-navigate__link_three");

linkOne.addEventListener("click", function(e) {
  e.preventDefault();
  var a = 0;
  reviewsList.style.top= a;
})

linkTwo.addEventListener("click", function(e) {
  e.preventDefault();
  var a = 0;
  reviewsList.style.top= a - 330 +'px'
  //linkTwo.style.backgroundColor = 'rgb(126, 121, 121)';
})

linkThree.addEventListener("click", function(e) {
  e.preventDefault();
  var a = 0;
  reviewsList.style.top= a - 660 +'px'
})

///Навигация

$(document).ready(function() {
	$('#fullpage').fullpage();
});











// $(document).ready(function() {
    
   
//     $('.question__link').on('click', function(e) {
//       e.preventDefault();
//         console.log('Произошел клик');

        

        // $('.question__elem').each(function(ndx, item) {
        //    if($(item).hasClass('question__elem_activ')){
        //     $(item).removeClass('question__elem_activ');
        //    } 
        // })
         
        
        
       //$(this).closest('.question__elem').toggleClass('question__elem_activ')
      
       
//   })
    

   
// })