// pages/about.js
import React from "react";

const About = () => {
    return (
        <div className="min-h-screen bg-[#0f172a] flex items-center justify-center px-4 py-8">
            <div className="max-w-4xl bg-[#1e293b] shadow-lg rounded-lg p-8">
                <h1 className="text-4xl font-bold mb-6 text-center text-white">About Us</h1>
                
                <p className="text-lg text-gray-300 mb-4 leading-relaxed">
                    Welcome to our website! We are a team of passionate developers and designers dedicated to creating
                    amazing digital experiences. Our mission is to deliver high-quality products that help our clients
                    succeed in the digital world.
                </p>

                <p className="text-lg text-gray-300 mb-4 leading-relaxed">
                    With years of experience in the industry, we have developed a deep understanding of web development
                    technologies, UI/UX design, and software engineering principles. We believe in constant learning,
                    growth, and pushing the boundaries of what's possible.
                </p>

                <h2 className="text-3xl font-semibold mb-4 text-white">Our Team</h2>
                <p className="text-lg text-gray-300 mb-4 leading-relaxed">
                    Our diverse team comprises skilled professionals from various backgrounds, each bringing unique perspectives and expertise.
                    From innovative designers to talented developers, we collaborate closely to turn ideas into reality.
                </p>

                <h2 className="text-3xl font-semibold mb-4 text-white">Our Values</h2>
                <p className="text-lg text-gray-300 mb-4 leading-relaxed">
                    We are committed to:
                </p>
                <ul className="list-disc list-inside text-gray-300 mb-4">
                    <li>Integrity: We believe in honest communication and transparency.</li>
                    <li>Excellence: We strive for the highest quality in everything we do.</li>
                    <li>Innovation: We embrace creativity and new ideas to solve problems.</li>
                    <li>Collaboration: We work together, valuing each member's contributions.</li>
                </ul>

                <h2 className="text-3xl font-semibold mb-4 text-white">Get In Touch</h2>
                <p className="text-lg text-gray-300 mb-4 leading-relaxed">
                    We love connecting with new people! If you have a project in mind or simply want to say hello, feel free to reach out to us. 
                    Together, we can create something extraordinary!
                </p>

                <p className="text-lg text-gray-300 leading-relaxed">
                    Thank you for visiting our site, and we look forward to working with you!
                </p>
            </div>
        </div>
    );
};

export default About;
