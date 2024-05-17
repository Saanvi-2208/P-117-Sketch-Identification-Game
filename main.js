random_no=Math.floor((Math.random*quick_draw_data_set.length)+1);
console.log(random_no);

sketch=quick_draw_data_set[random_no];
document.getElementById("sketh_to_be_drawn").innerHTML="Sketch To Be Drawn: "+ sketch;

time_counter=0;
timer_check="";
drawn_sketch="";
answer_holder="";
score=0;