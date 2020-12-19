const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');
const accordions = document.querySelectorAll('.accordion');
const input = document.querySelector('input');
const btn = document.querySelector('footer button');
const alert = document.querySelector('small');
const errorImage = document.querySelector('form img')


tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active');
    })
    tabs.forEach(tab => {
      tab.classList.remove('active');
    })
    tab.classList.add('active');
    console.log(tab);
    target.classList.add('active');
  })
})

accordions.forEach(accordion => {
  const dropdown = accordion.lastElementChild;
  const dropdowns = document.querySelectorAll('.dropdown');
  let icon = accordion.querySelector('img')
  

  accordion.addEventListener('click', e => {
    if(e.target.parentElement.className = "question") {
      dropdowns.forEach(drop => {
        let dropIcon = drop.previousElementSibling.lastElementChild;
        if(dropdown !== drop) {
          drop.classList.add('hideText');
          dropIcon.style.transform ="rotate(0)";
          console.log(icon);
        }
      })
      
      dropdown.classList.toggle('hideText');
      icon.style.transform = 'rotate(0)' ? icon.style.transform = 'rotate(180deg)' : icon.style.transform = 'rotate(0)';
    }
  })
})

btn.addEventListener('click', e => {
  e.preventDefault();
  let emailValue = input.value.trim();
  if(emailValue === ' ' || !isEmail(emailValue)) {
    alert.style.display = 'block';
    errorImage.style.display = 'block';
    console.log("goat");
	} else {
    alert.style.display = "none";
    input.value = " ";
  }
  
})
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}