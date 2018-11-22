// You can add new scenarios, but make sure that there is exactly...
// * 1 hackerCard per scenario
// * 3 playerCards per scenario

var scenario = { hackerCard: {}, playerCards: [] };

var card = { description: "", power: 0 };

// HACKER CARDS

var hackerCard1 = {
  description : "I set up a fake Wi-Fi station to steal people’s email and track them online.",
  power : 4,
};

var hackerCard2 = {
  description : "I sent a fake email from your bank asking for your account details.",
  power : 3,
};

var hackerCard3 = {
  description : "I figured out where you live from all the personal information you share on social media.",
  power : 3,
};

var hackerCard4 = {
  description : "I watched you type your password and hacked your account.",
  power : 2,
};

var hackerCard5 = {
  description : "I looked at your browsing history on your phone to see what you do online.",
  power : 2,
};

var hackerCard6 = {
  description : "Je te DDOS quand tu stream une partie d'Overwatch.",
  power : 3,
};

var hackerCard7 = {
  description : "Je te hack ton compte Skype pour draguer tes contacts.",
  power : 50,
};

var hackerCard8 = {
  description : "Je vols des cordonnées bancaires sur des sites non-sécurisés.",
  power : 4,
};

var hackerCard9 = {
  description : "Je vols des mots de passe faible via un logiciel de force brute.",
  power : 1,
};

var hackerCard10 = {
  description : "Je laisse des clefs USB pleine de virus dans les Starbucks du coin.",
  power : 5,
};

// PLAYER CARDS

var playerCard1 = {
  description : "I never use public wifi networks.",
  power : 5,
};

var playerCard2 = {
  description : "I browse the web, but I never do any personal business on a public wifi network.",
  power : 3,
};

var playerCard3 = {
  description : "I connect to any wifi network I can use in public.",
  power : 1,
};

var playerCard4 = {
  description : "I checked the email address - the message didn’t come from my bank.",
  power : 5,
};

var playerCard5 = {
  description : "I never give out personal information in response to an email.",
  power : 4,
};

var playerCard6 = {
  description : "I sent the details you asked for so you could check on my account.",
  power : 1,
};

var playerCard7 = {
  description : "I never share personal information on my social media accounts.",
  power : 5,
};
var playerCard8 = {
  description : "I keep my accounts private so only my friends can see them.",
  power : 4,
};
var playerCard9 = {
  description : "I tag everything so my friends always know what I’m doing.",
  power : 1,
};

var playerCard10 = {
  description : "I use different passwords for all of my other accounts.",
  power : 4,
};
var playerCard11 = {
  description : "I changed my password on all of my accounts because they are the same.",
  power : 2,
};
var playerCard12 = {
  description : "I deleted that account and started a new one. ",
  power : 1,
};

var playerCard13 = {
  description : "I always use a private browser that never keeps my history.",
  power : 4,
};
var playerCard14 = {
  description : "I set my browser to delete my history every time I quit. ",
  power : 3,
};

var playerCard15 = {
  description : "I never clear my browser history because I don’t like typing in big web addresses.",
  power : 1,
};

var newPlayerCard = {

  name : '',
  cost : 0,
  image : '',
  type : '',
  description : '',
  abilities : '',
  flavorText : '',
  power : 0,
  defense : 0
};

var VPSven = {

  name : 'VP Sven',
  cost : 4,
  image : '',
  type : 'Anti-Trackers',
  description : 'Anonymizing agent, VPN ranger',
  abilities : '',
  flavorText : 'Vous rend invisible aux yeux du GAFA.',
  power : 2,
  defense : 5
};

var hackerMan = {

  name : 'Hackerman',
  cost : 4,
  image : '',
  type : 'Cyber-Attacker',
  description : 'Je hack tout les personnes pour dévoiler leur secret dérangeant.',
  abilities : '',
  flavorText : 'Attaque les gens pour s\'occuper',
  power : 5,
  defense : 5
};

var neoTux = {

  name : 'Néo-Tux',
  cost : 5,
  image : '',
  type : 'OS libre',
  description : 'Créer un nouvel environnement',
  abilities : '',
  flavorText : 'La liberté vaincra',
  power : 4,
  defense : 5
};

var bonProgrammeur = {

  name : 'Bon programmeur',
  cost : 5,
  image : '',
  type : 'Programmeur',
  description : 'Développement de logiciels anti-piratage',
  abilities : '',
  flavorText : 'Protection fiable et attaque rapide.',
  power : 5,
  defense : 5
};

var specter = {

  name : 'Specter the Brancher',
  cost : 5,
  image : '',
  type : 'Cyber-Attacker',
  description : 'Creates a side channel exploiting branch misprediction and speculative execution so to extract information from processor cache, Plays well with some JavaScript JIT interpreters, Can summon his younger brother Meltdown if need be',
  abilities : '',
  flavorText : 'All your cores are belong to us !',
  power : 5,
  defense : 5
};

var deck1 = [ playerCard1, playerCard1, playerCard3 ];
var deck2 = [ playerCard4, playerCard5, playerCard6 ];
var deck3 = [ playerCard7, playerCard8, playerCard9 ];
var deck4 = [ playerCard10, playerCard11, playerCard12 ];
var deck5 = [ playerCard13, playerCard14, playerCard15 ];

/*
VPSven
hackerMan
neoTux
bonProgrammeur
specter
*/

var deck6 = [ VPSven, hackerMan, neoTux ];
var deck7 = [ neoTux, bonProgrammeur, specter ];

var scenario1 = {}, scenario2 = {}, scenario3 = {}, scenario4 = {}, scenario5 = {}, scenario6 = {}, scenario7 = {}, scenario8 = {},
scenario9 = {};

scenario1.hackerCard = hackerCard1;
scenario1.playerCards = deck1;

scenario2.hackerCard = hackerCard2;
scenario2.playerCards = deck2;

scenario3.hackerCard = hackerCard3;
scenario3.playerCards = deck3;

scenario4.hackerCard = hackerCard4;
scenario4.playerCards = deck4;

scenario5.hackerCard = hackerCard5;
scenario5.playerCards = deck5;

scenario6.hackerCard = hackerCard6;
scenario6.playerCards = deck6;

scenario7.hackerCard = hackerCard7;
scenario7.playerCards = deck7;

scenario8.hackerCard = hackerCard8;
scenario8.playerCards = deck1;

scenario9.hackerCard = hackerCard9;
scenario9.playerCards = deck2;

//var scenarios = [ scenario1, scenario2, scenario3, scenario4, scenario5 ];

var scenarios = [ scenario6, scenario7, scenario9 ];


// You can add new scenarios, but make sure that there is exactly...
// * 1 hackerCard per scenario
// * 3 playerCards per scenario

/*var scenarios = [
  {
    hackerCard : {
      description : "I set up a fake Wi-Fi station to steal people’s email and track them online.",
      power : 4,
    },
    playerCards : [
      {
        description : "I never use public wifi networks.",
        power : 5,
      },
      {
        description : "I browse the web, but I never do any personal business on a public wifi network.",
        power : 3,
      },
      {
        description : "I connect to any wifi network I can use in public.",
        power : 1,
      }
    ]
  },
  {
    hackerCard : {
      description : "I sent a fake email from your bank asking for your account details.",
      power : 3,
    },
    playerCards : [
      {
        description : "I checked the email address - the message didn’t come from my bank.",
        power : 5,
      },
      {
        description : "I never give out personal information in response to an email.",
        power : 4,
      },
      {
        description : "I sent the details you asked for so you could check on my account.",
        power : 1,
      }
    ]
  },
  {
    hackerCard : {
      description : "I figured out where you live from all the personal information you share on social media.",
      power : 3,
    },
    playerCards : [
      {
        description : "I never share personal information on my social media accounts.",
        power : 5,
      },
      {
        description : "I keep my accounts private so only my friends can see them.",
        power : 4,
      },
      {
        description : "I tag everything so my friends always know what I’m doing.",
        power : 1,
      }
    ]
  },
  {
    hackerCard : {
      description : "I watched you type your password and hacked your account.",
      power : 2,
    },
    playerCards : [
      {
        description : "I use different passwords for all of my other accounts.",
        power : 4,
      },
      {
        description : "I changed my password on all of my accounts because they are the same.",
        power : 2,
      },
      {
        description : "I deleted that account and started a new one. ",
        power : 1,
      }
    ]
  },
  {
    hackerCard : {
      description : "I looked at your browsing history on your phone to see what you do online.",
      power : 2,
    },
    playerCards : [
      {
        description : "I always use a private browser that never keeps my history.",
        power : 4,
      },
      {
        description : "I set my browser to delete my history every time I quit. ",
        power : 3,
      },
      {
        description : "I never clear my browser history because I don’t like typing in big web addresses.",
        power : 1,
      }
    ]
  }
];*/
