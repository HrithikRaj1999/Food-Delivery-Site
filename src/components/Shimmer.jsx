const Shimmer = () => {
    let shimmerCards = []
    for (let i = 0; i < 20; i++) {
        shimmerCards.push(<div key={i} className="shimmer-card res-card m-4 p-4 w-[200px] h-[350px] rounded-lg bg-blue-200 hover:bg-zinc-400"></div>)
    }
  return  <div className="shimmer-container flex flex-wrap">{shimmerCards}</div> 
  

}
export default Shimmer;