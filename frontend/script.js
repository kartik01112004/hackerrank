// script.js

const recommendations = {
  clothing: [
    {
      img: "assets/bby pink and beige.jpg",
      name: "Blush Beige Top",
      price: "Rp. 150,000",
      colors: ["beige", "pink"],
    },
    {
      img: "assets/dark blue and yellow.jpg",
      name: "Sunset Yellow Shirt",
      price: "Rp. 200,000",
      colors: ["blue", "yellow", "white"],
    },
    {
      img: "assets/green jeans.webp",
      name: "Mint Green Jeans",
      price: "Rp. 180,000",
      colors: ["green"],
    },
    {
      img: "assets/light pink and beige1.jpg",
      name: "Soft Pink Blouse",
      price: "Rp. 220,000",
      colors: ["pink", "beige"],
    },
    {
      img: "assets/yellow and darkblue3.jpg",
      name: "Summer Breeze Tee",
      price: "Rp. 118,000",
      colors: ["yellow", "blue"],
    },
    {
      img: "assets/light pink and beige3.jpg",
      name: "Peachy Keen Top",
      price: "Rp. 235,000",
      colors: ["pink", "beige"],
    },
    {
      img: "assets/white nd blue 1.webp",
      name: "Sky Blue Tee",
      price: "Rp. 190,000",
      colors: ["white", "blue"],
    },
    {
      img: "assets/ui 2 green top.webp",
      name: "Emerald Green Top",
      price: "Rp. 175,000",
      colors: ["green"],
    },
    {
      img: "assets/wine nd offwhite3.jfif.jpg",
      name: "Crimson Delight",
      price: "Rp. 210,000",
      colors: ["white", "red"],
    },
    {
      img: "assets/yellow jeans.webp",
      name: "Lemon Twist Jeans",
      price: "Rp. 180,000",
      colors: ["yellow", "blue"],
    },
  ],
  accessories: [
    {
      img: "assets/white nd blue accesories 3.webp",
      name: "Ocean Breeze Bracelet",
      price: "Rp. 50,000",
      colors: ["blue", "white"],
    },
    {
      img: "assets/white nd blue accesories 2.jfif.jpg",
      name: "Seafoam Necklace",
      price: "Rp. 75,000",
      colors: ["blue", "white", "green"],
    },
    {
      img: "assets/white nd blue accesories 5.webp",
      name: "Azure Earrings",
      price: "Rp. 60,000",
      colors: ["blue", "white", "green"],
    },
    {
      img: "assets/white nd blue accesories 1.jpg",
      name: "Turquoise Ring",
      price: "Rp. 45,000",
      colors: ["blue", "white", "green"],
    },
  ],
  footwear: [
    {
      img: "assets/white and blue footwear1.webp",
      name: "Gray Blue Sneakers",
      price: "Rp. 250,000",
      colors: ["gray", "blue", "white"],
    },
    {
      img: "assets/white and blue footwear5.webp",
      name: "Cobalt Sandals",
      price: "Rp. 275,000",
      colors: ["blue", "orange", "white"],
    },
  ],
  jewellery: [
    {
      img: "assets/jewellery1.jpg",
      name: "Pearl Earrings",
      price: "Rp. 150,000",
      colors: ["white", "gray"],
    },
    {
      img: "assets/jewellery2.jpg",
      name: "Amber Necklace",
      price: "Rp. 175,000",
      colors: ["orange", "blue", "white"],
    },
  ],
};

function loadRecommendations(category, color = null) {
  const recommendationsDiv = document.getElementById("recommendations");
  recommendationsDiv.innerHTML = "";

  const filteredRecommendations = color
    ? recommendations[category].filter((item) => item.colors.includes(color))
    : recommendations[category];

  filteredRecommendations.forEach((item) => {
    const itemDiv = document.createElement("div");
    itemDiv.className = "item";
    itemDiv.innerHTML = `
          <img src="${item.img}" alt="${item.name}">
          <p>${item.name}<br>${item.price}</p>
      `;
    recommendationsDiv.appendChild(itemDiv);
  });
}

document.querySelectorAll("nav ul li").forEach((tab) => {
  tab.addEventListener("click", function () {
    document
      .querySelectorAll("nav ul li")
      .forEach((li) => li.classList.remove("active"));
    this.classList.add("active");
    const category = this.getAttribute("data-category");
    loadRecommendations(category);
  });
});

document.querySelectorAll(".color-block").forEach((block) => {
  block.addEventListener("click", function () {
    const color = this.classList.contains("color1")
      ? "white"
      : this.classList.contains("color2")
      ? "orange"
      : this.classList.contains("color3")
      ? "blue"
      : this.classList.contains("color4")
      ? "gray"
      : this.classList.contains("color5")
      ? "beige"
      : this.classList.contains("color6")
      ? "red"
      : this.classList.contains("color7")
      ? "lightblue"
      : this.classList.contains("color8")
      ? "silver"
      : this.classList.contains("color9")
      ? "black"
      : this.classList.contains("color10")
      ? "darkgray"
      : this.classList.contains("color11")
      ? "lightgray"
      : "darkblack";
    const activeTab = document.querySelector("nav ul li.active");
    const category = activeTab.getAttribute("data-category");
    loadRecommendations(category, color);
  });
});

// Load default category
loadRecommendations("clothing");
