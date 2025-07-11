import React, { useEffect } from 'react';
import '../css/Story.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RelatedArticles from '../page/RelatedArticles';

const Story5 = () => {
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
                                src="/UStory5.jpg"
                                alt="Lily"
                                className="image-27"
                            />
                        </div>
                        <div className="stories_blog-intro">
                            <h1 className="h1-blog-intro">Lê Khắc Hải được chẩn đoán ADHD ở tuổi 23 tại Việt Nam</h1>
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
                        <section className="description">
                            <div className="div-block-40">
                                <div className="grid-7">
                                    <div className="div-block-41">
                                        <div className="text-block-21">Tuổi:</div>
                                        <div className="text-block-22">23</div>
                                    </div>
                                    <div className="div-block-43">
                                        <div className="div-block-78">
                                            <div className="text-block-21">Quốc Tịch</div>
                                        </div>
                                        <div className="text-block-23">Việt Nam</div>
                                    </div>
                                    <div className="div-block-42">
                                        <div className="text-block-24">Chẩn đoán lúc:</div>
                                        <div className="text-block-22">23</div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <div className="box_info-col">
                            <img 
                                src="/Hanbook.jpg" 
                                alt="" 
                                className="max-width-medium"
                            />
                            <div className="title_cta-col">Bắt đầu hành trình khám phá ADHD!</div>
                            <p>Đánh giá các triệu chứng của bạn, sắp xếp suy nghĩ và chuẩn bị cho việc đánh giá chính thức.</p>
                            <a href="/hanbook" className="button-header1">Tìm hiểu thêm</a>
                        </div>
                    </div>
                    {/* Content */}
                    <section className="story-article-content">
                      <div className="wrapper_blog-content">
                        <div id="content" className="richtext_blog">
                            <h2>Điều gì khiến bạn quyết định chẩn đoán bệnh?</h2>
                            <p>Tôi đã vật lộn với sức khỏe tâm thần của mình trong nhiều năm và mặc dù đã dùng thuốc nhưng nó không giúp ích theo đúng cách. Tôi thấy mình đang dành từng chút năng lượng để cố gắng hoạt động "bình thường". Sau khi vật lộn ở trường đại học, tôi quyết định xem liệu có điều gì khác đang xảy ra không và cuối cùng nghĩ rằng đó có thể là ADHD.</p>
                        </div>

                        <div id="content" className="richtext_blog">
                            <h2>Bạn làm nghề gì?</h2>
                            <p>Sinh viên năm cuối sắp bước vào thế giới việc làm.</p>
                        </div>

                        <div id="content" className="richtext_blog">
                            <h2>Những năm đi học của bạn thế nào?</h2>
                            <p>Trường học đối với tôi chủ yếu xoay quanh giấc ngủ, tôi chỉ không thể ngủ vào thời điểm tôi cần. Tôi được chẩn đoán mắc chứng rối loạn giai đoạn ngủ muộn (có nghĩa là chu kỳ ngủ tự nhiên của tôi muộn hơn bình thường) vì thói quen ngủ lý tưởng của tôi là từ 3/4 giờ sáng đến 10/11 giờ sáng hàng ngày. Tuy nhiên, vì trường học, tôi chỉ ngủ khoảng 3/4 giờ mỗi đêm.</p>

                            <h2>Đặc điểm ADHD rõ ràng nhất của bạn khi còn nhỏ là gì?</h2>
                            <p>Với tôi, đó chỉ là sự tò mò thuần túy về mọi thứ và liên tục thay đổi những gì tôi đang làm vì tôi muốn làm mọi thứ.</p>

                            <h2>Việc chẩn đoán có khó khăn không?</h2>
                            <p>Ở Anh, danh sách chờ để được chẩn đoán kéo dài khoảng 1,5-2 năm. Lúc đó tôi tuyệt vọng đến mức quyết định đi khám tư. Cách này rất hiệu quả nhưng rõ ràng là rất tốn kém. Tôi rất may mắn khi có thể đi khám tư nhưng thật không may là nhiều người ở Anh không đủ khả năng chi trả cho lựa chọn này.</p>

                            <h2>Bạn đã chuẩn bị như thế nào cho việc chẩn đoán của mình?</h2>
                            <p>Tôi đã nghiên cứu rất nhiều về các triệu chứng của ADHD, không chỉ trên các trang web chăm sóc sức khỏe (thường nói về các triệu chứng mà nam giới gặp phải), mà còn trên các trải nghiệm cá nhân của mọi người trên phương tiện truyền thông xã hội. Sau đó, tôi nhìn lại cuộc sống của mình để xem liệu tôi đã từng trải qua những triệu chứng đó chưa và ghi lại chúng để tôi không quên khi nói chuyện với bác sĩ tâm thần.</p>

                            <h2>Bạn cảm thấy như thế nào sau khi nhận chẩn đoán?</h2>
                            <p>Tôi vẫn chưa chắc chắn mình cảm thấy thế nào. Tôi mới bắt đầu dùng thuốc ở mức có tác dụng (liều trước của tôi chỉ để cơ thể quen với thuốc). Tôi có thể nhận ra sự khác biệt nhưng giờ tôi đang ở giai đoạn mà tôi tự hỏi "liệu đây có phải là cảm giác mà tôi nên cảm thấy hay vẫn còn chỗ để cải thiện?"</p>

                            <h2>Bạn có nghĩ mình "giống" với hình mẫu ADHD không?</h2>
                            <p>Chắc chắn là không. Tôi đã được bảo rằng tôi là một nhà lãnh đạo, một người tự tin và lôi cuốn. Nhiều người vẫn coi ADHD là cậu bé trong lớp không chịu ngồi xuống và điều đó hoàn toàn không chính xác. Đối với tôi, tôi nghĩ mình đã che giấu trong nhiều năm và hình ảnh tôi thể hiện không phải là những gì tôi cảm thấy bên trong.</p>

                            <h2>Bạn đang gặp khó khăn gì vì chứng ADHD?</h2>
                            <p>Tôi đấu tranh dữ dội với sự lo lắng. Tôi đấu tranh để buông bỏ những suy nghĩ và thường suy nghĩ về chúng. Điều này thường dẫn đến sự trì hoãn và tôi đấu tranh để tiếp tục ngày của mình.</p>

                            <h2>Điểm mạnh của bạn về chứng ADHD?</h2>
                            <p>Có lẽ là sự nhiệt tình và sức chịu đựng của tôi. Tôi vẫn đam mê nhiều thứ khác nhau và đã học được qua những khó khăn trong nhiều năm rằng đến cuối ngày, tôi sẽ vượt qua được.</p>

                            <h2>Gia đình/ bạn bè phản ứng như thế nào khi bạn nhận được chẩn đoán mắc bệnh?</h2>
                            <p>Mẹ tôi thực ra là người đã đưa ADHD ra với tôi. Tôi đã tin rằng mình không mắc chứng bệnh này nhưng sau khi mẹ tôi chỉ cho tôi tất cả các triệu chứng khác nhau có thể liên quan đến ADHD, tôi bắt đầu nhận ra rằng mình mắc rất nhiều triệu chứng. Bố tôi là một ông bố người Anh điển hình, người hơi bỏ qua các vấn đề về sức khỏe tâm thần, vì chúng không thực sự được xem xét khi ông còn nhỏ.</p>

                            <h2>Lời khuyên của bạn cho những người đang nghi ngờ bản thân họ mắc ADHD?</h2>
                            <p>Có thể đáng sợ nếu bạn nghĩ mình có thể bị ADHD, tôi sẽ cân nhắc làm các bài kiểm tra trực tuyến và cũng nói chuyện với một người mà bạn tin tưởng (đặc biệt nếu họ đã biết bạn trong một thời gian dài và có thể nhận xét về hành vi và lối sống của bạn). Sau đó, hãy đến gặp bác sĩ, nêu lên mối quan tâm của bạn và bắt đầu từ đó.</p>
                        </div>
                      </div>
                    </section>
                </div>
            </div>
            <RelatedArticles currentPage="story5" />
            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Story5;