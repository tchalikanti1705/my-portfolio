import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, X, MessageCircle, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { portfolioData } from '../data/mockData';

const EnhancedAIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hi! I'm Teja's AI Digital Twin. I know everything about his professional journey - work experience, projects, skills, education, and achievements. Ask me anything, from job fit analysis to skill ratings!"
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getDetailedResponse = (query) => {
    const lowerQuery = query.toLowerCase();

    // Job fit analysis
    if (lowerQuery.includes('job fit') || lowerQuery.includes('suitable') || lowerQuery.includes('match') || lowerQuery.includes('qualify')) {
      return `Based on Teja's profile, here's the fit analysis:\n\n✅ **Strong Match For:**\n- Full-stack development roles (3+ years experience)\n- AI/ML Engineering positions (LangChain, OpenAI, RAG)\n- Backend-heavy roles (FastAPI, Python, PostgreSQL)\n- Cloud & DevOps positions (AWS, GCP, Docker)\n\n📊 **Key Strengths:**\n- Proven track record reducing costs by 30% and improving performance by 60%\n- Experience with HIPAA-compliant systems and enterprise solutions\n- Strong AI integration experience (multiple production deployments)\n- Master's in CS from University at Buffalo (GPA: 3.6)\n\nShare the job description for a detailed match analysis!`;
    }

    // Skill rating
    if (lowerQuery.includes('rate') || lowerQuery.includes('proficiency') || lowerQuery.includes('level')) {
      return `**Teja's Skill Proficiency Ratings:**\n\n🔥 **Expert (9-10/10):**\n- Python, FastAPI, React\n- PostgreSQL, MongoDB\n- AWS Services (EC2, S3, Lambda)\n- REST API Design\n\n💪 **Advanced (7-8/10):**\n- LangChain, OpenAI Integration\n- Docker, CI/CD\n- TypeScript, Redux\n- System Architecture\n\n✅ **Proficient (6-7/10):**\n- Spark, EMR\n- GCP, Firebase\n- Data Engineering\n\nWhich specific skill would you like details about?`;
    }

    // Introduction with achievements
    if (lowerQuery.includes('who') || lowerQuery.includes('introduce') || lowerQuery.includes('about') || lowerQuery.includes('tell me')) {
      return `I'm **Teja Chalikanti**, a Software Engineer specializing in building intelligent, scalable systems.\n\n🎓 **Currently:** Master's in Computer Science at University at Buffalo (GPA: 3.6/4.0)\n\n💼 **Professional Highlights:**\n- 3+ years of software engineering experience\n- Reduced infrastructure costs by 30% at Valuelabs\n- Improved provider capacity by 12% at Doctorite.ai\n- Built AI-powered travel assistant at PM Accelerator\n\n🚀 **Core Expertise:**\n- Full-stack development (React, FastAPI, PostgreSQL)\n- AI/LLM integration (LangChain, OpenAI, RAG)\n- Cloud & DevOps (AWS, GCP, Docker)\n- Performance optimization & system design\n\nI'm passionate about building intelligent solutions that make a real impact!`;
    }

    // Detailed work experience
    if (lowerQuery.includes('experience') || lowerQuery.includes('work') || lowerQuery.includes('job')) {
      if (lowerQuery.includes('pm accelerator') || lowerQuery.includes('trulmate')) {
        return `**PM Accelerator (Trulmate.ai) - Software Engineer Intern**\nMiami, FL | June 2025 - August 2025\n\n🔐 **Authentication & Security:**\n- Designed secure multi-provider auth system with Firebase\n- Implemented token exchange and identity linking\n\n🌍 **Travel Features:**\n- Built SOS detection and location services\n- Created weather API with normalized responses\n- Integrated Google/Apple calendar sync\n\n🤖 **AI Integration:**\n- Developed LangChain + OpenAI assistant with conversation memory\n- Connected to backend features (trip creation, recommendations)\n\n🎙️ **Multi-modal Features:**\n- Text-to-Speech & Speech-to-Text (Whisper)\n- Image translation & currency conversion\n- SafeBite/SafeMate modules for safety`;
      }
      
      if (lowerQuery.includes('doctorite') || lowerQuery.includes('healthcare')) {
        return `**Doctorite.ai - Software Engineer**\nHyderabad, India | Jan 2024 - Jul 2024\n\n🏥 **Healthcare Platform:**\n- Built client portal with appointment scheduling\n- Implemented secure S3-backed assessments with RBAC\n\n🤖 **AI Session Assistant:**\n- Logged Q&A to BigQuery with context preservation\n- Auto-generated follow-up recommendations\n\n📈 **Impact Metrics:**\n- Increased provider capacity by +12%\n- Reduced documentation time by 60%\n- Built HIPAA-compliant telehealth (Twilio integration)\n\n💡 Automated SOAP/progress notes generation`;
      }
      
      if (lowerQuery.includes('valuelabs') || lowerQuery.includes('data')) {
        return `**Valuelabs - Software Engineer Specialist**\nHyderabad, India | Nov 2022 - Nov 2023\n\n📊 **Data Engineering:**\n- Built ETL pipelines with EC2, EMR, Lambda, SQS\n- Automated report generation and email delivery\n\n💰 **Cost Optimization:**\n- Reduced S3 costs by 30% using lifecycle rules\n\n⚡ **Performance:**\n- Optimized Spark with AQE and data skew handling\n- Cut p95 response time from 3.4s to 1.2s\n\n📈 **Business Impact:**\n- Increased CSAT by 9%\n- Lowered session drop-offs by 21%`;
      }
      
      const expList = portfolioData.experience.map((exp, idx) => 
        `**${idx + 1}. ${exp.role}** at ${exp.company}\n${exp.duration}\n${exp.highlights[0]}`
      ).join('\n\n');
      return `**Work Experience Summary:**\n\n${expList}\n\nAsk about a specific company for detailed insights!`;
    }

    // Projects with technical depth
    if (lowerQuery.includes('project')) {
      if (lowerQuery.includes('job') || lowerQuery.includes('application')) {
        return `**AI-Powered Job Application Assistant**\n\n🎯 **Problem Solved:**\nHelps job seekers optimize applications with AI-driven insights\n\n🏗️ **Architecture:**\n- Backend: Python FastAPI + PostgreSQL\n- Frontend: React with intuitive UX\n- AI: LangChain + OpenAI for intelligent parsing\n- Deployment: Docker on Render\n\n✨ **Key Features:**\n1. Resume Analysis & Scoring\n2. Job Description Matching\n3. Personalized Answer Generation\n4. Profile Management\n\n💡 **Technical Highlights:**\n- Structured JSON contracts between services\n- Resume-to-JD similarity scoring\n- Actionable insights generation\n\n🔗 GitHub: github.com/tejachalikanti/ai-job-assistant`;
      }
      
      if (lowerQuery.includes('companion') || lowerQuery.includes('personal')) {
        return `**AI Personal Companion**\n\n🔒 **Privacy-First Philosophy:**\nAll processing happens locally - no data leaves your device\n\n🏗️ **Tech Stack:**\n- Backend: FastAPI + LangChain\n- LLM: Ollama (local deployment)\n- Voice: Whisper (speech-to-text)\n- Search: ChromaDB (vector database)\n- Frontend: React\n\n✨ **Capabilities:**\n1. Document Upload & Processing\n2. Voice Memo Recording\n3. Natural Language Querying\n4. RAG-based Answering\n\n💡 **Innovation:**\n- Zero cloud dependency\n- Complete data privacy\n- Intelligent context retrieval\n\n🔗 GitHub: github.com/tejachalikanti/ai-companion`;
      }
      
      const projList = portfolioData.projects.map((proj, idx) => 
        `**${idx + 1}. ${proj.title}**\n${proj.description}\nTech: ${proj.technologies.slice(0, 5).join(', ')}`
      ).join('\n\n');
      return `**Featured Projects:**\n\n${projList}\n\nAsk about a specific project for technical details!`;
    }

    // Skills with context
    if (lowerQuery.includes('skill') || lowerQuery.includes('technology') || lowerQuery.includes('tech')) {
      if (lowerQuery.includes('ai') || lowerQuery.includes('ml') || lowerQuery.includes('llm')) {
        return `**AI/ML Expertise:**\n\n🤖 **Frameworks & Tools:**\n- LangChain (production experience)\n- OpenAI API (GPT models)\n- Ollama (local LLM deployment)\n- Whisper (speech-to-text)\n\n📚 **Techniques:**\n- RAG (Retrieval-Augmented Generation)\n- Vector Search (ChromaDB)\n- Conversation Memory\n- Multi-modal AI\n\n💼 **Real-world Applications:**\n- Travel planning assistant\n- Healthcare session assistant\n- Resume analysis tool\n- Document Q&A system`;
      }
      
      if (lowerQuery.includes('backend') || lowerQuery.includes('api')) {
        return `**Backend & API Development:**\n\n⚡ **Frameworks:**\n- FastAPI (primary)\n- Flask\n\n🔐 **Authentication:**\n- JWT/OAuth2\n- Firebase Auth\n- Multi-provider integration\n\n📡 **API Design:**\n- RESTful architecture\n- WebSockets for real-time\n- Structured contracts\n\n🗄️ **Databases:**\n- PostgreSQL (relational)\n- MongoDB (NoSQL)\n- Firestore (real-time)\n- Redis (caching)\n\n📊 **Data Engineering:**\n- ETL pipelines\n- Spark optimization\n- BigQuery integration`;
      }
      
      const skillsList = Object.entries(portfolioData.skills).map(([category, skills]) => 
        `**${category}:**\n${skills.slice(0, 6).join(', ')}`
      ).join('\n\n');
      return `**Technical Skills Overview:**\n\n${skillsList}\n\nAsk about specific skill areas for detailed insights!`;
    }

    // Education
    if (lowerQuery.includes('education') || lowerQuery.includes('study') || lowerQuery.includes('university') || lowerQuery.includes('degree')) {
      return `**Educational Background:**\n\n🎓 **Master's in Computer Science**\nUniversity at Buffalo - SUNY\nBuffalo, NY | Aug 2024 - Dec 2025\nGPA: 3.6/4.0\n\n🎓 **Bachelor of Technology in Computer Science**\nGuru Nanak Institutions Technical Campus\nHyderabad, India | Aug 2019 - Jul 2023\nGPA: 9.01/10.0 (Excellent Academic Record)\n\n💡 Strong foundation in CS fundamentals, algorithms, and system design`;
    }

    // Achievements
    if (lowerQuery.includes('achievement') || lowerQuery.includes('accomplish') || lowerQuery.includes('impact')) {
      return `**Key Achievements & Impact:**\n\n💰 **Cost Optimization:**\n- Reduced S3 data lake costs by 30% (Valuelabs)\n\n⚡ **Performance:**\n- Cut p95 response time from 3.4s to 1.2s (Valuelabs)\n- Reduced documentation time by 60% (Doctorite.ai)\n\n📈 **Business Metrics:**\n- Increased provider capacity by 12% (Doctorite.ai)\n- Improved CSAT by 9% (Valuelabs)\n- Lowered session drop-offs by 21% (Valuelabs)\n\n🏗️ **Technical Leadership:**\n- Architected secure authentication systems\n- Built HIPAA-compliant healthcare features\n- Deployed production AI assistants`;
    }

    // Contact
    if (lowerQuery.includes('contact') || lowerQuery.includes('email') || lowerQuery.includes('reach') || lowerQuery.includes('hire')) {
      return `**Let's Connect!**\n\n📧 Email: ${portfolioData.personal.email}\n💼 LinkedIn: ${portfolioData.personal.linkedin}\n💻 GitHub: ${portfolioData.personal.github}\n📱 Phone: ${portfolioData.personal.phone}\n\n🚀 **Open to:**\n- Full-time SDE roles\n- AI/ML Engineering positions\n- Backend/Full-stack opportunities\n- Interesting technical challenges\n\nFeel free to reach out for collaborations or opportunities!`;
    }

    // Default with suggestions
    return `I'm Teja's AI Digital Twin with deep knowledge about his professional background. Here are some things you can ask:\n\n💼 **Career Questions:**\n- "Tell me about your work experience"\n- "What projects have you built?"\n- "Rate your skills in [technology]"\n\n🎯 **Job Fit Analysis:**\n- "Are you suitable for [role]?"\n- "How do you match this job description?"\n\n📊 **Specific Inquiries:**\n- "Explain your work at [company]"\n- "What are your key achievements?"\n- "Tell me about your AI/ML experience"\n\nWhat would you like to know?`;
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const aiResponse = { role: 'assistant', content: getDetailedResponse(input) };
      setMessages(prev => [...prev, aiResponse]);
    }, 800);

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
          <span className="absolute -top-2 -right-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center animate-pulse font-bold">
            AI
          </span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-[420px] h-[650px] bg-zinc-900 border border-cyan-500/30 rounded-lg shadow-2xl shadow-cyan-500/20 flex flex-col z-50">
          {/* Header */}
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="relative">
                <Bot size={24} />
                <Sparkles size={12} className="absolute -top-1 -right-1 text-yellow-300 animate-pulse" />
              </div>
              <div>
                <h3 className="font-bold">Teja's AI Digital Twin</h3>
                <p className="text-xs opacity-90">Trained on professional profile</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-zinc-950">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex items-start gap-2 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className={`p-2 rounded-full shrink-0 ${
                  msg.role === 'assistant' 
                    ? 'bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30' 
                    : 'bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30'
                }`}>
                  {msg.role === 'assistant' ? <Bot size={20} className="text-cyan-400" /> : <User size={20} className="text-blue-400" />}
                </div>
                <div className={`flex-1 p-3 rounded-lg ${
                  msg.role === 'assistant' 
                    ? 'bg-zinc-800/50 text-gray-200 border border-zinc-700' 
                    : 'bg-gradient-to-r from-blue-600 to-blue-700 text-white'
                } max-w-[85%]`}>
                  <p className="text-sm whitespace-pre-line leading-relaxed">{msg.content}</p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex items-start gap-2">
                <div className="p-2 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30">
                  <Bot size={20} className="text-cyan-400" />
                </div>
                <div className="bg-zinc-800/50 border border-zinc-700 rounded-lg p-3">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-zinc-700 bg-zinc-900 flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about Teja's experience..."
              className="bg-zinc-800 border-zinc-700 text-white placeholder:text-gray-500 focus:border-cyan-500"
            />
            <Button onClick={handleSend} className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600">
              <Send size={20} />
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default EnhancedAIChat;
