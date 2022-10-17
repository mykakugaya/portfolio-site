import joTheFish from '../images/joTheFish.PNG';
import minute from '../images/minute.PNG';
import tempoKeeper from '../images/tempoKeeper.png';
import spaceHub from '../images/spaceHub.png';
import thievesMonopoly from '../images/thievesMonopoly.PNG';

const projects = [
    {
        "key": 0,
        "name": "Minute",
        "description": "Build public speaking confidence in one minute. A public speaking coaching web app that allows users to record and analyze their speeches and presentations.",
        "tech": "React.js, Ant Design, Firebase, Heroku, AssemblyAI API",
        "image": minute,
        "github": "https://github.com/andyyvo/minute-react",
        "deployed": "https://minute-app-spark.herokuapp.com/"
    },
    {
        "key": 1,
        "name": "Tempo Keeper",
        "description": "Pace yourself throughout runs and track your progress over time. A mobile running application that allows users to customize their run routes and dynamically queue and play Spotify tracks that match their live running pace.",
        "tech": "Android Studio, Java, Firebase, Google Directions API, Google Elevation API, Spotify API",
        "image": tempoKeeper,
        "github": "https://github.com/mykakugaya/tempo-keeper",
        "deployed": "none"
    },
    {
        "key": 2,
        "name": "Jo The Fish",
        "description": "A Google Chrome extension and community platform site that informes users about the ethical standpoints of the company websites they visit so that they can make decisions as educated consumers.",
        "tech": "React.js",
        "image": joTheFish,
        "github": "https://github.com/Jo-The-Fish/site",
        "deployed": "http://www.jothefish.com/"
    },
    {
        "key": 3,
        "name": "The Space Hub",
        "description": "A space enthusiast’s personal dashboard for all astrology-related information and news. Main features include a space widgets dashboard, interactive Reddit-like forum for logged in users, and a customizable image gallery.",
        "tech": "React.js, SQL, Heroku, NASA API, SpaceX API",
        "image": spaceHub,
        "github": "https://github.com/mykakugaya/project-space",
        "deployed": "https://the-space-hub.herokuapp.com/"
    },
    {
        "key": 4,
        "name": "Thieves Monopoly",
        "description": "Virtual turn-based board game for two users at a time that adopts game mechanics from classic games like Monopoly and Tag.",
        "tech": "Javascript, HTML/CSS, SQL, Heroku",
        "image": thievesMonopoly,
        "github": "https://github.com/abazrafshan/Project2Game",
        "deployed": "https://morning-earth-32122.herokuapp.com/"
    },
    // {
    //     "key": 5,
    //     "name": "test",
    //     "description": "test",
    //     "tech": "test",
    //     "image": "test",
    //     "github": "test",
    //     "deployed": "test"
    // },
]

export default projects;