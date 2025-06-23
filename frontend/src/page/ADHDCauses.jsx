import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/AboutADHD.css';

const ADHDCauses = () => {
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
              <div className="adhd-category">Bản Giao Hưởng ADHD • Nguyên nhân và cơ chế</div>
              <h1 className="adhd-main-title">III. Nguyên nhân và cơ chế não bộ của ADHD</h1>
              <p className="adhd-subtitle">
                Tìm hiểu về các yếu tố gây ra ADHD và cách thức hoạt động của não bộ. 
                Khám phá những nghiên cứu khoa học về cơ chế sinh học thần kinh của rối loạn này.
              </p>
              <div className="adhd-publish-info">Cập nhật ngày 24.06.2025</div>

              <div className="adhd-author-info">
                <div className="adhd-author-avatar">
                  <img src="/504147273_122103731114899610_3230916345496143108_n.jpg" alt="Author Avatar" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%'}} />
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
                <a href="#causes" className="adhd-nav-item">
                  1. Nguyên nhân
                </a>
                <a href="#brain-mechanism" className="adhd-nav-item">
                  2. Cơ chế não bộ
                </a>
              </nav>

              <div className="adhd-cta-section">
                <div className="adhd-cta-illustration">
                  <div className="adhd-cta-book"></div>
                </div>
                <h4>Khoa học về ADHD!</h4>
                <p>
                  Tìm hiểu sâu hơn về các nghiên cứu khoa học và cơ sở sinh học 
                  của ADHD qua các bài viết chuyên môn.
                </p>
                <button className="adhd-cta-button">Khám phá</button>
              </div>
            </aside>

            {/* Main Article */}
            <article className="adhd-article-content">
              <section id="causes">
                <h2>1. Nguyên nhân</h2>
                <p>
                  Nhiều giả thuyết về nguyên nhân của ADHD đã được đề xuất, từ những giải thích nguyên nhân đơn lẻ 
                  đến các mô hình mô tả ADHD là một rối loạn đa yếu tố, bao gồm các yếu tố di truyền và môi trường.
                </p>

                <div className="adhd-adhd-types">
                  <div className="adhd-type-item">
                    <h3>🧬 Yếu tố di truyền</h3>
                    <p>
                      <strong>ADHD là một rối loạn có tính chất gia đình</strong>, người thân thế hệ thứ nhất của bệnh nhân 
                      có nguy cơ phát triển rối loạn này tăng gấp 5 đến 10 lần khi so sánh với dân số chung.
                    </p>
                    <ul style={{listStyle: 'disc', paddingLeft: '20px', lineHeight: '1.6'}}>
                      <li><strong>Hệ số di truyền:</strong> 70% đến 80% ở cả trẻ em và người lớn</li>
                      <li><strong>Nghiên cứu gene:</strong> Ít nhất 12 locus khác nhau với nhiều biến thể nguy cơ di truyền</li>
                      <li><strong>Đóng góp:</strong> Mỗi biến thể đóng góp một phần nhỏ vào nguy cơ tổng thể</li>
                      <li><strong>Tỷ lệ giải thích:</strong> Các liên hệ này chiếm khoảng 22% hệ số di truyền của rối loạn</li>
                    </ul>
                  </div>
                </div>

                <h3>🌍 Yếu tố môi trường</h3>
                <p>
                  Có nhiều yếu tố nguy cơ môi trường liên quan đến ADHD. Tuy nhiên, không có một yếu tố đặc hiệu riêng lẻ. 
                  Do hệ số di truyền cao của ADHD, tương tác giữa gen và môi trường có thể là cơ chế chính khiến các yếu tố 
                  môi trường làm tăng nguy cơ phát triển rối loạn này.
                </p>

                <div className="adhd-help-resources">
                  <div className="adhd-resource">
                    <h4>🤱 Các yếu tố trước sinh và chu sinh</h4>
                    <ul style={{listStyle: 'disc', paddingLeft: '20px', lineHeight: '1.4'}}>
                      <li>Nhẹ cân, sinh non</li>
                      <li>Phơi nhiễm với căng thẳng của mẹ từ trong tử cung</li>
                      <li>Béo phì ở mẹ, tăng huyết áp</li>
                      <li>Hút thuốc lá, rượu</li>
                      <li>Thuốc được kê đơn (ví dụ: acetaminophen, valproate)</li>
                      <li>Các chất cấm</li>
                    </ul>
                  </div>
                  
                  <div className="adhd-resource">
                    <h4>☢️ Các chất độc từ môi trường</h4>
                    <p>Trong tử cung hoặc trong thời thơ ấu sớm:</p>
                    <ul style={{listStyle: 'disc', paddingLeft: '20px', lineHeight: '1.4'}}>
                      <li>Chì</li>
                      <li>Thuốc trừ sâu organophosphate</li>
                      <li>Polychlorinated biphenyl (một hợp chất dùng trong các thiết bị điện)</li>
                    </ul>
                  </div>
                  
                  <div className="adhd-resource">
                    <h4>🍎 Thiếu hụt và dư thừa dinh dưỡng</h4>
                    <p><strong>Thiếu hụt:</strong></p>
                    <ul style={{listStyle: 'disc', paddingLeft: '20px', lineHeight: '1.4'}}>
                      <li>Kẽm, magie, sắt</li>
                      <li>Axit béo không bão hòa đa omega-3</li>
                    </ul>
                    <p><strong>Dư thừa:</strong></p>
                    <ul style={{listStyle: 'disc', paddingLeft: '20px', lineHeight: '1.4'}}>
                      <li>Đường, chất tạo màu thực phẩm nhân tạo</li>
                      <li>Thực phẩm liên quan đến lượng IgG trong máu thấp hoặc cao</li>
                    </ul>
                  </div>
                  
                  <div className="adhd-resource">
                    <h4>👨‍👩‍👧‍👦 Yếu tố tâm lý xã hội</h4>
                    <ul style={{listStyle: 'disc', paddingLeft: '20px', lineHeight: '1.4'}}>
                      <li>Thu nhập thấp</li>
                      <li>Hoàn cảnh gia đình bất lợi</li>
                      <li>Cách nuôi dạy khắc nghiệt hoặc thù địch</li>
                    </ul>
                  </div>
                </div>

                <p>
                  <strong>Lưu ý quan trọng:</strong> Một số liên quan nói trên có thể là sản phẩm của mối tương quan gen/môi trường. 
                  Ví dụ, mối liên quan giữa hút thuốc của mẹ và ADHD biến mất sau khi điều chỉnh tiền sử gia đình mắc ADHD, 
                  điều này cho thấy mối liên quan này là do các yếu tố di truyền làm tăng nguy cơ cho cả hút thuốc và ADHD.
                </p>
              </section>

              <section id="brain-mechanism">
                <h2>2. Cơ chế não bộ</h2>
                
                <h3>🧪 Rối Loạn Chức Năng Chất Dẫn Truyền Thần Kinh</h3>
                <p>
                  Cơ chế sinh học thần kinh của ADHD chủ yếu liên quan đến sự rối loạn điều hòa của các chất dẫn truyền thần kinh, 
                  đặc biệt là <strong>dopamine</strong> và <strong>norepinephrine</strong> (còn gọi là noradrenaline).
                </p>

                <div className="adhd-adhd-types">
                  <div className="adhd-type-item">
                    <h3>🔬 Dopamine</h3>
                    <p>
                      Chất dẫn truyền thần kinh này đóng vai trò quan trọng trong các chức năng điều hành như động lực, 
                      sự chú ý, phần thưởng và chức năng điều khiển vận động. Ở người mắc ADHD, có bằng chứng cho thấy 
                      sự giảm hoạt động của dopamine trong vỏ não trước trán (prefrontal cortex) và thể vân (striatum).
                    </p>
                    
                    <p><strong>Nguyên nhân có thể do:</strong></p>
                    <ul style={{listStyle: 'disc', paddingLeft: '20px', lineHeight: '1.6'}}>
                      <li><strong>Giảm số lượng thụ thể dopamine D2/D3:</strong> Mật độ thụ thể dopamine D2/D3 thấp hơn ở thể vân, 
                      làm giảm khả năng nhận biết và phản ứng với tín hiệu dopamine</li>
                      <li><strong>Tăng tái hấp thu dopamine:</strong> Protein vận chuyển dopamine (DAT) có thể hoạt động quá mức, 
                      làm dopamine bị tái hấp thu quá nhanh</li>
                    </ul>
                  </div>
                  
                  <div className="adhd-type-item">
                    <h3>⚡ Norepinephrine</h3>
                    <p>
                      Chất dẫn truyền thần kinh này liên quan đến sự tỉnh táo, chú ý, học tập và ghi nhớ. 
                      Các đường dẫn truyền norepinephrine từ nhân xanh (locus coeruleus) đến vỏ não trước trán 
                      đóng vai trò then chốt trong việc điều hòa sự chú ý và kiểm soát xung động.
                    </p>
                    
                    <p>
                      Rối loạn trong hệ thống norepinephrine có thể góp phần vào các triệu chứng như khó khăn 
                      trong việc duy trì sự tập trung và dễ bị sao nhãng.
                    </p>
                  </div>
                </div>

                <h3>🧠 Bất Thường Cấu Trúc và Chức Năng Não Bộ</h3>
                <p>
                  Các nghiên cứu hình ảnh học thần kinh (neuroimaging) như MRI và fMRI đã phát hiện những khác biệt 
                  cấu trúc và chức năng ở người mắc ADHD so với những người không mắc bệnh.
                </p>

                <div className="adhd-help-resources">
                  <div className="adhd-resource">
                    <h4>🎯 Vỏ não trước trán (Prefrontal Cortex - PFC)</h4>
                    <p>
                      Đây là khu vực chịu trách nhiệm chính cho các chức năng điều hành (executive functions), 
                      bao gồm lập kế hoạch, tổ chức, đưa ra quyết định, kiểm soát xung động và điều hòa cảm xúc.
                    </p>
                    <ul style={{listStyle: 'disc', paddingLeft: '20px', lineHeight: '1.4'}}>
                      <li>Vùng PFC thường có thể tích nhỏ hơn hoặc chậm phát triển hơn</li>
                      <li>Hoạt động của PFC, đặc biệt là vùng dorsolateral prefrontal cortex, thường bị suy giảm</li>
                    </ul>
                  </div>
                  
                  <div className="adhd-resource">
                    <h4>⚙️ Hạch nền (Basal Ganglia)</h4>
                    <p>
                      Các cấu trúc này, bao gồm thể vân (striatum), cầu nhạt (pallidum) và nhân đen (substantia nigra), 
                      đóng vai trò quan trọng trong việc điều hòa vận động, học tập và hình thành thói quen.
                    </p>
                    <ul style={{listStyle: 'disc', paddingLeft: '20px', lineHeight: '1.4'}}>
                      <li>Thể tích hạch nền nhỏ hơn ở người mắc ADHD</li>
                      <li>Đặc biệt là nhân đuôi (caudate nucleus) và bèo nhạt (putamen)</li>
                      <li>Có thể góp phần vào các triệu chứng tăng động và khó khăn trong việc ức chế hành vi</li>
                    </ul>
                  </div>
                  
                  <div className="adhd-resource">
                    <h4>🎭 Tiểu não (Cerebellum)</h4>
                    <p>
                      Tiểu não thường được biết đến với vai trò trong phối hợp vận động, nhưng các nghiên cứu gần đây 
                      cũng chỉ ra vai trò của nó trong các chức năng nhận thức.
                    </p>
                    <ul style={{listStyle: 'disc', paddingLeft: '20px', lineHeight: '1.4'}}>
                      <li>Tham gia vào chú ý và định thời gian</li>
                      <li>Có sự khác biệt về thể tích hoặc kết nối trong tiểu não ở người mắc ADHD</li>
                      <li>Có thể liên quan đến các triệu chứng về thời gian phản ứng và điều hòa vận động</li>
                    </ul>
                  </div>
                  
                  <div className="adhd-resource">
                    <h4>🌐 Các mạng lưới não bộ</h4>
                    <p><strong>Mạng lưới mặc định (Default Mode Network - DMN):</strong></p>
                    <ul style={{listStyle: 'disc', paddingLeft: '20px', lineHeight: '1.4'}}>
                      <li>Hoạt động mạnh khi không tập trung vào nhiệm vụ cụ thể</li>
                      <li>Ở người mắc ADHD, DMN thường hoạt động quá mức</li>
                      <li>Khó khăn trong việc tắt đi khi cần chuyển sang các nhiệm vụ đòi hỏi sự tập trung</li>
                    </ul>
                    
                    <p><strong>Mạng lưới kiểm soát tập trung (CEN) và Mạng lưới nổi trội (SN):</strong></p>
                    <ul style={{listStyle: 'disc', paddingLeft: '20px', lineHeight: '1.4'}}>
                      <li>CEN chịu trách nhiệm cho các chức năng điều hành</li>
                      <li>SN giúp phát hiện và phản ứng với các thông tin quan trọng từ môi trường</li>
                      <li>Ở người mắc ADHD có sự mất cân bằng trong sự tương tác giữa các mạng lưới này</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2>Kết luận</h2>
                <p>
                  ADHD là một rối loạn phức tạp với nhiều nguyên nhân khác nhau, bao gồm cả yếu tố di truyền và môi trường. 
                  Cơ chế não bộ của ADHD liên quan đến sự rối loạn trong các chất dẫn truyền thần kinh, đặc biệt là dopamine 
                  và norepinephrine, cũng như những thay đổi trong cấu trúc và chức năng của các vùng não quan trọng.
                </p>
                
                <p>
                  Hiểu rõ về nguyên nhân và cơ chế não bộ của ADHD giúp chúng ta nhận thức đúng đắn rằng đây là một rối loạn 
                  thực sự của não bộ, không phải là kết quả của "sự lười biếng" hay "thiếu kỷ luật". Kiến thức này cũng là 
                  cơ sở để phát triển các phương pháp điều trị và hỗ trợ hiệu quả hơn.
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

export default ADHDCauses;