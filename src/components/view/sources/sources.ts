console.log('=======01-01=======')
import './sources.css';
// import { ISources } from './types/index';
export interface ISources {
    category: string;
    country: string;
    description: string;
    id: string;
    language: string;
    name: string;
    url: string;
}
class Sources {
  public draw(data:ISources[]): void {
    console.log('=======draw=======')
        const fragment = document.createDocumentFragment();
            const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement | null;
            if (sourceItemTemp === null) {
              throw new Error('Could not find element.');
          }
        data.forEach((item: ISources) => {
            // console.log(item)
            const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLTemplateElement;
            const sourceItemName = sourceClone.querySelector('.source__item-name') as HTMLTemplateElement | null;
            if (sourceItemName === null) {
              throw new Error('Could not find element.');
            }
            const sourceItemId = sourceClone.querySelector('.source__item') as HTMLTemplateElement | null;
            if (sourceItemId === null) {
              throw new Error('Could not find element.');
            }
            console.log()
            sourceItemName.textContent = item.name
            sourceItemId.setAttribute('data-source-id', item.id);
            // sourceClone.querySelector('.source__item-name').textContent = item.name;
            // sourceClone.querySelector('.source__item').setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        (document.querySelector('.sources') as HTMLTemplateElement).append(fragment);
        // let elemSours = document.querySelector('.sources')
        // console.log(elemSours)
    }
}
console.log('=======01=======')
export default Sources;


// import './sources.css';

// class Sources {
//     draw(data) {
//         const fragment = document.createDocumentFragment();
//         const sourceItemTemp = document.querySelector('#sourceItemTemp');

//         data.forEach((item) => {
//             const sourceClone = sourceItemTemp.content.cloneNode(true);

//             sourceClone.querySelector('.source__item-name').textContent = item.name;
//             sourceClone.querySelector('.source__item').setAttribute('data-source-id', item.id);

//             fragment.append(sourceClone);
//         });

//         document.querySelector('.sources').append(fragment);
//     }
// }

// export default Sources;