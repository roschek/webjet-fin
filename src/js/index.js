import "../styles/style.css"

import Netmask from "inputmask";
const tabs = document.querySelectorAll('.tabs__content-item')
const btnsWrap = document.querySelector('.tabs__buttons');
const btns = document.querySelectorAll('.tabs__button');
// const tabs = document.querySelectorAll('.tabs__content-item')
// const buttons = document.querySelectorAll('.tabs__button')
// const bttnDesign = document.querySelector('.button-design')
// const bttnFunctions =document.querySelector('.button-function')
// const bttnAnalitics =document.querySelector('.button-analitycs')
// const bttnPromo =document.querySelector('.button-promotion')
const planeDown = document.querySelector('.aboutus__link-down')

//маска телефона
const telMask = document.querySelector('#tel')
Netmask({ "mask": "+7 (999) 999-99-99" }).mask(telMask);

btnsWrap.addEventListener("click", event => {

    if (event.target.matches('.tabs__button')) {

        // for (let btn of btns) {
        // 	btn.classList.remove('tabs__button-active')
        // }

        btns.forEach(function(btn) {
            btn.classList.remove('tabs__button-active')
        })

        event.target.classList.add('tabs__button-active')

        let btnData = event.target.dataset.name

        // for (let tab of tabs) {
        // 	tab.style.display ='none'
        // 	if (tab.classList.contains(btnData)) {
        // 		tab.style.display ='flex'
        // 	}
        // }

        tabs.forEach(function(tab) {
            tab.style.display ='none'
            if (tab.classList.contains(btnData)) {
                tab.style.display ='flex'
            }
        })

        let tlTab = gsap.timeline();
        tlTab.from(".tabs__content-visual, .tabs__content-content", {duration: 1, opacity: 0, ease: "power3"});
    }
});


// Переключатель меню (кнопка бургер)
const burger = document.querySelector(".burger")

burger.addEventListener('click',()=>{
    burger.classList.toggle("burger_active")
})


// Плавная прокрутка к якорям
// const anchors = document.querySelectorAll('a[href*="#"]')
//
// for (let anchor of anchors) {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault()
//
//         const blockID = anchor.getAttribute('href').substr(1)
//
//         document.getElementById(blockID).scrollIntoView({
//             behavior: 'smooth',
//             block: 'start'
//         })
//     })
// }


// Animation from GSAP
gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline();
tl.from(".header__title", {duration: 0.6, opacity: 0, y: 50, ease: "power1"});
tl.from(".header__subtitle", {duration: 0.6, opacity: 0, y: 50, ease: "power1"});
tl.from(".header__banner", {duration: 1, rotateX: 90, opacity: 0});
tl.from(".header__button_mobile", {duration: 0.6, opacity: 0});



if (window.innerWidth > 768) {
    gsap.from(".aboutus__card", {
        scrollTrigger: {
            trigger: ".aboutus",
            toggleActions: "play none none none",
            start: "top 40%",
        },
        duration: 1,
        y: 300,
        stagger: 0.4,
        ease: "power1",
    });

    gsap.from(".aboutus__title", {
        scrollTrigger: {
            trigger: ".aboutus",
            toggleActions: "play none none none",
            start: "top 40%",
        },
        duration: 1.4,
        opacity: 0,
        ease: "power1",
    });

    gsap.from(".card__item:nth-child(1) .card__item-image", {
        scrollTrigger: {
            trigger: ".card__item:nth-child(1)",
            toggleActions: "play none none none",
            start: "top 60%",
        },
        duration: 1.2,
        scale: 0,
        ease: "power1",
    });

    gsap.from(".card__item:nth-child(1) .card__item-text", {
        scrollTrigger: {
            trigger: ".card__item:nth-child(1)",
            toggleActions: "play none none none",
            start: "top 60%",
        },
        duration: 1,
        x: 300,
        opacity: 0,
        ease: "power1",
    });

    gsap.from(".card__item:nth-child(2) .card__item-image", {
        scrollTrigger: {
            trigger: ".card__item:nth-child(2)",
            toggleActions: "play none none none",
            start: "top 60%",
        },
        duration: 1.2,
        scale: 0,
        ease: "power1",
    });

    gsap.from(".card__item:nth-child(2) .card__item-text", {
        scrollTrigger: {
            trigger: ".card__item:nth-child(2)",
            toggleActions: "play none none none",
            start: "top 60%",
        },
        duration: 1,
        x: -300,
        opacity: 0,
        ease: "power1",
    });

    gsap.from(".card__item:nth-child(3) .card__item-image", {
        scrollTrigger: {
            trigger: ".card__item:nth-child(3)",
            toggleActions: "play none none none",
            start: "top 60%",
        },
        duration: 1.2,
        scale: 0,
        ease: "power1",
    });

    gsap.from(".card__item:nth-child(3) .card__item-text", {
        scrollTrigger: {
            trigger: ".card__item:nth-child(3)",
            toggleActions: "play none none none",
            start: "top 60%",
        },
        duration: 1,
        x: 300,
        opacity: 0,
        ease: "power1",
    });


    gsap.from(".card__title", {
        scrollTrigger: {
            trigger: ".cards",
            toggleActions: "play none none none",
            start: "bottom 90%",
        },
        duration: 1.5,
        opacity: 0,
        ease: "power1",
    });


    gsap.from(".rocket__image", {
        scrollTrigger: {
            trigger: ".rocket__block",
            toggleActions: "play none none none",
            start: "top 40%",
        },
        duration: 2,
        y: 400,
        scale: 0.4,
        ease: "power1",
    });

    gsap.from(".rocket__card", {
        scrollTrigger: {
            trigger: ".rocket__cards",
            toggleActions: "play none none none",
            start: "top 60%",
        },
        duration: 1.4,
        x: 300,
        opacity: 0,
        stagger: 0.5,
        ease: "power3",
    });

    gsap.from(".tabs__btn-inner", {
        scrollTrigger: {
            trigger: ".tabs",
            toggleActions: "play none none none",
            start: "top 40%",
        },
        duration: 1.5,
        opacity: 0,
        scale: 0.5,
        stagger: 0.4,
        ease: "elastic",
    });
}
//включение табов
// const hideTabs = () =>{
//     tabs.forEach(elem=>{
//         elem.style.opacity ='0';
//
//     })
//     buttons.forEach(elem =>{
//         elem.classList.remove('tabs__button-active')
//     })
// }
//
// bttnDesign.addEventListener('click',()=>{
//     hideTabs();
//     bttnDesign.classList.add('tabs__button-active')
//     document.querySelector('.tabs-design').style.opacity ='1'
// })
// bttnFunctions.addEventListener('click',()=>{
//     hideTabs();
//     bttnFunctions.classList.add('tabs__button-active')
//     document.querySelector('.tabs-function').style.opacity ='1'
// })
// bttnAnalitics.addEventListener('click',()=>{
//     hideTabs();
//     bttnAnalitics.classList.add('tabs__button-active')
//     document.querySelector('.tabs-analitics').style.opacity ='1'
// })
// bttnPromo.addEventListener('click',()=>{
//     hideTabs();
//     bttnPromo.classList.add('tabs__button-active')
//     document.querySelector('.tabs-promotion').style.opacity ='1'
// })
//
// const burger = document.querySelector(".burger")
//
// burger.addEventListener('click',()=>{
//     burger.classList.toggle("burger_active")
// })

//прокрутка по клику на самолетик
planeDown.addEventListener('click',()=>{
    document.querySelector('#tabs').scrollIntoView({
        behavior:'smooth',
        block:'start'
    })
})
//плавная прокрутка к якорям
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()

        const blockID = anchor.getAttribute('href').substr(1)

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}


//валидация

//валидация
const form = document.forms.subscribe
const submit = document.querySelector('.submit')
const inputs = document.querySelectorAll('input')

const sendForm = ()=>{
    submit.removeAttribute('disabled')
    const formData = new FormData(form);
    fetch('send.php', {
        method: "POST",
        body: formData
    })
        .then((res) => {
            if (res) {
                submit.textContent = 'Ваше сообщение отправлено'
                inputs.forEach((elt) => {
                    elt.value = ' '
                })
            }})
        .catch(err=> {submit.textContent = 'Упс, что-то пошло не так'; console.log(err)})

}
form.addEventListener('submit', (evt) => {
    let checkValidity = false
    evt.preventDefault()
    inputs.forEach(elem =>{
        if(elem.value.trim().length ===0){
            submit.setAttribute('disabled', true)
            elem.style = "border-bottom:2px solid red"
            elem.placeholder = "Это обязательное поле"
            return checkValidity =true
        }
        else return checkValidity = false
    })
    if(!checkValidity){
        sendForm()
    }
    else {submit.textContent = 'Упс, что-то пошло не так'}
})

inputs.forEach((elt) => {
    elt.addEventListener('click', () => {
        submit.removeAttribute('disabled')
        elt.style = "border-bottom:2px solid green"
        elt.value = ''
        submit.textContent = 'Отправить'
    })
})



// Animation from GSAP
// gsap.registerPlugin(ScrollTrigger);
//
// var tl = gsap.timeline();
// tl.from(".header__title", {duration: 1, opacity: 0, y: 200, ease: "power1"});
// tl.from(".header__subtitle, .header__banner", {duration: 1.6, opacity: 0});
// // tl.from(".header__banner", {duration: 0.8, opacity: 0, scale: 0, ease: "power4"});
//
// gsap.from(".aboutus__card", {
//     scrollTrigger: {
//         trigger: ".aboutus",
//         toggleActions: "play none none none",
//         start: "top 40%",
//     },
//     duration: 1,
//     y: 300,
//     stagger: 0.4,
//     ease: "power1",
// });
//
// gsap.from(".aboutus__title", {
//     scrollTrigger: {
//         trigger: ".aboutus",
//         toggleActions: "play none none none",
//         start: "top 40%",
//     },
//     duration: 1.4,
//     opacity: 0,
//     ease: "power1",
// });
//
//
// gsap.from(".card__item:nth-child(1) .card__item-image", {
//     scrollTrigger: {
//         trigger: ".card__item:nth-child(1)",
//         toggleActions: "play none none none",
//         start: "top 60%",
//     },
//     duration: 1.2,
//     scale: 0,
//     ease: "power1",
// });
//
// gsap.from(".card__item:nth-child(1) .card__item-text", {
//     scrollTrigger: {
//         trigger: ".card__item:nth-child(1)",
//         toggleActions: "play none none none",
//         start: "top 60%",
//     },
//     duration: 1,
//     x: 300,
//     opacity: 0,
//     ease: "power1",
// });
//
// gsap.from(".card__item:nth-child(2) .card__item-image", {
//     scrollTrigger: {
//         trigger: ".card__item:nth-child(2)",
//         toggleActions: "play none none none",
//         start: "top 60%",
//     },
//     duration: 1.2,
//     scale: 0,
//     ease: "power1",
// });
//
// gsap.from(".card__item:nth-child(2) .card__item-text", {
//     scrollTrigger: {
//         trigger: ".card__item:nth-child(2)",
//         toggleActions: "play none none none",
//         start: "top 60%",
//     },
//     duration: 1,
//     x: -300,
//     opacity: 0,
//     ease: "power1",
// });
//
// gsap.from(".card__item:nth-child(3) .card__item-image", {
//     scrollTrigger: {
//         trigger: ".card__item:nth-child(3)",
//         toggleActions: "play none none none",
//         start: "top 60%",
//     },
//     duration: 1.2,
//     scale: 0,
//     ease: "power1",
// });
//
// gsap.from(".card__item:nth-child(3) .card__item-text", {
//     scrollTrigger: {
//         trigger: ".card__item:nth-child(3)",
//         toggleActions: "play none none none",
//         start: "top 60%",
//     },
//     duration: 1,
//     x: 300,
//     opacity: 0,
//     ease: "power1",
// });
//
//
// gsap.from(".card__title", {
//     scrollTrigger: {
//         trigger: ".cards",
//         toggleActions: "play none none none",
//         start: "bottom 90%",
//     },
//     duration: 1.5,
//     opacity: 0,
//     ease: "power1",
// });
//
//
// gsap.from(".rocket__image", {
//     scrollTrigger: {
//         trigger: ".rocket__block",
//         toggleActions: "play none none none",
//         start: "top 40%",
//     },
//     duration: 2,
//     y: 400,
//     scale: 0.4,
//     ease: "power1",
// });
//
// gsap.from(".rocket__card", {
//     scrollTrigger: {
//         trigger: ".rocket__cards",
//         toggleActions: "play none none none",
//         start: "top 60%",
//     },
//     duration: 1.4,
//     x: 300,
//     opacity: 0,
//     stagger: 0.5,
//     ease: "power3",
// });
//
