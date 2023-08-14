const Shimmer = () => {
    let shimmerCards = []
    for (let i = 0; i < 20; i++) {
        shimmerCards.push(<div key={i} className="shimmer-card"></div>)
    }
  return  <div className="shimmer-container">{shimmerCards}</div> 
  

}
export default Shimmer;