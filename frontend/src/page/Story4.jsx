import React, { useEffect } from 'react';
import '../css/Story.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RelatedArticles from '../page/RelatedArticles';

const Story4 = () => {
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
                                src="/UStory4.jpg" 
                                alt="Kristi" 
                                className="image-27"
                            />
                        </div>
                        <div className="stories_blog-intro">
                            <h1 className="h1-blog-intro">Trần Mai Thảo Vy được chẩn đoán ADHD ở tuổi 21 tại Việt Nam</h1>
                            <nav className="breadcrumbs">
                                <a>BẢN GIAO HƯỞNG TẬP TRUNG</a>
                                <div className="breadcrumb_text">-</div>
                                <a>câu chuyện</a>
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
                                        <div className="text-block-22">21</div>
                                    </div>
                                    <div className="div-block-43">
                                        <div className="div-block-78">
                                            <div className="text-block-21">Quốc Tịch</div>
                                        </div>
                                        <div className="text-block-23">Việt Nam</div>
                                    </div>
                                    <div className="div-block-42">
                                        <div className="text-block-24">Chẩn đoán lúc:</div>
                                        <div className="text-block-22">21</div>
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
                            <h2>Điều gì khiến bạn quyết định đi khám bệnh?</h2>
                            <p>Tôi nghĩ mình đang tiến đến tình trạng kiệt sức vì áp lực công việc. ADHD luôn ở trong tâm trí tôi kể từ khi được một người quản lý mà tôi làm việc cùng nhắc đến cách đây 9 năm. Khi đó, bác sĩ tâm thần của tôi đã bác bỏ điều đó, người đang điều trị chứng trầm cảm cho tôi. Tôi đã nghiên cứu, nhưng vẫn hoài nghi. Cuối cùng, tôi chỉ đặt lịch hẹn vì tôi đang tiến đến tình trạng sụp đổ và cháy rụi.</p>
                        </div>

                        <div id="content" className="richtext_blog">
                            <h2>Bạn làm nghề gì?</h2>
                            <p>Kiểm soát viên.</p>
                        </div>

                        <div id="content" className="richtext_blog">
                            <h2>Những năm đi học của bạn thế nào?</h2>
                            <p>Tôi học rất giỏi ở trường, nhưng tôi hầu như không cần phải học. Và khi tôi thực sự học thì đó là vì tôi sợ chết khiếp việc bị điểm kém (cha mẹ nghiêm khắc), và giờ thì tất cả đều hợp lý. Điều đó đã thay đổi khi tôi vào đại học và tôi thực sự phải học để đỗ.</p>

                            <h2>Đặc điểm ADHD rõ ràng nhất của bạn khi còn nhỏ?</h2>
                            <p>Tôi luôn mơ mộng, vẽ nguệch ngoạc trong lớp, vội vã làm bài kiểm tra và mất kiên nhẫn. Tôi đã và vẫn cực kỳ bừa bộn và vô tổ chức, tôi thường xuyên làm mất đồ. Mẹ tôi cũng lo lắng vì tôi có thể đọc sách viễn tưởng hàng giờ liền mà không di chuyển hay ăn uống.</p>

                            <h2>Việc chẩn đoán có khó không?</h2>
                            <p>Không hề. Tôi đã nghiên cứu về ADHD trong vài tháng và sau đó chỉ cần tìm kiếm bác sĩ tâm thần trong khu vực của tôi và đặt lịch hẹn. Tôi chỉ phải đợi ba tuần và bác sĩ đã chẩn đoán tôi trong buổi đầu tiên. Đó là 6 tuần trước.</p>

                            <h2>Bạn cảm thấy thế nào sau khi nhận được chẩn đoán?</h2>
                            <p>Tôi cảm thấy như một gánh nặng đã được trút bỏ khỏi vai mình. Nhưng rồi tôi đã trải qua năm giai đoạn đau buồn. Tôi tự hỏi liệu chẩn đoán có đúng không, tôi tức giận vì nó đến quá muộn (đặc biệt là sau khi cố gắng đề cập đến vấn đề này cách đây 9 năm), tôi cảm thấy chán nản về cuộc sống mà tôi có thể có. Bây giờ tôi chấp nhận điều đó và thay vào đó cảm thấy tự hào về những gì tôi đã đạt được, bất chấp những khó khăn của mình.</p>

                            <h2>Điểm mạnh của bạn về chứng ADHD?</h2>
                            <p>Tôi yêu công việc của mình. Vì vậy, tôi có xu hướng tập trung cao độ vào nó. Và tôi có rất nhiều lòng trắc ẩn.</p>

                            <h2>Gia đình/ bạn bè của bạn phản ứng như thế nào khi bạn được chẩn đoán mắc bệnh?</h2>
                            <p>Tôi phát hiện ra rằng anh em họ của tôi cũng bị ADHD! Hầu hết mọi người đều rất ủng hộ. Một số người ủng hộ nhiều hơn những người khác, vì "mọi người đều được chẩn đoán mắc ADHD những ngày này". Một người bạn làm việc thậm chí còn in ra một danh sách các triệu chứng và yêu cầu tôi giải thích chúng là gì và chúng biểu hiện như thế nào ở tôi.</p>

                            <h2>Lời khuyên của bạn cho những người đang nghi ngờ bản thân họ có mắc ADHD không?</h2>
                            <p>Đừng trì hoãn nữa và hãy đặt lịch hẹn ngay. Và đừng nghi ngờ bản thân. Chỉ có bạn mới biết điều gì đang diễn ra trong đầu bạn.</p>
                        </div>
                      </div>
                    </section>
                </div>
            </div>
            {/* Footer */}
            <RelatedArticles currentPage="story4" />
            <Footer />
        </div>
    );
};

export default Story4;