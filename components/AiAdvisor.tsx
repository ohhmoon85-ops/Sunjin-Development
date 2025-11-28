import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User } from 'lucide-react';
import { generateAIResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

export const AiAdvisor: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: '안녕하세요. 선진개발 AI 파트너입니다. 부동산 개발, 인허가, 리모델링 등 궁금하신 점을 말씀해 주세요.',
      timestamp: Date.now()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const responseText = await generateAIResponse(input);
      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText,
        timestamp: Date.now()
      };
      setMessages(prev => [...prev, aiMsg]);
    } catch (error) {
      // Error handling is inside service, but safe fallback
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[90vw] max-w-sm bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden flex flex-col animate-fade-in-up" style={{ height: '500px', maxHeight: '70vh' }}>
          {/* Header */}
          <div className="bg-navy-900 text-white p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="bg-gold-500 p-1 rounded-full">
                <Bot size={16} className="text-navy-900" />
              </div>
              <div>
                <h3 className="font-bold text-sm">Sunjin AI Advisor</h3>
                <p className="text-xs text-gray-300">실시간 부동산 상담 도우미</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 text-sm ${
                    msg.role === 'user'
                      ? 'bg-navy-900 text-white rounded-br-none'
                      : 'bg-white border border-gray-200 text-gray-800 rounded-bl-none shadow-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 p-3 rounded-lg rounded-bl-none shadow-sm flex gap-1 items-center">
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-white border-t border-gray-100 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="궁금한 내용을 입력하세요..."
              className="flex-1 px-4 py-2 bg-gray-100 border-none rounded-full focus:ring-2 focus:ring-navy-900 focus:outline-none text-sm"
            />
            <button
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="p-2 bg-gold-500 text-white rounded-full hover:bg-gold-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center justify-center w-14 h-14 bg-navy-900 text-gold-500 rounded-full shadow-lg hover:scale-110 transition-all duration-300 focus:outline-none ring-4 ring-white"
      >
        {isOpen ? <X size={28} /> : <MessageSquare size={28} className="group-hover:animate-pulse" />}
      </button>
    </div>
  );
};