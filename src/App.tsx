import { useState, type CSSProperties } from 'react';
import {
  ArrowDown,
  ArrowRight,
  ChevronDown,
  Heart,
  Menu,
  Search,
  ShoppingBag,
  Sparkles,
  X,
} from 'lucide-react';

const heroImage = 'https://images.pexels.com/photos/7576329/pexels-photo-7576329.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const campaignImage = 'https://images.pexels.com/photos/6839/fashion-woman-cute-airport.jpg?auto=compress&cs=tinysrgb&h=650&w=940';
const atelierImage = 'https://images.pexels.com/photos/29096400/pexels-photo-29096400.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const museImage = 'https://images.pexels.com/photos/10005233/pexels-photo-10005233.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

const categories = [
  { name: 'The Sculptural', image: 'https://images.pexels.com/photos/27046146/pexels-photo-27046146.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { name: 'Soft Structure', image: 'https://images.pexels.com/photos/27298312/pexels-photo-27298312.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { name: 'The Mini Edit', image: 'https://images.pexels.com/photos/27204286/pexels-photo-27204286.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { name: 'Evening Icons', image: 'https://images.pexels.com/photos/26954371/pexels-photo-26954371.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
];

const products = [
  { name: 'The Aurelia', type: 'Structured top handle', price: '$1,280', image: 'https://images.pexels.com/photos/27100523/pexels-photo-27100523.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', color: 'Espresso' },
  { name: 'The No. 07', type: 'Soft leather shoulder bag', price: '$980', image: 'https://images.pexels.com/photos/27174573/pexels-photo-27174573.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', color: 'Cognac' },
  { name: 'The Valentina', type: 'Mini crossbody', price: '$740', image: 'https://images.pexels.com/photos/27204288/pexels-photo-27204288.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', color: 'Chestnut' },
  { name: 'The Serpentine', type: 'Crocodile-effect clutch', price: '$1,450', image: 'https://images.pexels.com/photos/26954371/pexels-photo-26954371.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', color: 'Noir' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [savedItems, setSavedItems] = useState<string[]>([]);

  const toggleSaved = (name: string) => {
    setSavedItems((items) => items.includes(name) ? items.filter((item) => item !== name) : [...items, name]);
  };

  const scrollToCollection = () => {
    document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="site-shell">
      <div className="announcement">Complimentary shipping on all orders over $500 <span>•</span> Made for the remarkable</div>
      <header className="site-header">
        <button className="icon-button mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`}>
          <a href="#collection" onClick={() => setMenuOpen(false)}>Collections</a>
          <a href="#story" onClick={() => setMenuOpen(false)}>Our story</a>
          <a href="#journal" onClick={() => setMenuOpen(false)}>Journal</a>
        </nav>
        <a className="wordmark" href="#top" aria-label="House of Elite Styles home"><span>HOUSE OF</span> ELITE STYLES</a>
        <div className="header-actions">
          <button className="icon-button" aria-label="Search"><Search size={18} strokeWidth={1.5} /></button>
          <button className="icon-button" aria-label="Shopping bag"><ShoppingBag size={18} strokeWidth={1.5} /><small>0</small></button>
        </div>
      </header>

      <section className="hero" id="top">
        <img src={heroImage} alt="A stylish couple dressed for a mountain escape" />
        <div className="hero-shade" />
        <div className="hero-copy">
          <p className="eyebrow light">Collection 01 / 26</p>
          <h1>Carry<br /><em>your</em> story.</h1>
          <p className="hero-caption">Objects of quiet confidence, designed to travel<br className="desktop-only" /> well beyond the expected.</p>
          <button className="button button-light" onClick={scrollToCollection}>Explore the collection <ArrowRight size={15} /></button>
        </div>
        <div className="hero-footer"><span>Scroll to discover</span><ArrowDown size={14} /><span className="hero-location">Dolomites, Italy — 46°32′N</span></div>
      </section>

      <section className="intro section-pad">
        <p className="eyebrow">The edit</p>
        <h2>Designed to be<br /><em>remembered.</em></h2>
        <p className="intro-copy">House of Elite Styles makes considered pieces for a life in motion. Each silhouette is refined by hand, then released in limited quantities — because the most personal things are never mass-made.</p>
      </section>

      <section className="category-section section-pad" id="collection">
        <div className="section-heading"><div><p className="eyebrow">01 — Discover</p><h3>Shop by mood</h3></div><a href="#products">View all <ArrowRight size={14} /></a></div>
        <div className="category-grid">
          {categories.map((category, index) => <a className="category-card" href="#products" key={category.name} style={{ '--delay': `${index * 80}ms` } as CSSProperties}><div className="image-wrap"><img src={category.image} alt={category.name} /><span className="card-index">0{index + 1}</span></div><span>{category.name}</span><ArrowRight size={14} /></a>)}
        </div>
      </section>

      <section className="split-feature">
        <div className="feature-image"><img src={campaignImage} alt="Woman carrying a leather handbag in the city" /></div>
        <div className="feature-copy"><p className="eyebrow">The daily ritual</p><h2>Luxury is<br /><em>how it feels.</em></h2><p>From the weight of the handle to the final stitch, every detail is designed around the rituals you repeat — leaving, arriving, becoming.</p><a className="text-link" href="#story">Discover our approach <ArrowRight size={15} /></a></div>
      </section>

      <section className="product-section section-pad" id="products">
        <div className="section-heading"><div><p className="eyebrow">02 — The essentials</p><h3>Signatures for her</h3></div><button className="filter-button">Filter & sort <ChevronDown size={14} /></button></div>
        <div className="product-grid">
          {products.map((product) => <article className="product-card" key={product.name}><div className="product-image"><img src={product.image} alt={product.name} /><button className={`save-button ${savedItems.includes(product.name) ? 'saved' : ''}`} onClick={() => toggleSaved(product.name)} aria-label={`Save ${product.name}`}><Heart size={16} fill={savedItems.includes(product.name) ? 'currentColor' : 'none'} /></button><span className="new-badge">New</span></div><div className="product-info"><div><h4>{product.name}</h4><p>{product.type}</p></div><strong>{product.price}</strong></div><div className="product-meta"><span>{product.color}</span><span>View piece <ArrowRight size={12} /></span></div></article>)}
        </div>
        <button className="button button-dark">Shop all signatures <ArrowRight size={15} /></button>
      </section>

      <section className="quote-feature" id="story"><img src={atelierImage} alt="Orange leather handbag in natural light" /><div className="quote-overlay"><Sparkles size={20} /><blockquote>“The best accessory is the one that becomes part of your mythology.”</blockquote><span>— The House of Elite Styles</span></div></section>

      <section className="muse-section section-pad" id="journal"><div className="muse-copy"><p className="eyebrow">03 — The journal</p><h2>Meet the<br /><em>modern muse.</em></h2><p>Notes on objects, places, and the women who make them matter. The first chapter begins in the high country.</p><a className="text-link" href="#top">Read the journal <ArrowRight size={15} /></a></div><div className="muse-image"><img src={museImage} alt="Two modern models in tailored outerwear" /><span>Issue 01 / The art of arrival</span></div></section>

      <footer className="footer section-pad"><div className="footer-brand"><a className="wordmark" href="#top"><span>HOUSE OF</span> ELITE STYLES</a><p>For the considered life.</p></div><div className="footer-links"><div><p className="eyebrow">Explore</p><a href="#collection">Collections</a><a href="#story">Our story</a><a href="#journal">Journal</a></div><div><p className="eyebrow">Care</p><a href="#top">Contact</a><a href="#top">Shipping & returns</a><a href="#top">Care guide</a></div><div><p className="eyebrow">Stay close</p><p className="newsletter-copy">Sign up for first access, private appointments, and considered notes.</p><div className="email-line"><input type="email" placeholder="Your email address" aria-label="Your email address" /><button aria-label="Subscribe"><ArrowRight size={16} /></button></div></div></div><div className="footer-bottom"><span>© 2026 House of Elite Styles</span><span>New York · London · Everywhere</span><span>Privacy / Terms</span></div></footer>
    </main>
  );
}

export default App;
