export async function getAllPostsFromAPI ({ url } = {}) {
  const apiURL = `${url}/wp-json/wp/v2/posts/?per_page=100`
  let allPosts = []

  let response = await fetch(apiURL)

  if (response.ok) {
    let posts = await response.json()
    allPosts = [...allPosts, ...Array.from(posts)]

    // si hay más páginas de resultados, iteramos hasta obtenerlos todos
    while (response.headers.has('x-wp-totalpages')) {
      const totalPages = response.headers.get('x-wp-totalpages')

      // si ya hemos obtenido todas las páginas, salimos del bucle
      if (totalPages <= allPosts.length / 100) {
        break
      }

      // hacemos la siguiente solicitud a la siguiente página
      const page = allPosts.length / 100 + 1
      response = await fetch(apiURL + `&page=${page}`)
      posts = await response.json()
      allPosts = [...allPosts, ...Array.from(posts)]
    }

    return allPosts
  } else {
    throw new Error(`Failed to fetch posts from API: ${response.status} ${response.statusText}`)
  }
}

export async function getPostContentFromAPI (url, slug) {
  const apiURL = `${url}/wp-json/wp/v2/posts?slug=${slug}`
  const response = await fetch(apiURL)

  if (response.ok) {
    const [post] = await response.json()
    return post
  } else {
    throw new Error(`Failed to fetch post content from API: ${response.status} ${response.statusText}`)
  }
}

// Get the last 3 posts from WordPress
export async function getLatestPostsFromAPI (url, qty = 3) {
  const apiURL = `${url}/wp-json/wp/v2/posts/?per_page=${qty}`
  const response = await fetch(apiURL)

  if (response.ok) {
    const posts = await response.json()
    return posts
  } else {
    throw new Error(`Failed to fetch posts from API: ${response.status} ${response.statusText}`)
  }
}

// Get posts from WordPress using navigation

export async function getPostsFromAPI (url, qty = 12, page = 1) {
  const apiURL = `${url}/wp-json/wp/v2/posts/?per_page=${qty}&page=${page}`
  const response = await fetch(apiURL)

  if (response.ok) {
    const posts = await response.json()
    // get the total number of pages from the response headers
    const totalPages = response.headers.get('x-wp-totalpages')
    const totalPosts = response.headers.get('x-wp-total')
    return { posts, totalPages, totalPosts }
  } else {
    throw new Error(`Failed to fetch posts from API: ${response.status} ${response.statusText}`)
  }
}

// Get posts from WordPress using search query

export async function getPostsFromSearchAPI (url, qty = 12, page = 1, query) {
  const apiURL = `${url}/wp-json/wp/v2/posts/?per_page=${qty}&page=${page}&search=${query}`
  const response = await fetch(apiURL)

  if (response.ok) {
    const posts = await response.json()
    // get the total number of pages from the response headers
    const totalPages = response.headers.get('x-wp-totalpages')
    const totalPosts = response.headers.get('x-wp-total')
    return { posts, totalPages, totalPosts }
  } else {
    throw new Error(`Failed to fetch posts from API: ${response.status} ${response.statusText}`)
  }
}
