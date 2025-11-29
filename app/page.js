import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>FlipBrooke.com - Welcome!</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cherry+Bomb+One&family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="backgroundBox"></div>
      <div className="everythingBox">

        <div className="contentBox">
          <div className="banner"></div>
          <div className="thisBox">
            <div className="imageContent">
              <Image src="/images/profilePicture.png" alt="Profile" width={150} height={150} className="pfp" />
              <h1>FlipBrooke</h1>
              <p className="pronouns">PLACEHOLDER TEXT</p>

              <div className="socials filtersvg">
                <a href="https://www.youtube.com/@FlipBrooke">
                  <Image src="/icons/youtube.svg" alt="youtube" width={24} height={24} />
                </a>
                <a href="https://discordapp.com/users/510620048465854485">
                  <Image src="/icons/discord.svg" alt="discord" width={24} height={24} />
                </a>
                <a href="https://www.github.com/flipbrooke">
                  <Image src="/icons/github.svg" alt="github" width={24} height={24} />
                </a>
                <a href="https://bsky.app/profile/flipbrooke.com">
                  <Image src="/icons/bluesky.svg" alt="bluesky" width={24} height={24} />
                </a>
                <a href="https://steamcommunity.com/id/flipbrooke/">
                  <Image src="/icons/steam.svg" alt="steam" width={24} height={24} />
                </a>
              </div>
            </div>

            <div className="textContent">
              <h1>About Me</h1>
              <p>Hello! I'm Brooke, a developer and creator of things on the internet!</p>
              <p>
                Some people don't realize my name's a pun on{' '}
                <a href="https://en.wikipedia.org/wiki/Flip_book" target="_blank" rel="noopener noreferrer">
                  flip book
                </a>
                , an animation medium.
              </p>
              <p>This website is in development! Expect missing or placeholder assets to be used!</p>
              <p>
                Placeholder assets for this page come from{' '}
                <a href="https://youtu.be/dop4MTlf_zc?si=UN1IyStebW-4o47r" target="_blank" rel="noopener noreferrer">
                  Bee and Puppycat
                </a>
                , produced by{' '}
                <a href="https://frederator.com/" target="_blank" rel="noopener noreferrer">
                  Frederator Studios
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}