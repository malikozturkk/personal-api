import { Injectable } from '@nestjs/common';

type Duration = {
    years?: number;
    months: number;
};

@Injectable()
export class PersonalInformationService {
    constructor() { }

    async findAllInfos(page: number, limit: number) {
        const totalSkills = this.allSkills.length;
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        const paginatedSkills = this.allSkills.slice(startIndex, endIndex);

        return {
            personalInfo: this.aboutMe,
            skills: paginatedSkills,
            totalSkills,
            experience: this.experience,
            portfolio: this.portfolio
        };
    }

    private calculateDateDifference(startDate: Date, endDate?: Date): Duration {
        const start = new Date(startDate);
        const end = endDate ? new Date(endDate) : new Date();
        let years = end.getFullYear() - start.getFullYear();
        let months = end.getMonth() - start.getMonth();
        if (months < 0) {
            years -= 1;
            months += 12;
        }
        return { years: years || undefined, months: months || undefined };
    }

    private readonly experience = [
        {
            "period": "Currently",
            "duration": this.calculateDateDifference(new Date("2024-07-05")),
            "description": "Joined Artüssü Technology as a Mid Full Stack Developer. I started working on backend development and used technologies like NestJS, Socket, Prisma, PostgreSQL, RTK Query, Firebase, and Strapi in this role.",
            "company": "Artüssü Technology",
            "position": "Mid Full Stack Developer",
            "color": "#f0893d",
            "logo": "artussu-logo.png"
        },
        {
            "period": "2023-2024",
            "duration": this.calculateDateDifference(new Date("2023-09-25"), new Date("2024-07-05")),
            "description": "Worked as a Mid Frontend Developer at Enuygun.com in the UI Transformation team. In this role, I also worked with technologies like Next.js, Design System, Styled Components, and React i18next.",
            "company": "Wingie Enuygun Group",
            "position": "Mid Frontend Developer",
            "color": "#2dc44e",
            "logo": "enuygun-logo.png"
        },
        {
            "period": "2022-2024",
            "duration": this.calculateDateDifference(new Date("2022-08-20"), new Date("2024-06-17")),
            "description": "I graduated from the Computer Programming Associate's Degree program at Istanbul Topkapi University.",
            "company": "Istanbul Topkapi University",
            "position": "Computer Programming",
            "color": "#8c2131",
            "logo": "topkapi-logo.png"
        },
        {
            "period": "2022-2023",
            "duration": this.calculateDateDifference(new Date("2022-09-25"), new Date("2023-09-25")),
            "description": "Continued working as a Junior Frontend Developer at Enuygun.com on the Flight project. Additionally, I used technologies like React, TypeScript, CSS Modules, and Redux in this role.",
            "company": "Wingie Enuygun Group",
            "position": "Junior Frontend Developer",
            "color": "#2dc44e",
            "logo": "enuygun-logo.png"
        },
        {
            "period": "2021-2022",
            "duration": this.calculateDateDifference(new Date("2021-06-10"), new Date("2022-09-25")),
            "description": "Worked as an Assistant Frontend Developer at Enuygun.com on the Flight project using JavaScript, SCSS, and jQuery.",
            "company": "Wingie Enuygun Group",
            "position": "Assistant Frontend Developer",
            "color": "#2dc44e",
            "logo": "enuygun-logo.png"
        },
        {
            "period": "2020-2021",
            "duration": this.calculateDateDifference(new Date("2020-09-10"), new Date("2021-06-10")),
            "description": "Worked as an IT Intern at Enuygun.com.",
            "company": "Wingie Enuygun Group",
            "position": "IT Intern",
            "color": "#2dc44e",
            "logo": "enuygun-logo.png"
        }
    ]

    private readonly portfolio = [
        {
            "image": "dudolive.png",
            "name": "Dudo Live",
            "position": "Full Stack",
            "projectUrl": "https://dudolive.com/",
            "technologies": ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg"]
        },
        {
            "image": "enuygun.png",
            "name": "Enuygun",
            "position": "Frontend",
            "projectUrl": "https://www.enuygun.com/ucak-bileti/",
            "technologies": ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg"]
        },
        {
            "image": "wingie.png",
            "name": "Wingie",
            "position": "Frontend",
            "projectUrl": "https://www.wingie.com/",
            "technologies": ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg"]
        },
        {
            "image": "netflix-clone.png",
            "name": "Netflix Clone",
            "position": "Full Stack",
            "projectUrl": "https://netflix-project-mocha.vercel.app/login",
            "codeUrl": "https://github.com/malikozturkk/netflix-project",
            "technologies": ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg"]
        },
        {
            "image": "ark.png",
            "name": "Ark Elektrik",
            "position": "Full Stack",
            "projectUrl": "https://elektrikark.vercel.app/",
            "codeUrl": "https://github.com/malikozturkk/elektrikark",
            "technologies": ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/eslint/eslint-original.svg"]
        },
        {
            "image": "chat-app.png",
            "name": "Chat Application",
            "position": "Full Stack",
            "projectUrl": "https://chat-application-h5ys.vercel.app/",
            "codeUrl": "https://github.com/malikozturkk/chat-application",
            "technologies": ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"]
        },
        {
            "image": "getir-clone.png",
            "name": "Getir Clone",
            "position": "Full Stack",
            "projectUrl": "https://getir-clone-henna.vercel.app/su-icecek",
            "codeUrl": "https://github.com/malikozturkk/getir-clone",
            "technologies": ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/eslint/eslint-original.svg"]
        },
        {
            "image": "spend-money.png",
            "name": "Spend Money",
            "position": "Full Stack",
            "projectUrl": "https://para-harcama-app.vercel.app/money",
            "codeUrl": "https://github.com/malikozturkk/para-harcama",
            "technologies": ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg"]
        },
        {
            "image": "todo-app.png",
            "name": "Todo App",
            "position": "Full Stack",
            "projectUrl": "https://react-bootcamp-app.vercel.app/todo",
            "codeUrl": "https://github.com/malikozturkk/react-bootcamp-app",
            "technologies": ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"]
        },
    ]



    private readonly aboutMe = {
        name: "Malik",
        surname: "Öztürk",
        age: ~~((Date.now() - +new Date('2003-04-17')) / (31557600000)),
        profession: "Full Stack Developer",
        based: "Istanbul",
        technologiesKnown: ["TYPESCRIPT", "JAVASCRİPT", "NODEJS", "NEXTJS", "NESTJS", "POSTGRESQL", "PRISMA", "REDUX"]
    };


    private readonly allSkills = [
        {
            name: "TYPESCRIPT",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
        },
        {
            name: "JAVASCRIPT",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
        },
        {
            name: "REACT",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
        },
        {
            name: "NEXT.JS",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
        },
        {
            name: "NODEJS",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
        },
        {
            name: "NESTJS",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg"
        },
        {
            name: "HTML5",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
        },
        {
            name: "CSS3",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
        },
        {
            name: "TAILWINDCSS",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
        },
        {
            name: "POSTGRESQL",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
        },
        {
            name: "PRISMA",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg"
        },
        {
            name: "DOCKER",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"
        },
        {
            name: "REDUX",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg"
        },
        {
            name: "JEST",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg"
        },
        {
            name: "SWAGGER",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swagger/swagger-original.svg"
        },
        {
            name: "REDIS",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg"
        },
        {
            name: "FIREBASE",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg"
        },
        {
            name: "SOCKETIO",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg"
        },
        {
            name: "GIT",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
        },
        {
            name: "SASS",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg"
        },
        {
            name: "ESLINT",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/eslint/eslint-original.svg"
        },
        {
            name: "FIGMA",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
        },
        {
            name: "STORYBOOK",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/storybook/storybook-original.svg"
        },
        {
            name: "MATERIALUI",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg"
        },
        {
            name: "SENTRY",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sentry/sentry-original.svg"
        },
        {
            name: "POSTMAN",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg"
        },
        {
            name: "NGINX",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg"
        },
        {
            name: "JQUERY",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg"
        }
    ];

}
