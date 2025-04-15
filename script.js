document.addEventListener('DOMContentLoaded', function() {   
    const navLinks = document.querySelectorAll('nav ul li a');
    const learnMoreBtn = document.querySelector('.learn-btn');
    const contactMeBtn = document.querySelector('.contact-btn');
    const projectsBtn = document.querySelector('.projects-btn'); 
       
    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }       
        navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute('href').substring(1);
            scrollToSection(sectionId);
        });
    });        
    
    if (learnMoreBtn) {
        learnMoreBtn.addEventListener('click', function() {
            scrollToSection('about');
        });
    }       
    
    if (contactMeBtn) {
        contactMeBtn.addEventListener('click', function() {
            scrollToSection('contact');
        });
    }    
    
    if (projectsBtn) {
        projectsBtn.addEventListener('click', function() {
            scrollToSection('projects');
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".navbar ul li a");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").substring(1) === entry.target.id) {
              link.classList.add("active");
            }
          });
        }
      });
    },
    {
      threshold: 0.6
    }
  );

  sections.forEach(section => {
    observer.observe(section);
  });
});

const desc = {
    'img/rickroll.jpg': `
        <p><span>Rick Roll</span> is a project this guy made as a project in his 12th grade (2022). It was his first repository in github whereas you can tap both play and pause to control the video but Rick Astley will never give up to surprise you.</p>
    `,
    'img/spcces.jpg': `
        <p>San Pablo City Central Elementary School Website or <span>SPCCES</span> is his immersion project in senior high (2023) alongside his group named programming-ming. It shows the information the school about the teacher, events, subjects, sections, etc.</p>
    `,
    'img/calc.jpg': `
        <p>A midterm project at his first year (2023). <span>Interactive Calculator</span> is a fully functional console app in C# that shows basic arithmetic operations, calculation history and exit animation.</p>
    `,
    'img/shacafe.jpg': `
        <p><span>ShaCafe</span> (2024) is an unofficial project. It was also an unfinished console application in C# so it only has a display of the menu. It applies the full usage of Object-oriented Programming.</p>
    `,
    'img/craftmania.jpg': `
        <p>A finals project at his second semester (2024). <span>Crafting Mania</span> is a website created in Figma that has features of a shopping website with handmade decorations as its main products.</p>
    `,
    'img/jankenpoi.jpg': `
        <p>A finals projects at his second semester (2024). <span>JanKenPoi</span> is an interactive game in console C# that applies the rules if rock, paper and scissors. It has animation and is controllable via arrow buttons.</p>
    `,
    'img/bywallet.jpg': `
        <p>A blockchain cryptocurrency application created in C# Winforms as frontend and MySQL as backend. <span>By Wallet </span>was his finals project (2025) that has Create, Read, Update, and Delete or CRUD functions for the users account.</p>
    `,
    'img/simpleweb.jpg': `
        <p>A <span>Simple Website</span> inspired by One Piece. Its his unreleased project in midterms (2025). This website only shows their information, quotes and link to W3Schools.</p>
    `,
    'video/marilag.mp4': `
        <p><span>Project Marilag</span> on the house. This piano cover called Marilag sung by Dionela is his self project to release in Valentines (2025) with a content in his POV with him playing.</p>
    `
};

const defaultDescription = `
    <h3 class="default-desc">Welcome! Select a project to see the details and media.</h3>
`;

function showProject(source) {
    const isVideo = source.endsWith('.mp4');
    const isGif = source.endsWith('.gif');
    const preview = document.querySelector('.preview-media');
    const description = document.querySelector('.projects-description');

    if (!source || source === 'gif/alt-preview.gif') {
        preview.innerHTML = `<img src="gif/alt-preview.gif" width="100%">`;
        description.innerHTML = defaultDescription;
        return;
    }

    if (isVideo) {
        preview.innerHTML = `<video controls src="${source}" width="100%"></video>`;
    } else {
        preview.innerHTML = `<img src="${source}" width="100%">`;
    }
    
    description.innerHTML = desc[source] || '<p>No description available.</p>';
}

window.onload = function() {
    showProject('gif/alt-preview.gif');
};

