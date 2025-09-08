import { Button, Typography } from "antd";

export const About = () => {
  return (
    <div>
      <div style={{ marginBottom: 30 }}>
        <h1>About</h1>
        This app is a test task for WIAM -{" "}
        <a href="https://drive.google.com/file/d/15iUFvEGMVJJaln9RK0tHnyYj5Ii9ZQ8o/view?usp=sharing">
          test task info
        </a>
      </div>

      <h2>Contacts:</h2>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 10 }}>
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
  );
};
