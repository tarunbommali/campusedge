export const NAV_ITEMS = [
  { path: "/", link: "Home" },
  { path: "/companies", link: "Companies" },
  { path: "/roadmaps", link: "Roadmaps" },
  { path: "/learnings", link: "Learnings" },
  { path: "/interviewPrep", link: "InterviewPrep" },
  { path: "/about-us", link: "About Us" },
];

export const CompaniesTabs = [
  {
    id: 1,
    label: "MNCs",
    description: "Multinational",
    path: "/companies/mncs",
    content: `
**Definition:** Companies that operate in multiple countries and have a large global presence.

**Examples:** Google, Microsoft, AWS, IBM, Oracle.

**Characteristics:**
- High-paying jobs with global exposure.
- Structured processes and clear roles.
- Opportunities to work on large-scale projects.
    `,
  },
  {
    id: 2,
    label: "Startups",
    description: "Innovative early-stage",
    path: "/companies/startups",
    content: `
**Definition:** Early-stage companies focusing on innovation and rapid growth.

**Examples:** Zomato, Swiggy, CRED, Byju’s, Meesho.

**Characteristics:**
- Fast-paced and dynamic environment.
- Opportunities to work on innovative projects from scratch.
- Potential for high growth but with risks.
    `,
  },
  {
    id: 3,
    label: "Product-Based",
    description: "Companies developing and selling their software products",
    path: "/companies/product-based",
    content: `
**Definition:** Companies that develop and sell their own software products.

**Examples:** Adobe, Salesforce, Zoom, Canva.

**Characteristics:**
- Focus on building quality products.
- Engineers often work on a single product for a long time.
- Strong emphasis on customer feedback and improvements.
    `,
  },
  {
    id: 4,
    label: "Service-Based",
    description: "Companies providing IT services to clients",
    path: "/companies/service-based",
    content: `
**Definition:** Companies that provide IT services to clients (e.g., software development, testing, consulting).

**Examples:** TCS, Infosys, Wipro, HCL Technologies, Cognizant.

**Characteristics:**
- Clients may be from various industries.
- Projects are typically time-bound and client-specific.
- Job roles may involve frequent client interaction.
    `,
  },
  {
    id: 5,
    label: "FinTech",
    description: "Companies focusing on financial technology innovation",
    path: "/companies/fintech",
    content: `
**Definition:** Companies that leverage technology to provide financial services.

**Examples:** Paytm, Razorpay, PhonePe, Stripe, Zerodha.

**Characteristics:**
- Blend of technology and financial knowledge.
- Focus on secure and scalable solutions.
- Opportunities to work in cutting-edge technologies like blockchain.
    `,
  },
  {
    id: 6,
    label: "EdTech",
    description: "Companies revolutionizing education using technology",
    path: "/companies/edtech",
    content: `
**Definition:** Companies that use technology to revolutionize education and learning.

**Examples:** Coursera, Udemy, Byju's, Unacademy, Khan Academy.

**Characteristics:**
- Focus on user-friendly platforms.
- Often involve gamification and analytics.
- Contribution to education and societal impact.
    `,
  },
  {
    id: 7,
    label: "E-Commerce",
    description:
      "Online retail platforms for buying and selling goods/services",
    path: "/companies/e-commerce",
    content: `
**Definition:** Companies that operate platforms for buying and selling goods/services online.

**Examples:** Amazon, Flipkart, Myntra, Snapdeal, BigBasket.

<b>Characteristics:</b>
- Focus on customer experience and scalability.
- Opportunities to work in areas like UI/UX, supply chain, and data analysis.
    `,
  },
  {
    id: 8,
    label: "Gaming",
    description: "Companies specializing in video game development",
    path: "/companies/gaming",
    content: `
**Definition:** Companies that develop video games, VR/AR applications, and gamification solutions.

**Examples:** Ubisoft, EA Sports, Rockstar Games, Zynga, Niantic.

**Characteristics:**
- Opportunities in game development, design, and AI.
- Cutting-edge work in VR/AR technologies.
    `,
  },
  {
    id: 9,
    label: "Cloud-Based",
    description: "Companies offering cloud infrastructure and solutions",
    path: "/companies/cloud-based",
    content: `
**Definition:** Companies offering cloud infrastructure, platforms, and software solutions.

**Examples:** AWS, Google Cloud, Microsoft Azure, DigitalOcean, Snowflake.

**Characteristics:**
- Focus on scalability, security, and performance.
- Jobs often require cloud certifications and expertise.
    `,
  },
  {
    id: 10,
    label: "Cybersecurity",
    description: "Companies focused on securing digital assets",
    path: "/companies/cybersecurity",
    content: `
**Definition:** Companies specializing in securing digital assets and infrastructure.

**Examples:** Palo Alto Networks, Fortinet, NortonLifeLock, McAfee, Check Point.

**Characteristics:**
- Work involves threat analysis and prevention.
- High demand for ethical hackers and security engineers.
    `,
  },
  {
    id: 11,
    label: "AI and ML",
    description:
      "Companies leveraging artificial intelligence and machine learning",
    path: "/companies/ai-ml",
    content: `
**Definition:** Companies that leverage artificial intelligence and machine learning technologies.

**Examples:** OpenAI, DeepMind, NVIDIA, Hugging Face, SenseTime.

**Characteristics:**
- Focus on automation, predictive analytics, and innovation.
- Opportunities to work on futuristic technologies.
    `,
  },
  {
    id: 12,
    label: "HealthTech",
    description: "Companies improving healthcare solutions using technology",
    path: "/companies/healthtech",
    content: `
**Definition:** Companies using technology to improve healthcare solutions.

**Examples:** Practo, Pharmeasy, 1mg, HealthifyMe, Medlife.

**Characteristics:**
- Projects often include wearable technology, AI in diagnostics, and telemedicine.
- Focus on societal impact and regulatory compliance.
    `,
  },
  {
    id: 13,
    label: "Logistics and Supply Chain",
    description: "Companies optimizing supply chains using technology",
    path: "/companies/logistics",
    content: `
**Definition:** Companies optimizing logistics and supply chain through technology.

**Examples:** Delhivery, FedEx Logistics, BlueDart, DHL Supply Chain, Rivigo.

**Characteristics:**
- Focus on efficiency and real-time tracking.
- High involvement in IoT and AI for optimization.
    `,
  },
];

export const ABOUT_JNTUGV = [
  "JNTU College of Engineering, Vizianagaram established in 2007 as a constituent college of JNTU Hyderabad.",
  "JNTU Hyderabad was trifurcated into three universities by Andhra Pradesh Act No. 30 of 2008.",
  "Since 24th August 2008, it became the constituent college of JNTU Kakinada.",
  "JNTU Kakinada was bifurcated in 2021, leading to the creation of Jawaharlal Nehru Technological University Gurajada, Vizianagaram (JNTU-GV) as a separate university.",
  "JNTU-GV came into existence through G.O.Ms.No.3, dated: 12-01-2022.",
  "The university is spread across six districts: Vizianagaram, Visakhapatnam, Srikakulam, Parvathipuram Manyam, Alluri Sitharama Raju, and Anakapalli.",
  "There are 2 constituent colleges and 37 affiliated colleges under its jurisdiction.",
  "JNTU-GV offers education in various Engineering, Pharmacy, and Management departments.",
];

export const VISION_JNTUGV = [
  "To emerge as a premier technical institution in the field of engineering and research.",
  "Focus on producing professionally competent and socially sensitive engineers.",
  "Engineers capable of working in a multidisciplinary global environment.",
];

export const MISSION_JNTUGV = [
  "To provide high quality technical education through a creative balance of academia and industry by adopting highly effective teaching learning processes.",
  "To promote multidisciplinary research with a global perspective to attain professional excellence.",
  "To establish standards that inculcate ethical and moral values contributing to career growth and the development of society.",
];

export const ABOUT_US_NAV_ITEMS = [
  { navItem: "University", navId: 0 },
  { navItem: "Department", navId: 1 },
  { navItem: "Helpdesk", navId: 2 },
  { navItem: "FAQ'S", navId: 3 },
  { navItem: "About Website", navId: 4 },
];

export const DEPARTMENT_DETAILS = ["DEPARTMENT DETAILS"];

export const WEBSITE_DETAILS = ["HELPDESK DETAILS"];
