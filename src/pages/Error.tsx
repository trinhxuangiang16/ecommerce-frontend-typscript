import { Container } from "react-bootstrap";
import { Link, useRouteError, isRouteErrorResponse } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  let errorStatus: number;
  let errorStatusText: string;

  //do TS ko biết kiểu dữ liệu của error.status là gì nên sẽ bị lỗi. Nên phải khia báo kiểu dữ liệu cho no
  if (isRouteErrorResponse(error)) {
    errorStatus = error.status;
    errorStatusText = error.statusText;
  } else {
    errorStatus = 404;
    errorStatusText = "Page Not Found";
  }

  return (
    <Container className="notFound">
      <h1>{errorStatus}</h1>
      <p>{errorStatusText}</p>
      <Link to={"/"} replace={true}>
        How about to going back to safety?
      </Link>
    </Container>
  );
}
