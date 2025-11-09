// import type { TCategory } from "@customTypes/category";
import { Col, Row } from "react-bootstrap";

type GridListProps<T> = {
  records: T[];
  renderItem: (record: T) => React.ReactNode;
};

type HasId = { id?: number };

export default function GridList<T extends HasId>({
  records,
  renderItem,
}: GridListProps<T>) {
  const categoriesList =
    records.length > 0
      ? records.map((record) => {
          return (
            <Col
              xs={6}
              md={3}
              key={record.id}
              className="d-flex justify-content-center mb-5 mt-2"
            >
              {renderItem(record)}
            </Col>
          );
        })
      : "There is no categoty";

  return <Row>{categoriesList}</Row>;
}
