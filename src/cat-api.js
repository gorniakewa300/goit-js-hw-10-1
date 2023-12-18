const URL = 'https://api.thecatapi.com/v1';
const API_KEY =
  'live_9ypIDIhwDZgKLBnB5PBSMs61mx0FqAt4ZFnd8fcUxGpr7ommaWIBfts3AMPVb62g';

export function fetchBreeds() {
  return fetch(`${URL}/breeds?api_key=${API_KEY}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

export function fetchCatByBreed(breedId) {
  return fetch(
    `${URL}/images/search?api_key=${API_KEY}&breed_ids=${breedId}`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}