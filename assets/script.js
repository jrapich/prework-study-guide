// isnt there a line of code that is supposed to be here at the top of every .js file?


var topics = ["HTML", "CSS", "Git", "JavaScript"];
var randomTopic = topics[Math.floor(Math.random() * topics.length)];

console.log("Here are the topics we learned through PreWork:");
function listTopics() {
    for (let x = 0; x < topics.length; x++) {
        console.log(topics[x]);
    }
};

listTopics();

console.log("which topic should we study first?");
function selectTopic() {
    if (randomTopic === "HTML") {
        console.log("lets study HTML");
    }   else if (randomTopic === "CSS") {
        console.log("lets study CSS");
    }   else if (randomTopic === "Git") {
        console.log("lets study Git");
    }   else if (randomTopic === "JavaScript") {
        console.log("lets study JavaScript");
    }   else {
        console.log("please try again");
    };
};

selectTopic();

//just loop testing
//var shapes = ["triangle", "square", "pentagon", "circle"];
//console.log(`I am logging just the ${shapes[0]}`);

//for (let x = 0; x < shapes.length; x++) {
//    console.log(shapes[x]);
//  };

