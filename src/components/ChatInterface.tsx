import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { inputBaseStyles, primaryButtonStyles } from '../styles/commonStyles';
import { modifyScript } from '../services/openai/api';

interface ChatInterfaceProps {
  currentScript: string;
  onScriptUpdate: (newScript: string) => void;
}

export default function ChatInterface({ currentScript, onScriptUpdate }: ChatInterfaceProps) {
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || isLoading) return;

    setIsLoading(true);
    try {
      const updatedScript = await modifyScript(currentScript, message);
      onScriptUpdate(updatedScript);
      setMessage('');
    } catch (error) {
      console.error('Error modifying script:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-4">Modify Script</h3>
      <form onSubmit={handleSubmit} className="flex space-x-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter your modification request..."
          className={`${inputBaseStyles} flex-1`}
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading}
          className={`${primaryButtonStyles} px-6 py-2 flex items-center space-x-2 disabled:opacity-50`}
        >
          {isLoading ? (
            <span>Processing...</span>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Send</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}