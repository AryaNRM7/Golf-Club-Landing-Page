var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+"px";
    crsr.style.top = dets.y+"px";
    blur.style.left = dets.x-200+"px";
    blur.style.top = dets.y-200+"px";
})
// document.addEventListener("mouseleave",function(){
//     crsr.style.opacity = "0"
// })

gsap.to("#nav",{
    backgroundColor: "black",
    height:"110px",
    duration: 0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller: "body",
        start:"top -10%",
        end:"top -11%",
        scrub:1
    },
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -25%",
        end:"top -80%",
        scrub:2
    }
})

gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 45%",
        end:"top 60%",
        scrub:2
    }
})

gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 45%",
        end:"top 60%",
        scrub:2
    }
})

gsap.from("#heading",{
    y:50,
    scrollTrigger:{
        trigger:"#heading",
        scroller:"body",
        start:"top 75%",
        end:"top 70%",
        scrub:1
    }
})