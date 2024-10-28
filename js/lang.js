const translations = {
  en: {
    homeNav: 'Home',
    aboutNav: 'About',
    portfolioNav: 'Portfolio',
    contactNav: 'Contact',
    downloadCV: 'Download CV',
    hello: "Hello, I'm",
    myName: 'Alexander Chorny',
    profession: 'Web',
    professionSpan: 'Developer',
    aboutMe:
      'I strive to create reliable, adaptive, cross-browser web products based on best practices and accessibility.',
    aboutBtn: 'About Me',
    who: 'Who am I',
    aboutTitle: 'About me',
    aboutP1:
      'I am a passionate developer with relevant experience in web development. I focus on creating reliable, adaptive, cross-browser web products, emphasizing best practices and accessibility.',
    aboutP2:
      'In life, I enjoy self-learning, constantly working on improving my technical and communication skills. I strive to learn something new or accomplish something useful every day.',
    aboutP3:
      'Additionally, I enjoy sports and pursuing diverse personal developmentopportunities.',
    hireMe: 'Hire Me',
    portfolioTitle: 'Portfolio',
    myProjects: 'My Projects',
    portfolioP:
      'Most common methods for designing websites that work well on desktop is responsive and adaptive design.',
    contactTitle: "Let's talk about everything",
    contactP: "Don't like forms? Send me an email.",
    inputEmail: 'Enter your email',
    inputSubmit: 'Submit',
  },

  uk: {
    homeNav: 'Головна',
    aboutNav: 'Про мене',
    portfolioNav: 'Портфоліо',
    contactNav: 'Контакти',
    downloadCV: 'Резюме',
    hello: 'Привіт, Я',
    myName: 'Oлександр Чорний',
    profession: 'Веб',
    professionSpan: 'Розробник',
    aboutMe:
      'Прагну створювати надійні, адаптивні, кросбраузерні веб-продукти, дотримуючись найкращих практик і доступності.',
    aboutBtn: 'Про мене',
    who: 'Хто я',
    aboutTitle: 'Про мене',
    aboutP1:
      'Я захоплений розробник із відповідним досвідом у веб-розробці. Зосереджуюсь на створенні надійних, адаптивних, крос-браузерних веб-продуктів, роблячи акцент на дотриманні найкращих практик і забезпеченні доступності.',
    aboutP2:
      'У житті я люблю самоосвіту, постійно працюю над покращенням своїх технічних і комунікативних навичок. Щодня прагну дізнатися щось нове або досягти чогось корисного.',
    aboutP3:
      'Крім того, я захоплююсь спортом і прагну до різнобічного особистісного розвитку.',
    hireMe: 'Найми мене',
    portfolioTitle: 'Портфоліо',
    myProjects: 'Мої проекти',
    portfolioP:
      'Найпоширеніші методи дизайну вебсайтів, які добре працюють на десктопах, це адаптивний і респонзивний дизайн.',
    contactTitle: 'Давайте обговоримо все',
    contactP: 'Не подобаються форми? Напишіть мені на email.',
    inputEmail: 'Введіть свій email',
    inputSubmit: 'Надіслати',
  },
};

document.addEventListener('DOMContentLoaded', () => {
  const languageSelector = document.getElementById('lang-sel');
  const homeNav = document.getElementById('home-nav');
  const aboutNav = document.getElementById('about-nav');
  const portfolioNav = document.getElementById('portfolio-nav');
  const contactNav = document.getElementById('contact-nav');
  const downloadCV = document.getElementById('download-cv');
  const hello = document.getElementById('hello');
  const myName = document.getElementById('myName');
  const profession = document.getElementById('profession');
  const professionSpan = document.getElementById('profession-span');
  const aboutMe = document.getElementById('about-me');
  const aboutBtn = document.getElementById('about-btn');
  const who = document.getElementById('who');
  const aboutTitle = document.getElementById('about-title');
  const aboutP1 = document.getElementById('about-p-1');
  const aboutP2 = document.getElementById('about-p-2');
  const aboutP3 = document.getElementById('about-p-3');
  const hireMe = document.getElementById('open-form-modal-btn');
  const portfolioTitle = document.getElementById('portfolio-title');
  const myProjects = document.getElementById('my-projects');
  const portfolioP = document.getElementById('portfolio-p');
  const contactTitle = document.getElementById('contact-title');
  const contactP = document.getElementById('contact-p');
  const inputEmail = document.getElementById('input-email');
  const inputSubmit = document.getElementById('input-submit');

  languageSelector.addEventListener('change', (event) => {
    setLanguage(event.target.value);
  });

  const setLanguage = (language) => {
    if (language === 'en') {
      homeNav.innerText = translations.en.homeNav;
      aboutNav.innerText = translations.en.aboutNav;
      portfolioNav.innerText = translations.en.portfolioNav;
      contactNav.innerText = translations.en.contactNav;
      downloadCV.innerText = translations.en.downloadCV;
      hello.innerText = translations.en.hello;
      myName.innerText = translations.en.myName;
      profession.firstChild.nodeValue = translations.en.profession + ' ';
      professionSpan.innerText = translations.en.professionSpan;
      aboutMe.innerText = translations.en.aboutMe;
      aboutBtn.innerText = translations.en.aboutBtn;
      who.innerText = translations.en.who;
      aboutTitle.innerText = translations.en.aboutTitle;
      aboutP1.innerText = translations.en.aboutP1;
      aboutP2.innerText = translations.en.aboutP2;
      aboutP3.innerText = translations.en.aboutP3;
      hireMe.innerText = translations.en.hireMe;
      portfolioTitle.innerText = translations.en.portfolioTitle;
      myProjects.innerText = translations.en.myProjects;
      portfolioP.innerText = translations.en.portfolioP;
      contactTitle.innerText = translations.en.contactTitle;
      contactP.innerText = translations.en.contactP;
      inputEmail.placeholder = translations.en.inputEmail;
      inputSubmit.value = translations.en.inputSubmit;
    } else if (language === 'uk') {
      homeNav.innerText = translations.uk.homeNav;
      aboutNav.innerText = translations.uk.aboutNav;
      portfolioNav.innerText = translations.uk.portfolioNav;
      contactNav.innerText = translations.uk.contactNav;
      downloadCV.innerText = translations.uk.downloadCV;
      hello.innerText = translations.uk.hello;
      myName.innerText = translations.uk.myName;
      profession.firstChild.nodeValue = translations.uk.profession + ' ';
      professionSpan.innerText = translations.uk.professionSpan;
      aboutMe.innerText = translations.uk.aboutMe;
      aboutBtn.innerText = translations.uk.aboutBtn;
      who.innerText = translations.uk.who;
      aboutTitle.innerText = translations.uk.aboutTitle;
      aboutP1.innerText = translations.uk.aboutP1;
      aboutP2.innerText = translations.uk.aboutP2;
      aboutP3.innerText = translations.uk.aboutP3;
      hireMe.innerText = translations.uk.hireMe;
      portfolioTitle.innerText = translations.uk.portfolioTitle;
      myProjects.innerText = translations.uk.myProjects;
      portfolioP.innerText = translations.uk.portfolioP;
      contactTitle.innerText = translations.uk.contactTitle;
      contactP.innerText = translations.uk.contactP;
      inputEmail.placeholder = translations.uk.inputEmail;
      inputSubmit.value = translations.uk.inputSubmit;
    }
  };
});
