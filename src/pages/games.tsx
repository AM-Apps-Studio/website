import Head from 'next/head';
import Image from 'next/image';


type GameEntry = {
    name: string;
    image: string;
    platforms: ('apple'|'android'|'MacOS')[]
}
const games: GameEntry[] = [{
    name: 'JuggleMaster',
}]

export default function Games() {
    
    
    return (
        <>
            <Head>
            
            </Head>
            <main>
                {games.map(({name, image, platforms}) => (
                    <div>
                        <Image />
                        <span>{name}</span>
                    </div>
                ))}
            </main>
        </>
    )
}