import { useState } from 'react';
import { GoogleGenAI } from '@google/genai';
import aiLogo from '../../assets/ai-logo.png';
import logo from '../../assets/logo2.png';
import { Link } from 'react-router-dom';

const AskAI = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const ai = new GoogleGenAI({
        apiKey: 'AIzaSyBs13liyLkbfYq1uisV0n5iUxAzZMTILPg'
    });

    const askAI = async () => {
        if (!input.trim()) return;

        const userMessage = input.trim();
        setInput('');

        setMessages(prev => [...prev, { type: 'user', text: userMessage }]);
        setLoading(true);
        setError('');

        try {
            const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash',
                contents: userMessage
            });

            const aiText = response.text;
            setMessages(prev => [...prev, { type: 'ai', text: aiText }]);
        } catch (err) {
            console.error('Error:', err);
            const errorMessage = err.message || 'something went wrong. Please try again.';
            setError(errorMessage);
            setMessages(prev => [...prev, {
                type: 'ai',
                text: `❌ Error: ${errorMessage}`
            }]);
        } finally {
            setLoading(false);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            askAI();
        }
    };

    const clearChat = () => {
        setMessages([]);
        setError('');
    };

    return (
        <div className="ask-AI flex min-h-screen bg-[#141414] h-full">
            <div className="chat-area flex-1 bg-[#141414] min-h-screen pb-10 text-white flex flex-col justify-between pt-10">
                {/* Header */}
                <div className="header px-5 md:px-10 py-5 border-b border-gray-700 flex justify-between items-center fixed top-0 left-0 right-0 bg-[#141414] z-10">
                    <Link to="/"><img src={aiLogo} alt="Logo" className="inline-block h-10 mr-2" /></Link>
                    {messages.length > 0 && (
                        <button
                            onClick={clearChat}
                            className="text-sm bg-red-600 hover:bg-red-700 px-4 py-1 rounded-full transition-colors"
                        >
                            Clear Chat
                        </button>
                    )}
                </div>

                {/* Messages */}
                <div className="messages overflow-y-auto flex-1 px-5 md:px-10 pt-15">
                    {messages.length === 0 ? (
                        <div className="text-center text-gray-500 mt-20">
                            <p className="text-3xl mb-4">👋</p>
                            <p className="text-2xl mb-2">Welcome to MedX!</p>
                            <p>Ask me anything and I'll help you</p>
                            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                                <div className="bg-[#202123] p-4 rounded-xl text-left hover:bg-[#2a2b32] transition-colors cursor-pointer" onClick={() => setInput('What are the symptoms of diabetes?')}>
                                    <p className="text-sm text-gray-400">example:</p>
                                    <p>What are the symptoms of diabetes?</p>
                                </div>
                                <div className="bg-[#202123] p-4 rounded-xl text-left hover:bg-[#2a2b32] transition-colors cursor-pointer" onClick={() => setInput('What are the symptoms of high blood pressure?')}>
                                    <p className="text-sm text-gray-400">example:</p>
                                    <p>What are the symptoms of high blood pressure?</p>
                                </div>
                                <div className="bg-[#202123] p-4 rounded-xl text-left hover:bg-[#2a2b32] transition-colors cursor-pointer" onClick={() => setInput('What are the causes of fever?')}>
                                    <p className="text-sm text-gray-400">example:</p>
                                    <p>What are the causes of fever?</p>
                                </div>
                                <div className="bg-[#202123] p-4 rounded-xl text-left hover:bg-[#2a2b32] transition-colors cursor-pointer" onClick={() => setInput('How can I improve my mental health?')}>
                                    <p className="text-sm text-gray-400">example:</p>
                                    <p>How can I improve my mental health?</p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`message ${msg.type === 'user'
                                    ? 'user-message bg-[#3c3d44] ml-auto'
                                    : 'ai-message bg-[#202123]'
                                    } p-5 rounded-2xl mb-5 w-fit max-w-full md:max-w-[70%] animate-fadeIn`}
                            >
                                <div className="flex items-start gap-3">
                                    {msg.type === 'ai' && (
                                        <span className="text-xl"><img src={logo} alt="AI Logo" className="inline-block w-8 h-8 mr-2" /></span>
                                    )}
                                    <p className="whitespace-pre-wrap flex-1">{msg.text}</p>
                                    {msg.type === 'user' && (
                                        <span className="text-xl">👤</span>
                                    )}
                                </div>
                            </div>
                        ))
                    )}
                    {loading && (
                        <div className="message ai-message bg-[#202123] p-5 rounded-2xl mb-5 w-fit max-w-full">
                            <div className="flex items-center gap-3">
                                <span className="text-xl"><img src={logo} alt="AI Logo" className="inline-block w-8 h-8 mr-2" /></span>
                                <p className="flex items-center gap-1">
                                    <span className="animate-pulse">Loading</span>
                                    <span className="animate-bounce">.</span>
                                    <span className="animate-bounce" style={{ animationDelay: '0.1s' }}>.</span>
                                    <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>.</span>
                                </p>
                            </div>
                        </div>
                    )}
                </div>

                {/* Input Area */}
                <div className="input-area mt-5">
                    <div className="flex items-center gap-3 px-5 md:px-10">
                        <textarea
                            rows="1"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            className="flex-1 resize-none bg-[#444654] p-3 rounded-2xl outline-none text-white placeholder-gray-500 focus:ring-2 focus:ring-[#19A7CE] transition-all"
                            placeholder="write your question here..."
                            disabled={loading}
                        />
                        <button
                            onClick={askAI}
                            disabled={loading || !input.trim()}
                            className="bg-[#19A7CE] px-6 py-2 rounded-full hover:bg-[#148AA1] duration-300 disabled:bg-gray-600 disabled:cursor-not-allowed flex items-center gap-2 shadow-lg hover:shadow-xl transition-all"
                        >
                            <span>Send</span>
                            <i className="fa-solid fa-paper-plane"></i>
                        </button>
                    </div>
                    {error && (
                        <p className="text-red-400 text-sm px-5 md:px-10 mt-2 animate-pulse">
                            ⚠️ {error}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AskAI;