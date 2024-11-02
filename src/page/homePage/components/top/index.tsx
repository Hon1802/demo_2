import React from 'react';
import { Carousel } from 'antd';

const CarouselAnt: React.FC = () => (
  <Carousel autoplay>
    <div>
      <img
        src="https://sakos.vn/wp-content/uploads/2023/12/miss-cosmo-vietnam-2023-pc2.png" // Đường dẫn hình ảnh đầu tiên
        alt="Image 1"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }} // Đảm bảo hình ảnh chiếm 100% chiều rộng và chiều cao
      />
    </div>
    <div>
      <img
        src="https://sakos.vn/wp-content/uploads/2024/08/sakos-hoa-hau-du-lich-1.png" // Đường dẫn hình ảnh thứ hai
        alt="Image 2"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }} // Đảm bảo hình ảnh chiếm 100% chiều rộng và chiều cao
      />
    </div>
    <div>
      <img
        src="https://sakos.vn/wp-content/uploads/2024/06/BST-tui-chong-nuoc-Sakos.jpg" // Đường dẫn hình ảnh thứ ba
        alt="Image 3"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }} // Đảm bảo hình ảnh chiếm 100% chiều rộng và chiều cao
      />
    </div>
    <div>
      <img
        src="https://sakos.vn/wp-content/uploads/2024/11/sakos-shop-quang-tri-pc.png" // Đường dẫn hình ảnh thứ tư
        alt="Image 4"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }} // Đảm bảo hình ảnh chiếm 100% chiều rộng và chiều cao
      />
    </div>
  </Carousel>
);

export default CarouselAnt;
