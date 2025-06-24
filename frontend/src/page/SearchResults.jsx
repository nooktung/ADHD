import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/SearchResults.css';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const query = searchParams.get('q') || '';

  // Dữ liệu tìm kiếm - tất cả nội dung ADHD và Team
  const searchData = [
    // ADHD Introduction
    {
      id: 'adhd-introduction',
      title: 'I. Giới thiệu ADHD',
      type: 'ADHD Content',
      category: 'Kiến thức cơ bản',
      content: `Rối loạn tăng động/giảm chú ý (ADHD) là một loại rối loạn phát triển thần kinh xuất hiện sớm trong thời thơ ấu và ảnh hưởng đến khả năng tập trung, kiểm soát hành vi và điều hòa cảm xúc. ADHD được chia thành ba dạng chính: Dạng Giảm chú ý, Dạng Tăng động/Bốc đồng, và Dạng Hỗn hợp. ADHD ảnh hưởng đến khoảng 5 đến 15% trẻ em trong độ tuổi đi học và có tính gia đình rõ rệt.`,
      keywords: ['ADHD', 'rối loạn', 'tăng động', 'giảm chú ý', 'thần kinh', 'trẻ em', 'gia đình', 'dạng ADHD'],
      link: '/adhd-introduction',
      icon: '📚'
    },
    // ADHD Signs
    {
      id: 'adhd-signs',
      title: 'II. Dấu hiệu và biểu hiện ADHD',
      type: 'ADHD Content',
      category: 'Triệu chứng',
      content: `Các dấu hiệu ADHD bao gồm khó tập trung, dễ phân tâm, hiếu động quá mức, bốc đồng, hay quên, khó tổ chức công việc. Dấu hiệu có thể khác nhau ở trẻ em, người lớn và người lớn tuổi. Ở trẻ em thường biểu hiện qua hành vi hiếu động, ở người lớn có thể là khó tập trung trong công việc.`,
      keywords: ['dấu hiệu', 'triệu chứng', 'tập trung', 'hiếu động', 'bốc đồng', 'quên', 'tổ chức', 'trẻ em', 'người lớn'],
      link: '/adhd-signs2',
      icon: '🩺'
    },
    // ADHD Causes
    {
      id: 'adhd-causes',
      title: 'III. Nguyên nhân và cơ chế não bộ',
      type: 'ADHD Content',
      category: 'Nguyên nhân',
      content: `Nguyên nhân ADHD bao gồm yếu tố di truyền, môi trường, và cấu trúc não bộ. Các nghiên cứu cho thấy ADHD có liên quan đến sự khác biệt trong cấu trúc và chức năng của não, đặc biệt là vùng vỏ não trước trán và hệ thống dopamine. Yếu tố môi trường như tiếp xúc với chì, thuốc lá khi mang thai cũng có thể góp phần.`,
      keywords: ['nguyên nhân', 'di truyền', 'môi trường', 'não bộ', 'dopamine', 'vỏ não', 'thai kỳ', 'chì', 'thuốc lá'],
      link: '/adhd-causes',
      icon: '🧠'
    },
    // ADHD in Life
    {
      id: 'adhd-life',
      title: 'IV. ADHD trong cuộc sống',
      type: 'ADHD Content',
      category: 'Cuộc sống',
      content: `ADHD ảnh hưởng đến nhiều khía cạnh cuộc sống bao gồm học tập, công việc, mối quan hệ và sinh hoạt hàng ngày. Trong học tập có thể gặp khó khăn về tập trung, tổ chức bài vở. Trong công việc có thể ảnh hưởng đến hiệu suất và deadline. Trong mối quan hệ có thể gặp khó khăn về giao tiếp và kiểm soát cảm xúc.`,
      keywords: ['cuộc sống', 'học tập', 'công việc', 'mối quan hệ', 'hiệu suất', 'deadline', 'giao tiếp', 'cảm xúc', 'sinh hoạt'],
      link: '/adhd-in-life',
      icon: '🏠'
    },
    // ADHD vs Anxiety
    {
      id: 'adhd-vs-anxiety',
      title: 'V. So sánh ADHD với rối loạn lo âu',
      type: 'ADHD Content',
      category: 'So sánh',
      content: `ADHD và rối loạn lo âu có một số triệu chứng tương tự nhưng có nguyên nhân và cách điều trị khác nhau. ADHD chủ yếu liên quan đến sự chú ý và kiểm soát hành vi, trong khi lo âu tập trung vào cảm giác sợ hãi và lo lắng quá mức. Cả hai có thể cùng tồn tại và cần được chẩn đoán chính xác để có phương pháp điều trị phù hợp.`,
      keywords: ['lo âu', 'rối loạn lo âu', 'so sánh', 'triệu chứng', 'chẩn đoán', 'điều trị', 'sợ hãi', 'lo lắng', 'chú ý'],
      link: '/adhd-vs-anxiety',
      icon: '⚖️'
    },
    // ADHD Improvement
    {
      id: 'adhd-improvement',
      title: 'VI. Cách cải thiện trong đời sống',
      type: 'ADHD Content',
      category: 'Cải thiện',
      content: `Các phương pháp cải thiện chất lượng cuộc sống với ADHD bao gồm: thiết lập thói quen và lịch trình rõ ràng, sử dụng công cụ hỗ trợ như ứng dụng nhắc nhở, tập thể dục thường xuyên, chế độ ăn uống lành mạnh, kỹ thuật thở và thiền định, tìm kiếm sự hỗ trợ từ chuyên gia và cộng đồng.`,
      keywords: ['cải thiện', 'thói quen', 'lịch trình', 'tập thể dục', 'ăn uống', 'thiền định', 'hỗ trợ', 'chuyên gia', 'cộng đồng'],
      link: '/adhd-improvement',
      icon: '🌟'
    },
    // Team Members
    {
      id: 'team-lan-anh',
      title: 'Mai Thị Lan Anh - Internal Coordinator',
      type: 'Team Member',
      category: 'Digital Marketing',
      content: `Mai Thị Lan Anh là chuyên gia điều phối nội bộ với kinh nghiệm trong lĩnh vực Digital Marketing. Cô có khả năng quản lý và tổ chức các hoạt động nội bộ hiệu quả, đảm bảo mọi thành viên trong nhóm đều có thể phát huy tối đa năng lực của mình. Với tính cách nhiệt tình và trách nhiệm cao, cô luôn là cầu nối tin cậy giữa các bộ phận.`,
      keywords: ['Mai Thị Lan Anh', 'Internal Coordinator', 'Digital Marketing', 'quản lý', 'tổ chức', 'nhiệt tình', 'trách nhiệm'],
      link: '/Team',
      icon: '👩‍💻'
    },
    {
      id: 'team-thanh-hang',
      title: 'Lê Thị Thanh Hằng - Project Leader',
      type: 'Team Member',
      category: 'Digital Marketing',
      content: `Lê Thị Thanh Hằng là một Project Leader kinh nghiệm với khả năng lãnh đạo và quản lý dự án xuất sắc. Cô đã dẫn dắt nhiều dự án thành công từ khâu lên ý tưởng đến triển khai. Với tư duy chiến lược và kỹ năng giao tiếp tốt, cô luôn đảm bảo các dự án được hoàn thành đúng tiến độ và chất lượng.`,
      keywords: ['Lê Thị Thanh Hằng', 'Project Leader', 'lãnh đạo', 'quản lý dự án', 'chiến lược', 'giao tiếp', 'tiến độ'],
      link: '/Team',
      icon: '👩‍💼'
    },
    {
      id: 'team-bich-ngoc',
      title: 'Đỗ Bích Ngọc - Content Strategist',
      type: 'Team Member',
      category: 'Digital Marketing',
      content: `Đỗ Bích Ngọc là một Content Strategist tài năng với khả năng sáng tạo nội dung độc đáo và hấp dẫn. Cô có hiểu biết sâu sắc về hành vi người dùng và xu hướng truyền thông số. Với kinh nghiệm trong việc xây dựng chiến lược nội dung đa nền tảng, cô đã giúp nhiều thương hiệu tiếp cận và tương tác hiệu quả với khách hàng.`,
      keywords: ['Đỗ Bích Ngọc', 'Content Strategist', 'nội dung', 'sáng tạo', 'hành vi người dùng', 'truyền thông số', 'chiến lược'],
      link: '/Team',
      icon: '✍️'
    },
    {
      id: 'team-phuong-thao',
      title: 'Nguyễn Thị Phương Thảo - Designer',
      type: 'Team Member',
      category: 'Digital Marketing',
      content: `Nguyễn Thị Phương Thảo là một Designer sáng tạo với đam mê thiết kế và nghệ thuật thị giác. Cô có khả năng biến những ý tưởng trừu tượng thành các sản phẩm thiết kế cụ thể và ấn tượng. Với kinh nghiệm trong thiết kế đa phương tiện, cô đã tạo ra nhiều tác phẩm được đánh giá cao về tính thẩm mỹ và hiệu quả truyền thông.`,
      keywords: ['Nguyễn Thị Phương Thảo', 'Designer', 'thiết kế', 'nghệ thuật thị giác', 'sáng tạo', 'đa phương tiện', 'thẩm mỹ'],
      link: '/Team',
      icon: '🎨'
    },
    {
      id: 'team-thuy-linh',
      title: 'Nguyễn Thùy Linh - Designer',
      type: 'Team Member',
      category: 'Digital Marketing',
      content: `Nguyễn Thùy Linh là một Designer tài năng với chuyên môn về thiết kế trải nghiệm người dùng và giao diện. Cô có cái nhìn tinh tế về màu sắc, bố cục và typography. Với tinh thần học hỏi không ngừng và khả năng thích ứng nhanh với các xu hướng thiết kế mới, cô luôn tạo ra những sản phẩm thiết kế hiện đại và thu hút.`,
      keywords: ['Nguyễn Thùy Linh', 'Designer', 'UI/UX', 'trải nghiệm người dùng', 'giao diện', 'màu sắc', 'typography', 'hiện đại'],
      link: '/Team',
      icon: '🎨'
    },
    {
      id: 'team-thuy-duyen',
      title: 'Bùi Thị Thúy Duyên - Finance Lead',
      type: 'Team Member',
      category: 'Digital Marketing',
      content: `Bùi Thị Thúy Duyên là Finance Lead với khả năng quản lý tài chính chuyên nghiệp và tỉ mỉ. Cô có kiến thức sâu rộng về kế toán, ngân sách và phân tích tài chính. Với tính cách cẩn thận và có trách nhiệm cao, cô đảm bảo mọi hoạt động tài chính của team được thực hiện minh bạch và hiệu quả.`,
      keywords: ['Bùi Thị Thúy Duyên', 'Finance Lead', 'tài chính', 'kế toán', 'ngân sách', 'phân tích', 'minh bạch', 'hiệu quả'],
      link: '/Team',
      icon: '💰'
    },
    {
      id: 'team-phuong-linh',
      title: 'Vũ Thị Phương Linh - Design',
      type: 'Team Member',
      category: 'Digital Marketing',
      content: `Vũ Thị Phương Linh là Marketing Analyst với khả năng phân tích dữ liệu và insight thị trường xuất sắc. Cô có kinh nghiệm trong việc nghiên cứu hành vi khách hàng, phân tích xu hướng thị trường và đưa ra các khuyến nghị chiến lược marketing hiệu quả. Với tư duy logic và kỹ năng phân tích sắc bén, cô là người đóng góp quan trọng trong việc định hướng các chiến dịch marketing của team.`,
      keywords: ['Vũ Thị Phương Linh', 'Marketing Analyst', 'phân tích dữ liệu', 'insight', 'hành vi khách hàng', 'xu hướng thị trường', 'chiến lược marketing'],
      link: '/Team',
      icon: '📊'
    }
  ];

  // Hàm chuyển đổi tiếng Việt có dấu thành không dấu
  const removeVietnameseAccents = (str) => {
    if (!str) return '';
    
    const vietnameseMap = {
      'à': 'a', 'á': 'a', 'ả': 'a', 'ã': 'a', 'ạ': 'a',
      'ă': 'a', 'ằ': 'a', 'ắ': 'a', 'ẳ': 'a', 'ẵ': 'a', 'ặ': 'a',
      'â': 'a', 'ầ': 'a', 'ấ': 'a', 'ẩ': 'a', 'ẫ': 'a', 'ậ': 'a',
      'đ': 'd',
      'è': 'e', 'é': 'e', 'ẻ': 'e', 'ẽ': 'e', 'ẹ': 'e',
      'ê': 'e', 'ề': 'e', 'ế': 'e', 'ể': 'e', 'ễ': 'e', 'ệ': 'e',
      'ì': 'i', 'í': 'i', 'ỉ': 'i', 'ĩ': 'i', 'ị': 'i',
      'ò': 'o', 'ó': 'o', 'ỏ': 'o', 'õ': 'o', 'ọ': 'o',
      'ô': 'o', 'ồ': 'o', 'ố': 'o', 'ổ': 'o', 'ỗ': 'o', 'ộ': 'o',
      'ơ': 'o', 'ờ': 'o', 'ớ': 'o', 'ở': 'o', 'ỡ': 'o', 'ợ': 'o',
      'ù': 'u', 'ú': 'u', 'ủ': 'u', 'ũ': 'u', 'ụ': 'u',
      'ư': 'u', 'ừ': 'u', 'ứ': 'u', 'ử': 'u', 'ữ': 'u', 'ự': 'u',
      'ỳ': 'y', 'ý': 'y', 'ỷ': 'y', 'ỹ': 'y', 'ỵ': 'y',
      'À': 'A', 'Á': 'A', 'Ả': 'A', 'Ã': 'A', 'Ạ': 'A',
      'Ă': 'A', 'Ằ': 'A', 'Ắ': 'A', 'Ẳ': 'A', 'Ẵ': 'A', 'Ặ': 'A',
      'Â': 'A', 'Ầ': 'A', 'Ấ': 'A', 'Ẩ': 'A', 'Ẫ': 'A', 'Ậ': 'A',
      'Đ': 'D',
      'È': 'E', 'É': 'E', 'Ẻ': 'E', 'Ẽ': 'E', 'Ẹ': 'E',
      'Ê': 'E', 'Ề': 'E', 'Ế': 'E', 'Ể': 'E', 'Ễ': 'E', 'Ệ': 'E',
      'Ì': 'I', 'Í': 'I', 'Ỉ': 'I', 'Ĩ': 'I', 'Ị': 'I',
      'Ò': 'O', 'Ó': 'O', 'Ỏ': 'O', 'Õ': 'O', 'Ọ': 'O',
      'Ô': 'O', 'Ồ': 'O', 'Ố': 'O', 'Ổ': 'O', 'Ỗ': 'O', 'Ộ': 'O',
      'Ơ': 'O', 'Ờ': 'O', 'Ớ': 'O', 'Ở': 'O', 'Ỡ': 'O', 'Ợ': 'O',
      'Ù': 'U', 'Ú': 'U', 'Ủ': 'U', 'Ũ': 'U', 'Ụ': 'U',
      'Ư': 'U', 'Ừ': 'U', 'Ứ': 'U', 'Ử': 'U', 'Ữ': 'U', 'Ự': 'U',
      'Ỳ': 'Y', 'Ý': 'Y', 'Ỷ': 'Y', 'Ỹ': 'Y', 'Ỵ': 'Y'
    };

    return str.split('').map(char => vietnameseMap[char] || char).join('');
  };

  // Hàm tìm kiếm cải thiện với hỗ trợ không dấu
  const performSearch = (searchTerm) => {
    if (!searchTerm.trim()) return [];

    const term = searchTerm.toLowerCase().trim();
    const termWithoutAccents = removeVietnameseAccents(term);
    console.log('Searching for:', term, 'without accents:', termWithoutAccents); // Debug log

    // Test cases để kiểm tra tính năng không dấu
    if (term === 'roi loan' || term === 'rối loạn') {
      console.log('Testing accent removal:', {
        original: 'rối loạn',
        withoutAccents: removeVietnameseAccents('rối loạn'),
        searchTerm: term,
        searchTermWithoutAccents: termWithoutAccents
      });
    }

    const results = searchData.filter(item => {
      // Tạo các phiên bản không dấu của dữ liệu
      const titleWithoutAccents = removeVietnameseAccents(item.title.toLowerCase());
      const contentWithoutAccents = removeVietnameseAccents(item.content.toLowerCase());
      const keywordsWithoutAccents = item.keywords.map(keyword => 
        removeVietnameseAccents(keyword.toLowerCase())
      );

      // Tìm kiếm với dấu
      const titleMatch = item.title.toLowerCase().includes(term);
      const contentMatch = item.content.toLowerCase().includes(term);
      const keywordMatch = item.keywords.some(keyword => 
        keyword.toLowerCase().includes(term)
      );

      // Tìm kiếm không dấu
      const titleMatchNoAccent = titleWithoutAccents.includes(termWithoutAccents);
      const contentMatchNoAccent = contentWithoutAccents.includes(termWithoutAccents);
      const keywordMatchNoAccent = keywordsWithoutAccents.some(keyword => 
        keyword.includes(termWithoutAccents)
      );
      
      const isMatch = titleMatch || contentMatch || keywordMatch || 
                     titleMatchNoAccent || contentMatchNoAccent || keywordMatchNoAccent;
      
      if (isMatch) {
        console.log('Found match:', item.title, {
          titleMatch,
          contentMatch,
          keywordMatch,
          titleMatchNoAccent,
          contentMatchNoAccent,
          keywordMatchNoAccent
        }); // Debug log
      }
      
      return isMatch;
    });

    console.log('Total results found:', results.length); // Debug log
    return results;
  };

  useEffect(() => {
    console.log('Search query changed:', query); // Debug log
    setLoading(true);
    
    // Thêm delay nhỏ để đảm bảo state được cập nhật
    setTimeout(() => {
      const results = performSearch(query);
      setSearchResults(results);
      setLoading(false);
    }, 100);
  }, [query]);

  const highlightText = (text, searchTerm) => {
    if (!searchTerm) return text;
    
    try {
      // Tạo regex cho cả từ có dấu và không dấu
      const termWithoutAccents = removeVietnameseAccents(searchTerm);
      const escapedTerm = searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const escapedTermNoAccent = termWithoutAccents.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      
      // Tạo pattern để match cả hai trường hợp
      const pattern = `(${escapedTerm}|${escapedTermNoAccent})`;
      const regex = new RegExp(pattern, 'gi');
      
      return text.replace(regex, '<mark>$1</mark>');
    } catch (error) {
      console.error('Error highlighting text:', error);
      return text;
    }
  };

  if (loading) {
    return (
      <>
        <Header />
        <div className="search-results-container">
          <div className="search-loading">
            <div className="loading-spinner"></div>
            <p>Đang tìm kiếm...</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      
      <div className="search-results-container">
        <div className="search-results-header">
          <h1>Kết quả tìm kiếm</h1>
          <p>
            Tìm thấy <strong>{searchResults.length}</strong> kết quả cho "{query}"
          </p>
        </div>

        {searchResults.length === 0 ? (
          <div className="no-results">
            <div className="no-results-icon">🔍</div>
            <h2>Không tìm thấy kết quả</h2>
            <p>Không có kết quả nào phù hợp với từ khóa "{query}"</p>
            <div className="search-suggestions">
              <h3>Gợi ý tìm kiếm:</h3>
              <ul>
                <li>Kiểm tra lại chính tả</li>
                <li>Thử từ khóa khác</li>
                <li>Sử dụng từ khóa ngắn hơn</li>
                <li>Tìm kiếm với từ khóa tiếng Việt</li>
                <li>Bạn có thể tìm kiếm không dấu (VD: "roi loan" thay vì "rối loạn")</li>
              </ul>
              <div className="popular-searches">
                <h4>Từ khóa phổ biến:</h4>
                <div className="popular-tags">
                  <span className="keyword-tag" onClick={() => window.location.href = '/search?q=ADHD'}>ADHD</span>
                  <span className="keyword-tag" onClick={() => window.location.href = '/search?q=triệu chứng'}>Triệu chứng</span>
                  <span className="keyword-tag" onClick={() => window.location.href = '/search?q=trieu chung'}>Triệu chứng (không dấu)</span>
                  <span className="keyword-tag" onClick={() => window.location.href = '/search?q=trẻ em'}>Trẻ em</span>
                  <span className="keyword-tag" onClick={() => window.location.href = '/search?q=tre em'}>Trẻ em (không dấu)</span>
                  <span className="keyword-tag" onClick={() => window.location.href = '/search?q=điều trị'}>Điều trị</span>
                  <span className="keyword-tag" onClick={() => window.location.href = '/search?q=dieu tri'}>Điều trị (không dấu)</span>
                  <span className="keyword-tag" onClick={() => window.location.href = '/search?q=roi loan'}>Rối loạn (không dấu)</span>
                  <span className="keyword-tag" onClick={() => window.location.href = '/search?q=Team'}>Team</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="search-results-list">
            {searchResults.map((result, index) => (
              <div key={result.id} className="search-result-item">
                <div className="result-icon">
                  <span>{result.icon}</span>
                </div>
                <div className="result-content">
                  <div className="result-header">
                    <h3>
                      <Link 
                        to={result.link}
                        dangerouslySetInnerHTML={{
                          __html: highlightText(result.title, query)
                        }}
                      />
                    </h3>
                    <div className="result-meta">
                      <span className="result-type">{result.type}</span>
                      <span className="result-category">{result.category}</span>
                    </div>
                  </div>
                  <div 
                    className="result-excerpt"
                    dangerouslySetInnerHTML={{
                      __html: highlightText(result.content.substring(0, 200) + '...', query)
                    }}
                  />
                  <div className="result-keywords">
                    {result.keywords.slice(0, 5).map((keyword, idx) => (
                      <span key={idx} className="keyword-tag">
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default SearchResults; 