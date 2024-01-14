import "./App.css";
import { lazy, Suspense, useContext } from "react";
import Loader from "./components/Loader";
import { GlobalContext } from "./context/global.context";

const Slide = lazy(() => import("./components/Slide"));

function App() {
  const { slides, reviewList } = useContext(GlobalContext);
  if (
    slides.error ||
    slides.loading ||
    reviewList.error ||
    reviewList.loading
  ) {
    return <Loader />;
  }
  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <Slide slides={slides.response} reviewList={reviewList.response} />
      </Suspense>
    </div>
  );
}

export default App;
