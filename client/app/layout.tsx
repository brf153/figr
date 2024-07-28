import "./globals.css";
import { AuthProvider } from "./context/AuthContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <AuthProvider>
        <body className={`min-h-screen flex flex-col antialiased`}>
          {children}
        </body>
        </AuthProvider>
    </html>
  );
}




// pages/dashboard.tsx
// import ProtectedRoute from '../components/ProtectedRoute';
// import { useAuth } from '../context/AuthContext';

// const Dashboard = () => {
//   const { logout } = useAuth();

//   return (
//     <ProtectedRoute>
//       <h1>Dashboard</h1>
//       <p>Welcome to your dashboard!</p>
//       <button onClick={logout}>Logout</button>
//     </ProtectedRoute>
//   );
// };

// export default Dashboard;