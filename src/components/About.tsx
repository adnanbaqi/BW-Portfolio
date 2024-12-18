import { motion } from 'framer-motion';

export const About = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-8"
        >
          About Me
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <img
              src="https://images.unsplash.com/photo-1517849845537-4d257902454a"
              alt="Profile"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <p className="text-lg mb-6">
              I'm a passionate developer with expertise in building modern web applications.
              With over 5 years of experience in the industry, I've worked on various projects
              ranging from small business websites to large-scale enterprise applications.
            </p>
            <p className="text-lg">
              My focus is on creating clean, efficient, and user-friendly solutions that solve
              real-world problems. I'm constantly learning and staying up-to-date with the
              latest technologies and best practices in web development.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};