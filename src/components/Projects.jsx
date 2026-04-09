import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code2 } from 'lucide-react';
import portfolioImg from '../assets/projects/companyweb.jpeg';
import electromartImg from '../assets/projects/electromart.jpeg';
import diabetesImg from '../assets/projects/diabetes.png';

const Projects = () => {
    const projects = [
        {
            title: 'Company Portfolio Website',
            tech: 'HTML, CSS, JavaScript',
            description: 'Designed and developed a fully responsive company portfolio website with a clean and modern UI. Optimized for mobile and visual hierarchy.',
            link: 'https://powersafeelectricalcontractors.netlify.app/',
            github: 'https://github.com/alshin5551/powersafe-electricals',
            image: portfolioImg
        },
        {
            title: 'ElectroMart – E-commerce Platform',
            tech: 'Django, Python, MySQL',
            description: 'Full-featured e-commerce web application with complete CRUD functionality, user authentication, and order processing workflows.',
            link: '#',
            github: 'https://github.com/alshin5551/Ecommerce-Electromart',
            image: electromartImg
        },
        {
            title: 'Diabetes Prediction System',
            tech: 'Machine Learning, Flask',
            description: 'Machine learning-based prediction system using Random Forest algorithm. Developed a Flask web interface for real-time user input and results.',
            link: '#',
            github: 'https://github.com/alshin5551/Diabetes-prediction',
            image: diabetesImg
        }
    ];

    return (
        <section id="projects" className="py-24">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="text-3xl mb-4 font-bold p-4 ">Featured Projects</h2>
                    <div className="w-20 h-2 bg-primary mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group glass rounded-2xl overflow-hidden border border-white/10 hover:border-primary/30 transition-all flex flex-col p-4"
                        >
                            <div className="h-56 overflow-hidden relative group-hover:scale-105 transition-all duration-500">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>
                            <div className="p-6 md:p-10 flex flex-col flex-grow">
                                <span className="text-xs font-bold text-primary uppercase tracking-widest mb-2">{project.tech}</span>
                                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">{project.title}</h3>
                                <p className="text-muted text-sm mb-6 flex-grow">{project.description}</p>
                                <div className="flex gap-4">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-all">
                                        <Github size={20} />
                                    </a>
                                    {idx === 0 && (
                                        <a href={project.link} className="flex items-center gap-2 text-sm font-bold hover:text-primary transition-all">
                                            Live Demo <ExternalLink size={16} />
                                        </a>
                                    )}

                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
