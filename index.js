function init(category) {
  let mainContainer = document.querySelector(".map-container");
  let mapContainer = document.querySelector("#map");
  let newMap = document.createElement("div");
  newMap.setAttribute("id", "map");
  mapContainer.remove();

  mainContainer.appendChild(newMap);

  if (document.querySelectorAll(".map-location").length) {
    let removeLocations = document.querySelectorAll(".map-location");

    removeLocations.forEach((element) => {
      element.remove();
    });
  }

  const mapLocationList = document.querySelector(".map-location-list");

  mapboxgl.accessToken = "ACCESS_TOKEN";

  const map = new mapboxgl.Map({
    container: "map", // container ID
    style: "mapbox://styles/mapbox/streets-v11", // style URL
    center: [-97.98535153689879, 32.07363440803152], // starting position [lng, lat]
    zoom: 5, // starting zoom
  });

  const locations = [
    {
      coordinates: "31.522865264175433, -97.18277625187741",
      name: "Waco Custom Meats and Seafood",
      address: "325 Lake Air Drive Waco, TX 76710",
      usage: "buy",
    },
    {
      coordinates: "31.726925449665426, -98.97954957739675",
      name: "Brownwood Schlotzsky's",
      address: "919 N. Fisk Brownwood, TX 76801",
      usage: "buy, taste",
    },
    {
      coordinates: "41.68163807447003, -81.2960253488117",
      name: "Chili's Fire Pit",
      address: "9570 Mentor Ave. Mentor, OH 44060",
      usage: "buy",
    },
    {
      coordinates: "30.225896436551423, -95.5415060154817",
      name: "Citizen's Grill",
      address: "315 Enclave Dr. Suite # 300 Shenandoah, TX 77384",
      usage: "buy, taste, use",
    },
    {
      coordinates: "45.43007906770384, -84.98785225818081",
      name: "Cochon LLC.",
      address: "181 E. Main St. Harbor Springs, MI 49740",
      usage: "buy",
    },
    {
      coordinates: "30.037273990605335, -95.49362426182451",
      name: "Crawfish Nick Seafood Co.",
      address: "5123 Louetta Spring, TX 77379",
      usage: "buy",
    },
    {
      coordinates: "30.108112613822442, -95.38455038801283",
      name: "Creekstone Outdoor Living",
      address: "3555 Rayford Rd. #60 Spring, TX 77386",
      usage: "buy",
    },
    {
      coordinates: "30.20602311279974, -95.4264128834046",
      name: "Crust Harpers Preserve",
      address: "10160 TX 242  ste # 1500 Conroe, TX 77385",
      usage: "buy, taste, use",
    },
    {
      coordinates: "29.997246199655226, -95.59245245528972",
      name: "Crust Louetta",
      address: "11550 Louetta Rd. Houston, TX 77070",
      usage: "buy, taste, use",
    },
    {
      coordinates: "30.210985802141764, -95.52898309413567",
      name: "Crust Pizza Alden Bridge",
      address: "8000 Research Forest Dr. #340 The Woodlands, TX. 77382",
      usage: "buy, taste, use",
    },
    {
      coordinates: "30.194093869602877, -93.24904805578099",
      name: "Crust Pizza Co. Lake Charles",
      address: "3479 Nelson Rd. Lake Charles, LA 70605",
      usage: "buy, taste, use",
    },
    {
      coordinates: "30.16899530775583, -95.505094878868",
      name: "Crust Pizza Panther Creek",
      address: "4775 W. Panther Creek Dr. Suite 530",
      usage: "buy, taste, use",
    },
    {
      coordinates: "30.10889372090562, -95.38551336644652",
      name: "Crust Pizza Rayford",
      address: "3535 Rayford Rd. Suite 600",
      usage: "buy, taste, use",
    },
    {
      coordinates: "30.281210665515616, -95.57044910431625",
      name: "Crust Pizza Woodforest",
      address: "2300 Woodforest Pkwy. Ste #100",
      usage: "buy, taste, use",
    },
    {
      coordinates: "47.78797577590276, -122.3099045386732",
      name: "Double DD Meats",
      address: "5602 232nd ST. SW. #104 Mountlake Terrace, WA 98043",
      usage: "buy",
    },
    {
      coordinates: "31.115372780269183, -97.39574404576497",
      name: "Earthscapes",
      address: "5317 205 Loop Temple, TX 76502",
      usage: "buy",
    },
    {
      coordinates: "30.139338261344676, -95.43321552814459",
      name: "Fries and Grind",
      address: "740 Pateway Ct. Spring, TX 77386",
      usage: "taste",
    },
    {
      coordinates: "32.93807829997181, -97.0786537200002",
      name: "Grapevine Olive Oil Co.",
      address: "332 S. Main Grapevine, TX 76051",
      usage: "buy",
    },
    {
      coordinates: "29.778865865955662, -95.60685293708288",
      name: "Hebert's Specialty Meats",
      address: "1023 Dairy Ashford Houston, TX 77079",
      usage: "buy",
    },
    {
      coordinates: "30.1844912035991, -95.48552392558133",
      name: "The Kitchen",
      address: "4526 Research Forest Dr The Woodlands, TX.77381",
      usage: "buy, taste",
    },
    {
      coordinates: "30.12835854166385, -95.45091748564117",
      name: "Julio's Mexican Grill",
      address: "544 Sawdust Rd. Spring, TX 77380",
      usage: "buy, taste",
    },
    {
      coordinates: "29.685164022603754, -95.99053642805112",
      name: "Kathy Pieper",
      address: "510 Chisholm Rd. Simonton, TX 77476",
      usage: "buy",
    },
    {
      coordinates: "30.04857683857296, -99.13804847000742",
      name: "Kerr County Meat Market",
      address: "418 Earl Garrett St. Kerrville, TX 78028",
      usage: "buy",
    },
    {
      coordinates: "29.856829749163907, -95.48588216008427",
      name: "Labatt Food",
      address: "Leandro Ramon 6650 Pine Vista Ln. Houston, TX 77092",
      usage: "buy",
    },
    {
      coordinates: "30.335387048383602, -95.51305617089105",
      name: "Majkszak Meat Market",
      address: "4900 W Davis St D-2 Conroe, TX 77304",
      usage: "buy, use",
    },
    {
      coordinates: "30.395763148803823, -95.65333240724891",
      name: "Mariel's Meat Market",
      address: "16050 Walden Rd. Montgomery, TX. 77356",
      usage: "buy",
    },
    {
      coordinates: "30.636990115717442, -97.67675293345307",
      name: "Mikey V's Hot Sauce Shop",
      address: "711 South Main St. Suite A  Georgetown, TX 78626",
      usage: "buy",
    },
    {
      coordinates: "30.225394931972865, -95.54169731990034",
      name: "Noe's Coffee & Crepes",
      address: "295 Enclave Dr. Conroe, TX 77384",
      usage: "buy, taste",
    },
    {
      coordinates: "30.162440140293537, -95.44902774178627",
      name: "Pallotta's Italian Grill",
      address: "27606 I-45  Oak Ridge N., TX. 77385",
      usage: "taste",
    },
    {
      coordinates: "30.01949197779823, -95.43022623864836",
      name: "Lasagna House",
      address: "217 Cypress Pkwy Houston, TX. 77090",
      usage: "taste",
    },
    {
      coordinates: "30.04303175333479, -95.4846448148315",
      name: "Pizza Zone",
      address: "4660 Louetta Rd. #130 Spring, TX 77388",
      usage: "taste",
    },
    {
      coordinates: "30.125238479727816, -95.44971263891298",
      name: "RC's NYC Pizza",
      address: "501Sawdust Rd. Spring, TX.77380",
      usage: "taste",
    },
    {
      coordinates: "30.043126153132484, -95.48462467778485",
      name: "Robin's Snowflake Donuts & Cafe",
      address: "4660 Louetta Rd. #170 Spring, TX 77388",
      usage: "buy",
    },
    {
      coordinates: "21.90860286963388, -159.59312277742413",
      name: "Salty Wahine",
      address: "P.O. Box 829 Hanapepe, HI 96716",
      usage: "buy",
    },
    {
      coordinates: "30.079210412414554, -95.41955690783574",
      name: "Simply Texas Pepper Palace",
      address: "219 Main Spring, TX 77373",
      usage: "buy, taste",
    },
    {
      coordinates: "30.09056505439573, -95.58957132802261",
      name: "Smitty's Meat Market",
      address: "11210 Mahaffey Rd. Tomball, TX 77375",
      usage: "buy",
    },
    {
      coordinates: "29.99422890960367, -95.62482435038798",
      name: "Stone Cold Meats",
      address: "13215 Grant Rd. #1800 Cypress, TX. 77429",
      usage: "buy",
    },
    {
      coordinates: "30.221780853042734, -95.56179557480031",
      name: "Tailgator's Pub & Grill",
      address: "33418 Egypt Ln. Magnolia, TX 77354",
      usage: "taste",
    },
    {
      coordinates: "30.225401751969482, -95.54227986289372",
      name: "Tapped Conroe",
      address: "16090 Old Conroe rd. Suite #100 Conroe, TX 77384",
      usage: "taste",
    },
    {
      coordinates: "30.068180039208833, -95.50490032810973",
      name: "Tapped Draft House & Kitchen",
      address: "20444 Kuykendahl Rd. Suite D. Spring, TX 77379",
      usage: "taste",
    },
    {
      coordinates: "30.31418370465307, -95.46292009636598",
      name: "Taste The Asian",
      address: "539 N. Frazier St. Conroe, TX 77301",
      usage: "taste",
    },
    {
      coordinates: "30.22316265705913, -97.75707429533911",
      name: "Tears of Joy",
      address: "3904 Warehouse Row Suite A  Austin, TX. 78704",
      usage: "buy",
    },
    {
      coordinates: "29.83446128240925, -95.65717851288821",
      name: "Texas Food",
      address: "16840 Clay Rd. #112 Houston, TX. 77084",
      usage: "buy",
    },
    {
      coordinates: "30.21578711382478, -95.76523917672871",
      name: "The Meating Place BBQ & Bakery",
      address: "41902 FM 1774 Magnolia, TX.",
      usage: "buy",
    },
    {
      coordinates: "30.21520554103044, -95.58342648695259",
      name: "Italian Pantry",
      address: "7515 Oak Bluff Dr Suite B Magnolia, TX. 77354 ",
      usage: "buy",
    },
    {
      coordinates: "30.158143983312534, -95.47302043988553",
      name: "The Toasted Yolk",
      address: "207 E. Shore Dr #100 The Woodlands, TX. 77380",
      usage: "buy, taste",
    },
    {
      coordinates: "30.131055786430544, -95.57057434468372",
      name: "The Wheel Kitchen",
      address: "25510 Zion Lutheran Cemetery Rd. Tomball.TX. 77375",
      usage: "buy",
    },
    {
      coordinates: "30.207156166001067, -95.35423958146549",
      name: "Uncle Tony's",
      address: "16881 FM 1314 Conroe, TX 77365",
      usage: "buy, taste",
    },
    {
      coordinates: "30.14399025798455, -95.54815209483694",
      name: "Crust Pizza Co.Creekside-Spring, TX",
      address: "26400 Kuykendahl Rd. #A120 Spring. TX. 77389",
      usage: "buy, taste, use",
    },
    {
      coordinates: "30.034652213856894, -95.55578442775139",
      name: "Crust Gleanloch Farms",
      address: "8714 Spring Cypress Rd.  #100A Spring, TX. 77379 ",
      usage: "buy, taste, use",
    },
    {
      coordinates: "29.73676420525185, -95.81332384823855",
      name: "Crust Katy- Cinco Ranch",
      address: "9920 Gaston Rd. Katy, TX. 77494",
      usage: "buy, taste, use",
    },
    {
      coordinates: "30.162248952163324, -92.05350264683105",
      name: "Crust Lafayette",
      address: "4243 Ambassador Caffery Pkwy  #101 Lafayette, LA. 70508",
      usage: "buy, taste, use",
    },
  ];

  let markers = locations.map((location) => {
    location.coordinates = location.coordinates
      .replace(" ", "")
      .split(",")
      .reverse();
    location.popUp = function () {
      return `<h2>${this.name}</h2> <p>${this.address}</p>`;
    };
    location.usage = location.usage.replaceAll(" ", "").split(",");
    return location;
  });

  if (category) {
    markers = markers.filter((marker) => {
      return marker.usage.some((usage) => {
        return usage == category;
      });
    });
  }

  //console.log(filtered);

  markers.forEach((marker) => {
    let newPopup = new mapboxgl.Popup({ offset: 25 }).setHTML(marker.popUp());

    const customMarker = document.createElement("div");
    customMarker.classList.add("marker");

    if (category === "use") {
      customMarker.classList.add("marker-use");
    }

    if (category === "taste") {
      customMarker.classList.add("marker-taste");
    }

    if (category === "buy") {
      customMarker.classList.add("marker-buy");
    }

    let newMarker = new mapboxgl.Marker(customMarker)
      .setLngLat(marker.coordinates)
      .setPopup(newPopup)
      .addTo(map);

    newMarker.getElement().setAttribute("data-title", marker.name);

    let titlePopup = new mapboxgl.Popup({
      closeButton: false,
      closeOnClick: false,
    });

    newMarker.getElement().addEventListener("click", function (e) {
      if (titlePopup.isOpen()) {
        titlePopup.remove();
      }

      const markerTitle = this.dataset.title;
      const locations = document.querySelectorAll(".map-location");

      map.flyTo({
        center: marker.coordinates,
        zoom: 15,
      });

      locations.forEach((location) => {
        if (location.classList.contains("black")) {
          location.classList.remove("black");
        }

        if (location.childNodes[0].innerText === markerTitle) {
          location.classList.toggle("black");
          mapLocationList.scrollTop = location.offsetTop - 20;
        }
      });
    });

    newMarker.getElement().addEventListener("mouseenter", () => {
      if (!newPopup.isOpen()) {
        titlePopup
          .setLngLat(marker.coordinates)
          .setHTML(`<h3>${marker.name}</h3>`)
          .addTo(map);
      }
    });

    newMarker.getElement().addEventListener("mouseleave", () => {
      titlePopup.remove();
    });

    let newLocation = document.createElement("div");
    let newTitle = document.createElement("h3");
    let newAddress = document.createElement("div");
    let usageList = document.createElement("div");

    usageList.classList.add("usage-list");

    marker.usage.forEach((use) => {
      let useSauce = document.createElement("div");
      useSauce.classList.add("use-sauce");

      if (use === "use") {
        useSauce.classList.add("use");
        useSauce.innerText = "Use";
      }

      if (use === "taste") {
        useSauce.classList.add("taste");
        useSauce.innerText = "Taste";
      }

      if (use === "buy") {
        useSauce.classList.add("buy");
        useSauce.innerText = "Buy";
      }

      usageList.append(useSauce);
    });

    newTitle.innerText = marker.name;
    newAddress.innerHTML = `<i class="lni lni-pin"></i> ${marker.address}`;

    newLocation.classList.add("map-location");
    newLocation.append(newTitle);
    newLocation.append(newAddress);
    newLocation.append(usageList);

    newLocation.addEventListener("click", function (e) {
      newMarker.getElement().click();
    });

    mapLocationList.append(newLocation);
  });

  // Add the control to the map.
  map.addControl(
    new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl,
    })
  );

  // Add zoom and rotation controls to the map.
  map.addControl(new mapboxgl.NavigationControl());
}

const useButton = document.querySelector("#useButton");
const tasteButton = document.querySelector("#tasteButton");
const buyButton = document.querySelector("#buyButton");
const allButton = document.querySelector("#allButton");

useButton.addEventListener("click", () => {
  init("use");
});

tasteButton.addEventListener("click", () => {
  init("taste");
});

buyButton.addEventListener("click", () => {
  init("buy");
});

allButton.addEventListener("click", () => {
  init();
});

init();
