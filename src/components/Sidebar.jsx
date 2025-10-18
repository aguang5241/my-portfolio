import { useState } from "react";
import avatarImg from '../assets/FaceQ.png';
import { Link } from "react-router-dom";
import {
  User,
  BookOpen,
  Home,
  Globe,
  Github,
  Linkedin,
  IdCard,
  GraduationCap,
  BookMarked,
  Coffee,
  Menu,
  X,
} from "lucide-react";

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* --- SIDEBAR PANEL --- */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-80 bg-black/20 backdrop-blur-xl border-r border-white/10
        transform transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="p-6 text-white h-full overflow-y-auto relative">
          {/* Close button (visible on mobile only) */}
          <button
            onClick={() => setSidebarOpen(false)}
            className="absolute top-4 right-4 p-2 rounded-lg hover:bg-white/10 transition-colors lg:hidden"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Avatar + name */}
          <div className="mb-8 flex flex-col items-center text-center">
            <a
              href="https://github.com/aguang5241"
              target="_blank"
              rel="noopener noreferrer"
              className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4 hover:scale-105 transition-transform duration-300"
            >
              <img
                src={avatarImg}
                alt="Avatar"
                className="w-20 h-20 rounded-full object-cover border-2 border-white/20"
              />
            </a>
            <h2 className="text-2xl font-bold mb-2 text-white">Guangchen Liu</h2>
            <p className="text-gray-300 text-sm">
              Stay Hungry, Stay Foolish & Stay Awesome!
            </p>
          </div>

          {/* --- Navigation Links --- */}
          <div className="space-y-4">
            <div className="border-b border-white/10 pb-4">
              <h3 className="text-lg font-semibold mb-3 text-blue-300">
                Navigation
              </h3>

              <Link
                to="/"
                onClick={() => setSidebarOpen(false)}
                className="flex items-center space-x-3 w-full p-3 rounded-lg hover:bg-white/10 transition-colors"
              >
                <Home className="w-5 h-5 text-indigo-400" />
                <span>Home</span>
              </Link>

              <Link
                to="/cv"
                onClick={() => setSidebarOpen(false)}
                className="flex items-center space-x-3 w-full p-3 rounded-lg hover:bg-white/10 transition-colors"
              >
                <User className="w-5 h-5 text-green-400" />
                <span>Profile & CV</span>
              </Link>

              <Link
                to="/publications"
                onClick={() => setSidebarOpen(false)}
                className="flex items-center space-x-3 w-full p-3 rounded-lg hover:bg-white/10 transition-colors"
              >
                <BookOpen className="w-5 h-5 text-purple-400" />
                <span>Publications</span>
              </Link>
            </div>

            {/* --- External Links --- */}
            <div>
              <h3 className="text-lg font-semibold mb-3 text-blue-300">Links</h3>
              <div className="space-y-2">
                <a
                  href="https://github.com/aguang5241"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 w-full p-3 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <Github className="w-5 h-5 text-white" />
                  <span>GitHub</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/aguang5241"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 w-full p-3 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <Linkedin className="w-5 h-5 text-gray-400" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href="https://orcid.org/0000-0002-5734-7748"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 w-full p-3 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <IdCard className="w-5 h-5 text-green-400" />
                  <span>ORCID</span>
                </a>

                <a
                  href="https://scholar.google.com/citations?user=DzYOUo4AAAAJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 w-full p-3 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <GraduationCap className="w-5 h-5 text-yellow-400" />
                  <span>Google Scholar</span>
                </a>

                <a
                  href="https://www.researchgate.net/profile/Guangchen-Liu-4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 w-full p-3 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <BookMarked className="w-5 h-5 text-blue-400" />
                  <span>ResearchGate</span>
                </a>

                <a
                  href="https://wp.wpi.edu/impd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 w-full p-3 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <Globe className="w-5 h-5 text-cyan-400" />
                  <span>Team Website</span>
                </a>

                <a
                  href="https://buymeacoffee.com/aguang5241"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 w-full p-3 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <Coffee className="w-5 h-5 text-teal-400" />
                  <span>Buy Me a Coffee</span>
                </a>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 pt-4 border-t border-white/10 text-center text-xs text-gray-400">
            <p>© 2025 Guangchen Liu</p>
          </div>
        </div>
      </div>

      {/* --- OPEN BUTTON (always visible on mobile) --- */}
      <button
        onClick={() => setSidebarOpen(true)}
        className="lg:hidden fixed top-6 left-6 z-[70] p-3 rounded-full bg-black/20 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 text-white"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* --- MOBILE OVERLAY (darkens background when sidebar open) --- */}
      {sidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </>
  );
}
