'use strict'


let apiURL = "https://vpic.nhtsa.dot.gov/api/vehicles/GetVehicleTypesForMake/merc?format=json";
let results = [];
let container = document.getElementById("container");
container.style.display = "flex";
container.style.flexWrap = "wrap";


fetch(apiURL).then(response => {
    return response.json();
}
).then(data => {
    results = data.Results;
    console.log(results);
    for (let i = 0; i < results.length; i++) {
        let box = document.createElement("div");
        box.setAttribute("id", "box");
        box.style.border = "solid black 1px";
        box.style.margin = "20px";
        box.style.padding = "20px";
        box.style.width = "300px";
        container.appendChild(box);

        let title = document.createElement("h2");
        title.innerHTML = results[i].MakeName;
        box.appendChild(title);

        let vehicletype = document.createElement("p");
        vehicletype.innerHTML = "Vehicle Type: " + results[i].VehicleTypeName;
        box.appendChild(vehicletype);

    }
})

