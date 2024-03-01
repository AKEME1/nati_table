import { Filter } from "../../lib/filter";

const LastFivePost = () => {
  const lastFive = Filter("Last_Five_Pos");
  return (
    <table className="border rounded-lg">
      <thead>
        <tr>
          <th className="py-2 px-4 border-b border-gray-300">Last Five Pos</th>
        </tr>
      </thead>
      <tbody>
        {lastFive.map((scoreData) =>
          scoreData.score.map((value, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b border-gray-300 flex items-center">
                {Object.values(value).map((value, valueIndex) => (
                  <div
                    key={valueIndex}
                    className={`rounded-full h-10 w-10 flex items-center justify-center bg-gray-100 m-1 ${
                      typeof value === "number" ? "text-black" : "text-gray-400"
                    }`}
                  >
                    {value}
                  </div>
                ))}
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default LastFivePost;
