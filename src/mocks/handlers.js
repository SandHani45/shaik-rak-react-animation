import { http, HttpResponse } from "msw";
import slideMock from './../mocks/slide.json';
import reviewMock from './../mocks/review.json'

function githubApi(path){
    return `https://sandhani45.github.io/shaik-rak-react-animation/${path}`
}
export const handlers = [
    http.get(githubApi('slides'), (req, res, ctx)=>{
        console.log('----------------')
        return HttpResponse.json(slideMock)
    }),
    http.get(githubApi('review-list'), (req, res, ctx)=>{
        return HttpResponse.json(reviewMock)
    }),
  ]