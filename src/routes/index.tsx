import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";
import {
  Accessibility,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  AudioLines,
  CalendarDays,
  Check,
  ChevronDown,
  CircleCheck,
  Clock3,
  Fan,
  MapPin,
  Menu,
  Mic2,
  Music2,
  Phone,
  Projector,
  ShieldCheck,
  Sparkles,
  Star,
  Volume2,
  X,
  Zap,
} from "lucide-react";
import auditoriumAsset from "@/assets/auditorium.jpg.asset.json";
import conferenceAsset from "@/assets/conference.jpg.asset.json";
import eventsAsset from "@/assets/events.jpg.asset.json";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Light Place Event Center | Auditorium & Event Venue in Utako, Abuja" },
      {
        name: "description",
        content:
          "Host your next conference, summit, concert, or service at Light Place Event Center in Utako, Abuja. Explore our auditorium, stage, sound, and event facilities.",
      },
      { property: "og:title", content: "Light Place Event Center | Utako, Abuja" },
      {
        property: "og:description",
        content: "Abuja's premier modern auditorium and event stage. Make room for something unforgettable.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const callUrl = "tel:+2348147114988";
const whatsappUrl = "https://wa.me/2348147114988";
const mapUrl = "https://www.google.com/maps/search/?api=1&query=Light+Place+Event+Center+Utako+Abuja";

const facilities = [
  {
    number: "01",
    icon: Projector,
    title: "A stage built to be seen",
    description:
      "An elevated presentation stage with heavy-duty lighting truss, stage monitors, and room for a multi-display LED wall.",
    detail: "Stage · truss · LED ready",
  },
  {
    number: "02",
    icon: AudioLines,
    title: "Sound that fills the room",
    description:
      "A carefully tuned acoustic environment for live music, keynote speakers, worship, and every word in between.",
    detail: "Concert-grade line array",
  },
  {
    number: "03",
    icon: Fan,
    title: "Comfort, all day long",
    description:
      "High-capacity commercial cooling keeps guests comfortable from the first welcome to the final encore.",
    detail: "Full auditorium A/C",
  },
  {
    number: "04",
    icon: Accessibility,
    title: "A welcome without barriers",
    description:
      "Ground-level, wheelchair-accessible entry and a dedicated vendor preparation area make arrivals run smoothly.",
    detail: "Accessible entry · vendor prep",
  },
];

const openingHours = [
  ["Friday", "Open 24 hours", true],
  ["Saturday", "Open 24 hours", true],
  ["Sunday", "06:00 – 22:00", false],
  ["Monday", "09:00 – 17:00", false],
  ["Tuesday", "14:00 – 20:00", false],
  ["Wednesday", "09:00 – 17:00", false],
  ["Thursday", "09:00 – 17:00", false],
] as const;

const reviews = [
  {
    name: "Chinwendu Vincent-Captain",
    initials: "CV",
    quote: "The sound system and energy here are unmatched. Beautiful facility and well organized.",
    event: "Guest review",
  },
  {
    name: "Anointed Laizer",
    initials: "AL",
    quote: "A safe haven with incredible atmosphere, comfortable seating, and an amazing sound experience.",
    event: "Guest review",
  },
  {
    name: "Verified Event Organizer",
    initials: "EO",
    quote:
      "The stage lighting, acoustics, and air conditioning make hosting summits and corporate conferences completely stress-free.",
    event: "Event organizer",
  },
];

function Index() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function handleBooking(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    toast.success("Your enquiry is ready", {
      description: "Thank you for considering Light Place. Our team will be in touch shortly.",
    });
    setBookingOpen(false);
    event.currentTarget.reset();
  }

  const closeMenu = () => setMobileMenuOpen(false);
  const openBooking = () => {
    closeMenu();
    setBookingOpen(true);
  };

  return (
    <main className="venue-site">
      <header className="site-header">
        <div className="site-header-inner">
          <a className="brand-lockup" href="#home" aria-label="Light Place Event Center home" onClick={closeMenu}>
            <span className="brand-mark" aria-hidden="true"><Sparkles size={19} /></span>
            <span className="brand-words">
              <span className="brand-name">LIGHT PLACE</span>
              <span className="brand-location">EVENT CENTER <i /> UTAKO, ABUJA</span>
            </span>
          </a>
          <nav className={`desktop-nav${mobileMenuOpen ? " nav-open" : ""}`} aria-label="Main navigation">
            <a href="#auditorium" onClick={closeMenu}>Auditorium</a>
            <a href="#features" onClick={closeMenu}>Features</a>
            <a href="#schedule" onClick={closeMenu}>Schedule</a>
            <a href="#reviews" onClick={closeMenu}>Reviews</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
            <Button onClick={openBooking} className="nav-book">Book the hall <ArrowUpRight size={15} /></Button>
          </nav>
          <div className="header-actions">
            <a className="header-call" href={callUrl} aria-label="Call Light Place at +234 814 711 4988"><Phone size={16} /><span>+234 814 711 4988</span></a>
            <Button variant="outline" size="icon" className="menu-toggle" aria-label={mobileMenuOpen ? "Close menu" : "Open menu"} onClick={() => setMobileMenuOpen((open) => !open)}>
              {mobileMenuOpen ? <X size={19} /> : <Menu size={19} />}
            </Button>
          </div>
        </div>
      </header>

      <section className="hero" id="home" aria-labelledby="hero-title">
        <img className="hero-image" src={auditoriumAsset.url} alt="An energetic live event with a dramatic concert stage and lighting" />
        <div className="hero-shade" />
        <div className="hero-inner">
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow"><span className="live-dot" /> ABUJA, MEET YOUR MOMENT</p>
            <h1 id="hero-title">State-of-the-art<br />stage, sound <em>&amp;</em><br />conference venue<br className="mobile-title-break" /> in Utako.</h1>
            <p className="hero-description">A room made for big ideas, powerful sound, and moments that stay with you. Right here in the heart of Abuja.</p>
            <div className="hero-buttons">
              <Button size="lg" className="button-gold" onClick={() => setBookingOpen(true)}>Check availability <ArrowRight size={16} /></Button>
              <a className="hero-link" href="#features">Discover the venue <ArrowDownRight size={16} /></a>
            </div>
            <div className="hero-points">
              <span><Volume2 size={15} /> Concert-grade sound</span>
              <span><Fan size={15} /> Full air-conditioning</span>
              <span><Zap size={15} /> Stage &amp; LED ready</span>
            </div>
          </div>
          <div className="hero-caption"><span>THE LIGHT PLACE EXPERIENCE</span><span>UTAKO, ABUJA <ArrowUpRight size={13} /></span></div>
        </div>
        <a className="scroll-cue" href="#auditorium" aria-label="Scroll to auditorium"><ChevronDown size={17} /></a>
      </section>

      <section className="proof-strip" aria-label="Venue highlights">
        <div className="proof-item rating-proof"><span className="proof-rating">4.7 <Star size={15} fill="currentColor" /></span><span className="proof-copy">220+ verified reviews</span></div>
        <div className="proof-item"><AudioLines size={19} /><span>Concert-grade<br />sound &amp; trussing</span></div>
        <div className="proof-item"><Fan size={19} /><span>High-capacity<br />cooling throughout</span></div>
        <div className="proof-item"><Accessibility size={19} /><span>Wheelchair<br />accessible venue</span></div>
      </section>

      <section className="intro-section" id="auditorium">
        <div className="section-inner intro-grid">
          <div className="intro-heading">
            <p className="eyebrow"><span>01</span> THE VENUE</p>
            <h2>More than a venue.<br /><em>Your moment,</em><br />beautifully staged.</h2>
            <p className="intro-description">From a room full of fresh ideas to a room singing in unison—Light Place is made to bring people together, and make every gathering feel exceptional.</p>
            <button className="text-link" onClick={() => setBookingOpen(true)}>Make it happen <ArrowRight size={16} /></button>
          </div>
          <div className="venue-image-wrap">
            <img src={conferenceAsset.url} alt="Contemporary conference venue set for a presentation" loading="lazy" />
            <div className="image-note"><span className="note-icon"><MapPin size={16} /></span><span><strong>In the heart of Utako</strong><small>Central Abuja · easy to find</small></span></div>
            <div className="image-index">01 <span>/</span> 03</div>
          </div>
          <div className="intro-stat"><strong>4.7<span>★</span></strong><span>GOOGLE RATING<br />220+ VERIFIED REVIEWS</span></div>
        </div>
      </section>

      <section className="feature-section" id="features">
        <div className="section-inner">
          <div className="section-heading-row">
            <div><p className="eyebrow"><span>02</span> THOUGHTFULLY EQUIPPED</p><h2>Everything in its <em>right place.</em></h2></div>
            <p className="section-intro">Every detail is here for a reason. Explore what makes Light Place ready for your next big gathering.</p>
          </div>
          <div className="feature-grid">
            {facilities.map(({ number, icon: Icon, title, description, detail }) => (
              <article className="feature-item" key={number}>
                <div className="feature-topline"><span className="feature-icon"><Icon size={20} strokeWidth={1.7} /></span><span className="feature-number">{number}</span></div>
                <h3>{title}</h3><p>{description}</p>
                <span className="feature-detail"><Check size={13} /> {detail}</span>
              </article>
            ))}
          </div>
          <div className="experience-banner">
            <img src={eventsAsset.url} alt="Live audience gathered under colorful event lights" loading="lazy" />
            <div className="experience-overlay" />
            <div className="experience-copy"><span className="eyebrow">MADE FOR THE MEMORABLE</span><p>Big ideas.<br /><em>Bigger energy.</em></p></div>
            <button className="experience-action" onClick={() => setBookingOpen(true)} aria-label="Enquire about hosting your event"><ArrowUpRight size={23} /></button>
            <span className="experience-caption">YOUR EVENT, IN ITS ELEMENT.</span>
          </div>
        </div>
      </section>

      <section className="schedule-section" id="schedule">
        <div className="section-inner schedule-grid">
          <div className="schedule-intro"><p className="eyebrow"><span>03</span> PLAN YOUR VISIT</p><h2>Good things<br />happen <em>on time.</em></h2><p>Find a time that works for your event. Fridays and Saturdays are open all day and all night.</p>
            <button className="text-link" onClick={() => setBookingOpen(true)}>Ask about your date <ArrowRight size={16} /></button>
          </div>
          <div className="hours-panel">
            <div className="hours-header"><span><Clock3 size={17} /> OPENING HOURS</span><span className="hours-timezone">WAT · ABUJA</span></div>
            <div className="hours-list">{openingHours.map(([day, hours, peak]) => <div className="hours-row" key={day}><span>{day}{peak && <i className="peak-dot" />}</span><span className={peak ? "peak-hours" : ""}>{hours}</span></div>)}</div>
            <div className="hours-note"><CalendarDays size={16} /><span>Planning something special? <button onClick={() => setBookingOpen(true)}>Let's talk about your date.</button></span></div>
          </div>
        </div>
      </section>

      <section className="reviews-section" id="reviews">
        <div className="section-inner">
          <div className="section-heading-row reviews-heading"><div><p className="eyebrow"><span>04</span> WORD GETS AROUND</p><h2>Good memories.<br /><em>Great reviews.</em></h2></div><div className="reviews-summary"><div className="review-stars" aria-label="4.7 out of 5 stars"><Star /><Star /><Star /><Star /><Star /></div><p><strong>4.7 out of 5</strong><br />from 220+ Google reviews</p></div></div>
          <div className="reviews-grid">{reviews.map((review) => <article className="review-item" key={review.name}><div className="review-top"><span className="review-google">G</span><span className="review-stars small-stars" aria-label="5 out of 5 stars"><Star /><Star /><Star /><Star /><Star /></span><ShieldCheck size={16} className="review-verified" /></div><blockquote>“{review.quote}”</blockquote><div className="review-author"><span className="review-avatar">{review.initials}</span><span><strong>{review.name}</strong><small>{review.event} · <span>Verified review</span></small></span></div></article>)}</div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-visual"><img src={auditoriumAsset.url} alt="Stage lighting ready for a memorable event" loading="lazy" /><div className="contact-visual-overlay" /><div className="contact-visual-copy"><span className="eyebrow">YOUR NEXT CHAPTER STARTS HERE</span><p>Let's make<br /><em>something happen.</em></p></div></div>
        <div className="contact-details"><p className="eyebrow"><span>05</span> FIND YOUR WAY</p><h2>Right where<br />you need us.</h2><div className="address-line"><span className="contact-icon"><MapPin size={19} /></span><span><strong>Light Place Event Center</strong><small>Utako District, Abuja 900108, FCT<br />Near the Jabi / Utako transport corridor</small></span></div><a className="directions-link" href={mapUrl} target="_blank" rel="noreferrer">Get directions <ArrowUpRight size={16} /></a><div className="map-panel"><iframe title="Map showing Utako District in Abuja" src="https://maps.google.com/maps?q=Utako%20District%2C%20Abuja&t=&z=14&ie=UTF8&iwloc=&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /><a href={mapUrl} target="_blank" rel="noreferrer" className="map-label"><MapPin size={15} /> UTAKO, ABUJA <ArrowUpRight size={13} /></a></div><div className="contact-phone"><span>READY WHEN YOU ARE</span><a href={callUrl}><Phone size={15} /> +234 814 711 4988</a></div></div>
      </section>

      <footer className="site-footer"><a className="footer-brand" href="#home"><Sparkles size={16} /> LIGHT PLACE</a><span>© {new Date().getFullYear()} Light Place Event Center</span><span>Crafted for the moments that matter.</span></footer>

      <div className="mobile-action-bar"><a href={callUrl}><Phone size={16} /> Call us</a><a href={whatsappUrl} target="_blank" rel="noreferrer"><MessageIcon /> WhatsApp</a></div>

      <Dialog open={bookingOpen} onOpenChange={setBookingOpen}>
        <DialogContent className="booking-dialog">
          <DialogHeader className="booking-header"><span className="eyebrow">LET'S MAKE IT HAPPEN</span><DialogTitle>Tell us about<br /><em>your event.</em></DialogTitle><DialogDescription>Share a few details and our team will help you find the right date and setup.</DialogDescription></DialogHeader>
          <form className="booking-form" onSubmit={handleBooking}>
            <div className="form-row"><div className="form-field"><Label htmlFor="booking-name">Full name</Label><Input id="booking-name" name="name" placeholder="Your name" required autoComplete="name" /></div><div className="form-field"><Label htmlFor="booking-phone">Phone / WhatsApp</Label><Input id="booking-phone" name="phone" type="tel" placeholder="+234" required autoComplete="tel" /></div></div>
            <div className="form-row"><div className="form-field"><Label htmlFor="booking-type">Event type</Label><select id="booking-type" name="eventType" required defaultValue=""><option value="" disabled>Select event type</option><option>Conference / Summit</option><option>Church Service</option><option>Concert / Live Show</option><option>Corporate Meeting</option></select></div><div className="form-field"><Label htmlFor="booking-guests">Estimated attendees</Label><Input id="booking-guests" name="attendees" type="number" min="1" placeholder="e.g. 250" required /></div></div>
            <div className="form-field"><Label htmlFor="booking-date">Preferred date</Label><Input id="booking-date" name="date" type="date" required min={new Date().toISOString().split("T")[0]} /></div>
            <div className="form-field"><Label htmlFor="booking-notes">Anything else? <span>(optional)</span></Label><Textarea id="booking-notes" name="notes" placeholder="Tell us a little more about what you have in mind..." rows={3} /></div>
            <Button type="submit" className="form-submit">Send event enquiry <ArrowRight size={16} /></Button>
            <p className="form-footnote"><CircleCheck size={14} /> No commitment—just the start of a conversation.</p>
          </form>
        </DialogContent>
      </Dialog>
    </main>
  );
}

function MessageIcon() {
  return <Mic2 size={16} aria-hidden="true" />;
}
