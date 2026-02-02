import Programs from '@/features/programs/components/index';
import ProtectedRoute from '@/shared/components/ProtectedRoute';

export default function ProgramsPage() {
  return (
    <ProtectedRoute allowedRoles={['student']}>
      <Programs />
    </ProtectedRoute>
  );
}