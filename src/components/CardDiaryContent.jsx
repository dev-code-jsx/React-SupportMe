
export const CardContentDiary = ({ nombre, fecha, contenido }) => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-2">{nombre}</h2>
      <p className="text-gray-500 text-sm">{fecha}</p>
      <p className="mt-4 text-gray-700">{contenido}</p>
    </div>
  );
};
