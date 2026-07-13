const steps = [
  "Order Confirmed",
  "Preparing Fuel",
  "Driver Assigned",
  "On the Way",
  "Delivered",
];

const Timeline = ({ currentStep }) => {
  return (
    <div className="timeline">
      {steps.map((step, index) => (
        <div key={index} className="d-flex align-items-center mb-3">
          <div
            className={`circle ${
              index <= currentStep ? "bg-success" : "bg-light"
            }`}
          />
          <span className="ms-3">{step}</span>
        </div>
      ))}
    </div>
  );
};

export default Timeline;