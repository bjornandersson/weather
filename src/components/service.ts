interface IWeather {
    cod?: string;
    wind: object;
}

export const Service =  {
    appkey: 'f737d4a1f0145e22fa816f1d287aa70e',

    async getWeather(city?: string ): Promise<IWeather> {
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.appkey}&units=metric`;
        const result = await fetch(url);
        return result.json();
    },
};
