import Head from "next/head";
import Link from "next/link";

export default function Technical() {
  return (
    <>

      <div className="backgroundBox" />
      <div className="everythingBox">

        <main className="contentBox">
          <div className="banner" />
          <section className="thisBox">
            <article className="imageContent">
              <h1>Technical</h1>
              <p>
                This website is created by me from scratch using Next.js and is
                hosted on{" "}
                <a href="https://pages.github.com/" target="_blank" rel="noopener noreferrer">
                  github pages
                </a>
                .
              </p>

              <p>
                You can view the full source code of this website at{" "}
                <a
                  href="https://github.com/FlipBrooke/flipbrooke.github.io"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  its repository
                </a>
                . Feel free to reference anything i've created for your own projects. Many design
                decisions for this website were made by referencing my friend's personal sites!
              </p>

              <p>
                I make use of{" "}
                <a href="https://www.w3schools.com/" target="_blank" rel="noopener noreferrer">
                  W3Schools
                </a>{" "}
                and{" "}
                <a href="https://stackoverflow.com" target="_blank" rel="noopener noreferrer">
                  Stack Overflow
                </a>{" "}
                to solve web development issues. Code from them may have been used in accordance their author's intended use case.
              </p>
            </article>

            <article className="textContent">
              <h1>Legal</h1>

              <p>
                I retain all rights to this work granted to me under{" "}
                <a
                  href="https://www.copyright.gov/title17/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Title 17 of the U.S.C
                </a>
                .
              </p>

              <p>No part of this website was created by generative artificial intelligence.</p>

              <p>
                Placeholder assets for this page come from{" "}
                <a
                  href="https://youtu.be/dop4MTlf_zc?si=UN1IyStebW-4o47r"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Bee and Puppycat
                </a>
                , produced by{" "}
                <a href="https://frederator.com/" target="_blank" rel="noopener noreferrer">
                  Frederator Studios
                </a>
                .
              </p>

              <p>
                "The Setting Sun" is licensed from{" "}
                <a
                  href="https://vgen.co/bygvlj_ss"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  IUNO Saku.
                  </a>
              </p>

              <p>
                Other copyrighted assets may have been used under {" "}
                <a href="https://www.copyright.gov/fair-use/" target="_blank" rel="noopener noreferrer">
                  Fair Use
                </a>
                .
              </p>

            </article>
          </section>
        </main>
      </div>
    </>
  );
}
