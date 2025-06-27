import React, { useEffect } from 'react';
import '../css/Story.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Story6 = () => {
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
                                alt="Erin"
                                className="image-27"
                            />
                        </div>
                        <div className="stories_blog-intro">
                            <h1 className="h1-blog-intro">Nguyễn Mai Trang được chẩn đoán ADHD ở tuổi 27 tại Việt Nam</h1>
                            <nav className="breadcrumbs">
                                <a>BẢN GIAO HƯỞNG TẬP TRUNG</a>
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
                        <div className="description">
                            <div className="div-block-40">
                                <div className="grid-7">
                                    <div className="div-block-41">
                                        <div className="text-block-21">Tuổi:</div>
                                        <div className="text-block-22">30</div>
                                    </div>
                                    <div className="div-block-43">
                                        <div className="div-block-78">
                                            <div className="text-block-21">Quốc Tịch</div>
                                        </div>
                                        <div className="text-block-23">Việt Nam</div>
                                    </div>
                                    <div className="div-block-42">
                                        <div className="text-block-24">Chẩn đoán lúc:</div>
                                        <div className="text-block-22">27</div>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                    <div className="wrapper_blog-content">
                        <div id="content" className="richtext_blog">
                            <h2>Điều gì khiến bạn quyết định đi khám bệnh?</h2>
                            <p>Tôi luôn để lại các dự án ở trường đến phút cuối (kể cả những môn tôi thích) và đôi khi từ chối làm dự án ở những môn tôi ghét. Tôi không thích bài tập về nhà, tôi liên tục quên những thứ như đồ dùng học tập quan trọng và những cuộc trò chuyện tôi đã có vào ngày hôm trước. Tôi không lắng nghe trong lớp và luôn nhìn chằm chằm ra cửa sổ hoặc vẽ vào vở đã trống.</p>
                        </div>

                        <div id="content" className="richtext_blog">
                            <h2>Bạn làm nghề gì để kiếm sống?</h2>
                            <p>Nhân viên rạp phim.</p>
                        </div>

                        <h2 className="h3-stories">Biểu hiện ADHD của bạn là gì?</h2>
                        <p style={{
                            fontSize: '1.1rem',
                            lineHeight: 1.7,
                            marginBottom: '2rem',
                            color: 'var(--text-dark)',
                            padding: '1rem 1.5rem',
                            background: 'var(--warm-blue)',
                            borderRadius: '25px',
                            display: 'inline-block',
                            fontWeight: 700
                        }}>
                            Không chú ý
                        </p>

                        <div id="content" className="richtext_blog">
                            <h2>Những năm đi học của bạn như thế nào?</h2>
                            <p>Học tập là việc khó khăn đối với tôi. Hoặc là tôi tập trung cao độ và học trong nhiều giờ hoặc là tôi không thể tập trung chút nào. Không có khoảng cách nào ở giữa.</p>

                            <h2>Đặc điểm ADHD rõ ràng nhất của bạn khi còn nhỏ là gì?</h2>
                            <p>Không bao giờ lắng nghe trong lớp và nhìn chằm chằm ra cửa sổ thay vì cố gắng chú ý và sau đó hỏi giáo viên đang nói gì sau giờ học.</p>

                            <h2>Việc chuẩn đoán có khó khăn không?</h2>
                            <p>Lần đầu tiên tôi được kiểm tra, bác sĩ tâm lý nói rằng kết quả không thuyết phục vì họ không thể bác bỏ các triệu chứng của tôi, nhưng tôi đã vượt qua các thành phần về trí thông minh và trí nhớ khiến tôi cảm thấy bối rối hơn nữa. Họ đổ lỗi cho các triệu chứng của tôi là do sự lo lắng của tôi, điều này cũng khiến tôi cảm thấy khá tức giận. Bác sĩ tâm lý thứ hai mà tôi gặp nhiều năm sau đó đã có thể hiểu ngay sau khi lắng nghe những trải nghiệm của tôi.</p>

                            <h2>Bạn cảm thấy như thế nào sau khi nhận chuẩn đoán?</h2>
                            <p>Tê liệt. Tôi vẫn thấy lạ khi nói điều đó và kể với mọi người. Nhưng tôi vui vì cuối cùng tôi đã có lời giải thích cho những trải nghiệm của mình và rằng đó không phải là lỗi của chứng lo âu.</p>

                            <h2>Bạn đang gặp khó khăn gì vì chứng ADHD?</h2>
                            <p>Tập trung vào các lớp học "ngồi xuống và lắng nghe", ghi nhớ các cuộc trò chuyện, ghi nhớ các câu thoại trong kịch bản, ghi nhớ các chuỗi động tác nhảy, giữ không gian gọn gàng, ngồi làm bài tập ở trường đại học và bài tập về nhà hàng ngày, tự nấu ăn, kiểm soát thói quen chi tiêu.</p>

                            <h2>Điểm mạnh của bạn về chứng ADHD là gì?</h2>
                            <p>Luôn sẵn sàng giúp đỡ người khác, luôn đến lớp, đi làm và tham gia các sự kiện xã hội sớm do được trả lương quá cao trong nhiều năm, luôn nhớ sinh nhật của mọi người vì có nhiều lịch trình cùng một lúc, luôn làm người khác mỉm cười, vui vẻ cổ vũ và ủng hộ bạn bè và gia đình.</p>

                            <h2>Gia đình, bạn bè bạn cảm thấy như thế nào khi biết kết quả phỏng vấn?</h2>
                            <p>Bạn bè tôi rất vui mừng khi cuối cùng tôi cũng được chẩn đoán. Họ đã thấy trước điều đó! Gia đình tôi tò mò nhưng vẫn ủng hộ.</p>

                            <h2>Lời khuyên của bạn cho những người đang nghi ngờ bản thân họ mắc ADHD?</h2>
                            <p>Tiết kiệm để được kiểm tra bởi một người chuyên về ADHD và hỏi về kinh nghiệm của bạn. Đừng tin những người kiểm tra trí thông minh của bạn. Có rất nhiều người thông minh mắc ADHD!</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Story6;