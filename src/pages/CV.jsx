import { Link } from "react-router-dom";
import Sidebar from '../components/Sidebar.jsx'
import { Link2Icon } from "lucide-react";

export default function CV() {
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

      {/* Main content (with left margin for sidebar on desktop) */}
      <div className="flex-1 lg:ml-80 flex flex-col items-center justify-center p-6">
        <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-xl w-full max-w-3xl space-y-6">
          <h1 className="text-4xl font-bold mb-6 text-center text-blue-400">Curriculum Vitae</h1>

          <section className="bg-white/5 hover:bg-white/10 transition-all duration-300 rounded-xl p-5 border border-white/10 shadow-md">
            <h2 className="text-2xl font-semibold text-blue-300 mb-2">Research Interests</h2>
            <p className="text-gray-200 mb-4 text-justify">
              Ph.D. candidate in Materials Engineering at Worcester Polytechnic Institute, specializing in computational materials design through the integration of first-principles calculations and machine learning. Research centers on exploring structure-property relationships and enabling accelerated discovery of advanced functional materials. Supported by a strong publication record and experience in interdisciplinary collaboration across theory, simulation, and data-driven approaches.
            </p>
          </section>

          <section className="bg-white/5 hover:bg-white/10 transition-all duration-300 rounded-xl p-5 border border-white/10 shadow-md">
            <h2 className="text-2xl font-semibold text-blue-300 mb-2">Education</h2>
            <ul className="space-y-3 text-gray-200">
              <li className="grid grid-cols-2 gap-2">
                <div>
                  <strong>Worcester Polytechnic Institute, USA</strong> <br />
                  <span className="text-gray-400">Materials Engineering</span>
                </div>
                <div className="text-right">
                  <strong>Ph.D.</strong> <br />
                  <span className="text-gray-400">Aug 2021 – Present</span>
                </div>
              </li>

              <li className="grid grid-cols-2 gap-2">
                <div>
                  <strong>Central South University, China</strong> <br />
                  <span className="text-gray-400">Materials Engineering</span>
                </div>
                <div className="text-right">
                  <strong>M.S.</strong> <br />
                  <span className="text-gray-400">Aug 2018 – Jun 2021</span>
                </div>
              </li>

              <li className="grid grid-cols-2 gap-2">
                <div>
                  <strong>Central South University, China</strong> <br />
                  <span className="text-gray-400">Powder Materials Science & Engineering</span>
                </div>
                <div className="text-right">
                  <strong>B.S.</strong> <br />
                  <span className="text-gray-400">Aug 2014 – Jun 2018</span>
                </div>
              </li>
            </ul>
          </section>

          <section className="bg-white/5 hover:bg-white/10 transition-all duration-300 rounded-xl p-5 border border-white/10 shadow-md">
            <h2 className="text-2xl font-semibold text-blue-300 mb-2">Projects</h2>
            <ul className="space-y-3 text-gray-200">
              <li className="grid grid-cols-1 md:grid-cols-[5fr_1fr] gap-2 items-start">
                <div>
                  <strong>HEP-Explorer</strong> <br />
                  <span className="text-gray-400">An application for analyzing substitutional effects in ABO₃ high-entropy perovskites (HEPs), supporting compositional screening, property prediction, and performance optimization.</span> <br />
                  <Link2Icon className="inline w-4 h-4 text-blue-400 mr-1" />
                  <a href="https://github.com/aguang5241/HEP-Explorer" className="text-gray-400 hover:underline break-words">https://github.com/aguang5241/HEP-Explorer</a>
                </div>
                <div className="text-right">
                  <strong>2025</strong>
                </div>
              </li>

              <li className="grid grid-cols-1 md:grid-cols-[5fr_1fr] gap-2 items-start">
                <div>
                  <strong>LCO-Doper</strong> <br />
                  <span className="text-gray-400">An application for analyzing dopant effects on LaCoO₃ (LCO), supporting composition optimization and material performance enhancement.</span> <br />
                  <Link2Icon className="inline w-4 h-4 text-blue-400 mr-1" />
                  <a href="https://github.com/aguang5241/LCO-Doper" className="text-gray-400 hover:underline break-words">https://github.com/aguang5241/LCO-Doper</a>
                </div>
                <div className="text-right">
                  <strong>2025</strong>
                </div>
              </li>

              <li className="grid grid-cols-1 md:grid-cols-[5fr_1fr] gap-2 items-start">
                <div>
                  <strong>Interface-Maker</strong> <br />
                  <span className="text-gray-400">An application for generating customizable slabs and interfaces for first-principles simulations.</span> <br />
                  <Link2Icon className="inline w-4 h-4 text-blue-400 mr-1" />
                  <a href="https://github.com/aguang5241/Interface-Maker" className="text-gray-400 hover:underline break-words">https://github.com/aguang5241/Interface-Maker</a>
                </div>
                <div className="text-right">
                  <strong>2025</strong>
                </div>
              </li>

              <li className="grid grid-cols-1 md:grid-cols-[5fr_1fr] gap-2 items-start">
                <div>
                  <strong>HEA-ML</strong> <br />
                  <span className="text-gray-400">An application for designing Al-Fe-Co-Cr-Ni high-entropy alloys by combining first-principles calculations and machine learning.</span> <br />
                  <Link2Icon className="inline w-4 h-4 text-blue-400 mr-1" />
                  <a href="https://github.com/aguang5241/HEA-ML" className="text-gray-400 hover:underline break-words">https://github.com/aguang5241/HEA-ML</a>
                </div>
                <div className="text-right">
                  <strong>2024</strong>
                </div>
              </li>

              <li className="grid grid-cols-1 md:grid-cols-[5fr_1fr] gap-2 items-start">
                <div>
                  <strong>Alloy-Supermarket</strong> <br />
                  <span className="text-gray-400">An application that integrates computational thermodynamics and machine learning for Sc-modified Al-Si-Mg alloy design.</span> <br />
                  <Link2Icon className="inline w-4 h-4 text-blue-400 mr-1" />
                  <a href="https://github.com/aguang5241/Alloy-Supermarket" className="text-gray-400 hover:underline break-words">https://github.com/aguang5241/Alloy-Supermarket</a>
                </div>
                <div className="text-right">
                  <strong>2022</strong>
                </div>
              </li>
            </ul>
          </section>

          <section className="bg-white/5 hover:bg-white/10 transition-all duration-300 rounded-xl p-5 border border-white/10 shadow-md">
            <h2 className="text-2xl font-semibold text-blue-300 mb-2">Skills</h2>
            <ul className="space-y-3 text-gray-200">
              <li className="grid grid-cols-2 gap-2">
                <div>
                  <strong>First-Principles Calculations</strong> <br />
                  <span className="text-gray-400">VASP, VESTA, ASE, Pymatgen</span> <br />
                </div>
                <div>
                  <strong>Machine Learning</strong> <br />
                  <span className="text-gray-400">PyTorch, Scikit-learn, SciPy, NumPy, Pandas</span> <br />
                </div>
              </li>

              <li className="grid grid-cols-2 gap-2">
                <div>
                  <strong>Programming</strong> <br />
                  <span className="text-gray-400">Python, C#, C++, Javascript</span> <br />
                </div>
                <div>
                  <strong>Molecular Dynamics</strong> <br />
                  <span className="text-gray-400">Matlantis, LAMMPS</span> <br />
                </div>
              </li>

              <li className="grid grid-cols-2 gap-2">
                <div>
                  <strong className="break-words">Thermodynamics</strong> <br />
                  <span className="text-gray-400">ThermoCalc, Pandat</span> <br />
                </div>
                <div>
                  <strong>Data Visualization</strong> <br />
                  <span className="text-gray-400">Matplotlib, Seaborn, Plotly</span> <br />
                </div>
              </li>
            </ul>
          </section>

          <section className="bg-white/5 hover:bg-white/10 transition-all duration-300 rounded-xl p-5 border border-white/10 shadow-md">
            <h2 className="text-2xl font-semibold text-blue-300 mb-2">Awards</h2>
            <ul className="space-y-3 text-gray-200">
              <li className="grid grid-cols-[5fr_1fr] gap-2">
                <div>
                  <strong>National Science Foundation Scholarship</strong> <br />
                  <span className="text-gray-400">CALPHAD</span> <br />
                </div>
                <div className="text-right">
                  <strong>Jun 2023</strong>
                </div>
              </li>

              <li className="grid grid-cols-[5fr_1fr] gap-2">
                <div>
                  <strong>Golden Egret Scholarship</strong> <br />
                  <span className="text-gray-400">Xiamen Golden Egret Special Alloy Co., LTD.</span> <br />
                </div>
                <div className="text-right">
                  <strong>Dec 2020</strong>
                </div>
              </li>

              <li className="grid grid-cols-[5fr_1fr] gap-2">
                <div>
                  <strong>Best Paper Award - Grand Prize</strong> <br />
                  <span className="text-gray-400">Hunan Education Department</span> <br />
                </div>
                <div className="text-right">
                  <strong>Dec 2020</strong>
                </div>
              </li>

              <li className="grid grid-cols-[5fr_1fr] gap-2">
                <div>
                  <strong>Best Poster Award – First Prize</strong> <br />
                  <span className="text-gray-400">Graduate School of Central South University</span> <br />
                </div>
                <div className="text-right">
                  <strong>Dec 2020</strong>
                </div>
              </li>
            </ul>
          </section>

          <section className="bg-white/5 hover:bg-white/10 transition-all duration-300 rounded-xl p-5 border border-white/10 shadow-md">
            <h2 className="text-2xl font-semibold text-blue-300 mb-2">Publications</h2>
            <p className="text-gray-200">
              See full list on the{" "}
              <Link to="/publications" className="text-blue-400 hover:underline">
                Publications
              </Link>{" "}
              page.
            </p>
          </section>

          {/* Optional footer text */}
          <p className="text-center text-gray-400 text-sm mt-8">
            © {new Date().getFullYear()} Guangchen Liu · All Rights Reserved
          </p>
        </div>

        <Link
          to="/"
          className="mt-8 px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition-all duration-300 shadow-lg"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
