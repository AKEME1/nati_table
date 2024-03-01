import star from "../../assets/star.png";
import { Filter } from "../../lib/filter";

const Rating = () => {
  const rating = Filter("Rating");
  console.log(rating.rate);

  return (
    <table className="border rounded-lg ">
      <thead>
        <tr>
          <th className="py-2 px-4 border-b border-gray-300 font-mono text-3xl">
            Rating
          </th>
        </tr>
      </thead>
      <tbody>
        {rating.map((ratingData, dataIndex) =>
          ratingData.rate.map((value, index) => (
            <tr
              key={`${dataIndex}-${index}`}
              className={index % 2 === 0 ? "bg-gray-100" : ""}
            >
              <td className="py-6 px-8 border-b border-gray-300 flex items-center">
                <div className="size-4">
                  <img className="w-full" src={star} alt="" />
                </div>
                <span className="font-bold text-2xl ml-2">{value.num}</span>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default Rating;
