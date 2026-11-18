// ===== Task 1: Dark / Light Mode =====
const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("light-mode");

  if (document.body.classList.contains("light-mode")) {
    themeBtn.textContent = "Dark Mode";
  } else {
    themeBtn.textContent = "Light Mode";
  }
});

// ===== Task 2: Show More / Show Less =====
const moreBtn = document.getElementById("more-btn");
const moreAbout = document.getElementById("more-about");

moreBtn.addEventListener("click", function () {
  moreAbout.classList.toggle("hidden");

  if (moreAbout.classList.contains("hidden")) {
    moreBtn.textContent = "Show More";
  } else {
    moreBtn.textContent = "Show Less";
  }
});

// ===== Task 3: Dynamic Projects =====
const projects = [
  {
    title: "Prayer Times Website",
    description: "A website that shows prayer times based on the city you choose, using an external API.",
    category: "Web",
    technologies: ["HTML", "CSS", "JavaScript", "API"]
  },
  {
    title: "To-Do List App",
    description: "A simple task app where you can add, delete and update tasks using JavaScript.",
    category: "Web",
    technologies: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "Digital Menu",
    description: "A responsive digital menu made with React and Tailwind CSS.",
    category: "Web",
    technologies: ["React", "Tailwind CSS"]
  },
  {
    title: "Inventory Management System",
    description: "A Java application to manage products, stock levels and orders.",
    category: "Programming",
    technologies: ["Java", "OOP"]
  },
  {
    title: "Coding Challenges",
    description: "A collection of problem-solving exercises practicing algorithms and logic.",
    category: "Programming",
    technologies: ["Python", "Java"]
  }
];

const projectsContainer = document.getElementById("projects-container");

function renderProjects(list) {
  // Clear old cards first to avoid duplicates
  projectsContainer.innerHTML = "";

  list.forEach(function (project) {
    const card = document.createElement("article");
    card.classList.add("project-card");

    const title = document.createElement("h3");
    title.textContent = project.title;

    const category = document.createElement("span");
    category.classList.add("category");
    category.textContent = project.category;

    const description = document.createElement("p");
    description.textContent = project.description;

    const tech = document.createElement("p");
    tech.classList.add("tech");
    tech.textContent = "Technologies: " + project.technologies.join(", ");

    card.appendChild(title);
    card.appendChild(category);
    card.appendChild(description);
    card.appendChild(tech);

    projectsContainer.appendChild(card);
  });
}

// Render all projects when the page loads
renderProjects(projects);

// ===== Task 4: Project Filtering =====
const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const selected = button.dataset.category;

    filterButtons.forEach(function (btn) {
      btn.classList.remove("active");
    });
    button.classList.add("active");

    if (selected === "All") {
      renderProjects(projects);
    } else {
      const filtered = projects.filter(function (project) {
        return project.category === selected;
      });
      renderProjects(filtered);
    }
  });
});

// ===== Task 5: Print / Save as PDF =====
const printBtn = document.getElementById("print-btn");

printBtn.addEventListener("click", function () {
  window.print();
});
