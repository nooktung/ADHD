import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/AboutADHD.css';
import RelatedArticles from './RelatedArticles';

const ADHDWorkplace = () => {
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
      question: "Tại sao việc tìm kiếm và duy trì công việc lại khó khăn với người mắc ADHD?",
      answer: "Người mắc ADHD cần kiểm soát nhiều triệu chứng như mất tập trung, tăng động, bốc đồng, và khó tổ chức. Không giống người thần kinh điển hình, họ không thể đơn giản nhận thêm trách nhiệm mà cần tìm môi trường và công việc phù hợp với đặc điểm não bộ của mình."
    },
    {
      question: "Tại sao người ADHD thường 'nhảy việc' nhiều?",
      answer: "Bộ não ADHD cần sự mới mẻ và được thúc đẩy bởi dopamine. Khi công việc trở nên quen thuộc và nhàm chán, họ mất hứng thú và động lực. Việc tìm kiếm những thử thách mới là cách não bộ ADHD duy trì sự tập trung và hiệu suất."
    },
    {
      question: "ADHD có những điểm mạnh gì trong môi trường làm việc?",
      answer: "Người mắc ADHD thường có những điểm mạnh như: suy nghĩ sáng tạo và khác biệt, không ngại thử thách, đầy nhiệt huyết khi hứng thú với công việc, và có khả năng tập trung cao độ (hyperfocus) khi làm việc mình yêu thích."
    },
    {
      question: "Làm thế nào để quản lý thời gian hiệu quả khi mắc ADHD?",
      answer: "Một số chiến lược bao gồm: tạo danh sách việc cần làm chi tiết, sử dụng timer và nhắc nhở, chia nhỏ dự án lớn thành các bước nhỏ, tạo deadline trung gian, và tìm cách làm cho công việc trở nên thú vị hơn."
    },
    {
      question: "Có nên tiết lộ về ADHD với nhà tuyển dụng không?",
      answer: "Đây là quyết định cá nhân. Bạn có thể chọn không tiết lộ ban đầu và chỉ chia sẻ khi cần thiết để xin sự hỗ trợ hợp lý. Quan trọng là tập trung vào khả năng và giá trị bạn mang lại cho công ty, đồng thời chuẩn bị các chiến lược quản lý triệu chứng."
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
                Công việc ADHD
              </h1>
              
              <p className="adhd-subtitle">
                Một sở thích có thể là một thách thức khá lớn khi bạn mắc ADHD. Bạn có thể tưởng tượng được cảm giác khi bạn phải làm việc không? ADHD ảnh hưởng đến sự nghiệp của chúng ta như thế nào? Tìm hiểu tại đây.
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
                    ADHD Ảnh Hưởng Đến Cách Làm Việc
                  </a>
                  <a
                    href="#understanding-impact"
                    className={`adhd-nav-item${activeNav === 'understanding-impact' ? ' active' : ''}`}
                    onClick={() => handleNavClick('understanding-impact')}
                  >
                    Hiểu ADHD Ảnh Hưởng Đến Mức Độ Quan Tâm
                  </a>
                  <a
                    href="#workplace-challenges"
                    className={`adhd-nav-item${activeNav === 'workplace-challenges' ? ' active' : ''}`}
                    onClick={() => handleNavClick('workplace-challenges')}
                  >
                    Người ADHD Trong Môi Trường Làm Việc
                  </a>
                  <a
                    href="#positive-aspects"
                    className={`adhd-nav-item${activeNav === 'positive-aspects' ? ' active' : ''}`}
                    onClick={() => handleNavClick('positive-aspects')}
                  >
                    Mặt Tích Cực Của ADHD Trong Công Việc
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
                <div className="adhd-cta-section" style={{textAlign: 'left'}}>
                  <div className="adhd-cta-illustration" style={{marginBottom: '1rem'}}>
                    <img src="/Mai Thị Lan Anh.jpg" alt="Mai Thị Lan Anh" style={{width: '150px', height: '200px', borderRadius: '4px', objectFit: 'cover', display: 'block', margin: '0 auto'}} />
                  </div>
                  <h4 style={{marginBottom: '1rem', color: 'var(--color)', fontWeight: 600, fontSize: '1rem'}}>Hỗ Trợ Sự Nghiệp ADHD!</h4>
                  <p style={{marginBottom: '1.5rem', color: 'var(--dark-slate-grey-2)', fontSize: '0.8rem', lineHeight: 1.5}}>
                    Chúng tôi cung cấp các chiến lược để thành công trong sự nghiệp khi mắc ADHD. 
                    Từ kỹ năng quản lý thời gian đến cách tận dụng điểm mạnh độc đáo của bạn.
                  </p>
                  <button className="adhd-cta-button">
                    Khám phá tài nguyên
                  </button>
                </div>
              </div>
            </aside>

            {/* Main Article */}
            <article className="adhd-article-content">

              <section id="overview" className="adhd-section">
                <h2>ADHD Ảnh Hưởng Đến Cách Chúng Ta Làm Việc Như Thế Nào?</h2>
                
                <p>
                  Tất cả chúng ta đều cần phải làm việc vào một thời điểm nào đó trong cuộc đời. Chúng ta cần tạo ra một nguồn thu nhập 💰 để đáp ứng cả nhu cầu và mong muốn cá nhân, cũng như đạt được những mục tiêu đã đề ra. Hãy nhớ rằng, ngay cả những người thần kinh điển hình (neurotypical) cũng gặp khó khăn trong công việc – họ phải cân nhắc rất nhiều yếu tố trước khi chọn nghề. Vậy nếu bạn mang một đặc điểm thần kinh khác biệt thì sao?
                </p>

                <p>
                  Đối với nhiều người trưởng thành mắc chứng <strong>Rối loạn Tăng động Giảm chú ý (ADHD)</strong>, việc tìm kiếm và duy trì công việc lại càng khó khăn hơn nhiều.
                </p>

                <p>
                  Việc tìm được một công việc phù hợp có thể là một thử thách rất lớn. Không giống như người thần kinh điển hình, chúng ta không thể đơn giản nhận thêm trách nhiệm, vì còn rất nhiều triệu chứng ADHD cần được kiểm soát. Đôi khi, chúng ta đơn giản là không thể đảm nhận một số nhiệm vụ nhất định vì nó quá khó đối với những người có ADHD 🥺.
                </p>

                <p>
                  Nhưng nếu chúng ta đã tìm được một công việc phù hợp, bộ não ADHD của chúng ta sẽ hoạt động như thế nào để dẫn đến thành công 🧠? Chúng ta cần chú ý điều gì khi đánh giá hiệu suất công việc? Các môi trường xã hội ảnh hưởng đến năng suất ra sao? Liệu người mắc ADHD có tỷ lệ nghỉ việc cao?
                </p>

              </section>

              <section id="understanding-impact" className="adhd-section">
                <h2>Hiểu ADHD Ảnh Hưởng Đến Mức Độ Quan Tâm Ra Sao</h2>
                
                <p>
                  Trước khi đi sâu vào cách chúng ta thích nghi với môi trường làm việc hiện đại, cần hiểu rõ ADHD ảnh hưởng thế nào đến ta. Mặc dù nhiều người ADHD có sự nghiệp rất thành công, nhưng họ có thể đã trải qua nhiều khó khăn với sự bốc đồng, tăng động, hoặc mất tập trung 👌.
                </p>

                <p>
                  <strong>Bộ não ADHD luôn tìm kiếm những điều thú vị.</strong> Động lực để làm việc thường xuất phát từ nhu cầu gia tăng dopamine – một chất dẫn truyền thần kinh liên quan đến hứng thú và phần thưởng 📉.
                </p>

                <p>
                  Khi tìm thấy thứ gì đó khiến ta đam mê hoặc cảm thấy có phần thưởng, bộ não ADHD sẽ tập trung cao độ vào hoạt động đó. Đây cũng là lý do tại sao người ADHD thường ưa mạo hiểm – bởi phần thưởng lớn hơn.
                </p>

                <p style={{background: '#fff3cd', padding: '15px', borderRadius: '8px', margin: '20px 0'}}>
                  💡 <strong>Điều này cũng có nghĩa là:</strong> nếu không có hứng thú, ta rất khó có động lực để làm việc.
                </p>
              </section>

              <section id="workplace-challenges" className="adhd-section">
                <h2>Người ADHD Trong Môi Trường Làm Việc</h2>
                
                <p>
                  Khi có ai đó mắc ADHD trong đội ngũ, bạn có thể tự hỏi liệu họ có thể hoàn thành công việc đúng cách hay không 🤔. Dĩ nhiên là có ảnh hưởng – nhưng ngoài khó khăn, người ADHD cũng mang lại nhiều điểm mạnh (sẽ đề cập sau).
                </p>

                <p>
                  Nếu triệu chứng không được kiểm soát, ADHD có thể ảnh hưởng nghiêm trọng đến hiệu suất công việc. Dưới đây là một số ví dụ:
                </p>

                <div style={{background: '#f8f9fa', padding: '20px', borderRadius: '8px', margin: '20px 0'}}>
                  <h3 style={{color: '#2c3e50', marginBottom: '15px'}}>🆕 Sự Mới Mẻ Của Công Việc Mới</h3>
                  <p>
                    Bạn còn nhớ cảm giác khi được nhận vào công việc đầu tiên không? Tôi thì nhớ như in – tôi rất hào hứng, đến mức không ngủ được vài đêm trước đó 🥱. Tôi nghiên cứu kỹ công việc, đăng ký khoá học liên quan, háo hức được bắt đầu.
                  </p>
                  <p>
                    Tuần đầu tiên trôi qua trong niềm vui. Môi trường làm việc yên tĩnh, ít người, tôi nhanh chóng nắm được quy trình và sẵn sàng đóng góp ý tưởng.
                  </p>
                  <p style={{color: '#28a745', fontWeight: 'bold'}}>→ Khi có hứng thú, chúng ta học rất nhanh.</p>
                  <p>
                    Nhưng chỉ sau vài tháng, mọi thứ trở nên lặp lại, nhàm chán. Tôi mất dần hứng thú, làm việc kém hiệu quả. Sau khi được chẩn đoán ADHD, tôi nhận ra nguyên nhân.
                  </p>
                  <p>
                    Bộ não ADHD cần sự mới mẻ. Khi công việc trở nên quá quen thuộc, chúng ta dễ chán nản. Vì vậy, người ADHD thường bị xem là "hay nhảy việc" – vì họ luôn đi tìm sự mới mẻ 👔.
                  </p>
                </div>

                <div style={{background: '#f8f9fa', padding: '20px', borderRadius: '8px', margin: '20px 0'}}>
                  <h3 style={{color: '#2c3e50', marginBottom: '15px'}}>📋 Khó Khăn Trong Việc Tổ Chức</h3>
                  <p>
                    Một trong những ảnh hưởng phổ biến nhất của ADHD là thiếu kỹ năng tổ chức. Người ADHD gặp khó trong việc sắp xếp cả suy nghĩ lẫn hành động 😵.
                  </p>
                  <p>
                    Chúng ta dễ quên lịch họp, không để ý deadline. Bàn làm việc bừa bộn, không tìm được đồ cần thiết, khiến mọi việc bị trì hoãn. Tình trạng mất trật tự này cũng diễn ra trong chính tâm trí 💭.
                  </p>
                  <p style={{color: '#28a745', fontWeight: 'bold'}}>→ Khi có nhiều tiếng ồn hoặc phiền nhiễu, khả năng tổ chức bị giảm sút rõ rệt.</p>
                  <p>
                    Điều này có thể làm ta trông thiếu chuyên nghiệp. Vậy nên, cần tìm cách giảm thiểu sự xao nhãng và cải thiện không gian làm việc.
                  </p>
                </div>

                <div style={{background: '#f8f9fa', padding: '20px', borderRadius: '8px', margin: '20px 0'}}>
                  <h3 style={{color: '#2c3e50', marginBottom: '15px'}}>🎯 Hào Hứng Với Dự Án Lớn</h3>
                  <p>
                    Người ADHD thường nhận những dự án lớn đầy thử thách vì thấy thú vị. Nhưng điều này có thể là con dao hai lưỡi.
                  </p>
                  <p>
                    Chúng ta có thể gặp khó khăn trong việc ước lượng thời gian, xung đột với đồng nghiệp hoặc hoàn thành không đúng hạn. Tuy nhiên, nếu biết cách quản lý, thành công là hoàn toàn khả thi 🏆.
                  </p>
                  <p style={{color: '#28a745', fontWeight: 'bold'}}>→ Chúng ta giàu sáng tạo và nhìn vấn đề theo cách khác biệt 📦.</p>
                </div>

                <div style={{background: '#f8f9fa', padding: '20px', borderRadius: '8px', margin: '20px 0'}}>
                  <h3 style={{color: '#2c3e50', marginBottom: '15px'}}>⏰ Gặp Khó Khăn Với Quản Lý Thời Gian</h3>
                  <p>
                    Khi làm một việc mà mình thích, ta làm rất tốt. Nhưng khi phải xử lý nhiều đầu việc cùng lúc, vấn đề quản lý thời gian bắt đầu xuất hiện.
                  </p>
                  <p>
                    Chúng ta thường đánh giá thấp thời gian cần thiết, hay trì hoãn rồi làm vội vào phút cuối 📆. Điều này dễ bị hiểu lầm là "lười biếng" hoặc "thiếu nghiêm túc".
                  </p>
                </div>

                <div style={{background: '#f8f9fa', padding: '20px', borderRadius: '8px', margin: '20px 0'}}>
                  <h3 style={{color: '#2c3e50', marginBottom: '15px'}}>😴 Nhàm Chán Với Công Việc Lặp Lại</h3>
                  <p>
                    Công việc ngày nào cũng như ngày nào khiến ta cảm thấy tẻ nhạt 🥱. Khi buồn chán, tâm trí dễ "lang thang", tìm kiếm điều gì đó thú vị hơn 👀.
                  </p>
                  <p style={{color: '#28a745', fontWeight: 'bold'}}>→ Cảm giác quen thuộc quá mức khiến ta mất động lực và dễ phạm lỗi.</p>
                  <p>
                    Giải pháp là biến công việc thú vị hơn, ví dụ như thay đổi cách tiếp cận, đề xuất hoạt động nhóm, hoặc tự tạo thử thách để bản thân cảm thấy hứng thú.
                  </p>
                </div>

                <div style={{background: '#f8f9fa', padding: '20px', borderRadius: '8px', margin: '20px 0'}}>
                  <h3 style={{color: '#2c3e50', marginBottom: '15px'}}>🗣️ Bối Rối Trước Chỉ Dẫn Bằng Lời Nói</h3>
                  <p>
                    Khi các triệu chứng mất tập trung trỗi dậy, ta khó ghi nhớ lời dặn. Có thể hiểu ý chính, nhưng bỏ lỡ các chi tiết quan trọng.
                  </p>
                  <p style={{color: '#28a745', fontWeight: 'bold'}}>→ Việc có bản ghi chú hoặc danh sách việc cần làm sẽ giúp ích rất nhiều 📒.</p>
                </div>
              </section>

              <section id="positive-aspects" className="adhd-section">
                <h2>Mặt Tích Cực Của ADHD Trong Công Việc</h2>
                
                <p>
                  Không phải mọi thứ đều tiêu cực! Người ADHD có thể là tài sản quý giá cho công ty 🥰.
                </p>

                <div style={{background: '#d4edda', padding: '25px', borderRadius: '12px', margin: '20px 0'}}>
                  <h4 style={{marginBottom: '15px', color: 'black'}}>✨ Những điểm mạnh của người mắc ADHD:</h4>
                  <ul style={{margin: 0, paddingLeft: '20px'}}>
                    <li style={{marginBottom: '10px'}}>
                      <strong>Sáng tạo & khác biệt:</strong> chúng ta suy nghĩ không theo lối mòn, đưa ra giải pháp mới.
                    </li>
                    <li style={{marginBottom: '10px'}}>
                      <strong>Chấp nhận thử thách:</strong> không ngại khó khăn, luôn tìm cách thích nghi 💪.
                    </li>
                    <li style={{marginBottom: '10px'}}>
                      <strong>Đầy nhiệt huyết:</strong> khi đã hứng thú, chúng ta cống hiến hết mình và lan tỏa năng lượng tích cực.
                    </li>
                  </ul>
                </div>
              </section>

              <section id="faqs" className="adhd-section">
                <h2>Câu Hỏi Thường Gặp Về Công Việc ADHD</h2>
                
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
                <h3>Kết Luận</h3>
                <div style={{background: '#e7f3ff', padding: '25px', borderRadius: '12px', margin: '20px 0'}}>
                  <p>
                    <strong>ADHD không phải là khuyết tật hay bệnh tật</strong> – chỉ là não bộ của chúng ta được "lập trình" khác đi một chút. Nhưng một khi đã tìm ra điều mình yêu thích, dù có trí nhớ kém hay triệu chứng nào khác, chúng ta vẫn có thể phát triển kỹ năng đối phó và hoàn thành công việc một cách đáng kinh ngạc 😘.
                  </p>
                  <p>
                    Khi thực sự bị cuốn vào công việc, chúng ta quên đi mọi xao nhãng – và đó là lúc những điều tuyệt vời xảy ra. Vậy nên, nếu bạn đang tự hỏi tại sao mình đang chật vật với công việc, hãy nhớ rằng bạn vẫn có thể làm nên điều lớn lao ❤️.
                  </p>
                </div>
                <p style={{textAlign: 'center', fontWeight: 'bold', color: 'var(--dark-slate-grey)', marginTop: '20px'}}>
                  Hãy tìm ra công việc phù hợp và tỏa sáng theo cách riêng của bạn! 🌟
                </p>
              </section>    
            </article>
          </div>
        <RelatedArticles currentPage="workplace" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ADHDWorkplace;