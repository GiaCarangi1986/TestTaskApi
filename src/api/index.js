export const getInfo = async (path) => {
  const res = await fetch(path, {
    method: 'GET',
  })

  return await res.json()
};

export const postInfo = async (path) => {
  const res = await fetch(path, {
    method: 'POST',
  })

  return await res.json()
};

export const deleteInfo = async (path) => {
  const res = await fetch(path, {
    method: 'DELETE',
  })

  return await res.json()
};

export const imageInfo = async (path) => {
  const imgs = []

  const arrayPromise = path.map(path => fetch(path, {
    method: 'GET',
  }))

  const promises = arrayPromise.map(async (res) => {
    const data = await res
    if (data.url) {
      imgs.push(data.url)
    }
  });
  await Promise.all(promises);

  return imgs
};