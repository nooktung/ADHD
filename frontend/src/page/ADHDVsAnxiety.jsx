import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/AboutADHD.css';

const ADHDVsAnxiety = () => {
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
              <div className="adhd-category">Bản Giao Hưởng ADHD • So sánh và phân biệt</div>
              <h1 className="adhd-main-title">V. So sánh ADHD với rối loạn lo âu</h1>
              <p className="adhd-subtitle">
                Tìm hiểu sự khác biệt và điểm chung giữa ADHD và rối loạn lo âu. Nhiều dấu hiệu có thể gây nhầm lẫn, 
                nhưng hiểu rõ sự khác biệt sẽ giúp nhận diện và hỗ trợ đúng cách.
              </p>
              <div className="adhd-publish-info">Cập nhật ngày 24.06.2025</div>

              <div className="adhd-author-info">
                <div className="adhd-author-avatar">
                  <img src="/511186419_122111342948899610_4326304319022005289_n (1).jpg" alt="Author Avatar" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%'}} />
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
                <a href="#academic" className="adhd-nav-item">
                  1. Trong môi trường học tập
                </a>
                <a href="#workplace" className="adhd-nav-item">
                  2. Trong công việc (Nơi công sở)
                </a>
                <a href="#daily-personal" className="adhd-nav-item">
                  3. Trong sinh hoạt hằng ngày, đời sống cá nhân
                </a>
                <a href="#coexistence" className="adhd-nav-item">
                  4. Khi Cả Hai Cùng Tồn Tại
                </a>
                <a href="#strengths" className="adhd-nav-item">
                  5. Góc Nhìn về Điểm Mạnh
                </a>
              </nav>

              <div className="adhd-cta-section">
                <div className="adhd-cta-illustration">
                  <div className="adhd-cta-book"></div>
                </div>
                <h4>Phân biệt ADHD và Lo âu!</h4>
                <p>
                  Hiểu rõ sự khác biệt giữa ADHD và rối loạn lo âu để có cách tiếp cận 
                  và hỗ trợ phù hợp.
                </p>
                <button className="adhd-cta-button">Tìm hiểu</button>
              </div>
            </aside>

            {/* Main Article */}
            <article className="adhd-article-content">
              <section>
                <h2>So sánh tổng quát</h2>
                
                <div className="adhd-adhd-types">
                  <div className="adhd-type-item">
                    <h3>🧠 ADHD ở người lớn</h3>
                    <p><strong>Trọng tâm của sự mất tập trung:</strong></p>
                    <p>
                      <strong>Tâm trí "lang thang" hướng ra ngoài:</strong> Sự chú ý bị phân tán bởi bất kỳ kích thích nào thú vị hơn 
                      hoặc mới mẻ hơn (một email mới, tiếng chim hót, một ý tưởng bất chợt).
                    </p>
                    <p>➜ Không thể duy trì sự tập trung vào một việc, đặc biệt nếu nó nhàm chán</p>
                    
                    <p><strong>Bản chất của sự Bồn chồn & Không thể thư giãn:</strong></p>
                    <p>
                      <strong>Là sự hiếu động bên trong:</strong> Cảm giác như có một "động cơ" luôn chạy bên trong cơ thể. 
                      Biểu hiện qua việc rung chân, gõ bút, đi đi lại lại.
                    </p>
                    <p>➜ Đây là cách não bộ tự tìm kiếm sự kích thích để duy trì tỉnh táo</p>
                    
                    <p><strong>Nguồn gốc & Nguyên nhân cốt lõi:</strong></p>
                    <p>
                      <strong>Là một rối loạn phát triển thần kinh:</strong> Bắt nguồn từ sự khác biệt trong cấu trúc và hóa học của não bộ, 
                      có mặt từ thời thơ ấu và kéo dài đến tuổi trưởng thành.
                    </p>
                  </div>
                  
                  <div className="adhd-type-item">
                    <h3>😰 Rối loạn lo âu</h3>
                    <p><strong>Trọng tâm của sự mất tập trung:</strong></p>
                    <p>
                      <strong>Tâm trí "mắc kẹt" vào bên trong:</strong> Sự chú ý bị chiếm đóng bởi những dòng suy nghĩ lo lắng, 
                      lặp đi lặp lại về các kịch bản tiêu cực ("Nếu như...", "Lỡ may...").
                    </p>
                    <p>➜ Không thể chuyển hướng sự tập trung ra khỏi nỗi lo</p>
                    
                    <p><strong>Bản chất của sự Bồn chồn & Không thể thư giãn:</strong></p>
                    <p>
                      <strong>Là sự căng thẳng của cơ thể:</strong> Cơ thể luôn trong trạng thái "chiến đấu hoặc bỏ chạy". 
                      Biểu hiện qua việc căng cứng cơ bắp, tim đập nhanh, run rẩy.
                    </p>
                    <p>➜ Đây là phản ứng vật lý đối với sự lo lắng trong tâm trí</p>
                    
                    <p><strong>Nguồn gốc & Nguyên nhân cốt lõi:</strong></p>
                    <p>
                      <strong>Là một rối loạn tâm thần:</strong> Có thể phát triển ở bất kỳ giai đoạn nào trong đời, 
                      thường được kích hoạt bởi sự căng thẳng kéo dài, các sự kiện sang chấn, hoặc yếu tố di truyền.
                    </p>
                  </div>
                </div>
              </section>

              <section id="academic">
                <h2>1. Trong môi trường học tập</h2>

                <div className="adhd-help-resources">
                  <div className="adhd-resource">
                    <h4>📚 Nghe giảng bài</h4>
                    <p><strong>ADHD ở người lớn:</strong> "Buồn chán" và mất kết nối</p>
                    <p>
                      Não bộ nhanh chóng cảm thấy buồn chán và bắt đầu "đi hoang" tìm kiếm sự kích thích thú vị hơn: 
                      lướt điện thoại, vẽ nguệch ngoạc, lên kế hoạch cho cuối tuần, hoặc theo đuổi một dòng suy nghĩ bất chợt.
                    </p>
                    
                    <p><strong>Rối loạn lo âu:</strong> "Lo lắng" và bị chiếm đóng</p>
                    <p>
                      Không thể tập trung vào nội dung bài giảng vì tâm trí đang bận rộn với các câu hỏi lo âu: 
                      "Mình có hiểu bài không?", "Nếu mình trượt môn này thì sao?", "Mọi người có thấy mình ngốc không?".
                    </p>
                  </div>
                  
                  <div className="adhd-resource">
                    <h4>📖 Khi đọc tài liệu</h4>
                    <p><strong>ADHD ở người lớn:</strong> Đọc lại nhiều lần nhưng không "vào đầu"</p>
                    <p>
                      Mắt vẫn lướt trên trang giấy nhưng tâm trí đã bay đi nơi khác. Họ phải liên tục tự kéo mình quay trở lại. 
                      Việc đọc các tài liệu khô khan, thiếu hấp dẫn là một cuộc vật lộn để duy trì sự tập trung.
                    </p>
                    
                    <p><strong>Rối loạn lo âu:</strong> Đọc chậm và phân tích quá mức</p>
                    <p>
                      Bị mắc kẹt vào từng chi tiết vì lo lắng sẽ bỏ sót thông tin quan trọng. Họ có thể đọc đi đọc lại một câu 
                      nhiều lần không phải vì không hiểu, mà vì sợ mình hiểu sai hoặc không nhớ được một cách hoàn hảo.
                    </p>
                  </div>
                  
                  <div className="adhd-resource">
                    <h4>📝 Khi viết báo cáo, luận văn</h4>
                    <p><strong>ADHD ở người lớn:</strong> Trì hoãn do "tê liệt vì quá tải"</p>
                    <p>
                      Nhìn vào một nhiệm vụ lớn và không biết bắt đầu từ đâu. Việc lập dàn ý, tổ chức các ý tưởng là một thử thách. 
                      Thường chỉ có thể bắt đầu viết khi áp lực deadline trở nên cực lớn.
                    </p>
                    
                    <p><strong>Rối loạn lo âu:</strong> Trì hoãn do "sợ hãi sự không hoàn hảo"</p>
                    <p>
                      Lo lắng rằng bài viết sẽ không đủ tốt, sẽ bị điểm kém, sẽ bị chỉ trích. Nỗi sợ này lớn đến mức 
                      họ thà không làm gì cả còn hơn là đối mặt với nguy cơ tạo ra một sản phẩm không hoàn hảo.
                    </p>
                  </div>
                </div>
              </section>

              <section id="workplace">
                <h2>2. Trong công việc (Nơi công sở)</h2>

                <div className="adhd-help-resources">
                  <div className="adhd-resource">
                    <h4>🤝 Trong các cuộc họp nhóm</h4>
                    <p><strong>ADHD người lớn:</strong> "Lơ đãng" hoặc "Chen ngang"</p>
                    <p>
                      Khó theo dõi một cuộc thảo luận dài, dễ bị phân tâm bởi điện thoại hoặc suy nghĩ riêng. 
                      Họ có thể đột ngột ngắt lời người khác để nói ra một ý tưởng vừa nảy ra vì sợ sẽ quên mất.
                    </p>
                    
                    <p><strong>Rối loạn lo âu:</strong> "Im lặng" hoặc "Trấn an"</p>
                    <p>
                      Ngồi im vì sợ nói ra điều gì đó sai hoặc ngớ ngẩn. Liên tục tự đánh giá phản ứng của người khác. 
                      Có thể hỏi lại nhiều lần để chắc chắn rằng mình đã hiểu đúng ý, không phải vì không nghe, 
                      mà vì cần sự trấn an.
                    </p>
                  </div>
                  
                  <div className="adhd-resource">
                    <h4>🎯 Khi bắt đầu dự án</h4>
                    <p><strong>ADHD người lớn:</strong> Khởi đầu chậm, nước rút về cuối</p>
                    <p>
                      Do "mù thời gian", họ thường đánh giá thấp khối lượng công việc và chỉ cảm thấy có động lực khi deadline đã cận kề. 
                      Chất lượng công việc có thể rất cao (do hyperfocus) hoặc rất cẩu thả (do làm vội).
                    </p>
                    
                    <p><strong>Rối loạn lo âu:</strong> Luôn trong trạng thái căng như dây đàn</p>
                    <p>
                      Bắt đầu công việc từ rất sớm, làm thêm giờ, kiểm tra lại mọi thứ nhiều lần vì lo sợ thất bại hoặc sai sót. 
                      Họ sống trong sự căng thẳng và lo lắng trong suốt quá trình thực hiện dự án, chứ không chỉ ở cuối.
                    </p>
                  </div>
                </div>
              </section>

              <section id="daily-personal">
                <h2>3. Trong sinh hoạt hằng ngày, đời sống cá nhân</h2>

                <div className="adhd-help-resources">
                  <div className="adhd-resource">
                    <h4>🏠 Quản lý việc nhà</h4>
                    <p><strong>ADHD ở người lớn:</strong> Bừa bộn có tổ chức (hoặc không)</p>
                    <p>
                      Việc nhà bị trì hoãn vì nhàm chán. Đồ đạc thường không ở đúng chỗ vì họ đặt nó xuống ở nơi cuối cùng họ sử dụng. 
                      Có thể có những đợt dọn dẹp "bùng nổ" khi có động lực, rồi sau đó lại bừa bộn trở lại.
                    </p>
                    
                    <p><strong>Rối loạn lo âu:</strong> Sạch sẽ quá mức hoặc né tránh hoàn toàn</p>
                    <p>
                      Một số người lo lắng về vi khuẩn và sự mất kiểm soát nên dọn dẹp một cách ám ảnh. 
                      Số khác lại cảm thấy quá tải trước mớ hỗn độn đến mức họ né tránh, không dám nhìn vào nó vì nó gây ra cảm giác lo âu.
                    </p>
                  </div>
                  
                  <div className="adhd-resource">
                    <h4>💰 Quản lý tài chính cá nhân</h4>
                    <p><strong>ADHD ở người lớn:</strong> Chi tiêu bốc đồng và hay quên</p>
                    <p>
                      Mua những thứ không cần thiết chỉ vì một thôi thúc nhất thời. Thường xuyên quên trả hóa đơn đúng hạn dẫn đến phí phạt. 
                      Gặp khó khăn trong việc tuân thủ ngân sách vì nó đòi hỏi sự chú ý và kỷ luật liên tục.
                    </p>
                    
                    <p><strong>Rối loạn lo âu:</strong> Lo lắng thái quá hoặc né tránh tài chính</p>
                    <p>
                      Cực kỳ tiết kiệm, lo sợ về một tương lai nghèo khó dù tài chính ổn định. 
                      Hoặc ngược lại, họ sợ hãi đến mức không dám đối mặt với các con số, không dám mở bảng sao kê ngân hàng hay các hóa đơn.
                    </p>
                  </div>
                  
                  <div className="adhd-resource">
                    <h4>💕 Trong các mối quan hệ tình cảm</h4>
                    <p><strong>ADHD ở người lớn:</strong> Gây ra cảm giác bị "bỏ rơi" ở đối phương</p>
                    <p>
                      Đối phương cảm thấy không được lắng nghe vì người có ADHD dễ bị phân tâm. Sự thất hứa (do hay quên) và các cơn bộc phát cảm xúc 
                      có thể làm xói mòn lòng tin và sự ổn định.
                    </p>
                    
                    <p><strong>Rối loạn lo âu:</strong> Gây ra sự "ngột ngạt" cho đối phương</p>
                    <p>
                      Liên tục cần sự trấn an rằng họ vẫn được yêu thương. Hay ghen tuông, kiểm soát hoặc phân tích quá mức hành động của đối phương 
                      vì lo sợ bị bỏ rơi. Nỗi lo lắng này có thể đẩy đối phương ra xa.
                    </p>
                  </div>
                </div>
              </section>

              <section id="coexistence">
                <h2>4. Khi Cả Hai Cùng Tồn Tại: Sự Cộng hưởng và Thách thức trong Chẩn đoán</h2>
                <p>
                  Theo thống kê, có đến <strong>50% người lớn mắc ADHD</strong> cũng phải đối mặt với ít nhất một Rối loạn Lo âu. 
                  Con số này không phải là sự trùng hợp ngẫu nhiên; nó phản ánh một mối liên kết sâu sắc và phức tạp giữa hai tình trạng này.
                </p>

                <div className="adhd-adhd-types">
                  <div className="adhd-type-item">
                    <h3>😔 Lo âu là "Cái bóng" của ADHD khi không được chẩn đoán</h3>
                    <p>
                      Hãy tưởng tượng một đứa trẻ lớn lên với bộ não ADHD. Từ nhỏ, em đã luôn nghe những lời phàn nàn: 
                      "Sao con không tập trung?", "Cố gắng hơn đi!", "Đừng có lười biếng nữa!".
                    </p>
                    <p>
                      Khi trưởng thành, người này bước vào đời với một balô đầy những trải nghiệm tiêu cực:
                    </p>
                    <ul style={{listStyle: 'disc', paddingLeft: '20px', lineHeight: '1.6'}}>
                      <li>Lo lắng trước mỗi dự án mới vì đã quá nhiều lần trễ deadline</li>
                      <li>Lo lắng trong các mối quan hệ vì sợ sự bốc đồng hay đãng trí sẽ làm tổn thương người khác</li>
                      <li>Lo lắng về tương lai vì cảm thấy không thể kiểm soát được cuộc sống của chính mình</li>
                    </ul>
                  </div>
                  
                  <div className="adhd-type-item">
                    <h3>🔄 Vòng Xoáy Cộng hưởng: Khi 1 + 1 &gt; 2</h3>
                    <p>
                      Khi ADHD và Lo âu cùng tồn tại, chúng không chỉ đơn giản là cộng dồn các triệu chứng. 
                      Chúng tương tác và tạo ra một vòng xoáy tiêu cực, khiến mỗi tình trạng trở nên tồi tệ hơn:
                    </p>
                    <ul style={{listStyle: 'disc', paddingLeft: '20px', lineHeight: '1.6'}}>
                      <li><strong>Vòng xoáy Trì hoãn:</strong> Não bộ ADHD né tránh công việc nhàm chán → Não bộ Lo âu vẽ ra viễn cảnh thảm khốc → Cảm giác "tê liệt vì quá tải"</li>
                      <li><strong>Vòng xoáy Xã hội:</strong> Sự bốc đồng của ADHD → Sự nghiền ngẫm của Lo âu → Né tránh tương tác xã hội</li>
                      <li><strong>Vòng xoáy Mất ngủ:</strong> Não bộ ADHD không "tắt máy" → Não bộ Lo âu đổ thêm mối bận tâm → Mệt mỏi làm suy yếu khả năng tập trung</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="strengths">
                <h2>5. Góc Nhìn về Điểm Mạnh: Hai Mặt Của Một Đồng Tiền</h2>

                <div className="adhd-help-resources">
                  <div className="adhd-resource">
                    <h4>🌟 Những "Siêu năng lực" tiềm ẩn trong Não bộ ADHD</h4>
                    <ul style={{listStyle: 'disc', paddingLeft: '20px', lineHeight: '1.4'}}>
                      <li><strong>Từ "Dễ phân tâm" đến "Tư duy Sáng tạo":</strong> Khả năng tạo ra những mối liên kết bất ngờ giữa các khái niệm</li>
                      <li><strong>Từ "Tăng động" đến "Năng lượng Vô tận":</strong> Nguồn năng lượng dồi dào để theo đuổi đam mê</li>
                      <li><strong>Từ "Mất tập trung" đến "Siêu tập trung (Hyperfocus)":</strong> Khả năng tập trung cao độ vào điều yêu thích</li>
                      <li><strong>Từ "Bốc đồng" đến "Can đảm và Sẵn sàng Mạo hiểm":</strong> Sự can đảm không bị tê liệt bởi sự phân tích quá mức</li>
                    </ul>
                  </div>
                  
                  <div className="adhd-resource">
                    <h4>💎 Những "Tài sản" ẩn giấu sau xu hướng Lo âu</h4>
                    <ul style={{listStyle: 'disc', paddingLeft: '20px', lineHeight: '1.4'}}>
                      <li><strong>Từ "Luôn lo lắng về tương lai" đến "Khả năng Lập kế hoạch và Lường trước Rủi ro":</strong> Khả năng nhìn thấy vấn đề tiềm ẩn</li>
                      <li><strong>Từ "Sợ thất bại và chỉ trích" đến "Sự Tận tâm và Tiêu chuẩn Cao":</strong> Động lực làm việc chăm chỉ và cẩn thận</li>
                      <li><strong>Từ "Nhạy cảm với cảm xúc của người khác" đến "Trí tuệ Cảm xúc và Sự Đồng cảm sâu sắc":</strong> Khả năng "đọc" cảm xúc người khác</li>
                    </ul>
                  </div>
                  
                  <div className="adhd-resource">
                    <h4>🔑 Làm thế nào để biến chúng thành Sức mạnh?</h4>
                    <p>
                      Chìa khóa không phải là "loại bỏ" những đặc điểm này, mà là <strong>học cách quản lý chúng và đặt mình vào đúng môi trường</strong>. 
                      Một con cá sẽ thất bại thảm hại nếu bị đánh giá bằng khả năng leo cây, nhưng nó là một vận động viên phi thường dưới nước.
                    </p>
                    <p><strong>Hãy tự hỏi mình:</strong></p>
                    <ul style={{listStyle: 'disc', paddingLeft: '20px', lineHeight: '1.4'}}>
                      <li>Công việc hay sở thích nào cho phép tôi tận dụng sự sáng tạo và năng lượng của mình?</li>
                      <li>Làm thế nào tôi có thể sử dụng khả năng lường trước rủi ro trong một vai trò mà nó được trân trọng?</li>
                    </ul>
                    <p>
                      Hiểu được rằng bộ não của bạn không phải là một món đồ lỗi, mà là một công cụ đặc biệt với một bộ hướng dẫn sử dụng riêng, 
                      chính là bước đầu tiên để bạn không chỉ chấp nhận bản thân, mà còn thực sự phát huy hết tiềm năng độc đáo của mình.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2>Kết luận</h2>
                <p>
                  Việc phân biệt giữa ADHD và rối loạn lo âu không phải lúc nào cũng dễ dàng, đặc biệt khi cả hai có thể cùng tồn tại. 
                  Tuy nhiên, hiểu rõ sự khác biệt về nguồn gốc, biểu hiện và cơ chế hoạt động của chúng sẽ giúp chúng ta có cách tiếp cận 
                  và hỗ trợ phù hợp.
                </p>
                
                <p>
                  Quan trọng nhất là nhận ra rằng cả ADHD và rối loạn lo âu đều có những điểm mạnh tiềm ẩn. Với sự hiểu biết đúng đắn 
                  và môi trường phù hợp, những đặc điểm này có thể được biến thành những lợi thế thực sự trong cuộc sống và sự nghiệp.
                </p>
                
                <p>
                  Nếu bạn nghi ngờ mình hoặc người thân mắc một trong hai tình trạng này, hãy tìm đến sự hỗ trợ của các chuyên gia 
                  để được đánh giá và hướng dẫn phù hợp.
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

export default ADHDVsAnxiety;