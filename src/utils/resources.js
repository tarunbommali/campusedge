// resources.js

export const FilterOptions = [
  { navId: 'all', label: 'All Resources' },
  { navId: 'Premium', label: 'Premium Resources' },
  { navId: 'Free', label: 'Free Resources' },
  {navId:"Certification", label:"Certification"}
];



export const resourcesList = [
  {
    course_name: "Namaste JavaScript",
    link: "https://namastedev.com/login?redirect_url_path=learn/namaste-javascript",
    language: "English",
    Medium: "Youtube",
    img_src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7yi-jEiqu-qV1P13ngxvo2G1v4vHVYCWHSUu12Qp91D3bTw71LWrf2iQLuuL7Wzwd99M&usqp=CAU",
    course_type: "Free",
    course_core: "javascript",
    outcomes : [
      "Execution Context",
      "Call Stack",
      "Hoisting",
      "Functions & Variable Environment",
      "Window & this Keyword",
      "Undefined vs Not Defined",
      "Scope Chain & Lexical Environment",
      "Temporal Dead Zone",
      "Block Scope & Shadowing",
      "Closures",
      "setTimeout & Closures",
      "Closures Interview",
      "First-Class Functions",
      "Callback Functions",
      "Event Loop",
      "V8 Architecture",
      "setTimeout Fundamentals",
      "Higher-Order Functions",
      "map, filter, reduce",
      "Callback Hell",
      "Promises",
      "Promise Chaining & Error Handling",
      "Async Await",
    ]
  },
  {
    course_name: "Namaste React",
    link: "Namastedev.com/learn/namaste-react?_aff=946684854691",
    img_src: "https://raw.githubusercontent.com/wiki/facebook/react/react-logo-1000-transparent.png",
    language: "English",
    Medium: "Namastedev",
    course_core:"react",
    course_type: "Premium", 
    outcomes : [
      // Core Concepts
      "Important Guidelines",
      "Inception",
      "Igniting our App",
      "Laying the Foundation",
      "Show Me the Code",
      "React Hooks",
      "useEffect & APIs",
      "Swiggy API Issue",
      "CORS Plugin Issue",
      "React Router",
      "Class-based Components",
      "App Optimization",
      "Tailwind CSS",
      "DevTools & Data Flow",
      "Redux Toolkit",
      "Testing with Jest",
    
      // Advanced React Concepts
      "useMemo",
      "useCallback",
      "useRef",
    
      // Career Upskilling
      "Personal Branding",
      "LinkedIn Masterclass",
      "Resume, Interview & Salary Negotiation",]
  },
  {
    course_name: "Namaste Frontend System Design",
    link: "namastedev.com/learn/namaste-frontend-system-design?_aff=946684854691",
    img_src: "https://www.valuecoders.com/blog/wp-content/uploads/2021/07/Front-End-Development-Companies.jpg.webp",
    language: "English",
    Medium: "Namastedev",
    course_type: "Premium"
  },
  {
    course_name: "JavaScript for Beginners",
    link: "https://example.com/js-beginners",
    img_src: "https://example.com/img/js-course.jpg",
    language: "English",
    Medium: "Online",
    course_type: "Free"
  },
  {
    course_name: "React Native Mastery",
    link: "https://example.com/react-native",
    img_src: "https://example.com/img/react-native.jpg",
    language: "English",
    Medium: "Online",
    course_type: "Premium"
  }
];
