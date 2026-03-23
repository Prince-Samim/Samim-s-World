type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "SAMIM — 3D Portfolio",
    fullName: "SAMIM",
    email: "iam.samim@outlook.com",
  },
  hero: {
    name: "SAMIM",
    p: ["I develop 3D visuals, user", "interfaces and web applications"],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: "I am a BCA (Hons) student and a Creative Developer who finds harmony between technology and nature. My journey is fueled by a passion for building robust web applications and a deep love for nature photography. I find peace in capturing the intricate beauty of flowers, and I bring that same attention to detail into my code and cinematic video edits. For me, development isn't just about logic—it's about creating digital experiences that feel as balanced and serene as a walk through a garden. Let’s collaborate to build something soulful and high-performing!",
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: "The following projects showcase my technical journey as a BCA (Hons) student. These are real-world examples of my work, built using React.js, Node.js, and modern web technologies. Each project is briefly described with links to the code repositories and live demos. They reflect my ability to solve complex problems, learn new frameworks, and build functional, user-friendly applications.",
    },
  },
};
