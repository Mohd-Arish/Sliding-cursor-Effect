var rec= document.querySelector("#cen")

rec.addEventListener("mousemove", function(args){
    var reckiloc= rec.getBoundingClientRect();
    var insiderecval = args.clientX - reckiloc.left;

    if(insiderecval < reckiloc.width/2){
      var redcol= gsap.utils.mapRange(0, reckiloc.width/2, 255, 0, insiderecval);
   
      gsap.to(rec, {
        backgroundColor: `rgb(${redcol}, 0, 0)`,
        ease: Power3,
      });
    }
    else{
        var bluecol= gsap.utils.mapRange(reckiloc.width/2, reckiloc.width, 0, 255, insiderecval);
   
      gsap.to(rec, {
        backgroundColor: `rgb(0, 0, ${bluecol})`,
        ease: Power3,
      });
    }

})
 
rec.addEventListener("mouseleave", function(){
  gsap.to(rec, {
    backgroundColor: "white"
  })
})