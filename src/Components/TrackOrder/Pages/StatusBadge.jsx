const StatusBadge = ({ status }) => {
  const colors = {
    confirmed: "success",
    preparing: "warning",
    assigned: "info",
    onway: "primary",
    delivered: "dark",
  };

  return (
    <span className={`badge bg-${colors[status]}`}>
      {status.toUpperCase()}
    </span>
  );
};

export default StatusBadge;