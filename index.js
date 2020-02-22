


var warapper = document.querySelector('.outer-wrapper');

warapper.addEventListener('scroll',(e)=>{
    var two = document.querySelector('.slider--two');
    var three = document.querySelector('.slider--three');
    var sthree = document.querySelector('.slider--three');
    var hone = document.querySelector('.new1');
    var icone = document.querySelector('.icon1');
    var htwo = document.querySelector('.new2');
    var ictwo = document.querySelector('.icon2');
    var hthree = document.querySelector('.new3');
    var icthree = document.querySelector('.icon3');
    var hfour = document.querySelector('.new4');
    var icfour = document.querySelector('.icon4');
    var hfive = document.querySelector('.new5');
    var icfive = document.querySelector('.icon5');
    var hsix = document.querySelector('.new6');
    var icsix = document.querySelector('.icon6');
    var hseven = document.querySelector('.new7');
    var icseven = document.querySelector('.icon7');
    var height = document.querySelector('.new8');

    let y = warapper.scrollTop ;

    if(y > 3790 && y < 5400){
        three.classList.add('threeimgg');
        
    }
    else{
         three.classList.remove('threeimgg');
    }
    
    
    if(y > 3100 && y < 3400){
        two.classList.add('txtanim');
        
    }
    else{
        two.classList.remove('txtanim');
    }
    if(y >= 3760 && y <= 4800){
        hone.classList.add('hr1');
        
    }
    else{
        hone.classList.remove('hr1');
    }

    if(y >= 3767 && y <= 4800){
        icone.classList.add('ic1');
        
    }
    else{
        icone.classList.remove('ic1');
    }

    if(y >= 3800 && y <= 4700){
        htwo.classList.add('hr2');
        
    }
    else{
        htwo.classList.remove('hr2');
    }

    if(y >= 3800 && y <= 4700){
        ictwo.classList.add('ic2');
        
    }
    else{
        ictwo.classList.remove('ic2');
    }

    if(y >= 3800 && y <= 4700){
        hthree.classList.add('hr3');
        
    }
    else{
        hthree.classList.remove('hr3');
    }
    if(y >= 3800 && y <= 4700){
        icthree.classList.add('ic3');
        
    }
    else{
        icthree.classList.remove('ic3');
    }

    if(y >= 3800 && y <= 4700){
        hfour.classList.add('hr4');
        
    }
    else{
        hfour.classList.remove('hr4');
    }

    if(y >= 3800 && y <= 4700){
        icfour.classList.add('ic4');
        
    }
    else{
        icfour.classList.remove('ic4');
    }
    
    if(y >= 3800 && y <= 4700){
        hfive.classList.add('hr5');
        
    }
    else{
        hfive.classList.remove('hr5');
    }

    if(y >= 3800 && y <= 4700){
        icfive.classList.add('ic5');
        
    }
    else{
        icfive.classList.remove('ic5');
    }

    if(y >= 3800 && y <= 4700){
        hsix.classList.add('hr6');
        
    }
    else{
        hsix.classList.remove('hr6');
    }
    if(y >= 3800 && y <= 4700){
        icsix.classList.add('ic6');
        
    }
    else{
        icsix.classList.remove('ic6');
    }
    if(y >= 3800 && y <= 4700){
        hseven.classList.add('hr7');
        
    }
    else{
        hseven.classList.remove('hr7');
    }
    if(y >= 3800 && y <= 4700){
        icseven.classList.add('ic7');
        
    }
    else{
        icseven.classList.remove('ic7');
    }
    if(y >= 3800 && y <= 4700){
        height.classList.add('hr8');
        
    }
    else{
        height.classList.remove('hr8');
    }

    if(y >= 3800 && y <= 5800){
        three.classList.add('stthree');
        
    }
    else{
       three.classList.remove('stthree');
    }

console.log("horzonat : " + y )
// .setPin('slider--three')

})

// $(window).scroll(function(){
//     var scrollval = $(this).scrollTop();

//     $("#logo").css("transform",'translate(8000%,'+scrollval/5+'%)');
// });