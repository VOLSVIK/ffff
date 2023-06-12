console.log('=======05-01=======')
import AppController, {CallbackS} from '../controller/controller';
import { AppView } from '../view/appView';
import { IAppViewSources } from '../view/appView';
let fff 
class App {
    controller:AppController;
    view:AppView;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start(): void {
        console.log('=======star=======');
        // let sourcesElement = document.querySelector('.sources') as HTMLElement
                // console.log(sourcesElement)
        // if (sourcesElement !== null) {
            // console.log(sourcesElement)
            
            (document.querySelector('.sources') as HTMLElement).addEventListener('click', (e) => this.controller.getNews(e, (data) => this.view.drawNews(data)));
            this.controller.getSources((data) => this.view.drawSources(data));    
        // }

    }
}
console.log('=======05=======')
// this.controller.getSources((data): void => { console.log(data); this.view.drawSources(data)});
export default App;

// import AppController from '../controller/controller';
// import { AppView } from '../view/appView';

// class App {
//     constructor() {
//         this.controller = new AppController();
//         this.view = new AppView();
//     }

//     start() {
//         document
//             .querySelector('.sources')
//             .addEventListener('click', (e) => this.controller.getNews(e, (data) => this.view.drawNews(data)));
//         this.controller.getSources((data) => this.view.drawSources(data));
//     }
// }

// export default App;