console.log('Assignment-1');

// ------- Async Functions ---------

//Got the API endpoints from https://github.com/public-apis/public-apis and https://mixedanalytics.com/blog/list-actually-free-open-no-auth-needed-apis/

async function fetchRandomDetailsAboutCats() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    return data;
  }

async function fetchMyPublicIPAddress() {
    const response = await fetch('https://api.ipify.org/?format=json');
    const data = await response.json();
    return data;
  }
  
async function fetchRandomJokes() {
    const response = await fetch('https://v2.jokeapi.dev/joke/Any?safe-mode');
    const data = await response.json();
    return data;
  }  


randomDetailsOnCats = fetchRandomDetailsAboutCats()
fetchMyPublicIPAddress = fetchMyPublicIPAddress()
fetchRandomJokes = fetchRandomJokes()


randomDetailsOnCats.then(data=>console.log("Random details on cats: ",data))
fetchMyPublicIPAddress.then(data=>console.log("My Public IP: ", data))
fetchRandomJokes.then(data=>console.log("Random Jokes: ",data))

// --------- Generators ---------

async function* fetchRandomDetailsAboutCats_Generator() {
    const response = await fetch('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1');
    yield await response.json();
  }
  
  const RandomDetailsAboutCats_Generator = fetchRandomDetailsAboutCats_Generator();
  
  RandomDetailsAboutCats_Generator.next().then(({ value, done }) => {
    console.log("Generators Random details on cats: ",value);
  });

  async function* fetchMyPublicIPAddress_Generator() {
    const response = await fetch('https://api.ipify.org/?format=json');
    yield await response.json();
  }
  
  const MyPublicIPAddress_Generator = fetchMyPublicIPAddress_Generator();
  
  MyPublicIPAddress_Generator.next().then(({ value, done }) => {
    console.log("Generators My Public IP:: ",value);
  });

  async function* fetchRandomJokes_Generator() {
    const response = await fetch('https://v2.jokeapi.dev/joke/Any?safe-mode');
    yield await response.json();
  }
  
  const RandomJokes_Generator = fetchRandomJokes_Generator();
  
  RandomJokes_Generator.next().then(({ value, done }) => {
    console.log("Generators Random Jokes: ",value);
  });