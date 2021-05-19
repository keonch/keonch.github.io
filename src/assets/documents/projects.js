import wheresmytraingif from '../images/wheresmytrain.gif';
import nobasecasegif from '../images/nobasecase.gif';
import calendargif from '../images/calendar.gif';
import mathgif from '../images/math.gif';
import wheresmytrainimg from '../images/wheresmytrain.jpg';
import nobasecaseimg from '../images/nobasecase.jpg';
import calendarimg from '../images/calendar.jpg';
import mathimg from '../images/math.png';

const PROJECT_DETAILS = {
    wheresmytrain: {
        id: "wheresmytrain",
        description: "Where's My Train is a Javascript application that utilizes Google Maps API and MTA datamine to render subway trains at realtime. It incorporates CORS proxy server to fetch serialized data from the MTA. The data is then decoded into JavaScript objects using Google's GTFS protocol buffer and centralized into a single source. That single source coordinates every aspect of the map display including stations, paths and velocities of trains, giving users a visualization of the NYC subway system.",
        title: "Where's My Train",
        technologies: ["JavaScript", "Google Maps", "Protobuf.js", "GTFS data", "Express"],
        img: wheresmytrainimg,
        gif: wheresmytraingif,
        link: "http://wheresmytrain.keonch.me/"
    },

    nobasecase: {
        id: "nobasecase",
        description: "No Basecase is a full stack web application that replicates Stack Overflow - a Q&A website that covers topics in computer programming. It is built with React-Redux frontend and Ruby on Rails with PostgreSQL database backend. It features CRUD functionality on questions and answers and allows users to input code blocks using React-Quill editor. The app also implements users' voting feature by utilizing ActiveRecord's polymorphic association for DRYer and more modular code.",
        title: "No Basecase",
        technologies: ["React", "Redux", "Heroku", "PostgreSQL", "Ruby on Rails", "Webpack"],
        img: nobasecaseimg,
        gif: nobasecasegif,
        link: "http://nobasecase.keonch.me/#/"
    },

    calendar: {
        id: "calendar",
        description: "A simple Calendar application for users to input events onto day boxes. Multiple events can be scheduled throughout the day and are ordered based on the time of the event.",
        title: "Calendar",
        technologies: ["React", "Redux", "Heroku", "PostgreSQL", "Ruby on Rails", "Webpack"],
        img: calendarimg,
        gif: calendargif,
        link: "http://calendar.keonch.me/"
    },

    math: {
        id: "math",
        description: "A lightweight math application built using React. Execute math operations from factoring to integration using an external API for computation",
        title: "Math App",
        technologies: ["React", "Heroku"],
        img: mathimg,
        gif: mathgif,
        link: "http://math.keonch.me/"
    }
}

export default PROJECT_DETAILS;