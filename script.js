const sampleMessages = [
  {
    title: "Knock, knock",
    message: "Who’s there? Tank. Tank who? You’re welcome.",
  },
  {
    title: "Knock, knock",
    message:
      "Who’s there? Luke. Luke who? Luke through the peep hole and find out.",
  },
  {
    title: "Knock, knock",
    message:
      "Who’s there? Figs. Figs who? Figs the doorbell, it’s not working!",
  },
  {
    title: "Knock, knock",
    message:
      "Who’s there? Annie. Annie who? Annie thing you can do, I can do too!",
  },
  {
    title: "Knock, knock",
    message: "Who’s there? Cow says. Cow says who? No, a cow says _mooooo_!",
  },
  {
    title: "Knock, knock",
    message:
      "Who’s there? Hal. Hal who? Hal will you know if you don’t open the door?",
  },
  {
    title: "Knock, knock",
    message: "Who’s there? Alice. Alice who? Alice fair in love and war.",
  },
  { title: "Knock, knock", message: "Who’s there? Says. Says who? Says me!" },
  {
    title: " Knock, knock",
    message:
      "Who’s there? Honey bee. Honey bee who? Honey bee a dear and get that for me please!",
  },
  {
    title: " Knock, knock",
    message:
      "Who’s there? A little old lady. A little old lady who? Hey, you can yodel!",
  },
  {
    title: " Knock, knock",
    message:
      "Who’s there? Euripides. Euripides who? Euripides clothes, you pay for them!",
  },
  {
    title: " Knock, knock",
    message: "Who’s there? Snow. Snow who? Snow use. The joke is over.",
  },
  {
    title: " Knock, knock",
    message: "Who’s there? Hawaii. Hawaii who? I’m good. Hawaii you?",
  },
  {
    title: " Knock, knock",
    message: "Who’s there? Woo. Woo who? Glad you’re excited, too!",
  },
];

const generateRandomMessage = () => {
  const randomIndex = Math.ceil(Math.random() * (sampleMessages.length - 1));
  return sampleMessages[randomIndex];
};

console.log(generateRandomMessage());
