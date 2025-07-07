# Trang Web Cá Nhân — Ha Techflow

Chào mừng bạn đến với dự án trang web cá nhân của tôi! Đây không chỉ là nơi giới thiệu thông tin mà còn là một sản phẩm thể hiện niềm đam mê với lập trình front-end, tập trung vào việc tạo ra một trải nghiệm người dùng mượt mà, hiện đại và ấn tượng về mặt thị giác.

## 🌐 Xem trực tiếp online (GitHub Pages): https://hthoanganh.github.io/Ha_Techflow/

**Demo**![Screenshot 2025-07-07 225914](https://github.com/user-attachments/assets/3daa4c71-d724-4c27-95e1-2919e7e361b0)
![Screenshot 2025-07-07 225932](https://github.com/user-attachments/assets/74f661bd-4237-4904-8e75-7b3d20fbba98)
![Screenshot 2025-07-07 225943](https://github.com/user-attachments/assets/a219d731-200c-433f-ac4f-1f4fd6635666)

Dark-mode
![Screenshot 2025-07-07 230010](https://github.com/user-attachments/assets/8feae25b-8914-4de2-bf8a-77965c9b261d)
![Screenshot 2025-07-07 230035](https://github.com/user-attachments/assets/9618820c-5d62-4292-8b10-63d0aba647d0)

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

1. **Clone repository về máy:**
    ```bash
    git clone https://github.com/hthoanganh/Ha_Techflow.git
    ```

2. **Mở thư mục dự án:**
    ```bash
    cd Ha_Techflow
    ```

3. **Chạy dự án:**
    - Mở file `index.html` bằng trình duyệt
    - ✅ Khuyến khích dùng tiện ích **Live Server** trong VS Code để:
        - Xem web trực tiếp khi sửa
        - Tự động reload sau khi `Ctrl + S`
---

## 🧑‍💻 Tác giả

- 💼 Tên: **Hoàng Anh**
- 📬 Email: htha4067@gmail.com

---

## 📜 Giấy phép

MIT License - Dùng tự do cho mục đích cá nhân và học tập.

---

Cảm ơn bạn đã ghé thăm! Mọi ý kiến đóng góp đều rất quý giá.

**Ha Techflow**
