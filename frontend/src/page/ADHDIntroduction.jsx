import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/AboutADHD.css';

const ADHDIntroduction = () => {
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
              <div className="adhd-category">Bản Giao Hưởng ADHD • Kiến thức cơ bản</div>
              <h1 className="adhd-main-title">I. Giới thiệu ADHD</h1>
              <p className="adhd-subtitle">
                Rối loạn tăng động/giảm chú ý (ADHD) là một loại rối loạn phát triển thần kinh xuất hiện sớm 
                trong thời thơ ấu và ảnh hưởng đến khả năng tập trung, kiểm soát hành vi và điều hòa cảm xúc.
              </p>
              <div className="adhd-publish-info">Cập nhật ngày 24.06.2025</div>

              <div className="adhd-author-info">
                <div className="adhd-author-avatar">
                  <img src="/502556097_122110621676899610_5360919057961847101_n.jpg" alt="Author Avatar" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%'}} />
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
                <a href="#definition" className="adhd-nav-item">
                  Định nghĩa ADHD
                </a>
                <a href="#age-gender" className="adhd-nav-item">
                  Độ tuổi và giới tính
                </a>
                <a href="#types" className="adhd-nav-item">
                  Ba dạng ADHD
                </a>
              </nav>

              <div className="adhd-cta-section">
                <div className="adhd-cta-illustration">
                  <div className="adhd-cta-book"></div>
                </div>
                <h4>Tìm hiểu thêm về ADHD!</h4>
                <p>
                  Khám phá thêm nhiều kiến thức về ADHD thông qua các bài viết chuyên sâu và 
                  sổ tay tự đánh giá của chúng tôi.
                </p>
                <button className="adhd-cta-button">Xem thêm</button>
              </div>
            </aside>

            {/* Main Article */}
            <article className="adhd-article-content">
              <section id="definition">
                <h2>Định nghĩa ADHD</h2>
                <p>
                  <strong>Rối loạn tăng động/giảm chú ý (ADHD)</strong> là một loại rối loạn phát triển thần kinh. 
                  Rối loạn phát triển thần kinh là các tình trạng về thần kinh xuất hiện sớm trong thời thơ ấu, 
                  thường là trước khi bắt đầu đi học và làm suy giảm sự phát triển của các chức năng cá nhân, 
                  xã hội, học tập và/hoặc nghề nghiệp.
                </p>
                
                <p>
                  Chúng thường liên quan đến những khó khăn trong việc thu nhận, duy trì, hoặc áp dụng các kỹ năng 
                  hoặc thông tin cụ thể. Rối loạn phát triển thần kinh có thể liên quan đến rối loạn chức năng ở 
                  một hoặc nhiều điều sau đây: <strong>chú ý, trí nhớ, nhận thức, ngôn ngữ, giải quyết vấn đề 
                  hoặc tương tác xã hội</strong>.
                </p>

                <p>
                  Các rối loạn phát triển thần kinh thường gặp khác bao gồm rối loạn phổ tự kỷ, 
                  rối loạn học tập (ví dụ: chứng khó đọc) và chậm phát triển trí tuệ.
                </p>
              </section>

              <section>
                <h2>Quan niệm về ADHD</h2>
                <p>
                  Một số chuyên gia trước đây coi ADHD là một rối loạn hành vi, có thể là do trẻ em thường biểu hiện 
                  hành vi thiếu tập trung, bốc đồng và quá hiếu động và do các rối loạn hành vi mắc kèm, đặc biệt là 
                  rối loạn thách thức chống đối và rối loạn hành vi, là phổ biến.
                </p>
                
                <p>
                  Tuy nhiên, <strong>ADHD có nền tảng thần kinh được thiết lập tốt và không chỉ đơn giản là 
                  "hành vi sai trái"</strong>. Đây là một rối loạn thực sự của não bộ, không phải là kết quả 
                  của việc nuôi dạy kém hoặc thiếu kỷ luật.
                </p>
              </section>

              <section id="age-gender">
                <h2>Độ tuổi và giới tính</h2>
                <p>
                  ADHD ảnh hưởng đến khoảng <strong>5 đến 15% trẻ em trong độ tuổi đi học</strong>. 
                  Tuy nhiên, nhiều chuyên gia cho rằng ADHD thường bị chẩn đoán một cách lạm dụng, 
                  phần lớn vì các tiêu chuẩn được áp dụng không chính xác.
                </p>
                
                <div className="adhd-adhd-types">
                  <div className="adhd-type-item">
                    <h3>👦 Tỷ lệ giới tính</h3>
                    <p>
                      Nhìn chung, tỷ lệ mắc ADHD ở trẻ trai cao gấp đôi, mặc dù tỷ lệ này khác nhau tùy theo loại. 
                      Loại chủ yếu hiếu động/bốc đồng xảy ra thường xuyên hơn ở bé trai; 
                      loại chủ yếu là thiếu chú ý xảy ra với tần suất xấp xỉ bằng nhau ở cả hai giới.
                    </p>
                  </div>
                  
                  <div className="adhd-type-item">
                    <h3>🧬 Tính gia đình</h3>
                    <p>
                      ADHD có tính gia đình rõ rệt. Nếu một thành viên trong gia đình mắc ADHD, 
                      khả năng các thành viên khác cũng mắc rối loạn này sẽ cao hơn đáng kể.
                    </p>
                  </div>
                </div>
              </section>

              <section id="types">
                <h2>Ba dạng ADHD</h2>
                <p>
                  ADHD được chia thành ba dạng chính dựa trên các triệu chứng chủ đạo:
                </p>
                
                <div className="adhd-adhd-types">
                  <div className="adhd-type-item">
                    <h3>🎯 Dạng Giảm chú ý</h3>
                    <p>
                      Người mắc dạng này chủ yếu gặp khó khăn trong việc tập trung, duy trì sự chú ý, 
                      dễ bị phân tâm và hay quên. Dạng này thường ít được nhận biết hơn, đặc biệt ở nữ giới.
                    </p>
                  </div>
                  
                  <div className="adhd-type-item">
                    <h3>⚡ Dạng Tăng động/Bốc đồng</h3>
                    <p>
                      Người mắc dạng này biểu hiện chủ yếu qua sự hiếu động, khó ngồi yên, 
                      nói nhiều và hành động bốc đồng. Đây là dạng dễ nhận biết nhất.
                    </p>
                  </div>
                  
                  <div className="adhd-type-item">
                    <h3>🔄 Dạng Hỗn hợp</h3>
                    <p>
                      Đây là dạng phổ biến nhất, người mắc có cả triệu chứng giảm chú ý 
                      và tăng động/bốc đồng với mức độ đáng kể.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2>Tầm quan trọng của việc hiểu về ADHD</h2>
                <p>
                  Việc hiểu đúng về ADHD là vô cùng quan trọng vì:
                </p>

                <div className="adhd-help-resources">
                  <div className="adhd-resource">
                    <h4>🎓 Giúp cải thiện việc học tập</h4>
                    <p>Khi hiểu về ADHD, các phương pháp giảng dạy và học tập có thể được điều chỉnh phù hợp</p>
                  </div>
                  
                  <div className="adhd-resource">
                    <h4>❤️ Giảm thiểu hiểu lầm và kỳ thị</h4>
                    <p>Kiến thức đúng đắn giúp xã hội có cái nhìn tích cực hơn về người mắc ADHD</p>
                  </div>
                  
                  <div className="adhd-resource">
                    <h4>🏥 Hỗ trợ chẩn đoán và điều trị</h4>
                    <p>Nhận biết sớm các dấu hiệu giúp can thiệp kịp thời và hiệu quả</p>
                  </div>

                  <div className="adhd-resource">
                    <h4>👨‍👩‍👧‍👦 Tăng cường hỗ trợ gia đình</h4>
                    <p>Gia đình hiểu rõ ADHD sẽ biết cách hỗ trợ con em mình tốt hơn</p>
                  </div>
                </div>
              </section>

              <section>
                <h2>Kết luận</h2>
                <p>
                  ADHD là một rối loạn phát triển thần kinh thực sự, không phải là "sự lười biếng" hay 
                  "thiếu kỷ luật". Việc hiểu đúng về ADHD - từ định nghĩa, các dạng khác nhau đến 
                  tác động của nó - là bước đầu tiên quan trọng trong việc hỗ trợ những người mắc 
                  rối loạn này.
                </p>
                
                <p>
                  Với kiến thức đúng đắn và sự hỗ trợ phù hợp, những người mắc ADHD hoàn toàn có thể 
                  phát huy được tiềm năng của mình và có một cuộc sống thành công, hạnh phúc.
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

export default ADHDIntroduction;