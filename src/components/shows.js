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
            alt: 'Cover of Avatar movie',
            synopsis: `On the lush alien world of Pandora live the Na'vi, beings who appear primitive but are highly evolved. Because the planet's environment is poisonous, human/Na'vi hybrids, called Avatars, must link to human minds to allow for free movement on Pandora. Jake Sully (Sam Worthington), a paralyzed former Marine, becomes mobile again through one such Avatar and falls in love with a Na'vi woman (Zoe Saldana). As a bond with her grows, he is drawn into a battle for the survival of her world.`
        }, {
            image: captainAmerica,
            title: 'Captain America',
            id: 'captainamerica',
            alt: 'Cover of Captain America movie',
            synopsis: `It is 1941 and the world is in the throes of war. Steve Rogers (Chris Evans) wants to do his part and join America's armed forces, but the military rejects him because of his small stature. Finally, Steve gets his chance when he is accepted into an experimental program that turns him into a supersoldier called Captain America. Joining forces with Bucky Barnes (Sebastian Stan) and Peggy Carter (Hayley Atwell), Captain America leads the fight against the Nazi-backed HYDRA organization.`
        }, {
            image: endgame,
            title: 'Endgame',
            id: 'endgame',
            alt: 'Cover of Endgame movie',
            synopsis: `Adrift in space with no food or water, Tony Stark sends a message to Pepper Potts as his oxygen supply starts to dwindle. Meanwhile, the remaining Avengers -- Thor, Black Widow, Captain America and Bruce Banner -- must figure out a way to bring back their vanquished allies for an epic showdown with Thanos -- the evil demigod who decimated the planet and the universe.`
        }, {
            image: fastandFurios,
            title: 'Fast and Furios',
            id: 'fastandfurios',
            alt: 'Cover of Fast and Furios movie',
            synopsis: `Dominic Toretto (Vin Diesel) enjoys the adrenaline of street car racing and his fans treat him like a rock star. After a blazing encounter with the ruthless Johnny Tran, Dom decides to take Brian (Paul Walker), a newcomer to street racing, under his wing. Dom's sister Mia sees something she likes in Brian, too. Trouble is, neither of them realize he's an undercover cop, and Dominic and his rival Johnny Tran are both the prime suspects in a case involving dirty money and big-rig hijacking.`
        }, {
            image: jackRyan,
            title: 'Jack Ryan',
            id: 'jackryan',
            alt: 'Cover of Jack Ryan movie',
            synopsis: `An up-and-coming CIA analyst, Jack Ryan, is thrust into a dangerous field assignment as he uncovers a pattern in terrorist communication that launches him into the center of a dangerous gambit.`
        }, {
            image: kingsman,
            title: 'Kingsman',
            id: 'kingsman',
            alt: 'Cover of Kingsman movie',
            synopsis: `Gary "Eggsy" Unwin (Taron Egerton), whose late father secretly worked for a spy organization, lives in a South London housing estate and seems headed for a life behind bars. However, dapper agent Harry Hart (Colin Firth) recognizes potential in the youth and recruits him to be a trainee in the secret service. Meanwhile, villainous Richmond Valentine (Samuel L. Jackson) launches a diabolical plan to solve the problem of climate change via a worldwide killing spree.`
        }
    ]
}