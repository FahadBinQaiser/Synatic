const cards = [
    {
        title:"Card1",
        number: 0o1,
        svgSrc: "M19 11h-6V5h-2v6H5v2h6v6h2v-6h6v-2z",
        heading: "Advanced Healthcare Solutions",
        para:"Experience cutting-edge medical solutions designed to simplify healthcare."
    },
    {
        title:"Card2",
        number: 0o2,
        svgSrc: "M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-1-13h2v6h-2zm1 8c-.828 0-1.5-.672-1.5-1.5S11.172 12 12 12s1.5.672 1.5 1.5S12.828 15 12 15z",
        heading: "Trusted Medical Expertise",
        para:"Our platform connects you with trusted medical professionals and resources."
    },
    {
        title:"Card3",
        number: 0o3,
        svgSrc: "M19 11h-6V5h-2v6H5v2h6v6h2v-6h6v-2z",
        heading: "Smart Healthcare, Smarter Future",
        para:"Synatic transforms the way you experience support and medical care."
    },
]
const cardBox = document.getElementById("cardsSection"); 
cards.forEach((card) => {
    const cardDiv = document.createElement("div");
    cardDiv.innerHTML = `
    <div class="beforeCircle rounded-lg sm:rounded-none sm:w-60 sm:h-80 lg:w-80 lg:h-80 bg-white shadow-[0px_0px_15px_rgba(0,0,0,0.09)] p-9 space-y-3 relative overflow-hidden">
          <div class="w-24 h-24 bg-black rounded-full absolute -right-5 -top-7">
            <p class="absolute bottom-6 left-7 text-white text-2xl">${card.number}</p>
          </div>
          <div class="w-12">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 text-black" viewBox="0 0 24 24" fill="currentColor">
              <path d="${card.svgSrc}"/>
            </svg>
          </div>
          <h1 class="font-bold text-xl text-black">${card.heading}</h1>
          <p class="text-sm text-zinc-500 leading-6">
            ${card.para}
          </p>
        </div>
    `
    cardBox.appendChild(cardDiv);
})

const services = [
  {
    title: "Service1",
    heading: "Telemedicine",
    imgSrc: "images/medicine.png",
    paragraph: "Get expert medical consultations anytime, anywhere. No more waiting rooms—just instant access to healthcare."
  },
  {
    title: "Service2",
    heading: "Home Healthcare",
    imgSrc: "images/cardiogram.png",
    paragraph: "Bringing medical services to your doorstep. From post-surgery care to routine checkups, we ensure you receive the best treatment at home."
  },
  {
    title: "Service3",
    heading: "Support",
    imgSrc: "images/pills.png",
    paragraph: "24/7 emergency medical assistance at your service. Whether it’s urgent care or ambulance coordination, we ensure help reaches you fast."
  },
];

const servicesSection = document.getElementById("servicesSection");

const gridContainer = document.createElement("div");
gridContainer.className = "grid grid-cols-1 md:grid-cols-3 gap-6";

services.forEach((service) => {
  const serviceDiv = document.createElement("div");
  serviceDiv.className = "bg-white text-black p-6 rounded-xl shadow-md"; 
  serviceDiv.innerHTML = `
    <div class="flex justify-between items-center">
      <h3 class="text-2xl font-semibold">${service.heading}</h3>
      <img src="${service.imgSrc}" class="w-[40px] h-[40px]" alt="">
    </div>
    <p class="text-sm mt-3">${service.paragraph}</p>
  `;

  gridContainer.appendChild(serviceDiv);
});

servicesSection.appendChild(gridContainer);

const testimonials = [
  { text: "Synatic's healthcare support is truly amazing! The doctors are professional and caring. Highly recommended!", author: "- Alex Johnson" },
  { text: "The home healthcare service was a lifesaver. Quick response, excellent doctors, and professional care!", author: "- Maria Smith" },
  { text: "Telemedicine at Synatic is top-notch. I got my consultation within minutes, right from my home!", author: "- James Lee" }
];

let currentTestimonial = 0;

function updateTestimonial() {
  document.getElementById("testimonial-text").innerText = testimonials[currentTestimonial].text;
  document.getElementById("testimonial-author").innerText = testimonials[currentTestimonial].author;
}

function prevTestimonial() {
  currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
  updateTestimonial();
}

function nextTestimonial() {
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  updateTestimonial();
}

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".navbar", {
      opacity: 0, 
      y: 50, 
      duration: 1,
      scrollTrigger: {
          trigger: ".navbar",
          start: "top 80%", 
          toggleActions: "play none none reverse"
      }
  });
  gsap.from(".hero", {
      opacity: 0, 
      y: 50, 
      duration: 1,
      stagger: 0.2, 
      scrollTrigger: {
          trigger: ".hero",
          start: "top 75%",
          toggleActions: "play none none reverse"
      }
  });
  gsap.from(".card", {
      opacity: 0, 
      y: 50, 
      duration: 1,
      stagger: 0.2, 
      scrollTrigger: {
          trigger: ".card",
          start: "top 75%",
          toggleActions: "play none none reverse"
      }
  });
  gsap.from(".imageAndText", {
      opacity: 0, 
      x: -50, 
      duration: 1,
      scrollTrigger: {
          trigger: ".imageAndText",
          start: "top 85%",
          toggleActions: "play none none reverse"
      }
  });
  gsap.from(".picture", {
      opacity: 0, 
      scale: 0.8, 
      duration: 1,
      scrollTrigger: {
          trigger: ".picture",
          start: "top 90%",
          toggleActions: "play none none reverse"
      }
  });
  gsap.from(".services", {
      opacity: 0, 
      x: -50, 
      duration: 1, 
      stagger: 0.3,
      scrollTrigger: {
          trigger: ".services",
          start: "top 80%",
          toggleActions: "play none none reverse"
      }
  });
  gsap.from(".faq", {
      opacity: 0, 
      x: -50, 
      duration: 1, 
      stagger: 0.3,
      scrollTrigger: {
          trigger: ".faq",
          start: "top 80%",
          toggleActions: "play none none reverse"
      }
  });
  gsap.from(".testimonials", {
      opacity: 0, 
      y: 50, 
      duration: 1, 
      stagger: 0.2,
      scrollTrigger: {
          trigger: ".testimonials",
          start: "top 75%",
          toggleActions: "play none none reverse"
      }
  });
  gsap.from(".cta", {
      opacity: 0, 
      y: 50, 
      duration: 1, 
      stagger: 0.2,
      scrollTrigger: {
          trigger: ".cta",
          start: "top 75%",
          toggleActions: "play none none reverse"
      }
  });
  gsap.from(".footer", {
      opacity: 0, 
      y: 50, 
      duration: 1,
      scrollTrigger: {
          trigger: ".footer",
          start: "top 85%",
          toggleActions: "play none none reverse"
      }
  });
});

