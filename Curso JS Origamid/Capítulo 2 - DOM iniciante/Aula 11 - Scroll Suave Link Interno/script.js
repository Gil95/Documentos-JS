function initTabNav() {
    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent section');
    const activeClass = 'ativo'

    if(tabMenu.length && tabContent.length){
        tabContent[0].classList.add(activeClass);


        function activeTab(index) {
            tabContent.forEach((section) => {
                section.classList.remove(activeClass);
            });
            tabContent[index].classList.add(activeClass);
        }

        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => {
                activeTab(index);
            });
        });
    }
}

initTabNav();

function initAccordion() {

    const accordionList = document.querySelectorAll('.js-accordion dt');
    const activeClass = 'ativo'
    
    if (accordionList.length) {
        accordionList[0].classList.add(activeClass);
        accordionList[0].nextElementSibling.classList.add(activeClass);

        function activeAccordion() {
            this.classList.toggle(activeClass);
            this.nextElementSibling.classList.toggle(activeClass);
        }

        accordionList.forEach((item) => {
            item.addEventListener('click', activeAccordion);
        });
    }
}

initAccordion();3

const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

function scrollToSection(event){
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    const navbarHeight = document.querySelector('.menu').offsetHeight;
    const contentPosition = section.offsetTop - navbarHeight;

    // section.scrollIntoView({
    //     behavior: 'smooth',
    //     block: 'start',
    // });
    const topo = section.offsetTop
    window.scrollTo({
        top: contentPosition,
        behavior: 'smooth'
    });
}

linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
});