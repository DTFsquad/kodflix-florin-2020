import avatar from './gallery/cover/images/Avatar.jpeg';
import captainAmerica from './gallery/cover/images/CaptainAmerica.jpeg';
import endgame from './gallery/cover/images/Endgame.jpeg';
import fastandFurios from './gallery/cover/images/FastandFurios.jpeg';
import jackRyan from './gallery/cover/images/JackRyan.jpeg';
import kingsman from './gallery/cover/images/Kingsman.jpeg';

export default function getShows() {
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