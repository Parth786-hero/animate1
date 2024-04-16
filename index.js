const text = document.querySelector(".loader span")
function trigger(){
    let time = 0;
    setInterval(()=>{
        
        let value = Math.floor(Math.random()*10);
        time+=value;
        if(time < 100){
            text.textContent = time;
        }else{
            time = 100;
            text.textContent = time;
        }
    } , 210);
    
   
}
// trigger();
let tl = gsap.timeline();
tl.to(".loader span" , {
    
    delay : .5,
    duration : 1,
    onStart : trigger,
})
tl.to(".loader" , {
    top : "-100vh",
    opacity : 0,
    scale : 0,
    duration : .8,
    delay : 4
})
tl.from(".l-1", {
    y : 40,
    duration : .8,
    opacity : 0
    
})
tl.from(".l-2", {
    y : -40,
    duration : .8,
    opacity : 0
    
})
tl.from("li" , {
    x : 80,
    opacity : 0,
    duration : .5,
    stagger : .5
})

gsap.to(".page1 h1" , {
    transform : "translateX(-188%)",
    fontWeight : 100,
    // duration : 1300,
    scrollTrigger : {
        trigger : ".page1",
        scroller : "body",
        scrub : 2,
        pin : true,
        // markers : true,
        end : "top -800%"
    }
})
gsap.from(".page2 h1" ,{
    scale : 0,
    opacity : 0,
    fontWeight : 100,
    scrollTrigger : {
        trigger : ".page2 h1",
        scroller : "body",
        scrub : 2,
        // markers : true,
        // start : "top 90%",
        end : "top 60%"
    }
})
// alert("hello")