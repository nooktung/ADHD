import React from 'react';
import '../css/LandingPage.css';

const LandingPage = () => {
    return (
        <>
            {/* Header */}
            <header className="header">
                <nav className="nav-container">
                    <div className="logo">
                        <span className="logo-icon">🧠</span>
                        ADHD Self-Assessment Workbook
                    </div>
                    <ul className="nav-menu">
                        <li><a href="#home">ADHD Resources</a></li>
                        <li><a href="#shop">Shop</a></li>
                        <li><a href="#about">About us</a></li>
                    </ul>
                    <div className="nav-actions">
                        <input type="text" className="search-box" placeholder="Learn to find..." />
                        <button className="btn-primary">Search</button>
                        <button className="btn-secondary">Start ADHD test</button>
                    </div>
                </nav>
            </header>

            {/* Hero Section */}
            <section className="hero">
                <div className="hero-container">
                    <div className="hero-content">
                        <h1>Take Our Free ADHD Test: Visualize Your ADHD Traits</h1>
                        <p>Learn where you land on the ADHD spectrum by answering 28 questions inspired by the Adult Self-Report Scale (ASRS).</p>
                        <button className="btn-primary">Take a Free ADHD Test</button>
                    </div>
                    <div className="hero-visual">
                        <h3>Visualize your ADHD traits!</h3>
                        <div className="visual-cards">
                            <div className="card-row">
                                <div className="trait-card">
                                    <div className="stars">★★★★★</div>
                                    <small>Hyperactivity</small>
                                </div>
                                <div className="trait-card">
                                    <div className="stars">★★★☆☆</div>
                                    <small>Attention</small>
                                </div>
                            </div>
                            <div className="card-row">
                                <div className="trait-card">
                                    <div className="stars">★★★★☆</div>
                                    <small>Impulsivity</small>
                                </div>
                                <div className="trait-card">
                                    <div className="stars">★★☆☆☆</div>
                                    <small>Executive Function</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features">
                <div className="features-container">
                    <h2>Learn about ADHD with our illustrated content!</h2>
                    <p className="features-subtitle">We combine all traits to help you understand and find out something about yourself.</p>
                    
                    <div className="features-layout">
                        {/* Left Column */}
                        <div className="left-column">
                            <span className="cute-brain">🧠</span>
                            <h3 className="brand-title">ADHD & Cute</h3>
                            <p className="question-text">Do you think you may have ADHD?</p>
                            <p className="subtitle-text">ADHD explained - Learn the facts</p>
                            <p className="description-text">Do you think someone else should get assessed for ADHD? Send them our content to read! Raising early awareness for neurodivergency is crucial. We make learning about ADHD informative and accessible.</p>
                        </div>

                        {/* Right Column - 4 Cards Grid */}
                        <div className="features-grid">
                            <div className="feature-card adhd">
                                <span className="feature-emoji">🎀</span>
                                <h3>ADHD</h3>
                                <p>Basic Info</p>
                            </div>
                            <div className="feature-card diagnosis">
                                <span className="feature-emoji">📊</span>
                                <h3>ADHD Diagnosis</h3>
                                <p>Getting Assessed</p>
                            </div>
                            <div className="feature-card symptoms">
                                <span className="feature-emoji">⚡</span>
                                <h3>ADHD Symptoms</h3>
                                <p>Signs & Traits</p>
                            </div>
                            <div className="feature-card living">
                                <span className="feature-emoji">💖</span>
                                <h3>Living with ADHD</h3>
                                <p>Daily Life Tips</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="cta-box">
                        <h3>Start your ADHD Diagnosis Journey!</h3>
                        <p>Get the answers you are looking for and make your ADHD self-assessment workbook with our specialized content.</p>
                        <button className="btn-primary">Get The ADHD Assessment Workbook</button>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="stats">
                <div className="stats-container">
                    <div className="stats-content">
                        <h2>Why it's critical to raise awareness about ADHD:</h2>
                        <div className="stat-item">
                            <div className="stat-number">5%</div>
                            <div className="stat-description">of adults have ADHD based on studies</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">80%</div>
                            <div className="stat-description">of adults with ADHD are not diagnosed</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">75%</div>
                            <div className="stat-description">of diagnosed adults with ADHD are never treated</div>
                        </div>
                    </div>
                    <div className="stats-visual">
                        <span className="cute-character">🧠</span>
                        <h3>Could it be ADHD?</h3>
                        <p>ADHD Self-Assessment Workbook</p>
                        <button className="btn-primary">Download Assessment Workbook</button>
                    </div>
                </div>
            </section>

            {/* Blog Section */}
            <section className="blog">
                <div className="blog-container">
                    <h2>🌟 Fresh Off The Press! 🌟</h2>
                    <div className="blog-grid">
                        <div className="blog-card parenting">
                            <span className="blog-emoji">👨‍👩‍👧‍👦</span>
                            <h3>PARENTING with ADHD</h3>
                            <p>Supporting Parents with ADHD: Empowering Neurodivergent Parents and Their Families</p>
                        </div>
                        <div className="blog-card elderly">
                            <span className="blog-emoji">👵</span>
                            <h3>ADHD ELDERLY</h3>
                            <p>Helping ADHD in Later Life: Understanding its Impact on Elderly Adults</p>
                        </div>
                        <div className="blog-card myths">
                            <span className="blog-emoji">5️⃣</span>
                            <h3>5 ADHD MYTHS</h3>
                            <p>Debunking ADHD Myths: Dispelling the Myths and Misconceptions</p>
                        </div>
                        <div className="blog-card tech">
                            <span className="blog-emoji">🤖</span>
                            <h3>ADHD Tech</h3>
                            <p>ADHD by the Numbers: The Latest in ADHD Technology and Apps</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Visual Traits Section */}
            <section className="visual-traits">
                <div className="visual-traits-container">
                    <h2>Visualize your ADHD traits!</h2>
                    <p>Track your progress and understand your unique ADHD profile with our comprehensive assessment tools.</p>
                    <div className="hero-visual">
                        <div className="visual-cards">
                            <div className="card-row">
                                <div className="trait-card">
                                    <div className="stars">★★★★★</div>
                                    <small>Focus</small>
                                </div>
                                <div className="trait-card">
                                    <div className="stars">★★★☆☆</div>
                                    <small>Organization</small>
                                </div>
                            </div>
                            <div className="card-row">
                                <div className="trait-card">
                                    <div className="stars">★★★★☆</div>
                                    <small>Time Management</small>
                                </div>
                                <div className="trait-card">
                                    <div className="stars">★★☆☆☆</div>
                                    <small>Planning</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="btn-primary">Take The ADHD Self Test</button>
                </div>
            </section>

            {/* Stories Section */}
            <section className="stories">
                <div className="stories-container">
                    <h2>Read our latest ADHD Diagnosis Stories!</h2>
                    <p className="stories-subtitle">Members of our community share their ADHD identification stories</p>
                    
                    <div className="stories-grid">
                        <div className="story-card">
                            <div className="story-header">
                                <div className="story-avatar">J</div>
                                <div>
                                    <div className="story-name">Jenna</div>
                                    <div className="story-location">Jenna diagnosed with ADHD at 16 in the United States</div>
                                </div>
                            </div>
                            <p className="story-question">What made you decide to have your diagnosis?</p>
                            <p>I struggled throughout my childhood with attention and hyperactivity issues. When I finally got diagnosed at 16, everything started to make sense. The assessment helped me understand myself better and get the support I needed.</p>
                            <div className="story-scores">
                                <div className="score-item">
                                    <div className="score-number">17</div>
                                    <div className="score-label">United States</div>
                                </div>
                            </div>
                            <button className="btn-secondary">Read Jenna's story</button>
                        </div>

                        <div className="story-card">
                            <div className="story-header">
                                <div className="story-avatar">M</div>
                                <div>
                                    <div className="story-name">Mick</div>
                                    <div className="story-location">Mick diagnosed with ADHD at 31 in Indonesia</div>
                                </div>
                            </div>
                            <p className="story-question">What made you decide to have your diagnosis?</p>
                            <p>Getting diagnosed as an adult was life-changing. I always thought I was just disorganized and lazy. Understanding ADHD helped me develop better coping strategies and improved my quality of life significantly.</p>
                            <div className="story-scores">
                                <div className="score-item">
                                    <div className="score-number">16</div>
                                    <div className="score-label">Indonesia</div>
                                </div>
                            </div>
                            <button className="btn-secondary">Read Mick's story</button>
                        </div>

                        <div className="story-card">
                            <div className="story-header">
                                <div className="story-avatar">L</div>
                                <div>
                                    <div className="story-name">Lyndy</div>
                                    <div className="story-location">Lyndy diagnosed with ADHD at 27 in Ireland</div>
                                </div>
                            </div>
                            <p className="story-question">What made you decide to have your diagnosis?</p>
                            <p>I was struggling with work and relationships. After learning about ADHD online, I recognized many symptoms in myself. The diagnosis process was thorough and the results helped me access proper treatment and support.</p>
                            <div className="story-scores">
                                <div className="score-item">
                                    <div className="score-number">27</div>
                                    <div className="score-label">Ireland</div>
                                </div>
                            </div>
                            <button className="btn-secondary">Read Lyndy's story</button>
                        </div>

                        <div className="story-card">
                            <div className="story-header">
                                <div className="story-avatar">K</div>
                                <div>
                                    <div className="story-name">Kristi</div>
                                    <div className="story-location">Kristi diagnosed with ADHD at 31 in South Africa</div>
                                </div>
                            </div>
                            <p className="story-question">What made you decide to have your diagnosis?</p>
                            <p>After years of feeling different and struggling with focus, I decided to seek help. The comprehensive assessment revealed ADHD, and now I have tools and strategies that actually work for my brain.</p>
                            <div className="story-scores">
                                <div className="score-item">
                                    <div className="score-number">31</div>
                                    <div className="score-label">South Africa</div>
                                </div>
                            </div>
                            <button className="btn-secondary">Read Kristi's story</button>
                        </div>
                    </div>

                    <div className="scroll-buttons">
                        <button className="scroll-button" onClick={() => {
                            const container = document.querySelector('.stories-grid');
                            container.scrollBy({ left: -400, behavior: 'smooth' });
                        }}>
                            ←
                        </button>
                        <button className="scroll-button" onClick={() => {
                            const container = document.querySelector('.stories-grid');
                            container.scrollBy({ left: 400, behavior: 'smooth' });
                        }}>
                            →
                        </button>
                    </div>
                </div>
            </section>

            {/* Coach Section */}
            <section className="coach">
                <div className="coach-container">
                    <h2>What the mini ADHD Coach is all about</h2>
                    <p className="coach-subtitle">Supporting your ADHD journey with evidence-based resources and community</p>
                    
                    <div className="coach-stats">
                        <div className="coach-stat">
                            <div className="coach-stat-number">500+</div>
                            <div className="coach-stat-text">Evidence-based articles helping you understand ADHD</div>
                        </div>
                        <div className="coach-stat">
                            <div className="coach-stat-number">530k</div>
                            <div className="coach-stat-text">People reached with ADHD awareness content</div>
                        </div>
                        <div className="coach-stat">
                            <div className="coach-stat-number">150+</div>
                            <div className="coach-stat-text">Success stories and testimonials from our community</div>
                        </div>
                        <div className="coach-stat">
                            <div className="coach-stat-number">17k+</div>
                            <div className="coach-stat-text">Downloads of our assessment workbooks and resources</div>
                        </div>
                    </div>

                    <div className="coach-visual-center">
                        <span className="cute-character">🧠</span>
                        <h3>Could it be ADHD?</h3>
                        <p>Start your ADHD Diagnosis Journey!</p>
                        <p>Get the answers you are looking for and fill out your ADHD self-assessment workbook with our specialized content made with cuteness and science.</p>
                        <button className="btn-primary">Get The ADHD Assessment Workbook</button>
                    </div>
                </div>
            </section>

            {/* Social Media Section */}
            <section className="social">
                <div className="social-container">
                    <h2>Follow @the_mini_adhd_coach on Social Media!</h2>
                    <p className="social-subtitle">Check out our daily educational content!</p>
                    
                    <div className="social-grid">
                        <div className="social-post post1">
                            <span className="social-emoji">🧠</span>
                            <h4>ADHD DOPAMINE</h4>
                            <p>Understanding your brain's reward system</p>
                        </div>
                        <div className="social-post post2">
                            <span className="social-emoji">📱</span>
                            <h4>ADHD AT WORK</h4>
                            <p>Productivity tips for the workplace</p>
                        </div>
                        <div className="social-post post3">
                            <span className="social-emoji">💡</span>
                            <h4>ADHD MYSTERY FUNCTION</h4>
                            <p>Exploring executive function challenges</p>
                        </div>
                        <div className="social-post post4">
                            <span className="social-emoji">📚</span>
                            <h4>LEARNING WITH ADHD</h4>
                            <p>Study strategies that actually work</p>
                        </div>
                        <div className="social-post post5">
                            <span className="social-emoji">💖</span>
                            <h4>ADHD SELF-CARE</h4>
                            <p>Taking care of your neurodivergent brain</p>
                        </div>
                        <div className="social-post post6">
                            <span className="social-emoji">⭐</span>
                            <h4>ADHD LIFESTYLE</h4>
                            <p>Living your best ADHD life</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="final-cta">
                <div className="final-cta-container">
                    <span className="cute-character">🧠</span>
                    <h2>We still have so much to learn about ADHD</h2>
                    <p>Regardless of where you are in your ADHD Journey we can guarantee that you can learn from our content. How can we guarantee that? We've been writing ADHD content for years now and we still learn something new every time.</p>
                    <button className="btn-primary">Check out our ADHD Blog</button>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="footer-container">
                    <div>
                        <div className="footer-brand">
                            <span className="footer-brand-emoji">🧠</span>
                            The_mini_adhd_coach
                        </div>
                        <p>ADHD explained with cute doodles</p>
                        <p>Getting diagnosed with ADHD at 29 changed my life and inspired me to help others like me. Seeing so much interest in my doodles on Instagram encouraged me to do even more so I created this website to do just that.</p>
                        <p>#ADHD explained with cute doodles</p>
                        <div className="social-icons">
                            <a href="#" className="social-icon">📘</a>
                            <a href="#" className="social-icon">📷</a>
                            <a href="#" className="social-icon">🐦</a>
                            <a href="#" className="social-icon">💼</a>
                            <a href="#" className="social-icon">🎵</a>
                        </div>
                    </div>
                    
                    <div className="footer-section">
                        <h3>Legal</h3>
                        <ul>
                            <li><a href="#">Privacy policy</a></li>
                            <li><a href="#">Terms and conditions</a></li>
                            <li><a href="#">Cookie policy</a></li>
                        </ul>
                    </div>
                    
                    <div className="footer-section">
                        <h3>ADHD Resources</h3>
                        <ul>
                            <li><a href="#">ADHD Awareness</a></li>
                            <li><a href="#">ADHD Diagnosis</a></li>
                            <li><a href="#">ADHD Symptoms</a></li>
                            <li><a href="#">Living with ADHD</a></li>
                        </ul>
                        <p>Browse all our articles about ADHD →</p>
                        
                        <h3>Newsletter</h3>
                        <div className="newsletter">
                            <input type="email" placeholder="Your email address" />
                            <button className="btn-secondary">Subscribe</button>
                        </div>
                    </div>
                </div>
                
                <div className="footer-bottom">
                    <p>Website by Sofia Odyssey</p>
                </div>
            </footer>
        </>
    );
};

export default LandingPage;