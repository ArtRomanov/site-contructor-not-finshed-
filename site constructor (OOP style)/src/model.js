import image from './assets/image.png';
import { TextBlock, TitleBlock, ColumnsBlock, ImageBlock } from './classes/blocks';

const text = `Крутые видео и уроки по Java Script`;
export const model = [
    new TitleBlock('Конструктор сайтов на чистом Java Script', {
        tag: 'h2',
        styles: {
            background: 'linear-gradient(to right, #ff0099, #493240)',
            color: 'green',
            padding: '1.5rem',
            'text-align': 'center'
        }
    }
    ),

    new TextBlock(text, {
        tag: 'h3',
        styles: {
            background: 'linear-gradient(to left, #f2994a, #f2c94c)',
            padding: '1rem',
            'font-weight': 'bold'
        }
    }
    ),

    new ImageBlock(image, {
        styles: {
            padding: '2rem 0',
            display: 'flex',
            'justify-content': 'center',
        },
        imageStyles: {
            width: '500px',
            height: 'auto'
        },
        alt: 'Это картинка'
    }
    ),

    new ColumnsBlock([
        'Приложение на чистом JS, без использования библиотек',
        'Проба твоего пера прямо здесь и сейчас',
        'JS - огромное простарнство для творчества и креативности'
    ],
    {
        styles: {
            background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
            padding: '2rem',
            color: '#fff',
            'font-weight': 'bold'
        }

    }
    ),


];
