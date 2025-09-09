import { Button, Typography } from "antd";
const { Text } = Typography;

export const About = () => {
  return (
    <div>
      <h1>Me</h1>
      Hi! My name is <Text mark>Dmitry</Text>. I'm a Frontend Developer with 4+ years of experience,
      full-stack capable. <br /> Main tech stack is
      <Text code>TypeScript</Text>, <Text code>React.js</Text>, <Text code>Next.js</Text> and{" "}
      <Text code>Node.js</Text>. <br />
      <br />
      Career highlights:{" "}
      <ul>
        <li>
          Proposed and designed the frontend of network devices diagnostic service used to help 1.8m
          households
        </li>
        <li>Retained 650+ customers by creating analytics service with map</li>
        <li>Built task tracker for largest bank in eastern Europe</li>
        <li>Made several custom web solutions that represents small businesses</li>
        <li>
          I build my own startup (
          <a href="https://wiseHr.ru" target="_blank">
            wiseHr.ru
          </a>
          ) to help people find jobs so I look at problems via business standpoint{" "}
        </li>
      </ul>
      <br />
      Proficient in creating modern, scalable and performant web applications, building apps from
      scratch as a solo developer and in maintaining large projects in teams of up to 30 members,
      both remotely and on-site. <br /> <br />I believe we can benefit each other and I will be
      happy to apply my skills and knowledge to bring your business more revenue. <br />
      If you have any questions, I will be happy to answer :) <br /> <br />
      Best regards, Dmitry.
      <br />
      <div style={{ margin: "30px 0" }}>
        <h2>Contacts:</h2>
        <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: 10 }}>
          <Button
            href="https://drive.google.com/file/d/1xis7ApgoXOXBt_ttk5nVDjL1rUWQE_wY/view"
            target="_blank"
          >
            Resume (EN, pdf, cv)
          </Button>
          <Button href="https://www.linkedin.com/in/Dmitry-Kozh/" target="_blank">
            LinkedIn
          </Button>
          <Button href="https://github.com/kozh-0" target="_blank">
            GitHub
          </Button>
          <Button href="https://t.me/fuccbo11" target="_blank">
            Telegram
          </Button>
          <Typography.Text copyable keyboard>
            dmitry.kozhevnikov.it@gmail.com
          </Typography.Text>
        </div>
      </div>
      <div style={{ margin: "30px 0" }}>
        <h2>Skills:</h2>
        Frontend: JavaScript, TypeScript, React, Next.js, AntDesign, SCSS, Tailwind, Redux, Rest
        API, GraphQL, React Router, Tanstack Query, WebSocket, Jotai, Jest, UIKit, Figma, Leaflet,
        Docusaurus, i18n, HTML, CSS, Feature-Sliced Design. <br />
        Backend: Node.js, Linux, Docker, PostgreSQL, Prisma ORM, Git, Telegram Bots, JWT, Redis,
        Express, SSH, CI/CD, Postman/Insomnia.
      </div>
      <div style={{ marginBottom: 30 }}>
        <h1>About</h1>
        <Text underline>
          This app is a test task for WIAM -{" "}
          <a
            href="https://drive.google.com/file/d/15iUFvEGMVJJaln9RK0tHnyYj5Ii9ZQ8o/view?usp=sharing"
            target="_blank"
          >
            test task info
          </a>
        </Text>{" "}
        <br />
        <div>
          You can see code here -{" "}
          <Button href="https://github.com/kozh-0/wiam-test-task" target="_blank">
            GitHub repo
          </Button>
        </div>
        <div>
          <iframe
            src={"/wiam-test-task.pdf"}
            width="100%"
            height="600px"
            title="PDF Viewer"
            style={{ border: "none" }}
          />
        </div>
      </div>
    </div>
  );
};
