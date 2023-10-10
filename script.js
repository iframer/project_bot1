const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", event => {
    
    // Uncomment in case you only want to allow for the display of only one collapsed item at a time!
    
    // const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
    // if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader) {
    //   currentlyActiveAccordionItemHeader.classList.toggle("active");
    //   currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
    // }

    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if(accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    }
    else {
      accordionItemBody.style.maxHeight = 0;
    }
    
  });
});


const header = document.querySelector("header");

window.addEventListener("scroll",function(){
 header.classList.toggle("sticky", window.scrollY > 80);
});



let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick  = () =>{
  menu.classList.toggle('bx-x')
  navlist.classList.toggle('open');
}



const sr = ScrollReveal({
  origin: 'top',
  distance: '85px',
  duration: 1000,
  reset: true
})

sr.reveal ('.home-text',{delay:300});
sr.reveal ('.home-img',{delay:300});
sr.reveal ('.about-img',{delay:300});
sr.reveal ('.about-text',{delay:300});
sr.reveal ('.offer',{delay:300})
sr.reveal ('.middle-text',{delay:300});
sr.reveal ('.container',{delay: 500});
sr.reveal ('.information',{delay:300});




const openPopUp = document.getElementById('open_pop_up');
const openPopUp1 = document.getElementById('open_pop_up1');
const openPopUp2 = document.getElementById('open_pop_up2');
const closePopUp = document.getElementById('pop_up_close1');
const popUp = document.getElementById('pop_up');

openPopUp.addEventListener('click', function(event){
  event.preventDefault();
  popUp.classList.add('active');
})

openPopUp1.addEventListener('click', function(event){
  event.preventDefault();
  popUp.classList.add('active');
})

// openPopUp2.addEventListener('click', function(event){
//   event.preventDefault();
//   popUp.classList.add('active');
// })

closePopUp.addEventListener('click', () => {
  popUp.classList.remove('active');
});



function validateForm() {
  const name = document.getElementById("name").value.trim();
  const telephone = document.getElementById("telephone").value.trim();
  const email = document.getElementById("email").value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const telephoneError = document.getElementById("telephoneError");

  if (name === "") {
    alert("Please enter your name.");
    return false;
  }

  if (telephone === "") {
    telephoneError.textContent = "Please enter your telephone number.";
    telephoneError.style.visibility = "visible";
    return false;
  } else if (telephone.length !== 11) {
    alert("Номер телефона должен состоять ровно из 11 цифр.");
    telephoneError.style.visibility = "visible";
    return false;
  } else {
    telephoneError.style.visibility = "hidden";
  }

  if (email === "") {
    alert("Please enter your email address.");
    return false;
  } else if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  // If the form is valid and submission is successful, show the confirmation container
  document.getElementById("formContainer").style.display = "none";
  document.getElementById("confirmationContainer").style.display = "block";

  // Hide the confirmation container after 2 seconds
  setTimeout(() => {
    document.getElementById("confirmationContainer").style.display = "none";
    // Reset the form and show it again
    document.getElementById("contactForm").reset();
    document.getElementById("formContainer").style.display = "block";
  }, 4000);

  // Prevent the form from submitting to the server
  return false;
}