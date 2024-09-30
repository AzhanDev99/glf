var cursor = document.querySelector(".cursor")
var cursorblur = document.querySelector(".cursor-number-two-blur")
document.addEventListener("mousemove",function(dets){
    cursor.style.left = dets.x+20+"px"
    cursor.style.top = dets.y+"px"
    cursorblur.style.left = dets.x -125 +"px"
    cursorblur.style.top = dets.y -145 +"px"
})


var navhover = document.querySelectorAll(".navbar h4");
    navhover.forEach(function(elem){
        elem.addEventListener('mouseenter',function(){
            cursor.style.scale = 2;
            cursor.style.backgroundColor = "transparent";
            cursor.style.border = "2px solid #fff";
        })
        elem.addEventListener('mouseleave',function(){
            cursor.style.scale = 1;
            cursor.style.backgroundColor = "#95c11e";
            cursor.style.border = "0px solid #95c11e";
        })
    });




gsap.to(".navbar",{
    backgroundColor:"black",
    duration:0.5,
    height:"80px",
    scrollTrigger: {
        Trigger:".navbar",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -12%",
        scrub:2,
    }
})


gsap.to(".main",{
    backgroundColor:"black",
    scrollTrigger:{
        scroller:"body",
        Trigger:".main",
        // markers:true,
        start:"top -100px",
        end:"top -200px",
        scrub:5,
    }
})

gsap.to(".page8 p", {
    // backgroundColor: "yellow",
    duration: 0.3,
    y: -50,
    scrollTrigger: {
        scroller: "body",
        trigger: ".page8 p",  // Fixed capitalization
        // markers: true,
        start: "top 700px",
        scrub: 1,
    }
});
