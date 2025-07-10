// RelatedArticles.jsx - React Component for Related Articles
import React from 'react';
import { Calendar } from "lucide-react";
import '../css/RelatedArticles.css';

const RelatedArticles = ({ currentPage }) => {
    // Định nghĩa các categories và các trang thuộc về chúng
    const categories = {
        awareness: {
            title: "Nhận thức về ADHD",
            pages: [
                {
                    id: "facts",
                    title: "Sự thật về ADHD",
                    excerpt: "ADHD là rối loạn thần kinh thực sự với các triệu chứng giảm chú ý, tăng động và bốc đồng - không phải chỉ là hành vi nghịch ngợm. Nguyên nhân là rối loạn chức năng não bộ (vỏ não trước trán) và bất thường hệ thống dopamine/noradrenaline. Hiểu đúng về ADHD giúp chẩn đoán sớm và điều trị hiệu quả, tránh hệ quả tiêu cực.",
                    date: "24/06/2025",
                    link: "/adhd-facts",
                    bgColor: "bg-green-100",
                    borderColor: "border-green-200"
                }
            ]
        },

        living: {
            title: "Sống chung với ADHD",
            pages: [
                {
                    id: "life",
                    title: "Cuộc sống ADHD",
                    excerpt: "Sống chung với ADHD bao gồm việc áp dụng các thói quen có cấu trúc và các chiến lược để tăng cường sự tập trung, tổ chức và sức khỏe cảm xúc, đồng thời tìm kiếm sự hỗ trợ từ cộng đồng hiểu được trải nghiệm ADHD.",
                    date: "24/06/2025",
                    link: "/adhd-life",
                    bgColor: "bg-yellow-100",
                    borderColor: "border-yellow-200"
                },
                {
                    id: "health",
                    title: "ADHD & Sức khỏe",
                    excerpt: "ADHD không chỉ là một tình trạng hành vi; nó còn có tác động đáng kể đến sức khỏe thể chất và tinh thần. Việc quản lý đúng cách là rất quan trọng để giảm thiểu rủi ro liên quan đến các tình trạng bệnh lý đi kèm và cải thiện sức khỏe tổng thể.",
                    date: "24/06/2025",
                    link: "/adhd-and-health",
                    bgColor: "bg-yellow-100",
                    borderColor: "border-yellow-200"
                },
                {
                    id: "relationship",
                    title: "Mối quan hệ ADHD",
                    excerpt: "Để xử lý thành công các mối quan hệ với người mắc ADHD, điều quan trọng là phải giao tiếp cởi mở và thiết lập các thói quen có cấu trúc giúp tạo ra sự hiểu biết và hỗ trợ giữa các đối tác, đồng nghiệp hoặc bạn bè.",
                    date: "24/06/2025",
                    link: "/adhd-relationship",
                    bgColor: "bg-yellow-100",
                    borderColor: "border-yellow-200"
                },
                {
                    id: "emotions",
                    title: "Cảm xúc ADHD",
                    excerpt: "Những người mắc ADHD thường phải vật lộn với chứng rối loạn cảm xúc, có thể biểu hiện bằng phản ứng dữ dội với những tác nhân gây căng thẳng hàng ngày, khó bình tĩnh và thay đổi tâm trạng đột ngột. Hiểu biết và chiến lược để quản lý những cảm xúc dữ dội này là chìa khóa để vượt qua thách thức này.",
                    date: "24/06/2025",
                    link: "/adhd-emotions",
                    bgColor: "bg-yellow-100",
                    borderColor: "border-yellow-200"
                },
                {
                    id: "organization",
                    title: "Tổ chức ADHD",
                    excerpt: "Đối phó hiệu quả với ADHD bao gồm việc phát triển các hệ thống và thói quen tổ chức được cá nhân hóa, sử dụng các công cụ như trình lập kế hoạch và ứng dụng được thiết kế để nâng cao khả năng quản lý thời gian và giảm sự lộn xộn trong cả không gian vật lý và tinh thần.",
                    date: "24/06/2025",
                    link: "/adhd-organization",
                    bgColor: "bg-yellow-100",
                    borderColor: "border-yellow-200"
                },
                {
                    id: "workplace",
                    title: "Công việc ADHD",
                    excerpt: "Một sở thích có thể là một thách thức khá lớn khi bạn mắc ADHD. Bạn có thể tưởng tượng được cảm giác khi bạn phải làm việc không? ADHD ảnh hưởng đến sự nghiệp của chúng ta như thế nào? Tìm hiểu tại đây.",
                    date: "24/06/2025",
                    link: "/adhd-workplace",
                    bgColor: "bg-yellow-100",
                    borderColor: "border-yellow-200"
                }
            ]
        },

        symptoms: {
            title: "Các triệu chứng ADHD",
            pages: [
                {
                    id: "inattentive",
                    title: "ADHD thể Giảm chú ý",
                    excerpt: "ADHD thể Giảm chú ý được đặc trưng bởi những khó khăn trong việc duy trì sự tập trung, tuân thủ các hướng dẫn chi tiết và tổ chức công việc. Khác với thể Tăng động - Bốc đồng, các cá nhân này có thể có vẻ ngoài như đang mơ mộng, tỏ ra không lắng nghe hoặc dễ bị phân tâm bởi các kích thích bên ngoài. Dạng ADHD này thường không được chú ý đến (hoặc dễ bị bỏ sót) vì nó thiếu các biểu hiện tăng động và bốc đồng rõ rệt như các thể khác. Do đó, việc các nhà giáo dục và người chăm sóc có thể nhận ra những dấu hiệu kín đáo hơn này là cực kỳ quan trọng để cung cấp sự hỗ trợ và can thiệp phù hợp.",
                    date: "24/06/2025",
                    link: "/adhd-inattentive",
                    bgColor: "bg-purple-100",
                    borderColor: "border-purple-200"
                },
                {
                    id: "hyperactive",
                    title: "ADHD thể Tăng động - Bốc đồng",
                    excerpt: "ADHD thể Tăng động - Bốc đồng được đặc trưng bởi các kiểu hành vi tăng động và bốc đồng dai dẳng, gây cản trở đến các hoạt động chức năng hoặc sự phát triển. Các cá nhân mắc thể ADHD này có thể biểu hiện qua việc vận động liên tục, nói quá nhiều, khó khăn trong việc chờ đến lượt, và hành động thiếu cân nhắc về hậu quả.",
                    date: "24/06/2025",
                    link: "/adhd-hyperactive",
                    bgColor: "bg-purple-100",
                    borderColor: "border-purple-200"
                },
                {
                    id: "unofficial",
                    title: "Các triệu chứng ADHD không chính thức",
                    excerpt: "Mặc dù các tiêu chí chẩn đoán chính thức của ADHD tập trung vào những triệu chứng đã được biết đến rộng rãi như giảm chú ý, tăng động, phạm lỗi do bất cẩn và các hành vi bốc đồng, nhiều cá nhân còn trải qua các dấu hiệu bổ sung không được liệt kê trong các cẩm nang chẩn đoán.",
                    date: "24/06/2025",
                    link: "/adhd-unofficial",
                    bgColor: "bg-purple-100",
                    borderColor: "border-purple-200"
                }
            ]
        },

        stories: {
            title: "Câu chuyện ADHD",
            pages: [
                {
                    id: "story1",
                    title: "Nguyễn Như Thành Đạt - Chẩn đoán ADHD ở tuổi 16",
                    excerpt: "Câu chuyện về hành trình chẩn đoán ADHD của một thanh niên 18 tuổi tại Việt Nam, từ những khó khăn ban đầu đến việc tìm hiểu và chấp nhận tình trạng của mình.",
                    date: "24/06/2025",
                    link: "/adhd-story1",
                    bgColor: "bg-green-100",
                    borderColor: "border-green-200"
                },
                {
                    id: "story2",
                    title: "Nguyễn Ngọc Hiếu - Hành trình từ nghi ngờ đến chẩn đoán",
                    excerpt: "Trải nghiệm của một sinh viên đại học 24 tuổi khi phát hiện ra mình mắc ADHD và cách anh ấy đối phó với những thách thức trong học tập và cuộc sống.",
                    date: "24/06/2025",
                    link: "/adhd-story2",
                    bgColor: "bg-green-100",
                    borderColor: "border-green-200"
                },
                {
                    id: "story3",
                    title: "Phan Sỹ Hưng - ADHD và cuộc sống gia đình",
                    excerpt: "Câu chuyện của một người cha 31 tuổi về cách ADHD ảnh hưởng đến cuộc sống gia đình và cách anh ấy học cách quản lý các triệu chứng để trở thành người cha tốt hơn.",
                    date: "24/06/2025",
                    link: "/adhd-story3",
                    bgColor: "bg-green-100",
                    borderColor: "border-green-200"
                },
                {
                    id: "story4",
                    title: "Trần Mai Thảo Vy - ADHD trong môi trường công việc",
                    excerpt: "Trải nghiệm của một phụ nữ trẻ về việc sống với ADHD trong môi trường công việc và cách cô ấy tìm ra những chiến lược để thành công trong sự nghiệp.",
                    date: "24/06/2025",
                    link: "/adhd-story4",
                    bgColor: "bg-green-100",
                    borderColor: "border-green-200"
                },
                {
                    id: "story5",
                    title: "Lê Khắc Hải - Hành trình chữa lành với ADHD",
                    excerpt: "Câu chuyện về việc tìm kiếm chẩn đoán và điều trị ADHD của một sinh viên đại học, và cách anh ấy học cách chấp nhận và yêu thương bản thân.",
                    date: "24/06/2025",
                    link: "/adhd-story5",
                    bgColor: "bg-green-100",
                    borderColor: "border-green-200"
                },
                {
                    id: "story6",
                    title: "Nguyễn Mai Trang - ADHD và giáo dục",
                    excerpt: "Trải nghiệm của một phụ nữ về việc sống với ADHD trong hệ thống giáo dục và cách cô ấy vượt qua những thách thức để đạt được thành công.",
                    date: "24/06/2025",
                    link: "/adhd-story6",
                    bgColor: "bg-green-100",
                    borderColor: "border-green-200"
                },
                {
                    id: "story7",
                    title: "Lương Ngọc Mai - ADHD và nghiên cứu học thuật",
                    excerpt: "Câu chuyện về việc phát hiện ADHD trong quá trình làm luận văn thạc sĩ và cách một sinh viên học cách quản lý các triệu chứng để hoàn thành mục tiêu học tập.",
                    date: "24/06/2025",
                    link: "/adhd-story7",
                    bgColor: "bg-green-100",
                    borderColor: "border-green-200"
                }
            ]
        }
    };

    // Tìm category chứa trang hiện tại
    const findCategoryForPage = (pageId) => {
        for (const [categoryKey, categoryData] of Object.entries(categories)) {
            if (categoryKey === pageId) return categoryKey; // Nếu là trang lớn
            if (categoryData.pages.some(page => page.id === pageId)) {
                return categoryKey;
            }
        }
        return null;
    };

    // Lấy các bài viết liên quan (tất cả bài trong category trừ trang hiện tại và trừ trang lớn nếu là trang con)
    const getRelatedArticles = (currentPageId) => {
        const categoryKey = findCategoryForPage(currentPageId);
        if (!categoryKey) return [];
        const categoryData = categories[categoryKey];
        // Nếu currentPage là category lớn (id trùng key), hiển thị tất cả các trang con
        if (categoryKey === currentPageId) {
            return categoryData.pages;
        }
        // Nếu currentPage là trang con, chỉ hiển thị các trang con khác (không hiển thị trang lớn)
        return categoryData.pages.filter(page => page.id !== currentPageId);
    };

    const relatedArticles = getRelatedArticles(currentPage);

    // Component minh họa nhân vật
    const CharacterIllustration = ({ pageId, bgColor }) => {
        return (
            <div className={`article-illustration ${bgColor}`}>
                <div className="character">
                    {/* Hair */}
                    <div className="character-hair"></div>
                    {/* Face */}
                    <div className="character-face">
                        {/* Eyes */}
                        <div className="character-eye character-eye-left"></div>
                        <div className="character-eye character-eye-right"></div>
                        {/* Smile */}
                        <div className="character-smile"></div>
                    </div>
                    {/* Body */}
                    <div className="character-body"></div>
                </div>
            </div>
        );
    };

    // Xử lý click để điều hướng
    const handleArticleClick = (link) => {
        window.location.href = link;
    };

    if (relatedArticles.length === 0) {
        return null;
    }

    return (
        <div className="related-articles-container">
            {/* Header Section */}
            <div className="related-articles-header">
                <h2 className="related-articles-title">
                    Bài viết liên quan bạn có thể quan tâm:
                </h2>
                <p className="related-articles-subtitle">
                    Khám phá thêm nhiều nội dung hữu ích về ADHD
                </p>
            </div>

            {/* Articles Grid */}
            <div className="related-articles-grid related-articles-grid-fixed">
                {relatedArticles.map((article) => (
                    <div
                        key={article.id}
                        onClick={() => handleArticleClick(article.link)}
                        className={`related-article-card ${article.borderColor}`}
                        tabIndex={0}
                        role="button"
                        aria-label={`Đọc bài viết: ${article.title}`}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault();
                                handleArticleClick(article.link);
                            }
                        }}
                    >
                        {/* Category Title */}
                        <div className="category-section">
                            <h3 className="category-main">{article.category}</h3>
                            <h4 className="category-sub">{article.subcategory}</h4>
                        </div>
                        
                        {/* Character Illustration */}
                        {article.id.startsWith('story') ? (
                          <img
                            src={`/UStory${article.id.replace('story', '')}.jpg`}
                            alt={article.title}
                            className="related-article-image"
                            style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '12px', marginBottom: '12px' }}
                          />
                        ) : (
                          <CharacterIllustration
                            pageId={article.id}
                            bgColor={article.bgColor}
                          />
                        )}
                        
                        {/* Article Title */}
                        <h4 className="article-title">
                            {article.title}
                        </h4>
                        
                        {/* Article Excerpt */}
                        <p className="article-excerpt">
                            {article.excerpt}
                        </p>
                        
                        {/* Date */}
                        <div className="article-date">
                            <Calendar className="date-icon" />
                            <span>{article.date}</span>
                        </div>
                    </div>
                ))}
                
                {/* Thêm thẻ rỗng nếu số thẻ không chia hết cho 3 */}
                {Array.from({ length: (3 - (relatedArticles.length % 3)) % 3 }).map((_, i) => (
                    <div key={`empty-${i}`} className="empty-card"></div>
                ))}
            </div>
        </div>
    );
};

export default RelatedArticles;