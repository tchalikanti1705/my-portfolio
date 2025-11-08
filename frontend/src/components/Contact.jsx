import React, { useState } from 'react';
import { Mail, Linkedin, Github, Heart } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { portfolioData } from '../data/mockData';
import { toast } from '../hooks/use-toast';

const Contact = () => {
  const { personal } = portfolioData;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(42); // Mock initial count

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleLike = () => {
    if (!isLiked) {
      setIsLiked(true);
      setLikeCount(prev => prev + 1);
      toast({
        title: "Thanks for the love!",
        description: "I appreciate your support.",
      });
    } else {
      setIsLiked(false);
      setLikeCount(prev => prev - 1);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-zinc-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
          Get In Touch
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new opportunities, collaborations, or just having a chat about technology.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Contact Form */}
          <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-6 md:p-8">
            <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="bg-zinc-900 border-zinc-700 text-white placeholder:text-gray-500 focus:border-cyan-500"
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="bg-zinc-900 border-zinc-700 text-white placeholder:text-gray-500 focus:border-cyan-500"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="bg-zinc-900 border-zinc-700 text-white placeholder:text-gray-500 focus:border-cyan-500 resize-none"
                />
              </div>
              <Button type="submit" className="w-full bg-cyan-500 hover:bg-cyan-600">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info & Like Button */}
          <div className="space-y-6">
            <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-6 md:p-8">
              <h3 className="text-xl font-bold text-white mb-6">Connect With Me</h3>
              <div className="space-y-4">
                <a 
                  href={`mailto:${personal.email}`}
                  className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors group"
                >
                  <div className="p-2 bg-zinc-900 rounded-lg group-hover:bg-cyan-500/10 transition-colors">
                    <Mail size={20} className="text-gray-300 group-hover:text-cyan-400" />
                  </div>
                  <span className="text-gray-300 group-hover:text-cyan-400">{personal.email}</span>
                </a>
                <a 
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors group"
                >
                  <div className="p-2 bg-zinc-900 rounded-lg group-hover:bg-cyan-500/10 transition-colors">
                    <Linkedin size={20} className="text-gray-300 group-hover:text-cyan-400" />
                  </div>
                  <span className="text-gray-300 group-hover:text-cyan-400">LinkedIn Profile</span>
                </a>
                <a 
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors group"
                >
                  <div className="p-2 bg-zinc-900 rounded-lg group-hover:bg-cyan-500/10 transition-colors">
                    <Github size={20} className="text-gray-300 group-hover:text-cyan-400" />
                  </div>
                  <span className="text-gray-300 group-hover:text-cyan-400">GitHub Profile</span>
                </a>
              </div>
            </div>

            {/* Like Section */}
            <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-6 md:p-8 text-center">
              <h3 className="text-xl font-bold text-white mb-4">Like My Portfolio?</h3>
              <p className="text-gray-400 text-sm mb-6">Show some love if you enjoyed browsing!</p>
              <Button
                onClick={handleLike}
                variant={isLiked ? "default" : "outline"}
                className={`w-full ${isLiked ? 'bg-red-500 hover:bg-red-600' : 'border-zinc-700 hover:border-red-500 hover:text-red-500'}`}
              >
                <Heart size={20} className={`mr-2 ${isLiked ? 'fill-current' : ''}`} />
                {isLiked ? 'Liked!' : 'Like This Portfolio'}
              </Button>
              <p className="text-gray-500 text-sm mt-3">{likeCount} people liked this portfolio</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
