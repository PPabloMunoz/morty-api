export function fetchPosts(page = 1) {
  return fetch(`https://rickandmortyapi.com/api/character/?page=${page}`).then(
    (res) => res.json()
  )
}

export function fetchSinglePost(id) {
  return fetch(`https://rickandmortyapi.com/api/character/?page=${id}`).then(
    (res) => res.json()
  )
}
