declare namespace stations {
    interface Line {
        id: number;
        color: string;
        intl_name: string;
        lineTransfers: number[];
        local_name: string;
    }

    interface Station {
        id: number;
        geo_lat: string;
        geo_lon: string;
        intl_name: string;
        line: number;
        lineTransfers: number[];
        local_name: string;
        stationTransfers: number[];
    }

    interface MetroStations {
        readonly lines: Line[];
        readonly stations: Station[];
    }
}

declare const stations: {
    Beijing: stations.MetroStations;
    Moscow: stations.MetroStations;
    SaintPetersburg: stations.MetroStations;
    Tokyo: stations.MetroStations;
};

export = stations;
