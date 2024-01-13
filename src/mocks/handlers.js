import { http, HttpResponse } from "msw";
import slideMock from './../mocks/slide.json';
import reviewMock from './../mocks/review.json'
export const handlers = [
    http.get('/slides', (req, res, ctx)=>{
        console.log('----------------')
        return HttpResponse.json(slideMock)
    }),
    http.get('/review-list', (req, res, ctx)=>{
        return HttpResponse.json(reviewMock)
    }),
  ]