import React, { useEffect } from 'react';
import '../css/Story.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Story2 = () => {
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
                                alt="Mick" 
                                className="image-27"
                            />
                        </div>
                        <div className="stories_blog-intro">
                            <h1 className="h1-blog-intro">Nguyễn Ngọc Hiếu được chẩn đoán ADHD ở tuổi 18 tại Việt Nam</h1>
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
                                        <div className="text-block-22">24</div>
                                    </div>
                                    <div className="div-block-43">
                                        <div className="div-block-78">
                                        <div className="text-block-21">Quốc Tịch</div>
                                        </div>
                                        <div className="text-block-23">Việt Nam</div>
                                    </div>
                                    <div className="div-block-42">
                                        <div className="text-block-24">Chẩn đoán lúc:</div>
                                        <div className="text-block-22">18</div>
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
                            <div className="title_cta-col">Bắt đầu hành trình chẩn đoán ADHD!</div>
                            <p>Đánh giá các triệu chứng của bạn, sắp xếp suy nghĩ và chuẩn bị cho việc đánh giá chính thức.</p>
                            <a href="/workbook" className="button-header1">Tìm hiểu thêm</a>
                        </div>
                    </div>
                    {/* Content */}
                    <div className="wrapper_blog-content">
                        <div id="content" className="richtext_blog">
                            <h2>Điều gì khiến bạn quyết định đi chuẩn đoán bệnh?</h2>
                            <p>Tôi đã từng là người không thể chú ý trong thời gian quá dài, tôi hay quên hơn những người khác, tôi viết chữ rất xấu và thường không thể ngồi yên, giáo viên chủ nhiệm lớp 3 của tôi đã bảo bố mẹ tôi thử tham khảo ý kiến ​​của một nhà tâm lý học. Tôi đã cố hỏi bố mẹ tôi về chẩn đoán và bố mẹ tôi đã quên mất chẩn đoán đó vì nó đã xảy ra từ rất lâu rồi. Đến thời điểm hiện tại khi tôi đang học đại học, tôi vẫn gặp phải những vấn đề tương tự nên lần này tôi quyết định đi khám bác sĩ tâm thần và vâng, tôi đã nhận được câu trả lời chính xác, đó là ADHD.</p>
                        </div>

                        <div id="content" className="richtext_blog">
                            <h2>Bạn làm nghề gì?</h2>
                            <p>Tôi là sinh viên đại học, chuyên ngành Thiết kế truyền thông trực quan.</p>
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
                            <p>Phong cách học của tôi không bao giờ là đếm hay ghi nhớ; mà là hiểu những gì tôi đang học. Vì vậy, tôi thực tế là rất tệ môn toán và giỏi hơn ở các lớp lý thuyết mà tôi hiểu, chẳng hạn như lịch sử. Tôi cũng vật lộn để đáp ứng thời hạn vì tôi có xu hướng trì hoãn việc làm các bài tập đòi hỏi nhiều sự suy giảm tinh thần, đó vẫn là một vấn đề tồn tại cho đến bây giờ. Tất cả bạn bè tôi đều có điểm tuyệt vời nhưng tôi luôn phải vật lộn với điều đó, tôi là khách hàng thường xuyên của 10 thứ hạng thấp nhất trong lớp.</p>

                            <h2>Đặc điểm ADHD rõ ràng nhất của bạn khi còn nhỏ là gì?</h2>
                            <p>Ví dụ, tôi không thể chú ý vào những lớp học nhàm chán trừ khi tôi muốn, tôi không thể ngừng rung chân khi ngồi vào bàn ăn (điều này khiến bố mẹ tôi hay cằn nhằn), tôi là một đứa trẻ rất nhạy cảm khi lớn lên, chữ viết tay rất xấu, và tôi ghét một số loại quần áo mà mẹ tôi bắt tôi phải mặc.</p>

                            <h2>Việc chuẩn đoán có khó khăn không?</h2>
                            <p>Đối với tôi, bản thân chẩn đoán không khó, quá trình chỉ là: bác sĩ tâm thần có một loạt câu hỏi, tôi trả lời. Việc nói với bố mẹ tôi rằng tôi cần một câu trả lời chính xác là rất khó vì nhận thức về sức khỏe tâm thần không cao ở đất nước tôi đang sống. Vì vậy, sự kỳ thị về bệnh tâm thần điên rồ vẫn còn rất mạnh mẽ.</p>

                            <h2>Bạn cảm thấy như thế nào sau khi nhận được chuẩn đoán?</h2>
                            <p>Tôi ổn với điều đó, tôi có thể chung sống tốt với ADHD như tôi vẫn luôn như vậy, tôi chỉ cần quản lý nó nhiều hơn. Tôi chỉ hy vọng rằng mọi người có thể hiểu tại sao tôi lại hành động theo cách đó. Sức khỏe tâm thần là điều rất quan trọng trong xã hội ngày nay và tôi nghĩ mọi người nên nhận thức rất nhiều về nó.</p>

                            <h2>Bạn có nghĩ mình giống với hình mẫu ADHD không?</h2>
                            <p>Không hẳn vậy, tôi luôn là đứa trẻ ít nói ở trường và tôi không có nhiều bạn. Nói thật thì ADHD còn nhiều điều hơn thế nữa nhưng tôi nghĩ suy nghĩ chung về ADHD ở đây là những người mắc ADHD thường ồn ào, không thể ngồi yên và không có khả năng tự chủ.</p>

                            <h2>Bạn đang gặp khó khăn gì vì chứng ADHD ở não?</h2>
                            <p>Tôi đoán là quản lý thời gian, ghi nhớ mọi thứ và tập trung. Hiện tại tôi có 2 bài tập còn thiếu cho lớp học mà giảng viên không đặt thời hạn cụ thể trên Google Clasroom và những bài tập đó đòi hỏi rất nhiều sự tập trung và giải tỏa tinh thần.</p>

                            <h2>Điểm mạnh của bạn về chứng ADHD là gì?</h2>
                            <p>Tôi biết rất nhiều sự thật khó hiểu về những thứ ngẫu nhiên mà tôi quan tâm. Đây là một sự thật nhỏ dành cho bạn, Bạn có biết rằng tim của tôm nằm trên đầu của nó không? Tôi cũng làm nghệ thuật để thể hiện bản thân, hoặc để trút bỏ những ý tưởng mà tôi không thể giải thích bằng lời, vì vậy việc đăng ký Thiết kế truyền thông trực quan là một cách giúp tôi truyền đạt tốt hơn. Và tôi thực sự thích học các ngôn ngữ khó hiểu, tôi muốn học các ngôn ngữ địa phương có ở đây.</p>

                            <h2>Việc chuẩn đoán ADHD có giúp ích cho bạn không?</h2>
                            <p>Vâng, chắc chắn rồi, tôi cảm thấy mình có thể nghỉ ngơi thoải mái vì tôi biết điều gì đang làm phiền mình suốt thời gian qua; tôi cảm thấy nhẹ nhõm khi cuối cùng tôi đã biết nguyên nhân gốc rễ là gì.</p>

                            <h2>Gia đình và bạn bè bạn phản ứng như thế nào khi biết kết quả chuẩn đoán của bạn?</h2>
                            <p>Anh chị em tôi vẫn chưa biết chuyện này. Bố mẹ tôi nói rằng họ sẽ luôn ủng hộ tôi và sẽ cố gắng giúp đỡ tôi hết sức có thể. Tất cả bạn bè tôi cũng chấp nhận sự thật này và họ sẽ cố gắng hết sức để hiểu tôi hơn.</p>

                            <h2>Bạn sẽ đưa ra lời khuyên gì cho những người đang thắc mắc liệu mình có mắc ADHD không?</h2>
                            <p>Có một câu tục ngữ ở Indonesia rằng "Không muốn hỏi thì sẽ đi lạc đường". Nghĩa là nếu bạn sợ hỏi, chắc chắn bạn sẽ bị lạc và không biết phải làm gì. Vậy nên, nếu còn nghi ngờ, hãy thử hỏi. Đó là cách tôi luôn giải quyết những việc mà tôi không biết làm, hãy luôn thử nhờ giúp đỡ. Trong trường hợp này, hãy thử nhờ sự giúp đỡ của chuyên gia, không có gì sai khi hỏi những người có kinh nghiệm.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Story2;