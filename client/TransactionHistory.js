async function getSent(id) {
  const {data} = await axios.get(`/api/campuses/${id}`)
}
