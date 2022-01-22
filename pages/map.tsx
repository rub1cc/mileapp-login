import dynamic from "next/dynamic";
import React from "react";

const MapWithNoSSR = dynamic(() => import("../src/components/map"), {
    ssr: false,
});

const Home = () => (
    <div>
        <div>
            <MapWithNoSSR />
        </div>
    </div>
);

export default Home;
