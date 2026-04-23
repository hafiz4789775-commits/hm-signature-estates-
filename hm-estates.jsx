import { useState, useEffect } from "react";

const properties = [
  {
    id: 1,
    title: "Modern 1 Kanal Villa",
    loc: "DHA Multan Phase 1",
    price: "4.5 Crore",
    beds: 5, baths: 6, area: "1 Kanal",
    tag: "New Listing",
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Executive Mansion",
    loc: "Royal Orchard",
    price: "3.2 Crore",
    beds: 6, baths: 7, area: "2 Kanal",
    tag: "Featured",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Corner Plot House",
    loc: "Wapda Town",
    price: "2.8 Crore",
    beds: 4, baths: 5, area: "10 Marla",
    tag: "Prime Location",
    img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Luxury Penthouse",
    loc: "DHA Multan Phase 2",
    price: "5.8 Crore",
    beds: 5, baths: 5, area: "1.5 Kanal",
    tag: "Exclusive",
    img: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "Garden View Bungalow",
    loc: "Royal Orchard",
    price: "3.9 Crore",
    beds: 5, baths: 6, area: "1 Kanal",
    tag: "Hot Deal",
    img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    title: "Contemporary Smart Home",
    loc: "Wapda Town",
    price: "2.1 Crore",
    beds: 4, baths: 4, area: "10 Marla",
    tag: "Smart Home",
    img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
  },
];

const stats = [
  { num: "350+", label: "Properties Sold" },
  { num: "12+", label: "Years Experience" },
  { num: "98%", label: "Client Satisfaction" },
  { num: "₨ 50Cr+", label: "Deals Closed" },
];

const areas = ["All Areas", "DHA Multan", "Royal Orchard", "Wapda Town"];
const priceRanges = ["All Prices", "Under 2 Crore", "2–4 Crore", "4+ Crore"];

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [search, setSearch] = useState("");
  const [area, setArea] = useState("All Areas");
  const [priceRange, setPriceRange] = useState("All Prices");
  const [visible, setVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    setTimeout(() => setVisible(true), 100);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const filtered = properties.filter((p) => {
    const matchSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.loc.toLowerCase().includes(search.toLowerCase());
    const matchArea =
      area === "All Areas" || p.loc.toLowerCase().includes(area.toLowerCase().replace("dha multan", "dha"));
    const price = parseFloat(p.price);
    const matchPrice =
      priceRange === "All Prices" ||
      (priceRange === "Under 2 Crore" && price < 2) ||
      (priceRange === "2–4 Crore" && price >= 2 && price <= 4) ||
      (priceRange === "4+ Crore" && price > 4);
    return matchSearch && matchArea && matchPrice;
  });

  return (
    <div style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif", background: "#0a0f1a", color: "#f0ece3", minHeight: "100vh", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&family=Outfit:wght@300;400;500;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #0a0f1a; }
        ::-webkit-scrollbar-thumb { background: #b8972e; border-radius: 2px; }
        .fade-up { opacity: 0; transform: translateY(30px); transition: opacity 0.9s ease, transform 0.9s ease; }
        .fade-up.visible { opacity: 1; transform: translateY(0); }
        .card-hover { transition: transform 0.5s cubic-bezier(.25,.8,.25,1), box-shadow 0.5s ease; }
        .card-hover:hover { transform: translateY(-10px); box-shadow: 0 40px 80px rgba(0,0,0,0.6); }
        .img-zoom img { transition: transform 0.8s cubic-bezier(.25,.8,.25,1); }
        .img-zoom:hover img { transform: scale(1.08); }
        .gold-line::after { content: ''; display: block; width: 60px; height: 2px; background: linear-gradient(90deg, #b8972e, #d4af37); margin-top: 16px; }
        .btn-primary { background: linear-gradient(135deg, #b8972e, #d4af37); color: #0a0f1a; border: none; cursor: pointer; font-family: 'Outfit', sans-serif; font-weight: 600; letter-spacing: 0.08em; transition: opacity 0.2s, transform 0.2s; }
        .btn-primary:hover { opacity: 0.9; transform: translateY(-1px); }
        .btn-outline { background: transparent; color: #d4af37; border: 1.5px solid #d4af37; cursor: pointer; font-family: 'Outfit', sans-serif; font-weight: 500; letter-spacing: 0.06em; transition: all 0.2s; }
        .btn-outline:hover { background: #d4af37; color: #0a0f1a; }
        input, select { font-family: 'Outfit', sans-serif; }
        input:focus, select:focus { outline: 2px solid #d4af37; }
        .nav-link { font-family: 'Outfit', sans-serif; font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; color: #c8bfaf; text-decoration: none; transition: color 0.2s; }
        .nav-link:hover { color: #d4af37; }
        @keyframes heroFadeIn { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes shimmer { 0%,100% { opacity: 0.6; } 50% { opacity: 1; } }
        .tag-badge { font-family: 'Outfit', sans-serif; font-size: 10px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; }
        .stat-card { border: 1px solid rgba(184,151,46,0.2); background: rgba(184,151,46,0.04); transition: border-color 0.3s, background 0.3s; }
        .stat-card:hover { border-color: rgba(184,151,46,0.5); background: rgba(184,151,46,0.08); }
      `}</style>

      {/* NAVBAR */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "20px 48px",
        background: scrolled ? "rgba(10,15,26,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(184,151,46,0.15)" : "none",
        transition: "all 0.4s ease",
        display: "flex", justifyContent: "space-between", alignItems: "center"
      }}>
        <div>
          <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: "0.05em", color: "#f0ece3" }}>
            HM <span style={{ color: "#d4af37", fontStyle: "italic", fontWeight: 300 }}>Signature</span> Estates
          </div>
          <div style={{ fontSize: 9, letterSpacing: "0.3em", color: "#8a8070", fontFamily: "'Outfit', sans-serif", marginTop: 2 }}>MULTAN · LUXURY REAL ESTATE</div>
        </div>

        <div style={{ display: "flex", gap: 40, alignItems: "center" }}>
          {["Home", "Listings", "Services", "About"].map(link => (
            <a key={link} href={link === "Listings" ? "#listings" : "#"} className="nav-link">{link}</a>
          ))}
          <button className="btn-primary" style={{ padding: "11px 28px", borderRadius: 2, fontSize: 11, letterSpacing: "0.12em" }}>
            Contact Hafiz
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section style={{
        minHeight: "100vh", position: "relative",
        display: "flex", alignItems: "center", justifyContent: "center",
        overflow: "hidden"
      }}>
        {/* Background */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "url(https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=1800&q=80)",
          backgroundSize: "cover", backgroundPosition: "center",
          filter: "brightness(0.25)"
        }} />
        {/* Gradient overlay */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to bottom, rgba(10,15,26,0.3) 0%, rgba(10,15,26,0.0) 40%, rgba(10,15,26,0.8) 100%)"
        }} />
        {/* Gold grid pattern */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "linear-gradient(rgba(184,151,46,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(184,151,46,0.04) 1px, transparent 1px)",
          backgroundSize: "80px 80px"
        }} />

        <div style={{
          position: "relative", zIndex: 10, textAlign: "center",
          maxWidth: 900, padding: "0 32px",
          animation: "heroFadeIn 1.2s ease forwards"
        }}>
          <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, letterSpacing: "0.4em", color: "#d4af37", marginBottom: 24 }}>
            ◆ &nbsp; MULTAN'S FINEST PROPERTIES &nbsp; ◆
          </div>
          <h1 style={{ fontSize: "clamp(48px, 8vw, 90px)", fontWeight: 300, lineHeight: 1.05, marginBottom: 12, color: "#f0ece3" }}>
            Where Luxury<br />
            <span style={{ fontStyle: "italic", color: "#d4af37", fontWeight: 300 }}>Meets Legacy</span>
          </h1>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 16, color: "#a09880", lineHeight: 1.7, marginBottom: 48, fontWeight: 300 }}>
            Exclusive residences in DHA Multan, Royal Orchard & Wapda Town.<br />
            Curated for those who demand nothing but the finest.
          </p>

          {/* Search Bar */}
          <div style={{
            background: "rgba(10,15,26,0.85)", backdropFilter: "blur(20px)",
            border: "1px solid rgba(184,151,46,0.3)",
            borderRadius: 4, padding: "8px 8px 8px 24px",
            display: "flex", gap: 8, alignItems: "center",
            boxShadow: "0 20px 60px rgba(0,0,0,0.5)"
          }}>
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search area or property name..."
              style={{
                flex: 1, background: "transparent", border: "none",
                color: "#f0ece3", fontSize: 14, padding: "14px 0"
              }}
            />
            <div style={{ width: 1, height: 32, background: "rgba(184,151,46,0.25)" }} />
            <select
              value={area}
              onChange={e => setArea(e.target.value)}
              style={{
                background: "transparent", border: "none", color: "#a09880",
                fontSize: 13, padding: "14px 16px", cursor: "pointer"
              }}
            >
              {areas.map(a => <option key={a} style={{ background: "#0a0f1a" }}>{a}</option>)}
            </select>
            <div style={{ width: 1, height: 32, background: "rgba(184,151,46,0.25)" }} />
            <select
              value={priceRange}
              onChange={e => setPriceRange(e.target.value)}
              style={{
                background: "transparent", border: "none", color: "#a09880",
                fontSize: 13, padding: "14px 16px", cursor: "pointer"
              }}
            >
              {priceRanges.map(p => <option key={p} style={{ background: "#0a0f1a" }}>{p}</option>)}
            </select>
            <button className="btn-primary" style={{ padding: "16px 36px", borderRadius: 2, fontSize: 12, letterSpacing: "0.1em" }}>
              Search →
            </button>
          </div>

          <div style={{ marginTop: 24, display: "flex", justifyContent: "center", gap: 32 }}>
            {["DHA Multan", "Royal Orchard", "Wapda Town"].map(tag => (
              <span key={tag} onClick={() => setArea(tag)} style={{
                fontFamily: "'Outfit', sans-serif", fontSize: 11, color: "#7a7060",
                letterSpacing: "0.1em", cursor: "pointer", borderBottom: "1px solid transparent",
                transition: "color 0.2s, border-color 0.2s"
              }}
                onMouseEnter={e => { e.target.style.color = "#d4af37"; e.target.style.borderBottomColor = "#d4af37"; }}
                onMouseLeave={e => { e.target.style.color = "#7a7060"; e.target.style.borderBottomColor = "transparent"; }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: "absolute", bottom: 40, left: "50%", transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: 8
        }}>
          <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 9, letterSpacing: "0.3em", color: "#5a5040" }}>SCROLL</span>
          <div style={{ width: 1, height: 50, background: "linear-gradient(to bottom, #d4af37, transparent)", animation: "shimmer 2s infinite" }} />
        </div>
      </section>

      {/* STATS STRIP */}
      <section style={{ borderTop: "1px solid rgba(184,151,46,0.15)", borderBottom: "1px solid rgba(184,151,46,0.15)", padding: "48px 64px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
          {stats.map((s, i) => (
            <div key={i} className="stat-card" style={{ padding: "32px 24px", textAlign: "center", borderRadius: 2 }}>
              <div style={{ fontSize: 36, fontWeight: 700, color: "#d4af37", letterSpacing: "-0.02em" }}>{s.num}</div>
              <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, color: "#6a6050", letterSpacing: "0.15em", marginTop: 8, textTransform: "uppercase" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PROPERTY GRID */}
      <section id="listings" style={{ maxWidth: 1200, margin: "0 auto", padding: "100px 32px" }}>
        {/* Section header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 64 }}>
          <div>
            <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: 10, letterSpacing: "0.35em", color: "#d4af37", marginBottom: 16 }}>
              FEATURED COLLECTION
            </div>
            <h2 className="gold-line" style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 300, lineHeight: 1.1 }}>
              Premium Properties<br />
              <span style={{ fontStyle: "italic", color: "#d4af37" }}>in Multan</span>
            </h2>
          </div>
          <div style={{ textAlign: "right" }}>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, color: "#6a6050", marginBottom: 8 }}>
              Showing {filtered.length} of {properties.length} properties
            </p>
            <button
              className="btn-outline"
              style={{ padding: "10px 24px", borderRadius: 2, fontSize: 11, letterSpacing: "0.1em" }}
              onClick={() => { setSearch(""); setArea("All Areas"); setPriceRange("All Prices"); }}
            >
              Reset Filters
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 32 }}>
          {filtered.length === 0 ? (
            <div style={{ gridColumn: "1/-1", textAlign: "center", padding: 80, color: "#5a5040", fontFamily: "'Outfit', sans-serif" }}>
              <div style={{ fontSize: 48, marginBottom: 16 }}>🔍</div>
              No properties found. Try adjusting your filters.
            </div>
          ) : filtered.map((p, i) => (
            <div
              key={p.id}
              className="card-hover"
              onMouseEnter={() => setHoveredCard(p.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                background: "#0e1422",
                border: hoveredCard === p.id ? "1px solid rgba(212,175,55,0.4)" : "1px solid rgba(255,255,255,0.06)",
                borderRadius: 4, overflow: "hidden", cursor: "pointer",
                transition: "border-color 0.4s"
              }}
            >
              {/* Image */}
              <div className="img-zoom" style={{ height: 260, overflow: "hidden", position: "relative" }}>
                <img src={p.img} alt={p.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(to top, rgba(14,20,34,0.6) 0%, transparent 50%)"
                }} />
                {/* Tag */}
                <div className="tag-badge" style={{
                  position: "absolute", top: 20, left: 20,
                  background: "rgba(10,15,26,0.85)", backdropFilter: "blur(10px)",
                  color: "#d4af37", padding: "6px 14px", borderRadius: 2,
                  border: "1px solid rgba(212,175,55,0.3)"
                }}>
                  {p.tag}
                </div>
                {/* Price */}
                <div style={{
                  position: "absolute", bottom: 20, right: 20,
                  fontFamily: "'Outfit', sans-serif", fontSize: 15, fontWeight: 600,
                  color: "#f0ece3"
                }}>
                  PKR {p.price}
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: "28px 28px 24px" }}>
                <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: 10, letterSpacing: "0.2em", color: "#d4af37", marginBottom: 10 }}>
                  HM EXCLUSIVE
                </div>
                <h3 style={{ fontSize: 22, fontWeight: 600, color: "#f0ece3", marginBottom: 8, lineHeight: 1.2 }}>{p.title}</h3>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, color: "#6a6050" }}>📍 {p.loc}</p>

                <div style={{ height: 1, background: "rgba(255,255,255,0.06)", margin: "20px 0" }} />

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ display: "flex", gap: 20, fontFamily: "'Outfit', sans-serif", fontSize: 12, color: "#6a6050" }}>
                    <span>🛏 {p.beds} Beds</span>
                    <span>🚿 {p.baths} Baths</span>
                    <span>📐 {p.area}</span>
                  </div>
                  <button style={{
                    background: "none", border: "none", cursor: "pointer",
                    fontFamily: "'Cormorant Garamond', serif", fontSize: 15,
                    color: hoveredCard === p.id ? "#d4af37" : "#4a4030",
                    transition: "color 0.3s, transform 0.3s",
                    transform: hoveredCard === p.id ? "translateX(4px)" : "translateX(0)"
                  }}>
                    View Details →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load more */}
        <div style={{ textAlign: "center", marginTop: 64 }}>
          <button className="btn-outline" style={{ padding: "16px 56px", borderRadius: 2, fontSize: 12, letterSpacing: "0.15em" }}>
            View All Properties
          </button>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section style={{
        background: "linear-gradient(135deg, #0e1422 0%, #0a0f1a 100%)",
        borderTop: "1px solid rgba(184,151,46,0.1)",
        borderBottom: "1px solid rgba(184,151,46,0.1)",
        padding: "100px 64px"
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: 10, letterSpacing: "0.35em", color: "#d4af37", marginBottom: 16 }}>WHY HM ESTATES</div>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 46px)", fontWeight: 300 }}>
              The <span style={{ fontStyle: "italic", color: "#d4af37" }}>Trusted</span> Name in Multan
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 40 }}>
            {[
              { icon: "🏆", title: "Legacy of Excellence", desc: "Over 12 years of connecting discerning buyers with Multan's finest properties. Our track record speaks for itself." },
              { icon: "🤝", title: "Transparent Dealings", desc: "Every transaction is handled with complete transparency. No hidden costs, no surprises — just honest, professional service." },
              { icon: "📍", title: "Local Expertise", desc: "Deep knowledge of DHA Multan, Royal Orchard, and Wapda Town. We know every street, every plot, every opportunity." },
            ].map((item, i) => (
              <div key={i} style={{
                padding: "40px 32px",
                border: "1px solid rgba(184,151,46,0.12)",
                borderRadius: 4,
                transition: "border-color 0.3s, background 0.3s"
              }}
                onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(212,175,55,0.35)"}
                onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(184,151,46,0.12)"}
              >
                <div style={{ fontSize: 32, marginBottom: 20 }}>{item.icon}</div>
                <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 12, color: "#f0ece3" }}>{item.title}</h3>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 14, color: "#6a6050", lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "120px 32px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "url(https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1600&q=80)",
          backgroundSize: "cover", backgroundPosition: "center",
          filter: "brightness(0.15)"
        }} />
        <div style={{ position: "relative", zIndex: 10, maxWidth: 700, margin: "0 auto" }}>
          <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: 10, letterSpacing: "0.35em", color: "#d4af37", marginBottom: 20 }}>GET IN TOUCH</div>
          <h2 style={{ fontSize: "clamp(36px, 6vw, 64px)", fontWeight: 300, lineHeight: 1.1, marginBottom: 20 }}>
            Ready to Find Your<br />
            <span style={{ fontStyle: "italic", color: "#d4af37" }}>Dream Home?</span>
          </h2>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 15, color: "#6a6050", marginBottom: 48, lineHeight: 1.7 }}>
            Let Hafiz personally guide you through Multan's finest real estate opportunities.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <button className="btn-primary" style={{ padding: "18px 56px", borderRadius: 2, fontSize: 12, letterSpacing: "0.12em" }}>
              Schedule a Viewing
            </button>
            <button className="btn-outline" style={{ padding: "18px 56px", borderRadius: 2, fontSize: 12, letterSpacing: "0.12em" }}>
              WhatsApp Us
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        borderTop: "1px solid rgba(184,151,46,0.15)",
        padding: "48px 64px",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        flexWrap: "wrap", gap: 16
      }}>
        <div>
          <div style={{ fontSize: 18, fontWeight: 700, color: "#f0ece3" }}>
            HM <span style={{ color: "#d4af37", fontStyle: "italic", fontWeight: 300 }}>Signature</span> Estates
          </div>
          <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, color: "#3a3020", marginTop: 6, letterSpacing: "0.1em" }}>
            © 2024 HM Estates. All rights reserved.
          </div>
        </div>
        <div style={{ display: "flex", gap: 32 }}>
          {["Home", "Listings", "Services", "Contact"].map(link => (
            <a key={link} href="#" className="nav-link" style={{ fontSize: 10 }}>{link}</a>
          ))}
        </div>
        <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: 12, color: "#3a3020" }}>
          DHA Multan · Royal Orchard · Wapda Town
        </div>
      </footer>
    </div>
  );
}
