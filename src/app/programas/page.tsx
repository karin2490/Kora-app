import Programas from '@/features/programas/components/index';
import ProtectedRoute from '@/shared/components/ProtectedRoute';

export default function ProgramasPage() {
  return (
    <ProtectedRoute allowedRoles={['student']}>
      <Programas />
    </ProtectedRoute>
  );
}