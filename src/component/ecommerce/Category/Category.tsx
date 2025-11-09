import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import type { TCategory } from "@customTypes/category";
const { category, categoryImg, categoryTitle } = styles;

//Nguyên mẫu chổ này là props truyền xuống. thay vì để props không thì ngta destrucring các giá trị ra sẵn như { title, img, prefix } nhưng vẫn phải khia báo dữ liệu. bthuong72 thì dùng interface ngay phía trên. Nhưng có model như TCategory khai báo rồi thì chỉ cần : TCategory là xong. Xuống bên dươi chỉ cần lấy các giá trị trong { title, img, prefix } ra dùng
const Category = ({ title, img, prefix }: TCategory) => {
  return (
    <div className={category}>
      <Link to={`/categories/products/${prefix}`}>
        <div className={categoryImg}>
          <img src={img} alt={title} />
        </div>
        <h4 className={categoryTitle}>{title}</h4>
      </Link>
    </div>
  );
};

export default Category;
