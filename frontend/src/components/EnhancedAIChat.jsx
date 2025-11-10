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
      return `Let me analyze Teja's fit for this role. From what I know about his background, he's an excellent match for full-stack engineering positions, especially those involving AI/ML components.\n\nHe has over 3 years of hands-on experience building production systems. At PM Accelerator, he architected a complete travel platform with AI integration using LangChain and OpenAI. At Doctorite.ai, he built HIPAA-compliant healthcare systems that increased provider capacity by 12%. And at Valuelabs, he demonstrated strong data engineering skills, optimizing Spark pipelines and reducing infrastructure costs by 30%.\n\nWhat really sets him apart is his combination of backend expertise (FastAPI, Python, PostgreSQL), frontend skills (React, Redux), and real AI/ML deployment experience. He's not just familiar with these technologies - he's shipped them to production and measured their business impact.\n\nCurrently pursuing his Master's in Computer Science at University at Buffalo with a 3.6 GPA, so he's continuously expanding his technical depth. If you share the specific job requirements, I can give you an even more detailed analysis of how his experience aligns!`;
    }

    // Skill rating
    if (lowerQuery.includes('rate') || lowerQuery.includes('proficiency') || lowerQuery.includes('level')) {
      return `Great question! Let me break down Teja's technical proficiency based on his real-world experience.\n\nIn Python and FastAPI, he's absolutely expert-level - he's architected multiple production backends from scratch. Same with React for frontend work. His PostgreSQL and MongoDB skills are battle-tested across different companies.\n\nFor AI/ML technologies like LangChain and OpenAI integration, he's at an advanced level with production deployments under his belt. He's built AI assistants that handle real user conversations with memory management and context preservation.\n\nCloud platforms like AWS are where he shines too - he's worked extensively with EC2, S3, Lambda, EMR, and has proven cost optimization skills (saved 30% on infrastructure at Valuelabs).\n\nHis Spark and data engineering skills are solid, with demonstrated experience optimizing large-scale data processing. Docker and CI/CD are part of his regular workflow.\n\nThe key thing is - these aren't just technologies he's learned. Every skill on his profile has been used to solve real business problems and deliver measurable results. Want to know about any specific technology in more detail?`;
    }

    // Introduction with achievements - MORE NATURAL
    if (lowerQuery.includes('who') || lowerQuery.includes('introduce') || lowerQuery.includes('about') || lowerQuery.includes('tell me')) {
      if (lowerQuery.includes('more') || lowerQuery.includes('detail')) {
        return `Absolutely! Let me paint a fuller picture of Teja's professional journey.\n\nHe's currently pursuing his Master's in Computer Science at University at Buffalo (maintaining a strong 3.6 GPA), but what's impressive is his already extensive real-world experience. Before graduate school, he spent over 3 years as a software engineer in India, working across different domains - from healthcare to data engineering.\n\nHis career trajectory shows someone who's always pushing boundaries. At Valuelabs, he didn't just write code - he optimized Spark pipelines, built ETL systems, and saved the company 30% on infrastructure costs. That's the kind of engineer who thinks about business impact, not just features.\n\nWhen he moved to Doctorite.ai, he entered the healthcare space and quickly adapted to HIPAA compliance requirements. He built an AI session assistant that logs conversations to BigQuery, reducing documentation time by 60%. That's significant in healthcare where doctor time is precious.\n\nMost recently at PM Accelerator in Miami, he's working on cutting-edge AI integration - building a travel assistant with multi-modal capabilities (text-to-speech, speech-to-text, image translation). He architected the entire authentication system with Firebase and integrated LangChain with OpenAI for intelligent trip planning.\n\nWhat I find particularly interesting about him is his project work too. His AI-powered job application assistant and privacy-first AI companion show someone who builds for real problems, not just to learn tech. Both projects are on GitHub with clean architecture and thoughtful design.\n\nWould you like to know more about any specific aspect - his projects, work at a particular company, or his technical skills?`;
      }
      return `Let me tell you about Teja Chalikanti. He's a software engineer with a really interesting blend of skills - someone who can build both the frontend users see and the complex backend systems that power applications, plus he's deep into AI/ML integration.\n\nRight now, he's pursuing his Master's in Computer Science at University at Buffalo, but don't let "student" fool you - he already has over 3 years of professional experience building production systems. His journey is pretty impressive: started at Valuelabs doing data engineering and optimization work, moved to Doctorite.ai where he built healthcare platforms, and most recently worked at PM Accelerator on AI-powered travel applications.\n\nWhat stands out about his profile? He's someone who delivers measurable business impact. At Valuelabs, he cut infrastructure costs by 30% and improved chat performance from 3.4s to 1.2s response time. At Doctorite.ai, he increased provider capacity by 12% through automation. These aren't just features - they're real improvements to the bottom line.\n\nOn the technical side, he's proficient in Python, FastAPI, React, and modern cloud platforms (AWS, GCP). But what's more interesting is his AI/LLM work - he's integrated LangChain, OpenAI, and built RAG-based systems in production. He's also built his own projects like an AI job application assistant and a privacy-first personal AI companion.\n\nHe's passionate about building intelligent, scalable solutions that actually solve problems. Want to know more about his specific experiences or skills?`;
    }

    // Detailed work experience - MORE SPECIFIC
    if (lowerQuery.includes('experience') || lowerQuery.includes('work') || lowerQuery.includes('job')) {
      if (lowerQuery.includes('pm accelerator') || lowerQuery.includes('trulmate')) {
        return `His time at PM Accelerator (Trulmate.ai) in Miami was really exciting - this was his most recent role from June to August 2025, working on an AI-powered travel assistant platform.\n\nHe was responsible for some critical pieces of the architecture. First, he designed the entire authentication system from scratch using Firebase, supporting multiple social login providers like Google, Apple, and Facebook. This wasn't just basic OAuth - he handled the complex token exchange, verification flows, and identity linking across devices to ensure users could seamlessly access their data.\n\nOn the feature side, he built the core travel services that made the app useful: SOS detection for emergency situations, real-time location services, weather forecasting with normalized JSON responses, and even calendar sync with both Google and Apple calendars. These weren't isolated features - they all had to work together smoothly.\n\nThe most interesting part was the AI integration. He built an intelligent assistant using LangChain and OpenAI that could actually plan trips for users. It had conversation memory stored in Firestore, so it could remember what you talked about and make contextual recommendations. He connected it to all the backend features - trip creation, weather lookup, city image generation, and personalized recommendations.\n\nHe also added multi-modal capabilities like Text-to-Speech using OpenAI's voice models, Speech-to-Text with Whisper, image translation for travelers abroad, and currency conversion. Plus some safety features like SafeBite for dietary restrictions and SafeMate for incident reporting.\n\nIt was a comprehensive project that showed his ability to work across the stack - from authentication and security to AI integration and user-facing features.`;
      }
      
      if (lowerQuery.includes('doctorite') || lowerQuery.includes('healthcare')) {
        return `Doctorite.ai was a significant chapter in his career - he worked there from January to July 2024 as a Software Engineer, building healthcare technology in Hyderabad.\n\nThe company needed to improve their client-provider workflow, so Teja built a comprehensive Client Portal. This wasn't just a simple booking system - it had intelligent scheduling that synced with provider availability, sent automatic reminders, and included secure assessment delivery using S3 with pre-signed URLs and role-based access control. Everything had to be HIPAA-compliant, which added complexity to the security layer.\n\nWhat's really interesting is the AI session assistant he developed. During therapy or consultation sessions, it would log the Q&A to BigQuery for analytics while preserving the conversation context. The system could then propose intelligent follow-ups for the next session and recommend relevant assessments based on the discussion. This kind of context-aware AI was pretty advanced for a healthcare platform.\n\nThe measurable impact was impressive: he increased provider capacity by 12% - that's huge in healthcare where time is so valuable. How? By reducing documentation time by 60% through automated generation of SOAP notes and progress notes. Doctors and therapists could spend more time with patients instead of typing.\n\nHe also built HIPAA-compliant telehealth features using Twilio for both video calls and phone calls, ensuring secure communication channels.\n\nThis role really showed his ability to work in a regulated industry, deal with sensitive data, build AI-powered features, and deliver real business value through automation. Want to know more about any specific aspect?`;
      }
      
      if (lowerQuery.includes('valuelabs') || lowerQuery.includes('data')) {
        return `Valuelabs was where Teja really honed his data engineering and performance optimization skills. He worked there as a Software Engineer Specialist from November 2022 to November 2023 in Hyderabad.\n\nHis main focus was building robust ETL (Extract, Transform, Load) pipelines using AWS services. He orchestrated workflows with EC2 for compute, EMR for big data processing with Spark, Lambda for serverless functions, and SQS for message queuing. These pipelines would automatically ingest data from various sources, transform it according to business rules, load it into RDS databases, and then generate client reports that were automatically emailed. It was a fully automated data processing system.\n\nOne of his standout achievements was cost optimization - he reduced S3 data lake storage costs by 30%. He did this by implementing intelligent lifecycle rules that automatically archived aged objects to cheaper storage tiers. That's real money saved for the company.\n\nOn the performance side, he tackled Spark optimization on EMR clusters. Large-scale data processing often suffers from data skew (uneven data distribution) which slows everything down. He addressed this and enabled Adaptive Query Execution (AQE), which significantly reduced job runtimes and resource usage. This is advanced data engineering work.\n\nHe also worked on customer-facing features. There was a chat interface that was too slow - p95 response time was 3.4 seconds (meaning 95% of requests took that long or less). He brought it down to 1.2 seconds through FAQ caching and batched API calls. The business impact? Customer satisfaction increased by 9% and session drop-offs decreased by 21%. Those are metrics that matter to a business.\n\nThis role demonstrated his versatility - he could do infrastructure work, big data engineering, performance optimization, and frontend features. Want details on any specific project?`;
      }
      
      const expList = portfolioData.experience.map((exp, idx) => 
        `**${idx + 1}. ${exp.role}** at ${exp.company}\n${exp.duration}\nKey: ${exp.highlights[0]}`
      ).join('\n\n');
      return `Here's an overview of Teja's professional experience:\n\n${expList}\n\nHe's worked across different domains - AI-powered travel (PM Accelerator), healthcare technology (Doctorite.ai), and data engineering (Valuelabs). Each role built on his skills progressively.\n\nWant me to dive deep into any specific company? Just ask "tell me about his work at [company name]" and I'll give you all the details!`;
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

    // Interests and personal side
    if (lowerQuery.includes('interest') || lowerQuery.includes('hobby') || lowerQuery.includes('passion') || lowerQuery.includes('like')) {
      return `That's a great question! While I'm trained primarily on his professional profile, I can tell you what drives him based on his work and projects.\n\nClearly, he's passionate about AI and machine learning - not just as buzzwords, but as tools to solve real problems. His projects show this: building a privacy-first AI companion (because he cares about data privacy), creating a job application assistant (helping people find better opportunities), and integrating AI into healthcare and travel platforms.\n\nHe's also really into system optimization and performance engineering. At Valuelabs, he wasn't satisfied with just making things work - he optimized response times from 3.4s to 1.2s and saved 30% on infrastructure costs. That's someone who gets satisfaction from making things better, not just functional.\n\nThe fact that he's pursuing a Master's degree while already having solid professional experience tells me he values continuous learning. He's not complacent - he wants to deepen his understanding of computer science fundamentals.\n\nHis GitHub activity and personal projects suggest he enjoys building things from scratch, experimenting with new technologies, and solving interesting technical challenges. The privacy-first AI companion especially shows someone who thinks about ethics and user rights in tech.\n\nWant to know more about his technical interests or career aspirations?`;
    }

    // Contact
    if (lowerQuery.includes('contact') || lowerQuery.includes('email') || lowerQuery.includes('reach') || lowerQuery.includes('hire')) {
      return `I'd love to help you connect with Teja! Here's how you can reach him:\n\nEmail is probably your best bet: ${portfolioData.personal.email} - he's pretty responsive to professional inquiries.\n\nYou can also find him on LinkedIn at ${portfolioData.personal.linkedin} where he shares his professional updates, or check out his code on GitHub at ${portfolioData.personal.github}.\n\nIf you prefer a call, you can reach him at ${portfolioData.personal.phone}.\n\nHe's currently open to full-time software engineering roles, especially those involving AI/ML, backend systems, or full-stack development. If you're hiring for positions that need someone who can architect systems, optimize performance, and integrate AI capabilities - he's definitely someone worth talking to.\n\nAre you reaching out for a job opportunity, collaboration, or something else?`;
    }

    // Default with suggestions
    return `Hey! I'm Teja's AI Digital Twin, trained on his complete professional profile. I can give you detailed insights into his career journey, technical skills, projects, and achievements.\n\nHere are some interesting things you could ask me:\n\n💬 "Tell me more about Teja" - I'll share his full professional story\n🎯 "Is he a good fit for [specific role]?" - I'll analyze job compatibility\n⚡ "What are his biggest achievements?" - I'll highlight measurable impact\n🛠️ "Rate his skills in Python/AI/AWS" - I'll give honest proficiency assessments\n🏢 "Explain his work at Doctorite.ai" - I'll deep-dive into specific experiences\n💡 "What projects has he built?" - I'll walk through his personal projects\n📧 "How can I contact him?" - I'll share all his contact information\n\nI'm here to give you authentic, detailed answers - not just resume bullet points. What would you like to know?`;
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
        <div className="fixed bottom-6 right-6 w-[420px] h-[650px] bg-zinc-900 border border-cyan-500/30 rounded-lg shadow-2xl shadow-cyan-500/20 flex flex-col z-[9999]">
          {/* Header - Fixed at top */}
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-4 rounded-t-lg flex items-center justify-between shrink-0">
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
            <button 
              onClick={() => setIsOpen(false)} 
              className="hover:bg-white/20 p-1.5 rounded transition-colors shrink-0"
              aria-label="Close chat"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages - Scrollable */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-zinc-950 custom-scrollbar">
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

          {/* Input - Fixed at bottom */}
          <div className="p-4 border-t border-zinc-700 bg-zinc-900 flex gap-2 shrink-0">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about Teja's experience..."
              className="bg-zinc-800 border-zinc-700 text-white placeholder:text-gray-500 focus:border-cyan-500"
            />
            <Button onClick={handleSend} className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 shrink-0">
              <Send size={20} />
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default EnhancedAIChat;
