import Materias from '@/features/materias/components/index';
import ProtectedRoute from '@/shared/components/ProtectedRoute';

export default function MateriasPage() {
  return (
    <ProtectedRoute allowedRoles={['student']}>
      <Materias />
    </ProtectedRoute>
  );
}