import img01 from '@icons/contacts/01.png';
import img02 from '@icons/contacts/02.png';
import img03 from '@icons/contacts/03.png';
import img04 from '@icons/contacts/04.png';
import img05 from '@icons/contacts/05.png';
import img06 from '@icons/contacts/06.png';

const contactsConfig = [
    {
        id: 'ct01',
        img: img01,
        title: 'Телефон для связи',
        label: '+7 (932) 328-50-00',
        link: 'tel:+79323285000',
        additionalClassName: 'tel',
    },
    {
        id: 'ct02',
        img: img02,
        title: 'E-mail',
        label: 'ipegorov72@yandex.ru',
        link: 'mailto:ipegorov72@yandex.ru',
        additionalClassName: 'mail',
    },
    {
        id: 'ct03',
        img: img03,
        title: 'Наш паблик',
        label: 'hydrangeas72',
        link: 'https://vk.com/hydrangeas72',
        additionalClassName: 'vk',
    },
    {
        id: 'ct04',
        img: img04,
        title: 'Наш канал',
        label: 'bestflowershere',
        link: 'https://t.me/bestflowershere',
        additionalClassName: 'tg',
    },
    {
        id: 'ct05',
        img: img05,
        title: 'Без выходных',
        label: 'c 9:00 до 18:00',
        additionalClassName: 'clock',
    },
    {
        id: 'ct06',
        img: img06,
        title: 'Тюмень',
        link: 'https://yandex.ru/maps/-/CLTuuKZI',
        label: 'ул. Тимофея Кармацкого 20 Алебашевский Bazar,',
        subtitle: 'Уличный торговый павильон',
        subtext: 'Зелёный город',
        additionalClassName: 'point',
    },
    {
        id: 'ct07',
        img: img06,
        title: 'Адрес производтва',
        link: 'https://2gis.ru/tyumen/geo/1830223003885645/66.560246,56.402914',
        label: 'Тюменская область, Заводоуковский район, п. Мичуринский 14 ',
        subtitle: 'Тепличное хозяйство',
        additionalClassName: 'point',
    },
];
export default contactsConfig;
