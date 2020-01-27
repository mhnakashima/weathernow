export class Weather{

    public coord? = {
        "lon": "",
        "lat": ""
    }

    public weather? = [];
    public base?: string = "";
    public main: {
        "temp": number,
        "pressure": number,
        "humidity": number,
        "temp_min": number,
        "temp_max": number
    };
    public visibility?: number;
    public wind? : {
        "speed": number,
        "deg": number
    };

    public clouds? : {
        "all": number
    };

    public dt? : string;
    public sys: {
        "type": number,
        "id": number,
        "message": number,
        "country": string,
        "sunrise": number, 
    }

    public id: number;
    public name: string;
    public cod: number;
    public date: Date;
}
