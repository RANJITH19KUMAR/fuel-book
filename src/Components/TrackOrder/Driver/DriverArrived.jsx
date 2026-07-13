import PageCard from "/src/Components/TrackOrder/Pages/Pagecard.jsx";
import { Button, Image } from "react-bootstrap";

const DriverArrived = () => {
  return (
    <div className="container py-4">
      <PageCard>
        <h4 className="text-success">Driver Arrived</h4>

        <div className="d-flex align-items-center mt-3">
          <Image
            src="https://via.placeholder.com/80"
            roundedCircle
          />
          <div className="ms-3">
            <h6 className="mb-0">Arun Kumar</h6>
            <small>TN09 AB 1234 • Honda Activa</small>
          </div>
        </div>

        <div className="mt-4 d-flex gap-2">
          <Button variant="primary">Call</Button>
          <Button variant="outline-secondary">Message</Button>
        </div>
      </PageCard>
    </div>
  );
};

export default DriverArrived;