function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: "smooth" });
}

function showImage(index) {
  // Hide all images and remove active class from buttons
  document
    .querySelectorAll(".internship-image-container img")
    .forEach((img) => img.classList.remove("active"));
  document
    .querySelectorAll(".buttons button")
    .forEach((btn) => btn.classList.remove("active"));

  // Show the selected image and add active class to the corresponding button
  document.getElementById(`image${index}`).classList.add("active");
  document
    .querySelector(`.buttons button:nth-child(${index})`)
    .classList.add("active");
}
