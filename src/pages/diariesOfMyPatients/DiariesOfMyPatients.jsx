import React from "react";
import { useDiariosByPreceptor } from "../../shared/hooks/useDiariosByPreceptor";
import { CardContentDiary } from "../../components/CardDiaryContent";
import { CardDiaryPreceptor } from "../../components/CardDiaryPreceptor";
export const DiariesOfMyPatients = () => {
  const { diarios, loading, error } = useDiariosByPreceptor();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-center mb-8">Patient Journals</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {diarios.map((entry, index) => (
          <CardDiaryPreceptor key={index}>
            <CardContentDiary
              nombre={entry.usuario?.nombre} // Asumiendo que el nombre del usuario está en la propiedad nombre
              fecha={entry.fecha}
              contenido={entry.entradas.map(entrada => entrada.contenido).join(", ")} // Unir contenido de entradas
            />
          </CardDiaryPreceptor>
        ))}
      </div>
    </div>
  );
};