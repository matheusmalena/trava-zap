async function enviarScript(scriptText){
	const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
	main = document.querySelector("#main"),
	textarea = main.querySelector(`div[contenteditable="true"]`)
	
	if(!textarea) throw new Error("Não há uma conversa aberta")
	
	for(const line of lines){
		console.log(line)
	
		textarea.focus();
		document.execCommand('insertText', false, line);
		textarea.dispatchEvent(new Event('change', {bubbles: true}));
	
		setTimeout(() => {
			(main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
		}, 100);
		
		if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
	}
	
	return lines.length;
}

enviarScript(`
Surf's Up Script
  
  
Quiet on the set. And we're rolling.

  
Cody Maverick interview, take one.

  
Why are you guys here
to interview me?

  
It's what we do.
We're a reality film crew.

  
Should I know some of the questions
before we start?

  
- No. They're easy.
- Okay.

  
- Can you stand on that box, please?
- Oh, yeah.

  
Right there? What is that?

  
- What is that?
- A sound thing. It's a microphone.

  
What's up, man? I'm Cody.

  
And you're what, 14, 15 years old?

  
Seventeen years of age.

  
And any other skills
besides surfing?

  
Like what?
Like singing and dancing?

  
Yeah. Yeah.

  
No, not me, man. I just surf.

  
- Loser.
- I just...

  
Cut it out, Glen. Stop, man.

  
We're here to make
a movie about Cody.

  
- Does he have to be here?
- It's gonna be great.

  
Can I get in line now to not see it?

  
We'll re-slate.

  
Since we're talking about surfing,
give us your thoughts about surfing.

  
Surfing. Surfing.

  
- Where do I start?
- How about at the beginning?

  
Okay, well...

  
So as soon as there was the first wave,
right? There was the first surfer.

  
All they needed was, like,
a piece of driftwood...

  
...a block of ice or something like
that, and then they were off.

  
And they were hooked, man.
They were hooked.

  
Up till recent times, you had
your old dudes. Your hang-six cats.

  
These old guys used to lay down
with these huge, humongous boards.

  
These guys were the pioneers...

  
...but nobody saw
what surfing could really be...

  
...until Big Z did it.

  
- Could you tell us who Big Z was?
- Who was Big Z?

  
You're asking the right guy.
You got that far. Z is everything.

  
Big Z is surfing.
I mean, he's...

  
There may well as not have been
an ocean before Z.

  
They invented the ocean for him.

  
He lived so hard
because he wasn't afraid to live.

  
He wasn't afraid to die.

  
He came to Antarctica
when I was just a kid.

  
Man, it was the biggest thing
that ever happened here.

  
And suddenly there he was.

  
Just floating over the water.
Hovering, you know, like weightless.

  
He could've walked up to anyone...

  
...and he walks right up to me.

  
And he gives me this awesome,
one-of-a-kind Big Z necklace.

  
And then he tells me,
"You know, kid, never give up.

  
Find a way,
because that's what winners do."

  
He was the greatest.

  
Everyone looked up to him,
respected him, loved him.

  
And one day, one day
I'm gonna be just like him.

  
And I've been surfing
ever since I can remember.

  
It's hard to imagine my life
when I wasn't surfing.

  
I want to get out of here,
and this is my ticket out.

  
I'm really good, man.
I'm the best on the island.

  
I know it sounds cocky for saying that,
but, I mean, I am, like the best.

  
I was born and raised here
in Shiverpool.

  
Lived here my whole life.

  
That's where they sort the fish. It's
the dumbest thing I've ever heard of.

  
But yeah, I worked there
just to pacify my mom a little bit.

  
Good old Shiverpool.

  
This place sucks, bro.

  
I worked my way up from the sardine
pile, then to the mackerel pile...

  
...and I ended up
on the gefilte fish pile.

  
- All hard work.
- Not like some I could mention.

  
Yes, this farkakte kid
with the thing on the water.

  
My house?

  
Over there. You see it
right there with the surfboards?

  
Yeah, I just live here with me
and my brother, Glen, my mom.

  
He was a little, teeny, small egg.

  
He wasn't very impressive.

  
Glen was the big egg,
Cody was the small egg.

  
He can't help it.
That's just the way he is.

  
I mean, he's out there...

  
...in the water all day
shirking his responsibilities.

  
You know, hatching these eggs
is a big responsibility.

  
And my brother, Cody,
he just doesn't understand that.

  
- He needs to step up and be a man.
- It takes a real man to sit on an egg.

  
- You know it.
- Quincy, come to Daddy.

  
He wants to be different.
All the time with the different.

  
Who's got the time in the day to...

  
Only six months in a day.

  
- Thanks for making it.
- Sorry. It was too good to miss.

  
- Thanks for making it.
- How was it out there?

  
He's the big brother.
I'm the little brother.

  
I'm not touching you.

  
- Not gonna touch you.
- Do you see this?

  
- Don't. Please?
- I'm not.

  
He makes sure that I know that.

  
I had to fight for everything.
Even Mom's tuna casserole.

  
I'm lucky I survived.

  
It really wasn't that easy
for him growing up.

  
Like I said before...

  
...he never really knew his father.

  
I'm not really the person to ask about it
because I was too young to remember.

  
Look, I'm not the only kid
on the island...

  
...whose dad was, you know, eaten.

  
- Still, it had to be traumatic.
- No. Not for me, bro. Not for me.

  
- What's your dream?
- To go away.

  
- To go away. That's great.
- Do you guys want a drink?

  
Got to run away
from responsibility and life.

  
This is unique.

  
- This is not the norm.
- "I have dreams."

  
- When is this not happening?
- Don't make that noise.

  
- Cody!
- It's really disrespectful.

  
I would never do that.

  
You just wouldn't make it
out of your mouth.

  
That's the difference
between you and me.

  
You know what?
I can't do this anymore.

  
Mom. Look what you did.

  
This is for me. This isn't for you.
Why is Glen still here?

  
Oh, yeah, exactly. Mom!

  
I don't understand why
everybody's so judgmental.

  
I understand why Mom's judgmental.

  
I think it's because she cares,
partially. It's also partially because...

  
...everyone else is looking at her like,
"Hey, Cody's just a bum.

  
Cody's this. Cody's that.
Cody's this."

  
Cody's me, bro. Let me be me.

  
When is that gonna start?

  
You know what they call me?
The dream maker. The dream maker.

  
I find these kids,
I bring them here...

  
...and I give them a chance
to be somebody.

  
You know my greatest joy
as a surf promoter? Finding Z.

  
Watching him rise to the top.

  
I still can't believe he's gone.
He was like a son to me, you know?

  
It was a heart thing, you know?
Can we just take five minutes?

  
How's my hair? Is it messed up?
I ain't got all day. Is it mussed?

  
We just have a few more questions
about Big Z.

  
But right now
I think we're more interested...

  
...in the Reggie Belafonte story,
and who could blame us?

  
But Big Z is kind of the focus
of our...

  
Let's get the coconut filler guy
over here.

  
And how about the guy
sweeping the sand?

  
Can we hear your boring story
about your tedious, ridiculous life?

  
Get your feathers off it! Stop!

  
I ain't got all day.
I got a big production here.

  
Roll, okay? Just roll!

  
Welcome, fans, to another edition
of SPEN Sports.

  
This is Sal Masakela...

  
...and we're here at the surfing capital
of the world, Pen Gu Island...

  
...for a preview of the tenth annual
Big Z Memorial Surf-Off.

  
Professional surfers
extraordinaire...

  
...Kelly and Rob tell us...

  
...what challenges
our surfers are going to face.

  
First things first, Sal. The wave.
It's the perfect combination...

  
...of beauty and danger. Even
the pros are terrified of this place.

  
Hi, Mom.

  
Dig this, Sal. Section behind me.

  
It's "The Boneyards."
Few surfers have ventured in there...

  
...and come out alive.

  
Are you trying to tell me
people have died here?

  
- That's right, Sal.
- A moment of silence for them.

  
And we keep it moving because
if the Boneyards was not enough...

  
...our surfers will be facing off with
Tank "The Shredder" Evans.

  
Tank, nine-time defending champ.

  
A role model? No.

  
But I do consider myself somebody
that everyone should look up to.

  
Kids should try to pretend
that they're Tank.

  
I mean, they should try.
Good luck, kids.

  
You never want to get in there
and help them out...

  
...and show them how to surf
and spend some time with the kids?

  
No, I don't want to do that.

  
- Anyway, this is my wave.
- Always classy Tank Evans.

  
Coming up after the break,
penguin dodge ball. Stick around.

  
Okay, to get back to the competition,
I just want to say:

  
I'm scouring the globe
for the next big thing.

  
But that's another story.

  
He doesn't look for them.
I find them.

  
I find these penguins.
I find the talent.

  
Reggie has sent me everywhere
on this trip.

  
Anyplace there's an ocean...

  
...a lake, a puddle.
It's ridiculous.

  
I am on so much migraine medication,
you have no idea.

  
The stress is killing me. I don't know
how much longer I can last.

  
I have to tell you that right now.

  
You gotta try
this blowhole thing, man.

  
This whale dude
is giving me a brain freeze.

  
I lost a bet.

  
Excuse me. Excuse me.

  
Does anybody
in this entire frozen wasteland surf?

  
- The Cody Maverick kid does that.
- Wonderful. Thank you.

  
You know, you're sitting on...
thin ice.

  
Excuse me, I'm looking for...
I'm looking for Cody Maverick.

  
- Has anyone seen Cody Maverick?
- I'm Cody Maverick.

  
Mike Abromowitz from the Big Z
Memorial Surf-Off, Pen Gu Island.

  
You came here on a wha...
You came to see me. Wow!

  
- Quite a slip-and-slider, aren't you?
- You're here. What an honor, sir.

  
Lovely. Wonderful. I hear you surf.

  
- Is this true?
- You gotta see what I can do.

  
- You can actually stand on a board?
- I'll be back.

  
You're gonna see what I can do
everything's gonna be good...

  
...and I'm coming with you.
- I can't imagine a better day.

  
Ma! Ma, he came... the scout.
Mikey. He came. He's here.

  
- What? Yeah.
- He's giving me a shot now, Ma.

  
You want to come watch me surf?

  
- No, that's okay.
- Just this time.

  
- I'm busy. I'm chopping here.
- Okay. All right, well, wish me luck.

  
Cody, just be careful
of those big waves.

  
Well, anytime now.

  
You should have been here yesterday.
We had a sweet swell yesterday.

  
I was doing some layback 360s
and floaters. It was insane.

  
Wow! Start the whale.

  
No! Wait! Wait!
Just give me one more chance.

  
- All I need is one, please.
- You just had it.

  
- Dude, please don't go.
- Tough break, kid.

  
- Just wait one second.
- Better luck next year. Move it.

  
- Let's go. He's coming!
- Just one wave. That's all I need.

  
I've never won anything
my whole life.

  
Just once I want to feel like a winner.

  
I used to scout songbirds. Toucans
for this musical revue in Brazil.

  
Now that's show business.
Toucans...

  
Hold on!

  
I don't care what you say,
I'm coming to Pen Gu!

  
No way, no how.
This is a contest for big-wave surfers.

  
Can't this blubber ball go any faster?
Step on it, fish sticks!

  
No, no, no, no!

  
Poor kid. I feel bad a little bit.
Honestly, this is embar...

  
No, wait! Wait!

  
Did you guys see that?
He almost had my board!

  
He almost had it.
Next time we'll get it.

  
- Yeah, so anyway...
- Wait!

  
We got you. We got you.
Oh, you are heavier than you look.

  
- Man, we did it.
- Thank you.

  
Teamwork always pays off.

  
- I'm Chicken Joe, man.
- Thanks, Joe.

  
Don't you ever, ever, do anything
like that in the contest, all right?

  
- I'm in?
- Yeah, you're in.

  
Because that was entertaining,
in a horrifying sort of way.

  
Right on, dude.

  
My name's Cody Maverick,
Shiverpool. You?

  
No, I'm not from Shiverpool.

  
- Where are you from?
- Dude, I'm from Lake Michigan.

  
That's where I surf.
I was the only one...

  
...around my town who did it.

  
A lot of people thought
I was crazy, but I'm used to that.

  
- I know how you feel, Joe.
- You do?

  
- Yeah.
- Radical.

  
- Butt freeze!
- Somebody help the chicken.

  
Look out!

  
Slater, Machado.
How's it going, bros?

  
- Good. Thanks.
- What's up, buddy?

  
Okay. Later, dudes.

  
Radical.

  
Dude, look where I'm standing.
I'm standing where Z stood.

  
- Aw, man.
- Dude, you gotta try this.

  
- No, I'm okay.
- Come on. Just one bite.

  
All right. One bite, that's it.

  
Yeah, yeah? What do you think?

  
It's not bad.
It kind of tastes like chicken...

  
Yep. What's chi-chi?

  
Coming through! Oh, crap.

  
Oh, man. I'm in love.

  
Help me! I'm drowning!

  
What are you standing here
next to me for? Go talk to her, man.

  
- I'm not gonna talk to her.
- She's digging on you.

  
- She called you crap.
- Joe.

  
- Thanks again.
- All right, well...

  
...this is the third time
you've been unconscious this week.

  
I just don't think
it's very good for your brain.

  
- I know. Bye, Lani.
- Okay.

  
Yeah, that was awesome
how you saved his life and all.

  
That was just unbelievable. Really.

  
You here for the surf contest?

  
- Well, I'll be watching you.
- Really? You'll be watching me?

  
Well, yeah,
from the lifeguard station.

  
- Yeah. Right.
- It's my job.

  
- That's your job.
- Are you gonna kiss her?

  
- What's going on?
- Come on, Joe.

  
- You were saying you were in love...
- No, I didn't say that.

  
- Look, he really digs you.
- Joe, listen...

  
He likes you, though. See you.

  
I love my job.
I have an amazing job.

  
Just this week, with the contest...

  
...it's a little crazy. You really
have to be extra, extra attentive.

  
When you have so many guys
in the water you can't miss a thing.

  
But you know what? I have a perfect
record. I've never lost anybody.

  
Sure, there have been
close calls, but...

  
- Help!
- Oh, Arnold. I turn my back for one...

  
- Just lay some feeling on her.
- How do you mean?

  
- Through words. Through touch.
- Walk me through the approach.

  
- I'm Lani. You're me.
- You sure about that?

  
- I get real serious.
- Let's not. Let's not.

  
- Whoa.
- What is it?

  
That's it! That's Big Z's shrine.

  
- Remember?
- No, no. Not really.

  
Today, the world of surfing
lost one of its legends.

  
Big Z took his final ride
this morning...

  
...during a competition with
up-and-coming surfer Tank Evans.

  
Z was last seen paddling into
a massive swell off Pen Gu Bay.

  
Friends of Big Z gathered
to remember and celebrate his life.

  
Great shot!

  
What? Hey!

  
- Every time.
- He's got a pretty good throwing fin.

  
Stop doing... Stop it! Cut it out!

  
- That's like three in a row.
- Here, give it a shot.

  
What? Wait a minute. Look at this.

  
- Don't. Stop it.
- It's a Big Z necklace.

  
That's not funny. Stop.
Stop! What are you doing?

  
Look, everybody, it's Big Z's last fan!

  
Coming through.
Out of the way. Let's go.

  
- You don't deserve to talk about him.
- He's a big zero.

  
- Shut your mouth!
- Zero starts with "Z"!

  
You'll never be
as good as Big Z, Stank.

  
Hey, hey, people, come on now.
Smile on your brother.

  
- Keep your girlfriend out of this!
- You can't do that to my friend.

  
You're getting quite a workout there.
That feels good.

  
Why don't you work on my glutes
a little bit? That's very nice.

  
- All right. That's enough, guys.
- I'll take you on anytime, anywhere.

  
Well, then how about
right here, right now, huh?

  
Hey, Mikey, get this kid a board!

  
All right, who wants to see
the little guy take on the champ?

  
Little guys rule!

  
A little one-on-one surfing action
between Tank Evans and Jerry...

  
- Cody. Cody.
- Cody Maverick.

  
Cody Mavencourt. And the one
that rides the biggest wave wins.

  
Are you nervous
about going against Tank Evans?

  
Ah, Tank. Nervous?
What do I have to be nervous about?

  
Give it up! Come on, now!

  
I'm gonna chum the water
with your head.

  
- Bring it on, pecker face. Let's go.
- Pecker face?

  
It's mine!

  
So, Cody, when you take
your first wave...

  
...and the whole island's there
to watch, what'll it be like?

  
It's gonna be amazing.
It'll be the best wave of my life.

  
I hope the cameras are rolling
because you'll want to watch it...

  
...over and over and over again.
It's gonna be awesome!

  
I can't look.

  
- Poor kid. He's... Poor kid.
- Wow! That was spectacular!

  
I'm number one! The Tank!

  
We're trying to get the details.
The lifeguard just pulled him in.

  
That's what happens
when you take on the Tank, right?

  
Cody, Cody!

  
- How is he? Okay? What can I do?
- Yeah, he's okay.

  
I can help. Except if there's blood.
Just the thought of blood makes me...

  
Somebody help the chicken.

  
- Tank, you okay?
- Tank needs fuel.

  
Mikey, get the board, will you?

  
Come on. Come on. Come on.

  
- Did I win? I won, huh?
- You should've stayed in Antarctica.

  
- Oh, wow.
- You're gonna be okay.

  
Look at that.
There's pixies everywhere.

  
What do you think about Cody going
into a contest and possibly winning?

  
- You know, I'm...
- Ha.

  
- Why did you just laugh?
- Because he keeps saying "possible."

  
Like it's "possible" that you're gonna
win. And you're gonna do anything.

  
- Really, what are the chances?
- They're high. Aren't they high?

  
I mean, they're normal chances.
It's not like I'm, like, the underdog.

  
Hey, Geek! Geek!
Get up and help me.

  
Geek.

  
Geek?

  
Geek. Wake up! I need your help.

  
Come on. Get off your lazy butt
and come and help me.

  
Beautiful dream.

  
- Did you ever know Sheila?
- No. I don't know Sheila.

  
- Wait, wait, wait. What?
- What?

  
Who's this guy?

  
- He's a surfer. He's hurt.
- Who are all those guys?

  
They're with him. Ignore them.

  
- Come on.
- Lani, what are you doing?

  
If you help him, they'll go away.

  
- Hey! Get out of here!
- Help him!

  
- Where do you want him?
- Nowhere. That's the whole point.

  
- No outsiders. Come on.
- I know, I know, I know.

  
This is an emergency. He went down
bad over the falls. I don't know if he...

  
- And did he hit the reef?
- I don't know.

  
I'm not sure. I got him after...

  
- What, is he your boyfriend?
- No. No.

  
Wait, wait, wait.
Looks like he stepped on a fire urchin.

  
Stepped on me? Are you kidding?
This guy was dancing on me.

  
Just look at this. Broken, broken,
gone, gone, broken, broken, broken...

  
This is pretty bad.
This is really bad.

  
- What... Cody!
- I hurt.

  
- You're gonna be okay. What?
- Maybe I shouldn't have taken that out.

  
Poison's released. Wow. Amazing.

  
- What's amazing?
- That you're still alive.

  
It's all right. I'm gonna fix you up.
I can fix your foot just fine.

  
- Where is it? I've been looking...
- It's a saw. You just threw a saw.

  
Don't let him move like that. He's
pushing the poison all over his body.

  
- Come on, come on.
- I know he looks...

  
Here it is.

  
- What are you doing?
- What is he doing?

  
This is a sure-fire cure.

  
I learned it from an old medicine
man. It, well, works wonders.

  
- What? No! Not that!
- Not what?

  
What is he gonna... Gonna what?

  
- Come on, now.
- Geek, stop.

  
Let's do this. Lani, can you make
some water sounds?

  
- Oh, my gosh, this is so gross.
- What is water sounds?

  
- Come on. Here we go.
- No, no, no. You...

  
Kid, you better keep your mouth shut.
See, what'd I tell you?

  
Hold his foot still, Lani. Come on.
Knock him out or something.

  
- I'm running on empty here.
- I'm trying!

  
So how you been?

  
Wow, sea urchin in the foot.
That sounds pretty nasty.

  
Yeah.

  
How do you cure something like that?

  
You pee on it.

  
- That's disgusting.
- I know!

  
Hey. How long am I stuck
with this guy?

  
- Because you know...
- Till he's better.

  
Well, come back soon and,
please, bring me some clams.

  
- No.
- I'm running low here.

  
I can't keep doing this. You've got
to start taking care of yourself.

  
- Oh, come on.
- Bye.

  
- Bring me some more clams!
- Okay.

  
If it's just as well with you,
I don't want to talk about Cody.

  
He lost. That's it.
That's his problem. It's not mine.

  
Aren't you concerned
about anybody's well-being...?

  
The kid's fine. He was born in water.
He's a penguin, for crying out loud!

  
- Did you see that wave hit him?
- That's the whole idea of surfing.

  
- I care. I care!
- Mikey! Wait till you see this.

  
Look at those little legs.
Stick, stick, stick, sticky.

  
It's the way I walk. I'm constantly...

  
- Boom-chicka-chicka...
- What's with the "boom-chicka-boom"?

  
I can't stand blood.
I can't stand the sight of blood.

  
I can't stand...
sight of blood. Cody!

  
- Dude, have you seen my friend Cody?
- No.

  
Cody? Cody?

  
He's not under there.

  
Cody!

  
How's it going, man?

  
So I woke up this morning.

  
I didn't know where I was. It's never
a good place to be when you wake up.

  
Come on. Get up.

  
- I don't want to.
- Breakfast.

  
- Wakey, wakey. Come on.
- I don't want to.

  
- How's your foot?
- My foot...

  
- My foot's fine, but my head.
- Good. Good. Come on, kid. Get up.

  
What the...?

  
Yeah, I think I got a concussion.

  
You should meet my brother, Glen.
You guys would really hit it off.

  
Oh, no. No. Where's my necklace?
Did you see my necklace? It's gotta...

  
No, no.

  
Big deal. Get yourself another one
at Reggie's trinket shops.

  
It's not just some necklace, guy.
He gave it to me himself.

  
- Who?
- Big Z. When he came to Shiverpool.

  
That guy believed in me
when no one else did.

  
He told me never to give up
and to find a way...

  
...because that's what winners do.
- What winners do. Yeah.

  
It's funny, you know,
what a loser I became.

  
Who cares what Big Z said?
You got to...

  
...you know, do things your own way.
- I don't have a way.

  
You do now. Just follow this.
It'll take you back to North Beach.

  
Okay, nice to meet you.
Good luck.

  
What do I do now?

  
I can't show my face on the beach.
I can't go home.

  
You always visualize where you're
gonna be, what you're gonna do.

  
This ain't it.

  
- What are you doing here?
- Here.

  
- Oh, man. Thank you, man. This...
- Yeah.

  
That's cool of you to come back.

  
- Thank you.
- Better keep that knot tight.

  
You lose it during a contest,
it's a goner.

  
Yeah, well, I'm not going
in any surf contests.

  
Well, there's more to surfing
than beating Tank Evans, you know.

  
Yeah.

  
Look at that.
You know what you're sitting on there?

  
That's koa wood.

  
Best surfboards in the world
are made of that stuff.

  
- Yeah?
- You got a koa board?

  
- No, I don't have a "board" board.
- Well, you wanna...?

  
You want to make one?

  
- Nah.
- What?

  
I come all the way back here
to give you the necklace...

  
...and I'm offering to make you
a board and you say, "Nah."

  
Get off your lazy butt.
We're making a board. Come on.

  
- All right.
- It's gonna be the best board...

  
...you ever had.

  
- All right?
- Okay, man.

  
Cody!

  
That's cool.

  
Joe, can you just tell us
why you're out here looking for Cody?

  
You know, we've known
each other way back...

  
...since, like, yesterday, I think it was.
We got a lot in common.

  
I never really knew my father either.

  
Why are you making surfboards
in the middle of the jungle anyway?

  
I'm just trying to understand.
I don't get it.

  
Forget the 20 questions.
Let's just get the board made.

  
Okay, it's just...
Are you a surfer, or do you...?

  
- Very funny.
- Less talk, more pushing. Come on.

  
Why are we pushing it?
Why don't we just roll it?

  
I'm sorry. I didn't mean...

  
I didn't know your foot was there.
Are you okay? I'm sorry. I'm sorry.

  
It's not like I intentionally did it.
I'm sorry.

  
- Cody. The log!
- Yeah, I know!

  
Geek! Stop, stop!

  
Cody, grab the vine. Grab the vine!

  
- Now, pull it.
- I'm trying!

  
Pull!

  
Cody!

  
Geek!

  
Cody!

  
Oh, no, no, no.

  
Help me up so I can kick your butt.

  
- I thought I killed you. You okay?
- Next time, when I say don't roll the...

  
Wait. What's that?

  
Yeah, it's a beach.
Sand, water, sun.

  
You seen one, you seen them all.
Let's get out of here.

  
No, come on, man.
Let's go check it out.

  
You think Cody and the Geek
are doing all right?

  
Yeah. I hate to see him
living out there all alone.

  
It'll be good for him
to have something to do.

  
Hey. Somebody's old board shack.

  
Look at this.

  
Whoa, whoa, whoa.

  
These are Big Z's boards.

  
Yeah, these are Big Z's boards.
He rode this in the Australian Open.

  
This is the board he rode
when he came to Shiverpool, man.

  
This... I... Geek!

  
This is Big Z's place, man!
This is where he lived!

  
This is where he made his boards!

  
Did you know this was here?

  
Why didn't you wanna
come down here?

  
And then he went up to this
old shack, you know.

  
And I realized, you know...

  
...it was Z.

  
I could tell he needed some space
and some time to himself.

  
I didn't want to ask him
all these questions.

  
So I just kind of stood there quietly.

  
You're Big Z! I can't believe it.

  
You're alive! You're alive!

  
That's the respectful way to go,
I think.

  
Why are you alive?
What happened?

  
Tell me everything.
Start at the beginning and just go.

  
Kid! You're gonna
hurt yourself. Relax.

  
And people said you were dead,
but you're not dead. You're in hiding.

  
Did something happen?
Something happened.

  
You saw something
you weren't supposed to see.

  
I knew it!
That's what happened!

  
Are you nuts?
It's not a conspiracy. It's no big deal.

  
- What happened?
- I don't want to talk about it.

  
You don't... Okay, I got it!

  
I'll be over here if you need anything
or you just feel like talking.

  
Do you feel it now? Like talking now?

  
- Go away.
- Got it. All right. I'm going away.

  
Unless you...

  
- Cody!
- Okay, got it.

  
I'm not gonna lie to you.
This is, like, it's huge, man.

  
It changes everything.
The contest is a few days away.

  
If I can get him to train me, then...
Boom. I could win this with him.

  
It's my dream. And I don't want to
give up on that dream.

  
Winners find a way,
no matter what, right?

  
A winner is...

  
They see their goals.
They just go for it.

  
They're not in it
for the money or glory.

  
- A winner is... like...
- Hey, hey!

  
It's the surfer who's out there
having the most fun.

  
Yep, it's a lot of fun.

  
Right, I get you. What's winning
without the losers?

  
They're in it for the joy of it
and the rapture...

  
...and the slow-motion
instant replay, which is my...

  
Head over to the snack bar
and get yourself a big bowl of shut up!

  
Feels better when there's a lot
of losers around.

  
Was that your question?

  
A winner is somebody who doesn't
knock me off my surfboard...

  
...and break it when I'm trying
to get some big waves.

  
Especially Tank.
He is definitely not a winner.

  
He's a dirty trashcan full of poop.

  
Yeah, I can't remember a time
when I wasn't surfing.

  
My mom put me right on there.
I think she pooped me out...

  
...just put me right on there.

  
What is it about surfing
that you love?

  
I love being the center of attention...

  
...because it's really
where I should be.

  
And I love the looks
my ladies give me, you know?

  
The little glint. I love that.
I love holding the ladies.

  
- You know what I'm talking about?
- I think so.

  
- Sort of.
- Come with me.

  
Put this curtain in myself.

  
These are my ladies.

  
This is Jill.
This is my lady, Amy.

  
Little Suzie. Briana.

  
- You know why we call her Briana?
- No.

  
It's a long story.

  
Shaniqua. Helga. Miss Kitty.

  
Jeannie. I dream of...

  
Theresa.
This is Theresa right here.

  
- Now, is Theresa, is that your...
- Dirty girl.

  
This spot?
This spot is for my special lady, Lia.

  
I'm gonna say that one more time.
Lia. Oh, yeah.

  
That's a sweet, sweet lady.

  
Tank! Are you polishing
your trophies again?

  
Mom, I wasn't polishing.
I was talking to my friends.

  
I'm gonna be polishing later.

  
When's he coming out?
I'm running out of film.

  
Mr. Topanga! Could you
tell us why you're not dead?

  
No! I am dead! I'm dead.

  
What are you doing?

  
Hey, who said you...

  
Turn the board around.
Get back here.

  
Come out here
and show me some moves.

  
- No, no.
- Come on!

  
- Grab a board and come out.
- You want to kill yourself, go ahead.

  
Fine with me.
Just don't mess up my board.

  
- How do you turn this thing?
- It's not a short board. Sit back on it.

  
Hey, watch the wave!

  
You mess up my board,
I'm messing up your other foot.

  
I'm just trying to ride
this canoe or whatever it is, okay?

  
Stop trying so hard! Just relax.

  
What do you mean, rela...?

  
Long, smooth strokes.

  
- Dig deep. Dig, come on.
- I'm digging!

  
Keep the nose up! Keep it up!
Watch it! You're pearling!

  
- What are you doing?
- Come on, please?

  
Z, I can't learn anything
with you on the beach.

  
Well, then you're not gonna
learn anything.

  
- Now, come on in.
- I'm not coming in until you come out.

  
Oh, you're coming in, all right.
He's not even watching the wave.

  
- What wave?
- That one.

  
Five, four, three, two, and...

  
- Don't touch my stuff, man.
- I couldn't help it.

  
- I just wanted to learn from the best.
- Yeah, well.

  
- I don't surf anymore, okay?
- What?

  
What do you mean, you don't surf?

  
You want to learn
how to surf the right way?

  
Sure.

  
Then you gotta make
your own board, all right?

  
- What do you mean, you don't sur...
- Can't hear you.

  
- Can I ask one question...
- We're making a board.

  
Could you tell me
about your board?

  
I just have a palm tree board.

  
I would have to say it's not
the nicest board in the world...

  
...but it is a pretty good board.

  
The ancient Hawaiians believe
that "mana" or heart...

  
...was transferred into the surfboard
as you shaped it.

  
What are your thoughts on that?

  
What's up with the hair?
You could fit a whole fish in there.

  
My dream surfboard.
It's pretty powerful.

  
You can add a lot of attachments to it,
like a grenade launcher attachment.

  
Anybody know whose board this is?

  
- I'm pretty sure it's the chicken's.
- Has anybody seen the chicken?

  
Cody!

  
I know he's out here.
I can feel it in my nuggets.

  
Aren't you nervous out here
in the jungle? It's kind of dangerous.

  
Dude, the jungle is the most
peaceful place on the planet.

  
- Hold it steady.
- This is a dream come true.

  
This is a dream come true,
to be here with Z, doing this.

  
- And it's koa wood.
- Where's the...

  
All the best boards
are made from koa wood.

  
All right, now,
I drew this pattern as a guide.

  
Do you want to have your board
with a lot of rocker or just a little?

  
I don't know.

  
What you want is something
in-between. Trust me.

  
- I'm the expert here.
- Okay.

  
So...

  
...here are your shaping tools.

  
Now, remember, the board's
already inside there, see, somewhere.

  
And what you're doing
is you're trying to find it.

  
- Reveal it. All right?
- Okay.

  
Every carve counts.
Why are you smiling? Don't smile.

  
- I'm not smiling. I'm excited.
- This isn't like hacking a piece of ice.

  
It takes patience and finesse.

  
All right already. Can you just
give me the tools, please?

  
- Here, take it. Go ahead.
- Thank you.

  
- Here we go.
- What are you doing?

  
If you're gonna do it, do it right.

  
All right, look.
First of all, with the grain.

  
With the grain.
You see what I'm doing here?

  
You let the tool do the work.
You see?

  
Just like you're riding a wave.
You let the wave do the work.

  
You don't fight the wave.
You can't fight these big waves.

  
Long strokes. Loads of finesse.

  
Find the board within the tree.

  
- Nice and easy.
- Yeah, I got it.

  
See that? You just...

  
- You just...
- Maybe I could do it now.

  
Move with...

  
- With the...
- Can I do it now?

  
Can I do it now?

  
Yeah. I got carried away.
Sorry about that.

  
- It's your board.
- My board.

  
Okay, with the grain. I got it.

  
Don't forget to eyeball it
once in a while.

  
- Long strokes, with the grain.
- Not too long.

  
Here we go.

  
- You're doing it wrong.
- Will you just let me...

  
I can't... No finesse
when you're in my face. Okay?

  
Just let me make the board.

  
- Do you want my help?
- No, I don't want your help.

  
I don't want your help.

  
- You don't want my help?
- I don't want your help.

  
- All right. Fine.
- I want to make my board.

  
- Build the board yourself, all right?
- Thank you.

  
I don't care what the board
looks like. You're the one...

  
...who's got to ride the thing.
- Fine. Thank you.

  
- It's in there somewhere.
- Walk over there, please! Please.

  
Don't cut yourself.

  
So it's day three, yeah?

  
I come across Pen Guans.

  
I'm Chicken Joe. Joseph.
It's long for Joe.

  
Sweet, man.

  
And they treat me as their king
and put me in a hot tub.

  
It is, I guess, their royal hot tub.

  
It got kind of hot and steamy.

  
But really opened up
my pores, you know?

  
It was kind of cool.

  
They served me food
while I was in there.

  
It was like dinner and a show.

  
As enjoyable as it was,
I still had a vision of my quest.

  
Thank you. See you guys later.
I gotta get going.

  
Not again.

  
You know what else it was?
I had the board.

  
The board was fine.
The board was great.

  
- How's it going?
- It's going great, man. It's great.

  
It did look a little rough.

  
A little rough? The board looked
a little... It's a work in progress, bro.

  
You think it's good enough
for the big waves?

  
I think it's good enough
for any wave.

  
Hang on.

  
- Okay, let's say I'm a big wave.
- Hold on. No, no, no, no.

  
- Hey, where you...
- Hold on!

  
- Where are you going?
- It's my board, man, all right?

  
Why don't you take your board
and go try it out?

  
Maybe I will. Piece of junk. Watch!

  
Nice ride, man.
Nice ride.

  
This is supposed to be fun.

  
I got three days until the contest.
I don't have time for fun.

  
No time for fun, huh?

  
- Hey, Cody!
- What?

  
Bring me some clams
when you come back!

  
I'm not coming back!

  
- He'll be back.
- No, I won't!

  
He'll be back.

  
- You guys like barbecue?
- Yeah, sure.

  
Got some wood here.

  
I wasted my whole day and I have
nothing to show for it, which is...

  
- I was just going to check on you...
- That's why you were...

  
...and the Geek.

  
- Listen. The Geek is Big Z.
- What?

  
- I know.
- You know?

  
- How did you find out?
- We went to the beach.

  
- You got him to the beach?
- Yeah.

  
I've been trying to get Z
out of that tree for 10 years...

  
...and you got him all the way
down to the beach in one day?

  
This is fantastic!

  
It's amazing!
Do you want to go somewhere fun?

  
Do you want to go somewhere
really, really fun?

  
Unless you want...
Did you want to get back to Big Z?

  
- I'm sorry. I shouldn't have invited you.
- No, no, no.

  
- What? Okay. No?
- No, look. I want to have fun.

  
- Okay.
- Do I need mints or something?

  
- You tell me.
- No, you won't need mints.

  
Z used to carry us up here on his
shoulders. We'd have so much fun.

  
- It's one of my favorite spots.
- Really?

  
- Boy, to be 8 years old again.
- What is this?

  
You don't want to
get all cut up, do you?

  
Hold on. What are you doing?

  
No, no, no. I'm out of here.
I'm better off...

  
It's going down! No, no, no!

  
- This is insane!
- Stop fighting it, Cody! Just let go!

  
All right!

  
Now I'm in front of you.
What's going on now?

  
It's not a race!

  
Okay, wait, don't take the left...
Cody!

  
- Give up, slowpoke! It's over with now!
- Not for long!

  
Give up now, sucker!

  
- I beat you!
- Congratulations, you sure did.

  
You should probably
get out of there.

  
Why is that? This stuff is...
Look at me. It's so beautiful.

  
Look at it. What is this stuff?

  
See those things up above you?
They're glowworms.

  
So you're right beneath them.
Yeah, that's poop.

  
You know how some stinks stink
and other stinks smell good?

  
- Yeah.
- This is, like, a good stink.

  
A good stink?

  
Can I tell you something personal?

  
We're in the shower together.
You can say whatever you want.

  
I'm serious. I'm really, really
jealous of you.

  
Why?

  
I couldn't get Z off his butt
for the last 10 years...

  
...and then you come along and...

  
He must really think a lot of you.

  
I don't know. I've been a jerk to him.
I don't know what he thinks.

  
- You haven't.
- I have. I've been a jerk.

  
- I have.
- Then go not be a jerk.

  
What does it matter to you anyways?

  
He's my uncle.
He's the only family I've got.

  
Okay.

  
Z? No.

  
No, no, no, don't you do it.
Z, don't do it. No.

  
- No.
- Let's see here.

  
- I swear...
- It's stronger than I thought.

  
...if you break it...
- Should've been broken by now.

  
Come on! Come on!

  
Look at that.

  
That's the best place
in the world to be, in the tube.

  
Really?

  
Yeah. Better than winning,
the trophy, all that stuff.

  
Tube riding
is the ultimate thing in surfing...

  
...to ride inside the wave
and make it out of it.

  
It's all we want to do every day.

  
It's almost impossible to describe.

  
There's nothing I can compare it to.

  
It's a feeling that not too many people
will experience...

  
...so it's special in that sense.

  
Then you try to remember it.

  
Like, "I wish I could remember that,"
or "I wish I could get that again."

  
It's so addicting.

  
Once you get inside
you never want to get out.

  
- Wow. That's amazing.
- Yeah, man. Nothing like it.

  
So, that aside, how many points
would you get for getting tubed?

  
Like, what does it depend on
for the contest?

  
- Points?
- What?

  
You know who you
sound like right now?

  
I promote happiness!

  
Can you see the happiness emanating
from me? What's wrong with you?

  
- We're live.
- Good. Good.

  
I have to say, I have no doubt
that this year's Big Z Memorial...

  
...is gonna be the best ever.

  
With the competition
just one day away...

  
...the excitement is definitely building
here on Pen Gu Island.

  
That didn't take too long.
I feel lightheaded.

  
So get this.

  
On my search for Cody,
I bump into my hot tub buddies again.

  
I get it. You guys look hungry.

  
You've probably got
the munchies or something.

  
Squidito on el stickito?

  
Check it out! Dude,
have you seen my friend Cody?

  
He's kind of like a penguin.

  
He's got a lot of black on him,
a lot of white.

  
- How did you learn how to surf?
- I saw Big Z do it, actually.

  
I don't think you were born yet.

  
- I wasn't?
- No, I don't think so.

  
Lani? I like her when
she teaches us because...

  
Smudge! Not another one!

  
I think he really has to go
to the bathroom right now.

  
What's next? The board is done.

  
- The board is done?
- The board is done.

  
- Well, let's do some training.
- Finally!

  
- Can we get a shot of you...
- You've got to get it in a long shot.

  
Hey, Z! Come on!

  
- Where you going?
- I thought we were going to train.

  
Not in the water. Jeez.
What are you thinking?

  
- You want to surf like Big Z used to?
- Yeah.

  
I've got some tests here
to figure out your potential.

  
- Let's do it.
- No, put them on your eyes.

  
- Like this.
- On my eyes.

  
- Take it, Cody.
- Can we do some training, seriously?

  
What are you talking about?
What do you think we're doing?

  
Acting like nutjobs.
That's what I think we're doing.

  
Yeah, good. You're learning!

  
And a big set comes in.

  
Wipeout!

  
- That's it!
- Take it easy!

  
This is getting ridiculous.

  
- You having fun?
- I hate you.

  
Big, you know, slow:

  
He does this flip over the top.
All right, now you go.

  
No joy, man. No joy. Fail.

  
I'm starting to see it, man. I think
I know what you're talking about.

  
That's great. As long as
we're all having fun, right?

  
Z, wake up. Wake up, Z. Z!

  
Hey, Z, breakfast!

  
Not a chance.

  
- Four, three, two...
- You gotta get up early in the morning...

  
...one.

  
That is fun.

  
- You're having fun?
- I am. Yes. Now I am.

  
Then, Cody...

  
...you passed!
- What?

  
You did it! You're ready! Let's surf!

  
Don't play me, Z. We're surfing?
Yes! Yes!

  
Hey, check it...

  
I didn't know you could surf!

  
Relax!

  
Long, slow, smooth.

  
- Like making the board!
- There you go.

  
- All right. Okay.
- Feels good, yeah?

  
- You're in the water, Z!
- Come on out. Get wet! Come on!

  
Lani, thank you.

  
Look at that!

  
- Nice! That's it! Nice.
- Great ride!

  
Big Z is back!

  
This is what it's all about.

  
What could be better than this?

  
I need some help
on this landing for the high note

  
Nice. Nice.

  
- Is that the only song that you know?
- Pretty much.

  
You want to hear it again?
It goes like this.

  
No? Okay. I got you there, didn't I?

  
I must say you were
quite amazing out there today.

  
- You weren't so bad yourself, kiddo.
- Thanks to this guy.

  
- I just pointed you in a direction.
- Question, Z.

  
- Change your mind about the song?
- No, no, no.

  
Here, it goes something like this...

  
I was wondering if you could come
watch me ride tomorrow.

  
Yeah, yeah. We'll both ride, man.

  
- No, not just... In the contest.
- Contest? What contest?

  
The Big Z Memorial.
Remember that one?

  
I know I'm asking a lot...

  
...but it would really, really be...

  
...the biggest thing in the world
to me if you could come.

  
- You still want to be a part of that?
- Absolutely.

  
- Why do you want me there anyway?
- I thought you'd want to be there.

  
- I don't know why it's a big deal.
- It's no big deal.

  
Why won't you come?

  
- I'm not coming.
- Why?

  
- Give it a rest.
- It's getting cold, guys.

  
- Tell me why you're hiding.
- Hiding?

  
- Why are you hiding?
- I'll have to eat all this by myself.

  
Why didn't you come back
after you fell off the wave?

  
That wave.

  
That last day, winning had
become everything to me.

  
I knew I was gonna beat Tank.

  
But then, you know,
he starts to surf circles around me.

  
I saw what he was doing.
I couldn't do what he was doing.

  
Times had changed.

  
I didn't want to walk back
on that beach with all my fans there.

  
A loser. Everyone looking
at Big Z, the loser, the has-been.

  
So...

  
Big Z's dead,
and that's how it's gonna stay.

  
Let me play you that song.

  
What about "never give up"?
What about "find a way"?

  
- You're giving up. You're giving up!
- Yeah, I'm giving up. That's my way.

  
- Giving up.
- I thought you were the one guy.

  
You don't like it, find your own way.

  
Leave me out of it.

  
Leave me out of it.

  
I messed up.
I'm just...

  
I'm... not good.

  
This is when I needed someone.
I needed him.

  
It's hard enough
losing one dad, but...

  
- What do you mean by...?
- Nothing.

  
Nothing, man. Forget it.

  
Peaceful. Peaceful.
I'm in peace. I come in peace.

  
- Cody!
- Joe!

  
- I've been looking everywhere for you!
- You've been looking for me?

  
I didn't lose you on the whale.
I'm not gonna lose you now.

  
- Thank you. Seriously, thank you.
- Radical.

  
They're starting!
Cody, we gotta go! Come on!

  
Wait a minute. Joe?

  
Surfers riding...

  
I'm sorry. Watch this, dude.
I can speak their language.

  
I totally need my board. I don't
know where it is. I gotta go find it.

  
- I'll see you in the lineup.
- See you, Joe.

  
- This is gonna be fun, huh?
- See you.

  
The tenth annual Big Z
is about to get underway...

  
...and, whoa, it is the day of days.

  
Big mountainous bombs
marching into our coastline.

  
Kelly Slater, on a danger level,
one to ten, give me a number.

  
Twenty.

  
- Wow. Rob?
- There'll be blood.

  
I'm scared, and I'm in the booth!

  
- What are you doing here?
- Mike.

  
You're gonna kill yourself.
Don't do this to yourself.

  
Look what happened last time.

  
- It's good to see you back.
- Are you serious?

  
You're gonna be
a real crowd pleaser.

  
I'm telling you,
these people are gonna eat you up.

  
- I'll be expecting big things from you.
- Thank you.

  
People, big announcement.
Cody Maverick, he's back.

  
The Wipeout King is back...

  
...and I'm gonna tell you,
start looking for the sharks.

  
They'll be circling because
there's gonna be blood.

  
Spectacular carnage today.

  
Thank you! Reggie Belafonte. Little
guy, big hair, big thoughts, big heart.

  
Look at this.
You're going down, snowflake.

  
I'm gonna make you wish
you were never even hatched.

  
You want to see my trophies?

  
Arnold, no.

  
About 24 surfers
battling their way out to the...

  
Good golly! Make that 18.

  
Rob, after such a heavy wipeout
earlier in the week...

  
...what do you think is going
through Maverick's mind?

  
He's gonna have to stay focused and
channel that energy into good places.

  
When are you gonna get a life?

  
You are a nobody.

  
You should've stayed
in Antarctica, kid.

  
He made it! Yeah, good.

  
What an amazing first ride
mind-blower from Maverick.

  
Did you guys see that?

  
Man. I thought I was gonna lose it,
and then I just...

  
I just let go, you know.
I let go, and there it was.

  
Wow, it's been an amazing day...

  
...of shredding in less than
stellar conditions...

  
...but I never would have guessed
our three finalists.

  
Well, Sal, it's no surprise
that Tank Evans...

  
...has just breezed his way
into the finals.

  
And Cody Maverick, from a horrible
wipeout a few days ago to this.

  
And Chicken Joe from Sheboygan.
Who would have guessed it?

  
I have never seen a finals like this.

  
- We're in the finals, Joe.
- No way! We get to surf some more?

  
Isn't it exciting?
Look at that. This is great, huh?

  
You know, you should know this.
The Tank loves you.

  
Looks like this will be
the easiest year ever.

  
No way. Cody, did you hear that?
It's gonna be easy.

  
Are you loving this?

  
So who would you like
to see win the trophy?

  
It's not so important to me.

  
Friends are better than anything
in the world.

  
Friends are forever.

  
Trophies, you never know
what they can have happen to them.

  
- That was awesome, mate.
- Muy impresivo, my friend.

  
Thank you, bro. Thanks.

  
- Finals.
- Hey!

  
Yeah. I know. I can't even...

  
I think I can win this thing.
It's too much right now.

  
- Well, that's all you came for.
- What?

  
- What is that supposed to mean?
- You made it pretty clear last night...

  
...that winning's more important
to you than Z or me.

  
But, hey, maybe you'll get to take
your stupid trophy home.

  
- Lani. Come on.
- Come here, you!

  
How about this, huh?

  
Let me tell you something. You win
this thing, we're going places!

  
Look at this kid.
He is a champ!

  
Tank, nine-time defending champion.
He will roll on you.

  
Expect him to win this thing. It's
basically a contest for second place.

  
First, I'm gonna take you down.
Then I'm gonna fry the chicken.

  
That cloud looks just like a kitten.

  
Maverick and Evans take off.

  
Mine!

  
And it's Evans dropping in.

  
And Tank's playing games,
blocking Maverick's every move.

  
Maverick sticks a rail.

  
Tank Evans down!
I have never, ever seen this before!

  
But I'd love to see it again.

  
Cody trying to take back the wave
that Tank snaked from him.

  
Evans toying with him,
not paying attention.

  
And there's the outside rail.
Evans goes down.

  
And it's Maverick with this new-school
move. We'll call it "The Maverick."

  
And look at this.
Maverick scoring big.

  
Oh, it's so cute.
It's got little paws and the whiskers.

  
Chicken Joe
with a no-paddle drop-in!

  
- Here we go!
- Nobody needs to help this chicken.

  
I'm flying!

  
Maverick and Joe tied, and no score
for Tank Evans? Unbelievable.

  
Surfers, this is your final wave!

  
- Joe, this is it. This wave wins it.
- Yeah, man!

  
This wave is stacking up
to be a beautiful tube.

  
Maverick should score big
on this one!

  
But wait! Evans drops in.

  
It looks like Evans
is gonna take out the chicken.

  
What's Maverick doing?

  
- Go, Joe, go!
- Got it! Let's go!

  
I don't believe this.
This contest was Maverick's to win.

  
Now Evans pushing Maverick out
of bounds and into The Boneyards.

  
- Tank, look out!
- You look out!

  
Code!

  
Z!

  
- Cody, come on.
- Z!

  
Paddle! Come on! Dig! Faster!
Come on. Dig!

  
Don't dig! Don't dig!

  
What?

  
Let the wave carry you!

  
You're gonna have to time it!

  
You're gonna come right here,
right to me!

  
Five... four...

  
Three... two... one.

  
Z!

  
Where's Cody?

  
Don't touch it! Don't touch that!

  
This is a reminder
of the young surfer...

  
...who gave his life
for the sport he loved.

  
There you are.

  
I can't believe it! I can't believe it.

  
You came back.

  
You saved my life, man.
Thank you.

  
Hey, hey, come on.
You're gonna tip us!

  
Well, I lost.

  
Me too.

  
Come on. Let's go, loser.

  
You want to help me out here?

  
You know the routine. Come on. Long.
That's it. Smooth, you know. Come on.

  
Young Joey MacEnroe
was a beacon for a new generation.

  
May he rest in peace.

  
So, what am I bid for the board?
Who'll give me 30? 30, come on.

  
- Don't touch his stuff, man.
- Pal, if you want to bid...

  
- Give me that.
- Hey...!

  
Hey. Hey, everyone.

  
- How you been?
- Oh, my gosh!

  
- Yeah...
- Hey, man, that's Z.

  
...that's me.

  
Skank, what's happening, man?

  
Got a little sand
in your egg sac there, fella.

  
- Where have you been, Z?
- What happened?

  
Oh, you know...

  
...I got lost for a little while.
But that kid there, Cody...

  
...he pointed the way back.

  
Could you please shut that off?
Could you give me a minute?

  
Check it out! How about this?

  
You want to talk about talent scout?
People find talent.

  
I bring them back from the dead.
The now living legend, ladies and...

  
- Shut up.
- What? Shut up?

  
I'm not a legend. I'm a guy looking for
some nice waves, some good friends.

  
Hey, guys, the swell is happening
over on the north shore!

  
I'm right behind you, Z.

  
Ouch, that hurt.

  
Come back here!
You don't just walk away! Come on!

  
He's taking this loss pretty hard.

  
Tank, how does it feel
to lose after nine time...

  
I wasn't kissing her.
You can't have her!

  
Can we get a few words?

  
You gave up the trophy to help Joe.
What's that about?

  
You know, Rob,
that's what friends do.

  
- How's it feel to win, Joe?
- I won?

  
Come on! I'll tell my mom.
Gimme. Gimme!

  
Oh, Lia! Oh, Lia.

  
Don't you walk away from me!
I am Reggie Belafon...

  
Turn that thing off.
Mikey! You are so fired!

  
I can't imagine a better day.

  
Dude, this... This whole
experience has just been...

  
It's amazing. Z?

  
I don't think I've ever had
a better friend to me in my life.

  
It's just really cool
to have everything I need.

  
- Don't do it. Help!
- Arnold!

  
To be honest, man, I'm kind of, like,
bored of talking about myself.

  
So, is that cool?
You guys got what you need?

  
- We got it.
- All right. Be good!

  
Cowabunga!

  
Of course we're proud of him!

  
What mother wouldn't be
proud of him?

  
We're so full of proudness.

  
You know what?
He followed his dream...

  
...and he went out there, and now
he's coming home with the trophy.

  
I can't wait to see his trophy.

  
There's not really a trophy.

  
Is there, like, a big shell
or something like that?

  
There's no shell. There's no trophy.
Well, he didn't win.

  
What?

  
How bad was it?
Did he get smoked?

  
- He was in the finals.
- Second place? That's losing.

  
- Winning is not everything, Glen.
- Right.

  
Look at what Cody did...

  
Go back to the
"winning isn't everything" thing.

  
That doesn't compute, really.

  
You know what, Glen? I really hope
someday you can be more like Cody.

  
This interview is over.

  
Remember when were talking
about you leaving? That was great.

  
Remember when
you were gonna go?

  
- We were gonna go...
- You should still go.

  
It's technical equipment.

  
I know what I'm doing. I can unplug
one of your little Hollywood devices.

  
The lighting thing,
whatever you call that...

  
...and then the microphone thing.

  
Go back to Hollywood.

  
Cody would never do this.

`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)
