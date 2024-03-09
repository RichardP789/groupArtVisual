function showCategory(category) {
  const categoryContent = {
    africana: "Africana map.PNG",
    american: "American map.PNG",
    asian: "Asian map.PNG",
    classics: "Greek Latin map.PNG",
    eastasian: "East Asian map.PNG",
    environmental: "Enviornmental map.PNG",
    history: "History map.PNG",
    science: "Science and technology map.PNG",
    sociology: "Sociology map.PNG",
    women: "Gender map.PNG"
  };

  const imageSrc = categoryContent[category];
  const imageElement = document.createElement("img");
  imageElement.src = imageSrc;
  document.getElementById("categoryContent").innerHTML = "";
  document.getElementById("categoryContent").appendChild(imageElement);

}
