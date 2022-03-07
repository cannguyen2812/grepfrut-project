var slides = document.querySelectorAll('.middle .slides ._1slide .layer2')
    button = document.querySelectorAll('.middle .iconbutton ._1icon');
    

    
    for (var i = 0; i < button.length ;i++) {
        button[i].addEventListener('click',function(){
            for (var k = 0; k < button.length; k++) {
                button[k].classList.remove("kichhoat");  
            }
            this.classList.add("kichhoat");

            var nutkichhoat = this;
            var vitrinut = 0;
            for (vitrinut = 0; nutkichhoat = nutkichhoat.previousElementSibling; vitrinut++) {}
            console.log("vị trí của phần tử có class kích hoạt là : " + vitrinut);

            for (var e = 0; e < slides.length; e++) {
                slides[e].classList.remove("active");
                
                slides[vitrinut].classList.add("active");
                
                
            }
        })
        
    }