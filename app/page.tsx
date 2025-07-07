"use client";

import { useState, useEffect, useRef } from "react";
import {
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  Code,
  Database,
  Cpu,
  Zap,
  Palette,
  Phone,
  Facebook,
  Instagram,
  User,
  GlobeLock,
  LucideServerCog,
  Hourglass,
  LucideWaypoints,
  Award,
  Code2,
  Globe,
  Server,
  Terminal,
  Layers,
  GitBranch,
  Cloud,
  Settings,
  FileCode,
  Shield,
  Rocket,
  Brain,
  Wrench,
  Box,
  Coffee,
  ExternalLink,
  ChevronRight,
  ChevronLeft,
  Navigation,
  Star,
  BarChart3,
} from "lucide-react";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiCplusplus,
  SiC,
  SiPhp,
  SiHtml5,
  SiCss3,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiReact,
  SiNextdotjs,
  SiAngular,
  SiNodedotjs,
  SiExpress,
  SiFirebase,
  SiDocker,
  SiGit,
  SiTailwindcss,
  SiBootstrap,
  SiDjango,
  SiFlutter,
  SiLaravel,
  SiDotnet,
  SiFlask,
  SiGo,
  SiPostman,
  SiGithub,
  SiFigma,
  SiNotion,
  SiWordpress,
  SiJira,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
const handleSkillClick = (url: string) => {
  if (url !== "#") {
    window.open(url, "_blank");
  }
};

// Simple JZ component
const JZ = () => <span>&lt;JZ/&gt;</span>;
const navigationItems = [
  { name: "About", href: "#home", icon: User, highlight: true },

  {
    name: "Services",
    href: "#skills",
    icon: LucideServerCog,
    highlight: false,
  },
  {
    name: "Experience",
    href: "#experience",
    icon: Hourglass,
    highlight: false,
  },
  {
    name: "Education",
    href: "#education",
    icon: Award,
    highlight: false,
  },
  {
    name: "Skills",
    href: "#languages",
    icon: LucideWaypoints,
    highlight: false,
  },
  {
    name: "Projects",
    href: "#visualization",
    icon: GlobeLock,
    highlight: false,
  },
  { name: "Contact", href: "#contact", icon: Mail, highlight: false },
];
export default function Portfolio() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeItem, setActiveItem] = useState("About");
  const [currentTheme, setCurrentTheme] = useState(0);
  const theme = {
    primary: "from-blue-400 to-purple-600",
    highlight: "blue-400",
  };
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const programmingLanguages = [
    {
      name: "Tailwind",
      icon: SiTailwindcss,
      url: "https://tailwindcss.com/docs",
    },
    {
      name: "Node.js",
      icon: SiNodedotjs,
      url: "https://nodejs.org/en/docs/",
    },
    {
      name: "Express",
      icon: SiExpress,
      url: "https://expressjs.com/en/4x/api.html",
    },
    {
      name: ".NET",
      icon: SiDotnet,
      url: "https://docs.microsoft.com/en-us/dotnet/",
    },
    {
      name: "MongoDB",
      icon: SiMongodb,
      url: "https://docs.mongodb.com/",
    },
    {
      name: "MySQL",
      icon: SiMysql,
      url: "https://dev.mysql.com/doc/",
    },
    {
      name: "Firebase",
      icon: SiFirebase,
      url: "https://firebase.google.com/docs",
    },
    {
      name: "JavaScript",
      icon: SiJavascript,
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      name: "Java",
      icon: FaJava,
      url: "https://docs.oracle.com/en/java/",
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
      url: "https://www.typescriptlang.org/docs/",
    },
    {
      name: "CSS3",
      icon: SiCss3,
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      name: "PHP",
      icon: SiPhp,
      url: "https://www.php.net/docs.php",
    },
    {
      name: "Python",
      icon: SiPython,
      url: "https://docs.python.org/3/",
    },
    {
      name: "Docker",
      icon: SiDocker,
      url: "https://docs.docker.com/",
    },
    {
      name: "Git",
      icon: SiGit,
      url: "https://git-scm.com/doc",
    },
    {
      name: "GitHub",
      icon: SiGithub,
      url: "https://docs.github.com/",
    },
    {
      name: "Figma",
      icon: SiFigma,
      url: "https://help.figma.com/",
    },
    {
      name: "WordPress",
      icon: SiWordpress,
      url: "https://wordpress.org/support/",
    },
    {
      name: "React",
      icon: SiReact,
      url: "https://react.dev/learn",
    },
    {
      name: "Next.js",
      icon: SiNextdotjs,
      url: "https://nextjs.org/docs",
    },
    {
      name: "Angular",
      icon: SiAngular,
      url: "https://angular.io/docs",
    },
    {
      name: "Django",
      icon: SiDjango,
      url: "https://docs.djangoproject.com/",
    },
    {
      name: "Bootstrap",
      icon: SiBootstrap,
      url: "https://getbootstrap.com/docs/",
    },
    {
      name: "HTML5",
      icon: SiHtml5,
      url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      name: "C++",
      icon: SiCplusplus,
      url: "https://en.cppreference.com/w/",
    },
    {
      name: "C",
      icon: SiC,
      url: "https://en.cppreference.com/w/c",
    },
    {
      name: "PostgreSQL",
      icon: SiPostgresql,
      url: "https://www.postgresql.org/docs/",
    },
  ];
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  // Duplicate the skills array for seamless infinite scroll
  const duplicatedSkills = [...programmingLanguages, ...programmingLanguages];

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleItems((prev) => {
        if (prev.length < programmingLanguages.length) {
          return [...prev, prev.length];
        }
        return prev;
      });
    }, 80);

    return () => clearInterval(timer);
  }, []);

  const handleSkillClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollTop = window.scrollY;

      // Calculate when section starts and ends being visible
      const sectionStart = sectionTop - windowHeight;
      const sectionEnd = sectionTop + sectionHeight;

      // Calculate progress (0 to 1)
      const totalScrollDistance = sectionEnd - sectionStart;
      const currentProgress = (scrollTop - sectionStart) / totalScrollDistance;

      // Clamp between 0 and 1
      const clampedProgress = Math.max(0, Math.min(1, currentProgress));
      setScrollProgress(clampedProgress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial calculation

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const skills = [
    {
      icon: Code,
      name: "Frontend Development",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Database,
      name: "Backend Systems",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Cpu,
      name: "Machine Learning",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Zap,
      name: "Performance Optimization",
      color: "from-orange-500 to-red-500",
    },
  ];

  const projects = [
    {
      title: "Bibline",
      description: "Bible Reader Online App 📖",
      image: "/bibline.png",
      category: "Mobile App",
      technologies: ["React Native", "TypeScript", "Expo", "Json"],
      features: [
        "Explore by filtering books, chapters, keywords, individual verses, or custom verse ranges.",
        "The app supports multiple languages, (ar), (en), and (fr).",
        "Includes light and dark mode options.",
      ],
      link: "https://bibline.vercel.app/",
    },
    {
      title: "Job Application",
      description: "Job Application System 📋✍️",
      image: "/job.png",
      category: "Web-Based Application Systems",
      technologies: ["Node.js", "JavaScript", "MongoDB", "Mongoose"],
      features: [
        "Search and apply to jobs with one-click submissions.",
        "Create and manage job postings with rich descriptions.",
        "Upload resumes/CVs and auto-fill application forms.",
      ],
      link: "https://job-application-frontend-bay.vercel.app/",
    },
    {
      title: "BookLending",
      description: "Book Lending App 📚 + 🤝 + 🔄 = 📖⇄📖",
      image: "/book.png",
      category: "Web-based Systems",
      technologies: ["Java", "SpringBoot", "React Vite", "Docker"],
      features: [
        "Personal details, lending history, and ratings.",
        "Search, request, and borrow books from others.",
        "Track owned/borrowed books (due dates, condition).",
      ],
      link: "https://booklending-frontend.vercel.app/",
    },
  ];

  const experiences = [
    {
      title: "Accounting Associate",
      company: "Municipality of Jounieh",
      location: "Jounieh, Lebanon (On-site)",
      period: "November 2024 - Present",
      description:
        "Conducted daily verification of rental contracts and ensured accurate exchange rate compliance according to Central Bank of Lebanon, resolving discrepancies efficiently.",
      details: [
        "Conducted daily verification of rental contracts and ensured accurate exchange rate compliance according to Central Bank of Lebanon, resolving discrepancies efficiently.",
        "Worked with the Windows Subsystem for Linux (WSL) to enhance coding and system administration skills.",
        "Maintained accurate financial records and documentation for municipal operations.",
        "Collaborated with team members to streamline accounting processes and improve efficiency.",
      ],
      technologies: [
        "WSL",
        "Financial Analysis",
        "Contract Management",
        "Compliance",
      ],
    },
    {
      title: "Instructor Robotics",
      company: "Ombael",
      location: "Jbeil, Lebanon (On-site)",
      period: "2023 - Present",
      description:
        "Robotics instructor using LEGO WeDo 2.0 to help kids aged 5 years and above gain new skills and experience robotics in a fun way.",
      details: [
        "Built a system for warehouse management, including manager assignment, driver information, and route-bin allocation.",
        "Added features for dispatchers to create-manage jobs, track bin statuses, and progress with driver updates on job status.",
        "Developed tools for weighing collected waste, sorting by material type and managing material slots.",
        "Created a dynamic dashboard with charts to visualize warehouse usage, material weights, and job progress.",
        "Defined roles (admin, manager, dispatcher, driver) with specific permissions.",
      ],
      technologies: ["LEGO WeDo 2.0", "Programming", "Education", "Robotics"],
    },
    {
      title: "Research Intern",
      company: "Potech",
      location: "Lebanon (Remote)",
      period: "March 2024 - May 2024",
      description:
        "Gained valuable experience in cybersecurity, working on various projects and challenges with strong proficiency in Kali Linux.",
      details: [
        "Developed a system for managing software licenses (demo, renewal, activation, expiration).",
        "Tracked license keys, activation statuses, expiration dates.",
        "Built dashboard with filters to manage licenses, clients, statuses.",
        "Developed a phishing simulation tool using PHP and phpMyAdmin, deployed on 000webhost.",
        "Improved reporting, stock control, and usability.",
      ],
      technologies: [
        "PHP",
        "phpMyAdmin",
        "JavaScript",
        "Bash",
        "Git",
        "Kali Linux",
      ],
    },
  ];

  const handleCardClick = (index: number) => {
    setActiveCard(activeCard === index ? null : index);
  };
  const [projectsPerPage, setProjectsPerPage] = useState(2);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const updateProjectsPerPage = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setProjectsPerPage(1); // Mobile: 1 project
      } else if (width < 1024) {
        setProjectsPerPage(1); // Tablet: 1 project
      } else if (width < 1280) {
        setProjectsPerPage(2); // Desktop: 2 projects
      } else {
        setProjectsPerPage(2); // Large desktop: 2 projects
      }
    };

    updateProjectsPerPage();
    window.addEventListener("resize", updateProjectsPerPage);
    return () => window.removeEventListener("resize", updateProjectsPerPage);
  }, []);

  useEffect(() => {
    setCurrentIndex(0);
  }, [projectsPerPage]);

  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const currentProjects = projects.slice(
    currentIndex * projectsPerPage,
    (currentIndex + 1) * projectsPerPage
  );

  const nextProjects = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevProjects = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <div className="min-h-screen relative">
      {/* Graph Paper Background */}
      <div
        className="fixed inset-0 bg-black"
        style={{
          backgroundImage: `
          linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
        `,
          backgroundSize: "20px 20px",
        }}
      />

      {/* Alternative approach with SVG for more precise control */}
      <div className="fixed inset-0">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern
              id="graphPaper"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 20 0 L 0 0 0 20"
                fill="none"
                stroke="rgba(59, 130, 246, 0.15)"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#graphPaper)" />
        </svg>
      </div>

      {/* Navbar */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-black/80 backdrop-blur-md border border-blue-500/20 rounded-full px-4 md:px-8 py-3">
        <div className="flex items-center justify-center">
          <div className="flex items-center space-x-1 md:space-x-2">
            {navigationItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = activeItem === item.name;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setActiveItem(item.name)}
                  className={`flex items-center space-x-2 px-3 md:px-4 py-2 rounded-full transition-all duration-300 text-sm font-medium relative group ${
                    isActive
                      ? "text-blue-400 bg-blue-500/20 border border-blue-500/30"
                      : "text-gray-300 hover:text-white hover:bg-blue-500/10"
                  }`}
                  title={item.name} // Tooltip for mobile users
                >
                  <IconComponent className="w-4 h-4" />
                  {/* Hide text on mobile, show on md and up */}
                  <span className="hidden md:inline">{item.name}</span>
                </a>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section
          id="home"
          className="min-h-screen flex items-center justify-center px-6 pt-16"
        >
          <div
            className={`text-center transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="mb-8">
              {/* Profile Image */}
              <div className="mb-8 flex justify-center">
                <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-blue-500 p-1">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <img
                      src="/JimmyPhoto.jpg"
                      alt="Jimmy Zghendy Profile"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>

              {/* Added "Let's build something together" */}
              <h2 className="text-xl md:text-2xl text-blue-400 mb-2 animate-fade-in uppercase tracking-wider">
                LET'S BUILD SOMETHING TOGETHER
              </h2>

              <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Jimmy Zghendy
              </h1>

              <div className="text-xl md:text-2xl text-blue-300 mb-6">
                <span className="inline-block animate-bounce">
                  Computer Science Engineer
                </span>
              </div>

              <p className="text-lg text-blue-200 max-w-2xl mx-auto leading-relaxed">
                Passionate about cybersecurity, artificial intelligence, and
                software development. Currently pursuing M1 in Computer Science,
                exploring the intersection of security, AI algorithms, and
                innovative coding solutions to build a safer digital future.
              </p>
            </div>

            <div className="flex flex-wrap justify-center px-1 gap-4 mb-12 max-w-md mx-auto">
              {[
                { Icon: Github, url: "https://github.com/JimmyZghendy" },
                {
                  Icon: Linkedin,
                  url: "https://www.linkedin.com/in/jimmy-zghendy/",
                },
                { Icon: Mail, url: "mailto:jimmyelzghendy990@gmail.com" },
                { Icon: Phone, url: "tel:+96171755803" },
              ].map(({ Icon, url }, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="lg"
                  className="bg-blue-500/20 border border-blue-500/20 hover:bg-blue-500/30 hover:border-blue-400 transition-all duration-300 hover:scale-110 text-blue-400 hover:text-blue-300"
                  onClick={() => window.open(url, "_blank")}
                >
                  <Icon className="w-5 h-5" />
                </Button>
              ))}
            </div>
          </div>
        </section>
        {/* Skills Section */}
        <section id="skills" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2
              className={`text-4xl font-bold text-center mb-16 bg-gradient-to-r ${theme.primary} bg-clip-text text-transparent`}
            >
              Core Expertise
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {skills.map((skill, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/50 backdrop-blur-sm border border-blue-500/20 hover:bg-gray-900/70 transition-all duration-500 hover:scale-105 group"
                >
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${skill.color} flex items-center justify-center group-hover:animate-spin transition-all duration-500`}
                    >
                      <skill.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {skill.name}
                    </h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        {/* Experience Section */}
        <section
          ref={sectionRef}
          id="experience"
          className="py-20 px-6 bg-gray-950"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Experiences
            </h2>

            <div className="relative">
              {/* Static timeline line (background) */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-700/50"></div>

              {/* Animated timeline line (foreground) */}
              <div
                className="absolute left-4 top-0 w-0.5 bg-gradient-to-b from-blue-400 via-blue-500 to-cyan-500 transition-all duration-300 ease-out"
                style={{
                  height: `${scrollProgress * 100}%`,
                  boxShadow:
                    "0 0 20px rgba(59, 130, 246, 0.8), 0 0 40px rgba(59, 130, 246, 0.4), 0 0 60px rgba(59, 130, 246, 0.2)",
                  filter: "drop-shadow(0 0 8px rgba(59, 130, 246, 0.6))",
                }}
              ></div>

              <div className="space-y-12">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative flex items-start">
                    {/* Timeline dot with animation */}
                    <div
                      className={`absolute left-2 w-4 h-4 rounded-full border-4 border-gray-950 z-10 transition-all duration-500 ${
                        scrollProgress > (index + 1) / experiences.length
                          ? "bg-gradient-to-r from-blue-400 to-cyan-400 scale-110"
                          : "bg-gradient-to-r from-blue-600 to-blue-800"
                      } ${
                        activeCard === index ? "scale-125 animate-pulse" : ""
                      }`}
                      style={{
                        boxShadow:
                          scrollProgress > (index + 1) / experiences.length ||
                          activeCard === index
                            ? "0 0 15px rgba(59, 130, 246, 0.8), 0 0 25px rgba(59, 130, 246, 0.5), inset 0 0 10px rgba(255, 255, 255, 0.2)"
                            : "0 0 8px rgba(59, 130, 246, 0.4), inset 0 0 5px rgba(255, 255, 255, 0.1)",
                        filter:
                          scrollProgress > (index + 1) / experiences.length ||
                          activeCard === index
                            ? "drop-shadow(0 0 6px rgba(59, 130, 246, 0.7))"
                            : "drop-shadow(0 0 3px rgba(59, 130, 246, 0.3))",
                      }}
                    ></div>

                    {/* Content */}
                    <div className="ml-12 w-full">
                      <Card
                        onClick={() => handleCardClick(index)}
                        className={`bg-gray-900/80 backdrop-blur-sm border transition-all duration-500 hover:bg-gray-900/90 cursor-pointer transform hover:scale-[1.02] ${
                          activeCard === index
                            ? "border-blue-400 shadow-2xl shadow-blue-500/40 scale-[1.03] bg-gray-900/95"
                            : scrollProgress > (index + 1) / experiences.length
                            ? "border-blue-500/50 shadow-lg shadow-blue-500/20"
                            : "border-blue-500/20 hover:border-blue-400/40"
                        }`}
                        style={{
                          boxShadow:
                            activeCard === index
                              ? "0 0 30px rgba(59, 130, 246, 0.4), 0 0 60px rgba(59, 130, 246, 0.2), inset 0 0 20px rgba(59, 130, 246, 0.1)"
                              : undefined,
                          animation:
                            activeCard === index
                              ? "pulse 2s infinite"
                              : undefined,
                        }}
                      >
                        <CardContent className="p-8">
                          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                            <div className="flex-1">
                              <h3
                                className={`text-2xl font-bold mb-2 transition-colors duration-300 ${
                                  activeCard === index
                                    ? "text-blue-300"
                                    : "text-white hover:text-blue-400"
                                }`}
                              >
                                {exp.title}
                              </h3>
                              <p
                                className={`text-lg font-semibold mb-1 transition-colors duration-300 ${
                                  activeCard === index
                                    ? "text-blue-300"
                                    : "text-blue-400"
                                }`}
                              >
                                {exp.company}
                              </p>
                              <p className="text-blue-300 text-sm italic mb-3">
                                {exp.location} • {exp.period}
                              </p>
                            </div>
                          </div>

                          <div className="mb-6">
                            <h4 className="text-lg font-semibold text-blue-300 mb-3">
                              {exp.description.split(".")[0]}
                            </h4>
                            <ul className="space-y-2">
                              {exp.details.map((detail, detailIndex) => (
                                <li
                                  key={detailIndex}
                                  className="flex items-start text-gray-300 text-sm leading-relaxed"
                                >
                                  <span className="text-blue-400 mr-2 mt-1.5 text-xs">
                                    •
                                  </span>
                                  <span>{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className={`px-3 py-1 backdrop-blur-sm rounded-full text-sm border transition-all duration-200 ${
                                  activeCard === index
                                    ? "bg-blue-500/20 text-blue-200 border-blue-400/50 shadow-lg shadow-blue-500/20"
                                    : "bg-blue-500/10 text-blue-300 border-blue-500/30 hover:bg-blue-500/20 hover:border-blue-400/50"
                                }`}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2
              className={`text-4xl font-bold text-center mb-16 bg-gradient-to-r ${theme.primary} bg-clip-text text-transparent`}
            >
              Education
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  degree: "Master of Science in Computer Science",
                  school: "Lebanese University",
                  period: "2024 - 2025",
                  focus:
                    "Cybersecurity & Artificial Intelligence & Machine Learning",
                  achievements: [
                    "Network Security",
                    "Cryptography",
                    "DevOps",
                    "Artificial Intelligence",
                    "Machine Learning",
                    "Compiler",
                    "Django",
                    "MongoDB",
                  ],
                  gradient: "from-violet-500 to-purple-600",
                },
                {
                  degree: "Bachelor of Science in Applied Mathematics",
                  school: "Lebanese University",
                  period: "2020 - 2024",
                  focus: "Software Engineering & Systems",
                  achievements: [
                    "Networking",
                    "Project Management",
                    "Data Structures",
                    "Data Analysis",
                    "Object-Oriented Programming",
                    "Web Development",
                    "Software Engineering",
                  ],
                  gradient: "from-blue-500 to-indigo-600",
                },
              ].map((edu, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/50 backdrop-blur-sm border border-blue-500/20 hover:bg-gray-900/70 transition-all duration-500 hover:scale-105 group"
                >
                  <div className={`h-2 bg-gradient-to-r ${edu.gradient}`} />
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                      {edu.degree}
                    </h3>
                    <p
                      className={`text-lg text-${theme.highlight} font-semibold mb-1`}
                    >
                      {edu.school}
                    </p>
                    <p className="text-gray-400 mb-2">{edu.period}</p>
                    {/*<p className={`text-${theme.highlight} font-medium mb-2`}>
      GPA: {edu.gpa}
    </p>*/}
                    <p className="text-gray-300 mb-4">Focus: {edu.focus}</p>
                    <div className="space-y-1">
                      <p className="text-sm text-gray-400 font-medium">
                        {/* Achievements: */}
                      </p>
                      {edu.achievements.map((achievement, achIndex) => (
                        <span
                          key={achIndex}
                          className="inline-block px-2 py-1 bg-gray-900/50 backdrop-blur-sm rounded text-xs text-orange-300 border border-blue-500/20 mr-2 mb-1 hover:bg-gray-900/70 transition-colors"
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        {/* Language Skills Section */}
        <section id="languages" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2
              className={`text-4xl font-bold text-center mb-16 bg-gradient-to-r ${theme.primary} bg-clip-text text-transparent`}
            >
              Language Skills
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  language: "Arabic",
                  level: "Native",
                  proficiency: 100,
                  flag: "🇱🇧",
                  gradient: "from-blue-500 to-red-500",
                },
                {
                  language: "English",
                  level: "Fluent",
                  proficiency: 90,
                  flag: "🇺🇸",
                  gradient: "from-yellow-500 to-red-600",
                },
                {
                  language: "French",
                  level: "Intermediate",
                  proficiency: 70,
                  flag: "🇫🇷",
                  gradient: "from-blue-600 to-red-600",
                },
              ].map((lang, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/50 backdrop-blur-sm border border-blue-500/20 hover:bg-gray-900/70 transition-all duration-500 hover:scale-105 group"
                >
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-4 group-hover:animate-bounce transition-all duration-300">
                      {lang.flag}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-pink-400 transition-colors">
                      {lang.language}
                    </h3>
                    <p className={`text-${theme.highlight} font-semibold mb-4`}>
                      {lang.level}
                    </p>

                    {/* Progress Bar */}
                    <div className="w-full bg-gray-900/50 backdrop-blur-sm border border-blue-500/20 rounded-full h-3 mb-2 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${lang.gradient} rounded-full transition-all duration-1000 ease-out group-hover:animate-pulse`}
                        style={{ width: `${lang.proficiency}%` }}
                      />
                    </div>
                    <p className="text-sm text-gray-400">
                      {lang.proficiency}% Proficiency
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="bg-black py-8 overflow-hidden">
          <div className="container mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-6">
              <h2 className="text-5xl font-bold text-blue-400">Skills</h2>
            </div>

            {/* Scrolling Skills Container */}
            <div className="relative">
              <div className="flex animate-scroll-left">
                {duplicatedSkills.map((skill, index) => {
                  const IconComponent = skill.icon as React.ComponentType<{
                    className?: string;
                    style?: React.CSSProperties;
                    onMouseEnter?: (e: React.MouseEvent<SVGElement>) => void;
                    onMouseLeave?: (e: React.MouseEvent<SVGElement>) => void;
                  }>;

                  return (
                    <div
                      key={`${skill.name}-${index}`}
                      className="flex flex-col items-center cursor-pointer group transition-all duration-300 mx-2 flex-shrink-0"
                      onClick={() => handleSkillClick(skill.url)}
                    >
                      {/* Icon */}
                      <div className="mb-2 p-3 transition-all duration-300 group-hover:scale-110">
                        <IconComponent
                          className="w-8 h-8 text-blue-400 transition-all duration-300 group-hover:drop-shadow-lg group-hover:text-blue-300"
                          onMouseEnter={(e) => {
                            e.currentTarget.style.filter =
                              "brightness(1.1) drop-shadow(0 0 8px rgba(59, 130, 246, 0.5))";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.filter = "brightness(1)";
                          }}
                        />
                      </div>
                      {/* Label */}
                      <span className="text-blue-400 text-sm font-medium group-hover:text-blue-300 transition-colors duration-300 whitespace-nowrap">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <style>{`
            @keyframes scroll-left {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }

            .animate-scroll-left {
              animation: scroll-left 20s linear infinite;
            }

            .animate-scroll-left:hover {
              animation-play-state: paused;
            }

            /* Mobile - Very fast */
            @media (max-width: 640px) {
              .animate-scroll-left {
                animation: scroll-left 4s linear infinite;
              }
            }

            /* Tablet - Fast */
            @media (min-width: 641px) and (max-width: 1024px) {
              .animate-scroll-left {
                animation: scroll-left 8s linear infinite;
              }
            }

            /* Desktop - Normal speed */
            @media (min-width: 1025px) {
              .animate-scroll-left {
                animation: scroll-left 10s linear infinite;
              }
            }
          `}</style>
        </section>
        {/* 
        // Projects Section 
        <section id="projects" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2
              className={`text-4xl font-bold text-center mb-16 bg-gradient-to-r ${theme.secondary} bg-clip-text text-transparent`}
            >
              Featured Projects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 group overflow-hidden"
                >
                  <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`px-3 py-1 bg-white/10 rounded-full text-sm text-${theme.highlight} border border-${theme.border}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section> */}

        {/* Visualization Section */}
        <section id="visualization" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            {/*  <h2
              className={`text-4xl font-bold text-center mb-16 bg-gradient-to-r ${theme.primary} bg-clip-text text-transparent`}
            >
              Project Visualizations
            </h2>

            {/* Stats Overview 
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
              {[
                {
                  label: "Projects Completed",
                  value: "25+",
                  icon: BarChart3,
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  label: "Technologies Used",
                  value: "15+",
                  icon: Zap,
                  color: "from-purple-500 to-pink-500",
                },
                {
                  label: "Years Experience",
                  value: "5+",
                  icon: Rocket,
                  color: "from-green-500 to-emerald-500",
                },
                {
                  label: "Client Satisfaction",
                  value: "98%",
                  icon: Star,
                  color: "from-orange-500 to-red-500",
                },
              ].map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <Card
                    key={index}
                    className="bg-gray-900/50 backdrop-blur-sm border border-blue-500/20 hover:bg-gray-900/70 transition-all duration-500 hover:scale-105 group text-center"
                  >
                    <CardContent className="p-6">
                      <div className="mb-3 group-hover:animate-bounce transition-all duration-300 flex justify-center">
                        <IconComponent className="w-10 h-10 text-blue-400" />
                      </div>
                      <div
                        className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
                      >
                        {stat.value}
                      </div>
                      <p className="text-gray-400 text-sm">{stat.label}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            */}
            {/* 
            // Technology Stack Visualization 
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-center mb-8 text-gray-300">
                Technology Stack Distribution
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Frontend Technologies 
                <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-500">
                  <CardContent className="p-6">
                    <h4
                      className={`text-xl font-bold mb-6 text-${theme.highlight}`}
                    >
                      Frontend Technologies
                    </h4>
                    <div className="space-y-4">
                      {[
                        {
                          name: "React/Next.js",
                          percentage: 90,
                          color: "from-blue-500 to-cyan-500",
                        },
                        {
                          name: "TypeScript",
                          percentage: 85,
                          color: "from-blue-600 to-blue-400",
                        },
                        {
                          name: "Vue.js",
                          percentage: 75,
                          color: "from-green-500 to-emerald-500",
                        },
                        {
                          name: "Angular",
                          percentage: 65,
                          color: "from-red-500 to-pink-500",
                        },
                      ].map((tech, index) => (
                        <div key={index} className="group">
                          <div className="flex justify-between mb-2">
                            <span className="text-white font-medium">
                              {tech.name}
                            </span>
                            <span className="text-gray-400">
                              {tech.percentage}%
                            </span>
                          </div>
                          <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                            <div
                              className={`h-full bg-gradient-to-r ${tech.color} rounded-full transition-all duration-1000 ease-out group-hover:animate-pulse`}
                              style={{ width: `${tech.percentage}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                
                // Backend Technologies
                <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-500">
                  <CardContent className="p-6">
                    <h4
                      className={`text-xl font-bold mb-6 text-${theme.highlight}`}
                    >
                      Backend Technologies
                    </h4>
                    <div className="space-y-4">
                      {[
                        {
                          name: "Node.js",
                          percentage: 95,
                          color: "from-green-600 to-green-400",
                        },
                        {
                          name: "Python",
                          percentage: 88,
                          color: "from-yellow-500 to-green-500",
                        },
                        {
                          name: "Java",
                          percentage: 80,
                          color: "from-red-600 to-orange-600",
                        },
                        {
                          name: "PHP",
                          percentage: 70,
                          color: "from-cyan-500 to-blue-500",
                        },
                      ].map((tech, index) => (
                        <div key={index} className="group">
                          <div className="flex justify-between mb-2">
                            <span className="text-white font-medium">
                              {tech.name}
                            </span>
                            <span className="text-gray-400">
                              {tech.percentage}%
                            </span>
                          </div>
                          <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                            <div
                              className={`h-full bg-gradient-to-r ${tech.color} rounded-full transition-all duration-1000 ease-out group-hover:animate-pulse`}
                              style={{ width: `${tech.percentage}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
                      */}
            {/* Project Timeline Visualization */}
            <div className="min-h-screen bg-gray-900 py-8 sm:py-12 lg:py-16 px-2 sm:px-4 lg:px-6">
              <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-blue-400 mb-3 sm:mb-4 lg:mb-6">
                    Projects
                  </h2>
                  <div className="w-16 sm:w-20 lg:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"></div>
                </div>

                {/* Projects Carousel */}
                <div className="relative mb-8 sm:mb-10 lg:mb-12">
                  <div className="overflow-hidden">
                    <div
                      className="flex transition-transform duration-500 ease-in-out gap-4 sm:gap-6 lg:gap-8"
                      style={{ transform: `translateX(0%)` }}
                    >
                      {currentProjects.map((project, index) => (
                        <div
                          key={currentIndex * projectsPerPage + index}
                          className={`w-full flex-shrink-0 ${
                            projectsPerPage === 1
                              ? "max-w-full"
                              : "sm:w-full lg:w-1/2"
                          }`}
                        >
                          <Card className="bg-gray-800/50 border-gray-700/50 hover:bg-gray-800/70 transition-all duration-500 hover:scale-[1.01] sm:hover:scale-[1.02] group backdrop-blur-sm overflow-hidden h-full">
                            {/* Project Image */}
                            <div className="relative overflow-hidden">
                              <img
                                src={project.image || "/placeholder.svg"}
                                alt={project.title}
                                className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
                              <div className="absolute top-2 sm:top-3 lg:top-4 left-2 sm:left-3 lg:left-4">
                                <span className="bg-blue-500/90 backdrop-blur-sm text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                                  {project.category}
                                </span>
                              </div>
                              <div className="absolute top-2 sm:top-3 lg:top-4 right-2 sm:right-3 lg:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <ExternalLink className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
                              </div>
                            </div>

                            <CardContent className="p-3 sm:p-4 lg:p-6">
                              {/* Title */}
                              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-blue-400 transition-colors duration-300 line-clamp-1">
                                {project.title}
                              </h3>

                              {/* Description */}
                              <p className="text-gray-300 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base line-clamp-2">
                                {project.description}
                              </p>

                              {/* Features */}
                              <ul className="space-y-1 sm:space-y-2 mb-4 sm:mb-6">
                                {project.features.map(
                                  (feature, featureIndex) => (
                                    <li
                                      key={featureIndex}
                                      className="flex items-start text-gray-400 text-xs sm:text-sm"
                                    >
                                      <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-blue-500 mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0"></div>
                                      <span className="line-clamp-1">
                                        {feature}
                                      </span>
                                    </li>
                                  )
                                )}
                              </ul>

                              {/* Technologies */}
                              <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-6">
                                {project.technologies.map((tech, techIndex) => (
                                  <span
                                    key={techIndex}
                                    className="bg-blue-500/20 text-blue-300 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-medium border border-blue-500/30 hover:bg-blue-500/30 transition-colors duration-200"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>

                              {/* View Project Button */}
                              <Button
                                asChild
                                className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 group-hover:scale-105 text-sm sm:text-base py-2 sm:py-2.5"
                              >
                                <a
                                  href={project.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center justify-center"
                                >
                                  <span className="mr-2">View Project</span>
                                  <ExternalLink className="w-3 sm:w-4 h-3 sm:h-4" />
                                </a>
                              </Button>
                            </CardContent>
                          </Card>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex justify-center items-center space-x-3 sm:space-x-4">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={prevProjects}
                    className="border-blue-500/30 text-blue-400 hover:bg-blue-500/20 hover:border-blue-400 bg-gray-800/50 backdrop-blur-sm hover:scale-110 transition-all duration-300 w-8 h-8 sm:w-10 sm:h-10"
                  >
                    <ChevronLeft className="h-3 sm:h-4 lg:h-5 w-3 sm:w-4 lg:w-5" />
                  </Button>

                  {/* Page Indicators */}
                  <div className="flex space-x-1.5 sm:space-x-2">
                    {Array.from({ length: totalPages }).map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                          index === currentIndex
                            ? "bg-blue-500 scale-125"
                            : "bg-gray-600 hover:bg-gray-500"
                        }`}
                      />
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    size="icon"
                    onClick={nextProjects}
                    className="border-blue-500/30 text-blue-400 hover:bg-blue-500/20 hover:border-blue-400 bg-gray-800/50 backdrop-blur-sm hover:scale-110 transition-all duration-300 w-8 h-8 sm:w-10 sm:h-10"
                  >
                    <ChevronRight className="h-3 sm:h-4 lg:h-5 w-3 sm:w-4 lg:w-5" />
                  </Button>
                </div>

                {/* Project Counter */}
                <div className="text-center mt-4 sm:mt-6">
                  <span className="text-gray-400 text-xs sm:text-sm">
                    Showing {currentIndex * projectsPerPage + 1}-
                    {Math.min(
                      (currentIndex + 1) * projectsPerPage,
                      projects.length
                    )}{" "}
                    of {projects.length} projects
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="min-h-screen bg-black text-white">
          {/* Contact Section */}
          <div className="min-h-screen bg-black text-white">
            {/* Contact Section */}
            <section id="contact" className="py-20 px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  {"Let's Build Something Amazing"}
                </h2>
                <p className="text-xl text-gray-400 mb-12 leading-relaxed">
                  Ready to collaborate on your next innovative project? Let's
                  discuss how we can bring your ideas to life.
                </p>
                <div className="flex justify-center">
                  <Button
                    size="lg"
                    className="bg-black border-2 border-blue-500 text-blue-500 hover:text-blue-400 px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/25 active:bg-black focus:bg-black flex items-center gap-2"
                    onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                      e.preventDefault();
                      window.open("https://wa.me/96171755803", "_blank");
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                    Chat via WhatsApp
                  </Button>
                </div>
              </div>
            </section>

            {/* Footer Section */}
            <footer className="py-12 px-6 border-t border-white/10">
              <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                      Jimmy Zghendy
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Computer Science Engineer
                    </p>
                  </div>
                  <div className="flex items-center space-x-3 sm:space-x-4 md:space-x-6 mb-4 md:mb-0 flex-wrap gap-2 sm:gap-0">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                      onClick={() =>
                        window.open("https://github.com/JimmyZghendy", "_blank")
                      }
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                      onClick={() =>
                        window.open(
                          "https://www.linkedin.com/in/your-profile",
                          "_blank"
                        )
                      }
                    >
                      <Linkedin className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                      onClick={() =>
                        window.open("mailto:jimmyelzghendy990@gmail.com")
                      }
                    >
                      <Mail className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                      onClick={() =>
                        window.open(
                          "https://www.instagram.com/jimmyzghendi/",
                          "_blank"
                        )
                      }
                    >
                      <Instagram className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                      onClick={() =>
                        window.open(
                          "https://www.facebook.com/jimmy.zghendy/",
                          "_blank"
                        )
                      }
                    >
                      <Facebook className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <div className="mt-8 pt-8 border-t border-white/5 text-center">
                  <p className="text-gray-500 text-sm">
                    © {new Date().getFullYear()} Jimmy Zghendy. All rights
                    reserved.
                  </p>
                  <div className="mt-2 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto w-24 opacity-50"></div>
                </div>
              </div>
            </footer>
          </div>
        </div>
        {/* Animated CSS */}
        <style jsx>{`
          @keyframes float {
            0%,
            100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-20px);
            }
          }

          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
        `}</style>
      </div>
    </div>
  );
}
