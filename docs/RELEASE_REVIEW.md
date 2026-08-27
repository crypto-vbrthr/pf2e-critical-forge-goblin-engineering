# Goblin Engineering 0.1.0 Stable Release Review

## Scope

This review covers the complete initial Goblin Engineering module: 90 cards across Weapon Malfunctions, Ranged Engineering, and Equipment Incidents, plus pack registration, settings, Critical Forge compatibility, localization, and release metadata.

Reference baseline:

- Foundry VTT 14
- Pathfinder Second Edition 8.1.2+
- PF2E Critical Forge 1.0.1-rc.6.1+
- Critical Forge public API 0.9.7+
- Required capability `cards.skillCheckCriticals`
- Card schema 1
- Card Pack schema 1

## Content inventory

| Pack | Deck | Cards | Trigger family | Default |
| --- | --- | ---: | --- | --- |
| Weapon Malfunctions | Attack | 30 | Non-spell melee weapon critical fumbles | Enabled |
| Ranged Engineering | Attack | 30 | Non-spell ranged weapon critical fumbles | Enabled |
| Equipment Incidents | Skill | 30 | Supported equipment-heavy skill critical failures | Enabled |

Total: **90 cards**.

All card IDs and fallback titles are unique inside the module.

## Balance distribution

Weights are part of the selection pool, so the weighted percentages below are more useful than raw card counts when judging how often a severity band appears.

### Weapon Malfunctions

| Impact | Cards | Total weight | Approx. weighted share |
| --- | ---: | ---: | ---: |
| Narrative | 6 | 8.50 | 29.2% |
| Light | 8 | 7.00 | 24.1% |
| Moderate | 12 | 11.60 | 39.9% |
| Strong | 4 | 2.00 | 6.9% |

The strongest outcomes are deliberately rare. Immediate weapon displacement, misfortune behavior, repeated drop risk, and forced counterthrust therefore remain exceptional rather than routine.

### Ranged Engineering

| Impact | Cards | Total weight | Approx. weighted share |
| --- | ---: | ---: | ---: |
| Narrative | 9 | 12.60 | 46.3% |
| Light | 6 | 4.25 | 15.6% |
| Moderate | 10 | 8.10 | 29.8% |
| Strong | 5 | 2.25 | 8.3% |

Ranged Engineering intentionally has a high narrative share. This prevents the pack from becoming a second punitive ranged-fumble table and preserves its equipment-comedy identity.

### Equipment Incidents

| Impact | Cards | Total weight | Approx. weighted share |
| --- | ---: | ---: | ---: |
| Narrative | 11 | 14.85 | 46.3% |
| Light | 6 | 4.20 | 13.1% |
| Moderate | 13 | 13.00 | 40.6% |
| Strong | 0 | 0.00 | 0.0% |

Equipment Incidents deliberately contains no strong cards. PF2e skill critical failures can already carry significant native consequences, including item damage, broken thieves' tools, triggered devices, patient damage, and disease or poison penalties. Goblin Engineering therefore adds complications around those failures instead of multiplying their severity.

## Mechanical boundaries

### Weapon Malfunctions

The pack requires a melee attack context and excludes spell, unarmed, and ranged attack traits. It changes the weapon itself through temporary locks, adjustments, utility modes, reach changes, light, sound, or short-lived handling problems.

No card permanently destroys a weapon or creates a repair cost.

### Ranged Engineering

The pack requires a ranged attack context and excludes spell and unarmed attack traits. Hardware-specific cards use weapon-group filters for bows, firearms, and slings where necessary. Generic cards remain usable for other ranged weapons, including thrown weapons, when their mechanics still make sense.

The pack avoids the established Ranged Mishaps territory of cover, firing lanes, range estimation, target repositioning, and ordinary shooting rhythm.

### Equipment Incidents

The skill deck supports the canonical action slugs:

- `repair`
- `craft`
- `pick-a-lock`
- `disable-a-device`
- `treat-wounds`
- `administer-first-aid`
- `treat-disease`
- `treat-poison`

Every card is a `skillCheckCriticalFailure` card. The normal PF2e critical-failure result is resolved first and is never canceled by the Goblin Engineering consequence.

Shield-only actions remain outside the release scope because actions such as Raise a Shield do not create a skill-check critical context.

## Critical Forge integration

The module registers through the public extension API and requires:

- module version `>=1.0.1-rc.6.1`
- API version `>=0.9.7`
- extension contract `>=1`
- Card schema `>=1`
- Card Pack schema `>=1`
- `cards.multiDeckPacks`
- `extensions.contracts`
- `extensions.registrationDiagnostics`
- `cards.skillCheckCriticals`

Critical Forge 1.0.1-rc.6.1 is the release baseline because it canonicalizes PF2e skill action identifiers such as `action:pick-a-lock` before card matching and contains a self-contained Goblin Engineering regression fixture.

The current Critical Forge release check passes with 355 tests.

## Settings and runtime

All three packs have independent world settings and default to enabled. A setting change re-registers the module-owned packs through the extension controller without requiring a world restart.

The runtime exposes the module version, local API version, extension handle, pack listing, refresh function, and Critical Forge diagnostics through the Foundry module API.

## Localization review

German and English localization trees have identical keys for all 90 cards, pack names, settings, and notifications.

The release review also corrected German pack and setting wording that previously described Weapon Malfunctions and Ranged Engineering as applying only to non-magical weapons. The actual filters exclude spell and unarmed attack contexts, not magical weapons, so enchanted physical weapons remain valid Goblin Engineering subjects.

## Overlap review

The complete card set was compared against the supplied Critical Forge and expansion sources. No direct Goblin Engineering content-title duplicate was found in the neighboring card sources. The matching `Broken Pick Requests Promotion` string in Critical Forge is an integration-test fixture rather than a core card.

The module remains distinct from:

- Martial Consequences through its item-centered rather than stance-centered failures
- Ranged Mishaps through hardware behavior rather than battlefield shooting circumstances
- Arsenal through the absence of injury and persistent-damage consequences
- Arcane Backlash through exclusion of spell attack contexts and magic-facing skill actions
- Against All Odds through bounded accidental upside that never erases the triggering failure

## Release conclusion

The review found no blocking content, integration, balance, localization, or packaging issue. The 90-card release candidate was subsequently tested successfully in Foundry VTT and is promoted unchanged to **0.1.0 Stable**.

The initial stable content set is now frozen at 90 cards. Future card themes and feature expansions should be developed after 0.1.0 rather than folded into the first stable release.
