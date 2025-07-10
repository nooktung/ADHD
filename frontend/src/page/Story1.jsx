import React, { useEffect } from 'react';
import '../css/Story.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RelatedArticles from '../page/RelatedArticles';

const Story1 = () => {
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
                                alt="Jenna" 
                                className="image-27"
                            />
                        </div>
                        <div className="stories_blog-intro">
                            <h1 className="h1-blog-intro">Nguyễn Như Thành Đạt được chẩn đoán ADHD ở tuổi 16 tại Việt Nam</h1>
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
                                        <div className="text-block-22">18</div>
                                    </div>
                                    <div className="div-block-43">
                                        <div className="div-block-78">
                                        <div className="text-block-21">Quốc Tịch</div>
                                        </div>
                                        <div className="text-block-23">Việt Nam</div>
                                    </div>
                                    <div className="div-block-42">
                                        <div className="text-block-24">Chẩn đoán lúc:</div>
                                        <div className="text-block-22">16</div>
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
                            <h2>Điều gì khiến bạn quyết định đi chẩn đoán bệnh?</h2>
                            <p>Tôi thực ra đã được chẩn đoán mắc chứng tự kỷ trong những năm đầu đời trước đây, và bố tôi cũng bị tự kỷ. Người bạn thân nhất của tôi cũng bị ADHD kết hợp. Tôi nghĩ rằng không ai có thể mắc chứng tự kỷ và ADHD cùng lúc nhưng sau đó anh tôi đã được chẩn đoán mắc cả 2 hội chứng này. Tôi đã nghiên cứu về ADHD một thời gian để cố gắng hiểu người bạn thân nhất của mình. Sau đó, tôi nhận ra rằng tôi thực sự liên quan đến hầu hết các hội chứng và tôi tự hỏi "Khoan đã…mình có bị ADHD không?" Vì vậy tôi đã yêu cầu mẹ đưa tôi đi chẩn đoán trước sinh nhật 17 tuổi của tôi vài tháng. Và thật sự, điều đó đã xảy ra.</p>
                        </div>

                        <div id="content" className="richtext_blog">
                            <h2>Bạn làm nghề gì?</h2>
                            <p>Hiện tại tôi đang học trung học. Tôi hi vọng 1 ngày nào đó sẽ mở trang trại chăn nuôi gia súc và cừu của riêng mình.</p>
                        </div>

                        <div id="content" className="richtext_blog">
                            <h2>Những năm đi học của bạn thế nào?</h2>
                            <p>Ở trường tiểu học, tôi thật không may khi có một giáo viên giáo dục đặc biệt ngược đãi cả về thể chất lẫn tinh thần. Cô ấy đánh tôi mỗi khi tôi mất tập trung trong vài giây hoặc tôi không hiểu lời giải thích. Và cô ấy cũng gọi tôi bằng nhiều cái tên khó nghe. Bây giờ tôi học trung học, tôi đang giúp bạn thân của mình chữa lành những trải nghiệm tương tự trong quá khứ. Bạn ấy bảo tôi cũng nên cố gắng chữa lành chấn thương của mình. Tôi đoán là tôi nên làm vậy. Gần đây, tôi gặp rắc rối với giáo viên vì thái độ bốc đồng và không nhớ làm bài tập đúng hạn. Điểm số của tôi khá tệ nhưng tôi không lo lắng nhiều. Tôi sẽ tập trung vào việc chữa lành trước, điều đó quan trọng hơn là đạt điểm cao.</p>
                        </div>

                        <div className="cta-blog" style={{display: 'none'}}>
                            <div className="container-cta-blog">
                                <div className="flex-59">
                                    <div className="titre-cta-blog">Hình dung các đặc điểm ADHD của bạn!</div>
                                    <p>Tham gia bài kiểm tra trực tuyến thú vị để hình dung các đặc điểm ADHD và tìm hiểu thêm về bộ não của bạn!</p>
                                    <a href="#" className="button_cta-blog-copy">LÀM BÀI KIỂM TRA MIỄN PHÍ</a>
                                </div>
                                <div className="flex-39">
                                    <div className="img-box-cta-blog">
                                        <img 
                                            src="https://cdn.prod.website-files.com/6399a4a86b6eb3f48c650a40/6426934cfb6cf3c3fc429a51_Untitled%20design-86.jpg" 
                                            alt="" 
                                            className="image-cta-blog"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="content" className="richtext_blog">
                            <h2>Nhìn lại, đặc điểm ADHD rõ ràng nhất của bạn khi còn nhỏ là gì?</h2>
                            <p>Có lẽ là tôi đã nài nỉ mẹ tôi mua những con búp bê xinh xắn mỗi khi thấy chúng. Tôi cũng gặp khó khăn khi ngồi yên.</p>

                            <h2>Việc chẩn đoán có khó không?</h2>
                            <p>Không, may mắn thay. Phòng khám bác sĩ của tôi có loại BrainTest đặc biệt có thể chẩn đoán hơn 60 rối loạn não/tâm thần, bao gồm ADHD và tự kỷ. Tôi đã hỏi bác sĩ của mình về nó và ông ấy đã lên lịch cho tôi vào tuần tới. Thời gian trôi qua nhanh chóng, tôi được chẩn đoán mắc ADHD, trầm cảm và lo âu hoàn toàn sau một tháng.</p>

                            <h2>Bạn có nghĩ mình "giống" với hình mẫu ADHD không?</h2>
                            <p>Không. Mọi người đều nói tôi rất trưởng thành và thông minh so với tuổi của mình. Tôi là một bà béo nên không thể chạy nhảy khắp nơi như một cậu bé được mặc dù tôi ước mình có thể, haha!</p>

                            <h2>Bạn đang gặp khó khăn gì vì chứng ADHD của mình?</h2>
                            <p>Tôi đang vật lộn để tập trung vào các bài phát biểu hoặc video nhàm chán trong giờ học. Tôi cũng không giỏi thoát khỏi tình trạng tập trung quá mức của mình!</p>

                            <h2>Điểm mạnh của bạn về ADHD là gì?</h2>
                            <p>Tập trung cao độ, đặc biệt là khi tôi quan tâm đến điều gì đó. Và sau đó là khả năng nhận ra các chi tiết và mô hình khi người khác không chú ý.</p>

                            <h2>Phản ứng của gia đình/bạn bè bạn thế nào khi biết bạn được chẩn đoán mắc bệnh?</h2>
                            <p>Không nhiều lắm. Bố mẹ tôi từng nghĩ tôi bị ADHD nhưng không chắc lắm vì nó rất giống với chứng tự kỷ. Cả gia đình tôi đều rất ủng hộ tôi, anh em trai và anh em họ của tôi. Họ chỉ để chúng tôi là chính mình bất cứ điều gì chúng tôi muốn. Bạn bè tôi cũng chẳng quan tâm khi tôi nói với họ vì họ đã quen với con người tôi rồi lol.</p>

                            <h2>Chẩn đoán này đã thay đổi cuộc sống của bạn như thế nào?</h2>
                            <p>Tôi không ra ngoài nhiều như trước nữa vì tôi nhận ra rằng đó thường là nguyên nhân gây ra sự lo lắng của tôi nên tôi cố gắng tránh điều đó bất cứ khi nào có thể.</p>

                            <h2>Bạn sẽ đưa ra lời khuyên gì cho những người đang thắc mắc liệu mình có mắc ADHD không?</h2>
                            <p>Đừng lo lắng về những gì mọi người nghĩ về bạn. Hãy là chính mình! Bạn rất xứng đáng được sống cuộc sống tốt nhất và có những người tuyệt vời xung quanh, tôi hứa với bạn. Chấn thương không có cách chữa trị vĩnh viễn, nhưng chúng sẽ thay đổi theo thời gian khi bạn tập trung vào việc chữa lành. Hãy tìm một điều gì đó vui vẻ để làm và thể hiện sự kích thích vui vẻ của bạn!!!</p>
                        </div>
                      </div>
                    </section>
                </div>
            </div>
            {/* Footer */}
            <Footer />
            <RelatedArticles currentPage="story1" />
        </div>
    );
};

export default Story1;