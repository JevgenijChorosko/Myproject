document.body.style.background = "gray";

const main = document.createElement("main");
main.textContent = "Jevgenij Choroško";
main.style.background = "white";
main.style.width = "55%";
main.style.margin = " 5rem auto 0";
main.style.padding = "0,5rem";
main.style.borderRadius = "0.8rem";
main.style.textAlign = "center";



document.body.append(main)

const img = document.createElement("img")
img.src = "https://images.freeimages.com/fic/images/icons/61/dragon_soft/512/user.png";
img.style.width = "180px";
img.style.heght = "180px";
img.style.objectFit = "cover";
img.style.borderRadius = "60%";
img.style.padding = "0.5rem";
img.style.border = "0.5px solid #eee"
img.style.marginTop = "-50px";
main.append(img);

const email = document.createElement("h2");
email.textContent = "f84@inbox.lt";
email.style.fontSize = "0.8rem";
email.style.color = "#888";
main.append(email);