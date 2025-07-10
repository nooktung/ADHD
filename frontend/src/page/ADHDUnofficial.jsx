import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/AboutADHD.css';
import RelatedArticles from './RelatedArticles';

const ADHDUnofficial = () => {
    const [expandedFAQ, setExpandedFAQ] = useState(null);
    const [activeNav, setActiveNav] = useState('overview');

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const handleNavClick = (section) => {
        setActiveNav(section);
        scrollToTop();
    };

    const toggleFAQ = (index) => {
        setExpandedFAQ(expandedFAQ === index ? null : index);
    };

    const faqs = [
        {
            question: "Tại sao có những triệu chứng ADHD không có trong tiêu chí chẩn đoán chính thức?",
            answer: "DSM-5 được cập nhật lần cuối vào năm 2013 và chưa bao gồm nhiều nghiên cứu mới về ADHD trong 10 năm qua. Nhiều triệu chứng 'không chính thức' này thực sự phổ biến nhưng chưa được công nhận chính thức trong hệ thống chẩn đoán."
        },
        {
            question: "Làm thế nào để biết những triệu chứng này có liên quan đến ADHD không?",
            answer: "Nếu bạn đã được chẩn đoán ADHD và trải qua những triệu chứng này, có thể chúng có liên quan. Tuy nhiên, nên tham khảo ý kiến chuyên gia để loại trừ các nguyên nhân khác và có kế hoạch quản lý phù hợp."
        },
        {
            question: "Siêu tập trung có phải là điều tốt hay xấu?",
            answer: "Siêu tập trung là con dao hai lưỡi. Nó có thể giúp bạn hoàn thành công việc hiệu quả và học hỏi tốt hơn, nhưng cũng có thể khiến bạn quên ăn, lỡ cuộc hẹn, hoặc mất dấu thời gian. Quan trọng là học cách quản lý nó."
        },
        {
            question: "Làm thế nào để quản lý rối loạn điều hòa cảm xúc?",
            answer: "Liệu pháp hành vi nhận thức (CBT) có thể rất hữu ích. Ngoài ra, việc nhận diện triggers, thực hành kỹ thuật thở, tạo thói quen lành mạnh, và có hệ thống hỗ trợ tốt cũng giúp quản lý cảm xúc hiệu quả hơn."
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
      `}</style>
            <Header />
            <div className="adhd-adhd-page">
                {/* Header Section */}
                <div className="adhd-header-section">
                    <div className="adhd-header-content">
                        <div className="adhd-book-illustration">
                            <div className="adhd-book">
                                <img src="/image.png" alt="Các dấu hiệu ADHD ngoài tiêu chí chính thức" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} />
                            </div>
                        </div>

                        <div className="adhd-header-text">
                            <div className="adhd-category">
                                Nhóm Alight • Kiến Thức ADHD
                            </div>

                            <h1 className="adhd-main-title">
                                Các dấu hiệu của ADHD: Hiểu sâu hơn ngoài các tiêu chí chính thức
                            </h1>

                            <p className="adhd-subtitle">
                                Mặc dù các tiêu chí chẩn đoán chính thức của ADHD tập trung vào những triệu chứng đã được biết đến rộng rãi như giảm chú ý, tăng động, phạm lỗi do bất cẩn và các hành vi bốc đồng, nhiều cá nhân còn trải qua các dấu hiệu bổ sung không được liệt kê trong các cẩm nang chẩn đoán.
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
                                        onClick={() => handleNavClick('overview')}
                                    >
                                        Có phải là ADHD?
                                    </a>
                                    <a
                                        href="#frustration"
                                        className={`adhd-nav-item${activeNav === 'frustration' ? ' active' : ''}`}
                                        onClick={() => handleNavClick('frustration')}
                                    >
                                        Sự thất vọng khi không được công nhận
                                    </a>
                                    <a
                                        href="#diversity"
                                        className={`adhd-nav-item${activeNav === 'diversity' ? ' active' : ''}`}
                                        onClick={() => handleNavClick('diversity')}
                                    >
                                        Sự đa dạng trong trải nghiệm ADHD
                                    </a>
                                    <a
                                        href="#unofficial-symptoms"
                                        className={`adhd-nav-item${activeNav === 'unofficial-symptoms' ? ' active' : ''}`}
                                        onClick={() => handleNavClick('unofficial-symptoms')}
                                    >
                                        Các triệu chứng không chính thức
                                    </a>
                                    <a
                                        href="#key-points"
                                        className={`adhd-nav-item${activeNav === 'key-points' ? ' active' : ''}`}
                                        onClick={() => handleNavClick('key-points')}
                                    >
                                        Những điểm chính cần nhớ
                                    </a>
                                    <a
                                        href="#faqs"
                                        className={`adhd-nav-item${activeNav === 'faqs' ? ' active' : ''}`}
                                        onClick={() => handleNavClick('faqs')}
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
                                    <h4 style={{ textAlign: 'center' }}>Khám phá ADHD sâu hơn!</h4>
                                    <p style={{ textAlign: 'center' }}>Hiểu rõ những dấu hiệu ADHD không chính thức nhưng thực sự ảnh hưởng đến cuộc sống hàng ngày của bạn. Từ nhận diện đến quản lý hiệu quả.</p>
                                    <a href="/hanbook" className="adhd-cta-button" style={{ display: 'block', margin: '0 auto' }}>
                                        Tìm hiểu thêm
                                    </a>
                                </div>
                            </div>
                        </aside>

                        {/* Main Article */}
                        <article className="adhd-article-content">

                            <section id="overview" className="adhd-section">
                                <h2>Có phải là ADHD? Các dấu hiệu không có trong Tiêu chí Chẩn đoán</h2>

                                <p>
                                    Bạn đã bao giờ tự hỏi liệu ADHD còn có những biểu hiện nào khác ngoài các tiêu chí chẩn đoán chính thức không? Nếu bạn đã được chẩn đoán mắc Rối loạn tăng động giảm chú ý (ADHD), có lẽ bạn sẽ nhận thấy rằng một số triệu chứng nhất định mà bạn trải qua lại không có trong danh sách đó.
                                </p>

                                <p>
                                    Hôm nay, chúng ta sẽ đi sâu vào các triệu chứng ADHD kín đáo hơn thường bị bỏ qua và khám phá một số dấu hiệu "không chính thức" mà bạn có thể thấy quen thuộc nhưng không nhận ra đó là một phần của ADHD.
                                </p>

                                <p>
                                    Chúng ta sẽ đề cập đến:
                                </p>

                                <div className="adhd-symptom-cards">
                                    <div className="adhd-symptom-card">
                                        <h4>Sự thất vọng khi những khó khăn không được công nhận và tại sao nó lại là một vấn đề.</h4>
                                    </div>
                                    <div className="adhd-symptom-card">
                                        <h4>Sự đa dạng trong trải nghiệm ADHD.</h4>
                                    </div>
                                    <div className="adhd-symptom-card">
                                        <h4>DSM-5 và những thách thức trong chẩn đoán ADHD ở người lớn.</h4>
                                    </div>
                                    <div className="adhd-symptom-card">
                                        <h4>Các đặc điểm ADHD "không chính thức" mà nhiều người trong chúng ta trải qua.</h4>
                                    </div>
                                </div>

                                <p>
                                    Hãy tiếp tục đọc để cùng làm sáng tỏ những triệu chứng ít được biết đến, không chính thức nhưng lại ảnh hưởng đến các hoạt động hàng ngày của chúng ta, hoặc đối với các bậc cha mẹ, ảnh hưởng đến hành vi của con bạn.
                                </p>

                                <p>
                                    Những dấu hiệu này có thể bao gồm <strong>khó khăn trong việc điều hòa cảm xúc (emotional regulation)</strong>, <strong>các vấn đề về quản lý thời gian (time management)</strong>, và <strong>cảm giác không đạt được thành tựu như kỳ vọng (sense of underachievement)</strong>.
                                </p>

                                <p>
                                    Việc nhận diện những dấu hiệu "không chính thức" này là cực kỳ quan trọng để có một sự thấu hiểu sâu sắc hơn về ADHD, từ đó có thể dẫn đến các chiến lược quản lý và hỗ trợ hiệu quả hơn cho những người bị ảnh hưởng.
                                </p>
                            </section>

                            <section id="frustration" className="adhd-section">
                                <h2>Sự thất vọng khi các triệu chứng không được công nhận</h2>

                                <p>
                                    Trước khi có một chẩn đoán, mỗi ngày đều có thể chứa đầy sự thất vọng và bất lực. Bạn phải đối mặt với vô số thách thức và những hành vi có vẻ không thể giải thích được. Khi nhận được chẩn đoán, bạn cuối cùng cũng <strong>hiểu</strong> tại sao mình lại suy nghĩ và hành động theo cách đó; tại sao bạn lại vật lộn với một số việc nhiều hơn những người khác.
                                </p>

                                <p>
                                    Và rồi bạn nhận ra rằng <strong>không phải mọi thứ bạn trải qua đều khớp với các tiêu chí chẩn đoán.</strong>
                                </p>

                                <p>
                                    Mặc dù việc chẩn đoán ADHD từ một chuyên gia sức khỏe tâm thần có thể xác nhận rằng bạn đang trải qua các triệu chứng liên quan đến ADHD, nhưng chỉ một chẩn đoán thôi thì không phải lúc nào cũng đủ. Bạn cần hành động dựa trên sự tò mò của mình và tìm hiểu sâu hơn.
                                </p>

                                <p>
                                    Kể từ khi tôi bắt đầu dự án ADHD- Bản giao hưởng tập trung , rất nhiều người đã nói với tôi rằng họ đồng cảm với những trải nghiệm ADHD mà tôi đã trải qua. Một số trong đó có thể dễ dàng giải thích bằng DSM-5, và một số thì không.
                                </p>
                            </section>

                            <section id="diversity" className="adhd-section">
                                <h2>Sự đa dạng trong trải nghiệm ADHD</h2>

                                <p>
                                    ADHD không chỉ là một danh sách các triệu chứng cần đánh dấu.
                                </p>

                                <p>
                                    Đúng là có những hướng dẫn đã được thiết lập để chẩn đoán Rối loạn tăng động giảm chú ý, nhưng các chuyên gia sức khỏe tâm thần luôn cân nhắc đến <strong>sự khác biệt cá nhân</strong> và không kỳ vọng bạn phải thể hiện mọi triệu chứng phổ biến của ADHD.
                                </p>

                                <p>
                                    Bạn chỉ cần có <strong>năm</strong> triệu chứng thuộc nhóm tăng động-bốc đồng hoặc nhóm giảm chú ý. Và nếu bạn có đủ triệu chứng từ cả hai danh sách, bạn sẽ được chẩn đoán là ADHD thể kết hợp.
                                </p>

                                <p>
                                    Cả triệu chứng ADHD ở trẻ em và người lớn đều khác nhau ở mỗi người. Vì vậy, <strong>cách tốt nhất để hiểu về</strong> Rối loạn tăng động giảm chú ý và trải nghiệm của chính bạn là <strong>tìm kiếm cộng đồng của mình.</strong>
                                </p>

                                <p>
                                    Để hiểu thêm về ADHD, bạn có thể:
                                </p>

                                <div className="adhd-symptom-cards">
                                    <div className="adhd-symptom-card">
                                        <h4>Đọc các blog và bài viết 💻</h4>
                                    </div>
                                    <div className="adhd-symptom-card">
                                        <h4>Nghe các podcast về ADHD 🎙️</h4>
                                    </div>
                                    <div className="adhd-symptom-card">
                                        <h4>Theo dõi những người sáng tạo nội dung về ADHD 👀</h4>
                                    </div>
                                    <div className="adhd-symptom-card">
                                        <h4>Tham gia một cộng đồng và nhóm hỗ trợ ADHD</h4>
                                    </div>
                                    <div className="adhd-symptom-card">
                                        <h4>Đọc các nghiên cứu mới nhất (chúng tôi đề xuất Viện Sức khỏe Tâm thần Quốc gia Hoa Kỳ - NIMH hoặc Hiệp hội Rối loạn Giảm chú ý - ADDA)</h4>
                                    </div>
                                    <div className="adhd-symptom-card">
                                        <h4>Tìm kiếm sự giúp đỡ từ chuyên gia 🏥</h4>
                                    </div>
                                    <div className="adhd-symptom-card">
                                        <h4>Trò chuyện với các thành viên trong gia đình, vì ADHD thường có tính di truyền.</h4>
                                    </div>
                                </div>

                                <p>
                                    Tìm hiểu thêm về ADHD từ góc nhìn của người khác có thể giúp bạn nhận ra rằng <strong>bạn không đơn độc trên hành trình này.</strong> Những trải nghiệm được chia sẻ là chìa khóa để hiểu cách bạn trải nghiệm ADHD và bắt đầu giảm thiểu các triệu chứng.
                                </p>

                                <p>
                                    Như bạn có thể đoán, các tiêu chí chẩn đoán cho ADHD không hoàn hảo.
                                </p>

                                <p>
                                    Thật ra, ban đầu, DSM thậm chí còn không bao gồm cả chứng tăng động. 😬
                                </p>

                                <p>
                                    Hiệp hội Tâm thần học Hoa Kỳ đã tạo ra Cẩm nang Chẩn đoán và Thống kê để hướng dẫn mọi chuyên gia sức khỏe tâm thần trong việc chẩn đoán các cá nhân mắc ADHD ở tuổi trưởng thành. Họ đã tổng hợp 'tất cả' các triệu chứng ADHD có thể có mà một người mắc chứng rối loạn phát triển thần kinh này có thể gặp phải và đã phân loại chúng thành ba thể: <strong>giảm chú ý, tăng động-bốc đồng, và kết hợp.</strong>
                                </p>

                                <p>
                                    Lần cuối cùng họ cập nhật DSM là vào năm 2013. Họ đã bổ sung một số hành vi và triệu chứng cho hầu hết các tình trạng rối loạn phát triển thần kinh, chẳng hạn như Rối loạn Chống đối Chống đối (ODD), Rối loạn Khí sắc, hoặc Rối loạn Lo âu.
                                </p>

                                <p>
                                    May mắn thay, họ cuối cùng đã công nhận rằng không chỉ trẻ nhỏ mới mắc ADHD và đã bổ sung hướng dẫn để chẩn đoán <strong>người lớn tuổi ở mọi lứa tuổi mắc ADHD.</strong>
                                </p>

                                <p>
                                    Tuy nhiên, ấn bản thứ 5 vẫn <strong>đề cập đến các triệu chứng ADHD tương tự</strong> như phiên bản thứ tư của DSM được thực hiện vào năm 1994. Họ chỉ thực hiện một thay đổi nhỏ để bao gồm <strong>tác động của các yếu tố môi trường</strong> có thể góp phần vào những khó khăn mà chúng ta trải qua.
                                </p>

                                <p>
                                    Đó là lý do tại sao tiêu chí yêu cầu bạn phải nêu rõ <strong>sự tồn tại của những khó khăn này ở hai hoặc nhiều môi trường</strong>, như nơi làm việc, trường học, hoặc gia đình. Đây không phải là một bản cập nhật quan trọng về các triệu chứng ADHD ở người lớn như chúng ta có thể đã hy vọng.
                                </p>

                                <p>
                                    Hiệp hội Tâm thần học Hoa Kỳ vẫn chưa cập nhật các hướng dẫn để bao gồm các nghiên cứu sâu rộng mới được thực hiện về Rối loạn tăng động giảm chú ý trong 10 năm qua. Hiện tại không có khung thời gian xác định về việc khi nào phiên bản tiếp theo sẽ được phát hành.
                                </p>

                                <p>
                                    Tuy nhiên, đối với những người đang trải qua khó khăn khi mắc ADHD và chưa thể nhận được chẩn đoán vì triệu chứng của họ không phù hợp với bộ tiêu chí hiện tại, <strong>chúng tôi thấu hiểu nỗi đau của bạn.</strong>
                                </p>

                                <p>
                                    Việc nhận được chẩn đoán ADHD ở người lớn có thể khó khăn, tốn thời gian và tốn kém, nhưng việc kiên trì và tìm kiếm sự giúp đỡ là điều cần thiết. Bạn sẽ làm được.
                                </p>
                            </section>

                            <section id="unofficial-symptoms" className="adhd-section">
                                <h2>Danh sách các triệu chứng ADHD không chính thức</h2>

                                <p>
                                    Nhiều cá nhân mắc ADHD báo cáo trải qua các triệu chứng không được liệt kê trong DSM-5, chẳng hạn như:
                                </p>

                                <h3>1. Khó khăn về giấc ngủ (Sleeping Difficulties)</h3>
                                <p>
                                    Có lẽ do các triệu chứng tăng động-bốc đồng hoặc dòng suy nghĩ dường như không bao giờ dừng lại, <strong>nhiều người mắc ADHD cảm thấy rất khó để đi vào giấc ngủ.</strong> Bộ não của chúng ta mất nhiều thời gian hơn để "tắt" và thư giãn vì bộ não tăng động mà người có ADHD có thể sở hữu. Nhiều người lớn gặp khó khăn trong việc duy trì sự chú ý do <strong>thiếu ngủ, điều này có thể dẫn đến giảm năng suất</strong> ở nơi làm việc hoặc trường học. Thiếu ngủ cũng có thể <strong>làm trầm trọng thêm các triệu chứng</strong> mà chúng ta trải qua. Thêm vào đó, các rối loạn giấc ngủ có thể làm phức tạp thêm mọi thứ và ảnh hưởng đáng kể đến sức khỏe tâm thần của một người.
                                </p>

                                <h3>2. Mù thời gian (Time Blindness)</h3>
                                <p>
                                    Quản lý thời gian đôi khi có thể là một thách thức lớn đối với nhiều người mắc ADHD. Chúng ta vốn đã gặp khó khăn trong việc tổ chức các nhiệm vụ, đặc biệt là những nhiệm vụ đòi hỏi nỗ lực trí óc kéo dài vì chúng ta dễ bị phân tâm. Việc <strong>thanh toán hóa đơn đúng hạn, ước tính thời gian di chuyển từ nơi này đến nơi khác, hoàn thành bài tập ở trường, và đúng giờ</strong> có thể là một cuộc vật lộn. Việc nhớ các dịp quan trọng, <strong>như sinh nhật và ngày kỷ niệm,</strong> có thể khá khó khăn đối với chúng tôi. 📅 Chúng tôi có thể nhanh chóng quên các cuộc trò chuyện và sự kiện từ vài ngày trước, và có thể gặp khó khăn trong việc ghi nhớ một chuỗi các sự kiện.
                                </p>

                                <h3>3. Siêu tập trung và Tập trung cao độ (Hyperfocus and Hyperfixation)</h3>
                                <p>
                                    Bạn có quen thuộc với "bong bóng ADHD" không? Đó là khả năng <strong>tập trung cao độ như tia laser vào những thứ chúng ta quan tâm,</strong> mặc dù chúng ta thường <strong>dễ bị phân tâm</strong> với khoảng chú ý ngắn. Nó có thể dẫn đến năng suất và kỹ năng học tập tốt hơn, nhưng nó cũng có thể <strong>khiến chúng ta quên ăn</strong> (điều mà thuốc kích thích có thể làm tăng thêm) hoặc lỡ các cuộc hẹn. Siêu tập trung thực sự là một con dao hai lưỡi có thể khiến chúng ta cảm thấy tốt về bản thân, nhưng cũng có thể khiến chúng ta mất dấu thời gian.
                                </p>

                                <h3>4. Nhạy cảm giác quan (Sensory Sensitivity)</h3>
                                <p>
                                    Danh sách các triệu chứng chính thức của ADHD <strong>không bao gồm việc nhạy cảm với các kích thích bên ngoài</strong> vì nó có thể trùng lặp với các tình trạng khác, như <strong>lo âu</strong> và <strong>tự kỷ</strong>. Nhưng là những người mắc ADHD, chúng ta có thể nhạy cảm với ánh sáng, âm thanh, mùi, vị và xúc giác. Và vì điều đó, <strong>chúng ta có thể dễ dàng bị choáng ngợp bởi môi trường xung quanh.</strong> 😫 Hệ thống thần kinh trung ương của một người mắc ADHD có thể liên tục ở trong tình trạng cảnh giác cao độ, điều này có thể dẫn đến <strong>ý thức nhận biết tăng cao.</strong> Chúng ta cũng có thể dễ bị giật mình và khó lọc bỏ mọi thứ đang diễn ra trong môi trường của mình, điều này <strong>có thể dẫn đến một cơn bùng nổ (meltdown).</strong>
                                </p>

                                <h3>5. Vụng về trong giao tiếp xã hội (Social Awkwardness)</h3>
                                <p>
                                    Cảm thấy vụng về trong giao tiếp có thể là thực tế với Rối loạn tăng động giảm chú ý (ADHD) vì <strong>các triệu chứng của nó có thể buộc bạn phải hành động và phản ứng theo cách có thể bị coi là không tự nhiên trong môi trường xã hội.</strong> Khó khăn trong việc tổ chức các nhiệm vụ và suy nghĩ có thể khiến chúng ta nói và làm những điều mà <strong>người khác coi là khác thường.</strong> Chúng ta có thể bốc đồng buột miệng nói ra những điều mà chúng ta ước mình đã không nói, hoặc liên tục ngắt lời người khác. Tất cả những điều này có thể gây ra rất nhiều sự bối rối và xấu hổ. Một người mắc ADHD cũng có thể phải vật lộn với các khuyết tật học tập, trầm cảm, lo âu, hoặc cụ thể là lo âu xã hội, điều này có thể khiến họ cảm thấy <strong>vụng về trong giao tiếp</strong> và hoàn toàn tránh tương tác với người khác. Nó cũng có thể dẫn đến tăng nguy cơ lạm dụng chất kích thích và 'men say can đảm' khi mọi người sử dụng nó như một cơ chế đối phó cho các tình huống xã hội.
                                </p>

                                <h3>6. Rối loạn điều hòa cảm xúc (Emotional Dysregulation)</h3>
                                <p>
                                    Việc <strong>không thể kiểm soát cảm xúc của mình</strong> có tác động đáng kể đến cuộc sống và sức khỏe tâm thần của chúng ta. Chúng ta có thể dễ dàng cảm thấy <strong>hứng khởi và ngây ngất</strong> về những điều đơn giản, nhanh chóng <strong>thất vọng</strong> khi cảm thấy một chút dấu hiệu nhỏ nhất của sự từ chối, hoặc cảm thấy <strong>tức giận</strong> về những sự bất tiện nhỏ nhặt nhất như phải chờ đợi trong hàng khi mua sắm. <strong>Thay đổi tâm trạng đột ngột (Mood swings)</strong> cũng phổ biến do sự rối loạn điều hòa cảm xúc của chúng ta. Kết hợp điều đó với tuổi dậy thì ở thanh thiếu niên mắc ADHD hoặc các triệu chứng tiền kinh nguyệt ở những người có kinh nguyệt và bạn có khả năng gặp khó khăn với khả năng tự kiểm soát. Khi chúng ta cảm nhận mọi thứ một cách mãnh liệt, việc đối phó với các hoạt động hàng ngày có thể trở nên khó khăn. Chúng ta có thể có <strong>những cơn bùng nổ cảm xúc và đưa ra những quyết định bốc đồng.</strong> Đó là lý do tại sao chúng ta cần tìm cách đối phó với cảm xúc của mình một cách lành mạnh để có thể ngăn ngừa bất kỳ biến chứng nào thêm. Một lần nữa, liệu pháp hành vi nhận thức (CBT) có thể giúp ích ở đây.
                                </p>
                            </section>

                            <section id="key-points" className="adhd-section">
                                <h2>Những điểm chính cần nhớ</h2>

                                <div className="adhd-symptom-cards">
                                    <div className="adhd-symptom-card">
                                        <h4>Có một số triệu chứng ADHD không được công nhận, điều này có nghĩa là chẩn đoán của bạn có thể không hoàn toàn có ý nghĩa, dẫn đến sự thất vọng và bối rối.</h4>
                                    </div>
                                    <div className="adhd-symptom-card">
                                        <h4>ADHD biểu hiện một cách độc nhất ở mỗi cá nhân, vì vậy bạn nên tìm cách kết nối với những người khác và học hỏi từ kinh nghiệm của họ.</h4>
                                    </div>
                                    <div className="adhd-symptom-card">
                                        <h4>Các tiêu chí của DSM-5 có những hạn chế, và việc nhận được chẩn đoán có thể là một thách thức nếu bạn trải qua những triệu chứng không chính thức này.</h4>
                                    </div>
                                    <div className="adhd-symptom-card">
                                        <h4>Các triệu chứng ADHD không chính thức phổ biến bao gồm khó khăn về giấc ngủ, mù thời gian, siêu tập trung, nhạy cảm giác quan, vụng về trong giao tiếp xã hội và rối loạn điều hòa cảm xúc.</h4>
                                    </div>
                                    <div className="adhd-symptom-card">
                                        <h4>Hãy nhớ rằng những khó khăn của bạn là có thật và hoàn toàn xác đáng, bất kể một bộ tiêu chí lỗi thời có nói vậy hay không. Lời khuyên của chúng tôi là hãy tìm hiểu mọi thứ bạn có thể về tình hình của mình để bạn có thể tự vận động cho chính mình cho đến khi bạn nhận được sự điều trị cần thiết.</h4>
                                    </div>
                                </div>
                            </section>

                            <section id="faqs" className="adhd-section">
                                <h2>Câu Hỏi Thường Gặp</h2>

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
                                        Hãy nhớ rằng <strong>những khó khăn của bạn là có thật và hoàn toàn xác đáng</strong>, bất kể một bộ tiêu chí lỗi thời có nói vậy hay không. Lời khuyên của chúng tôi là hãy tìm hiểu mọi thứ bạn có thể về tình hình của mình để bạn có thể <strong>tự vận động cho chính mình</strong> cho đến khi bạn nhận được sự điều trị cần thiết.
                                    </p>
                                </div>
                                <p style={{ textAlign: 'center', fontWeight: 'bold', color: 'var(--dark-slate-grey)' }}>
                                    Bạn không đơn độc trên hành trình hiểu về ADHD của mình! 🤗
                                </p>
                            </section>
                        </article>
                    </div>
                </div>
                <RelatedArticles currentPage="unofficial" />
            </div>
            <Footer />
        </>
    );
};

export default ADHDUnofficial;