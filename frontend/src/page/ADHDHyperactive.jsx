import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/AboutADHD.css';
import RelatedArticles from './RelatedArticles';

const ADHDHyperactive = () => {
    const [expandedFAQ, setExpandedFAQ] = useState(null);
    const [activeNav, setActiveNav] = useState('overview');
    const [flippedCards, setFlippedCards] = useState({});

    const toggleFAQ = (index) => {
        setExpandedFAQ(expandedFAQ === index ? null : index);
    };

    const toggleCard = (cardId) => {
        setFlippedCards(prev => ({
            ...prev,
            [cardId]: !prev[cardId]
        }));
    };

    const symptomCards = [
        {
            id: 'fidgeting',
            title: 'Khó khăn trong việc giữ yên và luôn trong trạng thái bồn chồn (Fidgeting)',
            content: 'Các hành vi như liên tục cựa quậy, gõ ngón tay, rung chân khi ngồi là biểu hiện của một bộ não ADHD tăng động. Khi không thể ngồi yên, hệ thần kinh đang ở trạng thái kích thích quá mức và cố gắng tìm cách giải tỏa năng lượng. Biểu hiện này ở trẻ em rất dễ nhận biết: chúng thường không ngồi yên trên ghế, táy máy chân tay, nghịch mọi đồ vật trong tầm với. Ở người lớn, triệu chứng có thể biểu hiện kín đáo hơn như rung chân, đi đi lại lại khi nói chuyện điện thoại, hoặc bấm bút liên tục.'
        },
        {
            id: 'relaxation',
            title: 'Khó khăn trong việc thư giãn',
            content: 'Do không thể giải tỏa năng lượng dư thừa, người bệnh thường gặp khó khăn trong việc thư giãn thực sự. Ngay cả trong trạng thái không hoạt động, não bộ vẫn có thể duy trì hoạt động ở cường độ cao với vô số ý tưởng hoặc các dòng suy nghĩ miên man, dẫn đến tình trạng khó thư giãn.'
        },
        {
            id: 'talking',
            title: 'Nói nhiều quá mức (Excessive Talking)',
            content: 'Hành vi bốc đồng là một tiêu chí chẩn đoán cốt lõi. Sự suy giảm khả năng tự kiểm soát và nhận thức các tín hiệu xã hội khiến người bệnh có thể nói liên tục mà không nhận biết được thời điểm hoặc bối cảnh phù hợp. Một khi đã bắt đầu, họ rất khó để dừng lại. Họ có xu hướng chia sẻ thông tin cá nhân quá mức hoặc nói chuyện không ngừng nghỉ, gây ra xung đột trong các mối quan hệ xã hội.'
        },
        {
            id: 'fatigue',
            title: 'Tình trạng mệt mỏi và kiệt sức mạn tính',
            content: 'Một quan niệm sai lầm phổ biến là người mắc ADHD luôn tràn đầy năng lượng. Thực tế, do tình trạng não bộ liên tục ở trạng thái "tăng tốc" và khó thư giãn, họ thường xuyên cảm thấy mệt mỏi và kiệt sức. Sự tăng động của não bộ cản trở quá trình nghỉ ngơi và phục hồi năng lượng, đặc biệt là chất lượng giấc ngủ, dẫn đến tình trạng thiếu năng lượng vào ngày hôm sau.'
        },
        {
            id: 'interrupting',
            title: 'Ngắt lời và buột miệng trả lời (Interrupting & Blurting Out)',
            content: 'Đây là một biểu hiện kinh điển của tính bốc đồng. Người bệnh có thể không chờ người khác nói xong, nói xen vào hoặc trả lời trước khi câu hỏi được đặt ra hoàn chỉnh. Ở trẻ em, hành vi này thường bị coi là "gây rối" trong lớp học. Ở người lớn, điều này gây khó khăn trong các cuộc họp hoặc giao tiếp xã hội. Nguyên nhân sâu xa là do sự suy giảm khả năng ức chế phản ứng (impulse control) và nỗi sợ quên mất ý định muốn nói.'
        },
        {
            id: 'risky',
            title: 'Các hành vi nguy cơ cao (Risky Behaviors)',
            content: 'Các triệu chứng tăng động - bốc đồng là nền tảng cho các hành vi nguy cơ cao như lái xe thiếu an toàn, chi tiêu không kiểm soát, hoặc lạm dụng chất. Nếu người bệnh đang phải đối mặt với các hành vi này, việc tìm kiếm sự can thiệp từ chuyên gia là tối quan trọng.'
        }
    ];

    const faqs = [
        {
            question: "ADHD thể Tăng động - Bốc đồng bốc đồng chỉ ảnh hưởng đến trẻ em phải không?",
            answer: "Không đúng. ADHD thể Tăng động - Bốc đồng có thể ảnh hưởng đến cả trẻ em và người lớn. Ở người lớn, các triệu chứng có thể biểu hiện kín đáo hơn như rung chân, đi đi lại lại khi nói chuyện điện thoại, hoặc bấm bút liên tục."
        },
        {
            question: "Làm thế nào để phân biệt ADHD thể Tăng động - Bốc đồng với các thể khác?",
            answer: "ADHD thể Tăng động - Bốc đồng được đặc trưng bởi các hành vi tăng động và bốc đồng dai dẳng như khó ngồi yên, nói nhiều, ngắt lời, và hành động thiếu cân nhắc. Điều này khác với thể Giảm chú ý chủ yếu có các triệu chứng nội tại như khó tập trung."
        },
        {
            question: "Người mắc ADHD thể Tăng động - Bốc đồng có luôn tràn đầy năng lượng không?",
            answer: "Đây là một quan niệm sai lầm. Do não bộ liên tục ở trạng thái 'tăng tốc' và khó thư giãn, họ thường xuyên cảm thấy mệt mỏi và kiệt sức. Sự tăng động của não bộ cản trở quá trình nghỉ ngơi và phục hồi năng lượng."
        },
        {
            question: "Các triệu chứng tăng động - bốc đồng có thể dẫn đến những hành vi nguy hiểm không?",
            answer: "Có. Các triệu chứng tăng động - bốc đồng có thể là nền tảng cho các hành vi nguy cơ cao như lái xe thiếu an toàn, chi tiêu không kiểm soát, hoặc lạm dụng chất. Việc tìm kiếm sự can thiệp từ chuyên gia là tối quan trọng khi đối mặt với các hành vi này."
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

        .adhd-highlight-box {
          background: linear-gradient(135deg, rgba(242, 194, 218, 0.1), rgba(237, 204, 245, 0.1));
          border: 2px solid var(--primary-color);
          border-radius: 12px;
          padding: 20px;
          margin: 20px 0;
          position: relative;
        }

        @media (max-width: 768px) {
          .adhd-symptom-cards {
            grid-template-columns: 1fr;
            gap: 15px;
          }
          
          .adhd-symptom-card {
            padding: 15px;
          }
        }

        .adhd-presentation-types {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin: 25px 0;
        }

        .adhd-presentation-type {
          display: flex;
          align-items: flex-start;
          background: linear-gradient(135deg, rgba(242, 194, 218, 0.1), rgba(237, 204, 245, 0.1));
          border: 2px solid var(--primary-color);
          border-radius: 12px;
          padding: 20px;
          transition: all 0.3s ease;
        }

        .adhd-presentation-type:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .adhd-type-number {
          background: var(--primary-color);
          color: white;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 18px;
          margin-right: 20px;
          flex-shrink: 0;
        }

        .adhd-type-content {
          flex: 1;
        }

        .adhd-type-content h4 {
          color: var(--dark-slate-grey);
          margin: 0 0 8px 0;
          font-size: 18px;
          font-weight: 600;
        }

        .adhd-type-content p {
          color: var(--dark-slate-grey-2);
          margin: 0;
          font-size: 14px;
          font-style: italic;
        }

        @media (max-width: 768px) {
          .adhd-presentation-type {
            padding: 15px;
          }
          
          .adhd-type-number {
            width: 35px;
            height: 35px;
            font-size: 16px;
            margin-right: 15px;
          }
          
          .adhd-type-content h4 {
            font-size: 16px;
          }
          
          .adhd-type-content p {
            font-size: 13px;
          }
        }

        .flip-card-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 25px;
          margin: 30px 0;
        }

        .flip-card {
          background-color: transparent;
          width: 100%;
          height: 250px;
          perspective: 1000px;
          cursor: pointer;
        }

        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.6s;
          transform-style: preserve-3d;
          box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
          border-radius: 15px;
        }

        .flip-card.flipped .flip-card-inner {
          transform: rotateY(180deg);
        }

        .flip-card-front, .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          box-sizing: border-box;
        }

        .flip-card-front {
          background: #e3f4f2;
          color: var(--dark-slate-grey);
          font-weight: 600;
          font-size: 18px;
          line-height: 1.4;
        }

        .flip-card-back {
          background: #e3f4f2;
          color: var(--dark-slate-grey);
          transform: rotateY(180deg);
          font-size: 14px;
          line-height: 1.6;
          overflow-y: auto;
        }

        .flip-card:hover .flip-card-inner {
          box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
        }

        .flip-card-front::after {
          content: "👆 Nhấp để xem chi tiết";
          position: absolute;
          bottom: 10px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 12px;
          opacity: 0.7;
          font-weight: normal;
        }

        .flip-card-back::after {
          content: "👆 Nhấp để quay lại";
          position: absolute;
          bottom: 10px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 12px;
          opacity: 0.7;
          font-weight: normal;
        }

        @media (max-width: 768px) {
          .flip-card-container {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          
          .flip-card {
            height: 200px;
          }
          
          .flip-card-front {
            font-size: 16px;
          }
          
          .flip-card-back {
            font-size: 13px;
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
                                <img src="/image.png" alt="ADHD Tăng động - Bốc đồng" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} />
                            </div>
                        </div>

                        <div className="adhd-header-text">
                            <div className="adhd-category">
                                Nhóm Alight • Kiến Thức ADHD
                            </div>

                            <h1 className="adhd-main-title">
                                Hiểu về ADHD thể Tăng động - Bốc đồng
                            </h1>

                            <p className="adhd-subtitle">
                                ADHD thể Tăng động - Bốc đồng được đặc trưng bởi các kiểu hành vi tăng động và bốc đồng dai dẳng, gây cản trở đến các hoạt động chức năng hoặc sự phát triển. Các cá nhân mắc thể ADHD này có thể biểu hiện qua việc vận động liên tục, nói quá nhiều, khó khăn trong việc chờ đến lượt, và hành động thiếu cân nhắc về hậu quả.
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
                                        onClick={() => setActiveNav('overview')}
                                    >
                                        Tổng quan về Ba thể lâm sàng
                                    </a>
                                    <a
                                        href="#misconceptions"
                                        className={`adhd-nav-item${activeNav === 'misconceptions' ? ' active' : ''}`}
                                        onClick={() => setActiveNav('misconceptions')}
                                    >
                                        Quan niệm sai lầm và sự đa dạng
                                    </a>
                                    <a
                                        href="#symptoms"
                                        className={`adhd-nav-item${activeNav === 'symptoms' ? ' active' : ''}`}
                                        onClick={() => setActiveNav('symptoms')}
                                    >
                                        Các hành vi Tăng động và Bốc đồng
                                    </a>
                                    <a
                                        href="#diagnosis"
                                        className={`adhd-nav-item${activeNav === 'diagnosis' ? ' active' : ''}`}
                                        onClick={() => setActiveNav('diagnosis')}
                                    >
                                        Quy trình Chẩn đoán
                                    </a>
                                    <a
                                        href="#management"
                                        className={`adhd-nav-item${activeNav === 'management' ? ' active' : ''}`}
                                        onClick={() => setActiveNav('management')}
                                    >
                                        Chiến lược can thiệp và quản lý
                                    </a>
                                    <a
                                        href="#faqs"
                                        className={`adhd-nav-item${activeNav === 'faqs' ? ' active' : ''}`}
                                        onClick={() => setActiveNav('faqs')}
                                    >
                                        Câu Hỏi Thường Gặp
                                    </a>
                                </nav>
                            </div>

                            {/* CTA Block */}
                            <div className="adhd-sidebar-ctablock">
                                <div className="adhd-cta-section">
                                    <div className="adhd-cta-illustration" style={{ marginBottom: '1rem' }}>
                                        <img src="/Hanbook.jpg" alt="Mai Thị Lan Anh" style={{ width: '150px', height: '200px', borderRadius: '4px', objectFit: 'cover', display: 'block', margin: '0 auto' }} />
                                    </div>
                                    <h4 style={{ textAlign: 'center' }}>Hiểu Đúng Về ADHD Tăng động - Bốc đồng!</h4>
                                    <p style={{ textAlign: 'center' }}>Chúng tôi cung cấp thông tin khoa học chính xác về ADHD thể Tăng động - Bốc đồng để giúp bạn hiểu rõ hơn về các triệu chứng và phương pháp quản lý hiệu quả. Từ chẩn đoán đến các chiến lược can thiệp, chúng tôi ở đây để cung cấp kiến thức đáng tin cậy.</p>
                                    <a href="/hanbook" className="adhd-cta-button" style={{ display: 'block', margin: '0 auto' }}>
                                        Tìm hiểu thêm
                                    </a>
                                </div>
                            </div>
                        </aside>

                        {/* Main Article */}
                        <article className="adhd-article-content">

                            <section id="overview" className="adhd-section">
                                <h2>ADHD Thể Tăng động - Bốc đồng: Thực trạng lâm sàng và các Biểu hiện</h2>

                                <p>
                                    Bài viết này đi sâu phân tích Rối loạn tăng động giảm chú ý (ADHD) thể Tăng động - Bốc đồng, đối chiếu giữa những nhận thức phổ thông và thực tế lâm sàng mà người bệnh trải qua. Nội dung tập trung vào các triệu chứng đặc hiệu và các phương pháp can thiệp, quản lý hiệu quả.
                                </p>

                                <p>
                                    Các nội dung chính bao gồm:
                                </p>

                                <div className="adhd-symptom-cards">
                                    <div className="adhd-symptom-card">
                                        <h4>Phân loại ba thể lâm sàng của ADHD.</h4>
                                    </div>
                                    <div className="adhd-symptom-card">
                                        <h4>Các quan niệm sai lầm và sự đa dạng trong biểu hiện của ADHD thể Tăng động - Bốc đồng.</h4>
                                    </div>
                                    <div className="adhd-symptom-card">
                                        <h4>Các triệu chứng và hành vi đặc trưng của thể ADHD này.</h4>
                                    </div>
                                    <div className="adhd-symptom-card">
                                        <h4>Quy trình chẩn đoán ADHD theo tiêu chuẩn quốc tế.</h4>
                                    </div>
                                    <div className="adhd-symptom-card">
                                        <h4>Các chiến lược can thiệp và quản lý triệu chứng tăng động, bốc đồng trong đời sống.</h4>
                                    </div>
                                </div>

                                <h2>Tổng quan về Ba thể lâm sàng của ADHD</h2>

                                <p>
                                    Để hiểu rõ về ADHD thể Tăng động - Bốc đồng, cần nhận thức đây là một trong ba thể lâm sàng (kiểu biểu hiện) chính của rối loạn này.
                                </p>

                                <p>
                                    Theo <strong>Cẩm nang Chẩn đoán và Thống kê các Rối loạn Tâm thần, Ấn bản thứ Năm (DSM-5)</strong> của Hiệp hội Tâm thần học Hoa Kỳ, ADHD được phân loại thành ba thể sau:
                                </p>

                                <div className="adhd-presentation-types">
                                    <div className="adhd-presentation-type">
                                        <div className="adhd-type-number">1</div>
                                        <div className="adhd-type-content">
                                            <h4>Thể ưu thế Tăng động - Bốc đồng</h4>
                                            <p>(Predominantly Hyperactive-Impulsive Presentation)</p>
                                        </div>
                                    </div>
                                    <div className="adhd-presentation-type">
                                        <div className="adhd-type-number">2</div>
                                        <div className="adhd-type-content">
                                            <h4>Thể ưu thế Giảm chú ý</h4>
                                            <p>(Predominantly Inattentive Presentation)</p>
                                        </div>
                                    </div>
                                    <div className="adhd-presentation-type">
                                        <div className="adhd-type-number">3</div>
                                        <div className="adhd-type-content">
                                            <h4>Thể kết hợp</h4>
                                            <p>(Combined Presentation)</p>
                                        </div>
                                    </div>
                                </div>

                                <p>
                                    Dựa trên việc đối chiếu các triệu chứng của người bệnh với hệ thống tiêu chuẩn chẩn đoán của DSM-5, chuyên gia sức khỏe tâm thần (bác sĩ tâm thần, chuyên viên tâm lý lâm sàng) sẽ xác định thể ADHD mà người đó mắc phải.
                                </p>

                                <p>
                                    <strong>Thể ưu thế Tăng động - Bốc đồng</strong> thường có các biểu hiện lâm sàng rõ ràng, giúp cho việc chẩn đoán dễ dàng hơn. Các cá nhân này thường có những triệu chứng có thể quan sát được như <strong>liên tục cựa quậy, bồn chồn, gõ chân hoặc không thể ngồi yên trên ghế.</strong> Họ cũng có xu hướng nói nhiều, hành động thiếu cân nhắc (bốc đồng), hoặc ngắt lời người khác trong giao tiếp.
                                </p>

                                <p>
                                    Ngược lại, các nghiên cứu cho thấy <strong>Thể ưu thế Giảm chú ý</strong> là <strong>thể lâm sàng khó chẩn đoán nhất.</strong> Các cá nhân này chủ yếu biểu hiện các hành vi giảm chú ý như <strong>khó khăn trong việc duy trì nỗ lực tư duy kéo dài</strong>, đặc biệt với các nhiệm vụ không gây hứng thú, <strong>dễ bị sao lãng bởi các kích thích ngoại cảnh</strong>, hoặc <strong>khó khăn trong việc tập trung hoàn thành nhiệm vụ được giao.</strong> Phần lớn các triệu chứng này mang tính nội tại (internal), khiến cho việc nhận diện và chẩn đoán chính xác trở nên thách thức.
                                </p>

                                <p>
                                    Khi một cá nhân biểu hiện từ <strong>sáu triệu chứng trở lên</strong> (năm đối với người từ 17 tuổi) ở cả hai nhóm tiêu chuẩn Giảm chú ý và Tăng động - Bốc đồng, họ sẽ được chẩn đoán là <strong>ADHD thể kết hợp</strong>.
                                </p>
                            </section>

                            <section id="misconceptions" className="adhd-section">
                                <h2>Quan niệm sai lầm và sự đa dạng trong biểu hiện lâm sàng</h2>

                                <p>
                                    Quan niệm phổ biến về <strong>Rối loạn tăng động giảm chú ý (ADHD)</strong> thường gắn liền với hình ảnh một cá nhân <strong>gây rối, khó kiểm soát và tìm kiếm sự chú ý.</strong>
                                </p>

                                <p>
                                    Sự hiểu lầm này có nguồn gốc từ năm 1902, khi Giáo sư George Friedrich Still, một bác sĩ nhi khoa người Anh, lần đầu tiên mô tả các triệu chứng này ở trẻ em. Quan sát này đã định hình nhận thức trong nhiều thập kỷ sau đó, tạo tiền đề cho các nghiên cứu về những hành vi mà ngày nay chúng ta gọi là ADHD.
                                </p>

                                <p>
                                    Mặc dù mô tả trên có thể đúng với một phần các trường hợp được chẩn đoán mắc ADHD thể Tăng động - Bốc đồng, <strong>biểu hiện lâm sàng thực tế lại vô cùng đa dạng và mang tính cá thể hóa cao.</strong> Có những triệu chứng ADHD gây ảnh hưởng nghiêm trọng đến chức năng sống của một cá nhân này, nhưng lại có thể là những đặc điểm mà cá nhân khác dễ dàng kiểm soát.
                                </p>

                                <p>
                                    ADHD là một rối loạn phát triển thần kinh (neurodivergent disorder) phức tạp, do đó, trải nghiệm của một người bệnh có thể hoàn toàn khác biệt với một người bệnh khác.
                                </p>
                            </section>

                            <section id="symptoms" className="adhd-section">
                                <h2>Các hành vi Tăng động và Bốc đồng phổ biến trong ADHD</h2>

                                <p>
                                    Các triệu chứng Tăng động - Bốc đồng của ADHD có thể biểu hiện dưới nhiều hình thức khác nhau. Theo DSM-5, có <strong>chín triệu chứng</strong> tiềm tàng trong nhóm này. Để một chẩn đoán được thiết lập, cần có sự hiện diện của tối thiểu <strong>sáu triệu chứng</strong> (hoặc năm đối với thanh thiếu niên và người lớn), kéo dài và gây suy giảm chức năng trong các hoạt động hàng ngày.
                                </p>

                                <p>
                                    Dưới đây là một số triệu chứng lâm sàng phổ biến:
                                </p>

                                <div className="flip-card-container">
                                    {symptomCards.map((card) => (
                                        <div 
                                            key={card.id}
                                            className={`flip-card ${flippedCards[card.id] ? 'flipped' : ''}`}
                                            onClick={() => toggleCard(card.id)}
                                        >
                                            <div className="flip-card-inner">
                                                <div className="flip-card-front">
                                                    {card.title}
                                                </div>
                                                <div className="flip-card-back">
                                                    {card.content}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <section id="diagnosis" className="adhd-section">
                                <h2>Quy trình Chẩn đoán ADHD thể Tăng động - Bốc đồng</h2>

                                <p>
                                    Việc chẩn đoán Rối loạn tăng động giảm chú ý (ADHD) <strong>chỉ được thực hiện bởi các chuyên gia sức khỏe tâm thần</strong> (bác sĩ tâm thần, nhà tâm lý lâm sàng) thông qua việc sử dụng các công cụ đánh giá chuẩn và đối chiếu với tiêu chuẩn của <strong>DSM-5</strong>.
                                </p>

                                <p>
                                    Các tiêu chí chẩn đoán cốt lõi bao gồm:
                                </p>

                                <div className="adhd-presentation-types">
                                    <div className="adhd-presentation-type">
                                        <div className="adhd-type-number">1</div>
                                        <div className="adhd-type-content">
                                            <h4>Các triệu chứng phải xuất hiện trước 12 tuổi</h4>
                                            <p>Triệu chứng ADHD phải có mặt từ thời thơ ấu để đáp ứng tiêu chuẩn chẩn đoán</p>
                                        </div>
                                    </div>
                                    <div className="adhd-presentation-type">
                                        <div className="adhd-type-number">2</div>
                                        <div className="adhd-type-content">
                                            <h4>Các triệu chứng phải hiện diện ở ít nhất hai môi trường khác nhau</h4>
                                            <p>Ví dụ: gia đình, trường học, công sở để đảm bảo tính nhất quán</p>
                                        </div>
                                    </div>
                                    <div className="adhd-presentation-type">
                                        <div className="adhd-type-number">3</div>
                                        <div className="adhd-type-content">
                                            <h4>Các triệu chứng phải gây ra sự suy giảm rõ rệt về chức năng</h4>
                                            <p>Ảnh hưởng đến chức năng xã hội, học tập hoặc nghề nghiệp</p>
                                        </div>
                                    </div>
                                </div>

                                <p>
                                    Trong quá trình lượng giá, chuyên gia sẽ thu thập thông tin toàn diện về bệnh sử, các khó khăn về chú ý, kỹ năng xã hội và các vấn đề liên quan để đưa ra chẩn đoán phân biệt và xây dựng kế hoạch can thiệp phù hợp.
                                </p>
                            </section>

                            <section id="management" className="adhd-section">
                                <h2>Các chiến lược can thiệp và quản lý triệu chứng</h2>

                                <p>
                                    Các phương pháp can thiệp dựa trên bằng chứng khoa học bao gồm <strong>liệu pháp hành vi, điều trị bằng thuốc, và huấn luyện kỹ năng xã hội.</strong> Bên cạnh đó, việc điều chỉnh lối sống và thói quen cũng đóng vai trò quan trọng trong việc quản lý các triệu chứng.
                                </p>

                                <p>
                                    Một số chiến lược thực tiễn bao gồm:
                                </p>

                                <div className="adhd-symptom-cards">
                                    <div className="adhd-symptom-card">
                                        <h4>Lựa chọn nghề nghiệp phù hợp: Tìm kiếm các công việc cho phép tận dụng năng lượng và sự sáng tạo dồi dào, thay vì các công việc đòi hỏi sự tĩnh tại và tập trung đơn điệu kéo dài.</h4>
                                    </div>
                                    <div className="adhd-symptom-card">
                                        <h4>Thực hiện các bài tập rèn luyện nhận thức (Brain-training): Tham gia các hoạt động giúp cải thiện khả năng tập trung, kiểm soát ức chế và trí nhớ làm việc.</h4>
                                    </div>
                                    <div className="adhd-symptom-card">
                                        <h4>Hoạt động thể chất đều đặn: Tập thể dục giúp điều hòa năng lượng dư thừa, cải thiện chức năng não bộ và chất lượng giấc ngủ.</h4>
                                    </div>
                                    <div className="adhd-symptom-card">
                                        <h4>Thực hành vệ sinh giấc ngủ: Thiết lập và tuân thủ lịch trình ngủ-thức điều độ, tạo môi trường ngủ tối ưu và tránh các thiết bị điện tử trước khi ngủ.</h4>
                                    </div>
                                    <div className="adhd-symptom-card">
                                        <h4>Sử dụng công cụ hỗ trợ tập trung (Fidget toys): Các vật dụng này cung cấp một kênh vận động nhỏ, giúp người bệnh giải tỏa sự bồn chồn và duy trì sự tập trung vào nhiệm vụ chính.</h4>
                                    </div>
                                    <div className="adhd-symptom-card">
                                        <h4>Tham gia các nhóm hỗ trợ đồng đẳng: Kết nối và học hỏi kinh nghiệm từ những người cùng cảnh ngộ có thể cung cấp sự hỗ trợ tinh thần và các chiến lược quản lý hiệu quả.</h4>
                                    </div>
                                </div>

                                <h3>Tổng kết các nội dung chính</h3>
                                <div className="adhd-symptom-cards">
                                    <div className="adhd-symptom-card">
                                        <h4>ADHD được phân thành ba thể lâm sàng chính: Thể ưu thế Tăng động - Bốc đồng, Thể ưu thế Giảm chú ý, và Thể kết hợp.</h4>
                                    </div>
                                    <div className="adhd-symptom-card">
                                        <h4>Định kiến về ADHD thường không phản ánh đúng thực tế lâm sàng; triệu chứng của rối loạn này rất đa dạng ở mỗi cá nhân.</h4>
                                    </div>
                                    <div className="adhd-symptom-card">
                                        <h4>Các triệu chứng tăng động - bốc đồng cốt lõi bao gồm: khó ngồi yên, nói nhiều, kiệt sức mạn tính, hành vi bốc đồng và các hành vi nguy cơ cao.</h4>
                                    </div>
                                    <div className="adhd-symptom-card">
                                        <h4>Việc chẩn đoán ADHD cần được thực hiện bởi chuyên gia sức khỏe tâm thần theo các tiêu chuẩn chẩn đoán nghiêm ngặt.</h4>
                                    </div>
                                    <div className="adhd-symptom-card">
                                        <h4>Quản lý ADHD là một quá trình kết hợp liệu pháp tâm lý, điều trị bằng thuốc và điều chỉnh lối sống.</h4>
                                    </div>
                                </div>

                                <p>
                                    Dù thuộc thể lâm sàng nào, việc quản lý hiệu quả các triệu chứng ADHD là hoàn toàn khả thi, giúp người bệnh đạt được các mục tiêu trong cuộc sống. Việc tìm kiếm sự hỗ trợ chuyên nghiệp khi cần thiết là bước đầu tiên và quan trọng nhất.
                                </p>
                            </section>

                            <section id="faqs" className="adhd-section">
                                <h2>Câu Hỏi Thường Gặp Về ADHD thể Tăng động - Bốc đồng</h2>

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
                                        Dù thuộc thể lâm sàng nào, việc quản lý hiệu quả các triệu chứng ADHD là hoàn toàn khả thi, giúp người bệnh đạt được các mục tiêu trong cuộc sống. Việc tìm kiếm sự hỗ trợ chuyên nghiệp khi cần thiết là bước đầu tiên và quan trọng nhất.
                                    </p>
                                </div>
                                <p style={{ textAlign: 'center', fontWeight: 'bold', color: 'var(--dark-slate-grey)' }}>
                                    Dù thuộc thể lâm sàng nào, việc quản lý hiệu quả các triệu chứng ADHD là hoàn toàn khả thi! 🔑
                                </p>
                            </section>
                        </article>
                    </div>
                    <RelatedArticles currentPage="hyperactive" />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ADHDHyperactive;