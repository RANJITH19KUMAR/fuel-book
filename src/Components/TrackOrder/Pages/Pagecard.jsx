import { Card } from "react-bootstrap";

const PageCard = ({ children }) => {
  return (
    <Card className="shadow-sm border-0 p-4 rounded-4">
      {children}
    </Card>
  );
};

export default PageCard;