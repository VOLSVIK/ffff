import Loader, {GetEndpoint} from './loader';
console.log('=======00-01=======')
class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: GetEndpoint.LoaderApiKey, // получите свой ключ https://newsapi.org/
        });
    }
}
console.log('=======00=======')
export default AppLoader;
