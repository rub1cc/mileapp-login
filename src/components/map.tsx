import { Box } from "@chakra-ui/react";
import React, { Component } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

export default class MyMap extends Component {
    state = {
        markers: [
            [-6.121111, 106.88049],
            [-6.123543, 106.886927],
            [-6.139131, 106.843102],
            [-6.142641, 106.919039],
            [-6.159811, 106.897889],
        ],
    };
    render() {
        return (
            <Box w="100vw" h="100vh">
                <MapContainer
                    center={this.state.markers[0] as any}
                    zoom={13}
                    scrollWheelZoom={false}
                    zoomAnimation={true}
                    style={{ height: "100%", width: "100%" }}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {this.state.markers.map((item: any) => (
                        <Marker position={item}>
                            <Popup>
                                Position: {item[0]},{item[1]}
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </Box>
        );
    }
}
