import React from 'react';

const DummyText = (props) => {
  let numParagraphs = props.numParagraphs;
  let theText = '';


  for (let i=0; i<numParagraphs; i++) {
    let randIndex = Math.floor(Math.random() * dummyTextArray.length);
    theText = theText + '<p>' + dummyTextArray[randIndex] + '</p>';
  }
  const theHtml = {__html: theText};

  return (
    <div dangerouslySetInnerHTML={theHtml}>
    </div>
  );
}

export default DummyText;

const dummyTextArray = [
  "Bacon ipsum dolor amet cow brisket boudin andouille pork belly. Burgdoggen tri-tip sausage ground round cupim. Boudin pig kielbasa bresaola flank meatloaf turducken. Frankfurter short ribs boudin beef, alcatra pancetta bresaola flank burgdoggen beef ribs kevin drumstick.",

  "Chicken venison beef ribs shoulder, porchetta boudin jerky pig ground round meatloaf picanha ribeye leberkas pancetta. Strip steak burgdoggen prosciutto kielbasa turducken tri-tip short ribs. Burgdoggen jowl leberkas filet mignon spare ribs tongue, pig doner turkey brisket cupim. Ground round biltong shoulder sausage, boudin tenderloin swine venison sirloin capicola brisket turkey beef. Tongue pastrami kielbasa, short loin ribeye salami cupim bacon cow beef biltong sirloin. Chicken capicola hamburger, prosciutto salami bacon picanha short loin pork chop corned beef tenderloin burgdoggen biltong. Shank turducken ham boudin bacon, tail biltong ham hock.",

  "Hamburger rump pork chop jowl ball tip, chuck leberkas ribeye pastrami pork belly filet mignon shankle. Hamburger swine pork belly filet mignon rump burgdoggen leberkas meatball. Corned beef spare ribs turkey, ground round alcatra brisket turducken pig andouille pork loin venison drumstick doner cupim. Leberkas biltong pork belly chicken cow, kielbasa chuck corned beef ham capicola landjaeger bacon. Bresaola kevin frankfurter chuck sausage turkey andouille doner shoulder bacon pig fatback. Meatloaf capicola shoulder, filet mignon pork loin shank kevin pork jerky. Turkey frankfurter filet mignon shankle, pig pastrami chuck boudin tongue ham drumstick jerky.",

  "Your bones  break, mine do. That\'s clear. Your cells react to bacteria and viruses differently than mine. You don\'t get sick, I do. That\'s also clear. But for some reason, you and I react the exact same way to water. We swallow it too fast, we choke. We get some in our lungs, we drown. However unreal it may seem, we are connected, you and I. We're on the same curve, just on opposite ends.",

  "You see? It\'s curious. Ted did figure it out - time travel. And when we get back, we gonna tell everyone. How it\'s possible, how it\'s done, what the dangers are. But then why fifty years in the future when the spacecraft encounters a black hole does the computer call it an \'unknown entry event\'? Why don\'t they know? If they don\t know, that means we never told anyone. And if we never told anyone it means we never made it back. Hence we die down here. Just as a matter of deductive logic.",

  "Like you, I used to think the world was this great place where everybody lived by the same standards I did, then some kid with a nail showed me I was living in his world, a world where chaos rules not order, a world where righteousness is not rewarded. That\'s Cesar\'s world, and if you\'re not willing to play by his rules, then you\'re gonna have to pay the price.",

  "Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it? Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it? No? Well, that\'s what you see at a toy store. And you must think you\'re in a toy store, because you\'re here shopping for an infant named Jeb.",

  "The lysine contingency - it\'s intended to prevent the spread of the animals is case they ever got off the island. Dr. Wu inserted a gene that makes a single faulty enzyme in protein metabolism. The animals can\'t manufacture the amino acid lysine. Unless they're continually supplied with lysine by us, they'll slip into a coma and die.",

  "Well, the way they make shows is, they make one show. That show\'s called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs. Some don\t, become nothing. She starred in one of the ones that became nothing.",

  "Now that we know who you are, I know who I am. I'm not a mistake! It all makes sense! In a comic, you know how you can tell who the arch-villain\'s going to be? He\'s the exact opposite of the hero. And most times they're friends, like you and me! I should've known way back when... You know why, David? Because of the kids. They called me Mr Glass.",

  "Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven\t seen you in a year. And the good thing about dogs... is they got different dogs for different people. Like pit bulls. The dog of dogs. Pit bull can be the right man\'s best friend... or the wrong man\'s worst enemy. You going to give me a dog for a pet, give me a pit bull. Give me... Raoul. Right, Omar? Give me Raoul.",

  "The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother\'s keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee.",

  "Hella art party fashion axe pork belly, raw denim letterpress woke wolf tilde lo-fi kale chips lumbersexual. Air plant hexagon fixie synth church-key you probably haven't heard of them, fashion axe kinfolk hashtag snackwave umami. Fashion axe hella before they sold out, seitan pabst unicorn pitchfork pour-over. Kombucha yuccie lumbersexual readymade austin, intelligentsia quinoa. Man braid tofu unicorn, freegan polaroid VHS sriracha meh mixtape heirloom. Leggings hell of craft beer ramps, four loko fam typewriter umami williamsburg shoreditch master cleanse yuccie. DIY brooklyn bushwick tumeric neutra.",

  "Ennui man bun beard lyft. Cornhole next level prism, af mixtape twee vexillologist photo booth seitan craft beer retro ethical woke. Retro pop-up thundercats, wolf skateboard shabby chic salvia tbh migas four loko brunch whatever locavore af. Affogato thundercats etsy crucifix ethical meggings. Stumptown gluten-free lyft, marfa intelligentsia fam narwhal direct trade slow-carb af everyday carry. Typewriter ethical vinyl, drinking vinegar iPhone cornhole slow-carb. Echo park hell of prism woke, gentrify edison bulb brooklyn slow-carb tacos put a bird on it la croix.",

  "Normcore gluten-free post-ironic, kinfolk farm-to-table brunch cronut kitsch 8-bit schlitz. Disrupt roof party messenger bag viral etsy affogato. Stumptown sartorial wayfarers drinking vinegar, beard tumblr dreamcatcher lumbersexual snackwave irony hashtag vexillologist PBR&B cold-pressed. Tilde single-origin coffee fixie crucifix chicharrones, cardigan franzen chia hexagon lomo blog shoreditch echo park. Occupy marfa lo-fi, ethical austin vinyl actually. Everyday carry fashion axe next level, forage put a bird on it synth subway tile biodiesel intelligentsia jianbing edison bulb squid pitchfork tacos. Fashion axe tote bag messenger bag, lomo street art aesthetic kickstarter vaporware williamsburg polaroid cold-pressed schlitz migas leggings 8-bit.",

  "Jean shorts gastropub bitters bespoke, pabst taxidermy pug lo-fi selvage hoodie trust fund tofu gochujang readymade. YOLO selvage shabby chic street art plaid. Franzen lyft vexillologist, fam truffaut selfies prism. Sriracha woke vice, shoreditch marfa kinfolk single-origin coffee VHS chartreuse tofu keytar four dollar toast locavore enamel pin. Hella before they sold out activated charcoal, tbh cray tumblr edison bulb biodiesel authentic VHS bicycle rights bushwick selfies. Sustainable banjo cronut, pok pok waistcoat truffaut quinoa squid jean shorts gluten-free PBR&B sartorial mumblecore. Pok pok post-ironic shoreditch, sriracha butcher tattooed gentrify franzen gochujang kombucha plaid slow-carb.",

  "iPhone forage distillery kinfolk tumeric, direct trade small batch trust fund occupy whatever +1. 8-bit tbh readymade, quinoa polaroid godard cred occupy. Chillwave cliche pinterest, typewriter fanny pack vegan flexitarian listicle 8-bit tofu master cleanse raw denim church-key. Squid locavore fashion axe chambray, coloring book pitchfork 3 wolf moon art party. Heirloom vaporware copper mug, waistcoat cornhole selfies wolf lomo marfa vexillologist lo-fi celiac. Keffiyeh kombucha glossier, fanny pack copper mug truffaut readymade church-key sartorial snackwave knausgaard. Occupy neutra venmo cold-pressed.",

  "Halvah powder chocolate bar cake cake chocolate soufflé. Donut gingerbread jujubes marzipan lollipop cheesecake. Sugar plum lollipop lollipop. Lemon drops dessert cheesecake tart cookie brownie marzipan biscuit.",

  "Sugar plum jelly candy cake toffee wafer cake. Muffin topping donut gummi bears cake. Pie cheesecake donut pastry dessert gummi bears sesame snaps biscuit jelly beans. Lemon drops toffee caramels chocolate bar.",

  "Pastry soufflé topping macaroon. Muffin candy dessert ice cream. Dragée dessert chocolate bar halvah gingerbread sesame snaps sugar plum.",

  "Tiramisu macaroon powder jelly pastry croissant sugar plum wafer cupcake. Icing chocolate brownie. Jujubes candy muffin croissant candy sweet roll.",

  "Chupa chups gummies bonbon cookie caramels. Ice cream sweet roll tart donut biscuit candy chocolate bar caramels toffee. Pie pastry tootsie roll gummies gummies ice cream sweet roll liquorice croissant."
];
