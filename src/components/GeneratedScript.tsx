import React from 'react';
import { ThumbsUp } from 'lucide-react';
import VoiceControls from './VoiceControls';
import ChatInterface from './ChatInterface';

interface GeneratedScriptProps {
  script: string;
  onScriptUpdate: (newScript: string) => void;
}

export default function GeneratedScript({ script, onScriptUpdate }: GeneratedScriptProps) {
  return (
    <div className="mt-8 p-6 bg-gray-800 rounded-lg border-2 border-gray-700">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold">Generated Script</h3>
        <ThumbsUp className="w-5 h-5 text-purple-400" />
      </div>
      <pre className="whitespace-pre-wrap font-mono text-sm text-gray-300">
        {script}
      </pre>
      <VoiceControls text={script} />
      <ChatInterface currentScript={script} onScriptUpdate={onScriptUpdate} />
    </div>
  );
}