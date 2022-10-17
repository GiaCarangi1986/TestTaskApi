const PATH = 'https://httpbin.org/'

export const getInfo = async () => {
  const res = await fetch(`${PATH}/get`, {
    method: 'GET',
  })
  return await res.json()
};

export const postInfo = async () => {
  const res = await fetch(`${PATH}/post`, {
    method: 'POST',
  })
  return await res.json()
};

export const deleteInfo = async () => {
  const res = await fetch(`${PATH}/delete`, {
    method: 'DELETE',
  })
  return await res.json()
};

export const imageInfo = async () => {
  const imgs = []

  const arrayPromise = [
    fetch(`${PATH}/image/png`, {
      method: 'GET',
    }),
    fetch(`${PATH}/image/jpeg`, {
      method: 'GET',
    }),
    fetch(`${PATH}/image/webp`, {
      method: 'GET',
    }),
    fetch(`${PATH}/image`, {
      method: 'GET',
    }),
  ]

  const promises = arrayPromise.map(async (res) => {
    const data = await res
    if (data.url) {
      imgs.push(data.url)
    }
  });
  await Promise.all(promises);

  return imgs
};