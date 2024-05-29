$(".card").on("click",function(){
    $(".detail").addClass("active");
})
$(".close-detail").on("click",function(){
    $(".detail").removeClass("active");
})

/*$(".card").on("click", function() {
    // Ensure that the main block is displayed when a card is clicked
    $(".main").css("display", "flex");
    
    // Display the detail block
    $(".detail").addClass("active");
});

$(".close-detail").on("click", function() {
    // Hide the detail block
    $(".detail").removeClass("active");
    // Optionally, hide the main block when closing the detail block
    $(".main").css("display", "none");
});*/
