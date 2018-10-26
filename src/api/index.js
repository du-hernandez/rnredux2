const URL = 'https://api.tvmaze.com/schedule?country=US&date=2018-10-27'
export default ()=>{
    fetch(URL)
    .then(res => Promise.all([res, res.json()]))
}