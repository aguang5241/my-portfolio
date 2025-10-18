import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar.jsx";
import { BookOpen, ExternalLink } from "lucide-react";

export default function Publications() {
  const publications = [
    {
      title:
        "Defect Chemistry and Mixed Conduction in Ruddlesden–Popper Nickelates for Solid Oxide Fuel Cell Cathodes",
      journal: "Materials Today Physics",
      year: 2025,
      link: "https://doi.org/10.xxxx/matphy.2025.xxx",
    },
    {
      title:
        "Unraveling Doping Effects in LaCoO₃ via Machine Learning–Accelerated First-Principles Simulations",
      journal: "Applied Materials Today",
      year: 2024,
      link: "https://doi.org/10.xxxx/apmat.2024.xxx",
    },
    {
      title:
        "A Computational Framework for Interface Design Using Lattice Matching, Machine Learning Potentials, and Active Learning",
      journal: "Journal of Chemical Theory and Computation",
      year: 2024,
      link: "https://doi.org/10.xxxx/jctc.2024.xxx",
    },
    {
      title:
        "High-Entropy Perovskites for Energy Conversion and Storage: A Machine Learning Perspective",
      journal: "Energy & Environmental Materials",
      year: 2023,
      link: "https://doi.org/10.xxxx/eem.2023.xxx",
    },
  ];

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
      <div className="flex-1 lg:ml-80 flex flex-col items-center justify-center p-6">
        <div className="bg-white/10 backdrop-blur-md p-10 rounded-2xl border border-white/10 shadow-2xl w-full max-w-4xl">
          <h1 className="text-4xl font-bold mb-6 text-center flex items-center justify-center gap-3">
            <BookOpen className="w-8 h-8 text-blue-400" />
            Publications
          </h1>

          <p className="text-gray-300 text-center mb-10">
            Below is a selected list of my publications and ongoing research
            efforts. For a complete list, visit my{" "}
            <a
              href="https://scholar.google.com/citations?user=GGK2czoAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Google Scholar profile
            </a>
            .
          </p>

          {/* Publications list */}
          <ul className="space-y-6">
            {publications.map((pub, i) => (
              <li
                key={i}
                className="bg-white/5 hover:bg-white/10 transition-all duration-300 rounded-xl p-5 border border-white/10 shadow-md"
              >
                <h3 className="text-xl font-semibold text-white mb-1">
                  {pub.title}
                </h3>
                <p className="text-gray-400 text-sm italic mb-2">
                  {pub.journal}, {pub.year}
                </p>
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors text-sm"
                >
                  View publication <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </li>
            ))}
          </ul>
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
