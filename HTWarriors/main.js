const cardColumn1 = document.getElementById("card-column1");
const cardColumn2 = document.getElementById("card-column2");
const blog = document.getElementById("blog-card");
const resourceCard = document.getElementById("resource-card");

const btnBurger = document.querySelector(".btn_burger");
const burgerIcon = document.querySelector(".navbar-mobile--burger");
const navbarMenu = document.querySelector(".navbar-menu");
const navbarItems = document.querySelectorAll(".navbar-item");

const footerColumn = document.getElementById("footer-column");
//Hide burger menu on click navbarItem
navbarItems.forEach((item) => {
  item.addEventListener("click", () => {
    navbarMenu.classList.remove("active");
    btnBurger.classList.remove("active");
    btnBurger.setAttribute(
      "aria-expanded",
      btnBurger.getAttribute("aria-expanded") === "true" ? "false" : "true"
    );
  });
});

function menuBtn() {
  let myBtn = document.querySelector('.menuBtn');
  myBtn.classList.toggle('active');
}

const cardData1 = [
  {
    categories: ["Web Design", "UX Design", "Case study"],
    title: "Hi-Fi Profile/Landing Page",
    description: "Amazing profile/landing page project made with HTML, CSS & JS. All links in just 1 Webpage. FREE for everone. Name, social media, posts, yt channel, bio and more",
    image: "img/content/ytVideos/img1.png",
    link: "https://youtube.com/shorts/7VS2PIzxu38?feature=share",
  },
  {
    categories: ["UI Design", "UX Research", "UI Elements"],
    title: "3D Flip Card Hover Effect",
    description: "Amazing 3D flip card with Front and Back Side. Just hover above the card and see it flipping.",
    image: "img/content/ytVideos/img2.png",
    link: "https://youtube.com/shorts/1fBrjDWWwHg?feature=share",
  },
  
];

const cardData2 = [
  {
    categories: ["UI Design", "UX Design", "Case study"],
    title: "UI/UX love Button ",
    description: "I LOVE YOU ❣️😘 button with animation and effects for your special one and for your project",
    image: "img/content/ytVideos/img3.png",
    link: "https://youtube.com/shorts/EnE9FP2Gy0s?feature=share",
  },
  {
    categories: ["UI Design", "UX Design", "Case study"],
    title: "Loading Pencil Animation",
    description: "Pencil loader with rotating animation. Super easy to make. Please wait it's loading... 😂🤣",
    image: "img/content/ytVideos/img4.png",
    link: "",
  },
];

const blogData = [
  {
    categories: ["UI Design"],
    color: "card-categories--ui",
    image: "img/content/posts/img1.png",
    title: "Clean Registration Form",
    description: "",
    date: "May 2023",
    num: "223",
    link: "https://www.instagram.com/p/CsbPK4RxLgC/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==",
  },
  {
    categories: ["UI Design"],
    color: "card-categories--ui",
    image: "img/content/posts/img2.png",
    title: "User Profile Card",
    description: "",
    date: "May 2023",
    num: "154",
    link: "https://www.instagram.com/p/CsYZz_SSvsV/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==",
  },
  {
    categories: ["UI Design"],
    color: "card-categories--ui",
    image: "img/content/posts/img3.png",
    title: "New designs are coming soon...",
    description: "",
    date: "May 2022",
    num: "Null",
    link: "https://www.instagram.com/htwarriors108",
  },
];

const resourcesData = [
  {
    image: "img/content/designs/img1.png",
    title: "Uiverse",
    description: "We offer a collection of UI/UX elements at uiverse.io for development and free usage",
    link: "https://uiverse.io/profile/htwarriors108",
  },
  {
    image: "img/content/designs/img2.png",
    title: "3D Flip Card",
    description: "Amazing 3D flip card hover effect. Check the code and make your own",
    link: "https://uiverse.io/htwarriors108/tasty-stingray-56",
  },
   {
     image: "img/content/designs/img3.png",
     title: "Caller Card",
     description: "Cool Caller card with animation and effects. Check the code and make your own",
     link: "https://uiverse.io/htwarriors108/odd-turtle-69",
   },
];

const footerData = [
  {
    title: "Navigation",
    linksTitle: ["Home", "About me", "Projects", "Contact"],
    links: ["#", "#projets", "#aboutme", "#blog", "#tools", "#contact"],
    boolean: false,
  },
  {
    title: "Products",
    linksTitle: ["Ui elements", "User persona"],
    links: [
      "https://uiverse.io/profile/htwarriors108",
      "https://www.youtube.com/@ht_warriors",
    ],
    boolean: false,
  },
  {
    title: "Social",
    linksTitle: ["YouTube", "Github", "Instagram", "Uiverse", "Twitter"],
    links: [
      "https://www.youtube.com/@ht_warriors",
      "https://github.com/htwarriors108",
      "https://www.instgram.com/htwarriors108",
      "https://uiverse.io/htwarriors108",
      "https://twitter.com/htwarriors108",
    ],
    boolean: true,
    icons: [
      "fab fa-youtube",
      "fab fa-github",
      "fab fa-instagram",
      "fa-solid fa-paintbrush",
      "fab fa-twitter",
    ],
  },
];

//createCard for each cardData
cardData1.forEach((card) => {
  createCard(card, cardColumn1);
});

cardData2.forEach((card) => {
  createCard(card, cardColumn2);
});

blogData.forEach((post) => {
  createPost(post, blog);
});

resourcesData.forEach((resource) => {
  createResource(resource, resourceCard);
});

//createCard
function createCard(card, column) {
  const cardArticle = document.createElement("article");

  const cardElement = document.createElement("a");
  cardElement.setAttribute("href", card.link);
  cardElement.setAttribute("target", "_blank");
  cardElement.classList.add("column", "card");

  const cardImg = document.createElement("img");
  cardImg.classList.add("card-img");
  cardImg.setAttribute("src", card.image);
  cardImg.setAttribute("alt", card.title);

  const cardText = document.createElement("div");
  cardText.classList.add("column", "column-8");

  const categoriesList = document.createElement("ul");
  categoriesList.classList.add(
    "card-categories",
    "text",
    "text-caption",
    "text-info2"
  );
  card.categories.forEach((category) => {
    const categoryItem = document.createElement("li");
    categoryItem.textContent = category;
    categoriesList.appendChild(categoryItem);
  });

  const cardTitle = document.createElement("h3");
  cardTitle.classList.add("text", "text-h4", "card-title");
  cardTitle.textContent = card.title;

  const cardDescription = document.createElement("p");
  cardDescription.classList.add("text", "text-grey", "card-description");
  cardDescription.textContent = card.description;

  // cardText.appendChild(categoriesList);
  cardElement.appendChild(cardImg);
  cardElement.appendChild(cardText);
  cardText.appendChild(cardTitle);
  cardText.appendChild(cardDescription);
  cardArticle.appendChild(cardElement);
  column.appendChild(cardArticle);
}

function createPost(post, column) {
  const postElement = document.createElement("a");
  postElement.setAttribute("href", post.link);
  postElement.setAttribute("target", "_blank");
  postElement.classList.add("column", "card");

  const postText = document.createElement("article");
  postText.classList.add("column", "column-8", "column-16", post.color);

  const postImage = document.createElement("img");
  postImage.setAttribute("src", post.image);

  const postTitle = document.createElement("h3");
  postTitle.classList.add("text", "text-h4", "card-title");
  postTitle.textContent = post.title;

  const postDescription = document.createElement("p");
  postDescription.classList.add("text", "text-grey", "card-description");
  postDescription.textContent = post.description;

  const postContainer = document.createElement("div");
  postContainer.classList.add("column");

  const postContainer2 = document.createElement("div");
  postContainer2.classList.add("column");

  const postDate = document.createElement("p");
  postDate.classList.add("text", "text-grey", "text-caption");
  postDate.textContent = post.date;

  const postAutorContainer = document.createElement("div");
  postAutorContainer.classList.add("row", "row-8");

  const postAutorContainer2 = document.createElement("div");
  postAutorContainer2.classList.add("column");

  const postAutorImage = document.createElement("img");
  postAutorImage.classList.add("navbar-img");
  postAutorImage.setAttribute("alt", "HT Warriors profile");
  postAutorImage.setAttribute("src", "img/items/profile.png");

  const postAutor = document.createElement("p");
  postAutor.classList.add("text");
  postAutor.textContent = "Hi-Tech Warriors";

  const postBtn = document.createElement("a");
  postBtn.classList.add("button", "button-link");
  // postBtn.textContent = "5 min read";

  const postNum = document.createElement("span");
  postNum.classList.add("text", "text-grey", "text-caption");
  postNum.textContent = post.num + " lines of code";

  postElement.appendChild(postImage);
  postContainer.appendChild(postTitle);
  // postContainer.appendChild(postDescription);
  postText.appendChild(postContainer);
  postElement.appendChild(postText);

  postText.appendChild(postContainer2);
  postContainer2.appendChild(postAutorContainer);
  // postAutorContainer.appendChild(postAutorImage);
  postAutorContainer.appendChild(postAutorContainer2);
  // postAutorContainer2.appendChild(postAutor);

  postAutorContainer2.appendChild(postNum);

  column.appendChild(postElement);
}

function createResource(resource, column) {
  const resourceElement = document.createElement("a");
  resourceElement.setAttribute("href", resource.link);
  resourceElement.setAttribute("target", "_blank");
  resourceElement.classList.add("column", "card");

  const resourceImg = document.createElement("img");
  resourceImg.classList.add("card-img");
  resourceImg.setAttribute("src", resource.image);
  resourceImg.setAttribute("alt", resource.title);

  const resourceText = document.createElement("div");
  resourceText.classList.add("column", "column-8");

  const resourceTitle = document.createElement("h3");
  resourceTitle.classList.add("text", "text-h4", "card-title");
  resourceTitle.textContent = resource.title;

  const resourceDescription = document.createElement("p");
  resourceDescription.classList.add("text", "text-grey", "card-description");
  resourceDescription.textContent = resource.description;

  resourceText.appendChild(resourceTitle);
  resourceText.appendChild(resourceDescription);
  resourceElement.appendChild(resourceImg);
  resourceElement.appendChild(resourceText);
  column.appendChild(resourceElement);
}

btnBurger.addEventListener("click", () => {
  btnBurger.classList.toggle("active");
  navbarMenu.classList.toggle("active");
  btnBurger.setAttribute(
    "aria-expanded",
    btnBurger.getAttribute("aria-expanded") === "true" ? "false" : "true"
  );
});

//Year copyright
const date = new Date().getFullYear();
const year = document.getElementById("year");

year.textContent = date;


function changeMode() {
  let btn = document.querySelector('.switch');
  btn.classList.toggle('active');
}