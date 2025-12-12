import { useAppDispatch, useAppSelector } from "@store/hook";
import { GridList, Heading } from "@component/common";
import { Category } from "@component/ecommerce";
import { Container } from "react-bootstrap";
import { useEffect } from "react";
import { actGetCategories } from "@store/categories/categorySlice";
import Loading from "@component/feedback/Loading/Loading";

const Categories = () => {
  const dispatch = useAppDispatch();

  const { loading, error, records } = useAppSelector(
    (state) => state.categories
  );

  useEffect(() => {
    //ngăn chặn việc gọi khi mới tải trang
    if (!records.length) {
      dispatch(actGetCategories());
    }
  }, [dispatch, records]);

  //chuyển qua bên GridList để  REnder props pattern
  // const categoriesList =
  //   records.length > 0
  //     ? records.map((record) => {
  //         return (
  //           <Col
  //             xs={6}
  //             md={3}
  //             key={record.id}
  //             className="d-flex justify-content-center mb-5 mt-2"
  //           >
  //             <Category {...record} />
  //           </Col>
  //         );
  //       })
  //     : "There is no categoty";

  return (
    <Container>
      <Heading>Categories</Heading>
      <Loading status={loading} error={error}>
        <GridList
          records={records}
          renderItem={(record) => <Category {...record} />}
        />
        {/* <Row>{categoriesList}</Row> chuyển qua gridlist luôn */}
      </Loading>
    </Container>
  );
};

export default Categories;
