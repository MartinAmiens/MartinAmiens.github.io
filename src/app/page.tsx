export default function HomePage() {
  return (
    <main style={{ maxWidth: 800, margin: 'auto', padding: '2rem' }}>
      <header>
        <h1>Martin Amiens</h1>
        <p style={{ fontStyle: 'italic', color: '#555' }}>
          Développeur web & passionné de technologie
        </p>
      </header>

      <section style={{ marginTop: '3rem' }}>
        <h2>À propos de moi</h2>
        <p>
          Bonjour ! Je suis Martin, développeur web spécialisé en Next.js et TypeScript. 
          Je crée des sites modernes et performants.
        </p>
      </section>

      <nav style={{ marginTop: '3rem' }}>
        <a href="#cv" style={{ marginRight: '1rem' }}>CV</a>
        <a href="#contact">Contact</a>
      </nav>

      <section id="cv" style={{ marginTop: '4rem' }}>
        <h2>CV</h2>
        <p>Expériences, formations, compétences à venir...</p>
      </section>

      <section id="contact" style={{ marginTop: '4rem' }}>
        <h2>Contact</h2>
        <p>Email : martin@example.com</p>
        <p>LinkedIn : <a href="https://linkedin.com/in/martinamiens" target="_blank" rel="noreferrer">mon profil</a></p>
      </section>
    </main>
  );
}
