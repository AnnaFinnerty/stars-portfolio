const agency = {
    name: "agency",
    stack: ['React.js','Javascript','HTML5','CSS3'],
    type: 'Interactive Icon',
    keywords:['frontend','graphic design'],
    url: 'https://AnnaFinnerty.github.io/agency',
    githubUrl: 'https://github.com/AnnaFinnerty/agency',
    src: ['./img/agency.png'],
    description: "Pretend you run your own web dev agency with this React.js business platform simulator.",
    caseStudy: [],
    live: true,
}

const bartleby = {
    name: "bartleby",
    stack: ['Javascript','Greasemonkey','Tampermonkey'],
    type: 'Productivity Tool',
    visibleKeywords:['frontend'],
    githubUrl: 'https://github.com/AnnaFinnerty/bartleby',
    src: ['./img/ColorWheel1.png'],
    description: 'A copy/paste manager for Firefox and Chrome that transfers content between tabs.',
    caseStudy: [],
    live: true,
}

const cloudchaos = {
    name: "CloudChaos",
    stack: ['AWS CloudFormation','AWS Lambda', 'AWS SNS', 'cloud'],
    type: 'Deployment Tool',
    visibleKeywords:['frontend','backend'],
    githubUrl: 'https://github.com/AnnaFinnerty/CloudChaos',
    src: ['./img/ColorWheel1.png'],
    description: 'A CloudFormation macro/templating language that allows you to insert random events into deployment stacks for chaos architecturee testing, employee training, or challenging yourself in JSON or YAML.',
    caseStudy: ["I've always been interested in chaos engineering. CloudChaos is a CloudFormation Macro/templating language that allows you to create special CloudFormation templates that launch differently each time the stack is updated, based on predefined events.", "Suitable for testing, training, or challenging yourself in JSON or YAML, you can also configure an email address to recieve more information about what's broken this time."],
    live: true,
}

const citadels = {
    name: "citadels",
    stack: ['React.js','JSX', 'CSS', 'AI'],
    type: 'Game',
    visibleKeywords:['frontend','backend'],
    url: 'https://annafinnerty.github.io/Citadels/',
    githubUrl: '',
    src: ['./img/Citadels1.png'],
    description: 'React game with AI opponent',
    caseStudy: [
        'One of my first projects in React.js, but still one of my favorites',
        "This turn-based game-takeover game is simple enough when played against another player, but I struggled for months to make an AI that was suitably easy for 'easy' mode. It simply always wanted to win!",
        "Amazingly enough, most of it's behavior is random, along with a few distance calculation, but it was a fun introduction to React!",
    ],
    live: true,
}

const colorwheel = {
    name: "named colorwheel",
    stack: ['React.js','JSX', 'CSS', 'AI'],
    type: 'Game',
    visibleKeywords:['frontend','backend'],
    url: 'https://annafinnerty.github.io/named_colorwheel/',
    githubUrl: 'https://annafinnerty.github.io/named_colorwheel/',
    src: ['./img/ColorWheel1.png'],
    description: 'React game with AI opponent',
    caseStudy: [
        "I wanted to explore using HTML5 canvas to create a useful tool, and thought it would be fun to have an interactive tool to explore the named colors for creating fast prototypes.",
        "The default value shows the colors sorted, and then drawn in a circle, arranged by rgb values. Click the slider on the side to see other sorts.",
        "Click to see differently complementary pairings -- all done with a little trigonometry.",
        "A lot of math, but a project I'm still proud of completing!",
    ],
    live: true,
    collaborators: [{
        name: 'Michael Finnerty',
        url: 'https://github.com/MichaelJamesFinnerty'
    }]
}

const habit = {
    name: "habit",
    stack: ['Express.js','Mongoose', 'MongoDB'],
    type: 'App',
    visibleKeywords:['frontend','backend'],
    url: 'https://dashboard.heroku.com/apps/ga-habit-app1',
    githubUrl: '',
    src: ['./img/Habit1.png'],
    description: 'Habit tracker app with RESTful routes',
    caseStudy: [
        'Habit is a full CRUD app that allows users to create and track the development of personal habits.',
        'My partner and I started by building out the backend in Express and Mongoose, creating multiple related models to track user-created behaviors, as well as instances of practicting those behaviors',
        'Since privacy was important to us, users could also choose whether they wanted their activity to be visible to other users.',
    ],
    live: true,
    collaborators: [{
        name: 'Walter Sylvester',
        url: 'https://github.com/walter74ucla'
    }]
}

const higgins = {
    name: "Higgins",
    stack: ['python', 'AWS Lambda','AWS API Gateway', 'AWS S3', 'cloud'],
    type: 'Chatbot',
    visibleKeywords:['frontend','backend'],
    githubUrl: 'https://github.com/AnnaFinnerty/higgins-chatbot',
    src: ['./img/ColorWheel1.png'],
    description: 'Based on the famous Eliza chatbot, Higgins includes addition functionality like loading custom scripts (locally or from S3), triggering AWS Lambda functions, and analyzing sentiment using AWS Comprehend.',
    caseStudy: [],
    live: true,
}

const stillbreaking = {
    name: "still breaking",
    stack: ['React.js','Python', 'Flask', 'SQL', 'API'],
    skills: ['React.js','Python', 'Flask', 'SQL', 'API','React-Semantic-UI','Node.js','javascript'],
    type: 'App',
    visibleKeywords:['frontend','backend','agile teamwork'],
    url: 'https://still-breaking-react.herokuapp.com/',
    githubUrl: 'https://github.com/tbone9/still-breaking-react',
    src: ['./img/StillBreaking1.png'],
    description: 'News content discovery app with multiple APIs',
    caseStudy: [
        'Still breaking allows users to keep track of ongoing news stories before they fall through the cracks,',
        'Using NewsAPI, my partner and I allows registered users to search and save for stories, create topics to group stories, and saved their most search topics',
        "Optimized for mobile usage, Still Breaking has a clean, modern interface with multiple modals.",
    ],
    collaborators: [{
        name: 'Tyler Walker',
        url: 'github.com/tbone9'
    }]
}

const stylish = {
    name: "stylish",
    stack: ['Javascript','HTML', 'CSS'],
    type: 'Web',
    visibleKeywords:['frontend','graphic design'],
    url: 'https://github.com/AnnaFinnerty/stylish',
    githubUrl: 'https://annafinnerty.github.io/stylish/',
    src: ['./img/Stylish1.png'],
    description: 'Interactive logo prototype for hair salon',
    caseStudy: [],
    live: true
}

const typewriter = {
    name: "typewriter",
    stack: ['SVG','CSS3', 'HTML5'],
    type: 'Interactive Icon',
    keywords:['frontend','graphic design'],
    url: 'https://AnnaFinnerty.github.io/typewriter',
    githubUrl: 'https://github.com/AnnaFinnerty/typewriter',
    src: ['./img/ColorWheel1.png'],
    description: "An interactive SVG typewriter experience -- that's right, no delete key!",
    caseStudy: [],
    live: true,
}

const projects = {
    "cloudchaos":cloudchaos,
    "higgins": higgins,
    "bartleby": bartleby,
    "agency":agency,
    "typewriter":typewriter,
    "stylish":stylish,
    "habit": habit,
    "citadels": citadels,
    "colorwheel": colorwheel,
    "stillbreaking": stillbreaking,
}



