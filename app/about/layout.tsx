import AboutTemplate from "./template";

type Props = {
  children: React.ReactNode;
};

export default function AboutLayout({ children }: Props) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav>This is layout</nav>
      <AboutTemplate key={"about"}>
        <h1 className="text-6xl font-bold text-center">Template 1</h1>
      </AboutTemplate>
      {children}
    </section>
  );
}
