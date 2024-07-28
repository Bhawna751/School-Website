import {
    benefitIcon1,
    benefitIcon2,
    benefitIcon3,
    benefitIcon4,
    benefitImage2,
    chromecast,
    disc02,
    discord,
    discordBlack,
    facebook,
    figma,
    file02,
    framer,
    homeSmile,
    instagram,
    lecture,
    notification2,
    notification3,
    notification4,
    notion,
    photoshop,
    plusSquare,
    protopie,
    raindrop,
    recording01,
    recording03,
    roadmap1,
    roadmap2,
    roadmap3,
    roadmap4,
    schoolbag,
    searchMd,
    slack,
    sliders04,
    smallSphere,
    smartboard,
    stationary,
    telegram,
    twitter,
    yourlogo,
    bus,
    books,
    education,  
    calculator, 
    icon1,
    icon2,
    icon3,
  } from "../assets";
  
  export const navigation = [
    {
      id: "0",
      title: "About Us",
      url: "#aboutus",
    },
    {
      id: "1",
      title: "Gallery",
      url: "#gallery",
    },
    {
      id: "2",
      title: "Academics",
      url: "#academics",
    },
    {
      id: "3",
      title: "Admissions",
      url: "#admissions",
    },
    {
      id: "4",
      title: "Faculty",
      url: "#faculty",
    },
    {
      id: "5",
      title: "Students",
      url: "#students",
    },
    {
      id: "6",
      title: "Contact Us",
      url: "#contactus",
    },
  ];
  
  export const heroIcons = [homeSmile, file02, searchMd, plusSquare];
  
  export const notificationImages = [notification4, notification3, notification2];
  
  export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];
  
  
  
  export const brainwaveServicesIcons = [
    recording03,
    recording01,
    disc02,
    chromecast,
    sliders04,
  ];
  
  export const roadmap = [
    {
      id: "0",
      title: "Extracurricular Activities",
      text1:"Music",
      text2:"Dance",
      text3:"Drama",
      text4:"Art",
      text5:"Sports", 
      imageUrl: roadmap1,
      colorful: true,
    },
    {
      id: "1",
      title: "Clubs and Societies",
      text1:"Literary Society",
      text2:"Environmental Club",
      text3:"Astronomy Club",
      text4:"Coding Club",
      text5:"Robotics Club",
      imageUrl: roadmap2,
    },
    {
      id: "2",
      title: "Achievements",
      text1:"John Smith - National Level Math Olympiad Winner",
      icon1:icon1,
      icon2:icon2,
      icon3:icon3,
      text2:"Sarah Lee - Gold Medalist in Swimming Championship",
      text3:"Winners of Inter-School Robotics Competition",
      imageUrl: roadmap3,
      
    },
    {
      id: "3",
      title: "Student Council",
      text1:"○ President: Amy Parker, Grade 12",
      text2:"○ Vice President: Rajiv Mehta, Grade 11",
      text3:"○ Secretary: Lisa Wong, Grade 10",
      imageUrl: roadmap4,
      colorful:true,
    },
  ];
  
  export const Curriculum = [
    {
      id: "0",
      title: "Primary (Grades 1-5):",
      text: "  English, Mathematics, Science, Social Studies, Art, Physical Education",
    },
    {
      id: "1",
      title: "Secondary (Grades 6-10):",
      text:"English, Mathematics, Science (Physics, Chemistry, Biology), Social Studies, Computer Science, Physical Education, Art",
    },
    {
      id: "2",
      title: "Senior Secondary (Grades 11-12):",
      text:"Science Stream, Commerce Stream",
    },
  ];
  
  export const collabApps = [
    {
      id: "0",
      title: "Bus",
      icon: bus,
      width: 26,
      height: 36,
    },
    {
      id: "1",
      title: "books",
      icon: books,
      width: 34,
      height: 36,
    },
    {
      id: "2",
      title: "education",
      icon: education,
      width: 36,
      height: 28,
    },
    {
      id: "3",
      title: "School-bag",
      icon: schoolbag,
      width: 34,
      height: 35,
    },
    {
      id: "4",
      title: "smartboard",
      icon: smartboard,
      width: 34,
      height: 34,
    },
    {
      id: "5",
      title: "stationary",
      icon: stationary,
      width: 34,
      height: 34,
    },
    {
      id: "6",
      title: "lecture",
      icon: lecture,
      width: 26,
      height: 34,
    },
    {
      id: "7",
      title: "calculator",
      icon: calculator,
      width: 26,
      height: 34,
    },
  ];
  
  export const pricing = [
    {
      id: "0",
      title: "Basic",
      description: "AI chatbot, personalized recommendations",
      price: "0",
      features: [
        "An AI chatbot that can understand your queries",
        "Personalized recommendations based on your preferences",
        "Ability to explore the app and its features without any cost",
      ],
    },
    {
      id: "1",
      title: "Premium",
      description: "Advanced AI chatbot, priority support, analytics dashboard",
      price: "9.99",
      features: [
        "An advanced AI chatbot that can understand complex queries",
        "An analytics dashboard to track your conversations",
        "Priority support to solve issues quickly",
      ],
    },
    {
      id: "2",
      title: "Enterprise",
      description: "Custom AI chatbot, advanced analytics, dedicated account",
      price: null,
      features: [
        "An AI chatbot that can understand your queries",
        "Personalized recommendations based on your preferences",
        "Ability to explore the app and its features without any cost",
      ],
    },
  ];
  
  export const aboutus = [
    {
      id: "0",
      title: "History",
      text: "Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students.",
      backgroundUrl: "assets/benefits/card-1.svg",
      iconUrl: benefitIcon1,
      imageUrl: benefitImage2,
    },
    {
      id: "1",
      title: "Vision",
      text: "To create a learning environment that fosters academic excellence, critical thinking, and ethical values.",
      backgroundUrl: "assets/benefits/card-2.svg",
      iconUrl: benefitIcon2,
      imageUrl: benefitImage2,
      light: true,
    },
    {
      id: "2",
      title: "Mission",
      text: "To empower students with the knowledge, skills, and values needed to thrive in a dynamic world.",
      backgroundUrl: "assets/benefits/card-3.svg",
      iconUrl: benefitIcon3,
      imageUrl: benefitImage2,
    },
    {
      id: "3",
      title: "Principal's Message",
      text: "At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future.",
      backgroundUrl: "assets/benefits/card-4.svg",
      iconUrl: benefitIcon4,
      imageUrl: benefitImage2,
      light: true,
    },
    {
      id: "4",
      title: "Infrastructure and Facilities",
      text: ["State-of-the-art science and computer labs,\n",
      "Spacious and well-equipped classrooms,\n",
      "Library with a vast collection of books and digital resources,\n",
      "Sports facilities including a playground, gymnasium, and swimming pool\n"],
      backgroundUrl: "assets/benefits/card-5.svg",
      iconUrl: benefitIcon1,
      imageUrl: benefitImage2,
    },
  ];
  
  export const socials = [
    {
      id: "0",
      title: "Discord",
      iconUrl: discordBlack,
      url: "#",
    },
    {
      id: "1",
      title: "Twitter",
      iconUrl: twitter,
      url: "#",
    },
    {
      id: "2",
      title: "Instagram",
      iconUrl: instagram,
      url: "#",
    },
    {
      id: "3",
      title: "Telegram",
      iconUrl: telegram,
      url: "#",
    },
    {
      id: "4",
      title: "Facebook",
      iconUrl: facebook,
      url: "#",
    },
  ];