class ProjectData {
    type;
    name;
    site;
    description;
    tech;
    video;
    constructor(type,name,site,description,tech,video = null) {
        this.type = type
        this.name = name
        this.site = site
        this.description = description
        this.tech = tech
        this.video = video
    }
}

export const PROJECT_TYPE  =  {
    FRONT_END:'FRONT_END',
    FULL_STACK:'FULL_STACK',
    DESKTOP:'DESKTOP'
}

export const projectsData = [
    new ProjectData(
        PROJECT_TYPE.FRONT_END,
        'GearM',
        'https://gearm.netlify.app/',
        'Developed an eCommerce website that sells over 100 gaming gears.',
        ['UI development using React/Redux/Netlify.']
    ),
    new ProjectData(
        PROJECT_TYPE.FULL_STACK,
        'Expert Room',
        'https://expertroom.netlify.app/',
        'Developed a chat application as a communication platform for professionals.',
        ['Implemented JWT authentication system, REST API for friends-based system, real-time messages system, and files storage system using NestJS/WebSocket/MongoDB/AWS S3/Heroku.',
        'Developed UI and managed data on client-side using React/Redux/Netlify.'  
        ],
        'https://www.youtube.com/watch?v=wdGhAfjTIYM'        

    ),
    new ProjectData(
        PROJECT_TYPE.FULL_STACK,
        'Smart Canvas',
        null,
        'Developed a learning management system that aims to improve Computer Science students productivity.',
        ['Implemented Google/Github social authentication system, REST API for events schedule, PDF files upload, and to-do-list in MVC architecture using Laravel/MySQL/AWS S3/VueJS'],
        'https://www.youtube.com/watch?v=pH7OJj-yVis'
    ),
    new ProjectData(
        PROJECT_TYPE.FRONT_END,
        'Red Town',
        'https://redtown.netlify.app/',
        'Developed a restaurant website',
        ['UI development using vanilla HTML/CSS/SASS/Javascript']
    ),
    new ProjectData(
        PROJECT_TYPE.DESKTOP,
        'Youtube Converter App',
        null,
        'Developed a cross-platform desktop application that provides functionality to download youtube videos/playlist in MP3/MP4 format.',
        ['Implemented key-press events, push notifications, data-binding using ElectronJS.'],
        'https://www.youtube.com/watch?v=GD6Z2HynBCk'
    ),
    new ProjectData(
        PROJECT_TYPE.FRONT_END,
        'Artist Portfolio Website',
        'https://minhquanart.com/',
        'Developed a portfolio website for a popular Vietnamese artist',
        ['UI development using HTML/CSS/JQuery/Boostrap'],
    ),
    
    
    
]