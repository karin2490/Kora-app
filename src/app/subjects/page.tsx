import Subjects from '@/features/subjects/components/index';
import ProtectedRoute from '@/shared/components/ProtectedRoute';

export default function SubjectsPage() {
  return (
    <ProtectedRoute allowedRoles={['student']}>
      <Subjects />
    </ProtectedRoute>
  );
}