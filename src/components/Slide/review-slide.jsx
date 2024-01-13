const ReviewSlide = ({
    reviewHeader, reviewList, reviewComment, onReviewSubmit
}) => {

    const renderList =() => {
        return reviewList.map((item)=>(
            <div className='review-list'>
              <div className='review-list-content'>
                  <h3> {item.title} </h3>
                  <p>{item.subTitle}</p>
              </div>
              <div className='review-list-icon'>
                  <spen>{item.isLike ? "👎" : "👍"}</spen>
              </div>
          </div>
        ))
    }
    return (
        <div className='review-container'>
        <h2 className='review-header'>{reviewHeader}</h2>
        {renderList()}
        <div className='review-list-last'>
            <div className='review-list-content'>
                <h3> {reviewComment.title} </h3>
            </div>
            <div className='review-list-icon'>
                <spen>{reviewComment.icon}</spen>
            </div>
        </div>
        <div className='review-submit' >
            <button onClick={onReviewSubmit}>Submit</button>
        </div>
    </div>
    )
}
export {ReviewSlide}