import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, X, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { portfolioData } from '../data/mockData';

const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hi! I'm Teja's AI assistant. Ask me anything about his experience, projects, skills, or education!"
    }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getAIResponse = (query) => {
    const lowerQuery = query.toLowerCase();

    // Introduction
    if (lowerQuery.includes('who') || lowerQuery.includes('introduce') || lowerQuery.includes('about')) {
      return `I'm ${portfolioData.personal.name}, a ${portfolioData.personal.title}. ${portfolioData.personal.about}`;
    }

    // Experience
    if (lowerQuery.includes('experience') || lowerQuery.includes('work') || lowerQuery.includes('job')) {
      const expList = portfolioData.experience.map((exp, idx) => 
        `${idx + 1}. ${exp.role} at ${exp.company} (${exp.duration}) - ${exp.highlights[0]}`
      ).join('\n\n');
      return `Here's my work experience:\n\n${expList}`;
    }

    // Projects
    if (lowerQuery.includes('project')) {
      const projList = portfolioData.projects.map((proj, idx) => 
        `${idx + 1}. ${proj.title}\n${proj.description}\nTech: ${proj.technologies.slice(0, 4).join(', ')}`
      ).join('\n\n');
      return `Here are my key projects:\n\n${projList}`;
    }

    // Skills
    if (lowerQuery.includes('skill') || lowerQuery.includes('technology') || lowerQuery.includes('tech stack')) {
      const skillsList = Object.entries(portfolioData.skills).map(([category, skills]) => 
        `${category}: ${skills.slice(0, 5).join(', ')}`
      ).join('\n');
      return `My technical skills:\n\n${skillsList}`;
    }

    // Education
    if (lowerQuery.includes('education') || lowerQuery.includes('study') || lowerQuery.includes('university') || lowerQuery.includes('degree')) {
      const eduList = portfolioData.education.map((edu, idx) => 
        `${idx + 1}. ${edu.degree} from ${edu.institution} (${edu.duration}) - GPA: ${edu.gpa}`
      ).join('\n\n');
      return `Education background:\n\n${eduList}`;
    }

    // Contact
    if (lowerQuery.includes('contact') || lowerQuery.includes('email') || lowerQuery.includes('reach')) {
      return `You can reach me at:\nEmail: ${portfolioData.personal.email}\nLinkedIn: ${portfolioData.personal.linkedin}\nGitHub: ${portfolioData.personal.github}`;
    }

    // AI/ML specific
    if (lowerQuery.includes('ai') || lowerQuery.includes('machine learning') || lowerQuery.includes('llm')) {
      return "I have strong experience with AI/ML technologies including LangChain, OpenAI, Ollama, Whisper, and RAG implementations. I've built AI-powered applications like job assistants and personal companions with local LLM integration.";
    }

    // Default
    return "I can help you learn about Teja's experience, projects, skills, education, or contact information. What would you like to know?";
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);

    setTimeout(() => {
      const aiResponse = { role: 'assistant', content: getAIResponse(input) };
      setMessages(prev => [...prev, aiResponse]);
    }, 500);

    setInput('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-4 rounded-full shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-110 z-50 group"
        >
          <MessageCircle size={28} className="group-hover:animate-bounce" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center animate-pulse">
            AI
          </span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-zinc-900 border border-zinc-700 rounded-lg shadow-2xl flex flex-col z-50 animate-in slide-in-from-bottom-4">
          {/* Header */}
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bot size={24} />
              <div>
                <h3 className="font-bold">Teja's AI Assistant</h3>
                <p className="text-xs opacity-90">Ask me anything!</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex items-start gap-2 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className={`p-2 rounded-full ${
                  msg.role === 'assistant' ? 'bg-cyan-500/20' : 'bg-blue-500/20'
                }`}>
                  {msg.role === 'assistant' ? <Bot size={20} className="text-cyan-400" /> : <User size={20} className="text-blue-400" />}
                </div>
                <div className={`flex-1 p-3 rounded-lg ${
                  msg.role === 'assistant' ? 'bg-zinc-800 text-gray-200' : 'bg-blue-600 text-white'
                } max-w-[80%]`}>
                  <p className="text-sm whitespace-pre-line">{msg.content}</p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-zinc-700 flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about Teja..."
              className="bg-zinc-800 border-zinc-700 text-white placeholder:text-gray-500"
            />
            <Button onClick={handleSend} className="bg-cyan-500 hover:bg-cyan-600">
              <Send size={20} />
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default AIChat;
