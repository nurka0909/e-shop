import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdminUsersPage() {
  // Энд дараа нь Firebase-ээс датагаа татаж авна
  const dummyUsers = [
    { id: "1", name: "Бат-Эрдэнэ", email: "bat@gmail.com", date: "2024-02-04" },
    { id: "2", name: "Саруул", email: "saruul@yahoo.com", date: "2024-01-20" },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold tracking-tight">Хэрэглэгчдийн удирдлага</h2>
      
      <Card className="border-slate-200 shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead className="bg-slate-50 border-b border-slate-200 text-xs uppercase text-slate-500 font-bold">
            <tr>
              <th className="px-6 py-4">Хэрэглэгчийн нэр</th>
              <th className="px-6 py-4">Имэйл хаяг</th>
              <th className="px-6 py-4">Бүртгүүлсэн огноо</th>
              <th className="px-6 py-4">Үйлдэл</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-sm">
            {dummyUsers.map((user) => (
              <tr key={user.id} className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4 font-medium text-slate-900">{user.name}</td>
                <td className="px-6 py-4 text-slate-500">{user.email}</td>
                <td className="px-6 py-4 text-slate-500">{user.date}</td>
                <td className="px-6 py-4">
                  <button className="text-red-500 hover:underline font-medium">Устгах</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}