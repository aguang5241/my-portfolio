import { Link } from "react-router-dom";
import Sidebar from '../components/Sidebar.jsx'

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
          <h1 className="text-4xl font-bold mb-6 text-center">Curriculum Vitae</h1>

          <section>
            <h2 className="text-2xl font-semibold text-blue-400 mb-2">Education</h2>
            <ul className="space-y-2 text-gray-200">
              <li>
                <strong>PhD in Mechanical & Materials Engineering</strong><br />
                Worcester Polytechnic Institute (Expected 2026)
              </li>
              <li>
                <strong>BSc in Physics & Chemistry</strong><br />
                University of Rhode Island (2023)
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-400 mb-2">Technical Skills</h2>
            <ul className="grid md:grid-cols-2 gap-2 text-gray-200">
              <li>Density Functional Theory (VASP, R2SCAN+U)</li>
              <li>Machine Learning (PyTorch, Pyro, Optuna)</li>
              <li>High-Performance Computing (Slurm, TACC)</li>
              <li>Thermodynamics (PyCalphad, Zentropy)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-400 mb-2">Research Interests</h2>
            <p className="text-gray-200">
              Computational materials science, defect chemistry, machine learning potentials,
              and energy materials design for solid oxide fuel cells.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-400 mb-2">Publications</h2>
            <p className="text-gray-200">
              See full list on the{" "}
              <Link to="/publications" className="text-blue-400 hover:underline">
                Publications
              </Link>{" "}
              page.
            </p>
          </section>
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
