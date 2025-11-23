// Week used in display for home screen
const currentStatus = {
    week: 1
}

// General competition data
// This data will not be updated anywhere
const competitionData = {
    numberOfWeeks: 10,
    episodes: ["Queens of the Brit Gala", "Rumble in the Jumble", "Battle of the Brats", "Sweety Darlings!", "Talent Ahoy!", "Peter Pansy: The Rusical", "Snatch Me Out!", "The Hun Makeover", "Comedy is a Bitch", "Finale"],
    episodeType: ["Runway", "Design", "Girl Groups", "Acting", "Talent Show", "Rusical", "Snatch Game", "Makeover", "Roast", "Finale"],
    lipSyncs: ["Von Dutch by Charli XCX", "Heartbreak (Make Me a Dancer) by Freemasons & Sophie Ellis-Bextor", "Sound of the Underground by Girls Aloud", "Pearls by Jessie Ware", "Spectrum (Say My Name) by Florence + the Machine & Calvin Harris", "Don't Rain on My Parade by Shirley Bassey", "Tainted Love by Soft Cell", "Push the Button by Sugababes", "Mamma Knows Best by Jessie J", "TBC"],
    synopses: ["A hot new cast of queens enter the workroom as RuPaul kicks off his legendary race. Joel Dommett joins Michelle Visage and Alan Carr on the judging panel.", 
               "Supermodel turned comedy star Michelle De Swarte joins Mama Ru, Michelle Visage and Graham Norton on the judging panel as the queens take on the iconic design challenge.", 
               "The queens take on a hyperpop banger for the girl group challenge. Girls Aloud legend Nadine Coyle joins RuPaul, Michelle Visage and Graham Norton on the judging panel.", 
               "There's high drama as the queens star in high camp bonk-buster fiction adaptations. Comedy legend Jane Horrocks guest judges alongside Ru, Michelle Visage and Alan Carr.", 
               "The queens take to the high seas for a cruise themed talent show. Derry Girl Jamie-Lee O’Donnell joins RuPaul, Michelle Visage and Alan Carr on the judging panel.", 
               "It's Rusical week! Mazz Murray joins Ru, Michelle, and Graham as one more queen takes her final bow.", 
               "Jordan North joins RuPaul as the queens take on a new edition of the Snatch Game - Snatch Me Out!", 
               "Mutya Buena joins the judging panel as the queens makeover over Hun-tastic celebrities.", 
               "It's the semi-finals! BAFTA winner Sophie Willan joins RuPaul as the queens to show off their best stand-up skills in a roast challenge to secure a place in the finale.",
            ""],
    runways: ["Queen of your Hometown", "Rumble in the Jumble", "Cuddly Wuddly", "Ab Fab: A Night of a Thousand Sweetie Darlings", "Having it Large", "Battle Axe - Warrior Queen", "Holiday Ho Ho Hos", "Drag Family Resemblance", "English Country Garden Realness", "Final Eleganza"],
    competitiveEpisode: [true, true, true, true, true, true, true, true, true, false],
    placements: ["Win", "High", "Safe", "Low", "Bottom", "Eliminated", "Out", "Quit"],
    finalePlacements: ["Winner", "Runner Up", "Eliminated", "Out"],
};

// Number of points for each placement
const points = (function () {
    const points =  [{id: "win",  placement: "Win", value: 5},
                     {id: "top2", placement: "Top 2", value: 5},
                     {id: "high", placement: "High", value: 4},
                     {id: "safe", placement: "Safe", value: 3},
                     {id: "low",  placement: "Low", value: 2},
                     {id: "btm",  placement: "Bottom", value: 1},
                     {id: "elim", placement: "Eliminated", value: 0}];

    const initialPoints = points.slice();

    return {points, initialPoints};
})();

// Information for each of the queens
const queens = (function () {
    const queen0 = {
        queen: "Bones",
        initialPlacement: ["Safe", "High", "Win", "Safe", "Bottom", "High", "Bottom", "Win", "Win", "Runner Up"],
        initialReturn: Array(competitionData.numberOfWeeks).fill(false),
    };

    const queen1 = {
        queen: "Bonnie Ann Clyde",
        initialPlacement: ["Safe", "Low", "Safe", "Win", "Safe", "Safe", "Win", "Eliminated", "Out", "Out"],
        initialReturn: Array(competitionData.numberOfWeeks).fill(false),
    };

    const queen2 = {
        queen: "Catrin Feelings",
        initialPlacement: ["High", "High", "Safe", "High", "Safe", "Safe", "High", "Bottom", "Bottom", "Runner Up"],
        initialReturn: Array(competitionData.numberOfWeeks).fill(false),
    };

    const queen3 = {
        queen: "Chai T Grande",
        initialPlacement: ["Safe", "Safe", "Low", "Low", "Eliminated", "Out", "Out", "Out", "Out", "Out"],
        initialReturn: Array(competitionData.numberOfWeeks).fill(false),
    };

    const queen4 = {
        queen: "Elle Vosque",
        initialPlacement: ["Win", "Safe", "High", "Safe", "High", "Win", "High", "Safe", "High", "Runner Up"],
        initialReturn: Array(competitionData.numberOfWeeks).fill(false),
    };

    const queen5 = {
        queen: "Nyongbella",
        initialPlacement: ["Bottom", "Low", "Bottom", "Eliminated", "Out", "Out", "Out", "Out", "Out", "Out"],
        initialReturn: Array(competitionData.numberOfWeeks).fill(false),
    };

    const queen6 = {
        queen: "Paige Three",
        initialPlacement: ["High", "Safe", "High", "Safe", "Low", "Win", "Eliminated", "Out", "Out", "Out"],
        initialReturn: Array(competitionData.numberOfWeeks).fill(false),
    };

    const queen7 = {
        queen: "Pasty",
        initialPlacement: ["Bottom", "Eliminated", "Out", "Out", "Out", "Out", "Out", "Out", "Out", "Out"],
        initialReturn: Array(competitionData.numberOfWeeks).fill(false),
    };

    const queen8 = {
        queen: "Sally TM",
        initialPlacement: ["Safe", "Win", "Safe", "High", "Safe", "Eliminated", "Out", "Out", "Out", "Out"],
        initialReturn: Array(competitionData.numberOfWeeks).fill(false),
    };

    const queen9 = {
        queen: "Silllexa Diction",
        initialPlacement: ["Safe", "Safe", "Safe", "Bottom", "Win", "Low", "Low", "High", "High", "Runner Up"],
        initialReturn: Array(competitionData.numberOfWeeks).fill(false),
    };

    const queen10 = {
        queen: "Tayris Mongardi",
        initialPlacement: ["Low", "Safe", "Safe", "Safe", "High", "Bottom", "Safe", "Low", "Eliminated", "Out"],
        initialReturn: Array(competitionData.numberOfWeeks).fill(false),
    };

    const queen11 = {
        queen: "Viola",
        initialPlacement: ["Safe", "Bottom", "Eliminated", "Out", "Out", "Out", "Out", "Out", "Out", "Out"],
        initialReturn: Array(competitionData.numberOfWeeks).fill(false),
    };


    // Set together in one array
    const queens = [queen0, queen1, queen2, queen3, queen4, queen5, queen6, queen7, queen8, queen9, queen10, queen11];

    // Set placement and return equal to initial values, will be updated by user
    queens.forEach((queen) => {
        queen.placement=queen.initialPlacement.slice();
        queen.return=queen.initialReturn.slice();
        queen.img=`images/${queen.queen.replaceAll(" ", "").replaceAll("'","")}.jpg`;
    })

    // Number of queens in competition
    const numberOfQueens = queens.length;

    return {queens, numberOfQueens};
})();

// Links to images
const images = {
    arrowLeft: "images/leftArrow.png",
    arrowRight: "images/rightArrow.png",
    settings: "images/settings.png",
    close: "images/close.png",
    feedback: "images/feedback.png",
    home: "images/home.png"
}

// Functions for saving and retrieving data
const storage = (function() {
    // Save data
    const saveData = function() {
        localStorage.setItem("DRUK7Generator.queensData", JSON.stringify(queens.queens));  
        localStorage.setItem("DRUK7Generator.currentStatus.week", JSON.stringify(currentStatus.week));  
        console.log(`storage.saveData: queens.queens array and currentStatus.week saved to local storage`);
    }

    const savePoints = function () {
        localStorage.setItem("DRUK7Generator.points", JSON.stringify(points.points));
        console.log(`storage.savePoints: points saved to local storage`);
    }

    // Read in queen data
    const getData = function() {
        let storedQueens = JSON.parse(localStorage.getItem("DRUK7Generator.queensData"));   
        let storedWeek = JSON.parse(localStorage.getItem("DRUK7Generator.currentStatus.week"));
        let storedPoints = JSON.parse(localStorage.getItem("DRUK7Generator.points"));
        
        if (storedQueens) {
            console.log(`storage.getData: queens.queens array retrieved from local storage`);
            queens.queens = storedQueens;
        }

        if (storedWeek) {
            currentStatus.week = storedWeek;
            console.log(`storage.getData: currentStatus.week ${currentStatus.week} retrieved from local storage`);
        }

        if (storedPoints) {
            points.points = storedPoints;
            console.log(`storage.getData: points retrieved from local storage`);
        }
    }

    return { saveData, savePoints, getData };
})();

// Display functions that will be used across different pages
const universalDisplay = (function() {
    // Close button that will appear within Settings and Info pop-ups
    const createCloseButton = function(id) {
        const closeButton = document.createElement("button");
        closeButton.id = id;
        closeButton.className = "close-button";
        const closeImage = document.createElement("img");
        closeImage.src = images.close;
        closeImage.className = "close-button-image";
        closeButton.appendChild(closeImage);
    
        return closeButton;
    }
    
    // Function to create Info pop-up
    const createInfoBox = function() {
        // Create divs
        const infoDiv = document.createElement("div");
        infoDiv.id = "info-div";
        const headerDiv = document.createElement("div");
        headerDiv.id = "info-header-div";

        document.body.appendChild(infoDiv);
        infoDiv.appendChild(headerDiv);
    
        // Create header
        const header = document.createElement("h3");
        header.innerText = "Info";
        headerDiv.appendChild(header);
    
        // Close button
        const closeButton = createCloseButton("info-close-button");
        headerDiv.appendChild(closeButton);
    
        // Add <p> elements
        const addParagraph = function(innerText) {
            const paragraph = document.createElement("p");
            paragraph.innerText = innerText;
            infoDiv.appendChild(paragraph);
        };
    
        addParagraph("Welcome to the RuPaul's Drag Race All Stars 2 fantasy generator");
        addParagraph("Use the arrows to move through the weeks and reassign placements for the queens to change the outcome of the competition");
        addParagraph(`Answer questions like "What if Adore had never quit?", "What if this season was non-elimination", and "What if Roxxxy had never leant Alaska that rhinestone tank top?"`);
        addParagraph(`To see the results summary press "See Results"`);
        addParagraph(`To reset the results back to the original placements from the competition press "Reset Results"`);
    
        // Set initial display to none and only pop-up when info button is clicked
        infoDiv.style.display = "none";

        // Add listener to close button
        universalControl.infoCloseListener();
    };

    // Create main heading for page
    const createHeading = function() {
        // Main heading div
        const headingDiv = document.createElement("div");
        headingDiv.id = "main-heading";
        document.body.appendChild(headingDiv);

        // Left and right divs to go inside main header div
        const leftDiv = document.createElement("div");
        leftDiv.id = "main-heading-left";
        const rightDiv = document.createElement("div");
        rightDiv.id = "main-heading-right";
        headingDiv.appendChild(leftDiv);
        headingDiv.appendChild(rightDiv);

        // Create main heading
        const heading = document.createElement("h1");
        heading.textContent = "DRUK Season 7 Simulator";
        leftDiv.appendChild(heading);
    };

    // Create Home Button
    const createHomeButton = function() {
        // Get div that button will sit inside
        const rightDiv = document.getElementById("main-heading-right");
        
        // Link to home page
        const homeLink = document.createElement("a");
        homeLink.href = "index.html";

        // Home button
        const homeButton = document.createElement("button");
        homeButton.id = "home-button";

        // Add image
        const homeImg = document.createElement("img");
        homeImg.src = images.home;
        homeImg.alt = "Home";

        // Put everything together
        homeLink.appendChild(homeButton);
        homeButton.appendChild(homeImg);
        rightDiv.appendChild(homeLink);
    };

    // Create info button
    const createInfoButton = function() {
        // Get div that button will sit inside
        const rightDiv = document.getElementById("main-heading-right");

        // Create info button
        const info = document.createElement("button");
        info.id = "info-button";
        info.innerText = "i";
        rightDiv.appendChild(info);

        // Create info pop-up and add listener to button
        createInfoBox();
        universalControl.infoButtonListener();
    };

    // Create settings button
    const createSettingsButton = function() {
        // Get div that button will sit inside
        const rightDiv = document.getElementById("main-heading-right");

        // Create setting button
        const settings = document.createElement("button");
        settings.id = "settings-button";
        rightDiv.appendChild(settings);

        // Add image
        const settingsImg = document.createElement("img");
        settingsImg.src = images.settings;
        settingsImg.alt = "Settings";
        settings.appendChild(settingsImg);
    };

    // Create feedback button
    const createFeedbackButton = function() {
        // Get div that button will sit inside
        const rightDiv = document.getElementById("main-heading-right");
        
        // Create button
        const feedbackButton = document.createElement("button");
        feedbackButton.id = "feedback-button";

        // Link to feedback page
        const feedbackLink = document.createElement("a");
        feedbackLink.href = "feedback.html";

        // Add image
        const feedbackImg = document.createElement("img");
        feedbackImg.src = images.feedback;
        feedbackImg.alt = "Feedback";

        // Put everything together
        feedbackLink.appendChild(feedbackButton);
        feedbackButton.appendChild(feedbackImg);
        rightDiv.appendChild(feedbackLink);
    };

    // General function for creating buttons that should take boolean inputs
    const createButtons = function(createHome, createInfo, createSettings, createFeedback) {
        if (createHome) {createHomeButton()};
        if (createInfo) {createInfoButton()};
        if (createSettings) {createSettingsButton()};
        if (createFeedback) {createFeedbackButton()};
    }

    // Option to reset queen progress
    // Event listener added individually to each page
    const createResetButton = function(navID) {
        // Get div that button will sit inside
        const navResults = document.getElementById(navID);
        
        // Create button
        const resetButton = document.createElement("button");
        resetButton.textContent="Reset Results";
        resetButton.id="reset-results";
        
        navResults.appendChild(resetButton);
    }

    // Create navigation div
    const createNavDiv = function() {
        const navDiv = document.createElement("div");
        navDiv.id = "nav-div";
        document.body.appendChild(navDiv);
    };

    return { createHeading, createButtons, createNavDiv, createInfoBox, createResetButton, createCloseButton};
})();

// Create functions that will be used to control the site
const universalControl = (function () {
    // Object to track which pop-ups are open
    const popUpStatus = {
        infoOpen: false,
        settingsOpen: false
    };

    // Function to close the info pop-up
    const infoClose = function () {
        if (popUpStatus.infoOpen===true) {
            const infoDiv = document.getElementById("info-div");
            infoDiv.style.display = "none";
            popUpStatus.infoOpen = false;
        }
    };

    // Create listener for close button in info pop-up
    const infoCloseListener = function () {
        const infoCloseButton = document.getElementById("info-close-button");
        infoCloseButton.addEventListener("click", infoClose)
    };

    // Create listener for info button in main heading div at top of page
    const infoButtonListener = function () {
        // Select relevant elements
        const infoButton = document.getElementById("info-button");
        const infoDiv = document.getElementById("info-div");

        // If info pop-up is not being displayed then info button will display the pop-up
        // If info pop-up is already open then info button will close the pop-up
        infoButton.addEventListener("click", function() {
            if (popUpStatus.settingsOpen===false && popUpStatus.infoOpen===false) {
                infoDiv.style.display = "block";
                popUpStatus.infoOpen = true;
            } else if (popUpStatus.infoOpen===true) {
                infoClose();
            }
        });
    };

    // Function for resetting all queen results back to original competition placements
    const resetResults = function() {
        for (let i = 0; i < queens.numberOfQueens; i++) {
                queens.queens[i].placement = queens.queens[i].initialPlacement.slice();
                queens.queens[i].return = queens.queens[i].initialReturn.slice();
            };

            storage.saveData();
    }

    return {infoCloseListener, infoButtonListener, resetResults, popUpStatus};
})()

export {queens, competitionData, storage, currentStatus, universalDisplay, universalControl, images, points};