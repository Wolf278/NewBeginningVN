
/*
  Story, Music and Assets by FiveTails (Wolf278 on GitHub)
*/

import { who, music, img } from "./helpers.js";

export const characterColors = {
  'Death': 'orange',
  'Nine': 'gray',
  'OddBoy': 'green',
  'NewMan': 'yellow',
  'Star': 'blue',
  'Five': 'red',
  'Destruction': 'pink'
};

export const story = {
  "Loading": {
    bg: img('6.jpg'),
    dialog: [
      "START"
    ]
  },
  "Ch1": {
    bg: img('1.jpg'),
    dialog: [
      music('Thanking_You_Bee_Remaster_3.mp3'),
      "It's as if I've seen a dragon.",
      "Perfect pitch of darkness.",
      "Are we just as the old.",
      "Or will we create new ways?",
      who('Five', 'right')("Odd what are you going on about?"),
      who('OddBoy', 'left')("Nothing I'm sorry brother."),
      who('Five')("It's okay brother, we don't have all day."),
      who('OddBoy')("Yes you're right.")
    ]
  },
  "Ch2": {
    bg: img('2.jpg'),
    dialog: [
      music('Atheist_Remastered.mp3'),
      who('Death', 'left')("So he's just finished his qourt?"),
      who('Nine', 'right')("Yes the time have finally come."),
      who('Death')("This is all for my desperation?"),
      who('Nine')("Your love is what made this happen, be greatful, thanks to me you still station in a wonderful world of immortality."),
      who('Death')("Is this the world are son's true love's."),
      "Man walk in many salicylic\nYet we don't see\nthe end is now.",
    ]
  },
  "Ch3": {
    bg: img('3.jpg'),
    dialog: [
      music('Why_Love_Is_This_Way_2021.mp3'),
      who('Five', 'right')("This is the end of you hahahahah."),
      who('Star', 'left')( "Man why are you so good at this game?"),
      who('OddBoy', 'left')("Okay guys thats enough of chaces, my god you all play to load for a game of patience."),
      who('Five')("Hahah!!!"),
      who('Star', 'left')("Yeah yeah, I get you, Im a looser."),
      who('Five')("If you keep thinking that way you will always be."),
      who('OddBoy', 'left')("Wait I hear my father coming."),
      who('NewMan', 'right')("Son is there something worng?"),
      who('OddBoy')("Why you ask?"),
      who('NewMan')("Well, you seem normal???"),
      who('OddBoy')("Okay???"),
      who('NewMan')("Just to let you know anything you need just come to me, okay son?"),
      who('OddBoy')("Okay dad."),
      who('Star', 'left')("You know life would be easier if we all had Odd biological father as a father."),
      who('Five', 'right')("......"),
    ]
  },
  "Ch4": {
    bg: img('4.jpg'),
    dialog: [
      music('Thanking_You_Bee_Remaster_3.mp3'),
      "We live as if we see ghost everyday\nBut play off as if its not real\nWyh hummu suffering is justified.",
      "I sit as my love play his games wight in his book notes of lyes,\nTo set me free from new power.",
      who('Destruction', 'right')("So why are you so sad today?"),
      who('OddBoy', 'left')("This isn't right how can my past not be the same mintly but, not phicaly"),
      who('Destruction')("You going in the worng things in life, take Samuel words to hart."),
      who('OddBoy')("The leffs and pattels?"),
      who('Destruction')("There are green left and a red pattel, there are two different worlds yet, you are a lefel."),
      who('OddBoy')("I don't try to be in two wolds."),
      who('Destruction')("No, you must find your place in the world you live in behon this."),
      who('OddBoy')("But, your word is what you want."),
      who('Destruction')("There is only one for you, the one ment for you, please don't put this on one pedestal. Please move on and find you salvation."),
      "Confused on this world\nCrying for a new hope I just can't stand anymore.",
    ]
  },
  "End": {
    bg: img('4.jpg'),
    dialog: [
      "Part one Ends",
      "Thank you for your time.",
      "Porety Evil Good Devil will come soon.",
    ]
  }
};
