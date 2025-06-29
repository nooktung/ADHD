import React, { useEffect } from 'react';
import '../css/Story.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Story7 = () => {
    useEffect(() => {
        // Animate elements on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        }, observerOptions);

        // Observe all content sections
        document.querySelectorAll('.richtext_blog, .h3-stories, .div-block-34, .cta-blog').forEach(section => {
            observer.observe(section);
        });

        // Smooth scroll for navigation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Cleanup
        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div>
            {/* Header */}
            <Header />
            {/* Main Content */}
            <header className="section_header-stories">
                <div className="container-content-2">
                    <div className="wrapper-short-copy">
                        <div className="div-block-38">
                            <img
                                src="logo.jpg"
                                alt="Tara"
                                className="image-27"
                            />
                        </div>
                        <div className="stories_blog-intro">
                            <h1 className="h1-blog-intro">Lương Ngọc Mai được chẩn đoán ADHD ở tuổi 20 tại Việt Nam</h1>
                            <nav className="breadcrumbs">
                                <a >BẢN GIAO HƯỞNG TẬP TRUNG</a>
                                <div className="breadcrumb_text">-</div>
                                <a>CÂU CHUYỆN</a>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
            {/* Main Content */}
            <div className="section_article">
                <div className="container_blog-content">
                    {/* Sidebar */}
                    <div className="info-col">
                        <section className="description">
                            <div className="div-block-40">
                                <div className="grid-7">
                                    <div className="div-block-41">
                                        <div className="text-block-21">Tuổi:</div>
                                        <div className="text-block-22">22</div>
                                    </div>
                                    <div className="div-block-43">
                                        <div className="div-block-78">
                                            <div className="text-block-21">Quốc Tịch</div>
                                        </div>
                                        <div className="text-block-23">Việt Nam</div>
                                    </div>
                                    <div className="div-block-42">
                                        <div className="text-block-24">Chẩn đoán lúc:</div>
                                        <div className="text-block-22">20</div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <div className="box_info-col">
                            <img
                                src="image.jpg"
                                alt=""
                                className="max-width-medium"
                            />
                            <div className="title_cta-col">Bắt đầu hành trình khám phá ADHD!</div>
                            <p>Đánh giá các triệu chứng của bạn, sắp xếp suy nghĩ và chuẩn bị cho việc đánh giá chính thức.</p>
                            <a href="/" className="button-header1">Tìm hiểu thêm</a>
                        </div>
                    </div>
                    {/* Content */}
                    <section className="story-article-content">
                      <div className="wrapper_blog-content">
                        <div id="content" className="richtext_blog">
                            <h2>Điều gì khiến bạn quyết định đi khám bệnh?</h2>
                            <p>Tôi đang làm luận văn thạc sĩ thì nhận ra mình đã làm liên tục trong 8 tiếng mà không ăn gì. Sau đó, tôi nhận ra rằng trong suốt những năm qua, "khả năng" tập trung tuyệt vời "bất ngờ" (hoặc gần đến hạn chót) là lý do duy nhất khiến tôi vượt qua được kỳ thi đại học. Tôi không thể chú ý trong lớp học nên đây là giải pháp duy nhất của tôi. Nhưng tôi biết điều đó không lành mạnh và tôi đã đọc thêm về nó và tìm thấy thuật ngữ "tập trung cao độ".</p>
                        </div>

                        <div id="content" className="richtext_blog">
                            <h2>Bạn làm nghề gì?</h2>
                            <p>Tôi làm trong lĩnh vực tiếp thị.</p>
                        </div>
                        
                        <div id="content" className="richtext_blog">
                            <h2>Những năm đi học của bạn như thế nào?</h2>
                            <p>Tôi luôn học tốt ở trường. Nhưng tôi luôn nghĩ đó là phép màu hoặc món quà mà tôi được sinh ra vì tôi không bao giờ học hay chú ý trong lớp. Nhưng ở trường đại học, khi các khóa học trở nên khó hơn nhiều với nhiều bài tập hơn, tôi đã chết đuối.</p>

                            <h2>Đặc điểm ADHD rõ ràng nhất của bạn khi còn nhỏ là gì?</h2>
                            <p>Không bao giờ chú ý trong lớp, mơ mộng, luôn mắc lỗi bất cẩn, làm phiền bạn cùng lớp vì buồn chán, luôn thiếu tổ chức...</p>

                            <h2>Việc chuẩn đoán có khó không?</h2>
                            <p>Hiện tại tôi đang sống ở Hà Lan nên điều đó không quá khó khăn với tôi (mặc dù phải chờ đợi 8 tháng). Nhưng tôi chắc chắn rằng nếu tôi ở Indonesia, điều đó sẽ khó khăn hơn nhiều vì không có nhiều bác sĩ tâm thần chuyên về ADHD ở người lớn (nó vẫn thường được coi là tình trạng chỉ xảy ra ở trẻ em).</p>

                            <h2>Bạn đã chuẩn bị như thế nào cho việc chuẩn đoán của mình?</h2>
                            <p>Tôi đã có một giai đoạn tập trung cao độ vào việc nghiên cứu về ADHD --- đọc các bài viết, xem video trên Youtube, v.v. Vì vậy, tôi cảm thấy mình đã biết rất nhiều về ADHD và thời gian chờ đợi 8 tháng chắc chắn đã làm mất đi sự mới lạ của nó (vào ngày chẩn đoán, tôi nghĩ đó không phải là vấn đề lớn).</p>

                            <h2>Bạn cảm thấy như thế nào sau khi nhận được chuẩn đoán?</h2>
                            <p>Tôi nghĩ đó là sự nhẹ nhõm hơn. Tôi không ngạc nhiên, nó giống như một chiếc hộp mà cuối cùng tôi cũng đánh dấu được. Nhưng cùng ngày hôm đó, tôi được dùng thử thuốc và tôi ngay lập tức trải nghiệm sự khác biệt (trong khi làm xét nghiệm qB) mà thuốc có thể tạo ra bên trong đầu tôi (tôi mô tả nó như thể tôi cuối cùng cũng đạt được trạng thái thiền!).</p>

                            <h2>Bạn có nghĩ mình "giống" hình mẫu ADHD không?</h2>
                            <p>Không. Nếu tôi làm vậy, thì tôi đã được chẩn đoán sớm hơn. Tôi nghĩ rằng bức bình phong lớn nhất sẽ là việc tôi học rất giỏi ở trường, nghĩa là không có lá cờ đỏ nào được giương lên.</p>

                            <h2>Bạn gặp khó khăn gì vì chứng ADHD ở não?</h2>
                            <p>Mọi thứ. Làm việc ở công ty không phải là điều tốt nhất cho bộ não ADHD của tôi, làm việc nhà cũng là cơn ác mộng. Mối quan hệ của tôi với người khác cũng bị ảnh hưởng do tôi không thể trả lời tin nhắn của họ và hay quên. Nhưng với việc điều trị, tôi chắc chắn đang cải thiện mọi mặt.</p>

                            <h2>Điểm mạnh của bạn về chứng ADHD là gì?</h2>
                            <p>Tôi là người thợ của mọi nghề. Sở thích của tôi thay đổi liên tục --- có lần tôi học cách vẽ và dành 5 giờ mỗi ngày để vẽ, học nấu ăn và nướng bánh, học cách sản xuất nhạc, danh sách cứ dài ra. Tôi cảm thấy mình đã phát triển kỹ năng trong nhiều thứ và điều đó là có thể vì tôi rất thích những thứ tôi thích!</p>

                            <h2>Gia đình, người thân của bạn phản ứng như thế nào khi bạn nhận được chuẩn đoán?</h2>
                            <p>Họ không ngạc nhiên nhưng cuối cùng bố và chị gái tôi đã tự mình đi tìm chẩn đoán.</p>

                            <h2>Lời khuyên của bạn cho những người đang nghi ngờ bản thân họ mắc ADHD?</h2>
                            <p>Đọc càng nhiều càng tốt về nó, nhưng một khi bạn nghĩ rằng mình có thể mắc bệnh thì hãy đăng ký để được chẩn đoán. Đừng nghi ngờ bản thân quá nhiều vì cuối cùng bạn sẽ tự nhận được câu trả lời từ một chuyên gia.</p>
                        </div>
                      </div>
                    </section>
                </div>
            </div>
            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Story7;