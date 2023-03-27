const spotifyCards = [
  {
    image: "https://i.scdn.co/image/ab67706f00000002ca5a7517156021292e5663a6",
    title: "Peaceful Piano",
    description: "Relax and indulge with beautiful piano pieces",
  },
  {
    image: "https://i.scdn.co/image/ab67706f000000025551996f500ba876bda73fa5",
    title: "Peaceful Piano",
    description: "Relax and indulge with beautiful piano pieces",
  },
  {
    image: "https://i.scdn.co/image/ab67706f00000002fe24d7084be472288cd6ee6c",
    title: "Peaceful Piano",
    description: "Relax and indulge with beautiful piano pieces",
  },
  {
    image: "https://i.scdn.co/image/ab67706f000000025ea54b91b073c2776b966e7b",
    title: "Jazz vibes",
    description: "Relax and indulge with beautiful piano pieces",
  },
  {
    image: "	https://i.scdn.co/image/ab67706f00000002724554ed6bed6f051d9b0bfc",
    title: "Peaceful Piano",
    description: "Relax and indulge with beautiful piano pieces",
  },
];

const spotifyCards2 = [
  {
    image: "	https://i.scdn.co/image/ab67706f00000002dcf6093ca81366669e191f06",
    title: "Today's Top Hits",
    description: "Ed Sheeran is on top of the Hottest 50!",
  },
  {
    image: "https://i.scdn.co/image/ab67706f00000002d60afd83c751fa6ebd361e9d",
    title: "RapCaviar",
    description: "New music from Roddy Ricch, kody..",
  },
  {
    image: "https://i.scdn.co/image/ab67706f00000002b0fe40a6e1692822f5a9d8f1",
    title: "All Outs 2010's",
    description: "The biggest hit songs of 2010's",
  },
  {
    image: "https://i.scdn.co/image/ab67706f0000000278b4745cb9ce8ffe32daaf7e",
    title: "Rock Classics",
    description: "Rock legends and epic songs that continue..",
  },
  {
    image: "https://i.scdn.co/image/ab67706f0000000208ca740941aa65b5e205c361",
    title: "Chill Hits",
    description: "Kick back to the best new and recent chill hits",
  },
];

const spotifyContainer = document.getElementById("spotify-Cards-json");

for(let i=0; i<spotifyCards.length; i++){
const spanContainer = document.createElement("span");
spanContainer.className = "span-image";
const imageContainer =  document.createElement("img");
imageContainer.className = "image-css";
imageContainer.src = spotifyCards[i].image;



const titleContainer = document.createElement("p");
titleContainer.className = "title-css";
titleContainer.textContent = spotifyCards[i].title;

const descContainer = document.createElement("p");
descContainer.className = "desc-css";
descContainer.textContent = spotifyCards[i].description;

spanContainer.appendChild(imageContainer);
spanContainer.appendChild(titleContainer);
spanContainer.appendChild(descContainer);
spotifyContainer.appendChild(spanContainer);
}

  const spotifyContainer2 = document.getElementById("spotify-card-json");
  
  for(let i=0; i<spotifyCards2.length; i++){
  const spanContainer = document.createElement("span");
  spanContainer.className = "span-image";
  const imageContainer =  document.createElement("img");
  imageContainer.className = "image-css";
  imageContainer.src = spotifyCards2[i].image;
  
  const titleContainer = document.createElement("p");
  titleContainer.className = "title-css";
  titleContainer.textContent = spotifyCards2[i].title;
  
  const descContainer = document.createElement("p");
  descContainer.className = "desc-css";
  descContainer.textContent = spotifyCards2[i].description;
  
  spanContainer.appendChild(imageContainer);
  spanContainer.appendChild(titleContainer);
  spanContainer.appendChild(descContainer);
  spotifyContainer2.appendChild(spanContainer);
  }
  
  function search(){
    window.location.href="./search.html"
  }

  function backToHome(){
    window.location.href="./index.html"
  }

  function loginf(){
    window.location.href="./LOGIN.HTML"
  }