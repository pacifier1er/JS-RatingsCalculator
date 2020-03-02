function collect_ratings(){
   let ratings = { count:0, sum:0, average:0};
   let rating = 0; 
   let elements = document.querySelectorAll(".rating");
   elements.forEach(element => {rating = parseInt(element.id.replace('star', ''), 10), 
   ratings.count += parseInt(element.value, 10), 
   ratings.sum += (parseInt(element.value, 10)*rating)});
   if (ratings.count != 0) {ratings.average = ratings.sum/ratings.count;}
   return ratings;
}
document.addEventListener("change", handleEvent => {ratings = collect_ratings(),
document.querySelector("#average").value = ratings.average.toFixed(2)});