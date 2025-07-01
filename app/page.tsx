"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Code,
  Brain,
  Trophy,
  GraduationCap,
  Star,
  ChevronDown,
  Menu,
  X,
  Award,
  Target,
  Lightbulb,
  Users,
  TrendingUp,
  Sparkles,
  Zap,
  Rocket,
  Sun,
  Moon,
} from "lucide-react"
import Image from "next/image"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isDarkMode, setIsDarkMode] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "achievements", "education", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  const skills = {
    languages: ["Python", "JavaScript", "HTML", "CSS", "C++", "SQL"],
    frameworks: ["Node.js", "Express", "Chart.js", "scikit-learn"],
    databases: ["MongoDB", "MySQL"],
    tools: ["Figma", "Locofy.ai", "Git", "GitHub", "Vercel", "Netlify"],
    concepts: ["API Integration", "Machine Learning", "Model Evaluation", "Web Hosting", "NLP", "Sentiment Analysis"],
  }

  const projects = [
    {
      title: "Air Quality Monitoring System",
      subtitle: "Real-time Environmental Data Visualization",
      description:
        "A comprehensive air quality monitoring system that visualizes real-time AQI data using Chart.js and AQICN API, displaying detailed pollutant information including PM2.5, NO2, CO, SO2, O3, temperature, and humidity.",
      highlights: [
        "Real-time AQI data visualization with Chart.js",
        "Integration with AQICN API for live data",
        "Dynamic user interface with pollutant breakdown",
        "Temperature and humidity monitoring",
        "Responsive design for multiple devices",
      ],
      tech: ["JavaScript", "Chart.js", "API Integration", "HTML", "CSS"],
      status: "Live",
      category: "Environmental Tech",
    },
    {
      title: "Eco Bins",
      subtitle: "Smart Waste Management System",
      description:
        "Award-winning sustainable waste management model that secured 1st Prize and Gold Medal at ISTE National Convention. Developed a comprehensive business model for smart bins that sort and monitor waste with focus on environmental safety.",
      highlights: [
        "🥇 First Prize winner at ISTE National Convention",
        "Smart waste sorting and monitoring system",
        "Comprehensive business model development",
        "Public awareness and environmental safety focus",
        "Sustainable technology implementation",
      ],
      tech: ["IoT Concepts", "Business Model", "Sustainability", "System Design"],
      status: "Award Winner",
      category: "Sustainability",
    },
    {
      title: "Mental Health Chatbot",
      subtitle: "AI-Powered Mental Health Support",
      description:
        "A confidential mental health support platform designed to help individuals dealing with depression and suicidal tendencies using advanced NLP and sentiment analysis to deliver empathetic, supportive responses.",
      highlights: [
        "NLP and sentiment analysis implementation",
        "Empathetic response generation",
        "Confidential and secure platform",
        "Mental health crisis intervention",
        "AI-driven therapeutic conversations",
      ],
      tech: ["Python", "NLP", "Sentiment Analysis", "Machine Learning", "AI"],
      status: "In Development",
      category: "Healthcare AI",
    },
    {
      title: "ViewPay",
      subtitle: "Ad-Reward Platform Startup",
      description:
        "Innovative startup concept where users watch advertisements and earn rewards. Features include comprehensive dashboard, referral program, email/mobile verification, and AdSense integration for monetization.",
      highlights: [
        "User reward system for ad viewing",
        "Comprehensive user dashboard",
        "Referral program implementation",
        "Email and mobile verification",
        "AdSense integration for monetization",
      ],
      tech: ["JavaScript", "Node.js", "MongoDB", "AdSense API", "Authentication"],
      status: "Live",
      category: "Fintech",
      link: "https://www.viewpay.store/",
    },
  ]

  return (
    <div
      className={`min-h-screen transition-all duration-500 relative overflow-hidden ${
        isDarkMode
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white"
          : "bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 text-gray-900"
      }`}
    >
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Background effects removed for cleaner professional look */}
      </div>

      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full backdrop-blur-md z-40 shadow-lg transition-all duration-300 ${
          isDarkMode
            ? "bg-gray-900/80 border-b border-cyan-400/60 shadow-cyan-500/10"
            : "bg-white/90 border-b border-gray-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Piyush Maurya
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {["Home", "About", "Skills", "Projects", "Achievements", "Education", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-all duration-300 hover:scale-105 ${
                    activeSection === item.toLowerCase()
                      ? isDarkMode
                        ? "text-cyan-400 drop-shadow-sm"
                        : "text-cyan-600 drop-shadow-sm"
                      : isDarkMode
                        ? "text-gray-300 hover:text-cyan-400"
                        : "text-gray-700 hover:text-cyan-600"
                  }`}
                >
                  {item}
                </button>
              ))}

              {/* Theme Toggle Button */}
              <Button
                onClick={toggleTheme}
                variant="outline"
                size="sm"
                className={`transition-all duration-300 hover:scale-105 ${
                  isDarkMode
                    ? "border-cyan-400/60 text-cyan-400 hover:bg-cyan-600 hover:text-white bg-transparent"
                    : "border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white bg-transparent"
                }`}
              >
                {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
                <span className="ml-2">{isDarkMode ? "Light" : "Dark"}</span>
              </Button>
            </div>

            {/* Mobile Navigation Button */}
            <div className="md:hidden flex items-center space-x-4">
              {/* Mobile Theme Toggle */}
              <Button
                onClick={toggleTheme}
                variant="outline"
                size="sm"
                className={`transition-all duration-300 ${
                  isDarkMode
                    ? "border-cyan-400/60 text-cyan-400 hover:bg-cyan-600 hover:text-white bg-transparent"
                    : "border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white bg-transparent"
                }`}
              >
                {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
              </Button>

              <button
                className={isDarkMode ? "text-gray-300" : "text-gray-700"}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div
              className={`md:hidden py-4 transition-all duration-300 ${
                isDarkMode ? "border-t border-cyan-400/60" : "border-t border-gray-200"
              }`}
            >
              {["Home", "About", "Skills", "Projects", "Achievements", "Education", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`block w-full text-left py-2 transition-colors ${
                    isDarkMode ? "text-gray-300 hover:text-cyan-400" : "text-gray-700 hover:text-cyan-600"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 relative">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Text Content */}
            <div className="text-center lg:text-left space-y-8">
              <div className="space-y-6">
                <div
                  className={`inline-flex items-center space-x-2 rounded-full px-4 py-2 shadow-lg transition-all duration-300 ${
                    isDarkMode
                      ? "bg-gradient-to-r from-cyan-900/50 to-blue-900/50 border border-cyan-400/60 glow-cyan"
                      : "bg-gradient-to-r from-cyan-100 to-blue-100 border border-cyan-300"
                  }`}
                >
                  <Sparkles className={isDarkMode ? "text-cyan-400" : "text-cyan-600"} size={16} />
                  <span className={`text-sm font-medium ${isDarkMode ? "text-cyan-300" : "text-cyan-700"}`}>
                    AI/ML Specialist
                  </span>
                </div>

                <h1
                  className={`text-5xl md:text-6xl font-bold leading-tight ${isDarkMode ? "text-white" : "text-gray-900"}`}
                >
                  Hi, I'm{" "}
                  <span
                    className={`bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent ${isDarkMode ? "text-glow" : ""}`}
                  >
                    Piyush
                  </span>
                </h1>

                <p className={`text-xl md:text-2xl font-medium ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                  AI/ML Specialist • B.Tech CSE Student • Tech Innovator
                </p>

                <p
                  className={`text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
                >
                  Passionate about creating innovative AI-driven solutions that solve real-world problems in
                  sustainability, mental health, and automation. Transforming ideas into impactful technology.
                </p>
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-6">
                <Button
                  onClick={() => scrollToSection("projects")}
                  className={`px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${
                    isDarkMode
                      ? "bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white glow-cyan"
                      : "bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white"
                  }`}
                >
                  <Rocket className="mr-2" size={20} />
                  Explore My Work
                </Button>
                <Button
                  variant="outline"
                  onClick={() => scrollToSection("contact")}
                  className={`px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 bg-transparent ${
                    isDarkMode
                      ? "border-2 border-cyan-400/60 text-cyan-400 hover:bg-cyan-600 hover:text-white glow-cyan"
                      : "border-2 border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white"
                  }`}
                >
                  <Zap className="mr-2" size={20} />
                  Let's Connect
                </Button>
              </div>

              <div className="flex justify-center lg:justify-start space-x-8">
                <a
                  href="https://github.com/piyushmaurya6074"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition-all duration-300 hover:scale-110 ${
                    isDarkMode ? "text-gray-300 hover:text-cyan-400" : "text-gray-600 hover:text-cyan-600"
                  }`}
                >
                  <Github size={28} />
                </a>
                <a
                  href="https://www.linkedin.com/in/piyush--maurya/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition-all duration-300 hover:scale-110 ${
                    isDarkMode ? "text-gray-300 hover:text-cyan-400" : "text-gray-600 hover:text-cyan-600"
                  }`}
                >
                  <Linkedin size={28} />
                </a>
                <a
                  href="mailto:piyushmaurya6074@gmail.com"
                  className={`transition-all duration-300 hover:scale-110 ${
                    isDarkMode ? "text-gray-300 hover:text-cyan-400" : "text-gray-600 hover:text-cyan-600"
                  }`}
                >
                  <Mail size={28} />
                </a>
              </div>
            </div>

            {/* Right Column - Profile Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative group">
                {/* Glowing Background */}
                <div
                  className={`absolute -inset-4 rounded-3xl blur-xl transition-opacity duration-500 animate-float ${
                    isDarkMode
                      ? "bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-30 group-hover:opacity-50"
                      : "bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 opacity-40 group-hover:opacity-60"
                  }`}
                ></div>

                {/* Main Image Container */}
                <div
                  className={`relative w-56 h-72 md:w-72 md:h-88 rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 ${
                    isDarkMode
                      ? "bg-gradient-to-br from-gray-800 to-blue-900 border border-cyan-400/60 glow-cyan"
                      : "bg-gradient-to-br from-white to-blue-50 border border-gray-200"
                  }`}
                >
                  <Image
                    src="/images/piyush-photo-new.jpg"
                    alt="Piyush Maurya - AI/ML Developer"
                    width={400}
                    height={500}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    priority
                  />

                  {/* Overlay Gradient */}
                  <div
                    className={`absolute inset-0 ${
                      isDarkMode
                        ? "bg-gradient-to-t from-black/50 via-transparent to-transparent"
                        : "bg-gradient-to-t from-black/20 via-transparent to-transparent"
                    }`}
                  ></div>

                  {/* Floating Elements */}
                  <div
                    className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg animate-bounce ${
                      isDarkMode ? "glow-cyan" : ""
                    }`}
                  >
                    <Brain size={24} className="text-white" />
                  </div>
                </div>

                {/* Floating Tech Icons */}
                <div
                  className={`absolute -top-6 -left-6 w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg animate-float ${
                    isDarkMode ? "glow-cyan" : ""
                  }`}
                >
                  <Code size={20} className="text-white" />
                </div>

                <div
                  className={`absolute -bottom-6 -right-6 w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg animate-float animation-delay-2000 ${
                    isDarkMode ? "glow-purple" : ""
                  }`}
                >
                  <Lightbulb size={20} className="text-white" />
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown size={32} className={isDarkMode ? "text-gray-300" : "text-gray-600"} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className={`py-20 px-4 sm:px-6 lg:px-8 backdrop-blur-md transition-all duration-300 ${
          isDarkMode ? "bg-gray-800/90" : "bg-white/80"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <h2
            className={`text-4xl font-bold mb-16 text-center transition-all duration-300 ${
              isDarkMode ? "text-white text-glow" : "text-gray-900"
            }`}
          >
            About Me
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card
              className={`lg:col-span-2 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] ${
                isDarkMode ? "bg-gray-800/95 border-cyan-400/60 glow-cyan" : "bg-white/90 border-gray-200"
              }`}
            >
              <CardHeader>
                <CardTitle
                  className={`flex items-center space-x-3 text-2xl ${isDarkMode ? "text-white" : "text-gray-900"}`}
                >
                  <Target className={isDarkMode ? "text-cyan-400" : "text-cyan-600"} size={28} />
                  <span>My Mission</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className={`leading-relaxed mb-6 text-lg ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                  I'm Piyush Maurya, a passionate and driven B.Tech (CSE) student specializing in Artificial
                  Intelligence and Machine Learning. I love building tech solutions that solve real-world
                  problems—especially in areas related to sustainability, mental health, and automation.
                </p>
                <p className={`leading-relaxed text-lg ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                  With hands-on project experience and a continuous learning mindset, I'm preparing for a future in AI
                  product development and innovation. My goal is to create technology that makes a meaningful impact on
                  society while pushing the boundaries of what's possible with AI and machine learning.
                </p>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card
                className={`shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] ${
                  isDarkMode
                    ? "bg-gradient-to-br from-cyan-900/80 to-blue-900/80 border-cyan-400/60 glow-cyan"
                    : "bg-gradient-to-br from-cyan-50 to-blue-50 border-cyan-200"
                }`}
              >
                <CardHeader>
                  <CardTitle className={`flex items-center space-x-2 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                    <Lightbulb className={isDarkMode ? "text-yellow-400" : "text-yellow-600"} size={24} />
                    <span>Interests</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className={`space-y-3 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                    <li className="flex items-center space-x-2">
                      <span className={`w-2 h-2 rounded-full ${isDarkMode ? "bg-cyan-400" : "bg-cyan-500"}`}></span>
                      <span>Sustainable Technology</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className={`w-2 h-2 rounded-full ${isDarkMode ? "bg-blue-400" : "bg-blue-500"}`}></span>
                      <span>Mental Health AI</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className={`w-2 h-2 rounded-full ${isDarkMode ? "bg-purple-400" : "bg-purple-500"}`}></span>
                      <span>Environmental Monitoring</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className={`w-2 h-2 rounded-full ${isDarkMode ? "bg-green-400" : "bg-green-500"}`}></span>
                      <span>Startup Development</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className={`w-2 h-2 rounded-full ${isDarkMode ? "bg-pink-400" : "bg-pink-500"}`}></span>
                      <span>Student Innovation</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card
                className={`shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] ${
                  isDarkMode
                    ? "bg-gradient-to-br from-green-900/80 to-emerald-900/80 border-green-400/60"
                    : "bg-gradient-to-br from-green-50 to-emerald-50 border-green-200"
                }`}
              >
                <CardHeader>
                  <CardTitle className={`flex items-center space-x-2 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                    <Users className={isDarkMode ? "text-green-400" : "text-green-600"} size={24} />
                    <span>Leadership</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className={`text-sm leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                    Passionate about entrepreneurship and innovation in technology. Actively exploring startup
                    opportunities and building networks within the tech community. Committed to fitness and maintaining
                    a disciplined lifestyle for personal and professional growth.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className={`py-20 px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
          isDarkMode
            ? "bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900"
            : "bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <h2
            className={`text-4xl font-bold mb-16 text-center transition-all duration-300 ${
              isDarkMode ? "text-white text-glow" : "text-gray-900"
            }`}
          >
            Technical Expertise
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card
              className={`shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] group ${
                isDarkMode
                  ? "bg-gradient-to-br from-cyan-900/80 to-blue-900/80 border-cyan-400/60 glow-cyan"
                  : "bg-gradient-to-br from-cyan-50 to-blue-50 border-cyan-200"
              }`}
            >
              <CardHeader>
                <CardTitle className={`flex items-center space-x-3 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                  <Code
                    className={`group-hover:rotate-12 transition-transform ${isDarkMode ? "text-cyan-400" : "text-cyan-600"}`}
                    size={24}
                  />
                  <span>Programming Languages</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {skills.languages.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className={`hover:scale-105 transition-all duration-300 cursor-pointer ${
                        isDarkMode
                          ? "bg-cyan-800/80 text-cyan-300 border-cyan-400/60 hover:bg-cyan-700/50"
                          : "bg-cyan-100 text-cyan-700 border-cyan-300 hover:bg-cyan-200"
                      }`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card
              className={`shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] group ${
                isDarkMode
                  ? "bg-gradient-to-br from-blue-900/80 to-purple-900/80 border-blue-400/60 glow-purple"
                  : "bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200"
              }`}
            >
              <CardHeader>
                <CardTitle className={`flex items-center space-x-3 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                  <Brain
                    className={`group-hover:animate-pulse ${isDarkMode ? "text-purple-400" : "text-purple-600"}`}
                    size={24}
                  />
                  <span>Frameworks & Libraries</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {skills.frameworks.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className={`hover:scale-105 transition-all duration-300 cursor-pointer ${
                        isDarkMode
                          ? "bg-purple-800/80 text-purple-300 border-purple-400/60 hover:bg-purple-700/50"
                          : "bg-purple-100 text-purple-700 border-purple-300 hover:bg-purple-200"
                      }`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card
              className={`shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] group ${
                isDarkMode
                  ? "bg-gradient-to-br from-green-900/80 to-cyan-900/80 border-green-400/60"
                  : "bg-gradient-to-br from-green-50 to-cyan-50 border-green-200"
              }`}
            >
              <CardHeader>
                <CardTitle className={`flex items-center space-x-3 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                  <TrendingUp
                    className={`group-hover:animate-bounce ${isDarkMode ? "text-green-400" : "text-green-600"}`}
                    size={24}
                  />
                  <span>Databases</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {skills.databases.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className={`hover:scale-105 transition-all duration-300 cursor-pointer ${
                        isDarkMode
                          ? "bg-green-800/80 text-green-300 border-green-400/60 hover:bg-green-700/50"
                          : "bg-green-100 text-green-700 border-green-300 hover:bg-green-200"
                      }`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card
              className={`shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] group ${
                isDarkMode
                  ? "bg-gradient-to-br from-pink-900/80 to-purple-900/80 border-pink-400/60"
                  : "bg-gradient-to-br from-pink-50 to-purple-50 border-pink-200"
              }`}
            >
              <CardHeader>
                <CardTitle className={`flex items-center space-x-3 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                  <Star
                    className={`group-hover:rotate-12 transition-transform ${isDarkMode ? "text-pink-400" : "text-pink-600"}`}
                    size={24}
                  />
                  <span>Tools & Platforms</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {skills.tools.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className={`hover:scale-105 transition-all duration-300 cursor-pointer ${
                        isDarkMode
                          ? "bg-pink-800/80 text-pink-300 border-pink-400/60 hover:bg-pink-700/50"
                          : "bg-pink-100 text-pink-700 border-pink-300 hover:bg-pink-200"
                      }`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card
              className={`shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] group md:col-span-2 ${
                isDarkMode
                  ? "bg-gradient-to-br from-orange-900/80 to-red-900/80 border-orange-400/60"
                  : "bg-gradient-to-br from-orange-50 to-red-50 border-orange-200"
              }`}
            >
              <CardHeader>
                <CardTitle className={`flex items-center space-x-3 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                  <Zap
                    className={`group-hover:animate-pulse ${isDarkMode ? "text-orange-400" : "text-orange-600"}`}
                    size={24}
                  />
                  <span>Core Concepts & Specializations</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {skills.concepts.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className={`hover:scale-105 transition-all duration-300 cursor-pointer ${
                        isDarkMode
                          ? "bg-orange-800/80 text-orange-300 border-orange-400/60 hover:bg-orange-700/50"
                          : "bg-orange-100 text-orange-700 border-orange-300 hover:bg-orange-200"
                      }`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className={`py-20 px-4 sm:px-6 lg:px-8 backdrop-blur-md transition-all duration-300 ${
          isDarkMode ? "bg-gray-800/90" : "bg-white/80"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <h2
            className={`text-4xl font-bold mb-16 text-center transition-all duration-300 ${
              isDarkMode ? "text-white text-glow" : "text-gray-900"
            }`}
          >
            Featured Projects
          </h2>

          <div className="grid lg:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] overflow-hidden ${
                  isDarkMode ? "bg-gray-800/95 border-cyan-400/60 glow-cyan" : "bg-white/90 border-gray-200"
                }`}
              >
                <CardHeader className="relative">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <CardTitle
                        className={`text-2xl mb-2 hover:text-cyan-400 transition-colors ${
                          isDarkMode ? "text-white" : "text-gray-900 hover:text-cyan-600"
                        }`}
                      >
                        {project.title}
                      </CardTitle>
                      <CardDescription
                        className={`font-semibold text-lg ${isDarkMode ? "text-cyan-400" : "text-cyan-600"}`}
                      >
                        {project.subtitle}
                      </CardDescription>
                    </div>
                    <Badge
                      variant="outline"
                      className={`shadow-lg ${
                        project.status === "Live"
                          ? isDarkMode
                            ? "border-green-400 text-green-300 bg-green-900/30"
                            : "border-green-500 text-green-600 bg-green-50"
                          : project.status === "Award Winner"
                            ? (
                                isDarkMode
                                  ? "border-yellow-400 text-yellow-300 bg-yellow-900/30"
                                  : "border-yellow-500 text-yellow-600 bg-yellow-50"
                              )
                            : project.status === "In Development"
                              ? isDarkMode
                                ? "border-cyan-400 text-cyan-300 bg-cyan-900/30"
                                : "border-cyan-500 text-cyan-600 bg-cyan-50"
                              : isDarkMode
                                ? "border-purple-400 text-purple-300 bg-purple-900/30"
                                : "border-purple-500 text-purple-600 bg-purple-50"
                      }`}
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <Badge
                    variant="secondary"
                    className={`w-fit ${isDarkMode ? "bg-gray-700/50 text-gray-300" : "bg-gray-100 text-gray-700"}`}
                  >
                    {project.category}
                  </Badge>
                </CardHeader>

                <CardContent>
                  <p className={`mb-6 leading-relaxed text-lg ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h4 className={`font-semibold mb-3 text-lg ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                      Key Highlights:
                    </h4>
                    <ul className={`space-y-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <span className={`mt-1 font-bold text-lg ${isDarkMode ? "text-cyan-400" : "text-cyan-600"}`}>
                            •
                          </span>
                          <span className="leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className={`hover:scale-105 transition-all duration-300 cursor-pointer ${
                          isDarkMode
                            ? "bg-gradient-to-r from-cyan-900/50 to-blue-900/50 text-cyan-300 border-cyan-400/60"
                            : "bg-gradient-to-r from-cyan-50 to-blue-50 text-cyan-700 border-cyan-200"
                        }`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  {project.link && (
                    <div className="mt-4">
                      <Button
                        asChild
                        size="sm"
                        className={`transition-all duration-300 hover:scale-105 ${
                          isDarkMode
                            ? "bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white"
                            : "bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white"
                        }`}
                      >
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          View Live Site
                        </a>
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section
        id="achievements"
        className={`py-20 px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
          isDarkMode
            ? "bg-gradient-to-br from-purple-900 via-blue-800 to-blue-900"
            : "bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <h2
            className={`text-4xl font-bold mb-16 text-center transition-all duration-300 ${
              isDarkMode ? "text-white text-glow" : "text-gray-900"
            }`}
          >
            Achievements & Recognition
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card
              className={`shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] group ${
                isDarkMode
                  ? "bg-gradient-to-br from-yellow-900/80 to-orange-900/80 border-yellow-400/60"
                  : "bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200"
              }`}
            >
              <CardHeader>
                <CardTitle
                  className={`flex items-center space-x-4 text-2xl ${isDarkMode ? "text-white" : "text-gray-900"}`}
                >
                  <Trophy
                    className={`group-hover:animate-bounce ${isDarkMode ? "text-yellow-400" : "text-yellow-600"}`}
                    size={32}
                  />
                  <span>🥇 ISTE National Convention Winner</span>
                </CardTitle>
                <CardDescription
                  className={`font-semibold text-lg ${isDarkMode ? "text-yellow-300" : "text-yellow-700"}`}
                >
                  1st Prize & Gold Medal - Eco Bins Project
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className={`leading-relaxed text-lg ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                  Secured first place and gold medal at the ISTE National Convention for the innovative Eco Bins
                  sustainable waste management project, demonstrating exceptional problem-solving skills and
                  environmental consciousness.
                </p>
              </CardContent>
            </Card>

            <Card
              className={`shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] group ${
                isDarkMode
                  ? "bg-gradient-to-br from-green-900/80 to-emerald-900/80 border-green-400/60"
                  : "bg-gradient-to-br from-green-50 to-emerald-50 border-green-200"
              }`}
            >
              <CardHeader>
                <CardTitle
                  className={`flex items-center space-x-4 text-2xl ${isDarkMode ? "text-white" : "text-gray-900"}`}
                >
                  <Award
                    className={`group-hover:animate-pulse ${isDarkMode ? "text-green-400" : "text-green-600"}`}
                    size={32}
                  />
                  <span>🌿 Sustainability Finalist</span>
                </CardTitle>
                <CardDescription
                  className={`font-semibold text-lg ${isDarkMode ? "text-green-300" : "text-green-700"}`}
                >
                  Sustainable Development Model Competition
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className={`leading-relaxed text-lg ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                  Reached finalist stage in the Sustainable Development Model Competition, showcasing innovative
                  approaches to environmental challenges and sustainable technology solutions.
                </p>
              </CardContent>
            </Card>

            <Card
              className={`shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] group md:col-span-2 ${
                isDarkMode
                  ? "bg-gradient-to-br from-cyan-900/80 to-blue-900/80 border-cyan-400/60 glow-cyan"
                  : "bg-gradient-to-br from-cyan-50 to-blue-50 border-cyan-200"
              }`}
            >
              <CardHeader>
                <CardTitle
                  className={`flex items-center space-x-4 text-2xl ${isDarkMode ? "text-white" : "text-gray-900"}`}
                >
                  <GraduationCap
                    className={`group-hover:rotate-12 transition-transform ${isDarkMode ? "text-cyan-400" : "text-cyan-600"}`}
                    size={28}
                  />
                  <span>Professional Certifications</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    "🧠 Simplilearn AI/ML Certificate",
                    "☕ Java Programming",
                    "📊 Data Science Fundamentals",
                    "🗄️ Big Data Analytics",
                    "📈 Data Visualization (Tableau)",
                    "💡 Innovation & Ideathon",
                  ].map((cert) => (
                    <div
                      key={cert}
                      className={`flex items-center space-x-2 p-3 rounded-lg hover:scale-105 transition-all duration-300 shadow-md ${
                        isDarkMode
                          ? "bg-gradient-to-r from-cyan-900/50 to-blue-900/50 border border-cyan-400/60"
                          : "bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200"
                      }`}
                    >
                      <span className={`text-sm font-medium ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                        {cert}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section
        id="education"
        className={`py-20 px-4 sm:px-6 lg:px-8 backdrop-blur-md transition-all duration-300 ${
          isDarkMode ? "bg-gray-800/90" : "bg-white/80"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <h2
            className={`text-4xl font-bold mb-16 text-center transition-all duration-300 ${
              isDarkMode ? "text-white text-glow" : "text-gray-900"
            }`}
          >
            Educational Journey
          </h2>

          <div className="space-y-8">
            <Card
              className={`shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] ${
                isDarkMode
                  ? "bg-gradient-to-br from-blue-900/80 to-purple-900/80 border-blue-400/60 glow-purple"
                  : "bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200"
              }`}
            >
              <CardHeader>
                <CardTitle className={`text-3xl mb-2 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                  Bachelor of Technology in Computer Science & Engineering
                </CardTitle>
                <CardDescription className={`text-xl font-semibold ${isDarkMode ? "text-blue-300" : "text-blue-700"}`}>
                  Specialization: Artificial Intelligence & Machine Learning
                </CardDescription>
                <div className="flex flex-wrap gap-4 mt-4">
                  <p className={`text-lg ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                    Lamrin Tech Skills University, Ropar, Punjab, India
                  </p>
                  <p className={`text-lg ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                    Expected Graduation: July 2027
                  </p>
                  <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-lg px-4 py-1">
                    Currently in 2nd Year
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className={`font-semibold mb-4 text-xl ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                      Core Coursework:
                    </h4>
                    <div className="space-y-3">
                      {[
                        "Data Structures and Algorithms",
                        "Artificial Intelligence",
                        "Machine Learning",
                        "Database Management Systems",
                        "Software Engineering",
                        "Computer Networks",
                      ].map((course) => (
                        <div key={course} className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>
                          <span className={`text-lg ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>{course}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className={`font-semibold mb-4 text-xl ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                      Academic Activities:
                    </h4>
                    <div className="space-y-3">
                      {[
                        "Technical competitions participation",
                        "Research project development",
                        "Innovation and startup initiatives",
                        "Peer collaboration and mentoring",
                      ].map((activity) => (
                        <div key={activity} className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                          <span className={`text-lg ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                            {activity}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className={`py-20 px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
          isDarkMode
            ? "bg-gradient-to-br from-blue-900 via-purple-800 to-purple-900"
            : "bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50"
        }`}
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2
            className={`text-4xl font-bold mb-8 transition-all duration-300 ${
              isDarkMode ? "text-white text-glow" : "text-gray-900"
            }`}
          >
            Let's Create Something Amazing Together
          </h2>

          <p
            className={`text-xl mb-16 max-w-4xl mx-auto leading-relaxed ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            I'm always excited to discuss new opportunities, innovative projects, or collaborate on meaningful
            technology solutions. Whether you're looking for an AI/ML developer, have a startup idea, or just want to
            chat about technology and innovation, I'd love to hear from you!
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card
              className={`shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] group ${
                isDarkMode
                  ? "bg-gradient-to-br from-cyan-900/80 to-blue-900/80 border-cyan-400/60 glow-cyan"
                  : "bg-gradient-to-br from-cyan-50 to-blue-50 border-cyan-200"
              }`}
            >
              <CardContent className="pt-8 text-center">
                <Mail
                  className={`mx-auto mb-4 group-hover:animate-bounce ${isDarkMode ? "text-cyan-400" : "text-cyan-600"}`}
                  size={32}
                />
                <h3 className={`font-semibold mb-3 text-lg ${isDarkMode ? "text-white" : "text-gray-900"}`}>Email</h3>
                <a
                  href="mailto:piyushmaurya6074@gmail.com"
                  className={`transition-colors font-medium text-lg ${
                    isDarkMode ? "text-cyan-400 hover:text-cyan-300" : "text-cyan-600 hover:text-cyan-700"
                  }`}
                >
                  piyushmaurya6074@gmail.com
                </a>
              </CardContent>
            </Card>

            <Card
              className={`shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] group ${
                isDarkMode
                  ? "bg-gradient-to-br from-purple-900/80 to-pink-900/80 border-purple-400/60 glow-purple"
                  : "bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200"
              }`}
            >
              <CardContent className="pt-8 text-center">
                <MapPin
                  className={`mx-auto mb-4 group-hover:animate-bounce ${isDarkMode ? "text-purple-400" : "text-purple-600"}`}
                  size={32}
                />
                <h3 className={`font-semibold mb-3 text-lg ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                  Location
                </h3>
                <p className={`font-medium text-lg ${isDarkMode ? "text-purple-400" : "text-purple-600"}`}>
                  Agra, Uttar Pradesh, India
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-center space-x-8">
            <Button
              asChild
              className={`px-10 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${
                isDarkMode
                  ? "bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white glow-cyan"
                  : "bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white"
              }`}
            >
              <a href="https://github.com/piyushmaurya6074" target="_blank" rel="noopener noreferrer">
                <Github className="mr-3" size={24} />
                GitHub
              </a>
            </Button>
            <Button
              asChild
              className={`px-10 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${
                isDarkMode
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white glow-purple"
                  : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
              }`}
            >
              <a href="https://www.linkedin.com/in/piyush--maurya/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-3" size={24} />
                LinkedIn
              </a>
            </Button>
            <Button
              asChild
              className={`px-10 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${
                isDarkMode
                  ? "bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white"
                  : "bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white"
              }`}
            >
              <a href="mailto:piyushmaurya6074@gmail.com">
                <Mail className="mr-3" size={24} />
                Email Me
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`py-12 px-4 sm:px-6 lg:px-8 backdrop-blur-sm transition-all duration-300 ${
          isDarkMode ? "bg-gray-900/90 border-t border-cyan-400/60" : "bg-white/90 border-t border-gray-200"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <p className={`text-lg ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                © 2025 Piyush Maurya. Crafted with passion and precision.
              </p>
              <p className={isDarkMode ? "text-gray-400" : "text-gray-600"}>Building the future with AI & Innovation</p>
            </div>
            <div className="flex space-x-8">
              <a
                href="#home"
                className={`transition-colors text-lg ${
                  isDarkMode ? "text-gray-300 hover:text-cyan-400" : "text-gray-600 hover:text-cyan-600"
                }`}
              >
                Home
              </a>
              <a
                href="#about"
                className={`transition-colors text-lg ${
                  isDarkMode ? "text-gray-300 hover:text-cyan-400" : "text-gray-600 hover:text-cyan-600"
                }`}
              >
                About
              </a>
              <a
                href="#projects"
                className={`transition-colors text-lg ${
                  isDarkMode ? "text-gray-300 hover:text-cyan-400" : "text-gray-600 hover:text-cyan-600"
                }`}
              >
                Projects
              </a>
              <a
                href="#contact"
                className={`transition-colors text-lg ${
                  isDarkMode ? "text-gray-300 hover:text-cyan-400" : "text-gray-600 hover:text-cyan-600"
                }`}
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
