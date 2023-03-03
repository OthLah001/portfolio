import VPlusImg from '../../assets/images/V+.png';
import IGotAnOfferImg from '../../assets/images/IGotAnOffer.png';
import MadrassetiImg from '../../assets/images/madrasseti.png';
import WeatherAppImg from '../../assets/images/weather_app.png'
import ElhamImg from '../../assets/images/elham.jpeg';

export const PROJECTS_DATA = [
  {
    image: ElhamImg,
    name: 'Elham Academy',
    description: 'Elham is an integrated and effective platform for designing interactive training experiences.\nIt offers an easy way to create, publish and follow your interractive training content as well as the progress of your trainees through a system of accurate and detailed reports.',
    techs: ["Angular", "Django", "Shopify", "PostgreSQL", "AWS", "Netlify", "Jira"],
    links: {
      external: "https://elham.sa/",
    }
  },
  {
    image: VPlusImg,
    name: 'V+',
    description: 'V+ is a city-citizen interaction platform that is part of smart city projects. For a citizen, he can download V+ as a mobile application or use it as a web application. The secure platform gives citizens access to a multitude of information. For the municipality, it allows communication more easily with citizens in order to improve their sense of belonging as well as their quality of life.',
    techs: ["Angular", "Ionic", "Node.js", "Expres.js", "Microsoft SQL Server", "AWS", "Twilio", "SurveyJS"],
    links: {
      external: "https://www.lac-saint-paul.ca/accueil",
    }
  },
  {
    image: IGotAnOfferImg,
    name: 'IGotAnOffer',
    description: 'IGotAnOffer is a coaching interview platform that helps professionals get a job at top companies like Facebook, Google, McKinsey, BCG, etc. The coaches are all ex-interviewers with first hand experience of what it takes to get an offer.\nSince getting started, IGotAnOffer helped more than 12,000 candidates get a job in consulting, product management, technical program management, software engineering, etc.',
    techs: ["Vue.js", "Django", "Shopify", "PostgreSQL", "AWS", "Timekit"],
    links: {
      github: "https://github.com/OthmanIGAO",
      external: "https://igotanoffer.com/",
    }
  },
  {
    image: MadrassetiImg,
    name: 'Madrasseti',
    description: 'Madrasseti is a school management app where school principals and staffs can manage their school using the platform.\nThe platform is divided into 2 parts:\n\r1. The private part which is private to only principals and staffs and which give them the ability to manage everything using several modules.\n\r2. The public part which can be accessed by anyone to see general information and advertising.',
    techs: ["Angular", "Django", "PostgreSQL", "AWS", "Heroku"],
    links: {
      github: "https://github.com/OthmaneOA",
      external: "https://horizon-al-gharb.madrasseti.com/accueil",
    }
  },
  {
    image: WeatherAppImg,
    name: 'Weather App',
    description: 'Weather App is a mobile weather application, it offers the weather information of your current position for the next 24 hours and for the next 7 days, also it offers the information of the sunrise and sunset. The application contains a setting menu where you can change the temperature unit, change the wind speed unit , change the unit of time thus change the language of the application.',
    techs: ["Angular", "Ionic", "Scss", "OpenWeatherMap", "LocationIQ"],
    links: {
      github: "https://github.com/OthLah001/WeatherApp",
      external: "https://github.com/OthLah001/WeatherApp/blob/master/WeatherApp.apk",
    }
  }
]