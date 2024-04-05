export class Player {
    firstName: string;
    lastName: string;
    skill: number;
    image: string;

    constructor(firstName: string, lastName: string, skill: number, image: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.skill = skill;
        this.image = image;
    }
}

const player1 = new Player("Tori", "Deal", 6, "https://miro.medium.com/v2/resize:fit:800/1*ujqWWuAs8Wf5NXtx1DXQ0g.jpeg");
const player2 = new Player("Derrick", "Kosinkski", 6, "https://miro.medium.com/v2/resize:fit:800/1*Pd2kx0bs2wYPv83VHPyR0A.jpeg");
const player3 = new Player("Jordan", "Wiseley", 8, "https://miro.medium.com/v2/resize:fit:800/1*h1RT5ttHtAIRPaEC_XW7RQ.jpeg");
const player4 = new Player("CT", "Tamburello", 6, "https://miro.medium.com/v2/resize:fit:800/1*qa2a--OElkSiSuRgVCAb6w.jpeg");
const player5 = new Player("Hunter", "Barfield", 6, "https://miro.medium.com/v2/resize:fit:800/1*SUKxRF3oAGGduAO3oI6yBw.jpeg");
const player6 = new Player("Tony", "Raines", 6, "https://miro.medium.com/v2/resize:fit:800/1*E-UoVBAeiL-4pqIHKy-5Ew.jpeg");
const player7 = new Player("Camila", "Nakagawa", 6, "https://static.wikia.nocookie.net/thechallenge9148/images/3/33/CamilaXXX.png/revision/latest?cb=20170617012748");
const player8 = new Player("Cara Maria", "Sorbello", 6, "https://miro.medium.com/v2/resize:fit:1200/1*8mnAnvGlHc3Y1X8Xv1delg.jpeg");
const player9 = new Player("Jenna", "Compono", 6, "https://miro.medium.com/v2/resize:fit:1600/1*fSQGgp1fu9OXvGZk05ulzg.jpeg");
const player10 = new Player("Kailah", "Casillas", 6, "https://miro.medium.com/v2/resize:fit:473/1*i5l8M3pg205GtrEmYdbZrQ.png");

export let arr1: Player[] = [player1, player2, player3, player4, player5, player6, player7, player8, player9, player10];