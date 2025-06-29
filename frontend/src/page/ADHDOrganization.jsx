import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/AboutADHD.css';

const ADHDOrganization = () => {
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
      question: "Tại sao người mắc ADHD lại gặp khó khăn trong việc tổ chức?",
      answer: "ADHD ảnh hưởng đến chức năng điều hành của não – bao gồm kỹ năng tổ chức và khả năng lên kế hoạch. Não của người mắc ADHD xử lý thông tin khác biệt, khiến việc ưu tiên công việc, duy trì tập trung và quản lý trí nhớ ngắn hạn trở nên khó khăn."
    },
    {
      question: "Tất cả người mắc ADHD đều thiếu tổ chức phải không?",
      answer: "Không hẳn. ADHD ở người trưởng thành biểu hiện khác nhau ở từng người. Một số người có thể rất gọn gàng và có hệ thống tổ chức tốt, trong khi người khác gặp nhiều khó khăn hơn. Điều quan trọng là tìm ra phương pháp phù hợp với bản thân."
    },
    {
      question: "Tại sao tôi luôn hào hứng bắt đầu nhưng không thể hoàn thành dự án?",
      answer: "Điều này rất phổ biến với ADHD. Ban đầu, dopamine kích thích động lực và hứng thú, nhưng khi sự hưng phấn giảm, việc duy trì cấu trúc và động lực trở nên khó khăn. Người mắc ADHD thường giỏi bắt đầu hơn là kết thúc do dễ chán hoặc bị phân tâm."
    },
    {
      question: "Làm thế nào để cải thiện kỹ năng tổ chức khi mắc ADHD?",
      answer: "Một số chiến lược hiệu quả bao gồm: đặt mục tiêu cụ thể và thực tế, sử dụng công cụ như sổ tay hoặc lịch, bắt đầu từ việc nhỏ, tạo không gian làm việc phù hợp, và tìm kiếm hỗ trợ từ chuyên gia khi cần thiết."
    },
    {
      question: "Có thể 'che giấu' triệu chứng ADHD bằng kỹ năng tổ chức không?",
      answer: "Có thể. Nhiều người mắc ADHD đã phát triển các hệ thống và chiến lược riêng để quản lý triệu chứng và thích nghi với môi trường. Tuy nhiên, điều này đòi hỏi nỗ lực lớn và sự hỗ trợ phù hợp để duy trì lâu dài."
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
                Tổ chức ADHD
              </h1>
              
              <p className="adhd-subtitle">
                Đối phó hiệu quả với ADHD bao gồm việc phát triển các hệ thống và thói quen tổ chức được cá nhân hóa, sử dụng các công cụ như trình lập kế hoạch và ứng dụng được thiết kế để nâng cao khả năng quản lý thời gian và giảm sự lộn xộn trong cả không gian vật lý và tinh thần.
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
                    Khó Khăn Trong Việc Tổ Chức Cuộc Sống
                  </a>
                  <a
                    href="#brain-difference"
                    className={`adhd-nav-item${activeNav === 'brain-difference' ? ' active' : ''}`}
                    onClick={() => handleNavClick('brain-difference')}
                  >
                    Não Bộ ADHD Hoạt Động Khác Biệt
                  </a>
                  <a
                    href="#individual-differences"
                    className={`adhd-nav-item${activeNav === 'individual-differences' ? ' active' : ''}`}
                    onClick={() => handleNavClick('individual-differences')}
                  >
                    Sự Khác Biệt Cá Nhân
                  </a>
                  <a
                    href="#masking-symptoms"
                    className={`adhd-nav-item${activeNav === 'masking-symptoms' ? ' active' : ''}`}
                    onClick={() => handleNavClick('masking-symptoms')}
                  >
                    Che Giấu Triệu Chứng ADHD
                  </a>
                  <a
                    href="#project-enthusiasm"
                    className={`adhd-nav-item${activeNav === 'project-enthusiasm' ? ' active' : ''}`}
                    onClick={() => handleNavClick('project-enthusiasm')}
                  >
                    Hào Hứng Với Dự Án Mới
                  </a>
                  <a
                    href="#improvement-strategies"
                    className={`adhd-nav-item${activeNav === 'improvement-strategies' ? ' active' : ''}`}
                    onClick={() => handleNavClick('improvement-strategies')}
                  >
                    Cải Thiện Khả Năng Tổ Chức
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
                  <h4 style={{textAlign: 'center'}}>Hỗ Trợ Tổ Chức ADHD!</h4>
                  <p style={{textAlign: 'center'}}>Chúng tôi cung cấp các công cụ và hệ thống tổ chức được thiết kế riêng cho người mắc ADHD. Từ kỹ thuật quản lý thời gian đến thiết lập không gian làm việc hiệu quả.</p>
                  <button className="adhd-cta-button" style={{display: 'block', margin: '0 auto'}}>Khám phá tài nguyên</button>
                </div>
              </div>
            </aside>

            {/* Main Article */}
            <article className="adhd-article-content">

              <section id="overview" className="adhd-section">
                <h2>ADHD Ở Người Trưởng Thành Và Những Khó Khăn Trong Việc Tổ Chức Cuộc Sống</h2>
                
                <p>
                  <strong>Rối loạn Tăng động Giảm chú ý (ADHD)</strong> có thể ảnh hưởng đến nhiều khía cạnh trong cuộc sống hằng ngày của chúng ta. Một người được chẩn đoán mắc hội chứng thần kinh này có thể gặp khó khăn trong việc kiểm soát cảm xúc, né tránh tiếp xúc xã hội vì sự tăng động, hoặc mất tập trung khi cần thiết nhất 🙁. Những đặc điểm của ADHD này không chỉ làm rối loạn cuộc sống của chính chúng ta mà còn ảnh hưởng đến những người xung quanh. Đồng thời, cũng có những vấn đề mà chỉ người mắc ADHD mới cảm nhận được và người khác thường không nhận ra.
                </p>

                <p>
                  Một trong những triệu chứng ít được biết đến của ADHD ở người lớn là <strong>khó khăn trong việc ưu tiên và tổ chức công việc</strong>. Theo nghiên cứu, ADHD ảnh hưởng đến chức năng điều hành của não – bao gồm kỹ năng tổ chức và khả năng lên kế hoạch. Có những lúc chúng ta không thể xác định được việc nào là quan trọng nhất để làm trước, hoặc không tìm được động lực để hoàn thành mọi thứ đúng hạn. Kết quả là chúng ta lại trì hoãn đến sát hạn cuối 😭.
                </p>

                <p>
                  Vì vậy mới có những lúc ta quên mua những món đồ cần thiết, hoặc không hoàn thành được mục tiêu vì đã trì hoãn quá lâu. Điều đó thật sự rất bực bội – không chỉ với người mắc ADHD mà còn với cả những người xung quanh. Nhưng bạn có bao giờ tự hỏi: điều gì khiến cho kỹ năng tổ chức của người ADHD gặp nhiều vấn đề đến vậy không? 🤔
                </p>
              </section>

              <section id="brain-difference" className="adhd-section">
                <h2>Não Bộ ADHD Hoạt Động Khác Biệt</h2>
                
                <p>
                  Não của người mắc ADHD xử lý thông tin khác với người bình thường. Điều đó có nghĩa là một số người có não hoạt động quá mức, thông tin "chạy" liên tục 💫 khiến họ khó tập trung. Họ có thể nghĩ ra nhiều kịch bản và chiến lược để đạt được mục tiêu, nhưng vấn đề lại nằm ở khâu thực hiện – tức là cách họ triển khai kế hoạch.
                </p>

                <p>
                  Ngoài ra, những triệu chứng không tập trung cũng góp phần vào sự thiếu tổ chức. Có những lúc ta dành hàng giờ để mơ mộng hay để đầu óc trôi dạt thay vì tập trung vào việc cần làm. Chúng ta dễ bị phân tâm bởi bất cứ điều gì – khiến việc hoàn thành nhiệm vụ trở nên rất khó 😅.
                </p>

                <p>
                  Một yếu tố khác là ảnh hưởng của ADHD đến <strong>trí nhớ ngắn hạn (working memory)</strong> – phần não giúp ta ghi nhớ và xử lý thông tin để sử dụng sau đó. Khi cảm thấy quá tải, chúng ta thường quên mất những chi tiết quan trọng cần thiết để sắp xếp mọi thứ cho hợp lý.
                </p>
              </section>

              <section id="individual-differences" className="adhd-section">
                <h2>Người Lớn Mắc ADHD Có Luôn Gặp Khó Khăn Trong Việc Tổ Chức Không?</h2>
                
                <p>
                  Bạn có thể tự hỏi: liệu sự bừa bộn và thiếu ngăn nắp có đồng nghĩa với ADHD? Câu trả lời là <strong>KHÔNG</strong>. Vì ADHD ở người trưởng thành biểu hiện khác nhau, điều đúng với tôi chưa chắc đúng với bạn 👌. Có người quản lý tài liệu rất tốt và gọn gàng, trong khi có người – như tôi – không thể tìm ra giấy sao kê ngân hàng của mình nằm ở đâu.
                </p>

                <p>
                  Khi chúng ta cố gắng tổ chức mọi thứ, đôi khi kết quả lại càng rối hơn. Tôi là minh chứng sống cho điều đó. Tất cả đồ đạc của tôi – nếu bạn hỏi – tôi vẫn biết nó ở đâu. Nhưng mọi thứ bắt đầu rối tung lên khi tôi phải dọn dẹp thực sự hoặc sắp xếp lại căn phòng.
                </p>

                <p>
                  Dĩ nhiên, vẫn có người có kỹ năng tổ chức tuyệt vời. Họ dùng giấy nhớ để lên lịch, có danh sách việc cần làm 📝 và thực hiện rất hiệu quả. Thậm chí họ còn có năng lượng để làm những việc mình yêu thích. Tôi thật sự ngưỡng mộ những người mắc ADHD mà vẫn có thể quản lý công việc và tận hưởng cuộc sống. Liệu họ có ADHD không? Có chứ – nhưng họ đã tìm ra cách để tổ chức suy nghĩ và ý tưởng của mình tốt hơn.
                </p>
              </section>

              <section id="masking-symptoms" className="adhd-section">
                <h2>Che Giấu Triệu Chứng ADHD: Kỹ Năng Tổ Chức</h2>
                
                <p>
                  Một số người ADHD có thể rất giỏi trong việc tổ chức công việc vì họ đã phát triển được hệ thống và chiến lược riêng để duy trì công việc của mình 😯. Nhưng nếu quan sát kỹ, họ cũng từng giống như chúng ta – vật lộn với việc xác định ưu tiên. Họ chỉ đang <strong>"che giấu"</strong> những đặc điểm ADHD của mình để dễ thích nghi với môi trường.
                </p>

                <p>
                  Tôi có một người bạn cũng được chẩn đoán muộn. Trước khi biết bạn ấy bị ADHD, tôi rất ngưỡng mộ cách bạn ấy lập danh sách công việc mỗi sáng, hoàn thành từng việc, lên kế hoạch tuần một cách bài bản 📅. Cho đến khi bạn chia sẻ câu chuyện ADHD của mình, tôi mới hiểu: bạn ấy cũng gặp khó khăn trong việc tổ chức suy nghĩ – nhưng đã phát triển được một hệ thống để vượt qua điều đó.
                </p>

                <p>
                  Bạn ấy từng bị gia đình chỉ trích rất nhiều vì không sắp xếp được công việc. Những lời phê bình, so sánh với người không mắc ADHD khiến bạn ấy cảm thấy mình "vô dụng" 😭. Điều đó khiến bạn ấy quyết định tìm đến bác sĩ tâm lý. Sau đó, bạn đã tự xây dựng hệ thống tổ chức riêng và kiên trì theo nó. Điều này cho tôi thấy rằng: có được sự hỗ trợ đúng đắn sẽ giúp cuộc sống với ADHD trở nên dễ chịu hơn 🧑‍🤝‍🧑.
                </p>
              </section>

              <section id="project-enthusiasm" className="adhd-section">
                <h2>Hào Hứng Với Một Dự Án Mới</h2>
                
                <p>
                  Bạn đã bao giờ cảm thấy cực kỳ hào hứng khi bắt đầu một dự án mới chưa? Tôi thì rồi 🙋‍♀️. Ý tưởng tuôn trào, bạn cảm thấy mình có thể làm được mọi thứ. Khi ta thật sự hứng thú, dù có chuyện gì xảy ra đi nữa, ta vẫn sẽ làm cho bằng được. Chúng ta cảm thấy có mục tiêu, có động lực 💗.
                </p>

                <p>
                  Những người ADHD thường được thúc đẩy bởi sự hứng thú, và <strong>dopamine</strong> là yếu tố kích thích động lực đó. Khi não bộ được "thưởng" dopamine, ta có thể làm việc năng suất trong cả tuần. Nhưng dopamine không thể duy trì mãi 🙁 – sau vài ngày, sự hưng phấn biến mất.
                </p>

                <p>
                  Khi chức năng điều hành kém, việc duy trì cấu trúc cho dự án trở nên khó khăn. Ta thường giỏi bắt đầu hơn là kết thúc – vì dễ chán hoặc bị cuốn vào thứ khác 🥱. Mất tập trung, không quản lý thời gian tốt, kết quả là… dự án bị bỏ dở.
                </p>
              </section>

              <section id="improvement-strategies" className="adhd-section">
                <h2>Cải Thiện Khả Năng Tổ Chức Với ADHD</h2>
                
                <p>
                  Người trưởng thành mắc ADHD có quá nhiều thứ để suy nghĩ. Khó tập trung, khó tổ chức suy nghĩ, triệu chứng tăng động và cả lo âu xã hội – cùng với việc luôn cần dopamine. Cuộc sống với ADHD không dễ dàng, nhưng không phải là không thể. Dưới đây là một vài mẹo giúp bạn cải thiện kỹ năng tổ chức:
                </p>

                <div style={{background: '#e8f4fd', padding: '25px', borderRadius: '12px', margin: '20px 0'}}>
                  <h4 style={{marginBottom: '15px', color: '#2c3e50'}}>5 Chiến lược tổ chức hiệu quả:</h4>
                  <ol style={{margin: 0, paddingLeft: '20px'}}>
                    <li style={{marginBottom: '10px'}}>
                      <strong>Đặt mục tiêu cụ thể cho ngày hoặc tuần</strong> – và đảm bảo là nó thực tế. Quá nhiều mục tiêu chỉ làm bạn thêm căng thẳng. Hãy biến nó thành trò chơi để làm cho nó thú vị 👌.
                    </li>
                    <li style={{marginBottom: '10px'}}>
                      <strong>Sử dụng sổ tay, lịch hoặc bảng trắng</strong> – để nhắc nhở và tổ chức ý tưởng. Đặt ở nơi bạn dễ nhìn thấy 📆.
                    </li>
                    <li style={{marginBottom: '10px'}}>
                      <strong>Bắt đầu từ việc nhỏ</strong> – sau đó tăng độ khó dần. Làm xong việc nhỏ, hãy tự thưởng. Lặp lại bước này cho đến khi nó trở thành thói quen 👍.
                    </li>
                    <li style={{marginBottom: '10px'}}>
                      <strong>Tạo không gian làm việc phù hợp</strong> – có thể là phòng ngủ, bàn làm việc, nơi bạn thấy thư giãn. Loại bỏ mọi thứ gây xao nhãng. Nếu bạn thích làm việc ban đêm, hãy xây dựng một thói quen buổi tối 🖥️.
                    </li>
                    <li style={{marginBottom: '10px'}}>
                      <strong>Tìm đến chuyên gia</strong> – nếu bạn thấy không thể tự tổ chức được, hãy tìm đến bác sĩ tâm lý hoặc chuyên gia về ADHD 🧑‍⚕️. Họ có thể giúp bạn thiết kế kế hoạch phù hợp với nhu cầu cá nhân.
                    </li>
                  </ol>
                </div>

                <p>
                  Việc thiếu kỹ năng tổ chức có thể là một đặc điểm cố hữu, nhưng không có nghĩa là không thể thay đổi. Hãy bắt đầu từ những thói quen nhỏ, kiên trì, và dần dần bạn sẽ thấy sự tiến bộ. Có được sự hỗ trợ phù hợp từ cộng đồng ADHD sẽ tạo ra sự khác biệt lớn. Hãy tham gia các nhóm hỗ trợ, diễn đàn để được thấu hiểu và tiếp thêm động lực. Và đừng quên: hãy kiên nhẫn với chính mình, và luôn ăn mừng những thành công nhỏ – vì đôi khi, chỉ cần một chút động lực là đủ để tiếp tục ❣️.
                </p>
              </section>

              <section id="faqs" className="adhd-section">
                <h2>Câu Hỏi Thường Gặp Về Tổ Chức ADHD</h2>
                
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
                  Tổ chức cuộc sống khi mắc ADHD có thể là một thách thức lớn, nhưng không phải là bất khả thi. Mỗi người có cách tổ chức riêng phù hợp với bộ não ADHD của mình. Quan trọng là tìm ra hệ thống hoạt động tốt với bạn, kiên trì thực hiện, và đừng ngại tìm kiếm hỗ trợ khi cần thiết.
                </p>
                </div>
                <p style={{textAlign: 'center', fontWeight: 'bold', color: 'var(--dark-slate-grey)'}}>
                  Hãy nhớ rằng tiến bộ nhỏ cũng là tiến bộ đáng kể! 🌟
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

export default ADHDOrganization;