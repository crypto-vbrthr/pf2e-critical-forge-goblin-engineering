# Changelog

## 0.1.0 - Stable Release

- Promoted the successfully live-tested 90-card release candidate to the first stable Goblin Engineering release.
- Kept all 30 Weapon Malfunctions, 30 Ranged Engineering cards, and 30 Equipment Incidents unchanged from rc.1.
- Marked all three Critical Forge pack metadata blocks as `stable`.
- Kept the tested Critical Forge baseline at 1.0.1-rc.6.1 / API 0.9.7 with the `cards.skillCheckCriticals` capability.
- Updated release metadata, documentation, and release checks for the stable 0.1.0 package.

## 0.1.0-rc.1 - Full Content, Integration & Balance Review

- Promoted the complete 90-card Goblin Engineering set to release-candidate status.
- Completed the full content, integration, localization, overlap, and weighted-balance review across all three packs.
- Confirmed the final inventory at 30 Weapon Malfunctions, 30 Ranged Engineering cards, and 30 Equipment Incidents.
- Kept the Critical Forge runtime baseline at 1.0.1-rc.6.1 / API 0.9.7 with the `cards.skillCheckCriticals` capability.
- Confirmed all Equipment Incidents preserve the normal PF2e critical-failure result before adding their equipment consequence.
- Confirmed no card permanently destroys equipment or creates repair costs.
- Corrected German pack and setting wording so magical physical weapons are not incorrectly described as excluded; the actual boundary is spell and unarmed attack contexts.
- Added `docs/RELEASE_REVIEW.md` with final card inventory, weighted impact distributions, integration boundaries, localization findings, and overlap conclusions.
- Added a module-level release check for version synchronization, dependencies, localization parity, card inventory, pack topology, archive hygiene, and JavaScript syntax.
- Marked all three pack metadata blocks as `release-candidate`.

## 0.1.0-dev.9 - Equipment Incidents III

- Added the final 10 Equipment Incidents cards, completing the skill deck at 30 / 30 cards and the module at 90 total cards.
- Added final Repair/Craft incidents for lubrication, workbench hardware, and an opinionated reference gauge.
- Added final thieves-tool incidents for lock counting, magnetic organization, continuity testing, and an overbright inspection lamp.
- Added a removable gauze terrain incident for Treat Wounds / Administer First Aid plus final Treat Disease and Treat Poison cards.
- Preserved all normal PF2e critical-failure consequences, including broken tools, triggered devices, medical damage, item damage/material loss, and disease/poison saving-throw penalties.
- Completed Equipment Incidents at 30 cards without adding magic-facing skill checks or unsupported shield-only triggers.
- Expanded DE/EN localization, roadmap, overlap review, batch regression tests, final card-count coverage, and release metadata.

## 0.1.0-dev.8 - Equipment Incidents II

- Added 10 additional Equipment Incidents cards, bringing the skill deck to 20 / 30 cards.
- Added dedicated Treat Disease and Treat Poison incidents using healer's tools, including explicit preservation of the normal critical-failure saving-throw penalty.
- Added new Repair/Craft parts-tray and toolbox incidents, a lockpick-case deployment, a Disable a Device wire-spool incident, and an emergency splint that selects the operator.
- Added two bounded information benefits through Recall Knowledge without undoing the triggering critical failure.
- Raised the Critical Forge dependency to 1.0.1-rc.6.1 while keeping API 0.9.7 and `cards.skillCheckCriticals`; this is the corrected skill action-slug matching baseline.
- Expanded DE/EN localization, roadmap and overlap documentation, content-batch tests, action coverage tests, and metadata regression coverage.

## 0.1.0-dev.7 - Equipment Incidents I

- Added the first 10 Equipment Incidents cards using Critical Forge's new skill-check critical-failure context.
- Activated the independent Equipment Incidents world setting and registered its cards in the dedicated `skill` deck.
- Raised the Critical Forge requirement to 1.0.1-rc.5 / API 0.9.7 and now require the `cards.skillCheckCriticals` capability.
- Added cards for Repair, Craft, Pick a Lock, Disable a Device, Treat Wounds, and Administer First Aid.
- Preserved PF2e's normal critical-failure consequences and layered Goblin Engineering incidents on top rather than replacing or weakening them.
- Added alternate Crafting support where PF2e options can use Crafting for Pick a Lock, Disable a Device, or construct First Aid.
- Added skill, action, and item filter support to the shared Goblin Engineering card factory.
- Added DE/EN localization, pack-setting coverage, skill-deck regression tests, and Critical Forge rc.5 validator coverage.

## 0.1.0-dev.6 - Ranged Engineering III

- Added the final 10 Ranged Engineering cards, completing the deck at 30 / 30 cards.
- Added firearm spark-arrestor failure, bow-string waxing, a sling heavy-payload selector, temporary sight protection, an overenthusiastic optics washer, and a survey configuration.
- Added three narrative-only incidents: Projectile Serial Numberer, Brass Catcher Files a Report, and Maintenance Ticket Printer.
- Added Compact Storage Mode as a post-shot transport malfunction with a small situational concealment upside.
- Preserved the boundary against Ranged Mishaps: no cover manipulation, range-estimation penalties, firing-lane geometry, target reactions, or generic shot-rhythm failures.
- Completed the Ranged Engineering deck at 30 cards and added regression/localization coverage for the final block.

## 0.1.0-dev.5 - Ranged Engineering II

- Added 10 additional Ranged Engineering cards, bringing the deck to 20 / 30 cards.
- Added a temporary close-quarters Shove attachment, double-feed optimization, emergency hearing protection, bow-string dampening, sling stabilization, an aggressive retrieval reel, and a self-zeroing sight sequence.
- Added three new narrative-only incidents: Trigger Apology Protocol, Windage Knob Comes Off, and Ammunition Inspector.
- Expanded hardware-specific coverage for bows, firearms, slings, thrown weapons, and ammunition-fed ranged weapons without moving into Ranged Mishaps terrain.
- Preserved the rule that critical fumbles remain critical fumbles, equipment is not permanently damaged, and positive side effects stay bounded and temporary.
- Added regression tests and localization coverage for the second Ranged Engineering block.

## 0.1.0-dev.4 - Ranged Engineering I

- Added the first 10 Ranged Engineering cards.
- Activated the independent Ranged Engineering world setting and pack registration.
- Restricted Ranged Engineering to non-spell ranged weapon critical fumbles and excluded ranged unarmed attacks.
- Added general equipment incidents plus bow-, firearm-, and ammunition-system-specific cards.
- Added three narrative-only ranged incidents and several controlled mixed outcomes without permanent equipment damage.
- Reviewed all 30 existing Ranged Mishaps cards and kept Ranged Engineering away from sightline, cover, firing-position, range-estimation, target-reaction, and ordinary shot-rhythm mechanics.
- Expanded card-factory support so melee and ranged Goblin Engineering packs can share the same schema safely.
- Added regression tests for ranged filters, pack settings, localization parity, overlap boundaries, and the new 10-card block.

## 0.1.0-dev.3 - Weapon Malfunctions III

- Added the final 10 Weapon Malfunctions cards, completing the deck at 30 / 30 cards.
- Added temporary Trip and parry modes, a field-repair configuration, counterthrust movement, balance indicators, a bracing foot, and an automatic disassembly demonstration.
- Added three narrative-only incidents: Quality Assurance Stamp, Operator Feedback Chime, and Instruction Manual Escapes.
- Preserved the non-spell melee weapon boundary, short-lived consequences, and the rule that no malfunction permanently damages equipment.
- Completed the initial Weapon Malfunctions content roadmap and expanded overlap and regression tests for the full 30-card deck.

## 0.1.0-dev.2 - Weapon Malfunctions II

- Added 10 additional Weapon Malfunctions cards, bringing the deck to 20 / 30 cards.
- Added temporary nonlethal mode, target-recognition loops, resonance noise, random lever behavior, a flat-check drop risk, temporary illumination, reach extension, and temporary damage-mode changes.
- Added two new narrative-only malfunctions: Field Service Hatch and Warranty Void.
- Preserved the non-spell melee weapon boundary and the rule that no card permanently damages equipment or creates repair costs.
- Expanded the overlap review and content tests for the second card block.

## 0.1.0-dev.1 - Foundation & Weapon Malfunctions I

- Added the initial Goblin Engineering Critical Forge extension module.
- Added independent world settings for Weapon Malfunctions, Ranged Engineering, and Equipment Incidents.
- Added the first 10 Weapon Malfunctions cards.
- Restricted Weapon Malfunctions to non-spell melee weapon critical fumbles and excluded unarmed and ranged attacks.
- Added German and English localization.
- Added initial overlap review against Critical Forge Core, Martial Consequences, Ranged Mishaps, Arsenal, Arcane Backlash, and Against All Odds.
- Added automated tests for metadata, settings, card identity, pack construction, localization parity, and content boundaries.
