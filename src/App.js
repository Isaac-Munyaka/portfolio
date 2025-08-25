import { useState } from "react";
import { motion } from "framer-motion";

export default function App() {
  const [lightboxImage, setLightboxImage] = useState(null);

  const projects = [
    {
      title: "Closed Captions",
      description:
        "Built a system for generating and displaying closed captions for videos. Focused on natural language processing and text synchronization.",
      tech: ["Python", "NLP", "Speech-to-Text"],
      link: "https://github.com/Isaac-Munyaka/Closed-captions",
    },
    {
      title: "Plotly Dashboards",
      description:
        "Developed interactive dashboards using Plotly for visualizing datasets and creating business intelligence insights.",
      tech: ["Plotly", "Python", "Data Visualization"],
      link: "https://github.com/Isaac-Munyaka/plotly-dashboards",
      image: "/images/dashboard.png",
    },
    {
      title: "Capstone Group 4",
      description:
        "Collaborated on a capstone project solving real-world data challenges through machine learning and analytics.",
      tech: ["Machine Learning", "EDA", "Python"],
      link: "https://github.com/Isaac-Munyaka/Capstone-group-4",
      image: "/images/recommender.png",
    },
    {
      title: "Phase 4",
      description:
        "Exploratory data analysis and advanced analytics project showcasing SQL and data manipulation.",
      tech: ["SQL", "Pandas", "Data Cleaning"],
      link: "https://github.com/Isaac-Munyaka/Phase-4",
    },
    {
      title: "My Book Recommender System",
      description:
        "Built a recommendation system for books using collaborative filtering and machine learning.",
      tech: ["Python", "Recommender Systems", "ML"],
      link: "https://github.com/Isaac-Munyaka/my-book-recommender-system",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold mb-4"
        >
          Isaac Munyaka
        </motion.h1>
        <p className="text-lg mb-6">
          Data Analytics || Business Intelligence || Machine Learning
        </p>
        <a
          href="/resume.pdf"
          download
          className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-xl"
        >
          Download Resume
        </a>
      </section>

      {/* About Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-6">About Me</h2>
        <p className="text-lg leading-relaxed">
          I am passionate about data-driven decision-making through leveraging
          data and making inferences that can be translated into substantial
          deliverables. I specialize in dashboards, algorithms, software and
          LLMs that deliver intelligent insights.
        </p>
      </section>

      {/* Skills Section */}
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Skills & Tools
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            "Python",
            "SQL",
            "Tableau",
            "Power BI",
            "Data Storytelling",
            "Machine Learning",
            "EDA",
            "Dashboards",
          ].map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white shadow rounded-2xl p-4"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-10 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white shadow rounded-2xl p-6"
            >
              {proj.image && (
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="rounded-lg mb-3 cursor-pointer hover:opacity-90"
                  onClick={() => setLightboxImage(proj.image)}
                />
              )}
              <h3 className="text-xl font-bold mb-2">{proj.title}</h3>
              <p className="mb-3 text-gray-600">{proj.description}</p>
              <p className="text-sm text-gray-500 mb-4">
                {proj.tech.join(", ")}
              </p>
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-semibold"
              >
                View on GitHub →
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setLightboxImage(null)}
        >
          <img
            src={lightboxImage}
            alt="Expanded view"
            className="max-h-[90%] max-w-[90%] rounded-lg shadow-lg"
          />
        </div>
      )}

      {/* Contact Section */}
      <section className="bg-indigo-700 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
        <p className="mb-6">
          Let’s connect! I am open to opportunities in Data Analytics, BI, and
          ML.
        </p>
        <div className="space-x-6">
          <a href="mailto:isaacmunyaka98@gmail.com" className="hover:underline">
            Email
          </a>
          <a
            href="https://github.com/Isaac-Munyaka"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/isaac-munyaka"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
}
