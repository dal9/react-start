import React, {useContext} from 'react';
import {ListProvider, PageContext} from "./ListProvider";
import Manufacturer from "./Manufacturer";


export default function ManufacturerProvider() {
    return (
        <ListProvider>
            <Manufacturer />
        </ListProvider>
    );
}