// Example TTS - "say"

// require "child_process" to run Child Process Applications
var exec = require('child_process').execSync;

function say(something, voice){
  // command = "say "; // "say" in this case is a built-in shell command on MAC OS.
  command = "say -v " + voice + " ";  //change the voice use this line
  exec(command + something);
}

say("If I hit it one time Ima pipe her\
If I hit it two times then I like her\
If I fuck three times Ima wife her\
It aint safe for the black or the white girls\
It aint safe\
It aint safe\
It aint safe\
It aint safe\
Tell your man pipe up\
Nigga pipe up\
Hunnit bands from the safe\
In your face, whatd you say?\
Money, dance\
Turn this shit into a nightclub\
Fuck with me and get some money, yeah ayy\
Fuck with me and get some money ayy\
Fuck with me and get some money ayy\
Fuck with G and get some money\
No limit Im a fucking soldier, ayy\
Always lit, yeah Im never sober\
Its been three days in a row, your bitch coming over\
Told that bitch to kick rock, she act like its a boulder, ayy\
Rari, shopping\
Let me, cop it\
Always, poppin\
Hella, poppin\
Shes a bopper\
Homie, hoppin\
Aint no, stopping\
Album, dropping\
Got the city on fire\
Bitch lying on me like she tired\
I might have to fuck around and call Kamaiyah\
Hoe stirring up the pot, Jambalaya\
Young Gerald\
If I hit it one time Ima pipe her\
If I hit it two times then I like her\
If I fuck three times Ima wife her\
It aint safe for the black or the white girls\
It aint safe\
It aint safe\
It aint safe\
It aint safe\
Tell your man pipe up\
Nigga pipe up\
Hunnit bands from the safe\
In your face, whatd you say?\
Money, dance\
Turn this shit into a nightclub" , "Alex");

say("Fuck him then I get some money\
Fuck him then I get some money\
Fuck him then I get some money\
Fuck him then I get some money" , "Victoria");

say("I need tongue\
I need face\
Give me brain, concentrate\
I go foam, product case\
Kill a weave, rock a lace\
Fuck the Moe\
Buy the ACE\
Fuck the Ghost\
Drive a Wraith\
Get some money, flood the Rollie\
Fuck the Rollie, patty face\
My career takin off\
These hoes jogging in place\
Swear these hoes run they mouth\
How these hoes out of shape?\
Can you stop with all the subs?\
Bitch I aint Jared\
If you really want some smoke\
You can pull up, you can get it\
Grab a hand full of braids, make a nigga eat me out\
Put a white boy on Sazón\
I might turn G-Eazy out\
Keep it G from the club til the end, from the spot\
You know me, Cardi B\
Pussy poppin on the charts\
If I hit it one time Ima pipe her\
If I hit it two times then I like her\
If I fuck three times Ima wife her\
It aint safe for the black or the white girls\
It aint safe\
It aint safe\
It aint safe\
It aint safe\
Tell your man pipe up\
Nigga pipe up\
Hunnit bands from the safe\
In your face, whatd you say?\
Money, dance\
Turn this shit into a nightclub" , "Alex");

say("Fuck him then I get some money\
Fuck him then I get some money\
Fuck him then I get some money\
Fuck him then I get some money" , "Victoria");

say("If I hit it one time Ima pipe her\
If I hit it two times then I like her\
If I fuck three times Ima wife her\
It aint safe for the black or the white girls\
It aint safe\
It aint safe\
It aint safe\
It aint safe\
Tell your man pipe up\
Nigga pipe up\
Hunnit bands from the safe\
In your face, whatd you say?\
Money, dance\
Turn this shit into a nightclub" , "Alex");

say("Fuck him then I get some money\
Fuck him then I get some money\
Fuck him then I get some money\
Fuck him then I get some money" , "Victoria");
