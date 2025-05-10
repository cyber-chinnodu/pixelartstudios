import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Palette, 
  Code, 
  Video, 
  PenTool, 
  Check,
  ChevronRight
} from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      icon: <Palette className="w-16 h-16 text-indigo-600 mb-6" />,
      title: 'UI/UX Design',
      description: 'We create intuitive, engaging user experiences and interfaces that delight your audience and achieve your business goals.',
      features: [
        'User Research & Persona Development',
        'Wireframing & Prototyping',
        'UI Design & Visual Identity',
        'Usability Testing',
        'Responsive Design',
        'Design Systems'
      ],
      plans: [
        {
          name: 'Basic',
          price: '$1,499',
          features: [
            'User Research',
            'Wireframing',
            'UI Design for 5 screens',
            'Basic Prototype',
            '1 Revision Round'
          ]
        },
        {
          name: 'Pro',
          price: '$2,999',
          features: [
            'Comprehensive User Research',
            'Detailed Wireframing',
            'UI Design for 10 screens',
            'Interactive Prototype',
            '2 Revision Rounds',
            'Usability Testing'
          ]
        },
        {
          name: 'Premium',
          price: '$4,999',
          features: [
            'In-depth User Research & Personas',
            'Comprehensive Wireframing',
            'UI Design for 20+ screens',
            'Advanced Interactive Prototype',
            'Unlimited Revisions',
            'Extensive Usability Testing',
            'Complete Design System'
          ]
        }
      ]
    },
    {
      icon: <Code className="w-16 h-16 text-indigo-600 mb-6" />,
      title: 'Web Development',
      description: 'We build fast, responsive, and secure websites and web applications that provide exceptional user experiences across all devices.',
      features: [
        'Custom Website Development',
        'E-commerce Solutions',
        'Content Management Systems',
        'Web Application Development',
        'API Integration',
        'Performance Optimization'
      ],
      plans: [
        {
          name: 'Basic',
          price: '$2,999',
          features: [
            'Up to 5 Pages',
            'Responsive Design',
            'Basic SEO Setup',
            'Contact Form',
            'Content Management System',
            '1 Month Support'
          ]
        },
        {
          name: 'Pro',
          price: '$5,999',
          features: [
            'Up to 10 Pages',
            'Responsive Design',
            'Advanced SEO Setup',
            'Contact Form & Newsletter',
            'Content Management System',
            'E-commerce Integration (up to 50 products)',
            '3 Months Support'
          ]
        },
        {
          name: 'Premium',
          price: '$9,999+',
          features: [
            'Unlimited Pages',
            'Responsive Design',
            'Comprehensive SEO Strategy',
            'Advanced Forms & User Accounts',
            'Custom CMS Development',
            'Full E-commerce Solution',
            'Custom Functionality',
            '6 Months Support'
          ]
        }
      ]
    },
    {
      icon: <Video className="w-16 h-16 text-indigo-600 mb-6" />,
      title: 'Video Editing',
      description: 'We transform raw footage into compelling visual stories that captivate your audience and effectively communicate your message.',
      features: [
        'Commercial Video Production',
        'Social Media Content',
        'Motion Graphics',
        'Color Grading',
        'Sound Design',
        'Video Animation'
      ],
      plans: [
        {
          name: 'Basic',
          price: '$799',
          features: [
            'Up to 1-minute video',
            'Basic editing',
            'Simple transitions',
            'Text overlays',
            'Background music',
            '2 Revision rounds'
          ]
        },
        {
          name: 'Pro',
          price: '$1,499',
          features: [
            'Up to 3-minute video',
            'Advanced editing',
            'Custom transitions',
            'Motion graphics',
            'Color grading',
            'Sound design',
            '3 Revision rounds'
          ]
        },
        {
          name: 'Premium',
          price: '$2,999+',
          features: [
            'Custom video length',
            'Premium editing',
            'Advanced motion graphics',
            'Professional color grading',
            'Custom sound design',
            'Animation integration',
            'Unlimited revisions'
          ]
        }
      ]
    },
    {
      icon: <PenTool className="w-16 h-16 text-indigo-600 mb-6" />,
      title: 'Graphic Design',
      description: 'We create visually stunning designs that strengthen your brand identity and effectively communicate your message to your target audience.',
      features: [
        'Brand Identity Design',
        'Print Design',
        'Packaging Design',
        'Marketing Materials',
        'Social Media Graphics',
        'Illustration'
      ],
      plans: [
        {
          name: 'Basic',
          price: '$599',
          features: [
            'Logo Design',
            'Business Card Design',
            'Letterhead Design',
            'Email Signature',
            '2 Revision rounds'
          ]
        },
        {
          name: 'Pro',
          price: '$1,299',
          features: [
            'Logo Design with variations',
            'Complete Stationery Design',
            'Brand Guidelines (basic)',
            'Social Media Templates (3)',
            '3 Revision rounds'
          ]
        },
        {
          name: 'Premium',
          price: '$2,499+',
          features: [
            'Comprehensive Logo System',
            'Complete Stationery Design',
            'Comprehensive Brand Guidelines',
            'Social Media Kit (10+ templates)',
            'Marketing Materials',
            'Packaging Design',
            'Unlimited revisions'
          ]
        }
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-indigo-600 text-white pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-indigo-100 mb-8">
              We offer comprehensive creative solutions to help your business stand out in the digital landscape.
            </p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="section-heading">What We Offer</h2>
            <p className="section-subheading">
              Explore our range of services designed to elevate your brand and engage your audience.
            </p>
          </div>

          {services.map((service, index) => (
            <div key={index} className="mb-24">
              <div className="text-center mb-12">
                {service.icon}
                <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">{service.description}</p>
              </div>

              {/* Features */}
              <div className="bg-gray-50 py-12 px-4 rounded-lg mb-16">
                <div className="max-w-5xl mx-auto">
                  <h3 className="text-2xl font-bold mb-8 text-center">Key Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <Check className="w-5 h-5 text-indigo-600" />
                        </div>
                        <p className="ml-3 text-gray-700">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Pricing Plans */}
              <h3 className="text-2xl font-bold mb-8 text-center">Pricing Plans</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {service.plans.map((plan, idx) => (
                  <div 
                    key={idx} 
                    className={`rounded-lg shadow-lg overflow-hidden ${
                      idx === 1 ? 'border-2 border-indigo-600 transform md:-translate-y-4' : 'border border-gray-200'
                    }`}
                  >
                    {idx === 1 && (
                      <div className="bg-indigo-600 text-white py-2 text-center font-medium">
                        Most Popular
                      </div>
                    )}
                    <div className="p-6">
                      <h4 className="text-xl font-bold mb-2">{plan.name}</h4>
                      <div className="text-3xl font-bold text-indigo-600 mb-6">{plan.price}</div>
                      <ul className="space-y-3 mb-8">
                        {plan.features.map((feature, fidx) => (
                          <li key={fidx} className="flex items-start">
                            <Check className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                            <span className="ml-3 text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Link 
                        to="/contact" 
                        className={`block text-center py-2 px-4 rounded-md font-medium transition duration-300 ${
                          idx === 1 
                            ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
                            : 'bg-white text-indigo-600 border border-indigo-600 hover:bg-indigo-50'
                        }`}
                      >
                        Get Started
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="section-heading">Our Process</h2>
            <p className="section-subheading">
              We follow a structured approach to ensure that every project is completed to the highest standards.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Process Timeline */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-indigo-200"></div>
              
              {/* Process Steps */}
              <div className="space-y-12 md:space-y-0">
                {/* Step 1 */}
                <div className="relative md:grid md:grid-cols-2 md:gap-8 md:items-center">
                  <div className="md:text-right">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-xl font-bold mb-3 text-indigo-600">1. Discovery</h3>
                      <p className="text-gray-600">
                        We begin by understanding your business, goals, target audience, and project requirements through in-depth consultations.
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/4">
                    <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold">1</div>
                  </div>
                  <div></div>
                </div>

                {/* Step 2 */}
                <div className="relative md:grid md:grid-cols-2 md:gap-8 md:items-center">
                  <div></div>
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/4">
                    <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold">2</div>
                  </div>
                  <div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-xl font-bold mb-3 text-indigo-600">2. Strategy</h3>
                      <p className="text-gray-600">
                        We develop a comprehensive strategy and project plan tailored to your specific needs and objectives.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="relative md:grid md:grid-cols-2 md:gap-8 md:items-center">
                  <div className="md:text-right">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-xl font-bold mb-3 text-indigo-600">3. Creation</h3>
                      <p className="text-gray-600">
                        Our team of experts brings your vision to life through creative design, development, and production.
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/4">
                    <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold">3</div>
                  </div>
                  <div></div>
                </div>

                {/* Step 4 */}
                <div className="relative md:grid md:grid-cols-2 md:gap-8 md:items-center">
                  <div></div>
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/4">
                    <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold">4</div>
                  </div>
                  <div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-xl font-bold mb-3 text-indigo-600">4. Refinement</h3>
                      <p className="text-gray-600">
                        We review and refine the work based on your feedback to ensure it meets your expectations and requirements.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="relative md:grid md:grid-cols-2 md:gap-8 md:items-center">
                  <div className="md:text-right">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-xl font-bold mb-3 text-indigo-600">5. Delivery</h3>
                      <p className="text-gray-600">
                        We deliver the final product, provide necessary training, and ensure a smooth handover process.
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/4">
                    <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold">5</div>
                  </div>
                  <div></div>
                </div>
              </div>
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
              Contact us today to discuss your project requirements and how we can help bring your vision to life.
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

export default ServicesPage;