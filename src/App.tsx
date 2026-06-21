import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./pages/AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="min-h-screen bg-[#020503]" />}>
        <AppRoutes />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
