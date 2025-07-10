import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/AboutADHD.css';
import RelatedArticles from './RelatedArticles';

const ADHDAndHealth = () => {
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
      question: "ADHD có thực sự ảnh hưởng đến tất cả các khía cạnh của cuộc sống không?",
      answer: "Có, ADHD có thể ảnh hưởng đến nhiều khía cạnh trong cuộc sống hằng ngày, từ công việc, mối quan hệ, sức khỏe đến việc quản lý cảm xúc. Tuy nhiên, với sự hỗ trợ và chiến lược phù hợp, những người mắc ADHD hoàn toàn có thể sống một cuộc sống trọn vẹn và thành công."
    },
    {
      question: "Làm thế nào để quản lý tốt các triệu chứng ADHD trong cuộc sống hàng ngày?",
      answer: "Việc quản lý ADHD hiệu quả thường bao gồm sự kết hợp giữa điều trị, các chiến lược đối phó cá nhân, tạo môi trường hỗ trợ và xây dựng thói quen có cấu trúc. Quan trọng nhất là tìm ra phương pháp phù hợp với bản thân và kiên trì thực hiện."
    },
    {
      question: "ADHD có thể được 'chữa khỏi' hoàn toàn không?",
      answer: "ADHD là một tình trạng thần kinh suốt đời, không thể 'chữa khỏi' hoàn toàn. Tuy nhiên, các triệu chứng có thể được quản lý hiệu quả thông qua điều trị, liệu pháp và các chiến lược sống. Nhiều người mắc ADHD có cuộc sống thành công và hạnh phúc khi biết cách quản lý tình trạng của mình."
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
                ADHD & Sức khỏe
              </h1>
              
              <p className="adhd-subtitle">
                ADHD không chỉ là một tình trạng hành vi; nó còn có tác động đáng kể đến sức khỏe thể chất và tinh thần. Việc quản lý đúng cách là rất quan trọng để giảm thiểu rủi ro liên quan đến các tình trạng bệnh lý đi kèm và cải thiện sức khỏe tổng thể.
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
                    Lời khuyên và chiến lược từ chuyên gia
                  </a>
                  <a
                    href="#health-happiness"
                    className={`adhd-nav-item${activeNav === 'health-happiness' ? ' active' : ''}`}
                    onClick={() => handleNavClick('health-happiness')}
                  >
                    ADHD liên quan gì đến sức khỏe và hạnh phúc?
                  </a>
                  <a
                    href="#mental-health"
                    className={`adhd-nav-item${activeNav === 'mental-health' ? ' active' : ''}`}
                    onClick={() => handleNavClick('mental-health')}
                  >
                    Sức khỏe tâm thần và ADHD
                  </a>
                  <a
                    href="#physical-health"
                    className={`adhd-nav-item${activeNav === 'physical-health' ? ' active' : ''}`}
                    onClick={() => handleNavClick('physical-health')}
                  >
                    ADHD ảnh hưởng đến sức khỏe thể chất
                  </a>
                  <a
                    href="#lifestyle"
                    className={`adhd-nav-item${activeNav === 'lifestyle' ? ' active' : ''}`}
                    onClick={() => handleNavClick('lifestyle')}
                  >
                    Lối sống khỏe mạnh với ADHD
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
                  <h4 style={{textAlign: 'center'}}>Hỗ Trợ Sức Khỏe ADHD!</h4>
                  <p style={{textAlign: 'center'}}>Chúng tôi cung cấp các tài nguyên và chiến lược thực tế để giúp bạn quản lý sức khỏe và cải thiện chất lượng cuộc sống với ADHD. Từ lời khuyên dinh dưỡng đến kỹ thuật quản lý căng thẳng.</p>
                  <button className="adhd-cta-button" style={{display: 'block', margin: '0 auto'}}>Khám phá tài nguyên</button>
                </div>
              </div>
            </aside>

            {/* Main Article */}
            <article className="adhd-article-content">

              <section id="overview" className="adhd-section">
                <h2>Tối ưu sức khỏe và hạnh phúc với ADHD: Lời khuyên và chiến lược từ chuyên gia</h2>
                
                <p>
                  Khi nhắc đến <strong>Rối loạn Tăng động Giảm chú ý (ADHD)</strong>, người ta thường gán cho nó nhiều định kiến tiêu cực. 🙁 Nhiều người tin rằng được chẩn đoán ADHD chỉ dẫn đến rắc rối, khó khăn và thử thách. Họ có thể cho rằng ADHD chỉ mang lại căng thẳng và lo âu, đặc biệt khi bạn phải kiểm soát các triệu chứng. Đôi khi ta có cảm giác như người khác chỉ nhìn mình như một cỗ máy hỏng cần được sửa chữa, và ta sẽ chẳng bao giờ phát huy được hết tiềm năng của mình.
                </p>

                <p>
                  Những hiểu lầm từ xã hội có thể càng khiến chúng ta thêm tổn thương. Thay vì được giúp đỡ, chúng ta thường tự rút lui và hình thành một dạng "huấn luyện hành vi" để đối phó. 😢
                </p>

                <p>
                  Tuy nhiên, chúng ta không chắc liệu những cơ chế đối phó này có thực sự giúp kiểm soát triệu chứng ADHD hay không. Có thể, chúng lại là yếu tố nguy cơ làm trầm trọng thêm tình trạng sức khỏe của ta. Mặc dù nghĩ rằng đang làm tốt nhất có thể để đối phó với ADHD, nhưng thực chất, những hành vi này có thể khiến chúng ta thêm mệt mỏi và làm tình trạng sức khỏe tinh thần xấu đi 😨. Điều này còn ngăn cản chúng ta sống khỏe mạnh và đạt được hạnh phúc như mong muốn.
                </p>
              </section>

              <section id="health-happiness" className="adhd-section">
                <h2>ADHD liên quan gì đến sức khỏe và hạnh phúc?</h2>
                
                <p>
                  Một số rối loạn sức khỏe tâm thần có thể ảnh hưởng đến cách chúng ta nhìn nhận cuộc sống 🤔. Ví dụ, người mắc rối loạn lo âu có thể khó giao tiếp với người khác như họ mong muốn. Người mắc rối loạn lưỡng cực có thể gặp khó khăn trong việc kiểm soát cảm xúc và kỹ năng xã hội. Người bị trầm cảm có thể có sự mất cân bằng các hóa chất trong não, ảnh hưởng đến sinh hoạt hằng ngày.
                </p>

                <p>
                  Tương tự, người được chẩn đoán ADHD có thể trải qua những tình huống phức tạp ảnh hưởng đến mức độ hạnh phúc và sức khỏe của họ. Khi người mắc ADHD "buông thả" theo hành vi bốc đồng, họ có thể kích thích sản sinh dopamine và norepinephrine trong não. Điều này khiến họ cảm thấy rất vui trong chốc lát, nhưng cũng có thể khiến việc kiểm soát cảm xúc hoặc bắt đầu các hoạt động trở nên khó khăn 😓.
                </p>

                <p>
                  Do ADHD ảnh hưởng đến cách não hoạt động, nó khiến ta dễ mắc lỗi do mất tập trung. Khi bị phân tâm hoặc không thể duy trì sự chú ý, ta dễ bỏ sót các chi tiết quan trọng hay công việc thường ngày, dẫn đến căng thẳng, thất vọng và giảm sút lòng tự trọng.
                </p>

                <p>
                  Ngoài những đặc điểm này, một chuyên gia sức khỏe tâm thần có thể chẩn đoán ADHD dựa trên các biểu hiện thường gặp. Một số người có dạng ADHD chủ yếu là mất chú ý — khó tập trung vào chi tiết hoặc nhiệm vụ. Một số khác có dạng ADHD chủ yếu là tăng động và bốc đồng — thường có hành vi gây rối 🏃 và dễ hành động không suy nghĩ. Một số người có biểu hiện kết hợp cả hai dạng, khiến việc kiểm soát bệnh trở nên khó khăn hơn.
                </p>

                <p>
                  Vậy những triệu chứng này ảnh hưởng gì đến sức khỏe tổng thể của chúng ta? Hãy cùng tìm hiểu mối liên hệ giữa ADHD và sức khỏe thể chất — tinh thần.
                </p>
              </section>

              <section id="mental-health" className="adhd-section">
                <h2>Sức khỏe tâm thần và ADHD</h2>
                
                <p>
                  ADHD là một trong những rối loạn tâm thần phổ biến nhất, và điều quan trọng là phải hiểu ADHD ảnh hưởng thế nào đến sức khỏe toàn diện. Theo thống kê, ADHD thường đi kèm với các rối loạn tâm thần khác, hoặc là dấu hiệu khởi phát của những rối loạn khác. Có đến <strong>50% người lớn mắc ADHD cũng bị rối loạn lo âu</strong>. Trẻ em mắc ADHD cũng có nguy cơ cao phát triển rối loạn cảm xúc, rối loạn học tập, và các vấn đề tâm thần khác 🩺.
                </p>

                <p>
                  Các triệu chứng ADHD ở trẻ có thể làm giảm lòng tự trọng, ảnh hưởng đến sự phát triển trí tuệ cảm xúc. Đặc biệt nếu có sự nuôi dạy thiếu tích cực hoặc thiếu hỗ trợ cảm xúc, trẻ có thể cảm thấy bị cô lập và không được thấu hiểu. Điều này ảnh hưởng đến các mối quan hệ với gia đình, bạn bè, và cả đồng nghiệp khi trưởng thành 😭.
                </p>

                <p>
                  Khi sức khỏe tinh thần bị ảnh hưởng bởi ADHD và các yếu tố môi trường, chúng ta dễ rơi vào trạng thái cáu gắt, khó kiểm soát cảm xúc. Những hoạt động tưởng như đơn giản với người khác lại có thể khiến chúng ta choáng ngợp, từ đó nản chí và rơi vào trạng thái cô lập 😥.
                </p>

                <p>
                  Do đó, việc xây dựng <strong>kế hoạch điều trị ADHD một cách bài bản</strong> là vô cùng quan trọng để ngăn chặn những hậu quả dài hạn, cho dù đó là sử dụng thuốc, trị liệu tâm lý, hay thay đổi lối sống. Đồng thời, ta cũng cần cân nhắc kỹ lưỡng lợi ích và rủi ro của các phương pháp điều trị để tận dụng hiệu quả nhất.
                </p>
              </section>

              <section id="physical-health" className="adhd-section">
                <h2>ADHD ảnh hưởng đến sức khỏe thể chất thế nào?</h2>
                
                <p>
                  Trẻ nhỏ mắc ADHD đôi khi rất kén ăn. Do nhạy cảm với các kích thích bên ngoài, trẻ dễ bị quá tải bởi mùi, vị hoặc kết cấu của thức ăn. Điều này có thể dẫn đến chế độ ăn hạn chế và thiếu dinh dưỡng cần thiết. Nếu không được điều trị đúng cách, hành vi của trẻ có thể bị ảnh hưởng và cản trở sự phát triển thể chất 📈.
                </p>

                <p>
                  Đối với người trưởng thành mắc ADHD, các yếu tố xã hội và môi trường có thể khiến họ bốc đồng và đưa ra các quyết định không tốt như bỏ bữa, mất ngủ, ăn uống thiếu lành mạnh. Nếu không kiểm soát được các triệu chứng tăng động, việc duy trì lối sống khỏe mạnh sẽ càng khó khăn hơn 😞.
                </p>

                <p>
                  Khả năng kiểm soát việc ăn uống cũng bị ảnh hưởng. Những thực phẩm như đồ ngọt và caffeine ☕ có thể tạm thời thỏa mãn nhu cầu dopamine, nhưng cơ thể sẽ có xu hướng tiêu thụ thực phẩm không lành mạnh nhiều hơn. Ăn quá nhiều đường 🍩 hoặc cà phê có thể gây rối loạn hệ thần kinh trung ương và làm tăng nguy cơ mắc các bệnh như tim mạch, tiểu đường, béo phì.
                </p>

                <p>
                  Điều quan trọng là phải nhớ rằng <strong>điều trị ADHD không phải là giải pháp một lần là xong</strong>, mà là cả một quá trình học hỏi cách quản lý tình trạng này để sống khỏe mạnh cả về thể chất lẫn tinh thần.
                </p>
              </section>

              <section id="lifestyle" className="adhd-section">
                <h2>Kiểm soát triệu chứng ADHD là chìa khóa cho lối sống khỏe mạnh</h2>
                
                <p>
                  Nói thì dễ, làm thì khó 👌. Tuy nhiên, cách cơ bản nhất để cải thiện sức khỏe thể chất và tinh thần là hiểu và kiểm soát các triệu chứng ADHD. Khi biết cách đối mặt với tình trạng này, chúng ta có thể tạo dựng một lối sống giúp ngăn ngừa hoặc giảm nhẹ tác động của ADHD lên cơ thể.
                </p>

                <p>
                  Việc kiểm soát triệu chứng có thể thúc đẩy hành vi tích cực, khuyến khích tham gia các hoạt động và chăm sóc cơ thể. Từ chế độ ăn uống đến việc tập thể dục đều đặn, ta có thể áp dụng nhiều phương pháp khác nhau để giảm triệu chứng tăng động hay bốc đồng đi kèm với ADHD. Nhờ vậy, ta sẽ sống tích cực và hiệu quả hơn.
                </p>

                <p>
                  Tìm kiếm <strong>mạng lưới hỗ trợ phù hợp</strong> cũng đóng vai trò quan trọng 🤗. Một môi trường tích cực có thể giúp ta tránh những suy nghĩ tiêu cực. Khi được bao quanh bởi gia đình, bạn bè và chuyên gia hiểu rõ ADHD, việc đối mặt với tình trạng này sẽ dễ dàng hơn nhiều. Đồng thời, sự tự tin và lòng tự trọng cũng được nâng cao.
                </p>

                <p>
                  Với sự ủng hộ tinh thần từ những người thân yêu và chuyên gia, ta có thể vượt qua các hậu quả về thể chất do ADHD gây ra. Kết hợp với nỗ lực tự thân để kiểm soát triệu chứng và duy trì lối sống lành mạnh, ta hoàn toàn có thể sống một cuộc đời trọn vẹn dù đang đối mặt với rối loạn sức khỏe tâm thần 💗.
                </p>
              </section>

              <section id="faqs" className="adhd-section">
                <h2>Câu Hỏi Thường Gặp Về ADHD và Sức Khỏe</h2>
                
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
                  Việc quản lý sức khỏe khi mắc ADHD đòi hỏi một cách tiếp cận toàn diện, từ việc hiểu rõ tình trạng của bản thân đến xây dựng các chiến lược phù hợp. Với sự hỗ trợ đúng đắn và kiên trì trong việc chăm sóc bản thân, mọi người đều có thể đạt được sức khỏe tối ưu và sống một cuộc sống hạnh phúc, trọn vẹn.
                </p>
                </div>
                <p style={{textAlign: 'center', fontWeight: 'bold', color: 'var(--dark-slate-grey)'}}>
                  Hãy nhớ rằng sức khỏe là hành trình, không phải đích đến! 💪🏻
                </p>
              </section>   
            </article>
          </div>
        </div>
        <RelatedArticles currentPage="health" />
      </div>
      <Footer />
    </>
  );
};

export default ADHDAndHealth;