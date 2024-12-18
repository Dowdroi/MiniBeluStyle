import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";

function Main() {
  const { route } = useAuthenticator((context) => [context.route]);

  if (route !== "authenticated") {
    return (
      <div
        className="h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('https://i.imgur.com/yko8Wfq.jpeg')",
        }}
      >
        <div className="bg-white/80 backdrop-blur-lg shadow-lg rounded-lg p-8">
          <div className="flex justify-center mb-4">
            <img
              src="https://i.imgur.com/0xI00uG.png"
              alt="Logo"
              className="h-16 w-16"
            />
          </div>
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
            Welcome to BeluStyle
          </h1>
          <Authenticator />
        </div>
      </div>
    );
  }

  return <App />;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Authenticator.Provider>
      <Main />
    </Authenticator.Provider>
  </StrictMode>
);
