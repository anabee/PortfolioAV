
$(".navbar a").on("click", function (e){
    if(this.hash !== '') {
        e.preventDefault();

        var hash = this.hash;

        $("html, body").animate({
            scrollTop: $(hash).offset().top
        }, 800);
    }
})

$("form").on("submit", (e)=>{
    e.preventDefault();

    const name = $("#nameInput").val().trim();
    const email = $("#emailInput").val().trim();
    const text =$("#textInput").val().trim();

    const data = {
        name, 
        email, 
        text
    };

    $.post("/email",data,()=>{
        console.log("Server received our data")
    })


})