import { redirect } from "next/navigation";

export default function LoginPage() {
  // Agar environment variable defined hai toh uspar jayega, nahi toh localhost:5173/login par redirect karega
  const loginUrl = process.env.NEXT_PUBLIC_APP_LOGIN_URL || "http://localhost:5173/login";
  
  redirect(loginUrl);
  return null;
}
