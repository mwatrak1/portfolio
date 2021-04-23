const projectItems = []
var currentProjectIndex, currentDescription, currentTechnologiesDiv, currentPhotosDiv, currentLinkDiv

window.onload = () => {
    let projectsDiv = document.getElementById("projects-nav")

    for (let element of projectsDiv.children) {
        let project = element.children[0]
        projectItems.push(project)
        project.addEventListener('click', changeProject)
        addAnimations(project)
    }
    currentDescription = document.getElementById("project-description").firstElementChild
    currentTechnologiesDiv = document.getElementById("project-technologies").firstElementChild
    currentPhotosDiv = document.getElementById("project-gallery").firstElementChild.firstElementChild.children
    currentLinkDiv = document.getElementById("project-links").firstElementChild.children


    projectItems[0].click()
}

const changeProject = (event) => {
    currentProjectIndex = projectItems.findIndex((el) => { return event.target === el})
    console.log(currentProjectIndex)
    changeDescription()
    changeTechnologies()
    changePhotos()
}

const changeDescription = () => {
    currentDescription.innerText = projects[currentProjectIndex].description
}

const changeTechnologies = () => {
    currentTechnologiesDiv.innerHTML = ""

    projects[currentProjectIndex].technologies
        .map((technology) => {
            currentTechnologiesDiv.innerHTML += `<span class="badge rounded-pill pill-background">${technology}</span>`
        })
}

const changePhotos = () => {

    for (let i = 0; i < currentPhotosDiv.length; i ++){
        currentPhotosDiv[i].firstElementChild.src = projects[currentProjectIndex].photos[i]
    }
}

const changeLinks = () => {
    
    currentLinkDiv[1].firstElementChild.onclick = () => {
        window.open(projects[currentProjectIndex].links[0])
    }

    currentLinkDiv[2].firstElementChild.onclick = () => {
        window.open(projects[currentProjectIndex].links[1])
    }
    
}

const addAnimations = (element) => {
    element.addEventListener('mouseover', (event) => {
        event.target.parentElement.style.opacity = 0.5
    })

    element.addEventListener('mouseout', (event) => {
        event.target.parentElement.style.opacity = 1.0
    })
}

const projects = [
    {
        description: `Video call tutoring app was created by me and my friend as a part of our engineering thesis.
        It is an app that connects students and teachers, allows then to communicate schedule a meeting and most importantly
        participate in an online video call lesson. It focuses on bringing language tutoring to anyone with access to internet 
        with comfort of not having to leave a house. Website makes it possible to learn any language from native speakers
        who are fluent in their speech and can pass on practical knowledge and rules of correct pronounciation - its the only
        way of learning from native language users without having to visit the country
        
        Common functionalities include: users profile, public forum, private messaging, searching ads and video conferencing
        Other functionalities differ based on users type - either student or teacher
        Teachers can: create ads and edit them, add promotional videos, crate a schedule
        Students can: book a lesson and  publish a review of past lessons
        `,
        technologies: [
            "Javascript", "Node", "Express", "MySQL", "WebRTC", "AWS EC2 and S3", "STUN and TURN servers", "Nginx"
        ],
        photos: [
            "./photos/videoconference/videoconference.png", "./photos/videoconference/ads.png", "./photos/videoconference/ad.png"
        ],
        links: ["https://github.com", "https://lelo.link"]
    },
    {
        description: `Ticketing - microservices - an e-commerce app for selling and buying tickets for any events.
        It allows registered users to easily publish and offer for selling a particular ticket which is then listed for
        any other logged user to see. If an user decides to buy a ticket it is being reserved for them for 15 minutes - it is
        the time user has to pay, otherwise the ticket is unlocked again. Application takes advatage of microservices pattern
        which makes it very scallable - everything is based on events communicating crutial information between services.
        For an e-commerce ticket app where there is a possibility of thousands of users trying to buy the same ticket at the
        same time correct event handing is critical - thats why it implemnts NATS as an event streaming solution to handle
        concurrent orders being made.
        
        Main focus of this app is a strong backend that handles authorization between services, cross service data replication,
        resolves concurrency issues and has common module for events, error handling and event listeners and publishers.`,
        technologies: [
            "TypeScript", "Docker", "Kubernetes", "NATS", "Node", "Express", "Next.js", "React", "MongoDB", "Redis"
        ],
        photos: [
            "./photos/", "./photos/", "./photos/"
        ],
        links: ["", ""]
    },
    {
        description: `Stock notifications - an app for setting up  and then receiving notifications for when users favorite stock 
        price changes accordingly. Users can browse stocks, check the current price, read more about them, see the 
        historical stock data shown as a graph and after registration have the possibility of setting up notifications that are
        delivered to them using Telegram messages. 
        
        To register user must first subscribe to StockNotifications Telegram bot channel and only after then can be 
        registered - it allows for phone number verification and provides an easy way to send messages afterwards.

        On the dashboard user can check all notifications and see the current progress towards stocks reaching the goal.
        Lambda function in AWS checks for notifications if they reached the goal - if so user is notified by making a request
        to Telegram API.
        `,
        technologies: [
            "Python", "Django", "MongoDB", "AWS Lambda", "Docker", "Telegram API", "Yahoo Finance API"
        ],
        photos: [
            "./photos/stocks/stock.png", "./photos/stocks/dashboard.png", "./photos/stocks/notification.png"
        ],
        links: ["", ""]
    },
    {
        description: `Automatic recipes schedule -  an app for getting random recipes being delivered to user everyday at the same
        time. Recipes are sent as an email - each consists of 5 recipes for different meals and some possible
        alternatives. Everyday user gets recipe for: breakfast, main course, dinner, salad and soup.
        
        All recipes are stored in a database and were previously scraped from most popular food blogs using Python and BeautufulSoup.
        Everyday Google Cloud Function is scheduled to run and generate random recipes for each user.
        `,
        technologies: [
            "Python", "Google Cloud Functions and Job Scheduler", "BeautifulSoup", "MongoDB", "SNMP server"
        ],
        photos: [
            "./photos/recipes/main.png", "./photos/recipes/dessert.png", "./photos/recipes/soup.jpg"
        ],
        links: ["", ""]
    }
]