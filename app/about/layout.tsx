type Props = {
  children: React.ReactNode;
};

export default function AboutLayout({ children }: Props) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav>THis is layout</nav>

      {children}
    </section>
  );
}
