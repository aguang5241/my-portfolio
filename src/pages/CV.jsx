import { Link } from "react-router-dom";
import Sidebar from '../components/Sidebar.jsx'
import { ExternalLink } from "lucide-react";

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
      <div className="flex-1 lg:ml-80 flex flex-col items-center justify-center p-6 z-10 border-2">
        <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-xl w-full max-w-3xl space-y-6">
          <h1 className="text-4xl font-bold mb-6 text-center text-blue-400">Curriculum Vitae</h1>

          {/* Download CV */}
          <div className="flex justify-center gap-4 mb-6">
            <a
              href="./academic-resume.pdf"
              download="Guangchen_Liu_Academic_CV.pdf"
              className="px-3 py-1 text-sm bg-blue-400 hover:bg-blue-500 text-white rounded-lg shadow-md transition-all duration-300 flex items-center gap-2"
            >
              <ExternalLink className="w-4 h-4" /> Download Academic CV
            </a>

            <a
              href="./industry-resume.pdf"
              download="Guangchen_Liu_Industry_CV.pdf"
              className="px-3 py-1 text-sm bg-purple-400 hover:bg-purple-500 text-white rounded-lg shadow-md transition-all duration-300 flex items-center gap-2"
            >
              <ExternalLink className="w-4 h-4" /> Download Industry CV
            </a>
          </div>

          {/* Summary */}
          <section className="bg-white/5 hover:bg-white/10 transition-all duration-300 rounded-xl p-5 border border-white/10 shadow-md">
            <h2 className="text-2xl font-semibold text-blue-300 mb-2 flex items-center gap-3">
              <span className="w-3 h-3 rounded-full inline-block from-blue-500 to-purple-600 bg-gradient-to-r"></span>
              Summary
            </h2>
            <p className="text-gray-200">
              Ph.D. candidate in Materials Engineering at Worcester Polytechnic Institute, specializing in <strong>machine-learning-accelerated first-principles simulations</strong> for advanced materials design. Research integrates <strong>DFT</strong>, <strong>molecular dynamics</strong>, and <strong>active learning</strong> to elucidate structure-property relationships in complex oxides, high-entropy materials, and alloy systems. Developer of <strong>open-source frameworks</strong>, including <em>HEA-ML</em>, <em>Interface-Maker</em>, <em>LCO-Doper</em>, and <em>HEP-Explorer</em> for data-driven discovery of functional materials.
            </p>
          </section>

          {/* Research Interests */}
          <section className="bg-white/5 hover:bg-white/10 transition-all duration-300 rounded-xl p-5 border border-white/10 shadow-md">
            <h2 className="text-2xl font-semibold text-blue-300 mb-2 flex items-center gap-3">
              <span className="w-3 h-3 rounded-full inline-block from-blue-500 to-purple-600 bg-gradient-to-r"></span>
              Research Interests
            </h2>
            <ul className="list-disc list-inside text-gray-200 space-y-2">
              <li><strong>Machine-learning-accelerated atomic simulations</strong> for the design and discovery of complex materials.</li>
              <li><strong>Defect chemistry, doping, and ionic transport</strong> in perovskite oxides and high-entropy materials.</li>
              <li><strong>Computational frameworks for interface modeling and stability prediction.</strong></li>
              <li><strong>Data-driven alloy design</strong> integrating thermodynamics and machine learning.</li>
            </ul>
          </section>

          {/* Education */}
          <section className="bg-white/5 hover:bg-white/10 transition-all duration-300 rounded-xl p-5 border border-white/10 shadow-md">
            <h2 className="text-2xl font-semibold text-blue-300 mb-2 flex items-center gap-3">
              <span className="w-3 h-3 rounded-full inline-block from-blue-500 to-purple-600 bg-gradient-to-r"></span>
              Education
            </h2>
            <ul className="space-y-3 text-gray-200">
              <li className="grid grid-cols-2 gap-2">
                <div>
                  <strong>Worcester Polytechnic Institute, USA</strong> <br />
                  <span className="text-gray-400">Materials Engineering</span>
                </div>
                <div className="text-right">
                  <strong>2021 - Present</strong> <br />
                  <span className="text-gray-400">Ph.D.</span>
                </div>
              </li>

              <li className="grid grid-cols-2 gap-2">
                <div>
                  <strong>Central South University, China</strong> <br />
                  <span className="text-gray-400">Materials Engineering</span>
                </div>
                <div className="text-right">
                  <strong>2018 - 2021</strong> <br />
                  <span className="text-gray-400">M.S.</span>
                </div>
              </li>

              <li className="grid grid-cols-2 gap-2">
                <div>
                  <strong>Central South University, China</strong> <br />
                  <span className="text-gray-400">Powder Materials Science & Engineering</span>
                </div>
                <div className="text-right">
                  <strong>2014 - 2018</strong> <br />
                  <span className="text-gray-400">B.S.</span>
                </div>
              </li>
            </ul>
          </section>

          {/* Research Experiences */}
          <section className="bg-white/5 hover:bg-white/10 transition-all duration-300 rounded-xl p-5 border border-white/10 shadow-md">
            <h2 className="text-2xl font-semibold text-blue-300 mb-2 flex items-center gap-3">
              <span className="w-3 h-3 rounded-full inline-block from-blue-500 to-purple-600 bg-gradient-to-r"></span>
              Research Experiences
            </h2>
            <ul className="space-y-3 text-gray-200">
              <li className="grid grid-cols-2 gap-2">
                <div>
                  <strong> 
                    <a
                      href="https://wp.wpi.edu/impd/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center hover:hover:underline break-words"
                    >
                      IMPD Group | Advisor: Prof. Yu Zhong<ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </strong> <br />
                  <span className="text-gray-400">Worcester Polytechnic Institute, USA</span>
                </div>
                <div className="text-right">
                  <strong>2021 - Present</strong> <br />
                  <span className="text-gray-400">Research Assistant</span>
                </div>
              </li>

              <p className="text-gray-200">
                Ph.D. research focuses on integrating first-principles calculations, molecular dynamics, and machine learning to accelerate the design and discovery of complex oxides, interfaces, and high-entropy materials.
              </p>

              <ul className="list-disc list-inside text-gray-200 space-y-2">
                <li>Led the <strong>high-entropy alloy (HEA)</strong> design effort in the Al-Co-Cr-Fe-Ni system, integrating first-principles calculations and machine learning to map phase stability and elastic properties.</li>
                <li>Developed <strong>machine-learning-accelerated atomic simulation frameworks</strong> integrating DFT, molecular dynamics, neural network potentials, and Bayesian active learning to efficiently predict formation energies, diffusion coefficients, and oxygenvacancy energetics in complex oxides with DFT-level accuracy.</li>
                <li>Published <strong>9 first-author and co-author papers</strong> in <em>High Entropy Alloys & Materials</em>, <em>Materials Today Physics</em>, <em>Materials Today Communication</em>, <em>Journal of Alloys and Compounds</em>, etc.</li>
                <li>Created <strong>4 open-source research platforms</strong>:</li>
                <ul className="list-disc list-inside text-gray-200 ml-5 space-y-2">
                  <li><strong>HEA-ML:</strong> a framework combining first-principles calculations and machine learning for phase stability and mechanical property prediction in Al-Co-Cr-Fe-Ni high-entropy alloys.</li>
                  <li><strong>Interface-Maker:</strong> a lattice-matching and interface-generation tool coupling ML potentials with DFT to model LaCoO₃/La₂NiO₄ interfaces, achieving over tenfold efficiency improvement in interfacial energy exploration.</li>
                  <li><strong>LCO-Doper:</strong> an active-learning framework for dopant optimization in LaCoO₃ (LCO), revealing composition-structure-property relationships governing lattice distortion and ionic conductivity.</li>
                  <li><strong>HEP-Explorer:</strong> a multi-target Bayesian neural network platform for investigating substitutional effects in high-entropy perovskites (HEP), incorporating Pareto-front screening for property trade-offs.</li>
                </ul>
              </ul>

              {/* Add a horizontal line */}
              <hr className="my-4 border-gray-400" />

              <li className="grid grid-cols-2 gap-2">
                <div>
                  <strong> 
                    <a
                      href="https://ppmgroupcn.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center hover:hover:underline break-words"
                    >
                      PPM Group | Advisor: Prof. Lijun Zhang<ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </strong> <br />
                  <span className="text-gray-400">Central South University, China</span>
                </div>
                <div className="text-right">
                  <strong>2018 - 2021</strong> <br />
                  <span className="text-gray-400">M.S. Researcher</span>
                </div>
              </li>

              <p className="text-gray-200">
                M.S. work centered on coupling computational thermodynamics with machine learning to optimize aluminum-based casting alloys and understand composition–microstructure–property relationships.
              </p>

              <ul className="list-disc list-inside text-gray-200 space-y-2">
                <li>Developed <strong>Alloy-Supermarket</strong>, an open-source platform that couples <strong>Thermo-Calc</strong> and <strong>machine learning</strong> to design Scmodified A356 Al-Si-Mg casting alloys by linking composition, microstructure, and mechanical properties.</li>
                <li>Published <strong>2 first-author papers</strong> in <em>JMST</em> and <em>Materials Today Communications</em>.</li>
              </ul>
              
            </ul>
          </section>

          {/* Research Projects */}
          <section className="bg-white/5 hover:bg-white/10 transition-all duration-300 rounded-xl p-5 border border-white/10 shadow-md">
            <h2 className="text-2xl font-semibold text-blue-300 mb-2 flex items-center gap-3">
              <span className="w-3 h-3 rounded-full inline-block from-blue-500 to-purple-600 bg-gradient-to-r"></span>
              Research Projects
            </h2>
            <ul className="space-y-3 text-gray-200">
              <li className="grid grid-cols-1 md:grid-cols-[5fr_1fr] gap-2 items-start">
                <div>
                  <strong> 
                    <a
                      href="https://github.com/aguang5241/HEP-Explorer/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center hover:hover:underline break-words"
                    >
                      HEP-Explorer<ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </strong> <br />
                  <span className="text-gray-400">An application for analyzing substitutional effects in ABO₃ high-entropy perovskites (HEPs), supporting compositional screening, property prediction, and performance optimization.</span> <br />
                </div>
                <div className="text-right">
                  <strong>2025</strong>
                </div>
              </li>

              <li className="grid grid-cols-1 md:grid-cols-[5fr_1fr] gap-2 items-start">
                <div>
                  <strong> 
                    <a
                      href="https://github.com/aguang5241/LCO-Doper/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center hover:hover:underline break-words"
                    >
                      LCO-Doper<ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </strong> <br />
                  <span className="text-gray-400">An application for analyzing dopant effects on LaCoO₃ (LCO), supporting composition optimization and material performance enhancement.</span> <br />
                </div>
                <div className="text-right">
                  <strong>2025</strong>
                </div>
              </li>

              <li className="grid grid-cols-1 md:grid-cols-[5fr_1fr] gap-2 items-start">
                <div>
                  <strong> 
                    <a
                      href="https://github.com/aguang5241/Interface-Maker/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center hover:hover:underline break-words"
                    >
                      Interface-Maker<ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </strong> <br />
                  <span className="text-gray-400">An application for generating customizable slabs and interfaces for first-principles simulations.</span> <br />
                </div>
                <div className="text-right">
                  <strong>2025</strong>
                </div>
              </li>

              <li className="grid grid-cols-1 md:grid-cols-[5fr_1fr] gap-2 items-start">
                <div>
                  <strong> 
                    <a
                      href="https://github.com/aguang5241/HEA-ML/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center hover:hover:underline break-words"
                    >
                      HEA-ML<ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </strong> <br />
                  <span className="text-gray-400">An application for designing Al-Fe-Co-Cr-Ni high-entropy alloys by combining first-principles calculations and machine learning.</span> <br />
                </div>
                <div className="text-right">
                  <strong>2024</strong>
                </div>
              </li>

              <li className="grid grid-cols-1 md:grid-cols-[5fr_1fr] gap-2 items-start">
                <div>
                  <strong> 
                    <a
                      href="https://github.com/aguang5241/Alloy-Supermarket/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center hover:hover:underline break-words"
                    >
                      Alloy-Supermarket<ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </strong> <br />
                  <span className="text-gray-400">An application that integrates computational thermodynamics and machine learning for Sc-modified Al-Si-Mg alloy design.</span> <br />
                </div>
                <div className="text-right">
                  <strong>2022</strong>
                </div>
              </li>
            </ul>
          </section>

          {/* Awards & Honors */}
          <section className="bg-white/5 hover:bg-white/10 transition-all duration-300 rounded-xl p-5 border border-white/10 shadow-md">
            <h2 className="text-2xl font-semibold text-blue-300 mb-2 flex items-center gap-3">
              <span className="w-3 h-3 rounded-full inline-block from-blue-500 to-purple-600 bg-gradient-to-r"></span>
              Awards & Honors
            </h2>
            <ul className="space-y-3 text-gray-200">
              <li className="grid grid-cols-[5fr_1fr] gap-2">
                <div>
                  <strong>National Science Foundation Scholarship</strong> <br />
                  <span className="text-gray-400">CALPHAD</span> <br />
                </div>
                <div className="text-right">
                  <strong>2023</strong>
                </div>
              </li>

              <li className="grid grid-cols-[5fr_1fr] gap-2">
                <div>
                  <strong>Golden Egret Scholarship</strong> <br />
                  <span className="text-gray-400">Xiamen Golden Egret Special Alloy Co., LTD.</span> <br />
                </div>
                <div className="text-right">
                  <strong>2020</strong>
                </div>
              </li>

              <li className="grid grid-cols-[5fr_1fr] gap-2">
                <div>
                  <strong>Best Paper Award - Grand Prize</strong> <br />
                  <span className="text-gray-400">Hunan Education Department</span> <br />
                </div>
                <div className="text-right">
                  <strong>2020</strong>
                </div>
              </li>

              <li className="grid grid-cols-[5fr_1fr] gap-2">
                <div>
                  <strong>Best Poster Award - First Prize</strong> <br />
                  <span className="text-gray-400">Graduate School of Central South University</span> <br />
                </div>
                <div className="text-right">
                  <strong>2020</strong>
                </div>
              </li>
            </ul>
          </section>

          {/* Teaching & Mentoring */}
          <section className="bg-white/5 hover:bg-white/10 transition-all duration-300 rounded-xl p-5 border border-white/10 shadow-md">
            <h2 className="text-2xl font-semibold text-blue-300 mb-2 flex items-center gap-3">
              <span className="w-3 h-3 rounded-full inline-block from-blue-500 to-purple-600 bg-gradient-to-r"></span>
              Teaching & Mentoring
            </h2>
            <ul className="space-y-3 text-gray-200">
              <li className="grid grid-cols-2 gap-2">
                <div>
                  <strong>Major Qualifying Project (MQP)</strong> <br />
                  <span className="text-gray-400">Worcester Polytechnic Institute, USA</span>
                </div>
                <div className="text-right">
                  <strong>Aug 2024 - Dec 2024</strong> <br />
                  <span className="text-gray-400">Research Mentor</span>
                </div>
              </li>

              <li className="grid grid-cols-2 gap-2">
                <div>
                  <strong>ME 4875 - Introduction To Nanomaterials And Nanotechnology</strong> <br />
                  <span className="text-gray-400">Worcester Polytechnic Institute, USA</span>
                </div>
                <div className="text-right">
                  <strong>Mar 2024 - May 2024</strong> <br />
                  <span className="text-gray-400">Teaching Assistant</span>
                </div>
              </li>

              <li className="grid grid-cols-2 gap-2">
                <div>
                  <strong>ME 5385 - Metal Additive Manufacturing</strong> <br />
                  <span className="text-gray-400">Worcester Polytechnic Institute, USA</span>
                </div>
                <div className="text-right">
                  <strong>Jan 2024 - Mar 2024</strong> <br />
                  <span className="text-gray-400">Teaching Assistant</span>
                </div>
              </li>

              <li className="grid grid-cols-2 gap-2">
                <div>
                  <strong>MTE 594-D01 - ST: Applied Machine Learning</strong> <br />
                  <span className="text-gray-400">Worcester Polytechnic Institute, USA</span>
                </div>
                <div className="text-right">
                  <strong>Mar 2022 - May 2022</strong> <br />
                  <span className="text-gray-400">Teaching Assistant</span>
                </div>
              </li>
            </ul>
          </section>

          {/* Professional Activities */}
          <section className="bg-white/5 hover:bg-white/10 transition-all duration-300 rounded-xl p-5 border border-white/10 shadow-md">
            <h2 className="text-2xl font-semibold text-blue-300 mb-2 flex items-center gap-3">
              <span className="w-3 h-3 rounded-full inline-block from-blue-500 to-purple-600 bg-gradient-to-r"></span>
              Professional Activities
            </h2>
            <ul className="list-disc list-inside text-gray-200 space-y-2">
              <li><strong>Peer Reviewer</strong> for <em>npj Computational Materials</em>, <em>Scientific Reports</em>, <em>Computational Condensed Matter</em>, <em>The Journal of Physical Chemistry</em> and other international journals in computational materials science.</li>
              <li><strong>Member</strong>, <em>The Minerals, Metals & Materials Society (TMS)</em>.</li>
              <li><strong>Conference Organizer</strong>, edited the Technical Program and coordinated meeting logistics and activities for the international <em>CALPHAD 2023</em>.</li>
              <li><strong>Conference Presentations and Posters:</strong></li>
              <ul className="list-disc list-inside text-gray-200 ml-5 space-y-2">
                <li>Oral Presentation | <em>MS&T 2025</em></li>
                <li>Poster Presentation | <em>WPI Graduate Research Innovation Exchange (GRIE) 2025</em></li>
                <li>Oral Presentation | <em>CALPHAD 2024</em></li>
                <li>Oral Presentation | <em>3rd World Congress on High Entropy Alloys 2023</em></li>
                <li>Oral Presentation | <em>MS&T 2022</em></li>
                <li>Poster Presentation | <em>Gordon Conference 2022</em></li>
              </ul>
            </ul>
          </section>

          {/* Technical Skills */}
          <section className="bg-white/5 hover:bg-white/10 transition-all duration-300 rounded-xl p-5 border border-white/10 shadow-md">
            <h2 className="text-2xl font-semibold text-blue-300 mb-2 flex items-center gap-3">
              <span className="w-3 h-3 rounded-full inline-block from-blue-500 to-purple-600 bg-gradient-to-r"></span>
              Technical Skills
            </h2>
            <ul className="space-y-3 text-gray-200">
              <li className="grid grid-cols-2 gap-2">
                <div>
                  <strong>Computational Methods</strong> <br />
                  <span className="text-gray-400">VASP, Matlantis, ASE, Pymatgen</span> <br />
                </div>
                <div>
                  <strong>Machine Learning</strong> <br />
                  <span className="text-gray-400">PyTorch, Pyro, Scikit-learn</span> <br />
                </div>
              </li>

              <li className="grid grid-cols-2 gap-2">
                <div>
                  <strong className="break-words">Thermodynamics</strong> <br />
                  <span className="text-gray-400">Thermo-Calc, PyCalphad</span> <br />
                </div>
                <div>
                  <strong>Visualization</strong> <br />
                  <span className="text-gray-400">Matplotlib, Seaborn, Plotly, VESTA, Origin</span> <br />
                </div>
              </li>

              <li className="grid grid-cols-2 gap-2">
                <div>
                  <strong>Programming</strong> <br />
                  <span className="text-gray-400">Python, C#, C++, Javascript</span> <br />
                </div>
                <div>
                  <strong>Data Analysis</strong> <br />
                  <span className="text-gray-400">Pandas, NumPy, Excel</span> <br />
                </div>
              </li>
            </ul>
          </section>

          {/* Languages */}
          <section className="bg-white/5 hover:bg-white/10 transition-all duration-300 rounded-xl p-5 border border-white/10 shadow-md">
            <h2 className="text-2xl font-semibold text-blue-300 mb-2 flex items-center gap-3">
              <span className="w-3 h-3 rounded-full inline-block from-blue-500 to-purple-600 bg-gradient-to-r"></span>
              Languages
            </h2>
            <ul className="space-y-3 text-gray-200">
              <li className="grid grid-cols-2 gap-2">
                <div>
                  <strong>Mandarin</strong> - Native <br />
                </div>
                <div>
                  <strong>English</strong> - Fluent <br />
                </div>
              </li>
            </ul>
          </section>

          {/* Publications */}
          <section className="bg-white/5 hover:bg-white/10 transition-all duration-300 rounded-xl p-5 border border-white/10 shadow-md">
            <h2 className="text-2xl font-semibold text-blue-300 mb-2 flex items-center gap-3">
              <span className="w-3 h-3 rounded-full inline-block from-blue-500 to-purple-600 bg-gradient-to-r"></span>
              Publications
            </h2>
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
