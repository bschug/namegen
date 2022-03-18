const USE_WEIGHTS = false;


const NOUNS_WITH_FREQUENCY = {"People":372,"History":187,"Way":185,"Art":183,"World":169,"Information":168,"Map":167,"Two":164,"Family":159,"Government":143,"Health":122,"System":111,"Computer":109,"Meat":99,"Year":96,"Thanks":84,"Music":80,"Person":80,"Reading":77,"Method":76,"Data":74,"Food":73,"Understanding":73,"Theory":71,"Law":70,"Bird":68,"Literature":67,"Problem":66,"Software":63,"Control":62,"Knowledge":62,"Power":62,"Ability":61,"Economics":61,"Love":60,"Internet":59,"Television":59,"Science":58,"Library":57,"Nature":57,"Fact":56,"Product":56,"Idea":55,"Temperature":55,"Investment":52,"Area":50,"Society":50,"Activity":48,"Story":48,"Industry":47,"Media":47,"Thing":47,"Oven":45,"Community":44,"Definition":44,"Safety":44,"Quality":43,"Development":42,"Language":42,"Management":41,"Player":41,"Variety":41,"Video":41,"Week":41,"Security":38,"Country":37,"Exam":37,"Movie":37,"Organization":37,"Equipment":35,"Physics":35,"Analysis":34,"Policy":34,"Series":34,"Thought":34,"Basis":33,"Boyfriend":33,"Direction":33,"Strategy":33,"Technology":33,"Army":32,"Camera":32,"Freedom":32,"Paper":32,"Environment":31,"Child":30,"Instance":30,"Month":30,"Truth":30,"Marketing":29,"University":29,"Writing":29,"Article":28,"Department":28,"Difference":28,"Goal":28,"News":28,"Audience":27,"Fishing":27,"Growth":27,"Income":27,"Marriage":27,"User":27,"Combination":26,"Failure":26,"Meaning":26,"Medicine":26,"Philosophy":26,"Teacher":25,"Communication":24,"Night":24,"Chemistry":23,"Disease":23,"Disk":23,"Energy":23,"Nation":23,"Road":23,"Role":23,"Soup":23,"Advertising":22,"Location":22,"Success":22,"Addition":21,"Apartment":21,"Education":21,"Math":21,"Moment":21,"Painting":21,"Politics":21,"Attention":20,"Decision":20,"Event":20,"Property":20,"Shopping":20,"Student":20,"Wood":20,"Competition":19,"Distribution":19,"Entertainment":19,"Office":19,"Population":19,"President":19,"Unit":19,"Category":18,"Cigarette":18,"Context":18,"Introduction":18,"Opportunity":18,"Performance":18,"Driver":17,"Flight":17,"Length":17,"Magazine":17,"Newspaper":17,"Relationship":17,"Teaching":17,"Cell":16,"Dealer":16,"Finding":16,"Lake":16,"Member":16,"Message":16,"Phone":16,"Scene":16,"Appearance":15,"Association":15,"Concept":15,"Customer":15,"Death":15,"Discussion":15,"Housing":15,"Inflation":15,"Insurance":15,"Mood":15,"Woman":15,"Advice":14,"Blood":14,"Effort":14,"Expression":14,"Importance":14,"Opinion":14,"Payment":14,"Reality":14,"Responsibility":14,"Situation":14,"Skill":14,"Statement":14,"Wealth":14,"Application":13,"City":13,"County":13,"Depth":13,"Estate":13,"Foundation":13,"Grandmother":13,"Heart":13,"Perspective":13,"Photo":13,"Recipe":13,"Studio":13,"Topic":13,"Collection":12,"Depression":12,"Imagination":12,"Passion":12,"Percentage":12,"Resource":12,"Setting":12,"Ad":11,"Agency":11,"College":11,"Connection":11,"Criticism":11,"Debt":11,"Description":11,"Memory":11,"Patience":11,"Secretary":11,"Solution":11,"Administration":10,"Aspect":10,"Attitude":10,"Director":10,"Personality":10,"Psychology":10,"Recommendation":10,"Response":10,"Selection":10,"Storage":10,"Version":10,"Alcohol":9,"Argument":9,"Complaint":9,"Contract":9,"Emphasis":9,"Highway":9,"Loss":9,"Membership":9,"Possession":9,"Preparation":9,"Steak":9,"Union":9,"Agreement":8,"Cancer":8,"Currency":8,"Employment":8,"Engineering":8,"Entry":8,"Interaction":8,"Mixture":8,"Preference":8,"Region":8,"Republic":8,"Tradition":8,"Virus":8,"Actor":7,"Classroom":7,"Delivery":7,"Device":7,"Difficulty":7,"Drama":7,"Election":7,"Engine":7,"Football":7,"Guidance":7,"Hotel":7,"Owner":7,"Priority":7,"Protection":7,"Suggestion":7,"Tension":7,"Variation":7,"Anxiety":6,"Atmosphere":6,"Awareness":6,"Bath":6,"Bread":6,"Candidate":6,"Climate":6,"Comparison":6,"Confusion":6,"Construction":6,"Elevator":6,"Emotion":6,"Employee":6,"Employer":6,"Guest":6,"Height":6,"Leadership":6,"Mall":6,"Manager":6,"Operation":6,"Recording":6,"Sample":6,"Transportation":6,"Charity":5,"Cousin":5,"Disaster":5,"Editor":5,"Efficiency":5,"Excitement":5,"Extent":5,"Feedback":5,"Guitar":5,"Homework":5,"Leader":5,"Mom":5,"Outcome":5,"Permission":5,"Presentation":5,"Promotion":5,"Reflection":5,"Refrigerator":5,"Resolution":5,"Revenue":5,"Session":5,"Singer":5,"Tennis":5,"Basket":4,"Bonus":4,"Cabinet":4,"Childhood":4,"Church":4,"Clothes":4,"Coffee":4,"Dinner":4,"Drawing":4,"Hair":4,"Hearing":4,"Initiative":4,"Judgment":4,"Lab":4,"Measurement":4,"Mode":4,"Mud":4,"Orange":4,"Poetry":4,"Police":4,"Possibility":4,"Procedure":4,"Queen":4,"Ratio":4,"Relation":4,"Restaurant":4,"Satisfaction":4,"Sector":4,"Signature":4,"Significance":4,"Song":4,"Tooth":4,"Town":4,"Vehicle":4,"Volume":4,"Wife":4,"Accident":3,"Airport":3,"Appointment":3,"Arrival":3,"Assumption":3,"Baseball":3,"Chapter":3,"Committee":3,"Conversation":3,"Database":3,"Enthusiasm":3,"Error":3,"Explanation":3,"Farmer":3,"Gate":3,"Girl":3,"Hall":3,"Historian":3,"Hospital":3,"Injury":3,"Instruction":3,"Maintenance":3,"Manufacturer":3,"Meal":3,"Perception":3,"Pie":3,"Poem":3,"Presence":3,"Proposal":3,"Reception":3,"Replacement":3,"Revolution":3,"River":3,"Son":3,"Speech":3,"Tea":3,"Village":3,"Warning":3,"Winner":3,"Worker":3,"Writer":3,"Assistance":2,"Breath":2,"Buyer":2,"Chest":2,"Chocolate":2,"Conclusion":2,"Contribution":2,"Cookie":2,"Courage":2,"Dad":2,"Desk":2,"Drawer":2,"Establishment":2,"Examination":2,"Garbage":2,"Grocery":2,"Honey":2,"Impression":2,"Improvement":2,"Independence":2,"Insect":2,"Inspection":2,"Inspector":2,"King":2,"Ladder":2,"Menu":2,"Penalty":2,"Piano":2,"Potato":2,"Profession":2,"Professor":2,"Quantity":2,"Reaction":2,"Requirement":2,"Salad":2,"Sister":2,"Supermarket":2,"Tongue":2,"Weakness":2,"Wedding":2,"Affair":1,"Ambition":1,"Analyst":1,"Apple":1,"Assignment":1,"Assistant":1,"Bathroom":1,"Bedroom":1,"Beer":1,"Birthday":1,"Celebration":1,"Championship":1,"Cheek":1,"Client":1,"Consequence":1,"Departure":1,"Diamond":1,"Dirt":1,"Ear":1,"Fortune":1,"Friendship":1,"Funeral":1,"Gene":1,"Girlfriend":1,"Hat":1,"Indication":1,"Intention":1,"Lady":1,"Midnight":1,"Negotiation":1,"Obligation":1,"Passenger":1,"Pizza":1,"Platform":1,"Poet":1,"Pollution":1,"Recognition":1,"Reputation":1,"Shirt":1,"Sir":1,"Speaker":1,"Stranger":1,"Surgery":1,"Sympathy":1,"Tale":1,"Throat":1,"Trainer":1,"Uncle":1,"Youth":1,"Time":369,"Work":224,"Film":209,"Water":201,"Money":174,"Example":147,"While":147,"Business":127,"Study":118,"Game":117,"Life":107,"Form":99,"Air":98,"Day":98,"Place":98,"Number":97,"Part":96,"Field":95,"Fish":92,"Back":86,"Process":85,"Heat":84,"Hand":81,"Experience":80,"Job":80,"Book":77,"End":76,"Point":74,"Type":74,"Home":72,"Economy":71,"Value":70,"Body":69,"Market":69,"Guide":68,"Interest":67,"State":63,"Radio":62,"Course":61,"Company":60,"Price":60,"Size":60,"Card":58,"List":58,"Mind":58,"Trade":58,"Line":56,"Care":55,"Group":55,"Risk":55,"Word":55,"Fat":54,"Force":54,"Key":54,"Light":54,"Training":54,"Name":53,"School":53,"Top":53,"Amount":51,"Level":51,"Order":51,"Practice":51,"Research":51,"Sense":51,"Service":51,"Piece":50,"Web":49,"Boss":48,"Sport":47,"Fun":46,"House":46,"Page":46,"Term":46,"Test":46,"Answer":45,"Sound":45,"Focus":44,"Matter":44,"Kind":43,"Soil":43,"Board":42,"Oil":42,"Picture":42,"Access":41,"Garden":41,"Range":41,"Rate":41,"Reason":41,"Future":40,"Site":40,"Demand":39,"Exercise":39,"Image":39,"Case":38,"Cause":38,"Coast":38,"Action":37,"Age":37,"Bad":37,"Boat":37,"Record":37,"Result":37,"Section":37,"Building":36,"Mouse":36,"Cash":35,"Class":35,"Nothing":35,"Period":35,"Plan":35,"Store":35,"Tax":35,"Side":34,"Subject":34,"Space":33,"Rule":32,"Stock":32,"Weather":32,"Chance":31,"Figure":31,"Man":31,"Model":31,"Source":31,"Beginning":30,"Earth":30,"Program":30,"Chicken":29,"Design":29,"Feature":29,"Head":29,"Material":29,"Purpose":29,"Question":29,"Rock":29,"Salt":29,"Act":28,"Birth":28,"Car":28,"Dog":28,"Object":28,"Scale":28,"Sun":28,"Note":27,"Profit":27,"Rent":27,"Speed":27,"Style":27,"War":27,"Bank":26,"Craft":26,"Half":26,"Inside":26,"Outside":26,"Standard":26,"Bus":25,"Exchange":25,"Eye":25,"Fire":25,"Position":25,"Pressure":25,"Stress":25,"Advantage":24,"Benefit":24,"Box":24,"Frame":24,"Issue":24,"Step":24,"Cycle":23,"Face":23,"Item":23,"Metal":23,"Paint":23,"Review":23,"Room":23,"Screen":23,"Structure":23,"View":23,"Account":22,"Ball":22,"Discipline":22,"Medium":22,"Share":22,"Balance":21,"Bit":21,"Black":21,"Bottom":21,"Choice":21,"Gift":21,"Impact":21,"Machine":21,"Shape":21,"Tool":21,"Wind":21,"Address":20,"Average":20,"Career":20,"Culture":20,"Morning":20,"Pot":20,"Sign":20,"Table":20,"Task":20,"Condition":19,"Contact":19,"Credit":19,"Egg":19,"Hope":19,"Ice":19,"Network":19,"North":19,"Square":19,"Attempt":18,"Date":18,"Effect":18,"Link":18,"Post":18,"Star":18,"Voice":18,"Capital":17,"Challenge":17,"Friend":17,"Self":17,"Shot":17,"Brush":16,"Couple":16,"Debate":16,"Exit":16,"Front":16,"Function":16,"Lack":16,"Living":16,"Plant":16,"Plastic":16,"Spot":16,"Summer":16,"Taste":16,"Theme":16,"Track":16,"Wing":16,"Brain":15,"Button":15,"Click":15,"Desire":15,"Foot":15,"Gas":15,"Influence":15,"Notice":15,"Rain":15,"Wall":15,"Base":14,"Damage":14,"Distance":14,"Feeling":14,"Pair":14,"Savings":14,"Staff":14,"Sugar":14,"Target":14,"Text":14,"Animal":13,"Author":13,"Budget":13,"Discount":13,"File":13,"Ground":13,"Lesson":13,"Minute":13,"Officer":13,"Phase":13,"Reference":13,"Register":13,"Sky":13,"Stage":13,"Stick":13,"Title":13,"Trouble":13,"Bowl":12,"Bridge":12,"Campaign":12,"Character":12,"Club":12,"Edge":12,"Evidence":12,"Fan":12,"Letter":12,"Lock":12,"Maximum":12,"Novel":12,"Option":12,"Pack":12,"Park":12,"Plenty":12,"Quarter":12,"Skin":12,"Sort":12,"Weight":12,"Baby":11,"Background":11,"Carry":11,"Dish":11,"Factor":11,"Fruit":11,"Glass":11,"Joint":11,"Master":11,"Muscle":11,"Red":11,"Strength":11,"Traffic":11,"Trip":11,"Vegetable":11,"Appeal":10,"Chart":10,"Gear":10,"Ideal":10,"Kitchen":10,"Land":10,"Log":10,"Mother":10,"Net":10,"Party":10,"Principle":10,"Relative":10,"Sale":10,"Season":10,"Signal":10,"Spirit":10,"Street":10,"Tree":10,"Wave":10,"Belt":9,"Bench":9,"Commission":9,"Copy":9,"Drop":9,"Minimum":9,"Path":9,"Progress":9,"Project":9,"Sea":9,"South":9,"Status":9,"Stuff":9,"Ticket":9,"Tour":9,"Angle":8,"Blue":8,"Breakfast":8,"Confidence":8,"Daughter":8,"Degree":8,"Doctor":8,"Dot":8,"Dream":8,"Duty":8,"Essay":8,"Father":8,"Fee":8,"Finance":8,"Hour":8,"Juice":8,"Limit":8,"Luck":8,"Milk":8,"Mouth":8,"Peace":8,"Pipe":8,"Seat":8,"Stable":8,"Storm":8,"Substance":8,"Team":8,"Trick":8,"Afternoon":7,"Bat":7,"Beach":7,"Blank":7,"Catch":7,"Chain":7,"Consideration":7,"Cream":7,"Crew":7,"Detail":7,"Gold":7,"Interview":7,"Kid":7,"Mark":7,"Match":7,"Mission":7,"Pain":7,"Pleasure":7,"Score":7,"Screw":7,"Sex":7,"Shop":7,"Shower":7,"Suit":7,"Tone":7,"Window":7,"Agent":6,"Band":6,"Block":6,"Bone":6,"Calendar":6,"Cap":6,"Coat":6,"Contest":6,"Corner":6,"Court":6,"Cup":6,"District":6,"Door":6,"East":6,"Finger":6,"Garage":6,"Guarantee":6,"Hole":6,"Hook":6,"Implement":6,"Layer":6,"Lecture":6,"Lie":6,"Manner":6,"Meeting":6,"Nose":6,"Parking":6,"Partner":6,"Profile":6,"Respect":6,"Rice":6,"Routine":6,"Schedule":6,"Swimming":6,"Telephone":6,"Tip":6,"Winter":6,"Airline":5,"Bag":5,"Battle":5,"Bed":5,"Bill":5,"Bother":5,"Cake":5,"Code":5,"Curve":5,"Designer":5,"Dimension":5,"Dress":5,"Ease":5,"Emergency":5,"Evening":5,"Extension":5,"Farm":5,"Fight":5,"Gap":5,"Grade":5,"Holiday":5,"Horror":5,"Horse":5,"Host":5,"Husband":5,"Loan":5,"Mistake":5,"Mountain":5,"Nail":5,"Noise":5,"Occasion":5,"Package":5,"Patient":5,"Pause":5,"Phrase":5,"Proof":5,"Race":5,"Relief":5,"Sand":5,"Sentence":5,"Shoulder":5,"Smoke":5,"Stomach":5,"String":5,"Tourist":5,"Towel":5,"Vacation":5,"West":5,"Wheel":5,"Wine":5,"Arm":4,"Aside":4,"Associate":4,"Bet":4,"Blow":4,"Border":4,"Branch":4,"Breast":4,"Brother":4,"Buddy":4,"Bunch":4,"Chip":4,"Coach":4,"Cross":4,"Document":4,"Draft":4,"Dust":4,"Expert":4,"Floor":4,"God":4,"Golf":4,"Habit":4,"Iron":4,"Judge":4,"Knife":4,"Landscape":4,"League":4,"Mail":4,"Mess":4,"Native":4,"Opening":4,"Parent":4,"Pattern":4,"Pin":4,"Pool":4,"Pound":4,"Request":4,"Salary":4,"Shame":4,"Shelter":4,"Shoe":4,"Silver":4,"Tackle":4,"Tank":4,"Trust":4,"Assist":3,"Bake":3,"Bar":3,"Bell":3,"Bike":3,"Blame":3,"Boy":3,"Brick":3,"Chair":3,"Closet":3,"Clue":3,"Collar":3,"Comment":3,"Conference":3,"Devil":3,"Diet":3,"Fear":3,"Fuel":3,"Glove":3,"Jacket":3,"Lunch":3,"Monitor":3,"Mortgage":3,"Nurse":3,"Pace":3,"Panic":3,"Peak":3,"Plane":3,"Reward":3,"Row":3,"Sandwich":3,"Shock":3,"Spite":3,"Spray":3,"Surprise":3,"Till":3,"Transition":3,"Weekend":3,"Welcome":3,"Yard":3,"Alarm":2,"Bend":2,"Bicycle":2,"Bite":2,"Blind":2,"Bottle":2,"Cable":2,"Candle":2,"Clerk":2,"Cloud":2,"Concert":2,"Counter":2,"Flower":2,"Grandfather":2,"Harm":2,"Knee":2,"Lawyer":2,"Leather":2,"Load":2,"Mirror":2,"Neck":2,"Pension":2,"Plate":2,"Purple":2,"Ruin":2,"Ship":2,"Skirt":2,"Slice":2,"Snow":2,"Specialist":2,"Stroke":2,"Switch":2,"Trash":2,"Tune":2,"Zone":2,"Anger":1,"Award":1,"Bid":1,"Bitter":1,"Boot":1,"Bug":1,"Camp":1,"Candy":1,"Carpet":1,"Cat":1,"Champion":1,"Channel":1,"Clock":1,"Comfort":1,"Cow":1,"Crack":1,"Engineer":1,"Entrance":1,"Fault":1,"Grass":1,"Guy":1,"Hell":1,"Highlight":1,"Incident":1,"Island":1,"Joke":1,"Jury":1,"Leg":1,"Lip":1,"Mate":1,"Motor":1,"Nerve":1,"Passage":1,"Pen":1,"Pride":1,"Priest":1,"Prize":1,"Promise":1,"Resident":1,"Resort":1,"Ring":1,"Roof":1,"Rope":1,"Sail":1,"Scheme":1,"Script":1,"Sock":1,"Station":1,"Toe":1,"Tower":1,"Truck":1,"Witness":1,"You":2041,"It":1386,"Can":895,"Will":577,"If":546,"One":441,"Many":397,"Most":378,"Other":369,"Use":319,"Make":262,"Good":201,"Look":144,"Help":141,"Go":131,"Great":126,"Being":124,"Few":117,"Might":116,"Still":112,"Public":97,"Read":97,"Keep":96,"Start":96,"Give":93,"Human":92,"Local":90,"General":85,"She":85,"Specific":83,"Long":82,"Play":75,"Feel":74,"High":74,"Tonight":71,"Put":70,"Common":69,"Set":69,"Change":67,"Simple":63,"Past":60,"Big":59,"Possible":59,"Particular":58,"Today":54,"Major":53,"Personal":53,"Current":52,"National":52,"Cut":50,"Natural":50,"Physical":50,"Show":50,"Try":50,"Check":49,"Second":49,"Call":47,"Move":47,"Pay":47,"Let":46,"Increase":45,"Single":45,"Individual":44,"Turn":44,"Ask":42,"Buy":42,"Guard":42,"Hold":42,"Main":42,"Offer":42,"Potential":42,"Professional":42,"International":41,"Travel":41,"Cook":40,"Alternative":39,"Following":39,"Special":39,"Working":39,"Whole":38,"Dance":37,"Excuse":37,"Cold":34,"Commercial":34,"Low":34,"Purchase":34,"Deal":33,"Primary":33,"Worth":33,"Fall":32,"Necessary":31,"Positive":31,"Produce":31,"Search":31,"Present":30,"Spend":30,"Talk":30,"Creative":29,"Tell":29,"Cost":28,"Drive":28,"Green":28,"Support":28,"Glad":27,"Removal":27,"Return":27,"Run":27,"Complex":26,"Due":26,"Effective":26,"Middle":26,"Regular":26,"Reserve":26,"Independent":25,"Leave":25,"Original":25,"Reach":25,"Rest":25,"Serve":25,"Watch":25,"Beautiful":24,"Charge":24,"Active":23,"Break":23,"Negative":23,"Safe":23,"Stay":23,"Visit":23,"Visual":23,"Affect":22,"Cover":22,"Report":22,"Rise":22,"Walk":21,"White":21,"Beyond":20,"Junior":20,"Pick":20,"Unique":20,"Anything":19,"Classic":19,"Final":19,"Lift":19,"Mix":19,"Private":19,"Stop":19,"Teach":19,"Western":19,"Concern":18,"Familiar":18,"Fly":18,"Official":18,"Broad":17,"Comfortable":17,"Gain":17,"Maybe":17,"Rich":17,"Save":17,"Stand":17,"Young":17,"Fail":16,"Heavy":16,"Hello":16,"Lead":16,"Listen":16,"Valuable":16,"Worry":16,"Handle":15,"Leading":15,"Meet":15,"Release":15,"Sell":15,"Finish":14,"Normal":14,"Press":14,"Ride":14,"Secret":14,"Spread":14,"Spring":14,"Tough":14,"Wait":14,"Brown":13,"Deep":13,"Display":13,"Flow":13,"Hit":13,"Objective":13,"Shoot":13,"Touch":13,"Cancel":12,"Chemical":12,"Cry":12,"Dump":12,"Extreme":12,"Push":12,"Conflict":11,"Eat":11,"Fill":11,"Formal":11,"Jump":11,"Kick":11,"Opposite":11,"Pass":11,"Pitch":11,"Remote":11,"Total":11,"Treat":11,"Vast":11,"Abuse":10,"Beat":10,"Burn":10,"Deposit":10,"Print":10,"Raise":10,"Sleep":10,"Somewhere":10,"Advance":9,"Anywhere":9,"Consist":9,"Dark":9,"Double":9,"Draw":9,"Equal":9,"Fix":9,"Hire":9,"Internal":9,"Join":9,"Kill":9,"Sensitivity":9,"Tap":9,"Win":9,"Attack":8,"Claim":8,"Constant":8,"Drag":8,"Drink":8,"Guess":8,"Minor":8,"Pull":8,"Raw":8,"Soft":8,"Solid":8,"Wear":8,"Weird":8,"Wonder":8,"Annual":7,"Count":7,"Dead":7,"Doubt":7,"Feed":7,"Forever":7,"Impress":7,"Nobody":7,"Repeat":7,"Round":7,"Sing":7,"Slide":7,"Strip":7,"Whereas":7,"Wish":7,"Combine":6,"Command":6,"Dig":6,"Divide":6,"Equivalent":6,"Hang":6,"Hunt":6,"Initial":6,"March":6,"Mention":6,"Smell":6,"Spiritual":6,"Survey":6,"Tie":6,"Adult":5,"Brief":5,"Crazy":5,"Escape":5,"Gather":5,"Hate":5,"Prior":5,"Repair":5,"Rough":5,"Sad":5,"Scratch":5,"Sick":5,"Strike":5,"Employ":4,"External":4,"Hurt":4,"Illegal":4,"Laugh":4,"Lay":4,"Mobile":4,"Nasty":4,"Ordinary":4,"Respond":4,"Royal":4,"Senior":4,"Split":4,"Strain":4,"Struggle":4,"Swim":4,"Train":4,"Upper":4,"Wash":4,"Yellow":4,"Convert":3,"Crash":3,"Dependent":3,"Fold":3,"Funny":3,"Grab":3,"Hide":3,"Miss":3,"Permit":3,"Quote":3,"Recover":3,"Resolve":3,"Roll":3,"Sink":3,"Slip":3,"Spare":3,"Suspect":3,"Sweet":3,"Swing":3,"Twist":3,"Upstairs":3,"Usual":3,"Abroad":2,"Brave":2,"Calm":2,"Concentrate":2,"Estimate":2,"Grand":2,"Male":2,"Mine":2,"Prompt":2,"Quiet":2,"Refuse":2,"Regret":2,"Reveal":2,"Rush":2,"Shake":2,"Shift":2,"Shine":2,"Steal":2,"Suck":2,"Surround":2,"Anybody":1,"Bear":1,"Brilliant":1,"Dare":1,"Dear":1,"Delay":1,"Drunk":1,"Female":1,"Hurry":1,"Inevitable":1,"Invite":1,"Kiss":1,"Neat":1,"Pop":1,"Punch":1,"Quit":1,"Reply":1,"Representative":1,"Resist":1,"Rip":1,"Rub":1,"Silly":1,"Smile":1,"Spell":1,"Stretch":1,"Stupid":1,"Tear":1,"Temporary":1,"Tomorrow":1,"Wake":1,"Wrap":1,"Yesterday":1};

function getNounsWeighted() {
	var result = [];
	for (const [noun, freq] of Object.entries(NOUNS_WITH_FREQUENCY)) {
		result.push(new WeightedValue(noun, freq));
	}
	return result;
}

const NOUNS = Object.keys(NOUNS_WITH_FREQUENCY);
const NOUNS_WEIGHTED = getNounsWeighted();



PROFESSIONS = [
	'Accountant', 'Auditor', 'Actor', 'Actuary', 'Acupuncturist', 'Acute Care Nurse', 'Adapted Physical Education Specialist', 'Aerospace Engineer', 'Air Traffic Controller', 'Airline Pilot', 'Anesthesiologist', 'Anesthesiology Assistant', 'Ambulance Driver', 'Agricultural Engineer', 'Appraiser', 'Archaeologist', 'Architect', 'Archivist', 'Armored Vehicle Driver', 'Art Director', 'Art Therapist', 'Arbitrator', 'Artillery Officer', 'Artist', 'Ambassador', 'Astronomer', 'Astrologist', 'Athlete', 'Athletic Trainer', 'Atmospheric Scientist', 'Audio Technician', 'Audiologist', 'ATM Servicer', 'Automotive Engineer', 'Aviation Inspector', 'Alchemist', 'Aerobics Instructor', 'Admiral', 'Announcer',
	'Baker', 'Baggage Porter', 'Bellhop', 'Bailiff', 'Barber', 'Barista', 'Bartender', 'Bicycle Repairer', 'Billing Clerk', 'Bookbinder', 'Biochemist', 'Biophysicist', 'Biofuels/Biodiesel Technology and Product Development Manager', 'Bioinformatics Scientist', 'Biology Teacher', 'Biologist', 'Biomass Plant Technician', 'Biostatistician', 'Boat Builder', 'Bookkeeper', 'Brickmason', 'Blockmason', 'Bridge Builder', 'Brokerage Clerk', 'Budget Analyst', 'Building Manager', 'Bus Driver', 'Business Administrator', 'Butcher', 'Bishop', 'Border Patrol Officer', 'Blaster', 'Blind Man', 'Backend Developer',
	'Cleaner', 'Cameraman', 'Captain', 'Caption Writer', 'Cargo Agent', 'Carpenter', 'Cartographer', 'Cartoonist', 'Cashier', 'Ceiling Tile Installer', 'Chef', 'Cook', 'Chemical Engineer', 'Chemist', 'Chemistry Teacher', 'CEO', 'CTO', 'COO', 'CFO', 'Creative Director', 'Child Care Worker', 'Chiropractor', 'Choreographer', 'City Planner', 'Civil Engineer', 'Claims Adjuster', 'Car Wash Attendant', 'Clergyman', 'Cardinal', 'Coach', 'Community Manager', 'Compliance Officer', 'Composer', 'Customer Support', 'Call Center Agent', 'Concierge', 'Construction Worker', 'Copy Writer', 'Coroner', 'Correctional Officer', 'Cost Estimator', 'Costume Designer', 'Counselor', 'Courier', 'Court Clerk', 'Court Reporter', 'Craftsman', 'Creative Writer', 'Credit Analyst', 'Critical Care Nurse', 'Curator', 'Customs Inspector', 'Cricket Player', 'Chip Designer', 'Cowboy', 'Conman', 'Cosmetologist', 'Composer', 'Chauffeur', 
	'Drama Teacher', 'Dating Advisor', 'Diver', 'Dancer', 'Database Administrator', 'Dentist', 'Dental Assistant', 'Dermatologist', 'Oil Derrick Operator', 'Designer', 'Detective', 'Director', 'Movie Director', 'Dishwasher', 'Dispatcher', 'Drilling Operator', 'Driver', 'Data Scientist', 'Deputy',
	'Economist', 'Editor', 'Electrician', 'Electrical Engineer', 'Elevator Technician', 'Embalmer', 'EMT', 'Endoscopy Technician', 'Energy Engineer', 'Engineer', 'Engine Technician', 'Engineering Manager', 'English Teacher', 'Engraver', 'Entertainer', 'Epidemiologist', 'Etcher', 'Explosives Worker', 
	'Fast Food Cook', 'Football Player', 'Fabric Mender', 'Family Doctor', 'Farmer', 'Farmworker', 'Fashion Designer', 'Fence Erector', 'Fiberglass Laminator', 'Film Editor', 'Financial Analyst', 'Finance Manager', 'Finance Advisor', 'Firefighter', 'Fire Inspector', 'Fire Investigator', 'Fisherman', 'Fish Farmer', 'Fitness Trainer', 'Flight Attendant', 'Food Safety Technician', 'Forester', 'Forger', 'Framemaker', 'Freight Inspector', 'Fuel Cell Engineer', 'Fundraiser', 'Funeral Attendant', 'Funeral Director', 'Furnace Operator', 'Frontend Developer',
	'Game Director', 'Gaming Supervisor', 'Game Developer', 'Gas Plant Operator', 'Gauger', 'Gemcutter', 'Geneticist', 'Geographer', 'Geologist', 'Glass Blower', 'Governor', 'Graphic Designer', 'Gatekeeper', 'Game Tester', 'General', 'Gynecologists', 'Game Designer',
	'Hairdresser', 'Hair Stylist', 'Healthcare Worker', 'Helper', 'Historian', 'Highwayman', 'Highway Patrol Officer', 'Host', 'Hotel Manager', 'Human Resources Manager', 'Hunter', 'Hydrologist',
	'Industrial Designer', 'Illustrator', 'Inventor', 'Immigration Inspector', 'Industrial Engineer', 'Infantry Officer', 'Inspector', 'Interior Designer', 'Interpreter', 'Interviewer', 'Investor',
	'Job Seeker', 'Jailer', 'Janitor', 'Jeweler', 'Judge', 
	'Kindergarten Teacher',
	'Life Coach', 'Lab Technician', 'Landscape Architect', 'Laundry Worker', 'Law Clerk', 'Lawyer', 'Lawn Manager', 'Legal Secretary', 'Legislator', 'Librarian', 'License Clerk', 'Lifeguard', 'Lab Cleaner', 'Loan Counselor', 'Locksmith', 'Logistics Manager', 'Loss Prevention Manager', 'Lieutenant',
	'Mediator', 'Meat Cutter', 'Messenger', 'Magistrat', 'Magician', 'MRI Technician', 'Mailman', 'Makeup Artist', 'Manager', 'Manicurist', 'Market Research Analyst', 'Marine Biologist', 'Marriage Counselor', 'Massage Therapist', 'Mathematician', 'Medical Assistant', 'Metal Worker', 'Microbiologist', 'Middle School Teacher', 'Midwife', 'Military Officer', 'Miller', 'Miner', 'Model', 'Mortician', 'Museum Conservator', 'Musician', 'Meat Packer',
	'Network Administrator', 'Nutritionist', 'Night Manager', 'Nanny', 'Nanotechnology Engineer', 'Neurologist', 'Nuclear Engineer', 
	'Ordnance Handling Expert', 'Office Administrator', 'Office Clerk', 'Operator', 'Ophtalmologist', 'Optician', 'Optometrist', 'Orderly', 'Orthodontist',
	'Priest', 'Pastor', 'Pope', 'Psychologist', 'Personal Trainer', 'Pickup Artist', 'Pilot', 'Programmer', 'Painter', 'President', 'Politician', 'Prime Minister', 'Pedicurist', 'Prosthetist', 'Paralegal', 'Park Ranger', 'Parking Lot Attendant', 'Pathologist', 'Patternmaker', 'Payroll Clerk', 'Pediatrician', 'Personal Finance Advisor', 'Pharmacist', 'Philosopher', 'Phlebotomist', 'Photographer', 'Physical Therapist', 'Physician', 'Physics Teacher', 'Pile-Driver Operator', 'Pilot', 'Pipelayer', 'Platemaker', 'Plumber', 'Podiatrist', 'Poet', 'Policeman', 'Postmaster', 'Potter', 'Printer', 'Presser', 'Private Detective', 'Probation Officer', 'Producer', 'Project Manager', 'Planner', 'Property Manager', 'Psychiatrist', 'PR Manager', 'Pump Operator', 'Purchasing Manager', 
	'Researcher', 'Representative', 'Race Driver', 'Recruiter', 'Radio Mechanic', 'Radiologist', 'Railroad Inspector', 'Real Estate Broker', 'Receptionist', 'Recycling Coordinator', 'Reporter', 'Retail Salesman', 'Rigger', 'Roofer', 'Retail Investor',
	'Seaman', 'Sailor', 'Scout', 'Software Architect', 'Software Engineer', 'Street Vendor', 'Sheperd', 'Sculptor', 'Senator', 'Sorcerer', 'Social Worker', 'Shipmate', 'Soldier', 'Scrum Master', 'Shoutcaster', 'Scientist', 'Sales Manager', 'Sculptor', 'Scammer', 'Stock Trader', 'Stock Broker', 'Security Guard', 'Set Designer', 'Service Station Attendant', 'Sewer', 'Sheriff', 'Ship Captain', 'Shoemaker', 'Silversmith', 'Singer', 'Sketch Artist', 'Slaughterer', 'Sociologist', 'Software Developer', 'Solderer', 'Sound Engineer', 'Spa Manager', 'Special Forces', 'Spotter', 'Statistician', 'Stonecutter', 'Stonemason', 'Stripper', 'Surgeon', 'Supply Chain Manager', 'Subway Operator', 'Surveyor', 
	'Tailor', 'Tennis Player', 'Trapper', 'Tester', 'Therapist', 'Train Conductor', 'Taxi Driver', 'Tax Collector', 'Teacher', 'Technical Director', 'Telemarketer', 'Teller', 'Therapist', 'Tour Guide', 'Transportation Planner', 'Travel Agent', 'Treasurer', 'Tree Trimmer', 'Truck Driver', 'Typesetter', 
	'Undertaker', 'Upholsterer', 'Urologist', 'Usher', 
	'Veterinarian', 
	'Wizard', 'Waiter', 'Watchman', 'Web Developer', 'Welder', 'Woodworker', 'Writer',
	'Zookeeper', 'Zoologist'
];

ANIMALS = ['Dog', 'Cat', 'Alpaca', 'Llama', 'Swordfish', 'Shark', 'Crocodile', 'Cattle', 'Sheep', 'Insect', 'Rat']
ANIMAL_PROFESSIONS = ["Breeder", "Sitter", "Keeper", "Trainer"]

function randomAnimalProfession() {
	const animal = draw(ANIMALS);
	const prof = draw(ANIMAL_PROFESSIONS);
	return animal + " " + prof;
}

function randomProfession() {
	return drawWeighted([
		new WeightedValue(function () { return draw(PROFESSIONS); }, 100),
		new WeightedValue(function () { return randomAnimalProfession() }, 10)
	])();
}

FEMALE_RELATIONS = [
	'Sister', 'Wife', 'Daughter', 'Mother', 'Sister-in-Law', 'Mother-in-Law', 'Stepmother', 'Stepsister', 'Cousin', 'Girlfriend', 'Lover', 'Secretary', 'Aunt', 'Grandmother', 'Granddaughter', 'Cousin', 'Nurse', 'Woman'
]

TOURIST_CITIES = [
	'Hong Kong', 'Bangkok', 'London', 'Macau', 'Singapore', 'Paris', 'Dubai', 'New York', 'New York City', 'Kuala Lumpur', 'Istanbul', 'Delhi', 'Antalya', 'Shenzhen', 'Mumbai', 'Phuket', 'Rome', 'Tokyo', 'Pattaya', 'Taipei', 'Mecca', 'Guangzhou', 'Prague', 'Medina', 'Seoul', 'Amsterdam', 'Agra', 'Miami', 'Osaka', 'Las Vegas', 'Shanghai', 'Ho Chi Minh', 'Denpasar', 'Barcelona', 'Los Angeles', 'Milan', 'Chennai', 'Vienna', 'Johor Bahru', 'Jaipur', 'Cancun', 'Berlin', 'Cairo', 'Athens', 'Orlando', 'Moscow', 'Venice', 'Madrid', 'Ha Long', 'Riyadh', 'Dublin', 'Florence', 'Hanoi', 'Toronto', 'Johannesburg', 'Sydney', 'Munich', 'Jakarta', 'Beijing', 'Saint Petersburg', 'Brussels', 'Jerusalem', 'Budapest', 'Lisbon', 'Dammam', 'Penang Island', 'Heraklion', 'Kyoto', 'Zhuhai', 'Vancouver', 'Chiang Mai', 'Copenhagen', 'San Francisco', 'Melbourne', 'Warsaw', 'Marrakesh', 'Kolkata', 'Cebu City', 'Auckland', 'Tel Aviv', 'Guilin', 'Honolulu', 'Hurghada', 'Krakow', 'Mugla', 'Buenos Aires', 'Chiba', 'Frankfurt', 'Stockholm', 'Lima', 'Da Nang', 'Batam', 'Nice', 'Fukuoka', 'Abu Dhabi', 'Jeju', 'Porto', 'Rhodes', 'Rio de Janeiro', 'Krabi', 'Bangalore', 'Mexico City', 'Punta Cana', 'Sao Paulo', 'Zürich', 'Montreal', 'Washington D.C.', 'Chicago', 'Düsseldorf', 'Boston', 'Chengdu', 'Edinburgh', 'San Jose', 'Tehran', 'Houston', 'Hamburg', 'Cape Town', 'Manila', 'Bogota', "Xi'An", 'Beirut', 'Geneva', 'Colombo', 'Xiamen', 'Bucharest', 'Casablanca', 'Atlanta', 'Sofia', 'Dalian', 'Montevideo', 'Ammam', 'Hangzhou', 'Pune', 'Durban', 'Dallas', 'Accra', 'Quito', 'Tianjin', 'Qingdao', 'Philadelphia', 'Lagos'];
ANCIENT_CITIES = [
	'Luxor', 'Annaba', 'Asmara', 'Berbera', 'Tangier', 'Tripoli', 'Zeila', 'Avalites', 'Constantine', 'Benghazi', 'Mendefera', 'Askum', 'Alexandria', 'Mogadishu', 'Cairo', 'Kismayo', 'Fes', 'Oujda', 'Marrakesh',
	'Benin', 'Ife', 'Zanzibar', 'Walata', 'Sofala', 'Pate', 'Mombasa', 'Moroni', 'Agadez', 'Kano', 'Timbuktu', 'Malindi', "M'banza", 'Quelimane', 'Tanga', 'Lagos', 'Ouidah', 'Cape Town', 'Kumasi',
	'Quito', 'Cusco', 'Cumana', 'Santa Marta', 'Sao Vicente', 'Sao Paulo', 'Piura', 'Lima', 'Cali', 'Asuncion', 'Santiago', 'Salvador', 'Santiago de Estero',
	'Sayram', 'Delhi', 'Peshawar', 'Bukhara', 'Varanasi', 'Bactra', 'Ujjain', 'Madurai', 'Patna', 'Samarqand', 'Chittagong', 'Amaravati', 'Bamyan', 'Kathmandu', 'Lahore', 
	'Hanoi', 'Jakarta', 'Lavo', 'Palembang', 'Manila', 'Phnom Penh', 'Malacca',
	'Damascus', 'Jericho', 'Beirut', 'Jerusalem', 'Aleppo', 'Homs', 'Erbil', 'Arrapha', 'Ankara', 'Jaffa', 'Acre', 'Hebron', 'Istanbul', 'Byzantion', 'Lod', 
	'Argos', 'Genoa', 'Athens', 'Thebes', 'Lisbon', 'Chios', 'Nicosia', 'Seville', 'Malaga', 'Medina', 'Cagliari', 'Messina', 'Como', 'Rome', 'Calabria', 'Palermo', 'Syracuse', 'Volterra', 'Kroton', 'Taras', 'Corfu', 'Naples', 'Ibiza', 'Marseille', 'Milan', 'Lamia', 'Rhodes', 'Sofia', 'Metz', 'Thessaloniki', 'Barcelona', 'Belgrade', 'Cartagena', 'Tarragona', 'Bratislava', 'Valencia', 'Paris', 'Zürich', 'Cologne', 'Trier', 'Augsburg', 'Worms', 'Strasbourg', 'Skopje'];
ISLANDS = [
	'Mallorca', 'Paros', 'St Lucia', 'Öland', 'Tobago', 'Formentera', 'Culebra', 'Koh Rong Samloem', 'Cozumel', 'Jicaro', 'La Digue', 'Seychelles', 'Laucala Island', 'Fiji', 'Mont-Saint Michel', 'St. Barts', 'the Caribbean', 'Salt Spring Island', 'Grand Cayman', 'Cayman Islands', 'Pulau Tengah', 'Gozo', 'the Galapagos Islands', 'Raningtoto Island', 'Curacao', 'the Maldives', 'Cebu', 'the Philippines', 'Aitutaki', 'the Cook Islands', 'Colonsay', 'Kauai', 'Hawaii', 'Havelock Island', 'the Andaman Islands', 'Santorini', 'Corsica', 'Cape Breton Island', 'Ibiza', 'Bali', 'Fraser Island', 'Capri', 'Koh Tao', 'the Azores', 'Rawa Island', 'Bora Bora', 'Lummi Island', 'Barbados', 'Pemba Island', 'Zanzibar', 'the Aran Islands', 'Korcula', 'Sommaroy', 'Espiritu Santo', 'Palawan', 'Flatey'];
	
function randomPlace() {	
	return draw([
		function() { return draw(TOURIST_CITIES); },
		function() { return draw(['Ancient ','']) + draw(ANCIENT_CITIES); },
		function() { return draw(ISLANDS); }
	])();
}

function plural(word) {
	wlen = word.length;
	if (word[wlen-1] === 'y' && !'aeiou'.includes(word[wlen-2])) {
		return word.substring(0, wlen-1) + 'ies';
	}
	if (word[wlen-1] === 's') {
		if (word[wlen-2] === 's') {
			// Success -> Successes
			return word + 'es';
		}
		if (word[wlen-2] === 'u') {
			// Special case for Virus 
			if (word === 'Virus') {
				return 'Viruses';
			}
			// Bonus -> Boni
			return word.substring(0, wlen-2) + 'i';
		}
		if (word[wlen-2] === 'i') {
			// Basis -> Bases
			return word.substring(0, wlen-2) + 'es';
		}
		// otherwise assume word is already pluralized / doesn't have singular
		return word;
	}
	if (word.endsWith('-in-Law')) {
		return word.substring(0, wlen-7) + 's-in-Law';
	}
	if (word.endsWith('man')) {
		return word.substring(0, wlen-2) + 'en';
	}
	return word + 's';
}

function unchanged(word) { return word; }

function articleCandidates(word) {
	const firstChar = word[0].toUpperCase();
	
	if (['Use','Unique'].includes(word)) {
		return ['a ', 'the '];
	}
	
	if ('AEIOU'.includes(firstChar)) {
		return ['an ', 'the '];
	}
	return ['a ', 'the '];
}
	


function occupationsFemaleRelation() {
	return "The " + randomProfession() + "'s " + draw(FEMALE_RELATIONS);
}

function AofBandC() {
	const firstNoun = draw(NOUNS);
	const articlesFirst = articleCandidates(firstNoun);
	
	var secondNoun = draw(NOUNS);
	while (secondNoun === firstNoun) {
		console.log("retry second noun because " + secondNoun + " = " + firstNoun);
		secondNoun = draw(NOUNS);
	}
	const articlesSecond = articleCandidates(secondNoun);
	
	var thirdNoun = draw(NOUNS);
	while (thirdNoun === firstNoun || thirdNoun == secondNoun) {
		console.log("retry 3rd noun because " + firstNoun + ", " + secondNoun + ", " + thirdNoun);
		thirdNoun = draw(NOUNS);
	}
	
	return draw([
		function() { return capitalize(draw(articlesFirst)) + firstNoun + " of " + secondNoun + " and " + thirdNoun; },
		function() { return capitalize(draw(articlesFirst)) + firstNoun + draw([" of ", " and "]) + draw(articlesSecond.concat('')) + secondNoun; },
		function() { return firstNoun + draw([" of ", " and "]) + secondNoun; },
		function() { return capitalize(draw(articlesFirst)) + firstNoun + " of " + plural(secondNoun); }
	])();
}
	

function theOccupationOfPlace() {
	const profession = draw([unchanged, plural])(randomProfession());
	const place = randomPlace();
	return "The " + profession + draw([" of ", " from "]) + place;
}

function theFemaleRelationOfPlace() {
	const femrel = draw([unchanged, plural])(draw(FEMALE_RELATIONS));
	const place = randomPlace();
	return 'The ' + femrel + draw([' of ',' from ']) + place;
}

function theFemaleRelationOfPlacesProfession() {
	const femrel = draw([unchanged, plural])(draw(FEMALE_RELATIONS));
	const place = randomPlace();
	const profession = draw([unchanged, plural])(randomProfession());
	
	return 'The ' + femrel + ' of ' + place + "'s " + profession;
}

function theOccupationOfPlacesFemaleRelations() {
	const femrel = draw([plural])(draw(FEMALE_RELATIONS));
	const place = randomPlace();
	const profession = draw([unchanged, plural])(randomProfession());

	return 'The ' + profession + ' of ' + place + "'s " + femrel;
}

const GENERATORS = [
	new WeightedValue(AofBandC, 2),
	new WeightedValue(occupationsFemaleRelation, 1),
	new WeightedValue(theOccupationOfPlace, 1),
	new WeightedValue(theFemaleRelationOfPlace, 1),
	new WeightedValue(theFemaleRelationOfPlacesProfession, 1),
	new WeightedValue(theOccupationOfPlacesFemaleRelations, 1),
]

function randomName() {
	return drawWeighted(GENERATORS)();
}

function getNumberOfCombinations() {
	var numAnimalProfessions = ANIMAL_PROFESSIONS.length * ANIMALS.length;
	var numProfessions = PROFESSIONS.length + numAnimalProfessions;
	var numFemaleRelations = FEMALE_RELATIONS.length;
	var numOcsFemRel = numProfessions * numFemaleRelations;
	var numPlaces = TOURIST_CITIES.length + 2 * ANCIENT_CITIES.length + ISLANDS.length;
	
	var numNouns = NOUNS.length;
	var numAofBandC = 2 * numNouns * numNouns * numNouns;
	var numTheAofTheB = 2 * numNouns * 2 * 2 * numNouns;
	var numAofB = numNouns * 2 * numNouns;
	var numTheAofBs = 2 * numNouns * numNouns;
	var numOccOfPlace = numProfessions * 2 * numPlaces;
	var numFemRelOfPlace = numFemaleRelations * 2 * numPlaces;
	var numFemRelOfPlacesProf = numFemaleRelations * 2 * numPlaces * numProfessions * 2;
	var numProfOfPlacesFemRel = numFemaleRelations * 2 * numPlaces * numProfessions * 2;
	
	return numOcsFemRel + numAofBandC + numTheAofTheB + numAofB + numOccOfPlace + numFemRelOfPlace + numFemRelOfPlacesProf + numProfOfPlacesFemRel;
}