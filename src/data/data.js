class ProjectData {
    type;
    name;
    site;
    description;
    tech;
    video;
    constructor(type,name,site,description,tech,image,source, video = null,) {
        this.type = type
        this.name = name
        this.site = site
        this.description = description
        this.tech = tech
        this.video = video
        this.image = image
        this.source = source
    }
}

export const PROJECT_TYPE  =  {
    FRONT_END:'FRONT END',
    FULL_STACK:'FULL STACK',
    DESKTOP:'DESKTOP'
}

export const PROJECTS_DATA = [
    new ProjectData(
        PROJECT_TYPE.FRONT_END,
        'GearM',
        'https://gearm.netlify.app/',
        'Developed an eCommerce website that sells over 100 gaming gears.',
        ['UI development using React/Redux/Netlify.'],
        './images/gearm.png',
        'https://github.com/dustinvo17/GearStar'
    ),
    new ProjectData(
        PROJECT_TYPE.FULL_STACK,
        'Expert Room',
        'https://expertroom.netlify.app/',
        'Developed a chat application as a communication platform for professionals.',
        ['Implemented JWT authentication system, REST API for friends-based system, real-time messages system, and files storage system using NestJS/WebSocket/MongoDB/AWS S3/Heroku.',
        'Developed UI and managed data on client-side using React/Redux/Netlify.'  
        ],
        './images/chatapp.png'
        ,
        'https://github.com/dustinvo17/expert-room-api',
        'https://www.youtube.com/watch?v=wdGhAfjTIYM'        

    ),
    new ProjectData(
        PROJECT_TYPE.FULL_STACK,
        'Smart Canvas',
        null,
        'Developed a learning management system that aims to improve Computer Science students productivity.',
        ['Implemented Google/Github social authentication system, REST API for events schedule, PDF files upload, and to-do-list in MVC architecture using Laravel/MySQL/AWS S3/VueJS'],
        './images/smartcanvas.png'
        ,
        'https://github.com/dustinvo17/smart-canvas',
        'https://www.youtube.com/watch?v=pH7OJj-yVis'
    ),
    new ProjectData(
        PROJECT_TYPE.FRONT_END,
        'Red Town',
        'https://redtown.netlify.app/',
        'Developed a steakhouse restaurant website.',
        ['UI development using vanilla HTML/CSS/SASS/Javascript'],
        './images/restaurant.png',
        'https://github.com/dustinvo17/redtown'
    ),
    new ProjectData(
        PROJECT_TYPE.DESKTOP,
        'Youtube Converter App',
        null,
        'Developed a cross-platform desktop application that provides functionality to download youtube videos/playlist in MP3/MP4 format.',
        ['Implemented key-press events, push notifications, data-binding using ElectronJS.'],
        './images/youtubeapp.png',
        'https://github.com/dustinvo17/Youtube-Converter',
        'https://www.youtube.com/watch?v=GD6Z2HynBCk'
    ),
    new ProjectData(
        PROJECT_TYPE.FRONT_END,
        'Artist Portfolio Website',
        'https://minhquanart.com/',
        'Developed a portfolio website for a popular Vietnamese artist.',
        ['UI development using HTML/CSS/JQuery/Boostrap'],
        './images/quanart.png',
        'https://github.com/dustinvo17/artist-portfolio'
    ),
    
    
    
]
class Intro {
    title;
    description;
    
}
export const INTROS = [
    {
        title:'Data Structures & Algorithms',
        description:'I value the importance of Computer Science fundamentals, and continuously strengthen my knowledge in Data Structures & Algorithms to apply and improve the efficiency of software applications that I build.',
        img: './images/datastructure.png'
    },
    {
        title:'Full Stack Development',
        description:'If you want someone with a good understanding of the overall full stack development, who can wear many hats and work across all parts of your product tech stack, I’ve got you covered. Whether you need modern and highly interactive UI components for your mobile/web app, or reliable API servers that perform your key business functions, I am highly confident that I would be a great contributor for your team!',
        img: './images/fullstack.png'

    },
    {
        title:'Quick Learner',
        description:'Keep learning and adapting to the fast-evolving tech industry forever sound scary at first, but I take that as a very joyful habit. I always enjoy and open to learning new technologies as long as I have the right tools to solve the right problems and deliver great outcomes for the employers that I work for. ',
        img: './images/learn.png'
    },
    {
        title:'Team Player',
        description:'Lucky to have opportunities to work with Senior Engineers in the industry and receive mentorship from them before, I can’t appreciate enough the power of team-work and having the mindset to help and share knowledge with other team members. I look forward to more opportunities to learn from my new teammates, and at the same time being informative and helpful to them.',
        img: './images/team.png'
    }
]
export const LINKS = {
    RESUME: 'https://drive.google.com/file/d/10pfaC12JtHhc1YeL_0vmRk3QBx6m6FQf/view?usp=sharing',
    LINKEDIN: 'https://www.linkedin.com/in/dustintvo/',
    GITHUB :'https://github.com/dustinvo17' 
}