import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/AboutADHD.css';

const ADHDSymptoms = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [activeNav, setActiveNav] = useState('overview');

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "Tại sao người mắc ADHD dễ bị phân tâm?",
      answer: "Bộ não ADHD quản lý sự chú ý một cách khác biệt. Chúng ta có thể bị phân tâm bởi môi trường xung quanh do sự nhạy cảm về giác quan, và những người mắc ADHD thể kết hợp có thể trải qua 'sự tăng động trong tâm trí' với hàng trăm suy nghĩ lướt qua mỗi phút."
    },
    {
      question: "Tại sao người ADHD thường nói nhiều và ngắt lời?",
      answer: "Bộ não ADHD không ngừng nghỉ và di chuyển quá nhanh, khiến chúng ta cố gắng theo kịp bằng cách nói nhanh nhất có thể. Chúng ta muốn nói trước khi quên mất suy nghĩ, và do tính bốc đồng, việc ngắt lời thường mạnh hơn ý chí muốn giữ phép lịch sự."
    },
    {
      question: "Tại sao người ADHD hay làm mất đồ và quên?",
      answer: "Làm mất đồ thường là kết quả tự nhiên của việc dễ bị phân tâm, khó chú ý, mắc lỗi và vô tổ chức. Nhiều người mắc ADHD bù trừ quá mức bằng cách đặt hàng tấn lời nhắc trên lịch và/hoặc báo thức trên điện thoại."
    },
    {
      question: "Tại sao người ADHD tránh né các nhiệm vụ khó khăn?",
      answer: "Bộ não ADHD khó lĩnh hội các nhiệm vụ phức tạp và cần chia nhỏ chúng thành các tập hợp nhiệm vụ nhỏ hơn. Nhưng việc chia nhỏ này lại rất khó đối với chúng ta, tạo ra chu kỳ trì hoãn không bao giờ kết thúc."
    }
  ];

  return (
    <>
      <style jsx>{`
        /* Enhanced List Styles for ADHD Content */
        .adhd-tools-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 15px;
          margin: 25px 0;
          padding: 0;
          list-style: none;
        }

        .adhd-tools-list li {
          background: #f2c2da;
          padding: 15px 20px;
          border-radius: 12px;
          font-weight: 500;
          color: var(--dark-slate-grey);
          position: relative;
          overflow: hidden;
        }

        .adhd-tools-list li::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: var(--primary-color);
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        .adhd-tools-list li:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(242, 194, 218, 0.4);
          background: #edccf5;
        }

        .adhd-tools-list li:hover::before {
          transform: scaleX(1);
        }

        .adhd-tools-list li:nth-child(odd) {
          background: #f2c2da;
        }

        .adhd-tools-list li:nth-child(even) {
          background: #edccf5;
        }

        .adhd-symptoms-list {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin: 20px 0;
          padding: 0;
          list-style: none;
        }

        .adhd-symptoms-list li {
          background: rgba(242, 194, 218, 0.2);
          padding: 10px 16px;
          border-radius: 25px;
          position: relative;
          font-weight: 500;
          color: var(--dark-slate-grey);
          transition: all 0.3s ease;
          cursor: default;
        }

        .adhd-symptoms-list li::before {
          content: '';
          position: absolute;
          inset: 0;
          padding: 2px;
          background: var(--primary-color);
          border-radius: inherit;
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: xor;
          -webkit-mask-composite: xor;
        }

        .adhd-symptoms-list li:hover {
          transform: scale(1.05);
          background: rgba(242, 194, 218, 0.3);
          color: var(--dark-slate-grey);
        }

        .adhd-symptoms-list li:nth-child(1) {
          background: #caf2e5;
        }

        .adhd-symptoms-list li:nth-child(2) {
          background: #aeecf8;
        }

        .adhd-symptoms-list li:nth-child(3) {
          background: #fbf5ab;
        }

        .adhd-symptoms-list li:nth-child(4) {
          background: #edccf5;
        }

        @media (max-width: 768px) {
          .adhd-tools-list {
            grid-template-columns: 1fr;
            gap: 10px;
          }
          
          .adhd-symptoms-list {
            justify-content: center;
          }
          
          .adhd-symptoms-list li {
            font-size: 14px;
            padding: 8px 12px;
          }
        }

        @media (max-width: 480px) {
          .adhd-tools-list li {
            padding: 12px 15px;
            font-size: 14px;
          }
        }
      `}</style>
      <Header />
      <div className="adhd-adhd-page">
        {/* Header Section */}
        <div className="adhd-header-section">
          <div className="adhd-header-content">
            <div className="adhd-book-illustration">
              <div className="adhd-book">
                <img src="/image.png" alt="ADHD Symptoms" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px'}} />
              </div>
            </div>
            
            <div className="adhd-header-text">
              <div className="adhd-category">
                Nhóm Alight • Hiểu Rõ ADHD
              </div>
              
              <h1 className="adhd-main-title">
                Hiểu về phổ các triệu chứng của Rối loạn tăng động giảm chú ý (ADHD)
              </h1>
              
              <p className="adhd-subtitle">
                Các triệu chứng ADHD thường bao gồm sự giảm chú ý, tính tăng động và tính xung động, nhưng có thể biểu hiện rất đa dạng về hình thái và cường độ, đôi khi bị che lấp hoặc không được nhận diện trong nhiều năm.
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
                  Các Triệu Chứng ADHD Chính Thức
                </a>
                <a
                  href="#inattentive-type"
                  className={`adhd-nav-item${activeNav === 'inattentive-type' ? ' active' : ''}`}
                  onClick={() => setActiveNav('inattentive-type')}
                >
                  ADHD Thể Không Chú Ý
                </a>
                <a
                  href="#hyperactive-type"
                  className={`adhd-nav-item${activeNav === 'hyperactive-type' ? ' active' : ''}`}
                  onClick={() => setActiveNav('hyperactive-type')}
                >
                  ADHD Thể Tăng Động-Xung Động
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
                <h4 style={{marginBottom: '1rem', color: 'var(--color)', fontWeight: 600, fontSize: '1rem'}}>Nhận Diện Triệu Chứng ADHD!</h4>
                <p style={{marginBottom: '1.5rem', color: 'var(--dark-slate-grey-2)', fontSize: '0.8rem', lineHeight: 1.5}}>
                  Chúng tôi cung cấp thông tin chi tiết về các triệu chứng ADHD để giúp bạn nhận diện và hiểu rõ hơn về tình trạng này. 
                  Từ triệu chứng chính thức đến những biểu hiện thường bị bỏ qua, chúng tôi ở đây để hỗ trợ bạn.
                </p>
                <button className="adhd-cta-button">
                  Tìm hiểu triệu chứng
                </button>
              </div>
            </aside>

            {/* Main Article */}
            <article className="adhd-article-content">

              <section id="overview" className="adhd-section">
                <h2>Các Triệu Chứng ADHD Chính Thức</h2>
                
                <p>
                  Tôi viết bài này để làm sáng tỏ các triệu chứng ADHD một cách toàn diện nhất, với hy vọng mang lại câu trả lời cho những người bạn cũng mắc ADHD, những người cũng từng hoang mang như tôi chỉ vài năm trước. Việc nhận được chẩn đoán chính thức là một điều may mắn thực sự và tôi ước mình đã biết về nó sớm hơn trong đời. Tôi không thể quay ngược thời gian để cho bản thân mình biết... nhưng tôi có thể nâng cao nhận thức về ADHD với hy vọng giúp mọi người được chẩn đoán sớm hơn.
                </p>

                <p>
                  Nếu bạn có các câu hỏi chung về ADHD và/hoặc ADD, tôi khuyến khích bạn đọc bài viết này, nơi tôi trả lời tất cả Các câu hỏi thường gặp về ADHD & ADD. Bài viết đi sâu vào chi tiết về các loại ADHD khác nhau, ADHD ở trẻ em so với người lớn và mọi thứ khác bạn nên biết về ADHD.
                </p>

                <p>
                  Giờ khi bạn đã biết mọi điều cần biết về ADHD, "chứng rối loạn này", có lẽ bạn lại có nhiều câu hỏi hơn nữa. Được rồi, não bộ của một số người khác với những người khác, nhưng điều đó có nghĩa là gì? Sống chung với ADHD sẽ như thế nào? Làm sao tôi có thể biết liệu tôi hay người mà tôi quen biết có mắc ADHD không? Hãy đọc tiếp, và tôi hứa đến cuối bài viết này, bạn sẽ có một hình dung rõ ràng hơn về các triệu chứng của ADHD trông như thế nào.
                </p>

                <p>
                  ADHD là một tình trạng tương đối mới, đặc biệt là xét về số lượng nghiên cứu đã được thực hiện về chủ đề này. Đó là lý do tại sao nó vẫn còn bị hiểu chưa đúng, ngay cả trong cộng đồng y khoa.
                </p>

                <p>
                  Trong bài viết tôi đã đề cập ở trên, chúng tôi đã trình bày chi tiết các triệu chứng của cả 3 loại ADHD như được mô tả trong Sổ tay Chẩn đoán và Thống kê các Rối loạn Tâm thần (DSM-V) do Hiệp hội Tâm thần học Hoa Kỳ (APA) biên soạn. Hóa ra ngay cả phiên bản mới nhất của DSM cũng không bao quát hết được tất cả các triệu chứng của ADHD. Nhưng trước khi tôi đi vào chi tiết tất cả các đặc điểm ADHD không chính thức mà bạn nên biết, chúng ta hãy bắt đầu bằng việc xem qua các triệu chứng ADHD chính thức theo APA.
                </p>
              </section>

              <section id="inattentive-type" className="adhd-section">
                <h2>I. Các Triệu Chứng Chính Thức Của ADHD Thể Không Chú Ý (Inattentive Type)</h2>
                
                <p>
                  ADHD được coi là thể không chú ý chiếm ưu thế ở người lớn và trẻ em có các triệu chứng sau đây nhưng lại không có biểu hiện tăng động. Theo tiêu chí chẩn đoán của Hiệp hội Tâm thần học Hoa Kỳ (APA), có chín triệu chứng chính thức liên quan đến đặc trưng giảm chú ý của ADHD.
                </p>

                <h3>Triệu chứng #1 của ADHD Thể không chú ý: "Dễ bị phân tâm"</h3>
                <p>
                  Có thể bạn đã từng tự hỏi tại sao mình lại dễ bị phân tâm đến vậy? Chính tôi cũng đang tự hỏi điều này trong lúc viết bài viết này, tại sao tôi lại liên tục kiểm tra điện thoại và làm mới hộp thư Email của mình. 🙈
                </p>
                <p>
                  Vâng, lý do có thể là vì bạn mắc ADHD. 😉
                </p>
                <p>
                  Việc dễ bị phân tâm là điều mà rất nhiều người mắc ADHD trải qua hàng ngày. Tại sao ư? Bởi vì não bộ ADHD của chúng ta quản lý sự chú ý một cách khác biệt.
                </p>
                <p>
                  Chưa hết đâu, chúng ta còn có thể bị phân tâm bởi môi trường xung quanh do sự nhạy cảm về giác quan. Ví dụ như tiếng ồn nền như còi báo động hoặc tiếng xe đua khi bạn sống ở thành phố, hay mùi thức ăn nồng nặc từ nhà hàng xóm đang nấu ăn.😟
                </p>
                <p>
                  Cuối cùng, những người mắc ADHD thể kết hợp (với các triệu chứng của cả thể không chú ý & tăng động) có thể trải qua "sự tăng động trong tâm trí" (mental hyperactivity), điều này có thể gây phân tâm cực độ. Hãy thử tập trung vào công việc trước mắt khi bạn có hàng trăm suy nghĩ lướt qua tâm trí mỗi phút xem. 😅
                </p>
                <p>
                  Để thử đặt mình vào vị trí của tôi, hãy tưởng tượng bạn cố gắng ngồi thiền lần đầu tiên trong khi bạn bị ADHD đi 😂.
                </p>

                <h3>Triệu chứng #2 của ADHD Thể không chú ý: "Dường như không lắng nghe"</h3>
                <p>
                  Lắng nghe thường được xem là một hoạt động thụ động, nhưng thực chất đó là một quá trình chủ động.
                </p>
                <p>
                  Bạn phải nỗ lực một cách có ý thức để nghe những gì ai đó đang nói và tỏ ra là đang tích cực lắng nghe để người đó cảm thấy được thấu hiểu.
                </p>
                <p>
                  Điều đó có thể khó khăn đối với những người mắc ADHD, những người gặp khó khăn trong việc tập trung và có một bộ não xử lý thông tin theo cách khác. 😌
                </p>
                <p>
                  Tôi không thể đếm xuể số lần bạn đời của tôi đã bực bội với tôi vì tôi tỏ ra không lắng nghe. 😞
                </p>
                <p>
                  Có thể lúc đó tôi đang dùng điện thoại, hoặc cố gắng làm việc khác (như nấu ăn hay dọn dẹp) nhưng tôi đã không nhìn vào mắt anh ấy và gật đầu như những gì anh ấy mong đợi ở tôi. Tại sao ư?
                </p>
                <p>
                  Bởi vì cách bộ não của tôi hoạt động, thực tế là tôi lại dễ tập trung hơn vào những gì anh ấy nói nếu tôi đang sử dụng một phần khác của não bộ để làm việc gì đó.
                </p>
                <p>
                  Vì vậy, nếu bạn đã từng trải qua điều tương tự, hãy yên tâm rằng bạn không đơn độc! 😊
                </p>
                <p>
                  Hãy chia sẻ bài viết này với người thương của bạn để họ có thể hiểu rằng bạn thực sự đang cố gắng lắng nghe, chỉ là họ cần phải thích ứng với cách mà não bộ của bạn hoạt động.
                </p>

                <h3>Triệu chứng #3 của ADHD Thể không chú ý: "Khó khăn trong việc sắp xếp, tổ chức"</h3>
                <p>
                  Một trong những triệu chứng phổ biến và gây suy nhược nhất đối với người lớn mắc ADHD là sự vô tổ chức nghiêm trọng và kinh niên.
                </p>
                <p>
                  Những món đồ cần thiết bị chôn vùi trong đống lộn xộn, hóa đơn chưa thanh toán, các dự án còn dang dở… Nghe có quen thuộc không?
                </p>
                <p>
                  Thật không may, tôi biết quá nhiều người mắc ADHD đã mất việc do những hiểu lầm liên quan đến các đặc điểm ADHD của họ. 😞
                </p>
                <p>
                  Sống chung với ADHD có thể cảm thấy hỗn loạn, giống như đang chơi game ở "Chế độ Khó".
                </p>
                <p>
                  Những cá nhân thông minh, sáng tạo và thành công trong các mặt khác lại cảm thấy quá tải và kiệt sức vì họ cảm thấy mất kiểm soát.😌
                </p>
                <p>
                  Việc đặt mọi thứ vào đúng vị trí, theo dõi các công việc và ưu tiên chúng một cách hợp lý có thể là một thách thức với bất kỳ ai. Khi bạn bị ADHD, điều đó có thể cảm thấy như là không thể.
                </p>
                <p>
                  Vì vậy, hãy chắc chắn rằng nếu bạn biết ai đó bị ADHD, bạn hãy cố gắng hỗ trợ họ, bởi vì một số việc đơn giản là khó quản lý hơn đối với chúng tôi.
                </p>
                <p>
                  Đây là lý do tại sao việc chúng ta, với tư cách là một cộng đồng, hỗ trợ lẫn nhau và chia sẻ các cách để quản lý các đặc điểm của mình để phát triển cùng ADHD lại quan trọng đến vậy. 🙏
                </p>
                <p>
                  Tôi đã tạo ra một bộ 8 Công cụ Sắp xếp để giúp đối phó với sự vô tổ chức của chính mình, nếu bạn nghĩ chúng có thể hữu ích, bạn có thể lấy chúng tại đây. Các công cụ tôi đã sử dụng là:
                </p>
                <ul className="adhd-tools-list">
                  <li>☀️ Công cụ sắp xếp hàng ngày</li>
                  <li>✅ Danh sách việc nhà "Cố gắng làm"</li>
                  <li>😃 Công cụ theo dõi tâm trạng</li>
                  <li>✔️ Công cụ theo dõi thói quen</li>
                  <li>⭐️ Công cụ sắp xếp hàng tuần</li>
                  <li>⏺ Danh sách mua hàng tạp hóa</li>
                  <li>♨️ Công cụ lên kế hoạch bữa ăn</li>
                  <li>✨ Công cụ theo dõi thuốc ADHD</li>
                </ul>

                <h3>Triệu chứng #4 của ADHD Thể không chú ý: "Khó khăn trong việc chú ý"</h3>
                <p>
                  Bộ não ADHD có một bộ quy tắc ưu tiên của riêng nó.
                </p>
                <p>
                  Bạn có khả năng chú ý đến điều gì nhất? Đó là những gì bạn thấy hứng thú.
                </p>
                <p>
                  Điều đó có nghĩa là những gì được những người xung quanh bạn cho là rất quan trọng (như một dự án ở nơi làm việc hoặc một bài tập ở trường) có thể không được bộ não của bạn ưu tiên.
                </p>
                <p>
                  Nếu dự án hoặc bài tập đó nhàm chán đối với bạn, bạn sẽ tìm ra hàng triệu cách để chuyển sự chú ý của mình sang một thứ gì đó thú vị hơn như Bảng tin Instagram hoặc các đề xuất trên Youtube.
                </p>
                <p>
                  Instagram có quan trọng hơn công việc không? Tất nhiên là không, nhưng đây là cách một bộ não ADHD hoạt động. Nó sẽ tìm cách biện minh tại sao nhiệm vụ quan trọng lại không quan trọng đến thế, và tại sao bạn nên làm nhiệm vụ mang lại cảm giác thỏa mãn hơn.
                </p>
                <p>
                  Các nghiên cứu cho thấy não bộ ADHD thường có mức Dopamine thấp, vì vậy chúng ta có xu hướng thực hiện các nhiệm vụ sẽ tạo ra Dopamine trong não. Điều này có nghĩa là chúng ta có xu hướng ưu tiên các nhiệm vụ vui vẻ và mang lại phần thưởng.
                </p>
                <p>
                  Đó là lý do tại sao việc nhận được lượt thích trên Instagram có thể cảm thấy quan trọng hơn một nhiệm vụ công việc, bởi vì về mặt kỹ thuật, đó là thứ sẽ mang lại phần thưởng tốt nhất cho bộ não ADHD.
                </p>

                <h3>Triệu chứng #5 của ADHD Thể không chú ý: "Phạm sai lầm"</h3>
                <p>
                  Khi còn nhỏ, bạn có bao giờ ghi sai ngày nộp bài tập về nhà, hoặc làm sai bài tập không? Bạn có bao giờ mắc các "lỗi" xã giao vì gặp khó khăn trong việc đọc các tín hiệu phi ngôn ngữ không?
                </p>
                <p>
                  Khi trưởng thành, bạn có thể lơ đãng vào những thời điểm quan trọng gây ra những sai lầm bất cẩn như lỡ lối ra trên đường cao tốc, gửi email cho sai người, hoặc điền sai thông tin vào sai dòng trên giấy tờ.
                </p>
                <p>
                  Tất cả chúng ta đều là con người, chúng ta đều mắc sai lầm… Chỉ là một số người trong chúng ta dường như mắc nhiều sai lầm hơn những người khác 🙈
                </p>
                <p>
                  Khi bạn xem xét rằng hai đặc điểm chính của ADHD là thiếu chú ý và hấp tấp, không có gì ngạc nhiên khi nó có thể dẫn đến rất nhiều sai lầm.
                </p>

                <h3>Triệu chứng #6 của ADHD Thể không chú ý: "Khó khăn với các chỉ dẫn"</h3>
                <p>
                  Việc người bị ADHD cảm thấy bị choáng ngợp bởi các chỉ dẫn là rất phổ biến.
                </p>
                <p>
                  Đặc biệt, các chỉ dẫn bằng lời nói có thể rất khó hiểu. Chúng đòi hỏi sự tập trung không chỉ để lắng nghe (và chúng ta biết điều đó khó khăn như thế nào) mà còn để ghi nhớ thông tin cùng một lúc.
                </p>
                <p>
                  Tôi luôn kinh ngạc trước những khách du lịch hỏi đường, tạ ơn Chúa vì đã có điện thoại thông minh bởi vì không có cách nào tôi có thể đến được nơi cần đến nếu phải dựa vào chỉ dẫn bằng lời của ai đó.
                </p>
                <p>
                  Nó giống như bắt đầu một công việc mới và được giới thiệu với 30 người trong một ngày, không có cách nào tôi nhớ được bất kỳ tên của ai trong số họ. 🙈
                </p>
                <p>
                  Các chỉ dẫn bằng văn bản cũng không hẳn tốt hơn nhiều, đặc biệt nếu chúng phức tạp và dài dòng, bạn có thể mất phương hướng về những gì bạn đang cố gắng hoàn thành. Chẳng hạn như bạn đã bao giờ vật lộn với việc lắp ráp đồ nội thất của Ikea chưa? 🙋
                </p>

                <h3>Triệu chứng #7 của ADHD Thể không chú ý: "Tránh né các nhiệm vụ khó khăn"</h3>
                <p>
                  Các nhiệm vụ phức tạp thật đáng sợ khi bạn bị ADHD, chỉ cần nghĩ đến việc bắt đầu một nhiệm vụ phức tạp thôi đã thấy nản lòng.
                </p>
                <p>
                  Não bộ của chúng ta khó có thể lĩnh hội chúng, chúng ta cần phải chia nhỏ chúng thành các tập hợp nhiệm vụ nhỏ hơn. Nhưng điều đó lại rất khó đối với chúng ta, vì vậy…
                </p>
                <p>
                  Tôi không thể làm nhiệm vụ phức tạp này vì nó cần được chia thành các tập hợp nhiệm vụ nhỏ hơn, nhưng tôi không thể làm điều đó vì đó là một nhiệm vụ phức tạp mà tôi cảm thấy mình không thể giải quyết được.
                </p>
                <p>
                  Kết quả có thể là một chu kỳ trì hoãn không bao giờ kết thúc.
                </p>
                <p>
                  Chúng ta càng thất bại trong việc hoàn thành các nhiệm vụ phức tạp, chúng ta càng tránh né chúng.
                </p>
                <p>
                  Điều mà nhiều người không nghĩ đến là một số người mắc ADHD là những người cầu toàn (một đặc điểm khác nghe không giống ADHD nhưng lại có thể là một phần của nó).
                </p>
                <p>
                  Những người cầu toàn mắc ADHD là những người có khả năng tránh né các nhiệm vụ khó khăn nhất, bởi vì ngoài mọi thứ tôi vừa mô tả, họ còn cảm thấy cần phải có tất cả các câu trả lời trước khi có thể bắt đầu suy nghĩ về nhiệm vụ đó, trong khi thực sự có lẽ họ chỉ nên bắt đầu và "vừa làm vừa học".
                </p>

                <h3>Triệu chứng #8 của ADHD Thể không chú ý: "Làm mất đồ"</h3>
                <p>
                  Ai cũng có lúc làm mất thứ gì đó, nhưng đối với người bị ADHD, việc thất lạc đồ đạc gần như là một điều chắc chắn.
                </p>
                <p>
                  Mỗi triệu chứng ADHD ảnh hưởng đến cuộc sống của bạn đều do cách bộ não ADHD của bạn hoạt động và việc làm mất đồ cũng không khác.
                </p>
                <p>
                  Làm mất đồ thường là kết quả tự nhiên của việc dễ bị phân tâm, khó chú ý, mắc lỗi và vô tổ chức.
                </p>
                <p>
                  Hãy hình dung thế này, bạn đang đi dạo về nhà, bạn đang nghe podcast, nhà bạn thì bừa bộn, bạn nhận được cuộc gọi từ mẹ, đoán xem chuyện gì xảy ra? Bạn sẽ để quên chìa khóa của mình ở đâu đó và sẽ mất cả buổi để tìm lại chúng.
                </p>
                <p>
                  Tuy nhiên, việc làm mất đồ không phải là một bản án chung thân, có những cách bạn có thể sắp xếp ngăn nắp và quản lý bộ não ADHD của mình.
                </p>
                <p>
                  Ví dụ, tôi rất thích theo dõi The Home Edit trên Instagram, chương trình trên Netflix của họ cũng cực kỳ hay💥.
                </p>
                <p>
                  Họ sắp xếp lại nhà cửa để phù hợp với cách chúng ta suy nghĩ nhằm đảm bảo rằng ngay cả khi chúng ta bị phân tâm và/hoặc quá tải, chúng ta vẫn có thể đặt mọi thứ vào đúng vị trí của chúng. Bằng cách này, chúng ta giữ được sự ngăn nắp và không còn làm mất đồ nữa!
                </p>
                <p>
                  Nếu bạn chưa bao giờ làm mất bất cứ thứ gì trong đời, điều đó không có nghĩa là bạn không bị ADHD, bạn thậm chí có thể có chính xác đặc điểm này nhưng có thể bạn đang bù trừ quá mức (overcompensating) để đảm bảo điều đó không xảy ra.
                </p>
                <p>
                  Bù trừ quá mức & Che đậy (Masking) là những hành vi rất phổ biến ở những người mắc ADHD.
                </p>
                <p>
                  Vì vậy, nếu bạn không bao giờ làm mất đồ nhưng lại liên tục kiểm tra túi xách hoặc túi quần của mình...
                </p>
                <p>
                  Nếu bạn cần camera an ninh để xem mình đã đóng cửa gara chưa.
                </p>
                <p>
                  Nếu bạn có thiết bị theo dõi trên mọi thiết bị của mình...
                </p>
                <p>
                  Có thể bạn đang bù trừ cho xu hướng ADHD tự nhiên của mình.
                </p>

                <h3>Triệu chứng #9 của ADHD Thể không chú ý: "Hay quên"</h3>
                <p>
                  Việc thỉnh thoảng quên đi một vài thứ là điều bình thường của con người, nhưng đối với những người bị ADHD, sự hay quên có xu hướng nổi bật hơn rất nhiều.
                </p>
                <p>
                  Điều đó bao gồm việc thường xuyên quên nơi bạn đã đặt thứ gì đó hoặc những ngày quan trọng bạn cần nhớ.
                </p>
                <p>
                  Sự hay quên có thể ảnh hưởng đến sự nghiệp và các mối quan hệ.
                </p>
                <p>
                  Nếu ai đó không quen thuộc với ADHD, sự hay quên có thể bị nhầm lẫn với sự bất cẩn hoặc thiếu thông minh.
                </p>
                <p>
                  Đây là lý do tại sao rất nhiều người bị ADHD bị tổn thương tâm lý suốt đời - thường là trong thời thơ ấu - khi sự hay quên của họ dẫn đến sự xấu hổ.
                </p>
                <p>
                  Thật không may, hầu hết những người mắc ADHD vẫn chưa được chẩn đoán chính thức nên họ thiếu mức độ thấu hiểu về bản thân.
                </p>
                <p>
                  Để bảo vệ bản thân khỏi việc đó xảy ra lần nữa, họ sẽ bù trừ quá mức và đặt hàng tấn lời nhắc trên lịch và/hoặc báo thức trên điện thoại của họ.
                </p>
              </section>

              <section id="hyperactive-type" className="adhd-section">
                <h2>II. Các Triệu Chứng Chính Thức Của ADHD Thể Tăng Động-Xung Động (Hyperactive-Impulsive)</h2>
                
                <p>
                  ADHD được coi là thuộc thể Tăng động-Xung động chiếm ưu thế ở người lớn và trẻ em có các triệu chứng sau đây nhưng lại không có biểu hiện của thể không chú ý.
                </p>
                <p>
                  Theo tiêu chí chẩn đoán của Hiệp hội Tâm thần học Hoa Kỳ (APA), có chín triệu chứng chính thức liên quan đến đặc trưng của ADHD thể Tăng động-Xung động.
                </p>

                <h3>Triệu chứng #1 của ADHD Thể Tăng động-Xung động: "Cựa quậy không yên (Fidgeting)"</h3>
                <p>
                  Làm hai việc cùng một lúc thực sự giúp bộ não ADHD tập trung vào một nhiệm vụ chính.
                </p>
                <p>
                  Vì vậy, nếu bạn biết ai đó thích đi đi lại lại hoặc vẽ nguệch ngoạc khi đang nói chuyện điện thoại, hoặc nhai kẹo cao su khi làm bài kiểm tra, có thể bạn đang biết một người bị ADHD.
                </p>
                <p>
                  Một hành động cựa quậy hiệu quả không làm bạn phân tâm khỏi nhiệm vụ chính vì đó là thứ bạn không chủ động suy nghĩ đến.
                </p>
                <p>
                  Việc hay cựa quậy tay chân, thường xuyên nghịch bút, lắc/rung chân chắc chắn có thể là một dấu hiệu nhận biết bạn bị ADHD.
                </p>

                <h3>Triệu chứng #2 của ADHD Thể Tăng động-Xung động: "Thường xuyên rời khỏi chỗ ngồi"</h3>
                <p>
                  Khi việc ngồi yên quá nhàm chán, đến mức bạn cảm thấy như bị mắc kẹt trên ghế, có lẽ bạn bị ADHD.
                </p>
                <p>
                  Bạn cảm thấy cần phải di chuyển, vì vậy bạn sẽ nghĩ ra những cái cớ để đứng dậy, như xin đi vệ sinh.
                </p>
                <p>
                  Đặc điểm ADHD này dẫn đến việc bạn thường xuyên rời khỏi chỗ ngồi trong những tình huống mà việc ngồi yên được mong đợi.
                </p>
                <p>
                  Khi là người lớn, chúng ta đối mặt với nhiều tình huống không thể cứ thế đứng dậy và đi, và chúng ta có xu hướng làm việc khác để kìm nén sự thôi thúc đó như rung chân hoặc nhìn chằm chằm vào điện thoại.
                </p>

                <h3>Triệu chứng #3 của ADHD Thể Tăng động-Xung động: "Cảm giác bồn chồn, không yên"</h3>
                <p>
                  Khi bạn bị ADHD, bạn có thể cảm thấy như động cơ bên trong của mình không chịu tắt.
                </p>
                <p>
                  Khao khát tiếp tục di chuyển và làm mọi việc có thể dẫn đến sự thất vọng khi bạn không thể thực hiện chúng ngay lập tức. Điều đó dẫn đến sự bồn chồn, không yên, có thể gây ra thất vọng và lo lắng.
                </p>
                <p>
                  Cảm nhận tâm trí bồn chồn dường như không ngừng nghỉ có thể rất choáng ngợp, đặc biệt là khi tập trung vào những điều sai lầm.
                </p>
                <p>
                  Khi tâm trí bạn lướt qua các suy nghĩ, nó có thể bị mắc kẹt vào các sự kiện đáng lo ngại và những suy nghĩ đáng sợ dẫn đến lo lắng.
                </p>
                <p>
                  Cảm giác bồn chồn đó có thể dẫn đến một số triệu chứng khác được đề cập ở đây, như:
                </p>
                <ul className="adhd-symptoms-list">
                  <li>Thường xuyên đi lại</li>
                  <li>Gõ tay hoặc chân</li>
                  <li>Ngọ nguậy trên ghế</li>
                  <li>Thấy khó ngồi yên</li>
                </ul>
                <p>
                  Dù tin hay không, quá nhiều năng lượng có thể gây kiệt sức! Bạn có thể cảm thấy nhu cầu liên tục phải hoàn thành một việc gì đó và làm việc hiệu quả nhưng sau đó lại vô cùng thất vọng khi bạn không đạt được.
                </p>
                <p>
                  Khi bạn là người mắc ADHD thể kết hợp, điều này có thể xảy ra rất nhiều, bạn có những đợt bùng nổ năng lượng và năng suất, nhưng sau đó lại bị phân tâm và mất tập trung.
                </p>
                <p>
                  Những người bị ADHD cảm thấy bồn chồn cũng thường gặp khó khăn với giấc ngủ. Thật không may, tâm trí của bạn có thể không dừng lại ngay cả vào ban đêm trên giường của bạn.
                </p>
                <p>
                  Điều tồi tệ nhất là khi cơ thể bạn cũng bồn chồn, bạn có thể trải qua Hội chứng Chân không yên (Restless Leg Syndrome) sẽ làm suy giảm khả năng ngủ của bạn.
                </p>

                <h3>Triệu chứng #4 của ADHD Thể Tăng động-Xung động: "Khó thư giãn"</h3>
                <p>
                  Khó thư giãn là một đặc điểm phổ biến khác của thể Tăng động-Xung động. Nó thường liên quan đến cảm giác bồn chồn, không yên, vốn là nguyên nhân chính của việc không thể thư giãn này.
                </p>
                <p>
                  Bản thân việc khó thư giãn biểu hiện ở những người bị ADHD bằng việc luôn luôn cảnh giác.
                </p>
                <p>
                  Ví dụ, mỗi khi tôi nghe thấy một tiếng động "đáng ngờ", tâm trí tôi ngay lập tức nghĩ đến những kịch bản tồi tệ nhất.
                </p>
                <p>
                  Tôi không thể đếm được số lần tôi nghĩ rằng mình đã nghe thấy tiếng súng, hoặc tôi đã phản ứng thái quá khi nghe ai đó hét lên.
                </p>
                <p>
                  Tôi đã phải tắt thông báo của Hệ thống An ninh vì tôi sẽ sợ chết khiếp vào ban đêm khi con mèo của tôi kích hoạt máy dò chuyển động 🙈
                </p>

                <h3>Triệu chứng #5 của ADHD Thể Tăng động-Xung động: "Luôn chân luôn tay (Always on the go)"</h3>
                <p>
                  "Luôn chân luôn tay" là một cụm từ thường được sử dụng trong quá trình chẩn đoán chính thức, nhưng nó có nghĩa chính xác là gì?
                </p>
                <p>
                  Nó có nghĩa là bạn cảm thấy buồn chán khi không bận rộn, và bộ não của bạn sẽ liên tục thúc đẩy bạn làm việc khác.
                </p>
                <p>
                  Kết hợp với việc bạn có thể có các triệu chứng khác được liệt kê ở đây, bạn có khả năng không thể ngồi yên trong một khoảng thời gian dài.
                </p>
                <p>
                  Điều này có nghĩa là bạn sẽ không thể tập trung vào một nhiệm vụ, và bạn sẽ liên tục di chuyển qua lại giữa nhiều nhiệm vụ.
                </p>
                <p>
                  Ví dụ, bạn khó có thể ngồi yên xem hết một bộ phim dài 2 tiếng. Thay vào đó, khi xem phim, bạn sẽ dành thời gian lướt điện thoại, chuẩn bị đồ ăn nhẹ và có thể làm việc khác trong khi xem (như chơi game, tô màu hoặc xếp hình).
                </p>
                <p>
                  Việc luôn chân luôn tay cũng biểu hiện trong thói quen đi nghỉ của bạn. Nếu bạn là kiểu người nằm dài trên bãi biển cả ngày, bạn không phải là người "luôn chân luôn tay".
                </p>
                <p>
                  Nếu bạn liên tục tìm kiếm những cuộc phiêu lưu mới, khám phá những khu vực mới, phát hiện những địa điểm mới, thử những điều mới thì đó lại là một câu chuyện khác.
                </p>
                <p>
                  Ví dụ, nếu bạn đang lên kế hoạch cho một chuyến đi 8 ngày và bạn ở 7 nơi khác nhau, rất có thể bạn bị ADHD 😅
                </p>
                <p>
                  Khi sự thay đổi mang lại hứng thú và thúc đẩy các quyết định của bạn, bạn sẽ có xu hướng "luôn chân luôn tay".
                </p>

                <h3>Triệu chứng #6 của ADHD Thể Tăng động-Xung động: "Nói nhiều"</h3>
                <p>
                  Khi bạn bị ADHD, bạn đã quen với việc bị nói là "quá nhiều".
                </p>
                <p>
                  Bạn có thể di chuyển "quá nhiều", lo lắng "quá nhiều", quên "quá nhiều", bị phân tâm "quá nhiều", và tất nhiên, nói "quá nhiều".
                </p>
                <p>
                  Sự hoạt động quá mức và cuộc đấu tranh liên tục với việc tự kiểm soát này có thể rất bực bội và dẫn đến lo âu xã hội. 😞
                </p>
                <p>
                  Sau đó, bạn có thể bù trừ quá mức và kìm nén bản thân không phát biểu gì cả vì lo lắng sẽ bị cho là khác người.
                </p>
                <p>
                  Sự thật là bạn là người đầy nhiệt huyết và bạn có nhiều điều muốn nói, đặc biệt là về những gì bạn quan tâm.
                </p>
                <p>
                  Bởi vì bộ não của bạn không ngừng nghỉ, nó di chuyển quá nhanh đến nỗi bạn cố gắng theo kịp nó bằng cách nói nhanh nhất có thể.
                </p>

                <h3>Triệu chứng #7 của ADHD Thể Tăng động-Xung động: "Buột miệng trả lời"</h3>
                <p>
                  Buột miệng nói ra bất cứ điều gì nảy ra trong đầu, bất kể thời điểm hay sự phù hợp, là một dấu hiệu đặc trưng của ADHD.
                </p>
                <p>
                  Việc bị ADHD có thể giải thích tại sao mọi người không có "bộ lọc" khi họ nói ra suy nghĩ của mình.
                </p>
                <p>
                  Việc hòa hợp với mọi người là quan trọng, nếu không bạn sẽ bị cô lập và lo âu xã hội.
                </p>
                <p>
                  Tại sao chúng ta đôi khi lại buột miệng trả lời?
                </p>
                <p>
                  Có một vài lý do:
                </p>
                <p>
                  <strong>Chúng ta muốn nói trước khi quên mất suy nghĩ của mình</strong><br/>
                  → Tâm trí của chúng ta chạy đua quá nhanh đến nỗi nếu chúng ta bỏ lỡ cơ hội, ý tưởng tuyệt vời đó có thể biến mất.
                </p>
                <p>
                  <strong>Chúng ta không kiểm soát được miệng của mình</strong><br/>
                  → Do ADHD, đã có rất nhiều thứ chúng ta phải liên tục lo lắng để có một hành vi xã hội "chấp nhận được". Đôi khi có quá nhiều thứ để suy nghĩ cùng một lúc và chúng ta mất đi "sự tự chủ".
                </p>
                <p>
                  <strong>Chúng ta bốc đồng & thiếu kiên nhẫn (chúng ta gặp khó khăn trong việc chờ đợi)</strong><br/>
                  → Nếu chúng ta cảm thấy mình bị hiểu lầm, hoặc chúng ta có điều gì đó muốn nói sẽ tạo ra tác động lớn trong cuộc trò chuyện, chúng ta cảm thấy một nhu cầu mạnh mẽ phải nói ra điều đó mà không phải lúc nào cũng kìm nén được.
                </p>

                <h3>Triệu chứng #8 của ADHD Thể Tăng động-Xung động: "Khó khăn trong việc chờ đợi"</h3>
                <p>
                  Do chứng rối loạn giảm chú ý / tăng động của mình, tôi cảm thấy bực bội khi bị buộc phải không làm gì cả — đó chính là bản chất của việc chờ đợi.
                </p>
                <p>
                  Tôi cũng cảm thấy bực bội nếu không thể hoàn thành một nhiệm vụ trong một khoảng thời gian ngắn. Tôi biết rằng càng dành nhiều thời gian cho một nhiệm vụ, tôi càng có nhiều khả năng bị phân tâm khỏi nó.
                </p>
                <p>
                  Tóm lại, chờ đợi = bực bội.
                </p>
                <p>
                  Thật không may, có rất nhiều thứ chúng ta phải chờ đợi trong cuộc sống, và việc gặp khó khăn trong việc chờ đợi, và kiên nhẫn nói chung, có thể có tác động tiêu cực đến cuộc sống của bạn.
                </p>
                <p>
                  Ví dụ, tôi ghét chờ đợi đến mức tôi luôn chọn cách tránh những hàng dài, bất kể tôi có muốn hoặc cần thứ mà tôi nên chờ đợi đến đâu.
                </p>
                <p>
                  Sự thiếu kiên nhẫn đó sẽ khiến bạn luôn chọn sự thỏa mãn ngắn hạn hơn bất cứ thứ gì khác.
                </p>
                <p>
                  Điều đó có thể rất tệ, ví dụ như ở Mỹ, nếu bạn muốn nghỉ hưu một ngày nào đó, bạn không thể tập trung vào ngắn hạn, bạn phải suy nghĩ về sức mạnh của lãi suất kép.
                </p>
                <p>
                  Ví dụ, dành ra vài đô la mỗi tháng ở tuổi 18 là rất có giá trị, nhưng việc đó có thể rất khó chịu khi bạn phải hiểu rằng về mặt kỹ thuật, bạn đang "mất" những đô la này trong hơn 40 năm trước khi bạn có thể nhận lại chúng với giá trị kép của chúng.
                </p>

                <h3>Triệu chứng #9 của ADHD Thể Tăng động-Xung động: "Ngắt lời người khác"</h3>
                <p>
                  Khi bạn bị ADHD, bạn có thể gặp khó khăn trong việc kiểm soát sự thôi thúc xen vào và ngắt lời. Như chúng ta đã thảo luận trong các đặc điểm trước, cách hoạt động của bộ não tăng động-xung động của người mắc ADHD tạo ra những bản năng mạnh mẽ khó kiểm soát hơn.
                </p>
                <p>
                  Đây là lý do tại sao sự bốc đồng khiến bạn ngắt lời người khác lại mạnh hơn ý chí muốn giữ phép lịch sự của bạn.
                </p>
                <p>
                  Khi ai đó đang nói, bạn phải cố gắng tập trung vào việc chờ đợi cho đến khi người đối thoại kết thúc câu nói của họ trước khi bạn xen vào.
                </p>
                <p>
                  Điều này có thể cực kỳ khó khăn, đặc biệt là khi bạn ở cùng bạn bè thân thiết hoặc thành viên gia đình, bởi vì bạn có nhiều khả năng là chính mình và không bù trừ quá mức.
                </p>
                <p>
                  Tất nhiên, đây là những người bạn dành nhiều thời gian nhất, vì vậy hãy cố gắng để ý nếu không bạn có thể làm tổn thương cảm xúc của họ.
                </p>
                <p>
                  Điều đó không may xảy ra quá thường xuyên, và sau đó, những người bị ADHD còn đau khổ hơn vì họ tự trách mình bên cạnh việc phải chịu đựng sự mất mát.
                </p>
              </section>

              <section id="faqs" className="adhd-section">
                <h2>Câu Hỏi Thường Gặp Về Triệu Chứng ADHD</h2>
                
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
                  Hiểu rõ các triệu chứng ADHD là bước đầu tiên quan trọng để nhận diện và tìm kiếm sự hỗ trợ phù hợp. Mỗi người mắc ADHD có thể biểu hiện các triệu chứng khác nhau với mức độ nghiêm trọng khác nhau. Sống chung với ADHD có thể cảm thấy hỗn loạn, giống như đang chơi game ở "Chế độ Khó", nhưng với sự hiểu biết và hỗ trợ phù hợp, những cá nhân thông minh và sáng tạo này hoàn toàn có thể phát triển mạnh mẽ. Đây là lý do tại sao việc chúng ta, với tư cách là một cộng đồng, hỗ trợ lẫn nhau và chia sẻ các cách để quản lý các đặc điểm của mình để phát triển cùng ADHD lại quan trọng đến vậy.
                </p>
                </div>
                <p style={{textAlign: 'center', fontWeight: 'bold', color: 'var(--dark-slate-grey)'}}>
                  Hiểu biết là bước đầu của sự thấu hiểu! 🌟
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

export default ADHDSymptoms;