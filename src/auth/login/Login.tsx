import { useState } from "react";
import { login } from "@/api/authRequest"; // Adjust the import path as necessary

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async () => {
    const data = {
      email,
      password,
    };
    try {
      await login(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form action="">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
