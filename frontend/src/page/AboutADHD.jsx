import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/AboutADHD.css';

const AboutADHD = () => {
  return (
    <>
      <Header />
      
      <div className="adhd-adhd-page">
        {/* Header Section */}
        <header className="adhd-header-section">
          <div className="adhd-header-content">
            <div className="adhd-book-illustration">
              <div className="adhd-book">
                <div className="adhd-book-cover">
                  <img src="/image.png" alt="ADHD Book Cover" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px'}} />
                </div>
              </div>
            </div>

            <div className="adhd-header-text">
              <div className="adhd-category">Big Little ADHD Coach • ADHD</div>
              <h1 className="adhd-main-title">The Importance of Understanding ADHD</h1>
              <p className="adhd-subtitle">
                ADHD awareness is essential because it fosters a supportive environment where individuals with ADHD can
                thrive. Knowledge creates dignity leading to better diagnosis, treatment, and a broader
                social acceptance. This understanding is key to improving quality of life for those affected.
              </p>
              <div className="adhd-publish-info">Published on 22.12.2023 • Updated on 11.01.2024</div>

              <div className="adhd-author-info">
                <div className="adhd-author-avatar">
                  <img src="/503708736_122100749948899610_5999541274990696006_n.jpg" alt="Author Avatar" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%'}} />
                </div>
                <div className="adhd-author-details">
                  <div className="adhd-author-name">Written by Taylor Hackett</div>
                  <div className="adhd-author-title">Mental Health Writer and ADHD Expert</div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Section */}
        <main className="adhd-main-content">
          <div className="adhd-content-wrapper">
            {/* Sidebar */}
            <aside className="adhd-sidebar">
              <h3>In this Article</h3>
              <nav className="adhd-article-nav">
                <a href="#symptoms" className="adhd-nav-item">
                  Knowing Beyond the ADHD Symptoms
                </a>
                <a href="#myths" className="adhd-nav-item">
                  When Things Are Going Against You
                </a>
                <a href="#awareness" className="adhd-nav-item">
                  ADHD Awareness Play: Frequently Asked Questions
                </a>
              </nav>

              <div className="adhd-cta-section">
                <div className="adhd-cta-illustration">
                  <div className="adhd-cta-book"></div>
                </div>
                <h4>Improve your ADHD Diagnosis Experience!</h4>
                <p>
                  We have created an ADHD Self-Assessment Workbook designed to help you navigate the diagnosis process. Whether you suspect you have ADHD or it should be used alongside your diagnosis process to inform your decision and help you.
                </p>
                <button className="adhd-cta-button">Learn more</button>
              </div>
            </aside>

            {/* Main Article */}
            <article className="adhd-article-content">
              <section id="symptoms">
                <h2>Knowing Beyond the ADHD Symptoms</h2>
                <p>
                  How do we <strong>fully understand</strong> Attention Deficit Hyperactivity Disorder (ADHD) that
                  possibly affects millions of children and adults around the world? It is important to know
                  that ADHD is not something that just affects children but it's a lifelong condition. So what is
                  ADHD? What can we positively contribute to raise further awareness and prevent
                  misconceptions from spreading? These are the common questions when it comes to
                  <strong> ADHD awareness</strong>. 🧠
                </p>
              </section>

              <div className="adhd-illustration-section">
                <div className="adhd-myth-illustration">
                  <div className="adhd-speech-bubble">
                    <p className="adhd-myth-text">BECAUSE SOME PEOPLE STILL THINK ADHD IS NOT REAL...</p>
                    <p className="adhd-question-text">ARE YOU SURE YOU'RE NOT JUST LAZY?</p>
                  </div>
                  <div className="adhd-characters">
                    <div className="adhd-character-1">
                      <div className="adhd-char-head adhd-blue"></div>
                      <div className="adhd-char-body"></div>
                    </div>
                    <div className="adhd-character-2">
                      <div className="adhd-char-head adhd-pink"></div>
                      <div className="adhd-char-body"></div>
                    </div>
                  </div>
                </div>
              </div>

              <section className="adhd-disorder-info" id="myths">
                <p>
                  <strong>Attention Deficit Hyperactivity Disorder</strong> is a neurodivergent condition that can
                  affect a person's life in numerous ways. Some adults with ADHD exhibit{" "}
                  <strong>hyperactive-impulsive symptoms</strong> while others can be <strong>inattentive</strong>,
                  missing out on important details, or making careless mistakes. Sometimes people with ADHD can have a combination of both.
                  Kids with ADHD may exhibit the same symptoms, but it can also be more challenging
                  for them to focus and control their emotions. Considering how young they are, children
                  kids with childhood ADHD can have{" "}
                  <a href="#" className="adhd-link">
                    learning disabilities
                  </a>{" "}
                  when their condition is not properly diagnosed and treated early on.
                </p>
                
                <p>
                  But why is there a need to discuss and share information regarding Attention Deficit
                  Hyperactivity Disorder? What are the positive and negative effects of not spreading
                  knowledge about ADHD? More than this how to better the individual with ADHD can
                </p>
              </section>

              <section id="awareness">
                <h2>Understanding ADHD Types</h2>
                <div className="adhd-adhd-types">
                  <div className="adhd-type-item">
                    <h3>🎯 Inattentive Type</h3>
                    <p>Difficulty focusing, easily distracted, forgetful in daily activities. This type is often missed, especially in girls and women.</p>
                  </div>
                  
                  <div className="adhd-type-item">
                    <h3>⚡ Hyperactive-Impulsive Type</h3>
                    <p>Restlessness, difficulty sitting still, acting without thinking. More commonly recognized and diagnosed.</p>
                  </div>
                  
                  <div className="adhd-type-item">
                    <h3>🔄 Combined Type</h3>
                    <p>Shows symptoms of both inattentive and hyperactive-impulsive types. This is the most common presentation.</p>
                  </div>
                </div>
              </section>

              <section>
                <h2>Getting Help and Support</h2>
                <p>
                  If you suspect you or someone you know has ADHD, it's important to seek professional help. 
                  A comprehensive evaluation by a qualified healthcare provider can provide clarity and open 
                  doors to effective treatment options.
                </p>

                <div className="adhd-help-resources">
                  <div className="adhd-resource">
                    <h4>🏥 Medical Professionals</h4>
                    <p>Psychiatrists, psychologists, and specialized ADHD clinics</p>
                  </div>
                  
                  <div className="adhd-resource">
                    <h4>📚 Educational Resources</h4>
                    <p>Books, websites, and research-based information</p>
                  </div>
                  
                  <div className="adhd-resource">
                    <h4>👥 Support Groups</h4>
                    <p>Online communities and local support groups</p>
                  </div>
                </div>
              </section>
            </article>
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
};

export default AboutADHD;