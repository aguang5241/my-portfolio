import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar.jsx";
import { Mail, MapPin, Github, Linkedin, Coffee } from "lucide-react";

export default function Contact() {
  return (
    // Background color and animation
    <div className="min-h-screen bg-gradient-to-r from-[#0a0f2c] via-[#0b2451] to-[#073a59] bg-[length:200%_200%] animate-gradient-x flex relative overflow-hidden text-white">
    
      {/* Background circles */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-green-500/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-yellow-500/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-red-500/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '5s'}}></div>
      </div>
      
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 lg:ml-80 flex flex-col items-center justify-center p-6 z-10">
        <div className="bg-white/10 backdrop-blur-md p-10 rounded-2xl border border-white/10 shadow-2xl w-full max-w-3xl">
          <h1 className="text-4xl font-bold mb-6 text-center text-blue-400">
            Contact Me
          </h1>
          <p className="text-gray-300 text-center mb-10">
            Feel free to reach out for collaborations, research discussions, or
            new ideas.
          </p>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Email */}
            <div className="flex items-center justify-between bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-blue-400" />
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a
                    href="mailto:gliu4@wpi.edu"
                    className="text-white hover:underline"
                  >
                    gliu4@wpi.edu
                  </a>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center justify-between bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center gap-4">
                <MapPin className="w-6 h-6 text-red-400" />
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="text-white">Worcester, MA, USA</p>
                </div>
              </div>
            </div>

            {/* GitHub */}
            <a
              href="https://github.com/aguang5241"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <Github className="w-6 h-6 text-white" />
                <div>
                  <p className="text-sm text-gray-400">GitHub</p>
                  <p className="text-white">github.com/aguang5241</p>
                </div>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/aguang5241"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <Linkedin className="w-6 h-6 text-blue-500" />
                <div>
                  <p className="text-sm text-gray-400">LinkedIn</p>
                  <p className="text-white">linkedin.com/in/aguang5241</p>
                </div>
              </div>
            </a>

            {/* Buy Me a Coffee */}
            <a
              href="https://buymeacoffee.com/aguang5241"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <Coffee className="w-6 h-6 text-yellow-400" />
                <div>
                  <p className="text-sm text-gray-400">Support</p>
                  <p className="text-white">Buy Me a Coffee ☕</p>
                </div>
              </div>
            </a>
          </div>

          {/* Optional footer text */}
          <p className="text-center text-gray-400 text-sm mt-8">
            © {new Date().getFullYear()} Guangchen Liu · All Rights Reserved
          </p>
        </div>
        {/* Back to Home */}
        <Link
          to="/"
          className="mt-10 px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition-all duration-300 shadow-lg"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
