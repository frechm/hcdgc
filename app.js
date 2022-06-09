function clearBox(elementID)
{
    document.getElementById(elementID).innerHTML = "";
}


//for tyger river course.
document.addEventListener("DOMContentLoaded", function() {
// create array of images.
    let img1 = new Image();
    img1.src = "images/tyger-river/hole-18.jpg";
    img1.classList.add("image");
    
    let img2 = new Image();
    img2.src = "images/tyger-river/hole-10.jpg";
    img2.classList.add("image");
    
    let img3 = new Image();
    img3.src = "images/tyger-river/tee-off.jpg";
    img3.classList.add("image");
    
    let img4 = new Image();
    img4.src = "images/tyger-river/walking-hole-18.jpg";
    img4.classList.add("image");
    
    let map1 = document.getElementById("map")
    map1.classList.add("image");
    

    const trImageArray = [img1, img2, img3, img4, map1]
    
    //setup the image div
    
    let counter = 1;
    document.getElementById("tr-images").appendChild(trImageArray[0]);
    
// on next-image button click -> change div to nothing and append the div with the appropriate image
    document.getElementById("right-arrow-tr").onclick = function
    nextImage() {
        //counter variable
        
        if(counter >= trImageArray.length) {
            clearBox("tr-images");
            document.getElementById("tr-images").appendChild(trImageArray[0]);
            counter = 1;
        }
        else {
            clearBox("tr-images");
            document.getElementById("tr-images").appendChild(trImageArray[counter]);
            counter++;
        }
        
    }

     
// on prev-image button click -> change div to nothing and append the div with the appropriate image
    document.getElementById("left-arrow-tr").onclick = function
    prevImage() {
        
        if (counter <= 1) {
            clearBox("tr-images");
            document.getElementById("tr-images").appendChild(trImageArray[(trImageArray.length-1)])
            counter = (trImageArray.length);
        }
        else {
            clearBox("tr-images");
            document.getElementById("tr-images").appendChild(trImageArray[counter-2]);
            counter--;
        }
    }
    
    
})

// For Shoally Creek Images
document.addEventListener("DOMContentLoaded", function() {
    let img1 = new Image();
    img1.src = "images/shoally-creek/hole-1.jpg";
    img1.classList.add("image");
    
    let img2 = new Image();
    img2.src = "images/shoally-creek/hole-3.jpg";
    img2.classList.add("image");
    
    let img3 = new Image();
    img3.src = "images/shoally-creek/wooded-hole.jpg";
    img3.classList.add("image");
    
    let img4 = new Image();
    img4.src = "images/shoally-creek/discatcher.jpg";
    img4.classList.add("image");

    const scImageArray = [img1, img2, img3, img4]

    let counter = 1;
    document.getElementById("sc-images").appendChild(scImageArray[0]);

    // on next-image button click -> change div to nothing and append the div with the appropriate image
    document.getElementById("right-arrow-sc").onclick = function
    nextImage() {
        //counter variable
        
        if(counter >= scImageArray.length) {
            clearBox("sc-images");
            document.getElementById("sc-images").appendChild(scImageArray[0]);
            counter = 1;
        }
        else {
            clearBox("sc-images");
            document.getElementById("sc-images").appendChild(scImageArray[counter]);
            counter++;
        }
        
    }

    // on prev-image button click -> change div to nothing and append the div with the appropriate image
    document.getElementById("left-arrow-sc").onclick = function
    prevImage() {
        
        if (counter <= 1) {
            clearBox("sc-images");
            document.getElementById("sc-images").appendChild(scImageArray[(scImageArray.length-1)])
            counter = (scImageArray.length);
        }
        else {
            clearBox("sc-images");
            document.getElementById("sc-images").appendChild(scImageArray[counter-2]);
            counter--;
        }
    }
})

// For Pipeline DGC Images
document.addEventListener("DOMContentLoaded", function() {
    let img1 = new Image();
    img1.src = "images/pipeline-dgc/snowy-sign.jpg";
    img1.classList.add("image");

    let img2 = new Image();
    img2.src = "images/pipeline-dgc/hole-4.jpg";
    img2.classList.add("image");

    let img3 = new Image();
    img3.src = "images/pipeline-dgc/hole-10.jpg";
    img3.classList.add("image");

    let img4 = new Image();
    img4.src = "images/pipeline-dgc/fall-trees.jpg";
    img4.classList.add("image");

    let img5 = new Image();
    img5.src = "images/pipeline-dgc/putting.jpg";
    img5.classList.add("image");

    const plImageArray = [img1, img2, img3, img4, img5]

    let counter = 1;
    document.getElementById("pl-images").appendChild(plImageArray[0]);

    // on next-image button click -> change div to nothing and append the div with the appropriate image
    document.getElementById("right-arrow-pl").onclick = function
    nextImage() {
        //counter variable
        
        if(counter >= plImageArray.length) {
            clearBox("pl-images");
            document.getElementById("pl-images").appendChild(plImageArray[0]);
            counter = 1;
        }
        else {
            clearBox("pl-images");
            document.getElementById("pl-images").appendChild(plImageArray[counter]);
            counter++;
        }
        
    }

    // on prev-image button click -> change div to nothing and append the div with the appropriate image
    document.getElementById("left-arrow-pl").onclick = function
    prevImage() {
        
        if (counter <= 1) {
            clearBox("pl-images");
            document.getElementById("pl-images").appendChild(plImageArray[(plImageArray.length-1)])
            counter = (plImageArray.length);
        }
        else {
            clearBox("pl-images");
            document.getElementById("pl-images").appendChild(plImageArray[counter-2]);
            counter--;
        }
    }
})

// For Holston Creek Park Images
document.addEventListener("DOMContentLoaded", function() {
    let img1 = new Image();
    img1.src = "images/holston-creek/hole-on-the-lake.jpg";
    img1.classList.add("image");
    let img2 = new Image();
    img2.src = "images/holston-creek/hole-17.jpg";
    img2.classList.add("image");
    let img3 = new Image();
    img3.src = "images/holston-creek/hole-27.jpg";
    img3.classList.add("image");
    let img4 = new Image();
    img4.src = "images/holston-creek/hole-on-a-knoll.jpg";
    img4.classList.add("image");
    let img5 = new Image();
    img5.src = "images/holston-creek/mailbox.jpg";
    img5.classList.add("image");
    let img6 = new Image();
    img6.src = "images/holston-creek/pink-hole.jpg";
    img6.classList.add("image");

    
    const hcImageArray = [img1, img2, img3, img4, img5, img6]

    let counter = 1;
    document.getElementById("hc-images").appendChild(hcImageArray[0]);

    // on next-image button click -> change div to nothing and append the div with the appropriate image
    document.getElementById("right-arrow-hc").onclick = function
    nextImage() {
        //counter variable
        
        if(counter >= hcImageArray.length) {
            clearBox("hc-images");
            document.getElementById("hc-images").appendChild(hcImageArray[0]);
            counter = 1;
        }
        else {
            clearBox("hc-images");
            document.getElementById("hc-images").appendChild(hcImageArray[counter]);
            counter++;
        }
        
    }

    // on prev-image button click -> change div to nothing and append the div with the appropriate image
    document.getElementById("left-arrow-hc").onclick = function
    prevImage() {
        
        if (counter <= 1) {
            clearBox("hc-images");
            document.getElementById("hc-images").appendChild(hcImageArray[(hcImageArray.length-1)])
            counter = (hcImageArray.length);
        }
        else {
            clearBox("hc-images");
            document.getElementById("hc-images").appendChild(hcImageArray[counter-2]);
            counter--;
        }
    }
})

// For Woodruff Leisure Center Images
document.addEventListener("DOMContentLoaded", function() {
    let img1 = new Image();
    img1.src = "images/woodruff-leisure-center/hole-16.jpg";
    img1.classList.add("image");
    let img2 = new Image();
    img2.src = "images/woodruff-leisure-center/hole-18.jpg";
    img2.classList.add("image");
    let img3 = new Image();
    img3.src = "images/woodruff-leisure-center/putting.jpg";
    img3.classList.add("image");
    let img4 = new Image();
    img4.src = "images/woodruff-leisure-center/vertical-hole-12.jpg";
    img4.classList.add("image");
    img4.classList.add("vertical")
    

    
    const wlcImageArray = [img1, img2, img3, img4]

    let counter = 1;
    document.getElementById("wlc-images").appendChild(wlcImageArray[0]);

    // on next-image button click -> change div to nothing and append the div with the appropriate image
    document.getElementById("right-arrow-wlc").onclick = function
    nextImage() {
        //counter variable
        
        if(counter >= wlcImageArray.length) {
            clearBox("wlc-images");
            document.getElementById("wlc-images").appendChild(wlcImageArray[0]);
            counter = 1;
        }
        else {
            clearBox("wlc-images");
            document.getElementById("wlc-images").appendChild(wlcImageArray[counter]);
            counter++;
        }
        
    }

    // on prev-image button click -> change div to nothing and append the div with the appropriate image
    document.getElementById("left-arrow-wlc").onclick = function
    prevImage() {
        
        if (counter <= 1) {
            clearBox("wlc-images");
            document.getElementById("wlc-images").appendChild(wlcImageArray[(wlcImageArray.length-1)])
            counter = (wlcImageArray.length);
        }
        else {
            clearBox("wlc-images");
            document.getElementById("wlc-images").appendChild(wlcImageArray[counter-2]);
            counter--;
        }
    }
})

// For Linville-Hills Images
document.addEventListener("DOMContentLoaded", function() {
    let img1 = new Image();
    img1.src = "images/linville-hills-park/hole-2.jpg";
    img1.classList.add("image");

    let img2 = new Image();
    img2.src = "images/linville-hills-park/hole-4-sign.jpg";
    img2.classList.add("image");

    let img3 = new Image();
    img3.src = "images/linville-hills-park/hole-4.jpg";
    img3.classList.add("image");

    let img4 = new Image();
    img4.src = "images/linville-hills-park/hole-5.jpg";
    img4.classList.add("image");

    let img5 = new Image();
    img5.src = "images/linville-hills-park/hole-8.jpg";
    img5.classList.add("image");
    
    

    
    const lhImageArray = [img1, img2, img3, img4, img5]

    let counter = 1;
    document.getElementById("lh-images").appendChild(lhImageArray[0]);

    // on next-image button click -> change div to nothing and append the div with the appropriate image
    document.getElementById("right-arrow-lh").onclick = function
    nextImage() {
        //counter variable
        
        if(counter >= lhImageArray.length) {
            clearBox("lh-images");
            document.getElementById("lh-images").appendChild(lhImageArray[0]);
            counter = 1;
        }
        else {
            clearBox("lh-images");
            document.getElementById("lh-images").appendChild(lhImageArray[counter]);
            counter++;
        }
        
    }

    // on prev-image button click -> change div to nothing and append the div with the appropriate image
    document.getElementById("left-arrow-lh").onclick = function
    prevImage() {
        
        if (counter <= 1) {
            clearBox("lh-images");
            document.getElementById("lh-images").appendChild(lhImageArray[(lhImageArray.length-1)])
            counter = (lhImageArray.length);
        }
        else {
            clearBox("lh-images");
            document.getElementById("lh-images").appendChild(lhImageArray[counter-2]);
            counter--;
        }
    }
})

// document.addEventListener("DOMContentLoaded", function() {

//     const slides = document.querySelectorAll(".slide");

//     let width = document.querySelector(".slide").clientWidth;
//     let counter = 1;

//     // select next slide button
//     const nextSlide = document.querySelector(".next-slide");

//     // add event listener and next slide functionality
//     nextSlide.addEventListener("click", function () {
    
//         document.querySelector(".slider").style.transform = `translateX(${width*counter})`;
//         counter++;
//   });
// });


