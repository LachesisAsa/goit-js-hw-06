const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const imageEl = [...images].map(
  (imageEl) =>
    `<li><img 
 src="${imageEl.url}" 
 alt="${imageEl.alt}" 
 height="210px"
 width ="320px"></li>
`
);
const artGallery = document.querySelector(".gallery");
artGallery.style.display = "flex";
artGallery.style.listStyleType = "none";
artGallery.style.columnGap = "10px";
artGallery.insertAdjacentHTML("afterbegin", imageEl);
