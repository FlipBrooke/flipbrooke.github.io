export default function Media() {
  return (
    <>
      <div className="backgroundBox"></div>
      <div className="everythingBox">
        <div className="contentBox">
          <div className="banner"></div>
          <h1>Media</h1>
          <p style={{ margin: "auto" }}>A little list of media I like!</p>
          <div className="mediaScrollable">
            {/* New Vegas */}
            <div
              className="mediaItem"
              style={{ backgroundImage: "url('/images/newVegas.png')" }}
            >
              <img loading="lazy" src="/images/newVegasLogo.png" />
              <div className="textbox">
                <p>
                  My favorite RPG of all time. New Vegas presents a complex
                  world where every choice has an impact. The eight miles of
                  the Mojave are packed with memorable challenge and
                  environments.
                </p>
              </div>
            </div>

            {/* SS14 */}
            <div
              className="mediaItem"
              style={{ backgroundImage: "url('/images/ss14.png')" }}
            >
              <img loading="lazy" src="/images/ss14Logo.png" />
              <div className="textbox">
                <p>
                  The closest thing I've ever played to a Tabletop RPG's
                  aesthetic, Space Station 14 pioneers the future of roleplaying
                  games by making you work a minimum wage job without pay.
                </p>
              </div>
            </div>

            {/* Stardew Valley */}
            <div
              className="mediaItem"
              style={{ backgroundImage: "url('/images/sdv.png')" }}
            >
              <img loading="lazy" src="/images/sdvLogo.png" />
              <div className="textbox">
                <p>Stardew Valley</p>
              </div>
            </div>

            {/* Minecraft */}
            <div
              className="mediaItem"
              style={{ backgroundImage: "url('/images/minecraft.png')" }}
            >
              <img loading="lazy" src="/images/minecraftLogo.png" />
              <div className="textbox">
                <p>Minecraft</p>
              </div>
            </div>

            {/* Warhammer 40k */}
            <div
              className="mediaItem"
              style={{ backgroundImage: "url('/images/40k.png')" }}
            >
              <img loading="lazy" src="/images/40kLogo.png" />
              <div className="textbox">
                <p>
                  An intersection of art and gaming, Warhammer 40k is an
                  incredibly fleshed out and unique universe! GW's ranges of
                  models are probably the best I've ever seen from a tabletop
                  game!
                </p>
              </div>
            </div>

            {/* Pathfinder 2e */}
            <div
              className="mediaItem"
              style={{ backgroundImage: "url('/images/pf2e.png')" }}
            >
              <img loading="lazy" src="/images/pf2eLogo.png" />
              <div className="textbox">
                <p>
                  Unlike{" "}
                  <a href="https://www.dndbeyond.com/" target="_blank">
                    a certain other TTRPG
                  </a>
                  ,{" "}
                  <a href="https://paizo.com/pathfinder" target="_blank">
                    Pathfinder 2e
                  </a>{" "}
                  allows complete player character customization without
                  mandatory homebrew! Paizo is still adding unique content to
                  their monster of a system!
                </p>
              </div>
            </div>

            {/* Bee and Puppycat */}
            <div
              className="mediaItem"
              style={{ backgroundImage: "url('/images/bapc.png')" }}
            >
              <img loading="lazy" src="/images/bapcLogo.png" />
              <div className="textbox">
                <p>Bee and Puppycat</p>
              </div>
            </div>

            {/* Smiling Friends */}
            <div className="mediaItem" style={{ backgroundColor: "#27252f" }}>
              <img loading="lazy" src="/images/smilingFriendsLogo.png" />
              <div className="textbox">
                <p>Smiling Friends</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
