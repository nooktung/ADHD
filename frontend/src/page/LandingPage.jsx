import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/LandingPage.css';

const LandingPage = () => {
    return (
        <>
            <Header />

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

            {/* Features Section - New Layout */}
            <section className="features">
                <div className="features-container">
                    <h2>Learn about ADHD with our illustrated content!</h2>
                    <p className="features-subtitle">We combine all traits to help you understand and find out something about yourself.</p>
                    
                    <div className="features-new-layout">
                        {/* Left Large Card */}
                        <div className="left-large-card">
                            <div className="cute-brain-container">
                                <span className="cute-brain">🧠</span>
                                <div className="brand-badge">ADHD & CUTE</div>
                            </div>
                            <h3 className="main-question">Do you think you may have ADHD?</h3>
                            <p className="subtitle-text">We created a free test based on the official ADHD symptoms described in the DSM-V to give you a sense of how likely you are to be ADHD, and what type of ADHD (Hyperactive-Impulsive, Inattentive or Combined).</p>
                            <button className="cta-button">Try our Free ADHD Test</button>
                        </div>

                        {/* Right Section */}
                        <div className="right-section">
                            {/* Top 4 Small Cards */}
                            <div className="small-cards-grid">
                                <div className="small-card adhd-awareness">
                                    <div className="card-icon">
                                        <span>🎀</span>
                                    </div>
                                    <h4>ADHD Awareness</h4>
                                </div>
                                <div className="small-card adhd-diagnosis">
                                    <div className="card-icon">
                                        <span>👨‍⚕️</span>
                                    </div>
                                    <h4>ADHD Diagnosis</h4>
                                </div>
                                <div className="small-card adhd-symptoms">
                                    <div className="card-icon">
                                        <span>📋</span>
                                    </div>
                                    <h4>ADHD Symptoms</h4>
                                </div>
                                <div className="small-card living-adhd">
                                    <div className="card-icon">
                                        <span>👥</span>
                                    </div>
                                    <h4>Living with ADHD</h4>
                                </div>
                            </div>

                            {/* Bottom Horizontal Card */}
                            <div className="horizontal-card">
                                <div className="horizontal-card-content">
                                    <div className="workbook-icon">
                                        <span>📖</span>
                                    </div>
                                    <div className="workbook-text">
                                        <h3>Start your ADHD Diagnosis journey!</h3>
                                        <p>Get the answers you are looking for and unlock your fullest potential with the ADHD self-assessment workbook!</p>
                                        <a href="#" className="workbook-link">Get the ADHD Self-Assessment Workbook</a>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                            <div className="stat-description">of adults have ADHD based on recent studies</div>
                            <p className="stat-detail">Approximately 8 million adults in the United States are affected by ADHD. ADHD does not affect just children.</p>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">80%</div>
                            <div className="stat-description">of adults with ADHD are not diagnosed</div>
                            <p className="stat-detail">Symptoms of adult ADHD can be misconstrued as those associated with depression, anxiety, or bipolar disorder.</p>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">75%</div>
                            <div className="stat-description">of diagnosed adults with ADHD are not getting treatment</div>
                            <p className="stat-detail">This is due to a lack of understanding of ADHD, costly treatment expenses not always covered by insurance, and the stigma that ADD/ADHD still carries in some areas.</p>
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

            <Footer />
        </>
    );
};

export default LandingPage;