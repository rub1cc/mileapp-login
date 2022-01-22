import dynamic from "next/dynamic";
import React from "react";

const MapWithNoSSR = dynamic(() => import("../src/components/map"), {
    ssr: false,
});

const Home = (): JSX.Element => (
    <div>
        <MapWithNoSSR />
    </div>
);

export default Home;
