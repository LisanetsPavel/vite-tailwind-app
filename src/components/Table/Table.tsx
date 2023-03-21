interface Props {
  rows: Record<string, string | number>[];
  columns: { name: string; field: string }[];
}

export default function Table({ rows, columns }: Props) {
  return (
    <table className="shadow-lg bg-white border-collapse">
      <tr>
        {columns.map((column) => (
          <th className="bg-blue-100 border border-blue-100 text-left px-8 py-4">
            {column.name}
          </th>
        ))}
      </tr>
      {rows.map((row) => (
        <tr className="hover:bg-gray-200 odd:bg-gray-100">
          {columns.map((column) => (
            <td className="border px-8 py-4">{row[column.field]}</td>
          ))}
        </tr>
      ))}
    </table>
  );
}
