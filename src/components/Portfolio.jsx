import React, { useState, useEffect } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  Server,
  Database,
  Code,
  Layout,
  Terminal,
  ExternalLink,
  ChevronDown,
  ShoppingBag,
  Menu,
  X,
  Play
} from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-gray-300 font-sans selection:bg-lime-400 selection:text-black overflow-x-hidden">

      {/* --- Navigation --- */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={(e) => scrollToSection(e, '#home')}>
              <Terminal className="h-8 w-8 text-lime-400" />
              <span className="font-bold text-xl tracking-tighter text-white">
                DEV<span className="text-lime-400">.</span>PORTFOLIO
              </span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-sm uppercase tracking-widest font-medium hover:text-lime-400 transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white hover:text-lime-400 transition-colors">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-zinc-900 border-b border-zinc-800 absolute w-full">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="block px-3 py-4 text-base font-medium text-white hover:text-lime-400 hover:bg-zinc-800 rounded-md transition-all"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* --- Hero Section --- */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-lime-400/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-900/20 rounded-full blur-[120px]"></div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(50,50,50,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(50,50,50,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-lime-400/30 bg-lime-400/5 text-lime-400 mb-8 animate-fade-in-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-500"></span>
            </span>
            Available for Hire
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight mb-6">
            FULL STACK <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-300 to-emerald-500">
              DEVELOPER
            </span>
          </h1>

          <p className="max-w-2xl text-lg md:text-xl text-zinc-400 mb-10 leading-relaxed">
            I build scalable, secure, and modern web solutions using <span className="text-white font-semibold">Java Spring Boot</span> and <span className="text-white font-semibold">React</span>. Specialized in creating high-performance e-commerce platforms and enterprise applications.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#projects"
              onClick={(e) => scrollToSection(e, '#projects')}
              className="px-8 py-4 bg-lime-400 text-black font-bold rounded hover:bg-lime-300 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Code size={20} />
              View My Work
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 border border-zinc-700 text-white font-bold rounded hover:border-lime-400 hover:text-lime-400 transition-all bg-black/50 backdrop-blur-sm flex items-center justify-center gap-2"
            >
              <Github size={20} />
              GitHub Profile
            </a>
          </div>

          <div className="absolute bottom-10 animate-bounce cursor-pointer" onClick={(e) => scrollToSection(e, '#skills')}>
            <ChevronDown className="text-zinc-500 hover:text-lime-400 transition-colors" size={32} />
          </div>
        </div>
      </section>

      {/* --- Skills Section --- */}
      <section id="skills" className="py-24 bg-zinc-950 relative border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical <span className="text-lime-400">Arsenal</span></h2>
            <div className="w-20 h-1 bg-lime-500 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Backend Card */}
            <div className="group p-8 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-lime-500/50 transition-all duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center mb-6 group-hover:bg-lime-400/20 transition-colors">
                <Server className="text-lime-400" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Backend Development</h3>
              <p className="text-zinc-400 mb-6 text-sm">Robust server-side architecture focusing on scalability and security.</p>
              <ul className="space-y-2">
                {['Java Core', 'Spring Boot', 'Microservices', 'REST APIs', 'Maven'].map(skill => (
                  <li key={skill} className="flex items-center text-zinc-300 text-sm">
                    <span className="w-1.5 h-1.5 bg-lime-400 rounded-full mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            {/* Frontend Card */}
            <div className="group p-8 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-lime-500/50 transition-all duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center mb-6 group-hover:bg-lime-400/20 transition-colors">
                <Layout className="text-lime-400" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Frontend Development</h3>
              <p className="text-zinc-400 mb-6 text-sm">Creating responsive, modern user interfaces with smooth interactions.</p>
              <ul className="space-y-2">
                {['React.js', 'HTML5 / CSS3', 'Tailwind CSS', 'JavaScript (ES6+)', 'Responsive Design'].map(skill => (
                  <li key={skill} className="flex items-center text-zinc-300 text-sm">
                    <span className="w-1.5 h-1.5 bg-lime-400 rounded-full mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            {/* Database & Tools Card */}
            <div className="group p-8 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-lime-500/50 transition-all duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center mb-6 group-hover:bg-lime-400/20 transition-colors">
                <Database className="text-lime-400" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Data & Tools</h3>
              <p className="text-zinc-400 mb-6 text-sm">Efficient data management and professional development workflow.</p>
              <ul className="space-y-2">
                {['MySQL', 'Git & GitHub', 'Postman', 'VS Code', 'IntelliJ IDEA'].map(skill => (
                  <li key={skill} className="flex items-center text-zinc-300 text-sm">
                    <span className="w-1.5 h-1.5 bg-lime-400 rounded-full mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* --- Projects Section --- */}
      <section id="projects" className="py-24 bg-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured <span className="text-lime-400">Projects</span></h2>
              <div className="w-20 h-1 bg-lime-500 rounded-full"></div>
            </div>
            <a href="https://github.com" className="text-zinc-400 hover:text-white flex items-center gap-2 transition-colors">
              View all projects on GitHub <ExternalLink size={16} />
            </a>
          </div>

          {/* Featured Project: BSTORE */}
          <div className="rounded-3xl bg-zinc-900 border border-zinc-800 overflow-hidden shadow-2xl shadow-lime-900/10">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Project Preview - NOW WITH IMAGE AND VIDEO SUPPORT */}
              <div className="bg-zinc-800 p-8 flex items-center justify-center relative min-h-[400px]">

                {/* Simulated Laptop/Browser Window */}
                <div className="w-full max-w-md bg-white rounded-xl shadow-2xl overflow-hidden transform transition-transform hover:scale-[1.02] duration-500">
                  {/* Browser Header */}
                  <div className="bg-zinc-100 px-4 py-3 border-b border-zinc-200 flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    <div className="ml-4 bg-white px-3 py-1 rounded text-xs text-zinc-400 flex-1 text-center">bstore.com</div>
                  </div>

                  {/* IMAGE CONTENT */}
                  <div className="relative aspect-video bg-gradient-to-br from-lime-400/20 to-green-900/20 flex items-center justify-center group cursor-pointer" onClick={() => setIsVideoOpen(true)}>
                     {/* Placeholder content */}
                     <div className="text-center">
                        <div className="text-zinc-600 text-sm mb-2">BStore Dashboard Preview</div>
                        <Play className="text-zinc-600 mx-auto" size={48} />
                     </div>

                     {/* Play Button Overlay */}
                     <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-16 h-16 bg-lime-400 rounded-full flex items-center justify-center shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-300">
                           <Play className="text-black ml-1" fill="currentColor" size={32} />
                        </div>
                     </div>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4 text-lime-400 font-mono text-sm">
                    <ShoppingBag size={14} />
                    <span>E-COMMERCE PLATFORM</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">BSTORE</h3>
                <p className="text-zinc-400 mb-8 leading-relaxed">
                  A comprehensive e-commerce application built with a microservices approach. Features a secure admin dashboard for inventory management, dynamic product categorization, user authentication, and a responsive shopping interface.
                </p>

                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Java Spring Boot', 'React.js', 'MySQL', 'Tailwind', 'JWT Auth'].map(tech => (
                      <span key={tech} className="px-3 py-1 bg-zinc-800 border border-zinc-700 rounded-full text-xs text-zinc-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={() => setIsVideoOpen(true)}
                    className="flex-1 bg-white text-black font-bold py-3 px-6 rounded hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2"
                  >
                    <Play size={18} fill="currentColor" /> Watch Demo
                  </button>
                  <button className="flex-1 border border-zinc-600 text-white font-bold py-3 px-6 rounded hover:border-lime-400 hover:text-lime-400 transition-colors flex items-center justify-center gap-2">
                    <Github size={18} /> Source Code
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Contact Section --- */}
      <section id="contact" className="py-24 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Let's work <span className="text-lime-400">together</span></h2>
          <p className="text-zinc-400 mb-10 text-lg">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="flex justify-center gap-6 mb-12">
            <a href="mailto:dilankaheshan859@gmail.com" className="p-4 bg-zinc-900 rounded-full text-zinc-400 hover:bg-lime-400 hover:text-black transition-all transform hover:scale-110">
              <Mail size={24} />
            </a>
            <a href="https://github.com/IT24103939" className="p-4 bg-zinc-900 rounded-full text-zinc-400 hover:bg-lime-400 hover:text-black transition-all transform hover:scale-110">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/heshan-dilanka-520983348" className="p-4 bg-zinc-900 rounded-full text-zinc-400 hover:bg-lime-400 hover:text-black transition-all transform hover:scale-110">
              <Linkedin size={24} />
            </a>
          </div>

          <a
            href="mailto:dilankaheshan859@gmail.com"
            className="inline-block px-10 py-4 bg-lime-400 text-black font-bold text-lg rounded-full hover:bg-lime-300 hover:shadow-[0_0_20px_rgba(163,230,53,0.5)] transition-all"
          >
            Say Hello
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black text-center text-zinc-600 text-sm border-t border-zinc-900">
        <p>&copy; 2024 Developer Portfolio. Built with React & Tailwind.</p>
      </footer>

      {/* --- Video Modal --- */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 animate-fade-in">
          <button
            onClick={() => setIsVideoOpen(false)}
            className="absolute top-6 right-6 text-zinc-400 hover:text-white transition-colors"
          >
            <X size={32} />
          </button>

          <div className="w-full max-w-5xl aspect-video bg-black rounded-xl overflow-hidden border border-zinc-800 shadow-2xl relative">
            {/* Embeddable Google Drive preview iframe */}
            <iframe
              src="https://drive.google.com/file/d/1QAcaoeW07lM4j-D4XpT2q6KSJ0XaFT0S/preview"
              title="BSTORE Demo"
              className="w-full h-full"
              allow="autoplay; encrypted-media; fullscreen"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;

