import { motion } from 'framer-motion';
import React from 'react';

import { Code2, Layout, Database, Cpu, Terminal, Users, Github, Globe } from 'lucide-react';

const SkillCategory = ({ title, items, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: delay }}
        className="flex flex-col"
    >
        <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 sm:mb-4 border-b border-white/20 pb-2">
            {title}
        </h3>
        <ul className="list-inside text-white/80 space-y-1 sm:space-y-2">
            {items.map((skill, i) => (
                <li key={i} className="flex items-center space-x-1 sm:space-x-2 text-sm sm:text-base break-words">
                    <skill.icon className="text-white/60 shrink-0" size={16} />
                    <span>{skill.name}</span>
                </li>
            ))}
        </ul>
    </motion.div>
);

const Skills = () => {
    const skillCategories = [
        {
            title: 'Languages',
            icon: <Terminal className="text-white/80" size={24} />,
            items: [
                { name: 'HTML', icon: Code2 },
                { name: 'CSS', icon: Layout },
                { name: 'Python', icon: Terminal },
                { name: 'JavaScript', icon: Code2 }
            ]
        },
        {
            title: 'Frameworks',
            icon: <Layout className="text-white/80" size={24} />,
            items: [
                { name: 'Django', icon: Layout },
                { name: 'Flask', icon: Layout },
                { name: 'React', icon: Layout }
            ]
        },
        {
            title: 'Databases',
            icon: <Database className="text-white/80" size={24} />,
            items: [
                { name: 'MySQL', icon: Database },
                { name: 'MongoDB', icon: Database }
            ]
        },
        {
            title: 'Tools & Soft Skills',
            icon: <Cpu className="text-white/80" size={24} />,
            items: [
                { name: 'Git & GitHub', icon: Github },
                { name: 'VS Code', icon: Terminal },
                { name: 'Postman', icon: Globe },
                { name: 'Problem Solving', icon: Cpu },
                { name: 'Communication', icon: Users }
            ]
        }
    ];

    return (
        <section id="skills" className="pb-16 md:pb-24">
            <div className="container">
                {/* Heading without extra margin */}
                <div className="text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-8">
                        Skills
                    </h2>
                </div>

                {/* 2x2 table layout on all screen sizes */}
                <div className="grid grid-cols-2 gap-4 sm:gap-8 md:gap-12">
                    {skillCategories.map((category, idx) => (
                        <SkillCategory
                            key={idx}
                            title={category.title}
                            items={category.items}
                            delay={idx * 0.1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;