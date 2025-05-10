import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

const PortfolioPage = () => {
  const [filter, setFilter] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'ui-ux', name: 'UI/UX Design' },
    { id: 'web', name: 'Web Development' },
    { id: 'video', name: 'Video Editing' },
    { id: 'graphic', name: 'Graphic Design' }
  ];
  
  const projects = [
    {
      id: 1,
      title: 'Eco-Friendly E-commerce Platform',
      category: 'web',
      image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'A fully responsive e-commerce website for a sustainable products brand with custom checkout and inventory management.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe']
    },
    {
      id: 2,
      title: 'Financial App Interface Design',
      category: 'ui-ux',
      image: 'https://images.pexels.com/photos/6804604/pexels-photo-6804604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Intuitive mobile banking application interface with focus on accessibility and user experience.',
      tags: ['Figma', 'Prototyping', 'User Testing', 'Design System']
    },
    {
      id: 3,
      title: 'Corporate Brand Identity',
      category: 'graphic',
      image: 'https://images.pexels.com/photos/5849592/pexels-photo-5849592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Complete brand identity design for a tech startup, including logo, stationery, and brand guidelines.',
      tags: ['Branding', 'Logo Design', 'Typography', 'Color Theory']
    },
    {
      id: 4,
      title: 'Product Launch Video Campaign',
      category: 'video',
      image: 'https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Series of promotional videos for a new product launch, including teaser, main ad, and social media cuts.',
      tags: ['Video Production', 'Motion Graphics', 'Sound Design', 'Color Grading']
    },
    {
      id: 5,
      title: 'Health & Wellness Mobile App',
      category: 'ui-ux',
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'User-centered design for a health tracking application with personalized dashboard and progress visualization.',
      tags: ['UI Design', 'UX Research', 'Wireframing', 'User Testing']
    },
    {
      id: 6,
      title: 'Restaurant Website Redesign',
      category: 'web',
      image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Complete website redesign for a high-end restaurant, featuring online reservations and menu management.',
      tags: ['HTML/CSS', 'JavaScript', 'WordPress', 'Responsive Design']
    },
    {
      id: 7,
      title: 'Annual Report Design',
      category: 'graphic',
      image: 'https://images.pexels.com/photos/6444/pencil-typography-black-design.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Creative annual report design for a multinational corporation, balancing data visualization with brand storytelling.',
      tags: ['Print Design', 'Layout', 'Infographics', 'Typography']
    },
    {
      id: 8,
      title: 'Documentary Short Film',
      category: 'video',
      image: 'https://images.pexels.com/photos/2510428/pexels-photo-2510428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Award-winning short documentary film about environmental conservation efforts, featuring custom soundtrack and animations.',
      tags: ['Cinematography', 'Editing', 'Storytelling', 'Sound Design']
    },
    {
      id: 9,
      title: 'E-learning Platform',
      category: 'web',
      image: 'https://images.pexels.com/photos/5905700/pexels-photo-5905700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Comprehensive e-learning platform with course management, progress tracking, and interactive learning materials.',
      tags: ['React', 'Node.js', 'MongoDB', 'WebSockets']
    }
  ];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-indigo-600 text-white pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-xl text-indigo-100 mb-8">
              Explore our collection of work that showcases our creativity, expertise, and commitment to excellence.
            </p>
          </div>
        </div>
      </div>

      {/* Portfolio Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center mb-12 gap-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-2 rounded-full transition-colors duration-300 ${
                  filter === category.id
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => (
              <div key={project.id} className="portfolio-item bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-indigo-900 bg-opacity-70 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <a 
                      href="#" 
                      className="bg-white text-indigo-600 px-4 py-2 rounded-md flex items-center font-medium hover:bg-indigo-50 transition-colors duration-300"
                    >
                      View Project <ExternalLink className="ml-2 w-4 h-4" />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="section-heading">Our Creative Process</h2>
            <p className="section-subheading">
              We follow a structured approach to ensure that every project is completed to the highest standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-bold mb-2">Discovery</h3>
              <p className="text-gray-600">We begin by understanding your business, goals, and project requirements.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-bold mb-2">Strategy</h3>
              <p className="text-gray-600">We develop a comprehensive strategy tailored to your specific needs.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-bold mb-2">Creation</h3>
              <p className="text-gray-600">Our team brings your vision to life through creative design and development.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-bold mb-2">Delivery</h3>
              <p className="text-gray-600">We deliver the final product and ensure a smooth handover process.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-indigo-600 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-indigo-100 mb-10">
              Let's collaborate to create something extraordinary that elevates your brand and engages your audience.
            </p>
            <Link to="/contact" className="btn-primary bg-white text-indigo-600 hover:bg-gray-100 text-lg">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;