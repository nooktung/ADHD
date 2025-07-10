import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/AboutADHD.css';
import RelatedArticles from './RelatedArticles';

const ADHDRelationship = () => {
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
      question: "Tại sao ADHD lại ảnh hưởng đến các mối quan hệ?",
      answer: "ADHD có thể ảnh hưởng đến mối quan hệ thông qua các triệu chứng như mất tập trung trong cuộc trò chuyện, hành vi bốc đồng, khó quản lý thời gian, và những hiểu lầm từ việc không kiểm soát được các triệu chứng. Tuy nhiên, với sự hiểu biết và giao tiếp cởi mở, các mối quan hệ vẫn có thể phát triển tốt."
    },
    {
      question: "Làm thế nào để xây dựng mối quan hệ bền vững khi mắc ADHD?",
      answer: "Chìa khóa là giao tiếp trung thực, giúp người khác hiểu về ADHD và những thử thách bạn đang đối mặt. Quan trọng là tìm những người sẵn sàng chấp nhận và hỗ trợ bạn, đồng thời bạn cũng cần nỗ lực cải thiện kỹ năng giao tiếp và quản lý cảm xúc."
    },
    {
      question: "ADHD có ảnh hưởng đến mối quan hệ trong gia đình không?",
      answer: "Có thể có. Nếu gia đình chưa hiểu rõ về ADHD, họ có thể hiểu lầm các triệu chứng và tạo ra áp lực. Tuy nhiên, khi gia đình được giáo dục về ADHD và học cách hỗ trợ, mối quan hệ gia đình có thể trở nên mạnh mẽ và ý nghĩa hơn."
    },
    {
      question: "Người mắc ADHD có thể có mối quan hệ tình cảm lành mạnh không?",
      answer: "Hoàn toàn có thể! Mối quan hệ tình cảm với người mắc ADHD có thể rất thú vị và đầy cảm hứng. Điều quan trọng là cả hai phải hiểu và chấp nhận nhau, giao tiếp cởi mở, và cùng nhau tìm ra cách thức hoạt động hiệu quả trong mối quan hệ."
    },
    {
      question: "Làm thế nào để cải thiện kỹ năng xã hội khi mắc ADHD?",
      answer: "Hãy thực hành chánh niệm trong giao tiếp, chú ý lắng nghe người khác, tránh ngắt lời, và học cách kiểm soát xung động. Tham gia các nhóm hỗ trợ ADHD cũng giúp bạn học hỏi từ kinh nghiệm của người khác và phát triển kỹ năng xã hội."
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
                Mối quan hệ ADHD: Điều hướng các mối quan hệ với sự tự tin
              </h1>
              
              <p className="adhd-subtitle">
                Để xử lý thành công các mối quan hệ với người mắc ADHD, điều quan trọng là phải giao tiếp cởi mở và thiết lập các thói quen có cấu trúc giúp tạo ra sự hiểu biết và hỗ trợ giữa các đối tác, đồng nghiệp hoặc bạn bè.
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
                    ADHD Ảnh Hưởng Đến Các Mối Quan Hệ
                  </a>
                  <a
                    href="#importance"
                    className={`adhd-nav-item${activeNav === 'importance' ? ' active' : ''}`}
                    onClick={() => handleNavClick('importance')}
                  >
                    Tầm Quan Trọng Của Mối Quan Hệ Bền Vững
                  </a>
                  <a
                    href="#friendship"
                    className={`adhd-nav-item${activeNav === 'friendship' ? ' active' : ''}`}
                    onClick={() => handleNavClick('friendship')}
                  >
                    Khó Khăn Trong Tình Bạn
                  </a>
                  <a
                    href="#family"
                    className={`adhd-nav-item${activeNav === 'family' ? ' active' : ''}`}
                    onClick={() => handleNavClick('family')}
                  >
                    ADHD Và Mối Quan Hệ Gia Đình
                  </a>
                  <a
                    href="#workplace"
                    className={`adhd-nav-item${activeNav === 'workplace' ? ' active' : ''}`}
                    onClick={() => handleNavClick('workplace')}
                  >
                    ADHD Trong Môi Trường Làm Việc
                  </a>
                  <a
                    href="#romantic"
                    className={`adhd-nav-item${activeNav === 'romantic' ? ' active' : ''}`}
                    onClick={() => handleNavClick('romantic')}
                  >
                    Mối Quan Hệ Tình Cảm
                  </a>
                  <a
                    href="#management"
                    className={`adhd-nav-item${activeNav === 'management' ? ' active' : ''}`}
                    onClick={() => handleNavClick('management')}
                  >
                    Quản Lý Mối Quan Hệ Tốt Hơn
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
                    <img src="/Hanbook.jpg" alt="Mai Thị Lan Anh" style={{width: '150px', height: '200px', borderRadius: '4px', objectFit: 'cover', display: 'block', margin: '0 auto'}} />
                  </div>
                  <h4 style={{textAlign: 'center'}}>Hỗ Trợ Mối Quan Hệ ADHD!</h4>
                  <p style={{textAlign: 'center'}}>Chúng tôi cung cấp các chiến lược và kỹ năng để giúp bạn xây dựng và duy trì các mối quan hệ lành mạnh khi mắc ADHD. Từ kỹ năng giao tiếp đến quản lý cảm xúc trong các mối quan hệ.</p>
                  <button className="adhd-cta-button" style={{display: 'block', margin: '0 auto'}}>Khám phá tài nguyên</button>
                </div>
              </div>
            </aside>

            {/* Main Article */}
            <article className="adhd-article-content">

              <section id="overview" className="adhd-section">
                <h2>ADHD Ảnh Hưởng Đến Các Mối Quan Hệ Của Chúng Ta Như Thế Nào?</h2>
                
                <p>
                  Việc mắc <strong>Rối loạn Tăng động Giảm chú ý (ADHD)</strong> có thể gây ra nhiều thách thức, ảnh hưởng đến hầu hết các khía cạnh trong cuộc sống. Đối với những người có ADHD — dù đã được chẩn đoán chính thức, mới biết mình mắc ADHD, hay không có ý định đi chẩn đoán — chúng ta vẫn cố gắng hết sức để kiểm soát các triệu chứng ADHD vốn có biểu hiện rất đa dạng 👌. Dù là tăng động, bốc đồng hay mất chú ý, những đặc điểm này đều có thể ảnh hưởng đến cách ta kết nối với người xung quanh. Chúng ta thường cảm thấy mình không được thấu hiểu, điều này tạo ra khoảng cách và cản trở việc xây dựng những mối quan hệ lành mạnh 🙁.
                </p>

                <p>
                  Là người mắc ADHD, ta thường rơi vào những tình huống mà các triệu chứng bị người khác hiểu lầm hoặc diễn giải sai 😢. Đôi khi, người khác nghĩ rằng chúng ta cố tình tạo ra các "chiến lược phòng vệ", như không lắng nghe hoặc không phản hồi trong cuộc trò chuyện. Nhưng thực tế, những hành vi đó thường bắt nguồn từ việc không thể tập trung vào nhiệm vụ 💫. Sự thiếu chú ý này cũng có thể khiến người mắc ADHD dễ bị căng thẳng và quá tải, từ đó dần dần trở nên xa cách với bạn bè đồng trang lứa.
                </p>

                <p>
                  Đây chỉ là một trong rất nhiều lý do khiến ADHD ảnh hưởng đến mối quan hệ của một người, nhất là khi người bên cạnh không hiểu rõ những khó khăn mà chúng ta đang đối mặt. Các mối quan hệ người lớn vốn đã phức tạp — lại càng thêm thử thách khi ta có những vấn đề nghiêm trọng về sức khỏe tâm thần như ADHD 🤔.
                </p>
              </section>

              <section id="importance" className="adhd-section">
                <h2>Tại Sao Việc Xây Dựng Mối Quan Hệ Bền Vững Với ADHD Lại Quan Trọng?</h2>
                
                <p>
                  Như câu nói quen thuộc: <strong>"Không ai là một hòn đảo."</strong> Chúng ta đều cần có người khác. Những người mắc ADHD có thể hưởng lợi rất nhiều từ các mối quan hệ vững chắc trong công việc, gia đình và bạn bè. Mối quan hệ tốt là nền tảng giúp ta phát triển và thành công, cũng như bao người khác 🤗.
                </p>

                <p>
                  Ngoài ra, việc có ai đó đồng hành trong những khoảnh khắc khó khăn hay cùng giải quyết những vấn đề sâu xa có thể giúp người mắc ADHD học cách quản lý triệu chứng và hiểu rõ bản thân hơn. Khi gặp khủng hoảng hoặc bị quá tải, một người bạn tốt hay người thân đáng tin cậy chính là người đem đến sự an ủi và hỗ trợ chân thành 🧑‍🤝‍🧑.
                </p>

                <p>
                  Khi người xung quanh hiểu và có nhận thức đúng đắn về ADHD, các mối quan hệ sẽ dễ phát triển lâu dài hơn. Khi gia đình, bạn bè hoặc đồng nghiệp biết cách chấp nhận và trân trọng những điểm tích cực của người mắc ADHD, chúng ta sẽ có được sự hỗ trợ tuyệt vời để kiểm soát hành vi và sống tích cực hơn 💗.
                </p>
              </section>

              <section id="friendship" className="adhd-section">
                <h2>Khó Khăn Trong Tình Bạn Khi Mắc ADHD</h2>
                
                <p>
                  ADHD ảnh hưởng đến tình bạn như thế nào? Một số người được chẩn đoán ADHD có thể gặp vấn đề về kỹ năng xã hội vì nhiều lý do. Trước tiên, khả năng giao tiếp của chúng ta có thể bị hạn chế — nhất là khi ta muốn nói hết mọi điều trong đầu 💭. Không phải là ta không có những ý tưởng hay, mà là người trưởng thành mắc ADHD thường nhanh chóng quên chúng. Ngoài ra, ta còn gặp khó khăn trong việc kiểm soát xung động — dễ phát ngôn thiếu suy nghĩ hoặc cắt ngang lời người khác, khiến bạn bè không mắc ADHD thấy chúng ta quá ồn ào hoặc quá thẳng thắn 😭. Nhưng thực tế, chính bộ não ADHD khiến ta khó kiềm chế suy nghĩ và cảm xúc.
                </p>

                <p>
                  Một lý do khác khiến ta khó duy trì tình bạn lâu dài là vì ta vô tình làm tổn thương người khác do mất tập trung hoặc bỏ lỡ những chi tiết quan trọng 📅. Việc quên mất những điều quan trọng không phải vì ta không quan tâm, mà là do ADHD khiến ta dễ bị phân tâm bởi môi trường xung quanh.
                </p>

                <p>
                  Trước khi được chẩn đoán, tôi thường quên những dịp quan trọng. Có lần, bạn tôi rủ tôi đến nhà chơi nhưng không nói rõ lý do. Tôi viện cớ từ chối vì nghĩ đó chỉ là ngày bình thường. Nhưng sau đó, khi lướt mạng xã hội, tôi thấy bức ảnh bạn được gắn thẻ đang tổ chức sinh nhật cùng nhóm bạn 🎂. Cảm xúc tội lỗi lúc ấy dâng lên dồn dập. Tôi chưa bao giờ cảm thấy mình là một "người bạn tồi" như vậy.
                </p>
              </section>

              <section id="family" className="adhd-section">
                <h2>ADHD Và Mối Quan Hệ Trong Gia Đình</h2>
                
                <p>
                  Người ta thường nói rằng gia đình là nơi sẵn sàng giúp đỡ ta đầu tiên khi ta cần. Sự gắn kết giữa các thành viên trong gia đình thường mạnh mẽ hơn các mối quan hệ khác. Trong một gia đình lý tưởng, cha mẹ mang đến cảm giác an toàn, tình yêu thương và sự thấu hiểu. Họ sẽ là người hướng dẫn ta trong nhiều vấn đề, đứng về phía ta khi mọi chuyện khó khăn, hay đơn giản chỉ là luôn có mặt trong cuộc sống 🤗.
                </p>

                <p>
                  Tuy nhiên, đôi khi tổn thương đầu tiên lại đến từ chính gia đình ❤️‍🩹. Khi có triệu chứng ADHD, có những lúc ta cần sự hỗ trợ và thấu hiểu, nhưng điều nhận lại chỉ là sự xem nhẹ hoặc phủ nhận cảm xúc của mình. Điều này khiến ta bắt đầu nghi ngờ bản thân, và thay vì được hỗ trợ giải quyết, ta lại học cách giấu đi hành vi của mình.
                </p>

                <p>
                  Ở nhà, ta thường nghe những lời phàn nàn về việc không ngăn nắp hay thiếu động lực làm việc nhà. Những ai may mắn có gia đình hiểu rõ ADHD thì sẽ đỡ tổn thương hơn. Nhưng với những người chưa được chẩn đoán hoặc chưa hiểu rõ tình trạng của mình, họ có thể cảm thấy mình đang bị đánh giá 🙁.
                </p>

                <p>
                  Tuy nhiên, nếu bạn không nhận được sự hỗ trợ phù hợp từ gia đình, điều đó không có nghĩa bạn không xứng đáng được yêu thương và chăm sóc 🙆. Việc duy trì mối quan hệ tốt với gia đình bắt đầu từ việc giúp họ hiểu cảm xúc và hoàn cảnh của bạn. <strong>Giao tiếp trung thực</strong> là điều cốt lõi trong việc xây dựng mối quan hệ gia đình lành mạnh, từ đó giúp họ hiểu hơn về rối loạn phát triển thần kinh mà bạn đang đối mặt, cũng như nhu cầu và kỳ vọng của bạn trong mối quan hệ gia đình.
                </p>
              </section>

              <section id="workplace" className="adhd-section">
                <h2>ADHD Trong Môi Trường Làm Việc: Ứng Xử Với Đồng Nghiệp</h2>
                
                <p>
                  Theo Cẩm nang Chẩn đoán và Thống kê các Rối loạn Tâm thần (DSM), ADHD ở người lớn cần được thể hiện ở hai hoặc nhiều môi trường sống, bao gồm cả nơi làm việc (bên cạnh nhà, trường học,...). Vậy nên, hãy tự hỏi: Gần đây bạn làm việc thế nào? 🤔 Bạn có thấy khó khăn trong việc kiểm soát môi trường công sở không? Có gặp khó khăn khi duy trì mối quan hệ với đồng nghiệp?
                </p>

                <p>
                  Một trong những điều khiến chúng ta khó duy trì bầu không khí tích cực nơi làm việc là vì dễ mắc lỗi. Khi chúng ta mắc nhiều lỗi do không thể tập trung, những người xung quanh có thể nghĩ xấu về chúng ta. Họ có thể đánh giá đạo đức nghề nghiệp của chúng ta, và điều này ảnh hưởng nghiêm trọng đến lòng tự trọng.
                </p>

                <p>
                  Một nguyên nhân khác khiến chúng ta không thể phát huy tối đa khả năng là do khó khăn trong việc quản lý thời gian ⌛. Theo các báo cáo, <strong>"mù thời gian" (time blindness)</strong> là một triệu chứng ADHD khiến ta không cảm nhận được thời gian một cách chính xác, như hay lỡ lịch hẹn, khó xác định thời gian cần cho một công việc, hoặc thường xuyên trễ hẹn. Điều này ảnh hưởng đến hiệu suất công việc và cách đồng nghiệp nhìn nhận ta.
                </p>
              </section>

              <section id="romantic" className="adhd-section">
                <h2>Xử Lý Mối Quan Hệ Tình Cảm Khi Mắc ADHD</h2>
                
                <p>
                  Thành thật mà nói, đôi lúc bạn sẽ cảm thấy tội lỗi về những khó khăn mình gây ra cho người yêu không mắc ADHD. Tôi cũng vậy! Tuy nhiên, ngay cả khi gặp trở ngại, người mắc ADHD vẫn có thể duy trì mối quan hệ tình cảm lành mạnh, miễn là cả hai cùng nỗ lực san bằng khác biệt 👌. <strong>Giao tiếp cởi mở</strong> là điều tối quan trọng để biết điều gì phù hợp và điều gì không. Nhờ đó, cả hai sẽ tránh được hiểu lầm và duy trì mối quan hệ tích cực.
                </p>

                <p>
                  Việc nghĩ đến cảm xúc của đối phương cũng là chìa khóa cho sự thành công trong mối quan hệ. Dù người mắc ADHD có thể đôi lúc hành xử bốc đồng, chẳng hạn như không nhận ra tín hiệu từ người yêu hoặc không hiểu được kỳ vọng của họ, nhưng nếu biết quan tâm và để ý, bạn có thể tránh làm tổn thương, đồng thời thể hiện sự thấu hiểu và yêu thương—giúp khôi phục niềm tin trong mối quan hệ.
                </p>

                <p>
                  Có thể đôi khi bạn cảm thấy rằng việc duy trì một mối quan hệ lâu dài với người mắc ADHD là điều bất khả thi. Nhưng hãy tin tôi—<strong>hoàn toàn có thể</strong> 💗. Điều cần thiết là cả hai phải chấp nhận sự khác biệt, học hỏi từ sai lầm và sẵn sàng cùng nhau vượt qua thử thách. Một mối quan hệ thân mật với người mắc ADHD có thể rất thú vị, đầy cảm hứng và tràn đầy sức sống—quan trọng là cả hai cùng cam kết làm cho mối quan hệ ấy hiệu quả.
                </p>
              </section>

              <section id="management" className="adhd-section">
                <h2>Quản Lý Mối Quan Hệ Tốt Hơn Để Bảo Vệ Sức Khỏe Tâm Thần</h2>
                
                <p>
                  Dù là duy trì tình bạn, cải thiện kỹ năng xã hội với đồng nghiệp hay gắn bó hơn với gia đình, chúng ta cần nhớ rằng các mối quan hệ là yếu tố thiết yếu cho sức khỏe tâm thần. Việc giữ cho những mối quan hệ này hài hòa giúp ta quản lý cảm xúc, đối phó với căng thẳng và giảm thiểu các vấn đề tâm lý. Mối quan hệ có thể phức tạp, nhưng việc hiểu nhu cầu của nhau trong từng hoàn cảnh có thể giúp đảm bảo chúng lành mạnh và bền vững.
                </p>

                <p>
                  Cách hiệu quả nhất để xây dựng kết nối với người khác là <strong>cải thiện giao tiếp, rèn luyện chánh niệm và sự đồng cảm</strong> 🙂. Việc bày tỏ suy nghĩ, cảm xúc một cách rõ ràng sẽ tạo ra sự thấu hiểu lẫn nhau. Thêm vào đó, thực hành chánh niệm và chú ý đến lời nói, hành động của mình cũng rất hữu ích. Cuối cùng, sự đồng cảm dành cho bạn bè hoặc người yêu sẽ thể hiện rằng bạn sẵn sàng lắng nghe và hiểu những gì họ đang trải qua.
                </p>

                <p>
                  Tìm được điểm chung với người không mắc ADHD cũng là một cách tốt. Bạn có thể tìm những hoạt động thư giãn cùng nhau như thể thao, nấu ăn hay âm nhạc 🎵. Việc chia sẻ sở thích sẽ giúp cả hai hiểu nhau hơn và trân trọng những điểm khác biệt. Mặc dù ADHD vẫn có thể là rào cản, nhưng điều đó không có nghĩa là ta không thể cải thiện và duy trì một mối quan hệ tốt đẹp. Với sự thấu hiểu, giao tiếp chánh niệm và lòng cảm thông, chúng ta hoàn toàn có thể phục hồi niềm tin và mở lòng trong mọi mối quan hệ.
                </p>
              </section>

              <section id="faqs" className="adhd-section">
                <h2>Câu Hỏi Thường Gặp Về Mối Quan Hệ ADHD</h2>
                
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
                  Các mối quan hệ khi mắc ADHD có thể đầy thử thách, nhưng cũng có thể mang lại những trải nghiệm tuyệt vời và ý nghĩa. Quan trọng là phải kiên nhẫn với bản thân và người khác, học cách giao tiếp hiệu quả, và không ngừng nỗ lực để hiểu và được hiểu. Hãy nhớ rằng mỗi mối quan hệ đều có giá trị riêng và xứng đáng được đầu tư thời gian và công sức.
                </p>
                </div>
                <p style={{textAlign: 'center', fontWeight: 'bold', color: 'var(--dark-slate-grey)'}}>
                  Mối quan hệ tốt đẹp bắt đầu từ sự hiểu biết và chấp nhận! 💝
                </p>
              </section>    
            </article>
          </div>
        </div>
        <RelatedArticles currentPage="relationship" />
      </div>
      <Footer />
    </>
  );
};

export default ADHDRelationship;