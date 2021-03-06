// ITERATION 1
// Characters
var mrGreen = {
  firstName: "Jacob",
  lastName: "Green",
  color: "green",
  description: "He has a lot of connections",
  age: "45",
  image:
    "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
  occupation: "Entrepreneur",
};
var drOrchid = {
  firstName: "Doctor",
  lastName: "Orchid",
  color: "white",
  description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
  age: "26",
  image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
  occupation: "Scientist",
};
var profPlum = {
  firstName: "Victor",
  lastName: "Plum",
  color: "purple",
  description: "Billionare video game designer",
  age: "22",
  image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
  occupation: "Designer",
};
var missScarlet = {
  firstName: "Kasandra",
  lastName: "Scarlet",
  color: "red",
  description: "She is an A-list movie star with a dark past",
  age: "31",
  image: "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
  occupation: "Actor",
};
var mrsPeacock = {
  firstName: "Eleanor",
  lastName: "Peacock",
  color: "blue",
  description:
    "She is from a wealthy family and uses her status and money to earn popularity",
  age: "36",
  image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
  occupation: "Socialité",
};
var mrMustard = {
  firstName: "Jack",
  lastName: "Mustard",
  color: "yellow",
  description:
    "He is a former football player who tries to get by on his former glory",
  age: "62",
  image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
  occupation: "Retired Football player",
};
// Characters' Collection
var suspectsArray = [];
suspectsArray.push(
  mrGreen,
  drOrchid,
  profPlum,
  missScarlet,
  mrsPeacock,
  mrMustard
);
// Weapons
var rope = { name: "rope", weight: 10 };
var knife = { name: "knife", weight: 8 };
var candlestick = { name: "candlestick", weight: 2 };
var dumbbell = { name: "dumbbell", weight: 30 };
var poison = { name: "poison", weight: 2 };
var axe = { name: "axe", weight: 15 };
var bat = { name: "bat", weight: 13 };
var trophy = { name: "trophy", weight: 25 };
var pistol = { name: "pistol", weight: 20 };
// Weapons' Collection
var weaponsArray = [];
weaponsArray.push(
  rope,
  knife,
  candlestick,
  dumbbell,
  poison,
  axe,
  bat,
  trophy,
  pistol
);
// Rooms
var diningRoom = { name: "Dinning Room" };
var conservatory = { name: "Conservatory" };
var kitchen = { name: "Kitchen" };
var study = { name: "Study" };
var library = { name: "Library" };
var billiardRoom = { name: "Billiard Room" };
var lounge = { name: "Lounge" };
var ballroom = { name: "Ballroom" };
var hall = { name: "Hall" };
var spa = { name: "Spa" };
var livingRoom = { name: "Living Room" };
var observatory = { name: "Observatory" };
var theater = { name: "Theater" };
var guestHouse = { name: "Guest House" };
var patio = { name: "Patio" };
// Rooms' Collection
var roomsArray = [];
roomsArray.push(
  diningRoom,
  conservatory,
  kitchen,
  study,
  library,
  billiardRoom,
  lounge,
  ballroom,
  hall,
  spa,
  livingRoom,
  observatory,
  theater,
  guestHouse,
  patio
);

// ITERATION 2
function selectRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function pickMystery() {
  let envelope = {
    suspect: selectRandom(suspectsArray),
    weapon: selectRandom(weaponsArray),
    room: selectRandom(roomsArray),
  };
  return envelope;
}

// ITERATION 3
function revealMystery(envelope) {
  return (
    envelope.suspect.firstName +
    " " +
    envelope.suspect.lastName +
    " killed Mr. Boddy using the " +
    envelope.weapon.name +
    " in the " +
    envelope.room.name +
    "!"
  );
}
