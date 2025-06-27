import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/AboutADHD.css';

const ADHDFacts = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [activeNav, setActiveNav] = useState('overview');

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "ADHD chỉ là một rối loạn ở trẻ em phải không?",
      answer: "Không đúng. ADHD không chỉ là một rối loạn ở trẻ em, nó cũng có thể xuất hiện ở người lớn nhưng việc phát hiện các triệu chứng khác nhau giữa những người này. Người lớn mắc ADHD gặp phải nhiều triệu chứng tâm lý và rối loạn hành vi khác so với trẻ em."
    },
    {
      question: "Tại sao phụ nữ được chẩn đoán mắc ADHD muộn hơn nam giới?",
      answer: "Các bé gái có xu hướng biểu hiện các vấn đề về chú ý liên quan đến lo lắng và trầm cảm, dẫn đến chẩn đoán mắc ADHD ở độ tuổi muộn hơn so với các bé trai. Các triệu chứng của phụ nữ thường ít được chú ý hơn và 'hướng nội' hơn là bị kích động quá mức."
    },
    {
      question: "ADHD có ảnh hưởng đến khả năng lái xe không?",
      answer: "Có. Nghiên cứu năm 2019 phát hiện ra rằng thanh thiếu niên mắc ADHD có nguy cơ gặp tai nạn cao hơn 64% sau khi lái xe. Tuy nhiên, những người mắc ADHD có thói quen lái xe tốt hơn kể từ khi điều trị so với những người không được điều trị."
    },
    {
      question: "Nguyên nhân chính gây ra ADHD là gì?",
      answer: "Yếu tố di truyền là nguyên nhân lớn nhất với hệ số di truyền từ 70% đến 80%. Ngoài ra còn có các yếu tố môi trường như tiếp xúc với chì, thuốc trừ sâu, thiếu hụt dinh dưỡng, và các yếu tố tâm lý xã hội như thu nhập thấp, hoàn cảnh gia đình bất lợi."
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
                <img src="/image.png" alt="ADHD Facts" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px'}} />
              </div>
            </div>
            
            <div className="adhd-header-text">
              <div className="adhd-category">
                Nhóm Alight • Kiến Thức ADHD
              </div>
              
              <h1 className="adhd-main-title">
                Sự thật về ADHD
              </h1>
              
              <p className="adhd-subtitle">
              ADHD là rối loạn thần kinh thực sự với các triệu chứng giảm chú ý, tăng động và bốc đồng - không phải chỉ là hành vi nghịch ngợm. Nguyên nhân là rối loạn chức năng não bộ (vỏ não trước trán) và bất thường hệ thống dopamine/noradrenaline. Hiểu đúng về ADHD giúp chẩn đoán sớm và điều trị hiệu quả, tránh hệ quả tiêu cực.
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
                  href="#driving-impact"
                  className={`adhd-nav-item${activeNav === 'driving-impact' ? ' active' : ''}`}
                  onClick={() => setActiveNav('driving-impact')}
                >
                  ADHD Có Thể Ảnh Hưởng Đến Việc Lái Xe
                </a>
                <a
                  href="#gender-differences"
                  className={`adhd-nav-item${activeNav === 'gender-differences' ? ' active' : ''}`}
                  onClick={() => setActiveNav('gender-differences')}
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

              {/* CTA Section */}
              <div className="adhd-cta-section" style={{textAlign: 'left'}}>
                <div className="adhd-cta-illustration" style={{marginBottom: '1rem'}}>
                  <img src="/Mai Thị Lan Anh.jpg" alt="Mai Thị Lan Anh" style={{width: '150px', height: '200px', borderRadius: '4px', objectFit: 'cover', display: 'block', margin: '0 auto'}} />
                </div>
                <h4 style={{marginBottom: '1rem', color: 'var(--color)', fontWeight: 600, fontSize: '1rem'}}>Hiểu Đúng Về ADHD!</h4>
                <p style={{marginBottom: '1.5rem', color: 'var(--dark-slate-grey-2)', fontSize: '0.8rem', lineHeight: 1.5}}>
                  Chúng tôi cung cấp thông tin khoa học chính xác về ADHD để giúp bạn hiểu rõ hơn về bản chất thần kinh học của tình trạng này. 
                  Từ nguyên nhân di truyền đến các yếu tố môi trường, chúng tôi ở đây để cung cấp kiến thức đáng tin cậy.
                </p>
                <button className="adhd-cta-button">
                  Tìm hiểu thêm
                </button>
              </div>
            </aside>

            {/* Main Article */}
            <article className="adhd-article-content">

              <section id="driving-impact" className="adhd-section">
                <h2>ADHD Có Thể Ảnh Hưởng Đến Việc Lái Xe</h2>
                
                <p>
                  Hành vi ADHD dường như góp phần làm tăng tỷ lệ tai nạn ở người lớn. Một nghiên cứu năm 2019 phát hiện ra rằng <strong>thanh thiếu niên mắc ADHD có nguy cơ gặp tai nạn cao hơn 64%</strong> sau khi lái xe trong vài tuần đầu tiên.
                </p>

                <p>
                  Tuy nhiên, các nhà nghiên cứu kết luận rằng những người mắc ADHD có thói quen lái xe tốt hơn kể từ khi điều trị so với những người mắc ADHD không được điều trị. <strong>Methylphenidate</strong> là chất kích thích hỗ trợ điều trị chứng rối loạn tăng động giảm chú ý (ADHD), được chứng minh là giúp tăng cường sự chú ý.
                </p>

                <p>
                  Phương pháp điều trị bằng thuốc này đã được chứng minh là có thể <strong>giảm 33% lỗi lái xe</strong> khi sử dụng đúng cách dựa trên các bài kiểm tra hiệu suất lái xe. Tuy nhiên, ADHD cũng có thể ảnh hưởng đến người lái xe theo những cách tiêu cực bằng cách khiến họ dễ bị mất tập trung và tăng sự bốc đồng.
                </p>
              </section>

              <section id="gender-differences" className="adhd-section">
                <h2>ADHD Có Thể Biểu Hiện Rất Khác Nhau Ở Trẻ Em Và Phụ Nữ</h2>
                
                <p>
                  Các vấn đề của phụ nữ được cho là ít được chú ý hơn và <strong>'hướng nội'</strong> hơn là bị kích động quá mức. Các triệu chứng liên quan đến đau khổ về mặt cảm xúc hoặc tức giận, khiến họ không được chú ý 👩‍🦰.
                </p>

                <p>
                  Có một lý thuyết cho rằng những người trình bày là phụ nữ thường vô cảm hơn. Phần lớn các chẩn đoán ADHD ở trẻ em là bé trai nhưng nghiên cứu 'xác nhận' rằng <strong>các bé gái thực sự mắc ADHD và chỉ đơn giản là biểu hiện theo cách khác</strong> để thể hiện các triệu chứng này.
                </p>

                <p>
                  Điều này dẫn đến việc nhiều phụ nữ và bé gái bị bỏ sót trong quá trình chẩn đoán, hoặc được chẩn đoán muộn hơn so với nam giới. Việc hiểu rõ sự khác biệt này rất quan trọng để đảm bảo tất cả mọi người đều có thể nhận được sự hỗ trợ cần thiết.
                </p>
              </section>

              <section id="adults-children" className="adhd-section">
                <h2>ADHD Có Thể Xảy Ra Ở Cả Người Lớn Và Trẻ Em</h2>
                
                <p>
                  <strong>ADHD không chỉ là một rối loạn ở trẻ em</strong>, nó cũng có thể xuất hiện ở người lớn nhưng việc phát hiện các triệu chứng khác nhau giữa những người này. Mặc dù ADHD ảnh hưởng đến trẻ em nhiều hơn người lớn, nhưng người lớn mắc ADHD gặp phải nhiều triệu chứng tâm lý và rối loạn hành vi 👨‍💼.
                </p>

                <p>
                  Các triệu chứng ADHD ở người lớn bao gồm bốc đồng, mất tổ chức, các vấn đề về ưu tiên nhiệm vụ, trầm cảm thường xuyên, hung hăng bằng lời nói và cảm giác bốc đồng. Nếu ai đó thấy khó khăn khi thực hiện các nhiệm vụ, thì điều này có thể báo hiệu ADHD ở người lớn.
                </p>

                <p>
                  ADHD nghiêm trọng hoặc bệnh tâm thần thường gặp ở người lớn, nhưng đôi khi trẻ em cũng có thể bị ảnh hưởng. Điều quan trọng là nhận ra rằng <strong>ADHD là một tình trạng suốt đời</strong> và cần có sự hỗ trợ phù hợp ở mọi lứa tuổi.
                </p>
              </section>

              <section id="causes" className="adhd-section">
                <h2>Có Nhiều Nguyên Nhân Dẫn Đến ADHD, Nhưng Gen Là Nguyên Nhân Lớn Nhất</h2>
                
                <p>
                  Nhiều giả thuyết về nguyên nhân của ADHD đã được đề xuất, từ những giải thích nguyên nhân đơn lẻ đến các mô hình mô tả ADHD là một rối loạn đa yếu tố, bao gồm các yếu tố di truyền và môi trường 🧬.
                </p>

                <h3>Yếu Tố Di Truyền</h3>
                <p>
                  <strong>ADHD là một rối loạn có tính chất gia đình</strong>, người thân thế hệ thứ nhất của bệnh nhân có nguy cơ phát triển rối loạn này tăng gấp 5 đến 10 lần khi so sánh với dân số chung. Nghiên cứu song sinh đã chứng minh <strong>hệ số di truyền từ 70% đến 80%</strong> ở cả trẻ em và người lớn.
                </p>

                <p>
                  Một nghiên cứu lớn trên toàn bộ bộ gen, bao gồm 20.000 cá thể mắc và hơn 35.000 người không mắc ADHD đã tìm thấy ít nhất 12 locus khác nhau với nhiều biến thể nguy cơ di truyền liên quan đến sự phát triển ADHD. Những liên hệ này chiếm khoảng 22% hệ số di truyền của rối loạn.
                </p>

                <h3>Yếu Tố Môi Trường</h3>
                <p>
                  Có nhiều yếu tố nguy cơ môi trường liên quan đến ADHD. Do hệ số di truyền cao của ADHD, <strong>tương tác giữa gen và môi trường</strong> có thể là cơ chế chính khiến các yếu tố môi trường làm tăng nguy cơ phát triển rối loạn này:
                </p>

                <div className="adhd-type-item">
                  <h3>Các Yếu Tố Trước Sinh Và Chu Sinh</h3>
                  <p>Nhẹ cân, sinh non, phơi nhiễm với căng thẳng của mẹ từ trong tử cung, béo phì ở mẹ, tăng huyết áp, hút thuốc lá, rượu, thuốc được kê đơn và các chất cấm.</p>
                </div>

                <div className="adhd-type-item">
                  <h3>Các Chất Độc Từ Môi Trường</h3>
                  <p>Chì, thuốc trừ sâu organophosphate, và polychlorinated biphenyl (một hợp chất dùng trong các thiết bị điện) trong tử cung hoặc trong thời thơ ấu sớm.</p>
                </div>

                <div className="adhd-type-item">
                  <h3>Thiếu Hụt Dinh Dưỡng</h3>
                  <p>Kẽm, magie, sắt, axit béo không bão hòa đa omega-3.</p>
                </div>

                <div className="adhd-type-item">
                  <h3>Yếu Tố Tâm Lý Xã Hội</h3>
                  <p>Thu nhập thấp, hoàn cảnh gia đình bất lợi, cách nuôi dạy khắc nghiệt hoặc thù địch.</p>
                </div>

                <p>
                  Cần nhấn mạnh rằng một số liên quan nói trên có thể là sản phẩm của mối tương quan gen/môi trường. Ví dụ, mối liên quan giữa hút thuốc của mẹ và ADHD biến mất sau khi điều chỉnh tiền sử gia đình mắc ADHD, điều này cho thấy mối liên quan này là do các yếu tố di truyền làm tăng nguy cơ cho cả hút thuốc và ADHD.
                </p>
              </section>

              <section id="faqs" className="adhd-section">
                <h2>Câu Hỏi Thường Gặp Về ADHD</h2>
                
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
                  Hiểu đúng về ADHD là bước đầu tiên quan trọng để có thể hỗ trợ và điều trị hiệu quả. ADHD không phải là vấn đề về thái độ hay thiếu kỷ luật, mà là một tình trạng thần kinh học thực sự cần được tiếp cận bằng kiến thức khoa học và sự thấu hiểu. Với việc nâng cao nhận thức đúng đắn, chúng ta có thể giúp những người mắc ADHD nhận được sự hỗ trợ và điều trị phù hợp.
                </p>
                </div>
                <p style={{textAlign: 'center', fontWeight: 'bold', color: 'var(--dark-slate-grey)'}}>
                  Kiến thức chính xác là chìa khóa! 🔑
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

export default ADHDFacts;