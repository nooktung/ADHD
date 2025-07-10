import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/AboutADHD.css';
import RelatedArticles from './RelatedArticles';

// ADHD Flashcards Component
const ADHDFlashcards = () => {
    const [flippedCards, setFlippedCards] = useState({});

    const flashcards = [
        {
            id: 1,
            front: "Khó khăn trong việc giữ yên và luôn trong trạng thái bồn chồn (Fidgeting)",
            back: "Các hành vi như liên tục cựa quậy, gõ ngón tay, rung chân khi ngồi là biểu hiện của một bộ não ADHD tăng động. Khi không thể ngồi yên, hệ thần kinh đang ở trạng thái kích thích quá mức và cố gắng tìm cách giải tỏa năng lượng. Biểu hiện này ở trẻ em rất dễ nhận biết: chúng thường không ngồi yên trên ghế, táy máy chân tay, nghịch mọi đồ vật trong tầm với. Ở người lớn, triệu chứng có thể biểu hiện kín đáo hơn như rung chân, đi đi lại lại khi nói chuyện điện thoại, hoặc bấm bút liên tục."
        },
        {
            id: 2,
            front: "Khó khăn trong việc thư giãn",
            back: "Do không thể giải tỏa năng lượng dư thừa, người bệnh thường gặp khó khăn trong việc thư giãn thực sự. Ngay cả trong trạng thái không hoạt động, não bộ vẫn có thể duy trì hoạt động ở cường độ cao với vô số ý tưởng hoặc các dòng suy nghĩ miên man, dẫn đến tình trạng khó thư giãn."
        },
        {
            id: 3,
            front: "Nói nhiều quá mức (Excessive Talking)",
            back: "Hành vi bốc đồng là một tiêu chí chẩn đoán cốt lõi. Sự suy giảm khả năng tự kiểm soát và nhận thức các tín hiệu xã hội khiến người bệnh có thể nói liên tục mà không nhận biết được thời điểm hoặc bối cảnh phù hợp. Một khi đã bắt đầu, họ rất khó để dừng lại. Họ có xu hướng chia sẻ thông tin cá nhân quá mức hoặc nói chuyện không ngừng nghỉ, gây ra xung đột trong các mối quan hệ xã hội."
        },
        {
            id: 4,
            front: "Tình trạng mệt mỏi và kiệt sức mạn tính",
            back: "Một quan niệm sai lầm phổ biến là người mắc ADHD luôn tràn đầy năng lượng. Thực tế, do tình trạng não bộ liên tục ở trạng thái \"tăng tốc\" và khó thư giãn, họ thường xuyên cảm thấy mệt mỏi và kiệt sức. Sự tăng động của não bộ cản trở quá trình nghỉ ngơi và phục hồi năng lượng, đặc biệt là chất lượng giấc ngủ, dẫn đến tình trạng thiếu năng lượng vào ngày hôm sau."
        },
        {
            id: 5,
            front: "Ngắt lời và buột miệng trả lời (Interrupting & Blurting Out)",
            back: "Đây là một biểu hiện kinh điển của tính bốc đồng. Người bệnh có thể không chờ người khác nói xong, nói xen vào hoặc trả lời trước khi câu hỏi được đặt ra hoàn chỉnh. Ở trẻ em, hành vi này thường bị coi là \"gây rối\" trong lớp học. Ở người lớn, điều này gây khó khăn trong các cuộc họp hoặc giao tiếp xã hội. Nguyên nhân sâu xa là do sự suy giảm khả năng ức chế phản ứng (impulse control) và nỗi sợ quên mất ý định muốn nói. Mặc dù người có sự phát triển thần kinh điển hình (neurotypical) cũng có thể ngắt lời, nhưng ở người mắc ADHD, hành vi này xảy ra với tần suất, cường độ cao hơn và gây ảnh hưởng tiêu cực đến các mối quan hệ và hoạt động chức năng."
        },
        {
            id: 6,
            front: "Các hành vi nguy cơ cao (Risky Behaviors)",
            back: "Các triệu chứng tăng động - bốc đồng là nền tảng cho các hành vi nguy cơ cao như lái xe thiếu an toàn, chi tiêu không kiểm soát, hoặc lạm dụng chất. Nếu người bệnh đang phải đối mặt với các hành vi này, việc tìm kiếm sự can thiệp từ chuyên gia là tối quan trọng."
        }
    ];

    const toggleCard = (cardId) => {
        setFlippedCards(prev => ({
            ...prev,
            [cardId]: !prev[cardId]
        }));
    };

    return (
        <>
            <style jsx>{`
                .flashcards-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
                    gap: 25px;
                    max-width: 1200px;
                    margin: 0 auto;
                }

                .flashcard {
                    height: 280px;
                    perspective: 1000px;
                }

                .flashcard-inner {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    text-align: center;
                    transition: transform 0.6s ease-in-out;
                    transform-style: preserve-3d;
                    cursor: pointer;
                }

                .flashcard-inner.flipped {
                    transform: rotateX(180deg);
                }

                .flashcard-front, .flashcard-back {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    backface-visibility: hidden;
                    border-radius: 16px;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 20px;
                    box-sizing: border-box;
                }

                .flashcard-front {
                    background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
                    border: 2px solid #e9ecef;
                }

                .flashcard-back {
                    background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
                    color: white;
                    transform: rotateX(180deg);
                }

                .flashcard-content {
                    text-align: center;
                    width: 100%;
                }

                .flashcard-front .flashcard-content h4 {
                    font-size: 1.2rem;
                    margin: 0;
                    color: #2c3e50;
                    font-weight: 600;
                    line-height: 1.4;
                }

                .flashcard-back .flashcard-content p {
                    font-size: 0.9rem;
                    line-height: 1.5;
                    margin: 0;
                    text-align: left;
                    color: white;
                }

                .flip-hint {
                    position: absolute;
                    bottom: 15px;
                    right: 15px;
                    background: rgba(0, 0, 0, 0.1);
                    padding: 5px 10px;
                    border-radius: 20px;
                    font-size: 0.8rem;
                    color: #666;
                }

                .flashcard-back .flip-hint {
                    color: rgba(255, 255, 255, 0.8);
                    background: rgba(255, 255, 255, 0.2);
                }

                .card-number {
                    position: absolute;
                    top: 15px;
                    left: 15px;
                    background: #007bff;
                    color: white;
                    width: 30px;
                    height: 30px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: bold;
                    font-size: 0.9rem;
                }

                .flashcard-back .card-number {
                    background: rgba(255, 255, 255, 0.3);
                }

                .progress-bar {
                    margin-bottom: 20px;
                    background: rgba(255, 255, 255, 0.2);
                    border-radius: 10px;
                    overflow: hidden;
                    height: 8px;
                    max-width: 400px;
                    margin-left: auto;
                    margin-right: auto;
                }

                .progress-fill {
                    height: 100%;
                    background: linear-gradient(90deg, #00f2fe, #4facfe);
                    width: ${(Object.keys(flippedCards).filter(key => flippedCards[key]).length / flashcards.length) * 100}%;
                    transition: width 0.3s ease;
                }

                @media (max-width: 768px) {
                    .flashcards-grid {
                        grid-template-columns: 1fr;
                        gap: 20px;
                        padding: 0 10px;
                    }
                    
                    .flashcard {
                        height: 250px;
                    }
                    
                    .flashcard-front .flashcard-content h4 {
                        font-size: 1.1rem;
                    }
                    
                    .flashcard-back .flashcard-content p {
                        font-size: 0.85rem;
                    }
                }
            `}</style>

            <div className="progress-bar">
                <div className="progress-fill"></div>
            </div>
            <p style={{ fontSize: '0.9rem', marginBottom: '25px', opacity: 0.8, textAlign: 'center', color: 'white' }}>
                Đã xem: {Object.keys(flippedCards).filter(key => flippedCards[key]).length}/{flashcards.length} thẻ
            </p>

            <div className="flashcards-grid">
                {flashcards.map((card) => (
                    <div key={card.id} className="flashcard">
                        <div 
                            className={`flashcard-inner ${flippedCards[card.id] ? 'flipped' : ''}`}
                            onClick={() => toggleCard(card.id)}
                        >
                            <div className="flashcard-front">
                                <div className="card-number">{card.id}</div>
                                <div className="flashcard-content">
                                    <h4>{card.front}</h4>
                                </div>
                                <div className="flip-hint">👆 Nhấp để xem</div>
                            </div>
                            <div className="flashcard-back">
                                <div className="card-number">{card.id}</div>
                                <div className="flashcard-content">
                                    <p>{card.back}</p>
                                </div>
                                <div className="flip-hint">👆 Nhấp để đóng</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '30px', color: 'white' }}>
                <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>
                    💡 Mẹo: Hãy thử ghi nhớ nội dung trước khi lật thẻ để kiểm tra hiểu biết của bạn!
                </p>
            </div>
        </>
    );
};

const ADHDInattentive = () => {
    const [expandedFAQ, setExpandedFAQ] = useState(null);
    const [activeNav, setActiveNav] = useState('overview');

    const toggleFAQ = (index) => {
        setExpandedFAQ(expandedFAQ === index ? null : index);
    };

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const headerOffset = 120;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    const faqs = [
        {
            question: "Tại sao ADHD thể không chú ý thường bị bỏ sót?",
            answer: "ADHD thể không chú ý thiếu các biểu hiện tăng động và bốc đồng rõ rệt như các thể khác. Hầu hết các triệu chứng thuộc về mặt tinh thần, khó chẩn đoán dựa trên các hành vi bên ngoài. Mọi người khó có thể hiểu những gì họ không thể nhìn thấy."
        },
        {
            question: "Sự khác biệt giữa ADD và ADHD thể không chú ý là gì?",
            answer: "ADD (Attention Deficit Disorder) là thuật ngữ cũ được Hiệp hội Tâm thần học Hoa Kỳ cập nhật thành ADHD thể không chú ý chiếm ưu thế vào năm 1987. Về cơ bản, chúng đề cập đến cùng một tình trạng - ADHD thể không chú ý."
        },
        {
            question: "Làm thế nào để phân biệt ADHD thể không chú ý với việc chỉ đơn giản là mất tập trung?",
            answer: "ADHD thể không chú ý là một rối loạn phát triển thần kinh với các triệu chứng kéo dài, ảnh hưởng đến nhiều lĩnh vực của cuộc sống. Để được chẩn đoán, cần có ít nhất 5 triệu chứng (đối với người lớn) xuất hiện trước 12 tuổi và gây suy giảm chức năng đáng kể."
        },
        {
            question: "Có thể quản lý ADHD thể không chú ý mà không cần thuốc không?",
            answer: "Có thể. Việc quản lý có thể bao gồm thay đổi lối sống (tập thể dục, chế độ ăn), tạo thói quen, sử dụng công cụ hỗ trợ, trị liệu hành vi, và xây dựng hệ thống hỗ trợ. Tuy nhiên, nên tham khảo ý kiến chuyên gia để tìm phương pháp phù hợp nhất."
        }
    ];

    return (
        <>
            <style jsx>{`
        .adhd-symptom-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
          margin: 25px 0;
        }

        .adhd-symptom-card {
          background: #f2c2da;
          padding: 20px;
          border-radius: 12px;
          transition: all 0.3s ease;
        }

        .adhd-symptom-card:hover {
          transform: translateY(-3px);
          background: #edccf5;
        }

        .adhd-symptom-card h4 {
          color: var(--dark-slate-grey);
          margin-bottom: 10px;
          font-size: 16px;
          font-weight: 600;
        }

        .adhd-management-tips {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 18px;
          margin: 25px 0;
        }

        .adhd-tip-card {
          background: #caf2e5;
          padding: 18px;
          border-radius: 10px;
          transition: all 0.3s ease;
        }

        .adhd-tip-card:hover {
          background: #aeecf8;
        }

        .adhd-tip-card h4 {
          color: var(--dark-slate-grey);
          margin-bottom: 8px;
          font-size: 15px;
          font-weight: 600;
        }

        .adhd-tip-card p {
          font-size: 14px;
          line-height: 1.5;
          margin: 0;
        }

        .adhd-symptom-card:nth-child(odd) {
          background: #f2c2da;
        }

        .adhd-symptom-card:nth-child(even) {
          background: #edccf5;
        }

        .adhd-symptom-card:nth-child(3n) {
          background: #caf2e5;
        }

        .adhd-symptom-card:nth-child(4n) {
          background: #aeecf8;
        }

        .adhd-symptom-card:nth-child(5n) {
          background: #fbf5ab;
        }

        .adhd-tip-card:nth-child(odd) {
          background: #caf2e5;
        }

        .adhd-tip-card:nth-child(even) {
          background: #aeecf8;
        }

        .adhd-tip-card:nth-child(3n) {
          background: #fbf5ab;
        }

        .adhd-tip-card:nth-child(4n) {
          background: #f2c2da;
        }

        .adhd-tip-card:nth-child(5n) {
          background: #edccf5;
        }

        .adhd-highlight-box {
          background: linear-gradient(135deg, rgba(242, 194, 218, 0.1), rgba(237, 204, 245, 0.1));
          border: 2px solid var(--primary-color);
          border-radius: 12px;
          padding: 20px;
          margin: 20px 0;
          position: relative;
        }

        .adhd-highlight-box::before {
          position: absolute;
          top: -10px;
          left: 20px;
          background: white;
          padding: 0;
          font-size: 20px;
        }

        @media (max-width: 768px) {
          .adhd-symptom-cards,
          .adhd-management-tips {
            grid-template-columns: 1fr;
            gap: 15px;
          }
          
          .adhd-symptom-card,
          .adhd-tip-card {
            padding: 15px;
          }
        }
      `}</style>
            <Header />
            <div className="adhd-adhd-page">
                {/* Header Section */}
                <div className="adhd-header-section">
                    <div className="adhd-header-content">
                        <div className="adhd-book-illustration">
                            <div className="adhd-book">
                                <img src="/image.png" alt="ADHD Thể Giảm chú ý" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} />
                            </div>
                        </div>

                        <div className="adhd-header-text">
                            <div className="adhd-category">
                                Nhóm Alight • Hiểu Rõ ADHD
                            </div>

                            <h1 className="adhd-main-title">
                                Hiểu về các triệu chứng của ADHD Thể Giảm chú ý
                            </h1>

                            <p className="adhd-subtitle">
                                ADHD thể Giảm chú ý được đặc trưng bởi những khó khăn trong việc duy trì sự tập trung, tuân thủ các hướng dẫn chi tiết và tổ chức công việc. Khác với thể Tăng động - Bốc đồng, các cá nhân này có thể có vẻ ngoài như đang mơ mộng, tỏ ra không lắng nghe hoặc dễ bị phân tâm bởi các kích thích bên ngoài. Dạng ADHD này thường không được chú ý đến (hoặc dễ bị bỏ sót) vì nó thiếu các biểu hiện tăng động và bốc đồng rõ rệt như các thể khác. Do đó, việc các nhà giáo dục và người chăm sóc có thể nhận ra những dấu hiệu kín đáo hơn này là cực kỳ quan trọng để cung cấp sự hỗ trợ và can thiệp phù hợp.
                            </p>

                            <div className="adhd-publish-info">
                                Xuất bản ngày 24.06.2025 • Cập nhật ngày 26.06.2025
                            </div>

                            <div className="adhd-author-info">
                                <div className="adhd-author-avatar">
                                    <img src="/teamname.jpg" alt="Nhóm Alight" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
                                </div>
                                <div>
                                    <div className="adhd-author-name">
                                        Nhóm Alight
                                    </div>
                                    <div className="adhd-author-title">
                                        Nhóm nghiên cứu và phát triển nội dung ADHD
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="adhd-main-content">
                    <div className="adhd-content-wrapper">

                        {/* Fixed Sidebar */}
                        <aside className="adhd-sidebar">
                            {/* Navigation Block */}
                            <div className="adhd-sidebar-navblock">
                                <h3>Trong Bài Viết Này</h3>
                                <nav className="adhd-article-nav">
                                    <a
                                        href="#overview"
                                        className={`adhd-nav-item${activeNav === 'overview' ? ' active' : ''}`}
                                        onClick={(e) => { e.preventDefault(); setActiveNav('overview'); scrollToSection('overview'); }}
                                    >
                                        Cảm Thấy Mất Tập Trung? Liệu Đó Có Phải Là ADHD Thể Không Chú Ý?
                                    </a>
                                    <a
                                        href="#what-is"
                                        className={`adhd-nav-item${activeNav === 'what-is' ? ' active' : ''}`}
                                        onClick={(e) => { e.preventDefault(); setActiveNav('what-is'); scrollToSection('what-is'); }}
                                    >
                                        ADHD Thể Không Chú Ý là gì?
                                    </a>
                                    <a
                                        href="#symptoms-criteria"
                                        className={`adhd-nav-item${activeNav === 'symptoms-criteria' ? ' active' : ''}`}
                                        onClick={(e) => { e.preventDefault(); setActiveNav('symptoms-criteria'); scrollToSection('symptoms-criteria'); }}
                                    >
                                        Các Triệu chứng và Tiêu chí của ADHD Thể Không Chú Ý
                                    </a>
                                    <a
                                        href="#symptoms"
                                        className={`adhd-nav-item${activeNav === 'symptoms' ? ' active' : ''}`}
                                        onClick={(e) => { e.preventDefault(); setActiveNav('symptoms'); scrollToSection('symptoms'); }}
                                    >
                                        Các Triệu chứng Không Chú Ý Phổ Biến
                                    </a>
                                    <a
                                        href="#challenges"
                                        className={`adhd-nav-item${activeNav === 'challenges' ? ' active' : ''}`}
                                        onClick={(e) => { e.preventDefault(); setActiveNav('challenges'); scrollToSection('challenges'); }}
                                    >
                                        Những thách thức và hiểu lầm xung quanh ADHD Thể không chú ý
                                    </a>
                                    <a
                                        href="#personal-story"
                                        className={`adhd-nav-item${activeNav === 'personal-story' ? ' active' : ''}`}
                                        onClick={(e) => { e.preventDefault(); setActiveNav('personal-story'); scrollToSection('personal-story'); }}
                                    >
                                        Câu chuyện chẩn đoán cá nhân và những thách thức của tôi
                                    </a>
                                    <a
                                        href="#management"
                                        className={`adhd-nav-item${activeNav === 'management' ? ' active' : ''}`}
                                        onClick={(e) => { e.preventDefault(); setActiveNav('management'); scrollToSection('management'); }}
                                    >
                                        Các chiến lược và phương pháp điều trị hiệu quả để quản lý ADHD Thể không chú ý
                                    </a>
                                    <a
                                        href="#key-points"
                                        className={`adhd-nav-item${activeNav === 'key-points' ? ' active' : ''}`}
                                        onClick={(e) => { e.preventDefault(); setActiveNav('key-points'); scrollToSection('key-points'); }}
                                    >
                                        Những điểm chính cần ghi nhớ
                                    </a>
                                </nav>
                            </div>

                            {/* CTA Block */}
                            <div className="adhd-sidebar-ctablock">
                                <div className="adhd-cta-section">
                                    <div className="adhd-cta-illustration" style={{ marginBottom: '1rem' }}>
                                        <img src="/Hanbook.jpg" alt="Mai Thị Lan Anh" style={{ width: '150px', height: '200px', borderRadius: '4px', objectFit: 'cover', display: 'block', margin: '0 auto' }} />
                                    </div>
                                    <h4 style={{ textAlign: 'center' }}>Hiểu Rõ ADHD Thể Không Chú Ý!</h4>
                                    <p style={{ textAlign: 'center' }}>Chúng tôi cung cấp thông tin chi tiết về ADHD thể không chú ý - dạng thường bị bỏ sót nhưng rất phổ biến. Từ nhận diện triệu chứng đến chiến lược quản lý hiệu quả.</p>
                                    <a href="/hanbook" className="adhd-cta-button" style={{ display: 'block', margin: '0 auto' }}>
                                        Tìm hiểu thêm
                                    </a>
                                </div>
                            </div>
                        </aside>

                        {/* Main Article */}
                        <article className="adhd-article-content">

                            <section id="overview" className="adhd-section">
                                <h2>Cảm Thấy Mất Tập Trung? Liệu Đó Có Phải Là ADHD Thể Không Chú Ý?</h2>

                                <p>
                                    Trong một thế giới không ngừng đòi hỏi sự chú ý của chúng ta, việc cảm thấy mất tập trung triền miên có thể không chỉ đơn thuần là căng thẳng hàng ngày hay một đêm mất ngủ. Sẽ ra sao nếu đó là dấu hiệu của ADHD thể không chú ý? Dạng phụ này của ADHD thường ít được nhận diện, bị lu mờ bởi người anh em được nhắc đến nhiều hơn của nó, ADHD thể tăng động-xung động.
                                </p>

                                <p>
                                    Trong bài viết này, chúng ta sẽ tập trung vào ADHD thể không chú ý, bao gồm:
                                </p>

                                <div className="adhd-symptom-cards">
                                    <div className="adhd-symptom-card">
                                        <h4>Các triệu chứng cốt lõi của ADHD thể không chú ý giúp phân biệt nó với các loại khác.</h4>
                                    </div>
                                    <div className="adhd-symptom-card">
                                        <h4>Những thách thức và hiểu lầm xung quanh ADHD thể không chú ý.</h4>
                                    </div>
                                    <div className="adhd-symptom-card">
                                        <h4>Các chiến lược và phương pháp điều trị hiệu quả để quản lý ADHD Thể không chú ý.</h4>
                                    </div>
                                    <div className="adhd-symptom-card">
                                        <h4>Những câu chuyện truyền cảm hứng của các cá nhân đang phát triển mạnh mẽ cùng với ADHD Thể không chú ý.</h4>
                                    </div>
                                </div>

                                <p>
                                    Nếu bạn cần một sự thấu hiểu toàn diện hơn về dạng biểu hiện thường bị bỏ qua này, bài viết này là dành cho bạn. ⭐
                                </p>
                            </section>

                            <section id="what-is" className="adhd-section">
                                <h2>ADHD Thể Không Chú Ý là gì?</h2>

                                <p>
                                    ADHD thể không chú ý chiếm ưu thế là <strong>một trong ba loại ADHD</strong>, bên cạnh ADHD thể tăng động-xung động chiếm ưu thế và thể kết hợp (kết hợp các triệu chứng của cả hai).
                                </p>

                                <p>
                                    Nó chủ yếu biểu hiện qua việc <strong>khó duy trì sự chú ý</strong> hoặc tập trung, dẫn đến <strong>những lỗi sai bất cẩn</strong> hoặc khó khăn trong việc sắp xếp suy nghĩ và môi trường xung quanh. 💭
                                </p>

                                <p>
                                    Hầu hết các triệu chứng và tác động của nó đều thuộc về mặt tinh thần, vì vậy nó <strong>khó chẩn đoán hơn dựa trên các hành vi bên ngoài</strong>. Đó cũng là lý do tại sao nó bị hiểu lầm nhiều hơn - <strong>mọi người khó có thể hiểu những gì họ không thể nhìn thấy</strong>. 🙈
                                </p>
                            </section>

                            <section id="symptoms-criteria" className="adhd-section">
                                <h2>Các Triệu chứng và Tiêu chí của ADHD Thể Không Chú Ý</h2>

                                <p>
                                    ADHD được chẩn đoán bởi các chuyên gia y tế sử dụng <strong>Sổ tay Chẩn đoán và Thống kê các Rối loạn Tâm thần, Phiên bản thứ Năm (DSM-5)</strong> của Hiệp hội Tâm thần học Hoa Kỳ.
                                </p>

                                <p>
                                    Là một phần của quá trình đánh giá, bạn sẽ được yêu cầu <strong>mô tả các triệu chứng ADHD</strong> ảnh hưởng đến cuộc sống của bạn. Thực tế có <strong>hai bộ tiêu chí</strong>: một cho sự không chú ý, và một cho sự tăng động và xung động.
                                </p>

                                <p>
                                    Bạn sẽ được chẩn đoán với một trong ba dạng biểu hiện của ADHD dựa trên số lượng triệu chứng hiện có từ mỗi bộ tiêu chí.
                                </p>

                                <p>
                                    Dưới đây là <strong>các triệu chứng được liệt kê</strong> cho ADHD thể không chú ý chiếm ưu thế:
                                </p>

                                <div className="adhd-symptom-cards">
                                    <div className="adhd-symptom-card">
                                        <h4>Thường mắc phải những lỗi sai bất cẩn</h4>
                                    </div>
                                    <div className="adhd-symptom-card">
                                        <h4>Khó duy trì sự chú ý</h4>
                                    </div>
                                    <div className="adhd-symptom-card">
                                        <h4>Dường như không lắng nghe khi đang trò chuyện</h4>
                                    </div>
                                    <div className="adhd-symptom-card">
                                        <h4>Khó tuân thủ các chỉ dẫn</h4>
                                    </div>
                                    <div className="adhd-symptom-card">
                                        <h4>Gặp khó khăn trong việc sắp xếp, tổ chức</h4>
                                    </div>
                                    <div className="adhd-symptom-card">
                                        <h4>Không thích các nhiệm vụ đòi hỏi nỗ lực tinh thần kéo dài</h4>
                                    </div>
                                    <div className="adhd-symptom-card">
                                        <h4>Thường xuyên làm mất đồ</h4>
                                    </div>
                                    <div className="adhd-symptom-card">
                                        <h4>Dễ bị phân tâm và gặp khó khăn trong việc chú ý</h4>
                                    </div>
                                    <div className="adhd-symptom-card">
                                        <h4>Hay quên, ảnh hưởng đến các hoạt động hàng ngày</h4>
                                    </div>
                                </div>

                                <div className="adhd-highlight-box">
                                    <p>
                                        Để được chẩn đoán mắc ADHD khi là trẻ em đến 16 tuổi, phải có <strong>sáu triệu chứng trở lên</strong>. Đối với thanh thiếu niên và người lớn từ 17 tuổi trở lên, bạn sẽ cần phải biểu hiện <strong>năm triệu chứng trở lên</strong>.
                                    </p>
                                </div>

                                <p>
                                    Đối với ADHD thể không chú ý, việc chẩn đoán chủ yếu xem xét các triệu chứng <strong>không chú ý</strong>. Mặc dù <strong>một vài</strong> triệu chứng tăng động-xung động có thể tồn tại, chúng <strong>không đủ đáng kể</strong> để phân loại vào thể tăng động-xung động hoặc thể kết hợp.
                                </p>

                                <p>
                                    Nếu bạn biểu hiện <strong>đủ triệu chứng từ cả hai bộ tiêu chí này và tiêu chí cho ADHD thể tăng động-xung động</strong>, bạn sẽ được chẩn đoán là <strong>thể kết hợp</strong>.
                                </p>

                                <p>
                                    Hãy cùng khám phá chi tiết hơn về các triệu chứng cốt lõi này. 👇
                                </p>
                            </section>

                            <section id="symptoms" className="adhd-section">
                                <h2>Các Triệu chứng Không Chú Ý Phổ Biến</h2>

                                <p>
                                    Mọi người trải nghiệm mọi thứ một cách <strong>khác nhau</strong>, vì vậy mặc dù đây là một vài triệu chứng của ADHD thể không chú ý mà bạn có thể trải qua, <strong>một số đặc điểm có thể phổ biến hơn những đặc điểm khác</strong>. Thậm chí còn có những <strong>triệu chứng không chính thức</strong> không được liệt kê trong DSM-5.
                                </p>

                                <p>
                                    Với bản chất độc đáo trong trải nghiệm của mỗi cá nhân, điều quan trọng là phải thừa nhận rằng các triệu chứng 'không chính thức', những triệu chứng không được đề cập rõ ràng trong DSM-5, vẫn có thể đóng một vai trò quan trọng trong cách ADHD biểu hiện ở một người.
                                </p>

                                <p>
                                    Việc nhận ra những triệu chứng này có thể cung cấp những hiểu biết quý giá về một <strong>phổ rộng hơn của các trải nghiệm ADHD</strong>, nhấn mạnh sự đa dạng của những thách thức và nhu cầu trong cộng đồng ADHD.
                                </p>

                                <p>
                                    Vì trải nghiệm khác nhau, đây là danh sách các triệu chứng cụ thể về sự không chú ý mà tôi thường xuyên phải vật lộn với tư cách là một người mắc ADHD thể kết hợp.
                                </p>

                                <h3>Lơ đãng (Zoning Out) trong các cuộc trò chuyện</h3>
                                <p>
                                    Tôi có xu hướng lơ đãng trong các cuộc trò chuyện, bất kể chúng quan trọng đến đâu. Ngay cả khi tôi <em>thực sự</em> muốn lắng nghe.
                                </p>
                                <p>
                                    Bạn bè và gia đình tôi đôi khi bực bội với tôi, và tôi không thể trách họ. Chúng tôi có thể đang nói về một điều gì đó nghiêm túc, và họ sẽ hỏi ý kiến của tôi. Thường thì, tôi sẽ <strong>phải nhờ họ lặp lại</strong> những gì họ vừa nói vài phút trước.
                                </p>
                                <p>
                                    Tại sao? Phải đến khi họ <strong>yêu cầu một phản hồi thì sự chú ý của tôi mới quay trở lại</strong>, và đến lúc đó, tôi đã bỏ lỡ những phần quan trọng. Điều này thật sự khó chịu cho tất cả mọi người. 😠
                                </p>
                                <p>
                                    Bạn thấy đấy, khi tâm trí tôi cho rằng tôi bị 'mắc kẹt' trong một cuộc trò chuyện không thú vị, <strong>tôi không thể không lơ đãng</strong> và nghĩ về tất cả những thứ khác đang chạy đua trong đầu. Tất nhiên, trong khi tôi biết bộ não ADHD của mình <strong>dễ bị phân tâm</strong>, điều đó có thể làm cho người kia <strong>cảm thấy như tôi không hề coi trọng những gì họ nói</strong>. Kiểu hiểu lầm này có thể rất phức tạp, đặc biệt nếu bạn ghét xung đột. 😞
                                </p>

                                <h3>Thường xuyên mắc lỗi</h3>
                                <p>
                                    Đúng vậy, những người có thần kinh điển hình (neurotypical) cũng mắc lỗi và phán đoán sai, nhưng đối với nhiều người bị ADHD, <strong>việc mắc phải những lỗi bất cẩn có thể là chuyện thường ngày</strong>. Cách chúng ta xử lý thông tin có xu hướng ảnh hưởng đến quyết định và phán đoán của chúng ta, dẫn đến nhiều lỗi hơn. Bộ não của chúng ta được cấu tạo khác biệt. 🧠
                                </p>
                                <p>
                                    Và vì chúng ta có xu hướng mắc nhiều lỗi, điều đó xây dựng nên sự thiếu tự tin vào bản thân và lòng tự trọng thấp. Nó cũng có thể dẫn đến <strong>rối loạn lo âu hoặc rối loạn khí sắc đi kèm</strong>, điều này có thể làm trầm trọng thêm tư duy và chức năng của chúng ta.
                                </p>
                                <p>
                                    Thông thường, để đảm bảo rằng chúng ta hạn chế các lỗi bất cẩn, chúng ta sẽ <strong>dành rất nhiều thời gian và năng lượng để cố gắng giảm thiểu và che đậy</strong> triệu chứng này của ADHD thể không chú ý, điều này có thể rất <strong>mệt mỏi</strong>. 😴 Chúng ta có thể liên tục kiểm tra và kiểm tra lại những thứ như thời gian, ngày tháng và địa điểm.
                                </p>
                                <p>
                                    Thật thú vị, một <strong>nghiên cứu gần đây</strong> đã xác định 16.1% người lớn mắc ADHD cũng có chẩn đoán rối loạn ám ảnh cưỡng chế (OCD). Mặc dù nguyên nhân của mối quan hệ này vẫn chưa rõ ràng, nhưng chắc chắn đáng chú ý rằng một triệu chứng chính của OCD là <strong>kiểm tra một cách cưỡng chế</strong>, điều mà nhiều người mắc ADHD thể không chú ý cũng sử dụng như một <strong>hành vi che đậy</strong>.
                                </p>

                                <h3>Vật lộn với việc sắp xếp, tổ chức</h3>
                                <p>
                                    Bộ não ADHD có rất nhiều thứ đang diễn ra - ý tưởng, suy nghĩ, lo lắng. Nó thường không sắp xếp những suy nghĩ này theo cách tuần tự hơn như ở người có thần kinh điển hình. Nó có thể khá hỗn loạn.
                                </p>
                                <p>
                                    Mặc dù điều đó <strong>có thể tuyệt vời cho sự sáng tạo</strong>, vốn thường tốt nhất khi không bị kiềm chế và hoang dã, nhưng nó có nghĩa là việc duy trì sự ngăn nắp rõ ràng có thể là một cuộc đấu tranh đối với tôi. Không chỉ là suy nghĩ, nó có thể đặc biệt mở rộng đến việc <strong>tổ chức nhà cửa và việc vặt</strong>. 🏠
                                </p>
                                <p>
                                    Tôi biết nhiều người sẽ cho rằng nhà của tôi hỗn loạn và bừa bộn.
                                </p>
                                <p>
                                    Ví dụ, tôi có một chiếc ghế cụ thể trong phòng luôn có quần áo sạch của tôi chất đống trên đó. Ít nhất tôi biết nó ở đâu, phải không? Chà, tôi cũng có xu hướng vứt quần áo bẩn của mình trên sàn, gần đống đồ sạch một cách nguy hiểm, và chúng chắc chắn bị lẫn lộn vào nhau theo thời gian. 😬
                                </p>
                                <p>
                                    Khi phòng tôi bừa bộn, tôi cảm thấy căng thẳng. Tuy nhiên, do lịch trình eo hẹp (tôi luôn trễ giờ!) và khó khăn trong việc sắp xếp suy nghĩ, nó dường như luôn bừa bộn bất chấp những nỗ lực tốt nhất của tôi.
                                </p>

                                <h3>Tránh né các nhiệm vụ khó khăn</h3>
                                <p>
                                    Với bất cứ điều gì liên quan đến ADHD, bạn sẽ thường xuyên nghe thấy cụm từ 'nỗ lực tinh thần kéo dài'.
                                </p>
                                <p>
                                    <strong>Các nhiệm vụ đòi hỏi năng lượng tinh thần có thể rất mệt mỏi</strong> khi bạn mắc ADHD thể không chú ý. Về cơ bản, bạn đang cố gắng ép một bộ não <em>thực sự</em> không muốn tập trung phải tập trung trong thời gian dài mà không liên tục theo đuổi các cú hích dopamine (từ những thứ gây xao lãng). Cá nhân tôi, khi làm điều này, nó dẫn đến <strong>sương mù não (brain fog) và thậm chí là đau đầu</strong>.
                                </p>
                                <p>
                                    Một cách tự nhiên, khi đối mặt với những loại nhiệm vụ này, tôi có xu hướng chống cự. Nếu nó <strong>mất quá nhiều thời gian để tôi hoàn thành, hoặc liên quan đến một quy trình phức tạp</strong> với nhiều bước, tôi có lẽ sẽ <strong>trì hoãn</strong> càng lâu càng tốt. <strong>Sự trì hoãn là một rào cản rất lớn</strong> đối với những người trong chúng ta có các triệu chứng ADHD thể không chú ý.
                                </p>
                                <p>
                                    Khi tôi không còn lựa chọn nào khác ngoài việc phải làm điều khó khăn, nó có thể <strong>thử thách sự kiên nhẫn và sức khỏe tinh thần của tôi</strong>.
                                </p>
                                <p>
                                    Nếu có hạn chót để tôi thanh toán hóa đơn hoặc quyết toán thuế, bạn có thể đoán rằng tôi sẽ làm chúng chỉ vài giờ trước hạn. Đây là lúc chúng ta cần tìm các giải pháp thiết thực hơn hoặc yêu cầu sự hỗ trợ.
                                </p>

                                <h3>Làm mất hoặc để lạc đồ đạc</h3>
                                <p>
                                    Rối loạn Tăng động Giảm chú ý (ADHD) <strong>có thể ảnh hưởng đến trí nhớ làm việc của chúng ta</strong> và các <strong>chức năng điều hành</strong> thiết yếu trong cuộc sống hàng ngày. Theo một <strong>nghiên cứu</strong> được đăng trên tạp chí của Hiệp hội Tâm lý học Hoa Kỳ, trí nhớ ngắn hạn của một người mắc ADHD có thể bị suy giảm, dẫn đến việc quên những điều vừa được nói hoặc không nhớ đã đặt thứ gì đó ở đâu.
                                </p>
                                <p>
                                    Đây là một sự thật thú vị về tôi: Tôi có ba cặp kính, và, giống như hầu hết mọi người, chỉ có hai mắt. Không, tôi không sống trong xa hoa, tôi chỉ có thói quen làm mất chúng và tìm lại chúng sau đó.
                                </p>
                                <p>
                                    Bạn thấy đấy, kính của tôi, cùng với chìa khóa và điện thoại, <strong>biến mất gần như hàng ngày</strong>. Hầu hết thời gian, một cuộc càn quét khắp nhà là đủ, nhưng đôi khi, chúng chỉ đơn giản là biến mất - cho đến khi, tôi mua một cặp khác, và đột nhiên cặp cũ quyết định xuất hiện, mặc dù <strong>tôi có thể thề rằng tôi đã kiểm tra ở đó rồi</strong>. Tôi đã phải mua cặp thứ ba trong một kỳ nghỉ dài sau khi tôi quên không mang theo cặp của mình. 🧳
                                </p>
                                <p>
                                    Kính không hề rẻ. Đó là một trong những thứ <strong>góp phần vào "thuế ADHD"</strong> - tất cả các chi phí cộng dồn do các triệu chứng của chúng ta gây ra, như phí trả nợ muộn.
                                </p>
                            </section>

                            <section id="challenges" className="adhd-section">
                                <h2>Những thách thức và hiểu lầm xung quanh ADHD Thể không chú ý</h2>

                                <p>
                                    Hơn bao giờ hết, mọi người đều đang nói về Rối loạn Tăng động Giảm chú ý (ADHD). Và khi điều đó được thực hiện để <strong>nâng cao nhận thức</strong>, như nhiều phương tiện truyền thông đang làm, chúng tôi rất vui mừng khi thấy điều đó. 🙌
                                </p>
                                <p>
                                    Việc tạo ra cuộc trò chuyện xung quanh việc chẩn đoán ADHD có nghĩa là những người trong chúng ta mắc ADHD <strong>cảm thấy thoải mái hơn khi cởi mở nói về những trải nghiệm và khó khăn của mình</strong> với chứng rối loạn phát triển thần kinh này.👌 Điều này mang lại cho những người khác <strong>sự can đảm, sự công nhận và kiến thức</strong> để bắt đầu hành trình chẩn đoán của họ.
                                </p>
                                <p>
                                    Tuy nhiên, vẫn còn rất nhiều <strong>quan niệm sai lầm và lầm tưởng về ADHD</strong> đang lưu hành cả trên mạng và ngoài đời thực. Nhiều triệu chứng, bệnh đi kèm, và <strong>thậm chí toàn bộ các dạng phụ đều bị bỏ qua</strong> và ít được nói đến.
                                </p>
                                <p>
                                    Bạn có biết rằng khi mọi người đề cập đến <strong>Rối loạn Giảm chú ý (ADD)</strong>, họ thường đang nói về cái mà ngày nay được biết đến là ADHD thể không chú ý chiếm ưu thế không? Hiệp hội Tâm thần học Hoa Kỳ đã cập nhật thuật ngữ này vào <strong>năm 1987</strong>, chuyển từ ADD sang ADHD để bao quát toàn bộ phổ của tình trạng này. Mặc dù vậy, thuật ngữ ADD vẫn tồn tại trong ngôn ngữ thông thường, có lẽ do nhiều người không biết về sự thay đổi này.
                                </p>
                                <p>
                                    Trong khi một số người đơn giản là không tin vào sự tồn tại của nó, cũng có rất nhiều người đơn giản là <strong>chưa bao giờ nghe nói đến</strong> ADHD thể không chú ý chiếm ưu thế.
                                </p>
                                <p>
                                    Chà, ADHD thể không chú ý - chúng tôi nhìn thấy bạn! 👋
                                </p>

                                <h3>Những thách thức và định kiến hàng ngày</h3>
                                <p>
                                    Cuộc sống hàng ngày có một chút khác biệt với ADHD. Các triệu chứng được liệt kê ở trên có thể gây ra hậu quả trong mọi lĩnh vực của cuộc sống. Trong môi trường học đường và công sở, việc bị xem là không chú ý hoặc mắc lỗi bất cẩn <strong>có thể ảnh hưởng đến hiệu suất</strong>.
                                </p>
                                <p>
                                    Điều này cũng <strong>có thể ảnh hưởng đến khả năng duy trì mối quan hệ</strong> với bạn bè, gia đình, bạn đời và đồng nghiệp khi bạn <strong>gặp khó khăn trong việc nhớ các ngày quan trọng hoặc chi tiết về cuộc sống của họ</strong> - những điều thường cho thấy bạn đang nỗ lực.
                                </p>
                                <p>
                                    Nhiều người, như chúng ta đều biết, thích dựa vào các định kiến, <strong>đặc biệt là khi họ không hiểu về chúng</strong>. Đặc biệt, những người mắc ADHD thể không chú ý có thể nghe những từ như <strong>'ngớ ngẩn'</strong> hay <strong>'kẻ mộng mơ'</strong> là nhẹ nhất, và <strong>'lười biếng'</strong> là tệ nhất. Khi bạn nghe những định kiến có hại này <strong>từ khi còn nhỏ</strong>, đặc biệt nếu bạn không được chẩn đoán khi còn nhỏ, nó có thể có <strong>tác động nghiêm trọng đến lòng tự trọng và bản sắc cá nhân</strong>.
                                </p>
                                <p>
                                    Cái mà một số người có thể gọi là 'sự lười biếng' thực chất là một sự khác biệt vô cùng phức tạp trong cấu trúc và chức năng não bộ mà ngay cả các chuyên gia về khoa học thần kinh cũng chưa hiểu hết.
                                </p>
                            </section>

                            <section id="personal-story" className="adhd-section">
                                <h2>Câu chuyện chẩn đoán cá nhân và những thách thức của tôi</h2>

                                <p>
                                    Tôi không được chẩn đoán mắc ADHD cho đến khi tôi 29 tuổi, nhưng <strong>những dấu hiệu đã có từ thời thơ ấu</strong>.
                                </p>
                                <p>
                                    Tôi thường vật lộn với những thứ mà hầu hết mọi người thậm chí không nghĩ đến. Tôi <strong>gặp khó khăn trong việc duy trì hứng thú với mọi thứ</strong> như sở thích hoặc con đường sự nghiệp nào tôi nên chọn (cái đó đã thay đổi rất nhiều).
                                </p>
                                <p>
                                    Tôi <strong>gặp khó khăn trong việc sắp xếp các nhiệm vụ</strong>, như bài tập trên lớp và bài tập về nhà. Và, tôi hay quên, rất nhiều. Tôi đã <strong>lãng phí rất nhiều thời gian để tìm kiếm những thứ tôi đã để lạc</strong>, chỉ để thấy chúng ở ngay nơi tôi bắt đầu. Với thế giới bên ngoài, tôi có thể trông vô tư và 'như người trên mây' nhưng bên trong tôi hoàn toàn không vô tư. 🧚
                                </p>
                                <p>
                                    Hồi đó, <strong>tôi rất bối rối</strong>. Tôi không biết tại sao mình lại khác biệt, tại sao tôi không thể làm mọi việc dễ dàng như những người khác. Khi tôi nhận ra điều này ảnh hưởng đến các mối quan hệ nhiều như thế nào, <strong>tôi biết mình cần một giải pháp cho bất cứ điều gì đang xảy ra</strong>.
                                </p>
                                <p>
                                    Sau một chút nghiên cứu, tôi đã liên hệ với nhà cung cấp dịch vụ chăm sóc sức khỏe của mình, người đã giới thiệu tôi đến một chuyên gia sức khỏe tâm thần. Trong quá trình chẩn đoán, họ yêu cầu tôi <strong>hoàn thành các bảng câu hỏi, nói về lịch sử gia đình</strong>, và khám phá những trải nghiệm trong quá khứ của tôi.
                                </p>
                                <p>
                                    Sau khi đánh giá, <strong>bác sĩ của tôi đã xem xét các tiêu chí chẩn đoán</strong> và <strong>giải thích mọi thứ tôi cần biết</strong> về Rối loạn Tăng động Giảm chú ý. Có chín triệu chứng không chú ý và chín triệu chứng tăng động-xung động, và <strong>một người nên đáp ứng năm triệu chứng ADHD trở lên</strong> trước khi nhận được <strong>chẩn đoán ADHD</strong>.
                                </p>
                                <p>
                                    Tôi được chẩn đoán mắc <strong>ADHD Thể Kết hợp</strong>, với cả triệu chứng tăng động và không chú ý.
                                </p>
                                <p>
                                    Sau khi chẩn đoán ADHD, tôi có những cảm xúc lẫn lộn. Tôi vừa <strong>sợ hãi, hạnh phúc, và nhẹ nhõm cùng một lúc</strong>. Đối với những người trong chúng tôi được chẩn đoán muộn, có một quá trình đau buồn khi bạn <strong>tự hỏi cuộc sống của mình sẽ như thế nào nếu bạn biết sớm hơn</strong>, nhưng điều này được thay thế bằng một <strong>niềm hy vọng mới rằng bây giờ bạn có thể bắt đầu cải thiện</strong> cuộc sống của mình. ☀️
                                </p>
                            </section>

                            <section id="management" className="adhd-section">
                                <h2>Các chiến lược và phương pháp điều trị hiệu quả để quản lý ADHD Thể không chú ý</h2>

                                <p>
                                    ADHD <strong>không phải là một căn bệnh</strong> hay <strong>một sự lựa chọn</strong>. Đó là một rối loạn phát triển thần kinh mà, nếu bạn chọn, có thể được <strong>chẩn đoán, điều trị và quản lý</strong> - nhưng đây là một lựa chọn hoàn toàn cá nhân.
                                </p>
                                <p>
                                    Chúng ta có thể biến những triệu chứng ADHD này thành những hành vi tích cực hoặc ít nhất là quản lý chúng theo những cách khác nhau. Ngoài ra, tôi muốn bạn biết rằng <strong>ADHD không định nghĩa con người bạn</strong>, bất kể bạn có dạng biểu hiện tăng động-xung động chiếm ưu thế, ADHD thể không chú ý, hay cả hai.
                                </p>
                                <p>
                                    Có nhiều cách khác nhau để quản lý ADHD thể không chú ý, nhưng <strong>các lựa chọn điều trị ADHD có thể khác nhau tùy từng người</strong> tùy thuộc vào các tình trạng sức khỏe tâm thần và các bệnh đi kèm khác. Nói chung, bạn nên hỏi nhà cung cấp dịch vụ chăm sóc sức khỏe của mình về các lựa chọn và tìm ra những lựa chọn phù hợp nhất với bạn. Một số người có thể cần thuốc ADHD trong khi những người khác thì không. Một số có thể được hưởng lợi từ <strong>trị liệu tâm lý, trị liệu hành vi</strong>, hoặc sự kết hợp của cả hai để giảm các triệu chứng ADHD.
                                </p>
                                <p>
                                    Nhưng vì bạn đã ở đây, hãy cùng khám phá một số <strong>mẹo hữu ích để quản lý ADHD thể không chú ý bắt đầu từ hôm nay</strong>. ⬇️
                                </p>

                                <h3>Tìm hiểu thông tin và tự giáo dục bản thân về ADHD</h3>
                                <p>
                                    Việc tự giáo dục bản thân về những điều cơ bản của Rối loạn Tăng động Giảm chú ý (ADHD) đã có thể đưa bạn đi một chặng đường dài. Bạn không biết mình có thể đã tin vào bao nhiêu lầm tưởng hoặc quan niệm sai lầm cho đến khi bạn bắt đầu tìm hiểu sự thật.
                                </p>
                                <p>
                                    Bạn càng biết nhiều về cách nó hoạt động, và triệu chứng nào là của ADHD và không phải, bạn càng có thể <strong>nhận thức về hành vi của mình và bắt đầu quản lý chúng tốt hơn</strong>.
                                </p>
                                <p>
                                    Hãy nhớ luôn lấy thông tin từ các <strong>nguồn chất lượng cao hoặc đáng tin cậy từ những người điều trị hoặc sống chung với ADHD</strong> (như chúng tôi!) để bạn có thể tránh những quan niệm sai lầm phổ biến đó. 🔍
                                </p>

                                <h3>Phát triển một hệ thống hỗ trợ</h3>
                                <p>
                                    Có những người xung quanh bạn hiểu tình trạng của bạn, hoặc cố gắng hiểu, có thể giúp bạn quản lý ADHD. Đó có thể là bạn bè, thành viên gia đình hoặc đồng nghiệp - bất kỳ ai sẵn sàng 100% <strong>hỗ trợ bạn trên hành trình ADHD của mình</strong>.
                                </p>
                                <p>
                                    Ở mức độ thực tế, những người này có thể <strong>nhắc nhở bạn về các cuộc hẹn, giúp bạn đi đúng hướng và thông cảm</strong> khi mọi việc không diễn ra như kế hoạch.
                                </p>
                                <p>
                                    Việc được chẩn đoán và sống chung với ADHD cũng có thể <strong>cực kỳ xúc động</strong>, vì vậy việc có một hệ thống hỗ trợ sẽ ở bên bạn về mặt tình cảm là điều cần thiết.
                                </p>

                                <h3>Tạo một thói quen và tuân theo nó</h3>
                                <p>
                                    Tôi hiểu - thói quen rất khó. 😧 Nhưng một trong những điều tốt nhất bạn có thể làm để quản lý ADHD thể không chú ý là có một thói quen và tuân thủ nó càng nhiều càng tốt.
                                </p>
                                <p>
                                    Việc lập một <strong>danh sách việc cần làm có thể tăng năng suất đáng kể và giảm thiểu sự phân tâm</strong>. Khi mọi thứ được viết ra, bạn sẽ <strong>ít có khả năng quên</strong> chúng hơn. 📝
                                </p>

                                <h3>Cởi mở và trung thực</h3>
                                <p>
                                    Sẽ có những lúc bạn gặp khó khăn với các nhiệm vụ hoặc lơ đãng trong các cuộc trò chuyện.
                                </p>
                                <p>
                                    Khi điều này xảy ra, nếu bạn đang ở trong một môi trường an toàn, hãy cố gắng trung thực và cởi mở về nó với những người xung quanh bạn. Sẽ rất hữu ích nếu bạn nói với họ rằng bạn có quan tâm, và bạn có muốn lắng nghe. Bằng cách này, bạn cho phép họ thông cảm và giúp đỡ bạn hơn - họ không thể làm điều đó nếu bạn không giao tiếp. Điều này cũng giảm thiểu khả năng họ bị xúc phạm hoặc bạn bị hiểu lầm. 🙌
                                </p>

                                <h3>Sử dụng các công cụ và ứng dụng ADHD</h3>
                                <p>
                                    Nếu bạn có quyền truy cập internet, bạn có <strong>quyền truy cập vào cả một thế giới công cụ và ứng dụng</strong> có thể giúp bạn quản lý các triệu chứng của mình và tìm cách giải quyết chúng.
                                </p>
                                <p>
                                    Có các ứng dụng cho hầu hết mọi thứ: <strong>tổ chức, quản lý công việc và gợi nhớ</strong>, để kể tên một vài. Những công cụ này có thể có lợi trong việc theo dõi các hoạt động hàng ngày. Bạn có thể tìm thấy các đề xuất của chúng tôi về các công cụ ADHD tiện lợi nhất để sử dụng <strong>tại đây</strong>.
                                </p>

                                <h3>Giữ cho tâm trí và cơ thể khỏe mạnh</h3>
                                <p>
                                    Theo một <strong>bài báo</strong> về ADHD & tập thể dục, 'tập thể dục thường xuyên có thể giúp giảm bớt một số triệu chứng của ADHD và cải thiện các chức năng điều hành.'
                                </p>
                                <p>
                                    Mặc dù việc thúc đẩy bản thân tập thể dục có thể cực kỳ khó khăn, nhưng nó thực sự quá có lợi để bỏ qua. Cố gắng kết hợp một số hình thức vận động, bất kể nhiều hay ít, vào thói quen hàng ngày của bạn. 🏃‍♀️
                                </p>

                                <h3>Kết nối với cộng đồng ADHD</h3>
                                <p>
                                    Khi bạn cần nói chuyện với ai đó hiểu những gì bạn đang trải qua, hãy tìm đến một trong nhiều <strong>nhóm hỗ trợ trực tuyến và ngoại tuyến cho những người bị ADHD</strong>. 🤝
                                </p>
                                <p>
                                    Việc là một phần của cộng đồng có thể cung cấp <strong>sự hỗ trợ về mặt tình cảm và các mẹo hữu ích</strong> để quản lý tình trạng của bạn tốt hơn. Họ cũng có thể <strong>chia sẻ những câu chuyện chân thực</strong> của họ về cách họ đã học cách sống chung với ADHD, thay vì để nó kiểm soát cuộc sống của họ.
                                </p>

                                <h3>Tìm kiếm lời khuyên y tế chuyên nghiệp</h3>
                                <p>
                                    Bạn không nên cảm thấy mình phải vật lộn với các triệu chứng một mình. Nếu bạn nghi ngờ mình có các đặc điểm của ADHD thể không chú ý hoặc thậm chí là các triệu chứng tăng động-xung động, <strong>hãy nói chuyện với một chuyên gia sức khỏe tâm thần</strong>. Sau khi bạn nhận được chẩn đoán, các chuyên gia ADHD này có thể giúp bạn <strong>phát triển các kế hoạch điều trị ADHD, có thể bao gồm trị liệu hành vi hoặc thuốc</strong>. 👩‍⚕️
                                </p>

                                <h3>Cởi mở với các phương pháp điều trị khác nhau</h3>
                                <p>
                                    Bác sĩ sức khỏe tâm thần của bạn <strong>có thể đề nghị thuốc kích thích</strong> nếu bạn mắc ADHD thể không chú ý. Đây là những loại thuốc được sử dụng rộng rãi nhất và có thể giúp <strong>cải thiện sự tập trung</strong>.
                                </p>
                                <p>
                                    <strong>Đào tạo kỹ năng xã hội</strong> cũng có thể được chỉ định để cải thiện tương tác với người khác và ngăn ngừa sự khó xử trong xã hội, hoặc thậm chí là rối loạn lo âu xã hội. <strong>Trị liệu hành vi</strong> cũng có thể được đề xuất cho cả người lớn và trẻ em mắc ADHD. Loại trị liệu này có thể giúp bạn hiểu và đối phó với tình trạng của mình.
                                </p>
                            </section>

                            <section id="key-points" className="adhd-section">
                                <h2>Những điểm chính cần ghi nhớ</h2>
                                <div className="adhd-symptom-cards">
                                    <div className="adhd-symptom-card">
                                        <h4>ADHD thể không chú ý được đặc trưng bởi khó khăn trong việc duy trì sự tập trung, tuân thủ các chỉ dẫn và tổ chức công việc. Nó thiếu sự tăng động rõ rệt của các loại ADHD khác, thường xuất hiện dưới dạng mơ màng hoặc không lắng nghe.</h4>
                                    </div>
                                    <div className="adhd-symptom-card">
                                        <h4>ADHD thể không chú ý được chẩn đoán bằng các tiêu chí của DSM-5, với các triệu chứng cụ thể về sự không chú ý bao gồm khó duy trì sự chú ý, khó tuân thủ các chỉ dẫn chi tiết, mắc lỗi bất cẩn và dễ bị phân tâm.</h4>
                                    </div>
                                    <div className="adhd-symptom-card">
                                        <h4>ADHD thể không chú ý thường bị hiểu lầm do các triệu chứng ít nhìn thấy hơn, dẫn đến các định kiến như bị gán cho là 'lười biếng' hoặc 'kẻ mộng mơ'. Sự tiêu cực này có thể dẫn đến các rối loạn tâm thần hoặc lòng tự trọng thấp.</h4>
                                    </div>
                                    <div className="adhd-symptom-card">
                                        <h4>Việc quản lý ADHD của bạn có thể là sự kết hợp giữa điều trị chuyên nghiệp, giáo dục, cộng đồng và thay đổi lối sống (như tập thể dục và chế độ ăn uống).</h4>
                                    </div>
                                    <div className="adhd-symptom-card">
                                        <h4>Ngoài hàng ngàn bài viết và nhiều phương pháp chúng ta có thể sử dụng để điều trị ADHD, điều duy nhất tạo nên sự khác biệt là nhận thức và tư duy của chính chúng ta. Những gì bạn có thể thiếu sót trong việc tổ chức và quản lý thời gian, bạn lại bù đắp bằng sự kiên cường và sáng tạo. Những người mắc ADHD làm được những điều tuyệt vời mỗi ngày, và bạn cũng có thể. 🤗</h4>
                                    </div>
                                </div>

                                <div className="adhd-faq-container">
                                    {faqs.map((faq, index) => (
                                        <div key={index} className="adhd-faq-item">
                                            <button
                                                onClick={() => toggleFAQ(index)}
                                                className="adhd-faq-question"
                                            >
                                                <span>{faq.question}</span>
                                                <span className="adhd-faq-toggle">
                                                    {expandedFAQ === index ? '−' : '+'}
                                                </span>
                                            </button>
                                            <div className={`adhd-faq-answer${expandedFAQ === index ? ' open' : ''}`}>
                                                <p>{faq.answer}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <h3>Lời Kết</h3>
                                <div style={{ background: '#e7f3ff', padding: '25px', borderRadius: '12px', margin: '20px 0' }}>
                                    <p>
                                        Ngoài hàng ngàn bài viết và nhiều phương pháp chúng ta có thể sử dụng để điều trị ADHD, điều duy nhất tạo nên sự khác biệt là <strong>nhận thức và tư duy</strong> của chính chúng ta. Những gì bạn có thể thiếu sót trong việc tổ chức và quản lý thời gian, bạn lại bù đắp bằng <strong>sự kiên cường và sáng tạo</strong>. Những người mắc ADHD làm được những điều tuyệt vời mỗi ngày, và bạn cũng có thể. 🤗
                                    </p>
                                </div>
                                <p style={{ textAlign: 'center', fontWeight: 'bold', color: 'var(--dark-slate-grey)' }}>
                                    Những người mắc ADHD làm được những điều tuyệt vời mỗi ngày, và bạn cũng có thể. 🤗
                                </p>
                            </section>
                        </article>
                    </div>
                </div>
            </div>
            <RelatedArticles currentPage="inattentive" />
            <Footer />
        </>
    );
};

export default ADHDInattentive;