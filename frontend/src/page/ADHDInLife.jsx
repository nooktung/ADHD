import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/AboutADHD.css';

const ADHDInLife = () => {
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
              <div className="adhd-category">Bản Giao Hưởng ADHD • ADHD trong cuộc sống</div>
              <h1 className="adhd-main-title">IV. ADHD trong cuộc sống</h1>
              <p className="adhd-subtitle">
                ADHD ở người trưởng thành không đơn thuần là một "hội chứng rối loạn" mà là một dạng khác biệt thần kinh 
                ảnh hưởng đến nhiều khía cạnh trong đời sống - từ học tập, công việc cho tới sinh hoạt cá nhân.
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
                <a href="#study" className="adhd-nav-item">
                  1. Học tập
                </a>
                <a href="#work" className="adhd-nav-item">
                  2. Công việc
                </a>
                <a href="#daily-life" className="adhd-nav-item">
                  3. Sinh hoạt
                </a>
                <a href="#examples" className="adhd-nav-item">
                  4. Ví dụ thực tế
                </a>
              </nav>

              <div className="adhd-cta-section">
                <div className="adhd-cta-illustration">
                  <div className="adhd-cta-book"></div>
                </div>
                <h4>ADHD và cuộc sống!</h4>
                <p>
                  Tìm hiểu cách ADHD ảnh hưởng đến các khía cạnh khác nhau của cuộc sống 
                  và cách thích nghi tích cực.
                </p>
                <button className="adhd-cta-button">Tìm hiểu thêm</button>
              </div>
            </aside>

            {/* Main Article */}
            <article className="adhd-article-content">
              <p>
                Các biểu hiện thường thấy gồm khó duy trì sự tập trung, hay quên, trì hoãn và khó tổ chức công việc, 
                đi kèm cảm xúc dễ dao động và mệt mỏi khi phải kiểm soát bản thân trong thời gian dài.
              </p>

              <section id="study">
                <h2>1. Học tập</h2>
                <p>
                  Trong môi trường học thuật, sinh viên đại học mắc ADHD thường gặp khó khăn trong việc duy trì sự chú ý, 
                  tổ chức thời gian và hoàn thành bài tập đúng hạn. Những yếu tố này dẫn đến điểm GPA thấp hơn, 
                  tỷ lệ rút môn nhiều hơn và tiến độ tốt nghiệp chậm hơn so với sinh viên không mắc ADHD.
                </p>

                <div className="adhd-adhd-types">
                  <div className="adhd-type-item">
                    <h3>📊 Thống kê đáng lo ngại</h3>
                    <ul style={{listStyle: 'disc', paddingLeft: '20px', lineHeight: '1.6'}}>
                      <li><strong>70% sinh viên ADHD</strong> không thể tập trung quá 15 phút</li>
                      <li>Thường xuyên quên deadline</li>
                      <li>Mức độ suy giảm chức năng cao hơn hẳn trong học tập</li>
                      <li>Ảnh hưởng đến các mối quan hệ xã hội và hoạt động hàng ngày</li>
                    </ul>
                  </div>
                  
                  <div className="adhd-type-item">
                    <h3>🎯 Các thách thức cụ thể</h3>
                    <ul style={{listStyle: 'disc', paddingLeft: '20px', lineHeight: '1.6'}}>
                      <li>Khó duy trì sự chú ý trong giờ học dài</li>
                      <li>Gặp khó khăn trong việc tổ chức ghi chép</li>
                      <li>Trì hoãn làm bài tập và dự án</li>
                      <li>Khó khăn trong việc quản lý thời gian</li>
                      <li>Dễ bị phân tâm trong môi trường học tập</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="work">
                <h2>2. Công việc</h2>
                <p>
                  Ở nơi làm việc, ADHD có thể dẫn đến tình trạng giảm năng suất, trễ deadline, khó làm việc nhóm và 
                  rút lui khỏi các cơ hội nghề nghiệp. Người trưởng thành mắc ADHD có nguy cơ cao hơn trong việc mất việc 
                  hoặc nghỉ làm do các vấn đề về chú ý, điều hành và cảm xúc.
                </p>

                <div className="adhd-adhd-types">
                  <div className="adhd-type-item">
                    <h3>📉 Tác động tiêu cực</h3>
                    <ul style={{listStyle: 'disc', paddingLeft: '20px', lineHeight: '1.6'}}>
                      <li>Trung bình <strong>22 ngày mất năng suất mỗi năm</strong></li>
                      <li>Nguy cơ mất việc cao hơn</li>
                      <li>Khó khăn trong việc duy trì mối quan hệ đồng nghiệp</li>
                      <li>Stress cao do áp lực công việc</li>
                    </ul>
                  </div>
                  
                  <div className="adhd-type-item">
                    <h3>✨ Những ưu điểm độc đáo</h3>
                    <p>
                      Tuy nhiên, không thể phủ nhận rằng người ADHD cũng mang trong mình nhiều ưu điểm độc đáo:
                    </p>
                    <ul style={{listStyle: 'disc', paddingLeft: '20px', lineHeight: '1.6'}}>
                      <li><strong>Khả năng sáng tạo:</strong> Tư duy độc đáo và giải pháp khác biệt</li>
                      <li><strong>Dũng cảm trong tư duy rủi ro:</strong> Sẵn sàng thử nghiệm ý tưởng mới</li>
                      <li><strong>Trạng thái "hyperfocus":</strong> Tập trung cao độ vào việc yêu thích</li>
                      <li><strong>Tư duy linh hoạt:</strong> Thích nghi nhanh với thay đổi</li>
                      <li><strong>Giàu ý tưởng:</strong> Luôn có nhiều góc nhìn mới mẻ</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="daily-life">
                <h2>3. Sinh hoạt</h2>
                <p>
                  Trong đời sống thường nhật, người ADHD có thể gặp khó khăn trong việc duy trì trật tự sinh hoạt, 
                  như quản lý thời gian, sắp xếp vật dụng, tuân thủ kế hoạch hoặc duy trì ổn định các mối quan hệ cá nhân.
                </p>

                <div className="adhd-adhd-types">
                  <div className="adhd-type-item">
                    <h3>🏠 Thách thức hàng ngày</h3>
                    <ul style={{listStyle: 'disc', paddingLeft: '20px', lineHeight: '1.6'}}>
                      <li>Khó khăn trong việc quản lý thời gian</li>
                      <li>Sắp xếp vật dụng và không gian sống</li>
                      <li>Tuân thủ kế hoạch và thói quen</li>
                      <li>Duy trì các mối quan hệ cá nhân ổn định</li>
                      <li>Quản lý tài chính cá nhân</li>
                    </ul>
                  </div>
                  
                  <div className="adhd-type-item">
                    <h3>🌟 Những phẩm chất tích cực</h3>
                    <p>
                      Dù vậy, họ cũng thường là những người:
                    </p>
                    <ul style={{listStyle: 'disc', paddingLeft: '20px', lineHeight: '1.6'}}>
                      <li><strong>Tràn đầy năng lượng:</strong> Nhiệt huyết và năng động</li>
                      <li><strong>Hài hước:</strong> Mang lại niềm vui cho mọi người</li>
                      <li><strong>Có khả năng lan tỏa cảm hứng:</strong> Truyền động lực cho cộng đồng</li>
                      <li><strong>Sáng tạo trong giải quyết vấn đề:</strong> Tìm ra cách làm độc đáo</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="examples">
                <h2>4. Ví dụ thực tế</h2>
                <p>
                  Một số ví dụ thực tế cho thấy mức độ ảnh hưởng rõ rệt của ADHD đến đời sống người lớn:
                </p>

                <div className="adhd-help-resources">
                  <div className="adhd-resource">
                    <h4>👩‍💼 Trường hợp Jen - 29 tuổi</h4>
                    <p>
                      Jen đã từng mất việc vì liên tục trễ deadline và quên lịch họp. Sau khi được chẩn đoán ADHD, 
                      cô bắt đầu điều trị kết hợp thuốc và liệu pháp hành vi nhận thức (CBT), từ đó dần cải thiện 
                      hiệu suất làm việc.
                    </p>
                  </div>
                  
                  <div className="adhd-resource">
                    <h4>👨‍💻 Trường hợp bệnh nhân 23 tuổi</h4>
                    <p>
                      Một bệnh nhân 23 tuổi thường xuyên không thể tập trung ở nơi làm việc và cảm thấy kiệt sức 
                      mỗi khi về nhà. Chỉ sau khi trải qua đánh giá chuyên sâu, họ mới nhận thức được nguyên nhân 
                      đến từ ADHD.
                    </p>
                  </div>
                  
                  <div className="adhd-resource">
                    <h4>🎯 Những dấu hiệu cần chú ý</h4>
                    <ul style={{listStyle: 'disc', paddingLeft: '20px', lineHeight: '1.4'}}>
                      <li>Liên tục trễ deadline dù đã cố gắng</li>
                      <li>Quên các cuộc hẹn quan trọng</li>
                      <li>Cảm thấy kiệt sức sau một ngày làm việc</li>
                      <li>Khó khăn trong việc tổ chức công việc</li>
                      <li>Mất tập trung trong các cuộc họp</li>
                    </ul>
                  </div>
                  
                  <div className="adhd-resource">
                    <h4>🏆 Câu chuyện thành công</h4>
                    <p>
                      Nhiều người nổi tiếng và thành đạt cũng sống với ADHD, chứng minh rằng với sự hỗ trợ đúng đắn, 
                      ADHD không phải là rào cản cho thành công. Họ đã học cách biến những thách thức thành điểm mạnh 
                      và tận dụng những đặc điểm độc đáo của mình.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2>Kết luận</h2>
                <p>
                  ADHD ảnh hưởng đến mọi khía cạnh của cuộc sống, từ học tập, công việc đến sinh hoạt hàng ngày. 
                  Tuy nhiên, với sự hiểu biết đúng đắn, hỗ trợ phù hợp và cách tiếp cận tích cực, 
                  những người mắc ADHD hoàn toàn có thể vượt qua các thách thức và phát huy được những điểm mạnh độc đáo của mình.
                </p>
                
                <p>
                  Quan trọng là chúng ta cần nhìn nhận ADHD như một dạng khác biệt thần kinh, không phải là khuyết tật. 
                  Mỗi người mắc ADHD đều có những tài năng và khả năng riêng biệt, chỉ cần được khám phá và phát triển đúng cách.
                </p>
              </section>
            </article>
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
};

export default ADHDInLife;