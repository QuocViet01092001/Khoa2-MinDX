import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  // fooddetails
  foodDetails = [
    {
      id: 1,
      foodName: "Pizza Thập Cẩm Thượng Hạng",
      foodDetails: "Xốt Cà Chua, Phô Mai Mozzarella, Xúc Xích Pepperoni, Xúc Xich Ý, Ớt Chuông Xanh, Nấm Mỡ, Hành Tây",
      foodPrice: 189000,
      foodImg: "https://res.cloudinary.com/derjssgq9/image/upload/v1652263104/pizza/h1_n3myp2.jpg"
    },
    {
      id: 2,
      foodName: "Pizza Hải Sản Xốt Mayonnaise",
      foodDetails: "Xốt Cà Chua, Phô Mai Mozzarella, Tôm, Mực, Thanh Cua, Hành Tây",
      foodPrice: 189000,
      foodImg: "https://res.cloudinary.com/derjssgq9/image/upload/v1652263329/pizza/h2_ch6amk.jpg"
    },
    {
      id: 3,
      foodName: "Pizza Hải Sản Nhiệt Đới Xốt Tiêu",
      foodDetails: "Xốt tiêu đen, Phô Mai Mozzarella, Phô Mai Cheddar, Thơm, Hành Tây, Tôm, Mực",
      foodPrice: 189000,
      foodImg: "https://res.cloudinary.com/derjssgq9/image/upload/v1652263520/pizza/h3_k1ke4g.jpg"
    },
    {
      id: 4,
      foodName: "Pizza Bò & Tôm Nướng Kiểu Mỹ",
      foodDetails: "Xốt Cà Chua, Xốt Phô Mai, Phô Mai Mozzarella, Tôm, Thịt Bò Mexico, Cà Chua, Hành Tây",
      foodPrice: 189000,
      foodImg: "https://res.cloudinary.com/derjssgq9/image/upload/v1652263601/pizza/h4_x22dqu.jpg"
    },
    {
      id: 5,
      foodName: "Pizza Bánh Xèo Nhật",
      foodDetails: "Xốt Mayonnaise, Xốt Teriyaki, Phô Mai Mozzarella, Bạch Tuộc, Tôm, Bột Rong Biển, Vẩy Cá Ngừ Bào",
      foodPrice: 189000,
      foodImg: "https://res.cloudinary.com/derjssgq9/image/upload/v1652263667/pizza/h5_wanzho.jpg"
    },
    {
      id: 6,
      foodName: "Pizza 5 Loại Thịt Thượng Hạng",
      foodDetails: "Xốt Cà Chua, Xúc Xích Pepperoni, Thịt Dăm Bông, Xúc Xich Ý, Thịt Bò Viên, Thịt Heo Muối",
      foodPrice: 189000,
      foodImg: "https://res.cloudinary.com/derjssgq9/image/upload/v1652263853/pizza/h6_e7b92o.jpg"
    }
  ]
}
