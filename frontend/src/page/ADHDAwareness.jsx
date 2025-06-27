import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/AboutADHD.css';

const ADHDAwareness = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [activeNav, setActiveNav] = useState('overview');

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "ADHD có phải xuất phát từ việc nuôi dạy của cha mẹ không?",
      answer: "Không. Theo nghiên cứu, có một mối liên hệ di truyền mạnh mẽ giữa cha mẹ và con cái liên quan đến ADHD. Nhiều trẻ em có thể thừa hưởng tình trạng rối loạn thần kinh từ cha mẹ hoặc các thành viên khác trong gia đình. ADHD không phải do cách nuôi dạy con cái không tốt gây ra."
    },
    {
      question: "Tại sao nhận thức về ADHD lại quan trọng?",
      answer: "Nhận thức về ADHD là điều cần thiết vì nó thúc đẩy một môi trường hỗ trợ nơi những người mắc ADHD có thể phát triển. Kiến thức làm giảm sự kỳ thị, dẫn đến chẩn đoán sớm hơn, kế hoạch điều trị được cá nhân hóa và sự chấp nhận rộng rãi hơn của xã hội."
    },
    {
      question: "ADHD có thể bị chẩn đoán sai không?",
      answer: "Có. Nhiều người mắc ADHD có thể bị chẩn đoán nhầm với các tình trạng sức khỏe tâm thần khác, chẳng hạn như lo âu và trầm cảm, hoặc có thể không được chẩn đoán chính thức trong nhiều năm. Điều cần thiết là phải tìm kiếm sự trợ giúp chuyên nghiệp để xác định vấn đề chính xác."
    },
    {
      question: "Làm thế nào để lan truyền nhận thức về ADHD?",
      answer: "Việc truyền bá nhận thức về ADHD có nghĩa là phổ biến nội dung thông tin đáng tin cậy dựa trên các khía cạnh khác nhau của chứng rối loạn thần kinh này. Bao gồm việc chia sẻ các bài viết về những khó khăn hàng ngày, các mẹo quản lý và phương pháp điều trị phù hợp."
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
                <img src="/image.png" alt="ADHD Awareness" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px'}} />
              </div>
            </div>
            
            <div className="adhd-header-text">
              <div className="adhd-category">
                Nhóm Alight • Nhận Thức Về ADHD
              </div>
              
              <h1 className="adhd-main-title">
                Tầm quan trọng của việc hiểu về ADHD
              </h1>
              
              <p className="adhd-subtitle">
                Nhận thức về ADHD là điều cần thiết vì nó thúc đẩy một môi trường hỗ trợ nơi những người mắc ADHD có thể phát triển. Kiến thức làm giảm sự kỳ thị, dẫn đến chẩn đoán sớm hơn, kế hoạch điều trị được cá nhân hóa và sự chấp nhận rộng rãi hơn của xã hội.
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
              <h3>Trong Bài Viết Này</h3>
              
              <nav className="adhd-article-nav">
                <a
                  href="#overview"
                  className={`adhd-nav-item${activeNav === 'overview' ? ' active' : ''}`}
                  onClick={() => setActiveNav('overview')}
                >
                  Hiểu Biết Vượt Ra Ngoài Các Triệu Chứng
                </a>
                <a
                  href="#struggles"
                  className={`adhd-nav-item${activeNav === 'struggles' ? ' active' : ''}`}
                  onClick={() => setActiveNav('struggles')}
                >
                  Thực Tế Của Những Cuộc Đấu Tranh
                </a>
                <a
                  href="#parenting-myth"
                  className={`adhd-nav-item${activeNav === 'parenting-myth' ? ' active' : ''}`}
                  onClick={() => setActiveNav('parenting-myth')}
                >
                  ADHD Có Phải Do Cách Nuôi Dạy?
                </a>
                <a
                  href="#adult-adhd"
                  className={`adhd-nav-item${activeNav === 'adult-adhd' ? ' active' : ''}`}
                  onClick={() => setActiveNav('adult-adhd')}
                >
                  ADHD Ở Người Lớn
                </a>
                <a
                  href="#misdiagnosis"
                  className={`adhd-nav-item${activeNav === 'misdiagnosis' ? ' active' : ''}`}
                  onClick={() => setActiveNav('misdiagnosis')}
                >
                  Chẩn Đoán Sai Và Thiếu Điều Trị
                </a>
                <a
                  href="#community"
                  className={`adhd-nav-item${activeNav === 'community' ? ' active' : ''}`}
                  onClick={() => setActiveNav('community')}
                >
                  Lan Truyền Nhận Thức Qua Cộng Đồng
                </a>
                <a
                  href="#awareness-month"
                  className={`adhd-nav-item${activeNav === 'awareness-month' ? ' active' : ''}`}
                  onClick={() => setActiveNav('awareness-month')}
                >
                  Tháng Nâng Cao Nhận Thức ADHD
                </a>
                <a
                  href="#faqs"
                  className={`adhd-nav-item${activeNav === 'faqs' ? ' active' : ''}`}
                  onClick={() => setActiveNav('faqs')}
                >
                  Câu Hỏi Thường Gặp
                </a>
              </nav>

              {/* CTA Section */}
              <div className="adhd-cta-section" style={{textAlign: 'left'}}>
                <div className="adhd-cta-illustration" style={{marginBottom: '1rem'}}>
                  <img src="/Mai Thị Lan Anh.jpg" alt="Mai Thị Lan Anh" style={{width: '150px', height: '200px', borderRadius: '4px', objectFit: 'cover', display: 'block', margin: '0 auto'}} />
                </div>
                <h4 style={{marginBottom: '1rem', color: 'var(--color)', fontWeight: 600, fontSize: '1rem'}}>Nâng Cao Nhận Thức ADHD!</h4>
                <p style={{marginBottom: '1.5rem', color: 'var(--dark-slate-grey-2)', fontSize: '0.8rem', lineHeight: 1.5}}>
                  Chúng tôi cam kết nâng cao nhận thức về ADHD và hỗ trợ cộng đồng hiểu rõ hơn về tình trạng này. 
                  Cùng chúng tôi xây dựng một xã hội thấu hiểu và hỗ trợ người mắc ADHD.
                </p>
                <button className="adhd-cta-button">
                  Tham gia cộng đồng
                </button>
              </div>
            </aside>

            {/* Main Article */}
            <article className="adhd-article-content">

              <section id="overview" className="adhd-section">
                <h2>Hiểu Biết Vượt Ra Ngoài Các Triệu Chứng</h2>
                
                <p>
                  Làm thế nào để chúng ta hiểu đầy đủ về <strong>Rối loạn tăng động giảm chú ý (ADHD)</strong> có thể ảnh hưởng đến hàng triệu trẻ em và người lớn trên toàn thế giới? Có đủ để biết về các triệu chứng của rối loạn thần kinh không? Tại sao chúng ta cần phải <strong>nhận thức về ADHD</strong>? Chúng ta có thể đóng góp tích cực như thế nào để nâng cao nhận thức hơn nữa và ngăn chặn sự lan truyền của những quan niệm sai lầm? Đây là những câu hỏi thường gặp khi nói đến nhận thức về ADHD.
                </p>

                <p>
                  <strong>Rối loạn tăng động giảm chú ý là một tình trạng thần kinh bất thường</strong> có thể ảnh hưởng đến cuộc sống của một người theo nhiều cách. Một số người lớn mắc ADHD biểu hiện các triệu chứng <strong>tăng động-bốc đồng</strong> trong khi những người khác có thể <strong>mất tập trung</strong>, bỏ lỡ các chi tiết quan trọng 😢. Họ cũng có thể gặp khó khăn trong hoạt động hàng ngày, chẳng hạn như <strong>kỹ năng quản lý thời gian</strong>.
                </p>

                <p>
                  Một đứa trẻ mắc ADHD có thể biểu hiện các triệu chứng tương tự, nhưng chúng cũng có thể gặp nhiều thách thức hơn trong việc tập trung và <strong>kiểm soát cảm xúc của mình</strong>, vì chúng còn quá nhỏ. Những đứa trẻ mắc ADHD thời thơ ấu này có thể bị <strong>khuyết tật học tập</strong> nếu tình trạng của chúng không được phát hiện và điều trị sớm.
                </p>
              </section>

              <section id="struggles" className="adhd-section">
                <h2>Thực Tế Của Những Cuộc Đấu Tranh Với ADHD</h2>
                
                <p>
                  Khi biết nhiều hơn là chỉ các triệu chứng của ADHD, chúng ta có thể tìm hiểu thêm về những khó khăn và gian khổ của những người được chẩn đoán mắc tình trạng này. Chúng ta hiểu rằng có thể có những trường hợp nghiêm trọng khi có <strong>các bệnh đi kèm</strong> 😣, khiến cuộc sống của họ trở nên khó khăn hơn.
                </p>

                <p>
                  Nghĩ lại thì, những người không biết ADHD là gì có thể <strong>hạ thấp những khó khăn của chúng ta và phủ nhận cảm xúc của chúng ta</strong> 🤷. Họ có thể nghĩ rằng chúng ta chỉ đang đưa ra lời bào chữa cho hành động của mình hoặc chỉ đơn giản là lười biếng. Khi họ không hiểu tại sao chúng ta đột nhiên mất động lực hoặc bồn chồn mỗi khi tham gia các sự kiện mà chúng ta quan tâm, họ có thể phán đoán toàn bộ tính cách của chúng ta như thể họ biết toàn bộ tình huống.
                </p>

                <p>
                  Có những lúc mọi người có thể hỏi và bình luận, "Tại sao bạn lại phải vật lộn với các cuộc hẹn và lịch trình nhiều đến vậy? Bạn chỉ cần đặt thời gian và ngày tháng, và bạn đã sẵn sàng rồi." Vấn đề là, đối với nhiều người mắc chứng ADHD, mọi chuyện không đơn giản như vậy. <strong>Quản lý thời gian là một trong nhiều kỹ năng hoạt động điều hành mà chúng ta phải vật lộn</strong>. Câu hỏi đơn giản như vậy, nhưng nó vẫn cho thấy rằng người kia không cố gắng hiểu những khó khăn mà chúng ta phải đối mặt.
                </p>
              </section>

              <section id="parenting-myth" className="adhd-section">
                <h2>ADHD Có Phải Xuất Phát Từ Việc Nuôi Dạy Của Cha Mẹ Không?</h2>
                
                <p>
                  Thật không công bằng khi <strong>cha mẹ bị đổ lỗi</strong> khi con họ mắc chứng ADHD. Tương tự như vậy, thật không công bằng khi đổ lỗi cho họ vì đã nuôi dạy con mắc chứng ADHD theo cách hoàn toàn khác. Trong một số trường hợp, cha mẹ có thể bị mắng vì không thể kiểm soát con mình.
                </p>

                <p>
                  Mặc dù các phong cách nuôi dạy con khác nhau có thể ảnh hưởng đến hành vi của trẻ, nhưng điều này không có nghĩa là nó có thể là cơ sở để chẩn đoán ADHD. Theo báo cáo, có một <strong>mối liên hệ di truyền mạnh mẽ</strong> giữa cha mẹ và con cái liên quan đến ADHD. Nhiều trẻ em có thể <strong>thừa hưởng tình trạng rối loạn thần kinh</strong> từ cha mẹ hoặc các thành viên khác trong gia đình.
                </p>

                <p>
                  Các yếu tố môi trường khác cũng có thể đóng vai trò trong sự phát triển của ADHD, chẳng hạn như <strong>tiếp xúc với chất độc trong thời kỳ mang thai</strong>. Nhưng chắc chắn, cha mẹ không thể bị đổ lỗi cho chẩn đoán ADHD của con mình.
                </p>

                <p>
                  Thông tin dựa trên bằng chứng cho thấy <strong>Rối loạn tăng động giảm chú ý có thể khởi phát ở trẻ nhỏ và kéo dài trong suốt cuộc đời</strong> nếu không được chẩn đoán và điều trị đúng cách. Nghiên cứu cũng chỉ ra rằng ADHD có thể di truyền và có thể truyền từ cha mẹ sang con cái.
                </p>

                <div style={{background: '#f0f8ff', padding: '20px', borderRadius: '8px', margin: '20px 0', borderLeft: '4px solid var(--primary-color)'}}>
                  <p style={{margin: 0, fontWeight: 600}}>
                    <strong>Kết luận:</strong> ADHD không phải do cách nuôi dạy con cái không tốt gây ra. Cha mẹ không nên bị phán xét vì hướng dẫn con cái theo cách khác. Xét cho cùng, tính cách của trẻ không phải là điều duy nhất họ phải tính đến; họ cũng phải cân nhắc đến các triệu chứng ADHD và cách điều trị của trẻ.
                  </p>
                </div>
              </section>

              <section id="adult-adhd" className="adhd-section">
                <h2>Sự Tồn Tại Của ADHD Ở Người Lớn</h2>
                
                <p>
                  Nếu chúng ta không nâng cao nhận thức về ADHD, thì khả năng cao là <strong>những người thực sự cần sự hỗ trợ và điều trị phù hợp sẽ không được cung cấp</strong>. Khi mọi người chỉ coi ADHD là tình trạng sức khỏe tâm thần của trẻ em, họ sẽ không thấy rằng rối loạn này cũng có thể ảnh hưởng đến người lớn.
                </p>

                <p>
                  Việc không nâng cao nhận thức có thể khiến những người khác nghĩ rằng người lớn đáng lẽ đã vượt qua được tình trạng của mình. Do đó, họ có thể nghĩ rằng chúng ta chỉ đang đưa ra lời bào chữa cho hành động của mình. Kết quả là, <strong>nhiều người lớn mắc ADHD phải chịu đựng trong im lặng</strong> vì họ cảm thấy không ai hiểu họ.
                </p>

                <p>
                  Xin lưu ý rằng <strong>nhiều người chỉ được chẩn đoán mắc ADHD khi họ đã trưởng thành</strong>. Đến lúc đó, những hậu quả tiêu cực có thể đã ảnh hưởng đến cuộc sống của họ. Ví dụ, <strong>ADHD không được chẩn đoán và điều trị có thể dẫn đến các vấn đề trong các mối quan hệ, sự nghiệp và tài chính</strong>.
                </p>

                <p>
                  Tôi đã không được chẩn đoán trong gần ba thập kỷ, và những khó khăn mà tôi đã trải qua đủ để thuyết phục tôi rằng <strong>Nhận thức về ADHD là cần thiết</strong>. Tôi đã trải qua nhiều câu hỏi, đau lòng, và thất bại, và tôi không muốn bất kỳ ai khác phải trải qua điều tương tự. Có thể không dễ dàng để sống chung với chứng rối loạn thần kinh này. Tuy nhiên, sẽ còn khó khăn hơn nữa khi bạn trải qua những hành vi và khó khăn bị quy cho những thứ khác hoặc khi mọi người nghĩ rằng bạn chỉ đang đưa ra lời bào chữa.
                </p>
              </section>

              <section id="misdiagnosis" className="adhd-section">
                <h2>ADHD Được Chẩn Đoán Sai Và Không Được Điều Trị</h2>
                
                <p>
                  Khi chúng ta nâng cao nhận thức về ADHD, chúng ta có xu hướng tiếp cận những người không biết gì về các vấn đề và tình huống khó xử của họ. Giống như cung cấp cho họ những khả năng mới mẻ, <strong>câu trả lời đáng tin cậy cho mọi câu hỏi của họ</strong> hoặc cho họ một số góc nhìn mới về những khó khăn của họ.
                </p>

                <p>
                  <strong>Nhận thức về ADHD cũng có thể giúp phát hiện sớm và điều trị</strong> rối loạn phát triển thần kinh này. Nhiều người mắc ADHD có thể bị <strong>chẩn đoán nhầm với các tình trạng sức khỏe tâm thần khác</strong>, chẳng hạn như lo âu và trầm cảm, hoặc có thể không được chẩn đoán chính thức trong nhiều năm!
                </p>

                <p>
                  Một số người mắc ADHD có thể được chẩn đoán mắc các tình trạng khác trước vì <strong>các triệu chứng có thể chồng chéo</strong>. Lo lắng và trầm cảm là hai trong số <strong>các rối loạn đi kèm phổ biến nhất có thể xảy ra đồng thời với ADHD</strong>. Điều cần thiết là phải tìm kiếm sự trợ giúp chuyên nghiệp 👩‍⚕️ để xác định vấn đề và nhận được phương pháp điều trị và hỗ trợ phù hợp một cách chính xác.
                </p>

                <p>
                  Cũng có những lúc ai đó có thể nghĩ rằng họ là 100% 🤔💯 "ADHDer" nhưng vẫn chưa được chẩn đoán vì bác sĩ không đồng ý với đánh giá của họ. Điều này có thể khá bực bội, nhưng tốt nhất là nên <strong>tham khảo ý kiến của một chuyên gia khác</strong> có nhiều kiến thức và chuyên môn hơn về chứng rối loạn này để có ý kiến thứ hai. Nhưng bất kể thế nào, <strong>những khó khăn trong cuộc sống của bạn vẫn hợp lệ và có thật</strong>.
                </p>
              </section>

              <section id="community" className="adhd-section">
                <h2>Lan Truyền Nhận Thức Về ADHD Thông Qua Một Cộng Đồng Tuyệt Vời</h2>
                
                <p>
                  Việc truyền bá nhận thức về ADHD có nghĩa là <strong>phổ biến nội dung thông tin đáng tin cậy</strong> dựa trên các khía cạnh khác nhau của chứng rối loạn thần kinh khác biệt này. Nó không chỉ bao gồm việc thảo luận về các triệu chứng ADHD. Việc nâng cao nhận thức cũng có thể bao gồm việc chia sẻ các bài viết liên quan đến <strong>những khó khăn hàng ngày mà chúng ta có xu hướng trải qua</strong>, các mẹo phòng ngừa tái phát và các phương pháp điều trị phù hợp với chúng ta 🤓.
                </p>

                <p>
                  Khi một người không hiểu về ADHD nhưng vẫn tiếp tục vật lộn với các triệu chứng của nó, họ có xu hướng gặp <strong>rất nhiều rắc rối và đau đớn</strong> 😭. Họ có thể không làm việc hiệu quả, có mối quan hệ gia đình và tình cảm căng thẳng, và cảm thấy mình không đủ tốt. Điều khó khăn hơn là họ không biết cách giải quyết ADHD để cảm thấy tốt hơn.
                </p>

                <p>
                  Việc thiếu nhận thức về ADHD có thể nhanh chóng khiến <strong>trẻ em gặp nguy hiểm</strong>. Trẻ có thể cảm thấy lạc lõng và tuyệt vọng khi chúng - và cha mẹ hoặc người giám hộ của chúng - không được tiếp cận đúng cách với các nguồn lực dành cho tình trạng rối loạn thần kinh của mình. Chúng có thể gặp khó khăn trong việc thành công ở trường, kết bạn và giải quyết các vấn đề trong cuộc sống hàng ngày.
                </p>

                <p>
                  Có rất nhiều <strong>trang cộng đồng ADHD</strong> 💻 giúp nâng cao nhận thức về ADHD trên toàn thế giới. Họ hỗ trợ tất cả mọi người, những người được chẩn đoán chính thức mắc ADHD, nghi ngờ bạn mắc ADHD hoặc hy vọng hiểu rõ hơn về nó. Những nhóm tuyệt vời này 🫂 giúp bạn vượt qua cuộc sống giữa mọi khó khăn mà bạn có thể gặp phải.
                </p>

                <p>
                  Nhưng xin lưu ý rằng sự tồn tại của <strong>Cộng đồng ADHD không chỉ giới hạn ở internet</strong>. Chúng có thể tồn tại ở khu vực địa phương của bạn. Bạn có thể tìm thấy chúng thông qua các nhóm hỗ trợ hoặc trung tâm gặp gỡ được tổ chức tại thành phố của bạn. Tốt nhất là bạn nên tham dự các sự kiện và buổi họp mặt này để có thể kết nối với những người khác hiểu được những gì bạn đang trải qua 🧑‍🤝‍🧑.
                </p>
              </section>

              <section id="awareness-month" className="adhd-section">
                <h2>Tầm Quan Trọng Của Tháng Nâng Cao Nhận Thức Về ADHD</h2>
                
                <p>
                  Chúng tôi kỷ niệm <strong>Tháng nâng cao nhận thức về ADHD vào mỗi tháng 10</strong> 🎊 để nâng cao nhận thức và giúp đỡ những người vẫn đang vật lộn với chứng rối loạn thần kinh khác biệt này. Các sự kiện kéo dài cả tháng này nhằm <strong>truyền bá thông tin thực tế</strong> ✔️ và định hình lại những quan niệm sai lầm về ADHD nhằm mục đích hiểu rõ hơn về tình trạng này. Nó cũng bao gồm việc <strong>tăng cường khả năng tiếp cận các nguồn lực và hỗ trợ</strong> cho những người cần nhất.
                </p>

                <p>
                  Điều quan trọng là phải nhớ rằng <strong>mỗi người trải qua ADHD theo những cách khác nhau</strong>, vì vậy những gì bạn có thể gặp phải có thể khác nhau đối với người khác. Tương tự như vậy với các loại thuốc, phương pháp điều trị được khuyến nghị và các phương pháp quản lý hành vi. Những gì hiệu quả với bạn có thể không hiệu quả với người khác. Điều quan trọng là <strong>những người mắc ADHD được chia sẻ câu chuyện của họ</strong> 🗣️ và cởi mở về tình trạng của họ để giúp người khác hiểu rõ hơn về nó.
                </p>

                <p>
                  Tháng nâng cao nhận thức về ADHD cũng là thời gian để <strong>mọi người đoàn kết và hỗ trợ lẫn nhau trong suốt hành trình này</strong> 🧑‍🤝‍🧑. Thật khó để đối mặt với mọi thứ một mình, vì vậy, việc trở thành một phần của cộng đồng sẽ giúp ích đáng kể cho quá trình điều trị và quản lý của bạn. Trẻ em và người lớn mắc ADHD có thể cảm thấy được hỗ trợ, truyền cảm hứng và động viên khi biết rằng <strong>họ không đơn độc trong cuộc chiến này</strong>.
                </p>
              </section>

              <section id="faqs" className="adhd-section">
                <h2>Câu Hỏi Thường Gặp Về Nhận Thức ADHD</h2>
                
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
                  <strong>Nhận thức về ADHD</strong> không chỉ là việc biết về các triệu chứng, mà còn là hiểu sâu sắc về những thách thức mà người mắc ADHD phải đối mặt hàng ngày. Khi chúng ta nâng cao nhận thức, chúng ta đang xây dựng một xã hội thấu hiểu, hỗ trợ và chấp nhận sự khác biệt. Điều này không chỉ giúp cải thiện cuộc sống của những người mắc ADHD mà còn tạo ra một môi trường tích cực cho tất cả mọi người 💗.
                </p>
                </div>
                <p style={{textAlign: 'center', fontWeight: 'bold', color: 'var(--dark-slate-grey)'}}>
                  <strong>Hãy cùng nhau lan tỏa nhận thức đúng đắn về ADHD!</strong> 🌟
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

export default ADHDAwareness;