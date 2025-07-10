import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/AboutADHD.css';

const AboutADHD = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [activeNav, setActiveNav] = useState('symptoms');

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "Tại sao chúng ta cần nhận thức về ADHD?",
      answer: "Việc nâng cao nhận thức về ADHD rất quan trọng không chỉ vì nó có thể dẫn đến các phương pháp điều trị tốt hơn, mà còn vì nhận thức có thể giúp chấm dứt sự kỳ thị liên quan đến việc mắc tình trạng này. Một trong những mục tiêu của việc nâng cao nhận thức hơn nữa là giúp mọi người cảm thấy thoải mái hơn 🫂 về chẩn đoán của họ và giúp họ hiểu rằng điều đó không làm cho họ kém thông minh hay ít xứng đáng được yêu thương và tình cảm."
    },
    {
      question: "Làm thế nào chúng ta có thể nâng cao nhận thức về ADHD tốt hơn?",
      answer: "Có nhiều cách mà chúng ta có thể cải thiện nhận thức và hiểu biết về ADHD. Một cách là học hỏi 📚 thêm về các dấu hiệu và triệu chứng, bao gồm cách nó ảnh hưởng đến cuộc sống hàng ngày của bạn. Một cách khác là nói chuyện 🗣️ với người khác về ADHD và chia sẻ những gì bạn đã học được. Bạn cũng có thể giúp truyền bá nhận thức bằng cách sử dụng bài viết này trong các bài đăng trên mạng xã hội hoặc trang web của riêng bạn để những người khác biết được cảm giác sống với ADHD như thế nào."
    },
    {
      question: "Tháng nhận thức về ADHD là khi nào?",
      answer: "Tháng nhận thức về ADHD 📅 được tổ chức trong tháng 10. Mục đích là chấm dứt sự kỳ thị, bác bỏ các quan niệm sai lầm và hỗ trợ tốt hơn cho trẻ em và người lớn với tình trạng thần kinh đa dạng này."
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
                <img src="/image.png" alt="ADHD Book" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px'}} />
              </div>
            </div>
            
            <div className="adhd-header-text">
              <div className="adhd-category">
                Huấn Luyện Viên ADHD Mini • Nhận Thức Về ADHD
              </div>
              
              <h1 className="adhd-main-title">
                Tại sao chúng ta cần nhận thức về ADHD?
              </h1>
              
              <p className="adhd-subtitle">
                Nhận thức về ADHD là điều cần thiết vì nó tạo ra một môi trường hỗ trợ nơi những người mắc ADHD có thể 
                phát triển. Kiến thức tạo ra phẩm giá dẫn đến chẩn đoán, điều trị tốt hơn và sự chấp nhận xã hội rộng rãi hơn. 
                Sự hiểu biết này là chìa khóa để cải thiện chất lượng cuộc sống cho những người bị ảnh hưởng.
              </p>
              
              <div className="adhd-publish-info">
                Xuất bản ngày 22.12.2023 • Cập nhật ngày 11.01.2024
              </div>

              <div className="adhd-author-info">
                <div className="adhd-author-avatar">
                  <img src="/teamname.jpg" alt="Tác giả Huấn Luyện Viên ADHD Mini" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%'}} />
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
                    href="#symptoms"
                    className={`adhd-nav-item${activeNav === 'symptoms' ? ' active' : ''}`}
                    onClick={() => setActiveNav('symptoms')}
                  >
                    ADHD Có Thể Ảnh Hưởng Đến Việc Lái Xe
                  </a>
                  <a
                    href="#different-presentations"
                    className={`adhd-nav-item${activeNav === 'different-presentations' ? ' active' : ''}`}
                    onClick={() => setActiveNav('different-presentations')}
                  >
                    Biểu Hiện Khác Nhau Ở Trẻ Em Và Phụ Nữ
                  </a>
                  <a
                    href="#adults-children"
                    className={`adhd-nav-item${activeNav === 'adults-children' ? ' active' : ''}`}
                    onClick={() => setActiveNav('adults-children')}
                  >
                    ADHD Ở Cả Người Lớn Và Trẻ Em
                  </a>
                  <a
                    href="#causes"
                    className={`adhd-nav-item${activeNav === 'causes' ? ' active' : ''}`}
                    onClick={() => setActiveNav('causes')}
                  >
                    Nguyên Nhân Gây Ra ADHD
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
                  <div className="adhd-cta-illustration" style={{marginBottom: '1rem'}}>
                    <img src="/Hanbook.jpg" alt="Mai Thị Lan Anh" style={{width: '150px', height: '200px', borderRadius: '4px', objectFit: 'cover', display: 'block', margin: '0 auto'}} />
                  </div>
                  <h4 style={{textAlign: 'center'}}>Hiểu Đúng Về ADHD!</h4>
                  <p style={{textAlign: 'center'}}>Chúng tôi cung cấp thông tin khoa học chính xác về ADHD để giúp bạn hiểu rõ hơn về bản chất thần kinh học của tình trạng này. Từ nguyên nhân di truyền đến các yếu tố môi trường, chúng tôi ở đây để cung cấp kiến thức đáng tin cậy.</p>
                  <button className="adhd-cta-button" style={{display: 'block', margin: '0 auto'}}>Tìm hiểu thêm</button>
                </div>
              </div>
            </aside>

            {/* Main Article */}
            <article className="adhd-article-content">

              <section id="symptoms" className="adhd-section">
                <h2>Hiểu Biết Ngoài Các Triệu Chứng ADHD</h2>
                <p>
                  Làm thế nào để chúng ta <strong>hiểu đầy đủ</strong> về Rối loạn Tăng động Giảm chú ý (ADHD) có thể 
                  ảnh hưởng đến hàng triệu trẻ em và người lớn trên khắp thế giới? Có đủ để biết về các triệu chứng của 
                  rối loạn thần kinh đa dạng này không? Tại sao chúng ta cần nhận thức về ADHD? Chúng ta có thể đóng góp 
                  tích cực gì để nâng cao nhận thức hơn nữa và ngăn chặn những quan niệm sai lầm lan truyền? Đây là những 
                  câu hỏi phổ biến khi nói đến <strong>nhận thức về ADHD</strong>. 
                </p>
                <p>
                  <strong>Rối loạn Tăng động Giảm chú ý</strong> là một tình trạng thần kinh đa dạng có thể ảnh hưởng 
                  đến cuộc sống của một người theo nhiều cách. Một số người lớn mắc ADHD biểu hiện <strong>các triệu chứng 
                  tăng động-bốc đồng</strong> trong khi những người khác có thể <strong>thiếu chú ý</strong>, bỏ lỡ những 
                  chi tiết quan trọng 😢. Họ cũng có thể gặp khó khăn trong hoạt động hàng ngày, chẳng hạn như kỹ năng quản 
                  lý thời gian. Một đứa trẻ mắc ADHD có thể biểu hiện các triệu chứng tương tự, nhưng việc tập trung và kiểm 
                  soát cảm xúc có thể thách thức hơn do tuổi nhỏ. Những đứa trẻ mắc ADHD từ nhỏ có thể có <strong>khuyết tật học tập</strong> 
                  khi tình trạng của chúng không được phát hiện và điều trị sớm.
                </p>
                <p>
                  Nhưng tại sao cần phải thảo luận và chia sẻ thông tin về Rối loạn Tăng động Giảm chú ý? Những tác động 
                  tích cực và tiêu cực của việc truyền bá kiến thức về ADHD là gì? Điều này giúp ích hoặc cản trở người 
                  mắc ADHD như thế nào? Hãy cùng tìm hiểu ở đây. 🤔💡
                </p>
              </section>

              <section id="reality" className="adhd-section">
                <h3>Thực Tế Của Những Khó Khăn ADHD</h3>
                <p>
                  Khi biết nhiều hơn về các triệu chứng của ADHD, chúng ta có thể tìm hiểu thêm về những khó khăn và 
                  gian khổ của những người được chẩn đoán mắc tình trạng này. Chúng ta hiểu rằng có thể có những trường 
                  hợp nghiêm trọng khi có <strong>các bệnh đi kèm</strong> 😣, khiến cuộc sống của họ trở nên khó khăn hơn.
                </p>
                <p>
                  Hãy nghĩ xem, những người không biết ADHD là gì có thể <strong>coi nhẹ những khó khăn</strong> của chúng ta và <strong>vô hiệu 
                  hóa cảm xúc</strong> của chúng ta 🤷. Họ có thể nghĩ rằng chúng ta chỉ đang viện cớ cho hành động của mình hoặc 
                  đơn giản là lười biếng. Khi họ không biết tại sao chúng ta đột nhiên mất động lực hoặc cựa quậy mỗi khi 
                  tham dự các sự kiện mà chúng ta quan tâm, họ có thể đánh giá toàn bộ tính cách của chúng ta như thể họ 
                  biết toàn bộ tình hình. Trên thực tế, họ chỉ bắt gặp một cái nhìn thoáng qua về nó.
                </p>
                <p>
                  Có những lúc mọi người có thể hỏi và nhận xét: "Tại sao bạn lại gặp khó khăn với các cuộc hẹn và lịch trình? 
                  Bạn chỉ cần đặt thời gian và ngày tháng, và bạn đã sẵn sàng." Vấn đề là, đối với nhiều người mắc ADHD, 
                  nó không đơn giản như vậy. <strong>Quản lý thời gian</strong> ⌚ là một trong nhiều kỹ năng hoạt động điều hành mà chúng ta 
                  gặp khó khăn. Dù câu hỏi đơn giản, nó vẫn cho thấy rằng người kia không cố gắng hiểu những khó khăn mà 
                  chúng ta phải đối mặt. Giống như sự tồn tại của tình trạng thần kinh đa dạng của chúng ta đang bị phủ nhận 
                  vì họ không biết những khó khăn liên quan đến nó.
                </p>
              </section>

              <section id="parenting" className="adhd-section">
                <h3>ADHD Có Dựa Trên Cách Cha Mẹ Nuôi Dạy Chúng Ta Không?</h3>
                <p>
                  Thật không công bằng khi cha mẹ bị đổ lỗi khi con họ mắc ADHD. Tương tự, thật không công bằng khi đổ lỗi 
                  cho họ vì nuôi dạy con mắc ADHD khá khác biệt. Trong một số trường hợp, cha mẹ có thể bị mắng vì không 
                  thể kiểm soát con cái của họ. Một số người thậm chí còn cảm thấy rằng những đứa trẻ mắc ADHD dường như 
                  không thể theo kịp các bạn cùng trang lứa nhận được ít sự hướng dẫn từ cha mẹ. 👪❓
                </p>
                <p>
                  Mặc dù các phong cách nuôi dạy con khác nhau có thể ảnh hưởng đến hành vi của trẻ, nhưng điều này không 
                  có nghĩa là nó có thể là cơ sở cho chẩn đoán ADHD. Theo các <strong>báo cáo</strong>, có một <strong>mối liên kết di truyền 
                  mạnh mẽ</strong> 🧬 giữa cha mẹ và con cái về ADHD. Nhiều trẻ em có thể thừa hưởng tình trạng thần kinh 
                  đa dạng từ cha mẹ hoặc các thành viên khác trong gia đình. Các <strong>yếu tố môi trường</strong> khác cũng có thể đóng vai 
                  trò trong sự phát triển của ADHD, chẳng hạn như tiếp xúc với độc tố trong thai kỳ. Nhưng chắc chắn, cha 
                  mẹ không thể bị đổ lỗi cho chẩn đoán ADHD của con họ.
                </p>
                <p>
                  Thông tin dựa trên bằng chứng từ <strong>Tổng quan về Di truyền học trong ADHD</strong> có thể gợi ý rằng Rối loạn Tăng 
                  động Giảm chú ý có thể khởi phát ở trẻ nhỏ và tồn tại suốt đời nếu không được chẩn đoán và điều trị 
                  đúng cách. Nghiên cứu cũng cho thấy ADHD có thể di truyền và có thể được truyền từ cha mẹ sang con. 👫 ➡ 👶
                </p>
                <p>
                  Điểm mấu chốt là, ADHD không phải do cách nuôi dạy con kém. Và, cha mẹ không được đánh giá vì hướng dẫn 
                  con cái họ khác đi 👌. Rốt cuộc, tính cách của đứa trẻ không phải là điều duy nhất họ phải tính đến; họ 
                  cũng phải xem xét các triệu chứng và điều trị ADHD.
                </p>
              </section>

              <section id="adult-adhd" className="adhd-section">
                <h2>Sự Tồn Tại Của ADHD Ở Người Lớn</h2>
                <p>
                  Nếu chúng ta không nâng cao Nhận thức về ADHD, có khả năng cao là sự hỗ trợ và điều trị thích hợp có thể 
                  không được cung cấp cho những người thực sự cần. Khi mọi người chỉ xem ADHD như một tình trạng sức khỏe 
                  tâm thần của trẻ em, họ sẽ không nhận ra rằng rối loạn này cũng có thể ảnh hưởng đến người lớn. Không 
                  nâng cao nhận thức có thể dẫn đến việc những người khác nghĩ rằng những người lớn này lẽ ra đã vượt qua 
                  tình trạng của họ. Do đó, họ có thể nghĩ rằng chúng ta chỉ đang viện cớ cho hành động của mình. Kết quả 
                  là, nhiều người lớn mắc ADHD phải chịu đựng trong im lặng vì họ cảm thấy không ai hiểu họ.
                </p>
                <p>
                  Xin hãy nhớ rằng nhiều người chỉ nhận được chẩn đoán ADHD khi họ đã trưởng thành. Đến lúc đó, những hậu 
                  quả tiêu cực có thể đã gây tổn hại đến cuộc sống của họ. Ví dụ, ADHD chưa được chẩn đoán và điều trị có 
                  thể dẫn đến các vấn đề trong <strong>mối quan hệ</strong> 💑, <strong>sự nghiệp</strong> 🧑💼 và <strong>tài chính</strong> 💳. Một số cha mẹ cũng có thể 
                  nghĩ rằng con họ có thể vượt qua các triệu chứng ADHD giống như cách trẻ lớn hơn dường như đã vượt qua nó. 
                  Nhưng trên thực tế, cách duy nhất để đối phó với điều này là thông qua chẩn đoán và điều trị chính thức.
                </p>
                <p>
                  Tôi đã không được chẩn đoán trong gần ba thập kỷ, và những khó khăn mà tôi đã trải qua là đủ để thuyết 
                  phục tôi rằng Nhận thức về ADHD là cần thiết. Tôi đã trải qua nhiều <strong>câu hỏi</strong> ❓, <strong>đau lòng</strong> ❤️🩹 và <strong>thất bại</strong> 😔, 
                  và tôi không muốn ai khác phải trải qua điều tương tự. Có thể không dễ dàng sống với rối loạn thần kinh 
                  đa dạng này. Tuy nhiên, thậm chí còn khó khăn hơn khi bạn trải nghiệm các hành vi và khó khăn bị quy cho 
                  những thứ khác hoặc khi mọi người nghĩ rằng bạn chỉ đang viện cớ.
                </p>
              </section>

              <section id="misdiagnosed" className="adhd-section">
                <h3>ADHD Bị Chẩn Đoán Sai và Không Được Điều Trị</h3>
                <p>
                  Khi chúng ta nâng cao nhận thức về ADHD, chúng ta có xu hướng tiếp cận những người không hiểu biết về các vấn đề và 
                  khó khăn của họ. Giống như việc cung cấp cho họ những khả năng mới mẻ, những câu trả lời đáng tin cậy cho mọi câu hỏi 
                  họ có, hoặc cho phép họ có những góc nhìn mới về những khó khăn của mình 😉👍.
                </p>
                <p>
                  Nhận thức về ADHD cũng có thể giúp phát hiện sớm và điều trị rối loạn phát triển thần kinh này. Nhiều người mắc ADHD 
                  có thể bị chẩn đoán nhầm với các tình trạng sức khỏe tâm thần khác, chẳng hạn như lo âu và trầm cảm, hoặc có thể 
                  không có chẩn đoán chính thức trong nhiều năm!
                </p>
                <p>
                  Một số người mắc ADHD có thể được chẩn đoán trước tiên với các tình trạng khác vì các triệu chứng có thể chồng chéo. 
                  <strong>Lo âu</strong> và trầm cảm là hai trong số những rối loạn đi kèm phổ biến nhất có thể xảy ra đồng thời với ADHD. Điều quan trọng 
                  là tìm kiếm sự giúp đỡ chuyên nghiệp 👩⚕️ để xác định chính xác vấn đề và nhận được điều trị và hỗ trợ thích hợp.
                </p>
                <p>
                  Cũng có những lúc ai đó có thể nghĩ rằng họ là một "người ADHD" 100% 🤔💯 nhưng vẫn chưa được chẩn đoán vì bác sĩ của họ 
                  không đồng ý với đánh giá tự thân của họ. Điều này có thể khá bực bội, nhưng tốt nhất là nên tham khảo ý kiến với một 
                  chuyên gia khác có nhiều kiến thức và chuyên môn hơn về rối loạn này để có ý kiến thứ hai. Nhưng dù thế nào đi nữa, 
                  những khó khăn trong cuộc sống của bạn vẫn có thật và chính đáng.
                </p>
              </section>

              <section id="going-against" className="adhd-section">
                <h2>Khi Mọi Thứ Đi Ngược Lại Ý Muốn Của Chúng Ta</h2>
                <p>
                  Truyền bá nhận thức về ADHD có nghĩa là phổ biến nội dung đáng tin cậy dựa trên thông tin về các khía cạnh khác nhau 
                  của rối loạn thần kinh đa dạng này. Nó không chỉ liên quan đến việc thảo luận về các triệu chứng ADHD. Nâng cao nhận thức 
                  cũng có thể bao gồm việc chia sẻ các bài viết liên quan đến những khó khăn hàng ngày mà chúng ta có xu hướng trải qua, 
                  các mẹo phòng ngừa tái phát và các phương pháp điều trị có sẵn phù hợp với chúng ta. 🤓 Nhận thức sâu hơn cũng có thể 
                  cung cấp sự hỗ trợ cho những người cảm thấy như họ không đạt được tiềm năng đầy đủ của mình vì những khó khăn liên quan đến ADHD.
                </p>
                <p>
                  Khi ai đó không hiểu về ADHD nhưng tiếp tục đấu tranh với các triệu chứng của nó, họ có xu hướng gặp nhiều rắc rối và 
                  đau đớn. 😭 Họ có thể không hiệu quả trong công việc, có các mối quan hệ gia đình và tình cảm căng thẳng, và cảm thấy 
                  như họ không đủ tốt. Điều khó khăn hơn là họ không biết cách giải quyết ADHD để cảm thấy tốt hơn.
                </p>
                <p>
                  Việc thiếu nhận thức về ADHD có thể nhanh chóng đặt trẻ em vào tình thế nguy hiểm. Chúng có thể cảm thấy lạc lõng và 
                  tuyệt vọng khi chúng - và cha mẹ hoặc người giám hộ của chúng - không có quyền truy cập đúng cách vào các nguồn lực 
                  cho tình trạng thần kinh đa dạng của chúng. Chúng có thể gặp khó khăn trong việc thành công ở trường, kết bạn và đối phó 
                  với cuộc sống hàng ngày. Đối với cha mẹ, có thể rất đau lòng khi thấy đứa con mà bạn yêu thương phải chịu đựng 💔, 
                  đặc biệt là khi họ bị thông tin sai lệch về những gì chúng đang trải qua.
                </p>
              </section>

              <section id="community" className="adhd-section">
                <h3>Truyền Bá Nhận Thức ADHD Qua Cộng Đồng Tuyệt Vời</h3>
                <p>
                  Có rất nhiều <strong>trang cộng đồng ADHD</strong> 💻 giúp truyền bá nhận thức về ADHD trên toàn thế giới. Họ hỗ trợ tất cả mọi người, 
                  những người được chẩn đoán chính thức mắc ADHD, nghi ngờ bạn mắc ADHD, hoặc hy vọng hiểu về nó nhiều hơn. Những <strong>nhóm tuyệt vời</strong> 🫂 
                  này giúp bạn vượt qua cuộc sống giữa mọi khó khăn mà bạn có thể gặp phải. Họ cũng chia sẻ các mẹo cuộc sống, kỹ thuật và 
                  bí quyết để quản lý tốt các triệu chứng của bạn.
                </p>
                <p>
                  Nhưng, xin lưu ý rằng sự tồn tại của Cộng đồng ADHD không chỉ giới hạn trên internet. Chúng có thể tồn tại trong 
                  khu vực địa phương của bạn. Bạn có thể tìm thấy chúng thông qua các nhóm hỗ trợ hoặc trung tâm gặp gỡ được tổ chức 
                  trong thành phố của bạn. Tốt nhất là bạn nên tham dự những sự kiện và buổi tụ tập này để có thể kết nối với những 
                  người khác hiểu những gì bạn đang trải qua. Những kết nối này có thể trở thành những mối quan hệ lâu dài và có ý nghĩa 
                  giúp cung cấp nguồn lực và hỗ trợ lẫn nhau cho đến cuối. 🧑🤝🧑
                </p>
                <p>
                  Một điều tuyệt vời khác trong việc chống lại những quan niệm sai lầm thông qua các cộng đồng ADHD là họ chống lại 
                  sự kỳ thị bằng bằng chứng khách quan về đấu tranh và khó khăn. Trong cuộc chiến hàng ngày, họ tiếp tục cố gắng và 
                  kiên trì vì họ hiểu sâu sắc cảm giác sống với ADHD như thế nào. Họ cũng sẵn sàng hỗ trợ và đấu tranh cho những 
                  gì đúng đắn liên quan đến Rối loạn Tăng động Giảm chú ý.
                </p>
              </section>

              <section id="awareness-month" className="adhd-section">
                <h3>Tầm Quan Trọng Của Tháng Nhận Thức ADHD</h3>
                <p>
                  Chúng ta tổ chức Tháng Nhận thức ADHD vào mỗi tháng 10 🎊 để nâng cao nhận thức và giúp đỡ những người vẫn đang 
                  đấu tranh với rối loạn thần kinh đa dạng này. Những sự kiện kéo dài cả tháng nhằm truyền bá thông tin thực tế ✔️ 
                  và định hình lại các quan niệm sai lầm về ADHD nhằm hiểu rõ hơn về tình trạng này. Nó cũng bao gồm việc tăng tính 
                  sẵn có của các nguồn lực và hỗ trợ cho những người cần nhất.
                </p>
                <p>
                  Điều quan trọng cần nhớ là mỗi người trải nghiệm ADHD khác nhau, vì vậy những gì bạn có thể gặp phải có thể khác 
                  với người khác. Điều tương tự cũng áp dụng với thuốc, phương pháp điều trị được khuyến nghị và các phương pháp 
                  quản lý hành vi. Những gì hiệu quả với bạn có thể không hiệu quả với người khác. Điều quan trọng là những người 
                  mắc ADHD được chia sẻ <strong>câu chuyện</strong> của họ ️ và cởi mở về tình trạng của họ để giúp người khác hiểu về nó hơn.
                </p>
                <p>
                  Tháng Nhận thức ADHD cũng là thời gian để mọi người đoàn kết và hỗ trợ lẫn nhau trong hành trình này. 🧑🤝🧑 
                  Có thể khó khăn khi phải đối mặt với mọi thứ một mình, vì vậy việc trở thành một phần của cộng đồng sẽ giúp ích 
                  rất nhiều cho quá trình điều trị và quản lý của bạn. Trẻ em và người lớn mắc ADHD có thể cảm thấy được hỗ trợ, 
                  được truyền cảm hứng và được khuyến khích khi họ biết rằng họ không đơn độc trong cuộc chiến này.
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
            </article>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutADHD;