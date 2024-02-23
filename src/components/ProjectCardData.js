import Project1 from "../assets/Project1.png"
import Project2 from "../assets/Project2.png"
import Project3 from "../assets/Project3.jpg"
import Project4 from "../assets/PMS.PNG"
import Project5 from "../assets/ASTRA.PNG"
import Project6 from "../assets/BCMS.PNG"
import Project7 from "../assets/HEXA.PNG"
import Project8 from "../assets/Inventotrack.PNG"
import Project9 from "../assets/AFP.PNG"

import {FaBootstrap, FaPhp, FaHtml5, FaNodeJs, FaJs} from "react-icons/fa";

const ProjectCardData = [
    {
        imgsrc: Project1,
        title: "Library Management System",
        text: "This project is being developed by QCU Student to assist members and library staff in maintaining the library in the best possible manner while also minimizing human effort. There will be no loss of book or member records with this computerized system, as is frequently the case with non-computerized systems.",
        logo: [
            <FaHtml5 size={30} style={{ marginRight: "1rem", color: "e34c26" }} />,
            <FaBootstrap size={30} style={{ marginRight: "1rem", color: "#563d7c" }} />,
            <FaPhp size={30} style={{ marginRight: "1rem", color: "#474A8A" }} />,
          ],
        view: "http://librarymanagementsystemsbit3j.epizy.com/login.php",
    },
    {
        imgsrc: Project2,
        title: "Barangay Managemanent System",
        logo: [
            <FaHtml5 size={30} style={{ marginRight: "1rem", color: "#e34c26" }} />,
            <FaBootstrap size={30} style={{ marginRight: "1rem", color: "#563d7c" }} />,
            <FaPhp size={30} style={{ marginRight: "1rem", color: "#474A8A" }} />,
          ],
        text: "Records Management for Barangay Culiat, Quezon City that helps the administrator manage records in the Barangay such as Resident Information,  Barangay Officials and Staff Information, Barangay Census, Graphical Reports, and Archive Management, for more efficient, reducing paper consumption and time-consuming file retrieval from bulky documents.",
        view: "/Temporaryunavailable",
    },
    {
        imgsrc: Project3,
        title: "The Gym Street Client Mobile App",
        logo: [
            <FaNodeJs size={30} style={{ marginRight: "1rem", color: "#68A063" }} />,
        ],
        text: "The Integrated Client Side for Gym Mobile Application is developed by Qcu Student this project aimed at providing health and fitness enthusiasts with a mobile app that can help them track their workouts, exercise routines, and meet their fitness goals. The app will have an easy-to-use interface and a workout library accessible for free.",
        view: "https://drive.google.com/file/d/13hR2X7uNZ7pVuRZ-Y7OWknS6I_DGtPkH/view?usp=sharing",
    },
    {
        imgsrc: Project4,
        title: "Phoenix Management System (PMS)",
        logo: [
            <FaPhp size={30} style={{ marginRight: "1rem", color: "#474A8A" }} />,
            <FaHtml5 size={30} style={{ marginRight: "1rem", color: "e34c26" }} />,
            <FaBootstrap size={30} style={{ marginRight: "1rem", color: "#563d7c" }} />,
            <FaJs size={30} style={{ marginRight: "1rem", color: "#ffeb3b" }} />,
        ],
        text: "The Production Management System developed for Prulife UK serves as a comprehensive tool tailored to the specific needs of an insurance company. It efficiently maintains records, facilitates agent summary generation, and offers a range of features to streamline various operational aspects.",
        view: "https://nlpbds.com/pms/about/developer",
    },
    {
        imgsrc: Project5,
        title: "Astralia Management System (PMS)",
        logo: [
            <FaPhp size={30} style={{ marginRight: "1rem", color: "#474A8A" }} />,
            <FaHtml5 size={30} style={{ marginRight: "1rem", color: "e34c26" }} />,
            <FaBootstrap size={30} style={{ marginRight: "1rem", color: "#563d7c" }} />,
            <FaJs size={30} style={{ marginRight: "1rem", color: "#ffeb3b" }} />,
        ],
        text: "The Production Management System developed for Prulife UK serves as a comprehensive tool tailored to the specific needs of an insurance company. It efficiently maintains records, facilitates agent summary generation, and offers a range of features to streamline various operational aspects.",
        view: "https://nlpbds.com/astralia-pms/about/developer",
    },
    {
        imgsrc: Project6,
        title: "Blue Chalcedony Quartz Management System (PMS)",
        logo: [
            <FaPhp size={30} style={{ marginRight: "1rem", color: "#474A8A" }} />,
            <FaHtml5 size={30} style={{ marginRight: "1rem", color: "e34c26" }} />,
            <FaBootstrap size={30} style={{ marginRight: "1rem", color: "#563d7c" }} />,
            <FaJs size={30} style={{ marginRight: "1rem", color: "#ffeb3b" }} />,
        ],
        text: "The Production Management System developed for Prulife UK serves as a comprehensive tool tailored to the specific needs of an insurance company. It efficiently maintains records, facilitates agent summary generation, and offers a range of features to streamline various operational aspects.",
        view: "https://nlpbds.com/bcms/about/developer",
    },
    {
        imgsrc: Project7,
        title: "TITANIUM 2 Management System (PMS)",
        logo: [
            <FaPhp size={30} style={{ marginRight: "1rem", color: "#474A8A" }} />,
            <FaHtml5 size={30} style={{ marginRight: "1rem", color: "e34c26" }} />,
            <FaBootstrap size={30} style={{ marginRight: "1rem", color: "#563d7c" }} />,
            <FaJs size={30} style={{ marginRight: "1rem", color: "#ffeb3b" }} />,
        ],
        text: "The Production Management System developed for Prulife UK serves as a comprehensive tool tailored to the specific needs of an insurance company. It efficiently maintains records, facilitates agent summary generation, and offers a range of features to streamline various operational aspects.",
        view: "/Temporaryunavailable",
    },
    {
        imgsrc: Project8,
        title: "Inventotrack",
        logo: [
            <FaNodeJs size={30} style={{ marginRight: "1rem", color: "#68A063" }} />,
            <FaPhp size={30} style={{ marginRight: "1rem", color: "#474A8A" }} />,
            <FaJs size={30} style={{ marginRight: "1rem", color: "#ffeb3b" }} />,
        ],
        text: "The Inventory Management System implemented at Elanco Trading provides a sophisticated solution for efficiently managing and tracking stock inventory.  It enables Elanco Trading to maintain accurate records of stock levels, monitor inventory movements in real-time, and optimize stock replenishment processes.",
        view: "http://inventotrack.elancotrading.com/about/developer",
    },
    {
        imgsrc: Project9,
        title: "AFP Learning Management System",
        logo: [
            <FaPhp size={30} style={{ marginRight: "1rem", color: "#474A8A" }} />,
            <FaHtml5 size={30} style={{ marginRight: "1rem", color: "e34c26" }} />,
            <FaBootstrap size={30} style={{ marginRight: "1rem", color: "#563d7c" }} />,
            <FaJs size={30} style={{ marginRight: "1rem", color: "#ffeb3b" }} />,
        ],
        text: "The AFP LMS is a bespoke Learning Management System meticulously crafted to cater to the educational needs of the Philippine Air Force personnel. Designed to facilitate learning and professional development, this robust platform offers a wide array of features tailored to the unique requirements of military training and education. ",
        view: "/Temporaryunavailable",
    }
]

export default ProjectCardData;
