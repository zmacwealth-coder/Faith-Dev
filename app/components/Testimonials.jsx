export default function Testimonials() {
  return (
    <section className="testimonials-section" id="testimonials">
      <div className="section-container">
        <div className="testimonial-banner">
          <div className="quote-symbol-large">“</div>
          <blockquote className="main-quote">
            &quot;Folu&apos;s dual mastery of modern full-stack development and rigorous cybersecurity practices makes him an indispensable asset. He refactored our Next.js application, locked down our database, and sped up load times by 300%.&quot;
          </blockquote>
          <div className="testimonial-author">
            <div className="author-avatar">DW</div>
            <div className="author-details">
              <h4>David W.</h4>
              <p>CTO, NexusFintech Technologies</p>
            </div>
          </div>
          <div className="ratings-stars">★★★★★ <span>5.0 Verified Client Review</span></div>
        </div>
      </div>
    </section>
  );
}
