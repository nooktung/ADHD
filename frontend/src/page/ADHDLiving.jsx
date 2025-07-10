import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/AboutADHD.css';
import RelatedArticles from './RelatedArticles';

const ADHDLiving = () => {
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
      question: "ADHD có thực sự ảnh hưởng đến cuộc sống hàng ngày không?",
      answer: "Có, ADHD ảnh hưởng đến rất nhiều khía cạnh của cuộc sống hàng ngày từ việc tập trung trong công việc, quản lý thời gian, đến duy trì các mối quan hệ. Tuy nhiên, với sự hỗ trợ và chiến lược phù hợp, những thách thức này có thể được quản lý hiệu quả."
    },
    {
      question: "Tại sao người ADHD khó ngủ?",
      answer: "Não bộ ADHD thường khó 'tắt máy', khiến nhiều người mắc ADHD gặp khó khăn trong việc chợp mắt dù có mệt mỏi. Điều này có thể do sự kích thích quá mức, lo âu, hoặc chu kỳ giấc ngủ bị rối loạn."
    },
    {
      question: "ADHD có ảnh hưởng đến hiệu suất công việc không?",
      answer: "ADHD có thể ảnh hưởng đến khả năng tập trung, trí nhớ làm việc và tổ chức công việc. Tuy nhiên, với môi trường phù hợp và sự hỗ trợ đúng lúc, người mắc ADHD hoàn toàn có thể vượt qua kỳ vọng và thể hiện sự sáng tạo độc đáo."
    },
    {
      question: "Làm thế nào để duy trì mối quan hệ khi mắc ADHD?",
      answer: "Chìa khóa là giao tiếp cởi mở về tình trạng ADHD của bạn, học cách quản lý cảm xúc và tìm kiếm sự hiểu biết từ những người xung quanh. Việc có mạng lưới hỗ trợ từ gia đình và bạn bè rất quan trọng."
    },
    {
      question: "ADHD có thể kèm theo các rối loạn tâm thần khác không?",
      answer: "Có, theo CDC, lên đến 80% người lớn mắc ADHD có thể mắc ít nhất một dạng rối loạn tâm thần khác. Đó là lý do tại sao việc chẩn đoán đúng và điều trị toàn diện là rất quan trọng."
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
                <img src="/image.png" alt="ADHD Daily Life" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px'}} />
              </div>
            </div>
            
            <div className="adhd-header-text">
              <div className="adhd-category">
                Nhóm Alight • Cuộc Sống Hàng Ngày
              </div>
              
              <h1 className="adhd-main-title">
                Hiểu biết sâu sắc về Cuộc sống Hàng ngày với ADHD
              </h1>
              
              <p className="adhd-subtitle">
                Sống chung với ADHD bao gồm việc vượt qua những thách thức độc đáo và khai thác điểm mạnh của từng cá nhân. Điều này thường có nghĩa là phải đối mặt với sự tập trung không ổn định, kiểm soát sự bốc đồng và tìm ra các chiến lược để sắp xếp các công việc hàng ngày.
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
                    Tổng Quan Về Cuộc Sống Hằng Ngày
                  </a>
                  <a
                    href="#my-life"
                    className={`adhd-nav-item${activeNav === 'my-life' ? ' active' : ''}`}
                    onClick={() => handleNavClick('my-life')}
                  >
                    Cuộc Sống Của Tôi Với ADHD
                  </a>
                  <a
                    href="#work-impact"
                    className={`adhd-nav-item${activeNav === 'work-impact' ? ' active' : ''}`}
                    onClick={() => handleNavClick('work-impact')}
                  >
                    ADHD Ảnh Hưởng Đến Công Việc
                  </a>
                  <a
                    href="#relationships"
                    className={`adhd-nav-item${activeNav === 'relationships' ? ' active' : ''}`}
                    onClick={() => handleNavClick('relationships')}
                  >
                    Duy Trì Các Mối Quan Hệ
                  </a>
                  <a
                    href="#health-risks"
                    className={`adhd-nav-item${activeNav === 'health-risks' ? ' active' : ''}`}
                    onClick={() => handleNavClick('health-risks')}
                  >
                    Nguy Cơ Với Sức Khỏe
                  </a>
                  <a
                    href="#comorbidities"
                    className={`adhd-nav-item${activeNav === 'comorbidities' ? ' active' : ''}`}
                    onClick={() => handleNavClick('comorbidities')}
                  >
                    Các Rối Loạn Kèm Theo
                  </a>
                  <a
                    href="#challenges"
                    className={`adhd-nav-item${activeNav === 'challenges' ? ' active' : ''}`}
                    onClick={() => handleNavClick('challenges')}
                  >
                    Quá Nhiều Điều Phải Đối Mặt
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
                    <img src="/Hanbook.jpg" alt="Hanbook" style={{width: '150px', height: '200px', borderRadius: '4px', objectFit: 'cover', display: 'block', margin: '0 auto'}} />
                  </div>
                  <h4 style={{textAlign: 'center'}}>Hiểu Rõ Cuộc Sống ADHD!</h4>
                  <p style={{textAlign: 'center'}}>Khám phá những thách thức và điểm mạnh của cuộc sống với ADHD. Chúng tôi chia sẻ kinh nghiệm thực tế và chiến lược quản lý hiệu quả để bạn có thể sống tốt hơn với ADHD.</p>
                  <button className="adhd-cta-button" style={{display: 'block', margin: '0 auto'}}>Tìm hiểu thêm</button>
                </div>
              </div>
            </aside>

            {/* Main Article */}
            <article className="adhd-article-content">

              <section id="overview" className="adhd-section">
                <h2>Tổng Quan Về Cuộc Sống Hằng Ngày Của Chúng Ta</h2>
                
                <p>
                  Một số người không mắc ADHD (người thần kinh điển hình - neurotypical) thường thắc mắc: liệu chứng <strong>Rối loạn Tăng động Giảm chú ý (ADHD)</strong> ảnh hưởng như thế nào đến các khía cạnh khác nhau của cuộc sống 🤔. Sau cùng thì, theo họ, họ cũng từng gặp phải những biểu hiện như hay quên, khó khăn trong việc tổ chức, hoặc thậm chí hay mơ mộng.
                </p>

                <p>
                  Dù đúng là những trải nghiệm này không chỉ riêng người có ADHD mới có, nhưng điều quan trọng cần nhấn mạnh là: với những ai mắc chứng rối loạn thần kinh này, <strong>các đặc điểm đó thường xuyên làm xáo trộn cuộc sống</strong>. Đó là lý do tại sao tôi hy vọng việc chia sẻ nhận thức và trải nghiệm từ góc nhìn của một người đã được chẩn đoán ADHD sẽ giúp người khác hiểu hơn về cách não bộ của người mắc ADHD hoạt động.
                </p>

                <p>
                  Mỗi người chúng ta có một cuộc sống khác nhau. Và điều này càng đúng với những người mắc chứng ADHD. Bởi vì ADHD là một tình trạng phức tạp, các triệu chứng và mức độ nghiêm trọng của chúng có thể khác nhau tùy từng người. Một số người gặp khó khăn trong việc tập trung hoặc thường xuyên bị "lạc trôi trong suy nghĩ", trong khi một số khác đã phát triển được các kỹ năng đối phó với những biểu hiện đó. Điều đúng với tôi có thể không đúng với bạn 😉.
                </p>

                <p>
                  Hiện tại, tôi có quá nhiều suy nghĩ về cách diễn đạt cuộc sống của người mắc ADHD. Có hàng ngàn ý tưởng quay cuồng trong đầu tôi, nhưng đôi khi tôi không thể kiểm soát được chúng để biến thành điều gì đó dễ hiểu 😞. Tuy nhiên, tôi sẽ cố gắng hết sức để kể cho bạn nghe về ADHD ảnh hưởng như thế nào đến cuộc sống hằng ngày của tôi. Vì với nhiều người mắc ADHD, <strong>việc giữ cho cuộc sống có tổ chức giống như một cuộc chiến không hồi kết</strong>.
                </p>
              </section>

              <section id="my-life" className="adhd-section">
                <h2>Đây Là Cuộc Sống Của Tôi Với ADHD</h2>
                
                <p>
                  Trước khi được chẩn đoán và gặp các chuyên gia sức khỏe tâm thần, tôi cảm thấy lạc lối và không biết chính xác mình đang đối mặt với điều gì 😢. Mỗi buổi sáng, tôi gặp khó khăn ngay từ việc ra khỏi giường cho đến bắt đầu một công việc mới. Tôi không thể tìm thấy động lực. Nhưng khi có điều gì đó khiến tôi hứng thú, tôi có thể làm việc đó hàng giờ liền mà không nghỉ ngơi hay ăn uống.
                </p>

                <p>
                  Những hoạt động như chơi game hay đọc sách một mạch khiến tôi cảm thấy như được sống đúng với bản thân, và đó là cách để tôi thoát khỏi thực tại. Tôi thường cho phép bản thân đắm chìm hàng giờ như vậy, bởi vì tôi biết cảm giác phấn khích đó rồi sẽ mất đi.
                </p>

                <p>
                  Sau khi nhận được chẩn đoán ADHD chính thức, tôi bắt đầu học cách quản lý các triệu chứng của rối loạn thần kinh này. Tuy nhiên, <strong>chẩn đoán không phải là chiếc chìa khóa vạn năng để giải quyết mọi vấn đề hằng ngày</strong>. Thay vào đó, nó giống như một lối đi mở ra các bước cụ thể để xử lý và quản lý triệu chứng và khó khăn kèm theo 🙂.
                </p>

                <p>
                  Tôi vẫn làm cháy đồ ăn vì mất tập trung khi nấu nướng; tôi vẫn né tránh đi chợ vì công việc đó khiến tôi choáng ngợp; và có những dự án lớn vẫn còn dang dở vì tôi không biết bắt đầu từ đâu. Nhưng tôi đã học cách chấp nhận bản thân nhiều hơn nhờ những chiến lược hiệu quả và việc chấp nhận bản thân có ADHD.
                </p>

                <p>
                  Có những lúc ADHD vẫn chiếm lấy tôi, đặc biệt là trong quản lý thời gian ⏲️ và kiểm soát bản thân. Tôi thường bị cuốn vào mạng xã hội và không biết thời gian đã trôi đi đâu, dẫn đến việc trì hoãn hàng loạt. Tôi cũng dành quá nhiều thời gian cho việc nghỉ ngơi hơn là làm việc thực sự.
                </p>

                <p>
                  Và có một điều tôi không thể kiểm soát được: <strong>giấc ngủ</strong>. Dù một ngày có mệt mỏi đến đâu, dù tôi có bận rộn ra sao (thậm chí chỉ với một việc), tôi vẫn không thể chợp mắt 😪. Não ADHD của tôi không thể "tắt máy", khiến tôi thức đến tận khuya hoặc đến giữa đêm. Và khi tôi ngủ được, thì cũng chỉ còn vài tiếng nữa là phải dậy rồi.
                </p>
              </section>

              <section id="work-impact" className="adhd-section">
                <h2>ADHD Ảnh Hưởng Như Thế Nào Đến Công Việc Hằng Ngày?</h2>
                
                <p>
                  Những người trưởng thành mắc ADHD, đặc biệt là làm việc trong môi trường văn phòng hoặc thường xuyên phải giao tiếp xã hội, sẽ không tránh khỏi những ảnh hưởng của chứng ADHD. Rất khó để giữ mọi thứ có tổ chức khi công việc dồn dập, hoặc duy trì sự chú ý lâu dài khi phải tham gia cuộc họp hay hội thoại 😵‍💫.
                </p>

                <p>
                  Nhiều báo cáo cho thấy người lớn mắc ADHD thường bị ảnh hưởng đến <strong>trí nhớ làm việc</strong>, khiến họ khó nhớ chỉ dẫn và chi tiết công việc -- từ đó càng khó hoàn thành nhiệm vụ. Khi chúng ta làm việc kém hiệu quả hoặc mắc sai sót thường xuyên vì ADHD, như cảm thấy choáng ngợp trước chỉ đạo hoặc không thể tập trung vào chi tiết, thì lòng tự trọng cũng bị tổn thương.
                </p>

                <p>
                  Và khi vòng lặp của sự nghi ngờ bản thân và hiệu suất thấp lặp đi lặp lại, ADHD có thể khiến ta cảm thấy như đang đấu tranh liên tục với chính mình 😭.
                </p>

                <p>
                  Nhưng không phải trải nghiệm nào với ADHD cũng tiêu cực. Nếu có môi trường phù hợp và sự hỗ trợ đúng lúc, chúng ta hoàn toàn có thể vượt qua kỳ vọng và làm tốt hơn những gì được giao. Khi duy trì được sự tập trung và giảm thiểu xao nhãng, chúng ta sẽ ít lo âu hơn, giúp dễ ra quyết định hơn 😊. Ngoài ra, <strong>việc tư duy khác biệt và sáng tạo cũng là điểm mạnh bẩm sinh của nhiều người mắc ADHD</strong>.
                </p>
              </section>

              <section id="relationships" className="adhd-section">
                <h2>Duy Trì Các Mối Quan Hệ Khi Sống Cùng ADHD</h2>
                
                <p>
                  Nhiều triệu chứng cốt lõi của ADHD có thể ảnh hưởng đến cách chúng ta tương tác và duy trì mối quan hệ 🧑‍🤝‍🧑. Ví dụ, khó giữ sự chú ý trong khi trò chuyện, thiếu kế hoạch khi tham gia các hoạt động với người khác, hay phản ứng bốc đồng -- tất cả đều có thể khiến người đối diện hiểu nhầm rằng ta bất lịch sự hoặc thiếu quan tâm.
                </p>

                <p>
                  <strong>Chìa khóa để duy trì mối quan hệ tốt là quản lý cảm xúc và thấu hiểu bản thân</strong>. Nhưng điều này lại không dễ với người trưởng thành mắc ADHD -- những người thường gặp khó khăn trong việc điều chỉnh cảm xúc. Vì vậy, việc có những người bạn, người thân hiểu và chấp nhận tình trạng ADHD của bạn là vô cùng quan trọng 🤗.
                </p>

                <p>
                  Nếu không, mỗi ngày có thể trở thành một cuộc chiến, đặc biệt nếu thiếu sự giao tiếp cởi mở. Khi cảm thấy bản thân đang thể hiện mặt tiêu cực, hoặc không thể kiểm soát cảm xúc và tâm trạng, chúng ta thường có xu hướng đẩy người khác ra xa.
                </p>

                <p>
                  Một số người lớn mắc ADHD còn chọn cách tự cô lập, né tránh xung đột vì không quen đối mặt, và chỉ biết kìm nén cảm xúc. Điều này có thể dẫn đến lo âu, trầm cảm, thậm chí là lạm dụng chất kích thích 🍺 nếu không kiểm soát được các triệu chứng ADHD.
                </p>
              </section>

              <section id="health-risks" className="adhd-section">
                <h2>Nguy Cơ ADHD Gây Ra Với Sức Khỏe</h2>
                
                <p>
                  Khi một người không thể quản lý tốt các triệu chứng ADHD, hệ lụy không chỉ dừng lại ở cảm xúc hay tinh thần. Một số người ngoài cuộc bắt đầu nghĩ rằng ADHD chỉ là cái cớ để biện minh cho việc không biết quản lý thời gian. Nhưng sự thật là những khó khăn ta đối mặt chỉ là phần nổi của tảng băng.
                </p>

                <p>
                  <strong>ADHD là một cuộc chiến hằng ngày với rất nhiều triệu chứng ở nhiều mức độ khác nhau, và có thể ảnh hưởng đến cả sức khỏe thể chất</strong> 😥. Ví dụ, một số người mắc ADHD thường bỏ qua việc rèn luyện sức khỏe, không tham gia trị liệu, và thức khuya triền miên -- tất cả đều gây hại cho cơ thể.
                </p>

                <p>
                  Bạn có thể hỏi: "Tại sao không chữa khỏi ADHD đi?" Giá mà có một công tắc để tắt các triệu chứng thì tốt biết mấy 🔛. Nhưng tiếc rằng, với người ADHD, mọi thứ không đơn giản như vậy. Có những lúc, não bộ sẽ "chống" lại những mong muốn tích cực nhất của bản thân, khiến ta dễ rơi vào mệt mỏi, kiệt sức và thậm chí buông xuôi.
                </p>
              </section>

              <section id="comorbidities" className="adhd-section">
                <h2>ADHD Và Các Rối Loạn Tâm Lý Kèm Theo</h2>
                
                <p>
                  Nếu không có phương pháp điều trị phù hợp, ADHD có thể kéo theo nhiều rối loạn khác nghiêm trọng hơn. Trẻ em mắc ADHD có thể gặp khó khăn trong việc học vì không thể tập trung, dễ bị phân tâm, hoặc không nghe hiểu tốt. Khi trưởng thành, những người này dễ gặp vấn đề trong việc thích nghi với môi trường xã hội hoặc nơi làm việc.
                </p>

                <p>
                  Theo <strong>CDC (Trung tâm Kiểm soát và Phòng ngừa Dịch bệnh Hoa Kỳ)</strong>, trẻ ADHD có nguy cơ mắc thêm các rối loạn tâm thần khác. Và ở người lớn, con số này thậm chí còn cao hơn: <strong>lên đến 80% có thể mắc ít nhất một dạng rối loạn tâm thần khác</strong> 😯!
                </p>

                <p>
                  Đó là lý do tại sao việc chẩn đoán đúng, chăm sóc cả thể chất lẫn tinh thần, và thực hiện trị liệu -- dùng thuốc nếu cần -- là điều không thể xem nhẹ.
                </p>
              </section>

              <section id="challenges" className="adhd-section">
                <h2>Có Quá Nhiều Điều Phải Đối Mặt</h2>
                
                <p>
                  ADHD ảnh hưởng đến rất nhiều khía cạnh trong cuộc sống hằng ngày. Từ việc phá vỡ hoạt động điều hành não bộ khiến các hoạt động bị gián đoạn, cho đến việc tổn thương mối quan hệ, sức khỏe thể chất, và làm tăng nguy cơ mắc các bệnh tâm thần khác 🧠.
                </p>

                <p>
                  Nhưng nếu có sự hỗ trợ phù hợp, môi trường tích cực, và những chiến lược hiệu quả, mọi chuyện sẽ dần trở nên dễ dàng hơn. Nhiều người mắc ADHD có thể cảm thấy cuộc sống chỉ toàn đau khổ và khó khăn -- nhưng không hẳn vậy.
                </p>

                <p>
                  <strong>Với tư duy đúng đắn và chiến lược phù hợp, chúng ta hoàn toàn có thể trải qua niềm vui, sự sáng tạo và cảm giác hài lòng</strong>. Tình trạng ADHD không định nghĩa chúng ta. Và luôn có hy vọng cho một ngày mai tốt đẹp hơn.
                </p>

                <p>
                  Hãy cùng tìm hiểu thêm về các chủ đề này -- từng bước một. Nhớ rằng bạn không hề đơn độc trên hành trình này.
                </p>

                <div style={{background: '#e7f3ff', padding: '25px', borderRadius: '12px', margin: '20px 0'}}>
                  <p style={{margin: '0', fontWeight: '600', textAlign: 'center'}}>
                    Tiếp tục cố gắng nhé! 💪🏻
                  </p>
                </div>
              </section>

              <section id="faqs" className="adhd-section">
                <h2>Câu Hỏi Thường Gặp Về Cuộc Sống Hàng Ngày Với ADHD</h2>
                
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
                    Cuộc sống với ADHD đầy thử thách nhưng cũng mang lại nhiều cơ hội để khám phá bản thân và phát triển những kỹ năng độc đáo. Sống chung với não bộ ADHD cũng mang lại sự sáng tạo, khả năng thích ứng và tư duy nhanh nhạy. Quản lý hiệu quả thường bao gồm sự kết hợp giữa điều trị, hỗ trợ và các chiến lược đối phó cá nhân phù hợp với nhu cầu của từng cá nhân.
                  </p>
                  <p style={{marginBottom: '0'}}>
                    Chia sẻ kinh nghiệm và học hỏi từ những người khác mắc ADHD có thể vô cùng hữu ích trong việc biến những trở ngại tiềm ẩn thành cơ hội để phát triển và thành công.
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
      <RelatedArticles currentPage="living" />
      <Footer />
    </>
  );
};

export default ADHDLiving;