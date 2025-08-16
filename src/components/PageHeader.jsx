export default function PageHeader() {
  return (
    <section
      className="bg-center bg-cover text-white text-center py-24"
      style={{
        backgroundImage: "linear-gradient(rgba(28,37,65,0.7), rgba(28,37,65,0.7)), url('https://picsum.photos/seed/digitalart/1800/600')"
      }}
    >
      <h1 className="font-serif text-4xl md:text-5xl mb-4">Digital Art</h1>
      <p className="max-w-2xl mx-auto text-lg font-light">
        Explore the future of creativity. This collection features everything from AI-generated masterpieces and intricate 3D models to pixel-perfect illustrations.
      </p>
    </section>
  );
}
