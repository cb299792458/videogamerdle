const allPuzzles = [
    
    {
        red: ['Games in the "Final Fantasy" Series', 'Final Fantasy III', 'Final Fantasy Tactics', 'Final Fantasy VII Remake', 'Final Fantasy XV'],
        blue: ['Games in the "Mario" Series', 'Super Mario Bros. 3', 'Super Mario Land', 'Super Mario Odyssey', 'Super Mario Galaxy'],
        purple: ['Games in the "Mega Man" Series', 'Mega Man 3', 'Mega Man Zero', 'Mega Man X', 'Mega Man Battle Network'],
        orange: ['Games in the "Grand Theft Auto" Series', 'Grand Theft Auto III', 'Grand Theft Auto: San Andreas', 'Grand Theft Auto: Vice City', 'Grand Theft Auto V'],
        green: ['Third Game in a Series', 'Final Fantasy III', 'Super Mario Bros. 3', 'Mega Man 3', 'Grand Theft Auto III'],
    },
    {
        red: ['Games in the "Mario" Series', 'Super Mario Galaxy', 'Super Mario Odyssey', 'Super Mario World', 'Super Mario 64'],
        blue: ['Games in the "Zelda" Series', 'The Legend of Zelda: Breath of the Wild', 'The Legend of Zelda: Tears of the Kingdom', 'The Legend of Zelda: A Link to the Past', 'The Legend of Zelda: A Link Between Worlds'],
        purple: ['Initially Released as Arcade Cabinets', 'Asteroids', 'Ms. Pac-Man', 'Street Fighter II: The World Warrior', 'Frogger'],
        orange: ['Games made by Activision Blizzard', 'Diablo', 'Starcraft', 'Overwatch', 'World of Warcraft'],
        green: ['"World" in the title', 'World of Warcraft', 'Super Mario World', 'Street Fighter II: The World Warrior', 'The Legend of Zelda: A Link Between Worlds'],
    },
    {
        red: ['Titles Containing "Space" Terms', 'Metroid', 'Earthbound', 'Stardew Valley', 'Advance Wars 2: Black Hole Rising'],
        blue: ['Alliterative Titles', 'Mega Man', 'Castle Crashers', 'Darkest Dungeon', 'Tekken Tag Tournament'],
        purple: ['Games About Climbing a Mountain', 'Ice Climbers', 'Celeste', 'Getting Over It with Bennett Foddy', 'Journey'],
        orange: ['Games with Birds in their Titles', 'Duck Hunt', 'Phoenix Wright: Ace Attorney', 'Club Penguin', 'Untitled Goose Game'],
        green: ['Nintendo Entertainment System (Famicom) Games', 'Metroid', 'Mega Man', 'Ice Climbers', 'Duck Hunt'],
    },
    {
        red: ['Titles Containing "Keyboard" Terms', 'Enter the Gungeon', 'ALTF4', 'EA Sports F1 2023', 'Control'],
        blue: ['Titles Involving the Afterlife', 'Hades', 'Limbo', `Assassin's Creed: Valhalla`, 'Amnesia: Rebirth'],
        purple: ['Games About Digging/Mining/Caving', 'Spelunky', 'Terraria', 'Steamworld Dig', 'Deep Rock Galactic'],
        orange: ['Cards as a Major Gameplay Element', 'Slay the Spire', 'Marvel Snap', 'Hearthstone', 'Magic: The Gathering Arena'],
        green: ['Roguelite Games', 'Enter the Gungeon', 'Hades', 'Spelunky', 'Slay the Spire'],
    },
    {
        red: ['Remakes with the Same Title as the Original', `Demon's Souls`, 'Resident Evil 2', `The Legend of Zelda: Link's Awakening`, 'Shadow of the Colossus'],
        blue: ['The Protagonist has a Prosthetic Arm', 'Sekiro: Shadows Die Twice', 'The Legend of Zelda: Tears of the Kingdom', 'Hi-Fi Rush', 'Bionic Commando'],
        purple: ['Titles Containing "Circle" Synonyms', 'Elden Ring', 'Halo', 'Deathloop', 'Mario Kart: Super Circuit'],
        orange: ['Titles Containing "Stage of Life" Terms', 'Bloodborne', 'Kid Icarus', 'The Elder Scrolls V: Skyrim', `Teenage Mutant Ninja Turtles: Shredder's Revenge`],
        green: ['Games Developed by From Software', `Demon's Souls`, 'Sekiro: Shadows Die Twice','Elden Ring', 'Bloodborne'],
    },
    {
        red: ['Games Designed for Two Players', 'A Way Out', 'It Takes Two', 'Portal 2', 'lichess'],
        blue: ['Games Designed for Three Players', 'Apex Legends', 'Trine', 'Battletoads (2022)', 'Rocket League'],
        purple: ['Netflix Adaptations', 'League of Legends', 'The Witcher', 'Cyberpunk 2077', 'Cuphead'],
        orange: ['Games with "Story" Synonyms in their Titles', 'Xenoblade Chronicles', 'Maple Story', 'The Stanley Parable', 'Undertale'],
        green: ['Free-to-Play (on release)', 'lichess', 'Apex Legends', 'League of Legends', 'Maple Story'],
    },
    {
        red: ['Titles Containing Animal Names', 'Starfox 64', 'Metal Gear Solid 3: Snake Eater', 'Donkey Kong Country 3', 'Watch Dogs'],
        blue: ['Games with Time Travel as a Major Theme', 'The Legend of Zelda: Ocarina of Time', 'Chrono Trigger', 'Braid', 'Day of the Tentacle'],
        purple: ['"Crossover" Games"', 'Super Smash Bros.', 'Puyo Puyo Tetris', 'Marvel vs. Capcom 2: New Age of Heroes', 'Heroes of the Storm'],
        orange: ['Titles Containing Colors', 'Goldeneye 007', 'Red Dead Redemption 2', 'Neon White', 'Pokémon Yellow Version: Special Pikachu Edition'],
        green: ['Games for the Nintendo 64', 'Starfox 64', 'The Legend of Zelda: Ocarina of Time', 'Super Smash Bros.', 'Goldeneye 007'],
    },
    {
        red: ['Titles Containing "Playstation Buttons"', 'Triangle Strategy', 'Cross Code', 'Death Squared', 'Castlevania: Circle of the Moon'],
        blue: ['Titles With "State/Territory" Words', 'Kingdom Hearts', 'Age of Empires II', 'Borderlands', 'Realm Royale'],
        purple: ['Titles Containing Parts of the Body', 'Shin Megami Tensei', 'ARMS', 'Brain Age', 'Football Manager 2023'],
        orange: ['Titles Containing "Gear" or "Gears"', 'Xenogears', 'Gears of War', 'Metal Gear Solid 2: Sons of Liberty', 'Guilty Gear Strive'],
        green: ['Japanese Role Playing Games (JRPGs)', 'Triangle Strategy', 'Kingdom Hearts', 'Shin Megami Tensei', 'Xenogears'],
    },
    {
        red: ['Theme: Rock, Paper, and/or Scissors', 'Rock Band', 'Papers, Please', 'Snipperclips: Cut it our, Together!', 'Rock Paper Scissors Simulator'],
        blue: ['Games Involving Real World Interaction', 'Pokémon GO', 'GeoGuessr', 'Foldit', 'Online Poker'],
        purple: ['Titles Involving the Undead', 'House of the Dead', 'Vampire Survivors', 'Zombies Ate My Neighbors', 'Super Ghouls and Ghosts'],
        orange: ['Valve Games', 'Half-Life: Alyx', 'Dota 2', 'Team Fortress 2', 'Portal'],
        green: ['Games Played with Special Peripherals', 'Rock Band', 'Pokémon GO', 'House of the Dead', 'Half-Life: Alyx'],
    },
    // 5: {
    //     red: [],
    //     blue: [],
    //     purple: [],
    //     orange: [],
    //     green: [],
    // },
    // 5: {
    //     red: [],
    //     blue: [],
    //     purple: [],
    //     orange: [],
    //     green: [],
    // },
]

export default allPuzzles;