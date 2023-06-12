console.log('=======News 01=======')
import './news.css';
export interface INews {
    author: Partial<null>
    content: string
    publishedAt: string
    source: {id:  string, name:  string}
    title:  string;
    urlToImage:  string;
    description: string;
    url: string;
}
class News {
    draw(data:INews[]): void {
      console.log('=======News draw 01=======')
        const news: INews[] = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;
        const fragment: DocumentFragment = document.createDocumentFragment();
            const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement | null;
            if (newsItemTemp === null) {
              throw new Error('Could not find element.');
          }
        news.forEach((item:INews, idx:number) => {
          console.log('=======News draw item=======')
            const newsClone: HTMLTemplateElement = newsItemTemp.content.cloneNode(true) as HTMLTemplateElement;
            const newsItemName = newsClone.querySelector('.news__item') as HTMLTemplateElement | null;
            if (newsItemName === null) {
              throw new Error('Could not find element.');
            }
            if (idx % 2) newsItemName.classList.add('alt');
            const newsItemPhoto = newsClone.querySelector('.news__meta-photo') as HTMLTemplateElement | null;
            if (newsItemPhoto === null) {
              throw new Error('Could not find element.');
            }
            newsItemPhoto.style.backgroundImage = `url(${
                item.urlToImage || 'img/news_placeholder.jpg'
            })`;
            const newsItemAuthor = newsClone.querySelector('.news__meta-author') as HTMLTemplateElement | null;
            if (newsItemAuthor === null) {
              throw new Error('Could not find element.');
            }
            newsItemAuthor.textContent = item.author || item.source.name;
            const newsItemDate = newsClone.querySelector('.news__meta-date') as HTMLTemplateElement | null;
            if (newsItemDate === null) {
              throw new Error('Could not find element.');
            }
            console.log('=======News draw item.publishedAt=======')
            console.log(item.publishedAt)
            newsItemDate.textContent = item.publishedAt
                .slice(0, 10)
                .split('-')
                .reverse()
                .join('-');
                console.log(newsItemDate.textContent)
            const newsItemTitle = newsClone.querySelector('.news__description-title') as HTMLTemplateElement | null;
            if (newsItemTitle === null) {
              console.log("=====01======!!!!!!!!===")
              throw new Error('Could not find element.');
            }
            newsItemTitle.textContent = item.title;
            const newsItemSource = newsClone.querySelector('.news__description-source') as HTMLTemplateElement | null;
            if (newsItemSource === null) {
              console.log("=====02======!!!!!!!!===")
              throw new Error('Could not find element.');
            }
            newsItemSource.textContent = item.source.name;
            const newsItemContent = newsClone.querySelector('.news__description-content') as HTMLTemplateElement | null;
            if (newsItemContent === null) {
              console.log("=====03======!!!!!!!!===")
              throw new Error('Could not find element.');
            }
            newsItemContent.textContent = item.description;
            const newsItemMore = newsClone.querySelector('.news__read-more a') as HTMLTemplateElement | null;
        console.log(newsItemMore)
        console.log(item.url)      
            if (newsItemMore === null) {
              console.log("=====04======!!!!!!!!===")
            } else {
              newsItemMore.setAttribute('href', item.url);
         console.log(newsItemMore)
            }


        console.log(item.title, item.source.name)
            fragment.append(newsClone);
        });

        (document.querySelector('.news') as HTMLTemplateElement).innerHTML = '';
        (document.querySelector('.news') as HTMLTemplateElement).appendChild(fragment);
    }
}
console.log('=======News End=======')
export default News;

// import './news.css';

// class News {
//     draw(data) {
//         const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

//         const fragment = document.createDocumentFragment();
//         const newsItemTemp = document.querySelector('#newsItemTemp');

//         news.forEach((item, idx) => {
//             const newsClone = newsItemTemp.content.cloneNode(true);
//             console.log(item)
//             console.log(idx)
//             if (idx % 2) newsClone.querySelector('.news__item').classList.add('alt');

//             newsClone.querySelector('.news__meta-photo').style.backgroundImage = `url(${
//                 item.urlToImage || 'img/news_placeholder.jpg'
//             })`;
//             newsClone.querySelector('.news__meta-author').textContent = item.author || item.source.name;
//             newsClone.querySelector('.news__meta-date').textContent = item.publishedAt
//                 .slice(0, 10)
//                 .split('-')
//                 .reverse()
//                 .join('-');

//             newsClone.querySelector('.news__description-title').textContent = item.title;
//             newsClone.querySelector('.news__description-source').textContent = item.source.name;
//             newsClone.querySelector('.news__description-content').textContent = item.description;
//             newsClone.querySelector('.news__read-more a').setAttribute('href', item.url);

//             fragment.append(newsClone);
//         });

//         document.querySelector('.news').innerHTML = '';
//         document.querySelector('.news').appendChild(fragment);
//     }
// }

// export default News;
