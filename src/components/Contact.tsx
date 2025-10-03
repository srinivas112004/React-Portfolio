import { useState } from 'react';
import { Mail, MapPin, Send, Github, Linkedin, MessageCircle } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
 import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const { theme } = useTheme();

 

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  setStatus('sending');

  // Replace these with your actual IDs
  const serviceId = 'service_2zgf1b7';
  const templateId = 'template_gmao43k';
  const publicKey = 'uB8OmjzJG8ugCiZeZ';

  const templateParams = {
    from_name: formData.name,
    from_email: formData.email,
    message: formData.message,
  };

  emailjs
    .send(serviceId, templateId, templateParams, publicKey)
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    })
    .catch((err) => {
      console.error('FAILED...', err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    });
};

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'srinivas.kandagatla112004@gmail.com',
      href: 'mailto:srinivas.kandagatla112004@gmail.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Hyderabad, Telangana, India',
      href: null,
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/srinivas112004',
      href: 'https://github.com/srinivas112004',
      color: 'from-gray-500 to-gray-700'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/srinivas-kandagatla',
      href: 'https://linkedin.com/in/srinivas-kandagatla-98aa69305',
      color: 'from-blue-600 to-blue-800'
    }
  ];

  return (
    <section id="contact" className={`py-20 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
          <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            Let's discuss how we can work together to bring your ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className={`text-2xl font-semibold mb-6 flex items-center gap-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                <MessageCircle className="w-6 h-6 text-blue-400" />
                Let's Connect
              </h3>
              <p className={`mb-8 leading-relaxed text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                I'm always excited to discuss new opportunities, innovative projects, and collaborative ventures. 
                Whether you have a specific project in mind or just want to explore possibilities, I'd love to hear from you!
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-2xl border transition-all duration-300 group ${
                    theme === 'dark' 
                      ? 'bg-gray-900 border-gray-700 hover:border-gray-600' 
                      : 'bg-white border-gray-200 hover:border-gray-300 shadow-lg'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${info.color} p-0.5`}>
                      <div className={`w-full h-full rounded-[10px] flex items-center justify-center ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
                        <info.icon className={`w-6 h-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className={`font-semibold mb-2 text-lg ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{info.label}</h4>
                      {info.href ? (
                        <a 
                          href={info.href} 
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`transition-colors break-all ${
                            theme === 'dark' 
                              ? 'text-gray-300 hover:text-white' 
                              : 'text-gray-600 hover:text-blue-600'
                          }`}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{info.value}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to action */}
            <div className={`rounded-2xl p-6 border ${
              theme === 'dark' 
                ? 'bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-500/20' 
                : 'bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200'
            }`}>
              <h4 className={`font-semibold mb-2 flex items-center gap-2 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                Available for Opportunities
              </h4>
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Open to full-time positions, internships, and freelance projects in AI/ML and full-stack development.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`rounded-2xl p-8 border ${
            theme === 'dark' 
              ? 'bg-gray-900 border-gray-700' 
              : 'bg-white border-gray-200 shadow-lg'
          }`}>
            <h3 className={`text-2xl font-semibold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all ${
                    theme === 'dark' 
                      ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' 
                      : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all ${
                    theme === 'dark' 
                      ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' 
                      : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none ${
                    theme === 'dark' 
                      ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' 
                      : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className={`w-full font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group transform ${
                  status === 'sending'
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-105'
                } text-white`}
              >
                {status === 'sending' ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              {status === 'success' && (
                <div className={`px-4 py-3 rounded-lg text-sm flex items-center gap-2 border animate-fade-in ${
                  theme === 'dark' 
                    ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-300' 
                    : 'bg-emerald-50 border-emerald-200 text-emerald-700'
                }`}>
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}

              {status === 'error' && (
                <div className={`px-4 py-3 rounded-lg text-sm flex items-center gap-2 border animate-fade-in ${
                  theme === 'dark' 
                    ? 'bg-red-500/10 border-red-500/20 text-red-300' 
                    : 'bg-red-50 border-red-200 text-red-700'
                }`}>
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  Failed to send message. Please try again or email me directly.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
