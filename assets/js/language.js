const translations = {

    es: {

        navAbout: "Sobre mí",
        navSkills: "Tecnologías",
        navProjects: "Proyectos",
        navExperience: "Experiencia",
        navContact: "Contacto",

        heroGreeting: "Hola 👋, soy",

        heroDescription:
            `Actualmente voy a comenzar el segundo año del Ciclo Formativo de Grado Superior en Desarrollo de Aplicaciones Web (DAW), donde he adquirido experiencia en el desarrollo de aplicaciones utilizando tecnologías como Java, JavaScript, HTML, CSS, Bootstrap, MySQL y Git.<br><br>
            
            Mi objetivo es seguir creciendo como desarrolladora Backend, participando en proyectos que me permitan aprender nuevas tecnologías, aportar valor y seguir ampliando mi experiencia profesional.`,

        heroButton: "Ver proyectos",

        aboutTitle: "Sobre mí",
        aboutDescription: `
La programación es para mí una combinación de creatividad y resolución de problemas. Me gusta transformar ideas en aplicaciones funcionales, aprender nuevas tecnologías y mejorar continuamente la calidad de mi código.<br><br>

Durante mis estudios de Desarrollo de Aplicaciones Web he trabajado en diferentes proyectos que me han permitido desarrollar habilidades tanto en frontend como en backend, utilizando tecnologías como Java, JavaScript, SQL, Git y Docker.<br><br>

Además, en este primer año de formación he participado en el concurso regional andaluz Programame, resolviendo problemas algorítmicos y retos de programación junto con dos compañeros. Esta experiencia me ha permitido mejorar mi capacidad de análisis, lógica y resolución de problemas bajo presión, así como el trabajo cooperativo en equipo.<br><br>

Busco seguir creciendo profesionalmente participando en proyectos donde pueda aportar mis conocimientos, asumir nuevos retos y continuar evolucionando como desarrolladora de software.
`,

        skillsTitle: "Tecnologías",

        projectsTitle: "Proyectos",
        project1Title: "Proyecto 1: Programame",
project1Description: `
Colección de ejercicios y problemas algorítmicos resueltos como preparación para el concurso regional Programame. El proyecto incluye retos centrados en estructuras de datos, algoritmos, lógica de programación y optimización de soluciones utilizando Java.
`,

project2Title: "Proyecto 2: Proyecto Final de Programación",

project2Description: `
Aplicación desarrollada en Java con persistencia de datos mediante JPA y base de datos MySQL. El proyecto implementa operaciones CRUD, gestión de entidades relacionadas y una arquitectura orientada a objetos, aplicando buenas prácticas de desarrollo y acceso a datos.
`,

projectButton: "Ver proyecto",

        experienceTitle: "Experiencia",
        experienceDescription: `
<b>MultiSafepay</b><br><br>

Durante mi período de prácticas en el primer año del ciclo de Desarrollo de Aplicaciones Web participé en un entorno profesional de QA en MultiSafepay, colaborando con herramientas y metodologías utilizadas en proyectos reales. Esta experiencia me permitió comprender mejor el ciclo de vida del software, el trabajo en equipo y la importancia de desarrollar soluciones mantenibles y orientadas a negocio.<br><br>

Además de reforzar mis conocimientos técnicos, pude mejorar competencias como la resolución de problemas, la comunicación dentro de equipos de desarrollo y la adaptación a nuevos entornos tecnológicos.
`,

        contactTitle: "Contacto",
        contactDescription: `
¿Te interesa mi perfil o quieres conocer más sobre mis proyectos?<br><br>

Estoy abierta a oportunidades de prácticas, posiciones junior y colaboraciones relacionadas con el desarrollo de software y aplicaciones web.<br><br>

Puedes contactar conmigo a través de LinkedIn, GitHub o enviarme un correo electrónico a la dirección indicada más abajo. Estaré encantada de conversar sobre nuevas oportunidades y proyectos.<br><br>

Email: villaelenacusac@gmail.com
`,

        jobTitle: "Junior Java & Web Developer",

        availability:
            '<span class="status-dot"></span>Disponible para prácticas y empleo',

        mainTech: "Tecnologías principales",

        contactButton: "Contactar"
    },

    en: {

        navAbout: "About Me",
        navSkills: "Technologies",
        navProjects: "Projects",
        navExperience: "Experience",
        navContact: "Contact",

        heroGreeting: "Hello 👋, I'm",

        heroDescription:
            `I am about to begin the second year of the Higher Vocational Training Programme in Web Application Development (DAW), where I have gained experience developing applications using technologies such as Java, JavaScript, HTML, CSS, Bootstrap, MySQL and Git.<br><br>
            
            My goal is to continue growing as a Backend Developer, contributing to projects that allow me to learn new technologies, provide value and expand my professional experience.`,

        heroButton: "View Projects",

        aboutTitle: "About Me",
        aboutDescription: `
            Programming is, for me, a combination of creativity and problem-solving. I enjoy turning ideas into functional applications, learning new technologies, and continuously improving the quality of my code.<br><br>

            During my Web Application Development studies, I have worked on different projects that have allowed me to develop both frontend and backend skills using technologies such as Java, JavaScript, SQL, Git, and Docker.<br><br>

            In addition, during my first year of training, I participated in the Andalusian regional programming competition Programame, solving algorithmic problems and programming challenges alongside two teammates. This experience helped me improve my analytical thinking, logical reasoning, and problem-solving skills under pressure while working collaboratively.<br><br>

            I am looking to continue growing professionally by participating in projects where I can contribute my knowledge, take on new challenges, and keep evolving as a software developer.
            `,

        skillsTitle: "Technologies",

        projectsTitle: "Projects",

        project1Title: "Project 1: Programame",
        project1Description: `
            Collection of algorithmic exercises and problems solved as preparation for the regional Programame competition. The project includes challenges focused on data structures, algorithms, programming logic, and solution optimization using Java.
            `,

        projectButton: "View Project",

        project2Title: "Project 2: Final Programming Project",
        project2Description: `
            Application developed in Java with data persistence through JPA and a MySQL database. The project implements CRUD operations, management of related entities, and an object-oriented architecture while applying software development and data-access best practices.
            `,

        experienceTitle: "Experience",
        experienceDescription: `
            <b>MultiSafepay</b><br><br>

            During my internship period in the first year of the Web Application Development programme, I worked within a professional QA environment at MultiSafepay, collaborating with tools and methodologies used in real-world projects. This experience allowed me to gain a deeper understanding of the software development lifecycle, teamwork, and the importance of building maintainable, business-oriented solutions.<br><br>

            In addition to strengthening my technical knowledge, I improved skills such as problem-solving, communication within development teams, and adaptation to new technological environments.
            `,

        contactTitle: "Contact",
        contactDescription: `
            Are you interested in my profile or would you like to know more about my projects?<br><br>

            I am open to internship opportunities, junior positions, and collaborations related to software and web application development.<br><br>

            You can contact me through LinkedIn, GitHub, or by sending me an email to the address below. I would be delighted to discuss new opportunities and projects.<br><br>

            Email: villaelenacusac@gmail.com
            `,

        jobTitle: "Junior Java & Web Developer",

        availability:
            '<span class="status-dot"></span>Available for Internships and Employment',

        favoriteTech: "Main Technologies",

        contactButton: "Contact Me",
    }
};

function changeLanguage(lang) {

    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach(element => {

        const key = element.dataset.i18n;

        if (translations[lang][key]) {

            if (
                translations[lang][key].includes("<br>") ||
                translations[lang][key].includes("<span")
            ) {
                element.innerHTML = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });

    localStorage.setItem("language", lang);
}

document.addEventListener("DOMContentLoaded", () => {

    const selector =
        document.getElementById("language-selector");

    const savedLanguage =
        localStorage.getItem("language")
        || "es";

    selector.value = savedLanguage;

    changeLanguage(savedLanguage);

    selector.addEventListener("change", () => {

        changeLanguage(selector.value);

    });

});