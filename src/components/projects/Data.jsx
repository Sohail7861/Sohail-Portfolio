import Project1 from "../../assets/project1.webp";
import Project2 from "../../assets/atm.jpg";
import Project3 from '../../assets/lmss.jpg'
import Video1 from '../../assets/videos/istore.mp4'
import Video2 from '../../assets/videos/news.mp4'
import Video3 from '../../assets/videos/Starwars.mp4'
import Video4 from '../../assets/videos/chromeExtension.mp4'

export const projectsData = [
    {
        id: 1,

        title: "iSTORE - Ecommerce App",
        category: "Frontend",
        video:Video1,
        link:'https://github.com/Sohail7861/AppleStore.git',
    },
    {
        id: 2,
        
        title: "News Tinding - News Website",
        category: "Full Stack",
        video:Video2,
        link:'https://github.com/Sohail7861/News-Tidings.git',
    },
    {
        id: 4,
        
        title: "StarWars - Character Portfolio",
        category: "Frontend",
        video:Video3,
        link:'https://github.com/Sohail7861/starwars.git',
    },

    {
        id: 4,
        title: "AD Blocker - Chrome Extension",
        category: "Others",
        video:Video4,
        link:'https://github.com/Sohail7861/OptimusAbBlockerExt.git',
    },
    {
        image:Project2,
        id: 5,
        title: "Automated Teller Machine - Python",
        category: "Others",
        link:'https://github.com/sohail2712/sohail2712.git',
    },
    {
        image:Project3,
        id: 6,
        title: "Library Management System - Python",
        category: "Others",
        link:'https://github.com/sohail2712/sohail271.git',
    },

];

export const projectsNav = [
    {
        name: "All",
    },
    {
        name: "Frontend",
    },
    {
        name: "Full Stack",
    },
    {
        name: "Others",
    },
];