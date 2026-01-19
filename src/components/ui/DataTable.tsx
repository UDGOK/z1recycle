import { motion } from 'framer-motion';

interface Column {
  key: string;
  header: string;
  width?: string;
}

interface DataTableProps {
  columns: Column[];
  data: Record<string, string | number>[];
  accentColor?: string;
}

export default function DataTable({ columns, data, accentColor = '#00ff88' }: DataTableProps) {
  return (
    <div className="overflow-x-auto">
      <motion.table
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-full border-collapse"
        style={{ boxShadow: `0 0 20px ${accentColor}20` }}
      >
        <thead>
          <tr className="border-b-2" style={{ borderColor: accentColor }}>
            {columns.map((col) => (
              <th
                key={col.key}
                className="text-left font-mono text-xs uppercase tracking-wider py-4 px-4"
                style={{ color: accentColor, width: col.width }}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <motion.tr
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`border-b border-gray-800 hover:bg-white/5 transition-colors ${
                index % 2 === 0 ? 'bg-slate-900/30' : ''
              }`}
            >
              {columns.map((col) => (
                <td key={col.key} className="py-3 px-4 font-mono text-sm text-gray-300">
                  {row[col.key]}
                </td>
              ))}
            </motion.tr>
          ))}
        </tbody>
      </motion.table>
    </div>
  );
}
