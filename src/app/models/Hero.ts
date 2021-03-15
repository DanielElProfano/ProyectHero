
export interface Hero{
    powerstats: Powerstats;

    id : number,
    name: string,
    biography?: Biography,
    appearance?: Appearance,
    image?: Image,
    connections?: Connections,
    work?: Work,
    
}

export interface Biography {

    aliases?: string[];
    fullName?: string,
    alterEgos?: string,
    placeOfBirth?: string,
    firstAppearance?: string,
    publisher?: string,
    alignment?: string,
}

export interface Appearance {
    height?: string[],
    weight?: string[],
    eyeColor?: string 
    hairColor?: string,
    gender?: string,
    race?: string,
}
export interface Image {

    url?: string;

}
export interface Powerstats {
    intelligence?: string,
    strength?: string,
    speed?: string
    durability?: string,
    power?: string,
    combat?: string,

}
export interface Connections {
    groupAffiliation?: string,
    relatives?: string;
}
export interface Work {
    occupation: string,
    base: string,
}