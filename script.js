var chrs = [
  {name:"Optimus Prime", class: "leader", afl:"autobot", vehicle:"truck"},
  {name:"Megatron", class: "leader", afl:"decepticon", vehicle:"tank"},
  {name:"Bumblebee", class: "scout", afl:"autobot", vehicle:"car"},
  {name:"Starscream", class: "scout", afl:"decepticon", vehicle:"plane"},
  {name:"Ironhide", class: "soldier", afl:"autobot", vehicle:"truck"},
  {name:"Brawl", class: "soldier", afl:"decepticon", vehicle:"tank"},
];

for (var i = 0; i < chrs.length; i++) {
  var chrsName = chrs[i].name;
  var chrsClass = chrs[i].class.toUpperCase();
  var chrsAfl = chrs[i].afl;
  var chrsVehicle = chrs[i].vehicle;
  
  var image = document.createElement("img");
  image.classList.add("img");
  
  var displayEle = document.createElement("div");
  displayEle.classList.add("character");
  
  var nameEle = document.createElement("div");
  nameEle.innerHTML = "Name: "+chrsName;
  
  var classEle = document.createElement("div");
  classEle.innerHTML = "Class: "+chrsClass;
  
  var aflEle = document.createElement("div");
  aflEle.innerHTML = "AFL: "+chrsAfl;
  
  var vehicleEle = document.createElement("div");
  vehicleEle.innerHTML = "Vehicle: "+chrsVehicle;
  
  if (chrsAfl === "autobot") {
    displayEle.classList.add("autobot");
    image.src =
      "https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Autobot-512.png";
  }else if(chrsAfl === "decepticon"){
    displayEle.classList.add("decepticon");
    image.src =  "https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Decepticon-512.png"
  };
  
  if(chrsVehicle == "truck"){
    vehicleEle.style.color = "blue";
  };
  
  if(chrsVehicle == "tank"){
    vehicleEle.style.color = "green";
  };
  
    if(chrsVehicle == "car"){
    vehicleEle.style.color = "gold";
  };
  
    if(chrsVehicle == "plane"){
    vehicleEle.style.color = "white";
  };
  
  
  document.body.appendChild(displayEle);
  displayEle.appendChild(nameEle);
  displayEle.appendChild(classEle);
  displayEle.appendChild(aflEle);
  displayEle.appendChild(vehicleEle);
  displayEle.appendChild(image);
  
  
};