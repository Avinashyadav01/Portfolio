const data = {
  name: "Avinash Yadav",
  tagline: "Aspiring Software Engineer | Frontend Learner",
  about:
    "I am a computer student learning web development and software engineering. I focus on building skills and real-world projects.",

  skills: [
    "HTML & CSS",
    "Basic JavaScript",
    "Responsive Design",
    "WordPress"
  ],

  projects: [
    {
      title: "Portfolio Website",
      desc: "Personal portfolio built using HTML, CSS and JavaScript."
    },
    {
      title: "Coming Soon",
      desc: "More projects will be added as I continue learning."
    }
  ],

  email: "avinash@email.com"
};

const app = document.getElementById("app");

app.innerHTML = `
<!-- HERO -->
<section class="hero-gradient min-h-screen flex items-center justify-center px-6">
  <div class="text-center max-w-3xl">
    <h1 class="text-5xl font-bold mb-4">${data.name}</h1>
    <p class="text-xl opacity-80 mb-6">${data.tagline}</p>
    <p class="opacity-70 mb-8">${data.about}</p>
    <a href="#skills" class="btn-primary">Explore</a>
  </div>
</section>

<!-- SKILLS -->
<section id="skills" class="py-20 px-6">
  <div class="max-w-5xl mx-auto">
    <h2 class="section-title text-3xl font-bold mb-12">Skills</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      ${data.skills
        .map(skill => `<div class="card p-6 text-center font-semibold">${skill}</div>`)
        .join("")}
    </div>
  </div>
</section>

<!-- PROJECTS -->
<section class="py-20 px-6 bg-gray-100">
  <div class="max-w-5xl mx-auto">
    <h2 class="section-title text-3xl font-bold mb-12">Projects</h2>
    <div class="grid md:grid-cols-2 gap-8">
      ${data.projects
        .map(
          p => `
          <div class="card p-6">
            <h3 class="text-xl font-bold mb-2">${p.title}</h3>
            <p class="opacity-70">${p.desc}</p>
          </div>
        `
        )
        .join("")}
    </div>
  </div>
</section>

<!-- CONTACT -->
<section class="py-20 px-6 text-center">
  <h2 class="section-title text-3xl font-bold mb-6">Contact</h2>
  <p>Email: <a href="mailto:${data.email}" class="text-indigo-600 font-semibold">${data.email}</a></p>
</section>
`;
