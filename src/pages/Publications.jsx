import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar.jsx";
import { ExternalLink } from "lucide-react";

export default function Publications() {
  const publications = [
    {
      title:
        "Masgent: An AI-assisted Materials Simulation Agent",
      journal: "Computer Physics Communications (Submitted)",
      year: 2026,
      link: "https://doi.org/xxx/xxxxxx",
    },
    {
      title:
        "Substitutional Effects at A- and B-Sites in High-Entropy ABO3 Perovskites: Insights from Machine Learning-Accelerated Simulations and Active Learning",
      journal: "Materials Today Energy (Submitted)",
      year: 2025,
      link: "https://doi.org/xxx/xxxxxx",
    },
    {
      title:
        "Unraveling Doping Effects in LaCoO3 via Machine Learning-Accelerated Atomic Simulations and Active Learning",
      journal: "Acta Materialia (Submitted)",
      year: 2025,
      link: "https://doi.org/xxx/xxxxxx",
    },
    {
      title:
        "A Computational Framework for Interface Design Using Lattice Matching, Machine Learning Potentials, and Active Learning: A Case Study on LaCoO3/La2NiO4",
      journal: "Materials Today Physics",
      year: 2025,
      link: "https://doi.org/10.1016/j.mtphys.2025.101940",
    },
    {
      title:
        "Ab initio study on the effect of A-site doping on the stability, equilibrium volume, activation energy barrier, and oxygen diffusivity in La2-xAxNiO4+δ",
      journal: "International Journal of Hydrogen Energy",
      year: 2025,
      link: "https://doi.org/10.1016/j.ijhydene.2025.03.239",
    },
    {
      title:
        "High-Entropy Materials Design by Integrating the First-Principles Calculations and Machine Learning: A Case Study in the Al-Co-Cr-Fe-Ni System",
      journal: "High Entropy Alloys & Materials",
      year: 2024,
      link: "https://doi.org/10.1007/s44210-024-00041-3",
    },
    {
      title:
        "Accelerated discovery of high-performance Al-Si-Mg-Sc casting alloys by integrating active learning with high-throughput CALPHAD calculations",
      journal: "Science and Technology of Advanced Materials",
      year: 2023,
      link: "https://doi.org/10.1080/14686996.2023.2196242",
    },
    {
      title:
        "Ab initio investigations on the electronic properties and stability of Cu-substituted lead apatite (LK-99) family with different doping concentrations (x= 0, 1, 2)",
      journal: "Materials Today Communications",
      year: 2023,
      link: "https://doi.org/10.1016/j.mtcomm.2023.107379",
    },
    {
      title:
        "A systematic ab initio study of vacancy formation energy, diffusivity, and ionic conductivity of Ln2NiO4+ δ (Ln= La, Nd, Pr)",
      journal: "Journal of Power Sources",
      year: 2023,
      link: "https://doi.org/10.1016/j.jpowsour.2023.233200",
    },
    {
      title:
        "Revisit the VEC criterion in high entropy alloys (HEAs) with high-throughput ab initio calculations: a case study with Al-Co-Cr-Fe-Ni system",
      journal: "Journal of Alloys and Compounds",
      year: 2022,
      link: "https://doi.org/10.1016/j.jallcom.2022.165477",
    },
    {
      title:
        "Efficient alloy design of Sr-modified A356 alloys driven by computational thermodynamics and machine learning",
      journal: "Journal of Materials Science & Technology",
      year: 2022,
      link: "https://doi.org/10.1016/j.jmst.2021.09.061",
    },
    {
      title:
        "Boosting for concept design of casting aluminum alloys driven by combining computational thermodynamics and machine learning techniques",
      journal: "Journal of Materials Informatics",
      year: 2021,
      link: "https://doi.org/10.20517/jmi.2021.10",
    },
    {
      title:
        "A machine learning accelerated distributed task management system (Malac-Distmas) and its application in high-throughput CALPHAD computations aiming at efficient alloy design",
      journal: "Advanced Powder Materials",
      year: 2021,
      link: "https://doi.org/10.1016/j.apmate.2021.09.005",
    },
    {
      title:
        "Optimization of casting means and heat treatment routines for improving mechanical and corrosion resistance properties of A356-0.54 Sc casting alloy",
      journal: "Materials Today Communications",
      year: 2020,
      link: "https://doi.org/10.1016/j.mtcomm.2020.101227",
    },
  ];

  // Split the publications
  const ongoing = publications.slice(0, 3);
  const published = publications.slice(3);

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
        <div className="bg-white/10 backdrop-blur-md p-10 rounded-2xl border border-white/10 shadow-2xl w-full max-w-4xl">
          <h1 className="text-4xl font-bold mb-6 text-center text-blue-400">
            Publications
          </h1>

          <p className="text-gray-300 text-center mb-10">
            Below is a selection of my research publications. For a complete list, visit my{" "}
            <a
              href="https://scholar.google.com/citations?user=DzYOUo4AAAAJ"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Google Scholar profile
            </a>
            .
          </p>

          {/* In Progress */}
          <h2 className="text-2xl font-semibold text-green-300 mb-4">
            In Progress
          </h2>
          <ul className="space-y-6">
            {ongoing.map((pub, i) => (
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
                {/* <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors text-sm"
                >
                  View publication <ExternalLink className="w-4 h-4 ml-1" />
                </a> */}
              </li>
            ))}
          </ul>
          <br />


          {/* Published works */}
          <h2 className="text-2xl font-semibold text-green-300 mb-4">
            Published Works
          </h2>
          <ul className="space-y-6">
            {published.map((pub, i) => (
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
