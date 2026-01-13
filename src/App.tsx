import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Code,
  GraduationCap,
  Award,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import logo from "./assets/logo.png";
import jobHire1 from "./assets/jobhire-login.png";
import jobHire2 from "./assets/jobhire2.png";
import jobHire3 from "./assets/jobhire3.png";
import jobHire4 from "./assets/jobhire4.png";
import zwallet from "./assets/zwallet.png";
import zwallet1 from "./assets/zwallet1.png";
import zwallet2 from "./assets/zwallet2.png";
import zwallet3 from "./assets/zwallet3.png";
import olahx from "./assets/olahx.png";
import stayease from "./assets/stayease.png";
import filo from "./assets/filo.jpeg";
import filo1 from "./assets/filo1.jpeg";
import filo2 from "./assets/filo2.jpeg";
import filo3 from "./assets/filo3.jpeg";

export default function PortfolioResume() {
  const [activeTab, setActiveTab] = useState("about");

  const profile = {
    name: "Maulana",
    title: "Software Engineer",
    email: "pekakola8@gmail.com",
    phone: "+6282267164263",
    location: "Indonesia",
    github: "github.com/mrfachri19",
    linkedin: "www.linkedin.com/in/maulmau19",
    bio: "With nearly 5 years of hands-on experience as a software developer, I have delivered scalable and reliable applications across diverse industries, including finance, F&B, HCIS, e-commerce, call center systems, healthcare, and corporate websites.I specialize in modern frontend frameworks such as React, Next.js, Angular, and Vue.js, combined with backend technologies including Express.js, Laravel, and Golang. I am proficient in PostgreSQL, MySQL, and MongoDB, and experienced in deploying and maintaining applications on VPS servers using Nginx as well as traditional web hosting platforms.",
  };

  const skills = [
    {
      category: "Frontend",
      items: [
        "React",
        "Next",
        "Angular",
        "React Native",
        "Flutter",
        "Ionic",
        "Laravel",
        "Vue.js",
      ],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "Laravel", "Golang"],
    },
    { category: "Database", items: ["PostgreSQL", "MySQL", "MongoDB"] },
  ];

  const education = [
    {
      degree: "Bachelor",
      school: "Andalas University",
      period: "2015 - 2020",
      description: "Focused on build web company profile my department.",
    },
  ];

  const projects = [
    {
      name: "Job Hire",
      tech: "React, Express, Mysql",
      description:
        "Job Hire is a web-based recruitment and workforce management platform built using React for the frontend, Express.js for the backend, and MySQL as the primary database. The platform is designed to connect recruiters and workers through a structured and efficient hiring process.The application supports two main user roles: Recruiter and Worker, each with dedicated features and workflows. Recruiters can post job listings, manage applicants, and track recruitment progress, while workers can browse job opportunities, submit applications, and manage their profiles.The system implements RESTful APIs, role-based access control, and secure data handling. Job Hire is built with scalability and maintainability in mind, following clean code practices and a modular architecture. The project demonstrates full-stack development skills, including frontend UI development, backend API design, database management, and system integration. github: https://github.com/mrfachri19/job-hire",
      thumbnail: jobHire1,
      images: [jobHire1, jobHire2, jobHire3, jobHire4],
    },
    {
      name: "ZWallet",
      tech: "Next.js, Express, Mysql",
      description:
        "WalletApp is a financial management and digital wallet application built using Next.js, Express.js, and MySQL. The application enables users to securely send and receive funds, manage their wallet balance, and view detailed transaction histories in real time. The system is designed with a user-friendly interface and a structured backend architecture, implementing RESTful APIs to handle financial transactions efficiently and securely. WalletApp demonstrates full-stack development capabilities, including frontend development with Next.js, backend API development with Express.js, and relational database management using MySQL. GitHub: https://github.com/mrfachri19/Zwallet",
      thumbnail: zwallet,
      images: [zwallet, zwallet1, zwallet2, zwallet3],
    },
    {
      name: "Market Place Olahx",
      tech: "React, Typscript",
      description:
        "Market Place Olahx is a responsive marketplace web application developed using React and TypeScript. The application is designed to showcase products and projects through a clean, modern, and mobile-friendly user interface. The project focuses on frontend architecture, component reusability, and responsive design to ensure a consistent user experience across desktop and mobile devices. It demonstrates the use of TypeScript for better type safety, maintainability, and scalable frontend development. Tech Stack: React, TypeScript GitHub: https://github.com/mrfachri19/marketplace Live Demo: https://marketplace-one-black.vercel.app/",
      thumbnail: olahx,
      images: [olahx],
    },
    {
      name: "StayEase",
      tech: "React, Typscript",
      description:
        "StayEase is a responsive web application developed using React and TypeScript, designed to showcase accommodation or property listings through a clean and modern user interface. The application focuses on delivering a smooth and consistent user experience across desktop and mobile devices. The project emphasizes frontend best practices such as component reusability, structured layout design, and responsive UI implementation. TypeScript is used to improve code quality, maintainability, and scalability of the application. Tech Stack: React, TypeScript GitHub: https://github.com/mrfachri19/stayease Live Demo: https://stayease-zeta.vercel.app/",
      thumbnail: stayease,
      images: [stayease],
    },
    {
      name: "Filo apps",
      tech: "Filutter, laravel, Mysql",
      description:
        "Filo Apps is a mobile application developed using Flutter with a backend system built on Laravel and MySQL. The application is designed to deliver a smooth and responsive mobile user experience, supported by a reliable and structured backend API. The project demonstrates end-to-end application development, covering mobile UI implementation, backend API integration, and relational database management. Laravel is used to handle business logic and RESTful API services, while MySQL manages structured application data. Filo Apps highlights the integration between mobile and backend systems in a scalable and maintainable architecture. Tech Stack: Flutter, Laravel, MySQL",
      thumbnail: filo1,
      images: [filo, filo1, filo2, filo3],
    },
  ];

  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 mb-6 border border-white/20">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-32 h-32 rounded-full overflow-hidden bg-white flex items-center justify-center">
              <img
                src={logo}
                alt="Profile Logo"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl font-bold text-white mb-2">
                {profile.name}
              </h1>
              <p className="text-xl text-purple-300 mb-4">{profile.title}</p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start text-gray-300">
                <div className="flex items-center gap-2">
                  <Mail size={18} />
                  <span className="text-sm">{profile.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={18} />
                  <span className="text-sm">{profile.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={18} />
                  <span className="text-sm">{profile.location}</span>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <a
                href={`https://${profile.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all"
              >
                <Github className="text-white" size={24} />
              </a>
              <a
                href={`https://${profile.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all"
              >
                <Linkedin className="text-white" size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2 scrollbar-hide">
          {["about", "education", "skills", "projects"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-lg font-medium transition-all whitespace-nowrap shrink-0 ${
                activeTab === tab
                  ? "bg-purple-600 text-white shadow-lg"
                  : "bg-white/10 text-gray-300 hover:bg-white/20"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/20">
          {activeTab === "about" && (
            <div className="text-gray-200">
              <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                <Code className="text-purple-400" />
                About Me
              </h2>
              <p className="text-lg leading-relaxed">{profile.bio}</p>
            </div>
          )}

          {activeTab === "education" && (
            <div>
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <GraduationCap className="text-purple-400" />
                Education
              </h2>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="border-l-4 border-purple-500 pl-6 py-2"
                  >
                    <h3 className="text-xl font-bold text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-purple-300 mb-2">
                      {edu.school} • {edu.period}
                    </p>
                    <p className="text-gray-300">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "skills" && (
            <div>
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Award className="text-purple-400" />
                Skills
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {skills.map((skillGroup, index) => (
                  <div
                    key={index}
                    className="bg-white/5 rounded-lg p-6 border border-white/10"
                  >
                    <h3 className="text-xl font-bold text-purple-300 mb-4">
                      {skillGroup.category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-purple-600/30 text-white rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "projects" && (
            <div>
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Code className="text-purple-400" />
                Projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="bg-white/5 rounded-lg overflow-hidden border border-white/10 hover:bg-white/10 transition-all cursor-pointer group"
                    onClick={() => {
                      setSelectedProject(project);
                      setCurrentImageIndex(0);
                    }}
                  >
                    <div className="relative overflow-hidden aspect-video">
                      <img
                        src={project.thumbnail}
                        alt={project.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="text-xl font-bold text-white">
                          {project.name}
                        </h3>
                      </div>
                    </div>
                    <div className="p-5">
                      <p className="text-purple-300 text-sm mb-3 font-medium">
                        {project.tech}
                      </p>
                      <p className="text-gray-300 text-sm leading-relaxed mb-3">
                        {project.description}
                      </p>
                      <p className="text-purple-400 text-sm font-medium">
                        Click to view gallery →
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Image Gallery Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="bg-linear-to-br from-slate-900 to-purple-900 rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl border border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="p-6 border-b border-white/10 flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {selectedProject.name}
                  </h3>
                  <p className="text-purple-300 text-sm mt-1">
                    {selectedProject.tech}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 hover:bg-white/10 rounded-full transition-all"
                >
                  <X className="text-white" size={24} />
                </button>
              </div>

              {/* Main Image */}
              <div className="relative bg-black/50">
                <img
                  src={selectedProject.images[currentImageIndex]}
                  alt={`${selectedProject.name} - Image ${
                    currentImageIndex + 1
                  }`}
                  className="w-full h-[50vh] md:h-125 object-contain"
                />

                {/* Navigation Arrows */}
                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      onClick={() =>
                        setCurrentImageIndex((prev) =>
                          prev === 0
                            ? selectedProject.images.length - 1
                            : prev - 1
                        )
                      }
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 rounded-full transition-all"
                    >
                      <ChevronLeft className="text-white" size={24} />
                    </button>
                    <button
                      onClick={() =>
                        setCurrentImageIndex((prev) =>
                          prev === selectedProject.images.length - 1
                            ? 0
                            : prev + 1
                        )
                      }
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 rounded-full transition-all"
                    >
                      <ChevronRight className="text-white" size={24} />
                    </button>
                  </>
                )}

                {/* Image Counter */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/70 rounded-full text-white text-sm">
                  {currentImageIndex + 1} / {selectedProject.images.length}
                </div>
              </div>

              {/* Thumbnail Gallery */}
              <div className="p-4 md:p-6 overflow-x-auto">
                <div className="flex gap-2 md:gap-3 min-w-max">
                  {selectedProject.images.map((image, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden border-2 transition-all ${
                        currentImageIndex === idx
                          ? "border-purple-500 scale-105"
                          : "border-white/20 hover:border-white/40"
                      }`}
                    >
                      <img
                        src={image}
                        alt={`Thumbnail ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div className="px-4 md:px-6 pb-4 md:pb-6">
                <p className="text-gray-300 text-sm md:text-base">
                  {selectedProject.description}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="text-center mt-8 text-gray-400">
          <p>© 2024 {profile.name}. Built with React & TypeScript</p>
        </div>
      </div>
    </div>
  );
}
