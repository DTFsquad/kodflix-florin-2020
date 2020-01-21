import avatar from './cover/images/Avatar.jpeg';
import captainAmerica from './cover/images/CaptainAmerica.jpeg';
import endgame from './cover/images/Endgame.jpeg';
import fastandFurios from './cover/images/FastandFurios.jpeg';
import jackRyan from './cover/images/JackRyan.jpeg';
import kingsman from './cover/images/Kingsman.jpeg';

export default function getGallery() {
    return [{
            image: avatar,
            title: 'Avatar',
            id: 'avatar',
            alt: 'Cover of Avatar movie'
        }, {
            image: captainAmerica,
            title: 'Captain America',
            id: 'captainamerica',
            alt: 'Cover of Captain America movie'
        }, {
            image: endgame,
            title: 'Endgame',
            id: 'endgame',
            alt: 'Cover of Endgame movie'
        }, {
            image: fastandFurios,
            title: 'Fast and Furios',
            id: 'fastandfurios',
            alt: 'Cover of Fast and Furios movie' 
        }, {
            image: jackRyan,
            title: 'Jack Ryan',
            id: 'jackryan',
            alt: 'Cover of Jack Ryan movie'
        }, {
            image: kingsman,
            title: 'Kingsman',
            id: 'kingsman',
            alt: 'Cover of Kingsman movie'
        }
    ]
}