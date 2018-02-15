const pwrEvents = [
  {
    name: "Slamhain",
    shortform: "slamhain",
    date: "10.04.2014",
    vimeo: "https://vimeo.com/108266188",
    desc: "This is one of the worst ideas we've had - Jared B",
    location: "The Sanchez Center",
    facebook: "https://www.facebook.com/events/744287595618034/"
  },
  {
    name: "Winter Wonderslam",
    shortform: "winter-wonderslam",
    date: "12.06.2014",
    vimeo: "https://vimeo.com/114628791",
    desc: "Winter Wonderslam occured on December 6, 2014 at the Sanchez Center (RIP). Slamta Claus kept us safe and full of beer. Dan the Man taught us the meaning of true treachery. And we lost a legend in Victor Von Vang (also RIP). It is a night we will not, cannot and must not forget.",
    location: "The Sanchez Center",
    facebook: "https://www.facebook.com/events/1539843909580411/"
  },
  {
    name: "Wrestleslam I: The Riots of Spring",
    shortform: "riots-of-spring",
    date: "03.07.2015",
    vimeo: "https://vimeo.com/126592095",
    desc: "PWR is Austin's premier party wrestling federation, and this will be our wildest event yet. Chant, party and go totally bananas as people fall onto eachother in a vaguely wrestling-oriented fashion! Prepare for a Spring renewal of rasslin' entertainment! Heads will explode into satyrs! The leaves of every tree will inexplicably become pan flutes! Fauns will happen! Life itself will shine forth from the squared circle.",
    location: "Midway Field House",
    facebook: "https://www.facebook.com/events/759764607448160/"
  },
  {
    name: "Summer Slamdown II: Judgment Slam",
    shortform: "judgement-slam",
    date: "06.27.2015",
    vimeo: "https://vimeo.com/135966473",
    desc: "While humans melt into fluid under the brutal sun, one creature stands like an iron sentinel. A machine. The ultimate wrestling cyborg. Pure hatred of humanity surges behind its cold red eyes. This cybernetic monstrosity faces us all with a gavel in hand, ready to pass a trve and final judgment. The charges? 69 counts of Wrestling atrocities and unregistered party violence. How do we plead?",
    location: "Midway Field House",
    facebook: "https://www.facebook.com/events/1619213138291756/"
  },
  {
    name: "Darkwar",
    shortform: "darkwar",
    date: "10.10.2015",
    vimeo: "https://vimeo.com/145387505",
    desc: "In the grim darkness of the far future, all wrestlers are systematically hunted and pinned by machines. PARTY VIOLENCE is illegal. WORK VIOLENCE is mandatory. Huge a-SLAM-bly lines spread for miles across the wasteland. The last surviving humans are mechanically body-slammed one after another in a grotesque mockery of the factories that once held machines subservient to mankind. This is the distant future. This is 2017. This is a future where a robot--DEEP SLAM--is the PWR PARTYWEIGHT Champion.",
    location: "4th Tap Brewing Co-op",
    facebook: "https://www.facebook.com/events/762792337176145/"
  },
  {
    name: "Winter Wonderslam II",
    shortform: "winter-wonderslam-ii",
    date: "12.12.2015",
    vimeo: "https://vimeo.com/153455383",
    desc: "What's cooler than being cool? ICE-COLD! The CRUELTIDE season is here. The wheat must be separated from the chaffe, the tinsel from the coal, and the POWERFUL from the COWERFUL!",
    location: "4th Tap Brewing Co-op",
    facebook: "https://www.facebook.com/events/772227636220579/"
  },
  {
    name: "Wrestleslam II: WRESTLEVANIA",
    shortform: "wrestlevania",
    date: "03.12.2016",
    vimeo: "https://vimeo.com/163401688",
    desc: "It's been a full year since the last WRESTLESLAM, and Spring again rears its antlered head. The green, fecund hammer of March crushes the last vestiges of the cold February. The scent of budding flowers floats heavy in the air. Dogs are everywhere, and they're all pretty happy. Yet, in the midst of the season's joyful meadow, one gothic edifice stands - darkened and ominous. One building defies the jubilant vernal radiance...CASTLE HELLSPORT!",
    location: "4th Tap Brewing Co-op",
    facebook: "https://www.facebook.com/events/1541837162797155/"
  },
  {
    name: "Kevin Pleasurekevin's PLEASUREFEST: An Evening Of Non-Violence And Splendor",
    shortform: "pleasurefest",
    date: "06.11.2016",
    vimeo: null,
    desc: "Kevin Pleasurekevin, gracious patron of the pleasure arts and universal friend to glamour, has given the multiverse his divine sponsorship of PLEASUREFEST, a night of strictly-enforced theatrical NON-violence! For Mr. Pleasurekevin, we are ALL TALK, NO ROCK!",
    location: "Museum of Human Achievement",
    facebook: "https://www.facebook.com/events/1013917338646253/"
  },
  {
    name: "Slip 'N' Slam",
    shortform: "slip-n-slam",
    date: "07.09.2016",
    vimeo: "https://vimeo.com/181642020",
    desc: "The obstacle course of the ages lies before you. A wet, banana-yellow stretch of vinyl serves as both path and vehicle. Slide upon it with penguin-like grace, barely dodging scewering spikes and stomping cartoon feet! Twin rollers wring you out like a towel into a semi-soft crevasse. Don't get too comfortable - you're sinking in a congeries of dayglo orbs! You desperately paw your way out, coming aground of mankind's last and ultimate challenge – THE CRAGGROCRAG!",
    location: "4th Tap Brewing Co-op",
    facebook: "https://m.facebook.com/events/499568106897133/"
  },
  {
    name: "Slamhain III: Skeleton Cruise",
    shortform: "skeleton-cruise",
    date: "10.08.2016",
    vimeo: "https://vimeo.com/194045837",
    desc: "A submerged wrestling ring...an unearthed treasure...an ancient curse...barnacled goblins...skeleton pirates...At any other time of year, these things would terrify us. But October is the season of SLAMHAIN - when ghosts are our friends and bones our buds! It's time to FACE OUR FEARS and ASSAIL THE SEVEN SEAS! It's time to witness spine-shattering, scapula-cracking, rib-popping rasslin spectacle aboard a sunken ship! With invincible spirits, it's time to embark... on a SKELETON CRUISE!",
    location: "4th Tap Brewing Co-op",
    facebook: "https://www.facebook.com/events/1669319156723934/"
  },
  {
    name: "Winter Wonderslam III",
    shortform: "winter-wonderslam-iii",
    date: "12.10.2016",
    vimeo: "https://vimeo.com/203522454",
    desc: "The bell-tines of the WINTERSONG call out, cutting a steely clarion through the night. SLAMTA CLAUS sits perched on an oaken throne, intoning the notes like razor-sharp, errant snowflakes. His hand extends out. His finger points. But not at you...it points...DOWN? He is pointing to a huge hole in the ground - the ingress to THE ICY LAIR!",
    location: "4th Tap Brewing Co-op",
    facebook: "https://www.facebook.com/events/536663603188874/"
  },
  {
    name: "Darkwar II",
    shortform: "darkwar",
    date: "03.11.2017",
    vimeo: "https://vimeo.com/217253569",
    desc: "Welcome to 2017 - a chrome dystopia we thought we'd escaped. Dark, crowded buildings crush the skyline. Hyper-liminal neon ads wash out the horizon. DEEPSLAM - the most insidious artificial intelligence ever programmed - is back. Its goal? TOTAL HUMAN ENSLAVEMENT. SLAMBOTS round up rogue rasslers, bodyslamming and pinning them in a perfunctory and unsporting display. This is WORK VIOLENCE. ",
    location: "4th Tap Brewing Co-op",
    facebook: "https://www.facebook.com/events/339519859765145/"
  },
  {
    name: "Dinoslam",
    shortform: "dinoslam",
    date: "06.17.2017",
    vimeo: "https://vimeo.com/229167435",
    desc: "Two titans circle eachother on a rocky steppe. One has a 3-horned, crested head. The other is like a huge dog on its hind legs, but covered in thick hide and cartilaginous ridges. It bares massive, razor teeth. Blood spurts as these monsters collide. Gathered crowds of cave people howl and cheer in an ecstacy of pure terror. They swill mind-blasting gruit from fat, twisted gourds.This was America's first wrestling match...the ultimate primal spectacle...the SLAMS BEFORE TIME!",
    location: "4th Tap Brewing Co-op",
    facebook: "https://www.facebook.com/events/405244896500242/"
  },
  {
    name: "Slamhain IV: Brawl of the Wild",
    shortform: "brawl-of-the-wild",
    date: "09.16.2017",
    vimeo: null,
    desc: "We had a really great spot picked out for this next one - a magical grove, hushed and peaceful! With Autumn approaching, what could be better for a party than an Enchanted Forest?! But our car broke down on the way there! Instead of the Enchanted Forest, we set up camp in the EnSLAMted Forest! This forest is HAUNTED!",
    location: "4th Tap Brewing Co-op",
    facebook: "https://www.facebook.com/events/1880748745520219/",
    long: `<h2>Holy Crud It's A Haunted Forest!</h2>
      <p>[This Fall Wrestling party is FREE and all-ages. 21+ to drink. Content may not be suitable for kids].</p>
      <p>We had a really great spot picked out for this next one - a magical grove, hushed and peaceful! With Autumn approaching, what could be better for a party than an Enchanted Forest?!</p>
      <p>But our car broke down on the way there! Instead of the Enchanted Forest, we set up camp in the EnSLAMted Forest!</p>
      <p>This forest is HAUNTED!</p>
      <p>This forest is so haunted, you can't believe it. The trees have twisted, scowling faces. Giant cobwebs stretch for miles. Witches tempt kids into their mouldering cabins...to cook them!</p>
      <p>NO, IT CANOPY!</p>
      <p>Forget about the rain forest, this is the PAIN FOREST! There's disembodied spirits, skeletons a plenty, twisted, clawing branches...</p>
      <p>AND A WRESTLING RING MADE OF ANCIENT OAK AND VINES!</p>
      <p>That's the spot! That's where the wrestling happens!</p>
      <p>PERIOD!</p>
      <p>Goblin suplexes...Baba Yagas doing backflips! Brownies and sprites bodyslamming eachother from tree to tree! It's crazy and illegal, as usual!</p>
      <p>We're Goin' BOG WILD!</p>
      <p>Exult with us in an Autumnal Equinox celebration! Let's tempt the forces of darkness and once again revel in their failure to consume us. Join your flesh to the vast root network that pumps and pulses with the heart of the night! The huge trees reach their nasty fingers up, up, up...But we battle below, drinking beer and wrestling hard!</p>`
  },
  {
    name: "SpaceSlam",
    shortform: "spaceslam",
    date: "12.09.2017",
    vimeo: null,
    desc: "Space...The heavenly firmament, the cold and inky galactic vice! The nebular starhome, the yawning void, the dome of trapped lights! Grandpa's night-ceiling, the big-time planet hole! The Cosmos! Forever it squeezes our tiny Earth - forever it taunts us with a hollow voice, a voice we are all born hearing. \"Who dares venture into the forbidden darkness?\" it says. Finally, after millenia of silence, we answer: \"Us!\" We scream. \"We dare!\" No more will we surrender to the angst of being an Earth-bound people! We will finally claim our destiny as children of the stars! Hey, the Galaxy, do YOU dare take on humanity... IN THE RING?!",
    location: "4th Tap Brewing Co-op",
    facebook: "https://www.facebook.com/events/1686280844724620"
  },
  {
    name: "Wormquest",
    shortform: "wormquest",
    date: "3.17.2017",
    vimeo: null,
    desc: "You've messed with the best now mess with the QUEST",
    facebook: ""
  }
]

export default pwrEvents
