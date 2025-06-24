import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/AboutADHD.css';

const ADHDImprovement = () => {
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
              <div className="adhd-category">Bản Giao Hưởng ADHD • Cải thiện chất lượng cuộc sống</div>
              <h1 className="adhd-main-title">VI. Cách cải thiện trong đời sống XH</h1>
              <p className="adhd-subtitle">
                Đối với các cá nhân mắc ADHD, việc xây dựng một chiến lược toàn diện tập trung vào các khía cạnh 
                nền tảng như giấc ngủ, dinh dưỡng, hoạt động thể chất, kỹ năng thư giãn và mối quan hệ xã hội là vô cùng quan trọng.
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
                <a href="#sleep" className="adhd-nav-item">
                  1. Giấc ngủ
                </a>
                <a href="#nutrition" className="adhd-nav-item">
                  2. Ăn uống
                </a>
                <a href="#exercise" className="adhd-nav-item">
                  3. Tập sức khỏe
                </a>
                <a href="#relaxation" className="adhd-nav-item">
                  4. Thư giãn
                </a>
                <a href="#relationships" className="adhd-nav-item">
                  5. Mối quan hệ
                </a>
              </nav>

              <div className="adhd-cta-section">
                <div className="adhd-cta-illustration">
                  <div className="adhd-cta-book"></div>
                </div>
                <h4>Cải thiện cuộc sống với ADHD!</h4>
                <p>
                  Khám phá các phương pháp thực tế và hiệu quả để quản lý ADHD 
                  và nâng cao chất lượng cuộc sống.
                </p>
                <button className="adhd-cta-button">Áp dụng ngay</button>
              </div>
            </aside>

            {/* Main Article */}
            <article className="adhd-article-content">
              <section id="sleep">
                <h2>1. Giấc ngủ</h2>
                <p>
                  Trước khi có thể sắp xếp tâm trí, chúng ta cần ổn định cơ thể. <strong>Giấc ngủ chính là nền tảng cốt lõi nhất</strong> 
                  trong việc quản lý ADHD. Đối với bộ não vốn đã dễ bị kích thích và luôn trong trạng thái "bật", một đêm không ngủ đủ giấc 
                  có thể biến ngày hôm sau thành một mớ hỗn độn của sự đãng trí, cảm xúc bùng nổ và khả năng phán đoán suy giảm.
                </p>

                <div className="adhd-adhd-types">
                  <div className="adhd-type-item">
                    <h3>🌙 Thiết lập "nghi thức ngủ" bất khả xâm phạm</h3>
                    <p>
                      Quy trình này không chỉ đơn thuần là việc lên giường đúng giờ, mà là một chuỗi hành động có chủ đích 
                      để báo hiệu cho cơ thể và não bộ rằng đã đến lúc "hạ cánh" sau một ngày dài.
                    </p>
                    <ul style={{listStyle: 'disc', paddingLeft: '20px', lineHeight: '1.6'}}>
                      <li><strong>1 giờ trước khi ngủ:</strong> Từ bỏ hoàn toàn các thiết bị điện tử (điện thoại, máy tính bảng, TV)</li>
                      <li><strong>Ánh sáng xanh:</strong> Ức chế sản xuất melatonin, hormone gây ngủ</li>
                      <li><strong>Hoạt động thay thế:</strong> Đọc sách giấy, ngâm nước nóng, nghe nhạc êm dịu, viết nhật ký</li>
                      <li><strong>Không gian phòng ngủ:</strong> Biến thành "thánh địa" chỉ dành cho nghỉ ngơi và thân mật</li>
                    </ul>
                  </div>
                  
                  <div className="adhd-type-item">
                    <h3>🏠 Tối ưu hóa môi trường ngủ</h3>
                    <ul style={{listStyle: 'disc', paddingLeft: '20px', lineHeight: '1.6'}}>
                      <li>Nhiệt độ phòng: 18-20°C</li>
                      <li>Che kín ánh sáng hoặc sử dụng mặt nạ ngủ</li>
                      <li>Giảm tiếng ồn hoặc sử dụng máy tạo tiếng ồn trắng</li>
                      <li>Đầu tư vào đệm và gối chất lượng tốt</li>
                      <li>Tuyệt đối không làm việc trên giường</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="nutrition">
                <h2>2. Ăn uống</h2>
                <p>
                  Chế độ dinh dưỡng khoa học đóng vai trò nòng cốt trong việc quản lý các triệu chứng của ADHD, 
                  tác động trực tiếp đến khả năng tập trung và sự ổn định về mặt cảm xúc.
                </p>

                <div className="adhd-help-resources">
                  <div className="adhd-resource">
                    <h4>🥩 Protein chất lượng cao</h4>
                    <p>
                      Protein rất quan trọng vì nó cung cấp các axit amin cần thiết để sản xuất chất dẫn truyền thần kinh, 
                      giúp duy trì năng lượng ổn định và hỗ trợ hoạt động của não bộ.
                    </p>
                    <ul style={{listStyle: 'disc', paddingLeft: '20px', lineHeight: '1.4'}}>
                      <li>Thịt nạc, cá, trứng</li>
                      <li>Các loại đậu và hạt</li>
                      <li>Sữa và sản phẩm từ sữa</li>
                      <li>Quinoa, đậu phụ</li>
                    </ul>
                  </div>
                  
                  <div className="adhd-resource">
                    <h4>🌾 Carbohydrate phức hợp</h4>
                    <p>
                      Ưu tiên các loại carbohydrate phức hợp thay vì carbohydrate đơn giản sẽ giúp cung cấp năng lượng 
                      một cách bền vững, hạn chế tình trạng tăng giảm đường huyết đột ngột.
                    </p>
                    <ul style={{listStyle: 'disc', paddingLeft: '20px', lineHeight: '1.4'}}>
                      <li>Trái cây tươi, rau xanh</li>
                      <li>Ngũ cốc nguyên hạt</li>
                      <li>Khoai lang, yến mạch</li>
                      <li>Gạo lứt, bánh mì nguyên cám</li>
                    </ul>
                  </div>
                  
                  <div className="adhd-resource">
                    <h4>🐟 Axit béo Omega-3</h4>
                    <p>
                      Được tìm thấy nhiều trong các loại cá béo, đã được nhiều nghiên cứu chứng minh có khả năng 
                      cải thiện sự chú ý và giảm các biểu hiện tăng động.
                    </p>
                    <ul style={{listStyle: 'disc', paddingLeft: '20px', lineHeight: '1.4'}}>
                      <li>Cá hồi, cá thu, cá mòi</li>
                      <li>Quả óc chó, hạt chia</li>
                      <li>Dầu ô liu, dầu hạt lanh</li>
                      <li>Bơ, hạt hướng dương</li>
                    </ul>
                  </div>
                  
                  <div className="adhd-resource">
                    <h4>⚠️ Thực phẩm cần hạn chế</h4>
                    <ul style={{listStyle: 'disc', paddingLeft: '20px', lineHeight: '1.4'}}>
                      <li>Phụ gia nhân tạo, chất bảo quản</li>
                      <li>Màu thực phẩm artificial</li>
                      <li>Sản phẩm giàu đường tinh luyện</li>
                      <li>Thức ăn nhanh, đồ uống có gas</li>
                      <li>Caffeine quá mức</li>
                    </ul>
                  </div>
                </div>

                <p>
                  <strong>Lời khuyên thực tế:</strong> Thay vì ba bữa ăn lớn, việc chia nhỏ thành năm đến sáu bữa ăn trong ngày 
                  có thể giúp duy trì mức năng lượng và đường huyết ổn định.
                </p>
              </section>

              <section id="exercise">
                <h2>3. Tập sức khỏe</h2>
                <p>
                  Luyện tập thể chất được xem là một trong những <strong>"liều thuốc tự nhiên" mạnh mẽ và hiệu quả nhất</strong> 
                  cho người lớn mắc ADHD. Hoạt động thể chất tác động trực tiếp lên não bộ theo cách mà nhiều loại thuốc điều trị hướng tới.
                </p>

                <div className="adhd-adhd-types">
                  <div className="adhd-type-item">
                    <h3>🏃‍♂️ Hoạt động Aerobic</h3>
                    <p>
                      Làm tăng cường sản xuất các chất dẫn truyền thần kinh quan trọng như dopamine, norepinephrine và serotonin. 
                      Sự gia tăng này mang lại hiệu quả cải thiện sự tập trung, tâm trạng và động lực gần như tức thì sau buổi tập.
                    </p>
                    <ul style={{listStyle: 'disc', paddingLeft: '20px', lineHeight: '1.6'}}>
                      <li><strong>Chạy bộ:</strong> Tăng cường endorphin và dopamine</li>
                      <li><strong>Bơi lội:</strong> Vận động toàn thân, giảm stress</li>
                      <li><strong>Đạp xe:</strong> Cải thiện coordination và tập trung</li>
                      <li><strong>Khiêu vũ:</strong> Kết hợp vận động và âm nhạc</li>
                    </ul>
                  </div>
                  
                  <div className="adhd-type-item">
                    <h3>🧘‍♀️ Hoạt động Mind-Body</h3>
                    <p>
                      Các bộ môn chú trọng vào sự kết nối giữa tâm trí và cơ thể như yoga và thiền chánh niệm 
                      rèn luyện khả năng tự nhận thức và điều hòa cảm xúc.
                    </p>
                    <ul style={{listStyle: 'disc', paddingLeft: '20px', lineHeight: '1.6'}}>
                      <li><strong>Yoga:</strong> Cải thiện flexibility và mindfulness</li>
                      <li><strong>Thiền chánh niệm:</strong> Tăng cường khả năng tập trung</li>
                      <li><strong>Tai Chi:</strong> Chuyển động chậm, meditation in motion</li>
                      <li><strong>Qigong:</strong> Cân bằng năng lượng, giảm anxiety</li>
                    </ul>
                  </div>
                </div>

                <p>
                  <strong>Mục tiêu thực tế:</strong> Ít nhất 30 phút hoạt động vừa phải mỗi ngày, hoặc 150 phút mỗi tuần. 
                  Quan trọng là tính nhất quán hơn là cường độ.
                </p>
              </section>

              <section id="relaxation">
                <h2>4. Thư giãn</h2>
                <p>
                  Một khi nền tảng sinh học đã được củng cố, chúng ta có thể bắt đầu xây dựng các "giàn giáo" hỗ trợ cho tâm trí. 
                  Người mắc ADHD thường sống trong trạng thái căng thẳng mãn tính do não bộ luôn hoạt động ở cường độ cao, 
                  dễ bị kích thích và quá tải thông tin.
                </p>

                <div className="adhd-help-resources">
                  <div className="adhd-resource">
                    <h4>🫁 Các bài tập thở sâu</h4>
                    <p>
                      Có thể được thực hành ở bất cứ đâu và bất cứ lúc nào. Chúng có tác dụng kích hoạt hệ thần kinh phó giao cảm, 
                      giúp cơ thể nhanh chóng thoát khỏi trạng thái "chiến đấu hay bỏ chạy".
                    </p>
                    <ul style={{listStyle: 'disc', paddingLeft: '20px', lineHeight: '1.4'}}>
                      <li><strong>Kỹ thuật thở hộp:</strong> Hít vào 4 giây → Giữ 4 giây → Thở ra 4 giây → Giữ 4 giây</li>
                      <li><strong>Thở bụng sâu:</strong> Tập trung vào việc nở bụng khi hít vào</li>
                      <li><strong>Thở 4-7-8:</strong> Hít vào 4 giây → Giữ 7 giây → Thở ra 8 giây</li>
                    </ul>
                  </div>
                  
                  <div className="adhd-resource">
                    <h4>🧠 Liệu pháp Nhận thức Hành vi (CBT)</h4>
                    <p>
                      CBT không phải là việc cố gắng "suy nghĩ tích cực" một cách sáo rỗng. Nó là một quá trình có cấu trúc 
                      và khoa học để giúp bạn nhận diện những "lỗi tư duy" tự động.
                    </p>
                    <ul style={{listStyle: 'disc', paddingLeft: '20px', lineHeight: '1.4'}}>
                      <li><strong>Nhận diện:</strong> Các pattern suy nghĩ tiêu cực</li>
                      <li><strong>Thách thức:</strong> Đặt câu hỏi về tính chính xác của suy nghĩ</li>
                      <li><strong>Thay thế:</strong> Bằng những góc nhìn thực tế và cân bằng hơn</li>
                      <li><strong>Thực hành:</strong> Áp dụng trong tình huống thực tế</li>
                    </ul>
                  </div>
                  
                  <div className="adhd-resource">
                    <h4>🎵 Các kỹ thuật thư giãn khác</h4>
                    <ul style={{listStyle: 'disc', paddingLeft: '20px', lineHeight: '1.4'}}>
                      <li>Progressive muscle relaxation</li>
                      <li>Guided imagery/visualization</li>
                      <li>Aromatherapy (lavender, chamomile)</li>
                      <li>Nature sounds, white noise</li>
                      <li>Journaling, art therapy</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="relationships">
                <h2>5. Mối quan hệ</h2>
                <p>
                  Chất lượng cuộc sống của chúng ta được đo lường bằng chất lượng các mối quan hệ xã hội. 
                  Đây lại là lĩnh vực mà người trưởng thành mắc ADHD thường gặp nhiều khó khăn và tổn thương nhất, 
                  do các triệu chứng như hay ngắt lời, đãng trí với các cuộc hẹn, hoặc bùng nổ cảm xúc bất ngờ.
                </p>

                <div className="adhd-adhd-types">
                  <div className="adhd-type-item">
                    <h3>💬 Giao tiếp cởi mở và thấu cảm</h3>
                    <p>
                      Chìa khóa để hàn gắn và xây dựng các mối quan hệ bền chặt nằm ở sự giao tiếp cởi mở, 
                      lòng trắc ẩn và sự giáo dục.
                    </p>
                    <ul style={{listStyle: 'disc', paddingLeft: '20px', lineHeight: '1.6'}}>
                      <li><strong>Chia sẻ về ADHD:</strong> Giải thích cách nó ảnh hưởng đến hành vi của bạn</li>
                      <li><strong>Làm rõ hiểu lầm:</strong> Đãng trí ≠ không quan tâm; Bùng nổ cảm xúc ≠ không yêu thương</li>
                      <li><strong>Xin lỗi khi cần thiết:</strong> Thừa nhận sai lầm và cam kết cải thiện</li>
                      <li><strong>Đề xuất giải pháp:</strong> Cùng nhau tìm cách thích ứng</li>
                    </ul>
                  </div>
                  
                  <div className="adhd-type-item">
                    <h3>🎯 Rèn luyện kỹ năng xã hội</h3>
                    <ul style={{listStyle: 'disc', paddingLeft: '20px', lineHeight: '1.6'}}>
                      <li><strong>Lắng nghe tích cực:</strong> Tập trung hoàn toàn vào người nói</li>
                      <li><strong>Nhận diện tín hiệu phi ngôn ngữ:</strong> Ngôn ngữ cơ thể, nét mặt</li>
                      <li><strong>Kiểm soát impulse:</strong> Đếm đến 3 trước khi phản ứng</li>
                      <li><strong>Empathy practice:</strong> Đặt mình vào vị trí của người khác</li>
                    </ul>
                  </div>
                </div>

                <div className="adhd-help-resources">
                  <div className="adhd-resource">
                    <h4>👥 Xây dựng mạng lưới hỗ trợ</h4>
                    <ul style={{listStyle: 'disc', paddingLeft: '20px', lineHeight: '1.4'}}>
                      <li>Tham gia nhóm hỗ trợ ADHD</li>
                      <li>Kết nối với cộng đồng online</li>
                      <li>Tìm kiếm mentor hoặc coach</li>
                      <li>Maintain relationships với gia đình và bạn bè thân thiết</li>
                    </ul>
                  </div>
                  
                  <div className="adhd-resource">
                    <h4>💡 Strategies thực tế</h4>
                    <ul style={{listStyle: 'disc', paddingLeft: '20px', lineHeight: '1.4'}}>
                      <li>Set reminders cho các ngày kỷ niệm quan trọng</li>
                      <li>Sử dụng calendar apps để quản lý lịch hẹn</li>
                      <li>Thiết lập "check-in" thường xuyên với người thân</li>
                      <li>Practice conflict resolution skills</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2>Kết luận</h2>
                <p>
                  Cải thiện chất lượng cuộc sống với ADHD đòi hỏi một cách tiếp cận toàn diện, từ việc chăm sóc cơ thể 
                  (giấc ngủ, dinh dưỡng, tập thể dục) đến việc phát triển kỹ năng tâm lý (thư giãn, giao tiếp, mối quan hệ).
                </p>
                
                <p>
                  Quan trọng nhất là nhớ rằng <strong>sự tiến bộ không phải lúc nào cũng tuyến tính</strong>. 
                  Sẽ có những ngày tốt và những ngày khó khăn. Điều quan trọng là duy trì tính kiên trì, 
                  tự thương yêu bản thân và tiếp tục thực hành những chiến lược đã học.
                </p>
                
                <p>
                  Với thời gian và sự kiên nhẫn, những thay đổi nhỏ này sẽ tích lũy thành những cải thiện lớn 
                  trong chất lượng cuộc sống, giúp bạn không chỉ quản lý ADHD mà còn phát huy được những điểm mạnh độc đáo của mình.
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

export default ADHDImprovement;