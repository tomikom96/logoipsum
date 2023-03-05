const contact = document.querySelector(".contact");
const navContact = document.querySelector(".contact--show");
const xBtn = document.querySelector(".contact__x-text");

const showOrHideContact = () => {
	contact.classList.toggle("contact--hide");
};
const hideContact = () => {
	contact.classList.add("contact--hide");
};

navContact.addEventListener("click", showOrHideContact);
xBtn.addEventListener("click", hideContact);
