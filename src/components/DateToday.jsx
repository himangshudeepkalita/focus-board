const DateToday = () => {
  let today = new Date();

  // let date =
  //   today.getFullYear() + "/" + today.getMonth() + "/" + today.getDay();

  const options = { year: "numeric", month: "short", day: "numeric" };
  const date = today.toLocaleDateString("en-US", options);

  return (
    <div className="date-container">
      <p className="date">{date}</p>
    </div>
  );
};

export default DateToday;
