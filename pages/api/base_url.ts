let base_url_api:string;
switch (process.env.NODE_ENV) {
  case 'development':
    base_url_api = 'http://localhost:8000'
    break;
  case 'test':
    base_url_api = 'http://localhost:3000'
    break
  case 'production':
    base_url_api = 'https://www.telkomsel.com'
    break
}

export default base_url_api;