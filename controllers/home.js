module.exports = {
  getIndex: (req, res) => {
    let i = 0 // Start point
    let images = [] 
    let time = 3000
   
    //Image List
   images[0] = '../public/imgs/si_1.jpg'
   images[1] = '../public/imgs/si_2.jpg'
   images[2] = '../public/imgs/si_3.jpg'
   images[3] = '../public/imgs/gd_1.jpg'
   images[4] = '../public/imgs/gd_2.jpg'
   images[5] = '../public/imgs/gd_3.jpg'
   images[6] = '../public/imgs/gs_1.jpg'
   images[7] = '../public/imgs/gs_2.jpg'
   images[8] = '../public/imgs/gs_3.jpg'

   // Change Image
   function changeImg(){
     document.slide.src = images[i];

     if( i < images.length -1){
       i++;
     } else {
       i = 0
     }
     
     setTimeout("changeImg()", time)
   }
    
    res.render("index.ejs");
  },
};
