import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
    const education = [
        {
            degree: 'Master of Computer Applications (MCA)',
            school: 'Muthoot Institute of Technology & Science',
            period: '2023 – 2025',
            score: 'CGPA: 6.92'
        },
        {
            degree: 'BSc Computer Science',
            school: 'St. Paul’s College, Kalamassery',
            period: '2020 – 2023',
            score: 'CGPA: 6.33'
        },
        {
            degree: 'Plus Two (Computer Science)',
            school: 'CCPLM Anglo Indian HSS',
            period: '2018 – 2020',
            score: '69.4%'
        }
    ];

    const certifications = [
        'Introduction to Internet of Things – NPTEL (IIT Kharagpur), 2024 (Elite)',
        'Google Cloud Computing Foundations – NPTEL (IIT Kharagpur), 2024',
        'Machine Learning Fundamentals – Infosys Springboard, 2024'
    ];

    return (
        <section className="py-24">
            <div className="container grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <h2 className="text-3xl mb-8 flex items-center gap-3 p-4">
                        <GraduationCap className="text-primary" /> Education
                    </h2>
                    <div className="flex flex-col gap-8">
                        {education.map((edu, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="p-6 rounded-2xl bg-white/5 border border-white/10"
                            >
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-bold">{edu.degree}</h3>
                                    <span className="text-sm text-primary font-medium">{edu.period}</span>
                                </div>
                                <p className="text-muted mb-2">{edu.school}</p>
                                <span className="text-sm font-bold gradient-text">{edu.score}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div>
                    <h2 className="text-3xl mb-8 flex items-center gap-3 p-4">
                        <Award className="text-primary " /> Certifications
                    </h2>
                    <div className="flex flex-col gap-4">
                        {certifications.map((cert, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="p-4 rounded-xl glass border border-white/5 flex items-center gap-4"
                            >
                                <div className="w-4 h-4 rounded-full bg-primary shadow-[0_0_8px_rgba(99,102,241,0.6)]"></div>
                                <p className="text-sm">{cert}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
