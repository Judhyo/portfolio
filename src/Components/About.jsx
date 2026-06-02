import { Monitor, Cloud, Code2, Wrench, Database, Globe } from "lucide-react";

export default function About() {
  const items = [
    {
      icon: Code2,
      title: "Développement Web",
      sub: "React, Django, Node.js, REST API",
    },
    {
      icon: Database,
      title: "Bases de données",
      sub: "PostgreSQL, SQLite, requêtes SQL",
    },
  ];

  return (
    <section id="about">
      <div className="section-header">
        <div className="section-label">À propos</div>
        {/* <h2>
          Profil <span className="highlight">polyvalent</span>
          <br />& orienté solutions
        </h2> */}
      </div>
      <div className="about-grid">
        <div className="about-text">
          <p>
            Je conçois des solutions numériques qui{" "}
            <strong style={{ color: "var(--primary)" }}>
              répondent à des besoins réels
            </strong>
            .
          </p>{" "}
          <p>
            En tant que{" "}
            <strong style={{ color: "var(--primary)" }}>
              Software Engineer
            </strong>
            , je développe des applications web et mobiles performantes en
            utilisant des technologies comme React, Express.js et Django, avec
            une approche orientée architecture, efficacité et innovation.
          </p>{" "}
          <p>
            Mon objectif :{" "}
            <strong style={{ color: "#22c55e" }}>
              transformer des idées en systèmes fiables, utiles et durables
            </strong>
            .
          </p>
        </div>
        <div className="about-info">
          {items.map((item) => {
            const IconComp = item.icon;
            return (
              <div key={item.title} className="info-item">
                <div className="info-icon">
                  <IconComp size={28} className="about-icon" />
                </div>
                <div className="info-content">
                  <h4>{item.title}</h4>
                  <p>{item.sub}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
