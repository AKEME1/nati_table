import { Filter } from "../../lib/filter";

const RacingLine = () => {
  const racingLine = Filter("Racing_Line");
  return (
    <table className="border rounded-lg ">
      <thead>
        <tr>
          <th className="py-2 px-4 border-b border-gray-300 font-mono text-3xl">
            RacingLine
          </th>
        </tr>
      </thead>
      <tbody>
        {racingLine.map((racingLinegData, dataIndex) =>
          racingLinegData.range.map((value, index) => (
            <tr
              key={`${dataIndex}-${index}`}
              className={index % 2 === 0 ? "bg-gray-100" : ""}
            >
              <td className="py-6 px-8 border-b border-gray-300 flex items-center">
                <span className="font-bold text-2xl">{value.rangeType}</span>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default RacingLine;
