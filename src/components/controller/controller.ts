console.log('=======04-01=======')
import {GetEndpoint} from './loader';
import AppLoader from './appLoader';
import {IAppView}  from '../view/appView';
import {IAppViewSources}  from '../view/appView';
export type CallbackS = (data?: IAppView) => void;
// type CallbackS = (data?: IAppViewSources) => void;
type Callback = (data?: IAppView) => void;
class AppController extends AppLoader {
    getSources(callback: CallbackS): void {
        console.log('=======getSources=======')
        super.getResp(
            {
                endpoint: "sources"
            },
            callback
        );
    }
    getNews(e: Event, callback: Callback): void {
        console.log('=======getNews=======')
        let target = e.target;
        const newsContainer = e.currentTarget;

        while (target !== newsContainer) {
            // if (target === null) {
            //     throw new Error('Could not find element.');
            // }
            // if (newsContainer === null) {
            //     throw new Error('Could not find element.');
            // }
            if (target instanceof HTMLElement && newsContainer instanceof HTMLElement) {
                
            
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id');
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    if (sourceId === null) {
                        throw new Error('Could not find element.');
                    }
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp(
                        {
                            endpoint: GetEndpoint.News,
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = target.parentNode;
        }
        }
    }
}
console.log('=======04=======')
export default AppController;

// import AppLoader from './appLoader';

// class AppController extends AppLoader {
//     getSources(callback) {
//         super.getResp(
//             {
//                 endpoint: 'sources',
//             },
//             callback
//         );
//     }

//     getNews(e, callback) {
//         let target = e.target;
//         const newsContainer = e.currentTarget;

//         while (target !== newsContainer) {
//             if (target.classList.contains('source__item')) {
//                 const sourceId = target.getAttribute('data-source-id');
//                 if (newsContainer.getAttribute('data-source') !== sourceId) {
//                     newsContainer.setAttribute('data-source', sourceId);
//                     super.getResp(
//                         {
//                             endpoint: 'everything',
//                             options: {
//                                 sources: sourceId,
//                             },
//                         },
//                         callback
//                     );
//                 }
//                 return;
//             }
//             target = target.parentNode;
//         }
//     }
// }

// export default AppController;