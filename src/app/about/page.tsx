import H1 from "@/components/ui/H1";
import H2 from "@/components/ui/H2";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Learn more about Nikunja Sarma, his journey, projects, and skills.",
};

export default function Page() {
  return (
    <section className="space-y-6">
      <H1>About Me</H1>
      <section className="space-y-3">
        <H2>Welcome!</H2>
        <p>
          Hello! I{"'"}m Nikunja Sarma, a passionate self-taught web developer with
          a knack for creating engaging and dynamic web applications. My journey
          into the world of coding started with a curiosity about how websites
          worked, which quickly grew into a full-fledged passion. Through
          self-study and hands-on experience, I honed my technical skills and
          developed a deep understanding of cloud services and cybersecurity. I
          pursued a Bachelor of Computer Applications in Cloud Technology and
          Information Security at
          <a href="https://adtu.in" className="text-primary hover:underline">
            {" Assam Downtown University"}
          </a>
          , which further solidified my knowledge and expertise in the field.
        </p>
        <hr className="border-muted" />
      </section>
      <section className="space-y-3">
        <H2>My Journey</H2>
        <p>
          <strong>
            At
            <a
              href="https://www.zerorisklabs.com"
              className="text-primary hover:underline"
            >
              {" ZeroRisk Labs"}
            </a>
          </strong>
          <br />
          Currently, I work as a web developer at{" "}
          <a
            href="https://www.zerorisklabs.com"
            className="text-primary hover:underline"
          >
            {" ZeroRisk Labs"}
          </a>
          , where I thrive on challenges and constantly seek to improve the
          performance and security of web applications. My role involves
          collaborating with talented cross-functional teams to deliver projects
          that not only meet but exceed client expectations. From developing
          dynamic web applications to configuring DNS settings for optimal
          performance, every task I undertake helps me grow as a professional.
        </p>
        <p>
          <strong>Internships </strong>
          <br />
          My professional journey includes invaluable internship experiences. At
          <a
            href="https://teachnook.com/"
            className="text-primary hover:underline"
          >
            {" TeachNook"}
          </a>
          , I delved into the development of web applications using
          <a
            href="https://nextjs.org/"
            className="text-primary hover:underline"
          >
            {" Next.js "}
          </a>
          and{" "}
          <a href="https://react.dev/" className="text-primary hover:underline">
            {" React.js"}
          </a>
          , where I gained hands-on experience in real-world coding
          environments. Participating in code reviews and debugging sessions
          sharpened my problem-solving skills.
        </p>
        <p>
          Before that, my internship at{" "}
          <a
            href="https://learn.verzeo.in"
            className="text-primary hover:underline"
          >
            {" Verzeo "}
          </a>
          introduced me to the vast world of           <a href="https://aws.amazon.com/" className="text-primary hover:underline">{" AWS cloud services"}</a>
. I worked on
          cloud deployment and infrastructure management projects, which gave me
          practical insights into cloud technology.
        </p>
        <hr className="border-muted" />
      </section>
      <section className="space-y-3">
      <p>
    One of my favorite projects is the{" "}
    <strong>Event Management App</strong>. Using a stack of 
    <a href="https://nextjs.org" className="text-primary hover:underline">{` Next.js`}</a>, 
    <a href="https://www.typescriptlang.org" className="text-primary hover:underline">{' TypeScript'}</a>, 
    <a href="https://github.com/colinhacks/zod" className="text-primary hover:underline">{' Zod'}</a>, 
    <a href="https://react-hook-form.com" className="text-primary hover:underline">{" React Hook Form"}</a>, 
    <a href="https://shadcn.dev" className="text-primary hover:underline">{' Shadcn'}</a>, 
    <a href="https://tailwindcss.com" className="text-primary hover:underline">{" Tailwind"}</a>, 
    <a href="https://aceternityui.com" className="text-primary hover:underline">{" AceternityUI"}</a>, 
    <a href="https://nodejs.org" className="text-primary hover:underline">{" Node.js"}</a>, 
    <a href="https://stripe.com" className="text-primary hover:underline">{" Stripe"}</a>, and 
    <a href="https://uploadthing.com" className="text-primary hover:underline">{" uploadthing"}</a>, I designed and developed a comprehensive event management application. This project allowed me to blend creativity with functionality, resulting in a tool that users find both intuitive and powerful.
  </p>
  <p>
    Another significant project is the{" "}
    <strong>IoT-Based Poultry Monitoring System</strong>, which I developed as part of my final year group project. This innovative solution leverages 
    <a href="https://nextjs.org" className="text-primary hover:underline">{" Next.js"}</a>, 
    <a href="https://shadcn.dev" className="text-primary hover:underline">{" Shadcn"}</a>, 
    <a href="https://socket.io" className="text-primary hover:underline">{" Socket.IO"}</a>, 
    <a href="https://www.postgresql.org" className="text-primary hover:underline">{" PostgreSQL"}</a>, 
    <a href="https://www.espressif.com/en/products/socs/nodemcu" className="text-primary hover:underline">{" NodeMCU"}</a>, 
    <a href="https://www.arduino.cc" className="text-primary hover:underline">{" Arduino"}</a>, and more to monitor poultry conditions. This project not only showcased my technical skills but also highlighted my ability to work on interdisciplinary teams and tackle complex problems.
  </p>
        <hr className="border-muted" />
      </section>
      <section className="space-y-3">
  <H2>Skills and Certifications</H2>
  <p>
    Throughout my career, I have continuously sought to expand my skill set. I am proficient in front-end technologies like 
    <a href="https://nextjs.org" className="text-primary hover:underline">{" Next.js"}</a>, 
    <a href="https://reactjs.org" className="text-primary hover:underline">{" React.js"}</a>, 
    <a href="https://tailwindcss.com" className="text-primary hover:underline">{" TailwindCSS"}</a>, and 
    <a href="https://shadcn.dev" className="text-primary hover:underline">{" Shadcn"}</a>, and have a solid foundation in back-end development with 
    <a href="https://nodejs.org" className="text-primary hover:underline">{" Node.js"}</a>, 
    <a href="https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API" className="text-primary hover:underline">WebSockets</a>, and 
    <a href="https://www.prisma.io" className="text-primary hover:underline">{" Prisma (ORM)"}</a>. My database skills include working with 
    <a href="https://www.mongodb.com" className="text-primary hover:underline">{" MongoDB"}</a>, 
    <a href="https://www.w3schools.com/sql" className="text-primary hover:underline">{" SQL"}</a>, and 
    <a href="https://www.postgresql.org" className="text-primary hover:underline">{" PostgreSQL"}</a>, and I am well-versed in 
    <a href="https://aws.amazon.com" className="text-primary hover:underline">{" AWS cloud services"}</a>.
  </p>
  <p>
    I hold certifications in 
    <a href="https://www.coursera.org" className="text-primary hover:underline">AWS Essentials</a> from Coursera, 
    <a href="https://www.udemy.com" className="text-primary hover:underline">Web Development</a> from Udemy and Teachnook, and an internship certificate from 
    <a href="https://verzeo.in" className="text-primary hover:underline">Verzeo</a>. These certifications attest to my commitment to continuous learning and staying updated with the latest industry trends.
  </p>
</section>
      <section className="space-y-3">
        <H2>Technical Skills</H2>
        <ul className="list-inside list-disc space-y-1">
          <li>
            <strong>Front-End:</strong> Next.js, React.js, TailwindCSS, Shadcn
          </li>
          <li>
            <strong>Back-End:</strong> Node.js, WebSockets, Prisma (ORM)
          </li>
          <li>
            <strong>Databases:</strong> MongoDB (NoSQL), SQL, PostgreSQL
          </li>
          <li>
            <strong>Cloud Services:</strong> AWS
          </li>
          <li>
            <strong>Operating Systems:</strong> Linux, Windows
          </li>
        </ul>
        <hr className="border-muted" />
      </section>
      <section className="space-y-3">
        <H2>Programming Languages</H2>
        <ul className="list-inside list-disc space-y-1">
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>Python</li>
          <li>C/C++</li>
        </ul>
        <hr className="border-muted" />
      </section>
      <section className="space-y-3">
        <H2>Beyond Tech</H2>
        <p>
          While I love coding, I also believe in the importance of soft skills.
          Problem-solving, time management, effective communication, critical
          thinking, and simplicity in design are all part of my toolkit. These
          skills enable me to navigate complex projects and deliver results that
          are both innovative and practical.
        </p>
        <p>
          I am fluent in English, Hindi, Assamese, and Bengali, which allows me
          to connect with a diverse range of people and work in multilingual
          environments.
        </p>
        <hr className="border-muted" />
      </section>
      <section className="space-y-3">
        <H2>Get In Touch</H2>
        <p>
          Feel free to explore my portfolio, and if you{"’"}re interested in
          collaborating or just want to chat about technology, don{"’"}t hesitate to
          get in touch! You can reach me at{" "}
          <a
            href="mailto:contactme@nikunja.online"
            className="text-primary hover:underline"
          >
            contactme@nikunja.online
          </a>
          .
        </p>
      </section>
    </section>
  );
}
