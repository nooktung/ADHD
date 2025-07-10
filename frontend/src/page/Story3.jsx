import React, { useEffect } from 'react';
import '../css/Story.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RelatedArticles from '../page/RelatedArticles';

const Story3 = () => {
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
                                alt="Lyndsy"
                                className="image-27"
                            />
                        </div>
                        <div className="stories_blog-intro">
                            <h1 className="h1-blog-intro">Phan Sỹ Hưng được chẩn đoán ADHD ở tuổi 27 tại Việt Nam</h1>
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
                                        <div className="text-block-22">31</div>
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
                            <h2>Điều gì khiến bạn quyết định đi chuẩn đoán bệnh?</h2>
                            <p>Tôi cảm thấy như cả cuộc đời mình, tôi đã phải bù đắp cho những điều nhỏ nhặt dường như khiến cuộc sống của tôi và của bất kỳ ai khác trở nên khó khăn hơn. Khi Covid-19 tấn công, tôi đã không nhận ra não mình cần cấu trúc đó đến mức nào. Khi ngồi ở nhà với gia đình và con, tôi nhận thấy (những gì tôi biết bây giờ là các triệu chứng của ADHD/Tự kỷ) mình đã chi bao nhiêu tiền cho những món đồ vô nghĩa, hoặc tôi đã ăn quá nhiều/vô thức như thế nào. Tôi bắt đầu nhận ra rằng tất cả những việc tôi đang làm đều không "bình thường" vì tôi sẽ thấy gia đình mình không phải vật lộn với những điều tương tự.</p>
                        </div>

                        <div id="content" className="richtext_blog">
                            <h2>Bạn làm nghề gì?</h2>
                            <p>Trợ lý hành chính cho một trường Cao đẳng cộng đồng và Trường sau đại học.</p>
                        </div>

                        <div id="content" className="richtext_blog">
                            <h2>Những năm đi học của bạn thế nào?</h2>
                            <p>Tôi nghĩ đây là lý do tại sao nhiều bác sĩ/bạn bè/gia đình không tin tôi khi tôi nói rằng tôi nghĩ mình bị ADHD. Nhìn lại, tôi chủ yếu được điểm A với một vài điểm B. Tôi học rất chăm chỉ cho các chủ đề nhưng lại bị lo lắng khủng khiếp khi làm bài kiểm tra. Cách diễn đạt của các câu hỏi hoặc tình huống luôn khiến tôi phải nghi ngờ bản thân, ngay cả khi tôi biết câu trả lời. Tôi dường như có tất cả mọi thứ và là một học sinh bình thường hoặc hơi trên trung bình.</p>

                            <h2>Đặc điểm ADHD rõ ràng nhất của bạn khi còn nhỏ là gì?</h2>
                            <p>Câu hỏi này khó trả lời, vì hồi đó ADHD không được nhắc đến nhiều. Nhất là khi nói đến phụ nữ. Tôi đã kìm nén rất nhiều thời thơ ấu của mình, nhưng tôi nhớ chắc chắn rằng tôi sẽ gặp rắc rối vì nói quá nhiều. Tôi luôn ký vào hồ sơ vì nói hoặc không chú ý. Một giáo viên từng nghĩ rằng tôi gian lận với bạn mình trong bài kiểm tra (10 tuổi) khi thực ra tôi đang nói với cô ấy rằng tôi "không biết đáp án là gì".</p>

                            <h2>Việc chuẩn đoán có khó khăn không?</h2>
                            <p>Thật khó khăn! Trong nhiều năm, các bác sĩ sẽ cố gắng nói với tôi rằng đó chỉ là lo lắng hoặc trầm cảm, sau đó kê đơn thuốc cho tôi. Tôi thậm chí còn có một bác sĩ tim nói với tôi rằng đó là một chứng loạn nhịp tim nhỏ! Ngay cả khi đánh giá giấy ADHD tại phòng khám của tôi cho điểm rất cao, họ vẫn nói không vì tôi không "trông" giống như vậy.</p>

                            <h2>Bạn đã chuẩn bị như thế nào cho việc chuẩn đoán của mình?</h2>
                            <p>Tôi đã viết ra những ghi chú trên điện thoại của mình về tất cả các triệu chứng mà tôi đã cảm thấy trong năm qua. Tôi cũng đã viết ra các loại thuốc và chẩn đoán trước đây mà tôi đã được đưa ra. Tôi đã cố gắng viết ra những điều mà tôi cảm thấy đã bị bỏ qua khi tôi còn nhỏ mà có thể là ADHD.</p>

                            <h2>Bạn cảm thấy thế nào khi nhận được chuẩn đoán?</h2>
                            <p>Mặc dù tôi hài lòng với sự xác nhận của mình và rằng tôi không "điên", tôi vẫn đấu tranh với cảm giác như thể tôi đang giả vờ. Tôi có những ngày tốt đẹp khi được chấp nhận và những ngày tôi cảm thấy như mình đã lừa cô ấy chẩn đoán cho tôi. Thật buồn cười, tôi đã nghiên cứu ADHD một cách chuyên nghiệp nhưng nó lại khác khi nó là vấn đề cá nhân.</p>

                            <h2>Bạn có nghĩ mình giống với hình mẫu ADHD không?</h2>
                            <p>Tôi KHÔNG nghĩ mình trông giống người mắc chứng ADHD điển hình. Sự hiếu động thái quá của tôi là do tâm trí chứ không phải do chuyển động cơ thể. Mặc dù có vẻ như tôi không gặp khó khăn ở trường, nhưng thực tế là tôi đã gặp khó khăn. Tôi chưa thực sự nói với bất kỳ ai về chẩn đoán của mình vì tôi biết họ sẽ nói rằng tôi không giống như bị ADHD.</p>

                            <h2>Bạn đang gặp khó khăn gì vì chứng ADHD ở não?</h2>
                            <p>Tôi vật lộn với việc mua sắm và ăn uống theo cảm tính. Tôi cũng gặp khó khăn trong việc tắt não vào ban đêm để có thể ngủ hoặc thậm chí khi tôi nên làm bài tập về nhà. Tôi gặp khó khăn khi gấp quần áo sạch hoặc thay ga trải giường. Tôi thường mất tập trung khi nói chuyện với bạn bè và phải giả vờ như mình nghe thấy họ.</p>

                            <h2>Điểm mạnh của bạn về chứng ADHD là gì?</h2>
                            <p>Tôi thích nghĩ về bản thân mình như một người rất sáng tạo, dù là về mặt nghệ thuật hay thông qua giải quyết vấn đề. Tôi cũng rất giỏi trong việc tìm ra sở thích hoặc mối quan tâm mới. Âm nhạc là ngôn ngữ thứ hai của tôi và tôi tự hào về khả năng học một nhạc cụ mới nhanh chóng.</p>

                            <h2>Việc chuẩn đoán ADHD có giúp ích cho bạn không?</h2>
                            <p>Có và KHÔNG. Có, vì cuối cùng tôi cũng cảm thấy có người tin tôi và coi trọng tôi. Tôi cảm thấy mình là chính mình hơn bao giờ hết, và điều đó giúp tôi hiểu tại sao tôi lại làm những việc tôi làm. Không, vì tôi vẫn đang trong giai đoạn 6 tháng chẩn đoán và thỉnh thoảng phải đấu tranh với hội chứng kẻ mạo danh đó.</p>

                            <h2>Gia đình, bạn bè bạn phản ứng như thế nào khi bạn được chuẩn đoán mắc bệnh?</h2>
                            <p>Tôi đã được chẩn đoán mắc AuDHD (tự kỷ và ADHD). Tôi đã nói với chị gái mình vào ngày hôm sau về cả hai và tôi hơi bất ngờ trước phản ứng của chị ấy. Chị ấy không tin tôi mắc chứng tự kỷ vì tôi không "trông" giống đồng nghiệp nam của chị ấy. Đối với ADHD, chị ấy nói rằng mọi người đều có những triệu chứng đó và có thể chuyên gia tư vấn đã sai.</p>

                            <h2>Lời khuyên của bạn cho những người đang thắc mắc liệu họ có mắc ADHD?</h2>
                            <p>Không có gì sai khi thực hiện một số nghiên cứu và làm các bài kiểm tra ADHD trực tuyến như RAADS-R. Tôi thường được bảo rằng những người thần kinh điển hình không kiểm tra xem họ có mắc ADHD không. Nếu nó gây ra những khó khăn hàng ngày trong cuộc sống của bạn thì đừng ngại thực hiện một số nghiên cứu và có thể được chẩn đoán. Bạn luôn là người ủng hộ tốt nhất của chính mình.</p>
                        </div>
                      </div>
                    </section>
                </div>
            </div>
            {/* Footer */}
            <Footer />
            <RelatedArticles currentPage="story3" />
        </div>
    );
};

export default Story3;