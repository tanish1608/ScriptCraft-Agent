import { Scroll } from 'lucide-react';

export default function Header() {
  return (
    <div className="flex items-center space-x-3 mb-12">
      <Scroll className="w-8 h-8 text-purple-400" />
      <h1 className="text-3xl font-bold">ScriptCraft AI</h1>
    </div>
  );
}