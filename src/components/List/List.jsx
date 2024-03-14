const List = ({ course }) => {
  const { name } = course;
  return (
    <div>
      <p>&nbsp;&nbsp; {name}</p>
    </div>
  );
};

export default List;
