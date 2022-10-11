/* Start Global Variables */

const sections = Array.from(document.querySelectorAll('section'));
const navbarList = document.getElementById('navbar__list');

/* End Global Variables */

/* Start Helper Function */

function addListItem(){
    
  for(let i=0; i<sections.length; i++ ) {
     listItem = document.createElement('li');
 
     itemName = sections[i].getAttribute('data-nav');
     itemLink = sections[i].getAttribute('id');

     listItem.innerHTML = `<a class='menu__link' href= '#${itemLink}'> ${itemName}</a>`;
     navbarList.appendChild(listItem);
  }

    /* Function used to scroll smoothly */
  
    listItem.addEventListener("click", (event) => {
      if (event.target.dataset.nav) {
        document
          .getElementById(`${event.target.dataset.nav}`)
          .scrollIntoView({ behavior: "smooth" });
        setTimeout(() => {
          location.hash = `${event.target.dataset.nav}`;
        }, 200);
      }
    });
   
}

addListItem();

/* End Helper Function */

/* Function used to determine whether the section is in an active state or not */

function sectionActivateState(element) {
    const rect = element.getBoundingClientRect();
    
    return ( 
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );    
}

/* Function used to appear the circles in the background of the active section */

function circledActiveSection() {
    for (i = 0; i < sections.length ; i++) {

        let index = i+1;
        let section = document.getElementById("section" + index);

        window.addEventListener("scroll",
          function(event) {
            event.preventDefault();

                            if (sectionActivateState(section)) {
                            section.classList.add("your-active-class"); 
                           } else {
                            section.classList.remove("your-active-class");
                            }
                        }
                ,false
        );
    }
}

circledActiveSection();

/* Function used to highligh the navigation bar in the background of the active section */

function highlightedActiveLink() {

  for(let i = 0; i < sections.length; i++){
    
    let index= i+1;
    let section = document.getElementById("section" + index);
    let links = document.querySelectorAll(".menu__link");

    window.addEventListener("scroll",
      function(event) {
        event.preventDefault();

                          if (sectionActivateState(section)) {
                            links[i].style.backgroundColor = '#333';
                            links[i].style.color = 'white';
                          } else {
                            links[i].style.backgroundColor = '#fff';
                            links[i].style.color = 'black';
                          }
                      }
              ,false
    );
  }
}

highlightedActiveLink();