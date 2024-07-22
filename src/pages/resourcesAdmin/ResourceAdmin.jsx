import { ResourceCard } from '../../components/ResourceCard';
import { getRecursosA } from '../../shared/hooks/getRecursosA';
import { useDeleteResource } from '../../shared/hooks/useDeleteResource';
import { DeleteConfirmationModal } from '../modals/DeleteConfirmationModal';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const ResourceGridA = () => {
  const navigate = useNavigate()
  const { recursos, loading, error } = getRecursosA();
  const { handleDelete } = useDeleteResource();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedResourceId, setSelectedResourceId] = useState(null);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('user');
    if (token) {
      setAuthorized(true);
    } else {
      localStorage.removeItem('user');
      window.location.href = '/unauthorized';
    }
  }, []);

  const openModal = (resourceId) => {
    setSelectedResourceId(resourceId);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedResourceId(null);
    setIsModalOpen(false);
  };

  const confirmDelete = async () => {
    await handleDelete(selectedResourceId);
    closeModal();
    setTimeout(() => {
      window.location.reload();
    }, 2000)
  };

  if (!authorized) {
    return <div>Cargando...</div>;
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-6xl mx-auto">
      {recursos.map((recurso, index) => (
        <div key={index} className="relative">
          <ResourceCard
            key={index}
            titulo={recurso.titulo}
            imagenRecurso={recurso.imagen}
            tipo={recurso.tipo}
            contenido={recurso.contenido}
            resourceType={recurso.tipo}
            _id={recurso._id}
          />
          <div className="absolute top-2 right-2 flex space-x-2">
            <Link
              to={`/principal/admin/resourcesEdit/${recurso._id}`}
              className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-700"
            >
              Editar
            </Link>
            <button
              className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700"
              onClick={() => openModal(recurso._id)}
            >
              Eliminar
            </button>
          </div>
        </div>
      ))}
      <DeleteConfirmationModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onConfirm={confirmDelete}
      />
    </div>
  );
};
