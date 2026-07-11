const experiences = [
  {
    period: "2025",
    role: "R&D Graduate Intern",
    organization: "Eriez Manufacturing Co.",
    location: "Erie, PA",
    summary:
      "Developed orientation-aware signal models for electromagnetic metal detection, including a conditional GAN for signal normalization and an orientation-aware ECF framework designed to generalize across testing conditions.",
    tags: ["Signal processing", "Generative models", "Robust ML"],
  },
  {
    period: "2024",
    role: "System Communication Engineer Intern",
    organization: "Wuwen Xinqiong · AI R&D",
    location: "Shanghai, China",
    summary:
      "Built core components for HETHUB, a heterogeneous large-model training system. Implemented pipeline, tensor, data, and sequence parallelism, then developed performance prediction and automatic parallel-plan optimization.",
    tags: ["Distributed training", "Parallelism", "Systems optimization"],
  },
  {
    period: "2023",
    role: "Research Assistant",
    organization: "Institute for the Wireless Internet of Things · Northeastern University",
    location: "Boston, MA",
    summary:
      "Studied efficient multi-sensor 3D detection through BEVFusion profiling, model-complexity analysis, and a feasibility investigation into activation quantization for large language models.",
    tags: ["3D perception", "Model efficiency", "Quantization"],
  },
  {
    period: "2021–22",
    role: "Software & System Development Intern",
    organization: "SenseTime · Mobile Intelligent Business Group",
    location: "Shanghai, China",
    summary:
      "Optimized a 3D LiDAR object-detection network from FP32 to FP16 to reduce memory pressure, validated the tuned model across platforms, and documented the deployment workflow.",
    tags: ["LiDAR", "Mixed precision", "Deployment"],
  },
];

const education = [
  {
    school: "The Pennsylvania State University",
    degree: "PhD, Electrical Engineering",
    period: "2024–2029 (expected)",
    detail: "Data science & artificial intelligence · Signal & image processing",
  },
  {
    school: "Boston University",
    degree: "MS, Electrical & Computer Engineering",
    period: "2022–2024",
    detail: "Deep learning · Optimization theory · Learning from data · Software systems",
  },
  {
    school: "Shanghai Jiao Tong University · UM–SJTU Joint Institute",
    degree: "BE, Electrical & Computer Engineering · Minor in Data Science",
    period: "2018–2022",
    detail: "Artificial intelligence · Computer vision · Probabilistic methods · Operating systems",
  },
];

const projects = [
  {
    number: "01",
    title: "Efficient Multimodal Perception",
    eyebrow: "Research · Northeastern University",
    text: "Profiled BEVFusion for 3D detection and investigated practical routes to reduce FLOPs and trainable parameters without losing the benefits of multi-sensor fusion.",
  },
  {
    number: "02",
    title: "Audio Transcription with T5",
    eyebrow: "Research · Boston University",
    text: "Reimplemented and fine-tuned T5 in PyTorch to evaluate sequence-to-sequence modeling for audio transcription under the supervision of Prof. Brian Kulis.",
  },
  {
    number: "03",
    title: "Learning for Resource Allocation",
    eyebrow: "Research · UM–SJTU Joint Institute",
    text: "Combined blockchain, cloud/fog computing, Q-learning, and ADMM to study computation offloading and resource allocation in intelligent networked systems.",
  },
  {
    number: "04",
    title: "Deep Spam Classification",
    eyebrow: "Course project · Boston University",
    text: "Built a trainable document representation with GloVe 6B embeddings and boosting-inspired modeling, achieving over 98% classification accuracy.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Haolin Ye, home">
          HY<span>.</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#research">Research</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="mailto:leafhaolin@gmail.com">Contact</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-kicker"><span /> PhD Researcher · Electrical Engineering</div>
        <h1>
          Haolin Ye explores how intelligent systems can become
          <em> efficient, robust, and deployable.</em>
        </h1>
        <div className="hero-lower">
          <p>
            I work across machine learning systems, signal processing, and computer vision—turning
            research ideas into models that can operate under real computational and physical constraints.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="/Haolin-Ye-CV.pdf" download>
              Download CV <span aria-hidden="true">↓</span>
            </a>
            <a className="button secondary" href="#research">
              View research <span aria-hidden="true">↘</span>
            </a>
          </div>
        </div>
        <div className="research-strip" aria-label="Research focus areas">
          <div><span>01</span><strong>Efficient AI</strong><small>Model compression · Quantization</small></div>
          <div><span>02</span><strong>ML Systems</strong><small>Distributed training · Parallelism</small></div>
          <div><span>03</span><strong>Perception</strong><small>Signals · Images · 3D sensing</small></div>
        </div>
      </section>

      <section className="section publication" aria-labelledby="publication-title">
        <div className="section-label">Selected publication</div>
        <div className="publication-body">
          <div className="paper-mark" aria-hidden="true">H</div>
          <div>
            <div className="paper-meta">arXiv · 2024 · Large-scale ML systems</div>
            <h2 id="publication-title">HETHUB: A Distributed Training System with Heterogeneous Cluster for Large-Scale Models</h2>
            <p>
              Co-authored work on efficient training across heterogeneous compute clusters, with contributions to
              parallelism strategies, performance prediction, and automated planning.
            </p>
            <a className="text-link" href="https://arxiv.org/abs/2405.16256" target="_blank" rel="noreferrer">
              Read the paper on arXiv <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      <section className="section" id="research" aria-labelledby="research-title">
        <div className="section-heading">
          <div>
            <div className="section-label">Research & selected work</div>
            <h2 id="research-title">Problems I like to work on.</h2>
          </div>
          <p>My projects sit at the boundary between algorithms and systems: measurable, implementation-driven, and grounded in deployment constraints.</p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-number">{project.number}</div>
              <div className="project-eyebrow">{project.eyebrow}</div>
              <h3>{project.title}</h3>
              <p>{project.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section experience" id="experience" aria-labelledby="experience-title">
        <div className="section-heading compact">
          <div>
            <div className="section-label">Industry & research experience</div>
            <h2 id="experience-title">From prototypes to working systems.</h2>
          </div>
        </div>
        <div className="timeline">
          {experiences.map((item) => (
            <article className="timeline-item" key={`${item.period}-${item.organization}`}>
              <div className="timeline-period">{item.period}</div>
              <div className="timeline-role">
                <h3>{item.role}</h3>
                <p>{item.organization}</p>
              </div>
              <div className="timeline-detail">
                <div className="timeline-location">{item.location}</div>
                <p>{item.summary}</p>
                <div className="tags">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </div>
            </article>
          ))}
        </div>
        <p className="earlier-note">
          Earlier work includes FPGA implementation and optimization of ResNet18/InceptionV3 at Shanghai Taize Semiconductor,
          and semantic segmentation for automated chip-edge inspection at Shanghai IC R&D Center.
        </p>
      </section>

      <section className="section education" id="education" aria-labelledby="education-title">
        <div className="section-heading compact">
          <div>
            <div className="section-label">Education</div>
            <h2 id="education-title">A foundation across AI, systems, and engineering.</h2>
          </div>
        </div>
        <div className="education-list">
          {education.map((item) => (
            <article key={item.school}>
              <div className="education-period">{item.period}</div>
              <div>
                <h3>{item.school}</h3>
                <p className="degree">{item.degree}</p>
                <p>{item.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section toolkit" aria-labelledby="toolkit-title">
        <div>
          <div className="section-label">Technical toolkit</div>
          <h2 id="toolkit-title">Built to move between research and implementation.</h2>
        </div>
        <div className="tool-groups">
          <div><h3>Languages</h3><p>Python · C/C++ · Java · R · MATLAB · Verilog · SQL</p></div>
          <div><h3>ML stack</h3><p>PyTorch · TensorFlow · Keras · scikit-learn · pandas · SciPy</p></div>
          <div><h3>Systems</h3><p>Linux · Git · Docker · Shell · LaTeX · Xilinx</p></div>
        </div>
      </section>

      <section className="section honors" aria-labelledby="honors-title">
        <div className="section-label">Recognition</div>
        <h2 id="honors-title">Awards & honors</h2>
        <div className="honor-list">
          <div><span>2020</span><p>Qian Xuesen Cup, Extracurricular Academic Science & Technology Works Competition — Second Prize</p></div>
          <div><span>2020</span><p>Midea School–Enterprise Joint Creative Competition Final — Top 5</p></div>
          <div><span>2018</span><p>Shanghai Jiao Tong University RoboMaster Campus Competition — Champion</p></div>
        </div>
      </section>

      <section className="contact" aria-labelledby="contact-title">
        <div className="section-label light">Open to research-driven internships</div>
        <h2 id="contact-title">Let’s build intelligent systems that work beyond the benchmark.</h2>
        <p>I am interested in research and engineering internships spanning efficient ML, multimodal perception, and large-scale AI systems.</p>
        <a className="contact-link" href="mailto:leafhaolin@gmail.com">leafhaolin@gmail.com <span aria-hidden="true">↗</span></a>
        <div className="contact-meta"><span>State College, Pennsylvania</span><span>Available for 2026 opportunities</span></div>
      </section>

      <footer>
        <div className="wordmark footer-mark">HY<span>.</span></div>
        <p>Haolin Ye · PhD Researcher in Electrical Engineering</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
