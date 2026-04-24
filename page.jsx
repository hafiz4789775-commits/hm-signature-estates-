{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "next": "14.1.0",
    "react": "^18",
    "react-dom": "^18",
    "framer-motion": "^11.0.0",
    "lucide-react": "^0.300.0"
  }
}// app/page.jsx  –– HM Signature Estates · Next.js 14 (App Router)
// Deploy: drop into app/page.jsx, fonts auto-load via Google Fonts import below

export const metadata = {
  title: "HM Signature Estates | Hafiz Muhammad Real Estate Multan",
  description:
    "Hafiz Muhammad Real Estate Multan – Premium properties in DHA Multan, Royal Orchard & Wapda Town. Luxury villas, bungalows & executive houses. Contact: 03064877489",
  keywords: [
    "Hafiz Muhammad Real Estate Multan",
    "DHA Multan property",
    "luxury homes Multan",
    "Royal Orchard Multan",
    "Wapda Town houses",
    "HM Signature Estates",
    "Multan real estate 2026",
  ],
  openGraph: {
    title: "HM Signature Estates | Luxury Real Estate Multan",
    description: "Premium properties by Hafiz Muhammad – DHA Multan, Royal Orchard, Wapda Town.",
    url: "https://hmsignatureestates.com",
    siteName: "HM Signature Estates",
    locale: "en_PK",
    type: "website",
  },
};

// ─── CLIENT COMPONENT ────────────────────────────────────────────────────────
"use client";
import { useState, useEffect, useRef } from "react";

// ── Constants ──────────────────────────────────────────────────────────────
const WA_NUMBER = "923064877489"; // WhatsApp international format
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=Hello%20Hafiz%2C%20I%27m%20interested%20in%20a%20property.`;
const LINKEDIN = "https://www.linkedin.com/in/hafiz-muhammad-9250aa403";

const PROPERTIES = [
  {
    id: 1,
    title: "1 Kanal Luxury Villa",
    loc: "DHA Multan Phase 1",
    price: "5.5 Crore",
    beds: 5, baths: 6, area: "1 Kanal",
    status: "New Construction",
    statusColor: "#22c55e",
    img: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=900&auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    title: "10 Marla Executive House",
    loc: "Royal Orchard Multan",
    price: "3.8 Crore",
    beds: 4, baths: 5, area: "10 Marla",
    status: "Featured",
    statusColor: "#d4af37",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    title: "1 Kanal Corner House",
    loc: "Wapda Town Phase 2",
    price: "4.2 Crore",
    beds: 5, baths: 5, area: "1 Kanal",
    status: "Prime Location",
    statusColor: "#3b82f6",
    img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&auto=format&fit=crop&q=80",
  },
  {
    id: 4,
    title: "1 Kanal Renovated Bungalow",
    loc: "Model Town / Cantt Area",
    price: "6.5 Crore",
    beds: 6, baths: 7, area: "1 Kanal",
    status: "Exclusive",
    statusColor: "#ef4444",
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&auto=format&fit=crop&q=80",
  },
];

const STATS = [
  { num: "350+", label: "Properties Sold" },
  { num: "12+", label: "Years Experience" },
  { num: "98%", label: "Client Satisfaction" },
  { num: "₨ 50Cr+", label: "Deals Closed" },
];

const AREAS = ["All Areas", "DHA Multan", "Royal Orchard", "Wapda Town", "Model Town"];
const PRICES = ["All Prices", "Under 4 Crore", "4–6 Crore", "6+ Crore"];

// ── Helpers ────────────────────────────────────────────────────────────────
function waLink(msg = "") {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg || "Hello Hafiz, I'm interested in a property.")}`;
}

// ── Main Page ──────────────────────────────────────────────────────────────
export default function Page() {
  const [scrolled, setScrolled] = useState(false);
  const [search, setSearch] = useState("");
  const [area, setArea] = useState("All Areas");
  const [price, setPrice] = useState("All Prices");
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const filtered = PROPERTIES.filter((p) => {
    const q = search.toLowerCase();
    const matchQ = p.title.toLowerCase().includes(q) || p.loc.toLowerCase().includes(q);
    const matchA =
      area === "All Areas" ||
      p.loc.toLowerCase().includes(area.toLowerCase().replace("dha multan", "dha multan"));
    const pNum = parseFloat(p.price);
    const matchP =
      price === "All Prices" ||
      (price === "Under 4 Crore" && pNum < 4) ||
      (price === "4–6 Crore" && pNum >= 4 && pNum <= 6) ||
      (price === "6+ Crore" && pNum > 6);
    return matchQ && matchA && matchP;
  });

  const scrollToListings = (e) => {
    e.preventDefault();
    document.getElementById("listings")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={S.root}>
      <style>{CSS}</style>

      {/* ── NAVBAR ── */}
      <nav style={{ ...S.nav, ...(scrolled ? S.navScrolled : {}) }}>
        <div style={S.navLogo}>
          HM <span style={S.logoAccent}>Signature</span> Estates
          <div style={S.navSub}>MULTAN · LUXURY REAL ESTATE</div>
        </div>

        <div style={S.navLinks}>
          <a href="/" style={S.navLink}>Home</a>
          <a href="#listings" onClick={scrollToListings} style={S.navLink}>Listings</a>
          <a href="#services" style={S.navLink}>Services</a>
          <a href="#contact" style={S.navLink}>Contact</a>
        </div>

        <a href={waLink("Hello Hafiz, I'd like to get in touch.")} target="_blank" rel="noreferrer" style={S.navCta} className="btn-primary">
          Contact Hafiz
        </a>
      </nav>

      {/* ── HERO ── */}
      <section style={S.hero}>
        <div style={S.heroBg} />
        <div style={S.heroOverlay} />
        <div style={S.heroGrid} />

        <div style={S.heroContent} className="hero-fade">
          <div style={S.heroEyebrow}>◆ &nbsp;MULTAN'S FINEST PROPERTIES&nbsp; ◆</div>
          <h1 style={S.heroH1}>
            Where Luxury<br />
            <span style={S.heroAccent}>Meets Legacy</span>
          </h1>
          <p style={S.heroSub}>
            Exclusive residences in DHA Multan, Royal Orchard, Wapda Town &amp; Cantt.<br />
            Curated by <strong style={{ color: "#d4af37", fontWeight: 600 }}>Hafiz Muhammad</strong> — Multan's trusted real estate expert.
          </p>

          {/* Search bar */}
          <div style={S.searchBar}>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search area or property name…"
              style={S.searchInput}
            />
            <div style={S.divider} />
            <select value={area} onChange={(e) => setArea(e.target.value)} style={S.searchSelect}>
              {AREAS.map((a) => <option key={a} style={{ background: "#0a0f1a" }}>{a}</option>)}
            </select>
            <div style={S.divider} />
            <select value={price} onChange={(e) => setPrice(e.target.value)} style={S.searchSelect}>
              {PRICES.map((p) => <option key={p} style={{ background: "#0a0f1a" }}>{p}</option>)}
            </select>
            <button
              className="btn-primary"
              style={S.searchBtn}
              onClick={scrollToListings}
            >
              Search →
            </button>
          </div>

          <div style={S.quickTags}>
            {["DHA Multan", "Royal Orchard", "Wapda Town"].map((t) => (
              <span
                key={t}
                className="quick-tag"
                onClick={() => { setArea(t); scrollToListings({ preventDefault: () => {} }); }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div style={S.scrollIndicator}>
          <span style={S.scrollText}>SCROLL</span>
          <div style={S.scrollLine} className="shimmer" />
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={S.statsStrip}>
        <div style={S.statsGrid}>
          {STATS.map((s, i) => (
            <div key={i} style={S.statCard} className="stat-card">
              <div style={S.statNum}>{s.num}</div>
              <div style={S.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROPERTY GRID ── */}
      <section id="listings" style={S.listings}>
        <div style={S.listingsHeader}>
          <div>
            <div style={S.eyebrow}>FEATURED COLLECTION</div>
            <h2 style={S.sectionH2} className="gold-line">
              Premium Properties<br />
              <span style={S.heroAccent}>in Multan</span>
            </h2>
          </div>
          <div style={{ textAlign: "right" }}>
            <p style={S.count}>Showing {filtered.length} of {PROPERTIES.length} properties</p>
            <button
              className="btn-outline"
              style={S.resetBtn}
              onClick={() => { setSearch(""); setArea("All Areas"); setPrice("All Prices"); }}
            >
              Reset Filters
            </button>
          </div>
        </div>

        <div style={S.grid}>
          {filtered.length === 0 ? (
            <div style={S.empty}>
              <div style={{ fontSize: 48, marginBottom: 16 }}>🔍</div>
              No properties match your filters.
            </div>
          ) : filtered.map((p) => (
            <div
              key={p.id}
              className="card-hover"
              onMouseEnter={() => setHovered(p.id)}
              onMouseLeave={() => setHovered(null)}
              style={{ ...S.card, borderColor: hovered === p.id ? "rgba(212,175,55,0.45)" : "rgba(255,255,255,0.06)" }}
            >
              <div className="img-zoom" style={S.cardImgWrap}>
                <img
                  src={p.img}
                  alt={p.title}
                  style={S.cardImg}
                  loading="lazy"
                  onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=900&auto=format&fit=crop&q=80"; }}
                />
                <div style={S.cardImgOverlay} />
                {/* Status badge */}
                <div style={{ ...S.statusBadge, borderColor: p.statusColor + "55", color: p.statusColor }}>
                  <span style={{ ...S.statusDot, background: p.statusColor }} />
                  {p.status}
                </div>
                <div style={S.cardPrice}>PKR {p.price}</div>
              </div>

              <div style={S.cardBody}>
                <div style={S.cardEyebrow}>HM EXCLUSIVE</div>
                <h3 style={{ ...S.cardTitle, color: hovered === p.id ? "#d4af37" : "#f0ece3" }}>{p.title}</h3>
                <p style={S.cardLoc}>📍 {p.loc}</p>

                <div style={S.cardDivider} />

                <div style={S.cardFooter}>
                  <div style={S.cardMeta}>
                    <span>🛏 {p.beds} Beds</span>
                    <span>🚿 {p.baths} Baths</span>
                    <span>📐 {p.area}</span>
                  </div>
                  <a
                    href={waLink(`Hello Hafiz, I'm interested in the ${p.title} at ${p.loc} (PKR ${p.price}).`)}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      ...S.cardCta,
                      color: hovered === p.id ? "#d4af37" : "#5a5040",
                      transform: hovered === p.id ? "translateX(4px)" : "translateX(0)",
                    }}
                  >
                    Enquire →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 64 }}>
          <a href={waLink("Hello Hafiz, please share your full property listings.")} target="_blank" rel="noreferrer" className="btn-outline" style={S.viewAllBtn}>
            View All Properties
          </a>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section id="services" style={S.whySection}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={S.eyebrow}>WHY HM ESTATES</div>
            <h2 style={S.sectionH2}>
              The <span style={S.heroAccent}>Trusted</span> Name in Multan
            </h2>
          </div>
          <div style={S.whyGrid}>
            {[
              { icon: "🏆", title: "Legacy of Excellence", desc: "Over 12 years connecting buyers with Multan's finest properties. Our track record speaks for itself." },
              { icon: "🤝", title: "Transparent Dealings", desc: "Every transaction handled with complete transparency — no hidden costs, no surprises." },
              { icon: "📍", title: "Local Expertise", desc: "Deep knowledge of DHA, Royal Orchard & Wapda Town. Every street, every plot, every opportunity." },
            ].map((item, i) => (
              <div
                key={i}
                style={S.whyCard}
                className="why-card"
              >
                <div style={{ fontSize: 32, marginBottom: 20 }}>{item.icon}</div>
                <h3 style={S.whyTitle}>{item.title}</h3>
                <p style={S.whyDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="contact" style={S.cta}>
        <div style={S.ctaBg} />
        <div style={{ position: "relative", zIndex: 10, maxWidth: 700, margin: "0 auto", textAlign: "center", padding: "0 32px" }}>
          <div style={S.eyebrow}>GET IN TOUCH</div>
          <h2 style={{ ...S.sectionH2, fontSize: "clamp(36px, 6vw, 64px)", marginBottom: 20 }}>
            Ready to Find Your<br />
            <span style={S.heroAccent}>Dream Home?</span>
          </h2>
          <p style={S.ctaSub}>
            Let <strong style={{ color: "#d4af37" }}>Hafiz Muhammad</strong> personally guide you through Multan's finest real estate opportunities.
          </p>
          <p style={{ ...S.ctaSub, marginTop: 4 }}>
            📞 <a href="tel:+923064877489" style={{ color: "#d4af37", textDecoration: "none" }}>0306-4877489</a>
          </p>
          <div style={S.ctaBtns}>
            <a href={waLink("Hello Hafiz, I'd like to schedule a property viewing.")} target="_blank" rel="noreferrer" className="btn-primary" style={S.ctaPrimary}>
              Schedule a Viewing
            </a>
            <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-outline" style={S.ctaSecondary}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: 8 }}>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.555 4.116 1.524 5.847L.057 23.882l6.196-1.426A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.847 0-3.574-.487-5.072-1.336l-.362-.215-3.68.845.876-3.584-.236-.375A9.953 9.953 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={S.footer}>
        <div style={S.footerTop}>
          {/* Brand */}
          <div>
            <div style={S.footerLogo}>
              HM <span style={S.logoAccent}>Signature</span> Estates
            </div>
            <div style={S.footerTagline}>Luxury Real Estate · Multan, Pakistan</div>
            <div style={{ marginTop: 16, display: "flex", gap: 12 }}>
              {/* WhatsApp */}
              <a href={WA_LINK} target="_blank" rel="noreferrer" style={S.socialIcon} className="social-icon" title="WhatsApp">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.123.555 4.116 1.524 5.847L.057 23.882l6.196-1.426A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.847 0-3.574-.487-5.072-1.336l-.362-.215-3.68.845.876-3.584-.236-.375A9.953 9.953 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a href={LINKEDIN} target="_blank" rel="noreferrer" style={S.socialIcon} className="social-icon" title="LinkedIn – Hafiz Muhammad">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452H17.02v-5.569c0-1.327-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.605V9h3.29v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a1.914 1.914 0 110-3.828 1.914 1.914 0 010 3.828zm1.648 13.019H3.688V9h3.297v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              {/* Phone */}
              <a href="tel:+923064877489" style={S.socialIcon} className="social-icon" title="Call Hafiz Muhammad">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div style={S.footerHeading}>Quick Links</div>
            {[
              { label: "Home", href: "/" },
              { label: "Property Listings", href: "#listings", onClick: scrollToListings },
              { label: "Services", href: "#services" },
              { label: "Contact", href: "#contact" },
            ].map((l) => (
              <a key={l.label} href={l.href} onClick={l.onClick} style={S.footerLink} className="footer-link">
                {l.label}
              </a>
            ))}
          </div>

          {/* Areas */}
          <div>
            <div style={S.footerHeading}>Areas We Cover</div>
            {["DHA Multan Phase 1 & 2", "Royal Orchard Multan", "Wapda Town Phase 2", "Model Town / Cantt"].map((a) => (
              <div key={a} style={{ ...S.footerLink, cursor: "default" }}>{a}</div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div style={S.footerHeading}>Contact Hafiz Muhammad</div>
            <a href="tel:+923064877489" style={S.footerLink} className="footer-link">📞 0306-4877489</a>
            <a href={WA_LINK} target="_blank" rel="noreferrer" style={S.footerLink} className="footer-link">💬 WhatsApp</a>
            <a href={LINKEDIN} target="_blank" rel="noreferrer" style={S.footerLink} className="footer-link">🔗 LinkedIn Profile</a>
            <div style={{ ...S.footerLink, cursor: "default" }}>📍 Multan, Punjab, Pakistan</div>
          </div>
        </div>

        <div style={S.footerBottom}>
          <span>© 2026 HM Signature Estates · Hafiz Muhammad. All rights reserved.</span>
          <span style={{ color: "#3a3020" }}>Designed for Multan's Luxury Market</span>
        </div>
      </footer>
    </div>
  );
}

// ─── STYLES ──────────────────────────────────────────────────────────────────
const F = { serif: "'Cormorant Garamond', Georgia, serif", sans: "'Outfit', sans-serif" };
const C = { gold: "#d4af37", goldDim: "#b8972e", bg: "#0a0f1a", surface: "#0e1422", text: "#f0ece3", muted: "#6a6050", faint: "#3a3020" };

const S = {
  root: { fontFamily: F.serif, background: C.bg, color: C.text, minHeight: "100vh", overflowX: "hidden" },

  // Nav
  nav: { position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, padding: "20px 48px", display: "flex", justifyContent: "space-between", alignItems: "center", transition: "all 0.4s ease" },
  navScrolled: { background: "rgba(10,15,26,0.96)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(184,151,46,0.15)" },
  navLogo: { fontSize: 20, fontWeight: 700, letterSpacing: "0.04em" },
  logoAccent: { color: C.gold, fontStyle: "italic", fontWeight: 300 },
  navSub: { fontFamily: F.sans, fontSize: 9, letterSpacing: "0.28em", color: "#5a5040", marginTop: 2 },
  navLinks: { display: "flex", gap: 40, alignItems: "center" },
  navLink: { fontFamily: F.sans, fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#c8bfaf", textDecoration: "none" },
  navCta: { display: "inline-block", padding: "11px 28px", borderRadius: 2, fontSize: 11, letterSpacing: "0.12em", textDecoration: "none" },

  // Hero
  hero: { minHeight: "100vh", position: "relative", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" },
  heroBg: { position: "absolute", inset: 0, backgroundImage: "url(https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1800&auto=format&fit=crop&q=80)", backgroundSize: "cover", backgroundPosition: "center", filter: "brightness(0.22)" },
  heroOverlay: { position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(10,15,26,0.4) 0%, transparent 40%, rgba(10,15,26,0.85) 100%)" },
  heroGrid: { position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(184,151,46,0.04) 1px, transparent 1px),linear-gradient(90deg, rgba(184,151,46,0.04) 1px, transparent 1px)", backgroundSize: "80px 80px" },
  heroContent: { position: "relative", zIndex: 10, textAlign: "center", maxWidth: 900, padding: "0 32px" },
  heroEyebrow: { fontFamily: F.sans, fontSize: 11, letterSpacing: "0.4em", color: C.gold, marginBottom: 24 },
  heroH1: { fontSize: "clamp(48px, 8vw, 88px)", fontWeight: 300, lineHeight: 1.05, marginBottom: 12 },
  heroAccent: { color: C.gold, fontStyle: "italic" },
  heroSub: { fontFamily: F.sans, fontSize: 15, color: "#a09880", lineHeight: 1.7, marginBottom: 48, fontWeight: 300 },

  // Search
  searchBar: { background: "rgba(10,15,26,0.88)", backdropFilter: "blur(20px)", border: "1px solid rgba(184,151,46,0.3)", borderRadius: 4, padding: "8px 8px 8px 24px", display: "flex", gap: 8, alignItems: "center", boxShadow: "0 20px 60px rgba(0,0,0,0.5)" },
  searchInput: { flex: 1, background: "transparent", border: "none", color: C.text, fontSize: 14, padding: "14px 0", fontFamily: F.sans },
  searchSelect: { background: "transparent", border: "none", color: "#a09880", fontSize: 13, padding: "14px 12px", cursor: "pointer", fontFamily: F.sans },
  searchBtn: { padding: "16px 32px", borderRadius: 2, fontSize: 12, letterSpacing: "0.1em", border: "none", cursor: "pointer", whiteSpace: "nowrap" },
  divider: { width: 1, height: 32, background: "rgba(184,151,46,0.2)", flexShrink: 0 },
  quickTags: { marginTop: 20, display: "flex", justifyContent: "center", gap: 32 },

  // Scroll indicator
  scrollIndicator: { position: "absolute", bottom: 40, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 8 },
  scrollText: { fontFamily: F.sans, fontSize: 9, letterSpacing: "0.3em", color: "#5a5040" },
  scrollLine: { width: 1, height: 50, background: "linear-gradient(to bottom, #d4af37, transparent)" },

  // Stats
  statsStrip: { borderTop: "1px solid rgba(184,151,46,0.15)", borderBottom: "1px solid rgba(184,151,46,0.15)", padding: "48px 64px" },
  statsGrid: { maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24 },
  statCard: { padding: "32px 24px", textAlign: "center", borderRadius: 2 },
  statNum: { fontSize: 36, fontWeight: 700, color: C.gold, letterSpacing: "-0.02em" },
  statLabel: { fontFamily: F.sans, fontSize: 11, color: C.muted, letterSpacing: "0.15em", marginTop: 8, textTransform: "uppercase" },

  // Listings
  listings: { maxWidth: 1200, margin: "0 auto", padding: "100px 32px" },
  listingsHeader: { display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 64, flexWrap: "wrap", gap: 24 },
  eyebrow: { fontFamily: F.sans, fontSize: 10, letterSpacing: "0.35em", color: C.gold, marginBottom: 16 },
  sectionH2: { fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 300, lineHeight: 1.1 },
  count: { fontFamily: F.sans, fontSize: 13, color: C.muted, marginBottom: 8 },
  resetBtn: { padding: "10px 24px", borderRadius: 2, fontSize: 11, letterSpacing: "0.1em", cursor: "pointer" },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 28 },
  empty: { gridColumn: "1/-1", textAlign: "center", padding: 80, color: C.muted, fontFamily: F.sans },

  // Card
  card: { background: C.surface, border: "1px solid rgba(255,255,255,0.06)", borderRadius: 4, overflow: "hidden", cursor: "pointer", transition: "border-color 0.4s" },
  cardImgWrap: { height: 250, overflow: "hidden", position: "relative" },
  cardImg: { width: "100%", height: "100%", objectFit: "cover" },
  cardImgOverlay: { position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(14,20,34,0.65) 0%, transparent 55%)" },
  statusBadge: { position: "absolute", top: 16, left: 16, fontFamily: F.sans, fontSize: 10, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", background: "rgba(10,15,26,0.85)", backdropFilter: "blur(10px)", padding: "5px 12px", borderRadius: 2, border: "1px solid", display: "flex", alignItems: "center", gap: 6 },
  statusDot: { width: 6, height: 6, borderRadius: "50%", flexShrink: 0 },
  cardPrice: { position: "absolute", bottom: 16, right: 16, fontFamily: F.sans, fontSize: 14, fontWeight: 600, color: C.text },
  cardBody: { padding: "24px 24px 20px" },
  cardEyebrow: { fontFamily: F.sans, fontSize: 10, letterSpacing: "0.2em", color: C.gold, marginBottom: 8 },
  cardTitle: { fontSize: 20, fontWeight: 600, marginBottom: 6, lineHeight: 1.2, transition: "color 0.3s" },
  cardLoc: { fontFamily: F.sans, fontSize: 12, color: C.muted },
  cardDivider: { height: 1, background: "rgba(255,255,255,0.06)", margin: "16px 0" },
  cardFooter: { display: "flex", justifyContent: "space-between", alignItems: "center" },
  cardMeta: { display: "flex", gap: 12, fontFamily: F.sans, fontSize: 11, color: C.muted },
  cardCta: { background: "none", border: "none", cursor: "pointer", fontFamily: F.serif, fontSize: 14, textDecoration: "none", transition: "color 0.3s, transform 0.3s" },
  viewAllBtn: { display: "inline-block", padding: "16px 56px", borderRadius: 2, fontSize: 12, letterSpacing: "0.15em", textDecoration: "none", cursor: "pointer" },

  // Why
  whySection: { background: `linear-gradient(135deg, ${C.surface} 0%, ${C.bg} 100%)`, borderTop: "1px solid rgba(184,151,46,0.1)", borderBottom: "1px solid rgba(184,151,46,0.1)", padding: "100px 64px" },
  whyGrid: { display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 32, marginTop: 0 },
  whyCard: { padding: "36px 28px", border: "1px solid rgba(184,151,46,0.12)", borderRadius: 4, transition: "border-color 0.3s" },
  whyTitle: { fontSize: 20, fontWeight: 600, marginBottom: 10, color: C.text },
  whyDesc: { fontFamily: F.sans, fontSize: 13, color: C.muted, lineHeight: 1.7 },

  // CTA
  cta: { padding: "120px 32px", textAlign: "center", position: "relative", overflow: "hidden" },
  ctaBg: { position: "absolute", inset: 0, backgroundImage: "url(https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&auto=format&fit=crop&q=80)", backgroundSize: "cover", backgroundPosition: "center", filter: "brightness(0.15)" },
  ctaSub: { fontFamily: F.sans, fontSize: 14, color: C.muted, marginBottom: 32, lineHeight: 1.7 },
  ctaBtns: { display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" },
  ctaPrimary: { display: "inline-flex", alignItems: "center", padding: "18px 48px", borderRadius: 2, fontSize: 12, letterSpacing: "0.12em", textDecoration: "none", border: "none", cursor: "pointer" },
  ctaSecondary: { display: "inline-flex", alignItems: "center", padding: "18px 40px", borderRadius: 2, fontSize: 12, letterSpacing: "0.12em", textDecoration: "none", cursor: "pointer" },

  // Footer
  footer: { borderTop: "1px solid rgba(184,151,46,0.15)", padding: "64px 64px 32px" },
  footerTop: { display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1.5fr", gap: 48, marginBottom: 48 },
  footerLogo: { fontSize: 18, fontWeight: 700 },
  footerTagline: { fontFamily: F.sans, fontSize: 11, color: C.faint, marginTop: 6, letterSpacing: "0.1em" },
  footerHeading: { fontFamily: F.sans, fontSize: 10, letterSpacing: "0.25em", color: C.gold, textTransform: "uppercase", marginBottom: 16 },
  footerLink: { display: "block", fontFamily: F.sans, fontSize: 13, color: C.muted, textDecoration: "none", marginBottom: 10, transition: "color 0.2s" },
  footerBottom: { borderTop: "1px solid rgba(255,255,255,0.04)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: F.sans, fontSize: 11, color: C.faint, flexWrap: "wrap", gap: 8 },
  socialIcon: { display: "inline-flex", alignItems: "center", justifyContent: "center", width: 38, height: 38, borderRadius: 2, border: "1px solid rgba(184,151,46,0.25)", color: C.muted, textDecoration: "none", transition: "all 0.2s" },
};

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&family=Outfit:wght@300;400;500;600&display=swap');
  *{box-sizing:border-box;margin:0;padding:0;}
  ::-webkit-scrollbar{width:4px;}::-webkit-scrollbar-track{background:#0a0f1a;}::-webkit-scrollbar-thumb{background:#b8972e;border-radius:2px;}
  @keyframes heroFadeIn{from{opacity:0;transform:translateY(40px);}to{opacity:1;transform:translateY(0);}}
  @keyframes shimmer{0%,100%{opacity:0.5;}50%{opacity:1;}}
  .hero-fade{animation:heroFadeIn 1.2s ease forwards;}
  .shimmer{animation:shimmer 2.2s infinite;}
  .btn-primary{background:linear-gradient(135deg,#b8972e,#d4af37);color:#0a0f1a;font-family:'Outfit',sans-serif;font-weight:600;letter-spacing:0.08em;transition:opacity .2s,transform .2s;}
  .btn-primary:hover{opacity:.88;transform:translateY(-1px);}
  .btn-outline{background:transparent;color:#d4af37;border:1.5px solid #d4af37;font-family:'Outfit',sans-serif;font-weight:500;letter-spacing:0.06em;transition:all .2s;}
  .btn-outline:hover{background:#d4af37;color:#0a0f1a;}
  .card-hover{transition:transform .5s cubic-bezier(.25,.8,.25,1),box-shadow .5s;}
  .card-hover:hover{transform:translateY(-8px);box-shadow:0 32px 70px rgba(0,0,0,.55);}
  .img-zoom img{transition:transform .8s cubic-bezier(.25,.8,.25,1);}
  .img-zoom:hover img{transform:scale(1.07);}
  .gold-line::after{content:'';display:block;width:60px;height:2px;background:linear-gradient(90deg,#b8972e,#d4af37);margin-top:16px;}
  .stat-card{border:1px solid rgba(184,151,46,.18);background:rgba(184,151,46,.04);transition:border-color .3s,background .3s;}
  .stat-card:hover{border-color:rgba(212,175,55,.5);background:rgba(184,151,46,.08);}
  .quick-tag{font-family:'Outfit',sans-serif;font-size:11px;color:#7a7060;letter-spacing:.1em;cursor:pointer;border-bottom:1px solid transparent;transition:color .2s,border-color .2s;padding-bottom:2px;}
  .quick-tag:hover{color:#d4af37;border-bottom-color:#d4af37;}
  .why-card:hover{border-color:rgba(212,175,55,.35)!important;}
  .social-icon:hover{border-color:#d4af37!important;color:#d4af37!important;}
  .footer-link:hover{color:#d4af37!important;}
  input:focus,select:focus{outline:2px solid #d4af37;}
  a.nav-link:hover{color:#d4af37;}
  @media(max-width:768px){
    nav{padding:16px 24px!important;}
    div[style*="gap: 40px"]{display:none!important;}
    section[style*="padding: 100px"]{padding:60px 20px!important;}
    div[style*="gridTemplateColumns: repeat(4"]{grid-template-columns:repeat(2,1fr)!important;}
    div[style*="gridTemplateColumns: repeat(3"]{grid-template-columns:1fr!important;}
    div[style*="gridTemplateColumns: 2fr"]{grid-template-columns:1fr 1fr!important;}
    div[style*="padding: 64px"]{padding:40px 24px!important;}
  }
`;
