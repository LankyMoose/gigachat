const NAME_PARTS = {
  adjectives: [
    "Sad",
    "Happy",
    "Angry",
    "Gentle",
    "Sleepy",
    "Brave",
    "Sneaky",
    "Lucky",
    "Silent",
    "Noisy",
    "Shiny",
    "Gloomy",
    "Tiny",
    "Massive",
    "Ancient",
    "Young",
    "Fierce",
    "Lazy",
    "Quick",
    "Slow",
    "Clever",
    "Wild",
    "Curious",
    "Mighty",
    "Lonely",
    "Broken",
    "Grumpy",
    "Sharp",
    "Dusty",
    "Fuzzy",
    "Noble",
    "Tired",
    "Stormy",
    "Sunny",
    "Frozen",
    "Burning",
    "Jolly",
    "Crazy",
    "Soft",
    "Rough",
    "Vibrant",
    "Quiet",
    "Bold",
    "Crimson",
    "Silver",
    "Golden",
    "Glowing",
    "Hidden",
  ],
  nouns: [
    "Fox",
    "Owl",
    "Cat",
    "Dog",
    "Wolf",
    "Bear",
    "Tiger",
    "Lion",
    "Panda",
    "Eagle",
    "Falcon",
    "Hawk",
    "Deer",
    "Rabbit",
    "Swan",
    "Bat",
    "Snake",
    "Shark",
    "Octopus",
    "Whale",
    "Crab",
    "Dragon",
    "Phoenix",
    "Ghost",
    "Zebra",
    "Rhino",
    "Penguin",
    "Lizard",
    "Spider",
    "Bee",
    "Ant",
    "Frog",
    "Mouse",
    "Raven",
    "Dove",
    "Mountain",
    "River",
    "Lake",
    "Ocean",
    "Forest",
    "Tree",
    "Flower",
    "Breeze",
    "Rain",
    "Storm",
    "Cloud",
    "Mist",
    "Sun",
    "Moon",
    "Star",
    "Comet",
    "Planet",
    "Flame",
    "Ember",
    "Spark",
    "Ash",
    "Rock",
    "Crystal",
    "Gem",
    "Pebble",
    "Ice",
    "Blade",
    "Shield",
    "Arrow",
    "Hammer",
    "Cloak",
    "Crown",
    "Orb",
    "Scroll",
    "Mirror",
    "Key",
    "Mask",
    "Ring",
    "Coin",
    "Lantern",
    "Bell",
    "Drum",
    "Book",
  ],
}

const GREETINGS = [
  "%s joined the chat. Better late than never.",
  "%s just popped in. Things were getting boring anyway.",
  "Everyone, act cool — %s just showed up.",
  "%s slid into the chat like it's 1999.",
  "%s appeared. Hide the evidence.",
  "%s has joined. The prophecy is unfolding.",
  "Guess who just graced us with their presence? %s.",
  "%s joined. Brace yourselves.",
  "The chosen one has arrived: %s.",
  "%s has entered the chat. Let the chaos begin.",
  "%s is here. Try to look busy.",
  "%s joined. It's showtime.",
  "%s connected. We were running low on sarcasm.",
  "%s arrived. Things just got interesting.",
  "Behold — %s is among us.",
  "And just like that, %s appeared.",
  "%s joined. Pretend you were saying something smart.",
  "%s has entered the building. Finally.",
  "Hold your applause, %s is here.",
  "%s joined the chat. Who invited them?",
]

const FAREWELLS = [
  "%s left the chat. Rage quit?",
  "%s vanished into the digital mist.",
  "%s has left the chat. We'll pretend to notice.",
  "%s disconnected. Their legacy lives on.",
  "%s logged off. Probably something important. Probably.",
  "%s dipped. Classic.",
  "%s has left. Time to talk about them.",
  "%s ghosted us. Again.",
  "Goodbye %s. May your Wi-Fi be ever strong.",
  "%s has exited the building. Cue dramatic music.",
  "%s left. Press F.",
  "%s disconnected. Freedom achieved.",
  "%s just rage-quit life (or at least the chat).",
  "%s bounced. Respect.",
  "%s left the chat. Who hurt them?",
  "And just like that, %s was gone.",
  "%s said goodbye. We said nothing.",
  "%s exited. The room feels emptier.",
  "Poof. %s disappeared.",
  "%s left us on read. Typical.",
]

export function randomName() {
  return `${
    NAME_PARTS.adjectives[
      Math.floor(Math.random() * NAME_PARTS.adjectives.length)
    ]
  }${NAME_PARTS.nouns[Math.floor(Math.random() * NAME_PARTS.nouns.length)]}`
}

export function randomGreeting(name: string) {
  return GREETINGS[Math.floor(Math.random() * GREETINGS.length)].replace(
    "%s",
    `@${name}`
  )
}

export function randomFarewell(name: string) {
  return FAREWELLS[Math.floor(Math.random() * FAREWELLS.length)].replace(
    "%s",
    `@${name}`
  )
}
