
export default function Card() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-4 bg-white shadow rounded"
    >
      Contenido animado
    </motion.div>
  );
}
