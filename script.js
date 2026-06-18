// CONTADORES ANIMADOS

window.addEventListener("load", () => {

    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {

        const target = Number(counter.dataset.target);

        let current = 0;

        const updateCounter = () => {

            const increment = target / 100;

            if(current < target){

                current += increment;

                counter.innerText = Math.ceil(current);

                setTimeout(updateCounter, 20);

            }else{

                counter.innerText = target;

            }

        };

        updateCounter();

    });

});

// FORMULARIO

const formulario = document.getElementById("formulario");

if(formulario){

    formulario.addEventListener("submit", function(e){

        e.preventDefault();

        alert(
            "Gracias por contactarnos. Su mensaje fue enviado correctamente."
        );

        formulario.reset();

    });

}

// NAVBAR CAMBIA AL HACER SCROLL

window.addEventListener("scroll", function(){

    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){

        navbar.style.boxShadow =
        "0 4px 15px rgba(0,0,0,.20)";

    }
    else{

        navbar.style.boxShadow =
        "0 2px 15px rgba(0,0,0,.15)";

    }

});

// CARRUSEL AUTOMÁTICO

const heroCarousel =
document.querySelector("#heroCarousel");

if(heroCarousel){

    new bootstrap.Carousel(heroCarousel,{

        interval:5000,
        ride:"carousel",
        pause:false

    });

}
