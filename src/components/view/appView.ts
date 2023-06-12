console.log('=======02-01=======')
import News, {INews} from './news/news';
import Sources, {ISources} from './sources/sources';
export interface IAppView {
    sources: ISources[];
    articles: INews[];
}
let ffff;
export interface IAppViewSources {
    sources: ISources[];
}
// let ppp:Partial<IAppViewSources>
export class AppView {
    private sources: Sources
    private news: News
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data:IAppView | undefined): void {
        console.log('=======drawNews=======')
        console.log(data)
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data:IAppView | undefined): void {
        console.log('=======drawSources=======')
        // console.log(data)
        // const values = 
        const values  = data?.sources ? data?.sources : [];
        if (undefined !== values[0]) {
            this.sources.draw(values);
        }
    }
}
console.log('=======02=======')
export default AppView;

// import News from './news/news';
// import Sources from './sources/sources';

// export class AppView {
//     constructor() {
//         this.news = new News();
//         this.sources = new Sources();
//     }

//     drawNews(data) {
//         const values = data?.articles ? data?.articles : [];
//         this.news.draw(values);
//     }

//     drawSources(data) {
//         const values = data?.sources ? data?.sources : [];
//         this.sources.draw(values);
//     }
// }

// export default AppView;