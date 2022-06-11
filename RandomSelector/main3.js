$(function () {
    // console.log("yo")
    $("input").on("click", function () {
        // alert("hi")
        let imgarray = ["noodles.jpg", "5555.jpg", "water.jpg"];   
        let numberOfListItem = $("#choices li").length;
        let randomChildNumber = Math.floor(Math.random() * numberOfListItem);
        $("h1").text($("#choices li").eq(randomChildNumber).text());
        $("#photoshow").attr("src","RandomSelector/"+imgarray[randomChildNumber]);
    });
});
