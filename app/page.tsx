"use client";

import { useState, useEffect } from "react";
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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

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

  const programmingLanguages = [
    // Programming Languages
    {
      name: "JavaScript",
      icon: "⚛️",
      color: "from-yellow-500 to-yellow-700",
      level: 90,
      category: "Frontend",
    },
    {
      name: "TypeScript",
      icon: "🟦",
      color: "from-blue-500 to-blue-700",
      level: 85,
      category: "Frontend",
    },
    {
      name: "Python",
      icon: "🐍",
      color: "from-blue-400 to-blue-600",
      level: 80,
      category: "Scripting",
    },
    {
      name: "Java",
      icon: "☕",
      color: "from-red-600 to-red-800",
      level: 65,
      category: "Backend",
    },
    {
      name: "C++",
      icon: "🧰",
      color: "from-red-500 to-red-700",
      level: 50,
      category: "Systems",
    },
    {
      name: "C",
      icon: "🔧",
      color: "from-blue-600 to-blue-800",
      level: 55,
      category: "Systems",
    },
    {
      name: "PHP",
      icon: "🐘",
      color: "from-purple-500 to-purple-700",
      level: 60,
      category: "Backend",
    },
    {
      name: "HTML5",
      icon: "🌐",
      color: "from-orange-500 to-orange-700",
      level: 95,
      category: "Frontend",
    },
    {
      name: "CSS3",
      icon: "🎨",
      color: "from-blue-400 to-blue-600",
      level: 90,
      category: "Frontend",
    },
    {
      name: "Bash",
      icon: "💻",
      color: "from-gray-600 to-gray-800",
      level: 70,
      category: "Scripting",
    },
    {
      name: "MATLAB",
      icon: "🧮",
      color: "from-red-400 to-red-600",
      level: 60,
      category: "Scientific",
    },
    {
      name: "SQL",
      icon: "📊",
      color: "from-orange-400 to-orange-600",
      level: 85,
      category: "Database",
    },

    // Databases
    {
      name: "MySQL",
      icon: "🐬",
      color: "from-blue-500 to-blue-700",
      level: 80,
      category: "Database",
    },
    {
      name: "PostgreSQL",
      icon: "🐘",
      color: "from-blue-600 to-blue-800",
      level: 75,
      category: "Database",
    },
    {
      name: "MongoDB",
      icon: "🍃",
      color: "from-green-500 to-green-700",
      level: 65,
      category: "Database",
    },

    // Frameworks/Platforms/Libraries
    {
      name: "React",
      icon: "⚛️",
      color: "from-blue-300 to-blue-500",
      level: 90,
      category: "Frontend",
    },
    {
      name: "React Vite",
      icon: "⚡",
      color: "from-purple-400 to-purple-600",
      level: 85,
      category: "Frontend",
    },
    {
      name: "Next.js",
      icon: "🚀",
      color: "from-gray-700 to-gray-900",
      level: 80,
      category: "Frontend",
    },
    {
      name: "Angular",
      icon: "🅰️",
      color: "from-red-500 to-red-700",
      level: 60,
      category: "Frontend",
    },
    {
      name: "Firebase",
      icon: "🔥",
      color: "from-yellow-500 to-orange-600",
      level: 70,
      category: "Backend",
    },
    {
      name: "Jupyter",
      icon: "📓",
      color: "from-orange-400 to-orange-600",
      level: 80,
      category: "Scientific",
    },
    {
      name: "Django",
      icon: "🎸",
      color: "from-green-600 to-green-800",
      level: 65,
      category: "Backend",
    },
    {
      name: "Anaconda",
      icon: "🐍",
      color: "from-green-500 to-green-700",
      level: 75,
      category: "Scientific",
    },
    {
      name: "Bootstrap",
      icon: "🅱️",
      color: "from-purple-500 to-purple-700",
      level: 80,
      category: "Frontend",
    },
    {
      name: "Tailwind CSS",
      icon: "🌊",
      color: "from-cyan-400 to-cyan-600",
      level: 90,
      category: "Frontend",
    },
    {
      name: "Node.js",
      icon: "🟢",
      color: "from-green-500 to-green-700",
      level: 75,
      category: "Backend",
    },
    {
      name: "Express.js",
      icon: "⚙️",
      color: "from-gray-400 to-gray-600",
      level: 70,
      category: "Backend",
    },

    // DevOps/Tools
    {
      name: "Jenkins",
      icon: "🔧",
      color: "from-blue-600 to-blue-800",
      level: 50,
      category: "DevOps",
    },
    {
      name: "Docker",
      icon: "🐳",
      color: "from-blue-400 to-blue-600",
      level: 60,
      category: "DevOps",
    },
    {
      name: "GitHub Actions",
      icon: "⚡",
      color: "from-gray-700 to-gray-900",
      level: 65,
      category: "DevOps",
    },
    {
      name: "Ubuntu",
      icon: "🐧",
      color: "from-orange-500 to-orange-700",
      level: 70,
      category: "Systems",
    },
    {
      name: "Kali Linux",
      icon: "🐉",
      color: "from-purple-600 to-purple-800",
      level: 55,
      category: "Systems",
    },
  ];

  const categories = [
    "All",
    "Frontend",
    "Backend",
    "Systems",
    "Database",
    "Scripting",
    "Scientific",
    "DevOps",
  ];

  const filteredLanguages =
    selectedCategory === "All"
      ? programmingLanguages
      : programmingLanguages.filter(
          (lang) => lang.category === selectedCategory
        );

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
      title: "AI-Powered Analytics Dashboard",
      description:
        "Real-time data visualization with machine learning insights",
      tech: ["React", "Python", "TensorFlow", "D3.js"],
      gradient: "from-violet-600 to-indigo-600",
    },
    {
      title: "Distributed Computing Platform",
      description:
        "Scalable microservices architecture for high-performance computing",
      tech: ["Node.js", "Docker", "Kubernetes", "Redis"],
      gradient: "from-emerald-600 to-teal-600",
    },
    {
      title: "Blockchain Voting System",
      description:
        "Secure and transparent voting platform using smart contracts",
      tech: ["Solidity", "Web3.js", "React", "IPFS"],
      gradient: "from-rose-600 to-pink-600",
    },
  ];

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
                <div
                  className={`relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-gradient-to-r ${theme.primary} p-1 bg-gradient-to-r ${theme.primary} animate-pulse`}
                >
                  <div className="w-full h-full rounded-full overflow-hidden bg-black">
                    <img
                      src="/JimmyPhoto.jpg?height=160&width=160"
                      alt="Jimmy Zghendy Profile"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>

              {/* Added "Let's build something together" */}
              <h2 className="text-xl md:text-2xl text-gray-400 mb-2 animate-fade-in uppercase tracking-wider">
                LET'S BUILD SOMETHING TOGETHER
              </h2>

              <h1
                className={`text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r ${theme.primary} bg-clip-text text-transparent animate-pulse`}
              >
                Jimmy Zghendy
              </h1>
              <div className="text-xl md:text-2xl text-gray-300 mb-6">
                <span className="inline-block animate-bounce">
                  Computer Science Engineer
                </span>
              </div>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
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
                  className="bg-gray-900/50 backdrop-blur-sm border border-blue-500/20 hover:bg-gray-900/70 transition-all duration-300 hover:scale-110 text-white hover:text-white"
                  onClick={() => window.open(url, "_blank")}
                >
                  <Icon className="w-5 h-5" />
                </Button>
              ))}
            </div>
            <ChevronDown
              className={`w-8 h-8 mx-auto animate-bounce text-${theme.highlight}`}
            />
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
        <section id="experience" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2
              className={`text-4xl font-bold text-center mb-16 bg-gradient-to-r ${theme.primary} bg-clip-text text-transparent`}
            >
              Professional Experience
            </h2>

            <div className="space-y-8">
              {[
                {
                  title: "Accounting Associate",
                  company: "Municipality of Jounieh",
                  period: "November 2024 - Present",
                  description:
                    "Conducted daily verification of rental contracts and ensured accurate exchange rate compliance according to Central Bank of Lebanon, resolving discrepancies efficiently. Worked with the Windows Subsystem for Linux (WSL) to enhance coding and system administration skills.",
                  /*technologies: ["Vue.js", "Express.js", "MongoDB", "Redis"],*/
                  gradient: "from-blue-500 to-cyan-500",
                },
                {
                  title: "Instructor Robotics",
                  company: "Ombael ",
                  period: "2023 - Present",
                  description:
                    "Robotics instructor at Ombael colonie Jbeil Lebanon. Using LEGO wedo2.0 to help kids aged 5 years and above gain new skills and experience robotics in a fun way. I give classes with up to 10 students, managing to give each one of them the help that they need to insure that each student finishes their project on time and understands how the programing works. I'm also a coding instructor, using code.org to deliver the basics of coding to kids in the best way that suits their capabilities. Helping them understand coding functions (if condition, if else, loop...) in a fun and easy way.",
                  technologies: ["Wedo2.0", "Lego", "Coding", "Programming"],
                  // ["React", "Node.js", "AWS", "Docker", "Python"],
                  gradient: "from-purple-500 to-pink-500",
                },
                {
                  title: "Research Intern",
                  company: "Potech",
                  period: "March 2024 - May 2024",
                  description:
                    "Gained valuable experience in the field of cybersecurity, working on various projects and challenges. Developed strong proficiency in Kali Linux, particularly for security testing. Developed a phishing simulation tool using PHP and phpMyAdmin, deployed 000webhost, to test security vulnerabilities.",
                  technologies: ["phpMyAdmin", "JavaScript", "Bash", "Git"],
                  gradient: "from-green-500 to-emerald-500",
                },
              ].map((exp, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/50 backdrop-blur-sm border border-blue-500/20 hover:bg-gray-900/70 transition-all duration-500 hover:scale-[1.02] group"
                >
                  <div className={`h-1 bg-gradient-to-r ${exp.gradient}`} />
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                          {exp.title}
                        </h3>
                        <p
                          className={`text-lg text-${theme.highlight} font-semibold`}
                        >
                          {exp.company}
                        </p>
                      </div>
                      <span className="text-gray-400 font-medium mt-2 md:mt-0">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    {exp.technologies && (
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className={`px-3 py-1 bg-gray-900/50 backdrop-blur-sm rounded-full text-sm text-${theme.highlight} border border-blue-500/20 hover:bg-gray-900/70 transition-colors`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
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

            {/* Programming Languages Bonus Section */}
            <div className="mt-16">
              <h2
                className={`text-4xl font-bold text-center mb-16 bg-gradient-to-r ${theme.primary} bg-clip-text text-transparent`}
              >
                Programming Languages & Technologies
              </h2>
              <p className="text-center text-gray-400 mb-8 max-w-2xl mx-auto">
                A comprehensive overview of my technical skills and proficiency
                levels across various programming languages and technologies.
              </p>

              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 relative overflow-hidden ${
                      selectedCategory === category
                        ? "bg-gray-800 border-2"
                        : "bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-600"
                    }`}
                    style={
                      selectedCategory === category
                        ? {
                            borderImage: `linear-gradient(to right, ${theme.primary
                              .replace("from-", "")
                              .replace("to-", "")
                              .replace(" ", ", ")}) 1`,
                          }
                        : {}
                    }
                  >
                    <span
                      className={
                        selectedCategory === category
                          ? `bg-gradient-to-r ${theme.primary} bg-clip-text text-transparent font-bold`
                          : ""
                      }
                    >
                      {category}
                    </span>
                  </button>
                ))}
              </div>

              {/* Enhanced Languages Display */}
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {filteredLanguages.map((prog, index) => (
                  <div key={index} className="group relative">
                    <div
                      className={`px-6 py-3 bg-gradient-to-r ${prog.color} rounded-full text-white font-semibold text-sm hover:scale-110 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl flex items-center gap-2`}
                    >
                      <span className="text-lg">{prog.icon}</span>
                      {prog.name}
                    </div>

                    {/* Enhanced Tooltip */}
                    <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-20">
                      <div className="font-semibold">{prog.name}</div>
                      <div className="text-gray-300">
                        Proficiency: {prog.level}%
                      </div>
                      <div className="text-blue-300 text-xs">
                        {prog.category}
                      </div>
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-black/90"></div>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute -top-2 -right-2 bg-gray-800 text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-gray-600">
                      {prog.category}
                    </div>
                  </div>
                ))}
              </div>

              {/* Stats Summary */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                <div className="text-center p-4 bg-gray-800 rounded-lg border border-gray-700">
                  <div className="text-2xl font-bold text-blue-400">
                    {filteredLanguages.length}
                  </div>
                  <div className="text-sm text-gray-400">
                    {selectedCategory === "All"
                      ? "Total Languages"
                      : `${selectedCategory} Skills`}
                  </div>
                </div>
                <div className="text-center p-4 bg-gray-800 rounded-lg border border-gray-700">
                  <div className="text-2xl font-bold text-green-400">
                    {Math.round(
                      filteredLanguages.reduce(
                        (acc, lang) => acc + lang.level,
                        0
                      ) / filteredLanguages.length
                    )}
                    %
                  </div>
                  <div className="text-sm text-gray-400">
                    Average Proficiency
                  </div>
                </div>
                <div className="text-center p-4 bg-gray-800 rounded-lg border border-gray-700">
                  <div className="text-2xl font-bold text-purple-400">
                    {
                      filteredLanguages.filter((lang) => lang.level >= 90)
                        .length
                    }
                  </div>
                  <div className="text-sm text-gray-400">Expert Level</div>
                </div>
                <div className="text-center p-4 bg-gray-800 rounded-lg border border-gray-700">
                  <div className="text-2xl font-bold text-orange-400">
                    {selectedCategory === "All"
                      ? new Set(filteredLanguages.map((lang) => lang.category))
                          .size
                      : filteredLanguages.filter((lang) => lang.level >= 80)
                          .length}
                  </div>
                  <div className="text-sm text-gray-400">
                    {selectedCategory === "All" ? "Categories" : "Advanced+"}
                  </div>
                </div>
              </div>
            </div>
          </div>
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
            <h2
              className={`text-4xl font-bold text-center mb-16 bg-gradient-to-r ${theme.primary} bg-clip-text text-transparent`}
            >
              Project Visualizations
            </h2>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
              {[
                {
                  label: "Projects Completed",
                  value: "25+",
                  icon: "📊",
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  label: "Technologies Used",
                  value: "15+",
                  icon: "⚡",
                  color: "from-purple-500 to-pink-500",
                },
                {
                  label: "Years Experience",
                  value: "5+",
                  icon: "🚀",
                  color: "from-green-500 to-emerald-500",
                },
                {
                  label: "Client Satisfaction",
                  value: "98%",
                  icon: "⭐",
                  color: "from-orange-500 to-red-500",
                },
              ].map((stat, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/50 backdrop-blur-sm border border-blue-500/20 hover:bg-gray-900/70 transition-all duration-500 hover:scale-105 group text-center"
                >
                  <CardContent className="p-6">
                    <div className="text-4xl mb-3 group-hover:animate-bounce transition-all duration-300">
                      {stat.icon}
                    </div>
                    <div
                      className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
                    >
                      {stat.value}
                    </div>
                    <p className="text-gray-400 text-sm">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

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
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-center mb-8 text-gray-300">
                Project Timeline
              </h3>
              <div className="relative">
                {/* Timeline Line */}
                <div
                  className={`absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b ${theme.primary} opacity-30`}
                ></div>

                <div className="space-y-12">
                  {[
                    {
                      year: "2025",
                      title: "Bibline",
                      description:
                        "Reading App to all platform using react native",
                      position: "left",
                      color: "from-purple-500 to-pink-500",
                    },
                    {
                      year: "2024",
                      title: "Soon",
                      description: "Scalable distributed system architecture",
                      position: "right",
                      color: "from-blue-500 to-cyan-500",
                    },
                    {
                      year: "2022",
                      title: "Soon",
                      description:
                        "Secure voting platform with smart contracts",
                      position: "left",
                      color: "from-green-500 to-emerald-500",
                    },
                    {
                      year: "2021",
                      title: "Soon",
                      description: "Cross-platform financial application",
                      position: "right",
                      color: "from-orange-500 to-red-500",
                    },
                  ].map((project, index) => (
                    <div
                      key={index}
                      className={`flex items-center ${
                        project.position === "right" ? "flex-row-reverse" : ""
                      }`}
                    >
                      <div
                        className={`w-1/2 ${
                          project.position === "right" ? "pl-8" : "pr-8"
                        }`}
                      >
                        <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 group">
                          <div
                            className={`h-1 bg-gradient-to-r ${project.color}`}
                          />
                          <CardContent className="p-6">
                            <div className="flex items-center mb-3">
                              <div
                                className={`w-3 h-3 rounded-full bg-gradient-to-r ${project.color} mr-3 group-hover:animate-pulse`}
                              ></div>
                              <span
                                className={`text-lg font-bold text-${theme.highlight}`}
                              >
                                {project.year}
                              </span>
                            </div>
                            <h4 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                              {project.title}
                            </h4>
                            <p className="text-gray-400">
                              {project.description}
                            </p>
                          </CardContent>
                        </Card>
                      </div>

                      {/* Timeline Node */}
                      <div className="relative z-10">
                        <div
                          className={`w-6 h-6 rounded-full bg-gradient-to-r ${project.color} border-4 border-black shadow-lg hover:scale-125 transition-transform duration-300`}
                        ></div>
                      </div>

                      <div className="w-1/2"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Skills Radar Chart Visualization */}
            <div>
              <h3 className="text-2xl font-bold text-center mb-8 text-gray-300">
                Skills Assessment
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {[
                  {
                    category: "Development",
                    skills: [
                      { name: "Frontend", level: 95 },
                      { name: "Backend", level: 90 },
                      { name: "Mobile", level: 80 },
                      { name: "DevOps", level: 75 },
                    ],
                    color: "from-blue-500 to-cyan-500",
                  },
                  {
                    category: "Data & AI",
                    skills: [
                      { name: "Machine Learning", level: 85 },
                      { name: "Data Analysis", level: 88 },
                      { name: "Deep Learning", level: 75 },
                      { name: "Computer Vision", level: 70 },
                    ],
                    color: "from-purple-500 to-pink-500",
                  },
                  {
                    category: "Architecture",
                    skills: [
                      { name: "System Design", level: 90 },
                      { name: "Microservices", level: 85 },
                      { name: "Cloud Computing", level: 88 },
                      { name: "Security", level: 80 },
                    ],
                    color: "from-green-500 to-emerald-500",
                  },
                ].map((category, index) => (
                  <Card
                    key={index}
                    className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 group"
                  >
                    <CardContent className="p-6">
                      <h4
                        className={`text-xl font-bold mb-6 text-center bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
                      >
                        {category.category}
                      </h4>
                      <div className="space-y-4">
                        {category.skills.map((skill, skillIndex) => (
                          <div key={skillIndex} className="group/skill">
                            <div className="flex justify-between mb-2">
                              <span className="text-white font-medium text-sm">
                                {skill.name}
                              </span>
                              <span className="text-gray-400 text-sm">
                                {skill.level}%
                              </span>
                            </div>
                            <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                              <div
                                className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out group-hover/skill:animate-pulse`}
                                style={{ width: `${skill.level}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* Contact Section */}
        <section id="contact" className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2
              className={`text-4xl font-bold mb-8 bg-gradient-to-r ${theme.primary} bg-clip-text text-transparent`}
            >
              {"Let's Build Something Amazing"}
            </h2>
            <p className="text-xl text-gray-400 mb-12 leading-relaxed">
              Ready to collaborate on your next innovative project?
              {"Let's"} discuss how we can bring your ideas to life.
            </p>

            <Button
              size="lg"
              className={`bg-gradient-to-r ${
                theme.primary
              } hover:${theme.primary
                .replace("from", "from-600")
                .replace(
                  "to",
                  "to-700"
                )} text-gray-700 hover:text-gray-900 px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/25`}
              onClick={() => window.open("https://wa.me/96171755803", "_blank")}
            >
              Get In Touch
            </Button>
          </div>
        </section>
        {/* Footer Section */}
        <footer className="py-12 px-6 border-t border-white/10">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <h3
                  className={`text-2xl font-bold bg-gradient-to-r ${theme.primary} bg-clip-text text-transparent`}
                >
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
                  className="text-gray-400 hover:text-white transition-colors"
                  onClick={() =>
                    window.open("https://github.com/JimmyZghendy", "_blank")
                  }
                >
                  <Github className="w-4 h-4" />
                </Button>

                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-white transition-colors"
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
                  className="text-gray-400 hover:text-white transition-colors"
                  onClick={() =>
                    window.open("mailto:jimmyelzghendy990@gmail.com")
                  }
                >
                  <Mail className="w-4 h-4" />
                </Button>

                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-white transition-colors"
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
                  className="text-gray-400 hover:text-white transition-colors"
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
              <div className="flex items-center space-x-4">
                <Button
                  variant="ghost"
                  size="sm"
                  className={`text-${theme.highlight} hover:text-white transition-all duration-300 hover:scale-110`}
                  title={`Current: ${theme.primary}`}
                >
                  <Palette className="w-4 h-4 mr-2" />
                  {theme.primary}
                </Button>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/5 text-center">
              <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} Jimmy Zghendy. All rights reserved.
              </p>
              <div
                className={`mt-2 h-0.5 bg-gradient-to-r ${theme.primary} mx-auto w-24 opacity-50`}
              ></div>
            </div>
          </div>
        </footer>
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
  );
}
