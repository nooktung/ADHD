import { Calendar } from "lucide-react";

const RelatedArticles = ({ currentPage }) => {
    // Styles object cho component
    const styles = {
        container: {
            maxWidth: '80rem',
            margin: '0 auto',
            padding: '3rem 1rem',
            backgroundColor: '#f9fafb',
            position: 'relative',
            zIndex: 1,
            clear: 'both'
        },
        header: {
            textAlign: 'center',
            marginBottom: '2rem'
        },
        title: {
            fontSize: '2.25rem',
            fontWeight: '700',
            color: '#1f2937',
            marginBottom: '0.5rem'
        },
        subtitle: {
            color: '#6b7280',
            fontSize: '0.875rem'
        },
        grid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem'
        },
        card: {
            background: 'white',
            borderRadius: '1rem',
            padding: '1.5rem',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            border: '4px solid',
            transform: 'translateY(0px) scale(1)',
            boxShadow: 'none'
        },
        categorySection: {
            textAlign: 'left',
            marginBottom: '1rem'
        },
        categoryMain: {
            fontSize: '1.5rem',
            fontWeight: '700',
            color: '#0f766e',
            marginBottom: '0.25rem'
        },
        categorySub: {
            fontSize: '1.25rem',
            fontWeight: '700',
            color: '#0f766e'
        },
        illustration: {
            width: '100%',
            height: '10rem',
            borderRadius: '0.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '1rem',
            position: 'relative'
        },
        character: {
            position: 'relative'
        },
        characterHair: {
            width: '4rem',
            height: '3rem',
            backgroundColor: '#f9a8d4',
            borderRadius: '50%',
            marginBottom: '0.5rem'
        },
        characterFace: {
            width: '3rem',
            height: '3rem',
            backgroundColor: 'white',
            borderRadius: '50%',
            margin: '0 auto',
            position: 'relative'
        },
        characterEye: {
            position: 'absolute',
            top: '0.75rem',
            width: '0.25rem',
            height: '0.25rem',
            backgroundColor: 'black',
            borderRadius: '50%'
        },
        characterEyeLeft: {
            left: '0.5rem'
        },
        characterEyeRight: {
            right: '0.5rem'
        },
        characterSmile: {
            position: 'absolute',
            bottom: '0.75rem',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '1rem',
            height: '0.5rem',
            borderBottom: '2px solid black',
            borderRadius: '50%'
        },
        characterBody: {
            width: '2rem',
            height: '2rem',
            backgroundColor: '#f8bbd9',
            borderRadius: '0.5rem',
            margin: '0.25rem auto 0'
        },
        
        articleTitle: {
            fontWeight: '700',
            color: '#1f2937',
            fontSize: '1.125rem',
            marginBottom: '0.75rem',
            lineHeight: '1.375',
            textAlign: 'left'
        },
        excerpt: {
            color: '#6b7280',
            fontSize: '0.875rem',
            lineHeight: '1.75',
            marginBottom: '1rem',
            textAlign: 'left'
        },
        date: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            color: '#3b82f6',
            fontSize: '0.875rem'
        },
        dateIcon: {
            width: '1rem',
            height: '1rem',
            marginRight: '0.25rem'
        }
    };

    // Border colors cho từng loại
    const borderColors = {
        'border-green-200': '#bbf7d0',
        'border-blue-200': '#bfdbfe',
        'border-purple-200': '#e9d5ff',
        'border-pink-200': '#fce7f3',
        'border-yellow-200': '#fef3c7',
        'border-orange-200': '#fed7aa',
        'border-red-200': '#fecaca',
        'border-indigo-200': '#c7d2fe',
        'border-cyan-200': '#a5f3fc',
        'border-gray-200': '#e5e7eb'
    };

    // Background colors cho illustration
    const bgColors = {
        'bg-green-100': '#dcfce7',
        'bg-blue-50': '#eff6ff',
        'bg-purple-100': '#f3e8ff',
        'bg-pink-100': '#fce7f3',
        'bg-yellow-100': '#fef3c7',
        'bg-orange-100': '#fed7aa',
        'bg-red-100': '#fee2e2',
        'bg-indigo-100': '#e0e7ff',
        'bg-cyan-100': '#cffafe',
        'bg-gray-100': '#f3f4f6'
    };

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

        life: {
            title: "Sống chung với ADHD",
            pages: [
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
        }
    };

    // Thêm lại category 'stories' cho các trang Story
    categories.stories = {
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
    };

    // Tìm category chứa trang hiện tại
    const findCategoryForPage = (pageId) => {
        for (const [categoryKey, categoryData] of Object.entries(categories)) {
            if (categoryData.pages.some(page => page.id === pageId)) {
                return categoryKey;
            }
        }
        return null;
    };

    // Lấy các bài viết liên quan (tất cả bài trong category trừ trang hiện tại)
    const getRelatedArticles = (currentPageId) => {
        const categoryKey = findCategoryForPage(currentPageId);
        if (!categoryKey) return [];

        const categoryData = categories[categoryKey];
        return categoryData.pages.filter(page => page.id !== currentPageId);
    };

    const relatedArticles = getRelatedArticles(currentPage);

    // Component minh họa nhân vật
    const CharacterIllustration = ({ pageId, bgColor }) => {
        const getIcon = () => {
            return "";
        };

        const illustrationStyle = {
            ...styles.illustration,
            backgroundColor: bgColors[bgColor] || '#f3f4f6'
        };

        return (
            <div style={illustrationStyle}>
                <div style={styles.character}>
                    {/* Hair */}
                    <div style={styles.characterHair}></div>
                    {/* Face */}
                    <div style={styles.characterFace}>
                        {/* Eyes */}
                        <div style={{ ...styles.characterEye, ...styles.characterEyeLeft }}></div>
                        <div style={{ ...styles.characterEye, ...styles.characterEyeRight }}></div>
                        {/* Smile */}
                        <div style={styles.characterSmile}></div>
                    </div>
                    {/* Body */}
                    <div style={styles.characterBody}></div>
                    {/* Icon overlay */}
                    <div style={styles.icon}>
                        {getIcon()}
                    </div>
                </div>
            </div>
        );
    };

    // Xử lý click để điều hướng
    const handleArticleClick = (link) => {
        window.location.href = link;
    };

    // Xử lý hover effect
    const handleCardHover = (cardElement, isHovering, originalBorderColor) => {
        if (isHovering) {
            cardElement.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
            cardElement.style.transform = 'translateY(-8px) scale(1.02)';
            // Giữ nguyên màu viền gốc
        } else {
            cardElement.style.boxShadow = 'none';
            cardElement.style.transform = 'translateY(0px) scale(1)';
            // Giữ nguyên màu viền gốc
        }
    };

    if (relatedArticles.length === 0) {
        return null;
    }

    return (
        <div style={styles.container}>
            {/* Header Section */}
            <div style={styles.header}>
                <h2 style={styles.title}>
                    Bài viết liên quan bạn có thể quan tâm:
                </h2>
                <p style={styles.subtitle}>Khám phá thêm nhiều nội dung hữu ích về ADHD</p>
            </div>

            {/* Articles Grid */}
            <div style={{ ...styles.grid, gridTemplateColumns: 'repeat(3, 1fr)' }}>
                {relatedArticles.map((article) => {
                    const originalBorderColor = borderColors[article.borderColor] || '#e5e7eb';
                    const cardStyle = {
                        ...styles.card,
                        borderColor: originalBorderColor
                    };
                    return (
                        <div
                            key={article.id}
                            onClick={() => handleArticleClick(article.link)}
                            style={cardStyle}
                            onMouseEnter={(e) => handleCardHover(e.currentTarget, true, originalBorderColor)}
                            onMouseLeave={(e) => handleCardHover(e.currentTarget, false, originalBorderColor)}
                        >
                            {/* Category Title */}
                            <div style={styles.categorySection}>
                                <h3 style={styles.categoryMain}>{article.category}</h3>
                                <h4 style={styles.categorySub}>{article.subcategory}</h4>
                            </div>
                            {/* Character Illustration */}
                            <CharacterIllustration
                                pageId={article.id}
                                bgColor={article.bgColor}
                            />
                            {/* Article Title */}
                            <h4 style={styles.articleTitle}>
                                {article.title}
                            </h4>
                            {/* Article Excerpt */}
                            <p style={styles.excerpt}>
                                {article.excerpt}
                            </p>
                            {/* Date */}
                            <div style={styles.date}>
                                <Calendar style={styles.dateIcon} />
                                <span>{article.date}</span>
                            </div>
                        </div>
                    );
                })}
                {/* Thêm thẻ rỗng nếu số thẻ không chia hết cho 3 */}
                {Array.from({ length: (3 - (relatedArticles.length % 3)) % 3 }).map((_, i) => (
                    <div key={`empty-${i}`} style={{ background: 'transparent', boxShadow: 'none', border: 'none', pointerEvents: 'none' }}></div>
                ))}
            </div>
        </div>
    );
};

export default RelatedArticles;