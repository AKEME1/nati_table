import { Filter } from "../../lib/filter";

const Gender = () => {
  const gender = Filter("Gender");
  return (
    <table className="border rounded-lg ">
      <thead>
        <tr>
          <th className="py-2 px-4 border-b border-gray-300 font-mono text-3xl">
            Gender
          </th>
        </tr>
      </thead>
      <tbody>
        {gender.map((gendergData, dataIndex) =>
          gendergData.gender_type.map((value, index) => (
            <tr
              key={`${dataIndex}-${index}`}
              className={index % 2 === 0 ? "bg-gray-100" : ""}
            >
              <td className="py-6 px-8 border-b border-gray-300 flex items-center">
                <span className="font-bold text-2xl">{value.type}</span>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default Gender;
