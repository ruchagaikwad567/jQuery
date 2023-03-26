$(document).ready(function(){
/*    // we write all jquery code here to ensure that when the whole page is ready then only apply jQuery
    console.log($);
// $ is same as jQuery. Even if you write "console.log(jQuery)" it is fine.

//jQuery syntax: $('selector').action()

$('p').click();   //it means click on p,this is eg of element selector which clicks on all p elements

$('p').click(function(){
    console.log("you clicked on p",this); //here this means print the html content in console
});   //do this when clicked on p

$('p').dblclick(function(){
    console.log("you dbl clicked on p",this); //here this means print the html content in console when p element is double clicked
});

$('p').mouseenter(function(){
    console.log("you entered :",this) //mouseenter means whenever pointer goes on p element this is printed
})

$('p').hover(function(){
    console.log("you hovered :",this) //hover means whenever pointer hovers on p element this is printed
})

// $('p').hide();  //text wiil hide if we click on it

$(this).hide();   //it will hide only that text on which we click

$("#id").hide();
$(".class").hide();



//3 types of slectors in jquery
//element selector,class selector,id selector

$('#second').click();  //this is an eg of id selector

$('.odd').click();  //this is eg of class selector


//other selectors
$('*').click(); //clicks on all the elements
$('p.odd').click();//clicks all the p elements whose class is odd
$('p:first').click();//clicks on the very first p element

//events in jQuery

mouse events-click,dblclick,mouseenter,mouseleave
keyboard events-keypress,keydown,MediaKeyStatusMap
form events-submit,change,focus,blur
document/window events-load,resize,scroll,unload


*/

//demonstration of on method
$('p').on({'click',function(){
    console.log("Thanks for clicking",this);
},
mouseleave:function(){
    console.log("mouseleave");
}
})

$('#wiki').hide(1000,function(){
    console.log("hidden");//this means the wiki content will take 1000 ms to hide all the content
})
$('#wiki').show(1000,function(){
    console.log("hidden");//this means the wiki content will take 1000 ms to show all the content
})
//using this together we can create animation effect
//hide,show,fade take 2 arguments time and callback


$('#but').click(function(){
    $('#wiki').toggle(1000);
})

//slide methods(here callback method is optional)
$('#wiki').slideDown(1000); // we have slideUp,slideToggle function also,they also take 2 arguments

//animations
$('#wiki').animate({opacity:0.3},2000); // means the opacity of text should become 0.3 in 2 s
$('#wiki').animate({opacity:0.9},4000);
$('#wiki').animate({width:'350px'},5000);


$('#wiki').stop() //stops the animation at that point only


$('body').html('I am king')//changes the value of html body to I am king
$('#inp').val('setting it to val')//used to set the value , for forms we use .val to change its value
$('#ta').val()//return value of given element
$('#inp').empty()//empties the inp 
$('#wiki').text("I am good");
$("#wiki").remove()//removes element from the DOM
$("#wiki").addClass("myclass")//adds my class, we have removeclass,toggleclass
$("#wiki").css("background-color")
"rgb(255,0,0)";

//AJAX-art of exchanging data with server without reloading the page




});

//fadeIn
//fadeOut
//fadeToggle
//fadeTo
