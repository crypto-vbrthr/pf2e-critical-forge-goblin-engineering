# PF2E Critical Forge: Goblin Engineering

Version **0.1.0**

Goblin Engineering is a humorous expansion for PF2E Critical Forge. Its cards treat critical fumbles as short-lived equipment incidents: springs object, latches become overconfident, ammunition systems panic, and sometimes the weapon simply emits an indignant squeak.

The comedy comes from unreliable equipment and awkward consequences rather than insulting the character. No card in this module permanently destroys equipment or creates repair costs.


## Part of the Forge Suite

**Critical Forge: Goblin Engineering** is part of the **Forge Suite**, a growing collection of Foundry VTT modules and add-ons built for the busy Game Master. The suite is designed to reduce preparation and bookkeeping, make common GM tasks easier, and add useful tools that help make running and playing campaigns smoother and more enjoyable.

An overview of the Forge Suite, its modules, add-ons, and shared documentation is available here:

**Forge Suite:** https://github.com/crypto-vbrthr/pf2e-forge-suite


## Feedback, Bug Reports & Feature Requests

Found a bug, have an idea for an improvement, or would like to suggest a new feature?

Feedback is always welcome. Please feel free to open a new **GitHub Issue** at any time, whether you want to report a problem, suggest a quality-of-life improvement, propose a new feature, or share an idea for how the module could be made more useful.

When reporting a bug, please include as much relevant information as possible, such as the Foundry VTT version, PF2e system version, module version, steps to reproduce the issue, and any console errors or screenshots that may help identify the problem.

Suggestions and feature requests are equally welcome. Even small ideas can lead to useful improvements.

**Open an issue here:** https://github.com/crypto-vbrthr/pf2e-critical-forge-goblin-engineering/issues


## Current content

### Weapon Malfunctions - 30 / 30 cards

The completed Weapon Malfunctions deck contains thirty cards for critical fumbles with non-spell melee weapons. Unarmed attacks, spell attacks, and ranged attacks are excluded.

The deck deliberately ranges beyond simple action taxes. It includes temporary weapon-property changes, defensive and utility modes, movement oddities, small random outcomes, light and noise, controlled positive side effects, and several purely narrative equipment incidents.

### Ranged Engineering - 30 / 30 cards

The completed Ranged Engineering deck provides thirty cards for critical fumbles with non-spell ranged weapons. Ranged unarmed attacks and spell attacks are excluded so the deck stays focused on actual equipment.

The full deck covers reload and ammunition systems, safety interlocks, recoil and pressure hardware, bow-string controls, sling payload experiments, projectile retrieval, temporary optics modes, overenthusiastic maintenance systems, compact storage behavior, and numerous diagnostic devices that are much more confident than useful.

Ranged Engineering is intentionally narrower than Martial Consequences: Ranged Mishaps. Ranged Mishaps covers firing positions, sightlines, cover, range estimation, projectile paths, target reactions, and shooting rhythm. Ranged Engineering instead asks what happens when the weapon, ammunition system, safety mechanism, pressure regulator, or retrieval feature becomes the source of the problem.

Across all three blocks, the deck includes nine narrative-only incidents, several mixed outcomes, ammunition and reload oddities, bow-, sling-, and firearm-specific hardware, temporary visual and survey configurations, thrown-weapon retrieval incidents, and rare bounded benefits that never erase the original critical fumble. None of these cards permanently damages the weapon or creates repair costs.

### Equipment Incidents - 30 / 30 cards

Equipment Incidents uses Critical Forge's skill-check critical context. The stable deck contains thirty equipment-heavy critical-failure cards for Repair, Craft, Pick a Lock, Disable a Device, Treat Wounds, Administer First Aid, Treat Disease, and Treat Poison. The module requires Critical Forge 1.0.1-rc.6.1 so the normalized PF2e action slugs used by these cards match reliably in live rolls.

The completed deck deliberately layers its humor on top of the normal PF2e critical-failure result instead of replacing it. A failed Repair still damages the item, a failed Pick a Lock still breaks the tools, a failed Disable a Device can still trigger the mechanism, and a failed Treat Wounds still causes its normal damage. Goblin Engineering adds short-lived tool behavior, paperwork, calibration problems, workspace hazards, and occasional bounded upside around those outcomes.

Shield-only actions are still outside this deck because Raise a Shield does not make a check and therefore does not create a skill-critical trigger.

## Stable release

Version `0.1.0` promotes the complete 90-card set after successful release-candidate testing in Foundry VTT. No card permanently destroys equipment, creates repair costs, or cancels the triggering critical fumble or skill critical failure. Strong attack consequences are deliberately low-weight, while narrative-only incidents remain common enough to keep the module playful rather than relentlessly punitive.

The stable release is validated against PF2E Critical Forge 1.0.1-rc.6.1 and its `cards.skillCheckCriticals` capability. See `docs/RELEASE_REVIEW.md` for the review matrix and final balance distribution.

## Requirements

- Foundry VTT 14
- Pathfinder Second Edition 8.1.2 or newer
- PF2E Critical Forge 1.0.1-rc.6.1 or newer (API 0.9.7+, `cards.skillCheckCriticals`)

## Settings

Each Goblin Engineering pack has its own world setting.

- Weapon Malfunctions is enabled by default.
- Ranged Engineering is enabled by default.
- Equipment Incidents is enabled by default and can be disabled independently.

Settings refresh the registered Critical Forge packs without requiring a world restart.

## Design boundaries

Goblin Engineering does not replace other Critical Forge expansions:

- Martial Attack Fumbles covers the attacker's stance, timing, positioning, and combat rhythm.
- Ranged Mishaps covers sightlines, cover, range, projectile paths, firing positions, and target reactions.
- Arsenal covers damage-type-specific injuries and physical consequences.
- Arcane Backlash covers magical failures.
- Goblin Engineering focuses on the item itself behaving badly.

See `docs/OVERLAP_REVIEW.md` for the running comparison.
