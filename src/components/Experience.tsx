import { motion } from 'framer-motion';
import { experiences } from '../config/experience';

export const Experience = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12"
        >
          Experience
        </motion.h2>
        <div className="space-y-12">
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border-l-4 border-gray-200 pl-6"
            >
              <h3 className="text-xl font-bold">{exp.position}</h3>
              <p className="text-gray-600 mb-2">{exp.company} | {exp.duration}</p>
              <ul className="list-disc list-inside space-y-2">
                {exp.description.map((desc, index) => (
                  <li key={index} className="text-gray-700">{desc}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};