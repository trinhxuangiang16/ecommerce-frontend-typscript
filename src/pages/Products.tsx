import { Product } from "@component/ecommerce";
import { useAppDispatch, useAppSelector } from "@store/hook";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import {
  actGetProductsByCatPrefix,
  productCleanUp,
} from "@store/products/productsSlice";
import Loading from "@component/feedback/Loading/Loading";
import { GridList, Heading } from "@component/common";
import { useEffect } from "react";

const Products = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const { loading, error, records } = useAppSelector((state) => state.products);
  const cartItem = useAppSelector((state) => state.cart.items);

  const productsFullInfo = records.map((el) => ({
    ...el,
    quantity: cartItem[el.id] || 0,
  }));

  useEffect(() => {
    // //Do dữ iệu lấy trên web về TS không chắc nó là string nên sẽ báo lỗi. Mình cần chuyển dữ liệu về string
    // let prefix: string;
    // if (params.prefix && typeof params.prefix === "string") {
    //   prefix = params.prefix;
    //   //nhớ kiểm tra bên action act của nó có khai báo dữ liệu chổ ayload chưa nha
    //   dispatch(actGetProductsByCatPrefix(prefix));
    // }
    //ép kiểu được. Nhưng bên khai báo act bên khia chổ pay load phải khai báo prefix: string
    dispatch(actGetProductsByCatPrefix(params.prefix as string));

    return () => {
      dispatch(productCleanUp());
    };
  }, [dispatch, params]);

  // const productsList =
  //   records.length > 0
  //     ? records.map((record) => {
  //         return (
  //           <Col
  //             xs={6}
  //             md={3}
  //             key={record.id}
  //             className="d-flex justify-content-center mb-5 mt-2"
  //           >
  //             <Product {...record} />
  //           </Col>
  //         );
  //       })
  //     : "There is no categoty";

  return (
    <Container>
      <Heading>
        <span className="text-capitalize">{params.prefix}</span> Products
      </Heading>
      <Loading status={loading} error={error}>
        <GridList
          records={productsFullInfo}
          renderItem={(record) => <Product {...record} />}
        />
      </Loading>
    </Container>
  );
};

export default Products;
