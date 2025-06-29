import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/AboutADHD.css';

const ADHDLife = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [activeNav, setActiveNav] = useState('overview');

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

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

  const faqs = [
    {
      question: "Mắc ADHD có phải lúc nào cũng là điều tiêu cực không?",
      answer: "Không hẳn. Mặc dù ADHD mang lại nhiều thử thách, nhưng nó cũng có thể mang đến những điểm mạnh như sự sáng tạo, khả năng tập trung siêu việt (hyperfocus), và tư duy khác biệt. Quan trọng là học cách quản lý và tận dụng những đặc điểm này."
    },
    {
      question: "Làm thế nào để tận hưởng cuộc sống khi mắc ADHD?",
      answer: "Người mắc ADHD hoàn toàn có thể tận hưởng cuộc sống bằng cách tìm ra những hoạt động mình yêu thích, tận dụng trạng thái siêu tập trung, chuyển hướng năng lượng vào những điều tích cực, và xây dựng mạng lưới hỗ trợ từ những người hiểu mình."
    },
    {
      question: "Tại sao việc kết nối với những người cùng mắc ADHD lại quan trọng?",
      answer: "Kết nối với những người cùng hoàn cảnh giúp bạn chia sẻ kinh nghiệm, học hỏi chiến lược quản lý, cảm thấy được thấu hiểu và không bị đánh giá. Điều này rất quan trọng cho sức khỏe tinh thần và việc phát triển các kỹ năng sống."
    },
    {
      question: "ADHD có định nghĩa con người tôi không?",
      answer: "Không, ADHD chỉ là một phần của bạn chứ không định nghĩa toàn bộ con người bạn. Bạn vẫn có thể sống một cuộc sống trọn vẹn, hạnh phúc và thành công. ADHD có thể tạo ra một số thử thách, nhưng cũng mang lại nhiều điều tích cực và cơ hội."
    }
  ];

  return (
    <>
      <Header />
      <div className="adhd-adhd-page">
        {/* Header Section */}
        <div className="adhd-header-section">
          <div className="adhd-header-content">
            <div className="adhd-book-illustration">
              <div className="adhd-book">
                <img src="/image.png" alt="ADHD In Life" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px'}} />
              </div>
            </div>
            
            <div className="adhd-header-text">
              <div className="adhd-category">
                Nhóm Alight • Sống Chung Với ADHD
              </div>
              
              <h1 className="adhd-main-title">
                Cuộc sống ADHD
              </h1>
              
              <p className="adhd-subtitle">
                Sống chung với ADHD bao gồm việc áp dụng các thói quen có cấu trúc và các chiến lược để tăng cường sự tập trung, tổ chức và sức khỏe cảm xúc, đồng thời tìm kiếm sự hỗ trợ từ cộng đồng hiểu được trải nghiệm ADHD.
              </p>
              
              <div className="adhd-publish-info">
                Xuất bản ngày 24.06.2025 • Cập nhật ngày 26.06.2025
              </div>

              <div className="adhd-author-info">
                <div className="adhd-author-avatar">
                  <img src="/teamname.jpg" alt="Nhóm Alight" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%'}} />
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
                    Mắc ADHD Không Phải Lúc Nào Cũng Tiêu Cực
                  </a>
                  <a
                    href="#discover-life"
                    className={`adhd-nav-item${activeNav === 'discover-life' ? ' active' : ''}`}
                    onClick={() => handleNavClick('discover-life')}
                  >
                    Khám Phá Cuộc Sống Cùng ADHD
                  </a>
                  <a
                    href="#enjoy-life"
                    className={`adhd-nav-item${activeNav === 'enjoy-life' ? ' active' : ''}`}
                    onClick={() => handleNavClick('enjoy-life')}
                  >
                    ADHD Vẫn Có Thể Tận Hưởng Cuộc Sống
                  </a>
                  <a
                    href="#coffee-talks"
                    className={`adhd-nav-item${activeNav === 'coffee-talks' ? ' active' : ''}`}
                    onClick={() => handleNavClick('coffee-talks')}
                  >
                    Buổi Trò Chuyện Cà Phê về ADHD
                  </a>
                  <a
                    href="#living-with-challenges"
                    className={`adhd-nav-item${activeNav === 'living-with-challenges' ? ' active' : ''}`}
                    onClick={() => handleNavClick('living-with-challenges')}
                  >
                    Sống Với Những Khó Khăn Vì ADHD
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
                  <div className="adhd-cta-illustration" style={{marginBottom: '1rem'}}>
                    <img src="/Mai Thị Lan Anh.jpg" alt="Mai Thị Lan Anh" style={{width: '150px', height: '200px', borderRadius: '4px', objectFit: 'cover', display: 'block', margin: '0 auto'}} />
                  </div>
                  <h4 style={{textAlign: 'center'}}>Hỗ Trợ Cuộc Sống ADHD!</h4>
                  <p style={{textAlign: 'center'}}>Chúng tôi cung cấp các tài nguyên và chiến lược thực tế để giúp bạn quản lý cuộc sống hàng ngày với ADHD. Từ mẹo tổ chức đến kỹ thuật quản lý cảm xúc, chúng tôi ở đây để hỗ trợ hành trình của bạn.</p>
                  <button className="adhd-cta-button" style={{display: 'block', margin: '0 auto'}}>Khám phá tài nguyên</button>
                </div>
              </div>
            </aside>

            {/* Main Article */}
            <article className="adhd-article-content">

              <section id="overview" className="adhd-section">
                <h2>Mắc ADHD Không Phải Lúc Nào Cũng Là Điều Tiêu Cực</h2>
                
                <p>
                  <strong>Rối loạn Tăng động Giảm chú ý (ADHD)</strong> đôi khi có thể ảnh hưởng lớn đến cuộc sống hằng ngày của chúng ta 😞. Theo Cẩm nang Chẩn đoán và Thống kê Rối loạn Tâm thần (DSM), người lớn mắc ADHD có thể gặp khó khăn trong hai hoặc nhiều môi trường sống khác nhau ngoài các triệu chứng ADHD sẵn có. Những môi trường này có thể là trường học, nơi làm việc, hoặc gia đình, và những thử thách có thể bao gồm: duy trì sự tập trung, giải quyết vấn đề, bốc đồng hoặc tăng động.
                </p>

                <p>
                  Người trưởng thành mắc ADHD có thể đối mặt với rất nhiều khó khăn. Là người được chẩn đoán ADHD muộn, tôi đã trải qua nhiều trải nghiệm không dễ dàng: từ cảm giác bồn chồn bên trong, thói quen chi tiêu bốc đồng dẫn đến khó khăn tài chính 💸, đến việc không thể hoàn thành công việc đúng hạn — tất cả đòi hỏi rất nhiều nỗ lực để kiểm soát cuộc sống ADHD của mình.
                </p>

                <p>
                  Nếu bạn có ADHD mà không có được sự hỗ trợ và tư duy đúng đắn để đối mặt với nó, điều đó có thể dẫn đến nhiều vấn đề hơn và cảm giác bất lực. Nếu ta cứ cố gồng mình vượt qua mọi khó khăn, mọi thứ có thể trở nên áp lực hơn, đặc biệt là trong các mối quan hệ gia đình, công việc và sức khỏe tinh thần.
                </p>

                <p>
                  <strong>Hiểu về bộ não ADHD của chính mình</strong> 🧠 nên là điều ưu tiên hàng đầu khi ta muốn cải thiện sức khỏe tinh thần. Khi làm được điều đó, ta sẽ học cách bao dung với chính mình hơn và kiên nhẫn hơn trong hành trình vượt qua khó khăn. Ta cũng sẽ học cách chấp nhận những thử thách và hiểu rằng chúng là một phần trong cuộc sống của mình.
                </p>
              </section>

              <section id="discover-life" className="adhd-section">
                <h2>Khám Phá Cuộc Sống Cùng ADHD</h2>
                
                <p>
                  Sau nhiều năm nghi ngờ hành vi của bản thân và cảm thấy không phù hợp với xã hội, tôi đã vô cùng choáng ngợp khi được chẩn đoán mắc ADHD. Việc chấp nhận sự thật này không hề dễ dàng. Tất cả những gì tôi nghĩ đến lúc đó là lòng tự trọng thấp khi nghe những triệu chứng ADHD vốn dĩ đã tồn tại từ lâu trong tôi. Nhưng khi bình tĩnh lại, tôi bắt đầu hiểu được ý nghĩa thật sự của chẩn đoán này. Cuối cùng, tôi đã có lời giải thích rõ ràng cho những cảm xúc rối bời mà mình từng vật lộn. Một cảm giác nhẹ nhõm ùa đến như cơn mưa mát lành 🤗.
                </p>

                <p>
                  <strong>Điều quan trọng nhất mà tôi học được là: Mắc ADHD không khiến tôi kém giá trị hơn bất kỳ ai.</strong> Dù tôi có thể khác với người bình thường, dù tôi gặp khó khăn trong việc tập trung vào công việc, điều đó không có nghĩa là tôi sẽ không bao giờ thành công. Với phương pháp đúng đắn và sự nỗ lực, tôi có thể làm bất cứ điều gì mình muốn.
                </p>

                <p>
                  Tôi có thể gặp khó khăn trong việc quản lý thời gian ⏳, tổ chức công việc, xác định ưu tiên, hoặc dễ bị xao nhãng — nhưng điều đó không có nghĩa tôi là một kẻ thất bại, cũng không có nghĩa tôi sẽ không đạt được điều gì tốt đẹp trong cuộc sống.
                </p>
              </section>

              <section id="enjoy-life" className="adhd-section">
                <h2>ADHD Vẫn Có Thể Tận Hưởng Những Điều Mình Yêu Thích</h2>
                
                <p>
                  Bạn có thể thắc mắc: "Người lớn mắc ADHD làm sao tận hưởng cuộc sống nếu họ luôn chịu nhiều áp lực từ các triệu chứng?" Cũng giống như những người không mắc ADHD, chúng tôi vẫn có thể yêu thích những sở thích của mình (dù có rất nhiều 😄), xem phim dài, hoặc đọc những cuốn sách truyền cảm hứng 📚. Thực tế, khi rơi vào <strong>trạng thái siêu tập trung (hyperfocus)</strong>, chúng tôi có thể đắm chìm hàng giờ không ngừng nghỉ vào việc mình yêu thích. Sự sáng tạo từ ADHD giúp chúng tôi đắm mình trọn vẹn vào công việc, đặc biệt khi đó là điều chúng tôi quan tâm.
                </p>

                <p>
                  Chuyển hướng năng lượng của mình vào những điều tích cực và tập trung vào những gì yêu thích chính là cách để chúng tôi nâng cao tinh thần, bất chấp những triệu chứng ADHD có thể gây khó khăn. Ví dụ, để giảm bớt căng thẳng mãn tính, tôi sẽ tìm đến các hoạt động yêu thích khác. Tôi vẫn thường chơi game 🎮 trong thời gian dài để giảm lo âu và tạm quên đi những phiền muộn.
                </p>
              </section>

              <section id="coffee-talks" className="adhd-section">
                <h2>Buổi Trò Chuyện Cà Phê về ADHD</h2>
                
                <p>
                  Khi cố gắng nâng cao nhận thức về ADHD, điều quan trọng là chúng ta cần trò chuyện với những người cùng hoàn cảnh để chia sẻ kinh nghiệm 🧑‍🤝‍🧑. Cá nhân tôi từng gặp khó khăn trong việc kết nối với người khác. Có lúc tôi rất kém trong giao tiếp xã hội, nhưng cũng có những ngày tôi có đủ "pin xã hội" để giao lưu. Và khi tôi có năng lượng để gặp gỡ những người trưởng thành khác cũng mắc ADHD, tôi luôn lắng nghe và học hỏi cách để quản lý cuộc sống.
                </p>

                <p>
                  Khi chúng ta biết được ADHD ảnh hưởng đến người khác như thế nào, chúng ta cũng học được cách để quản lý bản thân hiệu quả hơn, tìm ra chiến lược sống tốt hơn với ADHD. Điều này còn giúp ta phòng tránh những vấn đề trong các mối quan hệ, hiểu hơn về nhu cầu giấc ngủ, chế độ ăn uống của bản thân và nhiều hơn thế.
                </p>

                <p>
                  Bằng việc tổ chức các buổi trò chuyện cà phê với những người thấu hiểu nỗi khổ của mình, ta có thể kết nối với người không đánh giá ta vì hành vi hay lỗi lầm. Ta cũng có thể chia sẻ những mẹo nhỏ để cùng nhau vượt qua các thử thách mỗi ngày. Tuy nhiên, đừng quên rằng <strong>caffeine có thể ảnh hưởng đến giấc ngủ</strong> của người mắc ADHD, vì vậy hãy cẩn trọng khi uống cà phê ☕.
                </p>
              </section>

              <section id="living-with-challenges" className="adhd-section">
                <h2>Dù Chúng Ta Có Những Khó Khăn Vì ADHD</h2>
                
                <p>
                  ADHD ảnh hưởng đến cuộc sống hằng ngày của chúng ta theo vô vàn cách khác nhau. Nhưng với phương pháp, điều trị phù hợp, chúng ta vẫn có thể kiểm soát cuộc sống và tận hưởng những điều mình yêu thích. Ta luôn có thể tìm ra giải pháp sáng tạo để đối phó với áp lực của cuộc sống mà vẫn giữ được niềm vui.
                </p>

                <p>
                  Ngay cả khi gặp khó khăn trong việc quản lý thời gian, ta vẫn có thể học cách thích nghi để không bị trễ họp hay quên hạn chót 📅. Khi các triệu chứng ADHD ảnh hưởng đến lòng tự trọng và mối quan hệ, ta vẫn có thể cải thiện kỹ năng giao tiếp và kỹ năng xã hội. Bằng cách tận dụng cả điểm mạnh lẫn điểm yếu, ta vẫn có thể đi qua một ngày mà không bị choáng ngợp.
                </p>

                <p>
                  <strong>Cuối cùng, điều quan trọng nhất là phải nhớ rằng: Dù chúng ta có những thử thách do ADHD mang lại, chúng không định nghĩa con người chúng ta.</strong> Chúng ta vẫn có thể sống một cuộc sống trọn vẹn, hạnh phúc và đáng sống 💗. Việc nhận ra ADHD có thể khiến ta bị giới hạn ở một vài khía cạnh không có nghĩa là ta không thể sống một cuộc đời thành công và viên mãn — vẫn có vô vàn con đường để vươn tới ước mơ, bất chấp những khó khăn đi kèm.
                </p>
              </section>

              <section id="faqs" className="adhd-section">
                <h2>Câu Hỏi Thường Gặp Về Cuộc Sống Với ADHD</h2>
                
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
              </section>

              {/* Conclusion */}
              <section className="adhd-section">
                <h3>Lời Kết</h3>
                <div style={{background: '#e7f3ff', padding: '25px', borderRadius: '12px', margin: '20px 0'}}>
                <p>
                  Cuộc sống với ADHD không phải là hành trình dễ dàng, nhưng nó có thể trở thành một cuộc phiêu lưu đầy ý nghĩa khi chúng ta học cách tận dụng những điểm mạnh độc đáo của mình. Hãy nhớ rằng mỗi thử thách đều là cơ hội để học hỏi và phát triển. Với sự kiên nhẫn, hiểu biết và hỗ trợ từ cộng đồng, chúng ta có thể tạo ra một cuộc sống thực sự có ý nghĩa.
                </p>
                </div>
                <p style={{textAlign: 'center', fontWeight: 'bold', color: 'var(--dark-slate-grey)'}}>
                  Bạn không đơn độc trên hành trình này! 🌟
                </p>
              </section>    
            </article>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ADHDLife;