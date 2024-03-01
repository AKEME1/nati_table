import { Filter } from "../../lib/filter";

const BestTime = () => {
  const bestTime = Filter("Best_Time");
  return (
    <table className="border rounded-lg ">
      <thead>
        <tr>
          <th className="py-2 px-4 border-b border-gray-300 font-mono text-3xl">
            Best_Time
          </th>
        </tr>
      </thead>
      <tbody>
        {bestTime.map((bestTimegData, dataIndex) =>
          bestTimegData.best_time.map((value, index) => (
            <tr
              key={`${dataIndex}-${index}`}
              className={index % 2 === 0 ? "bg-gray-100" : ""}
            >
              <td className="py-6 px-8 border-b border-gray-300 flex items-center">
                <span className="font-bold text-2xl">{value.time}</span>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default BestTime;
