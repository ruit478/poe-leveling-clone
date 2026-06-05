import { Act } from '../models/leveling-data';

export const ACTS: Act[] = [
  {
    id: 1,
    name: 'Act 1',
    steps: [
      // Lioneye's Watch (Town)
      { id: 'a1-town-1', zone: 'Lioneye\'s Watch', type: 'quest', instruction: 'Talk to Tarkleigh — pick skill gem as reward' },
      { id: 'a1-town-2', zone: 'Lioneye\'s Watch', type: 'reward', instruction: 'Check vendors for 3-link items (R-G-G, G-G-B, R-G-B)' },
      { id: 'a1-town-3', zone: 'Lioneye\'s Watch', type: 'waypoint', instruction: 'Get the Waypoint' },

      // The Coast
      { id: 'a1-coast-1', zone: 'The Coast', type: 'direction', instruction: 'Follow the path, kill Hillock' },
      { id: 'a1-coast-2', zone: 'The Coast', type: 'waypoint', instruction: 'Get the Waypoint' },
      { id: 'a1-coast-3', zone: 'The Coast', type: 'quest', instruction: 'Pick up Tidal Island quest item (Medicine Chest)' },

      // Tidal Island
      { id: 'a1-tidal-1', zone: 'Tidal Island', type: 'direction', instruction: 'Enter Tidal Island from The Coast' },
      { id: 'a1-tidal-2', zone: 'Tidal Island', type: 'quest', instruction: 'Retrieve the Medicine Chest' },
      { id: 'a1-tidal-3', zone: 'Tidal Island', type: 'boss', instruction: 'Kill Hailrake (optional — quest reward: Quicksilver Flask)' },

      // Mud Flats
      { id: 'a1-mud-1', zone: 'Mud Flats', type: 'direction', instruction: 'Enter Mud Flats from The Coast' },
      { id: 'a1-mud-2', zone: 'Mud Flats', type: 'quest', instruction: 'Find the 3 Glyphs to open the Submerged Passage' },
      { id: 'a1-mud-3', zone: 'Mud Flats', type: 'note', instruction: 'Kill Oozeback Bloom (optional — drops useful early gear)' },

      // Submerged Passage
      { id: 'a1-sub-1', zone: 'Submerged Passage', type: 'waypoint', instruction: 'Get the Waypoint' },
      { id: 'a1-sub-2', zone: 'Submerged Passage', type: 'direction', instruction: 'Find the entrance to The Ledge' },
      { id: 'a1-sub-3', zone: 'Submerged Passage', type: 'note', instruction: 'Look for the Flooded Depths side area' },

      // Flooded Depths (optional)
      { id: 'a1-flood-1', zone: 'Flooded Depths', type: 'direction', instruction: 'Enter Flooded Depths (side area off Submerged Passage)' },
      { id: 'a1-flood-2', zone: 'Flooded Depths', type: 'boss', instruction: 'Kill The Deep Dweller (quest reward: Passive Skill Point)' },

      // The Ledge
      { id: 'a1-ledge-1', zone: 'The Ledge', type: 'waypoint', instruction: 'Get the Waypoint' },
      { id: 'a1-ledge-2', zone: 'The Ledge', type: 'direction', instruction: 'Run straight through to The Climb' },
      { id: 'a1-ledge-3', zone: 'The Ledge', type: 'note', instruction: 'Kill Kuduku (optional — near waypoint, good loot)' },

      // The Climb
      { id: 'a1-climb-1', zone: 'The Climb', type: 'direction', instruction: 'Navigate up the cliff path' },
      { id: 'a1-climb-2', zone: 'The Climb', type: 'boss', instruction: 'Kill The Faun (unique goatman — optional but quick)' },
      { id: 'a1-climb-3', zone: 'The Climb', type: 'note', instruction: 'Enter The Lower Prison at the top' },

      // Lower Prison
      { id: 'a1-lprison-1', zone: 'Lower Prison', type: 'waypoint', instruction: 'Get the Waypoint' },
      { id: 'a1-lprison-2', zone: 'Lower Prison', type: 'trial', instruction: 'Complete the Trial of Ascendancy (The Labyrinth — Lower Prison)' },
      { id: 'a1-lprison-3', zone: 'Lower Prison', type: 'direction', instruction: 'Find the stairs to Upper Prison' },

      // Upper Prison
      { id: 'a1-uprison-1', zone: 'Upper Prison', type: 'direction', instruction: 'Navigate through to the Warden\'s Quarters' },
      { id: 'a1-uprison-2', zone: 'Upper Prison', type: 'boss', instruction: 'Kill Brutus, Warden of Axiom' },
      { id: 'a1-uprison-3', zone: 'Upper Prison', type: 'direction', instruction: 'Enter Prisoner\'s Gate after Brutus' },

      // Prisoner's Gate
      { id: 'a1-pgate-1', zone: 'Prisoner\'s Gate', type: 'waypoint', instruction: 'Get the Waypoint' },
      { id: 'a1-pgate-2', zone: 'Prisoner\'s Gate', type: 'direction', instruction: 'Follow the road to The Ship Graveyard' },

      // Ship Graveyard
      { id: 'a1-ship-1', zone: 'The Ship Graveyard', type: 'waypoint', instruction: 'Get the Waypoint' },
      { id: 'a1-ship-2', zone: 'The Ship Graveyard', type: 'quest', instruction: 'Find the Allflame (quest item near the shipwrecks)' },
      { id: 'a1-ship-3', zone: 'The Ship Graveyard', type: 'note', instruction: 'Enter Ship Graveyard Cave to find Fairgraves' },

      // Ship Graveyard Cave
      { id: 'a1-sgcave-1', zone: 'Ship Graveyard Cave', type: 'direction', instruction: 'Navigate through the cave' },
      { id: 'a1-sgcave-2', zone: 'Ship Graveyard Cave', type: 'boss', instruction: 'Kill Fairgraves, Return the Allflame (Passive Skill Point)' },

      // Cavern of Wrath
      { id: 'a1-cow-1', zone: 'Cavern of Wrath', type: 'waypoint', instruction: 'Get the Waypoint' },
      { id: 'a1-cow-2', zone: 'Cavern of Wrath', type: 'direction', instruction: 'Navigate through to Cavern of Anger' },

      // Cavern of Anger
      { id: 'a1-coa-1', zone: 'Cavern of Anger', type: 'direction', instruction: 'Fight through to Merveil\'s Lair' },
      { id: 'a1-coa-2', zone: 'Cavern of Anger', type: 'boss', instruction: 'Kill Merveil, the Siren (Act boss)' },
      { id: 'a1-coa-3', zone: 'Cavern of Anger', type: 'direction', instruction: 'Take the exit to Act 2 — Southern Forest' },
    ]
  },
  {
    id: 2,
    name: 'Act 2',
    steps: [
      // Southern Forest
      { id: 'a2-sf-1', zone: 'Southern Forest', type: 'direction', instruction: 'Enter from Act 1 exit' },
      { id: 'a2-sf-2', zone: 'Southern Forest', type: 'waypoint', instruction: 'Get the Waypoint' },
      { id: 'a2-sf-3', zone: 'Southern Forest', type: 'direction', instruction: 'Follow path to The Forest Encampment (Town)' },

      // Forest Encampment (Town)
      { id: 'a2-town-1', zone: 'Forest Encampment', type: 'waypoint', instruction: 'Get the Waypoint' },
      { id: 'a2-town-2', zone: 'Forest Encampment', type: 'quest', instruction: 'Talk to Yeena — pick skill gem reward' },
      { id: 'a2-town-3', zone: 'Forest Encampment', type: 'reward', instruction: 'Check vendors for 3-link and 4-link items' },

      // The Old Fields
      { id: 'a2-fields-1', zone: 'The Old Fields', type: 'direction', instruction: 'Exit town through The Old Fields' },
      { id: 'a2-fields-2', zone: 'The Old Fields', type: 'waypoint', instruction: 'Get the Waypoint' },
      { id: 'a2-fields-3', zone: 'The Old Fields', type: 'direction', instruction: 'Find the entrance to The Den' },

      // The Den
      { id: 'a2-den-1', zone: 'The Den', type: 'direction', instruction: 'Enter The Den from The Old Fields' },
      { id: 'a2-den-2', zone: 'The Den', type: 'boss', instruction: 'Kill The Great White Beast (quest reward: Passive Skill Point)' },

      // Crossroads
      { id: 'a2-cross-1', zone: 'The Crossroads', type: 'waypoint', instruction: 'Get the Waypoint' },
      { id: 'a2-cross-2', zone: 'The Crossroads', type: 'direction', instruction: 'Go to The Chamber of Sins (up/right)' },

      // Chamber of Sins Level 1
      { id: 'a2-cos1-1', zone: 'Chamber of Sins L1', type: 'waypoint', instruction: 'Get the Waypoint' },
      { id: 'a2-cos1-2', zone: 'Chamber of Sins L1', type: 'direction', instruction: 'Find stairs down to Level 2' },

      // Chamber of Sins Level 2
      { id: 'a2-cos2-1', zone: 'Chamber of Sins L2', type: 'waypoint', instruction: 'Get the Waypoint' },
      { id: 'a2-cos2-2', zone: 'Chamber of Sins L2', type: 'trial', instruction: 'Complete the Trial of Ascendancy (The Labyrinth — Chamber of Sins)' },
      { id: 'a2-cos2-3', zone: 'Chamber of Sins L2', type: 'quest', instruction: 'Retrieve the Baleful Gem from Fidelitas' },
      { id: 'a2-cos2-4', zone: 'Chamber of Sins L2', type: 'boss', instruction: 'Kill Fidelitas, the Mourning' },

      // Back to Crossroads → Broken Bridge
      { id: 'a2-bbridge-1', zone: 'The Broken Bridge', type: 'direction', instruction: 'From Crossroads, go to The Broken Bridge' },
      { id: 'a2-bbridge-2', zone: 'The Broken Bridge', type: 'boss', instruction: 'Kill Kraityn (bandit — help Oak or kill all for skill point)' },

      // Back to Crossroads → The Fellshrine Ruins
      { id: 'a2-fell-1', zone: 'The Fellshrine Ruins', type: 'waypoint', instruction: 'Get the Waypoint' },
      { id: 'a2-fell-2', zone: 'The Fellshrine Ruins', type: 'direction', instruction: 'Find the entrance to The Crypt (optional side area)' },

      // The Crypt (optional)
      { id: 'a2-crypt-1', zone: 'The Crypt', type: 'trial', instruction: 'Complete the Trial of Ascendancy (The Crypt — optional, can skip)' },

      // The Church Dungeon
      { id: 'a2-church-1', zone: 'The Church Dungeon', type: 'direction', instruction: 'From Crossroads, go up to The Church Dungeon' },
      { id: 'a2-church-2', zone: 'The Church Dungeon', type: 'waypoint', instruction: 'Get the Waypoint' },
      { id: 'a2-church-3', zone: 'The Church Dungeon', type: 'direction', instruction: 'Navigate through to The Weaver\'s Chambers' },

      // The Weaver's Chambers
      { id: 'a2-weaver-1', zone: 'The Weaver\'s Chambers', type: 'boss', instruction: 'Kill The Weaver (quest item: Maligaro\'s Spike)' },

      // Western Forest
      { id: 'a2-wforest-1', zone: 'The Western Forest', type: 'direction', instruction: 'From Crossroads, go left to The Western Forest' },
      { id: 'a2-wforest-2', zone: 'The Western Forest', type: 'waypoint', instruction: 'Get the Waypoint' },
      { id: 'a2-wforest-3', zone: 'The Western Forest', type: 'quest', instruction: 'Kill Alira (bandit — help Alira or kill all for skill point)' },
      { id: 'a2-wforest-4', zone: 'The Western Forest', type: 'quest', instruction: 'Kill The Blackguards — pick up Thaumetic Emblem' },
      { id: 'a2-wforest-5', zone: 'The Western Forest', type: 'direction', instruction: 'Find the entrance to The Weaver\'s Chambers (if not done yet)' },

      // Riverways
      { id: 'a2-river-1', zone: 'The Riverways', type: 'waypoint', instruction: 'Get the Waypoint' },
      { id: 'a2-river-2', zone: 'The Riverways', type: 'direction', instruction: 'Go up to The Wetlands' },

      // The Wetlands
      { id: 'a2-wet-1', zone: 'The Wetlands', type: 'waypoint', instruction: 'Get the Waypoint' },
      { id: 'a2-wet-2', zone: 'The Wetlands', type: 'boss', instruction: 'Kill Oak (bandit — help Oak or kill all for skill point)' },
      { id: 'a2-wet-3', zone: 'The Wetlands', type: 'direction', instruction: 'Open the Vaal Ruins entrance (click the tree roots)' },

      // Vaal Ruins
      { id: 'a2-vaal-1', zone: 'Vaal Ruins', type: 'waypoint', instruction: 'Get the Waypoint' },
      { id: 'a2-vaal-2', zone: 'Vaal Ruins', type: 'direction', instruction: 'Navigate through and find the exit to the Northern Forest' },
      { id: 'a2-vaal-3', zone: 'Vaal Ruins', type: 'note', instruction: 'Watch for the Vaal Oversoul seal fragments (required to open boss room)' },

      // Northern Forest
      { id: 'a2-nforest-1', zone: 'The Northern Forest', type: 'waypoint', instruction: 'Get the Waypoint' },
      { id: 'a2-nforest-2', zone: 'The Northern Forest', type: 'direction', instruction: 'Find the entrance to The Caverns' },

      // The Caverns
      { id: 'a2-cavern-1', zone: 'The Caverns', type: 'waypoint', instruction: 'Get the Waypoint' },
      { id: 'a2-cavern-2', zone: 'The Caverns', type: 'direction', instruction: 'Navigate through to the Ancient Pyramid' },

      // Ancient Pyramid
      { id: 'a2-apyramid-1', zone: 'The Ancient Pyramid', type: 'waypoint', instruction: 'Get the Waypoint (before boss)' },
      { id: 'a2-apyramid-2', zone: 'The Ancient Pyramid', type: 'boss', instruction: 'Kill The Vaal Oversoul (Act boss)' },
      { id: 'a2-apyramid-3', zone: 'The Ancient Pyramid', type: 'direction', instruction: 'Take the exit to Act 3 — The City of Sarn' },
    ]
  },
  {
    id: 3,
    name: 'Act 3',
    steps: [
      // The City of Sarn
      { id: 'a3-sarn-1', zone: 'The City of Sarn', type: 'direction', instruction: 'Enter from Act 2 exit' },
      { id: 'a3-sarn-2', zone: 'The City of Sarn', type: 'waypoint', instruction: 'Get the Waypoint' },
      { id: 'a3-sarn-3', zone: 'The City of Sarn', type: 'quest', instruction: 'Rescue Clarissa (quest item: Tolman\'s Braclet — from the Crematorium)' },
      { id: 'a3-sarn-4', zone: 'The City of Sarn', type: 'direction', instruction: 'Find entrance to The Slums, then to The Crematorium' },

      // The Crematorium
      { id: 'a3-crem-1', zone: 'The Crematorium', type: 'waypoint', instruction: 'Get the Waypoint' },
      { id: 'a3-crem-2', zone: 'The Crematorium', type: 'trial', instruction: 'Complete the Trial of Ascendancy (The Labyrinth — The Crematorium)' },
      { id: 'a3-crem-3', zone: 'The Crematorium', type: 'quest', instruction: 'Retrieve Tolman\'s Braclet' },
      { id: 'a3-crem-4', zone: 'The Crematorium', type: 'boss', instruction: 'Kill Piety (first encounter)' },

      // Back to Sarn → The Slums → The Sewers
      { id: 'a3-sewers-1', zone: 'The Slums Sewers', type: 'direction', instruction: 'Enter The Slums, find sewer grate' },
      { id: 'a3-sewers-2', zone: 'The Slums Sewers', type: 'waypoint', instruction: 'Get the Waypoint' },
      { id: 'a3-sewers-3', zone: 'The Slums Sewers', type: 'quest', instruction: 'Find the Bust of Hector Titucius (3 busts quest — Decanter Spiritus)' },

      // The Marketplace
      { id: 'a3-market-1', zone: 'The Marketplace', type: 'waypoint', instruction: 'Get the Waypoint' },
      { id: 'a3-market-2', zone: 'The Marketplace', type: 'quest', instruction: 'Collect Decanter Spiritus (quest item — look for carts)' },
      { id: 'a3-market-3', zone: 'The Marketplace', type: 'note', instruction: 'Find entrances to The Catacombs and The Battlefront' },

      // The Catacombs
      { id: 'a3-catacombs-1', zone: 'The Catacombs', type: 'waypoint', instruction: 'Get the Waypoint' },
      { id: 'a3-catacombs-2', zone: 'The Catacombs', type: 'quest', instruction: 'Find the Bust of Hector Titucius (2nd bust)' },

      // The Battlefront
      { id: 'a3-bfront-1', zone: 'The Battlefront', type: 'waypoint', instruction: 'Get the Waypoint' },
      { id: 'a3-bfront-2', zone: 'The Battlefront', type: 'quest', instruction: 'Find the Ribbon Spool (quest item — near Blackguard soldiers)' },
      { id: 'a3-bfront-3', zone: 'The Battlefront', type: 'direction', instruction: 'Enter The Docks' },

      // The Docks
      { id: 'a3-docks-1', zone: 'The Docks', type: 'waypoint', instruction: 'Get the Waypoint' },
      { id: 'a3-docks-2', zone: 'The Docks', type: 'quest', instruction: 'Pick up Thaumetic Sulphite (quest item)' },
      { id: 'a3-docks-3', zone: 'The Docks', type: 'direction', instruction: 'Find entrance to the Solaris Temple' },

      // Solaris Temple Level 1
      { id: 'a3-solaris1-1', zone: 'Solaris Temple L1', type: 'waypoint', instruction: 'Get the Waypoint' },
      { id: 'a3-solaris1-2', zone: 'Solaris Temple L1', type: 'direction', instruction: 'Find stairs to Level 2' },
      { id: 'a3-solaris1-3', zone: 'Solaris Temple L1', type: 'note', instruction: 'Talk to Dialla after reaching L2' },

      // Solaris Temple Level 2
      { id: 'a3-solaris2-1', zone: 'Solaris Temple L2', type: 'waypoint', instruction: 'Get the Waypoint' },
      { id: 'a3-solaris2-2', zone: 'Solaris Temple L2', type: 'direction', instruction: 'Take the exit to The Sewers Waterway' },

      // The Ebony Barracks
      { id: 'a3-ebarracks-1', zone: 'The Ebony Barracks', type: 'waypoint', instruction: 'Get the Waypoint' },
      { id: 'a3-ebarracks-2', zone: 'The Ebony Barracks', type: 'direction', instruction: 'Fight through to The Lunaris Temple' },

      // Lunaris Temple Level 1
      { id: 'a3-lunaris1-1', zone: 'Lunaris Temple L1', type: 'waypoint', instruction: 'Get the Waypoint' },
      { id: 'a3-lunaris1-2', zone: 'Lunaris Temple L1', type: 'direction', instruction: 'Find stairs up to Level 2' },

      // Lunaris Temple Level 2
      { id: 'a3-lunaris2-1', zone: 'Lunaris Temple L2', type: 'waypoint', instruction: 'Get the Waypoint (right before boss)' },
      { id: 'a3-lunaris2-2', zone: 'Lunaris Temple L2', type: 'boss', instruction: 'Kill Piety (second encounter)' },
      { id: 'a3-lunaris2-3', zone: 'Lunaris Temple L2', type: 'quest', instruction: 'Pick up the Tower Key from Piety' },

      // The Sceptre of God
      { id: 'a3-sceptre-1', zone: 'The Sceptre of God', type: 'waypoint', instruction: 'Get the Waypoint' },
      { id: 'a3-sceptre-2', zone: 'The Sceptre of God', type: 'direction', instruction: 'Ascend to the Upper Sceptre of God (3 floors total)' },

      // Upper Sceptre of God
      { id: 'a3-usceptre-1', zone: 'Upper Sceptre of God', type: 'waypoint', instruction: 'Get the Waypoint (before boss)' },
      { id: 'a3-usceptre-2', zone: 'Upper Sceptre of God', type: 'boss', instruction: 'Kill Dominus, Ascendant (Act boss — 2 phases: human form + ascendant form)' },
      { id: 'a3-usceptre-3', zone: 'Upper Sceptre of God', type: 'direction', instruction: 'Take the exit to Act 4 — The Aqueduct' },
    ]
  },
  {
    id: 4,
    name: 'Act 4',
    steps: [
      // The Aqueduct
      { id: 'a4-aqueduct-1', zone: 'The Aqueduct', type: 'direction', instruction: 'Enter from Act 3 exit' },
      { id: 'a4-aqueduct-2', zone: 'The Aqueduct', type: 'waypoint', instruction: 'Get the Waypoint' },
      { id: 'a4-aqueduct-3', zone: 'The Aqueduct', type: 'direction', instruction: 'Follow the aqueduct to Highgate (Town)' },

      // Highgate (Town)
      { id: 'a4-town-1', zone: 'Highgate', type: 'waypoint', instruction: 'Get the Waypoint' },
      { id: 'a4-town-2', zone: 'Highgate', type: 'quest', instruction: 'Talk to Oyun and Petarus & Vanja — pick skill gem' },

      // The Dried Lake
      { id: 'a4-dlake-1', zone: 'The Dried Lake', type: 'waypoint', instruction: 'Get the Waypoint' },
      { id: 'a4-dlake-2', zone: 'The Dried Lake', type: 'boss', instruction: 'Kill Voll, Emperor of Purity (quest item: Deshret\'s Banner)' },
      { id: 'a4-dlake-3', zone: 'The Dried Lake', type: 'direction', instruction: 'Enter The Mines' },

      // The Mines Level 1
      { id: 'a4-mines1-1', zone: 'The Mines L1', type: 'waypoint', instruction: 'Get the Waypoint' },
      { id: 'a4-mines1-2', zone: 'The Mines L1', type: 'direction', instruction: 'Find the stairs down to Level 2' },
      { id: 'a4-mines1-3', zone: 'The Mines L1', type: 'quest', instruction: 'Free the Deshret Spirit (optional — releases Deshret\'s Spirit for later)' },

      // The Mines Level 2
      { id: 'a4-mines2-1', zone: 'The Mines L2', type: 'waypoint', instruction: 'Get the Waypoint' },
      { id: 'a4-mines2-2', zone: 'The Mines L2', type: 'direction', instruction: 'Exit to The Crystal Veins' },

      // The Crystal Veins
      { id: 'a4-cveins-1', zone: 'The Crystal Veins', type: 'waypoint', instruction: 'Get the Waypoint' },
      { id: 'a4-cveins-2', zone: 'The Crystal Veins', type: 'quest', instruction: 'Activate the 3 Thaumetic seals to open the way' },
      { id: 'a4-cveins-3', zone: 'The Crystal Veins', type: 'direction', instruction: 'Entrances to Kaom\'s Dream and Daresso\'s Dream are here' },

      // Kaom's Dream
      { id: 'a4-kaom-1', zone: 'Kaom\'s Dream', type: 'waypoint', instruction: 'Get the Waypoint' },
      { id: 'a4-kaom-2', zone: 'Kaom\'s Dream', type: 'direction', instruction: 'Navigate through the fiery dreamscape' },
      { id: 'a4-kaom-3', zone: 'Kaom\'s Dream', type: 'boss', instruction: 'Kill King Kaom (quest item: The Eye of Fury)' },

      // Daresso's Dream
      { id: 'a4-daresso-1', zone: 'Daresso\'s Dream', type: 'waypoint', instruction: 'Get the Waypoint' },
      { id: 'a4-daresso-2', zone: 'Daresso\'s Dream', type: 'direction', instruction: 'Fight through the 3 arenas (Grand Arena)' },
      { id: 'a4-daresso-3', zone: 'Daresso\'s Dream', type: 'boss', instruction: 'Kill Daresso, the Sword King (quest item: The Eye of Desire)' },

      // Back to Crystal Veins → Belly of the Beast
      { id: 'a4-belly1-1', zone: 'The Belly of the Beast L1', type: 'waypoint', instruction: 'Get the Waypoint' },
      { id: 'a4-belly1-2', zone: 'The Belly of the Beast L1', type: 'direction', instruction: 'Navigate down to Level 2' },

      // Belly of the Beast Level 2
      { id: 'a4-belly2-1', zone: 'The Belly of the Beast L2', type: 'direction', instruction: 'Fight through to The Harvest' },
      { id: 'a4-belly2-2', zone: 'The Belly of the Beast L2', type: 'boss', instruction: 'Kill Piety (third encounter — body horror form)' },

      // The Harvest
      { id: 'a4-harvest-1', zone: 'The Harvest', type: 'waypoint', instruction: 'Get the Waypoint' },
      { id: 'a4-harvest-2', zone: 'The Harvest', type: 'direction', instruction: 'Enter the Black Core — 3 mini-boss fights first' },
      { id: 'a4-harvest-3', zone: 'The Harvest', type: 'boss', instruction: 'Kill Malachai (Act boss — 2 phases with heart intermission)' },

      // Exit to Act 5
      { id: 'a4-exit-1', zone: 'The Harvest', type: 'direction', instruction: 'Take the exit to Act 5 — The Slave Pens (after talking to Oyun)' },
    ]
  },
  {
    id: 5,
    name: 'Act 5',
    steps: [
      // The Slave Pens
      { id: 'a5-slave-1', zone: 'The Slave Pens', type: 'direction', instruction: 'Enter from Act 4 exit' },
      { id: 'a5-slave-2', zone: 'The Slave Pens', type: 'waypoint', instruction: 'Get the Waypoint' },
      { id: 'a5-slave-3', zone: 'The Slave Pens', type: 'direction', instruction: 'Exit to Overseer\'s Tower (Town)' },

      // Overseer's Tower (Town)
      { id: 'a5-town-1', zone: 'Overseer\'s Tower', type: 'waypoint', instruction: 'Get the Waypoint' },
      { id: 'a5-town-2', zone: 'Overseer\'s Tower', type: 'quest', instruction: 'Talk to Lani and Utula — pick skill gem reward' },

      // The Control Blocks (town exit)
      { id: 'a5-control-1', zone: 'The Control Blocks', type: 'waypoint', instruction: 'Get the Waypoint' },
      { id: 'a5-control-2', zone: 'The Control Blocks', type: 'quest', instruction: 'Find Miasmeter (quest item — drops from Overseer Krow)' },

      // Oriath Square
      { id: 'a5-square-1', zone: 'Oriath Square', type: 'waypoint', instruction: 'Get the Waypoint' },
      { id: 'a5-square-2', zone: 'Oriath Square', type: 'direction', instruction: 'Find entrances to The Templar Courts and The Torched Courts' },

      // The Templar Courts
      { id: 'a5-templar-1', zone: 'The Templar Courts', type: 'waypoint', instruction: 'Get the Waypoint' },
      { id: 'a5-templar-2', zone: 'The Templar Courts', type: 'direction', instruction: 'Navigate through to The Chamber of Innocence' },

      // Chamber of Innocence
      { id: 'a5-innocence-1', zone: 'The Chamber of Innocence', type: 'waypoint', instruction: 'Get the Waypoint' },
      { id: 'a5-innocence-2', zone: 'The Chamber of Innocence', type: 'boss', instruction: 'Kill High Templar Avarius / Innocence (2-phase boss)' },
      { id: 'a5-innocence-3', zone: 'The Chamber of Innocence', type: 'direction', instruction: 'Go upstairs and exit to The Torched Courts' },

      // The Torched Courts
      { id: 'a5-torched-1', zone: 'The Torched Courts', type: 'waypoint', instruction: 'Get the Waypoint' },
      { id: 'a5-torched-2', zone: 'The Torched Courts', type: 'direction', instruction: 'Find entrance to The Ossuary (optional)' },
      { id: 'a5-torched-3', zone: 'The Torched Courts', type: 'direction', instruction: 'Exit to The Ruined Square' },

      // The Ossuary (optional)
      { id: 'a5-ossuary-1', zone: 'The Ossuary', type: 'direction', instruction: 'Enter The Ossuary' },
      { id: 'a5-ossuary-2', zone: 'The Ossuary', type: 'quest', instruction: 'Find Sign of Purity (quest item for Passive Skill Point)' },

      // The Ruined Square
      { id: 'a5-rsquare-1', zone: 'The Ruined Square', type: 'waypoint', instruction: 'Get the Waypoint' },
      { id: 'a5-rsquare-2', zone: 'The Ruined Square', type: 'direction', instruction: 'Find the entrance to The Cathedral of Innocence' },

      // The Reliquary (optional)
      { id: 'a5-reliquary-1', zone: 'The Reliquary', type: 'direction', instruction: 'Enter The Reliquary (side area from Ruined Square)' },
      { id: 'a5-reliquary-2', zone: 'The Reliquary', type: 'quest', instruction: 'Find Kitava\'s Torment (quest item for Passive Skill Point)' },

      // Cathedral of Innocence
      { id: 'a5-cathedral-1', zone: 'The Cathedral of Innocence', type: 'waypoint', instruction: 'Get the Waypoint' },
      { id: 'a5-cathedral-2', zone: 'The Cathedral of Innocence', type: 'boss', instruction: 'Kill Kitava, the Insatiable (Act boss)' },
      { id: 'a5-cathedral-3', zone: 'The Cathedral of Innocence', type: 'direction', instruction: 'Take the exit to Act 6 — The Twilight Strand (on the beach)' },
    ]
  },
  {
    id: 6,
    name: 'Act 6',
    steps: [
      // Twilight Strand
      { id: 'a6-strand-1', zone: 'The Twilight Strand', type: 'direction', instruction: 'Enter from Act 5 exit (wake up on the beach)' },
      { id: 'a6-strand-2', zone: 'The Twilight Strand', type: 'waypoint', instruction: 'Get the Waypoint' },
      { id: 'a6-strand-3', zone: 'The Twilight Strand', type: 'direction', instruction: 'Follow the beach to Lioneye\'s Watch (Town)' },

      // Lioneye's Watch (Town)
      { id: 'a6-town-1', zone: 'Lioneye\'s Watch', type: 'waypoint', instruction: 'Get the Waypoint' },
      { id: 'a6-town-2', zone: 'Lioneye\'s Watch', type: 'quest', instruction: 'Talk to Bestel and Tarkleigh — pick skill gem' },

      // The Coast (revisited)
      { id: 'a6-coast-1', zone: 'The Coast', type: 'direction', instruction: 'Exit town to The Coast' },
      { id: 'a6-coast-2', zone: 'The Coast', type: 'waypoint', instruction: 'Get the Waypoint' },

      // The Mud Flats (revisited)
      { id: 'a6-mud-1', zone: 'The Mud Flats', type: 'waypoint', instruction: 'Get the Waypoint' },
      { id: 'a6-mud-2', zone: 'The Mud Flats', type: 'quest', instruction: 'Kill The Dishonored Queen (quest item: Eye of Conquest)' },

      // The Karui Fortress
      { id: 'a6-karui-1', zone: 'The Karui Fortress', type: 'boss', instruction: 'Kill Tukohama, Karui God of War (quest item: Tukohama\'s Tooth)' },

      // The Ridge
      { id: 'a6-ridge-1', zone: 'The Ridge', type: 'waypoint', instruction: 'Get the Waypoint' },
      { id: 'a6-ridge-2', zone: 'The Ridge', type: 'direction', instruction: 'Follow the path to The Lower Prison' },

      // Lower Prison (revisited)
      { id: 'a6-lprison-1', zone: 'The Lower Prison', type: 'waypoint', instruction: 'Get the Waypoint' },
      { id: 'a6-lprison-2', zone: 'The Lower Prison', type: 'direction', instruction: 'Find the entrance to Shavronne\'s Tower' },

      // Shavronne's Tower
      { id: 'a6-shav-1', zone: 'Shavronne\'s Tower', type: 'direction', instruction: 'Ascend the tower' },
      { id: 'a6-shav-2', zone: 'Shavronne\'s Tower', type: 'boss', instruction: 'Kill Shavronne the Returned (quest items: Brutus + Shavronne)' },

      // Prisoner's Gate (revisited)
      { id: 'a6-pgate-1', zone: 'Prisoner\'s Gate', type: 'waypoint', instruction: 'Get the Waypoint' },
      { id: 'a6-pgate-2', zone: 'Prisoner\'s Gate', type: 'direction', instruction: 'Follow the road to The Western Forest' },

      // Western Forest (revisited)
      { id: 'a6-wforest-1', zone: 'The Western Forest', type: 'waypoint', instruction: 'Get the Waypoint' },
      { id: 'a6-wforest-2', zone: 'The Western Forest', type: 'quest', instruction: 'Kill The Puppet Mistress (quest item — in the spider area)' },

      // The Riverways (revisited)
      { id: 'a6-river-1', zone: 'The Riverways', type: 'waypoint', instruction: 'Get the Waypoint' },
      { id: 'a6-river-2', zone: 'The Riverways', type: 'direction', instruction: 'Go up to The Wetlands, then to The Spawning Grounds' },

      // The Wetlands (revisited)
      { id: 'a6-wet-1', zone: 'The Wetlands', type: 'waypoint', instruction: 'Get the Waypoint' },
      { id: 'a6-wet-2', zone: 'The Wetlands', type: 'direction', instruction: 'Open the Vaal Ruins entrance (again)' },

      // The Spawning Grounds
      { id: 'a6-spawn-1', zone: 'The Spawning Grounds', type: 'direction', instruction: 'Enter The Spawning Grounds' },
      { id: 'a6-spawn-2', zone: 'The Spawning Grounds', type: 'boss', instruction: 'Kill Abberath, the Cloven One (quest item: Abberath\'s Horn)' },

      // The Southern Forest (revisited)
      { id: 'a6-sforest-1', zone: 'The Southern Forest', type: 'waypoint', instruction: 'Get the Waypoint' },
      { id: 'a6-sforest-2', zone: 'The Southern Forest', type: 'direction', instruction: 'Enter The Cavern of Anger' },

      // The Cavern of Anger (revisited)
      { id: 'a6-coa-1', zone: 'The Cavern of Anger', type: 'waypoint', instruction: 'Get the Waypoint' },
      { id: 'a6-coa-2', zone: 'The Cavern of Anger', type: 'direction', instruction: 'Navigate through' },

      // The Beacon
      { id: 'a6-beacon-1', zone: 'The Beacon', type: 'waypoint', instruction: 'Get the Waypoint' },
      { id: 'a6-beacon-2', zone: 'The Beacon', type: 'quest', instruction: 'Light the beacon (refuel/ignite it)' },
      { id: 'a6-beacon-3', zone: 'The Beacon', type: 'direction', instruction: 'Board the ship to The Brine King\'s Reef' },

      // The Brine King's Reef
      { id: 'a6-brine-1', zone: 'Brine King\'s Reef', type: 'boss', instruction: 'Kill The Brine King (Act boss)' },
      { id: 'a6-brine-2', zone: 'Brine King\'s Reef', type: 'direction', instruction: 'Take the exit to Act 7 — The Broken Bridge' },
    ]
  },
  {
    id: 7,
    name: 'Act 7',
    steps: [
      // The Broken Bridge
      { id: 'a7-bbridge-1', zone: 'The Broken Bridge', type: 'direction', instruction: 'Enter from Act 6 exit' },
      { id: 'a7-bbridge-2', zone: 'The Broken Bridge', type: 'waypoint', instruction: 'Get the Waypoint' },

      // The Crossroads (revisited)
      { id: 'a7-cross-1', zone: 'The Crossroads', type: 'waypoint', instruction: 'Get the Waypoint' },
      { id: 'a7-cross-2', zone: 'The Crossroads', type: 'direction', instruction: 'Go to The Fellshrine Ruins' },

      // The Fellshrine Ruins (revisited)
      { id: 'a7-fell-1', zone: 'The Fellshrine Ruins', type: 'waypoint', instruction: 'Get the Waypoint' },
      { id: 'a7-fell-2', zone: 'The Fellshrine Ruins', type: 'direction', instruction: 'Enter The Crypt' },

      // The Crypt (revisited)
      { id: 'a7-crypt-1', zone: 'The Crypt', type: 'waypoint', instruction: 'Get the Waypoint' },
      { id: 'a7-crypt-2', zone: 'The Crypt', type: 'quest', instruction: 'Collect Maligaro\'s Map (quest item)' },

      // Maligaro's Sanctum
      { id: 'a7-maligaro-1', zone: 'Maligaro\'s Sanctum', type: 'direction', instruction: 'Enter Maligaro\'s Sanctum' },
      { id: 'a7-maligaro-2', zone: 'Maligaro\'s Sanctum', type: 'boss', instruction: 'Kill Maligaro the Mutilator (quest item: Black Venom)' },

      // Chamber of Sins (revisited)
      { id: 'a7-cos1-1', zone: 'Chamber of Sins L1', type: 'waypoint', instruction: 'Get the Waypoint' },
      { id: 'a7-cos1-2', zone: 'Chamber of Sins L1', type: 'direction', instruction: 'Go to Level 2' },

      // Chamber of Sins L2 (revisited)
      { id: 'a7-cos2-1', zone: 'Chamber of Sins L2', type: 'quest', instruction: 'Collect Silver Locket (quest item — near waypoint)' },
      { id: 'a7-cos2-2', zone: 'Chamber of Sins L2', type: 'direction', instruction: 'Find the map device' },
      { id: 'a7-cos2-3', zone: 'Chamber of Sins L2', type: 'quest', instruction: 'Use the map device to open a portal' },

      // The Den (revisited)
      { id: 'a7-den-1', zone: 'The Den', type: 'direction', instruction: 'Enter The Den through the portal' },
      { id: 'a7-den-2', zone: 'The Den', type: 'quest', instruction: 'Collect the Infernal Talc' },
      { id: 'a7-den-3', zone: 'The Den', type: 'boss', instruction: 'Kill the Greust-like boss (quest item: Greust\'s Necklace)' },

      // The Northern Forest (revisited)
      { id: 'a7-nf-1', zone: 'The Northern Forest', type: 'waypoint', instruction: 'Get the Waypoint' },
      { id: 'a7-nf-2', zone: 'The Northern Forest', type: 'direction', instruction: 'Enter The Dread Thicket' },

      // The Dread Thicket (revisited)
      { id: 'a7-thicket-1', zone: 'The Dread Thicket', type: 'waypoint', instruction: 'Get the Waypoint' },
      { id: 'a7-thicket-2', zone: 'The Dread Thicket', type: 'quest', instruction: 'Collect 7 Fireflies from Gruthkul-packs (quest item)' },

      // The Causeway
      { id: 'a7-cause-1', zone: 'The Causeway', type: 'waypoint', instruction: 'Get the Waypoint' },
      { id: 'a7-cause-2', zone: 'The Causeway', type: 'quest', instruction: 'Pick up Kishara\'s Star (side quest — Passive Skill Point)' },

      // The Vaal City
      { id: 'a7-vcity-1', zone: 'The Vaal City', type: 'waypoint', instruction: 'Get the Waypoint' },
      { id: 'a7-vcity-2', zone: 'The Vaal City', type: 'direction', instruction: 'Navigate to The Temple of Decay' },

      // The Temple of Decay Level 1
      { id: 'a7-tod1-1', zone: 'Temple of Decay L1', type: 'waypoint', instruction: 'Get the Waypoint' },
      { id: 'a7-tod1-2', zone: 'Temple of Decay L1', type: 'direction', instruction: 'Find stairs down to Level 2' },

      // The Temple of Decay Level 2
      { id: 'a7-tod2-1', zone: 'Temple of Decay L2', type: 'boss', instruction: 'Kill Arakaali, Spinner of Shadows (Act boss — 2 phases)' },
      { id: 'a7-tod2-2', zone: 'Temple of Decay L2', type: 'direction', instruction: 'Take the exit to Act 8 — The Sarn Ramparts' },
    ]
  },
  {
    id: 8,
    name: 'Act 8',
    steps: [
      // The Sarn Ramparts
      { id: 'a8-ramparts-1', zone: 'The Sarn Ramparts', type: 'direction', instruction: 'Enter from Act 7 exit' },
      { id: 'a8-ramparts-2', zone: 'The Sarn Ramparts', type: 'waypoint', instruction: 'Get the Waypoint' },
      { id: 'a8-ramparts-3', zone: 'The Sarn Ramparts', type: 'direction', instruction: 'Follow the wall to The Sarn Encampment (Town)' },

      // Sarn Encampment (Town)
      { id: 'a8-town-1', zone: 'Sarn Encampment', type: 'waypoint', instruction: 'Get the Waypoint' },
      { id: 'a8-town-2', zone: 'Sarn Encampment', type: 'quest', instruction: 'Talk to Clarissa and Hargan — pick skill gem' },

      // The Toxic Conduits
      { id: 'a8-toxic-1', zone: 'The Toxic Conduits', type: 'waypoint', instruction: 'Get the Waypoint' },
      { id: 'a8-toxic-2', zone: 'The Toxic Conduits', type: 'direction', instruction: 'Navigate to The Doedre\'s Cesspool (left) or The Grand Promenade (right)' },

      // Doedre's Cesspool
      { id: 'a8-doedre-1', zone: 'Doedre\'s Cesspool', type: 'waypoint', instruction: 'Get the Waypoint' },
      { id: 'a8-doedre-2', zone: 'Doedre\'s Cesspool', type: 'boss', instruction: 'Kill Doedre the Defiler (quest item: Doedre\'s Stash Key)' },

      // The Grand Promenade
      { id: 'a8-promenade-1', zone: 'The Grand Promenade', type: 'waypoint', instruction: 'Get the Waypoint' },
      { id: 'a8-promenade-2', zone: 'The Grand Promenade', type: 'direction', instruction: 'Enter The Bath House' },

      // The Bath House
      { id: 'a8-bath-1', zone: 'The Bath House', type: 'waypoint', instruction: 'Get the Waypoint' },
      { id: 'a8-bath-2', zone: 'The Bath House', type: 'quest', instruction: 'Find The Wings of Vastiri (quest item — near the pool area)' },
      { id: 'a8-bath-3', zone: 'The Bath House', type: 'direction', instruction: 'Exit to The High Gardens (for Yugul) or continue down' },

      // The High Gardens
      { id: 'a8-gardens-1', zone: 'The High Gardens', type: 'waypoint', instruction: 'Get the Waypoint' },
      { id: 'a8-gardens-2', zone: 'The High Gardens', type: 'quest', instruction: 'Pick up The Wings of Vastiri (quest item — look for Pious Engineers)' },

      // The Lunaris Concourse
      { id: 'a8-concourse-1', zone: 'The Lunaris Concourse', type: 'waypoint', instruction: 'Get the Waypoint' },
      { id: 'a8-concourse-2', zone: 'The Lunaris Concourse', type: 'direction', instruction: 'Entrances to Lunaris Temple L2 and Solaris Temple L2' },

      // Lunaris Temple Level 2
      { id: 'a8-lunaris2-1', zone: 'Lunaris Temple L2', type: 'waypoint', instruction: 'Get the Waypoint' },
      { id: 'a8-lunaris2-2', zone: 'Lunaris Temple L2', type: 'boss', instruction: 'Kill Lunaris, Eternal Moon (quest item: Moon Orb)' },

      // Solaris Temple Level 2
      { id: 'a8-solaris2-1', zone: 'Solaris Temple L2', type: 'waypoint', instruction: 'Get the Waypoint' },
      { id: 'a8-solaris2-2', zone: 'Solaris Temple L2', type: 'boss', instruction: 'Kill Solaris, Eternal Sun (quest item: Sun Orb)' },

      // The Harbour Bridge
      { id: 'a8-harbour-1', zone: 'The Harbour Bridge', type: 'waypoint', instruction: 'Get the Waypoint' },
      { id: 'a8-harbour-2', zone: 'The Harbour Bridge', type: 'direction', instruction: 'Cross the bridge to the Sky Shrine' },

      // The Sky Shrine
      { id: 'a8-sky-1', zone: 'The Sky Shrine', type: 'boss', instruction: 'Kill The Sun Orb + Moon Orb guardians, then kill Lunaris + Solaris together' },
      { id: 'a8-sky-2', zone: 'The Sky Shrine', type: 'direction', instruction: 'Take the exit to Act 9 — The Blood Aqueduct' },
    ]
  },
  {
    id: 9,
    name: 'Act 9',
    steps: [
      // The Blood Aqueduct
      { id: 'a9-aqueduct-1', zone: 'The Blood Aqueduct', type: 'direction', instruction: 'Enter from Act 8 exit' },
      { id: 'a9-aqueduct-2', zone: 'The Blood Aqueduct', type: 'waypoint', instruction: 'Get the Waypoint' },
      { id: 'a9-aqueduct-3', zone: 'The Blood Aqueduct', type: 'direction', instruction: 'Follow to Highgate (Town)' },

      // Highgate (Town)
      { id: 'a9-town-1', zone: 'Highgate', type: 'waypoint', instruction: 'Get the Waypoint' },
      { id: 'a9-town-2', zone: 'Highgate', type: 'quest', instruction: 'Talk to Petarus & Vanja and Irasha — pick skill gem' },

      // The Descent
      { id: 'a9-descent-1', zone: 'The Descent', type: 'waypoint', instruction: 'Get the Waypoint' },
      { id: 'a9-descent-2', zone: 'The Descent', type: 'direction', instruction: 'Navigate down to The Vastiri Desert' },

      // The Vastiri Desert
      { id: 'a9-desert-1', zone: 'The Vastiri Desert', type: 'waypoint', instruction: 'Get the Waypoint' },
      { id: 'a9-desert-2', zone: 'The Vastiri Desert', type: 'direction', instruction: 'Find the entrance to The Oasis (optional side area)' },
      { id: 'a9-desert-3', zone: 'The Vastiri Desert', type: 'note', instruction: 'Look for Storm-weathered Shrine to enter The Foothills' },

      // The Oasis (optional)
      { id: 'a9-oasis-1', zone: 'The Oasis', type: 'direction', instruction: 'Enter The Oasis' },
      { id: 'a9-oasis-2', zone: 'The Oasis', type: 'boss', instruction: 'Kill Shakari (optional — quest item: Bottled Storm)' },

      // The Foothills
      { id: 'a9-foothills-1', zone: 'The Foothills', type: 'waypoint', instruction: 'Get the Waypoint' },
      { id: 'a9-foothills-2', zone: 'The Foothills', type: 'direction', instruction: 'Enter The Boiling Lake' },

      // The Boiling Lake
      { id: 'a9-boiling-1', zone: 'The Boiling Lake', type: 'waypoint', instruction: 'Get the Waypoint' },
      { id: 'a9-boiling-2', zone: 'The Boiling Lake', type: 'boss', instruction: 'Kill The Basilisk (quest item: Basilisk Acid)' },

      // The Tunnel
      { id: 'a9-tunnel-1', zone: 'The Tunnel', type: 'waypoint', instruction: 'Get the Waypoint' },
      { id: 'a9-tunnel-2', zone: 'The Tunnel', type: 'trial', instruction: 'Complete the Trial of Ascendancy (The Labyrinth — The Tunnel)' },
      { id: 'a9-tunnel-3', zone: 'The Tunnel', type: 'direction', instruction: 'Exit to The Quarry' },

      // The Quarry
      { id: 'a9-quarry-1', zone: 'The Quarry', type: 'waypoint', instruction: 'Get the Waypoint' },
      { id: 'a9-quarry-2', zone: 'The Quarry', type: 'direction', instruction: 'Find entrance to The Refinery (optional)' },
      { id: 'a9-quarry-3', zone: 'The Quarry', type: 'direction', instruction: 'Find the entrance to The Belly of the Beast' },

      // The Refinery (optional)
      { id: 'a9-refinery-1', zone: 'The Refinery', type: 'quest', instruction: 'Kill General Adus (quest item: Trarthan Powder — Passive Skill Point)' },

      // Belly of the Beast (revisited)
      { id: 'a9-belly-1', zone: 'The Belly of the Beast', type: 'waypoint', instruction: 'Get the Waypoint' },
      { id: 'a9-belly-2', zone: 'The Belly of the Beast', type: 'direction', instruction: 'Navigate to The Rotting Core' },

      // The Rotting Core
      { id: 'a9-core-1', zone: 'The Rotting Core', type: 'direction', instruction: 'Fight through — 3 mini-bosses: Garukhan, Shakari, and a third god' },
      { id: 'a9-core-2', zone: 'The Rotting Core', type: 'boss', instruction: 'Kill The Depraved Trinity (Act boss — 3 gods in sequence)' },
      { id: 'a9-core-3', zone: 'The Rotting Core', type: 'direction', instruction: 'Take the exit to Act 10 — The Ossuary' },
    ]
  },
  {
    id: 10,
    name: 'Act 10',
    steps: [
      // The Ossuary (Act 10 start)
      { id: 'a10-ossuary-1', zone: 'The Ossuary', type: 'direction', instruction: 'Enter from Act 9 exit' },
      { id: 'a10-ossuary-2', zone: 'The Ossuary', type: 'waypoint', instruction: 'Get the Waypoint' },
      { id: 'a10-ossuary-3', zone: 'The Ossuary', type: 'direction', instruction: 'Exit to The Cathedral of Innocence — go upstairs' },

      // Oriath Square (revisited — Town)
      { id: 'a10-town-1', zone: 'Oriath Square', type: 'waypoint', instruction: 'Get the Waypoint' },
      { id: 'a10-town-2', zone: 'Oriath Square', type: 'quest', instruction: 'Talk to Lani and Bannon — pick skill gem' },

      // The Reliquary (optional)
      { id: 'a10-reliquary-1', zone: 'The Reliquary', type: 'direction', instruction: 'Enter The Reliquary (side area)' },
      { id: 'a10-reliquary-2', zone: 'The Reliquary', type: 'quest', instruction: 'Find The Teardrop (quest item — Passive Skill Point)' },

      // The Control Blocks (revisited)
      { id: 'a10-control-1', zone: 'The Control Blocks', type: 'waypoint', instruction: 'Get the Waypoint' },
      { id: 'a10-control-2', zone: 'The Control Blocks', type: 'direction', instruction: 'Find Vilenta and kill her (side quest — Passive Skill Point)' },

      // The Ravaged Square
      { id: 'a10-rsquare-1', zone: 'The Ravaged Square', type: 'waypoint', instruction: 'Get the Waypoint' },
      { id: 'a10-rsquare-2', zone: 'The Ravaged Square', type: 'direction', instruction: 'Enter The Torched Courts' },

      // The Torched Courts (revisited)
      { id: 'a10-torched-1', zone: 'The Torched Courts', type: 'waypoint', instruction: 'Get the Waypoint' },
      { id: 'a10-torched-2', zone: 'The Torched Courts', type: 'direction', instruction: 'Exit to The Desecrated Chambers' },

      // The Desecrated Chambers
      { id: 'a10-deschambers-1', zone: 'The Desecrated Chambers', type: 'waypoint', instruction: 'Get the Waypoint' },
      { id: 'a10-deschambers-2', zone: 'The Desecrated Chambers', type: 'boss', instruction: 'Kill Avarius (reborn) and Innocence (fight together)' },

      // The Ossuary (back)
      { id: 'a10-ossuary2-1', zone: 'The Ossuary', type: 'direction', instruction: 'Return to The Ossuary, go downstairs' },
      { id: 'a10-ossuary2-2', zone: 'The Ossuary', type: 'direction', instruction: 'Find the entrance to The Bone Pits' },

      // The Bone Pits
      { id: 'a10-bonepits-1', zone: 'The Bone Pits', type: 'waypoint', instruction: 'Get the Waypoint' },
      { id: 'a10-bonepits-2', zone: 'The Bone Pits', type: 'boss', instruction: 'Kill Kitava, the Insatiable (Final Act boss — 2 phases: heart + Kitava)' },
      { id: 'a10-bonepits-3', zone: 'The Bone Pits', type: 'note', instruction: 'CAMPAIGN COMPLETE! You are now in the Epilogue. Talk to Lani in Oriath.' },
    ]
  }
];
