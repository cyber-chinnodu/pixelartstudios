// import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'CEO, TechVision',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      content: 'PixelCraft Studio transformed our digital presence completely. Their team delivered a website that not only looks stunning but also performs exceptionally well. The increase in user engagement and conversions has been remarkable.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      position: 'Marketing Director, GreenLeaf',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      content: 'Working with PixelCraft on our brand redesign was a game-changer. They took the time to understand our vision and translated it into a cohesive brand identity that perfectly represents our values. Highly recommended!',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      position: 'Founder, Artisan Bakery',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      content: 'The team at PixelCraft Studio created a beautiful website for our bakery that perfectly captures our artisanal spirit. Their attention to detail and creative approach exceeded our expectations. Our customers love the new site!',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-heading">What Our Clients Say</h2>
          <p className="section-subheading">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="testimonial-card bg-white p-8 rounded-lg shadow-md relative"
            >
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="bg-indigo-600 p-3 rounded-full">
                  <Quote className="w-6 h-6 text-white" />
                </div>
              </div>
              
              <div className="pt-6">
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;