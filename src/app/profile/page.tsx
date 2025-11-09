import Profile from '@/features/profile/components/Profile/Profile';
import ProtectedRoute from '@/shared/components/ProtectedRoute';

export default function ProfilePage() {
  return (
    <ProtectedRoute allowedRoles={['student', 'teacher']}>
      <Profile />
    </ProtectedRoute>
  );
}