import React from "react";

type Props = {};

const PlaceholderSite = (props: Props) => {
  return (
    <main>
      <section className="bg-gradient-to-b from-primary to-black h-screen grid place-items-center">
        <div className="container">
          <h1 className="text-3xl text-center font-akony font-bold text-white">
            Great things coming soon
          </h1>
          <p></p>
        </div>
      </section>
    </main>
  );
};

export default PlaceholderSite;
