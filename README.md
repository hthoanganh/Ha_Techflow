# Trang Web Cá Nhân — Ha Techflow

Chào mừng bạn đến với dự án trang web cá nhân của tôi! Đây không chỉ là nơi giới thiệu thông tin mà còn là một sản phẩm thể hiện niềm đam mê với lập trình front-end, tập trung vào việc tạo ra một trải nghiệm người dùng mượt mà, hiện đại và ấn tượng về mặt thị giác.

**Xem trực tiếp tại:** https://hthoanganh.github.io/Ha_Techflow/

![Ảnh chụp trang web](https://i.imgur.com/g8vJg2G.jpg) 
*Ghi chú: Bạn hãy chụp một tấm ảnh đẹp nhất của trang web và thay thế link trên nhé!*

---

## 📋 Tính Năng & Công Nghệ

Dự án được xây dựng với các tính năng hiện đại, sử dụng các công nghệ web nền tảng.

### 🎨 1. Giao diện & Trải nghiệm người dùng
* **Thiết kế Glassmorphism:** Các khối nội dung có hiệu ứng kính mờ trong suốt, tạo chiều sâu và cảm giác sang trọng bằng thuộc tính `backdrop-filter`.
* **Bố cục Tối ưu:** Layout đơn giản, dễ đọc, tập trung vào nội dung chính. Được sắp xếp linh hoạt bằng **Flexbox**.
* **Tương thích mọi thiết bị (Responsive):** Giao diện tự động co dãn và sắp xếp lại một cách hợp lý trên desktop, tablet và mobile nhờ **Media Queries**.
* **Font chữ hiện đại:** Sử dụng **Google Fonts** (Poppins) để tăng tính thẩm mỹ cho văn bản.

### 💡 2. Hiệu ứng Động & Tương tác
* **Hiệu ứng cuộn (Scroll Reveal):** Các thẻ nội dung sẽ từ từ xuất hiện khi người dùng cuộn trang, được triển khai hiệu quả bằng **`IntersectionObserver` API** và `transition` của CSS.
* **Sticky Header thông minh:** Thanh header sẽ trượt xuống mượt mà khi cuộn trang, được điều khiển bằng sự kiện `scroll` trong JavaScript và `transform: translateY()`.
* **Hiệu ứng chuyển cảnh ảnh:** Khi header xuất hiện, ảnh đại diện lớn sẽ mờ dần, đồng thời ảnh nhỏ trên header hiện ra, tạo một ảo giác chuyển động liền mạch bằng cách thay đổi thuộc tính `opacity`.
* **Hiệu ứng Hover:** Các thẻ `.card`, kỹ năng `.skill-item` và nút bấm đều có hiệu ứng phản hồi khi người dùng di chuột vào (`:hover`), tăng tính tương tác cho giao diện.

### 🌙 3. Chuyển đổi giao diện Light / Dark Mode
* **Chuyển đổi tức thì:** Chỉ với 1 nút bấm, giao diện sẽ thay đổi giữa 2 chế độ ban ngày và ban đêm.
* **Icon động:** Biểu tượng mặt trăng ☾ (`fa-moon`) và mặt trời ☀ (`fa-sun`) sẽ tự động thay đổi theo giao diện hiện tại.
* **Kỹ thuật:** Sử dụng JavaScript để bật/tắt (`toggle`) một class `.dark-mode` trên thẻ `<body>`.

### 🔗 4. Tích hợp & Mở rộng
* **Liên kết mạng xã hội:** Các liên kết được tích hợp icon đồng bộ từ thư viện **Font Awesome 6**, giúp giao diện trông chuyên nghiệp và rõ ràng.
* **Tổ chức code sạch sẽ:** Mã nguồn HTML, CSS, và JavaScript được chia theo từng thư mục riêng biệt, giúp việc bảo trì và mở rộng các tính năng trong tương lai (project, blog...) trở nên dễ dàng. Đây là nền tảng tốt cho một trang Portfolio cá nhân.

###🛠️ 5. Công Cụ Sử Dụng
* **Visual Studio Code: Trình soạn thảo mã nguồn chính được sử dụng để phát triển dự án.
* **Live Server (VS Code Extension): Tiện ích giúp tạo một server phát triển local với khả năng tự động tải lại trang.
* **Browser Developer Tools (F12): Công cụ tích hợp trên trình duyệt (Chrome/Opera) để kiểm tra, gỡ lỗi HTML, CSS và JavaScript.
* **Font Awesome: Thư viện icon được sử dụng để hiển thị các biểu tượng mạng xã hội.

  😎 Dự án này được xây dựng hoàn toàn bằng các công nghệ web nền tảng:
* **HTML5:** Xây dựng cấu trúc và nội dung ngữ nghĩa cho trang web.
* **CSS3:**
    * Sử dụng **Flexbox** để tạo bố cục linh hoạt.
    * **Media Queries** để xây dựng giao diện responsive.
    * Tận dụng các thuộc tính nâng cao như `backdrop-filter`, `transform` và `transition` để tạo hiệu ứng.
* **JavaScript (Vanilla JS):**
    * **DOM Manipulation** để thay đổi nội dung và class.
    * **Event Listeners** để xử lý các tương tác của người dùng như `click` và `scroll`.
    * **Intersection Observer API** để phát hiện khi nào các phần tử xuất hiện trong khung nhìn.
---
## 🚀 Cài đặt & Chạy dự án

1.  **Clone repository:**
    ```bash
    git clone [https://github.com/ten-cua-em/ha-techflow.git](https://github.com/ten-cua-em/ha-techflow.git)
    ```
2.  **Mở thư mục dự án:**
    ```bash
    cd ha-techflow
    ```
3.  **Chạy dự án:**
    * Mở file `index.html` bằng trình duyệt.
    * **Khuyến khích:** Sử dụng tiện ích **Live Server** trong VS Code để có trải nghiệm tốt nhất và tự động tải lại trang.

---

Cảm ơn bạn đã ghé thăm! Mọi ý kiến đóng góp đều rất quý giá.

**Ha Techflow**
