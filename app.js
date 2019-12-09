//Mengatur slide navbar
const navSlide = ()=>{
    const nav = document.querySelector('.nav-links');
    const collapse_nav = document.querySelector('.collapse-nav');
    const nav_link = document.querySelectorAll('.nav-links li');

    //Saat menekan tombol maka navbar akan muncul
    collapse_nav.addEventListener('click', ()=>{
        //Memunculkan slide nav
        nav.classList.toggle('nav-active');

        //Menampilkan pilihan yang ada di navbar
        nav_link.forEach((link, index)=>{
            
            //Bila style animation sudah ada di tag li maka style animation akan dikosongkan
            if(link.style.animation){
                link.style.animation = "";
            }
            //Bila style animation tidak ada di tag li maka style animation akan ditambahkan
            else{
                link.style.animation = `navFade 0.5s ease forwards ${index / 7 + 0.5}s`;
                //index / 7 + 0.5 menentukan delah yang dibutuhkan untuk pilihan muncul
            }
        });

        //Menjadikan tombol menjadi silang dan normal
        collapse_nav.classList.toggle('toggle');
    });
    
}

navSlide();