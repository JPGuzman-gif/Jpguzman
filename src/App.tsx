import { Mail, Phone, MapPin, GraduationCap, Briefcase, Code, Globe, Award, Trophy, Beaker, Atom } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import { Separator } from "./components/ui/separator";
import { MolecularBackground } from "./components/MolecularBackground";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      {/* Animated Molecular Background */}
      <MolecularBackground />
      
      {/* Header/Hero Section */}
      <header className="relative bg-gradient-to-br from-cyan-900/90 via-blue-900/90 to-purple-900/90 backdrop-blur-sm text-white py-20 px-4 border-b-4 border-cyan-400 shadow-2xl">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1682391427624-61a45b5c7797?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVtaXN0cnklMjBtb2xlY3VsZXMlMjBzY2llbmNlfGVufDF8fHx8MTc3MDg2ODE0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Chemistry molecules"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex items-center gap-4 mb-4">
            <Atom className="size-12 text-cyan-400 animate-spin" style={{ animationDuration: '8s' }} />
            <h1 className="text-6xl font-bold bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
              Juan Pablo Guzmán
            </h1>
          </div>
          <p className="text-2xl text-cyan-100 mb-8 flex items-center gap-3">
            <Beaker className="size-6 text-cyan-400" />
            Chemistry & Data Science Student
          </p>
          <div className="flex flex-wrap gap-6 text-cyan-50">
            <div className="flex items-center gap-2 bg-cyan-900/40 px-4 py-2 rounded-full backdrop-blur-sm">
              <MapPin className="size-4" />
              <span>Lamoni, IA</span>
            </div>
            <div className="flex items-center gap-2 bg-cyan-900/40 px-4 py-2 rounded-full backdrop-blur-sm">
              <Mail className="size-4" />
              <a href="mailto:guzmansjp1@gmail.com" className="hover:text-cyan-300 transition">guzmansjp1@gmail.com</a>
            </div>
            <div className="flex items-center gap-2 bg-cyan-900/40 px-4 py-2 rounded-full backdrop-blur-sm">
              <Phone className="size-4" />
              <span>(270) 244-2801</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12 space-y-12 relative z-10">
        {/* Education Section */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="size-10 text-cyan-400" />
            <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Education</h2>
          </div>
          <div className="space-y-4">
            <Card className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-md border-2 border-cyan-500/40 shadow-xl hover:shadow-cyan-500/40 transition-all hover:scale-[1.02]">
              <CardHeader>
                <CardTitle className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 text-white">
                  <span className="flex items-center gap-2">
                    <div className="size-3 bg-cyan-400 rounded-full animate-pulse" />
                    Graceland University
                  </span>
                  <span className="text-sm text-cyan-300">Expected May 2026</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-cyan-100 mb-3">Bachelor of Science, Chemistry & Data Science</p>
                <Badge className="bg-cyan-500/20 text-cyan-300 border border-cyan-400">Dean's List (2023-2025)</Badge>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-md border-2 border-blue-500/40 shadow-xl hover:shadow-blue-500/40 transition-all hover:scale-[1.02]">
              <CardHeader>
                <CardTitle className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 text-white">
                  <span className="flex items-center gap-2">
                    <div className="size-3 bg-blue-400 rounded-full" />
                    Brescia University
                  </span>
                  <span className="text-sm text-blue-300">May 2023</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-blue-100 mb-3">Associate of Science, Engineering Studies</p>
                <Badge className="bg-blue-500/20 text-blue-300 border border-blue-400">Dean's List (2021-2023)</Badge>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Projects Section */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Atom className="size-10 text-purple-400" />
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Research Projects</h2>
          </div>
          <Card className="bg-gradient-to-br from-purple-900/40 via-slate-900/80 to-pink-900/40 backdrop-blur-md border-2 border-l-8 border-purple-500 shadow-2xl shadow-purple-500/30">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Isoprene Contribution to Photochemical Smog Formation in Urban Environments</CardTitle>
              <p className="text-purple-300 flex items-center gap-2">
                <div className="size-2 bg-purple-400 rounded-full animate-pulse" />
                2024-2025
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-slate-950/50 p-4 rounded-lg border border-purple-500/30">
                <p className="text-cyan-100 leading-relaxed">
                  Computational investigation of Isoprene reaction pathways in the process of photochemical 
                  smog formation using <span className="text-purple-300 font-semibold">Spartan Software</span> to perform molecular modeling and activation 
                  energy calculations.
                </p>
              </div>
              <Badge className="bg-purple-500/20 text-purple-300 border border-purple-400 px-4 py-2">
                🏆 Presented at Graceland University's Scholar Showcase
              </Badge>
            </CardContent>
          </Card>
        </section>

        {/* Professional Experience Section */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Briefcase className="size-10 text-emerald-400" />
            <h2 className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">Professional Experience</h2>
          </div>
          <div className="space-y-4">
            <Card className="bg-gradient-to-r from-emerald-900/40 to-slate-900/80 backdrop-blur-md border-2 border-emerald-500/40 shadow-xl hover:shadow-emerald-500/40 transition-all">
              <CardHeader>
                <CardTitle className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 text-white">
                  <span className="flex items-center gap-2">
                    <Beaker className="size-5 text-emerald-400" />
                    Laboratory Assistant/Teaching Assistant
                  </span>
                  <span className="text-sm text-emerald-300">2023-Present</span>
                </CardTitle>
                <p className="text-emerald-300">Graceland University</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-200">
                  <li className="flex items-start gap-3">
                    <div className="size-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0" />
                    <span>Maintained lab safety, prepared solutions, handled chemicals, pipetted samples, and managed experiments.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="size-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0" />
                    <span>Operated instruments <span className="text-emerald-300 font-semibold">(UV–Vis, GC, NMR, IR)</span> supporting data collection and analysis.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="size-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0" />
                    <span>Assisted instruction, grading, and exam prep, reinforcing quantitative analysis and experimental design.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-blue-900/40 to-slate-900/80 backdrop-blur-md border-2 border-blue-500/40 shadow-xl hover:shadow-blue-500/40 transition-all">
              <CardHeader>
                <CardTitle className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 text-white">
                  <span className="flex items-center gap-2">
                    <GraduationCap className="size-5 text-blue-400" />
                    STEM Tutor
                  </span>
                  <span className="text-sm text-blue-300">2023-Present</span>
                </CardTitle>
                <p className="text-blue-300">Graceland University</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-200">
                  <li className="flex items-start gap-3">
                    <div className="size-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                    <span>Delivered individualized and group tutoring in chemistry, mathematics, statistics, and quantitative problem-solving.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="size-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                    <span>Translated theoretical concepts into applied, data-driven problem-solving strategies tailored to student needs.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-purple-900/40 to-slate-900/80 backdrop-blur-md border-2 border-purple-500/40 shadow-xl hover:shadow-purple-500/40 transition-all">
              <CardHeader>
                <CardTitle className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 text-white">
                  <span className="flex items-center gap-2">
                    <Atom className="size-5 text-purple-400" />
                    Data Processing Assistant
                  </span>
                  <span className="text-sm text-purple-300">Summer 2024</span>
                </CardTitle>
                <p className="text-purple-300">Graceland University Student Success Center</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-200">
                  <li className="flex items-start gap-3">
                    <div className="size-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                    <span>Analyzed tutoring program effectiveness using academic and behavioral datasets to support evidence-based decisions.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="size-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                    <span>Conducted sentiment analysis on student feedback and evaluated outcomes based on grades, study hours, and course enrollment.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="size-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                    <span>Applied spreadsheets, statistical methods, and basic programming workflows to identify trends and communicate insights to stakeholders.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Skills Section */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Award className="size-10 text-pink-400" />
            <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">Skills & Expertise</h2>
          </div>
          <Card className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-md border-2 border-pink-500/40 shadow-2xl">
            <CardContent className="pt-6 space-y-6">
              <div className="bg-slate-950/50 p-5 rounded-lg border border-cyan-500/30">
                <h3 className="font-semibold text-xl mb-4 flex items-center gap-2 text-cyan-400">
                  <Globe className="size-6" />
                  Languages
                </h3>
                <div className="flex flex-wrap gap-3">
                  <Badge className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 text-base">Spanish (Native)</Badge>
                  <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 text-base">English (Fluent)</Badge>
                </div>
              </div>
              
              <Separator className="bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
              
              <div className="bg-slate-950/50 p-5 rounded-lg border border-purple-500/30">
                <h3 className="font-semibold text-xl mb-4 flex items-center gap-2 text-purple-400">
                  <Beaker className="size-6" />
                  Laboratory & Analytical
                </h3>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-purple-500/20 text-purple-300 border border-purple-400 px-3 py-1">NMR Spectrometry</Badge>
                  <Badge className="bg-purple-500/20 text-purple-300 border border-purple-400 px-3 py-1">IR Spectrometry</Badge>
                  <Badge className="bg-purple-500/20 text-purple-300 border border-purple-400 px-3 py-1">UV-Vis</Badge>
                  <Badge className="bg-purple-500/20 text-purple-300 border border-purple-400 px-3 py-1">Spartan</Badge>
                </div>
              </div>
              
              <Separator className="bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
              
              <div className="bg-slate-950/50 p-5 rounded-lg border border-emerald-500/30">
                <h3 className="font-semibold text-xl mb-4 flex items-center gap-2 text-emerald-400">
                  <Code className="size-6" />
                  Programming & Data Science
                </h3>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-emerald-500/20 text-emerald-300 border border-emerald-400 px-3 py-1">Python</Badge>
                  <Badge className="bg-emerald-500/20 text-emerald-300 border border-emerald-400 px-3 py-1">R</Badge>
                  <Badge className="bg-emerald-500/20 text-emerald-300 border border-emerald-400 px-3 py-1">SQL</Badge>
                  <Badge className="bg-emerald-500/20 text-emerald-300 border border-emerald-400 px-3 py-1">JavaScript</Badge>
                  <Badge className="bg-emerald-500/20 text-emerald-300 border border-emerald-400 px-3 py-1">Spark</Badge>
                  <Badge className="bg-blue-500/20 text-blue-300 border border-blue-400 px-3 py-1">Excel</Badge>
                  <Badge className="bg-blue-500/20 text-blue-300 border border-blue-400 px-3 py-1">Tableau</Badge>
                  <Badge className="bg-blue-500/20 text-blue-300 border border-blue-400 px-3 py-1">Power BI</Badge>
                </div>
              </div>
              
              <Separator className="bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
              
              <div className="bg-slate-950/50 p-5 rounded-lg border border-pink-500/30">
                <h3 className="font-semibold text-xl mb-4 text-pink-400">Soft Skills</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-pink-500/20 text-pink-300 border border-pink-400 px-3 py-1">Data-driven</Badge>
                  <Badge className="bg-pink-500/20 text-pink-300 border border-pink-400 px-3 py-1">Detail-oriented</Badge>
                  <Badge className="bg-pink-500/20 text-pink-300 border border-pink-400 px-3 py-1">Communication</Badge>
                  <Badge className="bg-pink-500/20 text-pink-300 border border-pink-400 px-3 py-1">Teamwork</Badge>
                  <Badge className="bg-pink-500/20 text-pink-300 border border-pink-400 px-3 py-1">Problem-solving</Badge>
                </div>
              </div>
              
              <Separator className="bg-gradient-to-r from-transparent via-pink-500 to-transparent" />
              
              <div className="bg-slate-950/50 p-5 rounded-lg border border-cyan-500/30">
                <h3 className="font-semibold text-xl mb-3 text-cyan-400">Personal Interests</h3>
                <p className="text-slate-300 text-lg">
                  Volunteer baseball coach, health and fitness, songwriting
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Extracurricular Activities Section */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Trophy className="size-10 text-amber-400" />
            <h2 className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Extracurricular Activities</h2>
          </div>
          <Card className="bg-gradient-to-br from-amber-900/40 to-slate-900/80 backdrop-blur-md border-2 border-amber-500/40 shadow-2xl">
            <CardContent className="pt-6">
              <ul className="space-y-4">
                <li className="flex items-start gap-4 bg-slate-950/50 p-4 rounded-lg border border-amber-500/30">
                  <Trophy className="size-6 text-amber-400 mt-1 flex-shrink-0" />
                  <span className="text-slate-200 text-lg">Varsity Baseball Player (Catcher/Pitcher) - Brescia & Graceland University</span>
                </li>
                <li className="flex items-start gap-4 bg-slate-950/50 p-4 rounded-lg border border-amber-500/30">
                  <Code className="size-6 text-amber-400 mt-1 flex-shrink-0" />
                  <span className="text-slate-200 text-lg">Member, CS/IT Club – Graceland University</span>
                </li>
                <li className="flex items-start gap-4 bg-slate-950/50 p-4 rounded-lg border border-amber-500/30">
                  <Trophy className="size-6 text-amber-400 mt-1 flex-shrink-0" />
                  <span className="text-slate-200 text-lg">Volunteer Baseball Coach at Stronghold Catching, Owensboro, KY</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative bg-gradient-to-r from-slate-900/95 to-slate-950/95 backdrop-blur-md text-slate-300 py-8 px-4 mt-16 border-t-2 border-cyan-500/30">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-lg">© 2026 Juan Pablo Guzmán. All rights reserved.</p>
          <p className="text-cyan-400 mt-2 text-sm">Chemistry • Data Science • Innovation</p>
        </div>
      </footer>
    </div>
  );
}