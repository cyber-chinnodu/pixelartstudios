import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import anime from 'animejs';
import { 
  Palette, 
  Code, 
  Video, 
  PenTool, 
  Users, 
  Clock, 
  Award, 
  Zap,
  ChevronRight
} from 'lucide-react';
import TestimonialsSection from '../components/TestimonialsSection';

const HomePage = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (heroRef.current) {
      anime({
        targets: '.hero-animation-item',
        translateY: [50, 0],
        opacity: [0, 1],
        delay: anime.stagger(200, {start: 300}),
        easing: 'easeOutQuad',
        duration: 800
      });
    }
  }, []);

  const services = [
    {
      icon: <Palette className="w-12 h-12 text-indigo-600 mb-4" />,
      title: 'UI/UX Design',
      description: 'Intuitive interfaces and seamless user experiences that delight and engage your audience.'
    },
    {
      icon: <Code className="w-12 h-12 text-indigo-600 mb-4" />,
      title: 'Web Development',
      description: 'Custom websites and applications built with cutting-edge technologies for optimal performance.'
    },
    {
      icon: <Video className="w-12 h-12 text-indigo-600 mb-4" />,
      title: 'Video Editing',
      description: 'Professional video editing services that tell your story with cinematic quality and precision.'
    },
    {
      icon: <PenTool className="w-12 h-12 text-indigo-600 mb-4" />,
      title: 'Graphic Design',
      description: 'Eye-catching visuals and brand assets that communicate your message effectively.'
    }
  ];

  const stats = [
    { icon: <Users />, value: '200+', label: 'Happy Clients' },
    { icon: <Award />, value: '15+', label: 'Awards Won' },
    { icon: <Clock />, value: '10+', label: 'Years Experience' },
    { icon: <Zap />, value: '500+', label: 'Projects Completed' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div 
        ref={heroRef}
        className="hero-gradient text-white pt-32 pb-20 md:pt-40 md:pb-32"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 hero-animation-item">
              Crafting Digital Experiences That Inspire
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-indigo-100 hero-animation-item">
              We transform ideas into exceptional digital solutions that elevate brands and engage audiences.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 hero-animation-item">
              <Link to="/services" className="btn-primary text-lg">
                Explore Our Services
              </Link>
              <Link to="/portfolio" className="btn-secondary bg-transparent text-white border-white hover:bg-white hover:text-indigo-600 text-lg">
                View Our Work
              </Link>
            </div>
          </div>
        </div>
        
        {/* Wave SVG */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
            <path 
              fill="#ffffff" 
              fillOpacity="1" 
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            ></path>
          </svg>
        </div>
      </div>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="section-heading">Who We Are</h2>
            <p className="text-lg text-gray-600">
              PixelCraft Studio is a creative powerhouse dedicated to transforming visions into digital reality. 
              With a passion for innovation and an eye for detail, we craft digital experiences that stand out in today's competitive landscape.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Our Mission</h3>
              <p className="text-gray-600 mb-6">
                To empower businesses through innovative digital solutions that drive growth, enhance brand presence, and create meaningful connections with their audience.
              </p>
              
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Our Approach</h3>
              <p className="text-gray-600 mb-6">
                We combine creativity with strategic thinking to deliver results that exceed expectations. Our collaborative process ensures that your vision is at the heart of everything we create.
              </p>
              
              <Link to="/contact" className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800 transition-colors duration-300">
                Get in touch with us <ChevronRight className="ml-1 w-5 h-5" />
              </Link>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-indigo-50 p-6 rounded-lg">
                <h4 className="font-bold text-xl mb-2 text-indigo-700">Innovative</h4>
                <p className="text-gray-600">We push boundaries and explore new possibilities.</p>
              </div>
              <div className="bg-indigo-50 p-6 rounded-lg">
                <h4 className="font-bold text-xl mb-2 text-indigo-700">Detail-Oriented</h4>
                <p className="text-gray-600">We believe that excellence lies in the details.</p>
              </div>
              <div className="bg-indigo-50 p-6 rounded-lg">
                <h4 className="font-bold text-xl mb-2 text-indigo-700">Collaborative</h4>
                <p className="text-gray-600">We work closely with you throughout the process.</p>
              </div>
              <div className="bg-indigo-50 p-6 rounded-lg">
                <h4 className="font-bold text-xl mb-2 text-indigo-700">Results-Driven</h4>
                <p className="text-gray-600">We focus on outcomes that drive your success.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="section-heading">Our Services</h2>
            <p className="section-subheading">
              We offer a comprehensive range of creative services to help your business thrive in the digital landscape.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="service-card bg-white p-8 rounded-lg shadow-md text-center"
              >
                {service.icon}
                <h3 className="text-xl font-bold mb-3 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link 
                  to="/services" 
                  className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800 transition-colors duration-300"
                >
                  Learn more <ChevronRight className="ml-1 w-5 h-5" />
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services" className="btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-indigo-600 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-500 rounded-full mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-indigo-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
            <p className="text-xl text-gray-300 mb-10">
              Let's collaborate to create something extraordinary that elevates your brand and engages your audience.
            </p>
            <Link to="/contact" className="btn-primary bg-white text-indigo-600 hover:bg-gray-100 text-lg">
              Get Started Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;