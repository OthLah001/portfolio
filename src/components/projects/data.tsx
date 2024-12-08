import VPlusImg from '../../assets/images/V+.png';
import IGotAnOfferImg from '../../assets/images/IGotAnOffer.png';
import MadrassetiImg from '../../assets/images/madrasseti.png';
import WeatherAppImg from '../../assets/images/weather_app.png'
import ElhamImg from '../../assets/images/elham.jpeg';

export const PROJECTS_DATA = [
  {
    image: ElhamImg,
    name: 'Elham Academy',
    description: 'Elham is an innovative platform designed for creating and managing interactive training experiences. It provides an intuitive interface for designing, publishing, and monitoring training content, while offering detailed reports to track trainee progress effectively. The platform empowers educators and organizations to deliver high-quality, data-driven training solutions.',
    techs: ["Angular", "Django", "PostgreSQL", "AWS", "Netlify", "Bitbucket", "Git", "GitHub"],
    links: {
      github: "https://github.com/OthmaneElham?tab=overview&from=2023-12-01&to=2023-12-31",
      external: "https://elham.sa/",
    }
  },
  {
    image: VPlusImg,
    name: 'V+',
    description: 'V+ is an advanced city-citizen interaction platform, contributing to smart city initiatives. Citizens can access it via a mobile or web application, gaining secure access to a wide range of information. For municipalities, it serves as a tool to enhance communication with citizens, fostering a sense of belonging and improving their quality of life.',
    techs: ["Angular", "Ionic", "NodeJS", "ExpressJS", "SQL Server", "AWS", "Twilio", "SyncFusion", "Git", "GitHub"],
    links: {
      external: "https://www.lac-saint-paul.ca/accueil",
    }
  },
  {
    image: IGotAnOfferImg,
    name: 'IGotAnOffer',
    description: 'IGotAnOffer is a coaching platform designed to help professionals secure positions at top-tier companies such as Facebook, Google, McKinsey, and BCG. Its coaches, all former interviewers, provide insightful guidance and preparation strategies based on firsthand experience. Since its inception, IGotAnOffer has helped over 17,000 candidates land roles in consulting, product management, technical program management, software engineering, and more.',
    techs: ["VueJs", "Django", "Shopify", "PostgreSQL", "AWS", "Timekit", "Heroku", "Git", "GitHub"],
    links: {
      github: "https://github.com/OthmanIGAO?tab=overview&from=2021-12-01&to=2021-12-31",
      external: "https://igotanoffer.com/",
    }
  },
  {
    image: MadrassetiImg,
    name: 'Madrasseti',
    description: 'Madrasseti is a comprehensive school management platform designed to streamline operations for principals and staff. The platform features two key components:\n1. Private Portal: Accessible only to school staff, offering modules to manage all aspects of school administration efficiently.\n2. Public Portal: Open to the public for viewing general information and advertisements about the school.\nThis dual approach ensures robust management capabilities while maintaining transparency for external users.',
    techs: ["Angular", "Django", "PostgreSQL", "AWS", "Heroku", "Git", "GitHub"],
    links: {
      github: "https://github.com/OthmaneOA?tab=overview&from=2022-12-01&to=2022-12-31",
      external: "https://madrasseti-frontend.herokuapp.com/admin/login",
    }
  },
  {
    image: WeatherAppImg,
    name: 'Weather App',
    description: 'Weather App is an android mobile application providing real-time weather updates for your current location. It displays weather information for the next 24 hours and 7 days, along with sunrise and sunset times. The app features a settings menu, allowing users to customize preferences such as temperature units, wind speed units, time format, and language, ensuring a personalized user experience.',
    techs: ["Angular", "Ionic", "Scss", "OpenWeatherMap", "LocationIQ", "Git", "GitHub"],
    links: {
      github: "https://github.com/OthLah001/WeatherApp",
      external: "https://github.com/OthLah001/WeatherApp/blob/master/WeatherApp.apk",
    }
  }
]