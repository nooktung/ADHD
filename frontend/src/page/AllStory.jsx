import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const stories = [
  {
    id: 1,
    name: "Nguyễn Như Thành Đạt",
    age: 18,
    avatar: "Đ",
    title: "Nguyễn Như Thành Đạt được chẩn đoán ADHD ở tuổi 16 tại Việt Nam",
    content:
      "Tôi thực ra đã được chẩn đoán mắc chứng tự kỷ trong những năm đầu đời trước đây, và bố tôi cũng bị tự kỷ. Người bạn thân nhất của tôi cũng bị ADHD kết hợp. Tôi nghĩ rằng không ai có thể mắc chứng tự kỷ và ADHD cùng lúc nhưng sau đó anh tôi đã được chẩn đoán mắc cả 2 hội chứng này. Tôi đã nghiên cứu về ADHD một thời gian để cố gắng hiểu người bạn thân nhất của mình. Sau đó, tôi nhận ra rằng tôi thực sự liên quan đến hầu hết các hội chứng và tôi tự hỏi 'Khoan đã…mình có bị ADHD không?' Vì vậy tôi đã yêu cầu mẹ đưa tôi đi chẩn đoán trước sinh nhật 17 tuổi của tôi vài tháng. Và thật sự, điều đó đã xảy ra.",
    currentAge: 18,
    country: "Việt Nam",
    diagnosedAt: 16,
    buttonColor: "#ec4899",
    link: "/adhd-story1",
  },
  {
    id: 2,
    name: "Nguyễn Ngọc Hiếu",
    age: 24,
    avatar: "H",
    title: "Nguyễn Ngọc Hiếu được chẩn đoán ADHD ở tuổi 18 tại Việt Nam",
    content:
      "Tôi đã từng là người không thể chú ý trong thời gian quá dài, tôi hay quên hơn những người khác, tôi viết chữ rất xấu và thường không thể ngồi yên, giáo viên chủ nhiệm lớp 3 của tôi đã bảo bố mẹ tôi thử tham khảo ý kiến ​​của một nhà tâm lý học. Tôi đã cố hỏi bố mẹ tôi về chẩn đoán và bố mẹ tôi đã quên mất chẩn đoán đó vì nó đã xảy ra từ rất lâu rồi. Đến thời điểm hiện tại khi tôi đang học đại học, tôi vẫn gặp phải những vấn đề tương tự nên lần này tôi quyết định đi khám bác sĩ tâm thần và vâng, tôi đã nhận được câu trả lời chính xác, đó là ADHD.",
    currentAge: 24,
    country: "Việt Nam",
    diagnosedAt: 18,
    buttonColor: "#0d9488",
    link: "/adhd-story2",
  },
  {
    id: 3,
    name: "Phan Sỹ Hưng",
    age: 31,
    avatar: "H",
    title: "Phan Sỹ Hưng được chẩn đoán ADHD ở tuổi 27 tại Việt Nam",
    content:
      "Tôi cảm thấy như cả cuộc đời mình, tôi đã phải bù đắp cho những điều nhỏ nhặt dường như khiến cuộc sống của tôi và của bất kỳ ai khác trở nên khó khăn hơn. Khi Covid-19 tấn công, tôi đã không nhận ra não mình cần cấu trúc đó đến mức nào. Khi ngồi ở nhà với gia đình và con, tôi nhận thấy (những gì tôi biết bây giờ là các triệu chứng của ADHD/Tự kỷ) mình đã chi bao nhiêu tiền cho những món đồ vô nghĩa, hoặc tôi đã ăn quá nhiều/vô thức như thế nào. Tôi bắt đầu nhận ra rằng tất cả những việc tôi đang làm đều không 'bình thường' vì tôi sẽ thấy gia đình mình không phải vật lộn với những điều tương tự.",
    currentAge: 31,
    country: "Việt Nam",
    diagnosedAt: 27,
    buttonColor: "#ec4899",
    link: "/adhd-story3",
  },
  {
    id: 4,
    name: "Trần Mai Thảo Vy",
    age: 21,
    avatar: "V",
    title: "Trần Mai Thảo Vy được chẩn đoán ADHD ở tuổi 21 tại Việt Nam",
    content:
      "Tôi nghĩ mình đang tiến đến tình trạng kiệt sức vì áp lực công việc. ADHD luôn ở trong tâm trí tôi kể từ khi được một người quản lý mà tôi làm việc cùng nhắc đến cách đây 9 năm. Khi đó, bác sĩ tâm thần của tôi đã bác bỏ điều đó, người đang điều trị chứng trầm cảm cho tôi. Tôi đã nghiên cứu, nhưng vẫn hoài nghi. Cuối cùng, tôi chỉ đặt lịch hẹn vì tôi đang tiến đến tình trạng sụp đổ và cháy rụi.",
    currentAge: 21,
    country: "Việt Nam",
    diagnosedAt: 21,
    buttonColor: "#3b82f6",
    link: "/adhd-story4",
  },
  {
    id: 5,
    name: "Lê Khắc Hải",
    age: 23,
    avatar: "H",
    title: "Lê Khắc Hải được chẩn đoán ADHD ở tuổi 23 tại Việt Nam",
    content:
      "Tôi đã vật lộn với sức khỏe tâm thần của mình trong nhiều năm và mặc dù đã dùng thuốc nhưng nó không giúp ích theo đúng cách. Tôi thấy mình đang dành từng chút năng lượng để cố gắng hoạt động 'bình thường'. Sau khi vật lộn ở trường đại học, tôi quyết định xem liệu có điều gì khác đang xảy ra không và cuối cùng nghĩ rằng đó có thể là ADHD.",
    currentAge: 23,
    country: "Việt Nam",
    diagnosedAt: 23,
    buttonColor: "#22c55e",
    link: "/adhd-story5",
  },
  {
    id: 6,
    name: "Nguyễn Mai Trang",
    age: 30,
    avatar: "T",
    title: "Nguyễn Mai Trang được chẩn đoán ADHD ở tuổi 27 tại Việt Nam",
    content:
      "Tôi luôn để lại các dự án ở trường đến phút cuối (kể cả những môn tôi thích) và đôi khi từ chối làm dự án ở những môn tôi ghét. Tôi không thích bài tập về nhà, tôi liên tục quên những thứ như đồ dùng học tập quan trọng và những cuộc trò chuyện tôi đã có vào ngày hôm trước. Tôi không lắng nghe trong lớp và luôn nhìn chằm chằm ra cửa sổ hoặc vẽ vào vở đã trống.",
    currentAge: 30,
    country: "Việt Nam",
    diagnosedAt: 27,
    buttonColor: "#8b5cf6",
    link: "/adhd-story6",
  },
  {
    id: 7,
    name: "Lương Ngọc Mai",
    age: 22,
    avatar: "M",
    title: "Lương Ngọc Mai được chẩn đoán ADHD ở tuổi 20 tại Việt Nam",
    content:
      "Tôi đang làm luận văn thạc sĩ thì nhận ra mình đã làm liên tục trong 8 tiếng mà không ăn gì. Sau đó, tôi nhận ra rằng trong suốt những năm qua, 'khả năng' tập trung tuyệt vời 'bất ngờ' (hoặc gần đến hạn chót) là lý do duy nhất khiến tôi vượt qua được kỳ thi đại học. Tôi không thể chú ý trong lớp học nên đây là giải pháp duy nhất của tôi. Nhưng tôi biết điều đó không lành mạnh và tôi đã đọc thêm về nó và tìm thấy thuật ngữ 'tập trung cao độ'.",
    currentAge: 22,
    country: "Việt Nam",
    diagnosedAt: 20,
    buttonColor: "#f97316",
    link: "/adhd-story7",
  },
];

const AllStory = () => {
  return (
    <div>
      <Header />
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '2rem 2rem 24px 2rem' }}>
        <div style={{
          background: '#efd6f7',
          borderRadius: 16,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '2.5rem 2.5rem 2.5rem 2rem',
          marginBottom: 40,
          minHeight: 260,
          boxSizing: 'border-box',
          gap: 32,
        }}>
          <div style={{ flex: 1, minWidth: 260 }}>
            <h1 style={{ fontSize: 40, fontWeight: 800, color: '#6d3a5e', marginBottom: 18, lineHeight: 1.1 }}>
              Câu chuyện ADHD từ cộng đồng<br />ADHD-Bản giao hưởng tập trung
            </h1>
            <div style={{ color: '#a05c8c', fontSize: 18, marginBottom: 10, fontWeight: 500 }}>
              Đọc các bài phỏng vấn của chúng tôi với những người được chẩn đoán ADHD muộn. Dù bạn đang chờ chẩn đoán hay vừa nhận kết quả, bạn sẽ thấy mình không đơn độc <span role="img" aria-label="heart">💗</span> !
            </div>
            <div style={{ color: '#a05c8c', fontSize: 16, marginTop: 10 }}>
              Hãy tận hưởng những câu chuyện & mẹo nhỏ đến từ các bạn ADHD ở mọi lứa tuổi và quốc tịch!
            </div>
          </div>
          <div style={{ flex: '0 0 320px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src="/image.png" alt="ADHD Community" style={{ maxWidth: 260, width: '100%', borderRadius: 12, background: 'none' }} />
          </div>
        </div>
        <div id="all-stories-list" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 32,
          justifyItems: 'center',
          maxWidth: 1120,
          margin: '0 auto',
          width: '100%',
        }}>
          {stories.map(story => (
            <div key={story.id} style={{ background: '#f9fafb', borderRadius: 12, boxShadow: '0 2px 8px #0001', padding: 24, width: '100%', maxWidth: 360, minWidth: 0, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ fontSize: 48, fontWeight: 700, background: story.buttonColor, color: '#fff', borderRadius: '50%', width: 64, height: 64, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12 }}>{story.avatar}</div>
              <h2 style={{ fontSize: 20, margin: '8px 0' }}>{story.name}</h2>
              <div style={{ fontWeight: 500, color: '#666', marginBottom: 8 }}>{story.title}</div>
              <div style={{ fontSize: 15, color: '#444', marginBottom: 12, minHeight: 60 }}>{story.content.slice(0, 100)}...</div>
              <div style={{ display: 'flex', gap: 12, marginBottom: 8 }}>
                <span style={{ fontSize: 14 }}>Tuổi: <b>{story.currentAge}</b></span>
                <span style={{ fontSize: 14 }}>Chẩn đoán lúc: <b>{story.diagnosedAt}</b></span>
              </div>
              <span style={{ fontSize: 14, color: '#2563eb', marginBottom: 12 }}>{story.country}</span>
              <Link to={story.link} style={{ background: story.buttonColor, color: '#fff', padding: '8px 20px', borderRadius: 6, fontWeight: 600, textDecoration: 'none', marginTop: 'auto' }}>
                Xem đầy đủ câu chuyện
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AllStory; 