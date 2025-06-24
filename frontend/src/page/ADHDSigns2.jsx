"use client"

import { useState } from "react"
import { Brain, Users, User, UserCheck, Eye, Zap, Clock, AlertTriangle, CheckCircle, Info } from "lucide-react"
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../css/ADHDSigns2.css';

export default function ADHDSigns2() {
  const [activeTab, setActiveTab] = useState("children")

  const childrenInattentiveSymptoms = [
    "Bất cẩn trong các hoạt động",
    "Khó duy trì sự chú ý trong thời gian dài",
    "Có vẻ như không lắng nghe",
    "Không thực hiện theo yêu cầu của giáo viên hoặc cha mẹ",
    "Gặp khó khăn trong việc tổ chức công việc",
    "Tránh né các nhiệm vụ đòi hỏi sự tập trung liên tục",
    "Làm mất các vật dụng cần thiết",
    "Dễ bị phân tâm",
    "Hay quên trong các hoạt động hằng ngày",
  ]

  const childrenHyperactiveSymptoms = [
    "Bồn chồn quá mức hoặc hay cựa quậy",
    "Không thể ngồi yên",
    "Chạy nhảy hoặc leo trèo không phù hợp hoàn cảnh",
    "Không thể tham gia các hoạt động tĩnh lặng",
    "Hành vi như thể 'luôn luôn di chuyển'",
    "Nói quá nhiều",
    "Hành vi bốc đồng (hành động mà không suy nghĩ)",
    "Thường xuyên la lên trong lớp",
    "Khó chờ đến lượt trong các hoạt động nhóm",
    "Thường xuyên làm phiền hoặc ngắt lời người khác",
  ]

  const adultInattentiveSymptoms = [
    "Dễ mất tập trung",
    "Hay quên các cuộc hẹn và nhiệm vụ",
    "Mắc lỗi do bất cẩn trong công việc",
    "Gặp khó khăn khi tổ chức công việc",
    "Thường trì hoãn hoặc né tránh công việc phức tạp",
    "Dễ bị xao nhãng bởi yếu tố bên ngoài",
    "Hay làm mất đồ dùng cá nhân",
    "Thường xuyên thay đổi kế hoạch bất tiện",
  ]

  const adultHyperactiveSymptoms = [
    "Cảm giác bồn chồn nội tâm",
    "Nói nhiều, khó kiểm soát",
    "Thiếu kiên nhẫn",
    "Hay ngắt lời người khác",
    "Hành xử vội vàng không suy xét",
    "Rối loạn cảm xúc, dễ nóng giận",
    "Khó kiềm chế cảm xúc",
    "Quá nhạy cảm với căng thẳng",
  ]

  const elderlySymptoms = [
    "Khó khăn với sự chú ý và trí nhớ",
    "Gặp trở ngại trong việc lập kế hoạch",
    "Khó hoàn thành các dự án dài hạn",
    "Dễ bị xao nhãng khi trò chuyện",
    "Khó duy trì các mối quan hệ",
    "Thách thức quản lý thời gian sau nghỉ hưu",
    "Cảm giác lo âu hoặc tội lỗi",
    "Trì hoãn công việc gia tăng",
  ]

  return (
    <div className="adhd-signs2-page">
      <Header />
      
      <div className="adhd-signs2-container">
        {/* Header Section */}
        <header className="adhd-signs2-header">
          <div className="adhd-signs2-header-overlay"></div>
          <div className="adhd-signs2-header-content">
            <div className="adhd-signs2-header-text">
              <div className="adhd-signs2-header-icon">
                <div className="adhd-signs2-icon-wrapper">
                  <Brain className="adhd-signs2-h-12 adhd-signs2-w-12" />
                </div>
              </div>
              <h1 className="adhd-signs2-title">Dấu hiệu và Biểu hiện ADHD</h1>
              <p className="adhd-signs2-subtitle">
                Hiểu rõ các triệu chứng ADHD qua từng độ tuổi để nhận biết và hỗ trợ kịp thời
              </p>
            </div>
          </div>
          <div className="adhd-signs2-header-bottom"></div>
        </header>

        {/* Main Content */}
        <main className="adhd-signs2-main">
          {/* Introduction */}
          <div className="adhd-signs2-intro">
            <div className="adhd-signs2-alert">
              <Info className="adhd-signs2-h-4 adhd-signs2-w-4" />
              <div className="adhd-signs2-alert-description">
                ADHD có thể biểu hiện khác nhau ở từng độ tuổi. Việc nhận biết đúng các dấu hiệu là bước đầu tiên quan
                trọng trong việc chẩn đoán và điều trị hiệu quả.
              </div>
            </div>
          </div>

          {/* Age Group Tabs */}
          <div className="adhd-signs2-tabs">
            <div className="adhd-signs2-tabs-list">
              <button 
                className={`adhd-signs2-tabs-trigger ${activeTab === "children" ? "active" : ""}`}
                onClick={() => setActiveTab("children")}
              >
                <Users className="adhd-signs2-h-5 adhd-signs2-w-5" />
                Trẻ em
              </button>
              <button 
                className={`adhd-signs2-tabs-trigger ${activeTab === "adults" ? "active" : ""}`}
                onClick={() => setActiveTab("adults")}
              >
                <User className="adhd-signs2-h-5 adhd-signs2-w-5" />
                Người lớn
              </button>
              <button 
                className={`adhd-signs2-tabs-trigger ${activeTab === "elderly" ? "active" : ""}`}
                onClick={() => setActiveTab("elderly")}
              >
                <UserCheck className="adhd-signs2-h-5 adhd-signs2-w-5" />
                Người lớn tuổi
              </button>
            </div>

            {/* Children Content */}
            {activeTab === "children" && (
              <div className="adhd-signs2-tabs-content adhd-signs2-space-y-8">
                <div className="adhd-signs2-section-title">
                  <h2 className="adhd-signs2-section-heading">ADHD ở Trẻ em</h2>
                  <p className="adhd-signs2-section-description">
                    Ở trẻ em, các triệu chứng ADHD có thể rất đa dạng và được chia thành hai nhóm chính: thiếu chú ý và hiếu
                    động.
                  </p>
                </div>

                <div className="adhd-signs2-grid">
                  {/* Inattentive Symptoms */}
                  <div className="adhd-signs2-card adhd-signs2-card-orange adhd-signs2-shadow-lg adhd-signs2-transition-shadow">
                    <div className="adhd-signs2-card-header adhd-signs2-card-header-orange">
                      <h3 className="adhd-signs2-card-title">
                        <Eye className="adhd-signs2-h-6 adhd-signs2-w-6" />
                        Thiếu chú ý
                      </h3>
                    </div>
                    <div className="adhd-signs2-card-content">
                      <div className="adhd-signs2-symptoms-list">
                        {childrenInattentiveSymptoms.map((symptom, index) => (
                          <div
                            key={index}
                            className="adhd-signs2-symptom-item adhd-signs2-symptom-item-orange adhd-signs2-transition-colors"
                          >
                            <CheckCircle className="adhd-signs2-h-5 adhd-signs2-w-5 adhd-signs2-text-orange-500 adhd-signs2-mt-1 adhd-signs2-flex-shrink-0" />
                            <span className="adhd-signs2-symptom-text">{symptom}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Hyperactive Symptoms */}
                  <div className="adhd-signs2-card adhd-signs2-card-green adhd-signs2-shadow-lg adhd-signs2-transition-shadow">
                    <div className="adhd-signs2-card-header adhd-signs2-card-header-green">
                      <h3 className="adhd-signs2-card-title">
                        <Zap className="adhd-signs2-h-6 adhd-signs2-w-6" />
                        Hiếu động
                      </h3>
                    </div>
                    <div className="adhd-signs2-card-content">
                      <div className="adhd-signs2-symptoms-list">
                        {childrenHyperactiveSymptoms.map((symptom, index) => (
                          <div
                            key={index}
                            className="adhd-signs2-symptom-item adhd-signs2-symptom-item-green adhd-signs2-transition-colors"
                          >
                            <CheckCircle className="adhd-signs2-h-5 adhd-signs2-w-5 adhd-signs2-text-green-500 adhd-signs2-mt-1 adhd-signs2-flex-shrink-0" />
                            <span className="adhd-signs2-symptom-text">{symptom}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="adhd-signs2-source-box">
                  <p className="adhd-signs2-source-text">
                    <strong>Nguồn:</strong> Howard E. LeWin (2024)
                  </p>
                </div>
              </div>
            )}

            {/* Adults Content */}
            {activeTab === "adults" && (
              <div className="adhd-signs2-tabs-content adhd-signs2-space-y-8">
                <div className="adhd-signs2-section-title">
                  <h2 className="adhd-signs2-section-heading">ADHD ở Người lớn</h2>
                  <div className="adhd-signs2-warning-box">
                    <div className="adhd-signs2-warning-content">
                      <AlertTriangle className="adhd-signs2-h-6 adhd-signs2-w-6 adhd-signs2-text-yellow-600 adhd-signs2-mt-1 adhd-signs2-flex-shrink-0" />
                      <div className="adhd-signs2-text-left">
                        <p className="adhd-signs2-warning-text">
                          <strong>Tiêu chí chẩn đoán:</strong> ADHD ở người trưởng thành được xác định khi có
                          <span className="adhd-signs2-warning-highlight"> từ 5 triệu chứng trở lên</span> thuộc nhóm thiếu
                          chú ý hoặc tăng động/bốc đồng.
                        </p>
                        <div className="adhd-signs2-criteria-grid">
                          <div className="adhd-signs2-criteria-item">
                            <Clock className="adhd-signs2-h-4 adhd-signs2-w-4 adhd-signs2-text-yellow-600" />
                            <span>Kéo dài ít nhất 6 tháng</span>
                          </div>
                          <div className="adhd-signs2-criteria-item">
                            <Users className="adhd-signs2-h-4 adhd-signs2-w-4 adhd-signs2-text-yellow-600" />
                            <span>Xuất hiện ≥2 môi trường</span>
                          </div>
                          <div className="adhd-signs2-criteria-item">
                            <AlertTriangle className="adhd-signs2-h-4 adhd-signs2-w-4 adhd-signs2-text-yellow-600" />
                            <span>Suy giảm chức năng rõ rệt</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="adhd-signs2-grid">
                  {/* Adult Inattentive */}
                  <div className="adhd-signs2-card adhd-signs2-card-purple adhd-signs2-shadow-lg adhd-signs2-transition-shadow">
                    <div className="adhd-signs2-card-header adhd-signs2-card-header-purple">
                      <h3 className="adhd-signs2-card-title">
                        <Eye className="adhd-signs2-h-6 adhd-signs2-w-6" />
                        Thiếu chú ý
                      </h3>
                    </div>
                    <div className="adhd-signs2-card-content">
                      <div className="adhd-signs2-symptoms-list">
                        {adultInattentiveSymptoms.map((symptom, index) => (
                          <div
                            key={index}
                            className="adhd-signs2-symptom-item adhd-signs2-symptom-item-purple adhd-signs2-transition-colors"
                          >
                            <CheckCircle className="adhd-signs2-h-5 adhd-signs2-w-5 adhd-signs2-text-purple-500 adhd-signs2-mt-1 adhd-signs2-flex-shrink-0" />
                            <span className="adhd-signs2-symptom-text">{symptom}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Adult Hyperactive */}
                  <div className="adhd-signs2-card adhd-signs2-card-pink adhd-signs2-shadow-lg adhd-signs2-transition-shadow">
                    <div className="adhd-signs2-card-header adhd-signs2-card-header-pink">
                      <h3 className="adhd-signs2-card-title">
                        <Zap className="adhd-signs2-h-6 adhd-signs2-w-6" />
                        Tăng động/Bốc đồng
                      </h3>
                    </div>
                    <div className="adhd-signs2-card-content">
                      <div className="adhd-signs2-symptoms-list">
                        {adultHyperactiveSymptoms.map((symptom, index) => (
                          <div
                            key={index}
                            className="adhd-signs2-symptom-item adhd-signs2-symptom-item-pink adhd-signs2-transition-colors"
                          >
                            <CheckCircle className="adhd-signs2-h-5 adhd-signs2-w-5 adhd-signs2-text-pink-500 adhd-signs2-mt-1 adhd-signs2-flex-shrink-0" />
                            <span className="adhd-signs2-symptom-text">{symptom}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="adhd-signs2-impact-box">
                  <h3 className="adhd-signs2-impact-title">Tác động của ADHD ở người lớn</h3>
                  <p className="adhd-signs2-impact-text">
                    Các biểu hiện trên không chỉ ảnh hưởng đến hiệu suất học tập – công việc mà còn làm xáo trộn các mối
                    quan hệ cá nhân và khả năng tự quản lý cuộc sống hàng ngày.
                  </p>
                  <p className="adhd-signs2-impact-source">
                    <strong>Nguồn:</strong> Nora Volkow & James Swanson (2013)
                  </p>
                </div>
              </div>
            )}

            {/* Elderly Content */}
            {activeTab === "elderly" && (
              <div className="adhd-signs2-tabs-content adhd-signs2-space-y-8">
                <div className="adhd-signs2-section-title">
                  <h2 className="adhd-signs2-section-heading">ADHD ở Người lớn tuổi</h2>
                  <p className="adhd-signs2-section-description">
                    Mặc dù chẩn đoán ADHD thường gắn liền với trẻ em, tình trạng này có thể kéo dài suốt thời kỳ trưởng
                    thành và đến cả tuổi già.
                  </p>
                </div>

                <div className="adhd-signs2-grid">
                  <div className="adhd-signs2-card adhd-signs2-card-teal adhd-signs2-shadow-lg adhd-signs2-transition-shadow">
                    <div className="adhd-signs2-card-header adhd-signs2-card-header-teal">
                      <h3 className="adhd-signs2-card-title">
                        <Brain className="adhd-signs2-h-6 adhd-signs2-w-6" />
                        Triệu chứng chính
                      </h3>
                    </div>
                    <div className="adhd-signs2-card-content">
                      <div className="adhd-signs2-symptoms-list">
                        {elderlySymptoms.map((symptom, index) => (
                          <div
                            key={index}
                            className="adhd-signs2-symptom-item adhd-signs2-symptom-item-teal adhd-signs2-transition-colors"
                          >
                            <CheckCircle className="adhd-signs2-h-5 adhd-signs2-w-5 adhd-signs2-text-teal-500 adhd-signs2-mt-1 adhd-signs2-flex-shrink-0" />
                            <span className="adhd-signs2-symptom-text">{symptom}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="adhd-signs2-sidebar">
                    <div className="adhd-signs2-card adhd-signs2-card-amber adhd-signs2-shadow-lg">
                      <div className="adhd-signs2-card-header adhd-signs2-card-header-amber">
                        <h3 className="adhd-signs2-card-title">
                          <AlertTriangle className="adhd-signs2-h-5 adhd-signs2-w-5" />
                          Thách thức sau nghỉ hưu
                        </h3>
                      </div>
                      <div className="adhd-signs2-card-content">
                        <p className="adhd-signs2-text-gray-700 adhd-signs2-mb-4">
                          Khi mất đi cấu trúc thường nhật của công việc, các triệu chứng có thể trở nên trầm trọng hơn,
                          tương tự như khi người trẻ mất đi khuôn khổ của trường học.
                        </p>
                        <div className="adhd-signs2-challenge-box">
                          <p className="adhd-signs2-challenge-text">
                            Người lớn tuổi có thể bắt đầu tái trải nghiệm những thách thức liên quan đến quản lý thời gian
                            và trì hoãn công việc.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="adhd-signs2-card adhd-signs2-card-red adhd-signs2-shadow-lg">
                      <div className="adhd-signs2-card-header adhd-signs2-card-header-red">
                        <h3 className="adhd-signs2-card-title">
                          <AlertTriangle className="adhd-signs2-h-5 adhd-signs2-w-5" />
                          Tác động tâm lý
                        </h3>
                      </div>
                      <div className="adhd-signs2-card-content">
                        <div className="adhd-signs2-space-y-3">
                          <div className="adhd-signs2-psychological-item">
                            <div className="adhd-signs2-dot"></div>
                            <span className="adhd-signs2-text-gray-700">Cảm giác lo âu gia tăng</span>
                          </div>
                          <div className="adhd-signs2-psychological-item">
                            <div className="adhd-signs2-dot"></div>
                            <span className="adhd-signs2-text-gray-700">Cảm giác tội lỗi</span>
                          </div>
                          <div className="adhd-signs2-psychological-item">
                            <div className="adhd-signs2-dot"></div>
                            <span className="adhd-signs2-text-gray-700">Khó khăn trong mối quan hệ</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="adhd-signs2-source-box">
                  <p className="adhd-signs2-source-text">
                    <strong>Nguồn:</strong> Stephanie Collier (2020)
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Key Takeaways */}
          <div className="adhd-signs2-key-takeaways">
            <div className="adhd-signs2-card adhd-signs2-card-indigo adhd-signs2-shadow-xl">
              <div className="adhd-signs2-card-header adhd-signs2-card-header-indigo">
                <h2 className="adhd-signs2-card-title adhd-signs2-text-2xl adhd-signs2-text-center">Điểm quan trọng cần nhớ</h2>
              </div>
              <div className="adhd-signs2-card-content adhd-signs2-p-8">
                <div className="adhd-signs2-takeaways-grid">
                  <div className="adhd-signs2-takeaway-item">
                    <div className="adhd-signs2-icon-circle adhd-signs2-icon-circle-blue">
                      <Eye className="adhd-signs2-h-8 adhd-signs2-w-8 adhd-signs2-text-blue-600" />
                    </div>
                    <h3 className="adhd-signs2-takeaway-title">Nhận biết sớm</h3>
                    <p className="adhd-signs2-takeaway-text">
                      Việc nhận diện đúng các dấu hiệu là bước đầu tiên quan trọng trong việc hỗ trợ và điều trị.
                    </p>
                  </div>
                  <div className="adhd-signs2-takeaway-item">
                    <div className="adhd-signs2-icon-circle adhd-signs2-icon-circle-green">
                      <Users className="adhd-signs2-h-8 adhd-signs2-w-8 adhd-signs2-text-green-600" />
                    </div>
                    <h3 className="adhd-signs2-takeaway-title">Khác biệt theo tuổi</h3>
                    <p className="adhd-signs2-takeaway-text">
                      ADHD biểu hiện khác nhau ở từng độ tuổi, từ rõ ràng ở trẻ em đến kín đáo ở người lớn.
                    </p>
                  </div>
                  <div className="adhd-signs2-takeaway-item">
                    <div className="adhd-signs2-icon-circle adhd-signs2-icon-circle-purple">
                      <Brain className="adhd-signs2-h-8 adhd-signs2-w-8 adhd-signs2-text-purple-600" />
                    </div>
                    <h3 className="adhd-signs2-takeaway-title">Cần hỗ trợ chuyên nghiệp</h3>
                    <p className="adhd-signs2-takeaway-text">
                      Chẩn đoán và điều trị ADHD cần sự can thiệp của các chuyên gia y tế có kinh nghiệm.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      
      <Footer />
    </div>
  )
}
