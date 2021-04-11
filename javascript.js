const courses = [
    {
        name: "Tkinter Course",
        mediaType: "Video",
        duration: "5 hours",
        language: "Python",
        Author: "freeCodeCamp",
        link: "https://www.youtube.com/watch?v=YXPyB4XeYLA&list=WL&index=2&t=667s",
        description: "Learning how to make Graphic User interfaces by using the Python Tkinter library. "

    },{
        name: "CSS Parallax",
        mediaType: "Article",
        duration: "20 minutes",
        language: "CSS",
        Author: "Daily Fire",
        link: "https://medium.com/@dailyfire/pure-css-parallax-simple-tricks-da102d0ffdb9",
        description: "Learn how to make a Parallax scrolling effect"
    },{
        name: "Pygame Tutorial",
        mediaType: "Video",
        duration: "2 hours",
        language: "Python",
        Author: "freeCodeCamp",
        link: "https://www.youtube.com/watch?v=FfWpgLFMI7w&t=255s",
        description: "Learn Pygame by building a space invaders game"
    },{
        name: "HTML Forms",
        mediaType: "Interactive Article",
        duration: "20 minutes",
        language: "HTML",
        Author: "w3schools",
        link: "https://www.w3schools.com/html/html_forms.asp",
        description: "Learn how to add user acitvity in your website using an HTML form"
    },{
        name: "Machine Learning",
        mediaType: "Article",
        duration: "45 minutes",
        language: "Python",
        Author: "Jason Brownlee",
        link: "https://machinelearningmastery.com/machine-learning-in-python-step-by-step/",
        description: "Make your first Machine Learning project using Python"
    },{
        name: "Creating Graphs",
        mediaType: "Article",
        duration: "15 minutes",
        language: "Python",
        Author: "geeksforgeeks",
        link: "https://www.geeksforgeeks.org/graph-plotting-in-python-set-1/",
        description: "Learn how to create a graph in Python with Matplotlib!"
    },{
        name: "Creating Graphs",
        mediaType: "Video",
        duration: "8 hours",
        language: "Javascript",
        Author: "freeCodeCamp",
        link: "https://www.youtube.com/watch?v=3PHXvlpOkf4&t=4318s",
        description: "Learn how to manipulate the Document object model using Javascript!"
    },{
        name: "More HTML tags",
        mediaType: "Video",
        duration: "15 minutes",
        language: "HTML",
        Author: "Web Dev Simplified",
        link: "https://www.youtube.com/watch?v=iX_QyjdctsQ",
        description: "Learn cool new HTML tags almost no one knows of!"
    },{
        name: "Button Hover Effect",
        mediaType: "Video",
        duration: "12 minutes",
        language: "CSS",
        Author: "Brian Design",
        link: "https://www.youtube.com/watch?v=zPcvAwp71uA",
        description: "Learn how to create a cool and advanced button hover effect using CSS"
    },{
        name: "Connect to the DOM",
        mediaType: "Article",
        duration: "15 minutes",
        language: "Javascript",
        Author: "MDN Web Docs",
        link: "https://www.youtube.com/watch?v=zPcvAwp71uA",
        description: "Learn how to connect HTML and Javascript."
    },{
        name: "Quick Draw Emoji",
        mediaType: "Article",
        duration: "1 hour",
        language: "Python",
        Author: "Make School",
        link: "https://www.makeschool.com/academy/track/standalone/quick-draw-emoji--nim/getting-started",
        description: "Learn Machine Learning by making a Quick Draw Emojoi Project"
    },{
        name: "Analyzing Datasets",
        mediaType: "Article",
        duration: "20 minutes",
        language: "R",
        Author: "r-bloggers",
        link: "https://www.r-bloggers.com/2018/08/exploratory-data-analysis-in-r-introduction/",
        description: "Learn Basic Data Analysis"
    }
]


function getString(val){
    var added = "";
    for(var i=0;i < courses.length; i++){
        if(courses[i].language.toLowerCase() === val.value.toLowerCase()){
            added += "<div class='info-box'>"; 
            added += "<h1 id = 'name'>" + courses[i].name + "</h1>";
            added += "<h2 id = 'author'> Created by: "+courses[i].Author+"</h2>";
            added += "<h2 id = 'mediaType'> Media: " + courses[i].mediaType + "</h2>";
            added += "<h2 id = 'duration'> Approx Length: " + courses[i].duration + "</h2>";
            added += "<p id = 'description'>" + courses[i].description+"</p>";
            added += "<a id = 'link' href = '" + courses[i].link + " ' target='_blank' rel='noopener noreferrer'> Learn It </a>";
            added += "</div>";
        }

    }
    return added;
}

function getResults(){
    var chose = document.getElementById('form');
    var output = document.getElementById('results');
    output.innerHTML = "" + getString(chose);
    console.log(output);
}
