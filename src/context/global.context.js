import { createContext, useEffect, useMemo, useState } from "react";
import { initialState } from "../Reducer/api.reducer";
import { useReviewListApi } from "../service/review.service";
import { useSlideApi } from "../service/slides.service";

const GlobalContext = createContext(null);

const GlobalProvider = ({ children }) => {
  const [slides, setSlides] = useState(initialState);
  const [reviewList, setReviewList] = useState(initialState)

  // Slide Service
  useSlideApi().then((res) => {
    setSlides(res);
  });

  // Review List API

  useReviewListApi().then((res)=>{
    setReviewList(res)
  })
  const globalValues = useMemo(
    () => ({
      slides,
      setSlides,
      reviewList
    }),
    [slides, setSlides, reviewList]
  );

  return (
    <GlobalContext.Provider value={globalValues}>
      {children}
    </GlobalContext.Provider>
  );
};
export { GlobalContext, GlobalProvider };
