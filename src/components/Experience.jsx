import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, Phone } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            role: 'Web Development Intern',
            company: 'Learning Management System Project',
            period: 'May 2025 - Jun 2025',
            description: [
                'Developed a complaint management module within an LMS using Django.',
                'Enabled real-time complaint submission and tracking for students.',
                'Implemented backend logic and database integration using MySQL.'
            ]
        }
    ];

    return (
        <section id="about" className="py-24 mt-2 mb-2">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <h2 className="exp">Experience</h2>
                        <div className="flex flex-col gap-8">
                            
                            {experiences.map((exp, idx) => (
                                <div key={idx} className="relative pl-8 border-l-2 border-primary/30">  
                                    {/* <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1 shadow-[0_0_10px_rgba(99,102,241,0.8)]"></div> */}
                                    <h3 className="exp text-xl font-bold">{exp.role}</h3>
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="text-primary font-medium">{exp.company}</span>
                                        <span className="text-sm text-muted italic">{exp.period}</span>
                                    </div>
                                    <ul className="list-disc list-inside text-muted flex flex-col gap-2">
                                        {exp.description.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl mb-8 exp">About Me</h2>
                        <div className="flex flex-col gap-6">
                            <p className="text-muted text-justify">
                                I am Alshin D Coutho, a recent MCA graduate and aspiring software developer with hands‑on experience in Python, Django, Flask, and MySQL, along with basic knowledge of React and REST API integration. I have built projects ranging from e‑commerce platforms, focusing on creating responsive, user‑friendly designs while continuously learning and improving my skills to contribute effectively in team‑based environments.
                            </p>
                            <p className="text-muted text-justify">
                                Seeking an entry-level software developer role to build scalable applications.  
                            </p>

                            <div className="flex flex-col gap-4 mt-4">
                                <div className="flex items-center gap-3 text-muted">
                                    <MapPin size={18} className="text-primary" />
                                    <span>Ernakulam, Kerala</span>
                                </div>
                                <div className="flex items-center gap-3 text-muted">
                                    <Mail size={18} className="text-primary" />
                                    <span>alshindcoutho@gmail.com</span>
                                </div>
                                <div className="flex items-center gap-3 text-muted">
                                    <Phone size={18} className="text-primary" />
                                    <span>+91 99460 35199</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>


                </div>
            </div>
        </section>
    );
};

export default Experience;
