import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/AboutADHD.css';

const ADHdEmotions = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [activeNav, setActiveNav] = useState('overview');

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "Tại sao người mắc ADHD lại có cảm xúc mãnh liệt hơn?",
      answer: "ADHD ảnh hưởng đến khả năng điều tiết cảm xúc của não bộ, khiến người mắc ADHD cảm nhận cảm xúc một cách mãnh liệt hơn và gặp khó khăn trong việc chuyển đổi giữa các trạng thái cảm xúc khác nhau. Đây là một cơ chế sinh học thực thụ, không phải chỉ là 'tâm trạng'."
    },
    {
      question: "Rối loạn cảm xúc có ảnh hưởng đến sức khỏe thể chất không?",
      answer: "Có, rối loạn cảm xúc có thể gây ra nhiều vấn đề sức khỏe thể chất như đau đầu, rối loạn giấc ngủ, vấn đề tiêu hóa, tăng nhịp tim, suy giảm miễn dịch, và thay đổi cân nặng bất thường. Stress từ việc không kiểm soát được cảm xúc có tác động thực sự đến cơ thể."
    },
    {
      question: "Có những chiến lược nào để quản lý cảm xúc hiệu quả?",
      answer: "Một số chiến lược hiệu quả bao gồm: thực hành chánh niệm, tạm dừng trước khi phản ứng, thể hiện cảm xúc qua nghệ thuật hoặc thể thao, sử dụng kỹ thuật 'nút tạm dừng', gọi tên cảm xúc của mình, và sử dụng các công cụ giảm căng thẳng như fidget toys."
    },
    {
      question: "Khi nào cần tìm kiếm hỗ trợ chuyên môn?",
      answer: "Bạn nên tìm kiếm hỗ trợ chuyên môn khi cảm thấy vật lộn với cảm xúc, đặc biệt khi rối loạn cảm xúc ảnh hưởng đến công việc, mối quan hệ hoặc sức khỏe tổng thể. Trị liệu như DBT đã được chứng minh rất hiệu quả trong việc giúp người mắc ADHD quản lý cảm xúc."
    },
    {
      question: "Làm thế nào để không để cảm xúc kiểm soát cuộc sống?",
      answer: "Chìa khóa là học cách tôn trọng và thừa nhận cảm xúc của mình mà không để chúng quyết định hành động của bạn. Thông qua việc hiểu bản thân, thực hành các kỹ thuật quản lý cảm xúc, và có hỗ trợ phù hợp, bạn có thể sống hòa hợp với cảm xúc của mình."
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
                Cảm xúc ADHD
              </h1>
              
              <p className="adhd-subtitle">
                Những người mắc ADHD thường phải vật lộn với chứng rối loạn cảm xúc, có thể biểu hiện bằng phản ứng dữ dội với những tác nhân gây căng thẳng hàng ngày, khó bình tĩnh và thay đổi tâm trạng đột ngột. Hiểu biết và chiến lược để quản lý những cảm xúc dữ dội này là chìa khóa để vượt qua thách thức này.
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
                  Vượt Qua Những Làn Sóng Cảm Xúc
                </a>
                <a
                  href="#understanding"
                  className={`adhd-nav-item${activeNav === 'understanding' ? ' active' : ''}`}
                  onClick={() => setActiveNav('understanding')}
                >
                  Hiểu Mối Liên Hệ ADHD Và Cảm Xúc
                </a>
                <a
                  href="#symptoms"
                  className={`adhd-nav-item${activeNav === 'symptoms' ? ' active' : ''}`}
                  onClick={() => setActiveNav('symptoms')}
                >
                  Triệu Chứng ADHD Và Tác Động Cảm Xúc
                </a>
                <a
                  href="#health-impact"
                  className={`adhd-nav-item${activeNav === 'health-impact' ? ' active' : ''}`}
                  onClick={() => setActiveNav('health-impact')}
                >
                  Tác Động Đến Sức Khỏe
                </a>
                <a
                  href="#strategies"
                  className={`adhd-nav-item${activeNav === 'strategies' ? ' active' : ''}`}
                  onClick={() => setActiveNav('strategies')}
                >
                  Chiến Lược Quản Lý Cảm Xúc
                </a>
                <a
                  href="#professional-support"
                  className={`adhd-nav-item${activeNav === 'professional-support' ? ' active' : ''}`}
                  onClick={() => setActiveNav('professional-support')}
                >
                  Hỗ Trợ Chuyên Môn
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
                <h4 style={{marginBottom: '1rem', color: 'var(--color)', fontWeight: 600, fontSize: '1rem'}}>Hỗ Trợ Quản Lý Cảm Xúc!</h4>
                <p style={{marginBottom: '1.5rem', color: 'var(--dark-slate-grey-2)', fontSize: '0.8rem', lineHeight: 1.5}}>
                  Chúng tôi cung cấp các kỹ thuật và chiến lược để giúp bạn quản lý cảm xúc mãnh liệt khi mắc ADHD. 
                  Từ chánh niệm đến các phương pháp thư giãn hiệu quả.
                </p>
                <button className="adhd-cta-button">
                  Khám phá tài nguyên
                </button>
              </div>
            </aside>

            {/* Main Article */}
            <article className="adhd-article-content">

              <section id="overview" className="adhd-section">
                <h2>Vượt Qua Những Làn Sóng Cảm Xúc Của ADHD: Chiến Lược Quản Lý Cảm Xúc</h2>
                
                <p>
                  Nhiều người mắc chứng <strong>Rối loạn Tăng động Giảm chú ý (ADHD)</strong> là những tâm hồn nhạy cảm – chúng ta thường là những người đầy đam mê, sôi nổi, có rất nhiều điều muốn làm và muốn chia sẻ. Tuy nhiên, nhiều người trưởng thành mắc ADHD lại thường xuyên trải qua những cảm xúc mãnh liệt, đến nhanh và rất khó kiểm soát.
                </p>

                <p>
                  Nhưng tại sao lại như vậy – và làm thế nào để chúng ta có thể học cách kiểm soát cảm xúc mà không phải kìm nén chúng hoàn toàn? 😕
                </p>

                <div style={{background: '#f8f9fa', padding: '20px', borderRadius: '8px', margin: '20px 0'}}>
                  <h4 style={{marginBottom: '15px', color: '#2c3e50'}}>Những điểm chính về cảm xúc ADHD:</h4>
                  <ul style={{margin: 0, paddingLeft: '20px'}}>
                    <li><strong>ADHD ảnh hưởng đến khả năng điều tiết cảm xúc</strong> của não bộ, dẫn đến hiện tượng rối loạn cảm xúc ở người lớn mắc ADHD.</li>
                    <li>Sự rối loạn này thường khiến chúng ta <strong>cảm nhận cảm xúc một cách mãnh liệt hơn</strong> và gặp khó khăn trong việc chuyển đổi giữa các trạng thái cảm xúc khác nhau.</li>
                    <li>Nhiều triệu chứng của ADHD, đặc biệt là tính bốc đồng và khó tập trung, khiến các phản ứng cảm xúc trở nên mãnh liệt hơn, gây mệt mỏi cảm xúc.</li>
                    <li>Các kỹ thuật như chánh niệm, tạm dừng trước khi phản ứng bốc đồng, và tìm kiếm cách thể hiện cảm xúc lành mạnh có thể giúp người mắc ADHD quản lý cảm xúc hiệu quả hơn.</li>
                    <li><strong>Hỗ trợ chuyên môn</strong> – bao gồm điều trị ADHD và liệu pháp tâm lý – là yếu tố quan trọng giúp người trưởng thành học cách điều tiết cảm xúc và cải thiện sức khỏe tâm thần tổng thể.</li>
                  </ul>
                </div>

                <p>
                  Nếu bạn đang muốn hiểu rõ hơn về cảm xúc của mình và tìm cách xử lý chúng một cách lành mạnh, hãy tiếp tục đọc nhé. 💕
                </p>
              </section>

              <section id="understanding" className="adhd-section">
                <h2>Hiểu Về Mối Liên Hệ Giữa ADHD Và Cảm Xúc</h2>
                
                <p>
                  ADHD không chỉ đơn giản là sự khó tập trung hay tăng động. Một phần lớn trong trải nghiệm sống cùng ADHD chính là cảm xúc. Đối với nhiều người mắc ADHD, cảm xúc không chỉ là những trạng thái thoáng qua – mà là những trải nghiệm mạnh mẽ, sống động và thường xuyên quá tải. 🤯
                </p>

                <p>
                  Mối liên hệ chặt chẽ giữa ADHD và cảm xúc bắt nguồn từ việc <strong>ADHD ảnh hưởng đến khả năng điều tiết cảm xúc của não</strong>, dẫn đến hiện tượng rối loạn điều hòa cảm xúc 🧠.
                </p>

                <p>
                  Hãy tưởng tượng cảm xúc của bạn giống như một chiếc radio – người bình thường có thể điều chỉnh âm lượng dễ dàng. Nhưng nếu bạn có ADHD, thì cái núm chỉnh âm lượng đó siêu nhạy, và đôi khi nó tự tăng âm lượng lên hết cỡ. Đó chính là cảm giác của người mắc ADHD. 😭
                </p>

                <p>
                  Rối loạn này không chỉ khiến bạn cảm thấy mọi thứ "nhiều hơn", mà còn khiến bạn khó chuyển đổi cảm xúc hay bình tĩnh lại sau khi bị kích động. Nó không chỉ là "tâm trạng", mà là cách bộ não ADHD xử lý thông tin và kích thích – <strong>một cơ chế sinh học thực thụ</strong>.
                </p>
              </section>

              <section id="symptoms" className="adhd-section">
                <h2>Triệu Chứng ADHD Và Tác Động Đến Cảm Xúc</h2>
                
                <p>
                  Khi nói đến ADHD, ta thường nhắc đến mất tập trung hoặc tăng động. Nhưng các triệu chứng này cũng ảnh hưởng đến việc xử lý cảm xúc – bao gồm cả phản ứng cảm xúc quá mức.
                </p>

                <p><strong>Ví dụ:</strong></p>
                <ul style={{marginLeft: '20px'}}>
                  <li><strong>Tính bốc đồng</strong> khiến ta dễ phản ứng cảm xúc quá nhanh và quá mạnh, chẳng hạn như quá vui mừng vì một tin tốt, hoặc quá buồn bực vì một điều nhỏ nhặt. 🚀</li>
                  <li><strong>Khó tập trung</strong> dẫn đến cảm giác dễ chán nản, thất vọng – và những cảm xúc đó đến dồn dập và thường xuyên hơn. 📉</li>
                  <li><strong>Tăng động</strong> tạo ra cảm giác bồn chồn không ngừng, làm khuếch đại phản ứng cảm xúc, dễ dẫn đến kiệt sức cảm xúc hoặc burnout. 🏃</li>
                </ul>
              </section>

              <section id="health-impact" className="adhd-section">
                <h2>Tác Động Đến Sức Khỏe Thể Chất Và Tâm Thần</h2>
                
                <p>
                  Rối loạn cảm xúc không chỉ đơn thuần là vấn đề "cảm xúc" – mà còn ảnh hưởng thực sự đến sức khỏe thể chất và tinh thần:
                </p>

                <h3>Về thể chất</h3>
                <p>Stress do cảm xúc không được kiểm soát có thể dẫn đến:</p>
                <ul style={{marginLeft: '20px'}}>
                  <li>Đau đầu, đau cơ, đặc biệt ở cổ và vai.</li>
                  <li>Rối loạn giấc ngủ (mất ngủ hoặc ngủ quá nhiều) và cảm giác mệt mỏi thường xuyên.</li>
                  <li>Các vấn đề tiêu hóa như buồn nôn, đau bụng, rối loạn ruột.</li>
                  <li>Triệu chứng tim mạch và hô hấp: tăng nhịp tim, huyết áp cao, khó thở.</li>
                  <li>Suy giảm miễn dịch, da dễ bị mụn, eczema, vảy nến.</li>
                  <li>Tăng hoặc giảm cân bất thường.</li>
                </ul>

                <h3>Về tâm thần</h3>
                <p>Rối loạn cảm xúc kéo dài có thể dẫn đến:</p>
                <ul style={{marginLeft: '20px'}}>
                  <li>Lo âu và trầm cảm – do mệt mỏi vì phải "quản lý cảm xúc" liên tục.</li>
                  <li>Nguy cơ mắc các rối loạn phức tạp như rối loạn nhân cách ranh giới (BPD).</li>
                  <li>Vấn đề trong các mối quan hệ – do khó điều tiết hành vi và cảm xúc khiến người khác tổn thương hoặc xa cách.</li>
                </ul>
              </section>

              <section id="strategies" className="adhd-section">
                <h2>Chiến Lược Quản Lý Cảm Xúc Hiệu Quả Với ADHD</h2>
                
                <p>Dưới đây là những chiến lược bạn có thể áp dụng:</p>

                <div style={{background: '#e8f4fd', padding: '25px', borderRadius: '12px', margin: '20px 0'}}>
                  <ul style={{margin: 0, paddingLeft: '20px'}}>
                    <li><strong>Chánh niệm và tự nhận thức:</strong> Quan sát suy nghĩ và cảm xúc của mình mà không phán xét.</li>
                    <li><strong>Tạm dừng trước khi phản ứng:</strong> Đừng đưa ra quyết định ngay khi tức giận hoặc buồn bã.</li>
                    <li><strong>Cách đối phó lành mạnh:</strong> Thể thao, viết nhật ký, trò chuyện với bạn bè, làm điều mình thích.</li>
                    <li><strong>Thể hiện cảm xúc đúng cách:</strong> Vẽ, viết, đi bộ dài, chơi nhạc – đừng dồn nén.</li>
                    <li><strong>Kỹ thuật "nút tạm dừng":</strong> Khi sắp mất kiểm soát, hãy nói "cho tôi vài phút" để hạ nhiệt.</li>
                    <li><strong>Gọi tên cảm xúc của bạn:</strong> Dùng "bánh xe cảm xúc" nếu bạn khó diễn đạt.</li>
                    <li><strong>Hình dung thư giãn</strong> hoặc nghe âm thanh nhẹ nhàng để làm dịu cảm giác choáng ngợp.</li>
                    <li><strong>Đồ chơi giảm căng thẳng:</strong> Fidget toys, trang sức thiết kế riêng giúp giải tỏa năng lượng.</li>
                  </ul>
                </div>

                <p style={{background: '#fff3cd', padding: '15px', borderRadius: '8px', margin: '20px 0'}}>
                  💡 <strong>Ghi nhớ:</strong> Bạn không "quá mức". Bạn có quyền cảm nhận cảm xúc theo cách riêng của mình. Và bạn có quyền được giúp đỡ.
                </p>
              </section>

              <section id="professional-support" className="adhd-section">
                <h2>Vai Trò Của Hỗ Trợ Chuyên Môn Trong Quản Lý ADHD</h2>
                
                <p>
                  Đôi khi, những mẹo tự giúp chưa đủ. Hỗ trợ từ chuyên gia là rất quan trọng 💪.
                </p>

                <p>
                  Bởi vì rối loạn cảm xúc trong ADHD thường trùng lắp với PTSD, rối loạn lưỡng cực, hoặc rối loạn nhân cách – nên cần có sự can thiệp điều trị phù hợp.
                </p>

                <p>
                  Một trong những liệu pháp hiệu quả nhất là <strong>Trị liệu hành vi biện chứng (DBT)</strong>. Một nghiên cứu cho thấy DBT giúp cải thiện đáng kể khả năng điều tiết cảm xúc và triệu chứng ADHD sau 6 tháng – hiệu quả hơn cả thuốc.
                </p>

                <h3>Các kỹ thuật từ DBT:</h3>
                <ul style={{marginLeft: '20px'}}>
                  <li><strong>Hành động ngược chiều:</strong> Làm điều ngược lại với cảm xúc (ví dụ: nếu muốn rút lui vì buồn, hãy kết nối với ai đó).</li>
                  <li><strong>Kỹ năng PLEASE:</strong> Ăn uống đều đặn, tránh chất kích thích, ngủ đủ, tập thể dục.</li>
                  <li><strong>Chánh niệm cảm xúc hiện tại:</strong> Quan sát cảm xúc mà không đánh giá.</li>
                  <li><strong>Tư duy thực tế và giải quyết vấn đề:</strong> Phản ứng có lý trí thay vì theo cảm xúc bốc đồng.</li>
                </ul>

                <p>
                  Nếu bạn cảm thấy đang vật lộn với cảm xúc, hãy tìm đến chuyên gia. Họ có thể giúp bạn phát triển kỹ năng sống và cải thiện sức khỏe tinh thần toàn diện 💕
                </p>
              </section>

              <section id="faqs" className="adhd-section">
                <h2>Câu Hỏi Thường Gặp Về Cảm Xúc ADHD</h2>
                
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

              {/* Summary */}
              <section className="adhd-section">
                <h3>Tóm Lược Chính</h3>
                <div style={{background: '#f8f9fa', padding: '20px', borderRadius: '8px'}}>
                  <ul style={{margin: 0, paddingLeft: '20px'}}>
                    <li>Cảm xúc mãnh liệt là một phần của ADHD, gây rối loạn điều tiết cảm xúc ở nhiều người.</li>
                    <li>Các triệu chứng ADHD như bốc đồng, mất tập trung và tăng động làm khuếch đại cảm xúc và dễ gây kiệt sức tinh thần.</li>
                    <li>Tác động đến sức khỏe thể chất và tâm thần bao gồm lo âu, trầm cảm, rối loạn giấc ngủ, đau đầu, các vấn đề tiêu hóa và miễn dịch.</li>
                    <li>Chiến lược quản lý hiệu quả bao gồm chánh niệm, tạm dừng, thể hiện cảm xúc lành mạnh và sử dụng đồ chơi giảm căng thẳng.</li>
                    <li>Hỗ trợ chuyên môn là thiết yếu, đặc biệt khi rối loạn cảm xúc đi kèm các rối loạn khác. Trị liệu DBT đã được chứng minh là rất hiệu quả.</li>
                  </ul>
                </div>
                <p style={{textAlign: 'center', fontWeight: 'bold', color: 'var(--dark-slate-grey)', marginTop: '20px'}}>
                  Bằng cách hiểu và đối diện với cảm xúc của mình, bạn có thể tôn trọng cảm xúc mà không để chúng điều khiển cuộc sống. Khi học được cách quản lý cảm xúc một cách lành mạnh, người mắc ADHD có thể xây dựng lòng tự trọng và sống hòa hợp hơn với bản thân 💗.
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

export default ADHdEmotions