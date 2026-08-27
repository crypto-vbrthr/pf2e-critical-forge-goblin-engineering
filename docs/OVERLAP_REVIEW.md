# Running Overlap Review

Reviewed through **0.1.0-dev.6** against the supplied Critical Forge and expansion modules.

## Critical Forge Core

Core already contains general humorous melee fumbles such as Weapon Jolt, Tangled Feet, Open Flank, Wild Swing, and Grand Gesture. Goblin Engineering therefore avoids generic off-guard, prone, clumsy, AC penalties, and ordinary attack penalties that affect the character regardless of the item.

Counterweight Goes Freelance remains the closest intentional neighbor to Weapon Jolt. It is narrower: only the same weapon is affected, and the wielder can spend an Interact action to fix the problem before attacking.

The second block avoids adding another generic weapon-jolt result. Resonance Calibration, Emergency Illumination, Auxiliary Reach Extension, and Incorrect Damage Mode all alter the weapon's behavior rather than the wielder's stance or statistics.

## Martial Consequences

Martial Attack Fumbles focuses on stance, timing, grip, guard, movement, and combat rhythm. Weapon Malfunctions instead makes the item itself the source of the problem and commonly allows switching weapons or interacting with the malfunction.

Potentially adjacent cards reviewed include Slippery Grip, Weapon Out of Line, Awkward Regrip, Forced Reset, Lost Rhythm, Late Recovery, and Guard Too Low. Target Recognition Loop was deliberately written as a same-weapon target-recognition fault rather than a generic sequencing or multiple-attack-penalty effect. Load-Bearing Question Mark risks dropping the weapon only after a Strike and can be repaired before another attack, keeping it distinct from ordinary grip failures.

## Ranged Mishaps

Ranged Mishaps already contains Ammunition Argument and other ranged handling failures. Weapon Malfunctions requires the `melee` attack trait and excludes `ranged`, so these packs do not compete for the same ranged critical-fumble contexts.

The planned Ranged Engineering deck will need a fresh comparison before implementation, particularly for ammunition, reload, recoil, and jam concepts.

## Arsenal

Arsenal focuses heavily on damage-type-specific physical consequences and injuries. Goblin Engineering does not use injury mechanics, persistent damage, or permanent equipment damage.

Incorrect Damage Mode changes the *weapon's next base physical damage type* as a temporary malfunction; it does not impose a damage-type injury or alter the target after the hit. That preserves the distinction from Arsenal's damage-specific consequence cards.

## Arcane Backlash

All Weapon Malfunctions cards exclude the `spell` attack trait. Magical backlash remains Arcane Backlash territory.

Sparks, glowing parts, smoke, and strange transformations in Goblin Engineering are explicitly presented as unreliable hardware behavior rather than magical feedback.

## Against All Odds

Against All Odds is centered on reversals and heroic outcomes under pressure. Goblin Engineering may occasionally include a small positive side effect, but the critical fumble remains a fumble and the benefit comes from the equipment behaving unpredictably rather than from heroic resilience.

This Lever Wasn't Here Before is intentionally symmetrical and random, while Safety Cap Deployed and Auxiliary Reach Extension are mixed outcomes that can occasionally become useful without converting the original critical fumble into a success.

## Internal overlap review

The second block was also checked against the first ten Goblin Engineering cards.

- Safety Cap Deployed changes damage behavior instead of merely taxing an Interact action.
- Target Recognition Loop restricts repeated targeting rather than applying another flat attack penalty.
- Resonance Calibration and Emergency Illumination affect information and visibility rather than attack resolution.
- This Lever Wasn't Here Before introduces a bounded random choice unlike Prototype Behavior's misfortune option.
- Load-Bearing Question Mark creates a post-Strike drop risk rather than duplicating Emergency Ejection System's immediate displacement.
- Field Service Hatch and Warranty Void are narrative-only incidents with different jokes from Diagnostic Squeal.
- Auxiliary Reach Extension and Incorrect Damage Mode temporarily change weapon properties, a mechanical space not used in the first block.

## Review conclusion

The first twenty cards maintain a distinct niche: temporary, item-centered failure with a humorous tone and occasional controlled upside. The final Weapon Malfunctions block should continue expanding item behavior rather than returning to generic penalties, stance failures, or ordinary grip problems.


## Weapon Malfunctions III review

The final ten-card block was checked against the same neighboring packs and the first twenty Goblin Engineering cards. No direct title duplicates were found.

- Auxiliary Hook Deployment grants a temporary weapon utility mode rather than reproducing Martial Consequences movement or stance failures.
- Automatic Parry Mode is a mixed defensive configuration tied to the malfunctioning item; it does not reproduce a general defensive critical benefit.
- Field Repair Configuration converts the weapon into a temporary tool mode and therefore remains equipment-centered even though it includes an action tax.
- Counterthrust System Activates creates bounded, source-item forced movement with an explicit disable option rather than a generic stumble.
- Balance Indicator Lights makes the weapon react to the wielder's movement history instead of imposing an unconditional attack penalty.
- Emergency Bracing Foot trades mobility for resistance to displacement, a mixed equipment state rather than an injury or condition.
- Automatic Disassembly Demonstration allows one normal Strike before requiring a brief maintenance interaction, separating it from immediate reset cards.
- Quality Assurance Stamp, Operator Feedback Chime, and Instruction Manual Escapes are narrative-only and mechanically harmless.

## Weapon Malfunctions completion

At 30 cards, Weapon Malfunctions now has a broad enough mechanical vocabulary to avoid further expansion before the other Goblin Engineering decks are explored. The completed deck remains focused on temporary item behavior, controlled chaos, and occasional upside without invalidating the original critical fumble.

## Ranged Engineering I review (0.1.0-dev.4)

Before implementing Ranged Engineering, the full 30-card **Ranged Mishaps** deck supplied with Martial Consequences was reviewed directly.

Ranged Mishaps is strongly centered on:

- lost or compromised sightlines
- firing-position exposure and forced repositioning
- cover and concealment changes
- target movement and defensive reactions
- range estimation and counterfire information
- projectile-path interaction with terrain
- shooting rhythm, target lock, and battlefield geometry

The first ten Ranged Engineering cards deliberately avoid those mechanics and move the source of the consequence into the equipment itself.

Specific boundaries checked:

- **Helpful Auto-Loader** does not duplicate Ammunition Argument. Ammunition Argument imposes a reset/action tax before the next ranged Strike; Helpful Auto-Loader is a rare post-Strike benefit produced by the weapon's reload mechanism.
- **Safety Arc Projector** is an item safety interlock, not Friendly Fire Drill's ally movement or line-of-fire penalty.
- **Recoil Absorber Overachieves** does not reproduce Recoil Stumble. It changes one shot's damage and reaction profile without moving or knocking down the attacker.
- **Payload Door Stuck Open** restricts newly selected special ammunition rather than destroying ammunition, jamming the weapon, or changing the firing lane.
- **String Tension Governor** is a bow-specific hardware tradeoff between accuracy and damage; it does not alter cover, range, or firing position.
- **Pressure Gauge Redlines** is a firearm-specific pressure-management choice with a brief self-inflicted auditory consequence. It does not damage the firearm.
- **Projectile Return Protocol** affects where a missed thrown weapon or recoverable projectile ends up. It does not create terrain, cover, target movement, or a new projectile path through the battlefield.
- **Ammunition Counter Panic**, **Range Tape Escapes**, and **Trajectory Printer** are narrative-only equipment jokes with no mechanical effect.

No Ranged Engineering title duplicates any of the 30 Ranged Mishaps titles or the six ranged-fumble titles in Critical Forge Core.

The result is a distinct split: **Ranged Mishaps describes a bad shot; Ranged Engineering describes a weapon that has started participating in the decision-making process.**

## Ranged Engineering II review (0.1.0-dev.5)

The second ten-card block was reviewed against the same 30-card Ranged Mishaps deck and against the first ten Ranged Engineering cards. No direct title duplicates were found.

- **Emergency Close-Quarters Attachment** changes the weapon into a temporary Shove-capable tool instead of altering firing position or target movement.
- **Double-Feed Optimizer** is a deliberate ammunition-system malfunction with a cost/benefit choice and a post-shot maintenance state; it does not duplicate Ammunition Argument's generic pre-shot reset.
- **Emergency Ear Protection** is a firearm accessory incident affecting hearing rather than recoil movement or firing stance.
- **String Silencer Inflates** trades a small amount of damage for reduced shot noise and is explicitly a bow-hardware state, not a Hide or sightline consequence.
- **Pouch Stabilizer Locks** is sling-specific and couples one accurate shot to a later mechanical lock rather than modifying range or battlefield geometry.
- **Retrieval Reel Overcommits** works after a shot and deliberately couples projectile recovery to becoming off-guard; this is stronger but riskier than Projectile Return Protocol and does not move the target or alter terrain.
- **Self-Zeroing Sight Overachieves** creates a two-step sight calibration sequence tied to the same weapon rather than a generic aiming or range-estimation penalty.
- **Trigger Apology Protocol**, **Windage Knob Comes Off**, and **Ammunition Inspector** are narrative-only and mechanically harmless.

The deck remains equipment-centered: the joke and the consequence both originate in a device that has begun interpreting its job description too creatively.


## Ranged Engineering III review (0.1.0-dev.6)

The final ten-card block was reviewed against the supplied 30-card Ranged Mishaps deck and the first twenty Ranged Engineering cards. No direct title duplicates were found.

- **Spark Arrestor Gives Up** creates a firearm-local spark burst around the operator rather than changing a firing lane, target defense, or recoil movement.
- **String Wax Applicator Goes Wild** is a bow maintenance sequence coupling a small damage benefit to post-shot cleanup.
- **Heavy Payload Selector** is a sling-specific optional accuracy/damage tradeoff and does not modify range increments or target movement.
- **Sight Hood Becomes Sunshade** trades weapon accuracy for temporary visual protection; it does not alter cover or line of sight.
- **Emergency Optics Washer** creates a one-shot accuracy benefit followed by operator dazzle, keeping the consequence in the sight hardware rather than battlefield geometry.
- **Observation Stock Extends** temporarily repurposes the weapon as a Seek aid at the cost of ranged accuracy.
- **Compact Storage Mode** is a post-shot folding/maintenance state with a narrow concealment utility benefit rather than a generic firing-rhythm penalty.
- **Projectile Serial Numberer**, **Brass Catcher Files a Report**, and **Maintenance Ticket Printer** are narrative-only and mechanically harmless.

Ranged Engineering is complete at 30 cards. The final deck still preserves the split established at the start of the review: Ranged Mishaps describes bad shooting circumstances, while Ranged Engineering describes hardware that has begun making unsolicited design decisions.


## Equipment Incidents I review (0.1.0-dev.7)

The first Equipment Incidents block was reviewed against the PF2e Player Core critical-failure results for the supported activities and against the existing Goblin Engineering decks.

The governing rule is deliberately conservative: **Goblin Engineering does not replace the normal skill critical failure.** Its card is an additional short-lived equipment incident.

- **Repair** already damages the item on a critical failure. Torque Limiter Enters Negotiations and Spare Parts Form a Committee do not add more item damage.
- **Craft** already loses part of the committed materials on a critical failure. Blueprint Adds an Optional Disaster and Measuring Tape Invents a Unit do not increase that loss.
- **Pick a Lock** already breaks the tools on a critical failure. Broken Pick Requests Promotion is narrative-only, while Lock Profile Accidentally Saved grants a bounded future benefit without restoring the broken tools.
- **Disable a Device** already triggers the mechanism on a critical failure. Safety Flag Deploys and Probe Locks Fully Extended do not replace or prevent that trigger.
- **Treat Wounds** already damages the patient on a critical failure. Bandage Dispenser Achieves Coverage explicitly resolves that damage first and only adds a narrow later First Aid benefit.
- **Administer First Aid** receives a short toolkit action tax from Emergency Clamp Chooses the Bag without adding damage or changing the underlying PF2e outcome.

This block also avoids Arcane Backlash territory. Identify Magic, Trick Magic Item, Learn a Spell, and other magic-facing skill failures are intentionally not included.

The result is a new mechanical lane for the module: **Weapon Malfunctions and Ranged Engineering make weapons behave badly; Equipment Incidents makes the tools involved in a failed skill activity develop unsolicited features.**
