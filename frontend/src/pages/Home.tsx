import { useEffect, useState } from "react";

function Home() {
  const [status, setStatus] = useState("Checking...");

  useEffect(() => {
    const checkBackend = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/health"
        );

        const data = await response.json();

        if (data.status === "OK") {
          setStatus("Connected");
        } else {
          setStatus("Disconnected");
        }
      } catch (error) {
        setStatus("Disconnected");
        console.log("Error checking backend status:", error);
      }
    };

    checkBackend();
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <p>Backend Status: {status}</p>
    </div>
  );
}

export default Home;