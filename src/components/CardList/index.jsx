import Card from "../Card";

const CardList = () => {
  return (
    <div className="w-[95%] mx-auto mt-4 grid grid-cols-3 gap-4">
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default CardList;
