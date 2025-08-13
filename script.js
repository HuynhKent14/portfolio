/*introduction*/

function goTo(section) {
  if (section === 0) {
    document
      .querySelector(".introduction")
      .scrollIntoView({ block: "start", behavior: "smooth" });
  } else if (section === 1) {
    document
      .querySelector(".aboutme")
      .scrollIntoView({ block: "start", behavior: "smooth" });
  } else if (section === 2) {
    document
      .querySelector(".whatido")
      .scrollIntoView({ block: "start", behavior: "smooth" });
  } else if (section === 3) {
    document
      .querySelector(".project")
      .scrollIntoView({ block: "start", behavior: "smooth" });
  } else if (section === 4) {
    document
      .querySelector(".skills")
      .scrollIntoView({ block: "start", behavior: "smooth" });
  } else if (section === 5) {
    document
      .querySelector(".testimonial")
      .scrollIntoView({ block: "start", behavior: "smooth" });
  }
}

/*about me js */
let content_container = [
  document.querySelector(".content-container1"),
  document.querySelector(".content-container2"),
  document.querySelector(".content-container3"),
  document.querySelector(".content-container4"),
  document.querySelector(".content-container5"),
];
let content_title = [
  document.querySelector(".content-container1-title"),
  document.querySelector(".content-container2-title"),
  document.querySelector(".content-container3-title"),
  document.querySelector(".content-container4-title"),
  document.querySelector(".content-container5-title"),
];

let content_indicator = [
  document.querySelector(".content-indicator1"),
  document.querySelector(".content-indicator2"),
  document.querySelector(".content-indicator3"),
  document.querySelector(".content-indicator4"),
  document.querySelector(".content-indicator5"),
];

let btnleft = document.querySelector(".scrollcontent-indicator1");
let btnright = document.querySelector(".scrollcontent-indicator2");
let left_counter = 0;
let right_counter = 0;
btnNext_right = () => {
  if (left_counter === 0 || left_counter === 0) {
    content_container[4].style.opacity = "1";
    content_container[4].style.transition = ".5s ease";
    content_container[0].style.transition = "none";
    content_container[0].style.opacity = "0";
    content_container[0].style.transform = "translate(1100px)";
    content_container[1].style.transform = "translate(-1100px)";
    content_container[2].style.transform = "translate(-550px)";
    content_container[3].style.transform = "translate(0px)";
    content_container[4].style.transform = "translate(550px)";

    /*title */
    content_title[4].style.opacity = "1";
    content_title[4].style.transition = ".5s ease";
    content_title[0].style.transition = "none";
    content_title[0].style.opacity = "0";
    content_title[0].style.transform = "translate(1100px)";
    content_title[1].style.transform = "translate(-1100px)";
    content_title[2].style.transform = "translate(-550px)";
    content_title[3].style.transform = "translate(0px)";
    content_title[4].style.transform = "translate(550px)";
    /*indicator*/
    content_indicator[0].style.scale = "1";
    content_indicator[1].style.scale = "1";
    content_indicator[2].style.scale = "1";
    content_indicator[2].style.opacity = ".4";
    content_indicator[3].style.scale = "2";
    content_indicator[3].style.opacity = "1";
    content_indicator[4].style.scale = "1";
  } else if (left_counter === 1 || left_counter === -4) {
    content_container[0].style.opacity = "1";
    content_container[0].style.transition = ".5s ease";
    content_container[1].style.transition = "none ";
    content_container[1].style.opacity = "0";
    content_container[0].style.transform = "translate(550px)";
    content_container[1].style.transform = "translate(1100px)";
    content_container[2].style.transform = "translate(-1100px)";
    content_container[3].style.transform = "translate(-550px)";
    content_container[4].style.transform = "translate(0px)";
    /*title */
    content_title[0].style.opacity = "1";
    content_title[0].style.transition = ".5s ease";
    content_title[1].style.transition = "none ";
    content_title[1].style.opacity = "0";
    content_title[0].style.transform = "translate(550px)";
    content_title[1].style.transform = "translate(1100px)";
    content_title[2].style.transform = "translate(-1100px)";
    content_title[3].style.transform = "translate(-550px)";
    content_title[4].style.transform = "translate(0px)";
    /*indicator*/
    content_indicator[0].style.scale = "1";
    content_indicator[1].style.scale = "1";
    content_indicator[2].style.scale = "1";
    content_indicator[3].style.opacity = ".4";
    content_indicator[3].style.scale = "1";
    content_indicator[4].style.opacity = "1";
    content_indicator[4].style.scale = "2";
  } else if (left_counter === 2 || left_counter === -3) {
    content_container[1].style.opacity = "1";
    content_container[1].style.transition = ".5s ease";
    content_container[2].style.transition = "none";
    content_container[2].style.opacity = "0";
    content_container[0].style.transform = "translate(0px)";
    content_container[1].style.transform = "translate(550px)";
    content_container[2].style.transform = "translate(1100px)";
    content_container[3].style.transform = "translate(-1100px)";
    content_container[4].style.transform = "translate(-550px)";
    /*title */
    content_title[1].style.opacity = "1";
    content_title[1].style.transition = ".5s ease";
    content_title[2].style.transition = "none";
    content_title[2].style.opacity = "0";
    content_title[0].style.transform = "translate(0px)";
    content_title[1].style.transform = "translate(550px)";
    content_title[2].style.transform = "translate(1100px)";
    content_title[3].style.transform = "translate(-1100px)";
    content_title[4].style.transform = "translate(-550px)";
    /*indicator*/
    content_indicator[0].style.opacity = "1";
    content_indicator[0].style.scale = "2";
    content_indicator[1].style.scale = "1";
    content_indicator[2].style.scale = "1";
    content_indicator[3].style.scale = "1";
    content_indicator[4].style.opacity = ".4";
    content_indicator[4].style.scale = "1";
  } else if (left_counter === 3 || left_counter === -2) {
    content_container[2].style.opacity = "1";
    content_container[2].style.transition = ".5s ease";
    content_container[3].style.transition = "none";
    content_container[3].style.opacity = "0";
    content_container[0].style.transform = "translate(-550px)";
    content_container[1].style.transform = "translate(0px)";
    content_container[2].style.transform = "translate(550px)";
    content_container[3].style.transform = "translate(1100px)";
    content_container[4].style.transform = "translate(-1100px)";
    /*title */
    content_title[2].style.opacity = "1";
    content_title[2].style.transition = ".5s ease";
    content_title[3].style.transition = "none";
    content_title[3].style.opacity = "0";
    content_title[0].style.transform = "translate(-550px)";
    content_title[1].style.transform = "translate(0px)";
    content_title[2].style.transform = "translate(550px)";
    content_title[3].style.transform = "translate(1100px)";
    content_title[4].style.transform = "translate(-1100px)";
    /*indicator*/
    content_indicator[0].style.opacity = ".4";
    content_indicator[0].style.scale = "1";
    content_indicator[1].style.opacity = "1";
    content_indicator[1].style.scale = "2";
    content_indicator[2].style.scale = "1";
    content_indicator[3].style.scale = "1";
    content_indicator[4].style.scale = "1";
  } else if (left_counter === 4 || left_counter === -1) {
    content_container[3].style.opacity = "1";
    content_container[3].style.transition = ".5s ease";
    content_container[4].style.transition = "none";
    content_container[4].style.opacity = "0";
    content_container[0].style.transform = "translate(-1100px)";
    content_container[1].style.transform = "translate(-550px)";
    content_container[2].style.transform = "translate(0px)";
    content_container[3].style.transform = "translate(550px)";
    content_container[4].style.transform = "translate(1100px)";
    /*title */
    content_title[3].style.opacity = "1";
    content_title[3].style.transition = ".5s ease";
    content_title[4].style.transition = "none";
    content_title[4].style.opacity = "0";
    content_title[0].style.transform = "translate(-1100px)";
    content_title[1].style.transform = "translate(-550px)";
    content_title[2].style.transform = "translate(0px)";
    content_title[3].style.transform = "translate(550px)";
    content_title[4].style.transform = "translate(1100px)";
    /*indicator*/
    content_indicator[0].style.scale = "1";
    content_indicator[1].style.opacity = ".4";
    content_indicator[1].style.scale = "1";
    content_indicator[2].style.opacity = "1";
    content_indicator[2].style.scale = "2";
    content_indicator[3].style.scale = "1";
    content_indicator[4].style.scale = "1";
  }
  left_counter++;
  right_counter--;
  if (left_counter === 5) {
    left_counter = 0;
  }
  if (right_counter === -5) {
    right_counter = 0;
  }
};

btnNext_left = () => {
  if (right_counter === 0 || right_counter === -5) {
    content_container[0].style.opacity = "1";
    content_container[0].style.transition = ".5s ease";
    content_container[4].style.transition = "none";
    content_container[4].style.opacity = "0";
    content_container[3].style.transform = "translate(1100px)";
    content_container[4].style.transform = "translate(-1100px)";
    content_container[0].style.transform = "translate(-550px)";
    content_container[1].style.transform = "translate(0px)";
    content_container[2].style.transform = "translate(550px)";
    /*title */
    content_title[0].style.opacity = "1";
    content_title[0].style.transition = ".5s ease";
    content_title[4].style.transition = "none";
    content_title[4].style.opacity = "0";
    content_title[3].style.transform = "translate(1100px)";
    content_title[4].style.transform = "translate(-1100px)";
    content_title[0].style.transform = "translate(-550px)";
    content_title[1].style.transform = "translate(0px)";
    content_title[2].style.transform = "translate(550px)";
    /*indicator*/
    content_indicator[0].style.scale = "1";
    content_indicator[1].style.opacity = "1";
    content_indicator[1].style.scale = "2";
    content_indicator[2].style.opacity = ".4";
    content_indicator[2].style.scale = "1";
    content_indicator[3].style.scale = "1";
    content_indicator[4].style.scale = "1";
  } else if (right_counter === 1 || right_counter === -4) {
    content_container[4].style.opacity = "1";
    content_container[4].style.transition = ".5s ease";
    content_container[3].style.transition = "none ";
    content_container[3].style.opacity = "0";
    content_container[1].style.transform = "translate(550px)";
    content_container[2].style.transform = "translate(1100px)";
    content_container[3].style.transform = "translate(-1100px)";
    content_container[4].style.transform = "translate(-550px)";
    content_container[0].style.transform = "translate(0px)";
    /*title */
    content_title[4].style.opacity = "1";
    content_title[4].style.transition = ".5s ease";
    content_title[3].style.transition = "none ";
    content_title[3].style.opacity = "0";
    content_title[1].style.transform = "translate(550px)";
    content_title[2].style.transform = "translate(1100px)";
    content_title[3].style.transform = "translate(-1100px)";
    content_title[4].style.transform = "translate(-550px)";
    content_title[0].style.transform = "translate(0px)";
    /*indicator*/
    content_indicator[0].style.opacity = "1";
    content_indicator[0].style.scale = "2";
    content_indicator[1].style.opacity = ".4";
    content_indicator[1].style.scale = "1";
    content_indicator[2].style.scale = "1";
    content_indicator[3].style.scale = "1";
    content_indicator[4].style.scale = "1";
  } else if (right_counter === 2 || right_counter === -3) {
    content_container[3].style.opacity = "1";
    content_container[3].style.transition = ".5s ease";
    content_container[2].style.transition = "none";
    content_container[2].style.opacity = "0";
    content_container[4].style.transform = "translate(0px)";
    content_container[0].style.transform = "translate(550px)";
    content_container[1].style.transform = "translate(1100px)";
    content_container[2].style.transform = "translate(-1100px)";
    content_container[3].style.transform = "translate(-550px)";
    /*title */
    content_title[3].style.opacity = "1";
    content_title[3].style.transition = ".5s ease";
    content_title[2].style.transition = "none";
    content_title[2].style.opacity = "0";
    content_title[4].style.transform = "translate(0px)";
    content_title[0].style.transform = "translate(550px)";
    content_title[1].style.transform = "translate(1100px)";
    content_title[2].style.transform = "translate(-1100px)";
    content_title[3].style.transform = "translate(-550px)";
    /*indicator*/
    content_indicator[0].style.opacity = ".4";
    content_indicator[0].style.scale = "1";
    content_indicator[1].style.scale = "1";
    content_indicator[2].style.scale = "1";
    content_indicator[3].style.scale = "1";
    content_indicator[4].style.opacity = "1";
    content_indicator[4].style.scale = "2";
  } else if (right_counter === 3 || right_counter === -2) {
    content_container[2].style.opacity = "1";
    content_container[2].style.transition = ".5s ease";
    content_container[1].style.transition = "none";
    content_container[1].style.opacity = "0";
    content_container[2].style.transform = "translate(-550px)";
    content_container[3].style.transform = "translate(0px)";
    content_container[4].style.transform = "translate(550px)";
    content_container[0].style.transform = "translate(1100px)";
    content_container[1].style.transform = "translate(-1100px)";
    /*title */
    content_title[2].style.opacity = "1";
    content_title[2].style.transition = ".5s ease";
    content_title[1].style.transition = "none";
    content_title[1].style.opacity = "0";
    content_title[2].style.transform = "translate(-550px)";
    content_title[3].style.transform = "translate(0px)";
    content_title[4].style.transform = "translate(550px)";
    content_title[0].style.transform = "translate(1100px)";
    content_title[1].style.transform = "translate(-1100px)";
    /*indicator*/
    content_indicator[0].style.scale = "1";
    content_indicator[1].style.scale = "1";
    content_indicator[2].style.scale = "1";
    content_indicator[3].style.opacity = "1";
    content_indicator[3].style.scale = "2";
    content_indicator[4].style.opacity = ".4";
    content_indicator[4].style.scale = "1";
  } else if (right_counter === 4 || right_counter === -1) {
    content_container[1].style.opacity = "1";
    content_container[1].style.transition = ".5s ease";
    content_container[0].style.transition = "none";
    content_container[0].style.opacity = "0";
    content_container[0].style.transform = "translate(-1100px)";
    content_container[1].style.transform = "translate(-550px)";
    content_container[2].style.transform = "translate(0px)";
    content_container[3].style.transform = "translate(550px)";
    content_container[4].style.transform = "translate(1100px)";
    /*title */
    content_title[1].style.opacity = "1";
    content_title[1].style.transition = ".5s ease";
    content_title[0].style.transition = "none";
    content_title[0].style.opacity = "0";
    content_title[0].style.transform = "translate(-1100px)";
    content_title[1].style.transform = "translate(-550px)";
    content_title[2].style.transform = "translate(0px)";
    content_title[3].style.transform = "translate(550px)";
    content_title[4].style.transform = "translate(1100px)";
    /*indicator*/
    content_indicator[0].style.scale = "1";
    content_indicator[1].style.scale = "1";
    content_indicator[2].style.opacity = "1";
    content_indicator[2].style.scale = "2";
    content_indicator[3].style.opacity = ".4";
    content_indicator[3].style.scale = "1";
    content_indicator[4].style.scale = "1";
  }

  left_counter--;
  right_counter++;

  if (right_counter === 5) {
    right_counter = 0;
  }
  if (left_counter === -5) {
    left_counter = 0;
  }
};

/*whatido js*/
const whatido_body = document.querySelector(".whatido-body");

function load_Category(num) {
  if (num === 1) {
    whatido_body.innerHTML = `<iframe src="./whatido/webdev.html" class="webdev-html">
    </iframe><button class="btn-off" onclick="turnOff(1)"></button>
     <svg height="500" width="400" class="whatido-svg">
            <path
              d="M150 0 L75 500 L225 500 L290 0 Z"
              style="fill: white; "
            >
            </path>
            <path
              d="M320 0 L400 0 L340 500 L260 500 Z"s
              style="fill: white; "
            >
            </path>
          </svg>`;
    setTimeout(() => {
      document.querySelector(".btn-off").style.opacity = "1";
      document.querySelector(".btn-off").style.scale = "1.4";
    }, 1000);
  }
}
function turnOff(num) {
  if (num === 1) {
    const whatido_svg = document.querySelector(".whatido-svg");
    console.log(whatido_svg);
    whatido_svg.style.transform = "translate(-1500px)";
    document.querySelector(".webdev-html").style.opacity = "0";
    document.querySelector(".btn-off").style.opacity = "0";
    setTimeout(() => {
      whatido_body.innerHTML = "";
    }, 500);
  }
}
/*project js*/
let btnsee = [6];
let thumb = [6];
for (let i = 0; i < 4; i++) {
  btnsee[i] = document.querySelector(`.btn-seemore${i + 1}`);
}

for (let i = 0; i < 4; i++) {
  thumb[i] = document.querySelector(`.project-thumbnail${i + 1}`);
}

let num = null;

function seemore(num) {
  if (num === 1) {
    btnsee[0].style.visibility = "inherit";
    thumb[0].style.filter = "blur(3px) brightness(20%)";
  } else if (num === 2) {
    btnsee[1].style.visibility = "inherit";
    thumb[1].style.filter = "blur(3px) brightness(20%)";
  } else if (num === 3) {
    btnsee[2].style.visibility = "inherit";
    thumb[2].style.filter = "blur(3px) brightness(20%)";
  } else if (num === 4) {
    btnsee[3].style.visibility = "inherit";
    thumb[3].style.filter = "blur(3px) brightness(20%)";
  }
}
function hide(num) {
  if (num === 1) {
    btnsee[0].style.visibility = "hidden";
    thumb[0].style.filter = "blur(0) brightness(100%)";
  } else if (num === 2) {
    btnsee[1].style.visibility = "hidden";
    thumb[1].style.filter = "blur(0) brightness(100%)";
  } else if (num === 3) {
    btnsee[2].style.visibility = "hidden";
    thumb[2].style.filter = "blur(0) brightness(100%)";
  } else if (num === 4) {
    btnsee[3].style.visibility = "hidden";
    thumb[3].style.filter = "blur(0) brightness(100%)";
  }
}

let details = document.querySelector(".pop-details");
let project_row1 = document.querySelector(".project-row1");
let project_row2 = document.querySelector(".project-row2");
let details_about = document.querySelector(".details-about");
let proj_preview1 = document.querySelector(".project-preview1");
let proj_preview2 = document.querySelector(".project-preview2");
let proj_preview3 = document.querySelector(".project-preview3");
let proj_preview4 = document.querySelector(".project-preview4");

function seemoreClick1() {
  proj_preview1.style.filter = "blur(0px)";
  proj_preview2.style.filter = "blur(5px) brightness(90%)";
  proj_preview3.style.filter = "blur(5px) brightness(90%)";
  proj_preview4.style.filter = "blur(5px) brightness(90%)";
  details_about.style.opacity = "0";
  details.style.transform = "translate(0px)";
  project_row1.style.transform = "translate(255px)";
  project_row2.style.transform = "translate(255px)";
  setTimeout(
    () =>
      (details_about.innerHTML = `  J's Photography is a photography and video service based in San
          Fernando, Pampanga. We captures life's most meaningful moments through
          high quality photos and cinematic videos. With passion and creativity,
          we unfolds your story and produces exceptional works that turns your
          big and small celebrations into a lasting masterpiece. J's Photography
          offers variety of services for your weddings, birthdays, events,
          special occasions, and more.`),
    1000
  );
  setTimeout(() => (details_about.style.opacity = "1"), 1000);
  details.style.opacity = "1";
  details.style.pointerEvents = "inherit";
}

function seemoreClick2() {
  proj_preview1.style.filter = "blur(5px) brightness(90%)";
  proj_preview2.style.filter = "blur(0px)";
  proj_preview3.style.filter = "blur(5px) brightness(90%)";
  proj_preview4.style.filter = "blur(5px) brightness(90%)";
  details_about.style.opacity = "0";
  details.style.transform = "translate(885px)";
  project_row1.style.transform = "translate(-255px)";
  project_row2.style.transform = "translate(-255px)";
  setTimeout(
    () =>
      (details_about.innerHTML = ` Golden Frame Studios brings timeless moments to life through expert
photography and videography. Based in the heart of Angeles City, we
capture memories with care, clarity, and artistic flair. Our team believes
every story deserves to be told beautifully—whether it’s a wedding, debut,
or family event. With creativity and professionalism, we turn simple
moments into unforgettable visuals. Let Golden Frame Studios preserve the
milestones that matter most to you.`),
    1000
  );
  setTimeout(() => (details_about.style.opacity = "1"), 1000);
  details.style.opacity = "1";
  details.style.pointerEvents = "inherit";
}

function seemoreClick3() {
  proj_preview1.style.filter = "blur(5px) brightness(90%)";
  proj_preview2.style.filter = "blur(5px) brightness(90%)";
  proj_preview3.style.filter = "blur(0px)";
  proj_preview4.style.filter = "blur(5px) brightness(90%)";
  details_about.style.opacity = "0";
  details.style.transform = "translate(0px)";
  project_row1.style.transform = "translate(255px)";
  project_row2.style.transform = "translate(255px)";
  setTimeout(
    () =>
      (details_about.innerHTML = `  Luxe Lens Media offers stunning visuals that reflect the emotion and
essence of your special day. From the candid smiles to the grandest
gestures, we make sure every shot speaks a thousand words. With modern
techniques and a storytelling approach, our team delivers more than just
photos—we deliver a full experience. Serving clients across Pampanga and
beyond, we are committed to excellence in every frame. Your moments,
our passion.`),
    1000
  );
  setTimeout(() => (details_about.style.opacity = "1"), 1000);
  details.style.opacity = "1";
  details.style.pointerEvents = "inherit";
}

function seemoreClick4() {
  proj_preview1.style.filter = "blur(5px) brightness(90%)";
  proj_preview2.style.filter = "blur(5px) brightness(90%)";
  proj_preview3.style.filter = "blur(5px) brightness(90%)";
  proj_preview4.style.filter = "blur(0px)";
  details_about.style.opacity = "0";
  details.style.transform = "translate(885px)";
  project_row1.style.transform = "translate(-255px)";
  project_row2.style.transform = "translate(-255px)";
  setTimeout(
    () =>
      (details_about.innerHTML = `  Everlight Creative captures the beauty of real life with authenticity and
heart. Located in San Fernando, Pampanga, we specialize in both
photography and videography for all occasions. Whether it’s an intimate
portrait session or a large celebration, we treat every event with the
same attention to detail and creativity. Our goal is to deliver timeless
memories that you’ll cherish forever. Let us turn your moments into
art you can revisit again and again.`),
    1000
  );
  setTimeout(() => (details_about.style.opacity = "1"), 1000);
  details.style.opacity = "1";
  details.style.pointerEvents = "inherit";
}

let dots = [];
let options = {
  threshold: 0.5,
};

for (let i = 0; i < 6; i++) {
  dots[i] = document.querySelector(`.scroll-dot${i + 1}`);
}

/*skills js*/

let category = document.querySelector("#category");
let skill_desc = document.querySelector(".skills-description");

function changeCategory() {
  if (category.value === "Full Stack Development") {
    skill_desc.innerHTML =
      "As a Full Stack Developer, I build seamless, end-to-end web applications—handling everything from responsive front-end interfaces to efficient, secure back-end systems. I work with modern frameworks and technologies like React, Node.js, and Express, and I’m comfortable managing databases, APIs, and deployment processes. I enjoy crafting solutions that are not only functional but also scalable and user-friendly.";
  } else if (category.value === "UI | UX Design") {
    skill_desc.innerHTML =
      "Design is more than just aesthetics—it's about creating experiences. With a strong foundation in UI | UX Design, I focus on designing intuitive, accessible, and visually engaging interfaces. From wireframing and prototyping to user research and interaction design, I aim to build products that genuinely connect with users and solve real problems.";
  } else if (category.value === "Software Development") {
    skill_desc.innerHTML =
      "I have a solid background in software development, building reliable and maintainable applications that serve real-world needs. I’m experienced in object-oriented programming, data structures, and software lifecycle best practices, using languages such as Python, Java, and C#. I take pride in writing clean, efficient code and collaborating effectively within development teams.";
  } else if (category.value === "Mobile Software Development") {
    skill_desc.innerHTML =
      "Bringing ideas to life on mobile platforms is something I truly enjoy. I develop mobile applications for both Android and iOS using technologies like Flutter, React Native, and native SDKs. I focus on performance, smooth user interaction, and cross-device compatibility—always with the end user in mind.";
  }
}

/*testimonial js*/
const magnifying = document.querySelector(".magnifying");
const stars = Array.from(document.querySelectorAll(".row"));

function moveMagnify(num) {
  if (num === 1) {
    let timer = 0;
    stars.forEach((star) => {
      star.style.transition = ".3s ease";
    });
    stars[0].style.transition = "1s ease";
    magnifying.style.transform = "translate(-205px)";
    magnifying.style.transition = " 1s ease-out";
    for (let i = 5; i >= 0; i--) {
      setTimeout(() => {
        stars[i].style.filter = "blur(0px)";
        stars[i].style.scale = "1.2";
        stars[0].style.scale = "1";
      }, timer);
      timer += 90;
    }
  } else {
    magnifying.style.transition = " none";
    magnifying.style.transform = "translate(270px)";
    stars.forEach((star) => {
      star.style.transition = "none";
      star.style.scale = "1";
      star.style.filter = "blur(2px)";
    });
  }
}

const section1 = document.querySelector(".introduction");
const section2 = document.querySelector(".aboutme");
const section3 = document.querySelector(".whatido");
const section4 = document.querySelector(".project");
const section5 = document.querySelector(".skills");
const section6 = document.querySelector(".testimonial");

let rect = [];
rect = Array.from(document.querySelectorAll(".rectangle"));

const observer1 = new IntersectionObserver(function (entries, observer1) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting === true) {
      dots[0].style.scale = "3";
      dots[0].style.background = "#22284cff";

      document.querySelector(".intro-title").style.transform = "translate(0px)";
      document.querySelector(".profile-img").style.transform = "translate(0px)";
      let time = 600;
      rect.forEach((rects) => {
        setTimeout(() => (rects.style.opacity = "1"), time);

        time -= 200;
      });
      document.querySelector("#prevAnim").beginElement();
      document.querySelector("#lastAnim").beginElement();
    } else if (entry.isIntersecting === false) {
      dots[0].style.scale = "1";
      dots[0].style.background = "#8992a1";
      document.querySelector(".intro-title").style.transform =
        "translate(100px)";
      document.querySelector(".profile-img").style.transform =
        "translate(-60px)";
      rect.forEach((rects) => {
        rects.style.opacity = "0";
      });
    }
  });
}, options);
let icons = [
  document.querySelector(".linked-icon"),
  document.querySelector(".facebook-icon"),
  document.querySelector(".instagram-icon"),
];
let svg_anim2 = ([] = document.querySelectorAll("#prevAnim2"));
const observer2 = new IntersectionObserver(function (entries, observer2) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting === true) {
      dots[1].style.scale = "3";
      dots[1].style.background = "#22284cff";
      svg_anim2.forEach((svg_anim2) => {
        svg_anim2.beginElement();
      });
      content_container.forEach((content_container) => {
        content_container.style.transition = ".5s ease";
      });
      content_title.forEach((content_title) => {
        content_title.style.transition = ".5s ease";
      });
      content_container[0].style.opacity = "0";
      content_container[1].style.opacity = "1";
      content_container[2].style.opacity = "1";
      content_container[3].style.opacity = "1";
      content_container[4].style.opacity = "0";
      content_title[0].style.opacity = "0";
      content_title[1].style.opacity = "1";
      content_title[2].style.opacity = "1";
      content_title[3].style.opacity = "1";
      content_title[4].style.opacity = "0";
      icons.forEach((icons) => {
        icons.style.transform = "translate(-25px, 0px)";
      });
      setTimeout(() => {
        icons[0].style.transform = "translate(0px, 0px)";
      }, 300);
      setTimeout(() => {
        icons[1].style.transform = "translate(0px, 0px)";
      }, 350);
      setTimeout(() => {
        icons[2].style.transform = "translate(0px, 0px)";
      }, 400);
      left_counter = 0;
      right_counter = 0;
    } else if (entry.isIntersecting === false) {
      dots[1].style.scale = "1";
      dots[1].style.background = "#8992a1";
      content_container[0].style.transform = "translate(-1100px)";
      content_container[1].style.transform = "translate(-550px)";
      content_container[2].style.transform = "translate(0px)";
      content_container[3].style.transform = "translate(550px)";
      content_container[4].style.transform = "translate(1100px)";
      content_title[0].style.transform = "translate(-1100px)";
      content_title[1].style.transform = "translate(-550px)";
      content_title[2].style.transform = "translate(0px)";
      content_title[3].style.transform = "translate(550px)";
      content_title[4].style.transform = "translate(1100px)";
      content_indicator[0].style.opacity = ".4";
      content_indicator[0].style.scale = "1";
      content_indicator[1].style.opacity = ".4";
      content_indicator[1].style.scale = "1";
      content_indicator[2].style.opacity = "1";
      content_indicator[2].style.scale = "2";
      content_indicator[3].style.opacity = ".4";
      content_indicator[3].style.scale = "1";
      content_indicator[4].style.opacity = ".4";
      content_indicator[4].style.scale = "1";
      left_counter = 0;
      right_counter = 0;
    }
  });
}, options);

let divider = [];
divider = document.querySelectorAll(".menu-divider");
let key1 = document.querySelector(".key1");
let key2 = document.querySelector(".key2");
let counter = 3000;
let interval1 = null;
let interval2 = null;

animateKeys_Up = () => {
  key1.style.transform = "translate(0px, -25px)";
  key2.style.transform = "translate(0px, -15px)";
  key1.style.scale = "1.05";
  key2.style.scale = "1.05";
};
animateKeys_Down = () => {
  key1.style.scale = "1";
  key2.style.scale = "1";
  key1.style.transform = "translate(0px, 0px)";
  key2.style.transform = "translate(0px, 0px)";
};

animateKey1 = () => {
  animateKeys_Down();
  setTimeout(() => {
    animateKeys_Up();
  }, 1000);
};

const observer3 = new IntersectionObserver(function (entries, observer3) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting === true) {
      let time = 100;
      dots[2].style.scale = "3";
      dots[2].style.background = "#22284cff";
      document.querySelector(".whatido-body").style.transform =
        "translate(0px, 0px)";
      divider.forEach((divider) => {
        setTimeout(() => (divider.style.transform = "translate(0px)"), time);
        time -= 20;
      });
      animateKeys_Up();
    } else if (entry.isIntersecting === false) {
      dots[2].style.scale = "1";
      dots[2].style.background = "#8992a1";
      document.querySelector(".whatido-body").style.transform =
        "translate(-40px, 1px)";
      divider.forEach((divider) => {
        divider.style.transform = "translate(30px)";
      });
      animateKeys_Down();
    }
    whatido_body.innerHTML = "";
  });
}, options);

function hide_details() {
  document.querySelector(".project-row1").style.transform = "translate(0px)";
  document.querySelector(".project-row2").style.transform = "translate(0px)";
  document.querySelector(".pop-details").style.opacity = "0";
  details.style.pointerEvents = "none";
  proj_preview1.style.filter = "blur(0px)";
  proj_preview2.style.filter = "blur(0px)";
  proj_preview3.style.filter = "blur(0px)";
  proj_preview4.style.filter = "blur(0px)";
}

const observer4 = new IntersectionObserver(function (entries, observer4) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting === true) {
      dots[3].style.scale = "3";
      dots[3].style.background = "#22284cff";
      document.querySelector(".project-row1").style.transform =
        "translate(0px)";
      document.querySelector(".project-row2").style.transform =
        "translate(0px)";
    } else if (entry.isIntersecting === false) {
      dots[3].style.scale = "1";
      dots[3].style.background = "#8992a1";
      document.querySelector(".project-row1").style.transform =
        "translate(-50px)";
      document.querySelector(".project-row2").style.transform =
        "translate(50px)";

      document.querySelector(".pop-details").style.opacity = "0";
      details.style.pointerEvents = "none";
      proj_preview1.style.filter = "blur(0px)";
      proj_preview2.style.filter = "blur(0px)";
      proj_preview3.style.filter = "blur(0px)";
      proj_preview4.style.filter = "blur(0px)";
    }
  });
}, options);

const observer5 = new IntersectionObserver(function (entries, observer5) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting === true) {
      dots[4].style.scale = "3";
      dots[4].style.background = "#22284cff";
      document.querySelector(".skill-row1").style.scale = "1";
      document.querySelector(".skill-row2").style.scale = "1";
    } else if (entry.isIntersecting === false) {
      dots[4].style.scale = "1";
      dots[4].style.background = "#8992a1";
      document.querySelector(".skill-row1").style.scale = ".96";
      document.querySelector(".skill-row2").style.scale = ".96";
    }
  });
}, options);

const observer6 = new IntersectionObserver(function (entries, observer6) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting === true) {
      dots[5].style.scale = "3";
      dots[5].style.background = "#22284cff";
      moveMagnify(1);
    } else if (entry.isIntersecting === false) {
      dots[5].style.scale = "1";
      dots[5].style.background = "#8992a1";
      moveMagnify(0);
    }
  });
}, options);

observer1.observe(section1);
observer2.observe(section2);
observer3.observe(section3);
observer4.observe(section4);
observer5.observe(section5);
observer6.observe(section6);
