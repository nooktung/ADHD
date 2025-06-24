import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/AboutADHD.css';

const ADHDSigns = () => {
  return (
    <>
      <Header />
      
      <div className="adhd-adhd-page">
        {/* Header Section */}
        <header className="adhd-header-section">
          <div className="adhd-header-content">
            <div className="adhd-book-illustration">
              <div className="adhd-book">
                <div className="adhd-book-cover">
                  <img src="/image.png" alt="ADHD Book Cover" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px'}} />
                </div>
              </div>
            </div>

            <div className="adhd-header-text">
              <div className="adhd-category">Bản Giao Hưởng ADHD • Dấu hiệu và biểu hiện</div>
              <h1 className="adhd-main-title">II. Dấu hiệu và biểu hiện ADHD</h1>
              <p className="adhd-subtitle">
                Các triệu chứng ADHD có thể rất đa dạng và biểu hiện khác nhau ở từng độ tuổi. 
                Hiểu rõ các dấu hiệu này giúp nhận biết sớm và hỗ trợ kịp thời.
              </p>
              <div className="adhd-publish-info">Cập nhật ngày 24.06.2025</div>

              <div className="adhd-author-info">
                <div className="adhd-author-avatar">
                  <img src="/teamname.jpg" alt="Author Avatar" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%'}} />
                </div>
                <div className="adhd-author-details">
                  <div className="adhd-author-name">Nhóm Alight</div>
                  <div className="adhd-author-title">Nhóm nghiên cứu và phát triển nội dung ADHD</div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Section */}
        <main className="adhd-main-content">
          <div className="adhd-content-wrapper">
            {/* Sidebar */}
            <aside className="adhd-sidebar">
              <h3>Nội dung bài viết</h3>
              <nav className="adhd-article-nav">
                <a href="#children" className="adhd-nav-item">
                  1. Trẻ em
                </a>
                <a href="#adults" className="adhd-nav-item">
                  2. Người lớn
                </a>
                <a href="#elderly" className="adhd-nav-item">
                  3. Người lớn tuổi
                </a>
              </nav>

              <div className="adhd-cta-section">
                <div className="adhd-cta-illustration">
                  <div className="adhd-cta-book"></div>
                </div>
                <h4>Nhận biết dấu hiệu ADHD!</h4>
                <p>
                  Tìm hiểu cách nhận biết các dấu hiệu ADHD ở các độ tuổi khác nhau 
                  để có biện pháp hỗ trợ phù hợp.
                </p>
                <button className="adhd-cta-button">Xem thêm</button>
              </div>
            </aside>

            {/* Main Article */}
            <article className="adhd-article-content">
              <section id="children">
                <h2>1. Trẻ em</h2>
                <p>
                  Ở trẻ em các triệu chứng ADHD có thể rất đa dạng. Dưới đây là những đặc điểm phổ biến 
                  của rối loạn này, được chia thành hai nhóm chính đó là thiếu chú ý và hiếu động.
                </p>

                <div className="adhd-adhd-types">
                  <div className="adhd-type-item">
                    <h3>🎯 Thiếu chú ý</h3>
                    <ul style={{listStyle: 'disc', paddingLeft: '20px', lineHeight: '1.6'}}>
                      <li>Bất cẩn</li>
                      <li>Khó duy trì sự chú ý trong thời gian dài</li>
                      <li>Có vẻ như không lắng nghe</li>
                      <li>Không thực hiện theo yêu cầu của giáo viên hoặc cha mẹ</li>
                      <li>Gặp khó khăn trong việc tổ chức công việc, thường tạo cảm giác như không nghe thấy chỉ dẫn của giáo viên</li>
                      <li>Tránh né các nhiệm vụ đòi hỏi sự tập trung liên tục</li>
                      <li>Làm mất các vật dụng cần thiết để hoàn thành nhiệm vụ</li>
                      <li>Dễ bị phân tâm</li>
                      <li>Hay quên trong các hoạt động hằng ngày</li>
                    </ul>
                  </div>
                  
                  <div className="adhd-type-item">
                    <h3>⚡ Hiếu động</h3>
                    <ul style={{listStyle: 'disc', paddingLeft: '20px', lineHeight: '1.6'}}>
                      <li>Bồn chồn quá mức hoặc hay cựa quậy</li>
                      <li>Không thể ngồi yên</li>
                      <li>Chạy nhảy hoặc leo trèo không phù hợp hoàn cảnh</li>
                      <li>Không thể tham gia các hoạt động tĩnh lặng một cách ổn định</li>
                      <li>Hành vi như thể "luôn luôn di chuyển"</li>
                      <li>Nói quá nhiều</li>
                      <li>Hành vi bốc đồng (hành động mà không suy nghĩ)</li>
                      <li>Thường xuyên la lên trong lớp (không giơ tay, trả lời trước khi câu hỏi kết thúc)</li>
                      <li>Khó chờ đến lượt trong các hoạt động nhóm</li>
                      <li>Thường xuyên làm phiền hoặc ngắt lời người khác</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="adults">
                <h2>2. Người lớn</h2>
                <p>
                  ADHD ở người trưởng thành được xác định khi có từ 5 triệu chứng trở lên thuộc nhóm thiếu chú ý 
                  hoặc tăng động/bốc đồng, kéo dài ít nhất 6 tháng, xuất hiện trong ít nhất hai môi trường sống 
                  (ví dụ: ở nhà và nơi làm việc) và gây ra suy giảm rõ rệt trong chức năng học tập, công việc hoặc quan hệ xã hội.
                </p>

                <div className="adhd-adhd-types">
                  <div className="adhd-type-item">
                    <h3>🧠 Nhóm thiếu chú ý ở người lớn</h3>
                    <p>
                      Ở người trưởng thành, các triệu chứng thường biểu hiện một cách kín đáo hơn so với trẻ em, 
                      nhưng vẫn để lại nhiều ảnh hưởng tiêu cực trong cuộc sống:
                    </p>
                    <ul style={{listStyle: 'disc', paddingLeft: '20px', lineHeight: '1.6'}}>
                      <li>Dễ mất tập trung</li>
                      <li>Hay quên</li>
                      <li>Mắc lỗi do bất cẩn</li>
                      <li>Gặp khó khăn khi tổ chức công việc hoặc hoàn thành nhiệm vụ</li>
                      <li>Thường trì hoãn hoặc né tránh các công việc đòi hỏi tập trung tinh thần cao</li>
                      <li>Dễ bị xao nhãng bởi yếu tố bên ngoài hoặc dòng suy nghĩ nội tâm</li>
                      <li>Hay làm mất đồ dùng cá nhân</li>
                      <li>Không ghi nhớ được các cuộc hẹn</li>
                      <li>Thường xuyên thay đổi kế hoạch một cách bất tiện cho người khác</li>
                    </ul>
                  </div>
                  
                  <div className="adhd-type-item">
                    <h3>⚡ Nhóm tăng động/bốc đồng ở người lớn</h3>
                    <p>
                      Trong khi đó, nhóm tăng động/bốc đồng ở người lớn tuy không quá rõ ràng, 
                      nhưng vẫn có thể xuất hiện dưới dạng:
                    </p>
                    <ul style={{listStyle: 'disc', paddingLeft: '20px', lineHeight: '1.6'}}>
                      <li>Cảm giác bồn chồn</li>
                      <li>Nói nhiều</li>
                      <li>Thiếu kiên nhẫn</li>
                      <li>Hay ngắt lời người khác</li>
                      <li>Hành xử vội vàng mà không suy xét kỹ</li>
                      <li>Rối loạn cảm xúc như dễ nóng giận</li>
                      <li>Khó kiềm chế hoặc quá nhạy cảm với căng thẳng</li>
                    </ul>
                  </div>
                </div>

                <p>
                  Các biểu hiện trên không chỉ ảnh hưởng đến hiệu suất học tập - công việc mà còn làm xáo trộn 
                  các mối quan hệ cá nhân và khả năng tự quản lý cuộc sống hàng ngày. Việc nhận diện đúng các 
                  dấu hiệu của ADHD ở người trưởng thành là bước đầu tiên quan trọng trong việc hỗ trợ, 
                  đồng hành và điều trị hiệu quả.
                </p>
              </section>

              <section id="elderly">
                <h2>3. Người lớn tuổi</h2>
                <p>
                  Mặc dù chẩn đoán ADHD (rối loạn tăng động giảm chú ý) thường gắn liền với trẻ em trong độ tuổi đi học, 
                  nhưng tình trạng này có thể kéo dài suốt thời kỳ trưởng thành và đến cả tuổi già.
                </p>

                <div className="adhd-adhd-types">
                  <div className="adhd-type-item">
                    <h3>🧓 Đặc điểm ở người lớn tuổi</h3>
                    <p>Người lớn tuổi mắc ADHD thường gặp các khó khăn sau:</p>
                    <ul style={{listStyle: 'disc', paddingLeft: '20px', lineHeight: '1.6'}}>
                      <li>Khó khăn với sự chú ý, trí nhớ và việc lập kế hoạch</li>
                      <li>Gặp khó khăn trong việc hoàn thành các dự án hoặc ghi nhớ thông tin một cách ổn định</li>
                      <li>Dễ bị xao nhãng khi trò chuyện</li>
                      <li>Gặp trở ngại trong việc duy trì các mối quan hệ</li>
                    </ul>
                  </div>
                  
                  <div className="adhd-type-item">
                    <h3>🏠 Thách thức khi nghỉ hưu</h3>
                    <p>
                      Khi mất đi cấu trúc thường nhật của công việc (như lúc nghỉ hưu), các triệu chứng có thể trở nên 
                      trầm trọng hơn. Tương tự như khi người trẻ mất đi khuôn khổ của trường học.
                    </p>
                    <ul style={{listStyle: 'disc', paddingLeft: '20px', lineHeight: '1.6'}}>
                      <li>Tái trải nghiệm những thách thức liên quan đến quản lý thời gian</li>
                      <li>Xu hướng trì hoãn công việc</li>
                      <li>Cảm giác lo âu hoặc tội lỗi do không thể kiểm soát được cuộc sống</li>
                    </ul>
                  </div>
                </div>

                <p>
                  Trong giai đoạn nghỉ hưu, người lớn tuổi có thể bắt đầu tái trải nghiệm những thách thức liên quan 
                  đến quản lý thời gian và trì hoãn công việc, dẫn đến cảm giác lo âu hoặc tội lỗi.
                </p>
              </section>

              <section>
                <h2>Những điều cần lưu ý</h2>
                <div className="adhd-help-resources">
                  <div className="adhd-resource">
                    <h4>⚠️ Không tự chẩn đoán</h4>
                    <p>Các dấu hiệu này chỉ mang tính tham khảo. Cần có sự đánh giá của chuyên gia để có chẩn đoán chính xác.</p>
                  </div>
                  
                  <div className="adhd-resource">
                    <h4>🔍 Quan sát lâu dài</h4>
                    <p>Các triệu chứng cần xuất hiện trong thời gian dài và ở nhiều môi trường khác nhau.</p>
                  </div>
                  
                  <div className="adhd-resource">
                    <h4>📊 Mức độ ảnh hưởng</h4>
                    <p>Các dấu hiệu phải gây ảnh hưởng đáng kể đến cuộc sống hàng ngày mới được coi là triệu chứng.</p>
                  </div>
                  
                  <div className="adhd-resource">
                    <h4>👨‍⚕️ Tìm kiếm hỗ trợ chuyên nghiệp</h4>
                    <p>Nếu nghi ngờ mắc ADHD, hãy tìm đến các chuyên gia tâm lý hoặc bác sĩ tâm thần để được tư vấn.</p>
                  </div>
                </div>
              </section>
            </article>
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
};

export default ADHDSigns;