function fetchMock(url){
    let returnReponse = Math.random()
    returnReponse = ((returnReponse >= 0.5)? true : false)
    return (returnReponse === true ? 'Success' : 'Error')
}

export async function main(req, res, next){
  // let reponse = await fetchMock('https://example.com')
  let waitingTime
  let n = 1
  while(reponse === 'Error'){
    n++
    waitingTime = 100*(n**(2)) + 100
    // reponse = await fetchMock('https://example.com')
    setTimeout(() => {
    }, waitingTime)
  }
};